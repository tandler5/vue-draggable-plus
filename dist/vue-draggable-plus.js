var Qt = Object.defineProperty;
var Oe = Object.getOwnPropertySymbols;
var pt = Object.prototype.hasOwnProperty, gt = Object.prototype.propertyIsEnumerable;
var ht = (e, n, t) => n in e ? Qt(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t, F = (e, n) => {
  for (var t in n || (n = {}))
    pt.call(n, t) && ht(e, t, n[t]);
  if (Oe)
    for (var t of Oe(n))
      gt.call(n, t) && ht(e, t, n[t]);
  return e;
};
var Ae = (e, n) => {
  var t = {};
  for (var o in e)
    pt.call(e, o) && n.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && Oe)
    for (var o of Oe(e))
      n.indexOf(o) < 0 && gt.call(e, o) && (t[o] = e[o]);
  return t;
};
import { getCurrentInstance as st, unref as z, watch as en, onUnmounted as tn, onMounted as nn, nextTick as Pt, isRef as ze, defineComponent as on, computed as mt, toRefs as rn, ref as ln, reactive as an, h as sn, isProxy as un } from "vue";
const Xt = "[vue-draggable-plus]: ";
function cn(e) {
  console.warn(Xt + e);
}
function fn(e) {
  console.error(Xt + e);
}
function bt(e, n, t) {
  return t >= 0 && t < e.length && e.splice(t, 0, e.splice(n, 1)[0]), e;
}
function dn(e) {
  return e.replace(/-(\w)/g, (n, t) => t ? t.toUpperCase() : "");
}
function hn(e) {
  return Object.keys(e).reduce((n, t) => (typeof e[t] != "undefined" && (n[dn(t)] = e[t]), n), {});
}
function wt(e, n) {
  return Array.isArray(e) && e.splice(n, 1), e;
}
function yt(e, n, t) {
  return Array.isArray(e) && e.splice(n, 0, t), e;
}
function pn(e) {
  return typeof e == "undefined";
}
function gn(e) {
  return typeof e == "string";
}
function vt(e, n, t) {
  const o = e.children[t];
  e.insertBefore(n, o);
}
function Ge(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function mn(e, n = document) {
  var o;
  let t = null;
  return typeof (n == null ? void 0 : n.querySelector) == "function" ? t = (o = n == null ? void 0 : n.querySelector) == null ? void 0 : o.call(n, e) : t = document.querySelector(e), t || cn(`Element not found: ${e}`), t;
}
function bn(e, n, t = null) {
  return function(...o) {
    return e.apply(t, o), n.apply(t, o);
  };
}
function wn(e, n) {
  const t = F({}, e);
  return Object.keys(n).forEach((o) => {
    t[o] ? t[o] = bn(e[o], n[o]) : t[o] = n[o];
  }), t;
}
function yn(e) {
  return e instanceof HTMLElement;
}
function St(e, n) {
  Object.keys(e).forEach((t) => {
    n(t, e[t]);
  });
}
function vn(e) {
  return e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97);
}
const Sn = Object.assign;
/**!
 * Sortable 1.15.6
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function oe() {
  return oe = Object.assign || function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, oe.apply(this, arguments);
}
var _n = "1.15.6";
function ne(e) {
  if (typeof window != "undefined" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(e);
}
const ie = ne(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), Ee = ne(/Edge/i), _t = ne(/firefox/i), ve = ne(/safari/i) && !ne(/chrome/i) && !ne(/android/i), ut = ne(/iP(ad|od|hone)/i), Yt = ne(/chrome/i) && ne(/android/i), Ft = {
  capture: !1,
  passive: !1
};
function _(e, n, t) {
  e.addEventListener(n, t, !ie && Ft);
}
function v(e, n, t) {
  e.removeEventListener(n, t, !ie && Ft);
}
function ke(e, n) {
  if (n) {
    if (n[0] === ">" && (n = n.substring(1)), e)
      try {
        if (e.matches)
          return e.matches(n);
        if (e.msMatchesSelector)
          return e.msMatchesSelector(n);
        if (e.webkitMatchesSelector)
          return e.webkitMatchesSelector(n);
      } catch (t) {
        return !1;
      }
    return !1;
  }
}
function Rt(e) {
  return e.host && e !== document && e.host.nodeType ? e.host : e.parentNode;
}
function Z(e, n, t, o) {
  if (e) {
    t = t || document;
    do {
      if (n != null && (n[0] === ">" ? e.parentNode === t && ke(e, n) : ke(e, n)) || o && e === t)
        return e;
      if (e === t)
        break;
    } while (e = Rt(e));
  }
  return null;
}
const Dt = /\s+/g;
function G(e, n, t) {
  if (e && n)
    if (e.classList)
      e.classList[t ? "add" : "remove"](n);
    else {
      let o = (" " + e.className + " ").replace(Dt, " ").replace(" " + n + " ", " ");
      e.className = (o + (t ? " " + n : "")).replace(Dt, " ");
    }
}
function h(e, n, t) {
  let o = e && e.style;
  if (o) {
    if (t === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? t = document.defaultView.getComputedStyle(e, "") : e.currentStyle && (t = e.currentStyle), n === void 0 ? t : t[n];
    !(n in o) && n.indexOf("webkit") === -1 && (n = "-webkit-" + n), o[n] = t + (typeof t == "string" ? "" : "px");
  }
}
function ge(e, n) {
  let t = "";
  if (typeof e == "string")
    t = e;
  else
    do {
      let i = h(e, "transform");
      i && i !== "none" && (t = i + " " + t);
    } while (!n && (e = e.parentNode));
  const o = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return o && new o(t);
}
function kt(e, n, t) {
  if (e) {
    let o = e.getElementsByTagName(n), i = 0, l = o.length;
    if (t)
      for (; i < l; i++)
        t(o[i], i);
    return o;
  }
  return [];
}
function ee() {
  let e = document.scrollingElement;
  return e || document.documentElement;
}
function P(e, n, t, o, i) {
  if (!e.getBoundingClientRect && e !== window)
    return;
  let l, r, a, s, c, d, f;
  if (e !== window && e.parentNode && e !== ee() ? (l = e.getBoundingClientRect(), r = l.top, a = l.left, s = l.bottom, c = l.right, d = l.height, f = l.width) : (r = 0, a = 0, s = window.innerHeight, c = window.innerWidth, d = window.innerHeight, f = window.innerWidth), (n || t) && e !== window && (i = i || e.parentNode, !ie))
    do
      if (i && i.getBoundingClientRect && (h(i, "transform") !== "none" || t && h(i, "position") !== "static")) {
        let b = i.getBoundingClientRect();
        r -= b.top + parseInt(h(i, "border-top-width")), a -= b.left + parseInt(h(i, "border-left-width")), s = r + l.height, c = a + l.width;
        break;
      }
    while (i = i.parentNode);
  if (o && e !== window) {
    let b = ge(i || e), g = b && b.a, S = b && b.d;
    b && (r /= S, a /= g, f /= g, d /= S, s = r + d, c = a + f);
  }
  return {
    top: r,
    left: a,
    bottom: s,
    right: c,
    width: f,
    height: d
  };
}
function Ct(e, n, t) {
  let o = ae(e, !0), i = P(e)[n];
  for (; o; ) {
    let l = P(o)[t], r;
    if (r = i >= l, !r)
      return o;
    if (o === ee())
      break;
    o = ae(o, !1);
  }
  return !1;
}
function me(e, n, t, o) {
  let i = 0, l = 0, r = e.children;
  for (; l < r.length; ) {
    if (r[l].style.display !== "none" && r[l] !== p.ghost && (o || r[l] !== p.dragged) && Z(r[l], t.draggable, e, !1)) {
      if (i === n)
        return r[l];
      i++;
    }
    l++;
  }
  return null;
}
function ct(e, n) {
  let t = e.lastElementChild;
  for (; t && (t === p.ghost || h(t, "display") === "none" || n && !ke(t, n)); )
    t = t.previousElementSibling;
  return t || null;
}
function J(e, n) {
  let t = 0;
  if (!e || !e.parentNode)
    return -1;
  for (; e = e.previousElementSibling; )
    e.nodeName.toUpperCase() !== "TEMPLATE" && e !== p.clone && (!n || ke(e, n)) && t++;
  return t;
}
function Et(e) {
  let n = 0, t = 0, o = ee();
  if (e)
    do {
      let i = ge(e), l = i.a, r = i.d;
      n += e.scrollLeft * l, t += e.scrollTop * r;
    } while (e !== o && (e = e.parentNode));
  return [n, t];
}
function Dn(e, n) {
  for (let t in e)
    if (e.hasOwnProperty(t)) {
      for (let o in n)
        if (n.hasOwnProperty(o) && n[o] === e[t][o])
          return Number(t);
    }
  return -1;
}
function ae(e, n) {
  if (!e || !e.getBoundingClientRect)
    return ee();
  let t = e, o = !1;
  do
    if (t.clientWidth < t.scrollWidth || t.clientHeight < t.scrollHeight) {
      let i = h(t);
      if (t.clientWidth < t.scrollWidth && (i.overflowX == "auto" || i.overflowX == "scroll") || t.clientHeight < t.scrollHeight && (i.overflowY == "auto" || i.overflowY == "scroll")) {
        if (!t.getBoundingClientRect || t === document.body)
          return ee();
        if (o || n)
          return t;
        o = !0;
      }
    }
  while (t = t.parentNode);
  return ee();
}
function Cn(e, n) {
  if (e && n)
    for (let t in n)
      n.hasOwnProperty(t) && (e[t] = n[t]);
  return e;
}
function Ue(e, n) {
  return Math.round(e.top) === Math.round(n.top) && Math.round(e.left) === Math.round(n.left) && Math.round(e.height) === Math.round(n.height) && Math.round(e.width) === Math.round(n.width);
}
let Se;
function Bt(e, n) {
  return function() {
    if (!Se) {
      let t = arguments, o = this;
      t.length === 1 ? e.call(o, t[0]) : e.apply(o, t), Se = setTimeout(function() {
        Se = void 0;
      }, n);
    }
  };
}
function En() {
  clearTimeout(Se), Se = void 0;
}
function Lt(e, n, t) {
  e.scrollLeft += n, e.scrollTop += t;
}
function Ht(e) {
  let n = window.Polymer, t = window.jQuery || window.Zepto;
  return n && n.dom ? n.dom(e).cloneNode(!0) : t ? t(e).clone(!0)[0] : e.cloneNode(!0);
}
function Wt(e, n, t) {
  const o = {};
  return Array.from(e.children).forEach((i) => {
    var r, a, s, c;
    if (!Z(i, n.draggable, e, !1) || i.animated || i === t)
      return;
    const l = P(i);
    o.left = Math.min((r = o.left) != null ? r : 1 / 0, l.left), o.top = Math.min((a = o.top) != null ? a : 1 / 0, l.top), o.right = Math.max((s = o.right) != null ? s : -1 / 0, l.right), o.bottom = Math.max((c = o.bottom) != null ? c : -1 / 0, l.bottom);
  }), o.width = o.right - o.left, o.height = o.bottom - o.top, o.x = o.left, o.y = o.top, o;
}
const V = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function Tn() {
  let e = [], n;
  return {
    captureAnimationState() {
      if (e = [], !this.options.animation)
        return;
      [].slice.call(this.el.children).forEach((o) => {
        if (h(o, "display") === "none" || o === p.ghost)
          return;
        e.push({
          target: o,
          rect: P(o)
        });
        let i = F({}, e[e.length - 1].rect);
        if (o.thisAnimationDuration) {
          let l = ge(o, !0);
          l && (i.top -= l.f, i.left -= l.e);
        }
        o.fromRect = i;
      });
    },
    addAnimationState(t) {
      e.push(t);
    },
    removeAnimationState(t) {
      e.splice(Dn(e, {
        target: t
      }), 1);
    },
    animateAll(t) {
      if (!this.options.animation) {
        clearTimeout(n), typeof t == "function" && t();
        return;
      }
      let o = !1, i = 0;
      e.forEach((l) => {
        let r = 0, a = l.target, s = a.fromRect, c = P(a), d = a.prevFromRect, f = a.prevToRect, b = l.rect, g = ge(a, !0);
        g && (c.top -= g.f, c.left -= g.e), a.toRect = c, a.thisAnimationDuration && Ue(d, c) && !Ue(s, c) && // Make sure animatingRect is on line between toRect & fromRect
        (b.top - c.top) / (b.left - c.left) === (s.top - c.top) / (s.left - c.left) && (r = On(b, d, f, this.options)), Ue(c, s) || (a.prevFromRect = s, a.prevToRect = c, r || (r = this.options.animation), this.animate(a, b, c, r)), r && (o = !0, i = Math.max(i, r), clearTimeout(a.animationResetTimer), a.animationResetTimer = setTimeout(function() {
          a.animationTime = 0, a.prevFromRect = null, a.fromRect = null, a.prevToRect = null, a.thisAnimationDuration = null;
        }, r), a.thisAnimationDuration = r);
      }), clearTimeout(n), o ? n = setTimeout(function() {
        typeof t == "function" && t();
      }, i) : typeof t == "function" && t(), e = [];
    },
    animate(t, o, i, l) {
      if (l) {
        h(t, "transition", ""), h(t, "transform", "");
        let r = ge(this.el), a = r && r.a, s = r && r.d, c = (o.left - i.left) / (a || 1), d = (o.top - i.top) / (s || 1);
        t.animatingX = !!c, t.animatingY = !!d, h(t, "transform", "translate3d(" + c + "px," + d + "px,0)"), this.forRepaintDummy = xn(t), h(t, "transition", "transform " + l + "ms" + (this.options.easing ? " " + this.options.easing : "")), h(t, "transform", "translate3d(0,0,0)"), typeof t.animated == "number" && clearTimeout(t.animated), t.animated = setTimeout(function() {
          h(t, "transition", ""), h(t, "transform", ""), t.animated = !1, t.animatingX = !1, t.animatingY = !1;
        }, l);
      }
    }
  };
}
function xn(e) {
  return e.offsetWidth;
}
function On(e, n, t, o) {
  return Math.sqrt(Math.pow(n.top - e.top, 2) + Math.pow(n.left - e.left, 2)) / Math.sqrt(Math.pow(n.top - t.top, 2) + Math.pow(n.left - t.left, 2)) * o.animation;
}
let fe = [];
const je = {
  initializeByDefault: !0
};
var Te = {
  mount(e) {
    for (let n in je)
      je.hasOwnProperty(n) && !(n in e) && (e[n] = je[n]);
    fe.forEach((n) => {
      if (n.pluginName === e.pluginName)
        throw `Sortable: Cannot mount plugin ${e.pluginName} more than once`;
    }), fe.push(e);
  },
  pluginEvent(e, n, t) {
    this.eventCanceled = !1, t.cancel = () => {
      this.eventCanceled = !0;
    };
    const o = e + "Global";
    fe.forEach((i) => {
      n[i.pluginName] && (n[i.pluginName][o] && n[i.pluginName][o](F({
        sortable: n
      }, t)), n.options[i.pluginName] && n[i.pluginName][e] && n[i.pluginName][e](F({
        sortable: n
      }, t)));
    });
  },
  initializePlugins(e, n, t, o) {
    fe.forEach((i) => {
      const l = i.pluginName;
      if (!e.options[l] && !i.initializeByDefault)
        return;
      let r = new i(e, n, e.options);
      r.sortable = e, r.options = e.options, e[l] = r, oe(t, r.defaults);
    });
    for (let i in e.options) {
      if (!e.options.hasOwnProperty(i))
        continue;
      let l = this.modifyOption(e, i, e.options[i]);
      typeof l != "undefined" && (e.options[i] = l);
    }
  },
  getEventProperties(e, n) {
    let t = {};
    return fe.forEach((o) => {
      typeof o.eventProperties == "function" && oe(t, o.eventProperties.call(n[o.pluginName], e));
    }), t;
  },
  modifyOption(e, n, t) {
    let o;
    return fe.forEach((i) => {
      e[i.pluginName] && i.optionListeners && typeof i.optionListeners[n] == "function" && (o = i.optionListeners[n].call(e[i.pluginName], t));
    }), o;
  }
};
function An({
  sortable: e,
  rootEl: n,
  name: t,
  targetEl: o,
  cloneEl: i,
  toEl: l,
  fromEl: r,
  oldIndex: a,
  newIndex: s,
  oldDraggableIndex: c,
  newDraggableIndex: d,
  originalEvent: f,
  putSortable: b,
  extraEventProperties: g
}) {
  if (e = e || n && n[V], !e)
    return;
  let S, L = e.options, $ = "on" + t.charAt(0).toUpperCase() + t.substr(1);
  window.CustomEvent && !ie && !Ee ? S = new CustomEvent(t, {
    bubbles: !0,
    cancelable: !0
  }) : (S = document.createEvent("Event"), S.initEvent(t, !0, !0)), S.to = l || n, S.from = r || n, S.item = o || n, S.clone = i, S.oldIndex = a, S.newIndex = s, S.oldDraggableIndex = c, S.newDraggableIndex = d, S.originalEvent = f, S.pullMode = b ? b.lastPutMode : void 0;
  let M = F(F({}, g), Te.getEventProperties(t, e));
  for (let j in M)
    S[j] = M[j];
  n && n.dispatchEvent(S), L[$] && L[$].call(e, S);
}
let W = function(e, n, i = {}) {
  var l = i, {
    evt: t
  } = l, o = Ae(l, [
    "evt"
  ]);
  Te.pluginEvent.bind(p)(e, n, F({
    dragEl: u,
    parentEl: A,
    ghostEl: m,
    rootEl: T,
    nextEl: ce,
    lastDownEl: Xe,
    cloneEl: O,
    cloneHidden: le,
    dragStarted: be,
    putSortable: R,
    activeSortable: p.active,
    originalEvent: t,
    oldIndex: pe,
    oldDraggableIndex: _e,
    newIndex: U,
    newDraggableIndex: re,
    hideGhostForTarget: Gt,
    unhideGhostForTarget: Ut,
    cloneNowHidden() {
      le = !0;
    },
    cloneNowShown() {
      le = !1;
    },
    dispatchSortableEvent(r) {
      H({
        sortable: n,
        name: r,
        originalEvent: t
      });
    }
  }, o));
};
function H(e) {
  An(F({
    putSortable: R,
    cloneEl: O,
    targetEl: u,
    rootEl: T,
    oldIndex: pe,
    oldDraggableIndex: _e,
    newIndex: U,
    newDraggableIndex: re
  }, e));
}
let u, A, m, T, ce, Xe, O, le, pe, U, _e, re, Me, R, he = !1, Be = !1, Le = [], se, K, qe, Je, Tt, xt, be, de, De, Ce = !1, Ie = !1, Ye, B, Ke = [], ot = !1, He = [];
const Ve = typeof document != "undefined", Ne = ut, Ot = Ee || ie ? "cssFloat" : "float", Mn = Ve && !Yt && !ut && "draggable" in document.createElement("div"), Vt = function() {
  if (!Ve)
    return;
  if (ie)
    return !1;
  let e = document.createElement("x");
  return e.style.cssText = "pointer-events:auto", e.style.pointerEvents === "auto";
}(), $t = function(e, n) {
  let t = h(e), o = parseInt(t.width) - parseInt(t.paddingLeft) - parseInt(t.paddingRight) - parseInt(t.borderLeftWidth) - parseInt(t.borderRightWidth), i = me(e, 0, n), l = me(e, 1, n), r = i && h(i), a = l && h(l), s = r && parseInt(r.marginLeft) + parseInt(r.marginRight) + P(i).width, c = a && parseInt(a.marginLeft) + parseInt(a.marginRight) + P(l).width;
  if (t.display === "flex")
    return t.flexDirection === "column" || t.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (t.display === "grid")
    return t.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (i && r.float && r.float !== "none") {
    let d = r.float === "left" ? "left" : "right";
    return l && (a.clear === "both" || a.clear === d) ? "vertical" : "horizontal";
  }
  return i && (r.display === "block" || r.display === "flex" || r.display === "table" || r.display === "grid" || s >= o && t[Ot] === "none" || l && t[Ot] === "none" && s + c > o) ? "vertical" : "horizontal";
}, In = function(e, n, t) {
  let o = t ? e.left : e.top, i = t ? e.right : e.bottom, l = t ? e.width : e.height, r = t ? n.left : n.top, a = t ? n.right : n.bottom, s = t ? n.width : n.height;
  return o === r || i === a || o + l / 2 === r + s / 2;
}, Nn = function(e, n) {
  let t;
  return Le.some((o) => {
    const i = o[V].options.emptyInsertThreshold;
    if (!i || ct(o))
      return;
    const l = P(o), r = e >= l.left - i && e <= l.right + i, a = n >= l.top - i && n <= l.bottom + i;
    if (r && a)
      return t = o;
  }), t;
}, zt = function(e) {
  function n(i, l) {
    return function(r, a, s, c) {
      let d = r.options.group.name && a.options.group.name && r.options.group.name === a.options.group.name;
      if (i == null && (l || d))
        return !0;
      if (i == null || i === !1)
        return !1;
      if (l && i === "clone")
        return i;
      if (typeof i == "function")
        return n(i(r, a, s, c), l)(r, a, s, c);
      {
        let f = (l ? r : a).options.group.name;
        return i === !0 || typeof i == "string" && i === f || i.join && i.indexOf(f) > -1;
      }
    };
  }
  let t = {}, o = e.group;
  (!o || typeof o != "object") && (o = {
    name: o
  }), t.name = o.name, t.checkPull = n(o.pull, !0), t.checkPut = n(o.put), t.revertClone = o.revertClone, e.group = t;
}, Gt = function() {
  !Vt && m && h(m, "display", "none");
}, Ut = function() {
  !Vt && m && h(m, "display", "");
};
Ve && !Yt && document.addEventListener("click", function(e) {
  if (Be)
    return e.preventDefault(), e.stopPropagation && e.stopPropagation(), e.stopImmediatePropagation && e.stopImmediatePropagation(), Be = !1, !1;
}, !0);
let ue = function(e) {
  if (u) {
    e = e.touches ? e.touches[0] : e;
    let n = Nn(e.clientX, e.clientY);
    if (n) {
      let t = {};
      for (let o in e)
        e.hasOwnProperty(o) && (t[o] = e[o]);
      t.target = t.rootEl = n, t.preventDefault = void 0, t.stopPropagation = void 0, n[V]._onDragOver(t);
    }
  }
}, Pn = function(e) {
  u && u.parentNode[V]._isOutsideThisEl(e.target);
};
function p(e, n) {
  if (!(e && e.nodeType && e.nodeType === 1))
    throw `Sortable: \`el\` must be an HTMLElement, not ${{}.toString.call(e)}`;
  this.el = e, this.options = n = oe({}, n), e[V] = this;
  let t = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(e.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: !1,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: !0,
    direction: function() {
      return $t(e, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(o, i) {
      o.setData("Text", i.textContent);
    },
    dropBubble: !1,
    dragoverBubble: !1,
    dataIdAttr: "data-id",
    delay: 0,
    delayOnTouchOnly: !1,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: !1,
    fallbackClass: "sortable-fallback",
    fallbackOnBody: !1,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    // Disabled on Safari: #1571; Enabled on Safari IOS: #2244
    supportPointer: p.supportPointer !== !1 && "PointerEvent" in window && (!ve || ut),
    emptyInsertThreshold: 5
  };
  Te.initializePlugins(this, e, t);
  for (let o in t)
    !(o in n) && (n[o] = t[o]);
  zt(n);
  for (let o in this)
    o.charAt(0) === "_" && typeof this[o] == "function" && (this[o] = this[o].bind(this));
  this.nativeDraggable = n.forceFallback ? !1 : Mn, this.nativeDraggable && (this.options.touchStartThreshold = 1), n.supportPointer ? _(e, "pointerdown", this._onTapStart) : (_(e, "mousedown", this._onTapStart), _(e, "touchstart", this._onTapStart)), this.nativeDraggable && (_(e, "dragover", this), _(e, "dragenter", this)), Le.push(this.el), n.store && n.store.get && this.sort(n.store.get(this) || []), oe(this, Tn());
}
p.prototype = /** @lends Sortable.prototype */
{
  constructor: p,
  _isOutsideThisEl: function(e) {
    !this.el.contains(e) && e !== this.el && (de = null);
  },
  _getDirection: function(e, n) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, e, n, u) : this.options.direction;
  },
  _onTapStart: function(e) {
    if (!e.cancelable)
      return;
    let n = this, t = this.el, o = this.options, i = o.preventOnFilter, l = e.type, r = e.touches && e.touches[0] || e.pointerType && e.pointerType === "touch" && e, a = (r || e).target, s = e.target.shadowRoot && (e.path && e.path[0] || e.composedPath && e.composedPath()[0]) || a, c = o.filter;
    if (Hn(t), !u && !(/mousedown|pointerdown/.test(l) && e.button !== 0 || o.disabled) && !s.isContentEditable && !(!this.nativeDraggable && ve && a && a.tagName.toUpperCase() === "SELECT") && (a = Z(a, o.draggable, t, !1), !(a && a.animated) && Xe !== a)) {
      if (pe = J(a), _e = J(a, o.draggable), typeof c == "function") {
        if (c.call(this, e, a, this)) {
          H({
            sortable: n,
            rootEl: s,
            name: "filter",
            targetEl: a,
            toEl: t,
            fromEl: t
          }), W("filter", n, {
            evt: e
          }), i && e.preventDefault();
          return;
        }
      } else if (c && (c = c.split(",").some(function(d) {
        if (d = Z(s, d.trim(), t, !1), d)
          return H({
            sortable: n,
            rootEl: d,
            name: "filter",
            targetEl: a,
            fromEl: t,
            toEl: t
          }), W("filter", n, {
            evt: e
          }), !0;
      }), c)) {
        i && e.preventDefault();
        return;
      }
      o.handle && !Z(s, o.handle, t, !1) || this._prepareDragStart(e, r, a);
    }
  },
  _prepareDragStart: function(e, n, t) {
    let o = this, i = o.el, l = o.options, r = i.ownerDocument, a;
    if (t && !u && t.parentNode === i) {
      let s = P(t);
      if (T = i, u = t, A = u.parentNode, ce = u.nextSibling, Xe = t, Me = l.group, p.dragged = u, se = {
        target: u,
        clientX: (n || e).clientX,
        clientY: (n || e).clientY
      }, Tt = se.clientX - s.left, xt = se.clientY - s.top, this._lastX = (n || e).clientX, this._lastY = (n || e).clientY, u.style["will-change"] = "all", a = function() {
        if (W("delayEnded", o, {
          evt: e
        }), p.eventCanceled) {
          o._onDrop();
          return;
        }
        o._disableDelayedDragEvents(), !_t && o.nativeDraggable && (u.draggable = !0), o._triggerDragStart(e, n), H({
          sortable: o,
          name: "choose",
          originalEvent: e
        }), G(u, l.chosenClass, !0);
      }, l.ignore.split(",").forEach(function(c) {
        kt(u, c.trim(), Ze);
      }), _(r, "dragover", ue), _(r, "mousemove", ue), _(r, "touchmove", ue), l.supportPointer ? (_(r, "pointerup", o._onDrop), !this.nativeDraggable && _(r, "pointercancel", o._onDrop)) : (_(r, "mouseup", o._onDrop), _(r, "touchend", o._onDrop), _(r, "touchcancel", o._onDrop)), _t && this.nativeDraggable && (this.options.touchStartThreshold = 4, u.draggable = !0), W("delayStart", this, {
        evt: e
      }), l.delay && (!l.delayOnTouchOnly || n) && (!this.nativeDraggable || !(Ee || ie))) {
        if (p.eventCanceled) {
          this._onDrop();
          return;
        }
        l.supportPointer ? (_(r, "pointerup", o._disableDelayedDrag), _(r, "pointercancel", o._disableDelayedDrag)) : (_(r, "mouseup", o._disableDelayedDrag), _(r, "touchend", o._disableDelayedDrag), _(r, "touchcancel", o._disableDelayedDrag)), _(r, "mousemove", o._delayedDragTouchMoveHandler), _(r, "touchmove", o._delayedDragTouchMoveHandler), l.supportPointer && _(r, "pointermove", o._delayedDragTouchMoveHandler), o._dragStartTimer = setTimeout(a, l.delay);
      } else
        a();
    }
  },
  _delayedDragTouchMoveHandler: function(e) {
    let n = e.touches ? e.touches[0] : e;
    Math.max(Math.abs(n.clientX - this._lastX), Math.abs(n.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    u && Ze(u), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    let e = this.el.ownerDocument;
    v(e, "mouseup", this._disableDelayedDrag), v(e, "touchend", this._disableDelayedDrag), v(e, "touchcancel", this._disableDelayedDrag), v(e, "pointerup", this._disableDelayedDrag), v(e, "pointercancel", this._disableDelayedDrag), v(e, "mousemove", this._delayedDragTouchMoveHandler), v(e, "touchmove", this._delayedDragTouchMoveHandler), v(e, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(e, n) {
    n = n || e.pointerType == "touch" && e, !this.nativeDraggable || n ? this.options.supportPointer ? _(document, "pointermove", this._onTouchMove) : n ? _(document, "touchmove", this._onTouchMove) : _(document, "mousemove", this._onTouchMove) : (_(u, "dragend", this), _(T, "dragstart", this._onDragStart));
    try {
      document.selection ? Fe(() => {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch (t) {
    }
  },
  _dragStarted: function(e, n) {
    if (he = !1, T && u) {
      W("dragStarted", this, {
        evt: n
      }), this.nativeDraggable && _(document, "dragover", Pn);
      let t = this.options;
      !e && G(u, t.dragClass, !1), G(u, t.ghostClass, !0), p.active = this, e && this._appendGhost(), H({
        sortable: this,
        name: "start",
        originalEvent: n
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (K) {
      this._lastX = K.clientX, this._lastY = K.clientY, Gt();
      let e = document.elementFromPoint(K.clientX, K.clientY), n = e;
      for (; e && e.shadowRoot && (e = e.shadowRoot.elementFromPoint(K.clientX, K.clientY), e !== n); )
        n = e;
      if (u.parentNode[V]._isOutsideThisEl(e), n)
        do {
          if (n[V]) {
            let t;
            if (t = n[V]._onDragOver({
              clientX: K.clientX,
              clientY: K.clientY,
              target: e,
              rootEl: n
            }), t && !this.options.dragoverBubble)
              break;
          }
          e = n;
        } while (
          /* jshint boss:true */
          n = Rt(n)
        );
      Ut();
    }
  },
  _onTouchMove: function(e) {
    if (se) {
      let n = this.options, t = n.fallbackTolerance, o = n.fallbackOffset, i = e.touches ? e.touches[0] : e, l = m && ge(m, !0), r = m && l && l.a, a = m && l && l.d, s = Ne && B && Et(B), c = (i.clientX - se.clientX + o.x) / (r || 1) + (s ? s[0] - Ke[0] : 0) / (r || 1), d = (i.clientY - se.clientY + o.y) / (a || 1) + (s ? s[1] - Ke[1] : 0) / (a || 1);
      if (!p.active && !he) {
        if (t && Math.max(Math.abs(i.clientX - this._lastX), Math.abs(i.clientY - this._lastY)) < t)
          return;
        this._onDragStart(e, !0);
      }
      if (m) {
        l ? (l.e += c - (qe || 0), l.f += d - (Je || 0)) : l = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: c,
          f: d
        };
        let f = `matrix(${l.a},${l.b},${l.c},${l.d},${l.e},${l.f})`;
        h(m, "webkitTransform", f), h(m, "mozTransform", f), h(m, "msTransform", f), h(m, "transform", f), qe = c, Je = d, K = i;
      }
      e.cancelable && e.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!m) {
      console.log("x");
      let e = this.options.fallbackOnBody ? document.body : T, n = P(u, !0, Ne, !0, e), t = this.options;
      if (Ne) {
        for (B = e; h(B, "position") === "static" && h(B, "transform") === "none" && B !== document; )
          B = B.parentNode;
        B !== document.body && B !== document.documentElement ? (B === document && (B = ee()), n.top += B.scrollTop, n.left += B.scrollLeft) : B = ee(), Ke = Et(B);
      }
      m = u.cloneNode(!0), G(m, t.ghostClass, !1), G(m, t.fallbackClass, !0), G(m, t.dragClass, !0), h(m, "transition", ""), h(m, "transform", ""), h(m, "box-sizing", "border-box"), h(m, "margin", 0), h(m, "top", n.top), h(m, "left", n.left), h(m, "width", n.width), h(m, "height", n.height), h(m, "opacity", "0.8"), h(m, "position", Ne ? "absolute" : "fixed"), h(m, "zIndex", "100000"), h(m, "pointerEvents", "none"), p.ghost = m, e.appendChild(m), h(m, "transform-origin", Tt / parseInt(m.style.width) * 100 + "% " + xt / parseInt(m.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(e, n) {
    let t = this, o = e.dataTransfer, i = t.options;
    if (W("dragStart", this, {
      evt: e
    }), p.eventCanceled) {
      this._onDrop();
      return;
    }
    W("setupClone", this), p.eventCanceled || (O = Ht(u), O.removeAttribute("id"), O.draggable = !1, O.style["will-change"] = "", this._hideClone(), G(O, this.options.chosenClass, !1), p.clone = O), t.cloneId = Fe(function() {
      W("clone", t), !p.eventCanceled && (t.options.removeCloneOnHide || T.insertBefore(O, u), t._hideClone(), H({
        sortable: t,
        name: "clone"
      }));
    }), !n && G(u, i.dragClass, !0), n ? (Be = !0, t._loopId = setInterval(t._emulateDragOver, 50)) : (v(document, "mouseup", t._onDrop), v(document, "touchend", t._onDrop), v(document, "touchcancel", t._onDrop), o && (o.effectAllowed = "move", i.setData && i.setData.call(t, o, u)), _(document, "drop", t), h(u, "transform", "translateZ(0)")), he = !0, t._dragStartId = Fe(t._dragStarted.bind(t, n, e)), _(document, "selectstart", t), be = !0, window.getSelection().removeAllRanges(), ve && h(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(e) {
    let n = this.el, t = e.target, o, i, l, r = this.options, a = r.group, s = p.active, c = Me === a, d = r.sort, f = R || s, b, g = this, S = !1;
    if (ot)
      return;
    function L(D, Y) {
      W(D, g, F({
        evt: e,
        isOwner: c,
        axis: b ? "vertical" : "horizontal",
        revert: l,
        dragRect: o,
        targetRect: i,
        canSort: d,
        fromSortable: f,
        target: t,
        completed: M,
        onMove(q, Q) {
          return Pe(T, n, u, o, q, P(q), e, Q);
        },
        changed: j
      }, Y));
    }
    function $() {
      L("dragOverAnimationCapture"), g.captureAnimationState(), g !== f && f.captureAnimationState();
    }
    function M(D) {
      return L("dragOverCompleted", {
        insertion: D
      }), D && (c ? s._hideClone() : s._showClone(g), g !== f && (G(u, R ? R.options.ghostClass : s.options.ghostClass, !1), G(u, r.ghostClass, !0)), R !== g && g !== p.active ? R = g : g === p.active && R && (R = null), f === g && (g._ignoreWhileAnimating = t), g.animateAll(function() {
        L("dragOverAnimationComplete"), g._ignoreWhileAnimating = null;
      }), g !== f && (f.animateAll(), f._ignoreWhileAnimating = null)), (t === u && !u.animated || t === n && !t.animated) && (de = null), !r.dragoverBubble && !e.rootEl && t !== document && (u.parentNode[V]._isOutsideThisEl(e.target), !D && ue(e)), !r.dragoverBubble && e.stopPropagation && e.stopPropagation(), S = !0;
    }
    function j() {
      U = J(u), re = J(u, r.draggable), H({
        sortable: g,
        name: "change",
        toEl: n,
        newIndex: U,
        newDraggableIndex: re,
        originalEvent: e
      });
    }
    if (e.preventDefault !== void 0 && e.cancelable && e.preventDefault(), t = Z(t, r.draggable, n, !0), L("dragOver"), p.eventCanceled)
      return S;
    if (u.contains(e.target) || t.animated && t.animatingX && t.animatingY || g._ignoreWhileAnimating === t)
      return M(!1);
    if (Be = !1, s && !r.disabled && (c ? d || (l = A !== T) : R === this || (this.lastPutMode = Me.checkPull(this, s, u, e)) && a.checkPut(this, s, u, e))) {
      if (b = this._getDirection(e, t) === "vertical", o = P(u), L("dragOverValid"), p.eventCanceled)
        return S;
      if (l)
        return A = T, $(), this._hideClone(), L("revert"), p.eventCanceled || (ce ? T.insertBefore(u, ce) : T.appendChild(u)), M(!0);
      let D = ct(n, r.draggable);
      if (!D || Rn(e, b, this) && !D.animated) {
        if (D === u)
          return M(!1);
        if (D && n === e.target && (t = D), t && (i = P(t)), Pe(T, n, u, o, t, i, e, !!t) !== !1)
          return $(), D && D.nextSibling ? n.insertBefore(u, D.nextSibling) : n.appendChild(u), A = n, j(), M(!0);
      } else if (D && Fn(e, b, this)) {
        let Y = me(n, 0, r, !0);
        if (Y === u)
          return M(!1);
        if (t = Y, i = P(t), Pe(T, n, u, o, t, i, e, !1) !== !1)
          return $(), n.insertBefore(u, Y), A = n, j(), M(!0);
      } else if (t.parentNode === n) {
        i = P(t);
        let Y = 0, q, Q = u.parentNode !== n, te = !In(u.animated && u.toRect || o, t.animated && t.toRect || i, b), w = b ? "top" : "left", y = Ct(t, "top", "top") || Ct(u, "top", "top"), X = y ? y.scrollTop : void 0;
        de !== t && (q = i[w], Ce = !1, Ie = !te && r.invertSwap || Q), Y = kn(e, t, i, b, te ? 1 : r.swapThreshold, r.invertedSwapThreshold == null ? r.swapThreshold : r.invertedSwapThreshold, Ie, de === t);
        let I;
        if (Y !== 0) {
          let k = J(u);
          do
            k -= Y, I = A.children[k];
          while (I && (h(I, "display") === "none" || I === m));
        }
        if (Y === 0 || I === t)
          return M(!1);
        de = t, De = Y;
        let C = t.nextElementSibling, E = !1;
        E = Y === 1;
        let x = Pe(T, n, u, o, t, i, e, E);
        if (x !== !1)
          return (x === 1 || x === -1) && (E = x === 1), ot = !0, setTimeout(Yn, 30), $(), E && !C ? n.appendChild(u) : t.parentNode.insertBefore(u, E ? C : t), y && Lt(y, 0, X - y.scrollTop), A = u.parentNode, q !== void 0 && !Ie && (Ye = Math.abs(q - P(t)[w])), j(), M(!0);
      }
      if (n.contains(u))
        return M(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    v(document, "mousemove", this._onTouchMove), v(document, "touchmove", this._onTouchMove), v(document, "pointermove", this._onTouchMove), v(document, "dragover", ue), v(document, "mousemove", ue), v(document, "touchmove", ue);
  },
  _offUpEvents: function() {
    let e = this.el.ownerDocument;
    v(e, "mouseup", this._onDrop), v(e, "touchend", this._onDrop), v(e, "pointerup", this._onDrop), v(e, "pointercancel", this._onDrop), v(e, "touchcancel", this._onDrop), v(document, "selectstart", this);
  },
  _onDrop: function(e) {
    let n = this.el, t = this.options;
    if (U = J(u), re = J(u, t.draggable), W("drop", this, {
      evt: e
    }), A = u && u.parentNode, U = J(u), re = J(u, t.draggable), p.eventCanceled) {
      this._nulling();
      return;
    }
    he = !1, Ie = !1, Ce = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), it(this.cloneId), it(this._dragStartId), this.nativeDraggable && (v(document, "drop", this), v(n, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), ve && h(document.body, "user-select", ""), h(u, "transform", ""), e && (be && (e.cancelable && e.preventDefault(), !t.dropBubble && e.stopPropagation()), m && m.parentNode && m.parentNode.removeChild(m), (T === A || R && R.lastPutMode !== "clone") && O && O.parentNode && O.parentNode.removeChild(O), u && (this.nativeDraggable && v(u, "dragend", this), Ze(u), u.style["will-change"] = "", be && !he && G(u, R ? R.options.ghostClass : this.options.ghostClass, !1), G(u, this.options.chosenClass, !1), H({
      sortable: this,
      name: "unchoose",
      toEl: A,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: e
    }), T !== A ? (U >= 0 && (H({
      rootEl: A,
      name: "add",
      toEl: A,
      fromEl: T,
      originalEvent: e
    }), H({
      sortable: this,
      name: "remove",
      toEl: A,
      originalEvent: e
    }), H({
      rootEl: A,
      name: "sort",
      toEl: A,
      fromEl: T,
      originalEvent: e
    }), H({
      sortable: this,
      name: "sort",
      toEl: A,
      originalEvent: e
    })), R && R.save()) : U !== pe && U >= 0 && (H({
      sortable: this,
      name: "update",
      toEl: A,
      originalEvent: e
    }), H({
      sortable: this,
      name: "sort",
      toEl: A,
      originalEvent: e
    })), p.active && ((U == null || U === -1) && (U = pe, re = _e), H({
      sortable: this,
      name: "end",
      toEl: A,
      originalEvent: e
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    W("nulling", this), T = u = A = m = ce = O = Xe = le = se = K = be = U = re = pe = _e = de = De = R = Me = p.dragged = p.ghost = p.clone = p.active = null, He.forEach(function(e) {
      e.checked = !0;
    }), He.length = qe = Je = 0;
  },
  handleEvent: function(e) {
    switch (e.type) {
      case "drop":
      case "dragend":
        this._onDrop(e);
        break;
      case "dragenter":
      case "dragover":
        u && (this._onDragOver(e), Xn(e));
        break;
      case "selectstart":
        e.preventDefault();
        break;
    }
  },
  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function() {
    let e = [], n, t = this.el.children, o = 0, i = t.length, l = this.options;
    for (; o < i; o++)
      n = t[o], Z(n, l.draggable, this.el, !1) && e.push(n.getAttribute(l.dataIdAttr) || Ln(n));
    return e;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(e, n) {
    let t = {}, o = this.el;
    this.toArray().forEach(function(i, l) {
      let r = o.children[l];
      Z(r, this.options.draggable, o, !1) && (t[i] = r);
    }, this), n && this.captureAnimationState(), e.forEach(function(i) {
      t[i] && (o.removeChild(t[i]), o.appendChild(t[i]));
    }), n && this.animateAll();
  },
  /**
   * Save the current sorting
   */
  save: function() {
    let e = this.options.store;
    e && e.set && e.set(this);
  },
  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function(e, n) {
    return Z(e, n || this.options.draggable, this.el, !1);
  },
  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function(e, n) {
    let t = this.options;
    if (n === void 0)
      return t[e];
    {
      let o = Te.modifyOption(this, e, n);
      typeof o != "undefined" ? t[e] = o : t[e] = n, e === "group" && zt(t);
    }
  },
  /**
   * Destroy
   */
  destroy: function() {
    W("destroy", this);
    let e = this.el;
    e[V] = null, v(e, "mousedown", this._onTapStart), v(e, "touchstart", this._onTapStart), v(e, "pointerdown", this._onTapStart), this.nativeDraggable && (v(e, "dragover", this), v(e, "dragenter", this)), Array.prototype.forEach.call(e.querySelectorAll("[draggable]"), function(n) {
      n.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), Le.splice(Le.indexOf(this.el), 1), this.el = e = null;
  },
  _hideClone: function() {
    if (!le) {
      if (W("hideClone", this), p.eventCanceled)
        return;
      h(O, "display", "none"), this.options.removeCloneOnHide && O.parentNode && O.parentNode.removeChild(O), le = !0;
    }
  },
  _showClone: function(e) {
    if (e.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (le) {
      if (W("showClone", this), p.eventCanceled)
        return;
      u.parentNode == T && !this.options.group.revertClone ? T.insertBefore(O, u) : ce ? T.insertBefore(O, ce) : T.appendChild(O), this.options.group.revertClone && this.animate(u, O), h(O, "display", ""), le = !1;
    }
  }
};
function Xn(e) {
  e.dataTransfer && (e.dataTransfer.dropEffect = "move"), e.cancelable && e.preventDefault();
}
function Pe(e, n, t, o, i, l, r, a) {
  let s, c = e[V], d = c.options.onMove, f;
  return window.CustomEvent && !ie && !Ee ? s = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (s = document.createEvent("Event"), s.initEvent("move", !0, !0)), s.to = n, s.from = e, s.dragged = t, s.draggedRect = o, s.related = i || n, s.relatedRect = l || P(n), s.willInsertAfter = a, s.originalEvent = r, e.dispatchEvent(s), d && (f = d.call(c, s, r)), f;
}
function Ze(e) {
  e.draggable = !1;
}
function Yn() {
  ot = !1;
}
function Fn(e, n, t) {
  let o = P(me(t.el, 0, t.options, !0));
  const i = Wt(t.el, t.options, m), l = 10;
  return n ? e.clientX < i.left - l || e.clientY < o.top && e.clientX < o.right : e.clientY < i.top - l || e.clientY < o.bottom && e.clientX < o.left;
}
function Rn(e, n, t) {
  const o = P(ct(t.el, t.options.draggable)), i = Wt(t.el, t.options, m), l = 10;
  return n ? e.clientX > i.right + l || e.clientY > o.bottom && e.clientX > o.left : e.clientY > i.bottom + l || e.clientX > o.right && e.clientY > o.top;
}
function kn(e, n, t, o, i, l, r, a) {
  let s = o ? e.clientY : e.clientX, c = o ? t.height : t.width, d = o ? t.top : t.left, f = o ? t.bottom : t.right, b = !1;
  if (!r) {
    if (a && Ye < c * i) {
      if (!Ce && (De === 1 ? s > d + c * l / 2 : s < f - c * l / 2) && (Ce = !0), Ce)
        b = !0;
      else if (De === 1 ? s < d + Ye : s > f - Ye)
        return -De;
    } else if (s > d + c * (1 - i) / 2 && s < f - c * (1 - i) / 2)
      return Bn(n);
  }
  return b = b || r, b && (s < d + c * l / 2 || s > f - c * l / 2) ? s > d + c / 2 ? 1 : -1 : 0;
}
function Bn(e) {
  return J(u) < J(e) ? 1 : -1;
}
function Ln(e) {
  let n = e.tagName + e.className + e.src + e.href + e.textContent, t = n.length, o = 0;
  for (; t--; )
    o += n.charCodeAt(t);
  return o.toString(36);
}
function Hn(e) {
  He.length = 0;
  let n = e.getElementsByTagName("input"), t = n.length;
  for (; t--; ) {
    let o = n[t];
    o.checked && He.push(o);
  }
}
function Fe(e) {
  return setTimeout(e, 0);
}
function it(e) {
  return clearTimeout(e);
}
Ve && _(document, "touchmove", function(e) {
  (p.active || he) && e.cancelable && e.preventDefault();
});
p.utils = {
  on: _,
  off: v,
  css: h,
  find: kt,
  is: function(e, n) {
    return !!Z(e, n, e, !1);
  },
  extend: Cn,
  throttle: Bt,
  closest: Z,
  toggleClass: G,
  clone: Ht,
  index: J,
  nextTick: Fe,
  cancelNextTick: it,
  detectDirection: $t,
  getChild: me,
  expando: V
};
p.get = function(e) {
  return e[V];
};
p.mount = function(...e) {
  e[0].constructor === Array && (e = e[0]), e.forEach((n) => {
    if (!n.prototype || !n.prototype.constructor)
      throw `Sortable: Mounted plugin must be a constructor function, not ${{}.toString.call(n)}`;
    n.utils && (p.utils = F(F({}, p.utils), n.utils)), Te.mount(n);
  });
};
p.create = function(e, n) {
  return new p(e, n);
};
p.version = _n;
let N = [], we, rt, lt = !1, Qe, et, We, ye;
function Wn() {
  function e() {
    this.defaults = {
      scroll: !0,
      forceAutoScrollFallback: !1,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: !0
    };
    for (let n in this)
      n.charAt(0) === "_" && typeof this[n] == "function" && (this[n] = this[n].bind(this));
  }
  return e.prototype = {
    dragStarted({
      originalEvent: n
    }) {
      this.sortable.nativeDraggable ? _(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? _(document, "pointermove", this._handleFallbackAutoScroll) : n.touches ? _(document, "touchmove", this._handleFallbackAutoScroll) : _(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted({
      originalEvent: n
    }) {
      !this.options.dragOverBubble && !n.rootEl && this._handleAutoScroll(n);
    },
    drop() {
      this.sortable.nativeDraggable ? v(document, "dragover", this._handleAutoScroll) : (v(document, "pointermove", this._handleFallbackAutoScroll), v(document, "touchmove", this._handleFallbackAutoScroll), v(document, "mousemove", this._handleFallbackAutoScroll)), At(), Re(), En();
    },
    nulling() {
      We = rt = we = lt = ye = Qe = et = null, N.length = 0;
    },
    _handleFallbackAutoScroll(n) {
      this._handleAutoScroll(n, !0);
    },
    _handleAutoScroll(n, t) {
      const o = (n.touches ? n.touches[0] : n).clientX, i = (n.touches ? n.touches[0] : n).clientY, l = document.elementFromPoint(o, i);
      if (We = n, t || this.options.forceAutoScrollFallback || Ee || ie || ve) {
        tt(n, this.options, l, t);
        let r = ae(l, !0);
        lt && (!ye || o !== Qe || i !== et) && (ye && At(), ye = setInterval(() => {
          let a = ae(document.elementFromPoint(o, i), !0);
          a !== r && (r = a, Re()), tt(n, this.options, a, t);
        }, 10), Qe = o, et = i);
      } else {
        if (!this.options.bubbleScroll || ae(l, !0) === ee()) {
          Re();
          return;
        }
        tt(n, this.options, ae(l, !1), !1);
      }
    }
  }, oe(e, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function Re() {
  N.forEach(function(e) {
    clearInterval(e.pid);
  }), N = [];
}
function At() {
  clearInterval(ye);
}
const tt = Bt(function(e, n, t, o) {
  if (!n.scroll)
    return;
  const i = (e.touches ? e.touches[0] : e).clientX, l = (e.touches ? e.touches[0] : e).clientY, r = n.scrollSensitivity, a = n.scrollSpeed, s = ee();
  let c = !1, d;
  rt !== t && (rt = t, Re(), we = n.scroll, d = n.scrollFn, we === !0 && (we = ae(t, !0)));
  let f = 0, b = we;
  do {
    let g = b, S = P(g), L = S.top, $ = S.bottom, M = S.left, j = S.right, D = S.width, Y = S.height, q, Q, te = g.scrollWidth, w = g.scrollHeight, y = h(g), X = g.scrollLeft, I = g.scrollTop;
    g === s ? (q = D < te && (y.overflowX === "auto" || y.overflowX === "scroll" || y.overflowX === "visible"), Q = Y < w && (y.overflowY === "auto" || y.overflowY === "scroll" || y.overflowY === "visible")) : (q = D < te && (y.overflowX === "auto" || y.overflowX === "scroll"), Q = Y < w && (y.overflowY === "auto" || y.overflowY === "scroll"));
    let C = q && (Math.abs(j - i) <= r && X + D < te) - (Math.abs(M - i) <= r && !!X), E = Q && (Math.abs($ - l) <= r && I + Y < w) - (Math.abs(L - l) <= r && !!I);
    if (!N[f])
      for (let x = 0; x <= f; x++)
        N[x] || (N[x] = {});
    (N[f].vx != C || N[f].vy != E || N[f].el !== g) && (N[f].el = g, N[f].vx = C, N[f].vy = E, clearInterval(N[f].pid), (C != 0 || E != 0) && (c = !0, N[f].pid = setInterval(function() {
      o && this.layer === 0 && p.active._onTouchMove(We);
      let x = N[this.layer].vy ? N[this.layer].vy * a : 0, k = N[this.layer].vx ? N[this.layer].vx * a : 0;
      typeof d == "function" && d.call(p.dragged.parentNode[V], k, x, e, We, N[this.layer].el) !== "continue" || Lt(N[this.layer].el, k, x);
    }.bind({
      layer: f
    }), 24))), f++;
  } while (n.bubbleScroll && b !== s && (b = ae(b, !1)));
  lt = c;
}, 30), jt = function({
  originalEvent: e,
  putSortable: n,
  dragEl: t,
  activeSortable: o,
  dispatchSortableEvent: i,
  hideGhostForTarget: l,
  unhideGhostForTarget: r
}) {
  if (!e)
    return;
  let a = n || o;
  l();
  let s = e.changedTouches && e.changedTouches.length ? e.changedTouches[0] : e, c = document.elementFromPoint(s.clientX, s.clientY);
  r(), a && !a.el.contains(c) && (i("spill"), this.onSpill({
    dragEl: t,
    putSortable: n
  }));
};
function ft() {
}
ft.prototype = {
  startIndex: null,
  dragStart({
    oldDraggableIndex: e
  }) {
    this.startIndex = e;
  },
  onSpill({
    dragEl: e,
    putSortable: n
  }) {
    this.sortable.captureAnimationState(), n && n.captureAnimationState();
    let t = me(this.sortable.el, this.startIndex, this.options);
    t ? this.sortable.el.insertBefore(e, t) : this.sortable.el.appendChild(e), this.sortable.animateAll(), n && n.animateAll();
  },
  drop: jt
};
oe(ft, {
  pluginName: "revertOnSpill"
});
function dt() {
}
dt.prototype = {
  onSpill({
    dragEl: e,
    putSortable: n
  }) {
    const t = n || this.sortable;
    t.captureAnimationState(), e.parentNode && e.parentNode.removeChild(e), t.animateAll();
  },
  drop: jt
};
oe(dt, {
  pluginName: "removeOnSpill"
});
p.mount(new Wn());
p.mount(dt, ft);
function Vn(e) {
  return e == null ? e : JSON.parse(JSON.stringify(e));
}
function $n(e) {
  st() && tn(e);
}
function zn(e) {
  st() ? nn(e) : Pt(e);
}
let qt = null, Jt = null;
function Mt(e = null, n = null) {
  qt = e, Jt = n;
}
function Gn() {
  return {
    data: qt,
    clonedData: Jt
  };
}
const It = Symbol("cloneElement");
function Kt(...e) {
  var Q, te;
  const n = (Q = st()) == null ? void 0 : Q.proxy;
  let t = null;
  const o = e[0];
  let [, i, l] = e;
  Array.isArray(z(i)) || (l = i, i = null);
  let r = null;
  const {
    immediate: a = !0,
    clone: s = Vn,
    customUpdate: c
  } = (te = z(l)) != null ? te : {};
  function d(w) {
    var x;
    const { from: y, oldIndex: X, item: I } = w;
    t = Array.from(y.childNodes);
    const C = z((x = z(i)) == null ? void 0 : x[X]), E = s(C);
    Mt(C, E), I[It] = E;
  }
  function f(w) {
    const y = w.item[It];
    if (!pn(y)) {
      if (Ge(w.item), ze(i)) {
        const X = [...z(i)];
        i.value = yt(X, w.newDraggableIndex, y);
        return;
      }
      yt(z(i), w.newDraggableIndex, y);
    }
  }
  function b(w) {
    const { from: y, item: X, oldIndex: I, oldDraggableIndex: C, pullMode: E, clone: x } = w;
    if (vt(y, X, I), E === "clone") {
      Ge(x);
      return;
    }
    if (ze(i)) {
      const k = [...z(i)];
      i.value = wt(k, C);
      return;
    }
    wt(z(i), C);
  }
  function g(w) {
    if (c) {
      c(w);
      return;
    }
    const { from: y, item: X, oldIndex: I, oldDraggableIndex: C, newDraggableIndex: E } = w;
    if (Ge(X), vt(y, X, I), ze(i)) {
      const x = [...z(i)];
      i.value = bt(
        x,
        C,
        E
      );
      return;
    }
    bt(z(i), C, E);
  }
  function S(w) {
    const { newIndex: y, oldIndex: X, from: I, to: C } = w;
    let E = null;
    const x = y === X && I === C;
    try {
      if (x) {
        let k = null;
        t == null || t.some((xe, $e) => {
          if (k && (t == null ? void 0 : t.length) !== C.childNodes.length)
            return I.insertBefore(k, xe.nextSibling), !0;
          const Zt = C.childNodes[$e];
          k = C == null ? void 0 : C.replaceChild(xe, Zt);
        });
      }
    } catch (k) {
      E = k;
    } finally {
      t = null;
    }
    Pt(() => {
      if (Mt(), E)
        throw E;
    });
  }
  const L = {
    onUpdate: g,
    onStart: d,
    onAdd: f,
    onRemove: b,
    onEnd: S
  };
  function $(w) {
    const y = z(o);
    return w || (w = gn(y) ? mn(y, n == null ? void 0 : n.$el) : y), w && !yn(w) && (w = w.$el), w || fn("Root element not found"), w;
  }
  function M() {
    var I;
    const C = (I = z(l)) != null ? I : {}, { immediate: w, clone: y } = C, X = Ae(C, ["immediate", "clone"]);
    return St(X, (E, x) => {
      vn(E) && (X[E] = (k, ...xe) => {
        const $e = Gn();
        return Sn(k, $e), x(k, ...xe);
      });
    }), wn(
      i === null ? {} : L,
      X
    );
  }
  const j = (w) => {
    w = $(w), r && D.destroy(), r = new p(w, M());
  };
  en(
    () => l,
    () => {
      r && St(M(), (w, y) => {
        r == null || r.option(w, y);
      });
    },
    { deep: !0 }
  );
  const D = {
    option: (w, y) => r == null ? void 0 : r.option(w, y),
    destroy: () => {
      r == null || r.destroy(), r = null;
    },
    save: () => r == null ? void 0 : r.save(),
    toArray: () => r == null ? void 0 : r.toArray(),
    closest: (...w) => r == null ? void 0 : r.closest(...w)
  }, Y = () => D == null ? void 0 : D.option("disabled", !0), q = () => D == null ? void 0 : D.option("disabled", !1);
  return zn(() => {
    a && j();
  }), $n(D.destroy), F({ start: j, pause: Y, resume: q }, D);
}
const at = [
  "update",
  "start",
  "add",
  "remove",
  "choose",
  "unchoose",
  "end",
  "sort",
  "filter",
  "clone",
  "move",
  "change"
], Un = [
  "clone",
  "animation",
  "ghostClass",
  "group",
  "sort",
  "disabled",
  "store",
  "handle",
  "draggable",
  "swapThreshold",
  "invertSwap",
  "invertedSwapThreshold",
  "removeCloneOnHide",
  "direction",
  "chosenClass",
  "dragClass",
  "ignore",
  "filter",
  "preventOnFilter",
  "easing",
  "setData",
  "dropBubble",
  "dragoverBubble",
  "dataIdAttr",
  "delay",
  "delayOnTouchOnly",
  "touchStartThreshold",
  "forceFallback",
  "fallbackClass",
  "fallbackOnBody",
  "fallbackTolerance",
  "fallbackOffset",
  "supportPointer",
  "emptyInsertThreshold",
  "scroll",
  "forceAutoScrollFallback",
  "scrollSensitivity",
  "scrollSpeed",
  "bubbleScroll",
  "modelValue",
  "tag",
  "target",
  "customUpdate",
  ...at.map((e) => `on${e.replace(/^\S/, (n) => n.toUpperCase())}`)
], Jn = on({
  name: "VueDraggable",
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: Un,
  emits: ["update:modelValue", ...at],
  setup(e, { slots: n, emit: t, expose: o, attrs: i }) {
    const l = at.reduce((d, f) => {
      const b = `on${f.replace(/^\S/, (g) => g.toUpperCase())}`;
      return d[b] = (...g) => t(f, ...g), d;
    }, {}), r = mt(() => {
      const g = rn(e), { modelValue: d } = g, f = Ae(g, ["modelValue"]), b = Object.entries(f).reduce((S, [L, $]) => {
        const M = z($);
        return M !== void 0 && (S[L] = M), S;
      }, {});
      return F(F({}, l), hn(F(F({}, i), b)));
    }), a = mt({
      get: () => e.modelValue,
      set: (d) => t("update:modelValue", d)
    }), s = ln(), c = an(
      Kt(e.target || s, a, r)
    );
    return o(c), () => {
      var d;
      return sn(e.tag || "div", { ref: s }, (d = n == null ? void 0 : n.default) == null ? void 0 : d.call(n, c));
    };
  }
}), Nt = {
  mounted: "mounted",
  unmounted: "unmounted"
}, nt = /* @__PURE__ */ new WeakMap(), Kn = {
  [Nt.mounted](e, n) {
    const t = un(n.value) ? [n.value] : n.value, [o, i] = t, l = Kt(e, o, i);
    nt.set(e, l.destroy);
  },
  [Nt.unmounted](e) {
    var n;
    (n = nt.get(e)) == null || n(), nt.delete(e);
  }
};
export {
  Jn as VueDraggable,
  Kt as useDraggable,
  Kn as vDraggable
};
