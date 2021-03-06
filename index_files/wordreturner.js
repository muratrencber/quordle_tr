var Ki = Object.defineProperty,
  Gi = Object.defineProperties;
var Hi = Object.getOwnPropertyDescriptors;
var nr = Object.getOwnPropertySymbols;
var Vi = Object.prototype.hasOwnProperty,
  Xi = Object.prototype.propertyIsEnumerable;
var rr = (e, t, n) =>
    t in e
      ? Ki(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Ue = (e, t) => {
    for (var n in t || (t = {})) Vi.call(t, n) && rr(e, n, t[n]);
    if (nr) for (var n of nr(t)) Xi.call(t, n) && rr(e, n, t[n]);
    return e;
  },
  ft = (e, t) => Gi(e, Hi(t));
const Ji = (e, t) => e === t,
  me = Symbol("solid-proxy"),
  $t = { equals: Ji };
let so = po;
const Ie = {},
  de = 1,
  Pt = 2,
  ao = { owned: null, cleanups: null, context: null, owner: null },
  [Yi, bd] = se(!1);
var L = null;
let st = null,
  F = null,
  Ve = null,
  U = null,
  Z = null,
  Rn = 0;
function uo(e, t) {
  const n = F,
    r = L,
    o =
      e.length === 0
        ? ao
        : { owned: null, cleanups: null, context: null, owner: t || r };
  (L = o), (F = null);
  try {
    return Wt(() => e(() => kn(o)), !0);
  } finally {
    (F = n), (L = r);
  }
}
function se(e, t) {
  t = t ? Object.assign({}, $t, t) : $t;
  const n = {
      value: e,
      observers: null,
      observerSlots: null,
      pending: Ie,
      comparator: t.equals || void 0,
    },
    r = (o) => (
      typeof o == "function" && (o = o(n.pending !== Ie ? n.pending : n.value)),
      Fn(n, o)
    );
  return [fo.bind(n), r];
}
function _t(e, t, n) {
  const r = jt(e, t, !0, de);
  _e(r);
}
function ee(e, t, n) {
  const r = jt(e, t, !1, de);
  _e(r);
}
function or(e, t, n) {
  so = os;
  const r = jt(e, t, !1, de);
  (r.user = !0), Z ? Z.push(r) : queueMicrotask(() => _e(r));
}
function k(e, t, n) {
  n = n ? Object.assign({}, $t, n) : $t;
  const r = jt(e, t, !0, 0);
  return (
    (r.pending = Ie),
    (r.observers = null),
    (r.observerSlots = null),
    (r.comparator = n.equals || void 0),
    _e(r),
    fo.bind(r)
  );
}
function Dt(e) {
  if (Ve) return e();
  let t;
  const n = (Ve = []);
  try {
    t = e();
  } finally {
    Ve = null;
  }
  return (
    Wt(() => {
      for (let r = 0; r < n.length; r += 1) {
        const o = n[r];
        if (o.pending !== Ie) {
          const i = o.pending;
          (o.pending = Ie), Fn(o, i);
        }
      }
    }, !1),
    t
  );
}
function te(e) {
  let t,
    n = F;
  return (F = null), (t = e()), (F = n), t;
}
function Xe(e, t, n) {
  const r = Array.isArray(e);
  let o,
    i = n && n.defer;
  return (s) => {
    let a;
    if (r) {
      a = [];
      for (let l = 0; l < e.length; l++) a.push(e[l]());
    } else a = e();
    if (i) {
      i = !1;
      return;
    }
    const u = te(() => t(a, o, s));
    return (o = a), u;
  };
}
function pn(e) {
  return (
    L === null ||
      (L.cleanups === null ? (L.cleanups = [e]) : L.cleanups.push(e)),
    e
  );
}
function lo() {
  return F;
}
function Qi() {
  return L;
}
function Zi(e, t) {
  const n = L;
  L = e;
  try {
    return Wt(t, !0);
  } finally {
    L = n;
  }
}
function es(e) {
  const t = F,
    n = L;
  return Promise.resolve().then(() => {
    (F = t), (L = n);
    let r;
    return Dt(e), r ? r.done : void 0;
  });
}
function ts() {
  return [Yi, es];
}
function co(e) {
  const t = Symbol("context");
  return { id: t, Provider: is(t), defaultValue: e };
}
function Ln(e) {
  let t;
  return (t = ho(L, e.id)) !== void 0 ? t : e.defaultValue;
}
function In(e) {
  const t = k(e);
  return k(() => yn(t()));
}
function fo() {
  const e = st;
  if (this.sources && (this.state || e)) {
    const t = U;
    (U = null), this.state === de || e ? _e(this) : Bt(this), (U = t);
  }
  if (F) {
    const t = this.observers ? this.observers.length : 0;
    F.sources
      ? (F.sources.push(this), F.sourceSlots.push(t))
      : ((F.sources = [this]), (F.sourceSlots = [t])),
      this.observers
        ? (this.observers.push(F),
          this.observerSlots.push(F.sources.length - 1))
        : ((this.observers = [F]),
          (this.observerSlots = [F.sources.length - 1]));
  }
  return this.value;
}
function Fn(e, t, n) {
  if (Ve) return e.pending === Ie && Ve.push(e), (e.pending = t), t;
  if (e.comparator && e.comparator(e.value, t)) return t;
  let r = !1;
  return (
    (e.value = t),
    e.observers &&
      e.observers.length &&
      Wt(() => {
        for (let o = 0; o < e.observers.length; o += 1) {
          const i = e.observers[o];
          r && st.disposed.has(i),
            ((r && !i.tState) || (!r && !i.state)) &&
              (i.pure ? U.push(i) : Z.push(i), i.observers && yo(i)),
            r || (i.state = de);
        }
        if (U.length > 1e6) throw ((U = []), new Error());
      }, !1),
    t
  );
}
function _e(e) {
  if (!e.fn) return;
  kn(e);
  const t = L,
    n = F,
    r = Rn;
  (F = L = e), ns(e, e.value, r), (F = n), (L = t);
}
function ns(e, t, n) {
  let r;
  try {
    r = e.fn(t);
  } catch (o) {
    vo(o);
  }
  (!e.updatedAt || e.updatedAt <= n) &&
    (e.observers && e.observers.length ? Fn(e, r) : (e.value = r),
    (e.updatedAt = n));
}
function jt(e, t, n, r = de, o) {
  const i = {
    fn: e,
    state: r,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: t,
    owner: L,
    context: null,
    pure: n,
  };
  return (
    L === null || (L !== ao && (L.owned ? L.owned.push(i) : (L.owned = [i]))), i
  );
}
function Je(e) {
  const t = st;
  if (e.state === 0 || t) return;
  if (e.state === Pt || t) return Bt(e);
  if (e.suspense && te(e.suspense.inFallback))
    return e.suspense.effects.push(e);
  const n = [e];
  for (; (e = e.owner) && (!e.updatedAt || e.updatedAt < Rn); )
    (e.state || t) && n.push(e);
  for (let r = n.length - 1; r >= 0; r--)
    if (((e = n[r]), e.state === de || t)) _e(e);
    else if (e.state === Pt || t) {
      const o = U;
      (U = null), Bt(e, n[0]), (U = o);
    }
}
function Wt(e, t) {
  if (U) return e();
  let n = !1;
  t || (U = []), Z ? (n = !0) : (Z = []), Rn++;
  try {
    return e();
  } catch (r) {
    vo(r);
  } finally {
    rs(n);
  }
}
function rs(e) {
  U && (po(U), (U = null)),
    !e &&
      (Z.length
        ? Dt(() => {
            so(Z), (Z = null);
          })
        : (Z = null));
}
function po(e) {
  for (let t = 0; t < e.length; t++) Je(e[t]);
}
function os(e) {
  let t,
    n = 0;
  for (t = 0; t < e.length; t++) {
    const o = e[t];
    o.user ? (e[n++] = o) : Je(o);
  }
  const r = e.length;
  for (t = 0; t < n; t++) Je(e[t]);
  for (t = r; t < e.length; t++) Je(e[t]);
}
function Bt(e, t) {
  const n = st;
  e.state = 0;
  for (let r = 0; r < e.sources.length; r += 1) {
    const o = e.sources[r];
    o.sources &&
      (o.state === de || n
        ? o !== t && Je(o)
        : (o.state === Pt || n) && Bt(o, t));
  }
}
function yo(e) {
  const t = st;
  for (let n = 0; n < e.observers.length; n += 1) {
    const r = e.observers[n];
    (!r.state || t) &&
      ((r.state = Pt), r.pure ? U.push(r) : Z.push(r), r.observers && yo(r));
  }
}
function kn(e) {
  let t;
  if (e.sources)
    for (; e.sources.length; ) {
      const n = e.sources.pop(),
        r = e.sourceSlots.pop(),
        o = n.observers;
      if (o && o.length) {
        const i = o.pop(),
          s = n.observerSlots.pop();
        r < o.length &&
          ((i.sourceSlots[s] = r), (o[r] = i), (n.observerSlots[r] = s));
      }
    }
  if (e.owned) {
    for (t = 0; t < e.owned.length; t++) kn(e.owned[t]);
    e.owned = null;
  }
  if (e.cleanups) {
    for (t = 0; t < e.cleanups.length; t++) e.cleanups[t]();
    e.cleanups = null;
  }
  (e.state = 0), (e.context = null);
}
function vo(e) {
  throw e;
}
function ho(e, t) {
  return e
    ? e.context && e.context[t] !== void 0
      ? e.context[t]
      : ho(e.owner, t)
    : void 0;
}
function yn(e) {
  if (typeof e == "function" && !e.length) return yn(e());
  if (Array.isArray(e)) {
    const t = [];
    for (let n = 0; n < e.length; n++) {
      const r = yn(e[n]);
      Array.isArray(r) ? t.push.apply(t, r) : t.push(r);
    }
    return t;
  }
  return e;
}
function is(e) {
  return function (n) {
    let r;
    return (
      _t(
        () =>
          (r = te(() => ((L.context = { [e]: n.value }), In(() => n.children))))
      ),
      r
    );
  };
}
function ne(e, t) {
  return te(() => e(t));
}
function dt() {
  return !0;
}
const mo = {
  get(e, t, n) {
    return t === me ? n : e.get(t);
  },
  has(e, t) {
    return e.has(t);
  },
  set: dt,
  deleteProperty: dt,
  getOwnPropertyDescriptor(e, t) {
    return {
      configurable: !0,
      enumerable: !0,
      get() {
        return e.get(t);
      },
      set: dt,
      deleteProperty: dt,
    };
  },
  ownKeys(e) {
    return e.keys();
  },
};
function Xt(e) {
  return typeof e == "function" ? e() : e;
}
function nt(...e) {
  return new Proxy(
    {
      get(t) {
        for (let n = e.length - 1; n >= 0; n--) {
          const r = Xt(e[n])[t];
          if (r !== void 0) return r;
        }
      },
      has(t) {
        for (let n = e.length - 1; n >= 0; n--) if (t in Xt(e[n])) return !0;
        return !1;
      },
      keys() {
        const t = [];
        for (let n = 0; n < e.length; n++) t.push(...Object.keys(Xt(e[n])));
        return [...new Set(t)];
      },
    },
    mo
  );
}
function go(e, ...t) {
  const n = new Set(t.flat()),
    r = Object.getOwnPropertyDescriptors(e),
    o = t.map((i) => {
      const s = {};
      for (let a = 0; a < i.length; a++) {
        const u = i[a];
        Object.defineProperty(
          s,
          u,
          r[u]
            ? r[u]
            : {
                get() {
                  return e[u];
                },
                set() {
                  return !0;
                },
              }
        );
      }
      return s;
    });
  return (
    o.push(
      new Proxy(
        {
          get(i) {
            return n.has(i) ? void 0 : e[i];
          },
          has(i) {
            return n.has(i) ? !1 : i in e;
          },
          keys() {
            return Object.keys(e).filter((i) => !n.has(i));
          },
        },
        mo
      )
    ),
    o
  );
}
let ss = 0;
function as() {
  return `cl-${ss++}`;
}
function bo(e) {
  let t = !1;
  const n = k(() => e.when, void 0, {
    equals: (r, o) => (t ? r === o : !r == !o),
  });
  return k(() => {
    const r = n();
    if (r) {
      const o = e.children;
      return (t = typeof o == "function" && o.length > 0) ? te(() => o(r)) : o;
    }
    return e.fallback;
  });
}
const us = [
    "allowfullscreen",
    "async",
    "autofocus",
    "autoplay",
    "checked",
    "controls",
    "default",
    "disabled",
    "formnovalidate",
    "hidden",
    "indeterminate",
    "ismap",
    "loop",
    "multiple",
    "muted",
    "nomodule",
    "novalidate",
    "open",
    "playsinline",
    "readonly",
    "required",
    "reversed",
    "seamless",
    "selected",
  ],
  ls = new Set([
    "className",
    "value",
    "readOnly",
    "formNoValidate",
    "isMap",
    "noModule",
    "playsInline",
    ...us,
  ]),
  cs = new Set(["innerHTML", "textContent", "innerText", "children"]),
  fs = { className: "class", htmlFor: "for" },
  ir = {
    class: "className",
    formnovalidate: "formNoValidate",
    ismap: "isMap",
    nomodule: "noModule",
    playsinline: "playsInline",
    readonly: "readOnly",
  },
  ds = new Set([
    "beforeinput",
    "click",
    "dblclick",
    "contextmenu",
    "focusin",
    "focusout",
    "input",
    "keydown",
    "keyup",
    "mousedown",
    "mousemove",
    "mouseout",
    "mouseover",
    "mouseup",
    "pointerdown",
    "pointermove",
    "pointerout",
    "pointerover",
    "pointerup",
    "touchend",
    "touchmove",
    "touchstart",
  ]),
  ps = {
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
  };
function Ed(e, t) {
  return k(e, void 0, t ? void 0 : { equals: t });
}
function ys(e, t, n) {
  let r = n.length,
    o = t.length,
    i = r,
    s = 0,
    a = 0,
    u = t[o - 1].nextSibling,
    l = null;
  for (; s < o || a < i; ) {
    if (t[s] === n[a]) {
      s++, a++;
      continue;
    }
    for (; t[o - 1] === n[i - 1]; ) o--, i--;
    if (o === s) {
      const f = i < r ? (a ? n[a - 1].nextSibling : n[i - a]) : u;
      for (; a < i; ) e.insertBefore(n[a++], f);
    } else if (i === a)
      for (; s < o; ) (!l || !l.has(t[s])) && t[s].remove(), s++;
    else if (t[s] === n[i - 1] && n[a] === t[o - 1]) {
      const f = t[--o].nextSibling;
      e.insertBefore(n[a++], t[s++].nextSibling),
        e.insertBefore(n[--i], f),
        (t[o] = n[i]);
    } else {
      if (!l) {
        l = new Map();
        let p = a;
        for (; p < i; ) l.set(n[p], p++);
      }
      const f = l.get(t[s]);
      if (f != null)
        if (a < f && f < i) {
          let p = s,
            d = 1,
            y;
          for (
            ;
            ++p < o && p < i && !((y = l.get(t[p])) == null || y !== f + d);

          )
            d++;
          if (d > f - a) {
            const S = t[s];
            for (; a < f; ) e.insertBefore(n[a++], S);
          } else e.replaceChild(n[a++], t[s++]);
        } else s++;
      else t[s++].remove();
    }
  }
}
const sr = "_$DX_DELEGATE";
function wd(e, t, n) {
  let r;
  return (
    uo((o) => {
      (r = o),
        t === document ? e() : zt(t, e(), t.firstChild ? null : void 0, n);
    }),
    () => {
      r(), (t.textContent = "");
    }
  );
}
function Mn(e, t, n) {
  const r = document.createElement("template");
  r.innerHTML = e;
  let o = r.content.firstChild;
  return n && (o = o.firstChild), o;
}
function Nn(e, t = window.document) {
  const n = t[sr] || (t[sr] = new Set());
  for (let r = 0, o = e.length; r < o; r++) {
    const i = e[r];
    n.has(i) || (n.add(i), t.addEventListener(i, Es));
  }
}
function Ye(e, t, n) {
  n == null ? e.removeAttribute(t) : e.setAttribute(t, n);
}
function vs(e, t, n, r) {
  r == null ? e.removeAttributeNS(t, n) : e.setAttributeNS(t, n, r);
}
function Et(e, t, n, r) {
  r
    ? Array.isArray(n)
      ? ((e[`$$${t}`] = n[0]), (e[`$$${t}Data`] = n[1]))
      : (e[`$$${t}`] = n)
    : Array.isArray(n)
    ? e.addEventListener(t, (o) => n[0](n[1], o))
    : e.addEventListener(t, n);
}
function vn(e, t, n = {}) {
  const r = Object.keys(t || {}),
    o = Object.keys(n);
  let i, s;
  for (i = 0, s = o.length; i < s; i++) {
    const a = o[i];
    !a || a === "undefined" || t[a] || (ar(e, a, !1), delete n[a]);
  }
  for (i = 0, s = r.length; i < s; i++) {
    const a = r[i],
      u = !!t[a];
    !a || a === "undefined" || n[a] === u || !u || (ar(e, a, !0), (n[a] = u));
  }
  return n;
}
function hs(e, t, n = {}) {
  const r = e.style;
  if (t == null || typeof t == "string") return (r.cssText = t);
  typeof n == "string" && (n = {});
  let o, i;
  for (i in n) t[i] == null && r.removeProperty(i), delete n[i];
  for (i in t) (o = t[i]), o !== n[i] && (r.setProperty(i, o), (n[i] = o));
  return n;
}
function ms(e, t, n, r) {
  typeof t == "function"
    ? ee((o) => lr(e, t(), o, n, r))
    : lr(e, t, void 0, n, r);
}
function zt(e, t, n, r) {
  if ((n !== void 0 && !r && (r = []), typeof t != "function"))
    return Fe(e, t, r, n);
  ee((o) => Fe(e, t(), o, n), r);
}
function gs(e, t, n, r, o = {}) {
  for (const i in o)
    if (!(i in t)) {
      if (i === "children") continue;
      ur(e, i, null, o[i], n);
    }
  for (const i in t) {
    if (i === "children") {
      r || Fe(e, t.children);
      continue;
    }
    const s = t[i];
    o[i] = ur(e, i, s, o[i], n);
  }
}
function bs(e) {
  return e.toLowerCase().replace(/-([a-z])/g, (t, n) => n.toUpperCase());
}
function ar(e, t, n) {
  const r = t.trim().split(/\s+/);
  for (let o = 0, i = r.length; o < i; o++) e.classList.toggle(r[o], n);
}
function ur(e, t, n, r, o) {
  let i, s, a;
  if (t === "style") return hs(e, n, r);
  if (t === "classList") return vn(e, n, r);
  if (n === r) return r;
  if (t === "ref") n(e);
  else if (t.slice(0, 3) === "on:") e.addEventListener(t.slice(3), n);
  else if (t.slice(0, 10) === "oncapture:")
    e.addEventListener(t.slice(10), n, !0);
  else if (t.slice(0, 2) === "on") {
    const u = t.slice(2).toLowerCase(),
      l = ds.has(u);
    Et(e, u, n, l), l && Nn([u]);
  } else if (
    (a = cs.has(t)) ||
    (!o && (ir[t] || (s = ls.has(t)))) ||
    (i = e.nodeName.includes("-"))
  )
    i && !s && !a ? (e[bs(t)] = n) : (e[ir[t] || t] = n);
  else {
    const u = o && t.indexOf(":") > -1 && ps[t.split(":")[0]];
    u ? vs(e, u, t, n) : Ye(e, fs[t] || t, n);
  }
  return n;
}
function Es(e) {
  const t = `$$${e.type}`;
  let n = (e.composedPath && e.composedPath()[0]) || e.target;
  for (
    e.target !== n &&
      Object.defineProperty(e, "target", { configurable: !0, value: n }),
      Object.defineProperty(e, "currentTarget", {
        configurable: !0,
        get() {
          return n || document;
        },
      });
    n !== null;

  ) {
    const r = n[t];
    if (r && !n.disabled) {
      const o = n[`${t}Data`];
      if ((o !== void 0 ? r(o, e) : r(e), e.cancelBubble)) return;
    }
    n =
      n.host && n.host !== n && n.host instanceof Node ? n.host : n.parentNode;
  }
}
function lr(e, t, n = {}, r, o) {
  return (
    !o &&
      "children" in t &&
      ee(() => (n.children = Fe(e, t.children, n.children))),
    ee(() => gs(e, t, r, !0, n)),
    n
  );
}
function Fe(e, t, n, r, o) {
  for (; typeof n == "function"; ) n = n();
  if (t === n) return n;
  const i = typeof t,
    s = r !== void 0;
  if (
    ((e = (s && n[0] && n[0].parentNode) || e),
    i === "string" || i === "number")
  )
    if ((i === "number" && (t = t.toString()), s)) {
      let a = n[0];
      a && a.nodeType === 3 ? (a.data = t) : (a = document.createTextNode(t)),
        (n = Ae(e, n, r, a));
    } else
      n !== "" && typeof n == "string"
        ? (n = e.firstChild.data = t)
        : (n = e.textContent = t);
  else if (t == null || i === "boolean") n = Ae(e, n, r);
  else {
    if (i === "function")
      return (
        ee(() => {
          let a = t();
          for (; typeof a == "function"; ) a = a();
          n = Fe(e, a, n, r);
        }),
        () => n
      );
    if (Array.isArray(t)) {
      const a = [];
      if (hn(a, t, o)) return ee(() => (n = Fe(e, a, n, r, !0))), () => n;
      if (a.length === 0) {
        if (((n = Ae(e, n, r)), s)) return n;
      } else
        Array.isArray(n)
          ? n.length === 0
            ? cr(e, a, r)
            : ys(e, n, a)
          : (n && Ae(e), cr(e, a));
      n = a;
    } else if (t instanceof Node) {
      if (Array.isArray(n)) {
        if (s) return (n = Ae(e, n, r, t));
        Ae(e, n, null, t);
      } else
        n == null || n === "" || !e.firstChild
          ? e.appendChild(t)
          : e.replaceChild(t, e.firstChild);
      n = t;
    }
  }
  return n;
}
function hn(e, t, n) {
  let r = !1;
  for (let o = 0, i = t.length; o < i; o++) {
    let s = t[o],
      a;
    if (s instanceof Node) e.push(s);
    else if (!(s == null || s === !0 || s === !1))
      if (Array.isArray(s)) r = hn(e, s) || r;
      else if ((a = typeof s) == "string") e.push(document.createTextNode(s));
      else if (a === "function")
        if (n) {
          for (; typeof s == "function"; ) s = s();
          r = hn(e, Array.isArray(s) ? s : [s]) || r;
        } else e.push(s), (r = !0);
      else e.push(document.createTextNode(s.toString()));
  }
  return r;
}
function cr(e, t, n) {
  for (let r = 0, o = t.length; r < o; r++) e.insertBefore(t[r], n);
}
function Ae(e, t, n, r) {
  if (n === void 0) return (e.textContent = "");
  const o = r || document.createTextNode("");
  if (t.length) {
    let i = !1;
    for (let s = t.length - 1; s >= 0; s--) {
      const a = t[s];
      if (o !== a) {
        const u = a.parentNode === e;
        !i && !s
          ? u
            ? e.replaceChild(o, a)
            : e.insertBefore(o, n)
          : u && a.remove();
      } else i = !0;
    }
  } else e.insertBefore(o, n);
  return [o];
}
function Eo(e, t, n) {
  return e.addEventListener(t, n), () => e.removeEventListener(t, n);
}
function ws([e, t], n, r) {
  return [n ? () => n(e()) : e, r ? (o) => t(r(o)) : t];
}
function wo(e, t, n, r) {
  let o = !1;
  const i = (a) => (typeof a == "string" ? { value: a } : a),
    s = ws(
      se(i(e()), { equals: (a, u) => a.value === u.value }),
      void 0,
      (a) => (!o && t(a), a)
    );
  return (
    n &&
      pn(
        n((a = e()) => {
          (o = !0), s[1](i(a)), (o = !1);
        })
      ),
    { signal: s, utils: r }
  );
}
function Ss(e) {
  if (e) {
    if (Array.isArray(e)) return { signal: e };
  } else return { signal: se({ value: "" }) };
  return e;
}
function Os() {
  return wo(
    () => ({
      value:
        window.location.pathname +
        window.location.search +
        window.location.hash,
      state: history.state,
    }),
    ({ value: e, replace: t, scroll: n, state: r }) => {
      t
        ? window.history.replaceState(r, "", e)
        : window.history.pushState(r, "", e),
        n && window.scrollTo(0, 0);
    },
    (e) => Eo(window, "popstate", () => e()),
    { go: (e) => window.history.go(e) }
  );
}
function Sd() {
  return wo(
    () => window.location.hash.slice(1),
    ({ value: e, scroll: t }) => {
      (window.location.hash = e), t && window.scrollTo(0, 0);
    },
    (e) => Eo(window, "hashchange", () => e()),
    { go: (e) => window.history.go(e), renderPath: (e) => `#${e}` }
  );
}
const As = /^(?:[a-z0-9]+:)?\/\//i,
  Ts = /^\/+|\/+$|\s+/g;
function Qe(e) {
  const t = e.replace(Ts, "");
  return t ? (t.startsWith("?") ? t : "/" + t) : "";
}
function wt(e, t, n) {
  if (As.test(t)) return;
  const r = Qe(e),
    o = n && Qe(n);
  let i = "";
  return (
    !o || t.charAt(0) === "/"
      ? (i = r)
      : o.toLowerCase().indexOf(r.toLowerCase()) !== 0
      ? (i = r + o)
      : (i = o),
    i + Qe(t) || "/"
  );
}
function xs(e, t) {
  if (e == null) throw new Error(t);
  return e;
}
function So(e, t) {
  const n = Qe(t);
  if (n) {
    const r = e.replace(/^\/+|\/*(\*.*)?$/g, "");
    return r ? `/${r}${n}` : n;
  }
  return Qe(e);
}
function $s(e) {
  const t = {};
  return (
    e.searchParams.forEach((n, r) => {
      t[r] = n;
    }),
    t
  );
}
function Ps(e, t) {
  const [n, r] = e.split("/*", 2),
    o = n.split("/").filter(Boolean),
    i = o.length;
  return (s) => {
    const a = s.split("/").filter(Boolean),
      u = a.length - i;
    if (u < 0 || (u > 0 && r === void 0 && !t)) return null;
    const l = { path: i ? "" : "/", params: {} };
    for (let f = 0; f < i; f++) {
      const p = o[f],
        d = a[f];
      if (p[0] === ":") l.params[p.slice(1)] = d;
      else if (p.localeCompare(d, void 0, { sensitivity: "base" }) !== 0)
        return null;
      l.path += `/${d}`;
    }
    return r && (l.params[r] = u ? a.slice(-u).join("/") : ""), l;
  };
}
function Bs(e) {
  const [t, n] = e.pattern.split("/*", 2),
    r = t.split("/").filter(Boolean);
  return r.reduce(
    (o, i) => o + (i.startsWith(":") ? 2 : 3),
    r.length - (n === void 0 ? 0 : 1)
  );
}
function Oo(e) {
  const t = new Map(),
    n = Qi();
  return new Proxy(
    {},
    {
      get(r, o) {
        return (
          t.has(o) ||
            Zi(n, () =>
              t.set(
                o,
                k(() => e()[o])
              )
            ),
          t.get(o)()
        );
      },
      getOwnPropertyDescriptor() {
        return { enumerable: !0, configurable: !0 };
      },
      ownKeys() {
        return Reflect.ownKeys(e());
      },
    }
  );
}
function Cs(e, t) {
  const n = new URLSearchParams(e);
  return (
    Object.entries(t).forEach(([r, o]) => {
      o == null || o === "" ? n.delete(r) : n.set(r, String(o));
    }),
    n.toString()
  );
}
const Rs = 100,
  Ao = co(),
  Ut = co(),
  at = () => xs(Ln(Ao), "Make sure your app is wrapped in a <Router />"),
  _n = () => Ln(Ut) || at().base,
  To = (e) => {
    const t = _n();
    return k(() => t.resolvePath(e()));
  },
  Ls = (e) => {
    const t = at();
    return k(() => {
      const n = e();
      return n !== void 0 ? t.renderPath(n) : n;
    });
  },
  xo = () => at().navigatorFactory(),
  $o = () => at().location,
  Od = () => {
    const e = $o(),
      t = xo(),
      n = (r, o) => {
        const i = Cs(e.search, r);
        t(i ? `?${i}` : "", ft(Ue({ scroll: !1 }, o), { resolve: !0 }));
      };
    return [e.query, n];
  };
function Is(e, t = "", n) {
  const { path: r, component: o, data: i, children: s } = e,
    a = !s || (Array.isArray(s) && !s.length),
    u = So(t, r),
    l = a ? u : u.split("/*", 1)[0];
  return {
    originalPath: r,
    pattern: l,
    element: o
      ? () => ne(o, {})
      : () => {
          const { element: f } = e;
          return f === void 0 && n ? ne(n, {}) : f;
        },
    preload: e.component ? o.preload : e.preload,
    data: i,
    matcher: Ps(l, !a),
  };
}
function Fs(e, t = 0) {
  return {
    routes: e,
    score: Bs(e[e.length - 1]) * 1e4 - t,
    matcher(n) {
      const r = [];
      for (let o = e.length - 1; o >= 0; o--) {
        const i = e[o],
          s = i.matcher(n);
        if (!s) return null;
        r.unshift(ft(Ue({}, s), { route: i }));
      }
      return r;
    },
  };
}
function Po(e, t = "", n, r = [], o = []) {
  const i = Array.isArray(e) ? e : [e];
  for (let s = 0, a = i.length; s < a; s++) {
    const u = i[s];
    if (u && typeof u == "object" && u.hasOwnProperty("path")) {
      const l = Is(u, t, n);
      if ((r.push(l), u.children)) Po(u.children, l.pattern, n, r, o);
      else {
        const f = Fs([...r], o.length);
        o.push(f);
      }
      r.pop();
    }
  }
  return r.length ? o : o.sort((s, a) => a.score - s.score);
}
function ks(e, t) {
  for (let n = 0, r = e.length; n < r; n++) {
    const o = e[n].matcher(t);
    if (o) return o;
  }
  return [];
}
function Ms(e, t) {
  const n = new URL("http://sar"),
    r = k(
      (u) => {
        const l = e();
        try {
          return new URL(l, n);
        } catch (f) {
          return console.error(`Invalid path ${l}`), u;
        }
      },
      n,
      { equals: (u, l) => u.href === l.href }
    ),
    o = k(() => r().pathname),
    i = k(() => r().search.slice(1)),
    s = k(() => r().hash.slice(1)),
    a = k(() => "");
  return {
    get pathname() {
      return o();
    },
    get search() {
      return i();
    },
    get hash() {
      return s();
    },
    get state() {
      return t();
    },
    get key() {
      return a();
    },
    query: Oo(Xe(i, () => $s(r()))),
  };
}
function Ns(e, t = "", n, r) {
  const {
      signal: [o, i],
      utils: s = {},
    } = Ss(e),
    a = wt("", t),
    u = void 0;
  if (a === void 0) throw new Error(`${a} is not a valid base path`);
  a && !o().value && i({ value: a, replace: !0, scroll: !1 });
  const [l, f] = ts(),
    [p, d] = se(o().value),
    [y, S] = se(o().state),
    w = Ms(p, y),
    g = [],
    m = {
      pattern: a,
      params: {},
      path: () => a,
      outlet: () => null,
      resolvePath(c) {
        return wt(a, c);
      },
    };
  n && (m.data = n({ params: {}, location: w, navigate: E(m) }));
  function b(c, A, M) {
    te(() => {
      if (typeof A == "number") {
        A &&
          (s.go
            ? s.go(A)
            : console.warn(
                "Router integration does not support relative routing"
              ));
        return;
      }
      const {
          replace: x,
          resolve: I,
          scroll: J,
          state: V,
        } = Ue({ replace: !1, resolve: !0, scroll: !0 }, M),
        z = I ? c.resolvePath(A) : wt("", A);
      if (z === void 0) throw new Error(`Path '${A}' is not a routable path`);
      if (g.length >= Rs) throw new Error("Too many redirects");
      const K = p();
      if (z !== K || V !== y()) {
        const X = g.push({ value: K, replace: x, scroll: J, state: y });
        f(() => {
          d(z), S(V);
        }).then(() => {
          g.length === X && O({ value: z, state: V });
        });
      }
    });
  }
  function E(c) {
    return (c = c || Ln(Ut) || m), (A, M) => b(c, A, M);
  }
  function O(c) {
    const A = g[0];
    A &&
      ((c.value !== A.value || c.state !== A.state) &&
        i(ft(Ue({}, c), { replace: A.replace, scroll: A.scroll })),
      (g.length = 0));
  }
  return (
    ee(() => {
      const { value: c, state: A } = o();
      c !== te(p) &&
        f(() => {
          d(c), S(A);
        });
    }),
    {
      base: m,
      out: u,
      location: w,
      isRouting: l,
      renderPath: s.renderPath || ((c) => c),
      navigatorFactory: E,
    }
  );
}
function _s(e, t, n, r) {
  const { base: o, location: i, navigatorFactory: s } = e,
    { pattern: a, element: u, preload: l, data: f } = r().route,
    p = k(() => r().path),
    d = Oo(() => r().params);
  l && l();
  const y = {
    parent: t,
    pattern: a,
    get child() {
      return n();
    },
    path: p,
    params: d,
    outlet: u,
    resolvePath(S) {
      return wt(o.path(), S, p());
    },
  };
  return f && (y.data = f({ params: d, location: i, navigate: s(y) })), y;
}
const Ds = Mn("<a></a>"),
  Ad = (e) => {
    const { source: t, url: n, base: r, data: o, out: i } = e,
      s = t || Os(),
      a = Ns(s, r, o);
    return ne(Ao.Provider, {
      value: a,
      get children() {
        return e.children;
      },
    });
  },
  Td = (e) => {
    const t = at(),
      n = _n(),
      r = k(() => Po(e.children, So(n.pattern, e.base || ""), js)),
      o = k(() => ks(r(), t.location.pathname));
    t.out &&
      t.out.matches.push(
        o().map(({ route: u, path: l, params: f }) => ({
          originalPath: u.originalPath,
          pattern: u.pattern,
          path: l,
          params: f,
        }))
      );
    const i = [];
    let s;
    const a = k(
      Xe(o, (u, l, f) => {
        let p = l && u.length === l.length;
        const d = [];
        for (let y = 0, S = u.length; y < S; y++) {
          const w = l && l[y],
            g = u[y];
          f && w && g.route.pattern === w.route.pattern
            ? (d[y] = f[y])
            : ((p = !1),
              i[y] && i[y](),
              uo((m) => {
                (i[y] = m),
                  (d[y] = _s(
                    t,
                    d[y - 1] || n,
                    () => a()[y + 1],
                    () => o()[y]
                  ));
              }));
        }
        return (
          i.splice(u.length).forEach((y) => y()), f && p ? f : ((s = d[0]), d)
        );
      })
    );
    return ne(bo, {
      get when() {
        return a() && s;
      },
      children: (u) =>
        ne(Ut.Provider, {
          value: u,
          get children() {
            return u.outlet();
          },
        }),
    });
  },
  xd = (e) => e,
  js = () => {
    const e = _n();
    return ne(bo, {
      get when() {
        return e.child;
      },
      children: (t) =>
        ne(Ut.Provider, {
          value: t,
          get children() {
            return t.outlet();
          },
        }),
    });
  };
function Bo(e) {
  const [, t] = go(e, ["children", "to", "href", "state", "onClick"]),
    n = xo(),
    r = Ls(() => e.to),
    o = (i) => {
      const { onClick: s, to: a, target: u } = e;
      typeof s == "function" ? s(i) : s && s[0](s[1], i),
        a !== void 0 &&
          !i.defaultPrevented &&
          i.button === 0 &&
          (!u || u === "_self") &&
          !(i.metaKey || i.altKey || i.ctrlKey || i.shiftKey) &&
          (i.preventDefault(),
          n(a, {
            resolve: !1,
            replace: e.replace || !1,
            scroll: !e.noScroll,
            state: e.state,
          }));
    };
  return (() => {
    const i = Ds.cloneNode(!0);
    return (
      (i.$$click = o),
      ms(i, t, !1, !0),
      zt(i, () => e.children),
      ee(() => Ye(i, "href", r() || e.href)),
      i
    );
  })();
}
function $d(e) {
  const t = To(() => e.href);
  return ne(
    Bo,
    nt(e, {
      get to() {
        return t();
      },
    })
  );
}
function Pd(e) {
  e = nt({ activeClass: "active" }, e);
  const [, t] = go(e, ["activeClass", "end"]),
    n = $o(),
    r = To(() => e.href),
    o = k(() => {
      const i = r();
      if (i === void 0) return !1;
      const s = i.split(/[?#]/, 1)[0].toLowerCase(),
        a = n.pathname.toLowerCase();
      return e.end ? s === a : a.startsWith(s);
    });
  return ne(
    Bo,
    nt(t, {
      get to() {
        return r();
      },
      get classList() {
        return { [e.activeClass]: o() };
      },
      get ["aria-current"]() {
        return o() ? "page" : void 0;
      },
    })
  );
}
Nn(["click"]);
try {
  self["workbox:window:6.5.0"] && _();
} catch (e) {}
function fr(e, t) {
  return new Promise(function (n) {
    var r = new MessageChannel();
    (r.port1.onmessage = function (o) {
      n(o.data);
    }),
      e.postMessage(t, [r.port2]);
  });
}
function Ws(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function dr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function zs(e, t) {
  var n;
  if (typeof Symbol == "undefined" || e[Symbol.iterator] == null) {
    if (
      Array.isArray(e) ||
      (n = (function (o, i) {
        if (o) {
          if (typeof o == "string") return dr(o, i);
          var s = Object.prototype.toString.call(o).slice(8, -1);
          return (
            s === "Object" && o.constructor && (s = o.constructor.name),
            s === "Map" || s === "Set"
              ? Array.from(o)
              : s === "Arguments" ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)
              ? dr(o, i)
              : void 0
          );
        }
      })(e)) ||
      (t && e && typeof e.length == "number")
    ) {
      n && (e = n);
      var r = 0;
      return function () {
        return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  return (n = e[Symbol.iterator]()).next.bind(n);
}
try {
  self["workbox:core:6.5.0"] && _();
} catch (e) {}
var Jt = function () {
  var e = this;
  this.promise = new Promise(function (t, n) {
    (e.resolve = t), (e.reject = n);
  });
};
function Yt(e, t) {
  var n = location.href;
  return new URL(e, n).href === new URL(t, n).href;
}
var qe = function (e, t) {
  (this.type = e), Object.assign(this, t);
};
function pt(e, t, n) {
  return n
    ? t
      ? t(e)
      : e
    : ((e && e.then) || (e = Promise.resolve(e)), t ? e.then(t) : e);
}
function Us() {}
var qs = { type: "SKIP_WAITING" };
function pr(e, t) {
  if (!t) return e && e.then ? e.then(Us) : Promise.resolve();
}
var Bd = (function (e) {
  var t, n;
  function r(a, u) {
    var l, f;
    return (
      u === void 0 && (u = {}),
      ((l = e.call(this) || this).nn = {}),
      (l.tn = 0),
      (l.rn = new Jt()),
      (l.en = new Jt()),
      (l.on = new Jt()),
      (l.un = 0),
      (l.an = new Set()),
      (l.cn = function () {
        var p = l.fn,
          d = p.installing;
        l.tn > 0 ||
        !Yt(d.scriptURL, l.sn.toString()) ||
        performance.now() > l.un + 6e4
          ? ((l.vn = d), p.removeEventListener("updatefound", l.cn))
          : ((l.hn = d), l.an.add(d), l.rn.resolve(d)),
          ++l.tn,
          d.addEventListener("statechange", l.ln);
      }),
      (l.ln = function (p) {
        var d = l.fn,
          y = p.target,
          S = y.state,
          w = y === l.vn,
          g = { sw: y, isExternal: w, originalEvent: p };
        !w && l.mn && (g.isUpdate = !0),
          l.dispatchEvent(new qe(S, g)),
          S === "installed"
            ? (l.wn = self.setTimeout(function () {
                S === "installed" &&
                  d.waiting === y &&
                  l.dispatchEvent(new qe("waiting", g));
              }, 200))
            : S === "activating" && (clearTimeout(l.wn), w || l.en.resolve(y));
      }),
      (l.dn = function (p) {
        var d = l.hn,
          y = d !== navigator.serviceWorker.controller;
        l.dispatchEvent(
          new qe("controlling", {
            isExternal: y,
            originalEvent: p,
            sw: d,
            isUpdate: l.mn,
          })
        ),
          y || l.on.resolve(d);
      }),
      (l.gn =
        ((f = function (p) {
          var d = p.data,
            y = p.ports,
            S = p.source;
          return pt(l.getSW(), function () {
            l.an.has(S) &&
              l.dispatchEvent(
                new qe("message", {
                  data: d,
                  originalEvent: p,
                  ports: y,
                  sw: S,
                })
              );
          });
        }),
        function () {
          for (var p = [], d = 0; d < arguments.length; d++)
            p[d] = arguments[d];
          try {
            return Promise.resolve(f.apply(this, p));
          } catch (y) {
            return Promise.reject(y);
          }
        })),
      (l.sn = a),
      (l.nn = u),
      navigator.serviceWorker.addEventListener("message", l.gn),
      l
    );
  }
  (n = e),
    ((t = r).prototype = Object.create(n.prototype)),
    (t.prototype.constructor = t),
    (t.__proto__ = n);
  var o,
    i,
    s = r.prototype;
  return (
    (s.register = function (a) {
      var u = (a === void 0 ? {} : a).immediate,
        l = u !== void 0 && u;
      try {
        var f = this;
        return (function (p, d) {
          var y = p();
          return y && y.then ? y.then(d) : d(y);
        })(
          function () {
            if (!l && document.readyState !== "complete")
              return pr(
                new Promise(function (p) {
                  return window.addEventListener("load", p);
                })
              );
          },
          function () {
            return (
              (f.mn = Boolean(navigator.serviceWorker.controller)),
              (f.yn = f.pn()),
              pt(f.bn(), function (p) {
                (f.fn = p),
                  f.yn &&
                    ((f.hn = f.yn),
                    f.en.resolve(f.yn),
                    f.on.resolve(f.yn),
                    f.yn.addEventListener("statechange", f.ln, { once: !0 }));
                var d = f.fn.waiting;
                return (
                  d &&
                    Yt(d.scriptURL, f.sn.toString()) &&
                    ((f.hn = d),
                    Promise.resolve()
                      .then(function () {
                        f.dispatchEvent(
                          new qe("waiting", {
                            sw: d,
                            wasWaitingBeforeRegister: !0,
                          })
                        );
                      })
                      .then(function () {})),
                  f.hn && (f.rn.resolve(f.hn), f.an.add(f.hn)),
                  f.fn.addEventListener("updatefound", f.cn),
                  navigator.serviceWorker.addEventListener(
                    "controllerchange",
                    f.dn
                  ),
                  f.fn
                );
              })
            );
          }
        );
      } catch (p) {
        return Promise.reject(p);
      }
    }),
    (s.update = function () {
      try {
        return this.fn ? pr(this.fn.update()) : void 0;
      } catch (a) {
        return Promise.reject(a);
      }
    }),
    (s.getSW = function () {
      return this.hn !== void 0 ? Promise.resolve(this.hn) : this.rn.promise;
    }),
    (s.messageSW = function (a) {
      try {
        return pt(this.getSW(), function (u) {
          return fr(u, a);
        });
      } catch (u) {
        return Promise.reject(u);
      }
    }),
    (s.messageSkipWaiting = function () {
      this.fn && this.fn.waiting && fr(this.fn.waiting, qs);
    }),
    (s.pn = function () {
      var a = navigator.serviceWorker.controller;
      return a && Yt(a.scriptURL, this.sn.toString()) ? a : void 0;
    }),
    (s.bn = function () {
      try {
        var a = this;
        return (function (u, l) {
          try {
            var f = u();
          } catch (p) {
            return l(p);
          }
          return f && f.then ? f.then(void 0, l) : f;
        })(
          function () {
            return pt(
              navigator.serviceWorker.register(a.sn, a.nn),
              function (u) {
                return (a.un = performance.now()), u;
              }
            );
          },
          function (u) {
            throw u;
          }
        );
      } catch (u) {
        return Promise.reject(u);
      }
    }),
    (o = r),
    (i = [
      {
        key: "active",
        get: function () {
          return this.en.promise;
        },
      },
      {
        key: "controlling",
        get: function () {
          return this.on.promise;
        },
      },
    ]) && Ws(o.prototype, i),
    r
  );
})(
  (function () {
    function e() {
      this.Pn = new Map();
    }
    var t = e.prototype;
    return (
      (t.addEventListener = function (n, r) {
        this.Sn(n).add(r);
      }),
      (t.removeEventListener = function (n, r) {
        this.Sn(n).delete(r);
      }),
      (t.dispatchEvent = function (n) {
        n.target = this;
        for (var r, o = zs(this.Sn(n.type)); !(r = o()).done; ) (0, r.value)(n);
      }),
      (t.Sn = function (n) {
        return this.Pn.has(n) || this.Pn.set(n, new Set()), this.Pn.get(n);
      }),
      e
    );
  })()
);
const Cd = (e) => {
  let t,
    n = !0;
  const [r, o] = se(),
    [i, s] = se(),
    a = In(() => e.children),
    u = e.name || "s";
  e = nt(
    {
      name: u,
      enterActiveClass: u + "-enter-active",
      enterClass: u + "-enter",
      enterToClass: u + "-enter-to",
      exitActiveClass: u + "-exit-active",
      exitClass: u + "-exit",
      exitToClass: u + "-exit-to",
    },
    e
  );
  const {
    onBeforeEnter: l,
    onEnter: f,
    onAfterEnter: p,
    onBeforeExit: d,
    onExit: y,
    onAfterExit: S,
  } = e;
  function w(m, b) {
    if (!n || e.appear) {
      let A = function () {
        m &&
          (m.classList.remove(...O),
          m.classList.remove(...c),
          Dt(() => {
            r() !== m && o(m), i() === m && s(void 0);
          }),
          p && p(m),
          e.mode === "inout" && g(m, b));
      };
      const E = e.enterClass.split(" "),
        O = e.enterActiveClass.split(" "),
        c = e.enterToClass.split(" ");
      l && l(m),
        m.classList.add(...E),
        m.classList.add(...O),
        requestAnimationFrame(() => {
          m.classList.remove(...E),
            m.classList.add(...c),
            f && f(m, A),
            (!f || f.length < 2) &&
              (m.addEventListener("transitionend", A, { once: !0 }),
              m.addEventListener("animationend", A, { once: !0 }));
        });
    }
    b && !e.mode ? s(m) : o(m);
  }
  function g(m, b) {
    const E = e.exitClass.split(" "),
      O = e.exitActiveClass.split(" "),
      c = e.exitToClass.split(" ");
    if (!b.parentNode) return A();
    d && d(b),
      b.classList.add(...E),
      b.classList.add(...O),
      requestAnimationFrame(() => {
        b.classList.remove(...E), b.classList.add(...c);
      }),
      y && y(b, A),
      (!y || y.length < 2) &&
        (b.addEventListener("transitionend", A, { once: !0 }),
        b.addEventListener("animationend", A, { once: !0 }));
    function A() {
      b.classList.remove(...O),
        b.classList.remove(...c),
        r() === b && o(void 0),
        S && S(b),
        e.mode === "outin" && w(m, b);
    }
  }
  return (
    _t((m) => {
      for (t = a(); typeof t == "function"; ) t = t();
      return te(
        () => (
          t && t !== m && (e.mode !== "outin" ? w(t, m) : n && o(t)),
          m && m !== t && e.mode !== "inout" && g(t, m),
          (n = !1),
          t
        )
      );
    }),
    [r, i]
  );
};
var Ke =
  typeof globalThis != "undefined"
    ? globalThis
    : typeof window != "undefined"
    ? window
    : typeof global != "undefined"
    ? global
    : typeof self != "undefined"
    ? self
    : {};
function Ks(e) {
  if (e.__esModule) return e;
  var t = Object.defineProperty({}, "__esModule", { value: !0 });
  return (
    Object.keys(e).forEach(function (n) {
      var r = Object.getOwnPropertyDescriptor(e, n);
      Object.defineProperty(
        t,
        n,
        r.get
          ? r
          : {
              enumerable: !0,
              get: function () {
                return e[n];
              },
            }
      );
    }),
    t
  );
}
class ae {
    constructor(e) {
        e == null && (e = new Date().getTime()),
            (this.N = 624),
            (this.M = 397),
            (this.MATRIX_A = 2567483615),
            (this.UPPER_MASK = 2147483648),
            (this.LOWER_MASK = 2147483647),
            (this.mt = new Array(this.N)),
            (this.mti = this.N + 1),
            e.constructor == Array
                ? this.init_by_array(e, e.length)
                : this.init_seed(e);
    }
    init_seed(e) {
        for (this.mt[0] = e >>> 0, this.mti = 1; this.mti < this.N; this.mti++) {
            var e = this.mt[this.mti - 1] ^ (this.mt[this.mti - 1] >>> 30);
            (this.mt[this.mti] =
                ((((e & 4294901760) >>> 16) * 1812433253) << 16) +
                (e & 65535) * 1812433253 +
                this.mti),
                (this.mt[this.mti] >>>= 0);
        }
    }
    init_by_array(e, t) {
        var n, r, o;
        for (this.init_seed(19650218), n = 1, r = 0, o = this.N > t ? this.N : t; o; o--) {
            var i = this.mt[n - 1] ^ (this.mt[n - 1] >>> 30);
            (this.mt[n] =
                (this.mt[n] ^
                    (((((i & 4294901760) >>> 16) * 1664525) << 16) +
                        (i & 65535) * 1664525)) +
                e[r] +
                r),
                (this.mt[n] >>>= 0),
                n++,
                r++,
                n >= this.N && ((this.mt[0] = this.mt[this.N - 1]), (n = 1)),
                r >= t && (r = 0);
        }
        for (o = this.N - 1; o; o--) {
            var i = this.mt[n - 1] ^ (this.mt[n - 1] >>> 30);
            (this.mt[n] =
                (this.mt[n] ^
                    (((((i & 4294901760) >>> 16) * 1566083941) << 16) +
                        (i & 65535) * 1566083941)) -
                n),
                (this.mt[n] >>>= 0),
                n++,
                n >= this.N && ((this.mt[0] = this.mt[this.N - 1]), (n = 1));
        }
        this.mt[0] = 2147483648;
    }
    random_int() {
        var e, t = new Array(0, this.MATRIX_A);
        if (this.mti >= this.N) {
            var n;
            for (this.mti == this.N + 1 && this.init_seed(5489), n = 0; n < this.N - this.M; n++)
                (e = (this.mt[n] & this.UPPER_MASK) | (this.mt[n + 1] & this.LOWER_MASK)),
                    (this.mt[n] = this.mt[n + this.M] ^ (e >>> 1) ^ t[e & 1]);
            for (; n < this.N - 1; n++)
                (e = (this.mt[n] & this.UPPER_MASK) | (this.mt[n + 1] & this.LOWER_MASK)),
                    (this.mt[n] = this.mt[n + (this.M - this.N)] ^ (e >>> 1) ^ t[e & 1]);
            (e =
                (this.mt[this.N - 1] & this.UPPER_MASK) | (this.mt[0] & this.LOWER_MASK)),
                (this.mt[this.N - 1] = this.mt[this.M - 1] ^ (e >>> 1) ^ t[e & 1]),
                (this.mti = 0);
        }
        return (
            (e = this.mt[this.mti++]),
            (e ^= e >>> 11),
            (e ^= (e << 7) & 2636928640),
            (e ^= (e << 15) & 4022730752),
            (e ^= e >>> 18),
            e >>> 0
        );
    }
    random_int31() {
        return this.random_int() >>> 1;
    }
    random_incl() {
        return this.random_int() * (1 / 4294967295);
    }
    random() {
        return this.random_int() * (1 / 4294967296);
    }
    random_excl() {
        return (this.random_int() + 0.5) * (1 / 4294967296);
    }
    random_long() {
        var e = this.random_int() >>> 5, t = this.random_int() >>> 6;
        return (e * 67108864 + t) * (1 / 9007199254740992);
    }
}
var Rd = ae;
const Dn = Symbol("store-raw"),
  Ct = Symbol("store-node"),
  Gs = Symbol("store-name");
function Co(e, t) {
  let n = e[me];
  if (!n) {
    Object.defineProperty(e, me, { value: (n = new Proxy(e, Xs)) });
    const r = Object.keys(e),
      o = Object.getOwnPropertyDescriptors(e);
    for (let i = 0, s = r.length; i < s; i++) {
      const a = r[i];
      if (o[a].get) {
        const u = o[a].get.bind(n);
        Object.defineProperty(e, a, { get: u });
      }
    }
  }
  return n;
}
function ke(e) {
  return (
    e != null &&
    typeof e == "object" &&
    (e[me] ||
      !e.__proto__ ||
      e.__proto__ === Object.prototype ||
      Array.isArray(e))
  );
}
function rt(e, t = new Set()) {
  let n, r, o, i;
  if ((n = e != null && e[Dn])) return n;
  if (!ke(e) || t.has(e)) return e;
  if (Array.isArray(e)) {
    Object.isFrozen(e) ? (e = e.slice(0)) : t.add(e);
    for (let s = 0, a = e.length; s < a; s++)
      (o = e[s]), (r = rt(o, t)) !== o && (e[s] = r);
  } else {
    Object.isFrozen(e) ? (e = Object.assign({}, e)) : t.add(e);
    const s = Object.keys(e),
      a = Object.getOwnPropertyDescriptors(e);
    for (let u = 0, l = s.length; u < l; u++)
      (i = s[u]), !a[i].get && ((o = e[i]), (r = rt(o, t)) !== o && (e[i] = r));
  }
  return e;
}
function Rt(e) {
  let t = e[Ct];
  return t || Object.defineProperty(e, Ct, { value: (t = {}) }), t;
}
function Hs(e, t) {
  const n = Reflect.getOwnPropertyDescriptor(e, t);
  return (
    !n ||
      n.get ||
      !n.configurable ||
      t === me ||
      t === Ct ||
      t === Gs ||
      (delete n.value, delete n.writable, (n.get = () => e[me][t])),
    n
  );
}
function Vs(e) {
  if (lo()) {
    const t = Rt(e);
    (t._ || (t._ = mn()))();
  }
  return Reflect.ownKeys(e);
}
function mn() {
  const [e, t] = se(void 0, { equals: !1, internal: !0 });
  return (e.$ = t), e;
}
const Xs = {
  get(e, t, n) {
    if (t === Dn) return e;
    if (t === me) return n;
    const r = e[t];
    if (t === Ct || t === "__proto__") return r;
    const o = ke(r);
    if (lo() && (typeof r != "function" || e.hasOwnProperty(t))) {
      let i, s;
      o && (i = Rt(r)) && ((s = i._ || (i._ = mn())), s()),
        (i = Rt(e)),
        (s = i[t] || (i[t] = mn())),
        s();
    }
    return o ? Co(r) : r;
  },
  set() {
    return !0;
  },
  deleteProperty() {
    return !0;
  },
  ownKeys: Vs,
  getOwnPropertyDescriptor: Hs,
};
function Lt(e, t, n) {
  if (e[t] === n) return;
  const r = Array.isArray(e),
    o = e.length,
    i = n === void 0,
    s = r || i === t in e;
  i ? delete e[t] : (e[t] = n);
  let a = Rt(e),
    u;
  (u = a[t]) && u.$(),
    r && e.length !== o && (u = a.length) && u.$(),
    s && (u = a._) && u.$();
}
function Js(e, t) {
  const n = Object.keys(t);
  for (let r = 0; r < n.length; r += 1) {
    const o = n[r];
    Lt(e, o, t[o]);
  }
}
function He(e, t, n = []) {
  let r,
    o = e;
  if (t.length > 1) {
    r = t.shift();
    const s = typeof r,
      a = Array.isArray(e);
    if (Array.isArray(r)) {
      for (let u = 0; u < r.length; u++) He(e, [r[u]].concat(t), n);
      return;
    } else if (a && s === "function") {
      for (let u = 0; u < e.length; u++) r(e[u], u) && He(e, [u].concat(t), n);
      return;
    } else if (a && s === "object") {
      const { from: u = 0, to: l = e.length - 1, by: f = 1 } = r;
      for (let p = u; p <= l; p += f) He(e, [p].concat(t), n);
      return;
    } else if (t.length > 1) {
      He(e[r], t, [r].concat(n));
      return;
    }
    (o = e[r]), (n = [r].concat(n));
  }
  let i = t[0];
  (typeof i == "function" && ((i = i(o, n)), i === o)) ||
    (r === void 0 && i == null) ||
    ((i = rt(i)),
    r === void 0 || (ke(o) && ke(i) && !Array.isArray(i))
      ? Js(o, i)
      : Lt(e, r, i));
}
function Ld(e, t) {
  const n = rt(e || {}),
    r = Co(n);
  function o(...i) {
    Dt(() => He(n, i));
  }
  return [r, o];
}
const Ro = {
  get(e, t) {
    if (t === Dn) return e;
    const n = e[t];
    return ke(n) ? new Proxy(n, Ro) : n;
  },
  set(e, t, n) {
    return Lt(e, t, rt(n)), !0;
  },
  deleteProperty(e, t) {
    return Lt(e, t, void 0), !0;
  },
};
function Id(e) {
  return (t) => (ke(t) && e(new Proxy(t, Ro)), t);
}
var yr = Object.prototype.toString,
  Lo = function (t) {
    var n = yr.call(t),
      r = n === "[object Arguments]";
    return (
      r ||
        (r =
          n !== "[object Array]" &&
          t !== null &&
          typeof t == "object" &&
          typeof t.length == "number" &&
          t.length >= 0 &&
          yr.call(t.callee) === "[object Function]"),
      r
    );
  },
  Io;
if (!Object.keys) {
  var yt = Object.prototype.hasOwnProperty,
    vr = Object.prototype.toString,
    Ys = Lo,
    hr = Object.prototype.propertyIsEnumerable,
    Qs = !hr.call({ toString: null }, "toString"),
    Zs = hr.call(function () {}, "prototype"),
    vt = [
      "toString",
      "toLocaleString",
      "valueOf",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "constructor",
    ],
    Qt = function (e) {
      var t = e.constructor;
      return t && t.prototype === e;
    },
    ea = {
      $applicationCache: !0,
      $console: !0,
      $external: !0,
      $frame: !0,
      $frameElement: !0,
      $frames: !0,
      $innerHeight: !0,
      $innerWidth: !0,
      $onmozfullscreenchange: !0,
      $onmozfullscreenerror: !0,
      $outerHeight: !0,
      $outerWidth: !0,
      $pageXOffset: !0,
      $pageYOffset: !0,
      $parent: !0,
      $scrollLeft: !0,
      $scrollTop: !0,
      $scrollX: !0,
      $scrollY: !0,
      $self: !0,
      $webkitIndexedDB: !0,
      $webkitStorageInfo: !0,
      $window: !0,
    },
    ta = (function () {
      if (typeof window == "undefined") return !1;
      for (var e in window)
        try {
          if (
            !ea["$" + e] &&
            yt.call(window, e) &&
            window[e] !== null &&
            typeof window[e] == "object"
          )
            try {
              Qt(window[e]);
            } catch (t) {
              return !0;
            }
        } catch (t) {
          return !0;
        }
      return !1;
    })(),
    na = function (e) {
      if (typeof window == "undefined" || !ta) return Qt(e);
      try {
        return Qt(e);
      } catch (t) {
        return !1;
      }
    };
  Io = function (t) {
    var n = t !== null && typeof t == "object",
      r = vr.call(t) === "[object Function]",
      o = Ys(t),
      i = n && vr.call(t) === "[object String]",
      s = [];
    if (!n && !r && !o)
      throw new TypeError("Object.keys called on a non-object");
    var a = Zs && r;
    if (i && t.length > 0 && !yt.call(t, 0))
      for (var u = 0; u < t.length; ++u) s.push(String(u));
    if (o && t.length > 0) for (var l = 0; l < t.length; ++l) s.push(String(l));
    else
      for (var f in t)
        !(a && f === "prototype") && yt.call(t, f) && s.push(String(f));
    if (Qs)
      for (var p = na(t), d = 0; d < vt.length; ++d)
        !(p && vt[d] === "constructor") && yt.call(t, vt[d]) && s.push(vt[d]);
    return s;
  };
}
var ra = Io,
  oa = Array.prototype.slice,
  ia = Lo,
  mr = Object.keys,
  St = mr
    ? function (t) {
        return mr(t);
      }
    : ra,
  gr = Object.keys;
St.shim = function () {
  if (Object.keys) {
    var t = (function () {
      var n = Object.keys(arguments);
      return n && n.length === arguments.length;
    })(1, 2);
    t ||
      (Object.keys = function (r) {
        return ia(r) ? gr(oa.call(r)) : gr(r);
      });
  } else Object.keys = St;
  return Object.keys || St;
};
var sa = St,
  aa = sa,
  ua = typeof Symbol == "function" && typeof Symbol("foo") == "symbol",
  la = Object.prototype.toString,
  ca = Array.prototype.concat,
  jn = Object.defineProperty,
  fa = function (e) {
    return typeof e == "function" && la.call(e) === "[object Function]";
  },
  da = function () {
    var e = {};
    try {
      jn(e, "x", { enumerable: !1, value: e });
      for (var t in e) return !1;
      return e.x === e;
    } catch (n) {
      return !1;
    }
  },
  Fo = jn && da(),
  pa = function (e, t, n, r) {
    (t in e && (!fa(r) || !r())) ||
      (Fo
        ? jn(e, t, { configurable: !0, enumerable: !1, value: n, writable: !0 })
        : (e[t] = n));
  },
  ko = function (e, t) {
    var n = arguments.length > 2 ? arguments[2] : {},
      r = aa(t);
    ua && (r = ca.call(r, Object.getOwnPropertySymbols(t)));
    for (var o = 0; o < r.length; o += 1) pa(e, r[o], t[r[o]], n[r[o]]);
  };
ko.supportsDescriptors = !!Fo;
var De = ko,
  je = { exports: {} },
  ya = "Function.prototype.bind called on incompatible ",
  Zt = Array.prototype.slice,
  va = Object.prototype.toString,
  ha = "[object Function]",
  ma = function (t) {
    var n = this;
    if (typeof n != "function" || va.call(n) !== ha)
      throw new TypeError(ya + n);
    for (
      var r = Zt.call(arguments, 1),
        o,
        i = function () {
          if (this instanceof o) {
            var f = n.apply(this, r.concat(Zt.call(arguments)));
            return Object(f) === f ? f : this;
          } else return n.apply(t, r.concat(Zt.call(arguments)));
        },
        s = Math.max(0, n.length - r.length),
        a = [],
        u = 0;
      u < s;
      u++
    )
      a.push("$" + u);
    if (
      ((o = Function(
        "binder",
        "return function (" +
          a.join(",") +
          "){ return binder.apply(this,arguments); }"
      )(i)),
      n.prototype)
    ) {
      var l = function () {};
      (l.prototype = n.prototype),
        (o.prototype = new l()),
        (l.prototype = null);
    }
    return o;
  },
  ga = ma,
  Wn = Function.prototype.bind || ga,
  Mo = function () {
    if (
      typeof Symbol != "function" ||
      typeof Object.getOwnPropertySymbols != "function"
    )
      return !1;
    if (typeof Symbol.iterator == "symbol") return !0;
    var t = {},
      n = Symbol("test"),
      r = Object(n);
    if (
      typeof n == "string" ||
      Object.prototype.toString.call(n) !== "[object Symbol]" ||
      Object.prototype.toString.call(r) !== "[object Symbol]"
    )
      return !1;
    var o = 42;
    t[n] = o;
    for (n in t) return !1;
    if (
      (typeof Object.keys == "function" && Object.keys(t).length !== 0) ||
      (typeof Object.getOwnPropertyNames == "function" &&
        Object.getOwnPropertyNames(t).length !== 0)
    )
      return !1;
    var i = Object.getOwnPropertySymbols(t);
    if (
      i.length !== 1 ||
      i[0] !== n ||
      !Object.prototype.propertyIsEnumerable.call(t, n)
    )
      return !1;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var s = Object.getOwnPropertyDescriptor(t, n);
      if (s.value !== o || s.enumerable !== !0) return !1;
    }
    return !0;
  },
  br = typeof Symbol != "undefined" && Symbol,
  ba = Mo,
  No = function () {
    return typeof br != "function" ||
      typeof Symbol != "function" ||
      typeof br("foo") != "symbol" ||
      typeof Symbol("bar") != "symbol"
      ? !1
      : ba();
  },
  Ea = Wn,
  _o = Ea.call(Function.call, Object.prototype.hasOwnProperty),
  $,
  ot = SyntaxError,
  Do = Function,
  Be = TypeError,
  en = function (e) {
    try {
      return Do('"use strict"; return (' + e + ").constructor;")();
    } catch (t) {}
  },
  ye = Object.getOwnPropertyDescriptor;
if (ye)
  try {
    ye({}, "");
  } catch (e) {
    ye = null;
  }
var tn = function () {
    throw new Be();
  },
  wa = ye
    ? (function () {
        try {
          return arguments.callee, tn;
        } catch (e) {
          try {
            return ye(arguments, "callee").get;
          } catch (t) {
            return tn;
          }
        }
      })()
    : tn,
  Te = No(),
  le =
    Object.getPrototypeOf ||
    function (e) {
      return e.__proto__;
    },
  xe = {},
  Sa = typeof Uint8Array == "undefined" ? $ : le(Uint8Array),
  Ce = {
    "%AggregateError%":
      typeof AggregateError == "undefined" ? $ : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer == "undefined" ? $ : ArrayBuffer,
    "%ArrayIteratorPrototype%": Te ? le([][Symbol.iterator]()) : $,
    "%AsyncFromSyncIteratorPrototype%": $,
    "%AsyncFunction%": xe,
    "%AsyncGenerator%": xe,
    "%AsyncGeneratorFunction%": xe,
    "%AsyncIteratorPrototype%": xe,
    "%Atomics%": typeof Atomics == "undefined" ? $ : Atomics,
    "%BigInt%": typeof BigInt == "undefined" ? $ : BigInt,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView == "undefined" ? $ : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": Error,
    "%eval%": eval,
    "%EvalError%": EvalError,
    "%Float32Array%": typeof Float32Array == "undefined" ? $ : Float32Array,
    "%Float64Array%": typeof Float64Array == "undefined" ? $ : Float64Array,
    "%FinalizationRegistry%":
      typeof FinalizationRegistry == "undefined" ? $ : FinalizationRegistry,
    "%Function%": Do,
    "%GeneratorFunction%": xe,
    "%Int8Array%": typeof Int8Array == "undefined" ? $ : Int8Array,
    "%Int16Array%": typeof Int16Array == "undefined" ? $ : Int16Array,
    "%Int32Array%": typeof Int32Array == "undefined" ? $ : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": Te ? le(le([][Symbol.iterator]())) : $,
    "%JSON%": typeof JSON == "object" ? JSON : $,
    "%Map%": typeof Map == "undefined" ? $ : Map,
    "%MapIteratorPrototype%":
      typeof Map == "undefined" || !Te ? $ : le(new Map()[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": Object,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise == "undefined" ? $ : Promise,
    "%Proxy%": typeof Proxy == "undefined" ? $ : Proxy,
    "%RangeError%": RangeError,
    "%ReferenceError%": ReferenceError,
    "%Reflect%": typeof Reflect == "undefined" ? $ : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set == "undefined" ? $ : Set,
    "%SetIteratorPrototype%":
      typeof Set == "undefined" || !Te ? $ : le(new Set()[Symbol.iterator]()),
    "%SharedArrayBuffer%":
      typeof SharedArrayBuffer == "undefined" ? $ : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": Te ? le(""[Symbol.iterator]()) : $,
    "%Symbol%": Te ? Symbol : $,
    "%SyntaxError%": ot,
    "%ThrowTypeError%": wa,
    "%TypedArray%": Sa,
    "%TypeError%": Be,
    "%Uint8Array%": typeof Uint8Array == "undefined" ? $ : Uint8Array,
    "%Uint8ClampedArray%":
      typeof Uint8ClampedArray == "undefined" ? $ : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array == "undefined" ? $ : Uint16Array,
    "%Uint32Array%": typeof Uint32Array == "undefined" ? $ : Uint32Array,
    "%URIError%": URIError,
    "%WeakMap%": typeof WeakMap == "undefined" ? $ : WeakMap,
    "%WeakRef%": typeof WeakRef == "undefined" ? $ : WeakRef,
    "%WeakSet%": typeof WeakSet == "undefined" ? $ : WeakSet,
  },
  Oa = function e(t) {
    var n;
    if (t === "%AsyncFunction%") n = en("async function () {}");
    else if (t === "%GeneratorFunction%") n = en("function* () {}");
    else if (t === "%AsyncGeneratorFunction%") n = en("async function* () {}");
    else if (t === "%AsyncGenerator%") {
      var r = e("%AsyncGeneratorFunction%");
      r && (n = r.prototype);
    } else if (t === "%AsyncIteratorPrototype%") {
      var o = e("%AsyncGenerator%");
      o && (n = le(o.prototype));
    }
    return (Ce[t] = n), n;
  },
  Er = {
    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
    "%ArrayPrototype%": ["Array", "prototype"],
    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
    "%ArrayProto_values%": ["Array", "prototype", "values"],
    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
    "%AsyncGeneratorPrototype%": [
      "AsyncGeneratorFunction",
      "prototype",
      "prototype",
    ],
    "%BooleanPrototype%": ["Boolean", "prototype"],
    "%DataViewPrototype%": ["DataView", "prototype"],
    "%DatePrototype%": ["Date", "prototype"],
    "%ErrorPrototype%": ["Error", "prototype"],
    "%EvalErrorPrototype%": ["EvalError", "prototype"],
    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
    "%FunctionPrototype%": ["Function", "prototype"],
    "%Generator%": ["GeneratorFunction", "prototype"],
    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
    "%JSONParse%": ["JSON", "parse"],
    "%JSONStringify%": ["JSON", "stringify"],
    "%MapPrototype%": ["Map", "prototype"],
    "%NumberPrototype%": ["Number", "prototype"],
    "%ObjectPrototype%": ["Object", "prototype"],
    "%ObjProto_toString%": ["Object", "prototype", "toString"],
    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
    "%PromisePrototype%": ["Promise", "prototype"],
    "%PromiseProto_then%": ["Promise", "prototype", "then"],
    "%Promise_all%": ["Promise", "all"],
    "%Promise_reject%": ["Promise", "reject"],
    "%Promise_resolve%": ["Promise", "resolve"],
    "%RangeErrorPrototype%": ["RangeError", "prototype"],
    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
    "%RegExpPrototype%": ["RegExp", "prototype"],
    "%SetPrototype%": ["Set", "prototype"],
    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
    "%StringPrototype%": ["String", "prototype"],
    "%SymbolPrototype%": ["Symbol", "prototype"],
    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
    "%TypeErrorPrototype%": ["TypeError", "prototype"],
    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
    "%URIErrorPrototype%": ["URIError", "prototype"],
    "%WeakMapPrototype%": ["WeakMap", "prototype"],
    "%WeakSetPrototype%": ["WeakSet", "prototype"],
  },
  qt = Wn,
  It = _o,
  Aa = qt.call(Function.call, Array.prototype.concat),
  Ta = qt.call(Function.apply, Array.prototype.splice),
  wr = qt.call(Function.call, String.prototype.replace),
  Ft = qt.call(Function.call, String.prototype.slice),
  xa =
    /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
  $a = /\\(\\)?/g,
  Pa = function (t) {
    var n = Ft(t, 0, 1),
      r = Ft(t, -1);
    if (n === "%" && r !== "%")
      throw new ot("invalid intrinsic syntax, expected closing `%`");
    if (r === "%" && n !== "%")
      throw new ot("invalid intrinsic syntax, expected opening `%`");
    var o = [];
    return (
      wr(t, xa, function (i, s, a, u) {
        o[o.length] = a ? wr(u, $a, "$1") : s || i;
      }),
      o
    );
  },
  Ba = function (t, n) {
    var r = t,
      o;
    if ((It(Er, r) && ((o = Er[r]), (r = "%" + o[0] + "%")), It(Ce, r))) {
      var i = Ce[r];
      if ((i === xe && (i = Oa(r)), typeof i == "undefined" && !n))
        throw new Be(
          "intrinsic " +
            t +
            " exists, but is not available. Please file an issue!"
        );
      return { alias: o, name: r, value: i };
    }
    throw new ot("intrinsic " + t + " does not exist!");
  },
  q = function (t, n) {
    if (typeof t != "string" || t.length === 0)
      throw new Be("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof n != "boolean")
      throw new Be('"allowMissing" argument must be a boolean');
    var r = Pa(t),
      o = r.length > 0 ? r[0] : "",
      i = Ba("%" + o + "%", n),
      s = i.name,
      a = i.value,
      u = !1,
      l = i.alias;
    l && ((o = l[0]), Ta(r, Aa([0, 1], l)));
    for (var f = 1, p = !0; f < r.length; f += 1) {
      var d = r[f],
        y = Ft(d, 0, 1),
        S = Ft(d, -1);
      if (
        (y === '"' ||
          y === "'" ||
          y === "`" ||
          S === '"' ||
          S === "'" ||
          S === "`") &&
        y !== S
      )
        throw new ot("property names with quotes must have matching quotes");
      if (
        ((d === "constructor" || !p) && (u = !0),
        (o += "." + d),
        (s = "%" + o + "%"),
        It(Ce, s))
      )
        a = Ce[s];
      else if (a != null) {
        if (!(d in a)) {
          if (!n)
            throw new Be(
              "base intrinsic for " +
                t +
                " exists, but the property is not available."
            );
          return;
        }
        if (ye && f + 1 >= r.length) {
          var w = ye(a, d);
          (p = !!w),
            p && "get" in w && !("originalValue" in w.get)
              ? (a = w.get)
              : (a = a[d]);
        } else (p = It(a, d)), (a = a[d]);
        p && !u && (Ce[s] = a);
      }
    }
    return a;
  };
(function (e) {
  var t = Wn,
    n = q,
    r = n("%Function.prototype.apply%"),
    o = n("%Function.prototype.call%"),
    i = n("%Reflect.apply%", !0) || t.call(o, r),
    s = n("%Object.getOwnPropertyDescriptor%", !0),
    a = n("%Object.defineProperty%", !0),
    u = n("%Math.max%");
  if (a)
    try {
      a({}, "a", { value: 1 });
    } catch (f) {
      a = null;
    }
  e.exports = function (p) {
    var d = i(t, o, arguments);
    if (s && a) {
      var y = s(d, "length");
      y.configurable &&
        a(d, "length", { value: 1 + u(0, p.length - (arguments.length - 1)) });
    }
    return d;
  };
  var l = function () {
    return i(t, r, arguments);
  };
  a ? a(e.exports, "apply", { value: l }) : (e.exports.apply = l);
})(je);
var jo = q,
  Wo = je.exports,
  Ca = Wo(jo("String.prototype.indexOf")),
  ge = function (t, n) {
    var r = jo(t, !!n);
    return typeof r == "function" && Ca(t, ".prototype.") > -1 ? Wo(r) : r;
  },
  Ra = q,
  La = Ra("%TypeError%"),
  Ia = function (t, n) {
    if (t == null) throw new La(n || "Cannot call method on " + t);
    return t;
  },
  Kt = Ia,
  Fa = q,
  zo = Fa("%Array%"),
  ka = !zo.isArray && ge("Object.prototype.toString"),
  Ma =
    zo.isArray ||
    function (t) {
      return ka(t) === "[object Array]";
    },
  Uo = q,
  Na = ge,
  _a = Uo("%TypeError%"),
  Da = Ma,
  ja = Uo("%Reflect.apply%", !0) || Na("%Function.prototype.apply%"),
  Wa = function (t, n) {
    var r = arguments.length > 2 ? arguments[2] : [];
    if (!Da(r))
      throw new _a(
        "Assertion failed: optional `argumentsList`, if provided, must be a List"
      );
    return ja(t, n, r);
  },
  za = {},
  Ua = Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: "Module",
    default: za,
  }),
  qa = Ks(Ua),
  zn = typeof Map == "function" && Map.prototype,
  nn =
    Object.getOwnPropertyDescriptor && zn
      ? Object.getOwnPropertyDescriptor(Map.prototype, "size")
      : null,
  kt = zn && nn && typeof nn.get == "function" ? nn.get : null,
  Ka = zn && Map.prototype.forEach,
  Un = typeof Set == "function" && Set.prototype,
  rn =
    Object.getOwnPropertyDescriptor && Un
      ? Object.getOwnPropertyDescriptor(Set.prototype, "size")
      : null,
  Mt = Un && rn && typeof rn.get == "function" ? rn.get : null,
  Ga = Un && Set.prototype.forEach,
  Ha = typeof WeakMap == "function" && WeakMap.prototype,
  Ze = Ha ? WeakMap.prototype.has : null,
  Va = typeof WeakSet == "function" && WeakSet.prototype,
  et = Va ? WeakSet.prototype.has : null,
  Xa = typeof WeakRef == "function" && WeakRef.prototype,
  Sr = Xa ? WeakRef.prototype.deref : null,
  Ja = Boolean.prototype.valueOf,
  Ya = Object.prototype.toString,
  Qa = Function.prototype.toString,
  Za = String.prototype.match,
  qn = String.prototype.slice,
  fe = String.prototype.replace,
  eu = String.prototype.toUpperCase,
  Or = String.prototype.toLowerCase,
  qo = RegExp.prototype.test,
  Ar = Array.prototype.concat,
  Q = Array.prototype.join,
  tu = Array.prototype.slice,
  Tr = Math.floor,
  gn = typeof BigInt == "function" ? BigInt.prototype.valueOf : null,
  on = Object.getOwnPropertySymbols,
  bn =
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? Symbol.prototype.toString
      : null,
  Me = typeof Symbol == "function" && typeof Symbol.iterator == "object",
  W =
    typeof Symbol == "function" &&
    Symbol.toStringTag &&
    (typeof Symbol.toStringTag === Me ? "object" : "symbol")
      ? Symbol.toStringTag
      : null,
  Ko = Object.prototype.propertyIsEnumerable,
  xr =
    (typeof Reflect == "function"
      ? Reflect.getPrototypeOf
      : Object.getPrototypeOf) ||
    ([].__proto__ === Array.prototype
      ? function (e) {
          return e.__proto__;
        }
      : null);
function $r(e, t) {
  if (
    e === 1 / 0 ||
    e === -1 / 0 ||
    e !== e ||
    (e && e > -1e3 && e < 1e3) ||
    qo.call(/e/, t)
  )
    return t;
  var n = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof e == "number") {
    var r = e < 0 ? -Tr(-e) : Tr(e);
    if (r !== e) {
      var o = String(r),
        i = qn.call(t, o.length + 1);
      return (
        fe.call(o, n, "$&_") +
        "." +
        fe.call(fe.call(i, /([0-9]{3})/g, "$&_"), /_$/, "")
      );
    }
  }
  return fe.call(t, n, "$&_");
}
var sn = qa.custom,
  an = sn && Ho(sn) ? sn : null,
  nu = function e(t, n, r, o) {
    var i = n || {};
    if (
      ce(i, "quoteStyle") &&
      i.quoteStyle !== "single" &&
      i.quoteStyle !== "double"
    )
      throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (
      ce(i, "maxStringLength") &&
      (typeof i.maxStringLength == "number"
        ? i.maxStringLength < 0 && i.maxStringLength !== 1 / 0
        : i.maxStringLength !== null)
    )
      throw new TypeError(
        'option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`'
      );
    var s = ce(i, "customInspect") ? i.customInspect : !0;
    if (typeof s != "boolean" && s !== "symbol")
      throw new TypeError(
        "option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`"
      );
    if (
      ce(i, "indent") &&
      i.indent !== null &&
      i.indent !== "	" &&
      !(parseInt(i.indent, 10) === i.indent && i.indent > 0)
    )
      throw new TypeError(
        'option "indent" must be "\\t", an integer > 0, or `null`'
      );
    if (ce(i, "numericSeparator") && typeof i.numericSeparator != "boolean")
      throw new TypeError(
        'option "numericSeparator", if provided, must be `true` or `false`'
      );
    var a = i.numericSeparator;
    if (typeof t == "undefined") return "undefined";
    if (t === null) return "null";
    if (typeof t == "boolean") return t ? "true" : "false";
    if (typeof t == "string") return Xo(t, i);
    if (typeof t == "number") {
      if (t === 0) return 1 / 0 / t > 0 ? "0" : "-0";
      var u = String(t);
      return a ? $r(t, u) : u;
    }
    if (typeof t == "bigint") {
      var l = String(t) + "n";
      return a ? $r(t, l) : l;
    }
    var f = typeof i.depth == "undefined" ? 5 : i.depth;
    if (
      (typeof r == "undefined" && (r = 0),
      r >= f && f > 0 && typeof t == "object")
    )
      return En(t) ? "[Array]" : "[Object]";
    var p = wu(i, r);
    if (typeof o == "undefined") o = [];
    else if (Vo(o, t) >= 0) return "[Circular]";
    function d(K, X, ut) {
      if ((X && ((o = tu.call(o)), o.push(X)), ut)) {
        var We = { depth: i.depth };
        return (
          ce(i, "quoteStyle") && (We.quoteStyle = i.quoteStyle),
          e(K, We, r + 1, o)
        );
      }
      return e(K, i, r + 1, o);
    }
    if (typeof t == "function") {
      var y = du(t),
        S = ht(t, d);
      return (
        "[Function" +
        (y ? ": " + y : " (anonymous)") +
        "]" +
        (S.length > 0 ? " { " + Q.call(S, ", ") + " }" : "")
      );
    }
    if (Ho(t)) {
      var w = Me
        ? fe.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1")
        : bn.call(t);
      return typeof t == "object" && !Me ? Ge(w) : w;
    }
    if (gu(t)) {
      for (
        var g = "<" + Or.call(String(t.nodeName)),
          m = t.attributes || [],
          b = 0;
        b < m.length;
        b++
      )
        g += " " + m[b].name + "=" + Go(ru(m[b].value), "double", i);
      return (
        (g += ">"),
        t.childNodes && t.childNodes.length && (g += "..."),
        (g += "</" + Or.call(String(t.nodeName)) + ">"),
        g
      );
    }
    if (En(t)) {
      if (t.length === 0) return "[]";
      var E = ht(t, d);
      return p && !Eu(E) ? "[" + wn(E, p) + "]" : "[ " + Q.call(E, ", ") + " ]";
    }
    if (su(t)) {
      var O = ht(t, d);
      return "cause" in t && !Ko.call(t, "cause")
        ? "{ [" +
            String(t) +
            "] " +
            Q.call(Ar.call("[cause]: " + d(t.cause), O), ", ") +
            " }"
        : O.length === 0
        ? "[" + String(t) + "]"
        : "{ [" + String(t) + "] " + Q.call(O, ", ") + " }";
    }
    if (typeof t == "object" && s) {
      if (an && typeof t[an] == "function") return t[an]();
      if (s !== "symbol" && typeof t.inspect == "function") return t.inspect();
    }
    if (pu(t)) {
      var c = [];
      return (
        Ka.call(t, function (K, X) {
          c.push(d(X, t, !0) + " => " + d(K, t));
        }),
        Pr("Map", kt.call(t), c, p)
      );
    }
    if (hu(t)) {
      var A = [];
      return (
        Ga.call(t, function (K) {
          A.push(d(K, t));
        }),
        Pr("Set", Mt.call(t), A, p)
      );
    }
    if (yu(t)) return un("WeakMap");
    if (mu(t)) return un("WeakSet");
    if (vu(t)) return un("WeakRef");
    if (uu(t)) return Ge(d(Number(t)));
    if (cu(t)) return Ge(d(gn.call(t)));
    if (lu(t)) return Ge(Ja.call(t));
    if (au(t)) return Ge(d(String(t)));
    if (!ou(t) && !iu(t)) {
      var M = ht(t, d),
        x = xr
          ? xr(t) === Object.prototype
          : t instanceof Object || t.constructor === Object,
        I = t instanceof Object ? "" : "null prototype",
        J =
          !x && W && Object(t) === t && W in t
            ? qn.call(pe(t), 8, -1)
            : I
            ? "Object"
            : "",
        V =
          x || typeof t.constructor != "function"
            ? ""
            : t.constructor.name
            ? t.constructor.name + " "
            : "",
        z =
          V +
          (J || I
            ? "[" + Q.call(Ar.call([], J || [], I || []), ": ") + "] "
            : "");
      return M.length === 0
        ? z + "{}"
        : p
        ? z + "{" + wn(M, p) + "}"
        : z + "{ " + Q.call(M, ", ") + " }";
    }
    return String(t);
  };
function Go(e, t, n) {
  var r = (n.quoteStyle || t) === "double" ? '"' : "'";
  return r + e + r;
}
function ru(e) {
  return fe.call(String(e), /"/g, "&quot;");
}
function En(e) {
  return (
    pe(e) === "[object Array]" && (!W || !(typeof e == "object" && W in e))
  );
}
function ou(e) {
  return pe(e) === "[object Date]" && (!W || !(typeof e == "object" && W in e));
}
function iu(e) {
  return (
    pe(e) === "[object RegExp]" && (!W || !(typeof e == "object" && W in e))
  );
}
function su(e) {
  return (
    pe(e) === "[object Error]" && (!W || !(typeof e == "object" && W in e))
  );
}
function au(e) {
  return (
    pe(e) === "[object String]" && (!W || !(typeof e == "object" && W in e))
  );
}
function uu(e) {
  return (
    pe(e) === "[object Number]" && (!W || !(typeof e == "object" && W in e))
  );
}
function lu(e) {
  return (
    pe(e) === "[object Boolean]" && (!W || !(typeof e == "object" && W in e))
  );
}
function Ho(e) {
  if (Me) return e && typeof e == "object" && e instanceof Symbol;
  if (typeof e == "symbol") return !0;
  if (!e || typeof e != "object" || !bn) return !1;
  try {
    return bn.call(e), !0;
  } catch (t) {}
  return !1;
}
function cu(e) {
  if (!e || typeof e != "object" || !gn) return !1;
  try {
    return gn.call(e), !0;
  } catch (t) {}
  return !1;
}
var fu =
  Object.prototype.hasOwnProperty ||
  function (e) {
    return e in this;
  };
function ce(e, t) {
  return fu.call(e, t);
}
function pe(e) {
  return Ya.call(e);
}
function du(e) {
  if (e.name) return e.name;
  var t = Za.call(Qa.call(e), /^function\s*([\w$]+)/);
  return t ? t[1] : null;
}
function Vo(e, t) {
  if (e.indexOf) return e.indexOf(t);
  for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
  return -1;
}
function pu(e) {
  if (!kt || !e || typeof e != "object") return !1;
  try {
    kt.call(e);
    try {
      Mt.call(e);
    } catch (t) {
      return !0;
    }
    return e instanceof Map;
  } catch (t) {}
  return !1;
}
function yu(e) {
  if (!Ze || !e || typeof e != "object") return !1;
  try {
    Ze.call(e, Ze);
    try {
      et.call(e, et);
    } catch (t) {
      return !0;
    }
    return e instanceof WeakMap;
  } catch (t) {}
  return !1;
}
function vu(e) {
  if (!Sr || !e || typeof e != "object") return !1;
  try {
    return Sr.call(e), !0;
  } catch (t) {}
  return !1;
}
function hu(e) {
  if (!Mt || !e || typeof e != "object") return !1;
  try {
    Mt.call(e);
    try {
      kt.call(e);
    } catch (t) {
      return !0;
    }
    return e instanceof Set;
  } catch (t) {}
  return !1;
}
function mu(e) {
  if (!et || !e || typeof e != "object") return !1;
  try {
    et.call(e, et);
    try {
      Ze.call(e, Ze);
    } catch (t) {
      return !0;
    }
    return e instanceof WeakSet;
  } catch (t) {}
  return !1;
}
function gu(e) {
  return !e || typeof e != "object"
    ? !1
    : typeof HTMLElement != "undefined" && e instanceof HTMLElement
    ? !0
    : typeof e.nodeName == "string" && typeof e.getAttribute == "function";
}
function Xo(e, t) {
  if (e.length > t.maxStringLength) {
    var n = e.length - t.maxStringLength,
      r = "... " + n + " more character" + (n > 1 ? "s" : "");
    return Xo(qn.call(e, 0, t.maxStringLength), t) + r;
  }
  var o = fe.call(fe.call(e, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, bu);
  return Go(o, "single", t);
}
function bu(e) {
  var t = e.charCodeAt(0),
    n = { 8: "b", 9: "t", 10: "n", 12: "f", 13: "r" }[t];
  return n ? "\\" + n : "\\x" + (t < 16 ? "0" : "") + eu.call(t.toString(16));
}
function Ge(e) {
  return "Object(" + e + ")";
}
function un(e) {
  return e + " { ? }";
}
function Pr(e, t, n, r) {
  var o = r ? wn(n, r) : Q.call(n, ", ");
  return e + " (" + t + ") {" + o + "}";
}
function Eu(e) {
  for (var t = 0; t < e.length; t++)
    if (
      Vo(
        e[t],
        `
`
      ) >= 0
    )
      return !1;
  return !0;
}
function wu(e, t) {
  var n;
  if (e.indent === "	") n = "	";
  else if (typeof e.indent == "number" && e.indent > 0)
    n = Q.call(Array(e.indent + 1), " ");
  else return null;
  return { base: n, prev: Q.call(Array(t + 1), n) };
}
function wn(e, t) {
  if (e.length === 0) return "";
  var n =
    `
` +
    t.prev +
    t.base;
  return (
    n +
    Q.call(e, "," + n) +
    `
` +
    t.prev
  );
}
function ht(e, t) {
  var n = En(e),
    r = [];
  if (n) {
    r.length = e.length;
    for (var o = 0; o < e.length; o++) r[o] = ce(e, o) ? t(e[o], e) : "";
  }
  var i = typeof on == "function" ? on(e) : [],
    s;
  if (Me) {
    s = {};
    for (var a = 0; a < i.length; a++) s["$" + i[a]] = i[a];
  }
  for (var u in e)
    !ce(e, u) ||
      (n && String(Number(u)) === u && u < e.length) ||
      (Me && s["$" + u] instanceof Symbol) ||
      (qo.call(/[^\w$]/, u)
        ? r.push(t(u, e) + ": " + t(e[u], e))
        : r.push(u + ": " + t(e[u], e)));
  if (typeof on == "function")
    for (var l = 0; l < i.length; l++)
      Ko.call(e, i[l]) && r.push("[" + t(i[l]) + "]: " + t(e[i[l]], e));
  return r;
}
var Jo = function (t) {
    return typeof t == "string" || typeof t == "symbol";
  },
  Su = function (t) {
    if (t === null) return "Null";
    if (typeof t == "undefined") return "Undefined";
    if (typeof t == "function" || typeof t == "object") return "Object";
    if (typeof t == "number") return "Number";
    if (typeof t == "boolean") return "Boolean";
    if (typeof t == "string") return "String";
  },
  Ou = Su,
  Kn = function (t) {
    return typeof t == "symbol"
      ? "Symbol"
      : typeof t == "bigint"
      ? "BigInt"
      : Ou(t);
  },
  Au = q,
  Br = Au("%TypeError%"),
  Tu = nu,
  xu = Jo,
  $u = Kn,
  Yo = function (t, n) {
    if ($u(t) !== "Object")
      throw new Br("Assertion failed: Type(O) is not Object");
    if (!xu(n))
      throw new Br(
        "Assertion failed: IsPropertyKey(P) is not true, got " + Tu(n)
      );
    return t[n];
  },
  Pu = q,
  Cr = Pu("%TypeError%"),
  Bu = Jo,
  Cu = Kn,
  Ru = function (t, n) {
    if (Cu(t) !== "Object")
      throw new Cr("Assertion failed: `O` must be an Object");
    if (!Bu(n)) throw new Cr("Assertion failed: `P` must be a Property Key");
    return n in t;
  },
  Qo = Function.prototype.toString,
  $e = typeof Reflect == "object" && Reflect !== null && Reflect.apply,
  Sn,
  Ot;
if (typeof $e == "function" && typeof Object.defineProperty == "function")
  try {
    (Sn = Object.defineProperty({}, "length", {
      get: function () {
        throw Ot;
      },
    })),
      (Ot = {}),
      $e(
        function () {
          throw 42;
        },
        null,
        Sn
      );
  } catch (e) {
    e !== Ot && ($e = null);
  }
else $e = null;
var Lu = /^\s*class\b/,
  On = function (t) {
    try {
      var n = Qo.call(t);
      return Lu.test(n);
    } catch (r) {
      return !1;
    }
  },
  Iu = function (t) {
    try {
      return On(t) ? !1 : (Qo.call(t), !0);
    } catch (n) {
      return !1;
    }
  },
  Fu = Object.prototype.toString,
  ku = "[object Function]",
  Mu = "[object GeneratorFunction]",
  Nu = typeof Symbol == "function" && !!Symbol.toStringTag,
  Rr =
    typeof document == "object" &&
    typeof document.all == "undefined" &&
    document.all !== void 0
      ? document.all
      : {},
  Gn = $e
    ? function (t) {
        if (t === Rr) return !0;
        if (!t || (typeof t != "function" && typeof t != "object")) return !1;
        if (typeof t == "function" && !t.prototype) return !0;
        try {
          $e(t, null, Sn);
        } catch (n) {
          if (n !== Ot) return !1;
        }
        return !On(t);
      }
    : function (t) {
        if (t === Rr) return !0;
        if (!t || (typeof t != "function" && typeof t != "object")) return !1;
        if (typeof t == "function" && !t.prototype) return !0;
        if (Nu) return Iu(t);
        if (On(t)) return !1;
        var n = Fu.call(t);
        return n === ku || n === Mu;
      },
  _u = Gn,
  Zo = q,
  Du = Zo("%Math%"),
  ju = Zo("%Number%"),
  Wu = ju.MAX_SAFE_INTEGER || Du.pow(2, 53) - 1,
  zu = q,
  Uu = zu("%Math.abs%"),
  qu = function (t) {
    return Uu(t);
  },
  Ku = Math.floor,
  Gu = function (t) {
    return Ku(t);
  },
  ei = function (t) {
    return t === null || (typeof t != "function" && typeof t != "object");
  },
  Hu = Object.prototype.toString,
  ti = ei,
  Vu = Gn,
  Lr = {
    "[[DefaultValue]]": function (e) {
      var t;
      if (
        (arguments.length > 1
          ? (t = arguments[1])
          : (t = Hu.call(e) === "[object Date]" ? String : Number),
        t === String || t === Number)
      ) {
        var n =
            t === String ? ["toString", "valueOf"] : ["valueOf", "toString"],
          r,
          o;
        for (o = 0; o < n.length; ++o)
          if (Vu(e[n[o]]) && ((r = e[n[o]]()), ti(r))) return r;
        throw new TypeError("No default value");
      }
      throw new TypeError("invalid [[DefaultValue]] hint supplied");
    },
  },
  Xu = function (t) {
    return ti(t)
      ? t
      : arguments.length > 1
      ? Lr["[[DefaultValue]]"](t, arguments[1])
      : Lr["[[DefaultValue]]"](t);
  },
  Ju = Xu,
  Yu = Ju,
  Qu = function (t) {
    var n = Yu(t, Number);
    if (typeof n != "string") return +n;
    var r = n.replace(
      /^[ \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u0085]+|[ \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u0085]+$/g,
      ""
    );
    return /^0[ob]|^[+-]0x/.test(r) ? NaN : +r;
  },
  Zu =
    Number.isNaN ||
    function (t) {
      return t !== t;
    },
  el =
    Number.isNaN ||
    function (e) {
      return e !== e;
    },
  tl =
    Number.isFinite ||
    function (e) {
      return typeof e == "number" && !el(e) && e !== 1 / 0 && e !== -1 / 0;
    },
  nl = function (t) {
    return t >= 0 ? 1 : -1;
  },
  rl = qu,
  ol = Gu,
  il = Qu,
  sl = Zu,
  al = tl,
  ul = nl,
  ll = function (t) {
    var n = il(t);
    return sl(n) ? 0 : n === 0 || !al(n) ? n : ul(n) * ol(rl(n));
  },
  cl = q,
  fl = cl("RegExp.prototype.test"),
  dl = je.exports,
  pl = function (t) {
    return dl(fl, t);
  },
  yl = function (t) {
    return t === null || (typeof t != "function" && typeof t != "object");
  },
  vl = Mo,
  ni = function () {
    return vl() && !!Symbol.toStringTag;
  },
  hl = Date.prototype.getDay,
  ml = function (t) {
    try {
      return hl.call(t), !0;
    } catch (n) {
      return !1;
    }
  },
  gl = Object.prototype.toString,
  bl = "[object Date]",
  El = ni(),
  wl = function (t) {
    return typeof t != "object" || t === null
      ? !1
      : El
      ? ml(t)
      : gl.call(t) === bl;
  },
  An = { exports: {} },
  Sl = Object.prototype.toString,
  Ol = No();
if (Ol) {
  var Al = Symbol.prototype.toString,
    Tl = /^Symbol\(.*\)$/,
    xl = function (t) {
      return typeof t.valueOf() != "symbol" ? !1 : Tl.test(Al.call(t));
    };
  An.exports = function (t) {
    if (typeof t == "symbol") return !0;
    if (Sl.call(t) !== "[object Symbol]") return !1;
    try {
      return xl(t);
    } catch (n) {
      return !1;
    }
  };
} else
  An.exports = function (t) {
    return !1;
  };
var $l = typeof Symbol == "function" && typeof Symbol.iterator == "symbol",
  Tn = ei,
  ri = Gn,
  Pl = wl,
  Ir = An.exports,
  Bl = function (t, n) {
    if (typeof t == "undefined" || t === null)
      throw new TypeError("Cannot call method on " + t);
    if (typeof n != "string" || (n !== "number" && n !== "string"))
      throw new TypeError('hint must be "string" or "number"');
    var r = n === "string" ? ["toString", "valueOf"] : ["valueOf", "toString"],
      o,
      i,
      s;
    for (s = 0; s < r.length; ++s)
      if (((o = t[r[s]]), ri(o) && ((i = o.call(t)), Tn(i)))) return i;
    throw new TypeError("No default value");
  },
  Cl = function (t, n) {
    var r = t[n];
    if (r !== null && typeof r != "undefined") {
      if (!ri(r))
        throw new TypeError(
          r +
            " returned for property " +
            n +
            " of object " +
            t +
            " is not a function"
        );
      return r;
    }
  },
  Rl = function (t) {
    if (Tn(t)) return t;
    var n = "default";
    arguments.length > 1 &&
      (arguments[1] === String
        ? (n = "string")
        : arguments[1] === Number && (n = "number"));
    var r;
    if (
      ($l &&
        (Symbol.toPrimitive
          ? (r = Cl(t, Symbol.toPrimitive))
          : Ir(t) && (r = Symbol.prototype.valueOf)),
      typeof r != "undefined")
    ) {
      var o = r.call(t, n);
      if (Tn(o)) return o;
      throw new TypeError("unable to convert exotic object to primitive");
    }
    return (
      n === "default" && (Pl(t) || Ir(t)) && (n = "string"),
      Bl(t, n === "default" ? "number" : n)
    );
  },
  Fr = Rl,
  Ll = function (t) {
    return arguments.length > 1 ? Fr(t, arguments[1]) : Fr(t);
  },
  Gt = q,
  kr = Gt("%TypeError%"),
  Mr = Gt("%Number%"),
  Il = Gt("%RegExp%"),
  Nr = Gt("%parseInt%"),
  oi = ge,
  Ht = pl,
  Fl = yl,
  _r = oi("String.prototype.slice"),
  kl = Ht(/^0b[01]+$/i),
  Ml = Ht(/^0o[0-7]+$/i),
  Nl = Ht(/^[-+]0x[0-9a-f]+$/i),
  _l = ["\x85", "\u200B", "\uFFFE"].join(""),
  Dl = new Il("[" + _l + "]", "g"),
  jl = Ht(Dl),
  Dr = [
    `	
\v\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003`,
    "\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028",
    "\u2029\uFEFF",
  ].join(""),
  Wl = new RegExp("(^[" + Dr + "]+)|([" + Dr + "]+$)", "g"),
  zl = oi("String.prototype.replace"),
  Ul = function (e) {
    return zl(e, Wl, "");
  },
  ql = Ll,
  Kl = function e(t) {
    var n = Fl(t) ? t : ql(t, Mr);
    if (typeof n == "symbol")
      throw new kr("Cannot convert a Symbol value to a number");
    if (typeof n == "bigint")
      throw new kr("Conversion from 'BigInt' to 'number' is not allowed.");
    if (typeof n == "string") {
      if (kl(n)) return e(Nr(_r(n, 2), 2));
      if (Ml(n)) return e(Nr(_r(n, 2), 8));
      if (jl(n) || Nl(n)) return NaN;
      var r = Ul(n);
      if (r !== n) return e(r);
    }
    return Mr(n);
  },
  Gl = ll,
  Hl = Kl,
  Vl = function (t) {
    var n = Hl(t);
    return n !== 0 && (n = Gl(n)), n === 0 ? 0 : n;
  },
  jr = Wu,
  Xl = Vl,
  Jl = function (t) {
    var n = Xl(t);
    return n <= 0 ? 0 : n > jr ? jr : n;
  },
  Yl = q,
  Ql = Yl("%TypeError%"),
  Zl = Yo,
  ec = Jl,
  tc = Kn,
  nc = function (t) {
    if (tc(t) !== "Object")
      throw new Ql("Assertion failed: `obj` must be an Object");
    return ec(Zl(t, "length"));
  },
  rc = q,
  oc = rc("%Object%"),
  ic = Kt,
  sc = function (t) {
    return ic(t), oc(t);
  },
  ii = q,
  ac = ii("%String%"),
  uc = ii("%TypeError%"),
  si = function (t) {
    if (typeof t == "symbol")
      throw new uc("Cannot convert a Symbol value to a string");
    return ac(t);
  },
  lc = String.prototype.valueOf,
  cc = function (t) {
    try {
      return lc.call(t), !0;
    } catch (n) {
      return !1;
    }
  },
  fc = Object.prototype.toString,
  dc = "[object String]",
  pc = ni(),
  yc = function (t) {
    return typeof t == "string"
      ? !0
      : typeof t != "object"
      ? !1
      : pc
      ? cc(t)
      : fc.call(t) === dc;
  },
  vc = q,
  hc = ge,
  mc = vc("%TypeError%"),
  gc = Wa,
  bc = Yo,
  Ec = Ru,
  wc = _u,
  Sc = nc,
  Oc = sc,
  Ac = si,
  Tc = yc,
  xc = hc("String.prototype.split"),
  Wr = Object("a"),
  $c = Wr[0] !== "a" || !(0 in Wr),
  ai = function (t) {
    var n = Oc(this),
      r = $c && Tc(this) ? xc(this, "") : n,
      o = Sc(r);
    if (!wc(t))
      throw new mc("Array.prototype.forEach callback must be a function");
    var i;
    arguments.length > 1 && (i = arguments[1]);
    for (var s = 0; s < o; ) {
      var a = Ac(s),
        u = Ec(r, a);
      if (u) {
        var l = bc(r, a);
        gc(t, i, [l, s, r]);
      }
      s += 1;
    }
  },
  Pc = function (t) {
    var n = !0,
      r = !0,
      o = !1;
    if (typeof t == "function") {
      try {
        t.call("f", function (i, s, a) {
          typeof a != "object" && (n = !1);
        }),
          t.call(
            [null],
            function () {
              "use strict";
              r = typeof this == "string";
            },
            "x"
          );
      } catch (i) {
        o = !0;
      }
      return !o && n && r;
    }
    return !1;
  },
  Bc = Pc,
  Cc = ai,
  ui = function () {
    var t = Array.prototype.forEach;
    return Bc(t) ? t : Cc;
  },
  Rc = De,
  Lc = ui,
  Ic = function () {
    var t = Lc();
    return (
      Rc(
        Array.prototype,
        { forEach: t },
        {
          forEach: function () {
            return Array.prototype.forEach !== t;
          },
        }
      ),
      t
    );
  },
  Fc = De,
  kc = je.exports,
  Mc = ge,
  Nc = Kt,
  _c = ai,
  li = ui,
  Dc = li(),
  jc = Ic,
  Wc = Mc("Array.prototype.slice"),
  zc = kc.apply(Dc),
  ci = function (t, n) {
    return Nc(t), zc(t, Wc(arguments, 1));
  };
Fc(ci, { getPolyfill: li, implementation: _c, shim: jc });
var Uc = ci,
  qc = Kt,
  fi = ge,
  Kc = fi("Object.prototype.propertyIsEnumerable"),
  Gc = fi("Array.prototype.push"),
  di = function (t) {
    var n = qc(t),
      r = [];
    for (var o in n) Kc(n, o) && Gc(r, [o, n[o]]);
    return r;
  },
  Hc = di,
  pi = function () {
    return typeof Object.entries == "function" ? Object.entries : Hc;
  },
  Vc = pi,
  Xc = De,
  Jc = function () {
    var t = Vc();
    return (
      Xc(
        Object,
        { entries: t },
        {
          entries: function () {
            return Object.entries !== t;
          },
        }
      ),
      t
    );
  },
  Yc = De,
  Qc = je.exports,
  Zc = di,
  yi = pi,
  ef = Jc,
  vi = Qc(yi(), Object);
Yc(vi, { getPolyfill: yi, implementation: Zc, shim: ef });
var tf = vi,
  nf = Kt,
  rf = si,
  of = ge,
  zr = of("String.prototype.replace"),
  sf =
    /^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/,
  af =
    /[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+$/,
  hi = function () {
    var t = rf(nf(this));
    return zr(zr(t, sf, ""), af, "");
  },
  uf = hi,
  Ur = "\u200B",
  mi = function () {
    return String.prototype.trim && Ur.trim() === Ur
      ? String.prototype.trim
      : uf;
  },
  lf = De,
  cf = mi,
  ff = function () {
    var t = cf();
    return (
      lf(
        String.prototype,
        { trim: t },
        {
          trim: function () {
            return String.prototype.trim !== t;
          },
        }
      ),
      t
    );
  },
  df = je.exports,
  pf = De,
  yf = hi,
  gi = mi,
  vf = ff,
  bi = df(gi());
pf(bi, { getPolyfill: gi, implementation: yf, shim: vf });
var hf = bi,
  Nt = Uc,
  Hn = tf,
  Ei = _o,
  mf = hf,
  gf = function (t) {},
  bf = String.prototype.replace,
  wi = String.prototype.split,
  At = "||||",
  ln = function (e) {
    var t = e % 100,
      n = t % 10;
    return t !== 11 && n === 1
      ? 0
      : 2 <= n && n <= 4 && !(t >= 12 && t <= 14)
      ? 1
      : 2;
  },
  Si = {
    pluralTypes: {
      arabic: function (e) {
        if (e < 3) return e;
        var t = e % 100;
        return t >= 3 && t <= 10 ? 3 : t >= 11 ? 4 : 5;
      },
      bosnian_serbian: ln,
      chinese: function () {
        return 0;
      },
      croatian: ln,
      french: function (e) {
        return e >= 2 ? 1 : 0;
      },
      german: function (e) {
        return e !== 1 ? 1 : 0;
      },
      russian: ln,
      lithuanian: function (e) {
        return e % 10 === 1 && e % 100 !== 11
          ? 0
          : e % 10 >= 2 && e % 10 <= 9 && (e % 100 < 11 || e % 100 > 19)
          ? 1
          : 2;
      },
      czech: function (e) {
        return e === 1 ? 0 : e >= 2 && e <= 4 ? 1 : 2;
      },
      polish: function (e) {
        if (e === 1) return 0;
        var t = e % 10;
        return 2 <= t && t <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2;
      },
      icelandic: function (e) {
        return e % 10 !== 1 || e % 100 === 11 ? 1 : 0;
      },
      slovenian: function (e) {
        var t = e % 100;
        return t === 1 ? 0 : t === 2 ? 1 : t === 3 || t === 4 ? 2 : 3;
      },
    },
    pluralTypeToLanguages: {
      arabic: ["ar"],
      bosnian_serbian: ["bs-Latn-BA", "bs-Cyrl-BA", "srl-RS", "sr-RS"],
      chinese: [
        "id",
        "id-ID",
        "ja",
        "ko",
        "ko-KR",
        "lo",
        "ms",
        "th",
        "th-TH",
        "zh",
      ],
      croatian: ["hr", "hr-HR"],
      german: [
        "fa",
        "da",
        "de",
        "en",
        "es",
        "fi",
        "el",
        "he",
        "hi-IN",
        "hu",
        "hu-HU",
        "it",
        "nl",
        "no",
        "pt",
        "sv",
        "tr",
      ],
      french: ["fr", "tl", "pt-br"],
      russian: ["ru", "ru-RU"],
      lithuanian: ["lt"],
      czech: ["cs", "cs-CZ", "sk"],
      polish: ["pl"],
      icelandic: ["is"],
      slovenian: ["sl-SL"],
    },
  };
function Ef(e) {
  var t = {};
  return (
    Nt(Hn(e), function (n) {
      var r = n[0],
        o = n[1];
      Nt(o, function (i) {
        t[i] = r;
      });
    }),
    t
  );
}
function wf(e, t) {
  var n = Ef(e.pluralTypeToLanguages);
  return n[t] || n[wi.call(t, /-/, 1)[0]] || n.en;
}
function Sf(e, t, n) {
  return e.pluralTypes[t](n);
}
function Of() {
  var e = {};
  return function (t, n) {
    var r = e[n];
    return (
      r && !t.pluralTypes[r] && ((r = null), (e[n] = r)),
      r || ((r = wf(t, n)), r && (e[n] = r)),
      r
    );
  };
}
function qr(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Af(e) {
  var t = (e && e.prefix) || "%{",
    n = (e && e.suffix) || "}";
  if (t === At || n === At)
    throw new RangeError('"' + At + '" token is reserved for pluralization');
  return new RegExp(qr(t) + "(.*?)" + qr(n), "g");
}
var Tf = Of(),
  xf = /%\{(.*?)\}/g;
function Vn(e, t, n, r, o) {
  if (typeof e != "string")
    throw new TypeError(
      "Polyglot.transformPhrase expects argument #1 to be string"
    );
  if (t == null) return e;
  var i = e,
    s = r || xf,
    a = typeof t == "number" ? { smart_count: t } : t;
  if (a.smart_count != null && e) {
    var u = o || Si,
      l = wi.call(e, At),
      f = n || "en",
      p = Tf(u, f),
      d = Sf(u, p, a.smart_count);
    i = mf(l[d] || l[0]);
  }
  return (
    (i = bf.call(i, s, function (y, S) {
      return !Ei(a, S) || a[S] == null ? y : a[S];
    })),
    i
  );
}
function ue(e) {
  var t = e || {};
  (this.phrases = {}),
    this.extend(t.phrases || {}),
    (this.currentLocale = t.locale || "en");
  var n = t.allowMissing ? Vn : null;
  (this.onMissingKey =
    typeof t.onMissingKey == "function" ? t.onMissingKey : n),
    (this.warn = t.warn || gf),
    (this.tokenRegex = Af(t.interpolation)),
    (this.pluralRules = t.pluralRules || Si);
}
ue.prototype.locale = function (e) {
  return e && (this.currentLocale = e), this.currentLocale;
};
ue.prototype.extend = function (e, t) {
  Nt(
    Hn(e || {}),
    function (n) {
      var r = n[0],
        o = n[1],
        i = t ? t + "." + r : r;
      typeof o == "object" ? this.extend(o, i) : (this.phrases[i] = o);
    },
    this
  );
};
ue.prototype.unset = function (e, t) {
  typeof e == "string"
    ? delete this.phrases[e]
    : Nt(
        Hn(e || {}),
        function (n) {
          var r = n[0],
            o = n[1],
            i = t ? t + "." + r : r;
          typeof o == "object" ? this.unset(o, i) : delete this.phrases[i];
        },
        this
      );
};
ue.prototype.clear = function () {
  this.phrases = {};
};
ue.prototype.replace = function (e) {
  this.clear(), this.extend(e);
};
ue.prototype.t = function (e, t) {
  var n,
    r,
    o = t == null ? {} : t;
  if (typeof this.phrases[e] == "string") n = this.phrases[e];
  else if (typeof o._ == "string") n = o._;
  else if (this.onMissingKey) {
    var i = this.onMissingKey;
    r = i(e, o, this.currentLocale, this.tokenRegex, this.pluralRules);
  } else this.warn('Missing translation for key: "' + e + '"'), (r = e);
  return (
    typeof n == "string" &&
      (r = Vn(n, o, this.currentLocale, this.tokenRegex, this.pluralRules)),
    r
  );
};
ue.prototype.has = function (e) {
  return Ei(this.phrases, e);
};
ue.transformPhrase = function (t, n, r) {
  return Vn(t, n, r);
};
var Fd = ue,
  Oi = { exports: {} };
(function (e, t) {
  (function (n, r) {
    r();
  })(Ke, function () {
    function n(l, f) {
      return (
        typeof f == "undefined"
          ? (f = { autoBom: !1 })
          : typeof f != "object" &&
            (console.warn("Deprecated: Expected third argument to be a object"),
            (f = { autoBom: !f })),
        f.autoBom &&
        /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(
          l.type
        )
          ? new Blob(["\uFEFF", l], { type: l.type })
          : l
      );
    }
    function r(l, f, p) {
      var d = new XMLHttpRequest();
      d.open("GET", l),
        (d.responseType = "blob"),
        (d.onload = function () {
          u(d.response, f, p);
        }),
        (d.onerror = function () {
          console.error("could not download file");
        }),
        d.send();
    }
    function o(l) {
      var f = new XMLHttpRequest();
      f.open("HEAD", l, !1);
      try {
        f.send();
      } catch (p) {}
      return 200 <= f.status && 299 >= f.status;
    }
    function i(l) {
      try {
        l.dispatchEvent(new MouseEvent("click"));
      } catch (p) {
        var f = document.createEvent("MouseEvents");
        f.initMouseEvent(
          "click",
          !0,
          !0,
          window,
          0,
          0,
          0,
          80,
          20,
          !1,
          !1,
          !1,
          !1,
          0,
          null
        ),
          l.dispatchEvent(f);
      }
    }
    var s =
        typeof window == "object" && window.window === window
          ? window
          : typeof self == "object" && self.self === self
          ? self
          : typeof Ke == "object" && Ke.global === Ke
          ? Ke
          : void 0,
      a =
        s.navigator &&
        /Macintosh/.test(navigator.userAgent) &&
        /AppleWebKit/.test(navigator.userAgent) &&
        !/Safari/.test(navigator.userAgent),
      u =
        s.saveAs ||
        (typeof window != "object" || window !== s
          ? function () {}
          : "download" in HTMLAnchorElement.prototype && !a
          ? function (l, f, p) {
              var d = s.URL || s.webkitURL,
                y = document.createElement("a");
              (f = f || l.name || "download"),
                (y.download = f),
                (y.rel = "noopener"),
                typeof l == "string"
                  ? ((y.href = l),
                    y.origin === location.origin
                      ? i(y)
                      : o(y.href)
                      ? r(l, f, p)
                      : i(y, (y.target = "_blank")))
                  : ((y.href = d.createObjectURL(l)),
                    setTimeout(function () {
                      d.revokeObjectURL(y.href);
                    }, 4e4),
                    setTimeout(function () {
                      i(y);
                    }, 0));
            }
          : "msSaveOrOpenBlob" in navigator
          ? function (l, f, p) {
              if (((f = f || l.name || "download"), typeof l != "string"))
                navigator.msSaveOrOpenBlob(n(l, p), f);
              else if (o(l)) r(l, f, p);
              else {
                var d = document.createElement("a");
                (d.href = l),
                  (d.target = "_blank"),
                  setTimeout(function () {
                    i(d);
                  });
              }
            }
          : function (l, f, p, d) {
              if (
                ((d = d || open("", "_blank")),
                d &&
                  (d.document.title = d.document.body.innerText =
                    "downloading..."),
                typeof l == "string")
              )
                return r(l, f, p);
              var y = l.type === "application/octet-stream",
                S = /constructor/i.test(s.HTMLElement) || s.safari,
                w = /CriOS\/[\d]+/.test(navigator.userAgent);
              if ((w || (y && S) || a) && typeof FileReader != "undefined") {
                var g = new FileReader();
                (g.onloadend = function () {
                  var E = g.result;
                  (E = w
                    ? E
                    : E.replace(/^data:[^;]*;/, "data:attachment/file;")),
                    d ? (d.location.href = E) : (location = E),
                    (d = null);
                }),
                  g.readAsDataURL(l);
              } else {
                var m = s.URL || s.webkitURL,
                  b = m.createObjectURL(l);
                d ? (d.location = b) : (location.href = b),
                  (d = null),
                  setTimeout(function () {
                    m.revokeObjectURL(b);
                  }, 4e4);
              }
            });
    (s.saveAs = u.saveAs = u), (e.exports = u);
  });
})(Oi);
var kd = Oi.exports;
function $f(e) {
  if (typeof window != "undefined" && window.navigator)
    return !!navigator.userAgent.match(e);
}
const Ai = $f(/iP(ad|od|hone)/i),
  Pf =
    typeof window != "undefined"
      ? Ai && "download" in document.createElement("a")
      : null;
if (Ai && !Pf) {
  const e = document.querySelector("html");
  (e.style.cursor = "pointer"),
    (e.style.webkitTapHighlightColor = "rgba(0, 0, 0, 0)");
}
const B = [],
  Bf = (e) => {
    B.push(e);
  },
  Kr = (e) => {
    const t = B.findIndex((r) => r.uniqueId === e);
    if (t === -1) return;
    const n = B[t];
    return B.splice(t, 1), n;
  },
  Cf = [
    "a[href]",
    "area[href]",
    "input:not([disabled])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    "button:not([disabled])",
    "iframe",
    "[tabindex]",
    "[contentEditable=true]",
  ].reduce((e, t, n) => `${e}${n ? "," : ""}${t}:not([tabindex="-1"])`, ""),
  oe = ({
    from: e = document.activeElement,
    stopAtElement: t,
    ignoreElement: n = [],
    allowSelectors: r,
    direction: o = "forwards",
  }) => {
    const i = e.parentElement,
      s = e,
      a = Cf + (r ? "," + r.join(",") : "");
    if (!s) return null;
    const u = (w, g = window) => {
        const m = (E) => E.display === "none" || E.visibility === "hidden";
        if ((w.style && m(w.style)) || w.hidden) return !0;
        const b = g.getComputedStyle(w);
        return !!(!b || m(b));
      },
      l = (w, g, m) => {
        const b = [];
        let E = w;
        if (u(E)) return !0;
        for (; (E = E.parentElement), !(!E || E === g); ) b.push(E);
        for (const O of b) if (u(O, m)) return !0;
        return !1;
      },
      f = (w, g, m, b) => {
        const E = w.length;
        if (E && u(g)) return null;
        if (m) {
          for (let O = E - 1; O > -1; O--) {
            const c = w[O];
            if (!n.some((A) => A.contains(c)) && !l(c, g, b)) {
              if (c.tagName === "IFRAME") {
                const A = d(c, m);
                if (A) return A;
              }
              return c;
            }
          }
          return null;
        }
        for (let O = 0; O < E; O++) {
          const c = w[O];
          if (!n.some((A) => A.contains(c)) && !l(c, g, b)) {
            if (c.tagName === "IFRAME") {
              const A = d(c);
              if (A) return A;
            }
            return c;
          }
        }
        return null;
      },
      p = (w) => {
        try {
          return w.contentWindow;
        } catch (g) {
          return null;
        }
      },
      d = (w, g) => {
        if (!w) return null;
        if (w.tagName !== "IFRAME") return w;
        const m = p(w),
          b = m.document;
        if (!m || w.getAttribute("tabindex")) return w;
        const O = b.querySelectorAll(a),
          c = f(O, b.documentElement, g, m);
        return d(c);
      },
      y = (w, g) => {
        let m = !1;
        const b = w.children,
          E = b.length;
        if (o === "forwards")
          for (let O = 0; O < E; O++) {
            const c = b[O];
            if (m) {
              if (n.some((x) => x === c)) continue;
              if (c.matches(a)) {
                if (u(c)) continue;
                const x = d(c);
                return x || c;
              }
              const A = c.querySelectorAll(a),
                M = f(A, c);
              if (M) return M;
              continue;
            }
            if (c === t) return null;
            if (c === g) {
              m = !0;
              continue;
            }
          }
        else
          for (let O = E - 1; O >= 0; O--) {
            const c = b[O];
            if (m) {
              if (n.some((x) => x === c)) continue;
              if (c.matches(a)) {
                if (u(c)) continue;
                const x = d(c);
                return x || c;
              }
              const A = c.querySelectorAll(a),
                M = f(A, c, !0);
              if (M) return M;
              continue;
            }
            if (c === t) return null;
            if (c === g) {
              m = !0;
              continue;
            }
          }
        return (g = w), (w = w.parentElement), w ? y(w, g) : null;
      };
    return y(i, s);
  };
let cn = !1,
  xn = !1,
  Pe = null,
  Ti = 0,
  $n = null,
  Tt = null;
const T = {
    closeByFocusSentinel: !1,
    closedBySetOpen: !1,
    addedDocumentClick: !1,
    documentClickTimeout: null,
    closedByEvents: !1,
    focusedMenuBtns: new Set(),
  },
  Ne = (e) => {
    const t = e.target;
    ie(
      B,
      (n) => {
        if (
          !(
            n.overlay ||
            n.overlayElement ||
            H(n.menuBtnEls).contains(t) ||
            n.containerEl.contains(t)
          )
        )
          return n;
      },
      (n) => {
        const { setOpen: r } = n;
        (T.closedByEvents = !0), r(!1);
      }
    ),
      (T.addedDocumentClick = !1);
  },
  xi = (e) => {
    const t = B[B.length - 1];
    setTimeout(() => {
      const r = e.timeStamp - Ti;
      if (!document.hasFocus() && r < 50) {
        ie(
          B,
          (o) => o,
          (o) => {
            const { setOpen: i } = o;
            (T.closedByEvents = !0), i(!1);
          }
        );
        return;
      }
    });
    const n = (r) => {
      if (r.overlay || r.overlayEl || !r.closeWhenDocumentBlurs) return;
      H(r.menuBtnEls).focus(), (T.closedByEvents = !0), r.setOpen(!1);
    };
    t.overlay ||
      setTimeout(() => {
        const r = document.activeElement;
        if (!r || r.tagName !== "IFRAME") {
          ie(
            B,
            (o) => o,
            (o) => n(o)
          );
          return;
        }
        ie(
          B,
          (o) => {
            const { containerEl: i } = o;
            if (i.contains(r)) {
              (Tt = r), Ci(), document.addEventListener("visibilitychange", Bi);
              return;
            }
            return o;
          },
          (o) => {
            const { setOpen: i } = o;
            (T.closedByEvents = !0), i(!1);
          }
        );
      });
  },
  $i = (e) => {
    const {
      focusedMenuBtn: t,
      setOpen: n,
      menuBtnEls: r,
      cursorKeys: o,
      closeWhenEscapeKeyIsPressed: i,
      focusElementOnClose: s,
      timeouts: a,
    } = B[B.length - 1];
    if (
      (e.key === "Tab" && (Ti = e.timeStamp),
      o && Lf(e),
      e.key !== "Escape" || !i)
    )
      return;
    const u = H(r),
      l =
        j(
          {},
          { inputElement: s, type: "focusElementOnClose", subType: "escapeKey" }
        ) || u;
    l && (l.focus(), l === u && Ri({ focusedMenuBtn: t, timeouts: a, el: l })),
      (T.closedByEvents = !0),
      n(!1);
  },
  Xn = (e) => {
    const t = e.target;
    $n !== t &&
      ie(
        B,
        (n) => {
          const { menuPopupEl: r } = n;
          return r.contains(t) ? (($n = t), null) : n;
        },
        (n) => {
          const { setOpen: r, focusElementOnClose: o, menuBtnEls: i } = n,
            s = H(i);
          (T.closedByEvents = !0), r(!1);
          const a =
            j(
              {},
              {
                inputElement: o,
                type: "focusElementOnClose",
                subType: "scrolling",
              }
            ) || s;
          a && a.focus();
        }
      );
  },
  Rf = (e) => {
    ($n = null),
      !xn &&
        e &&
        ((xn = !1),
        window.addEventListener("wheel", Xn, { capture: !0, passive: !0 }),
        document.body.addEventListener("touchmove", Pi)),
      !B.length &&
        (document.addEventListener("keydown", $i),
        window.addEventListener("blur", xi));
  },
  Gr = () => {
    B.length ||
      ((xn = !1),
      (T.addedDocumentClick = !1),
      window.clearTimeout(T.documentClickTimeout),
      (T.documentClickTimeout = null),
      document.removeEventListener("keydown", $i),
      document.removeEventListener("click", Ne),
      window.removeEventListener("blur", xi),
      window.removeEventListener("wheel", Xn, { capture: !0 }),
      document.body.removeEventListener("touchmove", Pi));
  },
  Pi = () => {
    cn ||
      ((cn = !0),
      document.body.addEventListener(
        "touchend",
        () => {
          cn = !1;
        },
        { once: !0 }
      ),
      window.addEventListener("scroll", Xn, {
        capture: !0,
        passive: !0,
        once: !0,
      }));
  },
  Lf = (e) => {
    const t = ["ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
      n = ["ArrowLeft", "ArrowRight"];
    if (!t.includes(e.key) || (e.preventDefault(), n.includes(e.key))) return;
    const {
        menuBtnEls: r,
        menuPopupEl: o,
        containerEl: i,
        focusSentinelBeforeEl: s,
      } = B[B.length - 1],
      a = H(r);
    let u = document.activeElement,
      l;
    e.key === "ArrowDown" ? (l = "forwards") : (l = "backwards"),
      (u === a || u === o || u === i) && ((l = "forwards"), (u = s));
    const f = oe({ from: u, direction: l, stopAtElement: o });
    f && f.focus();
  },
  Bi = () => {
    if (document.visibilityState === "visible" && Pe != null) {
      Ci();
      return;
    }
    clearTimeout(Pe);
  },
  Ci = () => {
    const t = () => {
      const n = document.activeElement;
      if (!!n) {
        if (Tt === n) {
          Pe = window.setTimeout(t, 250);
          return;
        }
        ie(
          B,
          (r) => {
            const { containerEl: o } = r;
            if (n.tagName === "IFRAME") {
              if (o && !o.contains(n)) return r;
              (Tt = n), (Pe = window.setTimeout(t, 250));
            }
          },
          (r) => {
            const { setOpen: o } = r;
            (T.closedByEvents = !0),
              o(!1),
              (Tt = null),
              (Pe = null),
              document.removeEventListener("visibilitychange", Bi);
          }
        );
      }
    };
    Pe = window.setTimeout(t, 250);
  },
  If = (e, t) => {
    const { containerEl: n, setOpen: r, onClickDocumentRef: o } = e;
    n.contains(t.target) ||
      ((T.closedByEvents = !0),
      r(!1),
      (e.prevFocusedEl = null),
      (e.addedFocusOutAppEvents = !1),
      document.removeEventListener("click", o));
  },
  Ff = (e, t) => {
    const { containerEl: n, setOpen: r, onFocusFromOutsideAppOrTabRef: o } = e;
    if (!!n) {
      if (n.contains(t.target)) {
        (e.addedFocusOutAppEvents = !1),
          e.prevFocusedEl && e.prevFocusedEl.removeEventListener("focus", o),
          (e.prevFocusedEl = null);
        return;
      }
      e.prevFocusedEl && e.prevFocusedEl.removeEventListener("focus", o),
        (e.prevFocusedEl = null),
        (T.closedByEvents = !0),
        r(!1),
        (e.addedFocusOutAppEvents = !1);
    }
  },
  Pn = (e) => {
    const { onFocusFromOutsideAppOrTabRef: t, onClickDocumentRef: n } = e;
    !e.prevFocusedEl ||
      (e.prevFocusedEl.removeEventListener("focus", t),
      document.removeEventListener("click", n),
      (e.prevFocusedEl = null),
      (e.addedFocusOutAppEvents = !1));
  };
let Re = !1;
const kf = (e, t) => {
    const {
        timeouts: n,
        closeWhenMenuButtonIsClicked: r,
        focusedMenuBtn: o,
        onClickOutsideMenuButtonRef: i,
        setOpen: s,
        open: a,
      } = e,
      u = t.currentTarget;
    if (
      (T.focusedMenuBtns.forEach((l) => (l.el = null)),
      document.removeEventListener("click", i),
      setTimeout(() => {
        document.addEventListener("click", i, { once: !0 });
      }),
      (e.menuBtnKeyupTabFired = !1),
      Re && !a())
    ) {
      Re = !1;
      return;
    }
    if (
      ((Re = !1),
      (T.addedDocumentClick = !1),
      document.removeEventListener("click", Ne),
      u.focus(),
      (o.el = u),
      T.focusedMenuBtns.add(o),
      clearTimeout(n.containerFocusTimeoutId),
      clearTimeout(n.menuButtonBlurTimeoutId),
      (n.containerFocusTimeoutId = null),
      a() ||
        (u.addEventListener("focus", e.onFocusMenuButtonRef, { once: !0 }),
        u.addEventListener("keydown", e.onKeydownMenuButtonRef),
        u.addEventListener("blur", e.onBlurMenuButtonRef)),
      !r)
    ) {
      s(!0);
      return;
    }
    a() && (T.closedByEvents = !0), s(!a());
  },
  Mf = (e, t) => {
    const {
      containerEl: n,
      focusedMenuBtn: r,
      overlay: o,
      setOpen: i,
      timeouts: s,
      closeWhenMenuButtonIsClicked: a,
    } = e;
    if (e.menuBtnKeyupTabFired) {
      e.menuBtnKeyupTabFired = !1;
      return;
    }
    if (Re && !a) return;
    if (!t.relatedTarget) {
      o ||
        T.addedDocumentClick ||
        ((T.addedDocumentClick = !0),
        document.addEventListener("click", Ne, { once: !0 }));
      return;
    }
    if ((Pn(e), !n || n.contains(t.relatedTarget))) return;
    const u = () => {
      (T.closedByEvents = !0), (r.el = null), i(!1);
    };
    s.menuButtonBlurTimeoutId = window.setTimeout(u);
  },
  Nf = (e, t) => {
    const n = t.currentTarget;
    if (!e.open()) {
      ie(
        B,
        (r) => {
          if (!r.containerEl.contains(n)) return r;
        },
        (r) => {
          T.focusedMenuBtns.forEach((o) => (o.el = null)),
            (T.closedByEvents = !0),
            r.setOpen(!1);
        }
      ),
        (Re = !1);
      return;
    }
    Re = !0;
  },
  _f = (e) => {
    e.focusedMenuBtn.el = null;
  },
  Df = (e, t) => {
    const {
        containerEl: n,
        setOpen: r,
        open: o,
        onKeydownMenuButtonRef: i,
        onBlurMenuButtonRef: s,
        mount: a,
        focusSentinelBeforeEl: u,
        focusSentinelAfterEl: l,
      } = e,
      f = t.currentTarget;
    if (
      t.key !== "Tab" ||
      (T.focusedMenuBtns.forEach((d) => (d.el = null)), !o())
    )
      return;
    if (((e.menuBtnKeyupTabFired = !0), t.key === "Tab" && t.shiftKey)) {
      if (((T.closedByEvents = !0), !a || f.nextElementSibling !== n)) {
        t.preventDefault();
        let d = oe({
          from: f,
          direction: "backwards",
          ignoreElement: [n, u, l],
        });
        d && d.focus();
      }
      r(!1),
        f.removeEventListener("keydown", i),
        f.removeEventListener("blur", s);
      return;
    }
    t.preventDefault();
    let p = oe({ from: u, stopAtElement: n });
    p ? p.focus() : n.focus(),
      p || (r(!1), (p = oe({ from: u })), p && p.focus()),
      f.removeEventListener("keydown", i),
      f.removeEventListener("blur", s);
  },
  jf = (e) => {
    const { closeWhenMenuButtonIsTabbed: t, timeouts: n } = e;
    t || clearTimeout(n.containerFocusTimeoutId);
  },
  H = (e) =>
    e.length <= 1
      ? e[0]
      : e.find((t) => {
          if (!(!t || Bn(t))) return t;
        }),
  Ri = ({ focusedMenuBtn: e, timeouts: t, el: n }) => {
    (e.el = n),
      n.addEventListener(
        "blur",
        (r) => {
          const o = r.currentTarget;
          T.focusedMenuBtns.add(e),
            setTimeout(() => {
              !o.isConnected || (e.el = null);
            });
        },
        { once: !0 }
      );
  },
  Li = (e, t) => {
    !e ||
      !e.menuBtnEls ||
      e.menuBtnEls.forEach((n) => {
        n.removeEventListener("focus", e.onFocusMenuButtonRef),
          n.removeEventListener("blur", e.onBlurMenuButtonRef),
          t &&
            (n.removeEventListener("click", e.onClickMenuButtonRef),
            n.removeEventListener("mousedown", e.onMouseDownMenuButtonRef));
      });
  },
  ie = (e, t, n) => {
    for (let r = e.length - 1; r >= 0; r--) {
      const o = t(e[r]);
      if (o) {
        n(o);
        continue;
      }
      return;
    }
  },
  Wf = (e) => e.replace(/-./g, (t) => t.toUpperCase()[1]),
  zf = ({ parent: e, matchEl: t }) => {
    if (e === t) return !0;
    const n = (r) => {
      if (!r) return !1;
      const o = r.children[0];
      return o === t ? !0 : n(o);
    };
    return n(e);
  },
  j = (e, { inputElement: t, type: n, subType: r }) => {
    var o;
    if (t === "menuPopup") return e.menuPopupEl;
    if (t === "menuButton") return H(e.menuBtnEls);
    if (n === "focusElementOnOpen")
      return t === "firstChild"
        ? oe({ from: e.focusSentinelBeforeEl, stopAtElement: e.containerEl })
        : typeof t == "string"
        ? (o = e.containerEl) == null
          ? void 0
          : o.querySelector(t)
        : t instanceof Element
        ? t
        : t();
    if (t == null && n === "menuPopup")
      return e.containerEl
        ? e.menuPopupEl
          ? e.menuPopupEl
          : e.containerEl.children[1]
        : null;
    if ((typeof t == "string" && n === "menuButton") || typeof t == "string")
      return document.querySelector(t);
    if (t instanceof Element) return t;
    if (typeof t == "function") {
      const i = t();
      if (i instanceof Element) return i;
      if (n === "closeButton")
        return e.containerEl ? e.containerEl.querySelector(i) : null;
    }
    if (n === "focusElementOnClose") {
      if (!t) return null;
      switch (r) {
        case "tabForwards":
          return j(e, { inputElement: t.tabForwards });
        case "tabBackwards":
          return j(e, { inputElement: t.tabBackwards });
        case "click":
          return j(e, { inputElement: t.click });
        case "escapeKey":
          return j(e, { inputElement: t.escapeKey });
        case "scrolling":
          return j(e, { inputElement: t.scrolling });
      }
    }
    if (t == null) return null;
    if (Array.isArray(t))
      return t.map((i) => j(e, { inputElement: i, type: n }));
    for (const i in t) {
      const s = t[i];
      return j(e, { inputElement: s });
    }
    return null;
  },
  Bn = (e) => e.offsetHeight === 0 && e.offsetWidth === 0,
  Uf = (e) => {
    const { menuPopup: t } = e;
    e.menuPopupAdded ||
      ((e.menuPopupEl = j(e, { inputElement: t, type: "menuPopup" })),
      e.menuPopupEl &&
        ((e.menuPopupAdded = !0),
        e.menuPopupEl.setAttribute("tabindex", "-1")));
  },
  Hr = (e) => {
    !e.menuPopupEl ||
      !e.menuPopupAdded ||
      ((e.menuPopupEl = null), (e.menuPopupAdded = !1));
  },
  Vr = (e) => {
    const { useShadow: t } = e,
      n = e.marker || document.createTextNode(""),
      r = e.mount || document.body;
    function o() {
      return () => e.popupChildren;
    }
    const i = document.createElement("div"),
      s = t && i.attachShadow ? i.attachShadow({ mode: "open" }) : i;
    Object.defineProperty(i, "host", {
      get() {
        return n.parentNode;
      },
    }),
      zt(s, o());
    const a = e.overlayChildren;
    return (
      a && i.insertAdjacentElement("afterbegin", a),
      r.appendChild(i),
      e.ref && e.ref(i),
      e.onCreate != null && e.onCreate(r, i, n),
      e.stopComponentEventPropagation ? null : n
    );
  },
  qf = (e) => {
    let t;
    const [n, r] = se(),
      o = In(() => e.children),
      {
        onBeforeEnter: i,
        onEnter: s,
        onAfterEnter: a,
        onBeforeExit: u,
        onExit: l,
        onAfterExit: f,
        appendToElement: p,
      } = e;
    function d(g) {
      const m = e.name || "s",
        b = Wf(g) + "Class",
        E = e[b];
      return E ? E.split(" ") : [`${m}-${g}`];
    }
    const y = (g) =>
      p
        ? p === "menuPopup"
          ? j({ containerEl: g }, { inputElement: null, type: "menuPopup" })
          : typeof p == "string"
          ? g.querySelector(p)
          : p
        : g;
    function S(g, m) {
      const b = d("enter"),
        E = d("enter-active"),
        O = d("enter-to"),
        c = y(g);
      i && i(c),
        c.classList.add(...b),
        c.classList.add(...E),
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            c.classList.remove(...b),
              c.classList.add(...O),
              s && s(c, A),
              (!s || s.length < 2) &&
                (c.addEventListener("transitionend", A, { once: !0 }),
                c.addEventListener("animationend", A, { once: !0 }));
          });
        });
      function A() {
        c &&
          (c.classList.remove(...E),
          c.classList.remove(...O),
          n() !== g && r(g),
          a && a(c));
      }
      r(g);
    }
    function w(g) {
      const m = d("exit"),
        b = d("exit-active"),
        E = d("exit-to"),
        O = y(g);
      if (!g.parentNode) return c();
      u && u(g),
        O.classList.add(...m),
        O.classList.add(...b),
        requestAnimationFrame(() => {
          O.classList.remove(...m), O.classList.add(...E);
        }),
        l && l(O, c),
        (!l || l.length < 2) &&
          (O.addEventListener("transitionend", c, { once: !0 }),
          O.addEventListener("animationend", c, { once: !0 }));
      function c() {
        O.classList.remove(...b),
          O.classList.remove(...E),
          n() === g && r(void 0),
          f && f(O);
      }
    }
    return (
      _t((g) => {
        for (t = o(); typeof t == "function"; ) t = t();
        return te(() => (t && t !== g && S(t), g && g !== t && w(g), t));
      }),
      [n]
    );
  },
  Xr = (e, { onCleanup: t = !1 } = {}) => {
    document.removeEventListener("click", e.onClickDocumentRef), Li(e, t);
  },
  Kf = (e, t) => {
    const {
        overlay: n,
        overlayElement: r,
        open: o,
        mount: i,
        setOpen: s,
        timeouts: a,
        stopComponentEventPropagation: u,
        focusedMenuBtn: l,
      } = e,
      f = t.relatedTarget;
    if (!n && !r && !!o() && !T.closedBySetOpen) {
      if (i && u) {
        T.addedDocumentClick ||
          ((T.addedDocumentClick = !0),
          document.addEventListener("click", Ne, { once: !0 }));
        return;
      }
      if (!f) {
        if (B.find((p) => p.overlay)) return;
        T.addedDocumentClick ||
          ((T.addedDocumentClick = !0),
          document.addEventListener("click", Ne, { once: !0 }));
        return;
      }
      a.containerFocusTimeoutId = window.setTimeout(() => {
        (T.closedByEvents = !0), s(!1);
      });
    }
  },
  Gf = (e, t) => {
    const { timeouts: n } = e;
    clearTimeout(n.containerFocusTimeoutId),
      clearTimeout(n.menuButtonBlurTimeoutId),
      (n.containerFocusTimeoutId = null);
  },
  Hf = (e) => {
    const { focusElementOnOpen: t, focusedMenuBtn: n } = e;
    if (t == null) return;
    const r = j(e, { inputElement: t, type: "focusElementOnOpen" });
    r &&
      setTimeout(() => {
        r.focus(), (n.el = null);
      });
  },
  Vf = (e) => {
    const {
      closeWhenOverlayClicked: t,
      menuPopupEl: n,
      focusElementOnClose: r,
      menuBtnEls: o,
    } = e;
    if (!t) {
      n.focus();
      return;
    }
    const i = H(o),
      s =
        j(e, {
          inputElement: r,
          type: "focusElementOnClose",
          subType: "click",
        }) || i;
    s && s.focus(),
      ie(
        B,
        (a) => {
          if (!a.overlayElement) return a;
        },
        (a) => {
          const { setOpen: u } = a;
          (T.closedByEvents = !0), u(!1);
        }
      ),
      (T.closedByEvents = !0),
      e.setOpen(!1);
  },
  Xf = (e) => {
    const {
      enableLastFocusSentinel: t,
      menuBtnEls: n,
      containerEl: r,
      focusSentinelAfterEl: o,
    } = e;
    if (t) return;
    const s = H(n).nextElementSibling;
    zf({ parent: s, matchEl: r }) || o.setAttribute("tabindex", "0");
  },
  Jr = (e, t, n) => {
    const {
        uniqueId: r,
        containerEl: o,
        menuBtnEls: i,
        focusSentinelBeforeEl: s,
        trapFocus: a,
        focusSentinelAfterEl: u,
        closeWhenMenuButtonIsTabbed: l,
        focusElementOnClose: f,
        mount: p,
        open: d,
        setOpen: y,
      } = e,
      S = H(i);
    B.forEach((m) => window.clearTimeout(m.timeouts.containerFocusTimeoutId));
    const w = (m, b) => {
      ie(
        B,
        (E) => {
          if (b && H(E.menuBtnEls) === m && !E.closeWhenMenuButtonIsTabbed) {
            S.addEventListener("focus", e.onFocusMenuButtonRef, { once: !0 }),
              S.addEventListener("keydown", e.onKeydownMenuButtonRef),
              S.addEventListener("blur", e.onBlurMenuButtonRef, { once: !0 });
            return;
          }
          if (E.uniqueId === r || !E.containerEl.contains(m)) return E;
        },
        (E) => {
          (T.closedByEvents = !0), E.setOpen(!1);
        }
      ),
        m && m.focus();
    };
    if (!d()) return;
    if (n === o || n === S) {
      oe({ from: s, stopAtElement: o }).focus();
      return;
    }
    if (t === "before") {
      if (a) {
        oe({ from: u, direction: "backwards", stopAtElement: o }).focus();
        return;
      }
      if (l) {
        (T.closedByEvents = !0), y(!1), S.focus();
        return;
      }
      const m =
        j(e, {
          inputElement: f,
          type: "focusElementOnClose",
          subType: "tabBackwards",
        }) || S;
      w(m, !0);
      return;
    }
    if (a) {
      oe({ from: s, stopAtElement: o }).focus();
      return;
    }
    const g =
      j(e, {
        inputElement: f,
        type: "focusElementOnClose",
        subType: "tabForwards",
      }) || oe({ from: S, ignoreElement: [o] });
    if (p) {
      w(g);
      return;
    }
    g && g.focus(), (T.closedByEvents = !0), y(!1);
  },
  Jf = Mn('<div role="presentation"></div>'),
  Yf = Mn(
    '<div><div style="position: fixed; top: 0; left: 0; outline: none; pointer-events: none; width: 0; height: 0;" aria-hidden="true"></div><div style="position: fixed; top: 0; left: 0; outline: none; pointer-events: none; width: 0; height: 0;" aria-hidden="true"></div></div>'
  ),
  Md = (e) => {
    const {
        id: t = "",
        menuButton: n,
        menuPopup: r,
        focusElementOnClose: o,
        focusElementOnOpen: i,
        cursorKeys: s = !1,
        closeWhenMenuButtonIsTabbed: a = !1,
        closeWhenMenuButtonIsClicked: u = !0,
        closeWhenScrolling: l = !1,
        closeWhenDocumentBlurs: f = !1,
        closeWhenOverlayClicked: p = !0,
        closeWhenEscapeKeyIsPressed: d = !0,
        overlay: y = !1,
        overlayElement: S = !1,
        trapFocus: w = !1,
        removeScrollbar: g = !1,
        enableLastFocusSentinel: m = !1,
        mount: b,
        show: E = !1,
        onOpen: O,
      } = e,
      c = {
        mount: b,
        addedFocusOutAppEvents: !1,
        closeWhenOverlayClicked: p,
        closeWhenDocumentBlurs: f,
        closeWhenEscapeKeyIsPressed: d,
        closeWhenMenuButtonIsClicked: u,
        closeWhenMenuButtonIsTabbed: a,
        closeWhenScrolling: l,
        cursorKeys: s,
        focusElementOnClose: o,
        focusElementOnOpen: i,
        id: t,
        uniqueId: as(),
        menuBtnId: "",
        focusedMenuBtn: { el: null },
        menuBtnKeyupTabFired: !1,
        menuButton: n,
        timeouts: {
          containerFocusTimeoutId: null,
          menuButtonBlurTimeoutId: null,
        },
        upperStackRemovedByFocusOut: !1,
        menuPopup: r,
        closeByDismissEvent: !1,
        menuPopupAdded: !1,
        enableLastFocusSentinel: m,
        overlay: y,
        overlayElement: S,
        removeScrollbar: g,
        trapFocus: w,
        hasFocusSentinels: !!o || y || !!S || w || m,
        open: e.open,
        setOpen: e.setOpen,
        onClickOutsideMenuButtonRef: () => _f(c),
        onClickDocumentRef: (h) => Ff(c, h),
        onClickOverlayRef: () => Vf(c),
        onFocusInContainerRef: (h) => Gf(c),
        onFocusOutContainerRef: (h) => Kf(c, h),
        onBlurMenuButtonRef: (h) => Mf(c, h),
        onClickMenuButtonRef: (h) => kf(c, h),
        onMouseDownMenuButtonRef: (h) => Nf(c, h),
        onFocusFromOutsideAppOrTabRef: (h) => If(c, h),
        onFocusMenuButtonRef: () => jf(c),
        onKeydownMenuButtonRef: (h) => Df(c, h),
        refContainerCb: (h) => {
          S && (h.style.zIndex = "1000"),
            e.ref && e.ref(h),
            (c.containerEl = h);
        },
        refOverlayCb: (h) => {
          (h.style.position = "fixed"),
            (h.style.top = "0"),
            (h.style.left = "0"),
            (h.style.width = "100%"),
            (h.style.height = "100%"),
            (h.style.zIndex = "1000"),
            typeof S == "object" && S.ref && S.ref(h),
            (c.overlayEl = h);
        },
      };
    let A = b ? document.createTextNode("") : null;
    const M = !e.open();
    let x,
      I,
      J,
      V,
      z,
      K,
      X = !1;
    function ut(h, v) {
      return v
        ? v === "menuPopup"
          ? j({ containerEl: h }, { inputElement: null, type: "menuPopup" })
          : typeof v == "string"
          ? h.querySelector(v)
          : v
        : h;
    }
    function We(h, v) {
      if (h === "overlay" && (!e.overlay || !e.overlay.animation)) return;
      const P = h === "popup" ? e.animation : e.overlay.animation;
      if (!P || (!P.appear && !M)) return;
      (X = !1), (v = ut(v, P.appendToElement));
      const C = P.name;
      let {
        onBeforeEnter: R,
        onEnter: D,
        onAfterEnter: G,
        enterActiveClass: N = C + "-enter-active",
        enterClass: be = C + "-enter",
        enterToClass: Ee = C + "-enter-to",
        exitActiveClass: we = C + "-exit-active",
        exitClass: Se = C + "-exit",
        exitToClass: Oe = C + "-exit-to",
      } = P;
      const re = be.split(" "),
        Vt = N.split(" "),
        tr = Ee.split(" "),
        zi = Se.split(" "),
        Ui = we.split(" "),
        qi = Oe.split(" ");
      h === "popup"
        ? (v.removeEventListener("transitionend", J),
          v.removeEventListener("animationend", J))
        : (v.removeEventListener("transitionend", z),
          v.removeEventListener("animationend", z)),
        R && R(v),
        v.classList.remove(...zi, ...Ui, ...qi),
        v.classList.add(...re),
        v.classList.add(...Vt),
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            v.classList.remove(...re),
              v.classList.add(...tr),
              D && D(v, ze),
              (!D || D.length < 2) &&
                (h === "popup" ? (V = ze) : (K = ze),
                v.addEventListener("transitionend", ze, { once: !0 }),
                v.addEventListener("animationend", ze, { once: !0 }));
          });
        });
      function ze() {
        v && (v.classList.remove(...Vt), v.classList.remove(...tr), G && G(v));
      }
    }
    function lt(h, v) {
      if (!e.animation) {
        I == null || I.removeChild(x), (x = null), (I = null);
        return;
      }
      if (h === "overlay" && (!e.overlay || !e.overlay.animation)) return;
      const P = h === "popup" ? e.animation : e.overlay.animation;
      (X = !0), (v = ut(v, P.appendToElement));
      const C = P.name;
      let {
        onBeforeExit: R,
        onExit: D,
        onAfterExit: G,
        exitActiveClass: N = C + "-exit-active",
        exitClass: be = C + "-exit",
        exitToClass: Ee = C + "-exit-to",
      } = P;
      const we = be.split(" "),
        Se = N.split(" "),
        Oe = Ee.split(" ");
      if (
        (h === "popup"
          ? (v.removeEventListener("transitionend", V),
            v.removeEventListener("animationend", V))
          : (v.removeEventListener("transitionend", K),
            v.removeEventListener("animationend", K)),
        !v.parentNode)
      )
        return re();
      R && R(v),
        v.classList.add(...we),
        v.classList.add(...Se),
        requestAnimationFrame(() => {
          v.classList.remove(...we), v.classList.add(...Oe);
        }),
        D && D(v, re),
        (!D || D.length < 2) &&
          (h === "popup" ? (J = re) : (z = re),
          v.addEventListener("transitionend", re, { once: !0 }),
          v.addEventListener("animationend", re, { once: !0 }));
      function re() {
        (X = !1),
          I == null || I.removeChild(x),
          (T.closedBySetOpen = !1),
          c.menuBtnEls &&
            (y || S) &&
            document.activeElement === document.body &&
            H(c.menuBtnEls).focus(),
          G && G(v),
          (x = null),
          (I = null);
      }
    }
    const Yn = (h) => {
        if (!!g && !(B.length > 1))
          if (h) {
            const v = document.scrollingElement;
            v.style.overflow = "hidden";
          } else {
            const v = document.scrollingElement;
            v.style.overflow = "";
          }
      },
      Di = () => {
        var G;
        const h = document.activeElement;
        if (
          h !== document.body &&
          c.menuBtnEls.every((N) => h !== N) &&
          !((G = c.containerEl) == null ? void 0 : G.contains(h))
        )
          return;
        const { menuBtnEls: v, focusedMenuBtn: P, timeouts: C } = c,
          R = H(v),
          D =
            j(c, {
              inputElement: o,
              type: "focusElementOnClose",
              subType: "click",
            }) || R;
        D &&
          (D.focus(), D === R && Ri({ focusedMenuBtn: P, timeouts: C, el: D }));
      },
      ji = () => {
        var v;
        if (T.closedByEvents) return;
        const h = document.activeElement;
        if (
          c.menuBtnEls.every((P) => h !== P) &&
          !((v = c.containerEl) == null ? void 0 : v.contains(h))
        ) {
          setTimeout(() => {
            T.closedBySetOpen = !1;
          });
          return;
        }
        T.closedBySetOpen ||
          ((T.addedDocumentClick = !1),
          document.removeEventListener("click", Ne),
          (T.closedBySetOpen = !0),
          setTimeout(() => {
            (T.closedBySetOpen = !1), Di();
          }));
      };
    or(
      Xe(
        () =>
          typeof e.menuButton == "function" ? e.menuButton() : e.menuButton,
        (h) => {
          if (Array.isArray(h) && !h.length) return;
          const { focusedMenuBtn: v } = c,
            P = j(c, { inputElement: h, type: "menuButton" });
          if (!P) return;
          (c.menuBtnEls = Array.isArray(P) ? P : [P]),
            c.menuBtnEls.forEach((R, D, G) => {
              v.el &&
                v.el !== R &&
                (G.length > 1 ? !Bn(R) : !0) &&
                ((v.el = R),
                R.focus({ preventScroll: !0 }),
                R.addEventListener("keydown", c.onKeydownMenuButtonRef)),
                R.setAttribute("type", "button"),
                R.addEventListener("click", c.onClickMenuButtonRef),
                R.addEventListener("mousedown", c.onMouseDownMenuButtonRef),
                e.open() &&
                  (!c.focusElementOnOpen ||
                    c.focusElementOnOpen === "menuButton" ||
                    c.focusElementOnOpen === c.menuBtnEls) &&
                  !Bn(R) &&
                  R.addEventListener("blur", c.onBlurMenuButtonRef, {
                    once: !0,
                  });
            });
          const C = B.find((R) => R.uniqueId === c.uniqueId);
          C && (C.menuBtnEls = c.menuBtnEls),
            pn(() => {
              !c || Li(c, !0);
            });
        }
      )
    ),
      E &&
        b &&
        Vr({
          mount: typeof b == "string" ? document.querySelector(b) : b,
          popupChildren: ct(e.children),
          overlayChildren: S ? Qn() : null,
          marker: A,
          onCreate: (h, v) => {
            (I = h), (x = v);
          },
        }),
      _t(
        Xe(
          () => !!e.open(),
          (h, v) => {
            h !== v &&
              (h ||
                (c.focusSentinelAfterEl &&
                  (c.focusSentinelAfterEl.tabIndex = -1),
                ji()),
              !(!b || E) &&
                (h
                  ? (I ||
                      Vr({
                        mount:
                          typeof b == "string" ? document.querySelector(b) : b,
                        popupChildren: ct(e.children),
                        overlayChildren: S ? Qn() : null,
                        marker: A,
                        onCreate: (P, C) => {
                          (I = P), (x = C);
                        },
                      }),
                    We("popup", x == null ? void 0 : x.firstElementChild),
                    We("overlay", c.overlayEl))
                  : (lt("popup", x == null ? void 0 : x.firstElementChild),
                    lt("overlay", c.overlayEl))));
          },
          { defer: M }
        )
      ),
      or(
        Xe(
          () => !!e.open(),
          (h, v) => {
            h !== v &&
              (h
                ? ((T.closedByEvents = !1),
                  Uf(c),
                  Hf(c),
                  Rf(l),
                  Bf({
                    id: t,
                    uniqueId: c.uniqueId,
                    open: e.open,
                    setOpen: e.setOpen,
                    containerEl: c.containerEl,
                    menuBtnEls: c.menuBtnEls,
                    focusedMenuBtn: c.focusedMenuBtn,
                    overlayEl: c.overlayEl,
                    menuPopupEl: c.menuPopupEl,
                    overlay: y,
                    closeWhenDocumentBlurs: f,
                    closeWhenEscapeKeyIsPressed: d,
                    closeWhenMenuButtonIsTabbed: a,
                    overlayElement: S,
                    cursorKeys: s,
                    focusElementOnClose: o,
                    focusSentinelBeforeEl: c.focusSentinelBeforeEl,
                    upperStackRemovedByFocusOut: !1,
                    detectIfMenuButtonObscured: !1,
                    queueRemoval: !1,
                    timeouts: c.timeouts,
                  }),
                  Yn(h),
                  O && O(h, { uniqueId: c.uniqueId, dismissStack: B }),
                  Xf(c))
                : ((T.closedByEvents = !1),
                  Xr(c),
                  Pn(c),
                  Hr(c),
                  Kr(c.uniqueId),
                  Gr(),
                  Yn(h),
                  O && O(h, { uniqueId: c.uniqueId, dismissStack: B })));
          },
          { defer: M }
        )
      ),
      pn(() => {
        Xr(c, { onCleanup: !0 }),
          Hr(c),
          Pn(c),
          Kr(c.uniqueId),
          Gr(),
          !E &&
            b &&
            I &&
            !X &&
            (lt("popup", x == null ? void 0 : x.firstElementChild),
            lt("overlay", c.overlayEl));
      });
    function Qn() {
      return (() => {
        const h = Jf.cloneNode(!0),
          v = c.refOverlayCb;
        return (
          typeof v == "function" ? v(h) : (c.refOverlayCb = h),
          Et(h, "click", c.onClickOverlayRef, !0),
          ee(
            (P) => {
              const C =
                  typeof e.overlayElement == "object"
                    ? e.overlayElement.class
                    : void 0,
                R =
                  typeof e.overlayElement == "object"
                    ? e.overlayElement.classList || {}
                    : {};
              return (
                C !== P._v$ && (h.className = P._v$ = C),
                (P._v$2 = vn(h, R, P._v$2)),
                P
              );
            },
            { _v$: void 0, _v$2: void 0 }
          ),
          h
        );
      })();
    }
    function ct(h) {
      return (() => {
        const v = Yf.cloneNode(!0),
          P = v.firstChild,
          C = P.nextSibling,
          R = c.refContainerCb;
        typeof R == "function" ? R(v) : (c.refContainerCb = v),
          Et(v, "focusout", c.onFocusOutContainerRef, !0),
          Et(v, "focusin", c.onFocusInContainerRef, !0);
        const D = c.focusSentinelBeforeEl;
        typeof D == "function" ? D(P) : (c.focusSentinelBeforeEl = P),
          P.addEventListener("focus", (N) => {
            Jr(c, "before", N.relatedTarget);
          }),
          zt(v, h, C);
        const G = c.focusSentinelAfterEl;
        return (
          typeof G == "function" ? G(C) : (c.focusSentinelAfterEl = C),
          C.addEventListener("focus", () => {
            Jr(c, "after");
          }),
          ee(
            (N) => {
              const be = c.id,
                Ee = e.class,
                we = e.classList || {},
                Se = e.open() ? "0" : "-1",
                Oe = e.open() && c.hasFocusSentinels ? "0" : "-1";
              return (
                be !== N._v$3 && Ye(v, "id", (N._v$3 = be)),
                Ee !== N._v$4 && (v.className = N._v$4 = Ee),
                (N._v$5 = vn(v, we, N._v$5)),
                Se !== N._v$6 && Ye(P, "tabindex", (N._v$6 = Se)),
                Oe !== N._v$7 && Ye(C, "tabindex", (N._v$7 = Oe)),
                N
              );
            },
            {
              _v$3: void 0,
              _v$4: void 0,
              _v$5: void 0,
              _v$6: void 0,
              _v$7: void 0,
            }
          ),
          v
        );
      })();
    }
    if (e.mount) return A;
    if (E) return ct(e.children);
    let Zn = !1;
    const Wi = k(() => e.open(), void 0, {
        equals: (h, v) => (Zn ? h === v : !h == !v),
      }),
      er = k(() => {
        const h = Wi();
        if (h) {
          const v = e.children;
          return (Zn = typeof v == "function" && v.length > 0)
            ? te(() => v(h))
            : ct(v);
        }
      });
    return e.animation
      ? ne(
          qf,
          nt(() => e.animation, {
            get name() {
              return e.animation.name;
            },
            get enterClass() {
              return e.animation.enterClass;
            },
            get enterActiveClass() {
              return e.animation.enterActiveClass;
            },
            get enterToClass() {
              return e.animation.enterToClass;
            },
            get exitClass() {
              return e.animation.exitClass;
            },
            get exitActiveClass() {
              return e.animation.exitActiveClass;
            },
            get exitToClass() {
              return e.animation.exitToClass;
            },
            get appear() {
              return e.animation.appear;
            },
            get children() {
              return er();
            },
          })
        )
      : er;
  };
Nn(["click", "focusin", "focusout"]);
var ve = [],
  Qf = function () {
    return ve.some(function (e) {
      return e.activeTargets.length > 0;
    });
  },
  Zf = function () {
    return ve.some(function (e) {
      return e.skippedTargets.length > 0;
    });
  },
  Yr = "ResizeObserver loop completed with undelivered notifications.",
  ed = function () {
    var e;
    typeof ErrorEvent == "function"
      ? (e = new ErrorEvent("error", { message: Yr }))
      : ((e = document.createEvent("Event")),
        e.initEvent("error", !1, !1),
        (e.message = Yr)),
      window.dispatchEvent(e);
  },
  it;
(function (e) {
  (e.BORDER_BOX = "border-box"),
    (e.CONTENT_BOX = "content-box"),
    (e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box");
})(it || (it = {}));
var he = function (e) {
    return Object.freeze(e);
  },
  td = (function () {
    function e(t, n) {
      (this.inlineSize = t), (this.blockSize = n), he(this);
    }
    return e;
  })(),
  Ii = (function () {
    function e(t, n, r, o) {
      return (
        (this.x = t),
        (this.y = n),
        (this.width = r),
        (this.height = o),
        (this.top = this.y),
        (this.left = this.x),
        (this.bottom = this.top + this.height),
        (this.right = this.left + this.width),
        he(this)
      );
    }
    return (
      (e.prototype.toJSON = function () {
        var t = this,
          n = t.x,
          r = t.y,
          o = t.top,
          i = t.right,
          s = t.bottom,
          a = t.left,
          u = t.width,
          l = t.height;
        return {
          x: n,
          y: r,
          top: o,
          right: i,
          bottom: s,
          left: a,
          width: u,
          height: l,
        };
      }),
      (e.fromRect = function (t) {
        return new e(t.x, t.y, t.width, t.height);
      }),
      e
    );
  })(),
  Jn = function (e) {
    return e instanceof SVGElement && "getBBox" in e;
  },
  Fi = function (e) {
    if (Jn(e)) {
      var t = e.getBBox(),
        n = t.width,
        r = t.height;
      return !n && !r;
    }
    var o = e,
      i = o.offsetWidth,
      s = o.offsetHeight;
    return !(i || s || e.getClientRects().length);
  },
  Qr = function (e) {
    var t, n;
    if (e instanceof Element) return !0;
    var r =
      (n = (t = e) === null || t === void 0 ? void 0 : t.ownerDocument) ===
        null || n === void 0
        ? void 0
        : n.defaultView;
    return !!(r && e instanceof r.Element);
  },
  nd = function (e) {
    switch (e.tagName) {
      case "INPUT":
        if (e.type !== "image") break;
      case "VIDEO":
      case "AUDIO":
      case "EMBED":
      case "OBJECT":
      case "CANVAS":
      case "IFRAME":
      case "IMG":
        return !0;
    }
    return !1;
  },
  tt = typeof window != "undefined" ? window : {},
  mt = new WeakMap(),
  Zr = /auto|scroll/,
  rd = /^tb|vertical/,
  od = /msie|trident/i.test(tt.navigator && tt.navigator.userAgent),
  Y = function (e) {
    return parseFloat(e || "0");
  },
  Le = function (e, t, n) {
    return (
      e === void 0 && (e = 0),
      t === void 0 && (t = 0),
      n === void 0 && (n = !1),
      new td((n ? t : e) || 0, (n ? e : t) || 0)
    );
  },
  eo = he({
    devicePixelContentBoxSize: Le(),
    borderBoxSize: Le(),
    contentBoxSize: Le(),
    contentRect: new Ii(0, 0, 0, 0),
  }),
  ki = function (e, t) {
    if ((t === void 0 && (t = !1), mt.has(e) && !t)) return mt.get(e);
    if (Fi(e)) return mt.set(e, eo), eo;
    var n = getComputedStyle(e),
      r = Jn(e) && e.ownerSVGElement && e.getBBox(),
      o = !od && n.boxSizing === "border-box",
      i = rd.test(n.writingMode || ""),
      s = !r && Zr.test(n.overflowY || ""),
      a = !r && Zr.test(n.overflowX || ""),
      u = r ? 0 : Y(n.paddingTop),
      l = r ? 0 : Y(n.paddingRight),
      f = r ? 0 : Y(n.paddingBottom),
      p = r ? 0 : Y(n.paddingLeft),
      d = r ? 0 : Y(n.borderTopWidth),
      y = r ? 0 : Y(n.borderRightWidth),
      S = r ? 0 : Y(n.borderBottomWidth),
      w = r ? 0 : Y(n.borderLeftWidth),
      g = p + l,
      m = u + f,
      b = w + y,
      E = d + S,
      O = a ? e.offsetHeight - E - e.clientHeight : 0,
      c = s ? e.offsetWidth - b - e.clientWidth : 0,
      A = o ? g + b : 0,
      M = o ? m + E : 0,
      x = r ? r.width : Y(n.width) - A - c,
      I = r ? r.height : Y(n.height) - M - O,
      J = x + g + c + b,
      V = I + m + O + E,
      z = he({
        devicePixelContentBoxSize: Le(
          Math.round(x * devicePixelRatio),
          Math.round(I * devicePixelRatio),
          i
        ),
        borderBoxSize: Le(J, V, i),
        contentBoxSize: Le(x, I, i),
        contentRect: new Ii(p, u, x, I),
      });
    return mt.set(e, z), z;
  },
  Mi = function (e, t, n) {
    var r = ki(e, n),
      o = r.borderBoxSize,
      i = r.contentBoxSize,
      s = r.devicePixelContentBoxSize;
    switch (t) {
      case it.DEVICE_PIXEL_CONTENT_BOX:
        return s;
      case it.BORDER_BOX:
        return o;
      default:
        return i;
    }
  },
  id = (function () {
    function e(t) {
      var n = ki(t);
      (this.target = t),
        (this.contentRect = n.contentRect),
        (this.borderBoxSize = he([n.borderBoxSize])),
        (this.contentBoxSize = he([n.contentBoxSize])),
        (this.devicePixelContentBoxSize = he([n.devicePixelContentBoxSize]));
    }
    return e;
  })(),
  Ni = function (e) {
    if (Fi(e)) return 1 / 0;
    for (var t = 0, n = e.parentNode; n; ) (t += 1), (n = n.parentNode);
    return t;
  },
  sd = function () {
    var e = 1 / 0,
      t = [];
    ve.forEach(function (s) {
      if (s.activeTargets.length !== 0) {
        var a = [];
        s.activeTargets.forEach(function (l) {
          var f = new id(l.target),
            p = Ni(l.target);
          a.push(f),
            (l.lastReportedSize = Mi(l.target, l.observedBox)),
            p < e && (e = p);
        }),
          t.push(function () {
            s.callback.call(s.observer, a, s.observer);
          }),
          s.activeTargets.splice(0, s.activeTargets.length);
      }
    });
    for (var n = 0, r = t; n < r.length; n++) {
      var o = r[n];
      o();
    }
    return e;
  },
  to = function (e) {
    ve.forEach(function (n) {
      n.activeTargets.splice(0, n.activeTargets.length),
        n.skippedTargets.splice(0, n.skippedTargets.length),
        n.observationTargets.forEach(function (o) {
          o.isActive() &&
            (Ni(o.target) > e
              ? n.activeTargets.push(o)
              : n.skippedTargets.push(o));
        });
    });
  },
  ad = function () {
    var e = 0;
    for (to(e); Qf(); ) (e = sd()), to(e);
    return Zf() && ed(), e > 0;
  },
  fn,
  _i = [],
  ud = function () {
    return _i.splice(0).forEach(function (e) {
      return e();
    });
  },
  ld = function (e) {
    if (!fn) {
      var t = 0,
        n = document.createTextNode(""),
        r = { characterData: !0 };
      new MutationObserver(function () {
        return ud();
      }).observe(n, r),
        (fn = function () {
          n.textContent = "" + (t ? t-- : t++);
        });
    }
    _i.push(e), fn();
  },
  cd = function (e) {
    ld(function () {
      requestAnimationFrame(e);
    });
  },
  xt = 0,
  fd = function () {
    return !!xt;
  },
  dd = 250,
  pd = { attributes: !0, characterData: !0, childList: !0, subtree: !0 },
  no = [
    "resize",
    "load",
    "transitionend",
    "animationend",
    "animationstart",
    "animationiteration",
    "keyup",
    "keydown",
    "mouseup",
    "mousedown",
    "mouseover",
    "mouseout",
    "blur",
    "focus",
  ],
  ro = function (e) {
    return e === void 0 && (e = 0), Date.now() + e;
  },
  dn = !1,
  yd = (function () {
    function e() {
      var t = this;
      (this.stopped = !0),
        (this.listener = function () {
          return t.schedule();
        });
    }
    return (
      (e.prototype.run = function (t) {
        var n = this;
        if ((t === void 0 && (t = dd), !dn)) {
          dn = !0;
          var r = ro(t);
          cd(function () {
            var o = !1;
            try {
              o = ad();
            } finally {
              if (((dn = !1), (t = r - ro()), !fd())) return;
              o ? n.run(1e3) : t > 0 ? n.run(t) : n.start();
            }
          });
        }
      }),
      (e.prototype.schedule = function () {
        this.stop(), this.run();
      }),
      (e.prototype.observe = function () {
        var t = this,
          n = function () {
            return t.observer && t.observer.observe(document.body, pd);
          };
        document.body ? n() : tt.addEventListener("DOMContentLoaded", n);
      }),
      (e.prototype.start = function () {
        var t = this;
        this.stopped &&
          ((this.stopped = !1),
          (this.observer = new MutationObserver(this.listener)),
          this.observe(),
          no.forEach(function (n) {
            return tt.addEventListener(n, t.listener, !0);
          }));
      }),
      (e.prototype.stop = function () {
        var t = this;
        this.stopped ||
          (this.observer && this.observer.disconnect(),
          no.forEach(function (n) {
            return tt.removeEventListener(n, t.listener, !0);
          }),
          (this.stopped = !0));
      }),
      e
    );
  })(),
  Cn = new yd(),
  oo = function (e) {
    !xt && e > 0 && Cn.start(), (xt += e), !xt && Cn.stop();
  },
  vd = function (e) {
    return !Jn(e) && !nd(e) && getComputedStyle(e).display === "inline";
  },
  hd = (function () {
    function e(t, n) {
      (this.target = t),
        (this.observedBox = n || it.CONTENT_BOX),
        (this.lastReportedSize = { inlineSize: 0, blockSize: 0 });
    }
    return (
      (e.prototype.isActive = function () {
        var t = Mi(this.target, this.observedBox, !0);
        return (
          vd(this.target) && (this.lastReportedSize = t),
          this.lastReportedSize.inlineSize !== t.inlineSize ||
            this.lastReportedSize.blockSize !== t.blockSize
        );
      }),
      e
    );
  })(),
  md = (function () {
    function e(t, n) {
      (this.activeTargets = []),
        (this.skippedTargets = []),
        (this.observationTargets = []),
        (this.observer = t),
        (this.callback = n);
    }
    return e;
  })(),
  gt = new WeakMap(),
  io = function (e, t) {
    for (var n = 0; n < e.length; n += 1) if (e[n].target === t) return n;
    return -1;
  },
  bt = (function () {
    function e() {}
    return (
      (e.connect = function (t, n) {
        var r = new md(t, n);
        gt.set(t, r);
      }),
      (e.observe = function (t, n, r) {
        var o = gt.get(t),
          i = o.observationTargets.length === 0;
        io(o.observationTargets, n) < 0 &&
          (i && ve.push(o),
          o.observationTargets.push(new hd(n, r && r.box)),
          oo(1),
          Cn.schedule());
      }),
      (e.unobserve = function (t, n) {
        var r = gt.get(t),
          o = io(r.observationTargets, n),
          i = r.observationTargets.length === 1;
        o >= 0 &&
          (i && ve.splice(ve.indexOf(r), 1),
          r.observationTargets.splice(o, 1),
          oo(-1));
      }),
      (e.disconnect = function (t) {
        var n = this,
          r = gt.get(t);
        r.observationTargets.slice().forEach(function (o) {
          return n.unobserve(t, o.target);
        }),
          r.activeTargets.splice(0, r.activeTargets.length);
      }),
      e
    );
  })(),
  Nd = (function () {
    function e(t) {
      if (arguments.length === 0)
        throw new TypeError(
          "Failed to construct 'ResizeObserver': 1 argument required, but only 0 present."
        );
      if (typeof t != "function")
        throw new TypeError(
          "Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function."
        );
      bt.connect(this, t);
    }
    return (
      (e.prototype.observe = function (t, n) {
        if (arguments.length === 0)
          throw new TypeError(
            "Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present."
          );
        if (!Qr(t))
          throw new TypeError(
            "Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element"
          );
        bt.observe(this, t, n);
      }),
      (e.prototype.unobserve = function (t) {
        if (arguments.length === 0)
          throw new TypeError(
            "Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present."
          );
        if (!Qr(t))
          throw new TypeError(
            "Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element"
          );
        bt.unobserve(this, t);
      }),
      (e.prototype.disconnect = function () {
        bt.disconnect(this);
      }),
      (e.toString = function () {
        return "function ResizeObserver () { [polyfill code] }";
      }),
      e
    );
  })();







  
  
  var wstr = "ABAZA ABONE AB??DE AB??YE ACABA ACELE ACEM?? ACILI ACIMA ADETA ADRES ADSIZ AFAK?? AFGAN AFYON AF??FE AF??L?? AF????E AHAL?? AHBAP AHENK AHKAM AHLAK AHLAT AHMAK AHVAL AH??ZE AH??AP AJANS AJ??TE AKA??T AKBA?? AKICI AKKOR AKORT AKRAN AKREP AKSAK AKSAM AKSAN AKSON AKTAR AKT??R AKT??F AK??IL AK??DE AK??AM AK??IN ALACA ALAKA ALARM ALBAY ALB??M ALEN?? ALEV?? ALEYH ALGIN ALICI ALKAN ALKIM ALKI?? ALKOL ALLIK ALMAK ALMAN ALTIN AL??AK AL??ZE AMADE AMBAR AMBER AMELE AMEL?? AMPUL AMP??R AM??GO ANANE ANCAK ANDA?? ANDI?? ANEM?? ANGI?? ANGUT ANKET ANLAM ANLIK ANONS ANTEN ANTET ANTRE ANT??K AN??ME APACI APL??K APORT APTAL AP??KO ARABA ARAB?? ARACI ARAMA ARAZ?? ARDIL ARDI?? ARENA ARGIT ARGON ARIZA ARIZ?? ARKIT ARMUT AROMA ARPEJ ARP??I ARSIZ ARTER ARTIK ARTIM ARTI?? ARTMA ART??I AR??FE AR??ZA AR??IN AR????V ASAB?? ASHAP ASILI ASKER ASKLI ASLAN ASLEN ASLIK ASMAK ASPUR ASTAR ASTAT ASTIM AS??DE AS??ST ATAMA ATAR?? ATA??E ATICI ATILI ATLAS ATLET ATMAK AVANE AVANS AVARE AVDET AVLAK AVUN?? AV??ZE AV??AR AYDIN AYGIR AYGIT AYIRT AYNEN AYRAN AYRA?? AYYA?? AYYUK AZADE AZAM?? AZER?? AZGIN AZILI AZLIK AZMAN AZ??ZE A??G??Z A??LIK A??MAZ A??ILI A??LAK A??DAT A??AMA A??AR?? A??A??I A??EV?? A??ICI A??ILI A??IRI A??KIN A??LIK A??MAK A??URE A????NA BACAK BADEM BAD??K BAFRA BAGAJ BAGET BAHAR BAH??E BAH??R BAKAN BAKIM BAKIR BAKI?? BAKLA BAKMA BAK??R BALAT BALCI BALDO BALET BALIK BALLI BALON BALTA BALYA BAL???? BAMBU BAMYA BANAL BANDO BANKA BANKO BANMA BANYO BARAJ BARAN BAREM BARET BARI?? BARI?? BAROK BARON BARUT BAR??Z BASAK BASAR BASEN BASIK BASIM BASIN BASI?? BASKI BASMA BASTI BASUR BAS??T BATAK BATAR BATIK BATIL BATIN BATI?? BATKI BATMA BATON BAT??K BAVUL BAYAN BAYAT BAYIR BAYMA BAZAL BAZEN BA??CI BA??I?? BA??LI BA??AK BA??KA BA??LI BA??TA BA????I BEBEK BEDEL BEDEN BEG??M BEHER BEKAR BEK???? BELGE BELK?? BELL?? BEMOL BENCE BENDE BENEK BENG?? BEN??Z BERAT BER??L BESTE BES??N BETER BETON BET??K BET??M BEYAN BEYAZ BEYZ?? BEY??N BEY??T BEZEN BE??ER BE????K BE????Z BIDIK BIYIK BI??AK BI??IK BI??KI BLOKE BOB??N BODUR BOHEM BOH??A BOMBA BOMBE BORAN BORAT BORDA BORDO BORSA BORUK BOYAR BOYNA BOYOZ BOYUN BOYUT BOZCA BOZUK BOZUM BO??AZ BO??UM BRAN?? BRAVO BRONZ BRON?? BUCAK BUDAK BUDUN BUG??N BUHAR BUKET BUKLE BULGU BULUT BULU?? BUNAK BURGU BURSA BURUK BURUN BUTLU BUTON BUT??K BUYMA BUZLU BUZUL BU??UK BU??RA BU??ON B??B??R B??CEK B??LGE B??LME B??L??K B??L??M B??L??T B??L???? B??REK B??YLE B??????R B??K??M B??LU?? B??NYE B??TAN B??T??E B??T??N B??Y??K B??ZG?? B??ZME B??BER B??BLO B??DON B??LEK B??LET B??LGE B??LG?? B??LME B??LYE B??L??M B??L??R B??L???? B??ND?? B??NEK B??N???? B??RAZ B??REY B??R??M B??TAP B??TK?? B??T??K B??ZON B????EM B??????M CACIK CADDE CAH??L CAMCI CAM??A CANAN CANLI CAN??K CAN??P CASUS CEBEL CEBR?? CEB??N CEB??R CEDRE CED??T CEHR?? CEH??L CEKET CELAL CELBE CELEP CELSE CEL??L CEMAL CEMRE CEM??L CENAH CENAP CENUP CEN??N CEPHE CEP???? CEREN CESET CESUR CES??M CEVAP CEVAZ CEV??R CEV??Z CEZA?? CEZBE CEZVE CEZ??R CIBIL CILIZ CIVIK CONTA CO??KU CO??MA CO??UM CO??U?? CUKKA CUMBA CUNDA CUNTA CU?????? C??BBE C??C??K C??LUS C??MLE C??N??P C??RET C??RUF C??R??M C??SSE C??BRE C??B??N C??C??M C??DAR C??DD?? C??HAN C??HAT C??HAZ C??HET C??LVE C??MR?? C??NAS C??NA?? C??NC?? C??NL?? C??NS?? C??R??M C??R??T C??S??M C??VAN C??VAR C??ZRE C??ZYE C????ER DADAY DADA?? DAH??L DAK??K DALAK DALAN DALGA DALIZ DALI?? DALLI DALMA DALSI DAMAK DAMAR DAMAT DAMGA DAMLA DARA?? DARBE DAS??T DAT??A DAVAR DAVET DAVUL DAYAK DA??AR DA??MA DA??M?? DA??RE DEBBE DEB??L DEFNE DEF??N DEGAJ DEKAN DEKAR DEKOR DELG?? DELME DELTA DEL??K DEL??L DEMC?? DEMEK DEMET DEME?? DEML?? DEMRE DEM??N DEM??R DENEK DENET DENEY DENGE DENL?? DENYO DEN??M DEN??Z DEPAR DERB?? DERG?? DERME DERYA DER??K DER??N DESEN DESTE DETAY DEVAM DEVCE DEVRE DEVR?? DEV??M DEV??R DEY??M DEY???? DE??ER DE??ER DE??ME DE????L DE????M DE????N DE?????? DE??ST DE??ZM DE??ME DE????K DILAK DI??AN DI??KI DOBRA DOGMA DOKUZ DOLAK DOLAM DOLAP DOLAR DOLAY DOLGU DOLMA DOLUM DOLU?? DOMUR DOMUZ DONLU DONMA DONUK DON??R DORSE DORUK DOSYA DOYGU DOYMA DOYUM DOYU?? DOZAJ DOZER DO??AL DO??AN DO??A?? DO??RU DO??UM DO??U?? DRAJE DRAMA DUACI DUALI DUBAR DUBLE DUDAK DUHUL DULUK DUMAN DUMUR DURAK DURAL DURGU DURMA DURUK DURUM DURU?? DUT??U DUVAK DUVAR DUYAR DUYGU DUYMA DUYUM D??GER D??KME D??K??K D??K??M D??K???? D??LEK D??L??T D??NEK D??NEL D??NEM D??NER D??NE?? D??NG?? D??N??K D??N??M D??N??T D??N???? D??PER D??VE?? D??VME D??V???? D??V??Z D????EK D????EM D??BEL D??BE?? D??DEN D??D??K D??MEN D??NK?? D??NYA D??N??R D??N??T D??RME D??RT?? D??RZ?? D??RZ?? D??R??M D??VEL D??VER D??ZEM D??ZEN D??ZEY D??ZE?? D??ZG?? D??ZME D????ME D??????M D??????N D????ES D????EY D????E?? D????K?? D??????K D??????N D??????T D???????? D??BEK D??CLE D??DAR D??D??M D??KEL D??KEN D??KEY D??KE?? D??KME D??KSE D??KTA D??KTE D??K??E D??K??M D??K??T D??K??Z D??K???? D??LEK D??LME D??LS?? D??L??M D??L???? D??MA?? D??NAR D??NCE D??NEK D??NEN D??NGO D??NME D??N???? D??PL?? D??REK D??REN D??R??L D??R??M D??R???? D??SKO D??TME D??VAL D??VAN D??YAR D??YET D??YEZ D??YOT D??ZEK D??ZEL D??ZEM D??ZEY D??ZGE D??ZG?? D??ZME D??Z??M D??Z??N D????ER D????L?? D???????? EBCET EBED?? EBEL?? EBLEH ECDAT EDALI EDEB?? ED??N?? EFDAL EFEKT EFKAR EFLAK EFRAT EFR??Z EFSUN EGALE EGLOG EGZOZ EHVEN EJDER EKLEM EKLER EKMEK EKOSE EKRAN EKSEN EKSER EKS??K EK??R?? EK??L?? ELBET ELC??K ELDEN ELEJ?? ELEME ELL??K ELMAS ELMEK ELVAN ELYAF ELZEM EL????M EL??F?? EL??PS EMARE EMAYE EMCEK EMC??K EMLAK EML??K EMME?? EMRAZ EMSAL EMT??A EMVAL EMZ??K EM??C?? ENAY?? ENCAM ENDAM ENDER ENEME ENEZE ENFES ENGEL ENG??N ENKAZ ENLEM ENSAR ENZ??M EN??TE EOSEN EPEY?? EPSEM ERBAA ERBAP ERBA?? ERB??N ERC???? ERDEK ERDEM ERGEN ERG??N ERKAN ERKEK ERKEN ERKE?? ERKL?? ERK??N ERL??K ERMEK ERM??N ERM???? ERO??N ERVAH ERZAK ERZ??N ER??KA ER??ME ER??N?? ESAME ESANS ESAS?? ESBAP ESEME ESHAM ESK??L ESK??Z ESLAF ESMEK ESMER ESNAF ESNEK ESPAS ESPR?? ESRAR ESSAH ESTET ESVAP ETENE ETFAL ETKEN ETK??N ETL??K ETMEK ETMEN ETN??K ETRAF ETSEL ETS??Z ET????L EVAZE EVCEK EVC??K EVC??L EVDE?? EVG??N EVHAM EVKAF EVLAT EVRAK EVRAT EVREN EVR??K EVR??M EVSAF EVS??Z EVVEL EV??YE EYLEM EYL??L EYVAH EYVAN EYYAM EZAN?? EZBER EZEL?? EZG??N EZG???? EZMEK EZ??NE E??HEL E??LEK E??MEK E??ME?? E??M??R E??R??M E??ARP E??KAL E??K??N E??LEK E??L??K E??MEK E??RAF E??REF E??S??Z FAC??A FAGOT FAHR?? FAHTE FAH???? FAKAT FAK??L FAK??H FAK??R FALAN FALCI FALEZ FALSO FALYA FANTA FANT?? FANUS FANYA FARAD FARA?? FARBA FAR??L FAR???? FASET FASIK FASIL FASLI FASON FAS??H FATSA FAT??H FAUNA FAYDA FAZIL FAZLA FEC??R FEDA?? FEHVA FEH??M FEK??L FELAH FELEK FENER FENN?? FEN??K FERAH FERDA FERD?? FERL?? FERMA FER??H FER??K FESAT FES??H FETHA FETVA FET??S FET??H FET???? FEVR?? FEY??Z FIKIH FIKRA FIRIN FIRKA FIR??A FITIK FITR?? FLAMA FLORA FLOR?? FL??RE FL??RT FODUL FOKUS FOLYO FONDA FOND?? FONEM FORMA FOROZ FORSA FORTE FORUM FOS??L FRANK FRAPE FRENK FREZE FR??GO FR??SA FUAYE FUHU?? FUJER FULAR FULYA FUNDA FURYA F??NYE F??SUN F??TUR F??BER F??DAN F??DYE F??FRE F??GAN F??G??R F??KR?? F??K??R F??LAN F??LET F??L??Z F??NAL F??NCE F??N???? F??RAK F??RAR F??REZ F??RMA F??SKE F??STO F??TNE F??TRE F??T???? F??T??L F??T??N F??YAT F??Z??K F????L?? F????EK F????L?? GABRO GABYA GAB??N GAD??R GAFUR GAF??L GALAT GALON GALOP GALO?? GAL??P GAL??Z GAMBA GAMET GAMLI GAMZE GARAJ GAROZ GAR??P GAS??L GAUSS GAVUR GAYDA GAYET GAYRI GAYR?? GAYUR GAYYA GAZAP GAZEL GAZLI GAZOZ GA??LE GA??TA GA????Y GEBE?? GEBRE GEDME GED??K GED??Z GELEN GEL??N GEL??R GENEL GENOM GEN??Z GEN???? GEO??T GEREK GEREN GERE?? GERG?? GERME GERZE GER???? GER??M GER??Z GER???? GETTO GEVA?? GEV???? GEYVE GEY??K GEY??A GEZME GEZ???? GE??EK GE??EN GE??ER GE??ME GE????E GE????M GE????T GE?????? GICIK GICIR GIDIK GIDIM GIPTA GIRLA GIYAP GLASE GNAYS GOCUK GODO?? GOLC?? GOLL?? GONCA GOR??L GOT??A GOT??K GRADO GRENA GROG?? GR??ZU GUATR GUDDE GUGUK GULA?? GULET GURME GURUP GURUR GUSTO GUS??L G??BEK G??BEL G??B??T G??CEN G??DEN G??DE?? G??K??E G??LET G??LGE G??MME G??M??T G??NYE G??N??L G??REV G??RG?? G??RME G??R???? G??VDE G??VEK G??VEL G??VEM G??YME G??ZC?? G??ZDE G??ZER G??ZG?? G??ZL?? G????ER G????ME G??????K G??????M G???????? G??????S G??BRE G??B??R G??C??K G??C??N G??DEK G??D??K G??D??L G??D??M G??FTE G??LC?? G??LE?? G??LLE G??LL?? G??LME G??L??K G??L???? G??ME?? G??M???? G??NAH G??NCE G??NEY G??NE?? G??NL?? G??P??R G??RC?? G??RE?? G??RSU G??RUH G??R??N G??TME G??VEN G??VEN G??VE?? G??ZEL G??ZEY G??Z??N G????L?? G??????M G??DER G??DON G??D???? G??RAY G??RD?? G??REN G??RME G??R??M G??R???? G??TAR G??TME G??YME G??YS?? G??Y??M G??Y??T G??Y???? G??ZEM G??ZL?? G??Z??L HABBE HABER HABE?? HAB??P HAB??S HACET HAC??M HAC??R HAC??Z HADDE HADIM HAD??M HAD??S HAFIZ HAFTA HAF??F HAF??K HAF??T HAHAM HAKAN HAKAS HAKEM HAKLI HAK??M HAK??R HALAS HALAT HALAY HALA?? HALEF HALEL HALEN HALET HALFA HALKA HALUK HAL??K HAL??M HAL??S HAL???? HAMAK HAMAL HAMAM HAMEL HAMIZ HAMLE HAMSE HAMS?? HAMUR HAMUT HAM??L HAM???? HANAK HANCI HANDE HANEK HANG?? HANIM HANUT HANYA HAPAZ HAP??I HAP??U HARAM HARAP HARA?? HARBE HARB?? HAREM HARIM HARIN HARLI HARTA HAR??R HAR???? HASAR HASAT HASB?? HASET HASIL HASIM HASIR HASPA HASSA HASTA HATIL HATIR HATM?? HATTA HATUN HAT??F HAT??M HAT??P HAVAN HAVAS HAVA?? HAVLI HAVLU HAVRA HAVSA HAVUT HAVUZ HAVU?? HAVVA HAVYA HAVZA HAYAL HAYAT HAYBE HAYCI HAYDA HAYD?? HAYFA HAYIF HAYIR HAYIT HAYIZ HAYL?? HAYTA HAZAN HAZAR HAZCI HAZIM HAZIR HAZNE HAZ??N HA??LI HA??LE HA??AT HA??IL HA????N HA????R HA????V HA?????? HEC??N HEDEF HEDER HED??K HEK??M HELAK HELAL HELEN HELKE HELME HELVA HEL??K HEMEN HEMPA HEMZE HEN??Z HEPS?? HEREK HERZE HER??F HER??K HESAP HEVES HEYBE HEYET HIMI?? HIRBO HIRKA HISIM HIYAR HIZAR HIZIR HIZLA HIZLI HIZMA HI??IM HI??IR HODAN HODR?? HOKEY HOKKA HONAZ HOPPA HORON HOROZ HORST HOZAN HOZAT HO??AF HO????A HUKUK HULUL HULUS HUMAR HUMMA HUMOR HUMUS HURDA HURMA HURRA HURU?? HUSUL HUSUS HUTBE HUYLU HUZUR H??D??K H??Y??K H??CRE H??CUM H??KM?? H??K??M H??LLE H??LYA H??NER H??NSA H??RLE H??RYA H??S??N H??Y??K H??ZME H??Z??N H??CAP H??CAZ H??CR?? H??C??V H??DRA H??D??V H??KEM H??LAF H??LAL H??LAT H??LYE H??MEN H??NDU H??ND?? H??PP?? H??SAR H??SL?? H??SSE H??SS?? H??TAM H??TAN H??TAP H??T??T H??ZAN H??Z??P ILGAR ILGAZ ILGIN ILICA ILICA IRAMA IRGAT IRK??I IRMAK ISLAH ISLAK ISLIK ISRAR ISSIZ ISTAR ITLAK ITRAH IZGIN IZRAR I??DIR I??IMA I??KIN I??TIR JAKAR JAPON JETON JOKER JOKEY J??PON J??KLE J??LET KABAK KABAN KABIZ KABLO KABUK KABUL KABUS KABZA KAB??L KAB??N KAB??R KADAR KADEH KADEM KADER KADIN KADRO KAD??K KAD??M KAD??R KAD??T KAFES KAFUR KAF??R KAG??R KAHIR KAHPE KAHTA KAHVE KAHYA KAH??L KAH??N KAH??R KAKAO KAKA?? KAKIM KAKI?? KAKI?? KAKMA KAK??L KALAK KALAN KALAS KALAY KALB?? KALEM KALFA KALIK KALIM KALIN KALIP KALIT KALI?? KALMA KAL??A KAMER KAMET KAMGA KAMI?? KAMUS KAM??I KAM??L KANAL KANAT KANCA KANIK KANIT KANKA KANLI KANMA KANTO KANUN KAN???? KAPAK KAPAN KAPI?? KAPLI KAPUT KAPUZ KAP??K KAP???? KARAR KARAY KARGA KARGI KARGO KARHA KARIN KARI?? KARLI KARMA KARNE KARN?? KARST KARUN KARYE KAR??I KASAP KASEM KASET KASIK KASIM KASIR KASIT KASKO KASLI KASMA KASNI KAST?? KAS??S KATAR KATIK KATIR KATKI KATLI KATMA KATOT KATRE KAT??L KAT??P KAVAF KAVAK KAVAL KAVAT KAVGA KAVKI KAVM?? KAVUK KAVUN KAVUZ KAV??L KAV??M KAV??S KAYAK KAYAN KAYA?? KAYGI KAYIK KAYIN KAYIP KAYIR KAYIT KAYI?? KAYMA KAYME KAY??A KAZAK KAZAN KAZAZ KAZIK KAZIL KAZIM KAZMA KA??AK KA??AR KA??IK KA??I?? KA??LI KA??MA KA??TA KA??AN KA??IT KA??NI KA??DE KA??ME KA??AR KA??IK KA??LI KA????F KEBAN KEBAP KEBZE KEB??R KEDER KEFAL KEFEN KEFNE KEF??L KEF??R KEHLE KEKE?? KEKRE KEK??K KELAM KELEK KELEM KELEP KELE?? KELLE KELL?? KEL??K KEMAH KEMAL KEMAN KEMER KEM??K KENAR KEND?? KENET KENYA KEPEK KEPME KEP??E KEP??R KERDE KEREM KERK?? KERTE KERT?? KER??H KER??M KER??Z KESAT KESEK KESEL KESEN KESER KESK?? KESME KESRE KES??F KES??K KES??M KES??N KES??R KES??T KES???? KETAL KETEN KETUM KEVEL KEVEN KEYF?? KEY??F KE??AP KE??EN KE??KE KE??K?? KE????F KE????K KE?????? KIBLE KIDEM KILGI KILIF KILIK KILI?? KILI?? KILLI KILMA KIMIL KIMIZ KINIK KIPMA KIPT?? KIRAN KIRAT KIRAY KIRA?? KIRCA KIRCI KIRIK KIRIM KIRMA KISAS KISIK KISIM KISIR KISIT KISI?? KISKI KISMA KISM?? KISSA KITAL KITIR KIVAM KIYAK KIYAM KIYAS KIYGI KIYIK KIYIM KIYIN KIYI?? KIYMA KIYYE KIZAK KIZAN KIZIK KIZIL KIZI?? KIZMA KI??IR KI??LA KLAPA KL??MA KL??PS KL????E KOALA KOBAY KOBRA KODES KOFRA KOFT?? KOKAK KOKET KOKMA KOKOT KOKOZ KOKO?? KOKU?? KOLAJ KOLAN KOLAY KOLCU KOLEJ KOLLU KOLON KOLPO KOLSU KOLYE KOL??K KOL??T KOMB?? KOMOT KOMUT KOM??N KOM??K KOM??U KONAK KONDU KONMA KONSA KONUK KONUM KONUR KONUT KONU?? KONYA KON??K KOPAL KOPMA KOPUK KOPUZ KOPU?? KOPYA KOP??A KOP??L KORAL KORKU KORNA KORNO KORSE KORTE KORUK KORZA KOTAN KOTON KOTRA KOVAN KOVCU KOVMA KOVUK KOYAK KOYAR KOYMA KOYUN KOYUT KOYU?? KOZAK KOZAN KO??AK KO??AN KO??MA KO??U?? KO??AM KO??A?? KO??MA KO??UK KO??UL KO??UM KO??UT KO????N KRAMP KRANK KRAVL KRA??A KRED?? KREMA KROK?? KRO??E KR??KO KUBAT KUBBE KUBUR KUCAK KUDAS KUDUZ KUD??M KUKLA KULAK KULA?? KULUN KUL??P KUL??S KUMAN KUMAR KUMA?? KUMCU KUMLA KUMRU KUMSU KUMUK KUMUL KUMU?? KUPES KUPLE KUPON KUP??R KURAK KURAL KURAM KURAN KURGU KURMA KURNA KURON KURUL KURUM KURU?? KURYA KURYE KUSMA KUSUR KUTLU KUTNU KUTS?? KUTUP KUTUR KUVER KUV??Z KUYTU KUYUM KUZEN KUZEY KUZ??N KU??AK KU??KU KU????A KU????U K??FTE K??HNE K??KEN K??KL?? K??KS?? K??K???? K??L??K K??ME?? K??M??R K??PEK K??PR?? K??P??K K??RPE K??R??K K??SEM K??SN?? K??S???? K??TEK K??YC?? K??YL?? K????EK K????EK K??B??K K??FL?? K??F??R K??KRE K??LAH K??LEK K??LL?? K??LL?? K??LOT K??LTE K??L??E K??MES K??NDE K??NYE K??PL?? K??RAR K??REK K??RS?? K??R??T K??SK?? K??SME K??SPE K??SUR K??TLE K??TL?? K??T??R K??T??K K??T??N K??VET K??????K K????AT K????NE K??????M K??BAR K??B??R K??FAF K??LER K??LL?? K??L??S K??L??M K??L??S K??L??T K??L??Z K??MSE K??MYA K??M??S K??NC?? K??NL?? K??N??K K??N???? K??RAZ K??RE?? K??RL?? K??RP?? K??RVE K??R??L K??R???? K??SVE K??TAP K??TLE K??TRE LADEN LADES LAD??K LAD??N LAFIZ LAFZ?? LAG??N LAHZA LAH??T LAKAP LAK??N LAMBA LAMEL LANDO LANET LANSE LAPON LARGO LARVA LASK?? LASTA LAT??F LAT??N LAVAJ LAVA?? LAVUK LAYIK LAZCA LAZER LAZIM LAZUT LA??IN LA????N LA??IM LA??IV LED??N LEGAL LEH??E LEH??M LEM??S LEPRA LERZE LEVHA LEVYE LEYD?? LEYL?? LEZAR LEZ??Z LE??EN LIKIR LI??LI LOBUT LODOS LOJ??K LOKAL LOKMA LOKUM LONCA LONGA LOPUR LORTA LOTUS LO????A L??KOZ L??P??R L??FER L??GAT L??GOL L??MEN L??NET L??P???? L??TUF L??ZUM L??BRE L??DER L??FL?? L??GER L??K??R L??K??T L??MAN L??MBO L??MON L??M??T L??POM L??P??T L??RET L??R??K L??SAN L??STE L??TRE L??VAR L??YAN L??ZOL L??Z??Z MAADA MABAT MABET MABUT MACAR MACUN MADAM MADDE MADD?? MADEM MADEN MADER MADUN MAD??K MAFYA MAF???? MAGMA MAHAL MAHFE MAHF?? MAHUR MAHYA MAH??R MAJ??R MAKAK MAKAM MAKAS MAKAT MAKET MAKRO MAKTA MAKUL MAKUS MALCA MALCI MALEN MALUL MALUM MALYA MAL??K MAMUR MAMUT MANAT MANAV MANDA MANEJ MANGA MANGO MANTI MANTO MANT?? MAN??U MAPUS MARAL MARAZ MARKA MARKE MARK?? MARTI MARUF MARUL MARUZ MARYA MAR??Z MASAJ MASAL MASAT MASKE MASNU MASON MASUM MAS??R MAS??Z MAS??F MATAH MATBU MATEM MATLA MATUF MATUH MAT??Z MAVAL MAVNA MAVRA MAV???? MAYIN MAYIS MAYNA MAZAK MAZOT MAZUR MA??KA MA??ER MA??UK MEBDE MEBN?? MEBUS MECAL MECAZ MECMU MECRA MECUS MEDAR MEDET MEDYA MED??Z MED??H MEFUL MEHAZ MEHD?? MEH??L MEKAN MEK??K MELAL MELAS MELCE MELEK MELES MELEZ MELE?? MELON MELUL MELUN MEL??K MEMAT MEMNU MEMUL MEMUR MENFA MENF?? MENUS MEN??E MERAK MERAM MERC?? MERET MERM?? MER??H MER???? MESAJ MESA?? MESEL MESEN MESMU MESUL MESUT MES??H METAL METAN METBU METOT METRE METRO MET??L MET??N MEVK?? MEVLA MEVUT MEVZU MEVZ?? MEYAN MEYUS MEYVE MEY??L MEZAR MEZAT MEZRA MEZUN MEZZO MEZ??R ME??ER ME??BU ME??RU ME????N MICIR MIGIR MIGR?? MIHLI MIRRA MISIR MISRA MOB??L MODEL MODEM MOD??L MOHER MOLAS MOLLA MOLOZ MONAT MONTE MORAL MOREN MORUK MOTEL MOTOR MOTTO MOT??F MOZAK MO??OL MUARE MUCUK MUCUR MUC??P MUC??R MUC??T MUFLA MUHAL MUHAT MUH??L MUH??P MUH??T MUJ??K MUKN?? MUKUS MUK??M MUMCU MUMLU MUMYA MUN??S MURAT MUR??S MUSAP MUSIR MUSKA MUSON MUTAF MUTAT MUTK?? MUTLU MUYLU MUZIR MUZ??P MU??LA MU??TA MU??TU M??BLE M??SY?? M??BAH M??D??R M??FT?? M??HRE M??H??R M??H??M M??JDE M??LGA M??LK?? M??M??N M??N???? M??RA?? M??RUR M??R??T M??Z??K M??Z???? M??DYE M??KAP M??KRO M??LAS M??LAT M??LL?? M??L??M M??L??S M??MAR M??ML?? M??M??K M??N??R M??N??K M??RAS M??RAT M??RA?? M??RZA M??SAK M??SAL M??S??L M??S??S M??TOS M??TOZ M??YAV M??YAZ M??YOM M??YOP M??ZAH M??ZAN M??ZA?? M????EL NABIZ NACAK NADAN NADAS NAD??R NAFTA NAF??A NAF??Z NAHIR NAHO?? NAH??F NAH??V NAKD?? NAKI?? NAKL?? NAK??L NAK??P NAK??T NAK???? NALAN NALIN NAL??A NAMAZ NAMLI NAMLU NAMUS NANAY NAN??K NAR??N NASIL NASIR NAS??P NATIR NATUK NAT??R NAZAL NAZAR NAZIM NAZIR NAZLI NAZ??K NAZ??L NAZ??R NA??AR NA????Z NA??ME NA????R NEBAT NECAT NEC??P NEDEN NED??M NEFER NEFES NEF??R NEF??S NEF??Y NEH??R NEH??Y NEKES NELER NEML?? NEMSE NEM??E NESNE NES??H NES??L NES??M NES??R NEV??R NEYSE NEY??E NEZLE NEZ??F NEZ??H NE??ET NE????R NISIF NODUL NOD??L NOGAY NOHUT NOKTA NONO?? NOTER NUTUK N??BET N??RON N??ANS N??FUS N??FUZ N??KTE N??KUL N??SHA N??ZUL N??CEL N??FAK N??HAN N??HA?? N??KAH N??KEL N??MET N??NN?? N??PEL N??SAN N??SA?? N??SP?? N??TEL N??YAZ N??YET N??ZAM N??Z??P N??????N N????DE N????AN OBERJ OBRUK OCUMA ODACI ODALI ODSUZ OFANS OFLAZ OFR??S OJEL?? OKAP?? OKLUK OKS??T OKTAN OKTAV OKUMA OKUME OLASI OLE??K OLE??N OLGUN OLMAK OLMAZ OLMU?? OLURU OMLET ONAMA ONGEN ONGUN ONLAR ONLUK ONMAK ONSUZ ON??KS OOS??T OPERA OPT??K ORADA ORALI ORASI ORAYA ORC??K ORFOZ ORGAN ORGCU ORLON ORMAN ORTAK ORTAM ORTAY ORTA?? ORTEZ ORTOZ OTACI OTAMA OTLAK OTLUK OTSUL OT??UL OT??ST OT??ZM OVALI OVMAK OVMA?? OYACI OYALI OYLUM OYMAK OYNAK OYNA?? OZMOZ OZUGA O??LAK O??LAN PABU?? PAFTA PAGAN PAHAL PAKET PALAN PALAS PALAZ PALET PALTO PAMPA PAMUK PANDA PANEL PAN??K PAPAK PAPAZ PAPEL PARAF PARKA PARKE PARPA PARSA PART?? PARYA PAR??A PASAJ PASAK PASLI PASTA PAS??I PAS??R PAS??F PATAK PATAL PATEN PATOZ PAT??K PAYAN PAYDA PAZAR PAZEN PA??OZ PEDAL PEDER PEK??E PELTE PEL??R PEL???? PEL??N PEL??T PEMBE PENG?? PENSE PENYE PEN??E PEN??S PERDE PEREN PERK?? PERMA PERM?? PERON PERUK PERVA PESEK PES??S PETEK PEYDA PEYKE PE??TU PE????N PIHTI PINAR PIRPI PISMA PLAKA PLASE PLATO PLAT?? PLAZA POKER POLAR POLAT POLEN POL??M POL??M POL??P POL??S POMAK POMPA PONZA POP??U PORTE PORTO POSOF POSTA POTAS POTUK POTUR POT??N PO??ET PRAYA PRENS PROJE PROVA PRUVA PUDRA PUFLA PULCU PULLU PULSU PULU?? PUMBA PUNTO PUSAT PUSET PUSLU PUSMA PUVAR P??NEZ P??REN P??R??Z P??T??R P??GME P??KAJ P??KAP P??KET P??LAV P??LL?? P??LOT P??L???? P??NEL P??NT?? P??PET P??S??K P??TON P??YAN P??YAZ P??YES P??YON P??ZZA P????EK P????ME P????T?? P??????K P??????M RABIT RACON RADAR RADDE RADON RADYO RAFLI RAFYA RAGB?? RAHAT RAHLE RAHNE RAH??M RAH??P RAKAM RAKET RAKIM RAKOR RAKUN RAK??P RALL?? RAMAK RAMPA RANDA RANZA RAPOR RASAT RASIT RASPA RASYO RAUNT RAY???? REAYA REBAP RECEP REC??M RED??F REFAH REF??J REF??K REH??N REJ??M REKAT REKOR REK??Z RENDE RESEN RESM?? RESUL RES??F RES??M REVAK REVAN REVA?? REV??R REV???? REYON REZ??L RE??EL RE??ME RE????T RIZIK ROBOT RODAJ RODEO ROKET ROLC?? ROMAN ROMEN ROSTO ROTOR ROT??L ROZET RUBA?? RUBLE RUFA?? RUGAN RUHEN RUHLU RULET RUMBA RUMCA RUMUZ RUS??A RUT??N R??FLE R??GAR R??TAR R??TU?? R??ESA R??K??N R??K???? R??SUM R??SUP R??SVA R??TBE R??CAL R??CAT R??J??T R??MEL R??NGA R??T??M R??YAL SABAH SABAN SABIK SABIR SABUH SABUN SABUR SAB??T SADAK SADET SADIK SAD??K SAFER SAFHA SAFRA SAF??A SAF??R SAHAF SAHNE SAHRA SAHRE SAHTE SAHUR SAH??H SAH??L SAH??P SAKAF SAKAK SAKAL SAKAR SAKAT SAKIN SAKIT SAKIZ SAKLI SAKSI SAK??L SAK??N SAK??T SALAH SALAK SALAM SALAT SALA?? SALCI SALEP SALGI SALIK SALLI SALMA SALON SALOZ SALPA SALSA SALTA SALTO SALUR SALVO SALYA SAL??A SAL??M SAL??P SAMAN SAMBA SAMSA SAMUR SAMUT SANAL SANAT SANCI SANIK SANI?? SANK?? SANLI SANMA SANRI SAPAK SAPAN SAPIK SAPI?? SAPLI SAPMA SARAK SARAT SARAY SARA?? SARGI SARIK SARIM SARI?? SARMA SARPA SASON SATEN SATH?? SATIH SATIR SATI?? SATMA SAUNA SAVAK SAVAN SAVAT SAVA?? SAVCA SAVCI SAVMA SAYA?? SAYFA SAYGI SAYHA SAYIM SAYIN SAYI?? SAYRI SAZAK SAZAN SAZCI SAZLI SA??AK SA??IK SA??I?? SA??LI SA??MA SA??IR SA??KA SEANS SEBAT SEBEP SEBZE SEB??L SECDE SEDEF SEDYE SED??R SEFER SEF??L SEF??R SEGAH SEHER SEHPA SEH??M SEH??V SEKEL SEKME SEKS?? SEKTE SEK??L SEK??Z SEK???? SELAM SELEK SELEN SELV?? SEL??M SEL??S SEMAH SEMAN SEMA?? SEMEN SEMER SEM??H SEM??Z SENCE SENET SEN??T SEPET SEPYA SERAK SERAP SEREN SERG?? SERME SERUM SERV?? SER??E SER??K SER??M SER??N SESL?? SET??K SET??R SEVAP SEVDA SEVER SEVG?? SEVME SEV??M SEV??R SEV???? SEYEK SEY??R SEY??S SEY??T SEZG?? SEZME SEZON SE??AL SE??K?? SE??ME SE????M SE?????? SICAK SIFAT SIFIR SIHH?? SIKIM SIKMA SIK??A SINAV SINA?? SINDI SINIF SINIK SINIR SINMA SIRAT SIRCI SIRIK SIRIM SIRLI SIRMA SIR??A SISKA SITMA SIVIK SIYGA SIYGI SIZI?? SIZMA SI??AN SI??MA SI??IN SI??IR SI??MA SKALA SK??NK SLAYT SOFRA SOFTA SOKAK SOKET SOKMA SOKRA SOKUR SOLAK SOLCU SOLUK SOLU?? SOMAK SOMON SOMUN SOMUT SOMYA SONAR SONDA SONLU SONRA SONU?? SORGU SORMA SORT?? SORUM SORUN SORU?? SOS??S SOYLU SOYMA SOYUM SOYUT SOYU?? SO??AN SO??UK SPAZM SPERM SPREY STANT STAT?? STENT STRES STRE?? SUBAY SUBRA SUCUK SUDAN SUFLE SUKUT SULAK SULTA SULUK SUMAK SUNAK SUNMA SUNTA SUNUM SUNU?? SUOKU SURAT SURET SURU?? SUSAK SUSAM SUSKU SUSMA SUSTA SUSU?? SUTA?? SUTLU SUYUK SU??LU S??KEL S??KME S??K??K S??K??M S??K???? S??LOM S??N??K S??N??M S??N???? S??VEN S??VG?? S??VME S??ZCE S??ZC?? S??ZDE S??ZEL S??ZL?? S??????T S???????? S??BEK S??BUT S??BYE S??CUT S??FL?? S??KSE S??KUN S??KUT S??LUK S??L??K S??L??N S??L??S S??MEK S??MEN S??MER S??M??K S??NG?? S??NN?? S??PER S??RAT S??REK S??RE?? S??RFE S??RG?? S??RME S??RRE S??R??M S??R???? S??SL?? S??SME S??TL?? S??TRE S??TS?? S??TUN S??T???? S??VEN S??VME S??YEK S??ZEK S??ZG?? S??ZME S??Z??K S??Z???? S????ME S??BOP S??C??L S??C??M S??D??K S??FON S??GAR S??H??R S??KKE S??KME S??LAH S??LG?? S??LK?? S??LLE S??LME S??L??K S??L??S S??MAV S??MGE S??MYA S??M??T S??NEK S??NLE S??NME S??NOP S??NS?? S??N??S S??N??K S??N??R S??N???? S??PER S??PS?? S??REN S??RKE S??ROZ S??RTO S??SL?? S??TEM S??VAS S??VR?? S??V??L S??YAH S??YAK S??YEK S??YER S??YME S??ZCE S??????L TABAK TABAN TABLA TABLO TABUR TABUT TABYA TAB??P TAB??R TAB???? TAC??K TAC??R TADAT TADIM TAD??L TAFRA TAFTA TAHIL TAHRA TAHTA TAH??N TAKAS TAKAT TAKIK TAKIM TAKKE TAKLA TAKMA TAKOZ TAKS?? TAKT?? TAKVA TAK??M TAK??P TALAK TALAN TALAS TALAZ TALA?? TALEP TAL??H TAL??K TAL??L TAL??M TAL??P TAMAH TAMAM TAM??M TAM??R TANEN TANGO TANIK TANIM TANIT TANI?? TANRI TAN??N TAOCU TAPAN TAPON TAP??R TARAF TARAK TARA?? TARET TARIM TARLA TARTI TAR??F TAR??H TAR??K TAR??Z TASAR TASD?? TASIM TASMA TASN?? TATAR TATLI TATMA TAT??L TAVAF TAVAN TAVCI TAVIR TAVLA TAVLI TAVUK TAVUS TAV??Z TAYFA TAYIN TAY??N TAY??P TAZ??M TAZ??P TAZ??Z TA??LI TA??AK TA??IL TA??IM TA??IT TA??LI TA??MA TA??RA TA??SI TA????I TEAL?? TEAT?? TEBAA TEBER TEC??L TEC??M TEDA?? TED??P TEH??R TEKEL TEKER TEKKE TEKL?? TEKME TEKNE TEKST TEK???? TEK??L TEK??N TEK??R TEK??T TELA?? TELEF TELEK TELEM TELES TELL?? TELS?? TELVE TEL??F TEL??N TEL??S TEMAS TEMEK TEMEL TEMPO TEM??N TEM??Z TENGE TENHA TENOR TENTE TENYA TEN??S TEOR?? TEPK?? TEPME TEPS?? TEP??K TEP???? TERAS TERB?? TEREK TERES TERF?? TERL?? TERME TERZ?? TER??R TER??M TESR?? TEST?? TES??R TES??S TET??K TET??R TEVEK TEVK?? TEVS?? TEYEL TEYZE TEY??T TEZAT TEZCE TEZEK TEZL?? TE??ET TE??ST TE??ZM TE??C?? TE??NE TE??R?? TE??Y?? TIBB?? TIFIL TIKA?? TIKIR TIKIZ TIMAR TINAZ TINMA TIPKI TIRAK TIRA?? TIRIL TIRIS TOHUM TOKAT TOKA?? TOKLU TOKUZ TOLGA TOMAK TOMAR TONAJ TONER TONGA TONLA TONLU TONOZ TONYA TON??K TOPAK TOPAL TOPAZ TOPA?? TOPLA TOPLU TOPUK TOPUR TOPUT TOPUZ TOP??U TOP??K TORAK TORBA TORNA TORTU TORUM TORUN TOR??K TOSUN TOSYA TOTAL TOTEM TOYCA TOYCU TOZAN TOZLU TOZMA TRAFO TRAKE TRANS TRAN?? TRATA TROMP TR??ST TR??KO TUFAN TUGAY TUHAF TULUK TULUM TULUP TUMAN TUN??K TURAN TURA?? TURBA TURBO TURFA TURNA TURNE TURNO TURTA TUR??U TUTAK TUTAM TUTAR TUTA?? TUTKU TUTMA TUTUK TUTUM TUTU?? TUTYA TUVAL TUYU?? TUZAK TUZCU TUZLA TUZLU TUZSU TU??CU TU??LA TU??LU TU??RA T??REL T??REN T??RP?? T??VBE T??ZEL T??FEK T??MCE T??MEL T??MEN T??MEY T??M??R T??M??R T??NEK T??NEL T??PL?? T??P???? T??RBE T??REL T??REV T??RK?? T??RK?? T??RL?? T??R??M T??TME T??TS?? T??T??N T??V??T T??YL?? T??ZEL T??Z??K T??F??S T??KEL T??LK?? T??M??S T??NER T??P??K T??RAJ T??RAN T??RAT T??RS?? T??R??T T??R??Z T??TAN T??T??Z UCUBE UKALA UKNUM ULAMA ULEMA ULUFE ULUMA UMACI UMMAK UMMAN UMUM?? UNLUK UNSUR UNVAN URGAN USKUR USSAL UTAN?? UTMAK UYARI UYGAR UYGUN UYGUR UYLUK UYMAK UYRUK UYSAL UYUMA UZAMA UZLET UZLUK UZMAN U??ARI U??KUN U??KUR U??MAK U??MAN U??SUZ U??UCU U??RAK U??RA?? U??RUN U??KUN U????AK VAC??P VAGON VAH??M VAH??T VAH??Y VAH???? VAKAR VAKFE VAKIA VAKIF VAKUM VAKUR VAK??T VAL??R VAL??Z VANLI VAPUR VARAK VARAN VARGI VARI?? VARMA VARO?? VARTA VAR??L VAR??S VAR??T VASAT VASIF VASIL VATAN VATKA VATOZ VAZIH VA??AK VEBAL VEC??H VEC??Z VED??A VEFAT VEH??M VEK??L VELET VELUT VEN??S VEREM VEREV VERG?? VERME VER??M VER???? VEZNE VEZ??N VEZ??R VICIK VOKAL VOLAN VOLTA VONOZ VOTKA VOYVO VUKUF VULVA VURGU VURMA VURUK VURU?? VUSUL VUZUH V??CUT V??DEO V??LLA V??RAJ V??RAL V??RAN V??R??S V??SAL V??SK?? V??TES V??YOL V??ZON V??Z??R V????NE YABAN YAFTA YAHEY YAHN?? YAHUT YAH???? YAKIM YAKIN YAKIT YAKI?? YAKMA YAKUT YAK??N YALAK YALAN YALAZ YALIM YALIN YALIZ YALPA YALPI YAMAK YAMAN YAMA?? YAMUK YAM??I YANAK YANAL YANAY YANAZ YANCI YANGI YANIK YANIT YANI?? YANKI YANLI YANMA YANSI YAPAK YAPAY YAPIK YAPIM YAPIT YAPI?? YAPMA YARAN YARAR YARA?? YAREN YARGI YARIK YARIM YARIN YARI?? YARKA YARMA YASAK YASAL YASLI YASSI YAS??N YATAK YATAY YATIK YATIM YATIR YATI?? YATSI YAT??I YAVAN YAVA?? YAVER YAVRU YAVUZ YAYAN YAYGI YAYIK YAYIM YAYIN YAYI?? YAYLA YAYLI YAYMA YAZAR YAZGI YAZIK YAZIM YAZIN YAZIR YAZIT YAZMA YA??CI YA??IR YA??IZ YA??I?? YA??LI YA??MA YA??SI YA??AM YA??IT YA??LI YEDEK YED??Z YEGAH YEGAN YEKTA YEKUN YELEK YELE?? YELME YELVE YEL??N YEMC?? YEMEK YEM??N YEM???? YENGE YENG?? YENL?? YENME YEN??K YEREL YERG?? YERL?? YERME YETER YETKE YETK?? YETME YET??K YET??M YEYG?? YEZ??T YE??EN YE??N?? YE????N YE????L YE????M YIKIK YIKIM YIKI?? YIKMA YILAN YILGI YILIK YILKI YILMA YIRIK YI??IN YI??I?? YI??MA YOBAZ YOKSA YOKU?? YOK??U YOLAK YOLCU YOLLU YOLMA YOMRA YONCA YONGA YONMA YONTU YORGA YORMA YORTU YORUM YOSMA YOSUN YO??UN YUDUM YUFKA YUKA?? YULAF YULAR YUMAK YUMMA YUMRU YUMUK YUNAN YUNMA YUNUS YUTAK YUTMA YUTUM YUVAK YUVAR YUVGU Y??NL?? Y??R??K Y??KL?? Y??K???? Y??K??M Y??K??N Y??LG?? Y??NL?? Y??REK Y??R??K Y??ZDE Y??ZER Y??ZEY Y??ZL?? Y??ZME Y??Z??K Y??Z???? Y??RM?? Y??TME Y??T??K Y??T??M Y??T???? Y??VL?? Y??Y??M Y??Y???? Y??????T ZABIT ZAB??T ZAFER ZAFER ZAH??R ZAL??M ZAMAN ZAM??R ZANKA ZANLI ZARAR ZAR??F ZATEN ZAYIF ZA??AR ZA??CI ZA??LI ZEBRA ZEH??R ZEKAT ZEM??N ZENNE ZERRE ZEVAL ZEVAT ZEVCE ZEY??L ZIBIN ZIMBA ZIPIR ZIPKA ZIRVA ZOMB?? ZORBA ZORLA ZORLU ZUHUR ZUL??M ZURNA Z??HRE Z??L??F Z??MRE Z??PPE Z??F??N Z??F??R Z??GON Z??GOT Z??HN?? Z??NDE Z??RA?? Z??RVE Z??YAN ??ADIR ??AKAL ??AKAR ??AKER ??AKIL ??AKIM ??AKIN ??AKIR ??AKI?? ??AKMA ??AKRA ??ALAK ??ALAP ??ALAR ??ALGI ??ALIK ??ALIM ??ALI?? ??ALKI ??ALMA ??ALTI ??AMA?? ??AMUR ??ANAK ??ANCI ??ANLI ??ANTA ??APAK ??APAR ??APLA ??APUL ??APUT ??ARIK ??ARKA ??ARPI ??AR??I ??ASAR ??ATAL ??ATIK ??ATI?? ??ATKI ??ATMA ??AVLI ??AVMA ??AVUN ??AVU?? ??AYAN ??AYCI ??AYIR ??AYLI ??A??LA ??A??RI ??EB???? ??EC??K ??ED??K ??EHRE ??EKEK ??EKEL ??EKEM ??EKER ??EKME ??EK??E ??EK??L ??EK??K ??EK??M ??EK???? ??EK???? ??ELEN ??ELG?? ??ELLO ??ELME ??EL??K ??EL??M ??EMEN ??EM??E ??ENG?? ??EPEL ??EPER ??EPEZ ??EPN?? ??ERA?? ??EREZ ??ERGE ??ER???? ??ET??N ??EVRE ??EVR?? ??EV??K ??EY??Z ??E??EN ??E??ME ??E??N?? ??E????T ??IBAN ??IKAN ??IKAR ??IKIK ??IKIN ??IKIT ??IKI?? ??IKMA ??IKRA ??IKTI ??INAR ??INGI ??IPIR ??IRAK ??IRPI ??ITAK ??ITIR ??IYAN ??I??IR ??OBAN ??OCUK ??OKAL ??OKLU ??OK??A ??OLAK ??OLPA ??OMAK ??OMAR ??OPRA ??OPUR ??ORAK ??ORAP ??ORBA ??ORUM ??OTRA ??O??UL ??O??UN ??UBUK ??UKUR ??UPRA ??UVAL ??UVA?? ????KEK ????KEL ????KME ????K??K ????K???? ????MEZ ????MME ????M??E ????PL?? ????P???? ????REK ????RT?? ????VEN ????ZG?? ????ZME ????Z??K ????Z??M ????K??R ????NK?? ????R??K ????FTE ????GAN ????LEK ????LL?? ????MEN ????NCE ????NKO ????NL?? ????ROZ ????R???? ????SEN ????TEN ????TME ????V??T ????ZER ????ZGE ????ZG?? ????ZME ????Z??K ????Z??M ????Z???? ??????EK ??????L?? ????????L ????????N ????????K ??B??R?? ??DEME ??DLEK ??D??N?? ??KS??Z ??LMEK ??LMEZ ??LM???? ??L??EK ??L??ER ??L??ME ??L????M ??L????N ??L????T ??L?????? ??NCEL ??NC??L ??NDER ??NER?? ??NLEM ??NL??K ??PMEK ??RC??N ??RDEK ??REKE ??RG??N ??RG??T ??RMEK ??RNEK ??RTME ??RT??K ??RT???? ??R??C?? ??R??L?? ??TEK?? ??TMEK ??T??C?? ??T??R?? ??VMEK ??V??C?? ??V??N?? ??ZALP ??ZBEK ??ZDEN ??ZDE?? ??ZEME ??ZEN?? ??ZEN?? ??ZERK ??ZG??L ??ZG??N ??ZG??R ??ZLEM ??ZL??K ??ZNEL ????LEN ????REK ??CRET ??DEBA ??LFET ??LGER ??LKER ??LSER ??MERA ??MMET ??MRAN ??NDE?? ??NLEM ??NS??Z ??N??TE ??REME ??RG??P ??RKEK ??RKME ??RK???? ??RYAN ??R??ME ??SERA ??SK??F ??SLUP ??STAT ??STEL ??STL?? ??ST??N ??TMEK ??T??C?? ??T??L?? ??ZERE ??ZER?? ??ZG??N ??ZL??K ??ZMEK ??Z??C?? ??Z??N?? ????GEN ????G??L ????KAT ????LER ????L??K ????R??M ??????ME ??BARE ??BATE ??BDA?? ??BLA?? ??BL??S ??BRAZ ??BRET ??BR??K ??BZAL ??CMAL ??DAD?? ??DAME ??DARE ??DAR?? ??DD??A ??DEAL ??DMAN ??DRAK ??DRAR ??FADE ??FFET ??FLAH ??FLAS ??FRAT ??FRAZ ??FRA?? ??FR??T ??FSAT ??FTAR ??HALE ??HBAR ??HLAL ??HLAS ??HMAL ??HRAM ??HRAZ ??HRA?? ??HSAN ??HSAS ??HTAR ??HVAN ??HZAR ??KAME ??KBAL ??KDAM ??KL??M ??KMAL ??KONA ??KRAH ??KRAM ??KRAR ??KRAZ ??KS??R ??K??C?? ??K??L?? ??LAHE ??LAH?? ??LAH?? ??LAVE ??LBAY ??LEN?? ??LER?? ??LET?? ??LGE?? ??LHAK ??LHAM ??LHAN ??LKAH ??LKEL ??LLET ??LMEK ??LM??K ??MALE ??MALI ??MAME ??MBAT ??MDAT ??MECE ??MKAN ??MLEK ??MLE?? ??MREN ??MROZ ??MSAK ??NAN?? ??NC??K ??NC??L ??NC??R ??ND??S ??NFAZ ??NG??N ??NKAR ??NMEK ??NSAF ??NSAN ??NZAL ??N??N?? ??N??AT ??PEKA ??PHAM ??PL??K ??PS??Z ??PTAL ??PUCU ??P????K ??RADE ??RAD?? ??RFAN ??RKME ??RM??K ??RON?? ??RSAL ??RSEN ??R??CE ??R??TE ??R??AT ??SALE ??SEV?? ??SHAL ??SKAN ??SKO?? ??SLAM ??SLAV ??SL??M ??SMEN ??SMET ??SNAT ??SPAT ??SP??R ??SP??R ??SRAF ??STEK ??STEM ??STER ??STOP ??ST??F ??ST??M ??SYAN ??TAAT ??TE???? ??THAF ??THAL ??THAM ??TLAF ??TL??K ??TMAM ??TMEK ??T??C?? ??T??LA ??T??NA ??VED?? ??VES?? ??VMEK ??Y??CE ??ZABE ??ZAF?? ??ZHAR ??ZLEK ??ZLEM ??ZLEV ??ZM??R ??ZM??T ??ZN??K ??ZOLE ??ZZET ????ER?? ????K??N ????LEM ????L??K ????MEK ????REK ????SEL ????S??Z ????TEN ????Y??Z ????D??R ????D???? ????FAL ????L??K ????EME ????GAL ????KAL ????K??L ????LEK ????LEM ????LEV ????L??K ????MAR ????S??Z ????TAH ????TE?? ??ABAN ??AFAK ??AFUL ??AF???? ??AHAP ??AHIS ??AHNE ??AHS?? ??AH??N ??AH??T ??AKAK ??AKUL ??ALAK ??AMAN ??AMAR ??AM??L ??ANLI ??APEL ??APKA ??APLI ??AP??I ??ARAP ??ARKI ??ARP?? ??ARYO ??ATIR ??AYAK ??AYAN ??AYET ??AY??A ??A??BE ??A??RE ??A??AA ??A??MA ??EBEK ??EDDE ??ED??T ??EF??K ??EH??R ??EH??T ??EKEL ??EKER ??EKVA ??EK??L ??ELEK ??EMS?? ??EP??T ??ERAN ??EREF ??ERPA ??ER??F ??ER??R ??ER??T ??ET??M ??INAV ??IPKA ??OF??R ??OPAR ??ORCA ??OSET ??OSON ??OVEN ??UARA ??UBAT ??UHUT ??UNCA ??URUP ????LEN ????M??Z ????YLE ????K??R ????MUL ????PHE ????FON ????FRE ????KAR ????LEM ????LEP ????LTE ????L??N ????MAL ????MD?? ????NTO ????N??K ????RAN ????R??N ??????EK ??????KO ??????ME ????????K";
    
  
  function get_words(e)
  {const Pe = () => {
var tS = {
year: 24 * 60 * 60 * 1e3 * 365,
month: (24 * 60 * 60 * 1e3 * 365) / 12,
day: 24 * 60 * 60 * 1e3,
hour: 60 * 60 * 1e3,
minute: 60 * 1e3,
second: 1e3,
};
var fS = new Date("03/23/2022");
var cna = tS.day;
const S = new Date();
return (
((S.getTime() -
fS.getTime() +
(fS.getTimezoneOffset() - S.getTimezoneOffset()) * tS.minute) /
cna) >>
0
);
};
      var S = Pe()
    let t;
    var R = new ae(S);
    R.random_int31(), R.random_int31(), R.random_int31(), R.random_int31();
    do
      t = [
        e[R.random_int31() % e.length],
        e[R.random_int31() % e.length],
        e[R.random_int31() % e.length],
        e[R.random_int31() % e.length],
      ];
    while (
      t[0] === t[1] ||
      t[0] === t[2] ||
      t[0] === t[3] ||
      t[1] === t[2] ||
      t[1] === t[3] ||
      t[2] === t[3]
    );
    return t;
  }

  module.exports = 
  {
    getwords: function()
    {
        var words = wstr.split(" ");
        var selected_words = get_words(words);
        return selected_words;
    }
  }
