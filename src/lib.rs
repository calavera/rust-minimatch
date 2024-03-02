use std::{env, rc::Rc};

use deno_core::{
    anyhow::Error,
    op2, resolve_path, serde_v8,
    v8::{self, Global, Local},
    Extension, FsModuleLoader, JsRuntime, Op, PollEventLoopOptions, RuntimeOptions,
};

#[derive(Default)]
pub struct FunctionsState {
    pub minimatch_func: Option<v8::Global<v8::Function>>,
}

#[op2]
pub fn op_register_func(
    #[state] function_state: &mut FunctionsState,
    #[global] f: v8::Global<v8::Function>,
) {
    function_state.minimatch_func.replace(f);
}

#[derive(serde::Serialize)]
struct Request<'a> {
    literal: &'a str,
    expr: &'a str,
}

pub struct Runtime {
    inner: JsRuntime,
}

impl Runtime {
    pub async fn init() -> Result<Runtime, Error> {
        let main_module = resolve_path(
            "./minimatch.js",
            env::current_dir().unwrap().join("src").as_path(),
        )?;

        let ext = Extension {
            name: "minimatch",
            ops: std::borrow::Cow::Borrowed(&[op_register_func::DECL]),
            op_state_fn: Some(Box::new(|state| {
                state.put(FunctionsState::default());
            })),
            ..Default::default()
        };

        let mut runtime = JsRuntime::new(RuntimeOptions {
            module_loader: Some(Rc::new(FsModuleLoader)),
            extensions: vec![ext],
            ..Default::default()
        });

        let mod_id = runtime.load_main_module(&main_module, None).await?;
        let result = runtime.mod_evaluate(mod_id);

        runtime
            .run_event_loop(PollEventLoopOptions::default())
            .await?;

        result.await?;

        Ok(Runtime { inner: runtime })
    }

    pub async fn is_match(&mut self, literal: &str, expr: &str) -> Result<bool, Error> {
        let state: FunctionsState = self.inner.op_state().borrow_mut().take();

        // SAFETY: Function registered in the JS module calling `Deno.core.ops.op_register_func(match_with_minimatch);`.
        let function = state.minimatch_func.unwrap();

        let request = {
            let mut scope = self.inner.handle_scope();
            let request = Request { literal, expr };
            let request = serde_v8::to_v8(&mut scope, &request)?;

            Global::new(&mut scope, request)
        };

        let call = self.inner.call_with_args(&function, &[request]);

        let value = self
            .inner
            .with_event_loop_promise(call, PollEventLoopOptions::default())
            .await?;

        let result: bool = {
            let mut scope = self.inner.handle_scope();
            let local = Local::new(&mut scope, value);
            serde_v8::from_v8(&mut scope, local)?
        };

        Ok(result)
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[tokio::test]
    async fn it_works() {
        let mut runtime = Runtime::init().await.unwrap();
        let value = runtime.is_match("foo.bar", "*.+(bar|foo)").await.unwrap();
        assert!(value, "expected match to return `true`");
    }
}
