// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

var n = e;
function e(n, e, a) {
    n instanceof RegExp && (n = r(n, a)), e instanceof RegExp && (e = r(e, a));
    var i = t(n, e, a);
    return i && {
        start: i[0],
        end: i[1],
        pre: a.slice(0, i[0]),
        body: a.slice(i[0] + n.length, i[1]),
        post: a.slice(i[1] + e.length)
    };
}
function r(n, e) {
    var r = e.match(n);
    return r ? r[0] : null;
}
function t(n, e, r) {
    var t, a, i, f, l, o = r.indexOf(n), g = r.indexOf(e, o + 1), p = o;
    if (o >= 0 && g > 0) {
        if (n === e) return [
            o,
            g
        ];
        for(t = [], i = r.length; p >= 0 && !l;)p == o ? (t.push(p), o = r.indexOf(n, p + 1)) : 1 == t.length ? l = [
            t.pop(),
            g
        ] : ((a = t.pop()) < i && (i = a, f = g), g = r.indexOf(e, p + 1)), p = o < g && o >= 0 ? o : g;
        t.length && (l = [
            i,
            f
        ]);
    }
    return l;
}
e.range = t;
n.range;
var r1 = n, n1 = function(t) {
    if (!t) return [];
    "{}" === t.substr(0, 2) && (t = "\\{\\}" + t.substr(2));
    return c(function(t) {
        return t.split("\\\\").join(e1).split("\\{").join(i).split("\\}").join(o).split("\\,").join(a).split("\\.").join(s);
    }(t), !0).map(l);
}, e1 = "\0SLASH" + Math.random() + "\0", i = "\0OPEN" + Math.random() + "\0", o = "\0CLOSE" + Math.random() + "\0", a = "\0COMMA" + Math.random() + "\0", s = "\0PERIOD" + Math.random() + "\0";
function p(t) {
    return parseInt(t, 10) == t ? parseInt(t, 10) : t.charCodeAt(0);
}
function l(t) {
    return t.split(e1).join("\\").split(i).join("{").split(o).join("}").split(a).join(",").split(s).join(".");
}
function u(t) {
    if (!t) return [
        ""
    ];
    var n = [], e = r1("{", "}", t);
    if (!e) return t.split(",");
    var i = e.pre, o = e.body, a = e.post, s = i.split(",");
    s[s.length - 1] += "{" + o + "}";
    var p = u(a);
    return a.length && (s[s.length - 1] += p.shift(), s.push.apply(s, p)), n.push.apply(n, s), n;
}
function f(t) {
    return "{" + t + "}";
}
function h(t) {
    return /^-?0\d/.test(t);
}
function d(t, r) {
    return t <= r;
}
function m(t, r) {
    return t >= r;
}
function c(t, n) {
    var e = [], i = r1("{", "}", t);
    if (!i) return [
        t
    ];
    var a = i.pre, s = i.post.length ? c(i.post, !1) : [
        ""
    ];
    if (/\$$/.test(i.pre)) for(var l = 0; l < s.length; l++){
        var g = a + "{" + i.body + "}" + s[l];
        e.push(g);
    }
    else {
        var v, b, y = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(i.body), j = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(i.body), M = y || j, A = i.body.indexOf(",") >= 0;
        if (!M && !A) return i.post.match(/,.*\}/) ? c(t = i.pre + "{" + i.body + o + i.post) : [
            t
        ];
        if (M) v = i.body.split(/\.\./);
        else if (1 === (v = u(i.body)).length && 1 === (v = c(v[0], !1).map(f)).length) return s.map(function(t) {
            return i.pre + v[0] + t;
        });
        if (M) {
            var C = p(v[0]), O = p(v[1]), S = Math.max(v[0].length, v[1].length), $ = 3 == v.length ? Math.abs(p(v[2])) : 1, x = d;
            O < C && ($ *= -1, x = m);
            var E = v.some(h);
            b = [];
            for(var I = C; x(I, O); I += $){
                var z;
                if (j) "\\" === (z = String.fromCharCode(I)) && (z = "");
                else if (z = String(I), E) {
                    var L = S - z.length;
                    if (L > 0) {
                        var P = new Array(L + 1).join("0");
                        z = I < 0 ? "-" + P + z.slice(1) : P + z;
                    }
                }
                b.push(z);
            }
        } else {
            b = [];
            for(var Z = 0; Z < v.length; Z++)b.push.apply(b, c(v[Z], !1));
        }
        for(Z = 0; Z < b.length; Z++)for(l = 0; l < s.length; l++){
            g = a + b[Z] + s[l];
            (!n || M || g) && e.push(g);
        }
    }
    return e;
}
var e2 = "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {};
function s1() {
    throw new Error("setTimeout has not been defined");
}
function i1() {
    throw new Error("clearTimeout has not been defined");
}
var r2 = s1, n2 = i1;
function o1(t) {
    if (r2 === setTimeout) return setTimeout(t, 0);
    if ((r2 === s1 || !r2) && setTimeout) return r2 = setTimeout, setTimeout(t, 0);
    try {
        return r2(t, 0);
    } catch (e) {
        try {
            return r2.call(null, t, 0);
        } catch (e) {
            return r2.call(this, t, 0);
        }
    }
}
"function" == typeof e2.setTimeout && (r2 = setTimeout), "function" == typeof e2.clearTimeout && (n2 = clearTimeout);
var h1, a1 = [], p1 = !1, l1 = -1;
function c1() {
    p1 && h1 && (p1 = !1, h1.length ? a1 = h1.concat(a1) : l1 = -1, a1.length && u1());
}
function u1() {
    if (!p1) {
        var t = o1(c1);
        p1 = !0;
        for(var e = a1.length; e;){
            for(h1 = a1, a1 = []; ++l1 < e;)h1 && h1[l1].run();
            l1 = -1, e = a1.length;
        }
        h1 = null, p1 = !1, function(t) {
            if (n2 === clearTimeout) return clearTimeout(t);
            if ((n2 === i1 || !n2) && clearTimeout) return n2 = clearTimeout, clearTimeout(t);
            try {
                return n2(t);
            } catch (e) {
                try {
                    return n2.call(null, t);
                } catch (e) {
                    return n2.call(this, t);
                }
            }
        }(t);
    }
}
function f1(t, e) {
    this.fun = t, this.array = e;
}
f1.prototype.run = function() {
    this.fun.apply(null, this.array);
};
function g() {}
var d1 = g, m1 = g, w = g, b = g, y = g, S = g, v = g;
var x = e2.performance || {}, M = x.now || x.mozNow || x.msNow || x.oNow || x.webkitNow || function() {
    return (new Date).getTime();
};
var E = new Date;
var T = {
    nextTick: function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1) for(var s = 1; s < arguments.length; s++)e[s - 1] = arguments[s];
        a1.push(new f1(t, e)), 1 !== a1.length || p1 || o1(u1);
    },
    title: "browser",
    browser: !0,
    env: {},
    argv: [],
    version: "",
    versions: {},
    on: d1,
    addListener: m1,
    once: w,
    off: b,
    removeListener: y,
    removeAllListeners: S,
    emit: v,
    binding: function(t) {
        throw new Error("process.binding is not supported");
    },
    cwd: function() {
        return "/";
    },
    chdir: function(t) {
        throw new Error("process.chdir is not supported");
    },
    umask: function() {
        return 0;
    },
    hrtime: function(t) {
        var e = .001 * M.call(x), s = Math.floor(e), i = Math.floor(e % 1 * 1e9);
        return t && (s -= t[0], (i -= t[1]) < 0 && (s--, i += 1e9)), [
            s,
            i
        ];
    },
    platform: "browser",
    release: {},
    config: {},
    uptime: function() {
        return (new Date - E) / 1e3;
    }
};
const N = (t)=>{
    if ("string" != typeof t) throw new TypeError("invalid pattern");
    if (t.length > 65536) throw new TypeError("pattern is too long");
}, $ = {
    "[:alnum:]": [
        "\\p{L}\\p{Nl}\\p{Nd}",
        !0
    ],
    "[:alpha:]": [
        "\\p{L}\\p{Nl}",
        !0
    ],
    "[:ascii:]": [
        "\\x00-\\x7f",
        !1
    ],
    "[:blank:]": [
        "\\p{Zs}\\t",
        !0
    ],
    "[:cntrl:]": [
        "\\p{Cc}",
        !0
    ],
    "[:digit:]": [
        "\\p{Nd}",
        !0
    ],
    "[:graph:]": [
        "\\p{Z}\\p{C}",
        !0,
        !0
    ],
    "[:lower:]": [
        "\\p{Ll}",
        !0
    ],
    "[:print:]": [
        "\\p{C}",
        !0
    ],
    "[:punct:]": [
        "\\p{P}",
        !0
    ],
    "[:space:]": [
        "\\p{Z}\\t\\r\\n\\v\\f",
        !0
    ],
    "[:upper:]": [
        "\\p{Lu}",
        !0
    ],
    "[:word:]": [
        "\\p{L}\\p{Nl}\\p{Nd}\\p{Pc}",
        !0
    ],
    "[:xdigit:]": [
        "A-Fa-f0-9",
        !1
    ]
}, A = (t)=>t.replace(/[[\]\\-]/g, "\\$&"), O = (t)=>t.join(""), P = (t, e)=>{
    const s = e;
    if ("[" !== t.charAt(s)) throw new Error("not in a brace expression");
    const i = [], r = [];
    let n = s + 1, o = !1, h = !1, a = !1, p = !1, l = s, c = "";
    t: for(; n < t.length;){
        const e = t.charAt(n);
        if ("!" !== e && "^" !== e || n !== s + 1) {
            if ("]" === e && o && !a) {
                l = n + 1;
                break;
            }
            if (o = !0, "\\" !== e || a) {
                if ("[" === e && !a) {
                    for (const [e, [o, a, p]] of Object.entries($))if (t.startsWith(e, n)) {
                        if (c) return [
                            "$.",
                            !1,
                            t.length - s,
                            !0
                        ];
                        n += e.length, p ? r.push(o) : i.push(o), h = h || a;
                        continue t;
                    }
                }
                a = !1, c ? (e > c ? i.push(A(c) + "-" + A(e)) : e === c && i.push(A(e)), c = "", n++) : t.startsWith("-]", n + 1) ? (i.push(A(e + "-")), n += 2) : t.startsWith("-", n + 1) ? (c = e, n += 2) : (i.push(A(e)), n++);
            } else a = !0, n++;
        } else p = !0, n++;
    }
    if (l < n) return [
        "",
        !1,
        0,
        !1
    ];
    if (!i.length && !r.length) return [
        "$.",
        !1,
        t.length - s,
        !0
    ];
    if (0 === r.length && 1 === i.length && /^\\?.$/.test(i[0]) && !p) {
        const t = 2 === i[0].length ? i[0].slice(-1) : i[0];
        return [
            (u = t, u.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")),
            !1,
            l - s,
            !1
        ];
    }
    var u;
    const f = "[" + (p ? "^" : "") + O(i) + "]", g = "[" + (p ? "" : "^") + O(r) + "]";
    return [
        i.length && r.length ? "(" + f + "|" + g + ")" : i.length ? f : g,
        h,
        l - s,
        !0
    ];
}, W = (t, { windowsPathsNoEscape: e = !1 } = {})=>e ? t.replace(/\[([^\/\\])\]/g, "$1") : t.replace(/((?!\\).|^)\[([^\/\\])\]/g, "$1$2").replace(/\\([^\/])/g, "$1"), L = new Set([
    "!",
    "?",
    "+",
    "*",
    "@"
]), R = (t)=>L.has(t), j = "(?!\\.)", C = new Set([
    "[",
    "."
]), z = new Set([
    "..",
    "."
]), k = new Set("().*{}+?[]^$\\!"), G = "[^/]", I = G + "*?", _ = G + "+?";
class B {
    type;
    #t;
    #e;
    #s = !1;
    #i = [];
    #r;
    #n;
    #o;
    #h = !1;
    #a;
    #p;
    #l = !1;
    constructor(t, e, s = {}){
        this.type = t, t && (this.#e = !0), this.#r = e, this.#t = this.#r ? this.#r.#t : this, this.#a = this.#t === this ? s : this.#t.#a, this.#o = this.#t === this ? [] : this.#t.#o, "!" !== t || this.#t.#h || this.#o.push(this), this.#n = this.#r ? this.#r.#i.length : 0;
    }
    get hasMagic() {
        if (void 0 !== this.#e) return this.#e;
        for (const t of this.#i)if ("string" != typeof t && (t.type || t.hasMagic)) return this.#e = !0;
        return this.#e;
    }
    toString() {
        return void 0 !== this.#p ? this.#p : this.type ? this.#p = this.type + "(" + this.#i.map((t)=>String(t)).join("|") + ")" : this.#p = this.#i.map((t)=>String(t)).join("");
    }
    #c() {
        if (this !== this.#t) throw new Error("should only call on root");
        if (this.#h) return this;
        let t;
        for(this.toString(), this.#h = !0; t = this.#o.pop();){
            if ("!" !== t.type) continue;
            let e = t, s = e.#r;
            for(; s;){
                for(let i = e.#n + 1; !s.type && i < s.#i.length; i++)for (const e of t.#i){
                    if ("string" == typeof e) throw new Error("string part in extglob AST??");
                    e.copyIn(s.#i[i]);
                }
                e = s, s = e.#r;
            }
        }
        return this;
    }
    push(...t) {
        for (const e of t)if ("" !== e) {
            if ("string" != typeof e && !(e instanceof B && e.#r === this)) throw new Error("invalid part: " + e);
            this.#i.push(e);
        }
    }
    toJSON() {
        const t = null === this.type ? this.#i.slice().map((t)=>"string" == typeof t ? t : t.toJSON()) : [
            this.type,
            ...this.#i.map((t)=>t.toJSON())
        ];
        return this.isStart() && !this.type && t.unshift([]), this.isEnd() && (this === this.#t || this.#t.#h && "!" === this.#r?.type) && t.push({}), t;
    }
    isStart() {
        if (this.#t === this) return !0;
        if (!this.#r?.isStart()) return !1;
        if (0 === this.#n) return !0;
        const t = this.#r;
        for(let e = 0; e < this.#n; e++){
            const s = t.#i[e];
            if (!(s instanceof B && "!" === s.type)) return !1;
        }
        return !0;
    }
    isEnd() {
        if (this.#t === this) return !0;
        if ("!" === this.#r?.type) return !0;
        if (!this.#r?.isEnd()) return !1;
        if (!this.type) return this.#r?.isEnd();
        const t = this.#r ? this.#r.#i.length : 0;
        return this.#n === t - 1;
    }
    copyIn(t) {
        "string" == typeof t ? this.push(t) : this.push(t.clone(this));
    }
    clone(t) {
        const e = new B(this.type, t);
        for (const t of this.#i)e.copyIn(t);
        return e;
    }
    static #u(t, e, s, i) {
        let r = !1, n = !1, o = -1, h = !1;
        if (null === e.type) {
            let a = s, p = "";
            for(; a < t.length;){
                const s = t.charAt(a++);
                if (r || "\\" === s) r = !r, p += s;
                else if (n) a === o + 1 ? "^" !== s && "!" !== s || (h = !0) : "]" !== s || a === o + 2 && h || (n = !1), p += s;
                else if ("[" !== s) if (i.noext || !R(s) || "(" !== t.charAt(a)) p += s;
                else {
                    e.push(p), p = "";
                    const r = new B(s, e);
                    a = B.#u(t, r, a, i), e.push(r);
                }
                else n = !0, o = a, h = !1, p += s;
            }
            return e.push(p), a;
        }
        let a = s + 1, p = new B(null, e);
        const l = [];
        let c = "";
        for(; a < t.length;){
            const s = t.charAt(a++);
            if (r || "\\" === s) r = !r, c += s;
            else if (n) a === o + 1 ? "^" !== s && "!" !== s || (h = !0) : "]" !== s || a === o + 2 && h || (n = !1), c += s;
            else if ("[" !== s) if (R(s) && "(" === t.charAt(a)) {
                p.push(c), c = "";
                const e = new B(s, p);
                p.push(e), a = B.#u(t, e, a, i);
            } else if ("|" !== s) {
                if (")" === s) return "" === c && 0 === e.#i.length && (e.#l = !0), p.push(c), c = "", e.push(...l, p), a;
                c += s;
            } else p.push(c), c = "", l.push(p), p = new B(null, e);
            else n = !0, o = a, h = !1, c += s;
        }
        return e.type = null, e.#e = void 0, e.#i = [
            t.substring(s - 1)
        ], a;
    }
    static fromGlob(t, e = {}) {
        const s = new B(null, void 0, e);
        return B.#u(t, s, 0, e), s;
    }
    toMMPattern() {
        if (this !== this.#t) return this.#t.toMMPattern();
        const t = this.toString(), [e, s, i, r] = this.toRegExpSource();
        if (!(i || this.#e || this.#a.nocase && !this.#a.nocaseMagicOnly && t.toUpperCase() !== t.toLowerCase())) return s;
        const n = (this.#a.nocase ? "i" : "") + (r ? "u" : "");
        return Object.assign(new RegExp(`^${e}$`, n), {
            _src: e,
            _glob: t
        });
    }
    toRegExpSource(t) {
        const e = t ?? !!this.#a.dot;
        if (this.#t === this && this.#c(), !this.type) {
            const s = this.isStart() && this.isEnd(), i = this.#i.map((e)=>{
                const [i, r, n, o] = "string" == typeof e ? B.#f(e, this.#e, s) : e.toRegExpSource(t);
                return this.#e = this.#e || n, this.#s = this.#s || o, i;
            }).join("");
            let r = "";
            if (this.isStart() && "string" == typeof this.#i[0]) {
                if (!(1 === this.#i.length && z.has(this.#i[0]))) {
                    const s = C, n = e && s.has(i.charAt(0)) || i.startsWith("\\.") && s.has(i.charAt(2)) || i.startsWith("\\.\\.") && s.has(i.charAt(4)), o = !e && !t && s.has(i.charAt(0));
                    r = n ? "(?!(?:^|/)\\.\\.?(?:$|/))" : o ? j : "";
                }
            }
            let n = "";
            this.isEnd() && this.#t.#h && "!" === this.#r?.type && (n = "(?:$|\\/)");
            return [
                r + i + n,
                W(i),
                this.#e = !!this.#e,
                this.#s
            ];
        }
        const s = "*" === this.type || "+" === this.type, i = "!" === this.type ? "(?:(?!(?:" : "(?:";
        let r = this.#g(e);
        if (this.isStart() && this.isEnd() && !r && "!" !== this.type) {
            const t = this.toString();
            return this.#i = [
                t
            ], this.type = null, this.#e = void 0, [
                t,
                W(this.toString()),
                !1,
                !1
            ];
        }
        let n = !s || t || e ? "" : this.#g(!0);
        n === r && (n = ""), n && (r = `(?:${r})(?:${n})*?`);
        let o = "";
        if ("!" === this.type && this.#l) o = (this.isStart() && !e ? j : "") + _;
        else {
            o = i + r + ("!" === this.type ? "))" + (!this.isStart() || e || t ? "" : j) + I + ")" : "@" === this.type ? ")" : "?" === this.type ? ")?" : "+" === this.type && n ? ")" : "*" === this.type && n ? ")?" : `)${this.type}`);
        }
        return [
            o,
            W(r),
            this.#e = !!this.#e,
            this.#s
        ];
    }
    #g(t) {
        return this.#i.map((e)=>{
            if ("string" == typeof e) throw new Error("string type in extglob ast??");
            const [s, i, r, n] = e.toRegExpSource(t);
            return this.#s = this.#s || n, s;
        }).filter((t)=>!(this.isStart() && this.isEnd() && !t)).join("|");
    }
    static #f(t, e, s = !1) {
        let i = !1, r = "", n = !1;
        for(let o = 0; o < t.length; o++){
            const h = t.charAt(o);
            if (i) i = !1, r += (k.has(h) ? "\\" : "") + h;
            else if ("\\" !== h) {
                if ("[" === h) {
                    const [s, i, h, a] = P(t, o);
                    if (h) {
                        r += s, n = n || i, o += h - 1, e = e || a;
                        continue;
                    }
                }
                "*" !== h ? "?" !== h ? r += h.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&") : (r += G, e = !0) : (r += s && "*" === t ? _ : I, e = !0);
            } else o === t.length - 1 ? r += "\\\\" : i = !0;
        }
        return [
            r,
            W(t),
            !!e,
            n
        ];
    }
}
const F = (t, { windowsPathsNoEscape: e = !1 } = {})=>e ? t.replace(/[?*()[\]]/g, "[$&]") : t.replace(/[?*()[\]\\]/g, "\\$&"), D = (t, e, s = {})=>(N(e), !(!s.nocomment && "#" === e.charAt(0)) && new St(e, s).match(t)), J = /^\*+([^+@!?\*\[\(]*)$/, Z = (t)=>(e)=>!e.startsWith(".") && e.endsWith(t), H = (t)=>(e)=>e.endsWith(t), U = (t)=>(t = t.toLowerCase(), (e)=>!e.startsWith(".") && e.toLowerCase().endsWith(t)), q = (t)=>(t = t.toLowerCase(), (e)=>e.toLowerCase().endsWith(t)), K = /^\*+\.\*+$/, Q = (t)=>!t.startsWith(".") && t.includes("."), V = (t)=>"." !== t && ".." !== t && t.includes("."), X = /^\.\*+$/, Y = (t)=>"." !== t && ".." !== t && t.startsWith("."), tt = /^\*+$/, et = (t)=>0 !== t.length && !t.startsWith("."), st = (t)=>0 !== t.length && "." !== t && ".." !== t, it = /^\?+([^+@!?\*\[\(]*)?$/, rt = ([t, e = ""])=>{
    const s = at([
        t
    ]);
    return e ? (e = e.toLowerCase(), (t)=>s(t) && t.toLowerCase().endsWith(e)) : s;
}, nt = ([t, e = ""])=>{
    const s = pt([
        t
    ]);
    return e ? (e = e.toLowerCase(), (t)=>s(t) && t.toLowerCase().endsWith(e)) : s;
}, ot = ([t, e = ""])=>{
    const s = pt([
        t
    ]);
    return e ? (t)=>s(t) && t.endsWith(e) : s;
}, ht = ([t, e = ""])=>{
    const s = at([
        t
    ]);
    return e ? (t)=>s(t) && t.endsWith(e) : s;
}, at = ([t])=>{
    const e = t.length;
    return (t)=>t.length === e && !t.startsWith(".");
}, pt = ([t])=>{
    const e = t.length;
    return (t)=>t.length === e && "." !== t && ".." !== t;
}, lt = "object" == typeof T && T ? "object" == typeof T.env && T.env && T.env.__MINIMATCH_TESTING_PLATFORM__ || T.platform : "posix", ct = "win32" === lt ? ({
    sep: "\\"
}).sep : ({
    sep: "/"
}).sep;
D.sep = ct;
const ut = Symbol("globstar **");
D.GLOBSTAR = ut;
const ft = (t, e = {})=>(s)=>D(s, t, e);
D.filter = ft;
const gt = (t, e = {})=>Object.assign({}, t, e), dt = (t)=>{
    if (!t || "object" != typeof t || !Object.keys(t).length) return D;
    const e = D;
    return Object.assign((s, i, r = {})=>e(s, i, gt(t, r)), {
        Minimatch: class extends e.Minimatch {
            constructor(e, s = {}){
                super(e, gt(t, s));
            }
            static defaults(s) {
                return e.defaults(gt(t, s)).Minimatch;
            }
        },
        AST: class extends e.AST {
            constructor(e, s, i = {}){
                super(e, s, gt(t, i));
            }
            static fromGlob(s, i = {}) {
                return e.AST.fromGlob(s, gt(t, i));
            }
        },
        unescape: (s, i = {})=>e.unescape(s, gt(t, i)),
        escape: (s, i = {})=>e.escape(s, gt(t, i)),
        filter: (s, i = {})=>e.filter(s, gt(t, i)),
        defaults: (s)=>e.defaults(gt(t, s)),
        makeRe: (s, i = {})=>e.makeRe(s, gt(t, i)),
        braceExpand: (s, i = {})=>e.braceExpand(s, gt(t, i)),
        match: (s, i, r = {})=>e.match(s, i, gt(t, r)),
        sep: e.sep,
        GLOBSTAR: ut
    });
};
D.defaults = dt;
const mt = (e, s = {})=>(N(e), s.nobrace || !/\{(?:(?!\{).)*\}/.test(e) ? [
        e
    ] : n1(e));
D.braceExpand = mt;
const wt = (t, e = {})=>new St(t, e).makeRe();
D.makeRe = wt;
const bt = (t, e, s = {})=>{
    const i = new St(e, s);
    return t = t.filter((t)=>i.match(t)), i.options.nonull && !t.length && t.push(e), t;
};
D.match = bt;
const yt = /[?*]|[+@!]\(.*?\)|\[|\]/;
class St {
    options;
    set;
    pattern;
    windowsPathsNoEscape;
    nonegate;
    negate;
    comment;
    empty;
    preserveMultipleSlashes;
    partial;
    globSet;
    globParts;
    nocase;
    isWindows;
    platform;
    windowsNoMagicRoot;
    regexp;
    constructor(t, e = {}){
        N(t), e = e || {}, this.options = e, this.pattern = t, this.platform = e.platform || lt, this.isWindows = "win32" === this.platform, this.windowsPathsNoEscape = !!e.windowsPathsNoEscape || !1 === e.allowWindowsEscape, this.windowsPathsNoEscape && (this.pattern = this.pattern.replace(/\\/g, "/")), this.preserveMultipleSlashes = !!e.preserveMultipleSlashes, this.regexp = null, this.negate = !1, this.nonegate = !!e.nonegate, this.comment = !1, this.empty = !1, this.partial = !!e.partial, this.nocase = !!this.options.nocase, this.windowsNoMagicRoot = void 0 !== e.windowsNoMagicRoot ? e.windowsNoMagicRoot : !(!this.isWindows || !this.nocase), this.globSet = [], this.globParts = [], this.set = [], this.make();
    }
    hasMagic() {
        if (this.options.magicalBraces && this.set.length > 1) return !0;
        for (const t of this.set)for (const e of t)if ("string" != typeof e) return !0;
        return !1;
    }
    debug(...t) {}
    make() {
        const t = this.pattern, e = this.options;
        if (!e.nocomment && "#" === t.charAt(0)) return void (this.comment = !0);
        if (!t) return void (this.empty = !0);
        this.parseNegate(), this.globSet = [
            ...new Set(this.braceExpand())
        ], e.debug && (this.debug = (...t)=>console.error(...t)), this.debug(this.pattern, this.globSet);
        const s = this.globSet.map((t)=>this.slashSplit(t));
        this.globParts = this.preprocess(s), this.debug(this.pattern, this.globParts);
        let i = this.globParts.map((t, e, s)=>{
            if (this.isWindows && this.windowsNoMagicRoot) {
                const e = !("" !== t[0] || "" !== t[1] || "?" !== t[2] && yt.test(t[2]) || yt.test(t[3])), s = /^[a-z]:/i.test(t[0]);
                if (e) return [
                    ...t.slice(0, 4),
                    ...t.slice(4).map((t)=>this.parse(t))
                ];
                if (s) return [
                    t[0],
                    ...t.slice(1).map((t)=>this.parse(t))
                ];
            }
            return t.map((t)=>this.parse(t));
        });
        if (this.debug(this.pattern, i), this.set = i.filter((t)=>-1 === t.indexOf(!1)), this.isWindows) for(let t = 0; t < this.set.length; t++){
            const e = this.set[t];
            "" === e[0] && "" === e[1] && "?" === this.globParts[t][2] && "string" == typeof e[3] && /^[a-z]:$/i.test(e[3]) && (e[2] = "?");
        }
        this.debug(this.pattern, this.set);
    }
    preprocess(t) {
        if (this.options.noglobstar) for(let e = 0; e < t.length; e++)for(let s = 0; s < t[e].length; s++)"**" === t[e][s] && (t[e][s] = "*");
        const { optimizationLevel: e = 1 } = this.options;
        return e >= 2 ? (t = this.firstPhasePreProcess(t), t = this.secondPhasePreProcess(t)) : t = e >= 1 ? this.levelOneOptimize(t) : this.adjascentGlobstarOptimize(t), t;
    }
    adjascentGlobstarOptimize(t) {
        return t.map((t)=>{
            let e = -1;
            for(; -1 !== (e = t.indexOf("**", e + 1));){
                let s = e;
                for(; "**" === t[s + 1];)s++;
                s !== e && t.splice(e, s - e);
            }
            return t;
        });
    }
    levelOneOptimize(t) {
        return t.map((t)=>0 === (t = t.reduce((t, e)=>{
                const s = t[t.length - 1];
                return "**" === e && "**" === s ? t : ".." === e && s && ".." !== s && "." !== s && "**" !== s ? (t.pop(), t) : (t.push(e), t);
            }, [])).length ? [
                ""
            ] : t);
    }
    levelTwoFileOptimize(t) {
        Array.isArray(t) || (t = this.slashSplit(t));
        let e = !1;
        do {
            if (e = !1, !this.preserveMultipleSlashes) {
                for(let s = 1; s < t.length - 1; s++){
                    const i = t[s];
                    1 === s && "" === i && "" === t[0] || "." !== i && "" !== i || (e = !0, t.splice(s, 1), s--);
                }
                "." !== t[0] || 2 !== t.length || "." !== t[1] && "" !== t[1] || (e = !0, t.pop());
            }
            let s = 0;
            for(; -1 !== (s = t.indexOf("..", s + 1));){
                const i = t[s - 1];
                i && "." !== i && ".." !== i && "**" !== i && (e = !0, t.splice(s - 1, 2), s -= 2);
            }
        }while (e)
        return 0 === t.length ? [
            ""
        ] : t;
    }
    firstPhasePreProcess(t) {
        let e = !1;
        do {
            e = !1;
            for (let s of t){
                let i = -1;
                for(; -1 !== (i = s.indexOf("**", i + 1));){
                    let r = i;
                    for(; "**" === s[r + 1];)r++;
                    r > i && s.splice(i + 1, r - i);
                    let n = s[i + 1];
                    const o = s[i + 2], h = s[i + 3];
                    if (".." !== n) continue;
                    if (!o || "." === o || ".." === o || !h || "." === h || ".." === h) continue;
                    e = !0, s.splice(i, 1);
                    const a = s.slice(0);
                    a[i] = "**", t.push(a), i--;
                }
                if (!this.preserveMultipleSlashes) {
                    for(let t = 1; t < s.length - 1; t++){
                        const i = s[t];
                        1 === t && "" === i && "" === s[0] || "." !== i && "" !== i || (e = !0, s.splice(t, 1), t--);
                    }
                    "." !== s[0] || 2 !== s.length || "." !== s[1] && "" !== s[1] || (e = !0, s.pop());
                }
                let r = 0;
                for(; -1 !== (r = s.indexOf("..", r + 1));){
                    const t = s[r - 1];
                    if (t && "." !== t && ".." !== t && "**" !== t) {
                        e = !0;
                        const t = 1 === r && "**" === s[r + 1] ? [
                            "."
                        ] : [];
                        s.splice(r - 1, 2, ...t), 0 === s.length && s.push(""), r -= 2;
                    }
                }
            }
        }while (e)
        return t;
    }
    secondPhasePreProcess(t) {
        for(let e = 0; e < t.length - 1; e++)for(let s = e + 1; s < t.length; s++){
            const i = this.partsMatch(t[e], t[s], !this.preserveMultipleSlashes);
            i && (t[e] = i, t[s] = []);
        }
        return t.filter((t)=>t.length);
    }
    partsMatch(t, e, s = !1) {
        let i = 0, r = 0, n = [], o = "";
        for(; i < t.length && r < e.length;)if (t[i] === e[r]) n.push("b" === o ? e[r] : t[i]), i++, r++;
        else if (s && "**" === t[i] && e[r] === t[i + 1]) n.push(t[i]), i++;
        else if (s && "**" === e[r] && t[i] === e[r + 1]) n.push(e[r]), r++;
        else if ("*" !== t[i] || !e[r] || !this.options.dot && e[r].startsWith(".") || "**" === e[r]) {
            if ("*" !== e[r] || !t[i] || !this.options.dot && t[i].startsWith(".") || "**" === t[i]) return !1;
            if ("a" === o) return !1;
            o = "b", n.push(e[r]), i++, r++;
        } else {
            if ("b" === o) return !1;
            o = "a", n.push(t[i]), i++, r++;
        }
        return t.length === e.length && n;
    }
    parseNegate() {
        if (this.nonegate) return;
        const t = this.pattern;
        let e = !1, s = 0;
        for(let i = 0; i < t.length && "!" === t.charAt(i); i++)e = !e, s++;
        s && (this.pattern = t.slice(s)), this.negate = e;
    }
    matchOne(t, e, s = !1) {
        const i = this.options;
        if (this.isWindows) {
            const s = "string" == typeof t[0] && /^[a-z]:$/i.test(t[0]), i = !s && "" === t[0] && "" === t[1] && "?" === t[2] && /^[a-z]:$/i.test(t[3]), r = "string" == typeof e[0] && /^[a-z]:$/i.test(e[0]), n = i ? 3 : s ? 0 : void 0, o = !r && "" === e[0] && "" === e[1] && "?" === e[2] && "string" == typeof e[3] && /^[a-z]:$/i.test(e[3]) ? 3 : r ? 0 : void 0;
            if ("number" == typeof n && "number" == typeof o) {
                const [s, i] = [
                    t[n],
                    e[o]
                ];
                s.toLowerCase() === i.toLowerCase() && (e[o] = s, o > n ? e = e.slice(o) : n > o && (t = t.slice(n)));
            }
        }
        const { optimizationLevel: r = 1 } = this.options;
        r >= 2 && (t = this.levelTwoFileOptimize(t)), this.debug("matchOne", this, {
            file: t,
            pattern: e
        }), this.debug("matchOne", t.length, e.length);
        for(var n = 0, o = 0, h = t.length, a = e.length; n < h && o < a; n++, o++){
            this.debug("matchOne loop");
            var p = e[o], l = t[n];
            if (this.debug(e, p, l), !1 === p) return !1;
            if (p === ut) {
                this.debug("GLOBSTAR", [
                    e,
                    p,
                    l
                ]);
                var c = n, u = o + 1;
                if (u === a) {
                    for(this.debug("** at the end"); n < h; n++)if ("." === t[n] || ".." === t[n] || !i.dot && "." === t[n].charAt(0)) return !1;
                    return !0;
                }
                for(; c < h;){
                    var f = t[c];
                    if (this.debug("\nglobstar while", t, c, e, u, f), this.matchOne(t.slice(c), e.slice(u), s)) return this.debug("globstar found match!", c, h, f), !0;
                    if ("." === f || ".." === f || !i.dot && "." === f.charAt(0)) {
                        this.debug("dot detected!", t, c, e, u);
                        break;
                    }
                    this.debug("globstar swallow a segment, and continue"), c++;
                }
                return !(!s || (this.debug("\n>>> no match, partial?", t, c, e, u), c !== h));
            }
            let r;
            if ("string" == typeof p ? (r = l === p, this.debug("string match", p, l, r)) : (r = p.test(l), this.debug("pattern match", p, l, r)), !r) return !1;
        }
        if (n === h && o === a) return !0;
        if (n === h) return s;
        if (o === a) return n === h - 1 && "" === t[n];
        throw new Error("wtf?");
    }
    braceExpand() {
        return mt(this.pattern, this.options);
    }
    parse(t) {
        N(t);
        const e = this.options;
        if ("**" === t) return ut;
        if ("" === t) return "";
        let s, i = null;
        (s = t.match(tt)) ? i = e.dot ? st : et : (s = t.match(J)) ? i = (e.nocase ? e.dot ? q : U : e.dot ? H : Z)(s[1]) : (s = t.match(it)) ? i = (e.nocase ? e.dot ? nt : rt : e.dot ? ot : ht)(s) : (s = t.match(K)) ? i = e.dot ? V : Q : (s = t.match(X)) && (i = Y);
        const r = B.fromGlob(t, this.options).toMMPattern();
        return i ? Object.assign(r, {
            test: i
        }) : r;
    }
    makeRe() {
        if (this.regexp || !1 === this.regexp) return this.regexp;
        const t = this.set;
        if (!t.length) return this.regexp = !1, this.regexp;
        const e = this.options, s = e.noglobstar ? "[^/]*?" : e.dot ? "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?" : "(?:(?!(?:\\/|^)\\.).)*?", i = new Set(e.nocase ? [
            "i"
        ] : []);
        let r = t.map((t)=>{
            const e = t.map((t)=>{
                if (t instanceof RegExp) for (const e of t.flags.split(""))i.add(e);
                return "string" == typeof t ? t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&") : t === ut ? ut : t._src;
            });
            return e.forEach((t, i)=>{
                const r = e[i + 1], n = e[i - 1];
                t === ut && n !== ut && (void 0 === n ? void 0 !== r && r !== ut ? e[i + 1] = "(?:\\/|" + s + "\\/)?" + r : e[i] = s : void 0 === r ? e[i - 1] = n + "(?:\\/|" + s + ")?" : r !== ut && (e[i - 1] = n + "(?:\\/|\\/" + s + "\\/)" + r, e[i + 1] = ut));
            }), e.filter((t)=>t !== ut).join("/");
        }).join("|");
        const [n, o] = t.length > 1 ? [
            "(?:",
            ")"
        ] : [
            "",
            ""
        ];
        r = "^" + n + r + o + "$", this.negate && (r = "^(?!" + r + ").+$");
        try {
            this.regexp = new RegExp(r, [
                ...i
            ].join(""));
        } catch (t) {
            this.regexp = !1;
        }
        return this.regexp;
    }
    slashSplit(t) {
        return this.preserveMultipleSlashes ? t.split("/") : this.isWindows && /^\/\/[^\/]+/.test(t) ? [
            "",
            ...t.split(/\/+/)
        ] : t.split(/\/+/);
    }
    match(t, e = this.partial) {
        if (this.debug("match", t, this.pattern), this.comment) return !1;
        if (this.empty) return "" === t;
        if ("/" === t && e) return !0;
        const s = this.options;
        this.isWindows && (t = t.split("\\").join("/"));
        const i = this.slashSplit(t);
        this.debug(this.pattern, "split", i);
        const r = this.set;
        this.debug(this.pattern, "set", r);
        let n = i[i.length - 1];
        if (!n) for(let t = i.length - 2; !n && t >= 0; t--)n = i[t];
        for(let t = 0; t < r.length; t++){
            const o = r[t];
            let h = i;
            s.matchBase && 1 === o.length && (h = [
                n
            ]);
            if (this.matchOne(h, o, e)) return !!s.flipNegate || !this.negate;
        }
        return !s.flipNegate && this.negate;
    }
    static defaults(t) {
        return D.defaults(t).Minimatch;
    }
}
D.AST = B, D.Minimatch = St, D.escape = F, D.unescape = W;

function match_with_minimatch(request) {
    return D(request.literal, request.expr);
}

Deno.core.ops.op_register_func(match_with_minimatch);