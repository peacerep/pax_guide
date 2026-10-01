const Jr = ':host{display:block;min-height:100dvh;font-family:Karla,Arial,sans-serif;color:#111}:host([process-id]) .picker,:host([process-id]) [data-reset],:host([process-id]) [data-guide],:host([process-id]) .guide,:host([process-id]) [data-about],:host([process-id]) .about-panel{display:none}:host(:not([compare-url])) [data-compare],:host([process-id]) [data-compare]{display:none}:host(:not([export-enabled])) [data-export]{display:none}*{box-sizing:border-box}button,input{font:inherit}button{cursor:pointer}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}.topbar{position:relative;min-height:64px;display:grid;grid-template-columns:minmax(180px,1fr) auto minmax(520px,1fr);align-items:start;gap:8px;padding:7px 8px}.brand-tools,.info-controls{display:flex;align-items:flex-start;gap:6px}.logo{width:auto;height:38px;object-fit:contain}.picker{width:250px}.process-combobox{position:relative}#process-search{width:100%;height:32px;padding:4px 9px;border:1px solid #777;border-radius:3px;background:#fff}[data-process-value]{display:none}#process-options{position:absolute;z-index:12;top:calc(100% + 3px);left:0;width:100%;max-height:min(360px,calc(100dvh - 80px));margin:0;padding:4px 0;overflow:auto;border:1px solid #8ca8b5;border-radius:3px;background:#fff;box-shadow:0 3px 10px #0004;list-style:none}#process-options[hidden]{display:none}#process-options li{padding:7px 9px;font-size:14px;line-height:1.2}#process-options [role=option]{cursor:pointer}#process-options [role=option]:hover,#process-options [role=option][aria-selected=true]{background:#006297;color:#fff}#process-options .no-results{color:#555;font-style:italic}h1{margin:0;padding:3px 8px;text-align:center;font:600 24px/1.2 Montserrat,Karla,Arial,sans-serif}.controls{display:flex;justify-content:flex-end;align-items:flex-start;gap:6px}button,[data-compare],.export-menu summary,.auto-fit{border:0;border-radius:3px;box-shadow:0 1px 3px #0008;background:#fdd900;min-height:30px;padding:5px 12px;font-weight:700}button:hover,[data-compare]:hover,.export-menu summary:hover,.auto-fit:hover{background:#aa4197;color:#fff}[data-compare]{display:inline-flex;align-items:center;color:#111;text-decoration:none}[data-guide],[data-about]{border:1px solid #006297;box-shadow:none;background:#fff;color:#006297}[data-guide]:hover,[data-about]:hover,[data-guide][aria-expanded=true],[data-about][aria-expanded=true]{border-color:#006297;background:#006297;color:#fff}button:focus-visible,[data-compare]:focus-visible,.export-menu summary:focus-visible,input:focus-visible,circle:focus-visible{outline:3px solid #006297;outline-offset:2px}.export-menu{position:relative}.export-menu summary{display:flex;align-items:center;cursor:pointer;list-style:none}.export-menu summary::-webkit-details-marker{display:none}.export-menu[open]>div{position:absolute;z-index:15;top:calc(100% + 5px);right:0;display:grid;gap:4px;width:190px;padding:5px;border:1px solid #9ebbc8;border-radius:3px;background:#fff;box-shadow:0 3px 10px #0004}.export-menu[open] button{width:100%;box-shadow:none;text-align:left}.export-menu button:disabled{cursor:not-allowed;opacity:.5}.guide{position:fixed;z-index:20;top:58px;left:12px;width:min(390px,calc(100vw - 24px));max-height:calc(100dvh - 70px);overflow:auto;padding:16px 18px;border-top:6px solid #016099;border-radius:4px;background:#fff;box-shadow:0 4px 18px #0006}.guide[hidden]{display:none}.guide:focus{outline:none}.guide-progress{color:#555;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.04em}.guide h2{margin:7px 0 8px;font:600 20px/1.2 Montserrat,Karla,Arial,sans-serif}.guide-copy p{margin:8px 0;font-size:14px;line-height:1.4}.guide-copy a{color:#006297;font-weight:700}.guide-caution{padding:9px 10px;border-left:4px solid #F28B20;background:#fff6df}.guide-source{color:#555;font-size:12px!important}.guide-visual{height:82px;margin:8px 0 5px;padding:5px;border-radius:3px;background:#f4f8fa}.guide-visual svg{overflow:visible}.guide-visual path{fill:none;stroke-width:4;stroke-linecap:round}.guide-ideal-line,.guide-blue-line{stroke:#0075ff}.guide-red-line{stroke:#ff3b00}.guide-faint-line{stroke:#999;opacity:.45}.guide-visual circle{fill:#fff;stroke:#111;stroke-width:2}.guide-legend{display:flex;align-items:center;justify-content:space-around;height:100%;font-weight:700}.guide-legend span{display:grid;gap:6px;text-align:center}.guide-legend i{display:block;width:70px;height:5px;border-radius:4px}.guide-legend .blue{background:#0075ff}.guide-legend .red{background:#ff3b00}.guide-legend .grey{background:#555}.guide-actions{display:flex;justify-content:flex-end;gap:7px;margin-top:14px;padding-top:10px;border-top:1px solid #ddd}.guide-actions [data-guide-close]{margin-right:auto;background:#fff;color:#006297;box-shadow:none}.guide-actions button:disabled{cursor:not-allowed;opacity:.45}.about-panel{position:fixed;z-index:20;top:58px;left:12px;width:min(430px,calc(100vw - 24px));max-height:calc(100dvh - 70px);overflow:auto;padding:16px 18px;border-top:6px solid #AA4197;border-radius:4px;background:#fff;box-shadow:0 4px 18px #0006}.about-panel[hidden]{display:none}.about-panel:focus{outline:none}.about-header{display:flex;align-items:flex-start;gap:12px}.about-header h2{flex:1;margin:0;font:600 20px/1.2 Montserrat,Karla,Arial,sans-serif}.about-header [data-about-close]{min-height:0;padding:0 4px;background:transparent;box-shadow:none;font-size:24px;line-height:1}.about-panel section{padding-top:12px}.about-panel section+section{margin-top:12px;border-top:1px solid #ddd}.about-panel h3{margin:0 0 5px;font:600 15px/1.2 Montserrat,Karla,Arial,sans-serif}.about-panel p,.about-panel blockquote{margin:6px 0;font-size:14px;line-height:1.4}.about-panel blockquote{padding:9px 10px;border-left:4px solid #016099;background:#f4f8fa}.about-panel a{color:#006297;font-weight:700}.about-panel [data-copy-citation]{margin-top:3px;border:1px solid #006297;background:#fff;color:#006297;box-shadow:none}.selection{position:absolute;z-index:3;top:58px;left:50%;transform:translate(-50%);width:min(420px,calc(100vw - 32px));padding:10px 40px 10px 14px;border:2px solid #AA4197;border-radius:4px;background:#fff;box-shadow:0 2px 8px #0004}.selection.anchored{position:fixed;transform:none;width:min(340px,calc(100vw - 24px))}.selection [data-date],.selection [data-meta]{color:#555;font-size:12px}.selection [data-name]{margin:2px 0 5px;font-weight:700}.selection [data-link]{display:inline-block;margin-top:5px}.close{position:absolute;top:3px;right:6px;background:transparent;box-shadow:none;font-size:24px;min-height:0;padding:0 4px}.chart{scrollbar-gutter:stable;overflow-y:auto;overflow-x:hidden;position:relative;height:calc(100dvh - 70px);min-height:420px;margin-top:6px}svg{width:100%;height:100%;display:block}.axis .domain,.axis .tick line{stroke:transparent}.tick text{font-size:14px;font-weight:500}.timeline-crosshair{stroke:#091f40;stroke-width:1;stroke-dasharray:3 4;opacity:.45;pointer-events:none}.timeline-crosshair-label{fill:#091f40;stroke:#fff;stroke-width:4px;paint-order:stroke;font-size:12px;font-weight:700;pointer-events:none}.tooltip{position:fixed;z-index:10;max-width:300px;padding:.8em;border-radius:2px;background:#000;color:#fff;font:12px Arial,sans-serif;opacity:.8;pointer-events:none}circle{cursor:pointer}circle.agreement-selected{fill:#fdd900;fill-opacity:1;stroke:#aa4197;stroke-width:3}.status{display:grid;place-items:center;height:100%;padding:2rem;text-align:center}.error{color:#8a1538}@media(max-width:1250px){.topbar{grid-template-columns:auto 1fr;grid-template-areas:"brand title" "controls controls"}.brand-tools{grid-area:brand}h1{grid-area:title}.controls{grid-area:controls;flex-wrap:wrap}.chart{height:calc(100dvh - 110px)}.guide,.about-panel{top:100px;max-height:calc(100dvh - 112px)}}@media(max-width:700px){.topbar{grid-template-columns:1fr;grid-template-areas:"brand" "title" "controls"}.brand-tools{justify-content:space-between}.logo{height:30px}h1{min-width:0;padding:0;font-size:19px}.controls{justify-content:flex-start}.picker{flex:1 1 100%;width:100%}.controls button,.controls [data-compare],.controls .export-menu summary{padding:5px 8px}.selection{top:142px}.guide,.about-panel{top:132px;max-height:calc(100dvh - 144px)}:host([process-id]) .guide{top:52px;max-height:calc(100dvh - 64px)}.chart{height:calc(100dvh - 170px)}}.auto-fit{display:inline-flex;align-items:center;gap:6px;white-space:nowrap;cursor:pointer;flex-shrink:0}.auto-fit input{margin:0;width:14px;height:14px;accent-color:#091F40;cursor:pointer}.auto-fit:focus-within{outline:3px solid #006297;outline-offset:2px}';
function oe(t, e) {
  return t == null || e == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function ti(t, e) {
  return t == null || e == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function on(t) {
  let e, n, r;
  t.length !== 2 ? (e = oe, n = (s, c) => oe(t(s), c), r = (s, c) => t(s) - c) : (e = t === oe || t === ti ? t : ei, n = t, r = t);
  function i(s, c, u = 0, l = s.length) {
    if (u < l) {
      if (e(c, c) !== 0) return l;
      do {
        const h = u + l >>> 1;
        n(s[h], c) < 0 ? u = h + 1 : l = h;
      } while (u < l);
    }
    return u;
  }
  function o(s, c, u = 0, l = s.length) {
    if (u < l) {
      if (e(c, c) !== 0) return l;
      do {
        const h = u + l >>> 1;
        n(s[h], c) <= 0 ? u = h + 1 : l = h;
      } while (u < l);
    }
    return u;
  }
  function a(s, c, u = 0, l = s.length) {
    const h = i(s, c, u, l - 1);
    return h > u && r(s[h - 1], c) > -r(s[h], c) ? h - 1 : h;
  }
  return { left: i, center: a, right: o };
}
function ei() {
  return 0;
}
function ni(t) {
  return t === null ? NaN : +t;
}
const ri = on(oe), ii = ri.right;
on(ni).center;
class oi extends Map {
  constructor(e, n = ui) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), e != null) for (const [r, i] of e) this.set(r, i);
  }
  get(e) {
    return super.get(kn(this, e));
  }
  has(e) {
    return super.has(kn(this, e));
  }
  set(e, n) {
    return super.set(ai(this, e), n);
  }
  delete(e) {
    return super.delete(si(this, e));
  }
}
function kn({ _intern: t, _key: e }, n) {
  const r = e(n);
  return t.has(r) ? t.get(r) : n;
}
function ai({ _intern: t, _key: e }, n) {
  const r = e(n);
  return t.has(r) ? t.get(r) : (t.set(r, n), n);
}
function si({ _intern: t, _key: e }, n) {
  const r = e(n);
  return t.has(r) && (n = t.get(r), t.delete(r)), n;
}
function ui(t) {
  return t !== null && typeof t == "object" ? t.valueOf() : t;
}
function Mn(t) {
  return t;
}
function ci(t, ...e) {
  return li(t, Mn, Mn, e);
}
function li(t, e, n, r) {
  return (function i(o, a) {
    if (a >= r.length) return n(o);
    const s = new oi(), c = r[a++];
    let u = -1;
    for (const l of o) {
      const h = c(l, ++u, o), f = s.get(h);
      f ? f.push(l) : s.set(h, [l]);
    }
    for (const [l, h] of s)
      s.set(l, i(h, a));
    return e(s);
  })(t, 0);
}
const hi = Math.sqrt(50), fi = Math.sqrt(10), di = Math.sqrt(2);
function he(t, e, n) {
  const r = (e - t) / Math.max(0, n), i = Math.floor(Math.log10(r)), o = r / Math.pow(10, i), a = o >= hi ? 10 : o >= fi ? 5 : o >= di ? 2 : 1;
  let s, c, u;
  return i < 0 ? (u = Math.pow(10, -i) / a, s = Math.round(t * u), c = Math.round(e * u), s / u < t && ++s, c / u > e && --c, u = -u) : (u = Math.pow(10, i) * a, s = Math.round(t / u), c = Math.round(e / u), s * u < t && ++s, c * u > e && --c), c < s && 0.5 <= n && n < 2 ? he(t, e, n * 2) : [s, c, u];
}
function pi(t, e, n) {
  if (e = +e, t = +t, n = +n, !(n > 0)) return [];
  if (t === e) return [t];
  const r = e < t, [i, o, a] = r ? he(e, t, n) : he(t, e, n);
  if (!(o >= i)) return [];
  const s = o - i + 1, c = new Array(s);
  if (r)
    if (a < 0) for (let u = 0; u < s; ++u) c[u] = (o - u) / -a;
    else for (let u = 0; u < s; ++u) c[u] = (o - u) * a;
  else if (a < 0) for (let u = 0; u < s; ++u) c[u] = (i + u) / -a;
  else for (let u = 0; u < s; ++u) c[u] = (i + u) * a;
  return c;
}
function Be(t, e, n) {
  return e = +e, t = +t, n = +n, he(t, e, n)[2];
}
function Xe(t, e, n) {
  e = +e, t = +t, n = +n;
  const r = e < t, i = r ? Be(e, t, n) : Be(t, e, n);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function gi(t) {
  return t;
}
var mi = 1, Cn = 1e-6;
function yi(t) {
  return "translate(" + t + ",0)";
}
function xi(t) {
  return (e) => +t(e);
}
function wi(t, e) {
  return e = Math.max(0, t.bandwidth() - e * 2) / 2, t.round() && (e = Math.round(e)), (n) => +t(n) + e;
}
function vi() {
  return !this.__axis;
}
function bi(t, e) {
  var n = [], r = null, i = null, o = 6, a = 6, s = 3, c = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5, u = -1, l = "y", h = yi;
  function f(g) {
    var p = r ?? (e.ticks ? e.ticks.apply(e, n) : e.domain()), m = i ?? (e.tickFormat ? e.tickFormat.apply(e, n) : gi), x = Math.max(o, 0) + s, v = e.range(), A = +v[0] + c, T = +v[v.length - 1] + c, D = (e.bandwidth ? wi : xi)(e.copy(), c), U = g.selection ? g.selection() : g, w = U.selectAll(".domain").data([null]), I = U.selectAll(".tick").data(p, e).order(), z = I.exit(), X = I.enter().append("g").attr("class", "tick"), V = I.select("line"), Z = I.select("text");
    w = w.merge(w.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), I = I.merge(X), V = V.merge(X.append("line").attr("stroke", "currentColor").attr(l + "2", u * o)), Z = Z.merge(X.append("text").attr("fill", "currentColor").attr(l, u * x).attr("dy", "0em")), g !== U && (w = w.transition(g), I = I.transition(g), V = V.transition(g), Z = Z.transition(g), z = z.transition(g).attr("opacity", Cn).attr("transform", function($) {
      return isFinite($ = D($)) ? h($ + c) : this.getAttribute("transform");
    }), X.attr("opacity", Cn).attr("transform", function($) {
      var H = this.parentNode.__axis;
      return h((H && isFinite(H = H($)) ? H : D($)) + c);
    })), z.remove(), w.attr("d", a ? "M" + A + "," + u * a + "V" + c + "H" + T + "V" + u * a : "M" + A + "," + c + "H" + T), I.attr("opacity", 1).attr("transform", function($) {
      return h(D($) + c);
    }), V.attr(l + "2", u * o), Z.attr(l, u * x).text(m), U.filter(vi).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", "middle"), U.each(function() {
      this.__axis = D;
    });
  }
  return f.scale = function(g) {
    return arguments.length ? (e = g, f) : e;
  }, f.ticks = function() {
    return n = Array.from(arguments), f;
  }, f.tickArguments = function(g) {
    return arguments.length ? (n = g == null ? [] : Array.from(g), f) : n.slice();
  }, f.tickValues = function(g) {
    return arguments.length ? (r = g == null ? null : Array.from(g), f) : r && r.slice();
  }, f.tickFormat = function(g) {
    return arguments.length ? (i = g, f) : i;
  }, f.tickSize = function(g) {
    return arguments.length ? (o = a = +g, f) : o;
  }, f.tickSizeInner = function(g) {
    return arguments.length ? (o = +g, f) : o;
  }, f.tickSizeOuter = function(g) {
    return arguments.length ? (a = +g, f) : a;
  }, f.tickPadding = function(g) {
    return arguments.length ? (s = +g, f) : s;
  }, f.offset = function(g) {
    return arguments.length ? (c = +g, f) : c;
  }, f;
}
function _i(t) {
  return bi(mi, t);
}
var ki = { value: () => {
} };
function an() {
  for (var t = 0, e = arguments.length, n = {}, r; t < e; ++t) {
    if (!(r = arguments[t] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new ae(n);
}
function ae(t) {
  this._ = t;
}
function Mi(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var r = "", i = n.indexOf(".");
    if (i >= 0 && (r = n.slice(i + 1), n = n.slice(0, i)), n && !e.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
ae.prototype = an.prototype = {
  constructor: ae,
  on: function(t, e) {
    var n = this._, r = Mi(t + "", n), i, o = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++o < a; ) if ((i = (t = r[o]).type) && (i = Ci(n[i], t.name))) return i;
      return;
    }
    if (e != null && typeof e != "function") throw new Error("invalid callback: " + e);
    for (; ++o < a; )
      if (i = (t = r[o]).type) n[i] = Tn(n[i], t.name, e);
      else if (e == null) for (i in n) n[i] = Tn(n[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, e = this._;
    for (var n in e) t[n] = e[n].slice();
    return new ae(t);
  },
  call: function(t, e) {
    if ((i = arguments.length - 2) > 0) for (var n = new Array(i), r = 0, i, o; r < i; ++r) n[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (o = this._[t], r = 0, i = o.length; r < i; ++r) o[r].value.apply(e, n);
  },
  apply: function(t, e, n) {
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, o = r.length; i < o; ++i) r[i].value.apply(e, n);
  }
};
function Ci(t, e) {
  for (var n = 0, r = t.length, i; n < r; ++n)
    if ((i = t[n]).name === e)
      return i.value;
}
function Tn(t, e, n) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === e) {
      t[r] = ki, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return n != null && t.push({ name: e, value: n }), t;
}
var Ve = "http://www.w3.org/1999/xhtml";
const Sn = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Ve,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Ce(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), Sn.hasOwnProperty(e) ? { space: Sn[e], local: t } : t;
}
function Ti(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === Ve && e.documentElement.namespaceURI === Ve ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function Si(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function pr(t) {
  var e = Ce(t);
  return (e.local ? Si : Ti)(e);
}
function Ai() {
}
function sn(t) {
  return t == null ? Ai : function() {
    return this.querySelector(t);
  };
}
function Ii(t) {
  typeof t != "function" && (t = sn(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var o = e[i], a = o.length, s = r[i] = new Array(a), c, u, l = 0; l < a; ++l)
      (c = o[l]) && (u = t.call(c, c.__data__, l, o)) && ("__data__" in c && (u.__data__ = c.__data__), s[l] = u);
  return new rt(r, this._parents);
}
function Ni(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function Di() {
  return [];
}
function gr(t) {
  return t == null ? Di : function() {
    return this.querySelectorAll(t);
  };
}
function $i(t) {
  return function() {
    return Ni(t.apply(this, arguments));
  };
}
function Pi(t) {
  typeof t == "function" ? t = $i(t) : t = gr(t);
  for (var e = this._groups, n = e.length, r = [], i = [], o = 0; o < n; ++o)
    for (var a = e[o], s = a.length, c, u = 0; u < s; ++u)
      (c = a[u]) && (r.push(t.call(c, c.__data__, u, a)), i.push(c));
  return new rt(r, i);
}
function mr(t) {
  return function() {
    return this.matches(t);
  };
}
function yr(t) {
  return function(e) {
    return e.matches(t);
  };
}
var Ui = Array.prototype.find;
function Ei(t) {
  return function() {
    return Ui.call(this.children, t);
  };
}
function Fi() {
  return this.firstElementChild;
}
function zi(t) {
  return this.select(t == null ? Fi : Ei(typeof t == "function" ? t : yr(t)));
}
var Ri = Array.prototype.filter;
function Li() {
  return Array.from(this.children);
}
function qi(t) {
  return function() {
    return Ri.call(this.children, t);
  };
}
function Yi(t) {
  return this.selectAll(t == null ? Li : qi(typeof t == "function" ? t : yr(t)));
}
function Hi(t) {
  typeof t != "function" && (t = mr(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var o = e[i], a = o.length, s = r[i] = [], c, u = 0; u < a; ++u)
      (c = o[u]) && t.call(c, c.__data__, u, o) && s.push(c);
  return new rt(r, this._parents);
}
function xr(t) {
  return new Array(t.length);
}
function Oi() {
  return new rt(this._enter || this._groups.map(xr), this._parents);
}
function fe(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
fe.prototype = {
  constructor: fe,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, e) {
    return this._parent.insertBefore(t, e);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function Wi(t) {
  return function() {
    return t;
  };
}
function Bi(t, e, n, r, i, o) {
  for (var a = 0, s, c = e.length, u = o.length; a < u; ++a)
    (s = e[a]) ? (s.__data__ = o[a], r[a] = s) : n[a] = new fe(t, o[a]);
  for (; a < c; ++a)
    (s = e[a]) && (i[a] = s);
}
function Xi(t, e, n, r, i, o, a) {
  var s, c, u = /* @__PURE__ */ new Map(), l = e.length, h = o.length, f = new Array(l), g;
  for (s = 0; s < l; ++s)
    (c = e[s]) && (f[s] = g = a.call(c, c.__data__, s, e) + "", u.has(g) ? i[s] = c : u.set(g, c));
  for (s = 0; s < h; ++s)
    g = a.call(t, o[s], s, o) + "", (c = u.get(g)) ? (r[s] = c, c.__data__ = o[s], u.delete(g)) : n[s] = new fe(t, o[s]);
  for (s = 0; s < l; ++s)
    (c = e[s]) && u.get(f[s]) === c && (i[s] = c);
}
function Vi(t) {
  return t.__data__;
}
function Gi(t, e) {
  if (!arguments.length) return Array.from(this, Vi);
  var n = e ? Xi : Bi, r = this._parents, i = this._groups;
  typeof t != "function" && (t = Wi(t));
  for (var o = i.length, a = new Array(o), s = new Array(o), c = new Array(o), u = 0; u < o; ++u) {
    var l = r[u], h = i[u], f = h.length, g = Zi(t.call(l, l && l.__data__, u, r)), p = g.length, m = s[u] = new Array(p), x = a[u] = new Array(p), v = c[u] = new Array(f);
    n(l, h, m, x, v, g, e);
    for (var A = 0, T = 0, D, U; A < p; ++A)
      if (D = m[A]) {
        for (A >= T && (T = A + 1); !(U = x[T]) && ++T < p; ) ;
        D._next = U || null;
      }
  }
  return a = new rt(a, r), a._enter = s, a._exit = c, a;
}
function Zi(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function ji() {
  return new rt(this._exit || this._groups.map(xr), this._parents);
}
function Ki(t, e, n) {
  var r = this.enter(), i = this, o = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), e != null && (i = e(i), i && (i = i.selection())), n == null ? o.remove() : n(o), r && i ? r.merge(i).order() : i;
}
function Qi(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, r = e._groups, i = n.length, o = r.length, a = Math.min(i, o), s = new Array(i), c = 0; c < a; ++c)
    for (var u = n[c], l = r[c], h = u.length, f = s[c] = new Array(h), g, p = 0; p < h; ++p)
      (g = u[p] || l[p]) && (f[p] = g);
  for (; c < i; ++c)
    s[c] = n[c];
  return new rt(s, this._parents);
}
function Ji() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var r = t[e], i = r.length - 1, o = r[i], a; --i >= 0; )
      (a = r[i]) && (o && a.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(a, o), o = a);
  return this;
}
function to(t) {
  t || (t = eo);
  function e(h, f) {
    return h && f ? t(h.__data__, f.__data__) : !h - !f;
  }
  for (var n = this._groups, r = n.length, i = new Array(r), o = 0; o < r; ++o) {
    for (var a = n[o], s = a.length, c = i[o] = new Array(s), u, l = 0; l < s; ++l)
      (u = a[l]) && (c[l] = u);
    c.sort(e);
  }
  return new rt(i, this._parents).order();
}
function eo(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function no() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function ro() {
  return Array.from(this);
}
function io() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, o = r.length; i < o; ++i) {
      var a = r[i];
      if (a) return a;
    }
  return null;
}
function oo() {
  let t = 0;
  for (const e of this) ++t;
  return t;
}
function ao() {
  return !this.node();
}
function so(t) {
  for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
    for (var i = e[n], o = 0, a = i.length, s; o < a; ++o)
      (s = i[o]) && t.call(s, s.__data__, o, i);
  return this;
}
function uo(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function co(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function lo(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function ho(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function fo(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function po(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function go(t, e) {
  var n = Ce(t);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((e == null ? n.local ? co : uo : typeof e == "function" ? n.local ? po : fo : n.local ? ho : lo)(n, e));
}
function wr(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function mo(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function yo(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function xo(t, e, n) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, n);
  };
}
function wo(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? mo : typeof e == "function" ? xo : yo)(t, e, n ?? "")) : Ut(this.node(), t);
}
function Ut(t, e) {
  return t.style.getPropertyValue(e) || wr(t).getComputedStyle(t, null).getPropertyValue(e);
}
function vo(t) {
  return function() {
    delete this[t];
  };
}
function bo(t, e) {
  return function() {
    this[t] = e;
  };
}
function _o(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function ko(t, e) {
  return arguments.length > 1 ? this.each((e == null ? vo : typeof e == "function" ? _o : bo)(t, e)) : this.node()[t];
}
function vr(t) {
  return t.trim().split(/^|\s+/);
}
function un(t) {
  return t.classList || new br(t);
}
function br(t) {
  this._node = t, this._names = vr(t.getAttribute("class") || "");
}
br.prototype = {
  add: function(t) {
    var e = this._names.indexOf(t);
    e < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var e = this._names.indexOf(t);
    e >= 0 && (this._names.splice(e, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function _r(t, e) {
  for (var n = un(t), r = -1, i = e.length; ++r < i; ) n.add(e[r]);
}
function kr(t, e) {
  for (var n = un(t), r = -1, i = e.length; ++r < i; ) n.remove(e[r]);
}
function Mo(t) {
  return function() {
    _r(this, t);
  };
}
function Co(t) {
  return function() {
    kr(this, t);
  };
}
function To(t, e) {
  return function() {
    (e.apply(this, arguments) ? _r : kr)(this, t);
  };
}
function So(t, e) {
  var n = vr(t + "");
  if (arguments.length < 2) {
    for (var r = un(this.node()), i = -1, o = n.length; ++i < o; ) if (!r.contains(n[i])) return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? To : e ? Mo : Co)(n, e));
}
function Ao() {
  this.textContent = "";
}
function Io(t) {
  return function() {
    this.textContent = t;
  };
}
function No(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function Do(t) {
  return arguments.length ? this.each(t == null ? Ao : (typeof t == "function" ? No : Io)(t)) : this.node().textContent;
}
function $o() {
  this.innerHTML = "";
}
function Po(t) {
  return function() {
    this.innerHTML = t;
  };
}
function Uo(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function Eo(t) {
  return arguments.length ? this.each(t == null ? $o : (typeof t == "function" ? Uo : Po)(t)) : this.node().innerHTML;
}
function Fo() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function zo() {
  return this.each(Fo);
}
function Ro() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Lo() {
  return this.each(Ro);
}
function qo(t) {
  var e = typeof t == "function" ? t : pr(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function Yo() {
  return null;
}
function Ho(t, e) {
  var n = typeof t == "function" ? t : pr(t), r = e == null ? Yo : typeof e == "function" ? e : sn(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Oo() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Wo() {
  return this.each(Oo);
}
function Bo() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function Xo() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function Vo(t) {
  return this.select(t ? Xo : Bo);
}
function Go(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function Zo(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function jo(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", r = e.indexOf(".");
    return r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: n };
  });
}
function Ko(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, r = -1, i = e.length, o; n < i; ++n)
        o = e[n], (!t.type || o.type === t.type) && o.name === t.name ? this.removeEventListener(o.type, o.listener, o.options) : e[++r] = o;
      ++r ? e.length = r : delete this.__on;
    }
  };
}
function Qo(t, e, n) {
  return function() {
    var r = this.__on, i, o = Zo(e);
    if (r) {
      for (var a = 0, s = r.length; a < s; ++a)
        if ((i = r[a]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = o, i.options = n), i.value = e;
          return;
        }
    }
    this.addEventListener(t.type, o, n), i = { type: t.type, name: t.name, value: e, listener: o, options: n }, r ? r.push(i) : this.__on = [i];
  };
}
function Jo(t, e, n) {
  var r = jo(t + ""), i, o = r.length, a;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var c = 0, u = s.length, l; c < u; ++c)
        for (i = 0, l = s[c]; i < o; ++i)
          if ((a = r[i]).type === l.type && a.name === l.name)
            return l.value;
    }
    return;
  }
  for (s = e ? Qo : Ko, i = 0; i < o; ++i) this.each(s(r[i], e, n));
  return this;
}
function Mr(t, e, n) {
  var r = wr(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(e, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(e, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(e, !1, !1)), t.dispatchEvent(i);
}
function ta(t, e) {
  return function() {
    return Mr(this, t, e);
  };
}
function ea(t, e) {
  return function() {
    return Mr(this, t, e.apply(this, arguments));
  };
}
function na(t, e) {
  return this.each((typeof e == "function" ? ea : ta)(t, e));
}
function* ra() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, o = r.length, a; i < o; ++i)
      (a = r[i]) && (yield a);
}
var Cr = [null];
function rt(t, e) {
  this._groups = t, this._parents = e;
}
function Kt() {
  return new rt([[document.documentElement]], Cr);
}
function ia() {
  return this;
}
rt.prototype = Kt.prototype = {
  constructor: rt,
  select: Ii,
  selectAll: Pi,
  selectChild: zi,
  selectChildren: Yi,
  filter: Hi,
  data: Gi,
  enter: Oi,
  exit: ji,
  join: Ki,
  merge: Qi,
  selection: ia,
  order: Ji,
  sort: to,
  call: no,
  nodes: ro,
  node: io,
  size: oo,
  empty: ao,
  each: so,
  attr: go,
  style: wo,
  property: ko,
  classed: So,
  text: Do,
  html: Eo,
  raise: zo,
  lower: Lo,
  append: qo,
  insert: Ho,
  remove: Wo,
  clone: Vo,
  datum: Go,
  on: Jo,
  dispatch: na,
  [Symbol.iterator]: ra
};
function ct(t) {
  return typeof t == "string" ? new rt([[document.querySelector(t)]], [document.documentElement]) : new rt([[t]], Cr);
}
function oa(t) {
  let e;
  for (; e = t.sourceEvent; ) t = e;
  return t;
}
function vt(t, e) {
  if (t = oa(t), e === void 0 && (e = t.currentTarget), e) {
    var n = e.ownerSVGElement || e;
    if (n.createSVGPoint) {
      var r = n.createSVGPoint();
      return r.x = t.clientX, r.y = t.clientY, r = r.matrixTransform(e.getScreenCTM().inverse()), [r.x, r.y];
    }
    if (e.getBoundingClientRect) {
      var i = e.getBoundingClientRect();
      return [t.clientX - i.left - e.clientLeft, t.clientY - i.top - e.clientTop];
    }
  }
  return [t.pageX, t.pageY];
}
const Ge = { capture: !0, passive: !1 };
function Ze(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function aa(t) {
  var e = t.document.documentElement, n = ct(t).on("dragstart.drag", Ze, Ge);
  "onselectstart" in e ? n.on("selectstart.drag", Ze, Ge) : (e.__noselect = e.style.MozUserSelect, e.style.MozUserSelect = "none");
}
function sa(t, e) {
  var n = t.document.documentElement, r = ct(t).on("dragstart.drag", null);
  e && (r.on("click.drag", Ze, Ge), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
function cn(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function Tr(t, e) {
  var n = Object.create(t.prototype);
  for (var r in e) n[r] = e[r];
  return n;
}
function Qt() {
}
var Gt = 0.7, de = 1 / Gt, Pt = "\\s*([+-]?\\d+)\\s*", Zt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", lt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", ua = /^#([0-9a-f]{3,8})$/, ca = new RegExp(`^rgb\\(${Pt},${Pt},${Pt}\\)$`), la = new RegExp(`^rgb\\(${lt},${lt},${lt}\\)$`), ha = new RegExp(`^rgba\\(${Pt},${Pt},${Pt},${Zt}\\)$`), fa = new RegExp(`^rgba\\(${lt},${lt},${lt},${Zt}\\)$`), da = new RegExp(`^hsl\\(${Zt},${lt},${lt}\\)$`), pa = new RegExp(`^hsla\\(${Zt},${lt},${lt},${Zt}\\)$`), An = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
cn(Qt, Ct, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: In,
  // Deprecated! Use color.formatHex.
  formatHex: In,
  formatHex8: ga,
  formatHsl: ma,
  formatRgb: Nn,
  toString: Nn
});
function In() {
  return this.rgb().formatHex();
}
function ga() {
  return this.rgb().formatHex8();
}
function ma() {
  return Sr(this).formatHsl();
}
function Nn() {
  return this.rgb().formatRgb();
}
function Ct(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = ua.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? Dn(e) : n === 3 ? new tt(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? te(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? te(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = ca.exec(t)) ? new tt(e[1], e[2], e[3], 1) : (e = la.exec(t)) ? new tt(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = ha.exec(t)) ? te(e[1], e[2], e[3], e[4]) : (e = fa.exec(t)) ? te(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = da.exec(t)) ? Un(e[1], e[2] / 100, e[3] / 100, 1) : (e = pa.exec(t)) ? Un(e[1], e[2] / 100, e[3] / 100, e[4]) : An.hasOwnProperty(t) ? Dn(An[t]) : t === "transparent" ? new tt(NaN, NaN, NaN, 0) : null;
}
function Dn(t) {
  return new tt(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function te(t, e, n, r) {
  return r <= 0 && (t = e = n = NaN), new tt(t, e, n, r);
}
function ya(t) {
  return t instanceof Qt || (t = Ct(t)), t ? (t = t.rgb(), new tt(t.r, t.g, t.b, t.opacity)) : new tt();
}
function je(t, e, n, r) {
  return arguments.length === 1 ? ya(t) : new tt(t, e, n, r ?? 1);
}
function tt(t, e, n, r) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +r;
}
cn(tt, je, Tr(Qt, {
  brighter(t) {
    return t = t == null ? de : Math.pow(de, t), new tt(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Gt : Math.pow(Gt, t), new tt(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new tt(Mt(this.r), Mt(this.g), Mt(this.b), pe(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: $n,
  // Deprecated! Use color.formatHex.
  formatHex: $n,
  formatHex8: xa,
  formatRgb: Pn,
  toString: Pn
}));
function $n() {
  return `#${kt(this.r)}${kt(this.g)}${kt(this.b)}`;
}
function xa() {
  return `#${kt(this.r)}${kt(this.g)}${kt(this.b)}${kt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Pn() {
  const t = pe(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${Mt(this.r)}, ${Mt(this.g)}, ${Mt(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function pe(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function Mt(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function kt(t) {
  return t = Mt(t), (t < 16 ? "0" : "") + t.toString(16);
}
function Un(t, e, n, r) {
  return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new st(t, e, n, r);
}
function Sr(t) {
  if (t instanceof st) return new st(t.h, t.s, t.l, t.opacity);
  if (t instanceof Qt || (t = Ct(t)), !t) return new st();
  if (t instanceof st) return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, r = t.b / 255, i = Math.min(e, n, r), o = Math.max(e, n, r), a = NaN, s = o - i, c = (o + i) / 2;
  return s ? (e === o ? a = (n - r) / s + (n < r) * 6 : n === o ? a = (r - e) / s + 2 : a = (e - n) / s + 4, s /= c < 0.5 ? o + i : 2 - o - i, a *= 60) : s = c > 0 && c < 1 ? 0 : a, new st(a, s, c, t.opacity);
}
function wa(t, e, n, r) {
  return arguments.length === 1 ? Sr(t) : new st(t, e, n, r ?? 1);
}
function st(t, e, n, r) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
}
cn(st, wa, Tr(Qt, {
  brighter(t) {
    return t = t == null ? de : Math.pow(de, t), new st(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Gt : Math.pow(Gt, t), new st(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * e, i = 2 * n - r;
    return new tt(
      Ie(t >= 240 ? t - 240 : t + 120, i, r),
      Ie(t, i, r),
      Ie(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new st(En(this.h), ee(this.s), ee(this.l), pe(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = pe(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${En(this.h)}, ${ee(this.s) * 100}%, ${ee(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function En(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function ee(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Ie(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const ln = (t) => () => t;
function va(t, e) {
  return function(n) {
    return t + n * e;
  };
}
function ba(t, e, n) {
  return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(r) {
    return Math.pow(t + r * e, n);
  };
}
function _a(t) {
  return (t = +t) == 1 ? Ar : function(e, n) {
    return n - e ? ba(e, n, t) : ln(isNaN(e) ? n : e);
  };
}
function Ar(t, e) {
  var n = e - t;
  return n ? va(t, n) : ln(isNaN(t) ? e : t);
}
const ge = (function t(e) {
  var n = _a(e);
  function r(i, o) {
    var a = n((i = je(i)).r, (o = je(o)).r), s = n(i.g, o.g), c = n(i.b, o.b), u = Ar(i.opacity, o.opacity);
    return function(l) {
      return i.r = a(l), i.g = s(l), i.b = c(l), i.opacity = u(l), i + "";
    };
  }
  return r.gamma = t, r;
})(1);
function ka(t, e) {
  e || (e = []);
  var n = t ? Math.min(e.length, t.length) : 0, r = e.slice(), i;
  return function(o) {
    for (i = 0; i < n; ++i) r[i] = t[i] * (1 - o) + e[i] * o;
    return r;
  };
}
function Ma(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function Ca(t, e) {
  var n = e ? e.length : 0, r = t ? Math.min(n, t.length) : 0, i = new Array(r), o = new Array(n), a;
  for (a = 0; a < r; ++a) i[a] = hn(t[a], e[a]);
  for (; a < n; ++a) o[a] = e[a];
  return function(s) {
    for (a = 0; a < r; ++a) o[a] = i[a](s);
    return o;
  };
}
function Ta(t, e) {
  var n = /* @__PURE__ */ new Date();
  return t = +t, e = +e, function(r) {
    return n.setTime(t * (1 - r) + e * r), n;
  };
}
function at(t, e) {
  return t = +t, e = +e, function(n) {
    return t * (1 - n) + e * n;
  };
}
function Sa(t, e) {
  var n = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
  for (i in e)
    i in t ? n[i] = hn(t[i], e[i]) : r[i] = e[i];
  return function(o) {
    for (i in n) r[i] = n[i](o);
    return r;
  };
}
var Ke = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Ne = new RegExp(Ke.source, "g");
function Aa(t) {
  return function() {
    return t;
  };
}
function Ia(t) {
  return function(e) {
    return t(e) + "";
  };
}
function Ir(t, e) {
  var n = Ke.lastIndex = Ne.lastIndex = 0, r, i, o, a = -1, s = [], c = [];
  for (t = t + "", e = e + ""; (r = Ke.exec(t)) && (i = Ne.exec(e)); )
    (o = i.index) > n && (o = e.slice(n, o), s[a] ? s[a] += o : s[++a] = o), (r = r[0]) === (i = i[0]) ? s[a] ? s[a] += i : s[++a] = i : (s[++a] = null, c.push({ i: a, x: at(r, i) })), n = Ne.lastIndex;
  return n < e.length && (o = e.slice(n), s[a] ? s[a] += o : s[++a] = o), s.length < 2 ? c[0] ? Ia(c[0].x) : Aa(e) : (e = c.length, function(u) {
    for (var l = 0, h; l < e; ++l) s[(h = c[l]).i] = h.x(u);
    return s.join("");
  });
}
function hn(t, e) {
  var n = typeof e, r;
  return e == null || n === "boolean" ? ln(e) : (n === "number" ? at : n === "string" ? (r = Ct(e)) ? (e = r, ge) : Ir : e instanceof Ct ? ge : e instanceof Date ? Ta : Ma(e) ? ka : Array.isArray(e) ? Ca : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? Sa : at)(t, e);
}
function Na(t, e) {
  return t = +t, e = +e, function(n) {
    return Math.round(t * (1 - n) + e * n);
  };
}
var Fn = 180 / Math.PI, Qe = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Nr(t, e, n, r, i, o) {
  var a, s, c;
  return (a = Math.sqrt(t * t + e * e)) && (t /= a, e /= a), (c = t * n + e * r) && (n -= t * c, r -= e * c), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, c /= s), t * r < e * n && (t = -t, e = -e, c = -c, a = -a), {
    translateX: i,
    translateY: o,
    rotate: Math.atan2(e, t) * Fn,
    skewX: Math.atan(c) * Fn,
    scaleX: a,
    scaleY: s
  };
}
var ne;
function Da(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? Qe : Nr(e.a, e.b, e.c, e.d, e.e, e.f);
}
function $a(t) {
  return t == null || (ne || (ne = document.createElementNS("http://www.w3.org/2000/svg", "g")), ne.setAttribute("transform", t), !(t = ne.transform.baseVal.consolidate())) ? Qe : (t = t.matrix, Nr(t.a, t.b, t.c, t.d, t.e, t.f));
}
function Dr(t, e, n, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function o(u, l, h, f, g, p) {
    if (u !== h || l !== f) {
      var m = g.push("translate(", null, e, null, n);
      p.push({ i: m - 4, x: at(u, h) }, { i: m - 2, x: at(l, f) });
    } else (h || f) && g.push("translate(" + h + e + f + n);
  }
  function a(u, l, h, f) {
    u !== l ? (u - l > 180 ? l += 360 : l - u > 180 && (u += 360), f.push({ i: h.push(i(h) + "rotate(", null, r) - 2, x: at(u, l) })) : l && h.push(i(h) + "rotate(" + l + r);
  }
  function s(u, l, h, f) {
    u !== l ? f.push({ i: h.push(i(h) + "skewX(", null, r) - 2, x: at(u, l) }) : l && h.push(i(h) + "skewX(" + l + r);
  }
  function c(u, l, h, f, g, p) {
    if (u !== h || l !== f) {
      var m = g.push(i(g) + "scale(", null, ",", null, ")");
      p.push({ i: m - 4, x: at(u, h) }, { i: m - 2, x: at(l, f) });
    } else (h !== 1 || f !== 1) && g.push(i(g) + "scale(" + h + "," + f + ")");
  }
  return function(u, l) {
    var h = [], f = [];
    return u = t(u), l = t(l), o(u.translateX, u.translateY, l.translateX, l.translateY, h, f), a(u.rotate, l.rotate, h, f), s(u.skewX, l.skewX, h, f), c(u.scaleX, u.scaleY, l.scaleX, l.scaleY, h, f), u = l = null, function(g) {
      for (var p = -1, m = f.length, x; ++p < m; ) h[(x = f[p]).i] = x.x(g);
      return h.join("");
    };
  };
}
var Pa = Dr(Da, "px, ", "px)", "deg)"), Ua = Dr($a, ", ", ")", ")"), Ea = 1e-12;
function zn(t) {
  return ((t = Math.exp(t)) + 1 / t) / 2;
}
function Fa(t) {
  return ((t = Math.exp(t)) - 1 / t) / 2;
}
function za(t) {
  return ((t = Math.exp(2 * t)) - 1) / (t + 1);
}
const Ra = (function t(e, n, r) {
  function i(o, a) {
    var s = o[0], c = o[1], u = o[2], l = a[0], h = a[1], f = a[2], g = l - s, p = h - c, m = g * g + p * p, x, v;
    if (m < Ea)
      v = Math.log(f / u) / e, x = function(I) {
        return [
          s + I * g,
          c + I * p,
          u * Math.exp(e * I * v)
        ];
      };
    else {
      var A = Math.sqrt(m), T = (f * f - u * u + r * m) / (2 * u * n * A), D = (f * f - u * u - r * m) / (2 * f * n * A), U = Math.log(Math.sqrt(T * T + 1) - T), w = Math.log(Math.sqrt(D * D + 1) - D);
      v = (w - U) / e, x = function(I) {
        var z = I * v, X = zn(U), V = u / (n * A) * (X * za(e * z + U) - Fa(U));
        return [
          s + V * g,
          c + V * p,
          u * X / zn(e * z + U)
        ];
      };
    }
    return x.duration = v * 1e3 * e / Math.SQRT2, x;
  }
  return i.rho = function(o) {
    var a = Math.max(1e-3, +o), s = a * a, c = s * s;
    return t(a, s, c);
  }, i;
})(Math.SQRT2, 2, 4);
var Et = 0, Bt = 0, Lt = 0, $r = 1e3, me, Xt, ye = 0, Tt = 0, Te = 0, jt = typeof performance == "object" && performance.now ? performance : Date, Pr = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function fn() {
  return Tt || (Pr(La), Tt = jt.now() + Te);
}
function La() {
  Tt = 0;
}
function xe() {
  this._call = this._time = this._next = null;
}
xe.prototype = Ur.prototype = {
  constructor: xe,
  restart: function(t, e, n) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    n = (n == null ? fn() : +n) + (e == null ? 0 : +e), !this._next && Xt !== this && (Xt ? Xt._next = this : me = this, Xt = this), this._call = t, this._time = n, Je();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Je());
  }
};
function Ur(t, e, n) {
  var r = new xe();
  return r.restart(t, e, n), r;
}
function qa() {
  fn(), ++Et;
  for (var t = me, e; t; )
    (e = Tt - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --Et;
}
function Rn() {
  Tt = (ye = jt.now()) + Te, Et = Bt = 0;
  try {
    qa();
  } finally {
    Et = 0, Ha(), Tt = 0;
  }
}
function Ya() {
  var t = jt.now(), e = t - ye;
  e > $r && (Te -= e, ye = t);
}
function Ha() {
  for (var t, e = me, n, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : me = n);
  Xt = t, Je(r);
}
function Je(t) {
  if (!Et) {
    Bt && (Bt = clearTimeout(Bt));
    var e = t - Tt;
    e > 24 ? (t < 1 / 0 && (Bt = setTimeout(Rn, t - jt.now() - Te)), Lt && (Lt = clearInterval(Lt))) : (Lt || (ye = jt.now(), Lt = setInterval(Ya, $r)), Et = 1, Pr(Rn));
  }
}
function Ln(t, e, n) {
  var r = new xe();
  return e = e == null ? 0 : +e, r.restart((i) => {
    r.stop(), t(i + e);
  }, e, n), r;
}
var Oa = an("start", "end", "cancel", "interrupt"), Wa = [], Er = 0, qn = 1, tn = 2, se = 3, Yn = 4, en = 5, ue = 6;
function Se(t, e, n, r, i, o) {
  var a = t.__transition;
  if (!a) t.__transition = {};
  else if (n in a) return;
  Ba(t, n, {
    name: e,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: Oa,
    tween: Wa,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: Er
  });
}
function dn(t, e) {
  var n = ut(t, e);
  if (n.state > Er) throw new Error("too late; already scheduled");
  return n;
}
function ht(t, e) {
  var n = ut(t, e);
  if (n.state > se) throw new Error("too late; already running");
  return n;
}
function ut(t, e) {
  var n = t.__transition;
  if (!n || !(n = n[e])) throw new Error("transition not found");
  return n;
}
function Ba(t, e, n) {
  var r = t.__transition, i;
  r[e] = n, n.timer = Ur(o, 0, n.time);
  function o(u) {
    n.state = qn, n.timer.restart(a, n.delay, n.time), n.delay <= u && a(u - n.delay);
  }
  function a(u) {
    var l, h, f, g;
    if (n.state !== qn) return c();
    for (l in r)
      if (g = r[l], g.name === n.name) {
        if (g.state === se) return Ln(a);
        g.state === Yn ? (g.state = ue, g.timer.stop(), g.on.call("interrupt", t, t.__data__, g.index, g.group), delete r[l]) : +l < e && (g.state = ue, g.timer.stop(), g.on.call("cancel", t, t.__data__, g.index, g.group), delete r[l]);
      }
    if (Ln(function() {
      n.state === se && (n.state = Yn, n.timer.restart(s, n.delay, n.time), s(u));
    }), n.state = tn, n.on.call("start", t, t.__data__, n.index, n.group), n.state === tn) {
      for (n.state = se, i = new Array(f = n.tween.length), l = 0, h = -1; l < f; ++l)
        (g = n.tween[l].value.call(t, t.__data__, n.index, n.group)) && (i[++h] = g);
      i.length = h + 1;
    }
  }
  function s(u) {
    for (var l = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(c), n.state = en, 1), h = -1, f = i.length; ++h < f; )
      i[h].call(t, l);
    n.state === en && (n.on.call("end", t, t.__data__, n.index, n.group), c());
  }
  function c() {
    n.state = ue, n.timer.stop(), delete r[e];
    for (var u in r) return;
    delete t.__transition;
  }
}
function ce(t, e) {
  var n = t.__transition, r, i, o = !0, a;
  if (n) {
    e = e == null ? null : e + "";
    for (a in n) {
      if ((r = n[a]).name !== e) {
        o = !1;
        continue;
      }
      i = r.state > tn && r.state < en, r.state = ue, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete n[a];
    }
    o && delete t.__transition;
  }
}
function Xa(t) {
  return this.each(function() {
    ce(this, t);
  });
}
function Va(t, e) {
  var n, r;
  return function() {
    var i = ht(this, t), o = i.tween;
    if (o !== n) {
      r = n = o;
      for (var a = 0, s = r.length; a < s; ++a)
        if (r[a].name === e) {
          r = r.slice(), r.splice(a, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function Ga(t, e, n) {
  var r, i;
  if (typeof n != "function") throw new Error();
  return function() {
    var o = ht(this, t), a = o.tween;
    if (a !== r) {
      i = (r = a).slice();
      for (var s = { name: e, value: n }, c = 0, u = i.length; c < u; ++c)
        if (i[c].name === e) {
          i[c] = s;
          break;
        }
      c === u && i.push(s);
    }
    o.tween = i;
  };
}
function Za(t, e) {
  var n = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = ut(this.node(), n).tween, i = 0, o = r.length, a; i < o; ++i)
      if ((a = r[i]).name === t)
        return a.value;
    return null;
  }
  return this.each((e == null ? Va : Ga)(n, t, e));
}
function pn(t, e, n) {
  var r = t._id;
  return t.each(function() {
    var i = ht(this, r);
    (i.value || (i.value = {}))[e] = n.apply(this, arguments);
  }), function(i) {
    return ut(i, r).value[e];
  };
}
function Fr(t, e) {
  var n;
  return (typeof e == "number" ? at : e instanceof Ct ? ge : (n = Ct(e)) ? (e = n, ge) : Ir)(t, e);
}
function ja(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Ka(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Qa(t, e, n) {
  var r, i = n + "", o;
  return function() {
    var a = this.getAttribute(t);
    return a === i ? null : a === r ? o : o = e(r = a, n);
  };
}
function Ja(t, e, n) {
  var r, i = n + "", o;
  return function() {
    var a = this.getAttributeNS(t.space, t.local);
    return a === i ? null : a === r ? o : o = e(r = a, n);
  };
}
function ts(t, e, n) {
  var r, i, o;
  return function() {
    var a, s = n(this), c;
    return s == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), c = s + "", a === c ? null : a === r && c === i ? o : (i = c, o = e(r = a, s)));
  };
}
function es(t, e, n) {
  var r, i, o;
  return function() {
    var a, s = n(this), c;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), c = s + "", a === c ? null : a === r && c === i ? o : (i = c, o = e(r = a, s)));
  };
}
function ns(t, e) {
  var n = Ce(t), r = n === "transform" ? Ua : Fr;
  return this.attrTween(t, typeof e == "function" ? (n.local ? es : ts)(n, r, pn(this, "attr." + t, e)) : e == null ? (n.local ? Ka : ja)(n) : (n.local ? Ja : Qa)(n, r, e));
}
function rs(t, e) {
  return function(n) {
    this.setAttribute(t, e.call(this, n));
  };
}
function is(t, e) {
  return function(n) {
    this.setAttributeNS(t.space, t.local, e.call(this, n));
  };
}
function os(t, e) {
  var n, r;
  function i() {
    var o = e.apply(this, arguments);
    return o !== r && (n = (r = o) && is(t, o)), n;
  }
  return i._value = e, i;
}
function as(t, e) {
  var n, r;
  function i() {
    var o = e.apply(this, arguments);
    return o !== r && (n = (r = o) && rs(t, o)), n;
  }
  return i._value = e, i;
}
function ss(t, e) {
  var n = "attr." + t;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (e == null) return this.tween(n, null);
  if (typeof e != "function") throw new Error();
  var r = Ce(t);
  return this.tween(n, (r.local ? os : as)(r, e));
}
function us(t, e) {
  return function() {
    dn(this, t).delay = +e.apply(this, arguments);
  };
}
function cs(t, e) {
  return e = +e, function() {
    dn(this, t).delay = e;
  };
}
function ls(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? us : cs)(e, t)) : ut(this.node(), e).delay;
}
function hs(t, e) {
  return function() {
    ht(this, t).duration = +e.apply(this, arguments);
  };
}
function fs(t, e) {
  return e = +e, function() {
    ht(this, t).duration = e;
  };
}
function ds(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? hs : fs)(e, t)) : ut(this.node(), e).duration;
}
function ps(t, e) {
  if (typeof e != "function") throw new Error();
  return function() {
    ht(this, t).ease = e;
  };
}
function gs(t) {
  var e = this._id;
  return arguments.length ? this.each(ps(e, t)) : ut(this.node(), e).ease;
}
function ms(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    ht(this, t).ease = n;
  };
}
function ys(t) {
  if (typeof t != "function") throw new Error();
  return this.each(ms(this._id, t));
}
function xs(t) {
  typeof t != "function" && (t = mr(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var o = e[i], a = o.length, s = r[i] = [], c, u = 0; u < a; ++u)
      (c = o[u]) && t.call(c, c.__data__, u, o) && s.push(c);
  return new mt(r, this._parents, this._name, this._id);
}
function ws(t) {
  if (t._id !== this._id) throw new Error();
  for (var e = this._groups, n = t._groups, r = e.length, i = n.length, o = Math.min(r, i), a = new Array(r), s = 0; s < o; ++s)
    for (var c = e[s], u = n[s], l = c.length, h = a[s] = new Array(l), f, g = 0; g < l; ++g)
      (f = c[g] || u[g]) && (h[g] = f);
  for (; s < r; ++s)
    a[s] = e[s];
  return new mt(a, this._parents, this._name, this._id);
}
function vs(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var n = e.indexOf(".");
    return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
  });
}
function bs(t, e, n) {
  var r, i, o = vs(e) ? dn : ht;
  return function() {
    var a = o(this, t), s = a.on;
    s !== r && (i = (r = s).copy()).on(e, n), a.on = i;
  };
}
function _s(t, e) {
  var n = this._id;
  return arguments.length < 2 ? ut(this.node(), n).on.on(t) : this.each(bs(n, t, e));
}
function ks(t) {
  return function() {
    var e = this.parentNode;
    for (var n in this.__transition) if (+n !== t) return;
    e && e.removeChild(this);
  };
}
function Ms() {
  return this.on("end.remove", ks(this._id));
}
function Cs(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = sn(t));
  for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
    for (var s = r[a], c = s.length, u = o[a] = new Array(c), l, h, f = 0; f < c; ++f)
      (l = s[f]) && (h = t.call(l, l.__data__, f, s)) && ("__data__" in l && (h.__data__ = l.__data__), u[f] = h, Se(u[f], e, n, f, u, ut(l, n)));
  return new mt(o, this._parents, e, n);
}
function Ts(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = gr(t));
  for (var r = this._groups, i = r.length, o = [], a = [], s = 0; s < i; ++s)
    for (var c = r[s], u = c.length, l, h = 0; h < u; ++h)
      if (l = c[h]) {
        for (var f = t.call(l, l.__data__, h, c), g, p = ut(l, n), m = 0, x = f.length; m < x; ++m)
          (g = f[m]) && Se(g, e, n, m, f, p);
        o.push(f), a.push(l);
      }
  return new mt(o, a, e, n);
}
var Ss = Kt.prototype.constructor;
function As() {
  return new Ss(this._groups, this._parents);
}
function Is(t, e) {
  var n, r, i;
  return function() {
    var o = Ut(this, t), a = (this.style.removeProperty(t), Ut(this, t));
    return o === a ? null : o === n && a === r ? i : i = e(n = o, r = a);
  };
}
function zr(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Ns(t, e, n) {
  var r, i = n + "", o;
  return function() {
    var a = Ut(this, t);
    return a === i ? null : a === r ? o : o = e(r = a, n);
  };
}
function Ds(t, e, n) {
  var r, i, o;
  return function() {
    var a = Ut(this, t), s = n(this), c = s + "";
    return s == null && (c = s = (this.style.removeProperty(t), Ut(this, t))), a === c ? null : a === r && c === i ? o : (i = c, o = e(r = a, s));
  };
}
function $s(t, e) {
  var n, r, i, o = "style." + e, a = "end." + o, s;
  return function() {
    var c = ht(this, t), u = c.on, l = c.value[o] == null ? s || (s = zr(e)) : void 0;
    (u !== n || i !== l) && (r = (n = u).copy()).on(a, i = l), c.on = r;
  };
}
function Ps(t, e, n) {
  var r = (t += "") == "transform" ? Pa : Fr;
  return e == null ? this.styleTween(t, Is(t, r)).on("end.style." + t, zr(t)) : typeof e == "function" ? this.styleTween(t, Ds(t, r, pn(this, "style." + t, e))).each($s(this._id, t)) : this.styleTween(t, Ns(t, r, e), n).on("end.style." + t, null);
}
function Us(t, e, n) {
  return function(r) {
    this.style.setProperty(t, e.call(this, r), n);
  };
}
function Es(t, e, n) {
  var r, i;
  function o() {
    var a = e.apply(this, arguments);
    return a !== i && (r = (i = a) && Us(t, a, n)), r;
  }
  return o._value = e, o;
}
function Fs(t, e, n) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (e == null) return this.tween(r, null);
  if (typeof e != "function") throw new Error();
  return this.tween(r, Es(t, e, n ?? ""));
}
function zs(t) {
  return function() {
    this.textContent = t;
  };
}
function Rs(t) {
  return function() {
    var e = t(this);
    this.textContent = e ?? "";
  };
}
function Ls(t) {
  return this.tween("text", typeof t == "function" ? Rs(pn(this, "text", t)) : zs(t == null ? "" : t + ""));
}
function qs(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function Ys(t) {
  var e, n;
  function r() {
    var i = t.apply(this, arguments);
    return i !== n && (e = (n = i) && qs(i)), e;
  }
  return r._value = t, r;
}
function Hs(t) {
  var e = "text";
  if (arguments.length < 1) return (e = this.tween(e)) && e._value;
  if (t == null) return this.tween(e, null);
  if (typeof t != "function") throw new Error();
  return this.tween(e, Ys(t));
}
function Os() {
  for (var t = this._name, e = this._id, n = Rr(), r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, c, u = 0; u < s; ++u)
      if (c = a[u]) {
        var l = ut(c, e);
        Se(c, t, n, u, a, {
          time: l.time + l.delay + l.duration,
          delay: 0,
          duration: l.duration,
          ease: l.ease
        });
      }
  return new mt(r, this._parents, t, n);
}
function Ws() {
  var t, e, n = this, r = n._id, i = n.size();
  return new Promise(function(o, a) {
    var s = { value: a }, c = { value: function() {
      --i === 0 && o();
    } };
    n.each(function() {
      var u = ht(this, r), l = u.on;
      l !== t && (e = (t = l).copy(), e._.cancel.push(s), e._.interrupt.push(s), e._.end.push(c)), u.on = e;
    }), i === 0 && o();
  });
}
var Bs = 0;
function mt(t, e, n, r) {
  this._groups = t, this._parents = e, this._name = n, this._id = r;
}
function Rr() {
  return ++Bs;
}
var ft = Kt.prototype;
mt.prototype = {
  constructor: mt,
  select: Cs,
  selectAll: Ts,
  selectChild: ft.selectChild,
  selectChildren: ft.selectChildren,
  filter: xs,
  merge: ws,
  selection: As,
  transition: Os,
  call: ft.call,
  nodes: ft.nodes,
  node: ft.node,
  size: ft.size,
  empty: ft.empty,
  each: ft.each,
  on: _s,
  attr: ns,
  attrTween: ss,
  style: Ps,
  styleTween: Fs,
  text: Ls,
  textTween: Hs,
  remove: Ms,
  tween: Za,
  delay: ls,
  duration: ds,
  ease: gs,
  easeVarying: ys,
  end: Ws,
  [Symbol.iterator]: ft[Symbol.iterator]
};
function Xs(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Vs = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Xs
};
function Gs(t, e) {
  for (var n; !(n = t.__transition) || !(n = n[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return n;
}
function Zs(t) {
  var e, n;
  t instanceof mt ? (e = t._id, t = t._name) : (e = Rr(), (n = Vs).time = fn(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, c, u = 0; u < s; ++u)
      (c = a[u]) && Se(c, t, e, u, a, n || Gs(c, e));
  return new mt(r, this._parents, t, e);
}
Kt.prototype.interrupt = Xa;
Kt.prototype.transition = Zs;
var Hn = {}, De = {}, $e = 34, qt = 10, Pe = 13;
function Lr(t) {
  return new Function("d", "return {" + t.map(function(e, n) {
    return JSON.stringify(e) + ": d[" + n + '] || ""';
  }).join(",") + "}");
}
function js(t, e) {
  var n = Lr(t);
  return function(r, i) {
    return e(n(r), i, t);
  };
}
function On(t) {
  var e = /* @__PURE__ */ Object.create(null), n = [];
  return t.forEach(function(r) {
    for (var i in r)
      i in e || n.push(e[i] = i);
  }), n;
}
function J(t, e) {
  var n = t + "", r = n.length;
  return r < e ? new Array(e - r + 1).join(0) + n : n;
}
function Ks(t) {
  return t < 0 ? "-" + J(-t, 6) : t > 9999 ? "+" + J(t, 6) : J(t, 4);
}
function Qs(t) {
  var e = t.getUTCHours(), n = t.getUTCMinutes(), r = t.getUTCSeconds(), i = t.getUTCMilliseconds();
  return isNaN(t) ? "Invalid Date" : Ks(t.getUTCFullYear()) + "-" + J(t.getUTCMonth() + 1, 2) + "-" + J(t.getUTCDate(), 2) + (i ? "T" + J(e, 2) + ":" + J(n, 2) + ":" + J(r, 2) + "." + J(i, 3) + "Z" : r ? "T" + J(e, 2) + ":" + J(n, 2) + ":" + J(r, 2) + "Z" : n || e ? "T" + J(e, 2) + ":" + J(n, 2) + "Z" : "");
}
function Js(t) {
  var e = new RegExp('["' + t + `
\r]`), n = t.charCodeAt(0);
  function r(h, f) {
    var g, p, m = i(h, function(x, v) {
      if (g) return g(x, v - 1);
      p = x, g = f ? js(x, f) : Lr(x);
    });
    return m.columns = p || [], m;
  }
  function i(h, f) {
    var g = [], p = h.length, m = 0, x = 0, v, A = p <= 0, T = !1;
    h.charCodeAt(p - 1) === qt && --p, h.charCodeAt(p - 1) === Pe && --p;
    function D() {
      if (A) return De;
      if (T) return T = !1, Hn;
      var w, I = m, z;
      if (h.charCodeAt(I) === $e) {
        for (; m++ < p && h.charCodeAt(m) !== $e || h.charCodeAt(++m) === $e; ) ;
        return (w = m) >= p ? A = !0 : (z = h.charCodeAt(m++)) === qt ? T = !0 : z === Pe && (T = !0, h.charCodeAt(m) === qt && ++m), h.slice(I + 1, w - 1).replace(/""/g, '"');
      }
      for (; m < p; ) {
        if ((z = h.charCodeAt(w = m++)) === qt) T = !0;
        else if (z === Pe)
          T = !0, h.charCodeAt(m) === qt && ++m;
        else if (z !== n) continue;
        return h.slice(I, w);
      }
      return A = !0, h.slice(I, p);
    }
    for (; (v = D()) !== De; ) {
      for (var U = []; v !== Hn && v !== De; ) U.push(v), v = D();
      f && (U = f(U, x++)) == null || g.push(U);
    }
    return g;
  }
  function o(h, f) {
    return h.map(function(g) {
      return f.map(function(p) {
        return l(g[p]);
      }).join(t);
    });
  }
  function a(h, f) {
    return f == null && (f = On(h)), [f.map(l).join(t)].concat(o(h, f)).join(`
`);
  }
  function s(h, f) {
    return f == null && (f = On(h)), o(h, f).join(`
`);
  }
  function c(h) {
    return h.map(u).join(`
`);
  }
  function u(h) {
    return h.map(l).join(t);
  }
  function l(h) {
    return h == null ? "" : h instanceof Date ? Qs(h) : e.test(h += "") ? '"' + h.replace(/"/g, '""') + '"' : h;
  }
  return {
    parse: r,
    parseRows: i,
    format: a,
    formatBody: s,
    formatRows: c,
    formatRow: u,
    formatValue: l
  };
}
var tu = Js(","), eu = tu.parse;
function nu(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function we(t, e) {
  if (!isFinite(t) || t === 0) return null;
  var n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e"), r = t.slice(0, n);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(n + 1)
  ];
}
function Ft(t) {
  return t = we(Math.abs(t)), t ? t[1] : NaN;
}
function ru(t, e) {
  return function(n, r) {
    for (var i = n.length, o = [], a = 0, s = t[0], c = 0; i > 0 && s > 0 && (c + s + 1 > r && (s = Math.max(1, r - c)), o.push(n.substring(i -= s, i + s)), !((c += s + 1) > r)); )
      s = t[a = (a + 1) % t.length];
    return o.reverse().join(e);
  };
}
function iu(t) {
  return function(e) {
    return e.replace(/[0-9]/g, function(n) {
      return t[+n];
    });
  };
}
var ou = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function ve(t) {
  if (!(e = ou.exec(t))) throw new Error("invalid format: " + t);
  var e;
  return new gn({
    fill: e[1],
    align: e[2],
    sign: e[3],
    symbol: e[4],
    zero: e[5],
    width: e[6],
    comma: e[7],
    precision: e[8] && e[8].slice(1),
    trim: e[9],
    type: e[10]
  });
}
ve.prototype = gn.prototype;
function gn(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
gn.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function au(t) {
  t: for (var e = t.length, n = 1, r = -1, i; n < e; ++n)
    switch (t[n]) {
      case ".":
        r = i = n;
        break;
      case "0":
        r === 0 && (r = n), i = n;
        break;
      default:
        if (!+t[n]) break t;
        r > 0 && (r = 0);
        break;
    }
  return r > 0 ? t.slice(0, r) + t.slice(i + 1) : t;
}
var be;
function su(t, e) {
  var n = we(t, e);
  if (!n) return be = void 0, t.toPrecision(e);
  var r = n[0], i = n[1], o = i - (be = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, a = r.length;
  return o === a ? r : o > a ? r + new Array(o - a + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + we(t, Math.max(0, e + o - 1))[0];
}
function Wn(t, e) {
  var n = we(t, e);
  if (!n) return t + "";
  var r = n[0], i = n[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const Bn = {
  "%": (t, e) => (t * 100).toFixed(e),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: nu,
  e: (t, e) => t.toExponential(e),
  f: (t, e) => t.toFixed(e),
  g: (t, e) => t.toPrecision(e),
  o: (t) => Math.round(t).toString(8),
  p: (t, e) => Wn(t * 100, e),
  r: Wn,
  s: su,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function Xn(t) {
  return t;
}
var Vn = Array.prototype.map, Gn = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function uu(t) {
  var e = t.grouping === void 0 || t.thousands === void 0 ? Xn : ru(Vn.call(t.grouping, Number), t.thousands + ""), n = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", o = t.numerals === void 0 ? Xn : iu(Vn.call(t.numerals, String)), a = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", c = t.nan === void 0 ? "NaN" : t.nan + "";
  function u(h, f) {
    h = ve(h);
    var g = h.fill, p = h.align, m = h.sign, x = h.symbol, v = h.zero, A = h.width, T = h.comma, D = h.precision, U = h.trim, w = h.type;
    w === "n" ? (T = !0, w = "g") : Bn[w] || (D === void 0 && (D = 12), U = !0, w = "g"), (v || g === "0" && p === "=") && (v = !0, g = "0", p = "=");
    var I = (f && f.prefix !== void 0 ? f.prefix : "") + (x === "$" ? n : x === "#" && /[boxX]/.test(w) ? "0" + w.toLowerCase() : ""), z = (x === "$" ? r : /[%p]/.test(w) ? a : "") + (f && f.suffix !== void 0 ? f.suffix : ""), X = Bn[w], V = /[defgprs%]/.test(w);
    D = D === void 0 ? 6 : /[gprs]/.test(w) ? Math.max(1, Math.min(21, D)) : Math.max(0, Math.min(20, D));
    function Z($) {
      var H = I, d = z, _, y, C;
      if (w === "c")
        d = X($) + d, $ = "";
      else {
        $ = +$;
        var N = $ < 0 || 1 / $ < 0;
        if ($ = isNaN($) ? c : X(Math.abs($), D), U && ($ = au($)), N && +$ == 0 && m !== "+" && (N = !1), H = (N ? m === "(" ? m : s : m === "-" || m === "(" ? "" : m) + H, d = (w === "s" && !isNaN($) && be !== void 0 ? Gn[8 + be / 3] : "") + d + (N && m === "(" ? ")" : ""), V) {
          for (_ = -1, y = $.length; ++_ < y; )
            if (C = $.charCodeAt(_), 48 > C || C > 57) {
              d = (C === 46 ? i + $.slice(_ + 1) : $.slice(_)) + d, $ = $.slice(0, _);
              break;
            }
        }
      }
      T && !v && ($ = e($, 1 / 0));
      var S = H.length + $.length + d.length, P = S < A ? new Array(A - S + 1).join(g) : "";
      switch (T && v && ($ = e(P + $, P.length ? A - d.length : 1 / 0), P = ""), p) {
        case "<":
          $ = H + $ + d + P;
          break;
        case "=":
          $ = H + P + $ + d;
          break;
        case "^":
          $ = P.slice(0, S = P.length >> 1) + H + $ + d + P.slice(S);
          break;
        default:
          $ = P + H + $ + d;
          break;
      }
      return o($);
    }
    return Z.toString = function() {
      return h + "";
    }, Z;
  }
  function l(h, f) {
    var g = Math.max(-8, Math.min(8, Math.floor(Ft(f) / 3))) * 3, p = Math.pow(10, -g), m = u((h = ve(h), h.type = "f", h), { suffix: Gn[8 + g / 3] });
    return function(x) {
      return m(p * x);
    };
  }
  return {
    format: u,
    formatPrefix: l
  };
}
var re, qr, Yr;
cu({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function cu(t) {
  return re = uu(t), qr = re.format, Yr = re.formatPrefix, re;
}
function lu(t) {
  return Math.max(0, -Ft(Math.abs(t)));
}
function hu(t, e) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Ft(e) / 3))) * 3 - Ft(Math.abs(t)));
}
function fu(t, e) {
  return t = Math.abs(t), e = Math.abs(e) - t, Math.max(0, Ft(e) - Ft(t)) + 1;
}
function Hr(t, e) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(t);
      break;
    default:
      this.range(e).domain(t);
      break;
  }
  return this;
}
function du(t) {
  return function() {
    return t;
  };
}
function pu(t) {
  return +t;
}
var Zn = [0, 1];
function Dt(t) {
  return t;
}
function nn(t, e) {
  return (e -= t = +t) ? function(n) {
    return (n - t) / e;
  } : du(isNaN(e) ? NaN : 0.5);
}
function gu(t, e) {
  var n;
  return t > e && (n = t, t = e, e = n), function(r) {
    return Math.max(t, Math.min(e, r));
  };
}
function mu(t, e, n) {
  var r = t[0], i = t[1], o = e[0], a = e[1];
  return i < r ? (r = nn(i, r), o = n(a, o)) : (r = nn(r, i), o = n(o, a)), function(s) {
    return o(r(s));
  };
}
function yu(t, e, n) {
  var r = Math.min(t.length, e.length) - 1, i = new Array(r), o = new Array(r), a = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++a < r; )
    i[a] = nn(t[a], t[a + 1]), o[a] = n(e[a], e[a + 1]);
  return function(s) {
    var c = ii(t, s, 1, r) - 1;
    return o[c](i[c](s));
  };
}
function Or(t, e) {
  return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function xu() {
  var t = Zn, e = Zn, n = hn, r, i, o, a = Dt, s, c, u;
  function l() {
    var f = Math.min(t.length, e.length);
    return a !== Dt && (a = gu(t[0], t[f - 1])), s = f > 2 ? yu : mu, c = u = null, h;
  }
  function h(f) {
    return f == null || isNaN(f = +f) ? o : (c || (c = s(t.map(r), e, n)))(r(a(f)));
  }
  return h.invert = function(f) {
    return a(i((u || (u = s(e, t.map(r), at)))(f)));
  }, h.domain = function(f) {
    return arguments.length ? (t = Array.from(f, pu), l()) : t.slice();
  }, h.range = function(f) {
    return arguments.length ? (e = Array.from(f), l()) : e.slice();
  }, h.rangeRound = function(f) {
    return e = Array.from(f), n = Na, l();
  }, h.clamp = function(f) {
    return arguments.length ? (a = f ? !0 : Dt, l()) : a !== Dt;
  }, h.interpolate = function(f) {
    return arguments.length ? (n = f, l()) : n;
  }, h.unknown = function(f) {
    return arguments.length ? (o = f, h) : o;
  }, function(f, g) {
    return r = f, i = g, l();
  };
}
function Wr() {
  return xu()(Dt, Dt);
}
function wu(t, e, n, r) {
  var i = Xe(t, e, n), o;
  switch (r = ve(r ?? ",f"), r.type) {
    case "s": {
      var a = Math.max(Math.abs(t), Math.abs(e));
      return r.precision == null && !isNaN(o = hu(i, a)) && (r.precision = o), Yr(r, a);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(o = fu(i, Math.max(Math.abs(t), Math.abs(e)))) && (r.precision = o - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(o = lu(i)) && (r.precision = o - (r.type === "%") * 2);
      break;
    }
  }
  return qr(r);
}
function vu(t) {
  var e = t.domain;
  return t.ticks = function(n) {
    var r = e();
    return pi(r[0], r[r.length - 1], n ?? 10);
  }, t.tickFormat = function(n, r) {
    var i = e();
    return wu(i[0], i[i.length - 1], n ?? 10, r);
  }, t.nice = function(n) {
    n == null && (n = 10);
    var r = e(), i = 0, o = r.length - 1, a = r[i], s = r[o], c, u, l = 10;
    for (s < a && (u = a, a = s, s = u, u = i, i = o, o = u); l-- > 0; ) {
      if (u = Be(a, s, n), u === c)
        return r[i] = a, r[o] = s, e(r);
      if (u > 0)
        a = Math.floor(a / u) * u, s = Math.ceil(s / u) * u;
      else if (u < 0)
        a = Math.ceil(a * u) / u, s = Math.floor(s * u) / u;
      else
        break;
      c = u;
    }
    return t;
  }, t;
}
function le() {
  var t = Wr();
  return t.copy = function() {
    return Or(t, le());
  }, Hr.apply(t, arguments), vu(t);
}
function bu(t, e) {
  t = t.slice();
  var n = 0, r = t.length - 1, i = t[n], o = t[r], a;
  return o < i && (a = n, n = r, r = a, a = i, i = o, o = a), t[n] = e.floor(i), t[r] = e.ceil(o), t;
}
const Ue = /* @__PURE__ */ new Date(), Ee = /* @__PURE__ */ new Date();
function G(t, e, n, r) {
  function i(o) {
    return t(o = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+o)), o;
  }
  return i.floor = (o) => (t(o = /* @__PURE__ */ new Date(+o)), o), i.ceil = (o) => (t(o = new Date(o - 1)), e(o, 1), t(o), o), i.round = (o) => {
    const a = i(o), s = i.ceil(o);
    return o - a < s - o ? a : s;
  }, i.offset = (o, a) => (e(o = /* @__PURE__ */ new Date(+o), a == null ? 1 : Math.floor(a)), o), i.range = (o, a, s) => {
    const c = [];
    if (o = i.ceil(o), s = s == null ? 1 : Math.floor(s), !(o < a) || !(s > 0)) return c;
    let u;
    do
      c.push(u = /* @__PURE__ */ new Date(+o)), e(o, s), t(o);
    while (u < o && o < a);
    return c;
  }, i.filter = (o) => G((a) => {
    if (a >= a) for (; t(a), !o(a); ) a.setTime(a - 1);
  }, (a, s) => {
    if (a >= a)
      if (s < 0) for (; ++s <= 0; )
        for (; e(a, -1), !o(a); )
          ;
      else for (; --s >= 0; )
        for (; e(a, 1), !o(a); )
          ;
  }), n && (i.count = (o, a) => (Ue.setTime(+o), Ee.setTime(+a), t(Ue), t(Ee), Math.floor(n(Ue, Ee))), i.every = (o) => (o = Math.floor(o), !isFinite(o) || !(o > 0) ? null : o > 1 ? i.filter(r ? (a) => r(a) % o === 0 : (a) => i.count(0, a) % o === 0) : i)), i;
}
const _e = G(() => {
}, (t, e) => {
  t.setTime(+t + e);
}, (t, e) => e - t);
_e.every = (t) => (t = Math.floor(t), !isFinite(t) || !(t > 0) ? null : t > 1 ? G((e) => {
  e.setTime(Math.floor(e / t) * t);
}, (e, n) => {
  e.setTime(+e + n * t);
}, (e, n) => (n - e) / t) : _e);
_e.range;
const dt = 1e3, it = dt * 60, pt = it * 60, yt = pt * 24, mn = yt * 7, jn = yt * 30, Fe = yt * 365, $t = G((t) => {
  t.setTime(t - t.getMilliseconds());
}, (t, e) => {
  t.setTime(+t + e * dt);
}, (t, e) => (e - t) / dt, (t) => t.getUTCSeconds());
$t.range;
const yn = G((t) => {
  t.setTime(t - t.getMilliseconds() - t.getSeconds() * dt);
}, (t, e) => {
  t.setTime(+t + e * it);
}, (t, e) => (e - t) / it, (t) => t.getMinutes());
yn.range;
const _u = G((t) => {
  t.setUTCSeconds(0, 0);
}, (t, e) => {
  t.setTime(+t + e * it);
}, (t, e) => (e - t) / it, (t) => t.getUTCMinutes());
_u.range;
const xn = G((t) => {
  t.setTime(t - t.getMilliseconds() - t.getSeconds() * dt - t.getMinutes() * it);
}, (t, e) => {
  t.setTime(+t + e * pt);
}, (t, e) => (e - t) / pt, (t) => t.getHours());
xn.range;
const ku = G((t) => {
  t.setUTCMinutes(0, 0, 0);
}, (t, e) => {
  t.setTime(+t + e * pt);
}, (t, e) => (e - t) / pt, (t) => t.getUTCHours());
ku.range;
const Jt = G(
  (t) => t.setHours(0, 0, 0, 0),
  (t, e) => t.setDate(t.getDate() + e),
  (t, e) => (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * it) / yt,
  (t) => t.getDate() - 1
);
Jt.range;
const wn = G((t) => {
  t.setUTCHours(0, 0, 0, 0);
}, (t, e) => {
  t.setUTCDate(t.getUTCDate() + e);
}, (t, e) => (e - t) / yt, (t) => t.getUTCDate() - 1);
wn.range;
const Mu = G((t) => {
  t.setUTCHours(0, 0, 0, 0);
}, (t, e) => {
  t.setUTCDate(t.getUTCDate() + e);
}, (t, e) => (e - t) / yt, (t) => Math.floor(t / yt));
Mu.range;
function At(t) {
  return G((e) => {
    e.setDate(e.getDate() - (e.getDay() + 7 - t) % 7), e.setHours(0, 0, 0, 0);
  }, (e, n) => {
    e.setDate(e.getDate() + n * 7);
  }, (e, n) => (n - e - (n.getTimezoneOffset() - e.getTimezoneOffset()) * it) / mn);
}
const Ae = At(0), ke = At(1), Cu = At(2), Tu = At(3), zt = At(4), Su = At(5), Au = At(6);
Ae.range;
ke.range;
Cu.range;
Tu.range;
zt.range;
Su.range;
Au.range;
function It(t) {
  return G((e) => {
    e.setUTCDate(e.getUTCDate() - (e.getUTCDay() + 7 - t) % 7), e.setUTCHours(0, 0, 0, 0);
  }, (e, n) => {
    e.setUTCDate(e.getUTCDate() + n * 7);
  }, (e, n) => (n - e) / mn);
}
const Br = It(0), Me = It(1), Iu = It(2), Nu = It(3), Rt = It(4), Du = It(5), $u = It(6);
Br.range;
Me.range;
Iu.range;
Nu.range;
Rt.range;
Du.range;
$u.range;
const vn = G((t) => {
  t.setDate(1), t.setHours(0, 0, 0, 0);
}, (t, e) => {
  t.setMonth(t.getMonth() + e);
}, (t, e) => e.getMonth() - t.getMonth() + (e.getFullYear() - t.getFullYear()) * 12, (t) => t.getMonth());
vn.range;
const Pu = G((t) => {
  t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0);
}, (t, e) => {
  t.setUTCMonth(t.getUTCMonth() + e);
}, (t, e) => e.getUTCMonth() - t.getUTCMonth() + (e.getUTCFullYear() - t.getUTCFullYear()) * 12, (t) => t.getUTCMonth());
Pu.range;
const xt = G((t) => {
  t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, e) => {
  t.setFullYear(t.getFullYear() + e);
}, (t, e) => e.getFullYear() - t.getFullYear(), (t) => t.getFullYear());
xt.every = (t) => !isFinite(t = Math.floor(t)) || !(t > 0) ? null : G((e) => {
  e.setFullYear(Math.floor(e.getFullYear() / t) * t), e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, n) => {
  e.setFullYear(e.getFullYear() + n * t);
});
xt.range;
const St = G((t) => {
  t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, e) => {
  t.setUTCFullYear(t.getUTCFullYear() + e);
}, (t, e) => e.getUTCFullYear() - t.getUTCFullYear(), (t) => t.getUTCFullYear());
St.every = (t) => !isFinite(t = Math.floor(t)) || !(t > 0) ? null : G((e) => {
  e.setUTCFullYear(Math.floor(e.getUTCFullYear() / t) * t), e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, n) => {
  e.setUTCFullYear(e.getUTCFullYear() + n * t);
});
St.range;
function Uu(t, e, n, r, i, o) {
  const a = [
    [$t, 1, dt],
    [$t, 5, 5 * dt],
    [$t, 15, 15 * dt],
    [$t, 30, 30 * dt],
    [o, 1, it],
    [o, 5, 5 * it],
    [o, 15, 15 * it],
    [o, 30, 30 * it],
    [i, 1, pt],
    [i, 3, 3 * pt],
    [i, 6, 6 * pt],
    [i, 12, 12 * pt],
    [r, 1, yt],
    [r, 2, 2 * yt],
    [n, 1, mn],
    [e, 1, jn],
    [e, 3, 3 * jn],
    [t, 1, Fe]
  ];
  function s(u, l, h) {
    const f = l < u;
    f && ([u, l] = [l, u]);
    const g = h && typeof h.range == "function" ? h : c(u, l, h), p = g ? g.range(u, +l + 1) : [];
    return f ? p.reverse() : p;
  }
  function c(u, l, h) {
    const f = Math.abs(l - u) / h, g = on(([, , x]) => x).right(a, f);
    if (g === a.length) return t.every(Xe(u / Fe, l / Fe, h));
    if (g === 0) return _e.every(Math.max(Xe(u, l, h), 1));
    const [p, m] = a[f / a[g - 1][2] < a[g][2] / f ? g - 1 : g];
    return p.every(m);
  }
  return [s, c];
}
const [Eu, Fu] = Uu(xt, vn, Ae, Jt, xn, yn);
function ze(t) {
  if (0 <= t.y && t.y < 100) {
    var e = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
    return e.setFullYear(t.y), e;
  }
  return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
}
function Re(t) {
  if (0 <= t.y && t.y < 100) {
    var e = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
    return e.setUTCFullYear(t.y), e;
  }
  return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
}
function Yt(t, e, n) {
  return { y: t, m: e, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function zu(t) {
  var e = t.dateTime, n = t.date, r = t.time, i = t.periods, o = t.days, a = t.shortDays, s = t.months, c = t.shortMonths, u = Ht(i), l = Ot(i), h = Ht(o), f = Ot(o), g = Ht(a), p = Ot(a), m = Ht(s), x = Ot(s), v = Ht(c), A = Ot(c), T = {
    a: C,
    A: N,
    b: S,
    B: P,
    c: null,
    d: nr,
    e: nr,
    f: ac,
    g: mc,
    G: xc,
    H: rc,
    I: ic,
    j: oc,
    L: Xr,
    m: sc,
    M: uc,
    p: R,
    q: Y,
    Q: or,
    s: ar,
    S: cc,
    u: lc,
    U: hc,
    V: fc,
    w: dc,
    W: pc,
    x: null,
    X: null,
    y: gc,
    Y: yc,
    Z: wc,
    "%": ir
  }, D = {
    a: M,
    A: E,
    b: W,
    B,
    c: null,
    d: rr,
    e: rr,
    f: kc,
    g: Pc,
    G: Ec,
    H: vc,
    I: bc,
    j: _c,
    L: Gr,
    m: Mc,
    M: Cc,
    p: K,
    q: ot,
    Q: or,
    s: ar,
    S: Tc,
    u: Sc,
    U: Ac,
    V: Ic,
    w: Nc,
    W: Dc,
    x: null,
    X: null,
    y: $c,
    Y: Uc,
    Z: Fc,
    "%": ir
  }, U = {
    a: V,
    A: Z,
    b: $,
    B: H,
    c: d,
    d: tr,
    e: tr,
    f: Ju,
    g: Jn,
    G: Qn,
    H: er,
    I: er,
    j: Zu,
    L: Qu,
    m: Gu,
    M: ju,
    p: X,
    q: Vu,
    Q: ec,
    s: nc,
    S: Ku,
    u: Hu,
    U: Ou,
    V: Wu,
    w: Yu,
    W: Bu,
    x: _,
    X: y,
    y: Jn,
    Y: Qn,
    Z: Xu,
    "%": tc
  };
  T.x = w(n, T), T.X = w(r, T), T.c = w(e, T), D.x = w(n, D), D.X = w(r, D), D.c = w(e, D);
  function w(k, F) {
    return function(L) {
      var b = [], Q = -1, O = 0, et = k.length, nt, bt, _n;
      for (L instanceof Date || (L = /* @__PURE__ */ new Date(+L)); ++Q < et; )
        k.charCodeAt(Q) === 37 && (b.push(k.slice(O, Q)), (bt = Kn[nt = k.charAt(++Q)]) != null ? nt = k.charAt(++Q) : bt = nt === "e" ? " " : "0", (_n = F[nt]) && (nt = _n(L, bt)), b.push(nt), O = Q + 1);
      return b.push(k.slice(O, Q)), b.join("");
    };
  }
  function I(k, F) {
    return function(L) {
      var b = Yt(1900, void 0, 1), Q = z(b, k, L += "", 0), O, et;
      if (Q != L.length) return null;
      if ("Q" in b) return new Date(b.Q);
      if ("s" in b) return new Date(b.s * 1e3 + ("L" in b ? b.L : 0));
      if (F && !("Z" in b) && (b.Z = 0), "p" in b && (b.H = b.H % 12 + b.p * 12), b.m === void 0 && (b.m = "q" in b ? b.q : 0), "V" in b) {
        if (b.V < 1 || b.V > 53) return null;
        "w" in b || (b.w = 1), "Z" in b ? (O = Re(Yt(b.y, 0, 1)), et = O.getUTCDay(), O = et > 4 || et === 0 ? Me.ceil(O) : Me(O), O = wn.offset(O, (b.V - 1) * 7), b.y = O.getUTCFullYear(), b.m = O.getUTCMonth(), b.d = O.getUTCDate() + (b.w + 6) % 7) : (O = ze(Yt(b.y, 0, 1)), et = O.getDay(), O = et > 4 || et === 0 ? ke.ceil(O) : ke(O), O = Jt.offset(O, (b.V - 1) * 7), b.y = O.getFullYear(), b.m = O.getMonth(), b.d = O.getDate() + (b.w + 6) % 7);
      } else ("W" in b || "U" in b) && ("w" in b || (b.w = "u" in b ? b.u % 7 : "W" in b ? 1 : 0), et = "Z" in b ? Re(Yt(b.y, 0, 1)).getUTCDay() : ze(Yt(b.y, 0, 1)).getDay(), b.m = 0, b.d = "W" in b ? (b.w + 6) % 7 + b.W * 7 - (et + 5) % 7 : b.w + b.U * 7 - (et + 6) % 7);
      return "Z" in b ? (b.H += b.Z / 100 | 0, b.M += b.Z % 100, Re(b)) : ze(b);
    };
  }
  function z(k, F, L, b) {
    for (var Q = 0, O = F.length, et = L.length, nt, bt; Q < O; ) {
      if (b >= et) return -1;
      if (nt = F.charCodeAt(Q++), nt === 37) {
        if (nt = F.charAt(Q++), bt = U[nt in Kn ? F.charAt(Q++) : nt], !bt || (b = bt(k, L, b)) < 0) return -1;
      } else if (nt != L.charCodeAt(b++))
        return -1;
    }
    return b;
  }
  function X(k, F, L) {
    var b = u.exec(F.slice(L));
    return b ? (k.p = l.get(b[0].toLowerCase()), L + b[0].length) : -1;
  }
  function V(k, F, L) {
    var b = g.exec(F.slice(L));
    return b ? (k.w = p.get(b[0].toLowerCase()), L + b[0].length) : -1;
  }
  function Z(k, F, L) {
    var b = h.exec(F.slice(L));
    return b ? (k.w = f.get(b[0].toLowerCase()), L + b[0].length) : -1;
  }
  function $(k, F, L) {
    var b = v.exec(F.slice(L));
    return b ? (k.m = A.get(b[0].toLowerCase()), L + b[0].length) : -1;
  }
  function H(k, F, L) {
    var b = m.exec(F.slice(L));
    return b ? (k.m = x.get(b[0].toLowerCase()), L + b[0].length) : -1;
  }
  function d(k, F, L) {
    return z(k, e, F, L);
  }
  function _(k, F, L) {
    return z(k, n, F, L);
  }
  function y(k, F, L) {
    return z(k, r, F, L);
  }
  function C(k) {
    return a[k.getDay()];
  }
  function N(k) {
    return o[k.getDay()];
  }
  function S(k) {
    return c[k.getMonth()];
  }
  function P(k) {
    return s[k.getMonth()];
  }
  function R(k) {
    return i[+(k.getHours() >= 12)];
  }
  function Y(k) {
    return 1 + ~~(k.getMonth() / 3);
  }
  function M(k) {
    return a[k.getUTCDay()];
  }
  function E(k) {
    return o[k.getUTCDay()];
  }
  function W(k) {
    return c[k.getUTCMonth()];
  }
  function B(k) {
    return s[k.getUTCMonth()];
  }
  function K(k) {
    return i[+(k.getUTCHours() >= 12)];
  }
  function ot(k) {
    return 1 + ~~(k.getUTCMonth() / 3);
  }
  return {
    format: function(k) {
      var F = w(k += "", T);
      return F.toString = function() {
        return k;
      }, F;
    },
    parse: function(k) {
      var F = I(k += "", !1);
      return F.toString = function() {
        return k;
      }, F;
    },
    utcFormat: function(k) {
      var F = w(k += "", D);
      return F.toString = function() {
        return k;
      }, F;
    },
    utcParse: function(k) {
      var F = I(k += "", !0);
      return F.toString = function() {
        return k;
      }, F;
    }
  };
}
var Kn = { "-": "", _: " ", 0: "0" }, j = /^\s*\d+/, Ru = /^%/, Lu = /[\\^$*+?|[\]().{}]/g;
function q(t, e, n) {
  var r = t < 0 ? "-" : "", i = (r ? -t : t) + "", o = i.length;
  return r + (o < n ? new Array(n - o + 1).join(e) + i : i);
}
function qu(t) {
  return t.replace(Lu, "\\$&");
}
function Ht(t) {
  return new RegExp("^(?:" + t.map(qu).join("|") + ")", "i");
}
function Ot(t) {
  return new Map(t.map((e, n) => [e.toLowerCase(), n]));
}
function Yu(t, e, n) {
  var r = j.exec(e.slice(n, n + 1));
  return r ? (t.w = +r[0], n + r[0].length) : -1;
}
function Hu(t, e, n) {
  var r = j.exec(e.slice(n, n + 1));
  return r ? (t.u = +r[0], n + r[0].length) : -1;
}
function Ou(t, e, n) {
  var r = j.exec(e.slice(n, n + 2));
  return r ? (t.U = +r[0], n + r[0].length) : -1;
}
function Wu(t, e, n) {
  var r = j.exec(e.slice(n, n + 2));
  return r ? (t.V = +r[0], n + r[0].length) : -1;
}
function Bu(t, e, n) {
  var r = j.exec(e.slice(n, n + 2));
  return r ? (t.W = +r[0], n + r[0].length) : -1;
}
function Qn(t, e, n) {
  var r = j.exec(e.slice(n, n + 4));
  return r ? (t.y = +r[0], n + r[0].length) : -1;
}
function Jn(t, e, n) {
  var r = j.exec(e.slice(n, n + 2));
  return r ? (t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), n + r[0].length) : -1;
}
function Xu(t, e, n) {
  var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(n, n + 6));
  return r ? (t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), n + r[0].length) : -1;
}
function Vu(t, e, n) {
  var r = j.exec(e.slice(n, n + 1));
  return r ? (t.q = r[0] * 3 - 3, n + r[0].length) : -1;
}
function Gu(t, e, n) {
  var r = j.exec(e.slice(n, n + 2));
  return r ? (t.m = r[0] - 1, n + r[0].length) : -1;
}
function tr(t, e, n) {
  var r = j.exec(e.slice(n, n + 2));
  return r ? (t.d = +r[0], n + r[0].length) : -1;
}
function Zu(t, e, n) {
  var r = j.exec(e.slice(n, n + 3));
  return r ? (t.m = 0, t.d = +r[0], n + r[0].length) : -1;
}
function er(t, e, n) {
  var r = j.exec(e.slice(n, n + 2));
  return r ? (t.H = +r[0], n + r[0].length) : -1;
}
function ju(t, e, n) {
  var r = j.exec(e.slice(n, n + 2));
  return r ? (t.M = +r[0], n + r[0].length) : -1;
}
function Ku(t, e, n) {
  var r = j.exec(e.slice(n, n + 2));
  return r ? (t.S = +r[0], n + r[0].length) : -1;
}
function Qu(t, e, n) {
  var r = j.exec(e.slice(n, n + 3));
  return r ? (t.L = +r[0], n + r[0].length) : -1;
}
function Ju(t, e, n) {
  var r = j.exec(e.slice(n, n + 6));
  return r ? (t.L = Math.floor(r[0] / 1e3), n + r[0].length) : -1;
}
function tc(t, e, n) {
  var r = Ru.exec(e.slice(n, n + 1));
  return r ? n + r[0].length : -1;
}
function ec(t, e, n) {
  var r = j.exec(e.slice(n));
  return r ? (t.Q = +r[0], n + r[0].length) : -1;
}
function nc(t, e, n) {
  var r = j.exec(e.slice(n));
  return r ? (t.s = +r[0], n + r[0].length) : -1;
}
function nr(t, e) {
  return q(t.getDate(), e, 2);
}
function rc(t, e) {
  return q(t.getHours(), e, 2);
}
function ic(t, e) {
  return q(t.getHours() % 12 || 12, e, 2);
}
function oc(t, e) {
  return q(1 + Jt.count(xt(t), t), e, 3);
}
function Xr(t, e) {
  return q(t.getMilliseconds(), e, 3);
}
function ac(t, e) {
  return Xr(t, e) + "000";
}
function sc(t, e) {
  return q(t.getMonth() + 1, e, 2);
}
function uc(t, e) {
  return q(t.getMinutes(), e, 2);
}
function cc(t, e) {
  return q(t.getSeconds(), e, 2);
}
function lc(t) {
  var e = t.getDay();
  return e === 0 ? 7 : e;
}
function hc(t, e) {
  return q(Ae.count(xt(t) - 1, t), e, 2);
}
function Vr(t) {
  var e = t.getDay();
  return e >= 4 || e === 0 ? zt(t) : zt.ceil(t);
}
function fc(t, e) {
  return t = Vr(t), q(zt.count(xt(t), t) + (xt(t).getDay() === 4), e, 2);
}
function dc(t) {
  return t.getDay();
}
function pc(t, e) {
  return q(ke.count(xt(t) - 1, t), e, 2);
}
function gc(t, e) {
  return q(t.getFullYear() % 100, e, 2);
}
function mc(t, e) {
  return t = Vr(t), q(t.getFullYear() % 100, e, 2);
}
function yc(t, e) {
  return q(t.getFullYear() % 1e4, e, 4);
}
function xc(t, e) {
  var n = t.getDay();
  return t = n >= 4 || n === 0 ? zt(t) : zt.ceil(t), q(t.getFullYear() % 1e4, e, 4);
}
function wc(t) {
  var e = t.getTimezoneOffset();
  return (e > 0 ? "-" : (e *= -1, "+")) + q(e / 60 | 0, "0", 2) + q(e % 60, "0", 2);
}
function rr(t, e) {
  return q(t.getUTCDate(), e, 2);
}
function vc(t, e) {
  return q(t.getUTCHours(), e, 2);
}
function bc(t, e) {
  return q(t.getUTCHours() % 12 || 12, e, 2);
}
function _c(t, e) {
  return q(1 + wn.count(St(t), t), e, 3);
}
function Gr(t, e) {
  return q(t.getUTCMilliseconds(), e, 3);
}
function kc(t, e) {
  return Gr(t, e) + "000";
}
function Mc(t, e) {
  return q(t.getUTCMonth() + 1, e, 2);
}
function Cc(t, e) {
  return q(t.getUTCMinutes(), e, 2);
}
function Tc(t, e) {
  return q(t.getUTCSeconds(), e, 2);
}
function Sc(t) {
  var e = t.getUTCDay();
  return e === 0 ? 7 : e;
}
function Ac(t, e) {
  return q(Br.count(St(t) - 1, t), e, 2);
}
function Zr(t) {
  var e = t.getUTCDay();
  return e >= 4 || e === 0 ? Rt(t) : Rt.ceil(t);
}
function Ic(t, e) {
  return t = Zr(t), q(Rt.count(St(t), t) + (St(t).getUTCDay() === 4), e, 2);
}
function Nc(t) {
  return t.getUTCDay();
}
function Dc(t, e) {
  return q(Me.count(St(t) - 1, t), e, 2);
}
function $c(t, e) {
  return q(t.getUTCFullYear() % 100, e, 2);
}
function Pc(t, e) {
  return t = Zr(t), q(t.getUTCFullYear() % 100, e, 2);
}
function Uc(t, e) {
  return q(t.getUTCFullYear() % 1e4, e, 4);
}
function Ec(t, e) {
  var n = t.getUTCDay();
  return t = n >= 4 || n === 0 ? Rt(t) : Rt.ceil(t), q(t.getUTCFullYear() % 1e4, e, 4);
}
function Fc() {
  return "+0000";
}
function ir() {
  return "%";
}
function or(t) {
  return +t;
}
function ar(t) {
  return Math.floor(+t / 1e3);
}
var Nt, bn;
zc({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function zc(t) {
  return Nt = zu(t), bn = Nt.format, Nt.parse, Nt.utcFormat, Nt.utcParse, Nt;
}
function Rc(t) {
  return new Date(t);
}
function Lc(t) {
  return t instanceof Date ? +t : +/* @__PURE__ */ new Date(+t);
}
function jr(t, e, n, r, i, o, a, s, c, u) {
  var l = Wr(), h = l.invert, f = l.domain, g = u(".%L"), p = u(":%S"), m = u("%I:%M"), x = u("%I %p"), v = u("%a %d"), A = u("%b %d"), T = u("%B"), D = u("%Y");
  function U(w) {
    return (c(w) < w ? g : s(w) < w ? p : a(w) < w ? m : o(w) < w ? x : r(w) < w ? i(w) < w ? v : A : n(w) < w ? T : D)(w);
  }
  return l.invert = function(w) {
    return new Date(h(w));
  }, l.domain = function(w) {
    return arguments.length ? f(Array.from(w, Lc)) : f().map(Rc);
  }, l.ticks = function(w) {
    var I = f();
    return t(I[0], I[I.length - 1], w ?? 10);
  }, l.tickFormat = function(w, I) {
    return I == null ? U : u(I);
  }, l.nice = function(w) {
    var I = f();
    return (!w || typeof w.range != "function") && (w = e(I[0], I[I.length - 1], w ?? 10)), w ? f(bu(I, w)) : l;
  }, l.copy = function() {
    return Or(l, jr(t, e, n, r, i, o, a, s, c, u));
  }, l;
}
function Le() {
  return Hr.apply(jr(Eu, Fu, xt, vn, Ae, Jt, xn, yn, $t, bn).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
const ie = (t) => () => t;
function qc(t, {
  sourceEvent: e,
  target: n,
  transform: r,
  dispatch: i
}) {
  Object.defineProperties(this, {
    type: { value: t, enumerable: !0, configurable: !0 },
    sourceEvent: { value: e, enumerable: !0, configurable: !0 },
    target: { value: n, enumerable: !0, configurable: !0 },
    transform: { value: r, enumerable: !0, configurable: !0 },
    _: { value: i }
  });
}
function gt(t, e, n) {
  this.k = t, this.x = e, this.y = n;
}
gt.prototype = {
  constructor: gt,
  scale: function(t) {
    return t === 1 ? this : new gt(this.k * t, this.x, this.y);
  },
  translate: function(t, e) {
    return t === 0 & e === 0 ? this : new gt(this.k, this.x + this.k * t, this.y + this.k * e);
  },
  apply: function(t) {
    return [t[0] * this.k + this.x, t[1] * this.k + this.y];
  },
  applyX: function(t) {
    return t * this.k + this.x;
  },
  applyY: function(t) {
    return t * this.k + this.y;
  },
  invert: function(t) {
    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
  },
  invertX: function(t) {
    return (t - this.x) / this.k;
  },
  invertY: function(t) {
    return (t - this.y) / this.k;
  },
  rescaleX: function(t) {
    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
  },
  rescaleY: function(t) {
    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
var Vt = new gt(1, 0, 0);
gt.prototype;
function qe(t) {
  t.stopImmediatePropagation();
}
function Wt(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function Yc(t) {
  return (!t.ctrlKey || t.type === "wheel") && !t.button;
}
function Hc() {
  var t = this;
  return t instanceof SVGElement ? (t = t.ownerSVGElement || t, t.hasAttribute("viewBox") ? (t = t.viewBox.baseVal, [[t.x, t.y], [t.x + t.width, t.y + t.height]]) : [[0, 0], [t.width.baseVal.value, t.height.baseVal.value]]) : [[0, 0], [t.clientWidth, t.clientHeight]];
}
function sr() {
  return this.__zoom || Vt;
}
function Oc(t) {
  return -t.deltaY * (t.deltaMode === 1 ? 0.05 : t.deltaMode ? 1 : 2e-3) * (t.ctrlKey ? 10 : 1);
}
function Wc() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Bc(t, e, n) {
  var r = t.invertX(e[0][0]) - n[0][0], i = t.invertX(e[1][0]) - n[1][0], o = t.invertY(e[0][1]) - n[0][1], a = t.invertY(e[1][1]) - n[1][1];
  return t.translate(
    i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i),
    a > o ? (o + a) / 2 : Math.min(0, o) || Math.max(0, a)
  );
}
function Xc() {
  var t = Yc, e = Hc, n = Bc, r = Oc, i = Wc, o = [0, 1 / 0], a = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], s = 250, c = Ra, u = an("start", "zoom", "end"), l, h, f, g = 500, p = 150, m = 0, x = 10;
  function v(d) {
    d.property("__zoom", sr).on("wheel.zoom", z, { passive: !1 }).on("mousedown.zoom", X).on("dblclick.zoom", V).filter(i).on("touchstart.zoom", Z).on("touchmove.zoom", $).on("touchend.zoom touchcancel.zoom", H).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  v.transform = function(d, _, y, C) {
    var N = d.selection ? d.selection() : d;
    N.property("__zoom", sr), d !== N ? U(d, _, y, C) : N.interrupt().each(function() {
      w(this, arguments).event(C).start().zoom(null, typeof _ == "function" ? _.apply(this, arguments) : _).end();
    });
  }, v.scaleBy = function(d, _, y, C) {
    v.scaleTo(d, function() {
      var N = this.__zoom.k, S = typeof _ == "function" ? _.apply(this, arguments) : _;
      return N * S;
    }, y, C);
  }, v.scaleTo = function(d, _, y, C) {
    v.transform(d, function() {
      var N = e.apply(this, arguments), S = this.__zoom, P = y == null ? D(N) : typeof y == "function" ? y.apply(this, arguments) : y, R = S.invert(P), Y = typeof _ == "function" ? _.apply(this, arguments) : _;
      return n(T(A(S, Y), P, R), N, a);
    }, y, C);
  }, v.translateBy = function(d, _, y, C) {
    v.transform(d, function() {
      return n(this.__zoom.translate(
        typeof _ == "function" ? _.apply(this, arguments) : _,
        typeof y == "function" ? y.apply(this, arguments) : y
      ), e.apply(this, arguments), a);
    }, null, C);
  }, v.translateTo = function(d, _, y, C, N) {
    v.transform(d, function() {
      var S = e.apply(this, arguments), P = this.__zoom, R = C == null ? D(S) : typeof C == "function" ? C.apply(this, arguments) : C;
      return n(Vt.translate(R[0], R[1]).scale(P.k).translate(
        typeof _ == "function" ? -_.apply(this, arguments) : -_,
        typeof y == "function" ? -y.apply(this, arguments) : -y
      ), S, a);
    }, C, N);
  };
  function A(d, _) {
    return _ = Math.max(o[0], Math.min(o[1], _)), _ === d.k ? d : new gt(_, d.x, d.y);
  }
  function T(d, _, y) {
    var C = _[0] - y[0] * d.k, N = _[1] - y[1] * d.k;
    return C === d.x && N === d.y ? d : new gt(d.k, C, N);
  }
  function D(d) {
    return [(+d[0][0] + +d[1][0]) / 2, (+d[0][1] + +d[1][1]) / 2];
  }
  function U(d, _, y, C) {
    d.on("start.zoom", function() {
      w(this, arguments).event(C).start();
    }).on("interrupt.zoom end.zoom", function() {
      w(this, arguments).event(C).end();
    }).tween("zoom", function() {
      var N = this, S = arguments, P = w(N, S).event(C), R = e.apply(N, S), Y = y == null ? D(R) : typeof y == "function" ? y.apply(N, S) : y, M = Math.max(R[1][0] - R[0][0], R[1][1] - R[0][1]), E = N.__zoom, W = typeof _ == "function" ? _.apply(N, S) : _, B = c(E.invert(Y).concat(M / E.k), W.invert(Y).concat(M / W.k));
      return function(K) {
        if (K === 1) K = W;
        else {
          var ot = B(K), k = M / ot[2];
          K = new gt(k, Y[0] - ot[0] * k, Y[1] - ot[1] * k);
        }
        P.zoom(null, K);
      };
    });
  }
  function w(d, _, y) {
    return !y && d.__zooming || new I(d, _);
  }
  function I(d, _) {
    this.that = d, this.args = _, this.active = 0, this.sourceEvent = null, this.extent = e.apply(d, _), this.taps = 0;
  }
  I.prototype = {
    event: function(d) {
      return d && (this.sourceEvent = d), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(d, _) {
      return this.mouse && d !== "mouse" && (this.mouse[1] = _.invert(this.mouse[0])), this.touch0 && d !== "touch" && (this.touch0[1] = _.invert(this.touch0[0])), this.touch1 && d !== "touch" && (this.touch1[1] = _.invert(this.touch1[0])), this.that.__zoom = _, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(d) {
      var _ = ct(this.that).datum();
      u.call(
        d,
        this.that,
        new qc(d, {
          sourceEvent: this.sourceEvent,
          target: v,
          transform: this.that.__zoom,
          dispatch: u
        }),
        _
      );
    }
  };
  function z(d, ..._) {
    if (!t.apply(this, arguments)) return;
    var y = w(this, _).event(d), C = this.__zoom, N = Math.max(o[0], Math.min(o[1], C.k * Math.pow(2, r.apply(this, arguments)))), S = vt(d);
    if (y.wheel)
      (y.mouse[0][0] !== S[0] || y.mouse[0][1] !== S[1]) && (y.mouse[1] = C.invert(y.mouse[0] = S)), clearTimeout(y.wheel);
    else {
      if (C.k === N) return;
      y.mouse = [S, C.invert(S)], ce(this), y.start();
    }
    Wt(d), y.wheel = setTimeout(P, p), y.zoom("mouse", n(T(A(C, N), y.mouse[0], y.mouse[1]), y.extent, a));
    function P() {
      y.wheel = null, y.end();
    }
  }
  function X(d, ..._) {
    if (f || !t.apply(this, arguments)) return;
    var y = d.currentTarget, C = w(this, _, !0).event(d), N = ct(d.view).on("mousemove.zoom", Y, !0).on("mouseup.zoom", M, !0), S = vt(d, y), P = d.clientX, R = d.clientY;
    aa(d.view), qe(d), C.mouse = [S, this.__zoom.invert(S)], ce(this), C.start();
    function Y(E) {
      if (Wt(E), !C.moved) {
        var W = E.clientX - P, B = E.clientY - R;
        C.moved = W * W + B * B > m;
      }
      C.event(E).zoom("mouse", n(T(C.that.__zoom, C.mouse[0] = vt(E, y), C.mouse[1]), C.extent, a));
    }
    function M(E) {
      N.on("mousemove.zoom mouseup.zoom", null), sa(E.view, C.moved), Wt(E), C.event(E).end();
    }
  }
  function V(d, ..._) {
    if (t.apply(this, arguments)) {
      var y = this.__zoom, C = vt(d.changedTouches ? d.changedTouches[0] : d, this), N = y.invert(C), S = y.k * (d.shiftKey ? 0.5 : 2), P = n(T(A(y, S), C, N), e.apply(this, _), a);
      Wt(d), s > 0 ? ct(this).transition().duration(s).call(U, P, C, d) : ct(this).call(v.transform, P, C, d);
    }
  }
  function Z(d, ..._) {
    if (t.apply(this, arguments)) {
      var y = d.touches, C = y.length, N = w(this, _, d.changedTouches.length === C).event(d), S, P, R, Y;
      for (qe(d), P = 0; P < C; ++P)
        R = y[P], Y = vt(R, this), Y = [Y, this.__zoom.invert(Y), R.identifier], N.touch0 ? !N.touch1 && N.touch0[2] !== Y[2] && (N.touch1 = Y, N.taps = 0) : (N.touch0 = Y, S = !0, N.taps = 1 + !!l);
      l && (l = clearTimeout(l)), S && (N.taps < 2 && (h = Y[0], l = setTimeout(function() {
        l = null;
      }, g)), ce(this), N.start());
    }
  }
  function $(d, ..._) {
    if (this.__zooming) {
      var y = w(this, _).event(d), C = d.changedTouches, N = C.length, S, P, R, Y;
      for (Wt(d), S = 0; S < N; ++S)
        P = C[S], R = vt(P, this), y.touch0 && y.touch0[2] === P.identifier ? y.touch0[0] = R : y.touch1 && y.touch1[2] === P.identifier && (y.touch1[0] = R);
      if (P = y.that.__zoom, y.touch1) {
        var M = y.touch0[0], E = y.touch0[1], W = y.touch1[0], B = y.touch1[1], K = (K = W[0] - M[0]) * K + (K = W[1] - M[1]) * K, ot = (ot = B[0] - E[0]) * ot + (ot = B[1] - E[1]) * ot;
        P = A(P, Math.sqrt(K / ot)), R = [(M[0] + W[0]) / 2, (M[1] + W[1]) / 2], Y = [(E[0] + B[0]) / 2, (E[1] + B[1]) / 2];
      } else if (y.touch0) R = y.touch0[0], Y = y.touch0[1];
      else return;
      y.zoom("touch", n(T(P, R, Y), y.extent, a));
    }
  }
  function H(d, ..._) {
    if (this.__zooming) {
      var y = w(this, _).event(d), C = d.changedTouches, N = C.length, S, P;
      for (qe(d), f && clearTimeout(f), f = setTimeout(function() {
        f = null;
      }, g), S = 0; S < N; ++S)
        P = C[S], y.touch0 && y.touch0[2] === P.identifier ? delete y.touch0 : y.touch1 && y.touch1[2] === P.identifier && delete y.touch1;
      if (y.touch1 && !y.touch0 && (y.touch0 = y.touch1, delete y.touch1), y.touch0) y.touch0[1] = this.__zoom.invert(y.touch0[0]);
      else if (y.end(), y.taps === 2 && (P = vt(P, this), Math.hypot(h[0] - P[0], h[1] - P[1]) < x)) {
        var R = ct(this).on("dblclick.zoom");
        R && R.apply(this, arguments);
      }
    }
  }
  return v.wheelDelta = function(d) {
    return arguments.length ? (r = typeof d == "function" ? d : ie(+d), v) : r;
  }, v.filter = function(d) {
    return arguments.length ? (t = typeof d == "function" ? d : ie(!!d), v) : t;
  }, v.touchable = function(d) {
    return arguments.length ? (i = typeof d == "function" ? d : ie(!!d), v) : i;
  }, v.extent = function(d) {
    return arguments.length ? (e = typeof d == "function" ? d : ie([[+d[0][0], +d[0][1]], [+d[1][0], +d[1][1]]]), v) : e;
  }, v.scaleExtent = function(d) {
    return arguments.length ? (o[0] = +d[0], o[1] = +d[1], v) : [o[0], o[1]];
  }, v.translateExtent = function(d) {
    return arguments.length ? (a[0][0] = +d[0][0], a[1][0] = +d[1][0], a[0][1] = +d[0][1], a[1][1] = +d[1][1], v) : [[a[0][0], a[0][1]], [a[1][0], a[1][1]]];
  }, v.constrain = function(d) {
    return arguments.length ? (n = d, v) : n;
  }, v.duration = function(d) {
    return arguments.length ? (s = +d, v) : s;
  }, v.interpolate = function(d) {
    return arguments.length ? (c = d, v) : c;
  }, v.on = function() {
    var d = u.on.apply(u, arguments);
    return d === u ? v : d;
  }, v.clickDistance = function(d) {
    return arguments.length ? (m = (d = +d) * d, v) : Math.sqrt(m);
  }, v.tapDistance = function(d) {
    return arguments.length ? (x = +d, v) : x;
  }, v;
}
const Vc = /* @__PURE__ */ new Set(["Cea", "Pre", "SubPar", "SubComp", "Imp", "Ren", "Oth"]), Gc = { Cea: "Ceasefire / related", Pre: "Pre-negotiation / process", SubPar: "Partial framework-substantive", SubComp: "Comprehensive framework-substantive", Imp: "Implementation / renegotiation / renewal", Ren: "Implementation / renegotiation / renewal", Oth: "Other" };
function ur(t) {
  return Gc[t] || t;
}
function rn(t) {
  const e = /^(\d{4})-(\d{2})-(\d{2})$/.exec(t);
  return e ? `${e[3]}/${e[2]}/${e[1]}` : t;
}
function Kr(t) {
  if (!Number.isSafeInteger(t.id) || !t.name || !/^\d{4}-\d{2}-\d{2}$/.test(t.dateSigned) || !Vc.has(t.stage) || !Number.isSafeInteger(t.process?.id) || !t.process.name) throw new Error("Timeline snapshot contains an invalid agreement.");
  const e = t.description?.trim();
  return e ? { ...t, description: e } : { ...t };
}
function Zc(t) {
  const e = t;
  if (!e || e.schemaVersion !== 1 || !Array.isArray(e.agreements)) throw new Error("Unsupported timeline data snapshot.");
  return e.agreements.map(Kr);
}
const jc = { Inter: "Interstate", Intra: "Intrastate", IntraLocal: "Intrastate/local conflict", InterIntra: "Interstate/intrastate" }, _t = (t) => t?.trim() || void 0;
function Kc(t) {
  return eu(t).map((e) => {
    const n = (e.Reg || "").split("/").map((i) => i.trim()).filter(Boolean), r = _t(e.Agtp);
    return Kr({ id: Number(e.AgtId), name: e.Agt || "", dateSigned: e.Dat || "", stage: e.Stage || "", process: { id: Number(e.PP), name: e.PPName || "" }, countries: (e.Con || "").split("/").filter(Boolean), ...n.length ? { regions: n } : {}, ..._t(e.Part) ? { parties: _t(e.Part) } : {}, ..._t(e.ThrdPart) ? { thirdParties: _t(e.ThrdPart) } : {}, ...r ? { agreementType: jc[r] || r } : {}, ..._t(e.Contp) ? { conflictType: _t(e.Contp) } : {}, description: e.description });
  });
}
async function Qc(t, e) {
  try {
    const n = await fetch(t);
    if (!n.ok) throw new Error(`Timeline snapshot request failed (${n.status}).`);
    return Zc(await n.json());
  } catch (n) {
    if (!e) throw n;
    const r = await fetch(e);
    if (!r.ok) throw new Error("Timeline data could not be loaded.");
    return Kc(await r.text());
  }
}
const Ye = 12, cr = 40;
function lr(t, e, n, r) {
  const i = /* @__PURE__ */ new Map(), o = [0, 0, 0, 0, 0];
  for (let h = 1; h <= 5; h++) {
    const f = [], g = t.filter((p) => n(p) === h).sort((p, m) => e(p) - e(m) || p.id - m.id);
    for (const p of g) {
      const m = e(p);
      let x = f.findIndex((v) => m - v >= Ye);
      x < 0 && (x = f.length), f[x] = m, i.set(p.id, x);
    }
    o[h - 1] = Math.max(0, f.length - 1);
  }
  const a = o.map((h) => h * Ye), s = 50 + a.reduce((h, f) => h + f, 0) + 280 + cr, c = Math.max(r, s), u = (c - 50 - cr - a.reduce((h, f) => h + f, 0)) / 4, l = [50 + a[0]];
  for (let h = 1; h < 5; h++) l.push(l[h - 1] + u + a[h]);
  return { height: c, rows: l, y: (h) => l[n(h) - 1] - (i.get(h.id) || 0) * Ye };
}
const Qr = [
  { key: "Cea", name: ["Ceasefire", "related"], position: 5 },
  { key: "Pre", name: ["Pre-negotiation", "process"], position: 4 },
  { key: "SubPar", name: ["Partial", "Framework-", "substantive"], position: 3 },
  { key: "SubComp", name: ["Comprehensive", "Framework-", "substantive"], position: 2 },
  { key: "Imp", name: ["Implementation", "Renegotiation /", "Renewal"], position: 1 },
  { key: "Ren", name: [], position: 1 }
], Jc = /* @__PURE__ */ new Date("1990-01-01T00:00:00Z"), hr = /* @__PURE__ */ new Date("2025-12-31T00:00:00Z"), tl = 2 * 365.25 * 24 * 60 * 60 * 1e3;
let el = 0;
const wt = (t) => Qr.find((e) => e.key === t), He = [["1990-01-01", "Cea"], ["1997-01-01", "Pre"], ["2004-01-01", "SubPar"], ["2011-01-01", "SubComp"], ["2018-01-01", "Ren"], ["2025-12-31", "Ren"]].map(([t, e]) => ({ id: 0, name: "ideal", dateSigned: t, stage: e, process: { id: 0, name: "ideal" }, countries: [] }));
function nl(t) {
  if (t === 0) return "first agreement";
  if (t < 60) return `${t} day${t === 1 ? "" : "s"} since first agreement`;
  const e = Math.max(1, Math.round(t / 30.4375)), n = Math.floor(e / 12), r = e % 12;
  return n ? `${n} yr${r ? ` ${r} mo` : ""} since first agreement` : `${e} mo since first agreement`;
}
class rl {
  constructor(e, n, r, i, o, a = null) {
    this.chart = e, this.tooltip = n, this.title = r, this.picker = i, this.callbacks = o, this.lockedProcessId = a;
  }
  agreements = [];
  processes = /* @__PURE__ */ new Map();
  processId = null;
  agreementId = null;
  svg;
  paths;
  circles;
  axis;
  idealGroup;
  crosshair;
  crosshairLabel;
  zoom;
  autoFit = !1;
  updateLayout;
  x = Le();
  baseX = Le();
  y = le();
  idealVisible = !0;
  plotWidth = 0;
  setData(e) {
    this.agreements = e.filter((n) => n.stage !== "Oth").sort((n, r) => n.dateSigned.localeCompare(r.dateSigned)), this.processes = ci(this.agreements, (n) => n.process.id), this.picker.replaceChildren(new Option("", ""), ...this.processOptions("").map((n) => new Option(n.name, String(n.id)))), this.render();
  }
  processOptions(e) {
    const n = e.trim().toLocaleLowerCase();
    return [...this.processes.values()].map((r) => r[0].process).filter((r) => r.name.toLocaleLowerCase().includes(n)).sort((r, i) => r.name.localeCompare(i.name));
  }
  resize() {
    this.agreements.length && this.render();
  }
  select(e, n = !1, r) {
    const i = e.agreementId && this.agreements.find((s) => s.id === e.agreementId) || null, o = this.lockedProcessId ?? i?.process.id ?? e.processId, a = i?.process.id === o ? i : null;
    o && this.processes.has(o) ? this.enter(o, a, n, r) : this.exit(n);
  }
  reset() {
    this.exit(!0), this.svg && this.zoom && this.svg.transition().duration(500).call(this.zoom.transform, Vt), this.showIdeal(!0);
  }
  setAutoFit(e) {
    this.autoFit = e, this.svg?.interrupt();
    const n = this.processId ? this.processes.get(this.processId) : void 0;
    e && n && this.fitProcess(n);
  }
  zoomBy(e) {
    this.svg && this.zoom && this.svg.transition().duration(250).call(this.zoom.scaleBy, e);
  }
  showIdealIntroduction() {
    this.processId || this.showIdeal(!0);
  }
  revealMessyOverview() {
    this.processId || this.showIdeal(!1);
  }
  selectedAgreements() {
    return this.processId ? [...this.processes.get(this.processId) || []] : [];
  }
  selectedAgreementAnchor() {
    return this.circles?.filter((e) => e.id === this.agreementId).node()?.getBoundingClientRect();
  }
  render() {
    const e = Math.max(this.chart.clientWidth, 320), n = Math.max(this.chart.clientHeight, 420), r = 150;
    this.chart.replaceChildren(), this.svg = ct(this.chart).append("svg").attr("viewBox", `0 0 ${e} ${n}`).attr("preserveAspectRatio", "xMidYMid meet").attr("role", "group").attr("aria-label", "Peace process timeline"), this.y = le().domain([1, 2, 3, 4, 5]).range(lr([], () => 0, () => 1, n).rows), this.plotWidth = e - r - 60, this.baseX = Le().domain([Jc, hr]).range([0, this.plotWidth]), this.x = this.baseX.copy(), this.axis = this.svg.append("g").attr("class", "axis axis--x").attr("transform", "translate(20,20)");
    const i = () => {
      const [p, m] = this.x.domain(), x = (m.getTime() - p.getTime()) / 864e5, v = Math.max(2, Math.floor(this.plotWidth / 115)), A = x / v, T = A <= 45 ? "%d %b %Y" : A <= 300 ? "%b %Y" : "%Y";
      this.axis.call(_i(this.x).ticks(v).tickFormat((w) => bn(T)(w)));
      let D = -1 / 0;
      const U = e - r - 26;
      this.axis.selectAll(".tick").each((w, I, z) => {
        const X = z[I].querySelector("text"), V = X?.getComputedTextLength?.() || (X?.textContent?.length || 0) * 7, Z = this.x(w), $ = Z - V / 2, H = Z + V / 2, d = $ >= D + 8 && H <= U;
        ct(z[I]).attr("visibility", d ? null : "hidden"), d && (D = H);
      });
    };
    i();
    const o = this.svg.append("g").selectAll("text").data(Qr).join("text").attr("x", e - r).attr("y", (p) => this.y(p.position) - 20).attr("font-size", "11pt");
    o.selectAll("tspan").data((p) => p.name).join("tspan").text((p) => p).attr("x", e - r).attr("dy", "10pt");
    const a = `timeline-clip-${++el}`;
    this.svg.append("clipPath").attr("id", a).append("rect").attr("width", this.plotWidth + 10).attr("height", n);
    const s = this.svg.append("g").attr("class", "processes").attr("clip-path", `url(#${a})`).attr("transform", "translate(5,0)"), c = (p) => ct(p.parentNode).datum()[1], u = (p, m, x) => {
      const v = x[m + 1];
      if (!v) return null;
      const A = { x: Math.round(this.x(new Date(p.dateSigned))), y: this.y(wt(p.stage).position) }, T = { x: Math.round(this.x(new Date(v.dateSigned))), y: this.y(wt(v.stage).position) }, D = (T.x - A.x) / 1.5;
      return `M ${A.x} ${A.y} C ${A.x + D} ${A.y}, ${T.x - D} ${T.y}, ${T.x} ${T.y}`;
    }, l = le().domain([-350, 0, 350]).range(["#0075FF", "#555555", "#FF3B00"]), h = s.selectAll("g.process").data([...this.processes]).join("g").attr("class", ([p]) => `process PP-${p}`);
    this.paths = h.selectAll("path").data(([, p]) => p).join("path").attr("fill", "none").attr("stroke-linecap", "round").attr("stroke-width", 1).attr("stroke-opacity", 0.05).attr("d", (p, m, x) => u(p, m, c(x[m]))).attr("stroke", (p, m, x) => {
      const v = c(x[m])[m + 1];
      return v ? l(this.y(wt(v.stage).position) - this.y(wt(p.stage).position)) : "transparent";
    });
    const f = s.append("g").attr("class", "marker-connectors").attr("aria-hidden", "true").attr("pointer-events", "none"), g = this.agreements;
    this.circles = s.append("g").selectAll("circle").data(g).join("circle").attr("class", (p) => `PP-${p.process.id}`).attr("cx", (p) => this.x(new Date(p.dateSigned))).attr("cy", (p) => this.y(wt(p.stage).position)).attr("r", 5).attr("stroke", "black").attr("fill", "gray").attr("fill-opacity", 0.5).attr("opacity", 0).attr("tabindex", -1).attr("role", "button").attr("aria-label", (p) => `${p.name}, signed ${p.dateSigned}`).on("mouseenter", (p, m) => this.showTooltip(p, m)).on("mouseleave", () => this.hideTooltip()).on("click", (p, m) => {
      p.stopPropagation(), this.select({ processId: m.process.id, agreementId: m.id }, !0, p.currentTarget.getBoundingClientRect());
    }).on("keydown", (p, m) => {
      (p.key === "Enter" || p.key === " ") && (p.preventDefault(), this.select({ processId: m.process.id, agreementId: m.id }, !0, p.currentTarget.getBoundingClientRect()));
    }), this.paths.on("mousemove", (p, m) => this.highlight(m.process.id)).on("mouseleave", () => this.highlight(null)).on("click", (p, m) => {
      p.stopPropagation(), this.processId ? this.dismissSelection() : this.select({ processId: m.process.id, agreementId: null }, !0);
    }), this.idealGroup = s.append("g").attr("class", "ideal"), this.idealGroup.selectAll("path").data(He).join("path").attr("fill", "none").attr("stroke-width", 2).attr("stroke", "#0075FF").attr("d", (p, m) => u(p, m, He)), this.idealGroup.append("text").attr("x", this.x(/* @__PURE__ */ new Date("2003-06-01"))).attr("y", this.y(3.2)).attr("fill", "#0075FF").selectAll("tspan").data(["If peace negotiations went smoothly from one stage to the next,", "they would be represented by this blue line going steadily up.", "CLICK TO START"]).join("tspan").text((p) => p).attr("x", this.x(/* @__PURE__ */ new Date("2003-06-01"))).attr("dy", "12pt").attr("font-size", "12pt").style("font-weight", (p, m) => m === 2 ? "bold" : "normal"), this.idealGroup.on("click", () => this.showIdeal(!1)), this.crosshair = this.svg.append("line").attr("class", "timeline-crosshair").attr("y1", 20).attr("y2", n).attr("visibility", "hidden"), this.crosshairLabel = this.svg.append("text").attr("class", "timeline-crosshair-label").attr("y", 43).attr("visibility", "hidden"), this.svg.on("mousemove.timeline-crosshair", (p) => {
      const m = this.processId ? this.processes.get(this.processId) : void 0;
      if (!m?.length) {
        this.hideCrosshair();
        return;
      }
      const [x] = vt(p, this.svg.node()), v = Math.max(5, Math.min(this.plotWidth + 5, x)), A = this.x.invert(v - 5), T = new Date(m[0].dateSigned), D = new Date(m[m.length - 1].dateSigned);
      if (A < T || A > D) {
        this.hideCrosshair();
        return;
      }
      const U = Math.max(0, Math.round((A.getTime() - T.getTime()) / 864e5)), w = `${rn(A.toISOString().slice(0, 10))} · ${nl(U)}`, I = v > e * 0.68;
      this.crosshair.attr("x1", v).attr("x2", v).attr("visibility", "visible"), this.crosshairLabel.attr("x", v + (I ? -8 : 8)).attr("text-anchor", I ? "end" : "start").text(w).attr("visibility", "visible");
    }).on("mouseleave.timeline-crosshair", () => this.hideCrosshair()).on("click.dismiss-selection", () => this.dismissSelection()), this.updateLayout = () => {
      const p = this.processId ? this.processes.get(this.processId) || [] : [], m = lr(p, (x) => this.x(new Date(x.dateSigned)), (x) => wt(x.stage).position, n);
      this.y.range(m.rows), f.selectAll("line").data(p.filter((x) => m.y(x) < this.y(wt(x.stage).position)), (x) => x.id).join("line").attr("x1", (x) => this.x(new Date(x.dateSigned))).attr("x2", (x) => this.x(new Date(x.dateSigned))).attr("y1", (x) => m.y(x)).attr("y2", (x) => this.y(wt(x.stage).position)).attr("stroke", "#777").attr("stroke-opacity", 0.5).attr("stroke-width", 1), this.svg.attr("viewBox", `0 0 ${e} ${m.height}`).style("height", `${m.height}px`), this.svg.select(`#${a} rect`).attr("height", m.height), o.attr("y", (x) => this.y(x.position) - 20), this.paths.attr("d", (x, v, A) => u(x, v, c(A[v]))), this.circles.attr("cx", (x) => this.x(new Date(x.dateSigned))).attr("cy", (x) => m.y(x)), this.idealGroup.selectAll("path").attr("d", (x, v) => u(x, v, He)), this.idealGroup.select("text").attr("y", this.y(3.2)), this.crosshair.attr("y2", m.height);
    }, this.zoom = Xc().scaleExtent([1, 8]).translateExtent([[0, 0], [this.plotWidth, n]]).extent([[0, 0], [this.plotWidth, n]]).on("zoom", (p) => {
      this.x = p.transform.rescaleX(this.baseX), i(), this.updateLayout(), this.hideCrosshair();
    }), this.svg.call(this.zoom), this.processId ? this.enter(this.processId, this.agreements.find((p) => p.id === this.agreementId) || null, !1) : (this.updateLayout(), this.showIdeal(this.idealVisible));
  }
  showIdeal(e) {
    this.idealVisible = e, this.idealGroup?.style("visibility", e ? "visible" : "hidden").style("opacity", e ? 1 : 0), this.paths?.attr("pointer-events", e ? "none" : "all").attr("stroke-opacity", e ? 0.05 : 0.9);
  }
  enter(e, n, r, i) {
    const o = this.processes.get(e);
    o && (this.processId = e, this.agreementId = n?.id || null, this.showIdeal(!1), this.paths?.attr("stroke-opacity", 0.05).attr("stroke-width", 1).filter((a) => a.process.id === e).attr("stroke-opacity", 1).attr("stroke-width", 3), this.circles?.attr("opacity", (a) => a.process.id === e ? 0.7 : 0).attr("pointer-events", (a) => a.process.id === e ? "all" : "none").attr("tabindex", (a) => a.process.id === e ? 0 : -1).classed("agreement-selected", (a) => a.id === n?.id).attr("r", (a) => a.id === n?.id ? 8 : 5), this.updateLayout?.(), this.title.textContent = o[0].process.name, this.picker.value = String(e), this.autoFit && this.fitProcess(o), this.callbacks.onProcess(o[0], r), this.callbacks.onAgreement(n, r, i));
  }
  fitProcess(e) {
    if (!this.svg || !this.zoom || e.length < 2) return;
    const n = new Date(e[0].dateSigned), r = new Date(e[e.length - 1].dateSigned), i = this.baseX(n), o = this.baseX(r);
    if (o <= i) return;
    const a = Math.min(60, this.plotWidth / 5), s = hr.getTime() - r.getTime() <= tl;
    let c, u;
    if (s)
      c = Math.max(1, Math.min(8, (this.plotWidth - a) / (this.plotWidth - i))), u = this.plotWidth - this.plotWidth / c;
    else {
      c = Math.max(1, Math.min(8, (this.plotWidth - 2 * a) / (o - i)));
      const l = this.plotWidth / c;
      u = Math.max(0, Math.min(i - a / c, this.plotWidth - l));
    }
    this.svg.transition().duration(450).call(this.zoom.transform, Vt.scale(c).translate(-u, 0));
  }
  dismissSelection() {
    this.agreementId && this.processId ? this.select({ processId: this.processId, agreementId: null }, !0) : this.clearProcess();
  }
  clearProcess() {
    this.processId && (this.exit(!0), this.svg && this.zoom && this.svg.transition().duration(500).call(this.zoom.transform, Vt), this.showIdeal(!1));
  }
  exit(e) {
    const n = this.processId !== null || this.agreementId !== null;
    this.processId = null, this.agreementId = null, this.updateLayout?.(), this.hideCrosshair(), this.showIdeal(!0), this.circles?.attr("opacity", 0).attr("pointer-events", "none").attr("tabindex", -1).classed("agreement-selected", !1), this.paths?.attr("stroke-opacity", 0.9).attr("stroke-width", 1), this.title.textContent = "Back and Forth in Peace Negotiations", this.picker.value = "", (n || e) && (this.callbacks.onProcess(null, e), this.callbacks.onAgreement(null, e));
  }
  hideCrosshair() {
    this.crosshair?.attr("visibility", "hidden"), this.crosshairLabel?.attr("visibility", "hidden");
  }
  highlight(e) {
    this.processId || !this.paths || (this.paths.attr("stroke-opacity", e ? 0.05 : 0.9).attr("stroke-width", 1), e ? (this.paths.filter((n) => n.process.id === e).attr("stroke-opacity", 1).attr("stroke-width", 2), this.title.textContent = this.processes.get(e)?.[0].process.name || "") : this.title.textContent = "Back and Forth in Peace Negotiations");
  }
  showTooltip(e, n) {
    this.tooltip.replaceChildren(Object.assign(document.createElement("strong"), { textContent: `${rn(n.dateSigned)}: ` }), document.createTextNode(n.name)), this.tooltip.hidden = !1, this.tooltip.style.left = `${e.clientX + 15}px`, this.tooltip.style.top = `${Math.max(10, e.clientY - this.tooltip.offsetHeight - 10)}px`;
  }
  hideTooltip() {
    this.tooltip.hidden = !0;
  }
}
let Oe;
function il(t) {
  return new Promise((e, n) => {
    const r = new FileReader();
    r.onload = () => e(String(r.result)), r.onerror = () => n(r.error), r.readAsDataURL(t);
  });
}
function ol() {
  return Oe || (Oe = fetch("data/pax-logo.png").then((t) => {
    if (!t.ok) throw new Error("PA-X logo could not be loaded.");
    return t.blob();
  }).then(il).catch(() => "")), Oe;
}
function al(t, e, n = 18, r = 10, i = 48) {
  const o = document.createElementNS(t, "image");
  return o.setAttribute("href", e), o.setAttribute("x", String(n)), o.setAttribute("y", String(r)), o.setAttribute("width", String(Math.round(i * 1.14))), o.setAttribute("height", String(i)), o.setAttribute("preserveAspectRatio", "xMidYMid meet"), o;
}
function sl(t) {
  let e = t == null ? "" : String(t);
  return /^[=+\-@]/.test(e) && (e = `'${e}`), `"${e.replaceAll('"', '""')}"`;
}
function fr(t, e) {
  const n = document.createElement("a");
  n.href = URL.createObjectURL(e), n.download = t, n.click(), window.setTimeout(() => URL.revokeObjectURL(n.href), 1e3);
}
async function ul(t) {
  try {
    if (!navigator.clipboard?.writeText) throw new Error("Clipboard API unavailable");
    return await navigator.clipboard.writeText(t), !0;
  } catch {
    const e = document.createElement("textarea");
    e.value = t, e.readOnly = !0, e.style.position = "fixed", e.style.opacity = "0", document.body.append(e), e.select();
    let n = !1;
    try {
      n = document.execCommand("copy");
    } catch {
      n = !1;
    }
    return e.remove(), n;
  }
}
function dr(t) {
  return t.toLocaleLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 70) || "timeline";
}
let We;
function cl(t) {
  let e = "";
  for (let n = 0; n < t.length; n += 32768) e += String.fromCharCode(...t.subarray(n, n + 32768));
  return btoa(e);
}
async function ll() {
  return We || (We = (async () => {
    try {
      const t = await fetch("https://fonts.googleapis.com/css2?family=Karla:wght@400;700&family=Montserrat:wght@600&display=swap");
      if (!t.ok) throw new Error("Font stylesheet request failed.");
      let e = await t.text();
      const n = [...new Set([...e.matchAll(/url\((?:['"])?(https:[^)'"\s]+)(?:['"])?\)/g)].map((r) => r[1]))];
      for (const r of n) {
        const i = await fetch(r);
        if (!i.ok) throw new Error("Font file request failed.");
        const o = i.headers.get("content-type") || "font/woff2", a = `data:${o};base64,${cl(new Uint8Array(await i.arrayBuffer()))}`;
        e = e.replaceAll(r, a);
      }
      return e;
    } catch {
      return "";
    }
  })()), We;
}
function hl(t, e) {
  const n = document.createElement("canvas").getContext("2d");
  n.font = "600 24px Montserrat, Karla, sans-serif";
  const r = Math.max(180, e - 40), i = [];
  let o = "";
  for (const a of t.split(/\s+/)) {
    const s = o ? `${o} ${a}` : a;
    o && n.measureText(s).width > r ? (i.push(o), o = a) : o = s;
  }
  return o && i.push(o), i;
}
class fl extends HTMLElement {
  chart;
  pending = { processId: null, agreementId: null };
  static get observedAttributes() {
    return ["data-url", "fallback-data-url", "pax-base-url", "process-id", "compare-url", "export-enabled"];
  }
  connectedCallback() {
    this.pending.processId = this.fixedProcessId ?? this.pending.processId, this.render(), document.addEventListener("pointerdown", this.dismissOpenControls), this.load();
  }
  disconnectedCallback() {
    document.removeEventListener("pointerdown", this.dismissOpenControls);
  }
  attributeChangedCallback() {
    this.isConnected && this.load();
  }
  setSelection(e) {
    this.pending = { ...e, processId: this.fixedProcessId ?? e.processId }, this.chart?.select(this.pending);
  }
  get selection() {
    return { ...this.pending };
  }
  dismissOpenControls = (e) => {
    const n = this.shadowRoot;
    if (!n) return;
    const r = e.composedPath(), i = n.querySelector(".export-menu"), o = n.querySelector(".guide"), a = n.querySelector("[data-guide]"), s = n.querySelector(".about-panel"), c = n.querySelector("[data-about]");
    i?.open && !r.includes(i) && (i.open = !1), o && a && !o.hidden && !r.includes(o) && !r.includes(a) && (o.hidden = !0, a.setAttribute("aria-expanded", "false")), s && c && !s.hidden && !r.includes(s) && !r.includes(c) && (s.hidden = !0, c.setAttribute("aria-expanded", "false"));
  };
  render() {
    const e = this.shadowRoot || this.attachShadow({ mode: "open" });
    e.innerHTML = `<style>${Jr}</style><section aria-label="Back and Forth in Peace Negotiations"><header class="topbar"><div class="brand-tools"><img class="logo" src="https://peacerep.github.io/logos/img/Pax_nobg.png" alt="PA-X logo"><div class="info-controls"><button type="button" data-guide aria-controls="timeline-guide" aria-expanded="false" title="Open the timeline guide">How to use</button></div></div><h1>Back and Forth in Peace Negotiations</h1><div class="controls"><div class="picker"><label class="sr-only" for="process-search">Choose a peace process</label><div class="process-combobox"><input id="process-search" type="search" placeholder="Choose a peace process" autocomplete="off" role="combobox" aria-autocomplete="list" aria-haspopup="listbox" aria-expanded="false" aria-controls="process-options"><ul id="process-options" role="listbox" hidden></ul></div><select data-process-value aria-hidden="true" tabindex="-1"><option>Loading processes...</option></select></div><button type="button" data-out aria-label="Zoom out" title="Zoom out">-</button><button type="button" data-in aria-label="Zoom in" title="Zoom in">+</button><label class="auto-fit" title="Automatically fit the timeline when selecting a process"><input type="checkbox" data-auto-fit>Auto-fit</label><a data-compare title="Open the comparison view">Compare</a><details class="export-menu" data-export><summary title="Open export options">Export</summary><div><button type="button" data-export-png title="Download the timeline as a PNG image">Download PNG</button><button type="button" data-export-csv title="Download the selected process data as a CSV file" disabled>Download process data</button></div></details><button type="button" data-reset title="Return to the idealised opening view" aria-label="Reset timeline">Reset</button><span class="sr-only" data-action-message role="status" aria-live="polite"></span></div><aside class="selection" hidden aria-live="polite"><button class="close" type="button" aria-label="Clear selected agreement" title="Close agreement details">x</button><div data-date></div><div data-name></div><div data-meta></div><a data-link target="_blank" rel="noopener noreferrer">View on PA-X</a></aside><aside id="timeline-guide" class="guide" role="dialog" aria-labelledby="guide-title" tabindex="-1" hidden><div class="guide-progress" data-guide-progress></div><div class="guide-visual" data-guide-visual></div><h2 id="guide-title" data-guide-title></h2><div class="guide-copy" data-guide-copy></div><div class="guide-actions"><button type="button" data-guide-close title="Close the timeline guide">Close</button><button type="button" data-guide-back title="Go to the previous guide step">Back</button><button type="button" data-guide-next title="Go to the next guide step">Next</button></div></aside></header><div class="tooltip" hidden></div><div class="chart" tabindex="0" aria-label="Timeline chart"></div></section>`;
  }
  async load() {
    const e = this.shadowRoot, n = e.querySelector(".chart"), r = e.querySelector(".selection");
    this.installAbout(e), n.innerHTML = '<div class="status" role="status">Loading timeline...</div>';
    try {
      const i = e.querySelector("[data-process-value]"), o = e.querySelector("#process-search"), a = e.querySelector("#process-options"), s = e.querySelector("h1"), c = e.querySelector("[data-date]"), u = e.querySelector("[data-name]"), l = e.querySelector("[data-meta]"), h = e.querySelector("[data-link]"), f = e.querySelector(".export-menu"), g = e.querySelector("[data-export-csv]"), p = e.querySelector("[data-action-message]");
      e.querySelector("[data-compare]").href = this.getAttribute("compare-url") || "compare.html";
      let m = -1;
      const x = () => {
        a.hidden = !0, o.setAttribute("aria-expanded", "false"), o.removeAttribute("aria-activedescendant"), m = -1;
      }, v = (M) => {
        i.value = String(M.id), o.value = M.name, x(), this.chart?.select({ processId: M.id, agreementId: null }, !0);
      }, A = (M) => {
        const E = [...a.querySelectorAll("[role=option]")];
        if (!E.length) return;
        m = Math.max(0, Math.min(M, E.length - 1)), E.forEach((B, K) => B.setAttribute("aria-selected", String(K === m)));
        const W = E[m];
        o.setAttribute("aria-activedescendant", W.id), W.scrollIntoView({ block: "nearest" });
      }, T = () => {
        const M = this.chart?.processOptions(o.value) || [];
        if (a.replaceChildren(), M.length) M.forEach((E, W) => {
          const B = document.createElement("li");
          B.id = `process-option-${E.id}`, B.setAttribute("role", "option"), B.setAttribute("aria-selected", "false"), B.textContent = E.name, B.addEventListener("pointerdown", (K) => {
            K.preventDefault(), v(E);
          }), a.append(B);
        });
        else {
          const E = document.createElement("li");
          E.className = "no-results", E.textContent = "No matching peace processes", a.append(E);
        }
        a.hidden = !1, o.setAttribute("aria-expanded", "true"), m = -1;
      };
      this.chart = new rl(n, e.querySelector(".tooltip"), s, i, {
        onProcess: (M, E) => {
          this.pending.processId = M?.process.id ?? null, o.value = M?.process.name ?? "", g.disabled = !M, x(), E && this.emit("process-selection", { processId: this.pending.processId, processName: M?.process.name ?? null });
        },
        onAgreement: (M, E, W) => {
          this.pending.agreementId = M?.id ?? null, r.hidden = !M, M ? (c.textContent = rn(M.dateSigned), u.textContent = M.name, l.textContent = [M.process.name, ur(M.stage), M.countries.join(", ")].filter(Boolean).join(" | "), h.href = `${this.paxBaseUrl}/agreements/${M.id}`, W ? this.positionPanel(r, W) : (r.style.visibility = "hidden", window.setTimeout(() => {
            this.positionPanel(r, this.chart?.selectedAgreementAnchor()), r.style.visibility = "visible";
          }, 500))) : this.positionPanel(r), E && this.emit("agreement-selection", { agreementId: this.pending.agreementId, agreement: M ?? null, processId: M?.process.id ?? this.pending.processId });
        }
      }, this.fixedProcessId);
      const D = e.querySelector("[data-auto-fit]");
      this.chart.setAutoFit(D.checked), D.onchange = () => this.chart?.setAutoFit(D.checked), o.onfocus = T, o.oninput = () => {
        i.value = "", T();
      }, o.onblur = () => window.setTimeout(x), o.onkeydown = (M) => {
        const E = this.chart?.processOptions(o.value) || [];
        M.key === "ArrowDown" ? (M.preventDefault(), a.hidden && T(), A(m + 1)) : M.key === "ArrowUp" ? (M.preventDefault(), a.hidden && T(), A(m < 0 ? E.length - 1 : m - 1)) : M.key === "Enter" && E.length ? (M.preventDefault(), v(E[Math.max(m, 0)])) : M.key === "Escape" && (M.preventDefault(), x());
      }, e.querySelector("[data-reset]").onclick = () => {
        o.value = "", x(), this.chart?.reset();
      }, e.querySelector("[data-in]").onclick = () => this.chart?.zoomBy(1.5), e.querySelector("[data-out]").onclick = () => this.chart?.zoomBy(0.75), e.querySelector(".close").onclick = () => this.chart?.select({ processId: this.pending.processId, agreementId: null }, !0), e.querySelector("[data-export-png]").onclick = () => {
        f.open = !1, this.exportPng(n, p);
      }, g.onclick = () => {
        f.open = !1, this.exportCsv(p);
      };
      const U = e.querySelector(".guide"), w = e.querySelector("[data-guide]"), I = e.querySelector("[data-guide-title]"), z = e.querySelector("[data-guide-copy]"), X = e.querySelector("[data-guide-visual]"), V = e.querySelector("[data-guide-progress]"), Z = e.querySelector("[data-guide-back]"), $ = e.querySelector("[data-guide-next]"), H = e.querySelector(".about-panel"), d = e.querySelector("[data-about]"), _ = e.querySelector("[data-about-close]"), y = e.querySelector("[data-copy-citation]"), C = e.querySelector("[data-citation]"), N = [
        { title: "The idealised story", visual: '<svg viewBox="0 0 300 72" aria-hidden="true"><path class="guide-ideal-line" d="M8 64 C70 64 74 48 118 48 S165 30 205 30 S245 8 292 8"/></svg>', copy: "<p>The smooth blue example shows a familiar assumption: ceasefire, talks, substantive agreement, then implementation.</p><p>It is a teaching device—not a model, forecast, or claim that every process should follow this sequence.</p>" },
        { title: "The messy reality", visual: '<svg viewBox="0 0 300 72" aria-hidden="true"><path class="guide-blue-line" d="M5 60 C45 60 45 16 82 16 M150 55 C180 55 185 22 220 22"/><path class="guide-red-line" d="M82 16 C119 16 120 55 150 55 M220 22 C250 22 248 62 295 62"/><path class="guide-faint-line" d="M5 20 C60 20 55 62 110 62 S160 12 205 12 S250 45 295 45"/></svg>', copy: "<p>Recorded processes rarely form a smooth climb. Talks stop and restart, stages are revisited, and further agreements often follow a headline comprehensive agreement.</p><p>The tangle is intentional: reveal all trajectories, then search for one process to see its particular path.</p>" },
        { title: "What blue, red, and grey mean", visual: '<div class="guide-legend" aria-hidden="true"><span><i class="blue"></i>Blue</span><span><i class="red"></i>Red</span><span><i class="grey"></i>Grey</span></div>', copy: '<p><strong>Blue</strong> moves to an agreement category higher on the ordered stage axis—the direction of the idealised path. <strong>Red</strong> moves to a category lower on that axis. <strong>Grey</strong> stays at the same stage.</p><p class="guide-caution">Colour describes movement between agreement categories. Red does not mean that peace has failed or progress has stopped; blue does not mean success. The chart does not measure violence, implementation quality, or outcomes.</p>' },
        { title: "Follow one process", visual: '<svg viewBox="0 0 300 72" aria-hidden="true"><path class="guide-blue-line" d="M8 58 C65 58 60 18 118 18"/><path class="guide-red-line" d="M118 18 C175 18 170 55 230 55"/><circle cx="8" cy="58" r="5"/><circle cx="118" cy="18" r="5"/><circle cx="230" cy="55" r="5"/></svg>', copy: '<p>Search for a process to fit its full recorded trajectory. Time runs left to right; the vertical position is the agreement stage; every dot is an agreement.</p><p>Hover for an exact date and time since the first agreement. Select a dot for its compact details and PA-X record.</p><p class="guide-source">Research context: <a href="https://peacerep.org/wp-content/uploads/2022/03/13548565211050748.pdf" target="_blank" rel="noopener noreferrer">Ways of seeing</a> and <a href="https://doi.org/10.1007/978-3-031-93221-2_3" target="_blank" rel="noopener noreferrer">Visualizing Peace and Transition Process Trajectories</a>.</p>' }
      ];
      let S = 0;
      const P = () => {
        const M = N[S];
        V.textContent = `Step ${S + 1} of ${N.length}`, I.textContent = M.title, X.innerHTML = M.visual, z.innerHTML = M.copy, Z.disabled = S === 0, $.textContent = S === N.length - 1 ? "Done" : "Next", $.title = S === N.length - 1 ? "Finish and close the timeline guide" : "Go to the next guide step", this.pending.processId || (S === 0 && this.chart?.showIdealIntroduction(), S === 1 && this.chart?.revealMessyOverview());
      }, R = (M = !0) => {
        U.hidden = !0, w.setAttribute("aria-expanded", "false"), M && w.focus();
      }, Y = (M = !0) => {
        H.hidden = !0, d.setAttribute("aria-expanded", "false"), M && d.focus();
      };
      w.onclick = () => {
        if (!U.hidden) {
          R();
          return;
        }
        Y(!1), U.hidden = !1, w.setAttribute("aria-expanded", "true"), S = 0, P(), U.focus();
      }, e.querySelector("[data-guide-close]").onclick = () => R(), Z.onclick = () => {
        S = Math.max(0, S - 1), P();
      }, $.onclick = () => {
        S === N.length - 1 ? R() : (S += 1, P());
      }, d.onclick = () => {
        if (!H.hidden) {
          Y();
          return;
        }
        R(!1), H.hidden = !1, d.setAttribute("aria-expanded", "true"), H.focus();
      }, _.onclick = () => Y(), y.onclick = async () => {
        const M = await ul(C.textContent?.trim() || "");
        y.textContent = M ? "Copied!" : "Copy failed", p.textContent = M ? "Citation copied." : "Select the citation and copy it manually.", window.setTimeout(() => {
          y.textContent = "Copy citation";
        }, 2500);
      }, this.onkeydown = (M) => {
        M.key === "Escape" && (U.hidden ? H.hidden || (M.preventDefault(), Y()) : (M.preventDefault(), R()));
      }, n.onkeydown = (M) => {
        M.key === "Escape" && U.hidden && H.hidden && this.chart?.select({ processId: this.pending.agreementId ? this.pending.processId : null, agreementId: null }, !0);
      }, this.chart.setData(await Qc(this.getAttribute("data-url") || "data/timeline-v1.json", this.getAttribute("fallback-data-url") || void 0)), new ResizeObserver(() => this.chart?.resize()).observe(n), this.chart.select(this.pending), this.emit("timeline-ready", {});
    } catch (i) {
      n.innerHTML = '<div class="status error" role="alert">The timeline data could not be loaded. Please try again later.</div>', this.dispatchEvent(new CustomEvent("timeline-error", { detail: { error: i }, bubbles: !0, composed: !0 }));
    }
  }
  installAbout(e) {
    if (e.querySelector("[data-about]")) return;
    const n = document.createElement("button"), r = document.createElement("aside");
    n.type = "button", n.dataset.about = "", n.setAttribute("aria-controls", "timeline-about"), n.setAttribute("aria-expanded", "false"), n.title = "Open information about this visualisation", n.textContent = "About", e.querySelector(".info-controls").append(n), r.id = "timeline-about", r.className = "about-panel", r.setAttribute("role", "dialog"), r.setAttribute("aria-labelledby", "timeline-about-title"), r.tabIndex = -1, r.hidden = !0, r.innerHTML = '<div class="about-header"><h2 id="timeline-about-title">About this visualisation</h2><button type="button" data-about-close aria-label="Close information" title="Close information">×</button></div><section><h3>Data and purpose</h3><p>This visualisation uses the PA-X Peace Agreements Dataset, Version 10: 2,257 agreements in more than 170 peace processes, covering 1990 to 31 December 2025.</p><p>It contrasts an idealised linear peace process with the back-and-forth trajectories recorded in PA-X. Agreement stages and line colours describe the records; they do not measure success, implementation quality, violence, or outcomes.</p></section><section><h3>Data citation</h3><blockquote data-citation>Bell, C., &amp; Badanjak, S. (2019). Introducing PA-X: A new peace agreement database and dataset. Journal of Peace Research, 56(3), 452–466. Available at https://www.peaceagreements.org/</blockquote><button type="button" data-copy-citation title="Copy the PA-X citation">Copy citation</button><p><a href="https://www.peaceagreements.org/downloads/" target="_blank" rel="noopener noreferrer">PA-X data downloads and citation guidance</a></p></section><section><h3>Research context</h3><p><a href="https://peacerep.org/wp-content/uploads/2022/03/13548565211050748.pdf" target="_blank" rel="noopener noreferrer">Ways of seeing</a><br><a href="https://doi.org/10.1007/978-3-031-93221-2_3" target="_blank" rel="noopener noreferrer">Visualizing Peace and Transition Process Trajectories</a></p></section><section><h3>Credits — PeaceRep Vis Team at the University of Edinburgh</h3><p><a href="https://tobiaskauer.org/" target="_blank" rel="noopener noreferrer">Tobias Kauer</a>: original design<br><a href="https://tomasvancisin.co.uk/" target="_blank" rel="noopener noreferrer">Tomas Vancisin</a>: extended design<br><a href="https://niamhhenry.com/" target="_blank" rel="noopener noreferrer">Niamh Henry</a>: extended functions</p></section>', e.querySelector(".topbar").append(r);
  }
  async exportPng(e, n) {
    const r = e.querySelector("svg");
    if (!r) return;
    n.textContent = "Preparing PNG...";
    const [, i, o] = await Promise.all([document.fonts.ready, ll(), ol()]), a = r.viewBox.baseVal, s = a.width, c = a.height, u = this.shadowRoot?.querySelector("h1")?.textContent?.trim() || "Back and Forth in Peace Negotiations", l = hl(u, Math.max(180, s - 140)), h = Math.max(68, 30 + l.length * 28), f = c + h, g = this.chart?.selectedAgreements() || [], p = g.length ? dr(g[0].process.name) : "all-processes", m = "http://www.w3.org/2000/svg", x = document.createElementNS(m, "svg"), v = document.createElementNS(m, "style"), A = document.createElementNS(m, "text"), T = r.cloneNode(!0);
    x.setAttribute("xmlns", m), x.setAttribute("viewBox", `0 0 ${s} ${f}`), x.setAttribute("width", String(s)), x.setAttribute("height", String(f)), v.textContent = `${i}
text { font-family: Karla, sans-serif; } .export-title { font-family: Montserrat, Karla, sans-serif; font-size: 24px; font-weight: 600; } .axis .domain, .axis .tick line { stroke: transparent; } .tick text { font-size: 14px; font-weight: 500; } .timeline-crosshair { display: none; } circle { fill: gray; fill-opacity: .5; stroke: black; } circle.agreement-selected { fill: #fdd900; fill-opacity: 1; stroke: #AA4197; stroke-width: 3; }`, A.setAttribute("class", "export-title"), A.setAttribute("x", String(s / 2)), A.setAttribute("y", "30"), A.setAttribute("text-anchor", "middle"), l.forEach((w, I) => {
      const z = document.createElementNS(m, "tspan");
      z.setAttribute("x", String(s / 2)), z.setAttribute("dy", I ? "28" : "0"), z.textContent = w, A.append(z);
    }), T.setAttribute("x", "0"), T.setAttribute("y", String(h)), T.setAttribute("width", String(s)), T.setAttribute("height", String(c)), x.append(v), o && x.append(al(m, o)), x.append(A, T);
    const D = URL.createObjectURL(new Blob([new XMLSerializer().serializeToString(x)], { type: "image/svg+xml;charset=utf-8" })), U = new Image();
    U.onload = () => {
      const w = document.createElement("canvas");
      w.width = Math.ceil(s * 2), w.height = Math.ceil(f * 2);
      const I = w.getContext("2d");
      I.scale(2, 2), I.fillStyle = "#fff", I.fillRect(0, 0, s, f), I.drawImage(U, 0, 0, s, f), w.toBlob((z) => {
        z && fr(`pax-${p}.png`, z), n.textContent = "Timeline chart downloaded as PNG.", URL.revokeObjectURL(D);
      }, "image/png");
    }, U.onerror = () => {
      n.textContent = "The PNG could not be created.", URL.revokeObjectURL(D);
    }, U.src = D;
  }
  exportCsv(e) {
    const n = this.chart?.selectedAgreements() || [];
    if (!n.length) return;
    const r = ["process_id", "process_name", "agreement_id", "agreement_name", "date_signed", "stage", "countries", "regions", "agreement_type", "conflict_type", "description", "parties", "third_parties"], i = n.map((a) => [a.process.id, a.process.name, a.id, a.name, a.dateSigned, ur(a.stage), a.countries.join("; "), a.regions?.join("; ") || "", a.agreementType || "", a.conflictType || "", a.description || "", a.parties || "", a.thirdParties || ""]), o = [r, ...i].map((a) => a.map(sl).join(",")).join(`
`);
    fr(`pax-${dr(n[0].process.name)}.csv`, new Blob([o], { type: "text/csv;charset=utf-8" })), e.textContent = "Selected process data downloaded as CSV.";
  }
  positionPanel(e, n) {
    if (e.classList.toggle("anchored", !!n), !n) {
      e.style.removeProperty("left"), e.style.removeProperty("top");
      return;
    }
    requestAnimationFrame(() => {
      const r = e.offsetWidth, i = e.offsetHeight, o = 14, a = n.right + o + r <= window.innerWidth - o ? n.right + o : Math.max(o, n.left - r - o), s = n.bottom + o + i <= window.innerHeight - o ? n.bottom + o : Math.max(o, n.top - i - o);
      e.style.left = `${a}px`, e.style.top = `${s}px`;
    });
  }
  get fixedProcessId() {
    const e = Number(this.getAttribute("process-id"));
    return Number.isSafeInteger(e) && e > 0 ? e : null;
  }
  get paxBaseUrl() {
    return (this.getAttribute("pax-base-url") || "https://www.peaceagreements.org").replace(/\/$/, "");
  }
  emit(e, n) {
    this.dispatchEvent(new CustomEvent(e, { detail: n, bubbles: !0, composed: !0 }));
  }
}
customElements.define("messy-timeline", fl);
export {
  fl as MessyTimeline
};
