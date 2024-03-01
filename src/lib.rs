use js_sandbox::{Script, AnyError};

pub fn minimatch(literal: &str, expr: &str) -> Result<bool, AnyError> {
    let code: &'static str = include_str!("minimatch.js");
    let mut script = Script::from_string(code).expect("init succeeds");

    let result:bool = script.call("match_with_minimatch", (literal, expr))?;
    Ok(result)
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        let result = minimatch("foo.bar", "*.+(bar|foo)").unwrap();
        assert!(result);
    }
}
