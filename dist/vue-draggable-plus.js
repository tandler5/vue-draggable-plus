var un = Object.defineProperty;
var Ne = Object.getOwnPropertySymbols;
var Et = Object.prototype.hasOwnProperty, Dt = Object.prototype.propertyIsEnumerable;
var wt = (t, e, n) => e in t ? un(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, fe = (t, e) => {
  for (var n in e || (e = {}))
    Et.call(e, n) && wt(t, n, e[n]);
  if (Ne)
    for (var n of Ne(e))
      Dt.call(e, n) && wt(t, n, e[n]);
  return t;
};
var Ke = (t, e) => {
  var n = {};
  for (var o in t)
    Et.call(t, o) && e.indexOf(o) < 0 && (n[o] = t[o]);
  if (t != null && Ne)
    for (var o of Ne(t))
      e.indexOf(o) < 0 && Dt.call(t, o) && (n[o] = t[o]);
  return n;
};
import { getCurrentInstance as pt, unref as V, watch as cn, onMounted as fn, nextTick as Lt, onUnmounted as dn, isRef as Je, defineComponent as hn, computed as St, toRefs as pn, ref as gn, reactive as mn, h as vn, isProxy as bn } from "vue";
const Wt = "[vue-draggable-plus]: ";
function yn(t) {
  console.warn(Wt + t);
}
function wn(t) {
  console.error(Wt + t);
}
function _t(t, e, n) {
  return n >= 0 && n < t.length && t.splice(n, 0, t.splice(e, 1)[0]), t;
}
function En(t) {
  return t.replace(/-(\w)/g, (e, n) => n ? n.toUpperCase() : "");
}
function Dn(t) {
  return Object.keys(t).reduce((e, n) => (typeof t[n] != "undefined" && (e[En(n)] = t[n]), e), {});
}
function Tt(t, e) {
  return Array.isArray(t) && t.splice(e, 1), t;
}
function Ct(t, e, n) {
  return Array.isArray(t) && t.splice(e, 0, n), t;
}
function Sn(t) {
  return typeof t == "undefined";
}
function _n(t) {
  return typeof t == "string";
}
function Ot(t, e, n) {
  const o = t.children[n];
  t.insertBefore(e, o);
}
function Ze(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function Tn(t, e = document) {
  var o;
  let n = null;
  return typeof (e == null ? void 0 : e.querySelector) == "function" ? n = (o = e == null ? void 0 : e.querySelector) == null ? void 0 : o.call(e, t) : n = document.querySelector(t), n || yn(`Element not found: ${t}`), n;
}
function Cn(t, e, n = null) {
  return function(...o) {
    return t.apply(n, o), e.apply(n, o);
  };
}
function On(t, e) {
  const n = fe({}, t);
  return Object.keys(e).forEach((o) => {
    n[o] ? n[o] = Cn(t[o], e[o]) : n[o] = e[o];
  }), n;
}
function In(t) {
  return t instanceof HTMLElement;
}
function It(t, e) {
  Object.keys(t).forEach((n) => {
    e(n, t[n]);
  });
}
function An(t) {
  return t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && (t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97);
}
const xn = Object.assign;
/**!
 * Sortable 1.15.6
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function At(t, e) {
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
    e % 2 ? At(Object(n), !0).forEach(function(o) {
      Pn(t, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : At(Object(n)).forEach(function(o) {
      Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return t;
}
function Be(t) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Be = function(e) {
    return typeof e;
  } : Be = function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Be(t);
}
function Pn(t, e, n) {
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
function Nn(t, e) {
  if (t == null) return {};
  var n = {}, o = Object.keys(t), r, i;
  for (i = 0; i < o.length; i++)
    r = o[i], !(e.indexOf(r) >= 0) && (n[r] = t[r]);
  return n;
}
function Mn(t, e) {
  if (t == null) return {};
  var n = Nn(t, e), o, r;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (r = 0; r < i.length; r++)
      o = i[r], !(e.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(t, o) && (n[o] = t[o]);
  }
  return n;
}
var Fn = "1.15.6";
function oe(t) {
  if (typeof window != "undefined" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(t);
}
var ie = oe(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), xe = oe(/Edge/i), xt = oe(/firefox/i), Te = oe(/safari/i) && !oe(/chrome/i) && !oe(/android/i), gt = oe(/iP(ad|od|hone)/i), Gt = oe(/chrome/i) && oe(/android/i), jt = {
  capture: !1,
  passive: !1
};
function E(t, e, n) {
  t.addEventListener(e, n, !ie && jt);
}
function w(t, e, n) {
  t.removeEventListener(e, n, !ie && jt);
}
function je(t, e) {
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
function zt(t) {
  return t.host && t !== document && t.host.nodeType ? t.host : t.parentNode;
}
function Z(t, e, n, o) {
  if (t) {
    n = n || document;
    do {
      if (e != null && (e[0] === ">" ? t.parentNode === n && je(t, e) : je(t, e)) || o && t === n)
        return t;
      if (t === n) break;
    } while (t = zt(t));
  }
  return null;
}
var Pt = /\s+/g;
function $(t, e, n) {
  if (t && e)
    if (t.classList)
      t.classList[n ? "add" : "remove"](e);
    else {
      var o = (" " + t.className + " ").replace(Pt, " ").replace(" " + e + " ", " ");
      t.className = (o + (n ? " " + e : "")).replace(Pt, " ");
    }
}
function p(t, e, n) {
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
      var o = p(t, "transform");
      o && o !== "none" && (n = o + " " + n);
    } while (!e && (t = t.parentNode));
  var r = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return r && new r(n);
}
function Ut(t, e, n) {
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
        if (r && r.getBoundingClientRect && (p(r, "transform") !== "none" || n && p(r, "position") !== "static")) {
          var m = r.getBoundingClientRect();
          a -= m.top + parseInt(p(r, "border-top-width")), l -= m.left + parseInt(p(r, "border-left-width")), s = a + i.height, u = l + i.width;
          break;
        }
      while (r = r.parentNode);
    if (o && t !== window) {
      var y = ye(r || t), b = y && y.a, S = y && y.d;
      y && (a /= S, l /= b, f /= b, d /= S, s = a + d, u = l + f);
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
function Nt(t, e, n) {
  for (var o = ue(t, !0), r = M(t)[e]; o; ) {
    var i = M(o)[n], a = void 0;
    if (a = r >= i, !a) return o;
    if (o === ee()) break;
    o = ue(o, !1);
  }
  return !1;
}
function we(t, e, n, o) {
  for (var r = 0, i = 0, a = t.children; i < a.length; ) {
    if (a[i].style.display !== "none" && a[i] !== h.ghost && (o || a[i] !== h.dragged) && Z(a[i], n.draggable, t, !1)) {
      if (r === e)
        return a[i];
      r++;
    }
    i++;
  }
  return null;
}
function mt(t, e) {
  for (var n = t.lastElementChild; n && (n === h.ghost || p(n, "display") === "none" || e && !je(n, e)); )
    n = n.previousElementSibling;
  return n || null;
}
function K(t, e) {
  var n = 0;
  if (!t || !t.parentNode)
    return -1;
  for (; t = t.previousElementSibling; )
    t.nodeName.toUpperCase() !== "TEMPLATE" && t !== h.clone && (!e || je(t, e)) && n++;
  return n;
}
function Mt(t) {
  var e = 0, n = 0, o = ee();
  if (t)
    do {
      var r = ye(t), i = r.a, a = r.d;
      e += t.scrollLeft * i, n += t.scrollTop * a;
    } while (t !== o && (t = t.parentNode));
  return [e, n];
}
function Rn(t, e) {
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      for (var o in e)
        if (e.hasOwnProperty(o) && e[o] === t[n][o]) return Number(n);
    }
  return -1;
}
function ue(t, e) {
  if (!t || !t.getBoundingClientRect) return ee();
  var n = t, o = !1;
  do
    if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
      var r = p(n);
      if (n.clientWidth < n.scrollWidth && (r.overflowX == "auto" || r.overflowX == "scroll") || n.clientHeight < n.scrollHeight && (r.overflowY == "auto" || r.overflowY == "scroll")) {
        if (!n.getBoundingClientRect || n === document.body) return ee();
        if (o || e) return n;
        o = !0;
      }
    }
  while (n = n.parentNode);
  return ee();
}
function Xn(t, e) {
  if (t && e)
    for (var n in e)
      e.hasOwnProperty(n) && (t[n] = e[n]);
  return t;
}
function Qe(t, e) {
  return Math.round(t.top) === Math.round(e.top) && Math.round(t.left) === Math.round(e.left) && Math.round(t.height) === Math.round(e.height) && Math.round(t.width) === Math.round(e.width);
}
var Ce;
function Vt(t, e) {
  return function() {
    if (!Ce) {
      var n = arguments, o = this;
      n.length === 1 ? t.call(o, n[0]) : t.apply(o, n), Ce = setTimeout(function() {
        Ce = void 0;
      }, e);
    }
  };
}
function Yn() {
  clearTimeout(Ce), Ce = void 0;
}
function $t(t, e, n) {
  t.scrollLeft += e, t.scrollTop += n;
}
function qt(t) {
  var e = window.Polymer, n = window.jQuery || window.Zepto;
  return e && e.dom ? e.dom(t).cloneNode(!0) : n ? n(t).clone(!0)[0] : t.cloneNode(!0);
}
function Kt(t, e, n) {
  var o = {};
  return Array.from(t.children).forEach(function(r) {
    var i, a, l, s;
    if (!(!Z(r, e.draggable, t, !1) || r.animated || r === n)) {
      var u = M(r);
      o.left = Math.min((i = o.left) !== null && i !== void 0 ? i : 1 / 0, u.left), o.top = Math.min((a = o.top) !== null && a !== void 0 ? a : 1 / 0, u.top), o.right = Math.max((l = o.right) !== null && l !== void 0 ? l : -1 / 0, u.right), o.bottom = Math.max((s = o.bottom) !== null && s !== void 0 ? s : -1 / 0, u.bottom);
    }
  }), o.width = o.right - o.left, o.height = o.bottom - o.top, o.x = o.left, o.y = o.top, o;
}
var j = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function kn() {
  var t = [], e;
  return {
    captureAnimationState: function() {
      if (t = [], !!this.options.animation) {
        var o = [].slice.call(this.el.children);
        o.forEach(function(r) {
          if (!(p(r, "display") === "none" || r === h.ghost)) {
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
      t.splice(Rn(t, {
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
        var s = 0, u = l.target, d = u.fromRect, f = M(u), m = u.prevFromRect, y = u.prevToRect, b = l.rect, S = ye(u, !0);
        S && (f.top -= S.f, f.left -= S.e), u.toRect = f, u.thisAnimationDuration && Qe(m, f) && !Qe(d, f) && // Make sure animatingRect is on line between toRect & fromRect
        (b.top - f.top) / (b.left - f.left) === (d.top - f.top) / (d.left - f.left) && (s = Hn(b, m, y, r.options)), Qe(f, d) || (u.prevFromRect = d, u.prevToRect = f, s || (s = r.options.animation), r.animate(u, b, f, s)), s && (i = !0, a = Math.max(a, s), clearTimeout(u.animationResetTimer), u.animationResetTimer = setTimeout(function() {
          u.animationTime = 0, u.prevFromRect = null, u.fromRect = null, u.prevToRect = null, u.thisAnimationDuration = null;
        }, s), u.thisAnimationDuration = s);
      }), clearTimeout(e), i ? e = setTimeout(function() {
        typeof o == "function" && o();
      }, a) : typeof o == "function" && o(), t = [];
    },
    animate: function(o, r, i, a) {
      if (a) {
        p(o, "transition", ""), p(o, "transform", "");
        var l = ye(this.el), s = l && l.a, u = l && l.d, d = (r.left - i.left) / (s || 1), f = (r.top - i.top) / (u || 1);
        o.animatingX = !!d, o.animatingY = !!f, p(o, "transform", "translate3d(" + d + "px," + f + "px,0)"), this.forRepaintDummy = Bn(o), p(o, "transition", "transform " + a + "ms" + (this.options.easing ? " " + this.options.easing : "")), p(o, "transform", "translate3d(0,0,0)"), typeof o.animated == "number" && clearTimeout(o.animated), o.animated = setTimeout(function() {
          p(o, "transition", ""), p(o, "transform", ""), o.animated = !1, o.animatingX = !1, o.animatingY = !1;
        }, a);
      }
    }
  };
}
function Bn(t) {
  return t.offsetWidth;
}
function Hn(t, e, n, o) {
  return Math.sqrt(Math.pow(e.top - t.top, 2) + Math.pow(e.left - t.left, 2)) / Math.sqrt(Math.pow(e.top - n.top, 2) + Math.pow(e.left - n.left, 2)) * o.animation;
}
var ge = [], et = {
  initializeByDefault: !0
}, Pe = {
  mount: function(e) {
    for (var n in et)
      et.hasOwnProperty(n) && !(n in e) && (e[n] = et[n]);
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
function Ln(t) {
  var e = t.sortable, n = t.rootEl, o = t.name, r = t.targetEl, i = t.cloneEl, a = t.toEl, l = t.fromEl, s = t.oldIndex, u = t.newIndex, d = t.oldDraggableIndex, f = t.newDraggableIndex, m = t.originalEvent, y = t.putSortable, b = t.extraEventProperties;
  if (e = e || n && n[j], !!e) {
    var S, B = e.options, H = "on" + o.charAt(0).toUpperCase() + o.substr(1);
    window.CustomEvent && !ie && !xe ? S = new CustomEvent(o, {
      bubbles: !0,
      cancelable: !0
    }) : (S = document.createEvent("Event"), S.initEvent(o, !0, !0)), S.to = a || n, S.from = l || n, S.item = r || n, S.clone = i, S.oldIndex = s, S.newIndex = u, S.oldDraggableIndex = d, S.newDraggableIndex = f, S.originalEvent = m, S.pullMode = y ? y.lastPutMode : void 0;
    var F = te(te({}, b), Pe.getEventProperties(o, e));
    for (var A in F)
      S[A] = F[A];
    n && n.dispatchEvent(S), B[H] && B[H].call(e, S);
  }
}
var Wn = ["evt"], G = function(e, n) {
  var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = o.evt, i = Mn(o, Wn);
  Pe.pluginEvent.bind(h)(e, n, te({
    dragEl: c,
    parentEl: I,
    ghostEl: g,
    rootEl: C,
    nextEl: pe,
    lastDownEl: He,
    cloneEl: O,
    cloneHidden: se,
    dragStarted: De,
    putSortable: X,
    activeSortable: h.active,
    originalEvent: r,
    oldIndex: be,
    oldDraggableIndex: Oe,
    newIndex: q,
    newDraggableIndex: le,
    hideGhostForTarget: en,
    unhideGhostForTarget: tn,
    cloneNowHidden: function() {
      se = !0;
    },
    cloneNowShown: function() {
      se = !1;
    },
    dispatchSortableEvent: function(l) {
      W({
        sortable: n,
        name: l,
        originalEvent: r
      });
    }
  }, i));
};
function W(t) {
  Ln(te({
    putSortable: X,
    cloneEl: O,
    targetEl: c,
    rootEl: C,
    oldIndex: be,
    oldDraggableIndex: Oe,
    newIndex: q,
    newDraggableIndex: le
  }, t));
}
var c, I, g, C, pe, He, O, se, be, q, Oe, le, Me, X, ve = !1, ze = !1, Ue = [], de, J, tt, nt, Ft, Rt, De, me, Ie, Ae = !1, Fe = !1, Le, k, ot = [], ut = !1, Ve = [], qe = typeof document != "undefined", Re = gt, Xt = xe || ie ? "cssFloat" : "float", Gn = qe && !Gt && !gt && "draggable" in document.createElement("div"), Jt = function() {
  if (qe) {
    if (ie)
      return !1;
    var t = document.createElement("x");
    return t.style.cssText = "pointer-events:auto", t.style.pointerEvents === "auto";
  }
}(), Zt = function(e, n) {
  var o = p(e), r = parseInt(o.width) - parseInt(o.paddingLeft) - parseInt(o.paddingRight) - parseInt(o.borderLeftWidth) - parseInt(o.borderRightWidth), i = we(e, 0, n), a = we(e, 1, n), l = i && p(i), s = a && p(a), u = l && parseInt(l.marginLeft) + parseInt(l.marginRight) + M(i).width, d = s && parseInt(s.marginLeft) + parseInt(s.marginRight) + M(a).width;
  if (o.display === "flex")
    return o.flexDirection === "column" || o.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (o.display === "grid")
    return o.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (i && l.float && l.float !== "none") {
    var f = l.float === "left" ? "left" : "right";
    return a && (s.clear === "both" || s.clear === f) ? "vertical" : "horizontal";
  }
  return i && (l.display === "block" || l.display === "flex" || l.display === "table" || l.display === "grid" || u >= r && o[Xt] === "none" || a && o[Xt] === "none" && u + d > r) ? "vertical" : "horizontal";
}, jn = function(e, n, o) {
  var r = o ? e.left : e.top, i = o ? e.right : e.bottom, a = o ? e.width : e.height, l = o ? n.left : n.top, s = o ? n.right : n.bottom, u = o ? n.width : n.height;
  return r === l || i === s || r + a / 2 === l + u / 2;
}, zn = function(e, n) {
  var o;
  return Ue.some(function(r) {
    var i = r[j].options.emptyInsertThreshold;
    if (!(!i || mt(r))) {
      var a = M(r), l = e >= a.left - i && e <= a.right + i, s = n >= a.top - i && n <= a.bottom + i;
      if (l && s)
        return o = r;
    }
  }), o;
}, Qt = function(e) {
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
  (!r || Be(r) != "object") && (r = {
    name: r
  }), o.name = r.name, o.checkPull = n(r.pull, !0), o.checkPut = n(r.put), o.revertClone = r.revertClone, e.group = o;
}, en = function() {
  !Jt && g && p(g, "display", "none");
}, tn = function() {
  !Jt && g && p(g, "display", "");
};
qe && !Gt && document.addEventListener("click", function(t) {
  if (ze)
    return t.preventDefault(), t.stopPropagation && t.stopPropagation(), t.stopImmediatePropagation && t.stopImmediatePropagation(), ze = !1, !1;
}, !0);
var he = function(e) {
  if (c) {
    e = e.touches ? e.touches[0] : e;
    var n = zn(e.clientX, e.clientY);
    if (n) {
      var o = {};
      for (var r in e)
        e.hasOwnProperty(r) && (o[r] = e[r]);
      o.target = o.rootEl = n, o.preventDefault = void 0, o.stopPropagation = void 0, n[j]._onDragOver(o);
    }
  }
}, Un = function(e) {
  c && c.parentNode[j]._isOutsideThisEl(e.target);
};
function h(t, e) {
  if (!(t && t.nodeType && t.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));
  this.el = t, this.options = e = re({}, e), t[j] = this;
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
      return Zt(t, this.options);
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
    // Disabled on Safari: #1571; Enabled on Safari IOS: #2244
    supportPointer: h.supportPointer !== !1 && "PointerEvent" in window && (!Te || gt),
    emptyInsertThreshold: 5
  };
  Pe.initializePlugins(this, t, n);
  for (var o in n)
    !(o in e) && (e[o] = n[o]);
  Qt(e);
  for (var r in this)
    r.charAt(0) === "_" && typeof this[r] == "function" && (this[r] = this[r].bind(this));
  this.nativeDraggable = e.forceFallback ? !1 : Gn, this.nativeDraggable && (this.options.touchStartThreshold = 1), e.supportPointer ? E(t, "pointerdown", this._onTapStart) : (E(t, "mousedown", this._onTapStart), E(t, "touchstart", this._onTapStart)), this.nativeDraggable && (E(t, "dragover", this), E(t, "dragenter", this)), Ue.push(this.el), e.store && e.store.get && this.sort(e.store.get(this) || []), re(this, kn());
}
h.prototype = /** @lends Sortable.prototype */
{
  constructor: h,
  _isOutsideThisEl: function(e) {
    !this.el.contains(e) && e !== this.el && (me = null);
  },
  _getDirection: function(e, n) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, e, n, c) : this.options.direction;
  },
  _onTapStart: function(e) {
    if (e.cancelable) {
      var n = this, o = this.el, r = this.options, i = r.preventOnFilter, a = e.type, l = e.touches && e.touches[0] || e.pointerType && e.pointerType === "touch" && e, s = (l || e).target, u = e.target.shadowRoot && (e.path && e.path[0] || e.composedPath && e.composedPath()[0]) || s, d = r.filter;
      if (eo(o), !c && !(/mousedown|pointerdown/.test(a) && e.button !== 0 || r.disabled) && !u.isContentEditable && !(!this.nativeDraggable && Te && s && s.tagName.toUpperCase() === "SELECT") && (s = Z(s, r.draggable, o, !1), !(s && s.animated) && He !== s)) {
        if (be = K(s), Oe = K(s, r.draggable), typeof d == "function") {
          if (d.call(this, e, s, this)) {
            W({
              sortable: n,
              rootEl: u,
              name: "filter",
              targetEl: s,
              toEl: o,
              fromEl: o
            }), G("filter", n, {
              evt: e
            }), i && e.preventDefault();
            return;
          }
        } else if (d && (d = d.split(",").some(function(f) {
          if (f = Z(u, f.trim(), o, !1), f)
            return W({
              sortable: n,
              rootEl: f,
              name: "filter",
              targetEl: s,
              fromEl: o,
              toEl: o
            }), G("filter", n, {
              evt: e
            }), !0;
        }), d)) {
          i && e.preventDefault();
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
      if (C = i, c = o, I = c.parentNode, pe = c.nextSibling, He = o, Me = a.group, h.dragged = c, de = {
        target: c,
        clientX: (n || e).clientX,
        clientY: (n || e).clientY
      }, Ft = de.clientX - u.left, Rt = de.clientY - u.top, this._lastX = (n || e).clientX, this._lastY = (n || e).clientY, c.style["will-change"] = "all", s = function() {
        if (G("delayEnded", r, {
          evt: e
        }), h.eventCanceled) {
          r._onDrop();
          return;
        }
        r._disableDelayedDragEvents(), !xt && r.nativeDraggable && (c.draggable = !0), r._triggerDragStart(e, n), W({
          sortable: r,
          name: "choose",
          originalEvent: e
        }), $(c, a.chosenClass, !0);
      }, a.ignore.split(",").forEach(function(d) {
        Ut(c, d.trim(), rt);
      }), E(l, "dragover", he), E(l, "mousemove", he), E(l, "touchmove", he), a.supportPointer ? (E(l, "pointerup", r._onDrop), !this.nativeDraggable && E(l, "pointercancel", r._onDrop)) : (E(l, "mouseup", r._onDrop), E(l, "touchend", r._onDrop), E(l, "touchcancel", r._onDrop)), xt && this.nativeDraggable && (this.options.touchStartThreshold = 4, c.draggable = !0), G("delayStart", this, {
        evt: e
      }), a.delay && (!a.delayOnTouchOnly || n) && (!this.nativeDraggable || !(xe || ie))) {
        if (h.eventCanceled) {
          this._onDrop();
          return;
        }
        a.supportPointer ? (E(l, "pointerup", r._disableDelayedDrag), E(l, "pointercancel", r._disableDelayedDrag)) : (E(l, "mouseup", r._disableDelayedDrag), E(l, "touchend", r._disableDelayedDrag), E(l, "touchcancel", r._disableDelayedDrag)), E(l, "mousemove", r._delayedDragTouchMoveHandler), E(l, "touchmove", r._delayedDragTouchMoveHandler), a.supportPointer && E(l, "pointermove", r._delayedDragTouchMoveHandler), r._dragStartTimer = setTimeout(s, a.delay);
      } else
        s();
    }
  },
  _delayedDragTouchMoveHandler: function(e) {
    var n = e.touches ? e.touches[0] : e;
    Math.max(Math.abs(n.clientX - this._lastX), Math.abs(n.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    c && rt(c), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var e = this.el.ownerDocument;
    w(e, "mouseup", this._disableDelayedDrag), w(e, "touchend", this._disableDelayedDrag), w(e, "touchcancel", this._disableDelayedDrag), w(e, "pointerup", this._disableDelayedDrag), w(e, "pointercancel", this._disableDelayedDrag), w(e, "mousemove", this._delayedDragTouchMoveHandler), w(e, "touchmove", this._delayedDragTouchMoveHandler), w(e, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(e, n) {
    n = n || e.pointerType == "touch" && e, !this.nativeDraggable || n ? this.options.supportPointer ? E(document, "pointermove", this._onTouchMove) : n ? E(document, "touchmove", this._onTouchMove) : E(document, "mousemove", this._onTouchMove) : (E(c, "dragend", this), E(C, "dragstart", this._onDragStart));
    try {
      document.selection ? We(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch (o) {
    }
  },
  _dragStarted: function(e, n) {
    if (ve = !1, C && c) {
      G("dragStarted", this, {
        evt: n
      }), this.nativeDraggable && E(document, "dragover", Un);
      var o = this.options;
      !e && $(c, o.dragClass, !1), $(c, o.ghostClass, !0), h.active = this, e && this._appendGhost(), W({
        sortable: this,
        name: "start",
        originalEvent: n
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (J) {
      this._lastX = J.clientX, this._lastY = J.clientY, en();
      for (var e = document.elementFromPoint(J.clientX, J.clientY), n = e; e && e.shadowRoot && (e = e.shadowRoot.elementFromPoint(J.clientX, J.clientY), e !== n); )
        n = e;
      if (c.parentNode[j]._isOutsideThisEl(e), n)
        do {
          if (n[j]) {
            var o = void 0;
            if (o = n[j]._onDragOver({
              clientX: J.clientX,
              clientY: J.clientY,
              target: e,
              rootEl: n
            }), o && !this.options.dragoverBubble)
              break;
          }
          e = n;
        } while (n = zt(n));
      tn();
    }
  },
  _onTouchMove: function(e) {
    if (de) {
      var n = this.options, o = n.fallbackTolerance, r = n.fallbackOffset, i = e.touches ? e.touches[0] : e, a = g && ye(g, !0), l = g && a && a.a, s = g && a && a.d, u = Re && k && Mt(k), d = (i.clientX - de.clientX + r.x) / (l || 1) + (u ? u[0] - ot[0] : 0) / (l || 1), f = (i.clientY - de.clientY + r.y) / (s || 1) + (u ? u[1] - ot[1] : 0) / (s || 1);
      if (!h.active && !ve) {
        if (o && Math.max(Math.abs(i.clientX - this._lastX), Math.abs(i.clientY - this._lastY)) < o)
          return;
        this._onDragStart(e, !0);
      }
      if (g) {
        a ? (a.e += d - (tt || 0), a.f += f - (nt || 0)) : a = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: d,
          f
        };
        var m = "matrix(".concat(a.a, ",").concat(a.b, ",").concat(a.c, ",").concat(a.d, ",").concat(a.e, ",").concat(a.f, ")");
        p(g, "webkitTransform", m), p(g, "mozTransform", m), p(g, "msTransform", m), p(g, "transform", m), tt = d, nt = f, J = i;
      }
      e.cancelable && e.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!g) {
      var e = this.options.fallbackOnBody ? document.body : C, n = M(c, !0, Re, !0, e), o = this.options;
      if (Re) {
        for (k = e; p(k, "position") === "static" && p(k, "transform") === "none" && k !== document; )
          k = k.parentNode;
        k !== document.body && k !== document.documentElement ? (k === document && (k = ee()), n.top += k.scrollTop, n.left += k.scrollLeft) : k = ee(), ot = Mt(k);
      }
      g = c.cloneNode(!0), $(g, o.ghostClass, !1), $(g, o.fallbackClass, !0), $(g, o.dragClass, !0), p(g, "transition", ""), p(g, "transform", ""), p(g, "box-sizing", "border-box"), p(g, "margin", 0), p(g, "top", n.top), p(g, "left", n.left), p(g, "width", n.width), p(g, "height", n.height), p(g, "opacity", "0.8"), p(g, "position", Re ? "absolute" : "fixed"), p(g, "zIndex", "100000"), p(g, "pointerEvents", "none"), h.ghost = g, e.appendChild(g), p(g, "transform-origin", Ft / parseInt(g.style.width) * 100 + "% " + Rt / parseInt(g.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(e, n) {
    var o = this, r = e.dataTransfer, i = o.options;
    if (G("dragStart", this, {
      evt: e
    }), h.eventCanceled) {
      this._onDrop();
      return;
    }
    G("setupClone", this), h.eventCanceled || (O = qt(c), O.removeAttribute("id"), O.draggable = !1, O.style["will-change"] = "", this._hideClone(), $(O, this.options.chosenClass, !1), h.clone = O), o.cloneId = We(function() {
      G("clone", o), !h.eventCanceled && (o.options.removeCloneOnHide || C.insertBefore(O, c), o._hideClone(), W({
        sortable: o,
        name: "clone"
      }));
    }), !n && $(c, i.dragClass, !0), n ? (ze = !0, o._loopId = setInterval(o._emulateDragOver, 50)) : (w(document, "mouseup", o._onDrop), w(document, "touchend", o._onDrop), w(document, "touchcancel", o._onDrop), r && (r.effectAllowed = "move", i.setData && i.setData.call(o, r, c)), E(document, "drop", o), p(c, "transform", "translateZ(0)")), ve = !0, o._dragStartId = We(o._dragStarted.bind(o, n, e)), E(document, "selectstart", o), De = !0, window.getSelection().removeAllRanges(), Te && p(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(e) {
    var n = this.el, o = e.target, r, i, a, l = this.options, s = l.group, u = h.active, d = Me === s, f = l.sort, m = X || u, y, b = this, S = !1;
    if (ut) return;
    function B(ce, ln) {
      G(ce, b, te({
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
        onMove: function(yt, sn) {
          return Xe(C, n, c, r, yt, M(yt), e, sn);
        },
        changed: A
      }, ln));
    }
    function H() {
      B("dragOverAnimationCapture"), b.captureAnimationState(), b !== m && m.captureAnimationState();
    }
    function F(ce) {
      return B("dragOverCompleted", {
        insertion: ce
      }), ce && (d ? u._hideClone() : u._showClone(b), b !== m && ($(c, X ? X.options.ghostClass : u.options.ghostClass, !1), $(c, l.ghostClass, !0)), X !== b && b !== h.active ? X = b : b === h.active && X && (X = null), m === b && (b._ignoreWhileAnimating = o), b.animateAll(function() {
        B("dragOverAnimationComplete"), b._ignoreWhileAnimating = null;
      }), b !== m && (m.animateAll(), m._ignoreWhileAnimating = null)), (o === c && !c.animated || o === n && !o.animated) && (me = null), !l.dragoverBubble && !e.rootEl && o !== document && (c.parentNode[j]._isOutsideThisEl(e.target), !ce && he(e)), !l.dragoverBubble && e.stopPropagation && e.stopPropagation(), S = !0;
    }
    function A() {
      q = K(c), le = K(c, l.draggable), W({
        sortable: b,
        name: "change",
        toEl: n,
        newIndex: q,
        newDraggableIndex: le,
        originalEvent: e
      });
    }
    if (e.preventDefault !== void 0 && e.cancelable && e.preventDefault(), o = Z(o, l.draggable, n, !0), B("dragOver"), h.eventCanceled) return S;
    if (c.contains(e.target) || o.animated && o.animatingX && o.animatingY || b._ignoreWhileAnimating === o)
      return F(!1);
    if (ze = !1, u && !l.disabled && (d ? f || (a = I !== C) : X === this || (this.lastPutMode = Me.checkPull(this, u, c, e)) && s.checkPut(this, u, c, e))) {
      if (y = this._getDirection(e, o) === "vertical", r = M(c), B("dragOverValid"), h.eventCanceled) return S;
      if (a)
        return I = C, H(), this._hideClone(), B("revert"), h.eventCanceled || (pe ? C.insertBefore(c, pe) : C.appendChild(c)), F(!0);
      var L = mt(n, l.draggable);
      if (!L || Kn(e, y, this) && !L.animated) {
        if (L === c)
          return F(!1);
        if (L && n === e.target && (o = L), o && (i = M(o)), Xe(C, n, c, r, o, i, e, !!o) !== !1)
          return H(), L && L.nextSibling ? n.insertBefore(c, L.nextSibling) : n.appendChild(c), I = n, A(), F(!0);
      } else if (L && qn(e, y, this)) {
        var ne = we(n, 0, l, !0);
        if (ne === c)
          return F(!1);
        if (o = ne, i = M(o), Xe(C, n, c, r, o, i, e, !1) !== !1)
          return H(), n.insertBefore(c, ne), I = n, A(), F(!0);
      } else if (o.parentNode === n) {
        i = M(o);
        var z = 0, Q, v = c.parentNode !== n, D = !jn(c.animated && c.toRect || r, o.animated && o.toRect || i, y), x = y ? "top" : "left", P = Nt(o, "top", "top") || Nt(c, "top", "top"), _ = P ? P.scrollTop : void 0;
        me !== o && (Q = i[x], Ae = !1, Fe = !D && l.invertSwap || v), z = Jn(e, o, i, y, D ? 1 : l.swapThreshold, l.invertedSwapThreshold == null ? l.swapThreshold : l.invertedSwapThreshold, Fe, me === o);
        var T;
        if (z !== 0) {
          var R = K(c);
          do
            R -= z, T = I.children[R];
          while (T && (p(T, "display") === "none" || T === g));
        }
        if (z === 0 || T === o)
          return F(!1);
        me = o, Ie = z;
        var Y = o.nextElementSibling, U = !1;
        U = z === 1;
        var ae = Xe(C, n, c, r, o, i, e, U);
        if (ae !== !1)
          return (ae === 1 || ae === -1) && (U = ae === 1), ut = !0, setTimeout($n, 30), H(), U && !Y ? n.appendChild(c) : o.parentNode.insertBefore(c, U ? Y : o), P && $t(P, 0, _ - P.scrollTop), I = c.parentNode, Q !== void 0 && !Fe && (Le = Math.abs(Q - M(o)[x])), A(), F(!0);
      }
      if (n.contains(c))
        return F(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    w(document, "mousemove", this._onTouchMove), w(document, "touchmove", this._onTouchMove), w(document, "pointermove", this._onTouchMove), w(document, "dragover", he), w(document, "mousemove", he), w(document, "touchmove", he);
  },
  _offUpEvents: function() {
    var e = this.el.ownerDocument;
    w(e, "mouseup", this._onDrop), w(e, "touchend", this._onDrop), w(e, "pointerup", this._onDrop), w(e, "pointercancel", this._onDrop), w(e, "touchcancel", this._onDrop), w(document, "selectstart", this);
  },
  _onDrop: function(e) {
    var n = this.el, o = this.options;
    if (q = K(c), le = K(c, o.draggable), G("drop", this, {
      evt: e
    }), I = c && c.parentNode, q = K(c), le = K(c, o.draggable), h.eventCanceled) {
      this._nulling();
      return;
    }
    ve = !1, Fe = !1, Ae = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), ct(this.cloneId), ct(this._dragStartId), this.nativeDraggable && (w(document, "drop", this), w(n, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Te && p(document.body, "user-select", ""), p(c, "transform", ""), e && (De && (e.cancelable && e.preventDefault(), !o.dropBubble && e.stopPropagation()), g && g.parentNode && g.parentNode.removeChild(g), (C === I || X && X.lastPutMode !== "clone") && O && O.parentNode && O.parentNode.removeChild(O), c && (this.nativeDraggable && w(c, "dragend", this), rt(c), c.style["will-change"] = "", De && !ve && $(c, X ? X.options.ghostClass : this.options.ghostClass, !1), $(c, this.options.chosenClass, !1), W({
      sortable: this,
      name: "unchoose",
      toEl: I,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: e
    }), C !== I ? (q >= 0 && (W({
      rootEl: I,
      name: "add",
      toEl: I,
      fromEl: C,
      originalEvent: e
    }), W({
      sortable: this,
      name: "remove",
      toEl: I,
      originalEvent: e
    }), W({
      rootEl: I,
      name: "sort",
      toEl: I,
      fromEl: C,
      originalEvent: e
    }), W({
      sortable: this,
      name: "sort",
      toEl: I,
      originalEvent: e
    })), X && X.save()) : q !== be && q >= 0 && (W({
      sortable: this,
      name: "update",
      toEl: I,
      originalEvent: e
    }), W({
      sortable: this,
      name: "sort",
      toEl: I,
      originalEvent: e
    })), h.active && ((q == null || q === -1) && (q = be, le = Oe), W({
      sortable: this,
      name: "end",
      toEl: I,
      originalEvent: e
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    G("nulling", this), C = c = I = g = pe = O = He = se = de = J = De = q = le = be = Oe = me = Ie = X = Me = h.dragged = h.ghost = h.clone = h.active = null, Ve.forEach(function(e) {
      e.checked = !0;
    }), Ve.length = tt = nt = 0;
  },
  handleEvent: function(e) {
    switch (e.type) {
      case "drop":
      case "dragend":
        this._onDrop(e);
        break;
      case "dragenter":
      case "dragover":
        c && (this._onDragOver(e), Vn(e));
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
      n = o[r], Z(n, a.draggable, this.el, !1) && e.push(n.getAttribute(a.dataIdAttr) || Qn(n));
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
    var r = Pe.modifyOption(this, e, n);
    typeof r != "undefined" ? o[e] = r : o[e] = n, e === "group" && Qt(o);
  },
  /**
   * Destroy
   */
  destroy: function() {
    G("destroy", this);
    var e = this.el;
    e[j] = null, w(e, "mousedown", this._onTapStart), w(e, "touchstart", this._onTapStart), w(e, "pointerdown", this._onTapStart), this.nativeDraggable && (w(e, "dragover", this), w(e, "dragenter", this)), Array.prototype.forEach.call(e.querySelectorAll("[draggable]"), function(n) {
      n.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), Ue.splice(Ue.indexOf(this.el), 1), this.el = e = null;
  },
  _hideClone: function() {
    if (!se) {
      if (G("hideClone", this), h.eventCanceled) return;
      p(O, "display", "none"), this.options.removeCloneOnHide && O.parentNode && O.parentNode.removeChild(O), se = !0;
    }
  },
  _showClone: function(e) {
    if (e.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (se) {
      if (G("showClone", this), h.eventCanceled) return;
      c.parentNode == C && !this.options.group.revertClone ? C.insertBefore(O, c) : pe ? C.insertBefore(O, pe) : C.appendChild(O), this.options.group.revertClone && this.animate(c, O), p(O, "display", ""), se = !1;
    }
  }
};
function Vn(t) {
  t.dataTransfer && (t.dataTransfer.dropEffect = "move"), t.cancelable && t.preventDefault();
}
function Xe(t, e, n, o, r, i, a, l) {
  var s, u = t[j], d = u.options.onMove, f;
  return window.CustomEvent && !ie && !xe ? s = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (s = document.createEvent("Event"), s.initEvent("move", !0, !0)), s.to = e, s.from = t, s.dragged = n, s.draggedRect = o, s.related = r || e, s.relatedRect = i || M(e), s.willInsertAfter = l, s.originalEvent = a, t.dispatchEvent(s), d && (f = d.call(u, s, a)), f;
}
function rt(t) {
  t.draggable = !1;
}
function $n() {
  ut = !1;
}
function qn(t, e, n) {
  var o = M(we(n.el, 0, n.options, !0)), r = Kt(n.el, n.options, g), i = 10;
  return e ? t.clientX < r.left - i || t.clientY < o.top && t.clientX < o.right : t.clientY < r.top - i || t.clientY < o.bottom && t.clientX < o.left;
}
function Kn(t, e, n) {
  var o = M(mt(n.el, n.options.draggable)), r = Kt(n.el, n.options, g), i = 10;
  return e ? t.clientX > r.right + i || t.clientY > o.bottom && t.clientX > o.left : t.clientY > r.bottom + i || t.clientX > o.right && t.clientY > o.top;
}
function Jn(t, e, n, o, r, i, a, l) {
  var s = o ? t.clientY : t.clientX, u = o ? n.height : n.width, d = o ? n.top : n.left, f = o ? n.bottom : n.right, m = !1;
  if (!a) {
    if (l && Le < u * r) {
      if (!Ae && (Ie === 1 ? s > d + u * i / 2 : s < f - u * i / 2) && (Ae = !0), Ae)
        m = !0;
      else if (Ie === 1 ? s < d + Le : s > f - Le)
        return -Ie;
    } else if (s > d + u * (1 - r) / 2 && s < f - u * (1 - r) / 2)
      return Zn(e);
  }
  return m = m || a, m && (s < d + u * i / 2 || s > f - u * i / 2) ? s > d + u / 2 ? 1 : -1 : 0;
}
function Zn(t) {
  return K(c) < K(t) ? 1 : -1;
}
function Qn(t) {
  for (var e = t.tagName + t.className + t.src + t.href + t.textContent, n = e.length, o = 0; n--; )
    o += e.charCodeAt(n);
  return o.toString(36);
}
function eo(t) {
  Ve.length = 0;
  for (var e = t.getElementsByTagName("input"), n = e.length; n--; ) {
    var o = e[n];
    o.checked && Ve.push(o);
  }
}
function We(t) {
  return setTimeout(t, 0);
}
function ct(t) {
  return clearTimeout(t);
}
qe && E(document, "touchmove", function(t) {
  (h.active || ve) && t.cancelable && t.preventDefault();
});
h.utils = {
  on: E,
  off: w,
  css: p,
  find: Ut,
  is: function(e, n) {
    return !!Z(e, n, e, !1);
  },
  extend: Xn,
  throttle: Vt,
  closest: Z,
  toggleClass: $,
  clone: qt,
  index: K,
  nextTick: We,
  cancelNextTick: ct,
  detectDirection: Zt,
  getChild: we,
  expando: j
};
h.get = function(t) {
  return t[j];
};
h.mount = function() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  e[0].constructor === Array && (e = e[0]), e.forEach(function(o) {
    if (!o.prototype || !o.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(o));
    o.utils && (h.utils = te(te({}, h.utils), o.utils)), Pe.mount(o);
  });
};
h.create = function(t, e) {
  return new h(t, e);
};
h.version = Fn;
var N = [], Se, ft, dt = !1, it, at, $e, _e;
function to() {
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
      this.sortable.nativeDraggable ? E(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? E(document, "pointermove", this._handleFallbackAutoScroll) : o.touches ? E(document, "touchmove", this._handleFallbackAutoScroll) : E(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(n) {
      var o = n.originalEvent;
      !this.options.dragOverBubble && !o.rootEl && this._handleAutoScroll(o);
    },
    drop: function() {
      this.sortable.nativeDraggable ? w(document, "dragover", this._handleAutoScroll) : (w(document, "pointermove", this._handleFallbackAutoScroll), w(document, "touchmove", this._handleFallbackAutoScroll), w(document, "mousemove", this._handleFallbackAutoScroll)), Yt(), Ge(), Yn();
    },
    nulling: function() {
      $e = ft = Se = dt = _e = it = at = null, N.length = 0;
    },
    _handleFallbackAutoScroll: function(n) {
      this._handleAutoScroll(n, !0);
    },
    _handleAutoScroll: function(n, o) {
      var r = this, i = (n.touches ? n.touches[0] : n).clientX, a = (n.touches ? n.touches[0] : n).clientY, l = document.elementFromPoint(i, a);
      if ($e = n, o || this.options.forceAutoScrollFallback || xe || ie || Te) {
        lt(n, this.options, l, o);
        var s = ue(l, !0);
        dt && (!_e || i !== it || a !== at) && (_e && Yt(), _e = setInterval(function() {
          var u = ue(document.elementFromPoint(i, a), !0);
          u !== s && (s = u, Ge()), lt(n, r.options, u, o);
        }, 10), it = i, at = a);
      } else {
        if (!this.options.bubbleScroll || ue(l, !0) === ee()) {
          Ge();
          return;
        }
        lt(n, this.options, ue(l, !1), !1);
      }
    }
  }, re(t, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function Ge() {
  N.forEach(function(t) {
    clearInterval(t.pid);
  }), N = [];
}
function Yt() {
  clearInterval(_e);
}
var lt = Vt(function(t, e, n, o) {
  if (e.scroll) {
    var r = (t.touches ? t.touches[0] : t).clientX, i = (t.touches ? t.touches[0] : t).clientY, a = e.scrollSensitivity, l = e.scrollSpeed, s = ee(), u = !1, d;
    ft !== n && (ft = n, Ge(), Se = e.scroll, d = e.scrollFn, Se === !0 && (Se = ue(n, !0)));
    var f = 0, m = Se;
    do {
      var y = m, b = M(y), S = b.top, B = b.bottom, H = b.left, F = b.right, A = b.width, L = b.height, ne = void 0, z = void 0, Q = y.scrollWidth, v = y.scrollHeight, D = p(y), x = y.scrollLeft, P = y.scrollTop;
      y === s ? (ne = A < Q && (D.overflowX === "auto" || D.overflowX === "scroll" || D.overflowX === "visible"), z = L < v && (D.overflowY === "auto" || D.overflowY === "scroll" || D.overflowY === "visible")) : (ne = A < Q && (D.overflowX === "auto" || D.overflowX === "scroll"), z = L < v && (D.overflowY === "auto" || D.overflowY === "scroll"));
      var _ = ne && (Math.abs(F - r) <= a && x + A < Q) - (Math.abs(H - r) <= a && !!x), T = z && (Math.abs(B - i) <= a && P + L < v) - (Math.abs(S - i) <= a && !!P);
      if (!N[f])
        for (var R = 0; R <= f; R++)
          N[R] || (N[R] = {});
      (N[f].vx != _ || N[f].vy != T || N[f].el !== y) && (N[f].el = y, N[f].vx = _, N[f].vy = T, clearInterval(N[f].pid), (_ != 0 || T != 0) && (u = !0, N[f].pid = setInterval(function() {
        o && this.layer === 0 && h.active._onTouchMove($e);
        var Y = N[this.layer].vy ? N[this.layer].vy * l : 0, U = N[this.layer].vx ? N[this.layer].vx * l : 0;
        typeof d == "function" && d.call(h.dragged.parentNode[j], U, Y, t, $e, N[this.layer].el) !== "continue" || $t(N[this.layer].el, U, Y);
      }.bind({
        layer: f
      }), 24))), f++;
    } while (e.bubbleScroll && m !== s && (m = ue(m, !1)));
    dt = u;
  }
}, 30), nn = function(e) {
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
function vt() {
}
vt.prototype = {
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
  drop: nn
};
re(vt, {
  pluginName: "revertOnSpill"
});
function bt() {
}
bt.prototype = {
  onSpill: function(e) {
    var n = e.dragEl, o = e.putSortable, r = o || this.sortable;
    r.captureAnimationState(), n.parentNode && n.parentNode.removeChild(n), r.animateAll();
  },
  drop: nn
};
re(bt, {
  pluginName: "removeOnSpill"
});
h.mount(new to());
h.mount(bt, vt);
let Ye = 0, ke = 0, Ee = null;
function no() {
  function t() {
    this.defaults = {
      debounceTimeout: 1e3,
      shakeRange: 3
    };
  }
  return t.prototype = {
    dragStart({ originalEvent: e }) {
      Ye = e.screenX, ke = e.screenY, Ee = /* @__PURE__ */ new Date();
    },
    dragOverValid({ originalEvent: e, changed: n, completed: o, cancel: r }) {
      const i = this.options;
      if (Math.abs(e.screenX - Ye) < i.shakeRange && Math.abs(e.screenY - ke) < i.shakeRange) {
        Ee && /* @__PURE__ */ new Date() - Ee > i.debounceTimeout ? (n(), o(!0)) : r();
        return;
      }
      Ye = e.screenX, ke = e.screenY, Ee = /* @__PURE__ */ new Date(), r();
    },
    nulling() {
      Ee = null, Ye = 0, ke = 0;
    }
  }, Object.assign(t, {
    pluginName: "debounce"
  });
}
h.mount(new no());
function oo(t) {
  return t == null ? t : JSON.parse(JSON.stringify(t));
}
function ro(t) {
  pt() && dn(t);
}
function io(t) {
  pt() ? fn(t) : Lt(t);
}
let on = null, rn = null;
function kt(t = null, e = null) {
  on = t, rn = e;
}
function ao() {
  return {
    data: on,
    clonedData: rn
  };
}
const Bt = Symbol("cloneElement");
function an(...t) {
  var z, Q;
  const e = (z = pt()) == null ? void 0 : z.proxy;
  let n = null;
  const o = t[0];
  let [, r, i] = t;
  Array.isArray(V(r)) || (i = r, r = null);
  let a = null;
  const {
    immediate: l = !0,
    clone: s = oo,
    customUpdate: u
  } = (Q = V(i)) != null ? Q : {};
  function d(v) {
    var R;
    const { from: D, oldIndex: x, item: P } = v;
    n = Array.from(D.childNodes);
    const _ = V((R = V(r)) == null ? void 0 : R[x]), T = s(_);
    kt(_, T), P[Bt] = T;
  }
  function f(v) {
    const D = v.item[Bt];
    if (!Sn(D)) {
      if (Ze(v.item), Je(r)) {
        const x = [...V(r)];
        r.value = Ct(x, v.newDraggableIndex, D);
        return;
      }
      Ct(V(r), v.newDraggableIndex, D);
    }
  }
  function m(v) {
    const { from: D, item: x, oldIndex: P, oldDraggableIndex: _, pullMode: T, clone: R } = v;
    if (T === "clone") {
      Ze(R);
      return;
    }
    if (Ot(D, x, P), Je(r)) {
      const Y = [...V(r)];
      r.value = Tt(Y, _);
      return;
    }
    Tt(V(r), _);
  }
  function y(v) {
    if (u) {
      u(v);
      return;
    }
    const { from: D, item: x, oldIndex: P, oldDraggableIndex: _, newDraggableIndex: T } = v;
    if (Ze(x), Ot(D, x, P), Je(r)) {
      const R = [...V(r)];
      r.value = _t(
        R,
        _,
        T
      );
      return;
    }
    _t(V(r), _, T);
  }
  function b(v) {
    const { newIndex: D, oldIndex: x, from: P, to: _ } = v;
    let T = null;
    const R = D === x && P === _;
    try {
      if (R) {
        let Y = null;
        n == null || n.some((U, ae) => {
          if (Y && (n == null ? void 0 : n.length) !== _.childNodes.length)
            return P.insertBefore(Y, U.nextSibling), !0;
          const ce = _.childNodes[ae];
          Y = _ == null ? void 0 : _.replaceChild(U, ce);
        });
      }
    } catch (Y) {
      T = Y;
    } finally {
      n = null;
    }
    Lt(() => {
      if (kt(), T) throw T;
    });
  }
  const S = {
    onUpdate: y,
    onStart: d,
    onAdd: f,
    onRemove: m,
    onEnd: b
  };
  function B(v) {
    const D = V(o);
    return v || (v = _n(D) ? Tn(D, e == null ? void 0 : e.$el) : D), v && !In(v) && (v = v.$el), v || wn("Root element not found"), v;
  }
  function H() {
    var P;
    const _ = (P = V(i)) != null ? P : {}, { immediate: v, clone: D } = _, x = Ke(_, ["immediate", "clone"]);
    return It(x, (T, R) => {
      An(T) && (x[T] = (Y, ...U) => {
        const ae = ao();
        return xn(Y, ae), R(Y, ...U);
      });
    }), On(
      r === null ? {} : S,
      x
    );
  }
  const F = (v) => {
    v = B(v), a && A.destroy(), a = new h(v, H());
  };
  cn(
    () => i,
    () => {
      a && It(H(), (v, D) => {
        a == null || a.option(v, D);
      });
    },
    { deep: !0 }
  );
  const A = {
    option: (v, D) => a == null ? void 0 : a.option(v, D),
    destroy: () => {
      a == null || a.destroy(), a = null;
    },
    save: () => a == null ? void 0 : a.save(),
    toArray: () => a == null ? void 0 : a.toArray(),
    closest: (...v) => a == null ? void 0 : a.closest(...v)
  }, L = () => A == null ? void 0 : A.option("disabled", !0), ne = () => A == null ? void 0 : A.option("disabled", !1);
  return io(() => {
    l && F();
  }), ro(A.destroy), fe({ start: F, pause: L, resume: ne }, A);
}
const ht = [
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
], lo = [
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
  ...ht.map((t) => `on${t.replace(/^\S/, (e) => e.toUpperCase())}`)
], fo = hn({
  name: "VueDraggable",
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: lo,
  emits: ["update:modelValue", ...ht],
  setup(t, { slots: e, emit: n, expose: o, attrs: r }) {
    const i = ht.reduce((d, f) => {
      const m = `on${f.replace(/^\S/, (y) => y.toUpperCase())}`;
      return d[m] = (...y) => n(f, ...y), d;
    }, {}), a = St(() => {
      const y = pn(t), { modelValue: d } = y, f = Ke(y, ["modelValue"]), m = Object.entries(f).reduce((b, [S, B]) => {
        const H = V(B);
        return H !== void 0 && (b[S] = H), b;
      }, {});
      return fe(fe({}, i), Dn(fe(fe({}, r), m)));
    }), l = St({
      get: () => t.modelValue,
      set: (d) => n("update:modelValue", d)
    }), s = gn(), u = mn(
      an(t.target || s, l, a)
    );
    return o(u), () => {
      var d;
      return vn(t.tag || "div", { ref: s }, (d = e == null ? void 0 : e.default) == null ? void 0 : d.call(e, u));
    };
  }
}), Ht = {
  mounted: "mounted",
  unmounted: "unmounted"
}, st = /* @__PURE__ */ new WeakMap(), ho = {
  [Ht.mounted](t, e) {
    const n = bn(e.value) ? [e.value] : e.value, [o, r] = n, i = an(t, o, r);
    st.set(t, i.destroy);
  },
  [Ht.unmounted](t) {
    var e;
    (e = st.get(t)) == null || e(), st.delete(t);
  }
};
export {
  fo as VueDraggable,
  an as useDraggable,
  ho as vDraggable
};
