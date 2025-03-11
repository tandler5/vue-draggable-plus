var rn = Object.defineProperty;
var Ne = Object.getOwnPropertySymbols;
var vt = Object.prototype.hasOwnProperty, bt = Object.prototype.propertyIsEnumerable;
var mt = (t, e, n) => e in t ? rn(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, fe = (t, e) => {
  for (var n in e || (e = {}))
    vt.call(e, n) && mt(t, n, e[n]);
  if (Ne)
    for (var n of Ne(e))
      bt.call(e, n) && mt(t, n, e[n]);
  return t;
};
var Ve = (t, e) => {
  var n = {};
  for (var o in t)
    vt.call(t, o) && e.indexOf(o) < 0 && (n[o] = t[o]);
  if (t != null && Ne)
    for (var o of Ne(t))
      e.indexOf(o) < 0 && bt.call(t, o) && (n[o] = t[o]);
  return n;
};
import { getCurrentInstance as ft, unref as U, watch as an, onUnmounted as ln, onMounted as sn, nextTick as Yt, isRef as $e, defineComponent as un, computed as yt, toRefs as cn, ref as fn, reactive as dn, h as hn, isProxy as pn } from "vue";
const Bt = "[vue-draggable-plus]: ";
function gn(t) {
  console.warn(Bt + t);
}
function mn(t) {
  console.error(Bt + t);
}
function wt(t, e, n) {
  return n >= 0 && n < t.length && t.splice(n, 0, t.splice(e, 1)[0]), t;
}
function vn(t) {
  return t.replace(/-(\w)/g, (e, n) => n ? n.toUpperCase() : "");
}
function bn(t) {
  return Object.keys(t).reduce((e, n) => (typeof t[n] != "undefined" && (e[vn(n)] = t[n]), e), {});
}
function Et(t, e) {
  return Array.isArray(t) && t.splice(e, 1), t;
}
function St(t, e, n) {
  return Array.isArray(t) && t.splice(e, 0, n), t;
}
function yn(t) {
  return typeof t == "undefined";
}
function wn(t) {
  return typeof t == "string";
}
function _t(t, e, n) {
  const o = t.children[n];
  t.insertBefore(e, o);
}
function qe(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function En(t, e = document) {
  var o;
  let n = null;
  return typeof (e == null ? void 0 : e.querySelector) == "function" ? n = (o = e == null ? void 0 : e.querySelector) == null ? void 0 : o.call(e, t) : n = document.querySelector(t), n || gn(`Element not found: ${t}`), n;
}
function Sn(t, e, n = null) {
  return function(...o) {
    return t.apply(n, o), e.apply(n, o);
  };
}
function _n(t, e) {
  const n = fe({}, t);
  return Object.keys(e).forEach((o) => {
    n[o] ? n[o] = Sn(t[o], e[o]) : n[o] = e[o];
  }), n;
}
function Dn(t) {
  return t instanceof HTMLElement;
}
function Dt(t, e) {
  Object.keys(t).forEach((n) => {
    e(n, t[n]);
  });
}
function Tn(t) {
  return t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && (t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97);
}
const Cn = Object.assign;
/**!
 * Sortable 1.15.2
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function Tt(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    e && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(t, r).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function te(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Tt(Object(n), !0).forEach(function(o) {
      On(t, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Tt(Object(n)).forEach(function(o) {
      Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return t;
}
function Xe(t) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Xe = function(e) {
    return typeof e;
  } : Xe = function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Xe(t);
}
function On(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
function re() {
  return re = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, re.apply(this, arguments);
}
function In(t, e) {
  if (t == null)
    return {};
  var n = {}, o = Object.keys(t), r, i;
  for (i = 0; i < o.length; i++)
    r = o[i], !(e.indexOf(r) >= 0) && (n[r] = t[r]);
  return n;
}
function An(t, e) {
  if (t == null)
    return {};
  var n = In(t, e), o, r;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (r = 0; r < i.length; r++)
      o = i[r], !(e.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(t, o) && (n[o] = t[o]);
  }
  return n;
}
var xn = "1.15.2";
function oe(t) {
  if (typeof window != "undefined" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(t);
}
var ie = oe(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), Ae = oe(/Edge/i), Ct = oe(/firefox/i), De = oe(/safari/i) && !oe(/chrome/i) && !oe(/android/i), kt = oe(/iP(ad|od|hone)/i), Ht = oe(/chrome/i) && oe(/android/i), Lt = {
  capture: !1,
  passive: !1
};
function _(t, e, n) {
  t.addEventListener(e, n, !ie && Lt);
}
function S(t, e, n) {
  t.removeEventListener(e, n, !ie && Lt);
}
function Le(t, e) {
  if (e) {
    if (e[0] === ">" && (e = e.substring(1)), t)
      try {
        if (t.matches)
          return t.matches(e);
        if (t.msMatchesSelector)
          return t.msMatchesSelector(e);
        if (t.webkitMatchesSelector)
          return t.webkitMatchesSelector(e);
      } catch (n) {
        return !1;
      }
    return !1;
  }
}
function Nn(t) {
  return t.host && t !== document && t.host.nodeType ? t.host : t.parentNode;
}
function Z(t, e, n, o) {
  if (t) {
    n = n || document;
    do {
      if (e != null && (e[0] === ">" ? t.parentNode === n && Le(t, e) : Le(t, e)) || o && t === n)
        return t;
      if (t === n)
        break;
    } while (t = Nn(t));
  }
  return null;
}
var Ot = /\s+/g;
function V(t, e, n) {
  if (t && e)
    if (t.classList)
      t.classList[n ? "add" : "remove"](e);
    else {
      var o = (" " + t.className + " ").replace(Ot, " ").replace(" " + e + " ", " ");
      t.className = (o + (n ? " " + e : "")).replace(Ot, " ");
    }
}
function h(t, e, n) {
  var o = t && t.style;
  if (o) {
    if (n === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? n = document.defaultView.getComputedStyle(t, "") : t.currentStyle && (n = t.currentStyle), e === void 0 ? n : n[e];
    !(e in o) && e.indexOf("webkit") === -1 && (e = "-webkit-" + e), o[e] = n + (typeof n == "string" ? "" : "px");
  }
}
function ye(t, e) {
  var n = "";
  if (typeof t == "string")
    n = t;
  else
    do {
      var o = h(t, "transform");
      o && o !== "none" && (n = o + " " + n);
    } while (!e && (t = t.parentNode));
  var r = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return r && new r(n);
}
function Gt(t, e, n) {
  if (t) {
    var o = t.getElementsByTagName(e), r = 0, i = o.length;
    if (n)
      for (; r < i; r++)
        n(o[r], r);
    return o;
  }
  return [];
}
function ee() {
  var t = document.scrollingElement;
  return t || document.documentElement;
}
function M(t, e, n, o, r) {
  if (!(!t.getBoundingClientRect && t !== window)) {
    var i, a, l, s, u, d, f;
    if (t !== window && t.parentNode && t !== ee() ? (i = t.getBoundingClientRect(), a = i.top, l = i.left, s = i.bottom, u = i.right, d = i.height, f = i.width) : (a = 0, l = 0, s = window.innerHeight, u = window.innerWidth, d = window.innerHeight, f = window.innerWidth), (e || n) && t !== window && (r = r || t.parentNode, !ie))
      do
        if (r && r.getBoundingClientRect && (h(r, "transform") !== "none" || n && h(r, "position") !== "static")) {
          var m = r.getBoundingClientRect();
          a -= m.top + parseInt(h(r, "border-top-width")), l -= m.left + parseInt(h(r, "border-left-width")), s = a + i.height, u = l + i.width;
          break;
        }
      while (r = r.parentNode);
    if (o && t !== window) {
      var y = ye(r || t), b = y && y.a, E = y && y.d;
      y && (a /= E, l /= b, f /= b, d /= E, s = a + d, u = l + f);
    }
    return {
      top: a,
      left: l,
      bottom: s,
      right: u,
      width: f,
      height: d
    };
  }
}
function It(t, e, n) {
  for (var o = ue(t, !0), r = M(t)[e]; o; ) {
    var i = M(o)[n], a = void 0;
    if (a = r >= i, !a)
      return o;
    if (o === ee())
      break;
    o = ue(o, !1);
  }
  return !1;
}
function we(t, e, n, o) {
  for (var r = 0, i = 0, a = t.children; i < a.length; ) {
    if (a[i].style.display !== "none" && a[i] !== p.ghost && (o || a[i] !== p.dragged) && Z(a[i], n.draggable, t, !1)) {
      if (r === e)
        return a[i];
      r++;
    }
    i++;
  }
  return null;
}
function dt(t, e) {
  for (var n = t.lastElementChild; n && (n === p.ghost || h(n, "display") === "none" || e && !Le(n, e)); )
    n = n.previousElementSibling;
  return n || null;
}
function K(t, e) {
  var n = 0;
  if (!t || !t.parentNode)
    return -1;
  for (; t = t.previousElementSibling; )
    t.nodeName.toUpperCase() !== "TEMPLATE" && t !== p.clone && (!e || Le(t, e)) && n++;
  return n;
}
function At(t) {
  var e = 0, n = 0, o = ee();
  if (t)
    do {
      var r = ye(t), i = r.a, a = r.d;
      e += t.scrollLeft * i, n += t.scrollTop * a;
    } while (t !== o && (t = t.parentNode));
  return [e, n];
}
function Pn(t, e) {
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      for (var o in e)
        if (e.hasOwnProperty(o) && e[o] === t[n][o])
          return Number(n);
    }
  return -1;
}
function ue(t, e) {
  if (!t || !t.getBoundingClientRect)
    return ee();
  var n = t, o = !1;
  do
    if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
      var r = h(n);
      if (n.clientWidth < n.scrollWidth && (r.overflowX == "auto" || r.overflowX == "scroll") || n.clientHeight < n.scrollHeight && (r.overflowY == "auto" || r.overflowY == "scroll")) {
        if (!n.getBoundingClientRect || n === document.body)
          return ee();
        if (o || e)
          return n;
        o = !0;
      }
    }
  while (n = n.parentNode);
  return ee();
}
function Mn(t, e) {
  if (t && e)
    for (var n in e)
      e.hasOwnProperty(n) && (t[n] = e[n]);
  return t;
}
function Ke(t, e) {
  return Math.round(t.top) === Math.round(e.top) && Math.round(t.left) === Math.round(e.left) && Math.round(t.height) === Math.round(e.height) && Math.round(t.width) === Math.round(e.width);
}
var Te;
function Wt(t, e) {
  return function() {
    if (!Te) {
      var n = arguments, o = this;
      n.length === 1 ? t.call(o, n[0]) : t.apply(o, n), Te = setTimeout(function() {
        Te = void 0;
      }, e);
    }
  };
}
function Fn() {
  clearTimeout(Te), Te = void 0;
}
function jt(t, e, n) {
  t.scrollLeft += e, t.scrollTop += n;
}
function zt(t) {
  var e = window.Polymer, n = window.jQuery || window.Zepto;
  return e && e.dom ? e.dom(t).cloneNode(!0) : n ? n(t).clone(!0)[0] : t.cloneNode(!0);
}
function Ut(t, e, n) {
  var o = {};
  return Array.from(t.children).forEach(function(r) {
    var i, a, l, s;
    if (!(!Z(r, e.draggable, t, !1) || r.animated || r === n)) {
      var u = M(r);
      o.left = Math.min((i = o.left) !== null && i !== void 0 ? i : 1 / 0, u.left), o.top = Math.min((a = o.top) !== null && a !== void 0 ? a : 1 / 0, u.top), o.right = Math.max((l = o.right) !== null && l !== void 0 ? l : -1 / 0, u.right), o.bottom = Math.max((s = o.bottom) !== null && s !== void 0 ? s : -1 / 0, u.bottom);
    }
  }), o.width = o.right - o.left, o.height = o.bottom - o.top, o.x = o.left, o.y = o.top, o;
}
var q = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function Rn() {
  var t = [], e;
  return {
    captureAnimationState: function() {
      if (t = [], !!this.options.animation) {
        var o = [].slice.call(this.el.children);
        o.forEach(function(r) {
          if (!(h(r, "display") === "none" || r === p.ghost)) {
            t.push({
              target: r,
              rect: M(r)
            });
            var i = te({}, t[t.length - 1].rect);
            if (r.thisAnimationDuration) {
              var a = ye(r, !0);
              a && (i.top -= a.f, i.left -= a.e);
            }
            r.fromRect = i;
          }
        });
      }
    },
    addAnimationState: function(o) {
      t.push(o);
    },
    removeAnimationState: function(o) {
      t.splice(Pn(t, {
        target: o
      }), 1);
    },
    animateAll: function(o) {
      var r = this;
      if (!this.options.animation) {
        clearTimeout(e), typeof o == "function" && o();
        return;
      }
      var i = !1, a = 0;
      t.forEach(function(l) {
        var s = 0, u = l.target, d = u.fromRect, f = M(u), m = u.prevFromRect, y = u.prevToRect, b = l.rect, E = ye(u, !0);
        E && (f.top -= E.f, f.left -= E.e), u.toRect = f, u.thisAnimationDuration && Ke(m, f) && !Ke(d, f) && // Make sure animatingRect is on line between toRect & fromRect
        (b.top - f.top) / (b.left - f.left) === (d.top - f.top) / (d.left - f.left) && (s = Yn(b, m, y, r.options)), Ke(f, d) || (u.prevFromRect = d, u.prevToRect = f, s || (s = r.options.animation), r.animate(u, b, f, s)), s && (i = !0, a = Math.max(a, s), clearTimeout(u.animationResetTimer), u.animationResetTimer = setTimeout(function() {
          u.animationTime = 0, u.prevFromRect = null, u.fromRect = null, u.prevToRect = null, u.thisAnimationDuration = null;
        }, s), u.thisAnimationDuration = s);
      }), clearTimeout(e), i ? e = setTimeout(function() {
        typeof o == "function" && o();
      }, a) : typeof o == "function" && o(), t = [];
    },
    animate: function(o, r, i, a) {
      if (a) {
        h(o, "transition", ""), h(o, "transform", "");
        var l = ye(this.el), s = l && l.a, u = l && l.d, d = (r.left - i.left) / (s || 1), f = (r.top - i.top) / (u || 1);
        o.animatingX = !!d, o.animatingY = !!f, h(o, "transform", "translate3d(" + d + "px," + f + "px,0)"), this.forRepaintDummy = Xn(o), h(o, "transition", "transform " + a + "ms" + (this.options.easing ? " " + this.options.easing : "")), h(o, "transform", "translate3d(0,0,0)"), typeof o.animated == "number" && clearTimeout(o.animated), o.animated = setTimeout(function() {
          h(o, "transition", ""), h(o, "transform", ""), o.animated = !1, o.animatingX = !1, o.animatingY = !1;
        }, a);
      }
    }
  };
}
function Xn(t) {
  return t.offsetWidth;
}
function Yn(t, e, n, o) {
  return Math.sqrt(Math.pow(e.top - t.top, 2) + Math.pow(e.left - t.left, 2)) / Math.sqrt(Math.pow(e.top - n.top, 2) + Math.pow(e.left - n.left, 2)) * o.animation;
}
var ge = [], Je = {
  initializeByDefault: !0
}, xe = {
  mount: function(e) {
    for (var n in Je)
      Je.hasOwnProperty(n) && !(n in e) && (e[n] = Je[n]);
    ge.forEach(function(o) {
      if (o.pluginName === e.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(e.pluginName, " more than once");
    }), ge.push(e);
  },
  pluginEvent: function(e, n, o) {
    var r = this;
    this.eventCanceled = !1, o.cancel = function() {
      r.eventCanceled = !0;
    };
    var i = e + "Global";
    ge.forEach(function(a) {
      n[a.pluginName] && (n[a.pluginName][i] && n[a.pluginName][i](te({
        sortable: n
      }, o)), n.options[a.pluginName] && n[a.pluginName][e] && n[a.pluginName][e](te({
        sortable: n
      }, o)));
    });
  },
  initializePlugins: function(e, n, o, r) {
    ge.forEach(function(l) {
      var s = l.pluginName;
      if (!(!e.options[s] && !l.initializeByDefault)) {
        var u = new l(e, n, e.options);
        u.sortable = e, u.options = e.options, e[s] = u, re(o, u.defaults);
      }
    });
    for (var i in e.options)
      if (e.options.hasOwnProperty(i)) {
        var a = this.modifyOption(e, i, e.options[i]);
        typeof a != "undefined" && (e.options[i] = a);
      }
  },
  getEventProperties: function(e, n) {
    var o = {};
    return ge.forEach(function(r) {
      typeof r.eventProperties == "function" && re(o, r.eventProperties.call(n[r.pluginName], e));
    }), o;
  },
  modifyOption: function(e, n, o) {
    var r;
    return ge.forEach(function(i) {
      e[i.pluginName] && i.optionListeners && typeof i.optionListeners[n] == "function" && (r = i.optionListeners[n].call(e[i.pluginName], o));
    }), r;
  }
};
function Bn(t) {
  var e = t.sortable, n = t.rootEl, o = t.name, r = t.targetEl, i = t.cloneEl, a = t.toEl, l = t.fromEl, s = t.oldIndex, u = t.newIndex, d = t.oldDraggableIndex, f = t.newDraggableIndex, m = t.originalEvent, y = t.putSortable, b = t.extraEventProperties;
  if (e = e || n && n[q], !!e) {
    var E, k = e.options, H = "on" + o.charAt(0).toUpperCase() + o.substr(1);
    window.CustomEvent && !ie && !Ae ? E = new CustomEvent(o, {
      bubbles: !0,
      cancelable: !0
    }) : (E = document.createEvent("Event"), E.initEvent(o, !0, !0)), E.to = a || n, E.from = l || n, E.item = r || n, E.clone = i, E.oldIndex = s, E.newIndex = u, E.oldDraggableIndex = d, E.newDraggableIndex = f, E.originalEvent = m, E.pullMode = y ? y.lastPutMode : void 0;
    var F = te(te({}, b), xe.getEventProperties(o, e));
    for (var A in F)
      E[A] = F[A];
    n && n.dispatchEvent(E), k[H] && k[H].call(e, E);
  }
}
var kn = ["evt"], W = function(e, n) {
  var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = o.evt, i = An(o, kn);
  xe.pluginEvent.bind(p)(e, n, te({
    dragEl: c,
    parentEl: I,
    ghostEl: g,
    rootEl: C,
    nextEl: pe,
    lastDownEl: Ye,
    cloneEl: O,
    cloneHidden: se,
    dragStarted: Ee,
    putSortable: X,
    activeSortable: p.active,
    originalEvent: r,
    oldIndex: be,
    oldDraggableIndex: Ce,
    newIndex: $,
    newDraggableIndex: le,
    hideGhostForTarget: Kt,
    unhideGhostForTarget: Jt,
    cloneNowHidden: function() {
      se = !0;
    },
    cloneNowShown: function() {
      se = !1;
    },
    dispatchSortableEvent: function(l) {
      G({
        sortable: n,
        name: l,
        originalEvent: r
      });
    }
  }, i));
};
function G(t) {
  Bn(te({
    putSortable: X,
    cloneEl: O,
    targetEl: c,
    rootEl: C,
    oldIndex: be,
    oldDraggableIndex: Ce,
    newIndex: $,
    newDraggableIndex: le
  }, t));
}
var c, I, g, C, pe, Ye, O, se, be, $, Ce, le, Pe, X, ve = !1, Ge = !1, We = [], de, J, Ze, Qe, xt, Nt, Ee, me, Oe, Ie = !1, Me = !1, Be, B, et = [], at = !1, je = [], Ue = typeof document != "undefined", Fe = kt, Pt = Ae || ie ? "cssFloat" : "float", Hn = Ue && !Ht && !kt && "draggable" in document.createElement("div"), Vt = function() {
  if (Ue) {
    if (ie)
      return !1;
    var t = document.createElement("x");
    return t.style.cssText = "pointer-events:auto", t.style.pointerEvents === "auto";
  }
}(), $t = function(e, n) {
  var o = h(e), r = parseInt(o.width) - parseInt(o.paddingLeft) - parseInt(o.paddingRight) - parseInt(o.borderLeftWidth) - parseInt(o.borderRightWidth), i = we(e, 0, n), a = we(e, 1, n), l = i && h(i), s = a && h(a), u = l && parseInt(l.marginLeft) + parseInt(l.marginRight) + M(i).width, d = s && parseInt(s.marginLeft) + parseInt(s.marginRight) + M(a).width;
  if (o.display === "flex")
    return o.flexDirection === "column" || o.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (o.display === "grid")
    return o.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (i && l.float && l.float !== "none") {
    var f = l.float === "left" ? "left" : "right";
    return a && (s.clear === "both" || s.clear === f) ? "vertical" : "horizontal";
  }
  return i && (l.display === "block" || l.display === "flex" || l.display === "table" || l.display === "grid" || u >= r && o[Pt] === "none" || a && o[Pt] === "none" && u + d > r) ? "vertical" : "horizontal";
}, Ln = function(e, n, o) {
  var r = o ? e.left : e.top, i = o ? e.right : e.bottom, a = o ? e.width : e.height, l = o ? n.left : n.top, s = o ? n.right : n.bottom, u = o ? n.width : n.height;
  return r === l || i === s || r + a / 2 === l + u / 2;
}, Gn = function(e, n) {
  var o;
  return We.some(function(r) {
    var i = r[q].options.emptyInsertThreshold;
    if (!(!i || dt(r))) {
      var a = M(r), l = e >= a.left - i && e <= a.right + i, s = n >= a.top - i && n <= a.bottom + i;
      if (l && s)
        return o = r;
    }
  }), o;
}, qt = function(e) {
  function n(i, a) {
    return function(l, s, u, d) {
      var f = l.options.group.name && s.options.group.name && l.options.group.name === s.options.group.name;
      if (i == null && (a || f))
        return !0;
      if (i == null || i === !1)
        return !1;
      if (a && i === "clone")
        return i;
      if (typeof i == "function")
        return n(i(l, s, u, d), a)(l, s, u, d);
      var m = (a ? l : s).options.group.name;
      return i === !0 || typeof i == "string" && i === m || i.join && i.indexOf(m) > -1;
    };
  }
  var o = {}, r = e.group;
  (!r || Xe(r) != "object") && (r = {
    name: r
  }), o.name = r.name, o.checkPull = n(r.pull, !0), o.checkPut = n(r.put), o.revertClone = r.revertClone, e.group = o;
}, Kt = function() {
  !Vt && g && h(g, "display", "none");
}, Jt = function() {
  !Vt && g && h(g, "display", "");
};
Ue && !Ht && document.addEventListener("click", function(t) {
  if (Ge)
    return t.preventDefault(), t.stopPropagation && t.stopPropagation(), t.stopImmediatePropagation && t.stopImmediatePropagation(), Ge = !1, !1;
}, !0);
var he = function(e) {
  if (c) {
    e = e.touches ? e.touches[0] : e;
    var n = Gn(e.clientX, e.clientY);
    if (n) {
      var o = {};
      for (var r in e)
        e.hasOwnProperty(r) && (o[r] = e[r]);
      o.target = o.rootEl = n, o.preventDefault = void 0, o.stopPropagation = void 0, n[q]._onDragOver(o);
    }
  }
}, Wn = function(e) {
  c && c.parentNode[q]._isOutsideThisEl(e.target);
};
function p(t, e) {
  if (!(t && t.nodeType && t.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));
  this.el = t, this.options = e = re({}, e), t[q] = this;
  var n = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(t.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: !1,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: !0,
    direction: function() {
      return $t(t, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(a, l) {
      a.setData("Text", l.textContent);
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
    supportPointer: p.supportPointer !== !1 && "PointerEvent" in window && !De,
    emptyInsertThreshold: 5
  };
  xe.initializePlugins(this, t, n);
  for (var o in n)
    !(o in e) && (e[o] = n[o]);
  qt(e);
  for (var r in this)
    r.charAt(0) === "_" && typeof this[r] == "function" && (this[r] = this[r].bind(this));
  this.nativeDraggable = e.forceFallback ? !1 : Hn, this.nativeDraggable && (this.options.touchStartThreshold = 1), e.supportPointer ? _(t, "pointerdown", this._onTapStart) : (_(t, "mousedown", this._onTapStart), _(t, "touchstart", this._onTapStart)), this.nativeDraggable && (_(t, "dragover", this), _(t, "dragenter", this)), We.push(this.el), e.store && e.store.get && this.sort(e.store.get(this) || []), re(this, Rn());
}
p.prototype = /** @lends Sortable.prototype */
{
  constructor: p,
  _isOutsideThisEl: function(e) {
    !this.el.contains(e) && e !== this.el && (me = null);
  },
  _getDirection: function(e, n) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, e, n, c) : this.options.direction;
  },
  _onTapStart: function(e) {
    if (e.cancelable) {
      var n = this, o = this.el, r = this.options, i = r.preventOnFilter, a = e.type, l = e.touches && e.touches[0] || e.pointerType && e.pointerType === "touch" && e, s = (l || e).target, u = e.target.shadowRoot && (e.path && e.path[0] || e.composedPath && e.composedPath()[0]) || s, d = r.filter;
      if (Jn(o), !c && !(/mousedown|pointerdown/.test(a) && e.button !== 0 || r.disabled) && !u.isContentEditable && !(!this.nativeDraggable && De && s && s.tagName.toUpperCase() === "SELECT") && (s = Z(s, r.draggable, o, !1), !(s && s.animated) && Ye !== s)) {
        if (be = K(s), Ce = K(s, r.draggable), typeof d == "function") {
          if (d.call(this, e, s, this)) {
            G({
              sortable: n,
              rootEl: u,
              name: "filter",
              targetEl: s,
              toEl: o,
              fromEl: o
            }), W("filter", n, {
              evt: e
            }), i && e.cancelable && e.preventDefault();
            return;
          }
        } else if (d && (d = d.split(",").some(function(f) {
          if (f = Z(u, f.trim(), o, !1), f)
            return G({
              sortable: n,
              rootEl: f,
              name: "filter",
              targetEl: s,
              fromEl: o,
              toEl: o
            }), W("filter", n, {
              evt: e
            }), !0;
        }), d)) {
          i && e.cancelable && e.preventDefault();
          return;
        }
        r.handle && !Z(u, r.handle, o, !1) || this._prepareDragStart(e, l, s);
      }
    }
  },
  _prepareDragStart: function(e, n, o) {
    var r = this, i = r.el, a = r.options, l = i.ownerDocument, s;
    if (o && !c && o.parentNode === i) {
      var u = M(o);
      if (C = i, c = o, I = c.parentNode, pe = c.nextSibling, Ye = o, Pe = a.group, p.dragged = c, de = {
        target: c,
        clientX: (n || e).clientX,
        clientY: (n || e).clientY
      }, xt = de.clientX - u.left, Nt = de.clientY - u.top, this._lastX = (n || e).clientX, this._lastY = (n || e).clientY, c.style["will-change"] = "all", s = function() {
        if (W("delayEnded", r, {
          evt: e
        }), p.eventCanceled) {
          r._onDrop();
          return;
        }
        r._disableDelayedDragEvents(), !Ct && r.nativeDraggable && (c.draggable = !0), r._triggerDragStart(e, n), G({
          sortable: r,
          name: "choose",
          originalEvent: e
        }), V(c, a.chosenClass, !0);
      }, a.ignore.split(",").forEach(function(d) {
        Gt(c, d.trim(), tt);
      }), _(l, "dragover", he), _(l, "mousemove", he), _(l, "touchmove", he), _(l, "mouseup", r._onDrop), _(l, "touchend", r._onDrop), _(l, "touchcancel", r._onDrop), Ct && this.nativeDraggable && (this.options.touchStartThreshold = 4, c.draggable = !0), W("delayStart", this, {
        evt: e
      }), a.delay && (!a.delayOnTouchOnly || n) && (!this.nativeDraggable || !(Ae || ie))) {
        if (p.eventCanceled) {
          this._onDrop();
          return;
        }
        _(l, "mouseup", r._disableDelayedDrag), _(l, "touchend", r._disableDelayedDrag), _(l, "touchcancel", r._disableDelayedDrag), _(l, "mousemove", r._delayedDragTouchMoveHandler), _(l, "touchmove", r._delayedDragTouchMoveHandler), a.supportPointer && _(l, "pointermove", r._delayedDragTouchMoveHandler), r._dragStartTimer = setTimeout(s, a.delay);
      } else
        s();
    }
  },
  _delayedDragTouchMoveHandler: function(e) {
    var n = e.touches ? e.touches[0] : e;
    Math.max(Math.abs(n.clientX - this._lastX), Math.abs(n.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    c && tt(c), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var e = this.el.ownerDocument;
    S(e, "mouseup", this._disableDelayedDrag), S(e, "touchend", this._disableDelayedDrag), S(e, "touchcancel", this._disableDelayedDrag), S(e, "mousemove", this._delayedDragTouchMoveHandler), S(e, "touchmove", this._delayedDragTouchMoveHandler), S(e, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(e, n) {
    n = n || e.pointerType == "touch" && e, !this.nativeDraggable || n ? this.options.supportPointer ? _(document, "pointermove", this._onTouchMove) : n ? _(document, "touchmove", this._onTouchMove) : _(document, "mousemove", this._onTouchMove) : (_(c, "dragend", this), _(C, "dragstart", this._onDragStart));
    try {
      document.selection ? ke(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch (o) {
    }
  },
  _dragStarted: function(e, n) {
    if (ve = !1, C && c) {
      W("dragStarted", this, {
        evt: n
      }), this.nativeDraggable && _(document, "dragover", Wn);
      var o = this.options;
      !e && V(c, o.dragClass, !1), V(c, o.ghostClass, !0), p.active = this, e && this._appendGhost(), G({
        sortable: this,
        name: "start",
        originalEvent: n
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (J) {
      this._lastX = J.clientX, this._lastY = J.clientY, Kt();
      for (var e = document.elementFromPoint(J.clientX, J.clientY), n = e; e && e.shadowRoot && (e = e.shadowRoot.elementFromPoint(J.clientX, J.clientY), e !== n); )
        n = e;
      if (c.parentNode[q]._isOutsideThisEl(e), n)
        do {
          if (n[q]) {
            var o = void 0;
            if (o = n[q]._onDragOver({
              clientX: J.clientX,
              clientY: J.clientY,
              target: e,
              rootEl: n
            }), o && !this.options.dragoverBubble)
              break;
          }
          e = n;
        } while (n = n.parentNode);
      Jt();
    }
  },
  _onTouchMove: function(e) {
    if (de) {
      var n = this.options, o = n.fallbackTolerance, r = n.fallbackOffset, i = e.touches ? e.touches[0] : e, a = g && ye(g, !0), l = g && a && a.a, s = g && a && a.d, u = Fe && B && At(B), d = (i.clientX - de.clientX + r.x) / (l || 1) + (u ? u[0] - et[0] : 0) / (l || 1), f = (i.clientY - de.clientY + r.y) / (s || 1) + (u ? u[1] - et[1] : 0) / (s || 1);
      if (!p.active && !ve) {
        if (o && Math.max(Math.abs(i.clientX - this._lastX), Math.abs(i.clientY - this._lastY)) < o)
          return;
        this._onDragStart(e, !0);
      }
      if (g) {
        a ? (a.e += d - (Ze || 0), a.f += f - (Qe || 0)) : a = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: d,
          f
        };
        var m = "matrix(".concat(a.a, ",").concat(a.b, ",").concat(a.c, ",").concat(a.d, ",").concat(a.e, ",").concat(a.f, ")");
        h(g, "webkitTransform", m), h(g, "mozTransform", m), h(g, "msTransform", m), h(g, "transform", m), Ze = d, Qe = f, J = i;
      }
      e.cancelable && e.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!g) {
      var e = this.options.fallbackOnBody ? document.body : C, n = M(c, !0, Fe, !0, e), o = this.options;
      if (Fe) {
        for (B = e; h(B, "position") === "static" && h(B, "transform") === "none" && B !== document; )
          B = B.parentNode;
        B !== document.body && B !== document.documentElement ? (B === document && (B = ee()), n.top += B.scrollTop, n.left += B.scrollLeft) : B = ee(), et = At(B);
      }
      g = c.cloneNode(!0), V(g, o.ghostClass, !1), V(g, o.fallbackClass, !0), V(g, o.dragClass, !0), h(g, "transition", ""), h(g, "transform", ""), h(g, "box-sizing", "border-box"), h(g, "margin", 0), h(g, "top", n.top), h(g, "left", n.left), h(g, "width", n.width), h(g, "height", n.height), h(g, "opacity", "0.8"), h(g, "position", Fe ? "absolute" : "fixed"), h(g, "zIndex", "100000"), h(g, "pointerEvents", "none"), p.ghost = g, e.appendChild(g), h(g, "transform-origin", xt / parseInt(g.style.width) * 100 + "% " + Nt / parseInt(g.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(e, n) {
    var o = this, r = e.dataTransfer, i = o.options;
    if (W("dragStart", this, {
      evt: e
    }), p.eventCanceled) {
      this._onDrop();
      return;
    }
    W("setupClone", this), p.eventCanceled || (O = zt(c), O.removeAttribute("id"), O.draggable = !1, O.style["will-change"] = "", this._hideClone(), V(O, this.options.chosenClass, !1), p.clone = O), o.cloneId = ke(function() {
      W("clone", o), !p.eventCanceled && (o.options.removeCloneOnHide || C.insertBefore(O, c), o._hideClone(), G({
        sortable: o,
        name: "clone"
      }));
    }), !n && V(c, i.dragClass, !0), n ? (Ge = !0, o._loopId = setInterval(o._emulateDragOver, 50)) : (S(document, "mouseup", o._onDrop), S(document, "touchend", o._onDrop), S(document, "touchcancel", o._onDrop), r && (r.effectAllowed = "move", i.setData && i.setData.call(o, r, c)), _(document, "drop", o), h(c, "transform", "translateZ(0)")), ve = !0, o._dragStartId = ke(o._dragStarted.bind(o, n, e)), _(document, "selectstart", o), Ee = !0, De && h(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(e) {
    var n = this.el, o = e.target, r, i, a, l = this.options, s = l.group, u = p.active, d = Pe === s, f = l.sort, m = X || u, y, b = this, E = !1;
    if (at)
      return;
    function k(ce, nn) {
      W(ce, b, te({
        evt: e,
        isOwner: d,
        axis: y ? "vertical" : "horizontal",
        revert: a,
        dragRect: r,
        targetRect: i,
        canSort: f,
        fromSortable: m,
        target: o,
        completed: F,
        onMove: function(gt, on) {
          return Re(C, n, c, r, gt, M(gt), e, on);
        },
        changed: A
      }, nn));
    }
    function H() {
      k("dragOverAnimationCapture"), b.captureAnimationState(), b !== m && m.captureAnimationState();
    }
    function F(ce) {
      return k("dragOverCompleted", {
        insertion: ce
      }), ce && (d ? u._hideClone() : u._showClone(b), b !== m && (V(c, X ? X.options.ghostClass : u.options.ghostClass, !1), V(c, l.ghostClass, !0)), X !== b && b !== p.active ? X = b : b === p.active && X && (X = null), m === b && (b._ignoreWhileAnimating = o), b.animateAll(function() {
        k("dragOverAnimationComplete"), b._ignoreWhileAnimating = null;
      }), b !== m && (m.animateAll(), m._ignoreWhileAnimating = null)), (o === c && !c.animated || o === n && !o.animated) && (me = null), !l.dragoverBubble && !e.rootEl && o !== document && (c.parentNode[q]._isOutsideThisEl(e.target), !ce && he(e)), !l.dragoverBubble && e.stopPropagation && e.stopPropagation(), E = !0;
    }
    function A() {
      $ = K(c), le = K(c, l.draggable), G({
        sortable: b,
        name: "change",
        toEl: n,
        newIndex: $,
        newDraggableIndex: le,
        originalEvent: e
      });
    }
    if (e.preventDefault !== void 0 && e.cancelable && e.preventDefault(), o = Z(o, l.draggable, n, !0), k("dragOver"), p.eventCanceled)
      return E;
    if (c.contains(e.target) || o.animated && o.animatingX && o.animatingY || b._ignoreWhileAnimating === o)
      return F(!1);
    if (Ge = !1, u && !l.disabled && (d ? f || (a = I !== C) : X === this || (this.lastPutMode = Pe.checkPull(this, u, c, e)) && s.checkPut(this, u, c, e))) {
      if (y = this._getDirection(e, o) === "vertical", r = M(c), k("dragOverValid"), p.eventCanceled)
        return E;
      if (a)
        return I = C, H(), this._hideClone(), k("revert"), p.eventCanceled || (pe ? C.insertBefore(c, pe) : C.appendChild(c)), F(!0);
      var L = dt(n, l.draggable);
      if (!L || Vn(e, y, this) && !L.animated) {
        if (L === c)
          return F(!1);
        if (L && n === e.target && (o = L), o && (i = M(o)), Re(C, n, c, r, o, i, e, !!o) !== !1)
          return H(), L && L.nextSibling ? n.insertBefore(c, L.nextSibling) : n.appendChild(c), I = n, A(), F(!0);
      } else if (L && Un(e, y, this)) {
        var ne = we(n, 0, l, !0);
        if (ne === c)
          return F(!1);
        if (o = ne, i = M(o), Re(C, n, c, r, o, i, e, !1) !== !1)
          return H(), n.insertBefore(c, ne), I = n, A(), F(!0);
      } else if (o.parentNode === n) {
        i = M(o);
        var j = 0, Q, v = c.parentNode !== n, w = !Ln(c.animated && c.toRect || r, o.animated && o.toRect || i, y), x = y ? "top" : "left", N = It(o, "top", "top") || It(c, "top", "top"), D = N ? N.scrollTop : void 0;
        me !== o && (Q = i[x], Ie = !1, Me = !w && l.invertSwap || v), j = $n(e, o, i, y, w ? 1 : l.swapThreshold, l.invertedSwapThreshold == null ? l.swapThreshold : l.invertedSwapThreshold, Me, me === o);
        var T;
        if (j !== 0) {
          var R = K(c);
          do
            R -= j, T = I.children[R];
          while (T && (h(T, "display") === "none" || T === g));
        }
        if (j === 0 || T === o)
          return F(!1);
        me = o, Oe = j;
        var Y = o.nextElementSibling, z = !1;
        z = j === 1;
        var ae = Re(C, n, c, r, o, i, e, z);
        if (ae !== !1)
          return (ae === 1 || ae === -1) && (z = ae === 1), at = !0, setTimeout(zn, 30), H(), z && !Y ? n.appendChild(c) : o.parentNode.insertBefore(c, z ? Y : o), N && jt(N, 0, D - N.scrollTop), I = c.parentNode, Q !== void 0 && !Me && (Be = Math.abs(Q - M(o)[x])), A(), F(!0);
      }
      if (n.contains(c))
        return F(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    S(document, "mousemove", this._onTouchMove), S(document, "touchmove", this._onTouchMove), S(document, "pointermove", this._onTouchMove), S(document, "dragover", he), S(document, "mousemove", he), S(document, "touchmove", he);
  },
  _offUpEvents: function() {
    var e = this.el.ownerDocument;
    S(e, "mouseup", this._onDrop), S(e, "touchend", this._onDrop), S(e, "pointerup", this._onDrop), S(e, "touchcancel", this._onDrop), S(document, "selectstart", this);
  },
  _onDrop: function(e) {
    var n = this.el, o = this.options;
    if ($ = K(c), le = K(c, o.draggable), W("drop", this, {
      evt: e
    }), I = c && c.parentNode, $ = K(c), le = K(c, o.draggable), p.eventCanceled) {
      this._nulling();
      return;
    }
    ve = !1, Me = !1, Ie = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), lt(this.cloneId), lt(this._dragStartId), this.nativeDraggable && (S(document, "drop", this), S(n, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), De && h(document.body, "user-select", ""), h(c, "transform", ""), e && (Ee && (e.cancelable && e.preventDefault(), !o.dropBubble && e.stopPropagation()), g && g.parentNode && g.parentNode.removeChild(g), (C === I || X && X.lastPutMode !== "clone") && O && O.parentNode && O.parentNode.removeChild(O), c && (this.nativeDraggable && S(c, "dragend", this), tt(c), c.style["will-change"] = "", Ee && !ve && V(c, X ? X.options.ghostClass : this.options.ghostClass, !1), V(c, this.options.chosenClass, !1), G({
      sortable: this,
      name: "unchoose",
      toEl: I,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: e
    }), C !== I ? ($ >= 0 && (G({
      rootEl: I,
      name: "add",
      toEl: I,
      fromEl: C,
      originalEvent: e
    }), G({
      sortable: this,
      name: "remove",
      toEl: I,
      originalEvent: e
    }), G({
      rootEl: I,
      name: "sort",
      toEl: I,
      fromEl: C,
      originalEvent: e
    }), G({
      sortable: this,
      name: "sort",
      toEl: I,
      originalEvent: e
    })), X && X.save()) : $ !== be && $ >= 0 && (G({
      sortable: this,
      name: "update",
      toEl: I,
      originalEvent: e
    }), G({
      sortable: this,
      name: "sort",
      toEl: I,
      originalEvent: e
    })), p.active && (($ == null || $ === -1) && ($ = be, le = Ce), G({
      sortable: this,
      name: "end",
      toEl: I,
      originalEvent: e
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    W("nulling", this), C = c = I = g = pe = O = Ye = se = de = J = Ee = $ = le = be = Ce = me = Oe = X = Pe = p.dragged = p.ghost = p.clone = p.active = null, je.forEach(function(e) {
      e.checked = !0;
    }), je.length = Ze = Qe = 0;
  },
  handleEvent: function(e) {
    switch (e.type) {
      case "drop":
      case "dragend":
        this._onDrop(e);
        break;
      case "dragenter":
      case "dragover":
        c && (this._onDragOver(e), jn(e));
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
    for (var e = [], n, o = this.el.children, r = 0, i = o.length, a = this.options; r < i; r++)
      n = o[r], Z(n, a.draggable, this.el, !1) && e.push(n.getAttribute(a.dataIdAttr) || Kn(n));
    return e;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(e, n) {
    var o = {}, r = this.el;
    this.toArray().forEach(function(i, a) {
      var l = r.children[a];
      Z(l, this.options.draggable, r, !1) && (o[i] = l);
    }, this), n && this.captureAnimationState(), e.forEach(function(i) {
      o[i] && (r.removeChild(o[i]), r.appendChild(o[i]));
    }), n && this.animateAll();
  },
  /**
   * Save the current sorting
   */
  save: function() {
    var e = this.options.store;
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
    var o = this.options;
    if (n === void 0)
      return o[e];
    var r = xe.modifyOption(this, e, n);
    typeof r != "undefined" ? o[e] = r : o[e] = n, e === "group" && qt(o);
  },
  /**
   * Destroy
   */
  destroy: function() {
    W("destroy", this);
    var e = this.el;
    e[q] = null, S(e, "mousedown", this._onTapStart), S(e, "touchstart", this._onTapStart), S(e, "pointerdown", this._onTapStart), this.nativeDraggable && (S(e, "dragover", this), S(e, "dragenter", this)), Array.prototype.forEach.call(e.querySelectorAll("[draggable]"), function(n) {
      n.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), We.splice(We.indexOf(this.el), 1), this.el = e = null;
  },
  _hideClone: function() {
    if (!se) {
      if (W("hideClone", this), p.eventCanceled)
        return;
      h(O, "display", "none"), this.options.removeCloneOnHide && O.parentNode && O.parentNode.removeChild(O), se = !0;
    }
  },
  _showClone: function(e) {
    if (e.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (se) {
      if (W("showClone", this), p.eventCanceled)
        return;
      c.parentNode == C && !this.options.group.revertClone ? C.insertBefore(O, c) : pe ? C.insertBefore(O, pe) : C.appendChild(O), this.options.group.revertClone && this.animate(c, O), h(O, "display", ""), se = !1;
    }
  }
};
function jn(t) {
  t.dataTransfer && (t.dataTransfer.dropEffect = "move"), t.cancelable && t.preventDefault();
}
function Re(t, e, n, o, r, i, a, l) {
  var s, u = t[q], d = u.options.onMove, f;
  return window.CustomEvent && !ie && !Ae ? s = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (s = document.createEvent("Event"), s.initEvent("move", !0, !0)), s.to = e, s.from = t, s.dragged = n, s.draggedRect = o, s.related = r || e, s.relatedRect = i || M(e), s.willInsertAfter = l, s.originalEvent = a, t.dispatchEvent(s), d && (f = d.call(u, s, a)), f;
}
function tt(t) {
  t.draggable = !1;
}
function zn() {
  at = !1;
}
function Un(t, e, n) {
  var o = M(we(n.el, 0, n.options, !0)), r = Ut(n.el, n.options, g), i = 10;
  return e ? t.clientX < r.left - i || t.clientY < o.top && t.clientX < o.right : t.clientY < r.top - i || t.clientY < o.bottom && t.clientX < o.left;
}
function Vn(t, e, n) {
  var o = M(dt(n.el, n.options.draggable)), r = Ut(n.el, n.options, g), i = 10;
  return e ? t.clientX > r.right + i || t.clientY > o.bottom && t.clientX > o.left : t.clientY > r.bottom + i || t.clientX > o.right && t.clientY > o.top;
}
function $n(t, e, n, o, r, i, a, l) {
  var s = o ? t.clientY : t.clientX, u = o ? n.height : n.width, d = o ? n.top : n.left, f = o ? n.bottom : n.right, m = !1;
  if (!a) {
    if (l && Be < u * r) {
      if (!Ie && (Oe === 1 ? s > d + u * i / 2 : s < f - u * i / 2) && (Ie = !0), Ie)
        m = !0;
      else if (Oe === 1 ? s < d + Be : s > f - Be)
        return -Oe;
    } else if (s > d + u * (1 - r) / 2 && s < f - u * (1 - r) / 2)
      return qn(e);
  }
  return m = m || a, m && (s < d + u * i / 2 || s > f - u * i / 2) ? s > d + u / 2 ? 1 : -1 : 0;
}
function qn(t) {
  return K(c) < K(t) ? 1 : -1;
}
function Kn(t) {
  for (var e = t.tagName + t.className + t.src + t.href + t.textContent, n = e.length, o = 0; n--; )
    o += e.charCodeAt(n);
  return o.toString(36);
}
function Jn(t) {
  je.length = 0;
  for (var e = t.getElementsByTagName("input"), n = e.length; n--; ) {
    var o = e[n];
    o.checked && je.push(o);
  }
}
function ke(t) {
  return setTimeout(t, 0);
}
function lt(t) {
  return clearTimeout(t);
}
Ue && _(document, "touchmove", function(t) {
  (p.active || ve) && t.cancelable && t.preventDefault();
});
p.utils = {
  on: _,
  off: S,
  css: h,
  find: Gt,
  is: function(e, n) {
    return !!Z(e, n, e, !1);
  },
  extend: Mn,
  throttle: Wt,
  closest: Z,
  toggleClass: V,
  clone: zt,
  index: K,
  nextTick: ke,
  cancelNextTick: lt,
  detectDirection: $t,
  getChild: we
};
p.get = function(t) {
  return t[q];
};
p.mount = function() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  e[0].constructor === Array && (e = e[0]), e.forEach(function(o) {
    if (!o.prototype || !o.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(o));
    o.utils && (p.utils = te(te({}, p.utils), o.utils)), xe.mount(o);
  });
};
p.create = function(t, e) {
  return new p(t, e);
};
p.version = xn;
var P = [], Se, st, ut = !1, nt, ot, ze, _e;
function Zn() {
  function t() {
    this.defaults = {
      scroll: !0,
      forceAutoScrollFallback: !1,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: !0
    };
    for (var e in this)
      e.charAt(0) === "_" && typeof this[e] == "function" && (this[e] = this[e].bind(this));
  }
  return t.prototype = {
    dragStarted: function(n) {
      var o = n.originalEvent;
      this.sortable.nativeDraggable ? _(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? _(document, "pointermove", this._handleFallbackAutoScroll) : o.touches ? _(document, "touchmove", this._handleFallbackAutoScroll) : _(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(n) {
      var o = n.originalEvent;
      !this.options.dragOverBubble && !o.rootEl && this._handleAutoScroll(o);
    },
    drop: function() {
      this.sortable.nativeDraggable ? S(document, "dragover", this._handleAutoScroll) : (S(document, "pointermove", this._handleFallbackAutoScroll), S(document, "touchmove", this._handleFallbackAutoScroll), S(document, "mousemove", this._handleFallbackAutoScroll)), Mt(), He(), Fn();
    },
    nulling: function() {
      ze = st = Se = ut = _e = nt = ot = null, P.length = 0;
    },
    _handleFallbackAutoScroll: function(n) {
      this._handleAutoScroll(n, !0);
    },
    _handleAutoScroll: function(n, o) {
      var r = this, i = (n.touches ? n.touches[0] : n).clientX, a = (n.touches ? n.touches[0] : n).clientY, l = document.elementFromPoint(i, a);
      if (ze = n, o || this.options.forceAutoScrollFallback || Ae || ie || De) {
        rt(n, this.options, l, o);
        var s = ue(l, !0);
        ut && (!_e || i !== nt || a !== ot) && (_e && Mt(), _e = setInterval(function() {
          var u = ue(document.elementFromPoint(i, a), !0);
          u !== s && (s = u, He()), rt(n, r.options, u, o);
        }, 10), nt = i, ot = a);
      } else {
        if (!this.options.bubbleScroll || ue(l, !0) === ee()) {
          He();
          return;
        }
        rt(n, this.options, ue(l, !1), !1);
      }
    }
  }, re(t, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function He() {
  P.forEach(function(t) {
    clearInterval(t.pid);
  }), P = [];
}
function Mt() {
  clearInterval(_e);
}
var rt = Wt(function(t, e, n, o) {
  if (e.scroll) {
    var r = (t.touches ? t.touches[0] : t).clientX, i = (t.touches ? t.touches[0] : t).clientY, a = e.scrollSensitivity, l = e.scrollSpeed, s = ee(), u = !1, d;
    st !== n && (st = n, He(), Se = e.scroll, d = e.scrollFn, Se === !0 && (Se = ue(n, !0)));
    var f = 0, m = Se;
    do {
      var y = m, b = M(y), E = b.top, k = b.bottom, H = b.left, F = b.right, A = b.width, L = b.height, ne = void 0, j = void 0, Q = y.scrollWidth, v = y.scrollHeight, w = h(y), x = y.scrollLeft, N = y.scrollTop;
      y === s ? (ne = A < Q && (w.overflowX === "auto" || w.overflowX === "scroll" || w.overflowX === "visible"), j = L < v && (w.overflowY === "auto" || w.overflowY === "scroll" || w.overflowY === "visible")) : (ne = A < Q && (w.overflowX === "auto" || w.overflowX === "scroll"), j = L < v && (w.overflowY === "auto" || w.overflowY === "scroll"));
      var D = ne && (Math.abs(F - r) <= a && x + A < Q) - (Math.abs(H - r) <= a && !!x), T = j && (Math.abs(k - i) <= a && N + L < v) - (Math.abs(E - i) <= a && !!N);
      if (!P[f])
        for (var R = 0; R <= f; R++)
          P[R] || (P[R] = {});
      (P[f].vx != D || P[f].vy != T || P[f].el !== y) && (P[f].el = y, P[f].vx = D, P[f].vy = T, clearInterval(P[f].pid), (D != 0 || T != 0) && (u = !0, P[f].pid = setInterval(function() {
        o && this.layer === 0 && p.active._onTouchMove(ze);
        var Y = P[this.layer].vy ? P[this.layer].vy * l : 0, z = P[this.layer].vx ? P[this.layer].vx * l : 0;
        typeof d == "function" && d.call(p.dragged.parentNode[q], z, Y, t, ze, P[this.layer].el) !== "continue" || jt(P[this.layer].el, z, Y);
      }.bind({
        layer: f
      }), 24))), f++;
    } while (e.bubbleScroll && m !== s && (m = ue(m, !1)));
    ut = u;
  }
}, 30), Zt = function(e) {
  var n = e.originalEvent, o = e.putSortable, r = e.dragEl, i = e.activeSortable, a = e.dispatchSortableEvent, l = e.hideGhostForTarget, s = e.unhideGhostForTarget;
  if (n) {
    var u = o || i;
    l();
    var d = n.changedTouches && n.changedTouches.length ? n.changedTouches[0] : n, f = document.elementFromPoint(d.clientX, d.clientY);
    s(), u && !u.el.contains(f) && (a("spill"), this.onSpill({
      dragEl: r,
      putSortable: o
    }));
  }
};
function ht() {
}
ht.prototype = {
  startIndex: null,
  dragStart: function(e) {
    var n = e.oldDraggableIndex;
    this.startIndex = n;
  },
  onSpill: function(e) {
    var n = e.dragEl, o = e.putSortable;
    this.sortable.captureAnimationState(), o && o.captureAnimationState();
    var r = we(this.sortable.el, this.startIndex, this.options);
    r ? this.sortable.el.insertBefore(n, r) : this.sortable.el.appendChild(n), this.sortable.animateAll(), o && o.animateAll();
  },
  drop: Zt
};
re(ht, {
  pluginName: "revertOnSpill"
});
function pt() {
}
pt.prototype = {
  onSpill: function(e) {
    var n = e.dragEl, o = e.putSortable, r = o || this.sortable;
    r.captureAnimationState(), n.parentNode && n.parentNode.removeChild(n), r.animateAll();
  },
  drop: Zt
};
re(pt, {
  pluginName: "removeOnSpill"
});
p.mount(new Zn());
p.mount(pt, ht);
function Qn(t) {
  return t == null ? t : JSON.parse(JSON.stringify(t));
}
function eo(t) {
  ft() && ln(t);
}
function to(t) {
  ft() ? sn(t) : Yt(t);
}
let Qt = null, en = null;
function Ft(t = null, e = null) {
  Qt = t, en = e;
}
function no() {
  return {
    data: Qt,
    clonedData: en
  };
}
const Rt = Symbol("cloneElement");
function tn(...t) {
  var j, Q;
  const e = (j = ft()) == null ? void 0 : j.proxy;
  let n = null;
  const o = t[0];
  let [, r, i] = t;
  Array.isArray(U(r)) || (i = r, r = null);
  let a = null;
  const {
    immediate: l = !0,
    clone: s = Qn,
    customUpdate: u
  } = (Q = U(i)) != null ? Q : {};
  function d(v) {
    var R;
    const { from: w, oldIndex: x, item: N } = v;
    n = Array.from(w.childNodes);
    const D = U((R = U(r)) == null ? void 0 : R[x]), T = s(D);
    Ft(D, T), N[Rt] = T;
  }
  function f(v) {
    const w = v.item[Rt];
    if (!yn(w)) {
      if (qe(v.item), $e(r)) {
        const x = [...U(r)];
        r.value = St(x, v.newDraggableIndex, w);
        return;
      }
      St(U(r), v.newDraggableIndex, w);
    }
  }
  function m(v) {
    const { from: w, item: x, oldIndex: N, oldDraggableIndex: D, pullMode: T, clone: R } = v;
    if (_t(w, x, N), T === "clone") {
      qe(R);
      return;
    }
    if ($e(r)) {
      const Y = [...U(r)];
      r.value = Et(Y, D);
      return;
    }
    Et(U(r), D);
  }
  function y(v) {
    if (u) {
      u(v);
      return;
    }
    const { from: w, item: x, oldIndex: N, oldDraggableIndex: D, newDraggableIndex: T } = v;
    if (qe(x), _t(w, x, N), $e(r)) {
      const R = [...U(r)];
      r.value = wt(
        R,
        D,
        T
      );
      return;
    }
    wt(U(r), D, T);
  }
  function b(v) {
    const { newIndex: w, oldIndex: x, from: N, to: D } = v;
    let T = null;
    const R = w === x && N === D;
    try {
      if (R) {
        let Y = null;
        n == null || n.some((z, ae) => {
          if (Y && (n == null ? void 0 : n.length) !== D.childNodes.length)
            return N.insertBefore(Y, z.nextSibling), !0;
          const ce = D.childNodes[ae];
          Y = D == null ? void 0 : D.replaceChild(z, ce);
        });
      }
    } catch (Y) {
      T = Y;
    } finally {
      n = null;
    }
    Yt(() => {
      if (Ft(), T)
        throw T;
    });
  }
  const E = {
    onUpdate: y,
    onStart: d,
    onAdd: f,
    onRemove: m,
    onEnd: b
  };
  function k(v) {
    const w = U(o);
    return v || (v = wn(w) ? En(w, e == null ? void 0 : e.$el) : w), v && !Dn(v) && (v = v.$el), v || mn("Root element not found"), v;
  }
  function H() {
    var N;
    const D = (N = U(i)) != null ? N : {}, { immediate: v, clone: w } = D, x = Ve(D, ["immediate", "clone"]);
    return Dt(x, (T, R) => {
      Tn(T) && (x[T] = (Y, ...z) => {
        const ae = no();
        return Cn(Y, ae), R(Y, ...z);
      });
    }), _n(
      r === null ? {} : E,
      x
    );
  }
  const F = (v) => {
    var w;
    v = k(v), a && A.destroy(), a = new p(v, H()), console.log(a.prototype), console.log(i.value), (w = i.value) != null && w._appendGhost && (a._appendGhost = i.value._appendGhost);
  };
  an(
    () => i,
    () => {
      a && Dt(H(), (v, w) => {
        a == null || a.option(v, w);
      });
    },
    { deep: !0 }
  );
  const A = {
    option: (v, w) => a == null ? void 0 : a.option(v, w),
    destroy: () => {
      a == null || a.destroy(), a = null;
    },
    save: () => a == null ? void 0 : a.save(),
    toArray: () => a == null ? void 0 : a.toArray(),
    closest: (...v) => a == null ? void 0 : a.closest(...v)
  }, L = () => A == null ? void 0 : A.option("disabled", !0), ne = () => A == null ? void 0 : A.option("disabled", !1);
  return to(() => {
    l && F();
  }), eo(A.destroy), fe({ instance: a, start: F, pause: L, resume: ne }, A);
}
const ct = [
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
], oo = [
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
  ...ct.map((t) => `on${t.replace(/^\S/, (e) => e.toUpperCase())}`)
], lo = un({
  name: "VueDraggable",
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: oo,
  emits: ["update:modelValue", ...ct],
  setup(t, { slots: e, emit: n, expose: o, attrs: r }) {
    const i = ct.reduce((d, f) => {
      const m = `on${f.replace(/^\S/, (y) => y.toUpperCase())}`;
      return d[m] = (...y) => n(f, ...y), d;
    }, {}), a = yt(() => {
      const y = cn(t), { modelValue: d } = y, f = Ve(y, ["modelValue"]), m = Object.entries(f).reduce((b, [E, k]) => {
        const H = U(k);
        return H !== void 0 && (b[E] = H), b;
      }, {});
      return fe(fe({}, i), bn(fe(fe({}, r), m)));
    }), l = yt({
      get: () => t.modelValue,
      set: (d) => n("update:modelValue", d)
    }), s = fn(), u = dn(
      tn(t.target || s, l, a)
    );
    return o(u), () => {
      var d;
      return hn(t.tag || "div", { ref: s }, (d = e == null ? void 0 : e.default) == null ? void 0 : d.call(e, u));
    };
  }
}), Xt = {
  mounted: "mounted",
  unmounted: "unmounted"
}, it = /* @__PURE__ */ new WeakMap(), so = {
  [Xt.mounted](t, e) {
    const n = pn(e.value) ? [e.value] : e.value, [o, r] = n, i = tn(t, o, r);
    it.set(t, i.destroy);
  },
  [Xt.unmounted](t) {
    var e;
    (e = it.get(t)) == null || e(), it.delete(t);
  }
};
export {
  lo as VueDraggable,
  tn as useDraggable,
  so as vDraggable
};
