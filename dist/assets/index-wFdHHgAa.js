const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/ProjectForm-BcKrDY4V.js',
      'assets/useProject-BoIFukOZ.js',
      'assets/VTextarea-IAXKVb60.js',
      'assets/VTextarea-BTR7f0gW.css',
      'assets/VDivider-q9Iqy01J.js',
      'assets/VDivider-CTbbZwnv.css',
      'assets/ProjectDetails-Bf4Dr6B0.js',
      'assets/TaskPriority.vue_vue_type_script_setup_true_lang-BF39xCEa.js',
      'assets/TaskPriority-D0iltsFo.css',
      'assets/useTask-BXCLAk2K.js',
      'assets/ProjectDetails-BnxSZ_W5.css',
      'assets/TaskView-BwoPksXr.js',
      'assets/TaskForm-BFXjniBd.js',
    ]),
) => i.map((i) => d[i])
;(function () {
  const e = document.createElement('link').relList
  if (e && e.supports && e.supports('modulepreload')) return
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) n(s)
  new MutationObserver((s) => {
    for (const r of s)
      if (r.type === 'childList')
        for (const i of r.addedNodes) i.tagName === 'LINK' && i.rel === 'modulepreload' && n(i)
  }).observe(document, { childList: !0, subtree: !0 })
  function a(s) {
    const r = {}
    return (
      s.integrity && (r.integrity = s.integrity),
      s.referrerPolicy && (r.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === 'use-credentials'
        ? (r.credentials = 'include')
        : s.crossOrigin === 'anonymous'
          ? (r.credentials = 'omit')
          : (r.credentials = 'same-origin'),
      r
    )
  }
  function n(s) {
    if (s.ep) return
    s.ep = !0
    const r = a(s)
    fetch(s.href, r)
  }
})()
/**
 * @vue/shared v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ /*! #__NO_SIDE_EFFECTS__ */ function k2(t) {
  const e = Object.create(null)
  for (const a of t.split(',')) e[a] = 1
  return (a) => a in e
}
const wt = {},
  Y1 = [],
  Me = () => {},
  D3 = () => !1,
  Ba = (t) =>
    t.charCodeAt(0) === 111 &&
    t.charCodeAt(1) === 110 &&
    (t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97),
  x2 = (t) => t.startsWith('onUpdate:'),
  Vt = Object.assign,
  E2 = (t, e) => {
    const a = t.indexOf(e)
    a > -1 && t.splice(a, 1)
  },
  R3 = Object.prototype.hasOwnProperty,
  gt = (t, e) => R3.call(t, e),
  at = Array.isArray,
  q1 = (t) => Fa(t) === '[object Map]',
  tc = (t) => Fa(t) === '[object Set]',
  rt = (t) => typeof t == 'function',
  It = (t) => typeof t == 'string',
  f1 = (t) => typeof t == 'symbol',
  Et = (t) => t !== null && typeof t == 'object',
  ec = (t) => (Et(t) || rt(t)) && rt(t.then) && rt(t.catch),
  ac = Object.prototype.toString,
  Fa = (t) => ac.call(t),
  L3 = (t) => Fa(t).slice(8, -1),
  nc = (t) => Fa(t) === '[object Object]',
  P2 = (t) => It(t) && t !== 'NaN' && t[0] !== '-' && '' + parseInt(t, 10) === t,
  g0 = k2(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted',
  ),
  ja = (t) => {
    const e = Object.create(null)
    return (a) => e[a] || (e[a] = t(a))
  },
  M3 = /-(\w)/g,
  re = ja((t) => t.replace(M3, (e, a) => (a ? a.toUpperCase() : ''))),
  V3 = /\B([A-Z])/g,
  D1 = ja((t) => t.replace(V3, '-$1').toLowerCase()),
  Xe = ja((t) => t.charAt(0).toUpperCase() + t.slice(1)),
  yn = ja((t) => (t ? `on${Xe(t)}` : '')),
  o1 = (t, e) => !Object.is(t, e),
  oa = (t, ...e) => {
    for (let a = 0; a < t.length; a++) t[a](...e)
  },
  sc = (t, e, a, n = !1) => {
    Object.defineProperty(t, e, { configurable: !0, enumerable: !1, writable: n, value: a })
  },
  qn = (t) => {
    const e = parseFloat(t)
    return isNaN(e) ? t : e
  },
  $3 = (t) => {
    const e = It(t) ? Number(t) : NaN
    return isNaN(e) ? t : e
  }
let xs
const Ha = () =>
  xs ||
  (xs =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : {})
function T2(t) {
  if (at(t)) {
    const e = {}
    for (let a = 0; a < t.length; a++) {
      const n = t[a],
        s = It(n) ? j3(n) : T2(n)
      if (s) for (const r in s) e[r] = s[r]
    }
    return e
  } else if (It(t) || Et(t)) return t
}
const N3 = /;(?![^(]*\))/g,
  B3 = /:([^]+)/,
  F3 = /\/\*[^]*?\*\//g
function j3(t) {
  const e = {}
  return (
    t
      .replace(F3, '')
      .split(N3)
      .forEach((a) => {
        if (a) {
          const n = a.split(B3)
          n.length > 1 && (e[n[0].trim()] = n[1].trim())
        }
      }),
    e
  )
}
function A2(t) {
  let e = ''
  if (It(t)) e = t
  else if (at(t))
    for (let a = 0; a < t.length; a++) {
      const n = A2(t[a])
      n && (e += n + ' ')
    }
  else if (Et(t)) for (const a in t) t[a] && (e += a + ' ')
  return e.trim()
}
const H3 = 'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  W3 = k2(H3)
function rc(t) {
  return !!t || t === ''
}
const ic = (t) => !!(t && t.__v_isRef === !0),
  P1 = (t) =>
    It(t)
      ? t
      : t == null
        ? ''
        : at(t) || (Et(t) && (t.toString === ac || !rt(t.toString)))
          ? ic(t)
            ? P1(t.value)
            : JSON.stringify(t, cc, 2)
          : String(t),
  cc = (t, e) =>
    ic(e)
      ? cc(t, e.value)
      : q1(e)
        ? {
            [`Map(${e.size})`]: [...e.entries()].reduce(
              (a, [n, s], r) => ((a[bn(n, r) + ' =>'] = s), a),
              {},
            ),
          }
        : tc(e)
          ? { [`Set(${e.size})`]: [...e.values()].map((a) => bn(a)) }
          : f1(e)
            ? bn(e)
            : Et(e) && !at(e) && !nc(e)
              ? String(e)
              : e,
  bn = (t, e = '') => {
    var a
    return f1(t) ? `Symbol(${(a = t.description) != null ? a : e})` : t
  }
/**
 * @vue/reactivity v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Qt
class lc {
  constructor(e = !1) {
    ;(this.detached = e),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this._isPaused = !1),
      (this.parent = Qt),
      !e && Qt && (this.index = (Qt.scopes || (Qt.scopes = [])).push(this) - 1)
  }
  get active() {
    return this._active
  }
  pause() {
    if (this._active) {
      this._isPaused = !0
      let e, a
      if (this.scopes) for (e = 0, a = this.scopes.length; e < a; e++) this.scopes[e].pause()
      for (e = 0, a = this.effects.length; e < a; e++) this.effects[e].pause()
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1
      let e, a
      if (this.scopes) for (e = 0, a = this.scopes.length; e < a; e++) this.scopes[e].resume()
      for (e = 0, a = this.effects.length; e < a; e++) this.effects[e].resume()
    }
  }
  run(e) {
    if (this._active) {
      const a = Qt
      try {
        return (Qt = this), e()
      } finally {
        Qt = a
      }
    }
  }
  on() {
    Qt = this
  }
  off() {
    Qt = this.parent
  }
  stop(e) {
    if (this._active) {
      this._active = !1
      let a, n
      for (a = 0, n = this.effects.length; a < n; a++) this.effects[a].stop()
      for (this.effects.length = 0, a = 0, n = this.cleanups.length; a < n; a++) this.cleanups[a]()
      if (((this.cleanups.length = 0), this.scopes)) {
        for (a = 0, n = this.scopes.length; a < n; a++) this.scopes[a].stop(!0)
        this.scopes.length = 0
      }
      if (!this.detached && this.parent && !e) {
        const s = this.parent.scopes.pop()
        s && s !== this && ((this.parent.scopes[this.index] = s), (s.index = this.index))
      }
      this.parent = void 0
    }
  }
}
function I2(t) {
  return new lc(t)
}
function U3() {
  return Qt
}
function _e(t, e = !1) {
  Qt && Qt.cleanups.push(t)
}
let kt
const _n = new WeakSet()
class oc {
  constructor(e) {
    ;(this.fn = e),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 5),
      (this.next = void 0),
      (this.cleanup = void 0),
      (this.scheduler = void 0),
      Qt && Qt.active && Qt.effects.push(this)
  }
  pause() {
    this.flags |= 64
  }
  resume() {
    this.flags & 64 && ((this.flags &= -65), _n.has(this) && (_n.delete(this), this.trigger()))
  }
  notify() {
    ;(this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || dc(this)
  }
  run() {
    if (!(this.flags & 1)) return this.fn()
    ;(this.flags |= 2), Es(this), uc(this)
    const e = kt,
      a = we
    ;(kt = this), (we = !0)
    try {
      return this.fn()
    } finally {
      pc(this), (kt = e), (we = a), (this.flags &= -3)
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let e = this.deps; e; e = e.nextDep) R2(e)
      ;(this.deps = this.depsTail = void 0),
        Es(this),
        this.onStop && this.onStop(),
        (this.flags &= -2)
    }
  }
  trigger() {
    this.flags & 64 ? _n.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty()
  }
  runIfDirty() {
    Jn(this) && this.run()
  }
  get dirty() {
    return Jn(this)
  }
}
let hc = 0,
  y0,
  b0
function dc(t, e = !1) {
  if (((t.flags |= 8), e)) {
    ;(t.next = b0), (b0 = t)
    return
  }
  ;(t.next = y0), (y0 = t)
}
function O2() {
  hc++
}
function D2() {
  if (--hc > 0) return
  if (b0) {
    let e = b0
    for (b0 = void 0; e; ) {
      const a = e.next
      ;(e.next = void 0), (e.flags &= -9), (e = a)
    }
  }
  let t
  for (; y0; ) {
    let e = y0
    for (y0 = void 0; e; ) {
      const a = e.next
      if (((e.next = void 0), (e.flags &= -9), e.flags & 1))
        try {
          e.trigger()
        } catch (n) {
          t || (t = n)
        }
      e = a
    }
  }
  if (t) throw t
}
function uc(t) {
  for (let e = t.deps; e; e = e.nextDep)
    (e.version = -1), (e.prevActiveLink = e.dep.activeLink), (e.dep.activeLink = e)
}
function pc(t) {
  let e,
    a = t.depsTail,
    n = a
  for (; n; ) {
    const s = n.prevDep
    n.version === -1 ? (n === a && (a = s), R2(n), G3(n)) : (e = n),
      (n.dep.activeLink = n.prevActiveLink),
      (n.prevActiveLink = void 0),
      (n = s)
  }
  ;(t.deps = e), (t.depsTail = a)
}
function Jn(t) {
  for (let e = t.deps; e; e = e.nextDep)
    if (
      e.dep.version !== e.version ||
      (e.dep.computed && (mc(e.dep.computed) || e.dep.version !== e.version))
    )
      return !0
  return !!t._dirty
}
function mc(t) {
  if ((t.flags & 4 && !(t.flags & 16)) || ((t.flags &= -17), t.globalVersion === E0)) return
  t.globalVersion = E0
  const e = t.dep
  if (((t.flags |= 2), e.version > 0 && !t.isSSR && t.deps && !Jn(t))) {
    t.flags &= -3
    return
  }
  const a = kt,
    n = we
  ;(kt = t), (we = !0)
  try {
    uc(t)
    const s = t.fn(t._value)
    ;(e.version === 0 || o1(s, t._value)) && ((t._value = s), e.version++)
  } catch (s) {
    throw (e.version++, s)
  } finally {
    ;(kt = a), (we = n), pc(t), (t.flags &= -3)
  }
}
function R2(t, e = !1) {
  const { dep: a, prevSub: n, nextSub: s } = t
  if (
    (n && ((n.nextSub = s), (t.prevSub = void 0)),
    s && ((s.prevSub = n), (t.nextSub = void 0)),
    a.subs === t && ((a.subs = n), !n && a.computed))
  ) {
    a.computed.flags &= -5
    for (let r = a.computed.deps; r; r = r.nextDep) R2(r, !0)
  }
  !e && !--a.sc && a.map && a.map.delete(a.key)
}
function G3(t) {
  const { prevDep: e, nextDep: a } = t
  e && ((e.nextDep = a), (t.prevDep = void 0)), a && ((a.prevDep = e), (t.nextDep = void 0))
}
let we = !0
const fc = []
function v1() {
  fc.push(we), (we = !1)
}
function z1() {
  const t = fc.pop()
  we = t === void 0 ? !0 : t
}
function Es(t) {
  const { cleanup: e } = t
  if (((t.cleanup = void 0), e)) {
    const a = kt
    kt = void 0
    try {
      e()
    } finally {
      kt = a
    }
  }
}
let E0 = 0
class K3 {
  constructor(e, a) {
    ;(this.sub = e),
      (this.dep = a),
      (this.version = a.version),
      (this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0)
  }
}
class L2 {
  constructor(e) {
    ;(this.computed = e),
      (this.version = 0),
      (this.activeLink = void 0),
      (this.subs = void 0),
      (this.map = void 0),
      (this.key = void 0),
      (this.sc = 0)
  }
  track(e) {
    if (!kt || !we || kt === this.computed) return
    let a = this.activeLink
    if (a === void 0 || a.sub !== kt)
      (a = this.activeLink = new K3(kt, this)),
        kt.deps
          ? ((a.prevDep = kt.depsTail), (kt.depsTail.nextDep = a), (kt.depsTail = a))
          : (kt.deps = kt.depsTail = a),
        vc(a)
    else if (a.version === -1 && ((a.version = this.version), a.nextDep)) {
      const n = a.nextDep
      ;(n.prevDep = a.prevDep),
        a.prevDep && (a.prevDep.nextDep = n),
        (a.prevDep = kt.depsTail),
        (a.nextDep = void 0),
        (kt.depsTail.nextDep = a),
        (kt.depsTail = a),
        kt.deps === a && (kt.deps = n)
    }
    return a
  }
  trigger(e) {
    this.version++, E0++, this.notify(e)
  }
  notify(e) {
    O2()
    try {
      for (let a = this.subs; a; a = a.prevSub) a.sub.notify() && a.sub.dep.notify()
    } finally {
      D2()
    }
  }
}
function vc(t) {
  if ((t.dep.sc++, t.sub.flags & 4)) {
    const e = t.dep.computed
    if (e && !t.dep.subs) {
      e.flags |= 20
      for (let n = e.deps; n; n = n.nextDep) vc(n)
    }
    const a = t.dep.subs
    a !== t && ((t.prevSub = a), a && (a.nextSub = t)), (t.dep.subs = t)
  }
}
const ba = new WeakMap(),
  k1 = Symbol(''),
  Zn = Symbol(''),
  P0 = Symbol('')
function Ut(t, e, a) {
  if (we && kt) {
    let n = ba.get(t)
    n || ba.set(t, (n = new Map()))
    let s = n.get(a)
    s || (n.set(a, (s = new L2())), (s.map = n), (s.key = a)), s.track()
  }
}
function Ye(t, e, a, n, s, r) {
  const i = ba.get(t)
  if (!i) {
    E0++
    return
  }
  const c = (l) => {
    l && l.trigger()
  }
  if ((O2(), e === 'clear')) i.forEach(c)
  else {
    const l = at(t),
      h = l && P2(a)
    if (l && a === 'length') {
      const o = Number(n)
      i.forEach((d, u) => {
        ;(u === 'length' || u === P0 || (!f1(u) && u >= o)) && c(d)
      })
    } else
      switch (((a !== void 0 || i.has(void 0)) && c(i.get(a)), h && c(i.get(P0)), e)) {
        case 'add':
          l ? h && c(i.get('length')) : (c(i.get(k1)), q1(t) && c(i.get(Zn)))
          break
        case 'delete':
          l || (c(i.get(k1)), q1(t) && c(i.get(Zn)))
          break
        case 'set':
          q1(t) && c(i.get(k1))
          break
      }
  }
  D2()
}
function Y3(t, e) {
  const a = ba.get(t)
  return a && a.get(e)
}
function $1(t) {
  const e = ut(t)
  return e === t ? e : (Ut(e, 'iterate', P0), be(t) ? e : e.map(Gt))
}
function Wa(t) {
  return Ut((t = ut(t)), 'iterate', P0), t
}
const q3 = {
  __proto__: null,
  [Symbol.iterator]() {
    return Sn(this, Symbol.iterator, Gt)
  },
  concat(...t) {
    return $1(this).concat(...t.map((e) => (at(e) ? $1(e) : e)))
  },
  entries() {
    return Sn(this, 'entries', (t) => ((t[1] = Gt(t[1])), t))
  },
  every(t, e) {
    return We(this, 'every', t, e, void 0, arguments)
  },
  filter(t, e) {
    return We(this, 'filter', t, e, (a) => a.map(Gt), arguments)
  },
  find(t, e) {
    return We(this, 'find', t, e, Gt, arguments)
  },
  findIndex(t, e) {
    return We(this, 'findIndex', t, e, void 0, arguments)
  },
  findLast(t, e) {
    return We(this, 'findLast', t, e, Gt, arguments)
  },
  findLastIndex(t, e) {
    return We(this, 'findLastIndex', t, e, void 0, arguments)
  },
  forEach(t, e) {
    return We(this, 'forEach', t, e, void 0, arguments)
  },
  includes(...t) {
    return wn(this, 'includes', t)
  },
  indexOf(...t) {
    return wn(this, 'indexOf', t)
  },
  join(t) {
    return $1(this).join(t)
  },
  lastIndexOf(...t) {
    return wn(this, 'lastIndexOf', t)
  },
  map(t, e) {
    return We(this, 'map', t, e, void 0, arguments)
  },
  pop() {
    return u0(this, 'pop')
  },
  push(...t) {
    return u0(this, 'push', t)
  },
  reduce(t, ...e) {
    return Ps(this, 'reduce', t, e)
  },
  reduceRight(t, ...e) {
    return Ps(this, 'reduceRight', t, e)
  },
  shift() {
    return u0(this, 'shift')
  },
  some(t, e) {
    return We(this, 'some', t, e, void 0, arguments)
  },
  splice(...t) {
    return u0(this, 'splice', t)
  },
  toReversed() {
    return $1(this).toReversed()
  },
  toSorted(t) {
    return $1(this).toSorted(t)
  },
  toSpliced(...t) {
    return $1(this).toSpliced(...t)
  },
  unshift(...t) {
    return u0(this, 'unshift', t)
  },
  values() {
    return Sn(this, 'values', Gt)
  },
}
function Sn(t, e, a) {
  const n = Wa(t),
    s = n[e]()
  return (
    n !== t &&
      !be(t) &&
      ((s._next = s.next),
      (s.next = () => {
        const r = s._next()
        return r.value && (r.value = a(r.value)), r
      })),
    s
  )
}
const J3 = Array.prototype
function We(t, e, a, n, s, r) {
  const i = Wa(t),
    c = i !== t && !be(t),
    l = i[e]
  if (l !== J3[e]) {
    const d = l.apply(t, r)
    return c ? Gt(d) : d
  }
  let h = a
  i !== t &&
    (c
      ? (h = function (d, u) {
          return a.call(this, Gt(d), u, t)
        })
      : a.length > 2 &&
        (h = function (d, u) {
          return a.call(this, d, u, t)
        }))
  const o = l.call(i, h, n)
  return c && s ? s(o) : o
}
function Ps(t, e, a, n) {
  const s = Wa(t)
  let r = a
  return (
    s !== t &&
      (be(t)
        ? a.length > 3 &&
          (r = function (i, c, l) {
            return a.call(this, i, c, l, t)
          })
        : (r = function (i, c, l) {
            return a.call(this, i, Gt(c), l, t)
          })),
    s[e](r, ...n)
  )
}
function wn(t, e, a) {
  const n = ut(t)
  Ut(n, 'iterate', P0)
  const s = n[e](...a)
  return (s === -1 || s === !1) && $2(a[0]) ? ((a[0] = ut(a[0])), n[e](...a)) : s
}
function u0(t, e, a = []) {
  v1(), O2()
  const n = ut(t)[e].apply(t, a)
  return D2(), z1(), n
}
const Z3 = k2('__proto__,__v_isRef,__isVue'),
  zc = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((t) => t !== 'arguments' && t !== 'caller')
      .map((t) => Symbol[t])
      .filter(f1),
  )
function X3(t) {
  f1(t) || (t = String(t))
  const e = ut(this)
  return Ut(e, 'has', t), e.hasOwnProperty(t)
}
class gc {
  constructor(e = !1, a = !1) {
    ;(this._isReadonly = e), (this._isShallow = a)
  }
  get(e, a, n) {
    if (a === '__v_skip') return e.__v_skip
    const s = this._isReadonly,
      r = this._isShallow
    if (a === '__v_isReactive') return !s
    if (a === '__v_isReadonly') return s
    if (a === '__v_isShallow') return r
    if (a === '__v_raw')
      return n === (s ? (r ? lh : Sc) : r ? _c : bc).get(e) ||
        Object.getPrototypeOf(e) === Object.getPrototypeOf(n)
        ? e
        : void 0
    const i = at(e)
    if (!s) {
      let l
      if (i && (l = q3[a])) return l
      if (a === 'hasOwnProperty') return X3
    }
    const c = Reflect.get(e, a, Tt(e) ? e : n)
    return (f1(a) ? zc.has(a) : Z3(a)) || (s || Ut(e, 'get', a), r)
      ? c
      : Tt(c)
        ? i && P2(a)
          ? c
          : c.value
        : Et(c)
          ? s
            ? B0(c)
            : Lt(c)
          : c
  }
}
class yc extends gc {
  constructor(e = !1) {
    super(!1, e)
  }
  set(e, a, n, s) {
    let r = e[a]
    if (!this._isShallow) {
      const l = T1(r)
      if ((!be(n) && !T1(n) && ((r = ut(r)), (n = ut(n))), !at(e) && Tt(r) && !Tt(n)))
        return l ? !1 : ((r.value = n), !0)
    }
    const i = at(e) && P2(a) ? Number(a) < e.length : gt(e, a),
      c = Reflect.set(e, a, n, Tt(e) ? e : s)
    return e === ut(s) && (i ? o1(n, r) && Ye(e, 'set', a, n) : Ye(e, 'add', a, n)), c
  }
  deleteProperty(e, a) {
    const n = gt(e, a)
    e[a]
    const s = Reflect.deleteProperty(e, a)
    return s && n && Ye(e, 'delete', a, void 0), s
  }
  has(e, a) {
    const n = Reflect.has(e, a)
    return (!f1(a) || !zc.has(a)) && Ut(e, 'has', a), n
  }
  ownKeys(e) {
    return Ut(e, 'iterate', at(e) ? 'length' : k1), Reflect.ownKeys(e)
  }
}
class Q3 extends gc {
  constructor(e = !1) {
    super(!0, e)
  }
  set(e, a) {
    return !0
  }
  deleteProperty(e, a) {
    return !0
  }
}
const th = new yc(),
  eh = new Q3(),
  ah = new yc(!0)
const Xn = (t) => t,
  ta = (t) => Reflect.getPrototypeOf(t)
function nh(t, e, a) {
  return function (...n) {
    const s = this.__v_raw,
      r = ut(s),
      i = q1(r),
      c = t === 'entries' || (t === Symbol.iterator && i),
      l = t === 'keys' && i,
      h = s[t](...n),
      o = a ? Xn : e ? Qn : Gt
    return (
      !e && Ut(r, 'iterate', l ? Zn : k1),
      {
        next() {
          const { value: d, done: u } = h.next()
          return u ? { value: d, done: u } : { value: c ? [o(d[0]), o(d[1])] : o(d), done: u }
        },
        [Symbol.iterator]() {
          return this
        },
      }
    )
  }
}
function ea(t) {
  return function (...e) {
    return t === 'delete' ? !1 : t === 'clear' ? void 0 : this
  }
}
function sh(t, e) {
  const a = {
    get(s) {
      const r = this.__v_raw,
        i = ut(r),
        c = ut(s)
      t || (o1(s, c) && Ut(i, 'get', s), Ut(i, 'get', c))
      const { has: l } = ta(i),
        h = e ? Xn : t ? Qn : Gt
      if (l.call(i, s)) return h(r.get(s))
      if (l.call(i, c)) return h(r.get(c))
      r !== i && r.get(s)
    },
    get size() {
      const s = this.__v_raw
      return !t && Ut(ut(s), 'iterate', k1), Reflect.get(s, 'size', s)
    },
    has(s) {
      const r = this.__v_raw,
        i = ut(r),
        c = ut(s)
      return (
        t || (o1(s, c) && Ut(i, 'has', s), Ut(i, 'has', c)),
        s === c ? r.has(s) : r.has(s) || r.has(c)
      )
    },
    forEach(s, r) {
      const i = this,
        c = i.__v_raw,
        l = ut(c),
        h = e ? Xn : t ? Qn : Gt
      return !t && Ut(l, 'iterate', k1), c.forEach((o, d) => s.call(r, h(o), h(d), i))
    },
  }
  return (
    Vt(
      a,
      t
        ? { add: ea('add'), set: ea('set'), delete: ea('delete'), clear: ea('clear') }
        : {
            add(s) {
              !e && !be(s) && !T1(s) && (s = ut(s))
              const r = ut(this)
              return ta(r).has.call(r, s) || (r.add(s), Ye(r, 'add', s, s)), this
            },
            set(s, r) {
              !e && !be(r) && !T1(r) && (r = ut(r))
              const i = ut(this),
                { has: c, get: l } = ta(i)
              let h = c.call(i, s)
              h || ((s = ut(s)), (h = c.call(i, s)))
              const o = l.call(i, s)
              return i.set(s, r), h ? o1(r, o) && Ye(i, 'set', s, r) : Ye(i, 'add', s, r), this
            },
            delete(s) {
              const r = ut(this),
                { has: i, get: c } = ta(r)
              let l = i.call(r, s)
              l || ((s = ut(s)), (l = i.call(r, s))), c && c.call(r, s)
              const h = r.delete(s)
              return l && Ye(r, 'delete', s, void 0), h
            },
            clear() {
              const s = ut(this),
                r = s.size !== 0,
                i = s.clear()
              return r && Ye(s, 'clear', void 0, void 0), i
            },
          },
    ),
    ['keys', 'values', 'entries', Symbol.iterator].forEach((s) => {
      a[s] = nh(s, t, e)
    }),
    a
  )
}
function M2(t, e) {
  const a = sh(t, e)
  return (n, s, r) =>
    s === '__v_isReactive'
      ? !t
      : s === '__v_isReadonly'
        ? t
        : s === '__v_raw'
          ? n
          : Reflect.get(gt(a, s) && s in n ? a : n, s, r)
}
const rh = { get: M2(!1, !1) },
  ih = { get: M2(!1, !0) },
  ch = { get: M2(!0, !1) }
const bc = new WeakMap(),
  _c = new WeakMap(),
  Sc = new WeakMap(),
  lh = new WeakMap()
function oh(t) {
  switch (t) {
    case 'Object':
    case 'Array':
      return 1
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2
    default:
      return 0
  }
}
function hh(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : oh(L3(t))
}
function Lt(t) {
  return T1(t) ? t : V2(t, !1, th, rh, bc)
}
function wc(t) {
  return V2(t, !1, ah, ih, _c)
}
function B0(t) {
  return V2(t, !0, eh, ch, Sc)
}
function V2(t, e, a, n, s) {
  if (!Et(t) || (t.__v_raw && !(e && t.__v_isReactive))) return t
  const r = s.get(t)
  if (r) return r
  const i = hh(t)
  if (i === 0) return t
  const c = new Proxy(t, i === 2 ? n : a)
  return s.set(t, c), c
}
function J1(t) {
  return T1(t) ? J1(t.__v_raw) : !!(t && t.__v_isReactive)
}
function T1(t) {
  return !!(t && t.__v_isReadonly)
}
function be(t) {
  return !!(t && t.__v_isShallow)
}
function $2(t) {
  return t ? !!t.__v_raw : !1
}
function ut(t) {
  const e = t && t.__v_raw
  return e ? ut(e) : t
}
function dh(t) {
  return !gt(t, '__v_skip') && Object.isExtensible(t) && sc(t, '__v_skip', !0), t
}
const Gt = (t) => (Et(t) ? Lt(t) : t),
  Qn = (t) => (Et(t) ? B0(t) : t)
function Tt(t) {
  return t ? t.__v_isRef === !0 : !1
}
function ct(t) {
  return Cc(t, !1)
}
function ot(t) {
  return Cc(t, !0)
}
function Cc(t, e) {
  return Tt(t) ? t : new uh(t, e)
}
class uh {
  constructor(e, a) {
    ;(this.dep = new L2()),
      (this.__v_isRef = !0),
      (this.__v_isShallow = !1),
      (this._rawValue = a ? e : ut(e)),
      (this._value = a ? e : Gt(e)),
      (this.__v_isShallow = a)
  }
  get value() {
    return this.dep.track(), this._value
  }
  set value(e) {
    const a = this._rawValue,
      n = this.__v_isShallow || be(e) || T1(e)
    ;(e = n ? e : ut(e)),
      o1(e, a) && ((this._rawValue = e), (this._value = n ? e : Gt(e)), this.dep.trigger())
  }
}
function Ot(t) {
  return Tt(t) ? t.value : t
}
const ph = {
  get: (t, e, a) => (e === '__v_raw' ? t : Ot(Reflect.get(t, e, a))),
  set: (t, e, a, n) => {
    const s = t[e]
    return Tt(s) && !Tt(a) ? ((s.value = a), !0) : Reflect.set(t, e, a, n)
  },
}
function kc(t) {
  return J1(t) ? t : new Proxy(t, ph)
}
function N2(t) {
  const e = at(t) ? new Array(t.length) : {}
  for (const a in t) e[a] = xc(t, a)
  return e
}
class mh {
  constructor(e, a, n) {
    ;(this._object = e),
      (this._key = a),
      (this._defaultValue = n),
      (this.__v_isRef = !0),
      (this._value = void 0)
  }
  get value() {
    const e = this._object[this._key]
    return (this._value = e === void 0 ? this._defaultValue : e)
  }
  set value(e) {
    this._object[this._key] = e
  }
  get dep() {
    return Y3(ut(this._object), this._key)
  }
}
class fh {
  constructor(e) {
    ;(this._getter = e), (this.__v_isRef = !0), (this.__v_isReadonly = !0), (this._value = void 0)
  }
  get value() {
    return (this._value = this._getter())
  }
}
function Mt(t, e, a) {
  return Tt(t) ? t : rt(t) ? new fh(t) : Et(t) && arguments.length > 1 ? xc(t, e, a) : ct(t)
}
function xc(t, e, a) {
  const n = t[e]
  return Tt(n) ? n : new mh(t, e, a)
}
class vh {
  constructor(e, a, n) {
    ;(this.fn = e),
      (this.setter = a),
      (this._value = void 0),
      (this.dep = new L2(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = E0 - 1),
      (this.next = void 0),
      (this.effect = this),
      (this.__v_isReadonly = !a),
      (this.isSSR = n)
  }
  notify() {
    if (((this.flags |= 16), !(this.flags & 8) && kt !== this)) return dc(this, !0), !0
  }
  get value() {
    const e = this.dep.track()
    return mc(this), e && (e.version = this.dep.version), this._value
  }
  set value(e) {
    this.setter && this.setter(e)
  }
}
function zh(t, e, a = !1) {
  let n, s
  return rt(t) ? (n = t) : ((n = t.get), (s = t.set)), new vh(n, s, a)
}
const aa = {},
  _a = new WeakMap()
let w1
function gh(t, e = !1, a = w1) {
  if (a) {
    let n = _a.get(a)
    n || _a.set(a, (n = [])), n.push(t)
  }
}
function yh(t, e, a = wt) {
  const { immediate: n, deep: s, once: r, scheduler: i, augmentJob: c, call: l } = a,
    h = (x) => (s ? x : be(x) || s === !1 || s === 0 ? qe(x, 1) : qe(x))
  let o,
    d,
    u,
    p,
    f = !1,
    m = !1
  if (
    (Tt(t)
      ? ((d = () => t.value), (f = be(t)))
      : J1(t)
        ? ((d = () => h(t)), (f = !0))
        : at(t)
          ? ((m = !0),
            (f = t.some((x) => J1(x) || be(x))),
            (d = () =>
              t.map((x) => {
                if (Tt(x)) return x.value
                if (J1(x)) return h(x)
                if (rt(x)) return l ? l(x, 2) : x()
              })))
          : rt(t)
            ? e
              ? (d = l ? () => l(t, 2) : t)
              : (d = () => {
                  if (u) {
                    v1()
                    try {
                      u()
                    } finally {
                      z1()
                    }
                  }
                  const x = w1
                  w1 = o
                  try {
                    return l ? l(t, 3, [p]) : t(p)
                  } finally {
                    w1 = x
                  }
                })
            : (d = Me),
    e && s)
  ) {
    const x = d,
      M = s === !0 ? 1 / 0 : s
    d = () => qe(x(), M)
  }
  const g = U3(),
    S = () => {
      o.stop(), g && g.active && E2(g.effects, o)
    }
  if (r && e) {
    const x = e
    e = (...M) => {
      x(...M), S()
    }
  }
  let b = m ? new Array(t.length).fill(aa) : aa
  const w = (x) => {
    if (!(!(o.flags & 1) || (!o.dirty && !x)))
      if (e) {
        const M = o.run()
        if (s || f || (m ? M.some((O, D) => o1(O, b[D])) : o1(M, b))) {
          u && u()
          const O = w1
          w1 = o
          try {
            const D = [M, b === aa ? void 0 : m && b[0] === aa ? [] : b, p]
            l ? l(e, 3, D) : e(...D), (b = M)
          } finally {
            w1 = O
          }
        }
      } else o.run()
  }
  return (
    c && c(w),
    (o = new oc(d)),
    (o.scheduler = i ? () => i(w, !1) : w),
    (p = (x) => gh(x, !1, o)),
    (u = o.onStop =
      () => {
        const x = _a.get(o)
        if (x) {
          if (l) l(x, 4)
          else for (const M of x) M()
          _a.delete(o)
        }
      }),
    e ? (n ? w(!0) : (b = o.run())) : i ? i(w.bind(null, !0), !0) : o.run(),
    (S.pause = o.pause.bind(o)),
    (S.resume = o.resume.bind(o)),
    (S.stop = S),
    S
  )
}
function qe(t, e = 1 / 0, a) {
  if (e <= 0 || !Et(t) || t.__v_skip || ((a = a || new Set()), a.has(t))) return t
  if ((a.add(t), e--, Tt(t))) qe(t.value, e, a)
  else if (at(t)) for (let n = 0; n < t.length; n++) qe(t[n], e, a)
  else if (tc(t) || q1(t))
    t.forEach((n) => {
      qe(n, e, a)
    })
  else if (nc(t)) {
    for (const n in t) qe(t[n], e, a)
    for (const n of Object.getOwnPropertySymbols(t))
      Object.prototype.propertyIsEnumerable.call(t, n) && qe(t[n], e, a)
  }
  return t
}
/**
 * @vue/runtime-core v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function F0(t, e, a, n) {
  try {
    return n ? t(...n) : t()
  } catch (s) {
    Ua(s, e, a)
  }
}
function Ce(t, e, a, n) {
  if (rt(t)) {
    const s = F0(t, e, a, n)
    return (
      s &&
        ec(s) &&
        s.catch((r) => {
          Ua(r, e, a)
        }),
      s
    )
  }
  if (at(t)) {
    const s = []
    for (let r = 0; r < t.length; r++) s.push(Ce(t[r], e, a, n))
    return s
  }
}
function Ua(t, e, a, n = !0) {
  const s = e ? e.vnode : null,
    { errorHandler: r, throwUnhandledErrorInProduction: i } = (e && e.appContext.config) || wt
  if (e) {
    let c = e.parent
    const l = e.proxy,
      h = `https://vuejs.org/error-reference/#runtime-${a}`
    for (; c; ) {
      const o = c.ec
      if (o) {
        for (let d = 0; d < o.length; d++) if (o[d](t, l, h) === !1) return
      }
      c = c.parent
    }
    if (r) {
      v1(), F0(r, null, 10, [t, l, h]), z1()
      return
    }
  }
  bh(t, a, s, n, i)
}
function bh(t, e, a, n = !0, s = !1) {
  if (s) throw t
  console.error(t)
}
const te = []
let De = -1
const Z1 = []
let r1 = null,
  H1 = 0
const Ec = Promise.resolve()
let Sa = null
function ee(t) {
  const e = Sa || Ec
  return t ? e.then(this ? t.bind(this) : t) : e
}
function _h(t) {
  let e = De + 1,
    a = te.length
  for (; e < a; ) {
    const n = (e + a) >>> 1,
      s = te[n],
      r = T0(s)
    r < t || (r === t && s.flags & 2) ? (e = n + 1) : (a = n)
  }
  return e
}
function B2(t) {
  if (!(t.flags & 1)) {
    const e = T0(t),
      a = te[te.length - 1]
    !a || (!(t.flags & 2) && e >= T0(a)) ? te.push(t) : te.splice(_h(e), 0, t), (t.flags |= 1), Pc()
  }
}
function Pc() {
  Sa || (Sa = Ec.then(Ac))
}
function Sh(t) {
  at(t)
    ? Z1.push(...t)
    : r1 && t.id === -1
      ? r1.splice(H1 + 1, 0, t)
      : t.flags & 1 || (Z1.push(t), (t.flags |= 1)),
    Pc()
}
function Ts(t, e, a = De + 1) {
  for (; a < te.length; a++) {
    const n = te[a]
    if (n && n.flags & 2) {
      if (t && n.id !== t.uid) continue
      te.splice(a, 1), a--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2)
    }
  }
}
function Tc(t) {
  if (Z1.length) {
    const e = [...new Set(Z1)].sort((a, n) => T0(a) - T0(n))
    if (((Z1.length = 0), r1)) {
      r1.push(...e)
      return
    }
    for (r1 = e, H1 = 0; H1 < r1.length; H1++) {
      const a = r1[H1]
      a.flags & 4 && (a.flags &= -2), a.flags & 8 || a(), (a.flags &= -2)
    }
    ;(r1 = null), (H1 = 0)
  }
}
const T0 = (t) => (t.id == null ? (t.flags & 2 ? -1 : 1 / 0) : t.id)
function Ac(t) {
  try {
    for (De = 0; De < te.length; De++) {
      const e = te[De]
      e &&
        !(e.flags & 8) &&
        (e.flags & 4 && (e.flags &= -2), F0(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2))
    }
  } finally {
    for (; De < te.length; De++) {
      const e = te[De]
      e && (e.flags &= -2)
    }
    ;(De = -1), (te.length = 0), Tc(), (Sa = null), (te.length || Z1.length) && Ac()
  }
}
let se = null,
  Ic = null
function wa(t) {
  const e = se
  return (se = t), (Ic = (t && t.type.__scopeId) || null), e
}
function Bt(t, e = se, a) {
  if (!e || t._n) return t
  const n = (...s) => {
    n._d && Hs(-1)
    const r = wa(e)
    let i
    try {
      i = t(...s)
    } finally {
      wa(r), n._d && Hs(1)
    }
    return i
  }
  return (n._n = !0), (n._c = !0), (n._d = !0), n
}
function u1(t, e) {
  if (se === null) return t
  const a = Ja(se),
    n = t.dirs || (t.dirs = [])
  for (let s = 0; s < e.length; s++) {
    let [r, i, c, l = wt] = e[s]
    r &&
      (rt(r) && (r = { mounted: r, updated: r }),
      r.deep && qe(i),
      n.push({ dir: r, instance: a, value: i, oldValue: void 0, arg: c, modifiers: l }))
  }
  return t
}
function g1(t, e, a, n) {
  const s = t.dirs,
    r = e && e.dirs
  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    r && (c.oldValue = r[i].value)
    let l = c.dir[n]
    l && (v1(), Ce(l, a, 8, [t.el, c, t, e]), z1())
  }
}
const Oc = Symbol('_vte'),
  Dc = (t) => t.__isTeleport,
  _0 = (t) => t && (t.disabled || t.disabled === ''),
  As = (t) => t && (t.defer || t.defer === ''),
  Is = (t) => typeof SVGElement < 'u' && t instanceof SVGElement,
  Os = (t) => typeof MathMLElement == 'function' && t instanceof MathMLElement,
  t2 = (t, e) => {
    const a = t && t.to
    return It(a) ? (e ? e(a) : null) : a
  },
  Rc = {
    name: 'Teleport',
    __isTeleport: !0,
    process(t, e, a, n, s, r, i, c, l, h) {
      const {
          mc: o,
          pc: d,
          pbc: u,
          o: { insert: p, querySelector: f, createText: m, createComment: g },
        } = h,
        S = _0(e.props)
      let { shapeFlag: b, children: w, dynamicChildren: x } = e
      if (t == null) {
        const M = (e.el = m('')),
          O = (e.anchor = m(''))
        p(M, a, n), p(O, a, n)
        const D = (E, T) => {
            b & 16 && (s && s.isCE && (s.ce._teleportTarget = E), o(w, E, T, s, r, i, c, l))
          },
          A = () => {
            const E = (e.target = t2(e.props, f)),
              T = Lc(E, e, m, p)
            E &&
              (i !== 'svg' && Is(E) ? (i = 'svg') : i !== 'mathml' && Os(E) && (i = 'mathml'),
              S || (D(E, T), ha(e, !1)))
          }
        S && (D(a, O), ha(e, !0)),
          As(e.props)
            ? Xt(() => {
                A(), (e.el.__isMounted = !0)
              }, r)
            : A()
      } else {
        if (As(e.props) && !t.el.__isMounted) {
          Xt(() => {
            Rc.process(t, e, a, n, s, r, i, c, l, h), delete t.el.__isMounted
          }, r)
          return
        }
        ;(e.el = t.el), (e.targetStart = t.targetStart)
        const M = (e.anchor = t.anchor),
          O = (e.target = t.target),
          D = (e.targetAnchor = t.targetAnchor),
          A = _0(t.props),
          E = A ? a : O,
          T = A ? M : D
        if (
          (i === 'svg' || Is(O) ? (i = 'svg') : (i === 'mathml' || Os(O)) && (i = 'mathml'),
          x
            ? (u(t.dynamicChildren, x, E, s, r, i, c), Y2(t, e, !0))
            : l || d(t, e, E, T, s, r, i, c, !1),
          S)
        )
          A
            ? e.props && t.props && e.props.to !== t.props.to && (e.props.to = t.props.to)
            : na(e, a, M, h, 1)
        else if ((e.props && e.props.to) !== (t.props && t.props.to)) {
          const I = (e.target = t2(e.props, f))
          I && na(e, I, null, h, 0)
        } else A && na(e, O, D, h, 1)
        ha(e, S)
      }
    },
    remove(t, e, a, { um: n, o: { remove: s } }, r) {
      const {
        shapeFlag: i,
        children: c,
        anchor: l,
        targetStart: h,
        targetAnchor: o,
        target: d,
        props: u,
      } = t
      if ((d && (s(h), s(o)), r && s(l), i & 16)) {
        const p = r || !_0(u)
        for (let f = 0; f < c.length; f++) {
          const m = c[f]
          n(m, e, a, p, !!m.dynamicChildren)
        }
      }
    },
    move: na,
    hydrate: wh,
  }
function na(t, e, a, { o: { insert: n }, m: s }, r = 2) {
  r === 0 && n(t.targetAnchor, e, a)
  const { el: i, anchor: c, shapeFlag: l, children: h, props: o } = t,
    d = r === 2
  if ((d && n(i, e, a), (!d || _0(o)) && l & 16))
    for (let u = 0; u < h.length; u++) s(h[u], e, a, 2)
  d && n(c, e, a)
}
function wh(
  t,
  e,
  a,
  n,
  s,
  r,
  { o: { nextSibling: i, parentNode: c, querySelector: l, insert: h, createText: o } },
  d,
) {
  const u = (e.target = t2(e.props, l))
  if (u) {
    const p = _0(e.props),
      f = u._lpa || u.firstChild
    if (e.shapeFlag & 16)
      if (p)
        (e.anchor = d(i(t), e, c(t), a, n, s, r)), (e.targetStart = f), (e.targetAnchor = f && i(f))
      else {
        e.anchor = i(t)
        let m = f
        for (; m; ) {
          if (m && m.nodeType === 8) {
            if (m.data === 'teleport start anchor') e.targetStart = m
            else if (m.data === 'teleport anchor') {
              ;(e.targetAnchor = m), (u._lpa = e.targetAnchor && i(e.targetAnchor))
              break
            }
          }
          m = i(m)
        }
        e.targetAnchor || Lc(u, e, o, h), d(f && i(f), e, u, a, n, s, r)
      }
    ha(e, p)
  }
  return e.anchor && i(e.anchor)
}
const Ch = Rc
function ha(t, e) {
  const a = t.ctx
  if (a && a.ut) {
    let n, s
    for (
      e ? ((n = t.el), (s = t.anchor)) : ((n = t.targetStart), (s = t.targetAnchor));
      n && n !== s;

    )
      n.nodeType === 1 && n.setAttribute('data-v-owner', a.uid), (n = n.nextSibling)
    a.ut()
  }
}
function Lc(t, e, a, n) {
  const s = (e.targetStart = a('')),
    r = (e.targetAnchor = a(''))
  return (s[Oc] = r), t && (n(s, t), n(r, t)), r
}
const i1 = Symbol('_leaveCb'),
  sa = Symbol('_enterCb')
function Mc() {
  const t = { isMounted: !1, isLeaving: !1, isUnmounting: !1, leavingVNodes: new Map() }
  return (
    Ne(() => {
      t.isMounted = !0
    }),
    Se(() => {
      t.isUnmounting = !0
    }),
    t
  )
}
const ge = [Function, Array],
  Vc = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: ge,
    onEnter: ge,
    onAfterEnter: ge,
    onEnterCancelled: ge,
    onBeforeLeave: ge,
    onLeave: ge,
    onAfterLeave: ge,
    onLeaveCancelled: ge,
    onBeforeAppear: ge,
    onAppear: ge,
    onAfterAppear: ge,
    onAppearCancelled: ge,
  },
  $c = (t) => {
    const e = t.subTree
    return e.component ? $c(e.component) : e
  },
  kh = {
    name: 'BaseTransition',
    props: Vc,
    setup(t, { slots: e }) {
      const a = Z2(),
        n = Mc()
      return () => {
        const s = e.default && F2(e.default(), !0)
        if (!s || !s.length) return
        const r = Nc(s),
          i = ut(t),
          { mode: c } = i
        if (n.isLeaving) return Cn(r)
        const l = Ds(r)
        if (!l) return Cn(r)
        let h = A0(l, i, n, a, (d) => (h = d))
        l.type !== ne && A1(l, h)
        let o = a.subTree && Ds(a.subTree)
        if (o && o.type !== ne && !C1(l, o) && $c(a).type !== ne) {
          let d = A0(o, i, n, a)
          if ((A1(o, d), c === 'out-in' && l.type !== ne))
            return (
              (n.isLeaving = !0),
              (d.afterLeave = () => {
                ;(n.isLeaving = !1),
                  a.job.flags & 8 || a.update(),
                  delete d.afterLeave,
                  (o = void 0)
              }),
              Cn(r)
            )
          c === 'in-out' && l.type !== ne
            ? (d.delayLeave = (u, p, f) => {
                const m = Bc(n, o)
                ;(m[String(o.key)] = o),
                  (u[i1] = () => {
                    p(), (u[i1] = void 0), delete h.delayedLeave, (o = void 0)
                  }),
                  (h.delayedLeave = () => {
                    f(), delete h.delayedLeave, (o = void 0)
                  })
              })
            : (o = void 0)
        } else o && (o = void 0)
        return r
      }
    },
  }
function Nc(t) {
  let e = t[0]
  if (t.length > 1) {
    for (const a of t)
      if (a.type !== ne) {
        e = a
        break
      }
  }
  return e
}
const xh = kh
function Bc(t, e) {
  const { leavingVNodes: a } = t
  let n = a.get(e.type)
  return n || ((n = Object.create(null)), a.set(e.type, n)), n
}
function A0(t, e, a, n, s) {
  const {
      appear: r,
      mode: i,
      persisted: c = !1,
      onBeforeEnter: l,
      onEnter: h,
      onAfterEnter: o,
      onEnterCancelled: d,
      onBeforeLeave: u,
      onLeave: p,
      onAfterLeave: f,
      onLeaveCancelled: m,
      onBeforeAppear: g,
      onAppear: S,
      onAfterAppear: b,
      onAppearCancelled: w,
    } = e,
    x = String(t.key),
    M = Bc(a, t),
    O = (E, T) => {
      E && Ce(E, n, 9, T)
    },
    D = (E, T) => {
      const I = T[1]
      O(E, T), at(E) ? E.every((C) => C.length <= 1) && I() : E.length <= 1 && I()
    },
    A = {
      mode: i,
      persisted: c,
      beforeEnter(E) {
        let T = l
        if (!a.isMounted)
          if (r) T = g || l
          else return
        E[i1] && E[i1](!0)
        const I = M[x]
        I && C1(t, I) && I.el[i1] && I.el[i1](), O(T, [E])
      },
      enter(E) {
        let T = h,
          I = o,
          C = d
        if (!a.isMounted)
          if (r) (T = S || h), (I = b || o), (C = w || d)
          else return
        let R = !1
        const N = (E[sa] = (Z) => {
          R ||
            ((R = !0),
            Z ? O(C, [E]) : O(I, [E]),
            A.delayedLeave && A.delayedLeave(),
            (E[sa] = void 0))
        })
        T ? D(T, [E, N]) : N()
      },
      leave(E, T) {
        const I = String(t.key)
        if ((E[sa] && E[sa](!0), a.isUnmounting)) return T()
        O(u, [E])
        let C = !1
        const R = (E[i1] = (N) => {
          C ||
            ((C = !0), T(), N ? O(m, [E]) : O(f, [E]), (E[i1] = void 0), M[I] === t && delete M[I])
        })
        ;(M[I] = t), p ? D(p, [E, R]) : R()
      },
      clone(E) {
        const T = A0(E, e, a, n, s)
        return s && s(T), T
      },
    }
  return A
}
function Cn(t) {
  if (Ga(t)) return (t = Ze(t)), (t.children = null), t
}
function Ds(t) {
  if (!Ga(t)) return Dc(t.type) && t.children ? Nc(t.children) : t
  const { shapeFlag: e, children: a } = t
  if (a) {
    if (e & 16) return a[0]
    if (e & 32 && rt(a.default)) return a.default()
  }
}
function A1(t, e) {
  t.shapeFlag & 6 && t.component
    ? ((t.transition = e), A1(t.component.subTree, e))
    : t.shapeFlag & 128
      ? ((t.ssContent.transition = e.clone(t.ssContent)),
        (t.ssFallback.transition = e.clone(t.ssFallback)))
      : (t.transition = e)
}
function F2(t, e = !1, a) {
  let n = [],
    s = 0
  for (let r = 0; r < t.length; r++) {
    let i = t[r]
    const c = a == null ? i.key : String(a) + String(i.key != null ? i.key : r)
    i.type === xt
      ? (i.patchFlag & 128 && s++, (n = n.concat(F2(i.children, e, c))))
      : (e || i.type !== ne) && n.push(c != null ? Ze(i, { key: c }) : i)
  }
  if (s > 1) for (let r = 0; r < n.length; r++) n[r].patchFlag = -2
  return n
}
/*! #__NO_SIDE_EFFECTS__ */ function R1(t, e) {
  return rt(t) ? Vt({ name: t.name }, e, { setup: t }) : t
}
function Fc(t) {
  t.ids = [t.ids[0] + t.ids[2]++ + '-', 0, 0]
}
function Ca(t, e, a, n, s = !1) {
  if (at(t)) {
    t.forEach((f, m) => Ca(f, e && (at(e) ? e[m] : e), a, n, s))
    return
  }
  if (S0(n) && !s) {
    n.shapeFlag & 512 &&
      n.type.__asyncResolved &&
      n.component.subTree.component &&
      Ca(t, e, a, n.component.subTree)
    return
  }
  const r = n.shapeFlag & 4 ? Ja(n.component) : n.el,
    i = s ? null : r,
    { i: c, r: l } = t,
    h = e && e.r,
    o = c.refs === wt ? (c.refs = {}) : c.refs,
    d = c.setupState,
    u = ut(d),
    p = d === wt ? () => !1 : (f) => gt(u, f)
  if (
    (h != null &&
      h !== l &&
      (It(h) ? ((o[h] = null), p(h) && (d[h] = null)) : Tt(h) && (h.value = null)),
    rt(l))
  )
    F0(l, c, 12, [i, o])
  else {
    const f = It(l),
      m = Tt(l)
    if (f || m) {
      const g = () => {
        if (t.f) {
          const S = f ? (p(l) ? d[l] : o[l]) : l.value
          s
            ? at(S) && E2(S, r)
            : at(S)
              ? S.includes(r) || S.push(r)
              : f
                ? ((o[l] = [r]), p(l) && (d[l] = o[l]))
                : ((l.value = [r]), t.k && (o[t.k] = l.value))
        } else f ? ((o[l] = i), p(l) && (d[l] = i)) : m && ((l.value = i), t.k && (o[t.k] = i))
      }
      i ? ((g.id = -1), Xt(g, a)) : g()
    }
  }
}
Ha().requestIdleCallback
Ha().cancelIdleCallback
const S0 = (t) => !!t.type.__asyncLoader,
  Ga = (t) => t.type.__isKeepAlive
function jc(t, e) {
  Hc(t, 'a', e)
}
function j2(t, e) {
  Hc(t, 'da', e)
}
function Hc(t, e, a = jt) {
  const n =
    t.__wdc ||
    (t.__wdc = () => {
      let s = a
      for (; s; ) {
        if (s.isDeactivated) return
        s = s.parent
      }
      return t()
    })
  if ((Ka(e, n, a), a)) {
    let s = a.parent
    for (; s && s.parent; ) Ga(s.parent.vnode) && Eh(n, e, a, s), (s = s.parent)
  }
}
function Eh(t, e, a, n) {
  const s = Ka(e, t, n, !0)
  Wc(() => {
    E2(n[e], s)
  }, a)
}
function Ka(t, e, a = jt, n = !1) {
  if (a) {
    const s = a[t] || (a[t] = []),
      r =
        e.__weh ||
        (e.__weh = (...i) => {
          v1()
          const c = H0(a),
            l = Ce(e, a, t, i)
          return c(), z1(), l
        })
    return n ? s.unshift(r) : s.push(r), r
  }
}
const Qe =
    (t) =>
    (e, a = jt) => {
      ;(!O0 || t === 'sp') && Ka(t, (...n) => e(...n), a)
    },
  H2 = Qe('bm'),
  Ne = Qe('m'),
  Ph = Qe('bu'),
  W2 = Qe('u'),
  Se = Qe('bum'),
  Wc = Qe('um'),
  Th = Qe('sp'),
  Ah = Qe('rtg'),
  Ih = Qe('rtc')
function Oh(t, e = jt) {
  Ka('ec', t, e)
}
const U2 = 'components',
  Dh = 'directives'
function e2(t, e) {
  return G2(U2, t, !0, e) || t
}
const Uc = Symbol.for('v-ndc')
function Gc(t) {
  return It(t) ? G2(U2, t, !1) || t : t || Uc
}
function Ya(t) {
  return G2(Dh, t)
}
function G2(t, e, a = !0, n = !1) {
  const s = se || jt
  if (s) {
    const r = s.type
    if (t === U2) {
      const c = bd(r, !1)
      if (c && (c === e || c === re(e) || c === Xe(re(e)))) return r
    }
    const i = Rs(s[t] || r[t], e) || Rs(s.appContext[t], e)
    return !i && n ? r : i
  }
}
function Rs(t, e) {
  return t && (t[e] || t[re(e)] || t[Xe(re(e))])
}
function Rh(t, e, a, n) {
  let s
  const r = a,
    i = at(t)
  if (i || It(t)) {
    const c = i && J1(t)
    let l = !1
    c && ((l = !be(t)), (t = Wa(t))), (s = new Array(t.length))
    for (let h = 0, o = t.length; h < o; h++) s[h] = e(l ? Gt(t[h]) : t[h], h, void 0, r)
  } else if (typeof t == 'number') {
    s = new Array(t)
    for (let c = 0; c < t; c++) s[c] = e(c + 1, c, void 0, r)
  } else if (Et(t))
    if (t[Symbol.iterator]) s = Array.from(t, (c, l) => e(c, l, void 0, r))
    else {
      const c = Object.keys(t)
      s = new Array(c.length)
      for (let l = 0, h = c.length; l < h; l++) {
        const o = c[l]
        s[l] = e(t[o], o, l, r)
      }
    }
  else s = []
  return s
}
const a2 = (t) => (t ? (ul(t) ? Ja(t) : a2(t.parent)) : null),
  w0 = Vt(Object.create(null), {
    $: (t) => t,
    $el: (t) => t.vnode.el,
    $data: (t) => t.data,
    $props: (t) => t.props,
    $attrs: (t) => t.attrs,
    $slots: (t) => t.slots,
    $refs: (t) => t.refs,
    $parent: (t) => a2(t.parent),
    $root: (t) => a2(t.root),
    $host: (t) => t.ce,
    $emit: (t) => t.emit,
    $options: (t) => Yc(t),
    $forceUpdate: (t) =>
      t.f ||
      (t.f = () => {
        B2(t.update)
      }),
    $nextTick: (t) => t.n || (t.n = ee.bind(t.proxy)),
    $watch: (t) => ed.bind(t),
  }),
  kn = (t, e) => t !== wt && !t.__isScriptSetup && gt(t, e),
  Lh = {
    get({ _: t }, e) {
      if (e === '__v_skip') return !0
      const { ctx: a, setupState: n, data: s, props: r, accessCache: i, type: c, appContext: l } = t
      let h
      if (e[0] !== '$') {
        const p = i[e]
        if (p !== void 0)
          switch (p) {
            case 1:
              return n[e]
            case 2:
              return s[e]
            case 4:
              return a[e]
            case 3:
              return r[e]
          }
        else {
          if (kn(n, e)) return (i[e] = 1), n[e]
          if (s !== wt && gt(s, e)) return (i[e] = 2), s[e]
          if ((h = t.propsOptions[0]) && gt(h, e)) return (i[e] = 3), r[e]
          if (a !== wt && gt(a, e)) return (i[e] = 4), a[e]
          n2 && (i[e] = 0)
        }
      }
      const o = w0[e]
      let d, u
      if (o) return e === '$attrs' && Ut(t.attrs, 'get', ''), o(t)
      if ((d = c.__cssModules) && (d = d[e])) return d
      if (a !== wt && gt(a, e)) return (i[e] = 4), a[e]
      if (((u = l.config.globalProperties), gt(u, e))) return u[e]
    },
    set({ _: t }, e, a) {
      const { data: n, setupState: s, ctx: r } = t
      return kn(s, e)
        ? ((s[e] = a), !0)
        : n !== wt && gt(n, e)
          ? ((n[e] = a), !0)
          : gt(t.props, e) || (e[0] === '$' && e.slice(1) in t)
            ? !1
            : ((r[e] = a), !0)
    },
    has(
      { _: { data: t, setupState: e, accessCache: a, ctx: n, appContext: s, propsOptions: r } },
      i,
    ) {
      let c
      return (
        !!a[i] ||
        (t !== wt && gt(t, i)) ||
        kn(e, i) ||
        ((c = r[0]) && gt(c, i)) ||
        gt(n, i) ||
        gt(w0, i) ||
        gt(s.config.globalProperties, i)
      )
    },
    defineProperty(t, e, a) {
      return (
        a.get != null ? (t._.accessCache[e] = 0) : gt(a, 'value') && this.set(t, e, a.value, null),
        Reflect.defineProperty(t, e, a)
      )
    },
  }
function Ls(t) {
  return at(t) ? t.reduce((e, a) => ((e[a] = null), e), {}) : t
}
let n2 = !0
function Mh(t) {
  const e = Yc(t),
    a = t.proxy,
    n = t.ctx
  ;(n2 = !1), e.beforeCreate && Ms(e.beforeCreate, t, 'bc')
  const {
    data: s,
    computed: r,
    methods: i,
    watch: c,
    provide: l,
    inject: h,
    created: o,
    beforeMount: d,
    mounted: u,
    beforeUpdate: p,
    updated: f,
    activated: m,
    deactivated: g,
    beforeDestroy: S,
    beforeUnmount: b,
    destroyed: w,
    unmounted: x,
    render: M,
    renderTracked: O,
    renderTriggered: D,
    errorCaptured: A,
    serverPrefetch: E,
    expose: T,
    inheritAttrs: I,
    components: C,
    directives: R,
    filters: N,
  } = e
  if ((h && Vh(h, n, null), i))
    for (const X in i) {
      const q = i[X]
      rt(q) && (n[X] = q.bind(a))
    }
  if (s) {
    const X = s.call(a, a)
    Et(X) && (t.data = Lt(X))
  }
  if (((n2 = !0), r))
    for (const X in r) {
      const q = r[X],
        ft = rt(q) ? q.bind(a, a) : rt(q.get) ? q.get.bind(a, a) : Me,
        St = !rt(q) && rt(q.set) ? q.set.bind(a) : Me,
        dt = _({ get: ft, set: St })
      Object.defineProperty(n, X, {
        enumerable: !0,
        configurable: !0,
        get: () => dt.value,
        set: (mt) => (dt.value = mt),
      })
    }
  if (c) for (const X in c) Kc(c[X], n, a, X)
  if (l) {
    const X = rt(l) ? l.call(a) : l
    Reflect.ownKeys(X).forEach((q) => {
      me(q, X[q])
    })
  }
  o && Ms(o, t, 'c')
  function U(X, q) {
    at(q) ? q.forEach((ft) => X(ft.bind(a))) : q && X(q.bind(a))
  }
  if (
    (U(H2, d),
    U(Ne, u),
    U(Ph, p),
    U(W2, f),
    U(jc, m),
    U(j2, g),
    U(Oh, A),
    U(Ih, O),
    U(Ah, D),
    U(Se, b),
    U(Wc, x),
    U(Th, E),
    at(T))
  )
    if (T.length) {
      const X = t.exposed || (t.exposed = {})
      T.forEach((q) => {
        Object.defineProperty(X, q, { get: () => a[q], set: (ft) => (a[q] = ft) })
      })
    } else t.exposed || (t.exposed = {})
  M && t.render === Me && (t.render = M),
    I != null && (t.inheritAttrs = I),
    C && (t.components = C),
    R && (t.directives = R),
    E && Fc(t)
}
function Vh(t, e, a = Me) {
  at(t) && (t = s2(t))
  for (const n in t) {
    const s = t[n]
    let r
    Et(s)
      ? 'default' in s
        ? (r = yt(s.from || n, s.default, !0))
        : (r = yt(s.from || n))
      : (r = yt(s)),
      Tt(r)
        ? Object.defineProperty(e, n, {
            enumerable: !0,
            configurable: !0,
            get: () => r.value,
            set: (i) => (r.value = i),
          })
        : (e[n] = r)
  }
}
function Ms(t, e, a) {
  Ce(at(t) ? t.map((n) => n.bind(e.proxy)) : t.bind(e.proxy), e, a)
}
function Kc(t, e, a, n) {
  let s = n.includes('.') ? il(a, n) : () => a[n]
  if (It(t)) {
    const r = e[t]
    rt(r) && nt(s, r)
  } else if (rt(t)) nt(s, t.bind(a))
  else if (Et(t))
    if (at(t)) t.forEach((r) => Kc(r, e, a, n))
    else {
      const r = rt(t.handler) ? t.handler.bind(a) : e[t.handler]
      rt(r) && nt(s, r, t)
    }
}
function Yc(t) {
  const e = t.type,
    { mixins: a, extends: n } = e,
    {
      mixins: s,
      optionsCache: r,
      config: { optionMergeStrategies: i },
    } = t.appContext,
    c = r.get(e)
  let l
  return (
    c
      ? (l = c)
      : !s.length && !a && !n
        ? (l = e)
        : ((l = {}), s.length && s.forEach((h) => ka(l, h, i, !0)), ka(l, e, i)),
    Et(e) && r.set(e, l),
    l
  )
}
function ka(t, e, a, n = !1) {
  const { mixins: s, extends: r } = e
  r && ka(t, r, a, !0), s && s.forEach((i) => ka(t, i, a, !0))
  for (const i in e)
    if (!(n && i === 'expose')) {
      const c = $h[i] || (a && a[i])
      t[i] = c ? c(t[i], e[i]) : e[i]
    }
  return t
}
const $h = {
  data: Vs,
  props: $s,
  emits: $s,
  methods: z0,
  computed: z0,
  beforeCreate: Zt,
  created: Zt,
  beforeMount: Zt,
  mounted: Zt,
  beforeUpdate: Zt,
  updated: Zt,
  beforeDestroy: Zt,
  beforeUnmount: Zt,
  destroyed: Zt,
  unmounted: Zt,
  activated: Zt,
  deactivated: Zt,
  errorCaptured: Zt,
  serverPrefetch: Zt,
  components: z0,
  directives: z0,
  watch: Bh,
  provide: Vs,
  inject: Nh,
}
function Vs(t, e) {
  return e
    ? t
      ? function () {
          return Vt(rt(t) ? t.call(this, this) : t, rt(e) ? e.call(this, this) : e)
        }
      : e
    : t
}
function Nh(t, e) {
  return z0(s2(t), s2(e))
}
function s2(t) {
  if (at(t)) {
    const e = {}
    for (let a = 0; a < t.length; a++) e[t[a]] = t[a]
    return e
  }
  return t
}
function Zt(t, e) {
  return t ? [...new Set([].concat(t, e))] : e
}
function z0(t, e) {
  return t ? Vt(Object.create(null), t, e) : e
}
function $s(t, e) {
  return t
    ? at(t) && at(e)
      ? [...new Set([...t, ...e])]
      : Vt(Object.create(null), Ls(t), Ls(e ?? {}))
    : e
}
function Bh(t, e) {
  if (!t) return e
  if (!e) return t
  const a = Vt(Object.create(null), t)
  for (const n in e) a[n] = Zt(t[n], e[n])
  return a
}
function qc() {
  return {
    app: null,
    config: {
      isNativeTag: D3,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  }
}
let Fh = 0
function jh(t, e) {
  return function (n, s = null) {
    rt(n) || (n = Vt({}, n)), s != null && !Et(s) && (s = null)
    const r = qc(),
      i = new WeakSet(),
      c = []
    let l = !1
    const h = (r.app = {
      _uid: Fh++,
      _component: n,
      _props: s,
      _container: null,
      _context: r,
      _instance: null,
      version: Sd,
      get config() {
        return r.config
      },
      set config(o) {},
      use(o, ...d) {
        return (
          i.has(o) ||
            (o && rt(o.install) ? (i.add(o), o.install(h, ...d)) : rt(o) && (i.add(o), o(h, ...d))),
          h
        )
      },
      mixin(o) {
        return r.mixins.includes(o) || r.mixins.push(o), h
      },
      component(o, d) {
        return d ? ((r.components[o] = d), h) : r.components[o]
      },
      directive(o, d) {
        return d ? ((r.directives[o] = d), h) : r.directives[o]
      },
      mount(o, d, u) {
        if (!l) {
          const p = h._ceVNode || v(n, s)
          return (
            (p.appContext = r),
            u === !0 ? (u = 'svg') : u === !1 && (u = void 0),
            t(p, o, u),
            (l = !0),
            (h._container = o),
            (o.__vue_app__ = h),
            Ja(p.component)
          )
        }
      },
      onUnmount(o) {
        c.push(o)
      },
      unmount() {
        l && (Ce(c, h._instance, 16), t(null, h._container), delete h._container.__vue_app__)
      },
      provide(o, d) {
        return (r.provides[o] = d), h
      },
      runWithContext(o) {
        const d = X1
        X1 = h
        try {
          return o()
        } finally {
          X1 = d
        }
      },
    })
    return h
  }
}
let X1 = null
function me(t, e) {
  if (jt) {
    let a = jt.provides
    const n = jt.parent && jt.parent.provides
    n === a && (a = jt.provides = Object.create(n)), (a[t] = e)
  }
}
function yt(t, e, a = !1) {
  const n = jt || se
  if (n || X1) {
    const s = X1
      ? X1._context.provides
      : n
        ? n.parent == null
          ? n.vnode.appContext && n.vnode.appContext.provides
          : n.parent.provides
        : void 0
    if (s && t in s) return s[t]
    if (arguments.length > 1) return a && rt(e) ? e.call(n && n.proxy) : e
  }
}
const Jc = {},
  Zc = () => Object.create(Jc),
  Xc = (t) => Object.getPrototypeOf(t) === Jc
function Hh(t, e, a, n = !1) {
  const s = {},
    r = Zc()
  ;(t.propsDefaults = Object.create(null)), Qc(t, e, s, r)
  for (const i in t.propsOptions[0]) i in s || (s[i] = void 0)
  a ? (t.props = n ? s : wc(s)) : t.type.props ? (t.props = s) : (t.props = r), (t.attrs = r)
}
function Wh(t, e, a, n) {
  const {
      props: s,
      attrs: r,
      vnode: { patchFlag: i },
    } = t,
    c = ut(s),
    [l] = t.propsOptions
  let h = !1
  if ((n || i > 0) && !(i & 16)) {
    if (i & 8) {
      const o = t.vnode.dynamicProps
      for (let d = 0; d < o.length; d++) {
        let u = o[d]
        if (qa(t.emitsOptions, u)) continue
        const p = e[u]
        if (l)
          if (gt(r, u)) p !== r[u] && ((r[u] = p), (h = !0))
          else {
            const f = re(u)
            s[f] = r2(l, c, f, p, t, !1)
          }
        else p !== r[u] && ((r[u] = p), (h = !0))
      }
    }
  } else {
    Qc(t, e, s, r) && (h = !0)
    let o
    for (const d in c)
      (!e || (!gt(e, d) && ((o = D1(d)) === d || !gt(e, o)))) &&
        (l
          ? a && (a[d] !== void 0 || a[o] !== void 0) && (s[d] = r2(l, c, d, void 0, t, !0))
          : delete s[d])
    if (r !== c) for (const d in r) (!e || !gt(e, d)) && (delete r[d], (h = !0))
  }
  h && Ye(t.attrs, 'set', '')
}
function Qc(t, e, a, n) {
  const [s, r] = t.propsOptions
  let i = !1,
    c
  if (e)
    for (let l in e) {
      if (g0(l)) continue
      const h = e[l]
      let o
      s && gt(s, (o = re(l)))
        ? !r || !r.includes(o)
          ? (a[o] = h)
          : ((c || (c = {}))[o] = h)
        : qa(t.emitsOptions, l) || ((!(l in n) || h !== n[l]) && ((n[l] = h), (i = !0)))
    }
  if (r) {
    const l = ut(a),
      h = c || wt
    for (let o = 0; o < r.length; o++) {
      const d = r[o]
      a[d] = r2(s, l, d, h[d], t, !gt(h, d))
    }
  }
  return i
}
function r2(t, e, a, n, s, r) {
  const i = t[a]
  if (i != null) {
    const c = gt(i, 'default')
    if (c && n === void 0) {
      const l = i.default
      if (i.type !== Function && !i.skipFactory && rt(l)) {
        const { propsDefaults: h } = s
        if (a in h) n = h[a]
        else {
          const o = H0(s)
          ;(n = h[a] = l.call(null, e)), o()
        }
      } else n = l
      s.ce && s.ce._setProp(a, n)
    }
    i[0] && (r && !c ? (n = !1) : i[1] && (n === '' || n === D1(a)) && (n = !0))
  }
  return n
}
const Uh = new WeakMap()
function tl(t, e, a = !1) {
  const n = a ? Uh : e.propsCache,
    s = n.get(t)
  if (s) return s
  const r = t.props,
    i = {},
    c = []
  let l = !1
  if (!rt(t)) {
    const o = (d) => {
      l = !0
      const [u, p] = tl(d, e, !0)
      Vt(i, u), p && c.push(...p)
    }
    !a && e.mixins.length && e.mixins.forEach(o),
      t.extends && o(t.extends),
      t.mixins && t.mixins.forEach(o)
  }
  if (!r && !l) return Et(t) && n.set(t, Y1), Y1
  if (at(r))
    for (let o = 0; o < r.length; o++) {
      const d = re(r[o])
      Ns(d) && (i[d] = wt)
    }
  else if (r)
    for (const o in r) {
      const d = re(o)
      if (Ns(d)) {
        const u = r[o],
          p = (i[d] = at(u) || rt(u) ? { type: u } : Vt({}, u)),
          f = p.type
        let m = !1,
          g = !0
        if (at(f))
          for (let S = 0; S < f.length; ++S) {
            const b = f[S],
              w = rt(b) && b.name
            if (w === 'Boolean') {
              m = !0
              break
            } else w === 'String' && (g = !1)
          }
        else m = rt(f) && f.name === 'Boolean'
        ;(p[0] = m), (p[1] = g), (m || gt(p, 'default')) && c.push(d)
      }
    }
  const h = [i, c]
  return Et(t) && n.set(t, h), h
}
function Ns(t) {
  return t[0] !== '$' && !g0(t)
}
const el = (t) => t[0] === '_' || t === '$stable',
  K2 = (t) => (at(t) ? t.map(Re) : [Re(t)]),
  Gh = (t, e, a) => {
    if (e._n) return e
    const n = Bt((...s) => K2(e(...s)), a)
    return (n._c = !1), n
  },
  al = (t, e, a) => {
    const n = t._ctx
    for (const s in t) {
      if (el(s)) continue
      const r = t[s]
      if (rt(r)) e[s] = Gh(s, r, n)
      else if (r != null) {
        const i = K2(r)
        e[s] = () => i
      }
    }
  },
  nl = (t, e) => {
    const a = K2(e)
    t.slots.default = () => a
  },
  sl = (t, e, a) => {
    for (const n in e) (a || n !== '_') && (t[n] = e[n])
  },
  Kh = (t, e, a) => {
    const n = (t.slots = Zc())
    if (t.vnode.shapeFlag & 32) {
      const s = e._
      s ? (sl(n, e, a), a && sc(n, '_', s, !0)) : al(e, n)
    } else e && nl(t, e)
  },
  Yh = (t, e, a) => {
    const { vnode: n, slots: s } = t
    let r = !0,
      i = wt
    if (n.shapeFlag & 32) {
      const c = e._
      c ? (a && c === 1 ? (r = !1) : sl(s, e, a)) : ((r = !e.$stable), al(e, s)), (i = e)
    } else e && (nl(t, e), (i = { default: 1 }))
    if (r) for (const c in s) !el(c) && i[c] == null && delete s[c]
  },
  Xt = ld
function qh(t) {
  return Jh(t)
}
function Jh(t, e) {
  const a = Ha()
  a.__VUE__ = !0
  const {
      insert: n,
      remove: s,
      patchProp: r,
      createElement: i,
      createText: c,
      createComment: l,
      setText: h,
      setElementText: o,
      parentNode: d,
      nextSibling: u,
      setScopeId: p = Me,
      insertStaticContent: f,
    } = t,
    m = (z, y, k, L = null, $ = null, V = null, K = void 0, W = null, H = !!y.dynamicChildren) => {
      if (z === y) return
      z && !C1(z, y) && ((L = P(z)), mt(z, $, V, !0), (z = null)),
        y.patchFlag === -2 && ((H = !1), (y.dynamicChildren = null))
      const { type: B, ref: et, shapeFlag: Y } = y
      switch (B) {
        case j0:
          g(z, y, k, L)
          break
        case ne:
          S(z, y, k, L)
          break
        case da:
          z == null && b(y, k, L, K)
          break
        case xt:
          C(z, y, k, L, $, V, K, W, H)
          break
        default:
          Y & 1
            ? M(z, y, k, L, $, V, K, W, H)
            : Y & 6
              ? R(z, y, k, L, $, V, K, W, H)
              : (Y & 64 || Y & 128) && B.process(z, y, k, L, $, V, K, W, H, J)
      }
      et != null && $ && Ca(et, z && z.ref, V, y || z, !y)
    },
    g = (z, y, k, L) => {
      if (z == null) n((y.el = c(y.children)), k, L)
      else {
        const $ = (y.el = z.el)
        y.children !== z.children && h($, y.children)
      }
    },
    S = (z, y, k, L) => {
      z == null ? n((y.el = l(y.children || '')), k, L) : (y.el = z.el)
    },
    b = (z, y, k, L) => {
      ;[z.el, z.anchor] = f(z.children, y, k, L, z.el, z.anchor)
    },
    w = ({ el: z, anchor: y }, k, L) => {
      let $
      for (; z && z !== y; ) ($ = u(z)), n(z, k, L), (z = $)
      n(y, k, L)
    },
    x = ({ el: z, anchor: y }) => {
      let k
      for (; z && z !== y; ) (k = u(z)), s(z), (z = k)
      s(y)
    },
    M = (z, y, k, L, $, V, K, W, H) => {
      y.type === 'svg' ? (K = 'svg') : y.type === 'math' && (K = 'mathml'),
        z == null ? O(y, k, L, $, V, K, W, H) : E(z, y, $, V, K, W, H)
    },
    O = (z, y, k, L, $, V, K, W) => {
      let H, B
      const { props: et, shapeFlag: Y, transition: Q, dirs: st } = z
      if (
        ((H = z.el = i(z.type, V, et && et.is, et)),
        Y & 8 ? o(H, z.children) : Y & 16 && A(z.children, H, null, L, $, xn(z, V), K, W),
        st && g1(z, null, L, 'created'),
        D(H, z, z.scopeId, K, L),
        et)
      ) {
        for (const Ct in et) Ct !== 'value' && !g0(Ct) && r(H, Ct, null, et[Ct], V, L)
        'value' in et && r(H, 'value', null, et.value, V),
          (B = et.onVnodeBeforeMount) && Ie(B, L, z)
      }
      st && g1(z, null, L, 'beforeMount')
      const pt = Zh($, Q)
      pt && Q.beforeEnter(H),
        n(H, y, k),
        ((B = et && et.onVnodeMounted) || pt || st) &&
          Xt(() => {
            B && Ie(B, L, z), pt && Q.enter(H), st && g1(z, null, L, 'mounted')
          }, $)
    },
    D = (z, y, k, L, $) => {
      if ((k && p(z, k), L)) for (let V = 0; V < L.length; V++) p(z, L[V])
      if ($) {
        let V = $.subTree
        if (y === V || (ll(V.type) && (V.ssContent === y || V.ssFallback === y))) {
          const K = $.vnode
          D(z, K, K.scopeId, K.slotScopeIds, $.parent)
        }
      }
    },
    A = (z, y, k, L, $, V, K, W, H = 0) => {
      for (let B = H; B < z.length; B++) {
        const et = (z[B] = W ? c1(z[B]) : Re(z[B]))
        m(null, et, y, k, L, $, V, K, W)
      }
    },
    E = (z, y, k, L, $, V, K) => {
      const W = (y.el = z.el)
      let { patchFlag: H, dynamicChildren: B, dirs: et } = y
      H |= z.patchFlag & 16
      const Y = z.props || wt,
        Q = y.props || wt
      let st
      if (
        (k && y1(k, !1),
        (st = Q.onVnodeBeforeUpdate) && Ie(st, k, y, z),
        et && g1(y, z, k, 'beforeUpdate'),
        k && y1(k, !0),
        ((Y.innerHTML && Q.innerHTML == null) || (Y.textContent && Q.textContent == null)) &&
          o(W, ''),
        B
          ? T(z.dynamicChildren, B, W, k, L, xn(y, $), V)
          : K || q(z, y, W, null, k, L, xn(y, $), V, !1),
        H > 0)
      ) {
        if (H & 16) I(W, Y, Q, k, $)
        else if (
          (H & 2 && Y.class !== Q.class && r(W, 'class', null, Q.class, $),
          H & 4 && r(W, 'style', Y.style, Q.style, $),
          H & 8)
        ) {
          const pt = y.dynamicProps
          for (let Ct = 0; Ct < pt.length; Ct++) {
            const bt = pt[Ct],
              le = Y[bt],
              ae = Q[bt]
            ;(ae !== le || bt === 'value') && r(W, bt, le, ae, $, k)
          }
        }
        H & 1 && z.children !== y.children && o(W, y.children)
      } else !K && B == null && I(W, Y, Q, k, $)
      ;((st = Q.onVnodeUpdated) || et) &&
        Xt(() => {
          st && Ie(st, k, y, z), et && g1(y, z, k, 'updated')
        }, L)
    },
    T = (z, y, k, L, $, V, K) => {
      for (let W = 0; W < y.length; W++) {
        const H = z[W],
          B = y[W],
          et = H.el && (H.type === xt || !C1(H, B) || H.shapeFlag & 70) ? d(H.el) : k
        m(H, B, et, null, L, $, V, K, !0)
      }
    },
    I = (z, y, k, L, $) => {
      if (y !== k) {
        if (y !== wt) for (const V in y) !g0(V) && !(V in k) && r(z, V, y[V], null, $, L)
        for (const V in k) {
          if (g0(V)) continue
          const K = k[V],
            W = y[V]
          K !== W && V !== 'value' && r(z, V, W, K, $, L)
        }
        'value' in k && r(z, 'value', y.value, k.value, $)
      }
    },
    C = (z, y, k, L, $, V, K, W, H) => {
      const B = (y.el = z ? z.el : c('')),
        et = (y.anchor = z ? z.anchor : c(''))
      let { patchFlag: Y, dynamicChildren: Q, slotScopeIds: st } = y
      st && (W = W ? W.concat(st) : st),
        z == null
          ? (n(B, k, L), n(et, k, L), A(y.children || [], k, et, $, V, K, W, H))
          : Y > 0 && Y & 64 && Q && z.dynamicChildren
            ? (T(z.dynamicChildren, Q, k, $, V, K, W),
              (y.key != null || ($ && y === $.subTree)) && Y2(z, y, !0))
            : q(z, y, k, et, $, V, K, W, H)
    },
    R = (z, y, k, L, $, V, K, W, H) => {
      ;(y.slotScopeIds = W),
        z == null
          ? y.shapeFlag & 512
            ? $.ctx.activate(y, k, L, K, H)
            : N(y, k, L, $, V, K, H)
          : Z(z, y, H)
    },
    N = (z, y, k, L, $, V, K) => {
      const W = (z.component = fd(z, L, $))
      if ((Ga(z) && (W.ctx.renderer = J), vd(W, !1, K), W.asyncDep)) {
        if (($ && $.registerDep(W, U, K), !z.el)) {
          const H = (W.subTree = v(ne))
          S(null, H, y, k)
        }
      } else U(W, z, y, k, $, V, K)
    },
    Z = (z, y, k) => {
      const L = (y.component = z.component)
      if (id(z, y, k))
        if (L.asyncDep && !L.asyncResolved) {
          X(L, y, k)
          return
        } else (L.next = y), L.update()
      else (y.el = z.el), (L.vnode = y)
    },
    U = (z, y, k, L, $, V, K) => {
      const W = () => {
        if (z.isMounted) {
          let { next: Y, bu: Q, u: st, parent: pt, vnode: Ct } = z
          {
            const Te = rl(z)
            if (Te) {
              Y && ((Y.el = Ct.el), X(z, Y, K)),
                Te.asyncDep.then(() => {
                  z.isUnmounted || W()
                })
              return
            }
          }
          let bt = Y,
            le
          y1(z, !1),
            Y ? ((Y.el = Ct.el), X(z, Y, K)) : (Y = Ct),
            Q && oa(Q),
            (le = Y.props && Y.props.onVnodeBeforeUpdate) && Ie(le, pt, Y, Ct),
            y1(z, !0)
          const ae = Fs(z),
            Pe = z.subTree
          ;(z.subTree = ae),
            m(Pe, ae, d(Pe.el), P(Pe), z, $, V),
            (Y.el = ae.el),
            bt === null && cd(z, ae.el),
            st && Xt(st, $),
            (le = Y.props && Y.props.onVnodeUpdated) && Xt(() => Ie(le, pt, Y, Ct), $)
        } else {
          let Y
          const { el: Q, props: st } = y,
            { bm: pt, m: Ct, parent: bt, root: le, type: ae } = z,
            Pe = S0(y)
          y1(z, !1),
            pt && oa(pt),
            !Pe && (Y = st && st.onVnodeBeforeMount) && Ie(Y, bt, y),
            y1(z, !0)
          {
            le.ce && le.ce._injectChildStyle(ae)
            const Te = (z.subTree = Fs(z))
            m(null, Te, k, L, z, $, V), (y.el = Te.el)
          }
          if ((Ct && Xt(Ct, $), !Pe && (Y = st && st.onVnodeMounted))) {
            const Te = y
            Xt(() => Ie(Y, bt, Te), $)
          }
          ;(y.shapeFlag & 256 || (bt && S0(bt.vnode) && bt.vnode.shapeFlag & 256)) &&
            z.a &&
            Xt(z.a, $),
            (z.isMounted = !0),
            (y = k = L = null)
        }
      }
      z.scope.on()
      const H = (z.effect = new oc(W))
      z.scope.off()
      const B = (z.update = H.run.bind(H)),
        et = (z.job = H.runIfDirty.bind(H))
      ;(et.i = z), (et.id = z.uid), (H.scheduler = () => B2(et)), y1(z, !0), B()
    },
    X = (z, y, k) => {
      y.component = z
      const L = z.vnode.props
      ;(z.vnode = y), (z.next = null), Wh(z, y.props, L, k), Yh(z, y.children, k), v1(), Ts(z), z1()
    },
    q = (z, y, k, L, $, V, K, W, H = !1) => {
      const B = z && z.children,
        et = z ? z.shapeFlag : 0,
        Y = y.children,
        { patchFlag: Q, shapeFlag: st } = y
      if (Q > 0) {
        if (Q & 128) {
          St(B, Y, k, L, $, V, K, W, H)
          return
        } else if (Q & 256) {
          ft(B, Y, k, L, $, V, K, W, H)
          return
        }
      }
      st & 8
        ? (et & 16 && $t(B, $, V), Y !== B && o(k, Y))
        : et & 16
          ? st & 16
            ? St(B, Y, k, L, $, V, K, W, H)
            : $t(B, $, V, !0)
          : (et & 8 && o(k, ''), st & 16 && A(Y, k, L, $, V, K, W, H))
    },
    ft = (z, y, k, L, $, V, K, W, H) => {
      ;(z = z || Y1), (y = y || Y1)
      const B = z.length,
        et = y.length,
        Y = Math.min(B, et)
      let Q
      for (Q = 0; Q < Y; Q++) {
        const st = (y[Q] = H ? c1(y[Q]) : Re(y[Q]))
        m(z[Q], st, k, null, $, V, K, W, H)
      }
      B > et ? $t(z, $, V, !0, !1, Y) : A(y, k, L, $, V, K, W, H, Y)
    },
    St = (z, y, k, L, $, V, K, W, H) => {
      let B = 0
      const et = y.length
      let Y = z.length - 1,
        Q = et - 1
      for (; B <= Y && B <= Q; ) {
        const st = z[B],
          pt = (y[B] = H ? c1(y[B]) : Re(y[B]))
        if (C1(st, pt)) m(st, pt, k, null, $, V, K, W, H)
        else break
        B++
      }
      for (; B <= Y && B <= Q; ) {
        const st = z[Y],
          pt = (y[Q] = H ? c1(y[Q]) : Re(y[Q]))
        if (C1(st, pt)) m(st, pt, k, null, $, V, K, W, H)
        else break
        Y--, Q--
      }
      if (B > Y) {
        if (B <= Q) {
          const st = Q + 1,
            pt = st < et ? y[st].el : L
          for (; B <= Q; ) m(null, (y[B] = H ? c1(y[B]) : Re(y[B])), k, pt, $, V, K, W, H), B++
        }
      } else if (B > Q) for (; B <= Y; ) mt(z[B], $, V, !0), B++
      else {
        const st = B,
          pt = B,
          Ct = new Map()
        for (B = pt; B <= Q; B++) {
          const oe = (y[B] = H ? c1(y[B]) : Re(y[B]))
          oe.key != null && Ct.set(oe.key, B)
        }
        let bt,
          le = 0
        const ae = Q - pt + 1
        let Pe = !1,
          Te = 0
        const d0 = new Array(ae)
        for (B = 0; B < ae; B++) d0[B] = 0
        for (B = st; B <= Y; B++) {
          const oe = z[B]
          if (le >= ae) {
            mt(oe, $, V, !0)
            continue
          }
          let Ae
          if (oe.key != null) Ae = Ct.get(oe.key)
          else
            for (bt = pt; bt <= Q; bt++)
              if (d0[bt - pt] === 0 && C1(oe, y[bt])) {
                Ae = bt
                break
              }
          Ae === void 0
            ? mt(oe, $, V, !0)
            : ((d0[Ae - pt] = B + 1),
              Ae >= Te ? (Te = Ae) : (Pe = !0),
              m(oe, y[Ae], k, null, $, V, K, W, H),
              le++)
        }
        const Cs = Pe ? Xh(d0) : Y1
        for (bt = Cs.length - 1, B = ae - 1; B >= 0; B--) {
          const oe = pt + B,
            Ae = y[oe],
            ks = oe + 1 < et ? y[oe + 1].el : L
          d0[B] === 0
            ? m(null, Ae, k, ks, $, V, K, W, H)
            : Pe && (bt < 0 || B !== Cs[bt] ? dt(Ae, k, ks, 2) : bt--)
        }
      }
    },
    dt = (z, y, k, L, $ = null) => {
      const { el: V, type: K, transition: W, children: H, shapeFlag: B } = z
      if (B & 6) {
        dt(z.component.subTree, y, k, L)
        return
      }
      if (B & 128) {
        z.suspense.move(y, k, L)
        return
      }
      if (B & 64) {
        K.move(z, y, k, J)
        return
      }
      if (K === xt) {
        n(V, y, k)
        for (let Y = 0; Y < H.length; Y++) dt(H[Y], y, k, L)
        n(z.anchor, y, k)
        return
      }
      if (K === da) {
        w(z, y, k)
        return
      }
      if (L !== 2 && B & 1 && W)
        if (L === 0) W.beforeEnter(V), n(V, y, k), Xt(() => W.enter(V), $)
        else {
          const { leave: Y, delayLeave: Q, afterLeave: st } = W,
            pt = () => n(V, y, k),
            Ct = () => {
              Y(V, () => {
                pt(), st && st()
              })
            }
          Q ? Q(V, pt, Ct) : Ct()
        }
      else n(V, y, k)
    },
    mt = (z, y, k, L = !1, $ = !1) => {
      const {
        type: V,
        props: K,
        ref: W,
        children: H,
        dynamicChildren: B,
        shapeFlag: et,
        patchFlag: Y,
        dirs: Q,
        cacheIndex: st,
      } = z
      if (
        (Y === -2 && ($ = !1),
        W != null && Ca(W, null, k, z, !0),
        st != null && (y.renderCache[st] = void 0),
        et & 256)
      ) {
        y.ctx.deactivate(z)
        return
      }
      const pt = et & 1 && Q,
        Ct = !S0(z)
      let bt
      if ((Ct && (bt = K && K.onVnodeBeforeUnmount) && Ie(bt, y, z), et & 6)) ze(z.component, k, L)
      else {
        if (et & 128) {
          z.suspense.unmount(k, L)
          return
        }
        pt && g1(z, null, y, 'beforeUnmount'),
          et & 64
            ? z.type.remove(z, y, k, J, L)
            : B && !B.hasOnce && (V !== xt || (Y > 0 && Y & 64))
              ? $t(B, y, k, !1, !0)
              : ((V === xt && Y & 384) || (!$ && et & 16)) && $t(H, y, k),
          L && Jt(z)
      }
      ;((Ct && (bt = K && K.onVnodeUnmounted)) || pt) &&
        Xt(() => {
          bt && Ie(bt, y, z), pt && g1(z, null, y, 'unmounted')
        }, k)
    },
    Jt = (z) => {
      const { type: y, el: k, anchor: L, transition: $ } = z
      if (y === xt) {
        Wt(k, L)
        return
      }
      if (y === da) {
        x(z)
        return
      }
      const V = () => {
        s(k), $ && !$.persisted && $.afterLeave && $.afterLeave()
      }
      if (z.shapeFlag & 1 && $ && !$.persisted) {
        const { leave: K, delayLeave: W } = $,
          H = () => K(k, V)
        W ? W(z.el, V, H) : H()
      } else V()
    },
    Wt = (z, y) => {
      let k
      for (; z !== y; ) (k = u(z)), s(z), (z = k)
      s(y)
    },
    ze = (z, y, k) => {
      const { bum: L, scope: $, job: V, subTree: K, um: W, m: H, a: B } = z
      Bs(H),
        Bs(B),
        L && oa(L),
        $.stop(),
        V && ((V.flags |= 8), mt(K, z, y, k)),
        W && Xt(W, y),
        Xt(() => {
          z.isUnmounted = !0
        }, y),
        y &&
          y.pendingBranch &&
          !y.isUnmounted &&
          z.asyncDep &&
          !z.asyncResolved &&
          z.suspenseId === y.pendingId &&
          (y.deps--, y.deps === 0 && y.resolve())
    },
    $t = (z, y, k, L = !1, $ = !1, V = 0) => {
      for (let K = V; K < z.length; K++) mt(z[K], y, k, L, $)
    },
    P = (z) => {
      if (z.shapeFlag & 6) return P(z.component.subTree)
      if (z.shapeFlag & 128) return z.suspense.next()
      const y = u(z.anchor || z.el),
        k = y && y[Oc]
      return k ? u(k) : y
    }
  let F = !1
  const j = (z, y, k) => {
      z == null
        ? y._vnode && mt(y._vnode, null, null, !0)
        : m(y._vnode || null, z, y, null, null, null, k),
        (y._vnode = z),
        F || ((F = !0), Ts(), Tc(), (F = !1))
    },
    J = { p: m, um: mt, m: dt, r: Jt, mt: N, mc: A, pc: q, pbc: T, n: P, o: t }
  return { render: j, hydrate: void 0, createApp: jh(j) }
}
function xn({ type: t, props: e }, a) {
  return (a === 'svg' && t === 'foreignObject') ||
    (a === 'mathml' && t === 'annotation-xml' && e && e.encoding && e.encoding.includes('html'))
    ? void 0
    : a
}
function y1({ effect: t, job: e }, a) {
  a ? ((t.flags |= 32), (e.flags |= 4)) : ((t.flags &= -33), (e.flags &= -5))
}
function Zh(t, e) {
  return (!t || (t && !t.pendingBranch)) && e && !e.persisted
}
function Y2(t, e, a = !1) {
  const n = t.children,
    s = e.children
  if (at(n) && at(s))
    for (let r = 0; r < n.length; r++) {
      const i = n[r]
      let c = s[r]
      c.shapeFlag & 1 &&
        !c.dynamicChildren &&
        ((c.patchFlag <= 0 || c.patchFlag === 32) && ((c = s[r] = c1(s[r])), (c.el = i.el)),
        !a && c.patchFlag !== -2 && Y2(i, c)),
        c.type === j0 && (c.el = i.el)
    }
}
function Xh(t) {
  const e = t.slice(),
    a = [0]
  let n, s, r, i, c
  const l = t.length
  for (n = 0; n < l; n++) {
    const h = t[n]
    if (h !== 0) {
      if (((s = a[a.length - 1]), t[s] < h)) {
        ;(e[n] = s), a.push(n)
        continue
      }
      for (r = 0, i = a.length - 1; r < i; ) (c = (r + i) >> 1), t[a[c]] < h ? (r = c + 1) : (i = c)
      h < t[a[r]] && (r > 0 && (e[n] = a[r - 1]), (a[r] = n))
    }
  }
  for (r = a.length, i = a[r - 1]; r-- > 0; ) (a[r] = i), (i = e[i])
  return a
}
function rl(t) {
  const e = t.subTree.component
  if (e) return e.asyncDep && !e.asyncResolved ? e : rl(e)
}
function Bs(t) {
  if (t) for (let e = 0; e < t.length; e++) t[e].flags |= 8
}
const Qh = Symbol.for('v-scx'),
  td = () => yt(Qh)
function fe(t, e) {
  return q2(t, null, e)
}
function nt(t, e, a) {
  return q2(t, e, a)
}
function q2(t, e, a = wt) {
  const { immediate: n, deep: s, flush: r, once: i } = a,
    c = Vt({}, a),
    l = (e && n) || (!e && r !== 'post')
  let h
  if (O0) {
    if (r === 'sync') {
      const p = td()
      h = p.__watcherHandles || (p.__watcherHandles = [])
    } else if (!l) {
      const p = () => {}
      return (p.stop = Me), (p.resume = Me), (p.pause = Me), p
    }
  }
  const o = jt
  c.call = (p, f, m) => Ce(p, o, f, m)
  let d = !1
  r === 'post'
    ? (c.scheduler = (p) => {
        Xt(p, o && o.suspense)
      })
    : r !== 'sync' &&
      ((d = !0),
      (c.scheduler = (p, f) => {
        f ? p() : B2(p)
      })),
    (c.augmentJob = (p) => {
      e && (p.flags |= 4), d && ((p.flags |= 2), o && ((p.id = o.uid), (p.i = o)))
    })
  const u = yh(t, e, c)
  return O0 && (h ? h.push(u) : l && u()), u
}
function ed(t, e, a) {
  const n = this.proxy,
    s = It(t) ? (t.includes('.') ? il(n, t) : () => n[t]) : t.bind(n, n)
  let r
  rt(e) ? (r = e) : ((r = e.handler), (a = e))
  const i = H0(this),
    c = q2(s, r.bind(n), a)
  return i(), c
}
function il(t, e) {
  const a = e.split('.')
  return () => {
    let n = t
    for (let s = 0; s < a.length && n; s++) n = n[a[s]]
    return n
  }
}
const ad = (t, e) =>
  e === 'modelValue' || e === 'model-value'
    ? t.modelModifiers
    : t[`${e}Modifiers`] || t[`${re(e)}Modifiers`] || t[`${D1(e)}Modifiers`]
function nd(t, e, ...a) {
  if (t.isUnmounted) return
  const n = t.vnode.props || wt
  let s = a
  const r = e.startsWith('update:'),
    i = r && ad(n, e.slice(7))
  i && (i.trim && (s = a.map((o) => (It(o) ? o.trim() : o))), i.number && (s = a.map(qn)))
  let c,
    l = n[(c = yn(e))] || n[(c = yn(re(e)))]
  !l && r && (l = n[(c = yn(D1(e)))]), l && Ce(l, t, 6, s)
  const h = n[c + 'Once']
  if (h) {
    if (!t.emitted) t.emitted = {}
    else if (t.emitted[c]) return
    ;(t.emitted[c] = !0), Ce(h, t, 6, s)
  }
}
function cl(t, e, a = !1) {
  const n = e.emitsCache,
    s = n.get(t)
  if (s !== void 0) return s
  const r = t.emits
  let i = {},
    c = !1
  if (!rt(t)) {
    const l = (h) => {
      const o = cl(h, e, !0)
      o && ((c = !0), Vt(i, o))
    }
    !a && e.mixins.length && e.mixins.forEach(l),
      t.extends && l(t.extends),
      t.mixins && t.mixins.forEach(l)
  }
  return !r && !c
    ? (Et(t) && n.set(t, null), null)
    : (at(r) ? r.forEach((l) => (i[l] = null)) : Vt(i, r), Et(t) && n.set(t, i), i)
}
function qa(t, e) {
  return !t || !Ba(e)
    ? !1
    : ((e = e.slice(2).replace(/Once$/, '')),
      gt(t, e[0].toLowerCase() + e.slice(1)) || gt(t, D1(e)) || gt(t, e))
}
function Fs(t) {
  const {
      type: e,
      vnode: a,
      proxy: n,
      withProxy: s,
      propsOptions: [r],
      slots: i,
      attrs: c,
      emit: l,
      render: h,
      renderCache: o,
      props: d,
      data: u,
      setupState: p,
      ctx: f,
      inheritAttrs: m,
    } = t,
    g = wa(t)
  let S, b
  try {
    if (a.shapeFlag & 4) {
      const x = s || n,
        M = x
      ;(S = Re(h.call(M, x, o, d, p, u, f))), (b = c)
    } else {
      const x = e
      ;(S = Re(x.length > 1 ? x(d, { attrs: c, slots: i, emit: l }) : x(d, null))),
        (b = e.props ? c : sd(c))
    }
  } catch (x) {
    ;(C0.length = 0), Ua(x, t, 1), (S = v(ne))
  }
  let w = S
  if (b && m !== !1) {
    const x = Object.keys(b),
      { shapeFlag: M } = w
    x.length && M & 7 && (r && x.some(x2) && (b = rd(b, r)), (w = Ze(w, b, !1, !0)))
  }
  return (
    a.dirs && ((w = Ze(w, null, !1, !0)), (w.dirs = w.dirs ? w.dirs.concat(a.dirs) : a.dirs)),
    a.transition && A1(w, a.transition),
    (S = w),
    wa(g),
    S
  )
}
const sd = (t) => {
    let e
    for (const a in t) (a === 'class' || a === 'style' || Ba(a)) && ((e || (e = {}))[a] = t[a])
    return e
  },
  rd = (t, e) => {
    const a = {}
    for (const n in t) (!x2(n) || !(n.slice(9) in e)) && (a[n] = t[n])
    return a
  }
function id(t, e, a) {
  const { props: n, children: s, component: r } = t,
    { props: i, children: c, patchFlag: l } = e,
    h = r.emitsOptions
  if (e.dirs || e.transition) return !0
  if (a && l >= 0) {
    if (l & 1024) return !0
    if (l & 16) return n ? js(n, i, h) : !!i
    if (l & 8) {
      const o = e.dynamicProps
      for (let d = 0; d < o.length; d++) {
        const u = o[d]
        if (i[u] !== n[u] && !qa(h, u)) return !0
      }
    }
  } else
    return (s || c) && (!c || !c.$stable) ? !0 : n === i ? !1 : n ? (i ? js(n, i, h) : !0) : !!i
  return !1
}
function js(t, e, a) {
  const n = Object.keys(e)
  if (n.length !== Object.keys(t).length) return !0
  for (let s = 0; s < n.length; s++) {
    const r = n[s]
    if (e[r] !== t[r] && !qa(a, r)) return !0
  }
  return !1
}
function cd({ vnode: t, parent: e }, a) {
  for (; e; ) {
    const n = e.subTree
    if ((n.suspense && n.suspense.activeBranch === t && (n.el = t.el), n === t))
      ((t = e.vnode).el = a), (e = e.parent)
    else break
  }
}
const ll = (t) => t.__isSuspense
function ld(t, e) {
  e && e.pendingBranch ? (at(t) ? e.effects.push(...t) : e.effects.push(t)) : Sh(t)
}
const xt = Symbol.for('v-fgt'),
  j0 = Symbol.for('v-txt'),
  ne = Symbol.for('v-cmt'),
  da = Symbol.for('v-stc'),
  C0 = []
let de = null
function Ft(t = !1) {
  C0.push((de = t ? null : []))
}
function od() {
  C0.pop(), (de = C0[C0.length - 1] || null)
}
let I0 = 1
function Hs(t, e = !1) {
  ;(I0 += t), t < 0 && de && e && (de.hasOnce = !0)
}
function ol(t) {
  return (t.dynamicChildren = I0 > 0 ? de || Y1 : null), od(), I0 > 0 && de && de.push(t), t
}
function p1(t, e, a, n, s, r) {
  return ol(ue(t, e, a, n, s, r, !0))
}
function Ke(t, e, a, n, s) {
  return ol(v(t, e, a, n, s, !0))
}
function xa(t) {
  return t ? t.__v_isVNode === !0 : !1
}
function C1(t, e) {
  return t.type === e.type && t.key === e.key
}
const hl = ({ key: t }) => t ?? null,
  ua = ({ ref: t, ref_key: e, ref_for: a }) => (
    typeof t == 'number' && (t = '' + t),
    t != null ? (It(t) || Tt(t) || rt(t) ? { i: se, r: t, k: e, f: !!a } : t) : null
  )
function ue(t, e = null, a = null, n = 0, s = null, r = t === xt ? 0 : 1, i = !1, c = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && hl(e),
    ref: e && ua(e),
    scopeId: Ic,
    slotScopeIds: null,
    children: a,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: n,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: se,
  }
  return (
    c ? (J2(l, a), r & 128 && t.normalize(l)) : a && (l.shapeFlag |= It(a) ? 8 : 16),
    I0 > 0 && !i && de && (l.patchFlag > 0 || r & 6) && l.patchFlag !== 32 && de.push(l),
    l
  )
}
const v = hd
function hd(t, e = null, a = null, n = 0, s = null, r = !1) {
  if (((!t || t === Uc) && (t = ne), xa(t))) {
    const c = Ze(t, e, !0)
    return (
      a && J2(c, a),
      I0 > 0 && !r && de && (c.shapeFlag & 6 ? (de[de.indexOf(t)] = c) : de.push(c)),
      (c.patchFlag = -2),
      c
    )
  }
  if ((_d(t) && (t = t.__vccOpts), e)) {
    e = dd(e)
    let { class: c, style: l } = e
    c && !It(c) && (e.class = A2(c)),
      Et(l) && ($2(l) && !at(l) && (l = Vt({}, l)), (e.style = T2(l)))
  }
  const i = It(t) ? 1 : ll(t) ? 128 : Dc(t) ? 64 : Et(t) ? 4 : rt(t) ? 2 : 0
  return ue(t, e, a, n, s, i, r, !0)
}
function dd(t) {
  return t ? ($2(t) || Xc(t) ? Vt({}, t) : t) : null
}
function Ze(t, e, a = !1, n = !1) {
  const { props: s, ref: r, patchFlag: i, children: c, transition: l } = t,
    h = e ? lt(s || {}, e) : s,
    o = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: t.type,
      props: h,
      key: h && hl(h),
      ref: e && e.ref ? (a && r ? (at(r) ? r.concat(ua(e)) : [r, ua(e)]) : ua(e)) : r,
      scopeId: t.scopeId,
      slotScopeIds: t.slotScopeIds,
      children: c,
      target: t.target,
      targetStart: t.targetStart,
      targetAnchor: t.targetAnchor,
      staticCount: t.staticCount,
      shapeFlag: t.shapeFlag,
      patchFlag: e && t.type !== xt ? (i === -1 ? 16 : i | 16) : i,
      dynamicProps: t.dynamicProps,
      dynamicChildren: t.dynamicChildren,
      appContext: t.appContext,
      dirs: t.dirs,
      transition: l,
      component: t.component,
      suspense: t.suspense,
      ssContent: t.ssContent && Ze(t.ssContent),
      ssFallback: t.ssFallback && Ze(t.ssFallback),
      el: t.el,
      anchor: t.anchor,
      ctx: t.ctx,
      ce: t.ce,
    }
  return l && n && A1(o, l.clone(o)), o
}
function ye(t = ' ', e = 0) {
  return v(j0, null, t, e)
}
function dl(t, e) {
  const a = v(da, null, t)
  return (a.staticCount = e), a
}
function ud(t = '', e = !1) {
  return e ? (Ft(), Ke(ne, null, t)) : v(ne, null, t)
}
function Re(t) {
  return t == null || typeof t == 'boolean'
    ? v(ne)
    : at(t)
      ? v(xt, null, t.slice())
      : xa(t)
        ? c1(t)
        : v(j0, null, String(t))
}
function c1(t) {
  return (t.el === null && t.patchFlag !== -1) || t.memo ? t : Ze(t)
}
function J2(t, e) {
  let a = 0
  const { shapeFlag: n } = t
  if (e == null) e = null
  else if (at(e)) a = 16
  else if (typeof e == 'object')
    if (n & 65) {
      const s = e.default
      s && (s._c && (s._d = !1), J2(t, s()), s._c && (s._d = !0))
      return
    } else {
      a = 32
      const s = e._
      !s && !Xc(e)
        ? (e._ctx = se)
        : s === 3 && se && (se.slots._ === 1 ? (e._ = 1) : ((e._ = 2), (t.patchFlag |= 1024)))
    }
  else
    rt(e)
      ? ((e = { default: e, _ctx: se }), (a = 32))
      : ((e = String(e)), n & 64 ? ((a = 16), (e = [ye(e)])) : (a = 8))
  ;(t.children = e), (t.shapeFlag |= a)
}
function lt(...t) {
  const e = {}
  for (let a = 0; a < t.length; a++) {
    const n = t[a]
    for (const s in n)
      if (s === 'class') e.class !== n.class && (e.class = A2([e.class, n.class]))
      else if (s === 'style') e.style = T2([e.style, n.style])
      else if (Ba(s)) {
        const r = e[s],
          i = n[s]
        i && r !== i && !(at(r) && r.includes(i)) && (e[s] = r ? [].concat(r, i) : i)
      } else s !== '' && (e[s] = n[s])
  }
  return e
}
function Ie(t, e, a, n = null) {
  Ce(t, e, 7, [a, n])
}
const pd = qc()
let md = 0
function fd(t, e, a) {
  const n = t.type,
    s = (e ? e.appContext : t.appContext) || pd,
    r = {
      uid: md++,
      vnode: t,
      type: n,
      parent: e,
      appContext: s,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new lc(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: e ? e.provides : Object.create(s.provides),
      ids: e ? e.ids : ['', 0, 0],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: tl(n, s),
      emitsOptions: cl(n, s),
      emit: null,
      emitted: null,
      propsDefaults: wt,
      inheritAttrs: n.inheritAttrs,
      ctx: wt,
      data: wt,
      props: wt,
      attrs: wt,
      slots: wt,
      refs: wt,
      setupState: wt,
      setupContext: null,
      suspense: a,
      suspenseId: a ? a.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    }
  return (
    (r.ctx = { _: r }), (r.root = e ? e.root : r), (r.emit = nd.bind(null, r)), t.ce && t.ce(r), r
  )
}
let jt = null
const Z2 = () => jt || se
let Ea, i2
{
  const t = Ha(),
    e = (a, n) => {
      let s
      return (
        (s = t[a]) || (s = t[a] = []),
        s.push(n),
        (r) => {
          s.length > 1 ? s.forEach((i) => i(r)) : s[0](r)
        }
      )
    }
  ;(Ea = e('__VUE_INSTANCE_SETTERS__', (a) => (jt = a))),
    (i2 = e('__VUE_SSR_SETTERS__', (a) => (O0 = a)))
}
const H0 = (t) => {
    const e = jt
    return (
      Ea(t),
      t.scope.on(),
      () => {
        t.scope.off(), Ea(e)
      }
    )
  },
  Ws = () => {
    jt && jt.scope.off(), Ea(null)
  }
function ul(t) {
  return t.vnode.shapeFlag & 4
}
let O0 = !1
function vd(t, e = !1, a = !1) {
  e && i2(e)
  const { props: n, children: s } = t.vnode,
    r = ul(t)
  Hh(t, n, r, e), Kh(t, s, a)
  const i = r ? zd(t, e) : void 0
  return e && i2(!1), i
}
function zd(t, e) {
  const a = t.type
  ;(t.accessCache = Object.create(null)), (t.proxy = new Proxy(t.ctx, Lh))
  const { setup: n } = a
  if (n) {
    v1()
    const s = (t.setupContext = n.length > 1 ? yd(t) : null),
      r = H0(t),
      i = F0(n, t, 0, [t.props, s]),
      c = ec(i)
    if ((z1(), r(), (c || t.sp) && !S0(t) && Fc(t), c)) {
      if ((i.then(Ws, Ws), e))
        return i
          .then((l) => {
            Us(t, l)
          })
          .catch((l) => {
            Ua(l, t, 0)
          })
      t.asyncDep = i
    } else Us(t, i)
  } else pl(t)
}
function Us(t, e, a) {
  rt(e)
    ? t.type.__ssrInlineRender
      ? (t.ssrRender = e)
      : (t.render = e)
    : Et(e) && (t.setupState = kc(e)),
    pl(t)
}
function pl(t, e, a) {
  const n = t.type
  t.render || (t.render = n.render || Me)
  {
    const s = H0(t)
    v1()
    try {
      Mh(t)
    } finally {
      z1(), s()
    }
  }
}
const gd = {
  get(t, e) {
    return Ut(t, 'get', ''), t[e]
  },
}
function yd(t) {
  const e = (a) => {
    t.exposed = a || {}
  }
  return { attrs: new Proxy(t.attrs, gd), slots: t.slots, emit: t.emit, expose: e }
}
function Ja(t) {
  return t.exposed
    ? t.exposeProxy ||
        (t.exposeProxy = new Proxy(kc(dh(t.exposed)), {
          get(e, a) {
            if (a in e) return e[a]
            if (a in w0) return w0[a](t)
          },
          has(e, a) {
            return a in e || a in w0
          },
        }))
    : t.proxy
}
function bd(t, e = !0) {
  return rt(t) ? t.displayName || t.name : t.name || (e && t.__name)
}
function _d(t) {
  return rt(t) && '__vccOpts' in t
}
const _ = (t, e) => zh(t, e, O0)
function Be(t, e, a) {
  const n = arguments.length
  return n === 2
    ? Et(e) && !at(e)
      ? xa(e)
        ? v(t, null, [e])
        : v(t, e)
      : v(t, null, e)
    : (n > 3 ? (a = Array.prototype.slice.call(arguments, 2)) : n === 3 && xa(a) && (a = [a]),
      v(t, e, a))
}
const Sd = '3.5.13'
/**
 * @vue/runtime-dom v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let c2
const Gs = typeof window < 'u' && window.trustedTypes
if (Gs)
  try {
    c2 = Gs.createPolicy('vue', { createHTML: (t) => t })
  } catch {}
const ml = c2 ? (t) => c2.createHTML(t) : (t) => t,
  wd = 'http://www.w3.org/2000/svg',
  Cd = 'http://www.w3.org/1998/Math/MathML',
  Ge = typeof document < 'u' ? document : null,
  Ks = Ge && Ge.createElement('template'),
  kd = {
    insert: (t, e, a) => {
      e.insertBefore(t, a || null)
    },
    remove: (t) => {
      const e = t.parentNode
      e && e.removeChild(t)
    },
    createElement: (t, e, a, n) => {
      const s =
        e === 'svg'
          ? Ge.createElementNS(wd, t)
          : e === 'mathml'
            ? Ge.createElementNS(Cd, t)
            : a
              ? Ge.createElement(t, { is: a })
              : Ge.createElement(t)
      return t === 'select' && n && n.multiple != null && s.setAttribute('multiple', n.multiple), s
    },
    createText: (t) => Ge.createTextNode(t),
    createComment: (t) => Ge.createComment(t),
    setText: (t, e) => {
      t.nodeValue = e
    },
    setElementText: (t, e) => {
      t.textContent = e
    },
    parentNode: (t) => t.parentNode,
    nextSibling: (t) => t.nextSibling,
    querySelector: (t) => Ge.querySelector(t),
    setScopeId(t, e) {
      t.setAttribute(e, '')
    },
    insertStaticContent(t, e, a, n, s, r) {
      const i = a ? a.previousSibling : e.lastChild
      if (s && (s === r || s.nextSibling))
        for (; e.insertBefore(s.cloneNode(!0), a), !(s === r || !(s = s.nextSibling)); );
      else {
        Ks.innerHTML = ml(
          n === 'svg' ? `<svg>${t}</svg>` : n === 'mathml' ? `<math>${t}</math>` : t,
        )
        const c = Ks.content
        if (n === 'svg' || n === 'mathml') {
          const l = c.firstChild
          for (; l.firstChild; ) c.appendChild(l.firstChild)
          c.removeChild(l)
        }
        e.insertBefore(c, a)
      }
      return [i ? i.nextSibling : e.firstChild, a ? a.previousSibling : e.lastChild]
    },
  },
  a1 = 'transition',
  p0 = 'animation',
  Q1 = Symbol('_vtc'),
  fl = {
    name: String,
    type: String,
    css: { type: Boolean, default: !0 },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String,
  },
  vl = Vt({}, Vc, fl),
  xd = (t) => ((t.displayName = 'Transition'), (t.props = vl), t),
  I1 = xd((t, { slots: e }) => Be(xh, zl(t), e)),
  b1 = (t, e = []) => {
    at(t) ? t.forEach((a) => a(...e)) : t && t(...e)
  },
  Ys = (t) => (t ? (at(t) ? t.some((e) => e.length > 1) : t.length > 1) : !1)
function zl(t) {
  const e = {}
  for (const C in t) C in fl || (e[C] = t[C])
  if (t.css === !1) return e
  const {
      name: a = 'v',
      type: n,
      duration: s,
      enterFromClass: r = `${a}-enter-from`,
      enterActiveClass: i = `${a}-enter-active`,
      enterToClass: c = `${a}-enter-to`,
      appearFromClass: l = r,
      appearActiveClass: h = i,
      appearToClass: o = c,
      leaveFromClass: d = `${a}-leave-from`,
      leaveActiveClass: u = `${a}-leave-active`,
      leaveToClass: p = `${a}-leave-to`,
    } = t,
    f = Ed(s),
    m = f && f[0],
    g = f && f[1],
    {
      onBeforeEnter: S,
      onEnter: b,
      onEnterCancelled: w,
      onLeave: x,
      onLeaveCancelled: M,
      onBeforeAppear: O = S,
      onAppear: D = b,
      onAppearCancelled: A = w,
    } = e,
    E = (C, R, N, Z) => {
      ;(C._enterCancelled = Z), s1(C, R ? o : c), s1(C, R ? h : i), N && N()
    },
    T = (C, R) => {
      ;(C._isLeaving = !1), s1(C, d), s1(C, p), s1(C, u), R && R()
    },
    I = (C) => (R, N) => {
      const Z = C ? D : b,
        U = () => E(R, C, N)
      b1(Z, [R, U]),
        qs(() => {
          s1(R, C ? l : r), Oe(R, C ? o : c), Ys(Z) || Js(R, n, m, U)
        })
    }
  return Vt(e, {
    onBeforeEnter(C) {
      b1(S, [C]), Oe(C, r), Oe(C, i)
    },
    onBeforeAppear(C) {
      b1(O, [C]), Oe(C, l), Oe(C, h)
    },
    onEnter: I(!1),
    onAppear: I(!0),
    onLeave(C, R) {
      C._isLeaving = !0
      const N = () => T(C, R)
      Oe(C, d),
        C._enterCancelled ? (Oe(C, u), l2()) : (l2(), Oe(C, u)),
        qs(() => {
          C._isLeaving && (s1(C, d), Oe(C, p), Ys(x) || Js(C, n, g, N))
        }),
        b1(x, [C, N])
    },
    onEnterCancelled(C) {
      E(C, !1, void 0, !0), b1(w, [C])
    },
    onAppearCancelled(C) {
      E(C, !0, void 0, !0), b1(A, [C])
    },
    onLeaveCancelled(C) {
      T(C), b1(M, [C])
    },
  })
}
function Ed(t) {
  if (t == null) return null
  if (Et(t)) return [En(t.enter), En(t.leave)]
  {
    const e = En(t)
    return [e, e]
  }
}
function En(t) {
  return $3(t)
}
function Oe(t, e) {
  e.split(/\s+/).forEach((a) => a && t.classList.add(a)), (t[Q1] || (t[Q1] = new Set())).add(e)
}
function s1(t, e) {
  e.split(/\s+/).forEach((n) => n && t.classList.remove(n))
  const a = t[Q1]
  a && (a.delete(e), a.size || (t[Q1] = void 0))
}
function qs(t) {
  requestAnimationFrame(() => {
    requestAnimationFrame(t)
  })
}
let Pd = 0
function Js(t, e, a, n) {
  const s = (t._endId = ++Pd),
    r = () => {
      s === t._endId && n()
    }
  if (a != null) return setTimeout(r, a)
  const { type: i, timeout: c, propCount: l } = gl(t, e)
  if (!i) return n()
  const h = i + 'end'
  let o = 0
  const d = () => {
      t.removeEventListener(h, u), r()
    },
    u = (p) => {
      p.target === t && ++o >= l && d()
    }
  setTimeout(() => {
    o < l && d()
  }, c + 1),
    t.addEventListener(h, u)
}
function gl(t, e) {
  const a = window.getComputedStyle(t),
    n = (f) => (a[f] || '').split(', '),
    s = n(`${a1}Delay`),
    r = n(`${a1}Duration`),
    i = Zs(s, r),
    c = n(`${p0}Delay`),
    l = n(`${p0}Duration`),
    h = Zs(c, l)
  let o = null,
    d = 0,
    u = 0
  e === a1
    ? i > 0 && ((o = a1), (d = i), (u = r.length))
    : e === p0
      ? h > 0 && ((o = p0), (d = h), (u = l.length))
      : ((d = Math.max(i, h)),
        (o = d > 0 ? (i > h ? a1 : p0) : null),
        (u = o ? (o === a1 ? r.length : l.length) : 0))
  const p = o === a1 && /\b(transform|all)(,|$)/.test(n(`${a1}Property`).toString())
  return { type: o, timeout: d, propCount: u, hasTransform: p }
}
function Zs(t, e) {
  for (; t.length < e.length; ) t = t.concat(t)
  return Math.max(...e.map((a, n) => Xs(a) + Xs(t[n])))
}
function Xs(t) {
  return t === 'auto' ? 0 : Number(t.slice(0, -1).replace(',', '.')) * 1e3
}
function l2() {
  return document.body.offsetHeight
}
function Td(t, e, a) {
  const n = t[Q1]
  n && (e = (e ? [e, ...n] : [...n]).join(' ')),
    e == null ? t.removeAttribute('class') : a ? t.setAttribute('class', e) : (t.className = e)
}
const Pa = Symbol('_vod'),
  yl = Symbol('_vsh'),
  Za = {
    beforeMount(t, { value: e }, { transition: a }) {
      ;(t[Pa] = t.style.display === 'none' ? '' : t.style.display),
        a && e ? a.beforeEnter(t) : m0(t, e)
    },
    mounted(t, { value: e }, { transition: a }) {
      a && e && a.enter(t)
    },
    updated(t, { value: e, oldValue: a }, { transition: n }) {
      !e != !a &&
        (n
          ? e
            ? (n.beforeEnter(t), m0(t, !0), n.enter(t))
            : n.leave(t, () => {
                m0(t, !1)
              })
          : m0(t, e))
    },
    beforeUnmount(t, { value: e }) {
      m0(t, e)
    },
  }
function m0(t, e) {
  ;(t.style.display = e ? t[Pa] : 'none'), (t[yl] = !e)
}
const Ad = Symbol(''),
  Id = /(^|;)\s*display\s*:/
function Od(t, e, a) {
  const n = t.style,
    s = It(a)
  let r = !1
  if (a && !s) {
    if (e)
      if (It(e))
        for (const i of e.split(';')) {
          const c = i.slice(0, i.indexOf(':')).trim()
          a[c] == null && pa(n, c, '')
        }
      else for (const i in e) a[i] == null && pa(n, i, '')
    for (const i in a) i === 'display' && (r = !0), pa(n, i, a[i])
  } else if (s) {
    if (e !== a) {
      const i = n[Ad]
      i && (a += ';' + i), (n.cssText = a), (r = Id.test(a))
    }
  } else e && t.removeAttribute('style')
  Pa in t && ((t[Pa] = r ? n.display : ''), t[yl] && (n.display = 'none'))
}
const Qs = /\s*!important$/
function pa(t, e, a) {
  if (at(a)) a.forEach((n) => pa(t, e, n))
  else if ((a == null && (a = ''), e.startsWith('--'))) t.setProperty(e, a)
  else {
    const n = Dd(t, e)
    Qs.test(a) ? t.setProperty(D1(n), a.replace(Qs, ''), 'important') : (t[n] = a)
  }
}
const tr = ['Webkit', 'Moz', 'ms'],
  Pn = {}
function Dd(t, e) {
  const a = Pn[e]
  if (a) return a
  let n = re(e)
  if (n !== 'filter' && n in t) return (Pn[e] = n)
  n = Xe(n)
  for (let s = 0; s < tr.length; s++) {
    const r = tr[s] + n
    if (r in t) return (Pn[e] = r)
  }
  return e
}
const er = 'http://www.w3.org/1999/xlink'
function ar(t, e, a, n, s, r = W3(e)) {
  n && e.startsWith('xlink:')
    ? a == null
      ? t.removeAttributeNS(er, e.slice(6, e.length))
      : t.setAttributeNS(er, e, a)
    : a == null || (r && !rc(a))
      ? t.removeAttribute(e)
      : t.setAttribute(e, r ? '' : f1(a) ? String(a) : a)
}
function nr(t, e, a, n, s) {
  if (e === 'innerHTML' || e === 'textContent') {
    a != null && (t[e] = e === 'innerHTML' ? ml(a) : a)
    return
  }
  const r = t.tagName
  if (e === 'value' && r !== 'PROGRESS' && !r.includes('-')) {
    const c = r === 'OPTION' ? t.getAttribute('value') || '' : t.value,
      l = a == null ? (t.type === 'checkbox' ? 'on' : '') : String(a)
    ;(c !== l || !('_value' in t)) && (t.value = l),
      a == null && t.removeAttribute(e),
      (t._value = a)
    return
  }
  let i = !1
  if (a === '' || a == null) {
    const c = typeof t[e]
    c === 'boolean'
      ? (a = rc(a))
      : a == null && c === 'string'
        ? ((a = ''), (i = !0))
        : c === 'number' && ((a = 0), (i = !0))
  }
  try {
    t[e] = a
  } catch {}
  i && t.removeAttribute(s || e)
}
function W1(t, e, a, n) {
  t.addEventListener(e, a, n)
}
function Rd(t, e, a, n) {
  t.removeEventListener(e, a, n)
}
const sr = Symbol('_vei')
function Ld(t, e, a, n, s = null) {
  const r = t[sr] || (t[sr] = {}),
    i = r[e]
  if (n && i) i.value = n
  else {
    const [c, l] = Md(e)
    if (n) {
      const h = (r[e] = Nd(n, s))
      W1(t, c, h, l)
    } else i && (Rd(t, c, i, l), (r[e] = void 0))
  }
}
const rr = /(?:Once|Passive|Capture)$/
function Md(t) {
  let e
  if (rr.test(t)) {
    e = {}
    let n
    for (; (n = t.match(rr)); )
      (t = t.slice(0, t.length - n[0].length)), (e[n[0].toLowerCase()] = !0)
  }
  return [t[2] === ':' ? t.slice(3) : D1(t.slice(2)), e]
}
let Tn = 0
const Vd = Promise.resolve(),
  $d = () => Tn || (Vd.then(() => (Tn = 0)), (Tn = Date.now()))
function Nd(t, e) {
  const a = (n) => {
    if (!n._vts) n._vts = Date.now()
    else if (n._vts <= a.attached) return
    Ce(Bd(n, a.value), e, 5, [n])
  }
  return (a.value = t), (a.attached = $d()), a
}
function Bd(t, e) {
  if (at(e)) {
    const a = t.stopImmediatePropagation
    return (
      (t.stopImmediatePropagation = () => {
        a.call(t), (t._stopped = !0)
      }),
      e.map((n) => (s) => !s._stopped && n && n(s))
    )
  } else return e
}
const ir = (t) =>
    t.charCodeAt(0) === 111 &&
    t.charCodeAt(1) === 110 &&
    t.charCodeAt(2) > 96 &&
    t.charCodeAt(2) < 123,
  Fd = (t, e, a, n, s, r) => {
    const i = s === 'svg'
    e === 'class'
      ? Td(t, n, i)
      : e === 'style'
        ? Od(t, a, n)
        : Ba(e)
          ? x2(e) || Ld(t, e, a, n, r)
          : (
                e[0] === '.'
                  ? ((e = e.slice(1)), !0)
                  : e[0] === '^'
                    ? ((e = e.slice(1)), !1)
                    : jd(t, e, n, i)
              )
            ? (nr(t, e, n),
              !t.tagName.includes('-') &&
                (e === 'value' || e === 'checked' || e === 'selected') &&
                ar(t, e, n, i, r, e !== 'value'))
            : t._isVueCE && (/[A-Z]/.test(e) || !It(n))
              ? nr(t, re(e), n, r, e)
              : (e === 'true-value'
                  ? (t._trueValue = n)
                  : e === 'false-value' && (t._falseValue = n),
                ar(t, e, n, i))
  }
function jd(t, e, a, n) {
  if (n) return !!(e === 'innerHTML' || e === 'textContent' || (e in t && ir(e) && rt(a)))
  if (
    e === 'spellcheck' ||
    e === 'draggable' ||
    e === 'translate' ||
    e === 'form' ||
    (e === 'list' && t.tagName === 'INPUT') ||
    (e === 'type' && t.tagName === 'TEXTAREA')
  )
    return !1
  if (e === 'width' || e === 'height') {
    const s = t.tagName
    if (s === 'IMG' || s === 'VIDEO' || s === 'CANVAS' || s === 'SOURCE') return !1
  }
  return ir(e) && It(a) ? !1 : e in t
}
const bl = new WeakMap(),
  _l = new WeakMap(),
  Ta = Symbol('_moveCb'),
  cr = Symbol('_enterCb'),
  Hd = (t) => (delete t.props.mode, t),
  Wd = Hd({
    name: 'TransitionGroup',
    props: Vt({}, vl, { tag: String, moveClass: String }),
    setup(t, { slots: e }) {
      const a = Z2(),
        n = Mc()
      let s, r
      return (
        W2(() => {
          if (!s.length) return
          const i = t.moveClass || `${t.name || 'v'}-move`
          if (!Yd(s[0].el, a.vnode.el, i)) return
          s.forEach(Ud), s.forEach(Gd)
          const c = s.filter(Kd)
          l2(),
            c.forEach((l) => {
              const h = l.el,
                o = h.style
              Oe(h, i), (o.transform = o.webkitTransform = o.transitionDuration = '')
              const d = (h[Ta] = (u) => {
                ;(u && u.target !== h) ||
                  ((!u || /transform$/.test(u.propertyName)) &&
                    (h.removeEventListener('transitionend', d), (h[Ta] = null), s1(h, i)))
              })
              h.addEventListener('transitionend', d)
            })
        }),
        () => {
          const i = ut(t),
            c = zl(i)
          let l = i.tag || xt
          if (((s = []), r))
            for (let h = 0; h < r.length; h++) {
              const o = r[h]
              o.el &&
                o.el instanceof Element &&
                (s.push(o), A1(o, A0(o, c, n, a)), bl.set(o, o.el.getBoundingClientRect()))
            }
          r = e.default ? F2(e.default()) : []
          for (let h = 0; h < r.length; h++) {
            const o = r[h]
            o.key != null && A1(o, A0(o, c, n, a))
          }
          return v(l, null, r)
        }
      )
    },
  }),
  X2 = Wd
function Ud(t) {
  const e = t.el
  e[Ta] && e[Ta](), e[cr] && e[cr]()
}
function Gd(t) {
  _l.set(t, t.el.getBoundingClientRect())
}
function Kd(t) {
  const e = bl.get(t),
    a = _l.get(t),
    n = e.left - a.left,
    s = e.top - a.top
  if (n || s) {
    const r = t.el.style
    return (
      (r.transform = r.webkitTransform = `translate(${n}px,${s}px)`),
      (r.transitionDuration = '0s'),
      t
    )
  }
}
function Yd(t, e, a) {
  const n = t.cloneNode(),
    s = t[Q1]
  s &&
    s.forEach((c) => {
      c.split(/\s+/).forEach((l) => l && n.classList.remove(l))
    }),
    a.split(/\s+/).forEach((c) => c && n.classList.add(c)),
    (n.style.display = 'none')
  const r = e.nodeType === 1 ? e : e.parentNode
  r.appendChild(n)
  const { hasTransform: i } = gl(n)
  return r.removeChild(n), i
}
const lr = (t) => {
  const e = t.props['onUpdate:modelValue'] || !1
  return at(e) ? (a) => oa(e, a) : e
}
function qd(t) {
  t.target.composing = !0
}
function or(t) {
  const e = t.target
  e.composing && ((e.composing = !1), e.dispatchEvent(new Event('input')))
}
const An = Symbol('_assign'),
  sm = {
    created(t, { modifiers: { lazy: e, trim: a, number: n } }, s) {
      t[An] = lr(s)
      const r = n || (s.props && s.props.type === 'number')
      W1(t, e ? 'change' : 'input', (i) => {
        if (i.target.composing) return
        let c = t.value
        a && (c = c.trim()), r && (c = qn(c)), t[An](c)
      }),
        a &&
          W1(t, 'change', () => {
            t.value = t.value.trim()
          }),
        e || (W1(t, 'compositionstart', qd), W1(t, 'compositionend', or), W1(t, 'change', or))
    },
    mounted(t, { value: e }) {
      t.value = e ?? ''
    },
    beforeUpdate(t, { value: e, oldValue: a, modifiers: { lazy: n, trim: s, number: r } }, i) {
      if (((t[An] = lr(i)), t.composing)) return
      const c = (r || t.type === 'number') && !/^0\d/.test(t.value) ? qn(t.value) : t.value,
        l = e ?? ''
      c !== l &&
        ((document.activeElement === t &&
          t.type !== 'range' &&
          ((n && e === a) || (s && t.value.trim() === l))) ||
          (t.value = l))
    },
  },
  Jd = ['ctrl', 'shift', 'alt', 'meta'],
  Zd = {
    stop: (t) => t.stopPropagation(),
    prevent: (t) => t.preventDefault(),
    self: (t) => t.target !== t.currentTarget,
    ctrl: (t) => !t.ctrlKey,
    shift: (t) => !t.shiftKey,
    alt: (t) => !t.altKey,
    meta: (t) => !t.metaKey,
    left: (t) => 'button' in t && t.button !== 0,
    middle: (t) => 'button' in t && t.button !== 1,
    right: (t) => 'button' in t && t.button !== 2,
    exact: (t, e) => Jd.some((a) => t[`${a}Key`] && !e.includes(a)),
  },
  rm = (t, e) => {
    const a = t._withMods || (t._withMods = {}),
      n = e.join('.')
    return (
      a[n] ||
      (a[n] = (s, ...r) => {
        for (let i = 0; i < e.length; i++) {
          const c = Zd[e[i]]
          if (c && c(s, e)) return
        }
        return t(s, ...r)
      })
    )
  },
  Xd = Vt({ patchProp: Fd }, kd)
let hr
function Qd() {
  return hr || (hr = qh(Xd))
}
const tu = (...t) => {
  const e = Qd().createApp(...t),
    { mount: a } = e
  return (
    (e.mount = (n) => {
      const s = au(n)
      if (!s) return
      const r = e._component
      !rt(r) && !r.render && !r.template && (r.template = s.innerHTML),
        s.nodeType === 1 && (s.textContent = '')
      const i = a(s, !1, eu(s))
      return (
        s instanceof Element && (s.removeAttribute('v-cloak'), s.setAttribute('data-v-app', '')), i
      )
    }),
    e
  )
}
function eu(t) {
  if (t instanceof SVGElement) return 'svg'
  if (typeof MathMLElement == 'function' && t instanceof MathMLElement) return 'mathml'
}
function au(t) {
  return It(t) ? document.querySelector(t) : t
}
function m1(t, e) {
  let a
  function n() {
    ;(a = I2()),
      a.run(() =>
        e.length
          ? e(() => {
              a == null || a.stop(), n()
            })
          : e(),
      )
  }
  nt(
    t,
    (s) => {
      s && !a ? n() : s || (a == null || a.stop(), (a = void 0))
    },
    { immediate: !0 },
  ),
    _e(() => {
      a == null || a.stop()
    })
}
const Pt = typeof window < 'u',
  Q2 = Pt && 'IntersectionObserver' in window,
  nu = Pt && ('ontouchstart' in window || window.navigator.maxTouchPoints > 0)
function su(t, e, a) {
  const n = e.length - 1
  if (n < 0) return t === void 0 ? a : t
  for (let s = 0; s < n; s++) {
    if (t == null) return a
    t = t[e[s]]
  }
  return t == null || t[e[n]] === void 0 ? a : t[e[n]]
}
function Xa(t, e) {
  if (t === e) return !0
  if (
    (t instanceof Date && e instanceof Date && t.getTime() !== e.getTime()) ||
    t !== Object(t) ||
    e !== Object(e)
  )
    return !1
  const a = Object.keys(t)
  return a.length !== Object.keys(e).length ? !1 : a.every((n) => Xa(t[n], e[n]))
}
function dr(t, e, a) {
  return t == null || !e || typeof e != 'string'
    ? a
    : t[e] !== void 0
      ? t[e]
      : ((e = e.replace(/\[(\w+)\]/g, '.$1')), (e = e.replace(/^\./, '')), su(t, e.split('.'), a))
}
function Qa(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0
  return Array.from({ length: t }, (a, n) => e + n)
}
function it(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'px'
  if (t == null || t === '') return
  const a = Number(t)
  return isNaN(a) ? String(t) : isFinite(a) ? `${a}${e}` : void 0
}
function ru(t) {
  return t !== null && typeof t == 'object' && !Array.isArray(t)
}
function ur(t) {
  let e
  return (
    t !== null &&
    typeof t == 'object' &&
    ((e = Object.getPrototypeOf(t)) === Object.prototype || e === null)
  )
}
function ts(t) {
  if (t && '$el' in t) {
    const e = t.$el
    return (e == null ? void 0 : e.nodeType) === Node.TEXT_NODE ? e.nextElementSibling : e
  }
  return t
}
const pr = Object.freeze({
  enter: 13,
  tab: 9,
  delete: 46,
  esc: 27,
  space: 32,
  up: 38,
  down: 40,
  left: 37,
  right: 39,
  end: 35,
  home: 36,
  del: 46,
  backspace: 8,
  insert: 45,
  pageup: 33,
  pagedown: 34,
  shift: 16,
})
function In(t, e) {
  return e.every((a) => t.hasOwnProperty(a))
}
function Sl(t, e) {
  const a = {}
  for (const n of e) Object.prototype.hasOwnProperty.call(t, n) && (a[n] = t[n])
  return a
}
function mr(t, e, a) {
  const n = Object.create(null),
    s = Object.create(null)
  for (const r in t)
    e.some((i) => (i instanceof RegExp ? i.test(r) : i === r)) ? (n[r] = t[r]) : (s[r] = t[r])
  return [n, s]
}
function ke(t, e) {
  const a = { ...t }
  return e.forEach((n) => delete a[n]), a
}
const wl = /^on[^a-z]/,
  Cl = (t) => wl.test(t),
  iu = [
    'onAfterscriptexecute',
    'onAnimationcancel',
    'onAnimationend',
    'onAnimationiteration',
    'onAnimationstart',
    'onAuxclick',
    'onBeforeinput',
    'onBeforescriptexecute',
    'onChange',
    'onClick',
    'onCompositionend',
    'onCompositionstart',
    'onCompositionupdate',
    'onContextmenu',
    'onCopy',
    'onCut',
    'onDblclick',
    'onFocusin',
    'onFocusout',
    'onFullscreenchange',
    'onFullscreenerror',
    'onGesturechange',
    'onGestureend',
    'onGesturestart',
    'onGotpointercapture',
    'onInput',
    'onKeydown',
    'onKeypress',
    'onKeyup',
    'onLostpointercapture',
    'onMousedown',
    'onMousemove',
    'onMouseout',
    'onMouseover',
    'onMouseup',
    'onMousewheel',
    'onPaste',
    'onPointercancel',
    'onPointerdown',
    'onPointerenter',
    'onPointerleave',
    'onPointermove',
    'onPointerout',
    'onPointerover',
    'onPointerup',
    'onReset',
    'onSelect',
    'onSubmit',
    'onTouchcancel',
    'onTouchend',
    'onTouchmove',
    'onTouchstart',
    'onTransitioncancel',
    'onTransitionend',
    'onTransitionrun',
    'onTransitionstart',
    'onWheel',
  ]
function cu(t) {
  const [e, a] = mr(t, [wl]),
    n = ke(e, iu),
    [s, r] = mr(a, ['class', 'style', 'id', /^data-/])
  return Object.assign(s, e), Object.assign(r, n), [s, r]
}
function Ve(t) {
  return t == null ? [] : Array.isArray(t) ? t : [t]
}
function O1(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
    a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1
  return Math.max(e, Math.min(a, t))
}
function fr(t, e) {
  let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '0'
  return t + a.repeat(Math.max(0, e - t.length))
}
function vr(t, e) {
  return (
    (arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '0').repeat(
      Math.max(0, e - t.length),
    ) + t
  )
}
function lu(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1
  const a = []
  let n = 0
  for (; n < t.length; ) a.push(t.substr(n, e)), (n += e)
  return a
}
function Kt() {
  let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    a = arguments.length > 2 ? arguments[2] : void 0
  const n = {}
  for (const s in t) n[s] = t[s]
  for (const s in e) {
    const r = t[s],
      i = e[s]
    if (ur(r) && ur(i)) {
      n[s] = Kt(r, i, a)
      continue
    }
    if (a && Array.isArray(r) && Array.isArray(i)) {
      n[s] = a(r, i)
      continue
    }
    n[s] = i
  }
  return n
}
function kl(t) {
  return t.map((e) => (e.type === xt ? kl(e.children) : e)).flat()
}
function x1() {
  let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ''
  if (x1.cache.has(t)) return x1.cache.get(t)
  const e = t
    .replace(/[^a-z]/gi, '-')
    .replace(/\B([A-Z])/g, '-$1')
    .toLowerCase()
  return x1.cache.set(t, e), e
}
x1.cache = new Map()
function G1(t, e) {
  if (!e || typeof e != 'object') return []
  if (Array.isArray(e)) return e.map((a) => G1(t, a)).flat(1)
  if (e.suspense) return G1(t, e.ssContent)
  if (Array.isArray(e.children)) return e.children.map((a) => G1(t, a)).flat(1)
  if (e.component) {
    if (Object.getOwnPropertySymbols(e.component.provides).includes(t)) return [e.component]
    if (e.component.subTree) return G1(t, e.component.subTree).flat(1)
  }
  return []
}
function es(t) {
  const e = Lt({}),
    a = _(t)
  return (
    fe(
      () => {
        for (const n in a.value) e[n] = a.value[n]
      },
      { flush: 'sync' },
    ),
    N2(e)
  )
}
function Aa(t, e) {
  return t.includes(e)
}
function xl(t) {
  return t[2].toLowerCase() + t.slice(3)
}
const h1 = () => [Function, Array]
function zr(t, e) {
  return (
    (e = 'on' + Xe(e)),
    !!(t[e] || t[`${e}Once`] || t[`${e}Capture`] || t[`${e}OnceCapture`] || t[`${e}CaptureOnce`])
  )
}
function El(t) {
  for (var e = arguments.length, a = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
    a[n - 1] = arguments[n]
  if (Array.isArray(t)) for (const s of t) s(...a)
  else typeof t == 'function' && t(...a)
}
function o2(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0
  const a = ['button', '[href]', 'input:not([type="hidden"])', 'select', 'textarea', '[tabindex]']
    .map((n) => `${n}${e ? ':not([tabindex="-1"])' : ''}:not([disabled])`)
    .join(', ')
  return [...t.querySelectorAll(a)]
}
function Pl(t, e, a) {
  let n,
    s = t.indexOf(document.activeElement)
  const r = e === 'next' ? 1 : -1
  do (s += r), (n = t[s])
  while (
    (!n || n.offsetParent == null || !((a == null ? void 0 : a(n)) ?? !0)) &&
    s < t.length &&
    s >= 0
  )
  return n
}
function ma(t, e) {
  var n, s, r, i
  const a = o2(t)
  if (!e)
    (t === document.activeElement || !t.contains(document.activeElement)) &&
      ((n = a[0]) == null || n.focus())
  else if (e === 'first') (s = a[0]) == null || s.focus()
  else if (e === 'last') (r = a.at(-1)) == null || r.focus()
  else if (typeof e == 'number') (i = a[e]) == null || i.focus()
  else {
    const c = Pl(a, e)
    c ? c.focus() : ma(t, e === 'next' ? 'first' : 'last')
  }
}
function ou(t, e) {
  if (!(Pt && typeof CSS < 'u' && typeof CSS.supports < 'u' && CSS.supports(`selector(${e})`)))
    return null
  try {
    return !!t && t.matches(e)
  } catch {
    return null
  }
}
function hu(t, e) {
  if (!Pt || t === 0) return e(), () => {}
  const a = window.setTimeout(e, t)
  return () => window.clearTimeout(a)
}
function du(t, e) {
  const a = t.clientX,
    n = t.clientY,
    s = e.getBoundingClientRect(),
    r = s.left,
    i = s.top,
    c = s.right,
    l = s.bottom
  return a >= r && a <= c && n >= i && n <= l
}
function Ia() {
  const t = ot(),
    e = (a) => {
      t.value = a
    }
  return (
    Object.defineProperty(e, 'value', {
      enumerable: !0,
      get: () => t.value,
      set: (a) => (t.value = a),
    }),
    Object.defineProperty(e, 'el', { enumerable: !0, get: () => ts(t.value) }),
    e
  )
}
const Tl = ['top', 'bottom'],
  uu = ['start', 'end', 'left', 'right']
function h2(t, e) {
  let [a, n] = t.split(' ')
  return (
    n || (n = Aa(Tl, a) ? 'start' : Aa(uu, a) ? 'top' : 'center'),
    { side: gr(a, e), align: gr(n, e) }
  )
}
function gr(t, e) {
  return t === 'start' ? (e ? 'right' : 'left') : t === 'end' ? (e ? 'left' : 'right') : t
}
function On(t) {
  return {
    side: { center: 'center', top: 'bottom', bottom: 'top', left: 'right', right: 'left' }[t.side],
    align: t.align,
  }
}
function Dn(t) {
  return {
    side: t.side,
    align: { center: 'center', top: 'bottom', bottom: 'top', left: 'right', right: 'left' }[
      t.align
    ],
  }
}
function yr(t) {
  return { side: t.align, align: t.side }
}
function br(t) {
  return Aa(Tl, t.side) ? 'y' : 'x'
}
class E1 {
  constructor(e) {
    let { x: a, y: n, width: s, height: r } = e
    ;(this.x = a), (this.y = n), (this.width = s), (this.height = r)
  }
  get top() {
    return this.y
  }
  get bottom() {
    return this.y + this.height
  }
  get left() {
    return this.x
  }
  get right() {
    return this.x + this.width
  }
}
function _r(t, e) {
  return {
    x: { before: Math.max(0, e.left - t.left), after: Math.max(0, t.right - e.right) },
    y: { before: Math.max(0, e.top - t.top), after: Math.max(0, t.bottom - e.bottom) },
  }
}
function Al(t) {
  return Array.isArray(t)
    ? new E1({ x: t[0], y: t[1], width: 0, height: 0 })
    : t.getBoundingClientRect()
}
function as(t) {
  const e = t.getBoundingClientRect(),
    a = getComputedStyle(t),
    n = a.transform
  if (n) {
    let s, r, i, c, l
    if (n.startsWith('matrix3d('))
      (s = n.slice(9, -1).split(/, /)),
        (r = Number(s[0])),
        (i = Number(s[5])),
        (c = Number(s[12])),
        (l = Number(s[13]))
    else if (n.startsWith('matrix('))
      (s = n.slice(7, -1).split(/, /)),
        (r = Number(s[0])),
        (i = Number(s[3])),
        (c = Number(s[4])),
        (l = Number(s[5]))
    else return new E1(e)
    const h = a.transformOrigin,
      o = e.x - c - (1 - r) * parseFloat(h),
      d = e.y - l - (1 - i) * parseFloat(h.slice(h.indexOf(' ') + 1)),
      u = r ? e.width / r : t.offsetWidth + 1,
      p = i ? e.height / i : t.offsetHeight + 1
    return new E1({ x: o, y: d, width: u, height: p })
  } else return new E1(e)
}
function K1(t, e, a) {
  if (typeof t.animate > 'u') return { finished: Promise.resolve() }
  let n
  try {
    n = t.animate(e, a)
  } catch {
    return { finished: Promise.resolve() }
  }
  return (
    typeof n.finished > 'u' &&
      (n.finished = new Promise((s) => {
        n.onfinish = () => {
          s(n)
        }
      })),
    n
  )
}
const fa = new WeakMap()
function pu(t, e) {
  Object.keys(e).forEach((a) => {
    if (Cl(a)) {
      const n = xl(a),
        s = fa.get(t)
      if (e[a] == null)
        s == null ||
          s.forEach((r) => {
            const [i, c] = r
            i === n && (t.removeEventListener(n, c), s.delete(r))
          })
      else if (!s || ![...s].some((r) => r[0] === n && r[1] === e[a])) {
        t.addEventListener(n, e[a])
        const r = s || new Set()
        r.add([n, e[a]]), fa.has(t) || fa.set(t, r)
      }
    } else e[a] == null ? t.removeAttribute(a) : t.setAttribute(a, e[a])
  })
}
function mu(t, e) {
  Object.keys(e).forEach((a) => {
    if (Cl(a)) {
      const n = xl(a),
        s = fa.get(t)
      s == null ||
        s.forEach((r) => {
          const [i, c] = r
          i === n && (t.removeEventListener(n, c), s.delete(r))
        })
    } else t.removeAttribute(a)
  })
}
const N1 = 2.4,
  Sr = 0.2126729,
  wr = 0.7151522,
  Cr = 0.072175,
  fu = 0.55,
  vu = 0.58,
  zu = 0.57,
  gu = 0.62,
  ra = 0.03,
  kr = 1.45,
  yu = 5e-4,
  bu = 1.25,
  _u = 1.25,
  Su = 0.078,
  xr = 12.82051282051282,
  ia = 0.06,
  wu = 0.001
function Er(t, e) {
  const a = (t.r / 255) ** N1,
    n = (t.g / 255) ** N1,
    s = (t.b / 255) ** N1,
    r = (e.r / 255) ** N1,
    i = (e.g / 255) ** N1,
    c = (e.b / 255) ** N1
  let l = a * Sr + n * wr + s * Cr,
    h = r * Sr + i * wr + c * Cr
  if ((l <= ra && (l += (ra - l) ** kr), h <= ra && (h += (ra - h) ** kr), Math.abs(h - l) < yu))
    return 0
  let o
  if (h > l) {
    const d = (h ** fu - l ** vu) * bu
    o = d < wu ? 0 : d < Su ? d - d * xr * ia : d - ia
  } else {
    const d = (h ** gu - l ** zu) * _u
    o = d > -0.001 ? 0 : d > -0.078 ? d - d * xr * ia : d + ia
  }
  return o * 100
}
const Oa = 0.20689655172413793,
  Cu = (t) => (t > Oa ** 3 ? Math.cbrt(t) : t / (3 * Oa ** 2) + 4 / 29),
  ku = (t) => (t > Oa ? t ** 3 : 3 * Oa ** 2 * (t - 4 / 29))
function Il(t) {
  const e = Cu,
    a = e(t[1])
  return [116 * a - 16, 500 * (e(t[0] / 0.95047) - a), 200 * (a - e(t[2] / 1.08883))]
}
function Ol(t) {
  const e = ku,
    a = (t[0] + 16) / 116
  return [e(a + t[1] / 500) * 0.95047, e(a), e(a - t[2] / 200) * 1.08883]
}
const xu = [
    [3.2406, -1.5372, -0.4986],
    [-0.9689, 1.8758, 0.0415],
    [0.0557, -0.204, 1.057],
  ],
  Eu = (t) => (t <= 0.0031308 ? t * 12.92 : 1.055 * t ** (1 / 2.4) - 0.055),
  Pu = [
    [0.4124, 0.3576, 0.1805],
    [0.2126, 0.7152, 0.0722],
    [0.0193, 0.1192, 0.9505],
  ],
  Tu = (t) => (t <= 0.04045 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4)
function Dl(t) {
  const e = Array(3),
    a = Eu,
    n = xu
  for (let s = 0; s < 3; ++s)
    e[s] = Math.round(O1(a(n[s][0] * t[0] + n[s][1] * t[1] + n[s][2] * t[2])) * 255)
  return { r: e[0], g: e[1], b: e[2] }
}
function ns(t) {
  let { r: e, g: a, b: n } = t
  const s = [0, 0, 0],
    r = Tu,
    i = Pu
  ;(e = r(e / 255)), (a = r(a / 255)), (n = r(n / 255))
  for (let c = 0; c < 3; ++c) s[c] = i[c][0] * e + i[c][1] * a + i[c][2] * n
  return s
}
function d2(t) {
  return !!t && /^(#|var\(--|(rgb|hsl)a?\()/.test(t)
}
function Au(t) {
  return d2(t) && !/^((rgb|hsl)a?\()?var\(--/.test(t)
}
const Pr = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/,
  Iu = {
    rgb: (t, e, a, n) => ({ r: t, g: e, b: a, a: n }),
    rgba: (t, e, a, n) => ({ r: t, g: e, b: a, a: n }),
    hsl: (t, e, a, n) => Tr({ h: t, s: e, l: a, a: n }),
    hsla: (t, e, a, n) => Tr({ h: t, s: e, l: a, a: n }),
    hsv: (t, e, a, n) => D0({ h: t, s: e, v: a, a: n }),
    hsva: (t, e, a, n) => D0({ h: t, s: e, v: a, a: n }),
  }
function Le(t) {
  if (typeof t == 'number') return { r: (t & 16711680) >> 16, g: (t & 65280) >> 8, b: t & 255 }
  if (typeof t == 'string' && Pr.test(t)) {
    const { groups: e } = t.match(Pr),
      { fn: a, values: n } = e,
      s = n
        .split(/,\s*/)
        .map((r) =>
          r.endsWith('%') && ['hsl', 'hsla', 'hsv', 'hsva'].includes(a)
            ? parseFloat(r) / 100
            : parseFloat(r),
        )
    return Iu[a](...s)
  } else if (typeof t == 'string') {
    let e = t.startsWith('#') ? t.slice(1) : t
    return (
      [3, 4].includes(e.length)
        ? (e = e
            .split('')
            .map((a) => a + a)
            .join(''))
        : [6, 8].includes(e.length),
      Du(e)
    )
  } else if (typeof t == 'object') {
    if (In(t, ['r', 'g', 'b'])) return t
    if (In(t, ['h', 's', 'l'])) return D0(Rl(t))
    if (In(t, ['h', 's', 'v'])) return D0(t)
  }
  throw new TypeError(`Invalid color: ${t == null ? t : String(t) || t.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`)
}
function D0(t) {
  const { h: e, s: a, v: n, a: s } = t,
    r = (c) => {
      const l = (c + e / 60) % 6
      return n - n * a * Math.max(Math.min(l, 4 - l, 1), 0)
    },
    i = [r(5), r(3), r(1)].map((c) => Math.round(c * 255))
  return { r: i[0], g: i[1], b: i[2], a: s }
}
function Tr(t) {
  return D0(Rl(t))
}
function Rl(t) {
  const { h: e, s: a, l: n, a: s } = t,
    r = n + a * Math.min(n, 1 - n),
    i = r === 0 ? 0 : 2 - (2 * n) / r
  return { h: e, s: i, v: r, a: s }
}
function ca(t) {
  const e = Math.round(t).toString(16)
  return ('00'.substr(0, 2 - e.length) + e).toUpperCase()
}
function Ou(t) {
  let { r: e, g: a, b: n, a: s } = t
  return `#${[ca(e), ca(a), ca(n), s !== void 0 ? ca(Math.round(s * 255)) : ''].join('')}`
}
function Du(t) {
  t = Ru(t)
  let [e, a, n, s] = lu(t, 2).map((r) => parseInt(r, 16))
  return (s = s === void 0 ? s : s / 255), { r: e, g: a, b: n, a: s }
}
function Ru(t) {
  return (
    t.startsWith('#') && (t = t.slice(1)),
    (t = t.replace(/([^0-9a-f])/gi, 'F')),
    (t.length === 3 || t.length === 4) &&
      (t = t
        .split('')
        .map((e) => e + e)
        .join('')),
    t.length !== 6 && (t = fr(fr(t, 6), 8, 'F')),
    t
  )
}
function Lu(t, e) {
  const a = Il(ns(t))
  return (a[0] = a[0] + e * 10), Dl(Ol(a))
}
function Mu(t, e) {
  const a = Il(ns(t))
  return (a[0] = a[0] - e * 10), Dl(Ol(a))
}
function Vu(t) {
  const e = Le(t)
  return ns(e)[1]
}
function Ll(t) {
  const e = Math.abs(Er(Le(0), Le(t)))
  return Math.abs(Er(Le(16777215), Le(t))) > Math.min(e, 50) ? '#fff' : '#000'
}
function G(t, e) {
  return (a) =>
    Object.keys(t).reduce((n, s) => {
      const i =
        typeof t[s] == 'object' && t[s] != null && !Array.isArray(t[s]) ? t[s] : { type: t[s] }
      return (
        a && s in a ? (n[s] = { ...i, default: a[s] }) : (n[s] = i),
        e && !n[s].source && (n[s].source = e),
        n
      )
    }, {})
}
const _t = G(
  { class: [String, Array, Object], style: { type: [String, Array, Object], default: null } },
  'component',
)
function Rt(t, e) {
  const a = Z2()
  if (!a) throw new Error(`[Vuetify] ${t} must be called from inside a setup function`)
  return a
}
function Fe() {
  let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 'composables'
  const e = Rt(t).type
  return x1((e == null ? void 0 : e.aliasName) || (e == null ? void 0 : e.name))
}
let Ml = 0,
  va = new WeakMap()
function t1() {
  const t = Rt('getUid')
  if (va.has(t)) return va.get(t)
  {
    const e = Ml++
    return va.set(t, e), e
  }
}
t1.reset = () => {
  ;(Ml = 0), (va = new WeakMap())
}
function $u(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Rt('injectSelf')
  const { provides: a } = e
  if (a && t in a) return a[t]
}
const t0 = Symbol.for('vuetify:defaults')
function Nu(t) {
  return ct(t)
}
function ss() {
  const t = yt(t0)
  if (!t) throw new Error('[Vuetify] Could not find defaults instance')
  return t
}
function tn(t, e) {
  const a = ss(),
    n = ct(t),
    s = _(() => {
      if (Ot(e == null ? void 0 : e.disabled)) return a.value
      const i = Ot(e == null ? void 0 : e.scoped),
        c = Ot(e == null ? void 0 : e.reset),
        l = Ot(e == null ? void 0 : e.root)
      if (n.value == null && !(i || c || l)) return a.value
      let h = Kt(n.value, { prev: a.value })
      if (i) return h
      if (c || l) {
        const o = Number(c || 1 / 0)
        for (let d = 0; d <= o && !(!h || !('prev' in h)); d++) h = h.prev
        return h && typeof l == 'string' && l in h && (h = Kt(Kt(h, { prev: h }), h[l])), h
      }
      return h.prev ? Kt(h.prev, h) : h
    })
  return me(t0, s), s
}
function Bu(t, e) {
  var a, n
  return (
    typeof ((a = t.props) == null ? void 0 : a[e]) < 'u' ||
    typeof ((n = t.props) == null ? void 0 : n[x1(e)]) < 'u'
  )
}
function Fu() {
  let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    e = arguments.length > 1 ? arguments[1] : void 0,
    a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ss()
  const n = Rt('useDefaults')
  if (((e = e ?? n.type.name ?? n.type.__name), !e))
    throw new Error('[Vuetify] Could not determine component name')
  const s = _(() => {
      var l
      return (l = a.value) == null ? void 0 : l[t._as ?? e]
    }),
    r = new Proxy(t, {
      get(l, h) {
        var d, u, p, f, m, g, S
        const o = Reflect.get(l, h)
        return h === 'class' || h === 'style'
          ? [(d = s.value) == null ? void 0 : d[h], o].filter((b) => b != null)
          : typeof h == 'string' && !Bu(n.vnode, h)
            ? ((u = s.value) == null ? void 0 : u[h]) !== void 0
              ? (p = s.value) == null
                ? void 0
                : p[h]
              : ((m = (f = a.value) == null ? void 0 : f.global) == null ? void 0 : m[h]) !== void 0
                ? (S = (g = a.value) == null ? void 0 : g.global) == null
                  ? void 0
                  : S[h]
                : o
            : o
      },
    }),
    i = ot()
  fe(() => {
    if (s.value) {
      const l = Object.entries(s.value).filter((h) => {
        let [o] = h
        return o.startsWith(o[0].toUpperCase())
      })
      i.value = l.length ? Object.fromEntries(l) : void 0
    } else i.value = void 0
  })
  function c() {
    const l = $u(t0, n)
    me(
      t0,
      _(() =>
        i.value ? Kt((l == null ? void 0 : l.value) ?? {}, i.value) : l == null ? void 0 : l.value,
      ),
    )
  }
  return { props: r, provideSubDefaults: c }
}
function W0(t) {
  if (((t._setup = t._setup ?? t.setup), !t.name)) return t
  if (t._setup) {
    t.props = G(t.props ?? {}, t.name)()
    const e = Object.keys(t.props).filter((a) => a !== 'class' && a !== 'style')
    ;(t.filterProps = function (n) {
      return Sl(n, e)
    }),
      (t.props._as = String),
      (t.setup = function (n, s) {
        const r = ss()
        if (!r.value) return t._setup(n, s)
        const { props: i, provideSubDefaults: c } = Fu(n, n._as ?? t.name, r),
          l = t._setup(i, s)
        return c(), l
      })
  }
  return t
}
function tt() {
  let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0
  return (e) => (t ? W0 : R1)(e)
}
function rs(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'div',
    a = arguments.length > 2 ? arguments[2] : void 0
  return tt()({
    name: a ?? Xe(re(t.replace(/__/g, '-'))),
    props: { tag: { type: String, default: e }, ..._t() },
    setup(n, s) {
      let { slots: r } = s
      return () => {
        var i
        return Be(
          n.tag,
          { class: [t, n.class], style: n.style },
          (i = r.default) == null ? void 0 : i.call(r),
        )
      }
    },
  })
}
function Vl(t) {
  if (typeof t.getRootNode != 'function') {
    for (; t.parentNode; ) t = t.parentNode
    return t !== document ? null : document
  }
  const e = t.getRootNode()
  return e !== document && e.getRootNode({ composed: !0 }) !== document ? null : e
}
const Da = 'cubic-bezier(0.4, 0, 0.2, 1)',
  ju = 'cubic-bezier(0.0, 0, 0.2, 1)',
  Hu = 'cubic-bezier(0.4, 0, 1, 1)'
function Wu(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1
  for (; t; ) {
    if (e ? Uu(t) : is(t)) return t
    t = t.parentElement
  }
  return document.scrollingElement
}
function Ra(t, e) {
  const a = []
  if (e && t && !e.contains(t)) return a
  for (; t && (is(t) && a.push(t), t !== e); ) t = t.parentElement
  return a
}
function is(t) {
  if (!t || t.nodeType !== Node.ELEMENT_NODE) return !1
  const e = window.getComputedStyle(t)
  return e.overflowY === 'scroll' || (e.overflowY === 'auto' && t.scrollHeight > t.clientHeight)
}
function Uu(t) {
  if (!t || t.nodeType !== Node.ELEMENT_NODE) return !1
  const e = window.getComputedStyle(t)
  return ['scroll', 'auto'].includes(e.overflowY)
}
function Gu(t) {
  for (; t; ) {
    if (window.getComputedStyle(t).position === 'fixed') return !0
    t = t.offsetParent
  }
  return !1
}
function ht(t) {
  const e = Rt('useRender')
  e.render = t
}
function Dt(t, e, a) {
  let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (d) => d,
    s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (d) => d
  const r = Rt('useProxiedModel'),
    i = ct(t[e] !== void 0 ? t[e] : a),
    c = x1(e),
    h = _(
      c !== e
        ? () => {
            var d, u, p, f
            return (
              t[e],
              !!(
                (((d = r.vnode.props) != null && d.hasOwnProperty(e)) ||
                  ((u = r.vnode.props) != null && u.hasOwnProperty(c))) &&
                (((p = r.vnode.props) != null && p.hasOwnProperty(`onUpdate:${e}`)) ||
                  ((f = r.vnode.props) != null && f.hasOwnProperty(`onUpdate:${c}`)))
              )
            )
          }
        : () => {
            var d, u
            return (
              t[e],
              !!(
                (d = r.vnode.props) != null &&
                d.hasOwnProperty(e) &&
                (u = r.vnode.props) != null &&
                u.hasOwnProperty(`onUpdate:${e}`)
              )
            )
          },
    )
  m1(
    () => !h.value,
    () => {
      nt(
        () => t[e],
        (d) => {
          i.value = d
        },
      )
    },
  )
  const o = _({
    get() {
      const d = t[e]
      return n(h.value ? d : i.value)
    },
    set(d) {
      const u = s(d),
        p = ut(h.value ? t[e] : i.value)
      p === u || n(p) === d || ((i.value = u), r == null || r.emit(`update:${e}`, u))
    },
  })
  return Object.defineProperty(o, 'externalValue', { get: () => (h.value ? t[e] : i.value) }), o
}
const Ku = {
    badge: 'Badge',
    open: 'Open',
    close: 'Close',
    dismiss: 'Dismiss',
    confirmEdit: { ok: 'OK', cancel: 'Cancel' },
    dataIterator: { noResultsText: 'No matching records found', loadingText: 'Loading items...' },
    dataTable: {
      itemsPerPageText: 'Rows per page:',
      ariaLabel: {
        sortDescending: 'Sorted descending.',
        sortAscending: 'Sorted ascending.',
        sortNone: 'Not sorted.',
        activateNone: 'Activate to remove sorting.',
        activateDescending: 'Activate to sort descending.',
        activateAscending: 'Activate to sort ascending.',
      },
      sortBy: 'Sort by',
    },
    dataFooter: {
      itemsPerPageText: 'Items per page:',
      itemsPerPageAll: 'All',
      nextPage: 'Next page',
      prevPage: 'Previous page',
      firstPage: 'First page',
      lastPage: 'Last page',
      pageText: '{0}-{1} of {2}',
    },
    dateRangeInput: { divider: 'to' },
    datePicker: {
      itemsSelected: '{0} selected',
      range: { title: 'Select dates', header: 'Enter dates' },
      title: 'Select date',
      header: 'Enter date',
      input: { placeholder: 'Enter date' },
    },
    noDataText: 'No data available',
    carousel: {
      prev: 'Previous visual',
      next: 'Next visual',
      ariaLabel: { delimiter: 'Carousel slide {0} of {1}' },
    },
    calendar: { moreEvents: '{0} more', today: 'Today' },
    input: {
      clear: 'Clear {0}',
      prependAction: '{0} prepended action',
      appendAction: '{0} appended action',
      otp: 'Please enter OTP character {0}',
    },
    fileInput: { counter: '{0} files', counterSize: '{0} files ({1} in total)' },
    fileUpload: { title: 'Drag and drop files here', divider: 'or', browse: 'Browse Files' },
    timePicker: { am: 'AM', pm: 'PM', title: 'Select Time' },
    pagination: {
      ariaLabel: {
        root: 'Pagination Navigation',
        next: 'Next page',
        previous: 'Previous page',
        page: 'Go to page {0}',
        currentPage: 'Page {0}, Current page',
        first: 'First page',
        last: 'Last page',
      },
    },
    stepper: { next: 'Next', prev: 'Previous' },
    rating: { ariaLabel: { item: 'Rating {0} of {1}' } },
    loading: 'Loading...',
    infiniteScroll: { loadMore: 'Load more', empty: 'No more' },
  },
  Ar = '$vuetify.',
  Ir = (t, e) => t.replace(/\{(\d+)\}/g, (a, n) => String(e[Number(n)])),
  $l = (t, e, a) =>
    function (n) {
      for (var s = arguments.length, r = new Array(s > 1 ? s - 1 : 0), i = 1; i < s; i++)
        r[i - 1] = arguments[i]
      if (!n.startsWith(Ar)) return Ir(n, r)
      const c = n.replace(Ar, ''),
        l = t.value && a.value[t.value],
        h = e.value && a.value[e.value]
      let o = dr(l, c, null)
      return (
        o || (`${n}${t.value}`, (o = dr(h, c, null))),
        o || (o = n),
        typeof o != 'string' && (o = n),
        Ir(o, r)
      )
    }
function Nl(t, e) {
  return (a, n) => new Intl.NumberFormat([t.value, e.value], n).format(a)
}
function Rn(t, e, a) {
  const n = Dt(t, e, t[e] ?? a.value)
  return (
    (n.value = t[e] ?? a.value),
    nt(a, (s) => {
      t[e] == null && (n.value = a.value)
    }),
    n
  )
}
function Bl(t) {
  return (e) => {
    const a = Rn(e, 'locale', t.current),
      n = Rn(e, 'fallback', t.fallback),
      s = Rn(e, 'messages', t.messages)
    return {
      name: 'vuetify',
      current: a,
      fallback: n,
      messages: s,
      t: $l(a, n, s),
      n: Nl(a, n),
      provide: Bl({ current: a, fallback: n, messages: s }),
    }
  }
}
function Yu(t) {
  const e = ot((t == null ? void 0 : t.locale) ?? 'en'),
    a = ot((t == null ? void 0 : t.fallback) ?? 'en'),
    n = ct({ en: Ku, ...(t == null ? void 0 : t.messages) })
  return {
    name: 'vuetify',
    current: e,
    fallback: a,
    messages: n,
    t: $l(e, a, n),
    n: Nl(e, a),
    provide: Bl({ current: e, fallback: a, messages: n }),
  }
}
const La = Symbol.for('vuetify:locale')
function qu(t) {
  return t.name != null
}
function Ju(t) {
  const e =
      t != null && t.adapter && qu(t == null ? void 0 : t.adapter)
        ? t == null
          ? void 0
          : t.adapter
        : Yu(t),
    a = Xu(e, t)
  return { ...e, ...a }
}
function U0() {
  const t = yt(La)
  if (!t) throw new Error('[Vuetify] Could not find injected locale instance')
  return t
}
function Zu() {
  return {
    af: !1,
    ar: !0,
    bg: !1,
    ca: !1,
    ckb: !1,
    cs: !1,
    de: !1,
    el: !1,
    en: !1,
    es: !1,
    et: !1,
    fa: !0,
    fi: !1,
    fr: !1,
    hr: !1,
    hu: !1,
    he: !0,
    id: !1,
    it: !1,
    ja: !1,
    km: !1,
    ko: !1,
    lv: !1,
    lt: !1,
    nl: !1,
    no: !1,
    pl: !1,
    pt: !1,
    ro: !1,
    ru: !1,
    sk: !1,
    sl: !1,
    srCyrl: !1,
    srLatn: !1,
    sv: !1,
    th: !1,
    tr: !1,
    az: !1,
    uk: !1,
    vi: !1,
    zhHans: !1,
    zhHant: !1,
  }
}
function Xu(t, e) {
  const a = ct((e == null ? void 0 : e.rtl) ?? Zu()),
    n = _(() => a.value[t.current.value] ?? !1)
  return { isRtl: n, rtl: a, rtlClasses: _(() => `v-locale--is-${n.value ? 'rtl' : 'ltr'}`) }
}
function e1() {
  const t = yt(La)
  if (!t) throw new Error('[Vuetify] Could not find injected rtl instance')
  return { isRtl: t.isRtl, rtlClasses: t.rtlClasses }
}
const en = {
  '001': 1,
  AD: 1,
  AE: 6,
  AF: 6,
  AG: 0,
  AI: 1,
  AL: 1,
  AM: 1,
  AN: 1,
  AR: 1,
  AS: 0,
  AT: 1,
  AU: 1,
  AX: 1,
  AZ: 1,
  BA: 1,
  BD: 0,
  BE: 1,
  BG: 1,
  BH: 6,
  BM: 1,
  BN: 1,
  BR: 0,
  BS: 0,
  BT: 0,
  BW: 0,
  BY: 1,
  BZ: 0,
  CA: 0,
  CH: 1,
  CL: 1,
  CM: 1,
  CN: 1,
  CO: 0,
  CR: 1,
  CY: 1,
  CZ: 1,
  DE: 1,
  DJ: 6,
  DK: 1,
  DM: 0,
  DO: 0,
  DZ: 6,
  EC: 1,
  EE: 1,
  EG: 6,
  ES: 1,
  ET: 0,
  FI: 1,
  FJ: 1,
  FO: 1,
  FR: 1,
  GB: 1,
  'GB-alt-variant': 0,
  GE: 1,
  GF: 1,
  GP: 1,
  GR: 1,
  GT: 0,
  GU: 0,
  HK: 0,
  HN: 0,
  HR: 1,
  HU: 1,
  ID: 0,
  IE: 1,
  IL: 0,
  IN: 0,
  IQ: 6,
  IR: 6,
  IS: 1,
  IT: 1,
  JM: 0,
  JO: 6,
  JP: 0,
  KE: 0,
  KG: 1,
  KH: 0,
  KR: 0,
  KW: 6,
  KZ: 1,
  LA: 0,
  LB: 1,
  LI: 1,
  LK: 1,
  LT: 1,
  LU: 1,
  LV: 1,
  LY: 6,
  MC: 1,
  MD: 1,
  ME: 1,
  MH: 0,
  MK: 1,
  MM: 0,
  MN: 1,
  MO: 0,
  MQ: 1,
  MT: 0,
  MV: 5,
  MX: 0,
  MY: 1,
  MZ: 0,
  NI: 0,
  NL: 1,
  NO: 1,
  NP: 0,
  NZ: 1,
  OM: 6,
  PA: 0,
  PE: 0,
  PH: 0,
  PK: 0,
  PL: 1,
  PR: 0,
  PT: 0,
  PY: 0,
  QA: 6,
  RE: 1,
  RO: 1,
  RS: 1,
  RU: 1,
  SA: 0,
  SD: 6,
  SE: 1,
  SG: 0,
  SI: 1,
  SK: 1,
  SM: 1,
  SV: 0,
  SY: 6,
  TH: 0,
  TJ: 1,
  TM: 1,
  TR: 1,
  TT: 0,
  TW: 0,
  UA: 1,
  UM: 0,
  US: 0,
  UY: 1,
  UZ: 1,
  VA: 1,
  VE: 0,
  VI: 0,
  VN: 1,
  WS: 0,
  XK: 1,
  YE: 0,
  ZA: 0,
  ZW: 0,
}
function Qu(t, e, a) {
  const n = []
  let s = []
  const r = Fl(t),
    i = jl(t),
    c = a ?? en[e.slice(-2).toUpperCase()] ?? 0,
    l = (r.getDay() - c + 7) % 7,
    h = (i.getDay() - c + 7) % 7
  for (let o = 0; o < l; o++) {
    const d = new Date(r)
    d.setDate(d.getDate() - (l - o)), s.push(d)
  }
  for (let o = 1; o <= i.getDate(); o++) {
    const d = new Date(t.getFullYear(), t.getMonth(), o)
    s.push(d), s.length === 7 && (n.push(s), (s = []))
  }
  for (let o = 1; o < 7 - h; o++) {
    const d = new Date(i)
    d.setDate(d.getDate() + o), s.push(d)
  }
  return s.length > 0 && n.push(s), n
}
function tp(t, e, a) {
  const n = a ?? en[e.slice(-2).toUpperCase()] ?? 0,
    s = new Date(t)
  for (; s.getDay() !== n; ) s.setDate(s.getDate() - 1)
  return s
}
function ep(t, e) {
  const a = new Date(t),
    n = ((en[e.slice(-2).toUpperCase()] ?? 0) + 6) % 7
  for (; a.getDay() !== n; ) a.setDate(a.getDate() + 1)
  return a
}
function Fl(t) {
  return new Date(t.getFullYear(), t.getMonth(), 1)
}
function jl(t) {
  return new Date(t.getFullYear(), t.getMonth() + 1, 0)
}
function ap(t) {
  const e = t.split('-').map(Number)
  return new Date(e[0], e[1] - 1, e[2])
}
const np = /^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/
function Hl(t) {
  if (t == null) return new Date()
  if (t instanceof Date) return t
  if (typeof t == 'string') {
    let e
    if (np.test(t)) return ap(t)
    if (((e = Date.parse(t)), !isNaN(e))) return new Date(e)
  }
  return null
}
const Or = new Date(2e3, 0, 2)
function sp(t, e) {
  const a = e ?? en[t.slice(-2).toUpperCase()] ?? 0
  return Qa(7).map((n) => {
    const s = new Date(Or)
    return (
      s.setDate(Or.getDate() + a + n), new Intl.DateTimeFormat(t, { weekday: 'narrow' }).format(s)
    )
  })
}
function rp(t, e, a, n) {
  const s = Hl(t) ?? new Date(),
    r = n == null ? void 0 : n[e]
  if (typeof r == 'function') return r(s, e, a)
  let i = {}
  switch (e) {
    case 'fullDate':
      i = { year: 'numeric', month: 'long', day: 'numeric' }
      break
    case 'fullDateWithWeekday':
      i = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
      break
    case 'normalDate':
      const c = s.getDate(),
        l = new Intl.DateTimeFormat(a, { month: 'long' }).format(s)
      return `${c} ${l}`
    case 'normalDateWithWeekday':
      i = { weekday: 'short', day: 'numeric', month: 'short' }
      break
    case 'shortDate':
      i = { month: 'short', day: 'numeric' }
      break
    case 'year':
      i = { year: 'numeric' }
      break
    case 'month':
      i = { month: 'long' }
      break
    case 'monthShort':
      i = { month: 'short' }
      break
    case 'monthAndYear':
      i = { month: 'long', year: 'numeric' }
      break
    case 'monthAndDate':
      i = { month: 'long', day: 'numeric' }
      break
    case 'weekday':
      i = { weekday: 'long' }
      break
    case 'weekdayShort':
      i = { weekday: 'short' }
      break
    case 'dayOfMonth':
      return new Intl.NumberFormat(a).format(s.getDate())
    case 'hours12h':
      i = { hour: 'numeric', hour12: !0 }
      break
    case 'hours24h':
      i = { hour: 'numeric', hour12: !1 }
      break
    case 'minutes':
      i = { minute: 'numeric' }
      break
    case 'seconds':
      i = { second: 'numeric' }
      break
    case 'fullTime':
      i = { hour: 'numeric', minute: 'numeric' }
      break
    case 'fullTime12h':
      i = { hour: 'numeric', minute: 'numeric', hour12: !0 }
      break
    case 'fullTime24h':
      i = { hour: 'numeric', minute: 'numeric', hour12: !1 }
      break
    case 'fullDateTime':
      i = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' }
      break
    case 'fullDateTime12h':
      i = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: !0,
      }
      break
    case 'fullDateTime24h':
      i = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: !1,
      }
      break
    case 'keyboardDate':
      i = { year: 'numeric', month: '2-digit', day: '2-digit' }
      break
    case 'keyboardDateTime':
      return (
        (i = {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: 'numeric',
          minute: 'numeric',
        }),
        new Intl.DateTimeFormat(a, i).format(s).replace(/, /g, ' ')
      )
    case 'keyboardDateTime12h':
      return (
        (i = {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: 'numeric',
          minute: 'numeric',
          hour12: !0,
        }),
        new Intl.DateTimeFormat(a, i).format(s).replace(/, /g, ' ')
      )
    case 'keyboardDateTime24h':
      return (
        (i = {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: 'numeric',
          minute: 'numeric',
          hour12: !1,
        }),
        new Intl.DateTimeFormat(a, i).format(s).replace(/, /g, ' ')
      )
    default:
      i = r ?? { timeZone: 'UTC', timeZoneName: 'short' }
  }
  return new Intl.DateTimeFormat(a, i).format(s)
}
function ip(t, e) {
  const a = t.toJsDate(e),
    n = a.getFullYear(),
    s = vr(String(a.getMonth() + 1), 2, '0'),
    r = vr(String(a.getDate()), 2, '0')
  return `${n}-${s}-${r}`
}
function cp(t) {
  const [e, a, n] = t.split('-').map(Number)
  return new Date(e, a - 1, n)
}
function lp(t, e) {
  const a = new Date(t)
  return a.setMinutes(a.getMinutes() + e), a
}
function op(t, e) {
  const a = new Date(t)
  return a.setHours(a.getHours() + e), a
}
function hp(t, e) {
  const a = new Date(t)
  return a.setDate(a.getDate() + e), a
}
function dp(t, e) {
  const a = new Date(t)
  return a.setDate(a.getDate() + e * 7), a
}
function up(t, e) {
  const a = new Date(t)
  return a.setDate(1), a.setMonth(a.getMonth() + e), a
}
function pp(t) {
  return t.getFullYear()
}
function mp(t) {
  return t.getMonth()
}
function fp(t) {
  return t.getDate()
}
function vp(t) {
  return new Date(t.getFullYear(), t.getMonth() + 1, 1)
}
function zp(t) {
  return new Date(t.getFullYear(), t.getMonth() - 1, 1)
}
function gp(t) {
  return t.getHours()
}
function yp(t) {
  return t.getMinutes()
}
function bp(t) {
  return new Date(t.getFullYear(), 0, 1)
}
function _p(t) {
  return new Date(t.getFullYear(), 11, 31)
}
function Sp(t, e) {
  return Ma(t, e[0]) && kp(t, e[1])
}
function wp(t) {
  const e = new Date(t)
  return e instanceof Date && !isNaN(e.getTime())
}
function Ma(t, e) {
  return t.getTime() > e.getTime()
}
function Cp(t, e) {
  return Ma(u2(t), u2(e))
}
function kp(t, e) {
  return t.getTime() < e.getTime()
}
function Dr(t, e) {
  return t.getTime() === e.getTime()
}
function xp(t, e) {
  return (
    t.getDate() === e.getDate() &&
    t.getMonth() === e.getMonth() &&
    t.getFullYear() === e.getFullYear()
  )
}
function Ep(t, e) {
  return t.getMonth() === e.getMonth() && t.getFullYear() === e.getFullYear()
}
function Pp(t, e) {
  return t.getFullYear() === e.getFullYear()
}
function Tp(t, e, a) {
  const n = new Date(t),
    s = new Date(e)
  switch (a) {
    case 'years':
      return n.getFullYear() - s.getFullYear()
    case 'quarters':
      return Math.floor(
        (n.getMonth() - s.getMonth() + (n.getFullYear() - s.getFullYear()) * 12) / 4,
      )
    case 'months':
      return n.getMonth() - s.getMonth() + (n.getFullYear() - s.getFullYear()) * 12
    case 'weeks':
      return Math.floor((n.getTime() - s.getTime()) / (1e3 * 60 * 60 * 24 * 7))
    case 'days':
      return Math.floor((n.getTime() - s.getTime()) / (1e3 * 60 * 60 * 24))
    case 'hours':
      return Math.floor((n.getTime() - s.getTime()) / (1e3 * 60 * 60))
    case 'minutes':
      return Math.floor((n.getTime() - s.getTime()) / (1e3 * 60))
    case 'seconds':
      return Math.floor((n.getTime() - s.getTime()) / 1e3)
    default:
      return n.getTime() - s.getTime()
  }
}
function Ap(t, e) {
  const a = new Date(t)
  return a.setHours(e), a
}
function Ip(t, e) {
  const a = new Date(t)
  return a.setMinutes(e), a
}
function Op(t, e) {
  const a = new Date(t)
  return a.setMonth(e), a
}
function Dp(t, e) {
  const a = new Date(t)
  return a.setDate(e), a
}
function Rp(t, e) {
  const a = new Date(t)
  return a.setFullYear(e), a
}
function u2(t) {
  return new Date(t.getFullYear(), t.getMonth(), t.getDate(), 0, 0, 0, 0)
}
function Lp(t) {
  return new Date(t.getFullYear(), t.getMonth(), t.getDate(), 23, 59, 59, 999)
}
class Mp {
  constructor(e) {
    ;(this.locale = e.locale), (this.formats = e.formats)
  }
  date(e) {
    return Hl(e)
  }
  toJsDate(e) {
    return e
  }
  toISO(e) {
    return ip(this, e)
  }
  parseISO(e) {
    return cp(e)
  }
  addMinutes(e, a) {
    return lp(e, a)
  }
  addHours(e, a) {
    return op(e, a)
  }
  addDays(e, a) {
    return hp(e, a)
  }
  addWeeks(e, a) {
    return dp(e, a)
  }
  addMonths(e, a) {
    return up(e, a)
  }
  getWeekArray(e, a) {
    return Qu(e, this.locale, a ? Number(a) : void 0)
  }
  startOfWeek(e, a) {
    return tp(e, this.locale, a ? Number(a) : void 0)
  }
  endOfWeek(e) {
    return ep(e, this.locale)
  }
  startOfMonth(e) {
    return Fl(e)
  }
  endOfMonth(e) {
    return jl(e)
  }
  format(e, a) {
    return rp(e, a, this.locale, this.formats)
  }
  isEqual(e, a) {
    return Dr(e, a)
  }
  isValid(e) {
    return wp(e)
  }
  isWithinRange(e, a) {
    return Sp(e, a)
  }
  isAfter(e, a) {
    return Ma(e, a)
  }
  isAfterDay(e, a) {
    return Cp(e, a)
  }
  isBefore(e, a) {
    return !Ma(e, a) && !Dr(e, a)
  }
  isSameDay(e, a) {
    return xp(e, a)
  }
  isSameMonth(e, a) {
    return Ep(e, a)
  }
  isSameYear(e, a) {
    return Pp(e, a)
  }
  setMinutes(e, a) {
    return Ip(e, a)
  }
  setHours(e, a) {
    return Ap(e, a)
  }
  setMonth(e, a) {
    return Op(e, a)
  }
  setDate(e, a) {
    return Dp(e, a)
  }
  setYear(e, a) {
    return Rp(e, a)
  }
  getDiff(e, a, n) {
    return Tp(e, a, n)
  }
  getWeekdays(e) {
    return sp(this.locale, e ? Number(e) : void 0)
  }
  getYear(e) {
    return pp(e)
  }
  getMonth(e) {
    return mp(e)
  }
  getDate(e) {
    return fp(e)
  }
  getNextMonth(e) {
    return vp(e)
  }
  getPreviousMonth(e) {
    return zp(e)
  }
  getHours(e) {
    return gp(e)
  }
  getMinutes(e) {
    return yp(e)
  }
  startOfDay(e) {
    return u2(e)
  }
  endOfDay(e) {
    return Lp(e)
  }
  startOfYear(e) {
    return bp(e)
  }
  endOfYear(e) {
    return _p(e)
  }
}
const Wl = Symbol.for('vuetify:date-options'),
  Rr = Symbol.for('vuetify:date-adapter')
function Vp(t, e) {
  const a = Kt(
    {
      adapter: Mp,
      locale: {
        af: 'af-ZA',
        bg: 'bg-BG',
        ca: 'ca-ES',
        ckb: '',
        cs: 'cs-CZ',
        de: 'de-DE',
        el: 'el-GR',
        en: 'en-US',
        et: 'et-EE',
        fa: 'fa-IR',
        fi: 'fi-FI',
        hr: 'hr-HR',
        hu: 'hu-HU',
        he: 'he-IL',
        id: 'id-ID',
        it: 'it-IT',
        ja: 'ja-JP',
        ko: 'ko-KR',
        lv: 'lv-LV',
        lt: 'lt-LT',
        nl: 'nl-NL',
        no: 'no-NO',
        pl: 'pl-PL',
        pt: 'pt-PT',
        ro: 'ro-RO',
        ru: 'ru-RU',
        sk: 'sk-SK',
        sl: 'sl-SI',
        srCyrl: 'sr-SP',
        srLatn: 'sr-SP',
        sv: 'sv-SE',
        th: 'th-TH',
        tr: 'tr-TR',
        az: 'az-AZ',
        uk: 'uk-UA',
        vi: 'vi-VN',
        zhHans: 'zh-CN',
        zhHant: 'zh-TW',
      },
    },
    t,
  )
  return { options: a, instance: Ul(a, e) }
}
function Ul(t, e) {
  const a = Lt(
    typeof t.adapter == 'function'
      ? new t.adapter({ locale: t.locale[e.current.value] ?? e.current.value, formats: t.formats })
      : t.adapter,
  )
  return (
    nt(e.current, (n) => {
      a.locale = t.locale[n] ?? n ?? a.locale
    }),
    a
  )
}
function r0() {
  const t = yt(Wl)
  if (!t) throw new Error('[Vuetify] Could not find injected date options')
  const e = U0()
  return Ul(t, e)
}
function $p(t, e) {
  const a = t.toJsDate(e)
  let n = a.getFullYear(),
    s = new Date(n, 0, 1)
  if (a < s) (n = n - 1), (s = new Date(n, 0, 1))
  else {
    const c = new Date(n + 1, 0, 1)
    a >= c && ((n = n + 1), (s = c))
  }
  const r = Math.abs(a.getTime() - s.getTime()),
    i = Math.ceil(r / (1e3 * 60 * 60 * 24))
  return Math.floor(i / 7) + 1
}
const an = ['sm', 'md', 'lg', 'xl', 'xxl'],
  p2 = Symbol.for('vuetify:display'),
  Lr = {
    mobileBreakpoint: 'lg',
    thresholds: { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920, xxl: 2560 },
  },
  Np = function () {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Lr
    return Kt(Lr, t)
  }
function Mr(t) {
  return Pt && !t ? window.innerWidth : (typeof t == 'object' && t.clientWidth) || 0
}
function Vr(t) {
  return Pt && !t ? window.innerHeight : (typeof t == 'object' && t.clientHeight) || 0
}
function $r(t) {
  const e = Pt && !t ? window.navigator.userAgent : 'ssr'
  function a(f) {
    return !!e.match(f)
  }
  const n = a(/android/i),
    s = a(/iphone|ipad|ipod/i),
    r = a(/cordova/i),
    i = a(/electron/i),
    c = a(/chrome/i),
    l = a(/edge/i),
    h = a(/firefox/i),
    o = a(/opera/i),
    d = a(/win/i),
    u = a(/mac/i),
    p = a(/linux/i)
  return {
    android: n,
    ios: s,
    cordova: r,
    electron: i,
    chrome: c,
    edge: l,
    firefox: h,
    opera: o,
    win: d,
    mac: u,
    linux: p,
    touch: nu,
    ssr: e === 'ssr',
  }
}
function Bp(t, e) {
  const { thresholds: a, mobileBreakpoint: n } = Np(t),
    s = ot(Vr(e)),
    r = ot($r(e)),
    i = Lt({}),
    c = ot(Mr(e))
  function l() {
    ;(s.value = Vr()), (c.value = Mr())
  }
  function h() {
    l(), (r.value = $r())
  }
  return (
    fe(() => {
      const o = c.value < a.sm,
        d = c.value < a.md && !o,
        u = c.value < a.lg && !(d || o),
        p = c.value < a.xl && !(u || d || o),
        f = c.value < a.xxl && !(p || u || d || o),
        m = c.value >= a.xxl,
        g = o ? 'xs' : d ? 'sm' : u ? 'md' : p ? 'lg' : f ? 'xl' : 'xxl',
        S = typeof n == 'number' ? n : a[n],
        b = c.value < S
      ;(i.xs = o),
        (i.sm = d),
        (i.md = u),
        (i.lg = p),
        (i.xl = f),
        (i.xxl = m),
        (i.smAndUp = !o),
        (i.mdAndUp = !(o || d)),
        (i.lgAndUp = !(o || d || u)),
        (i.xlAndUp = !(o || d || u || p)),
        (i.smAndDown = !(u || p || f || m)),
        (i.mdAndDown = !(p || f || m)),
        (i.lgAndDown = !(f || m)),
        (i.xlAndDown = !m),
        (i.name = g),
        (i.height = s.value),
        (i.width = c.value),
        (i.mobile = b),
        (i.mobileBreakpoint = n),
        (i.platform = r.value),
        (i.thresholds = a)
    }),
    Pt && window.addEventListener('resize', l, { passive: !0 }),
    { ...N2(i), update: h, ssr: !!e }
  )
}
const Fp = G(
  { mobile: { type: Boolean, default: !1 }, mobileBreakpoint: [Number, String] },
  'display',
)
function Gl() {
  let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { mobile: null },
    e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Fe()
  const a = yt(p2)
  if (!a) throw new Error('Could not find Vuetify display injection')
  const n = _(() =>
      t.mobile
        ? !0
        : typeof t.mobileBreakpoint == 'number'
          ? a.width.value < t.mobileBreakpoint
          : t.mobileBreakpoint
            ? a.width.value < a.thresholds.value[t.mobileBreakpoint]
            : t.mobile === null
              ? a.mobile.value
              : !1,
    ),
    s = _(() => (e ? { [`${e}--mobile`]: n.value } : {}))
  return { ...a, displayClasses: s, mobile: n }
}
const Kl = Symbol.for('vuetify:goto')
function Yl() {
  return {
    container: void 0,
    duration: 300,
    layout: !1,
    offset: 0,
    easing: 'easeInOutCubic',
    patterns: {
      linear: (t) => t,
      easeInQuad: (t) => t ** 2,
      easeOutQuad: (t) => t * (2 - t),
      easeInOutQuad: (t) => (t < 0.5 ? 2 * t ** 2 : -1 + (4 - 2 * t) * t),
      easeInCubic: (t) => t ** 3,
      easeOutCubic: (t) => (--t) ** 3 + 1,
      easeInOutCubic: (t) => (t < 0.5 ? 4 * t ** 3 : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1),
      easeInQuart: (t) => t ** 4,
      easeOutQuart: (t) => 1 - (--t) ** 4,
      easeInOutQuart: (t) => (t < 0.5 ? 8 * t ** 4 : 1 - 8 * (--t) ** 4),
      easeInQuint: (t) => t ** 5,
      easeOutQuint: (t) => 1 + (--t) ** 5,
      easeInOutQuint: (t) => (t < 0.5 ? 16 * t ** 5 : 1 + 16 * (--t) ** 5),
    },
  }
}
function jp(t) {
  return cs(t) ?? (document.scrollingElement || document.body)
}
function cs(t) {
  return typeof t == 'string' ? document.querySelector(t) : ts(t)
}
function Ln(t, e, a) {
  if (typeof t == 'number') return e && a ? -t : t
  let n = cs(t),
    s = 0
  for (; n; ) (s += e ? n.offsetLeft : n.offsetTop), (n = n.offsetParent)
  return s
}
function Hp(t, e) {
  return { rtl: e.isRtl, options: Kt(Yl(), t) }
}
async function Nr(t, e, a, n) {
  const s = a ? 'scrollLeft' : 'scrollTop',
    r = Kt((n == null ? void 0 : n.options) ?? Yl(), e),
    i = n == null ? void 0 : n.rtl.value,
    c = (typeof t == 'number' ? t : cs(t)) ?? 0,
    l = r.container === 'parent' && c instanceof HTMLElement ? c.parentElement : jp(r.container),
    h = typeof r.easing == 'function' ? r.easing : r.patterns[r.easing]
  if (!h) throw new TypeError(`Easing function "${r.easing}" not found.`)
  let o
  if (typeof c == 'number') o = Ln(c, a, i)
  else if (((o = Ln(c, a, i) - Ln(l, a, i)), r.layout)) {
    const f = window.getComputedStyle(c).getPropertyValue('--v-layout-top')
    f && (o -= parseInt(f, 10))
  }
  ;(o += r.offset), (o = Wp(l, o, !!i, !!a))
  const d = l[s] ?? 0
  if (o === d) return Promise.resolve(o)
  const u = performance.now()
  return new Promise((p) =>
    requestAnimationFrame(function f(m) {
      const S = (m - u) / r.duration,
        b = Math.floor(d + (o - d) * h(O1(S, 0, 1)))
      if (((l[s] = b), S >= 1 && Math.abs(b - l[s]) < 10)) return p(o)
      if (S > 2) return p(l[s])
      requestAnimationFrame(f)
    }),
  )
}
function im() {
  let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
  const e = yt(Kl),
    { isRtl: a } = e1()
  if (!e) throw new Error('[Vuetify] Could not find injected goto instance')
  const n = { ...e, rtl: _(() => e.rtl.value || a.value) }
  async function s(r, i) {
    return Nr(r, Kt(t, i), !1, n)
  }
  return (s.horizontal = async (r, i) => Nr(r, Kt(t, i), !0, n)), s
}
function Wp(t, e, a, n) {
  const { scrollWidth: s, scrollHeight: r } = t,
    [i, c] =
      t === document.scrollingElement
        ? [window.innerWidth, window.innerHeight]
        : [t.offsetWidth, t.offsetHeight]
  let l, h
  return (
    n ? (a ? ((l = -(s - i)), (h = 0)) : ((l = 0), (h = s - i))) : ((l = 0), (h = r + -c)),
    Math.max(Math.min(e, h), l)
  )
}
const Up = {
    collapse: 'mdi-chevron-up',
    complete: 'mdi-check',
    cancel: 'mdi-close-circle',
    close: 'mdi-close',
    delete: 'mdi-close-circle',
    clear: 'mdi-close-circle',
    success: 'mdi-check-circle',
    info: 'mdi-information',
    warning: 'mdi-alert-circle',
    error: 'mdi-close-circle',
    prev: 'mdi-chevron-left',
    next: 'mdi-chevron-right',
    checkboxOn: 'mdi-checkbox-marked',
    checkboxOff: 'mdi-checkbox-blank-outline',
    checkboxIndeterminate: 'mdi-minus-box',
    delimiter: 'mdi-circle',
    sortAsc: 'mdi-arrow-up',
    sortDesc: 'mdi-arrow-down',
    expand: 'mdi-chevron-down',
    menu: 'mdi-menu',
    subgroup: 'mdi-menu-down',
    dropdown: 'mdi-menu-down',
    radioOn: 'mdi-radiobox-marked',
    radioOff: 'mdi-radiobox-blank',
    edit: 'mdi-pencil',
    ratingEmpty: 'mdi-star-outline',
    ratingFull: 'mdi-star',
    ratingHalf: 'mdi-star-half-full',
    loading: 'mdi-cached',
    first: 'mdi-page-first',
    last: 'mdi-page-last',
    unfold: 'mdi-unfold-more-horizontal',
    file: 'mdi-paperclip',
    plus: 'mdi-plus',
    minus: 'mdi-minus',
    calendar: 'mdi-calendar',
    treeviewCollapse: 'mdi-menu-down',
    treeviewExpand: 'mdi-menu-right',
    eyeDropper: 'mdi-eyedropper',
    upload: 'mdi-cloud-upload',
  },
  Gp = { component: (t) => Be(Jl, { ...t, class: 'mdi' }) },
  Nt = [String, Function, Object, Array],
  m2 = Symbol.for('vuetify:icons'),
  nn = G({ icon: { type: Nt }, tag: { type: String, required: !0 } }, 'icon'),
  Br = tt()({
    name: 'VComponentIcon',
    props: nn(),
    setup(t, e) {
      let { slots: a } = e
      return () => {
        const n = t.icon
        return v(t.tag, null, {
          default: () => {
            var s
            return [t.icon ? v(n, null, null) : (s = a.default) == null ? void 0 : s.call(a)]
          },
        })
      }
    },
  }),
  ql = W0({
    name: 'VSvgIcon',
    inheritAttrs: !1,
    props: nn(),
    setup(t, e) {
      let { attrs: a } = e
      return () =>
        v(t.tag, lt(a, { style: null }), {
          default: () => [
            v(
              'svg',
              {
                class: 'v-icon__svg',
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 24 24',
                role: 'img',
                'aria-hidden': 'true',
              },
              [
                Array.isArray(t.icon)
                  ? t.icon.map((n) =>
                      Array.isArray(n)
                        ? v('path', { d: n[0], 'fill-opacity': n[1] }, null)
                        : v('path', { d: n }, null),
                    )
                  : v('path', { d: t.icon }, null),
              ],
            ),
          ],
        })
    },
  })
W0({
  name: 'VLigatureIcon',
  props: nn(),
  setup(t) {
    return () => v(t.tag, null, { default: () => [t.icon] })
  },
})
const Jl = W0({
  name: 'VClassIcon',
  props: nn(),
  setup(t) {
    return () => v(t.tag, { class: t.icon }, null)
  },
})
function Kp() {
  return { svg: { component: ql }, class: { component: Jl } }
}
function Yp(t) {
  const e = Kp(),
    a = (t == null ? void 0 : t.defaultSet) ?? 'mdi'
  return (
    a === 'mdi' && !e.mdi && (e.mdi = Gp),
    Kt(
      {
        defaultSet: a,
        sets: e,
        aliases: {
          ...Up,
          vuetify: [
            'M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z',
            [
              'M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z',
              0.6,
            ],
          ],
          'vuetify-outline':
            'svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z',
          'vuetify-play': [
            'm6.376 13.184-4.11-7.192C1.505 4.66 2.467 3 4.003 3h8.532l-.953 1.576-.006.01-.396.677c-.429.732-.214 1.507.194 2.015.404.503 1.092.878 1.869.806a3.72 3.72 0 0 1 1.005.022c.276.053.434.143.523.237.138.146.38.635-.25 2.09-.893 1.63-1.553 1.722-1.847 1.677-.213-.033-.468-.158-.756-.406a4.95 4.95 0 0 1-.8-.927c-.39-.564-1.04-.84-1.66-.846-.625-.006-1.316.27-1.693.921l-.478.826-.911 1.506Z',
            [
              'M9.093 11.552c.046-.079.144-.15.32-.148a.53.53 0 0 1 .43.207c.285.414.636.847 1.046 1.2.405.35.914.662 1.516.754 1.334.205 2.502-.698 3.48-2.495l.014-.028.013-.03c.687-1.574.774-2.852-.005-3.675-.37-.391-.861-.586-1.333-.676a5.243 5.243 0 0 0-1.447-.044c-.173.016-.393-.073-.54-.257-.145-.18-.127-.316-.082-.392l.393-.672L14.287 3h5.71c1.536 0 2.499 1.659 1.737 2.992l-7.997 13.996c-.768 1.344-2.706 1.344-3.473 0l-3.037-5.314 1.377-2.278.004-.006.004-.007.481-.831Z',
              0.6,
            ],
          ],
        },
      },
      t,
    )
  )
}
const qp = (t) => {
    const e = yt(m2)
    if (!e) throw new Error('Missing Vuetify Icons provide!')
    return {
      iconData: _(() => {
        var l
        const n = Ot(t)
        if (!n) return { component: Br }
        let s = n
        if (
          (typeof s == 'string' &&
            ((s = s.trim()),
            s.startsWith('$') && (s = (l = e.aliases) == null ? void 0 : l[s.slice(1)])),
          Array.isArray(s))
        )
          return { component: ql, icon: s }
        if (typeof s != 'string') return { component: Br, icon: s }
        const r = Object.keys(e.sets).find((h) => typeof s == 'string' && s.startsWith(`${h}:`)),
          i = r ? s.slice(r.length + 1) : s
        return { component: e.sets[r ?? e.defaultSet].component, icon: i }
      }),
    }
  },
  R0 = Symbol.for('vuetify:theme'),
  Yt = G({ theme: String }, 'theme')
function Fr() {
  return {
    defaultTheme: 'light',
    variations: { colors: [], lighten: 0, darken: 0 },
    themes: {
      light: {
        dark: !1,
        colors: {
          background: '#FFFFFF',
          surface: '#FFFFFF',
          'surface-bright': '#FFFFFF',
          'surface-light': '#EEEEEE',
          'surface-variant': '#424242',
          'on-surface-variant': '#EEEEEE',
          primary: '#1867C0',
          'primary-darken-1': '#1F5592',
          secondary: '#48A9A6',
          'secondary-darken-1': '#018786',
          error: '#B00020',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FB8C00',
        },
        variables: {
          'border-color': '#000000',
          'border-opacity': 0.12,
          'high-emphasis-opacity': 0.87,
          'medium-emphasis-opacity': 0.6,
          'disabled-opacity': 0.38,
          'idle-opacity': 0.04,
          'hover-opacity': 0.04,
          'focus-opacity': 0.12,
          'selected-opacity': 0.08,
          'activated-opacity': 0.12,
          'pressed-opacity': 0.12,
          'dragged-opacity': 0.08,
          'theme-kbd': '#212529',
          'theme-on-kbd': '#FFFFFF',
          'theme-code': '#F5F5F5',
          'theme-on-code': '#000000',
        },
      },
      dark: {
        dark: !0,
        colors: {
          background: '#121212',
          surface: '#212121',
          'surface-bright': '#ccbfd6',
          'surface-light': '#424242',
          'surface-variant': '#a3a3a3',
          'on-surface-variant': '#424242',
          primary: '#2196F3',
          'primary-darken-1': '#277CC1',
          secondary: '#54B6B2',
          'secondary-darken-1': '#48A9A6',
          error: '#CF6679',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FB8C00',
        },
        variables: {
          'border-color': '#FFFFFF',
          'border-opacity': 0.12,
          'high-emphasis-opacity': 1,
          'medium-emphasis-opacity': 0.7,
          'disabled-opacity': 0.5,
          'idle-opacity': 0.1,
          'hover-opacity': 0.04,
          'focus-opacity': 0.12,
          'selected-opacity': 0.08,
          'activated-opacity': 0.12,
          'pressed-opacity': 0.16,
          'dragged-opacity': 0.08,
          'theme-kbd': '#212529',
          'theme-on-kbd': '#FFFFFF',
          'theme-code': '#343434',
          'theme-on-code': '#CCCCCC',
        },
      },
    },
  }
}
function Jp() {
  var n, s
  let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Fr()
  const e = Fr()
  if (!t) return { ...e, isDisabled: !0 }
  const a = {}
  for (const [r, i] of Object.entries(t.themes ?? {})) {
    const c =
      i.dark || r === 'dark'
        ? (n = e.themes) == null
          ? void 0
          : n.dark
        : (s = e.themes) == null
          ? void 0
          : s.light
    a[r] = Kt(c, i)
  }
  return Kt(e, { ...t, themes: a })
}
function Zp(t) {
  const e = Jp(t),
    a = ct(e.defaultTheme),
    n = ct(e.themes),
    s = _(() => {
      const o = {}
      for (const [d, u] of Object.entries(n.value)) {
        const p = (o[d] = { ...u, colors: { ...u.colors } })
        if (e.variations)
          for (const f of e.variations.colors) {
            const m = p.colors[f]
            if (m)
              for (const g of ['lighten', 'darken']) {
                const S = g === 'lighten' ? Lu : Mu
                for (const b of Qa(e.variations[g], 1)) p.colors[`${f}-${g}-${b}`] = Ou(S(Le(m), b))
              }
          }
        for (const f of Object.keys(p.colors)) {
          if (/^on-[a-z]/.test(f) || p.colors[`on-${f}`]) continue
          const m = `on-${f}`,
            g = Le(p.colors[f])
          p.colors[m] = Ll(g)
        }
      }
      return o
    }),
    r = _(() => s.value[a.value]),
    i = _(() => {
      var f
      const o = []
      ;(f = r.value) != null && f.dark && _1(o, ':root', ['color-scheme: dark']),
        _1(o, ':root', jr(r.value))
      for (const [m, g] of Object.entries(s.value))
        _1(o, `.v-theme--${m}`, [`color-scheme: ${g.dark ? 'dark' : 'normal'}`, ...jr(g)])
      const d = [],
        u = [],
        p = new Set(Object.values(s.value).flatMap((m) => Object.keys(m.colors)))
      for (const m of p)
        /^on-[a-z]/.test(m)
          ? _1(u, `.${m}`, [`color: rgb(var(--v-theme-${m})) !important`])
          : (_1(d, `.bg-${m}`, [
              `--v-theme-overlay-multiplier: var(--v-theme-${m}-overlay-multiplier)`,
              `background-color: rgb(var(--v-theme-${m})) !important`,
              `color: rgb(var(--v-theme-on-${m})) !important`,
            ]),
            _1(u, `.text-${m}`, [`color: rgb(var(--v-theme-${m})) !important`]),
            _1(u, `.border-${m}`, [`--v-border-color: var(--v-theme-${m})`]))
      return o.push(...d, ...u), o.map((m, g) => (g === 0 ? m : `    ${m}`)).join('')
    })
  function c() {
    return {
      style: [{ textContent: i.value, id: 'vuetify-theme-stylesheet', nonce: e.cspNonce || !1 }],
    }
  }
  function l(o) {
    if (e.isDisabled) return
    const d = o._context.provides.usehead
    if (d)
      if (d.push) {
        const u = d.push(c)
        Pt &&
          nt(i, () => {
            u.patch(c)
          })
      } else Pt ? (d.addHeadObjs(_(c)), fe(() => d.updateDOM())) : d.addHeadObjs(c())
    else {
      let p = function () {
          if (typeof document < 'u' && !u) {
            const f = document.createElement('style')
            ;(f.type = 'text/css'),
              (f.id = 'vuetify-theme-stylesheet'),
              e.cspNonce && f.setAttribute('nonce', e.cspNonce),
              (u = f),
              document.head.appendChild(u)
          }
          u && (u.innerHTML = i.value)
        },
        u = Pt ? document.getElementById('vuetify-theme-stylesheet') : null
      Pt ? nt(i, p, { immediate: !0 }) : p()
    }
  }
  const h = _(() => (e.isDisabled ? void 0 : `v-theme--${a.value}`))
  return {
    install: l,
    isDisabled: e.isDisabled,
    name: a,
    themes: n,
    current: r,
    computedThemes: s,
    themeClasses: h,
    styles: i,
    global: { name: a, current: r },
  }
}
function ie(t) {
  Rt('provideTheme')
  const e = yt(R0, null)
  if (!e) throw new Error('Could not find Vuetify theme injection')
  const a = _(() => t.theme ?? e.name.value),
    n = _(() => e.themes.value[a.value]),
    s = _(() => (e.isDisabled ? void 0 : `v-theme--${a.value}`)),
    r = { ...e, name: a, current: n, themeClasses: s }
  return me(R0, r), r
}
function Zl() {
  Rt('useTheme')
  const t = yt(R0, null)
  if (!t) throw new Error('Could not find Vuetify theme injection')
  return t
}
function _1(t, e, a) {
  t.push(
    `${e} {
`,
    ...a.map(
      (n) => `  ${n};
`,
    ),
    `}
`,
  )
}
function jr(t) {
  const e = t.dark ? 2 : 1,
    a = t.dark ? 1 : 2,
    n = []
  for (const [s, r] of Object.entries(t.colors)) {
    const i = Le(r)
    n.push(`--v-theme-${s}: ${i.r},${i.g},${i.b}`),
      s.startsWith('on-') || n.push(`--v-theme-${s}-overlay-multiplier: ${Vu(r) > 0.18 ? e : a}`)
  }
  for (const [s, r] of Object.entries(t.variables)) {
    const i = typeof r == 'string' && r.startsWith('#') ? Le(r) : void 0,
      c = i ? `${i.r}, ${i.g}, ${i.b}` : void 0
    n.push(`--v-${s}: ${c ?? r}`)
  }
  return n
}
function Xl(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'content'
  const a = Ia(),
    n = ct()
  if (Pt) {
    const s = new ResizeObserver((r) => {
      r.length &&
        (e === 'content'
          ? (n.value = r[0].contentRect)
          : (n.value = r[0].target.getBoundingClientRect()))
    })
    Se(() => {
      s.disconnect()
    }),
      nt(
        () => a.el,
        (r, i) => {
          i && (s.unobserve(i), (n.value = void 0)), r && s.observe(r)
        },
        { flush: 'post' },
      )
  }
  return { resizeRef: a, contentRect: B0(n) }
}
const L0 = Symbol.for('vuetify:layout'),
  Ql = Symbol.for('vuetify:layout-item'),
  Hr = 1e3,
  Xp = G({ overlaps: { type: Array, default: () => [] }, fullHeight: Boolean }, 'layout'),
  Qp = G(
    { name: { type: String }, order: { type: [Number, String], default: 0 }, absolute: Boolean },
    'layout-item',
  )
function to() {
  const t = yt(L0)
  if (!t) throw new Error('[Vuetify] Could not find injected layout')
  return { getLayoutItem: t.getLayoutItem, mainRect: t.mainRect, mainStyles: t.mainStyles }
}
function t6(t) {
  const e = yt(L0)
  if (!e) throw new Error('[Vuetify] Could not find injected layout')
  const a = t.id ?? `layout-item-${t1()}`,
    n = Rt('useLayoutItem')
  me(Ql, { id: a })
  const s = ot(!1)
  j2(() => (s.value = !0)), jc(() => (s.value = !1))
  const { layoutItemStyles: r, layoutItemScrimStyles: i } = e.register(n, {
    ...t,
    active: _(() => (s.value ? !1 : t.active.value)),
    id: a,
  })
  return (
    Se(() => e.unregister(a)),
    { layoutItemStyles: r, layoutRect: e.layoutRect, layoutItemScrimStyles: i }
  )
}
const e6 = (t, e, a, n) => {
  let s = { top: 0, left: 0, right: 0, bottom: 0 }
  const r = [{ id: '', layer: { ...s } }]
  for (const i of t) {
    const c = e.get(i),
      l = a.get(i),
      h = n.get(i)
    if (!c || !l || !h) continue
    const o = { ...s, [c.value]: parseInt(s[c.value], 10) + (h.value ? parseInt(l.value, 10) : 0) }
    r.push({ id: i, layer: o }), (s = o)
  }
  return r
}
function a6(t) {
  const e = yt(L0, null),
    a = _(() => (e ? e.rootZIndex.value - 100 : Hr)),
    n = ct([]),
    s = Lt(new Map()),
    r = Lt(new Map()),
    i = Lt(new Map()),
    c = Lt(new Map()),
    l = Lt(new Map()),
    { resizeRef: h, contentRect: o } = Xl(),
    d = _(() => {
      const O = new Map(),
        D = t.overlaps ?? []
      for (const A of D.filter((E) => E.includes(':'))) {
        const [E, T] = A.split(':')
        if (!n.value.includes(E) || !n.value.includes(T)) continue
        const I = s.get(E),
          C = s.get(T),
          R = r.get(E),
          N = r.get(T)
        !I ||
          !C ||
          !R ||
          !N ||
          (O.set(T, { position: I.value, amount: parseInt(R.value, 10) }),
          O.set(E, { position: C.value, amount: -parseInt(N.value, 10) }))
      }
      return O
    }),
    u = _(() => {
      const O = [...new Set([...i.values()].map((A) => A.value))].sort((A, E) => A - E),
        D = []
      for (const A of O) {
        const E = n.value.filter((T) => {
          var I
          return ((I = i.get(T)) == null ? void 0 : I.value) === A
        })
        D.push(...E)
      }
      return e6(D, s, r, c)
    }),
    p = _(() => !Array.from(l.values()).some((O) => O.value)),
    f = _(() => u.value[u.value.length - 1].layer),
    m = _(() => ({
      '--v-layout-left': it(f.value.left),
      '--v-layout-right': it(f.value.right),
      '--v-layout-top': it(f.value.top),
      '--v-layout-bottom': it(f.value.bottom),
      ...(p.value ? void 0 : { transition: 'none' }),
    })),
    g = _(() =>
      u.value.slice(1).map((O, D) => {
        let { id: A } = O
        const { layer: E } = u.value[D],
          T = r.get(A),
          I = s.get(A)
        return { id: A, ...E, size: Number(T.value), position: I.value }
      }),
    ),
    S = (O) => g.value.find((D) => D.id === O),
    b = Rt('createLayout'),
    w = ot(!1)
  Ne(() => {
    w.value = !0
  }),
    me(L0, {
      register: (O, D) => {
        let {
          id: A,
          order: E,
          position: T,
          layoutSize: I,
          elementSize: C,
          active: R,
          disableTransitions: N,
          absolute: Z,
        } = D
        i.set(A, E), s.set(A, T), r.set(A, I), c.set(A, R), N && l.set(A, N)
        const X = G1(Ql, b == null ? void 0 : b.vnode).indexOf(O)
        X > -1 ? n.value.splice(X, 0, A) : n.value.push(A)
        const q = _(() => g.value.findIndex((mt) => mt.id === A)),
          ft = _(() => a.value + u.value.length * 2 - q.value * 2),
          St = _(() => {
            const mt = T.value === 'left' || T.value === 'right',
              Jt = T.value === 'right',
              Wt = T.value === 'bottom',
              ze = C.value ?? I.value,
              $t = ze === 0 ? '%' : 'px',
              P = {
                [T.value]: 0,
                zIndex: ft.value,
                transform: `translate${mt ? 'X' : 'Y'}(${(R.value ? 0 : -(ze === 0 ? 100 : ze)) * (Jt || Wt ? -1 : 1)}${$t})`,
                position: Z.value || a.value !== Hr ? 'absolute' : 'fixed',
                ...(p.value ? void 0 : { transition: 'none' }),
              }
            if (!w.value) return P
            const F = g.value[q.value]
            if (!F) throw new Error(`[Vuetify] Could not find layout item "${A}"`)
            const j = d.value.get(A)
            return (
              j && (F[j.position] += j.amount),
              {
                ...P,
                height: mt
                  ? `calc(100% - ${F.top}px - ${F.bottom}px)`
                  : C.value
                    ? `${C.value}px`
                    : void 0,
                left: Jt ? void 0 : `${F.left}px`,
                right: Jt ? `${F.right}px` : void 0,
                top: T.value !== 'bottom' ? `${F.top}px` : void 0,
                bottom: T.value !== 'top' ? `${F.bottom}px` : void 0,
                width: mt
                  ? C.value
                    ? `${C.value}px`
                    : void 0
                  : `calc(100% - ${F.left}px - ${F.right}px)`,
              }
            )
          }),
          dt = _(() => ({ zIndex: ft.value - 1 }))
        return { layoutItemStyles: St, layoutItemScrimStyles: dt, zIndex: ft }
      },
      unregister: (O) => {
        i.delete(O),
          s.delete(O),
          r.delete(O),
          c.delete(O),
          l.delete(O),
          (n.value = n.value.filter((D) => D !== O))
      },
      mainRect: f,
      mainStyles: m,
      getLayoutItem: S,
      items: g,
      layoutRect: o,
      rootZIndex: a,
    })
  const x = _(() => ['v-layout', { 'v-layout--full-height': t.fullHeight }]),
    M = _(() => ({
      zIndex: e ? a.value : void 0,
      position: e ? 'relative' : void 0,
      overflow: e ? 'hidden' : void 0,
    }))
  return {
    layoutClasses: x,
    layoutStyles: M,
    getLayoutItem: S,
    items: g,
    layoutRect: o,
    layoutRef: h,
  }
}
function eo() {
  let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
  const { blueprint: e, ...a } = t,
    n = Kt(e, a),
    { aliases: s = {}, components: r = {}, directives: i = {} } = n,
    c = Nu(n.defaults),
    l = Bp(n.display, n.ssr),
    h = Zp(n.theme),
    o = Yp(n.icons),
    d = Ju(n.locale),
    u = Vp(n.date, d),
    p = Hp(n.goTo, d)
  return {
    install: (m) => {
      for (const g in i) m.directive(g, i[g])
      for (const g in r) m.component(g, r[g])
      for (const g in s) m.component(g, W0({ ...s[g], name: g, aliasName: s[g].name }))
      if (
        (h.install(m),
        m.provide(t0, c),
        m.provide(p2, l),
        m.provide(R0, h),
        m.provide(m2, o),
        m.provide(La, d),
        m.provide(Wl, u.options),
        m.provide(Rr, u.instance),
        m.provide(Kl, p),
        Pt && n.ssr)
      )
        if (m.$nuxt)
          m.$nuxt.hook('app:suspense:resolve', () => {
            l.update()
          })
        else {
          const { mount: g } = m
          m.mount = function () {
            const S = g(...arguments)
            return ee(() => l.update()), (m.mount = g), S
          }
        }
      t1.reset(),
        m.mixin({
          computed: {
            $vuetify() {
              return Lt({
                defaults: B1.call(this, t0),
                display: B1.call(this, p2),
                theme: B1.call(this, R0),
                icons: B1.call(this, m2),
                locale: B1.call(this, La),
                date: B1.call(this, Rr),
              })
            },
          },
        })
    },
    defaults: c,
    display: l,
    theme: h,
    icons: o,
    locale: d,
    date: u,
    goTo: p,
  }
}
const n6 = '3.7.19'
eo.version = n6
function B1(t) {
  var n, s
  const e = this.$,
    a =
      ((n = e.parent) == null ? void 0 : n.provides) ??
      ((s = e.vnode.appContext) == null ? void 0 : s.provides)
  if (a && t in a) return a[t]
}
function s6() {
  return ao().__VUE_DEVTOOLS_GLOBAL_HOOK__
}
function ao() {
  return typeof navigator < 'u' && typeof window < 'u'
    ? window
    : typeof globalThis < 'u'
      ? globalThis
      : {}
}
const r6 = typeof Proxy == 'function',
  i6 = 'devtools-plugin:setup',
  c6 = 'plugin:settings:set'
let F1, f2
function l6() {
  var t
  return (
    F1 !== void 0 ||
      (typeof window < 'u' && window.performance
        ? ((F1 = !0), (f2 = window.performance))
        : typeof globalThis < 'u' &&
            !((t = globalThis.perf_hooks) === null || t === void 0) &&
            t.performance
          ? ((F1 = !0), (f2 = globalThis.perf_hooks.performance))
          : (F1 = !1)),
    F1
  )
}
function o6() {
  return l6() ? f2.now() : Date.now()
}
class h6 {
  constructor(e, a) {
    ;(this.target = null),
      (this.targetQueue = []),
      (this.onQueue = []),
      (this.plugin = e),
      (this.hook = a)
    const n = {}
    if (e.settings)
      for (const i in e.settings) {
        const c = e.settings[i]
        n[i] = c.defaultValue
      }
    const s = `__vue-devtools-plugin-settings__${e.id}`
    let r = Object.assign({}, n)
    try {
      const i = localStorage.getItem(s),
        c = JSON.parse(i)
      Object.assign(r, c)
    } catch {}
    ;(this.fallbacks = {
      getSettings() {
        return r
      },
      setSettings(i) {
        try {
          localStorage.setItem(s, JSON.stringify(i))
        } catch {}
        r = i
      },
      now() {
        return o6()
      },
    }),
      a &&
        a.on(c6, (i, c) => {
          i === this.plugin.id && this.fallbacks.setSettings(c)
        }),
      (this.proxiedOn = new Proxy(
        {},
        {
          get: (i, c) =>
            this.target
              ? this.target.on[c]
              : (...l) => {
                  this.onQueue.push({ method: c, args: l })
                },
        },
      )),
      (this.proxiedTarget = new Proxy(
        {},
        {
          get: (i, c) =>
            this.target
              ? this.target[c]
              : c === 'on'
                ? this.proxiedOn
                : Object.keys(this.fallbacks).includes(c)
                  ? (...l) => (
                      this.targetQueue.push({ method: c, args: l, resolve: () => {} }),
                      this.fallbacks[c](...l)
                    )
                  : (...l) =>
                      new Promise((h) => {
                        this.targetQueue.push({ method: c, args: l, resolve: h })
                      }),
        },
      ))
  }
  async setRealTarget(e) {
    this.target = e
    for (const a of this.onQueue) this.target.on[a.method](...a.args)
    for (const a of this.targetQueue) a.resolve(await this.target[a.method](...a.args))
  }
}
function d6(t, e) {
  const a = t,
    n = ao(),
    s = s6(),
    r = r6 && a.enableEarlyProxy
  if (s && (n.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !r)) s.emit(i6, t, e)
  else {
    const i = r ? new h6(a, s) : null
    ;(n.__VUE_DEVTOOLS_PLUGINS__ = n.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: a,
      setupFn: e,
      proxy: i,
    }),
      i && e(i.proxiedTarget)
  }
}
/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */ var no = 'store'
function so(t) {
  return t === void 0 && (t = null), yt(t !== null ? t : no)
}
function i0(t, e) {
  Object.keys(t).forEach(function (a) {
    return e(t[a], a)
  })
}
function u6(t) {
  return t !== null && typeof t == 'object'
}
function p6(t) {
  return t && typeof t.then == 'function'
}
function m6(t, e) {
  return function () {
    return t(e)
  }
}
function ro(t, e, a) {
  return (
    e.indexOf(t) < 0 && (a && a.prepend ? e.unshift(t) : e.push(t)),
    function () {
      var n = e.indexOf(t)
      n > -1 && e.splice(n, 1)
    }
  )
}
function io(t, e) {
  ;(t._actions = Object.create(null)),
    (t._mutations = Object.create(null)),
    (t._wrappedGetters = Object.create(null)),
    (t._modulesNamespaceMap = Object.create(null))
  var a = t.state
  sn(t, a, [], t._modules.root, !0), ls(t, a, e)
}
function ls(t, e, a) {
  var n = t._state
  ;(t.getters = {}), (t._makeLocalGettersCache = Object.create(null))
  var s = t._wrappedGetters,
    r = {}
  i0(s, function (i, c) {
    ;(r[c] = m6(i, t)),
      Object.defineProperty(t.getters, c, {
        get: function () {
          return r[c]()
        },
        enumerable: !0,
      })
  }),
    (t._state = Lt({ data: e })),
    t.strict && y6(t),
    n &&
      a &&
      t._withCommit(function () {
        n.data = null
      })
}
function sn(t, e, a, n, s) {
  var r = !a.length,
    i = t._modules.getNamespace(a)
  if ((n.namespaced && (t._modulesNamespaceMap[i], (t._modulesNamespaceMap[i] = n)), !r && !s)) {
    var c = os(e, a.slice(0, -1)),
      l = a[a.length - 1]
    t._withCommit(function () {
      c[l] = n.state
    })
  }
  var h = (n.context = f6(t, i, a))
  n.forEachMutation(function (o, d) {
    var u = i + d
    v6(t, u, o, h)
  }),
    n.forEachAction(function (o, d) {
      var u = o.root ? d : i + d,
        p = o.handler || o
      z6(t, u, p, h)
    }),
    n.forEachGetter(function (o, d) {
      var u = i + d
      g6(t, u, o, h)
    }),
    n.forEachChild(function (o, d) {
      sn(t, e, a.concat(d), o, s)
    })
}
function f6(t, e, a) {
  var n = e === '',
    s = {
      dispatch: n
        ? t.dispatch
        : function (r, i, c) {
            var l = Va(r, i, c),
              h = l.payload,
              o = l.options,
              d = l.type
            return (!o || !o.root) && (d = e + d), t.dispatch(d, h)
          },
      commit: n
        ? t.commit
        : function (r, i, c) {
            var l = Va(r, i, c),
              h = l.payload,
              o = l.options,
              d = l.type
            ;(!o || !o.root) && (d = e + d), t.commit(d, h, o)
          },
    }
  return (
    Object.defineProperties(s, {
      getters: {
        get: n
          ? function () {
              return t.getters
            }
          : function () {
              return co(t, e)
            },
      },
      state: {
        get: function () {
          return os(t.state, a)
        },
      },
    }),
    s
  )
}
function co(t, e) {
  if (!t._makeLocalGettersCache[e]) {
    var a = {},
      n = e.length
    Object.keys(t.getters).forEach(function (s) {
      if (s.slice(0, n) === e) {
        var r = s.slice(n)
        Object.defineProperty(a, r, {
          get: function () {
            return t.getters[s]
          },
          enumerable: !0,
        })
      }
    }),
      (t._makeLocalGettersCache[e] = a)
  }
  return t._makeLocalGettersCache[e]
}
function v6(t, e, a, n) {
  var s = t._mutations[e] || (t._mutations[e] = [])
  s.push(function (i) {
    a.call(t, n.state, i)
  })
}
function z6(t, e, a, n) {
  var s = t._actions[e] || (t._actions[e] = [])
  s.push(function (i) {
    var c = a.call(
      t,
      {
        dispatch: n.dispatch,
        commit: n.commit,
        getters: n.getters,
        state: n.state,
        rootGetters: t.getters,
        rootState: t.state,
      },
      i,
    )
    return (
      p6(c) || (c = Promise.resolve(c)),
      t._devtoolHook
        ? c.catch(function (l) {
            throw (t._devtoolHook.emit('vuex:error', l), l)
          })
        : c
    )
  })
}
function g6(t, e, a, n) {
  t._wrappedGetters[e] ||
    (t._wrappedGetters[e] = function (r) {
      return a(n.state, n.getters, r.state, r.getters)
    })
}
function y6(t) {
  nt(
    function () {
      return t._state.data
    },
    function () {},
    { deep: !0, flush: 'sync' },
  )
}
function os(t, e) {
  return e.reduce(function (a, n) {
    return a[n]
  }, t)
}
function Va(t, e, a) {
  return u6(t) && t.type && ((a = e), (e = t), (t = t.type)), { type: t, payload: e, options: a }
}
var b6 = 'vuex bindings',
  Wr = 'vuex:mutations',
  Mn = 'vuex:actions',
  j1 = 'vuex',
  _6 = 0
function S6(t, e) {
  d6(
    {
      id: 'org.vuejs.vuex',
      app: t,
      label: 'Vuex',
      homepage: 'https://next.vuex.vuejs.org/',
      logo: 'https://vuejs.org/images/icons/favicon-96x96.png',
      packageName: 'vuex',
      componentStateTypes: [b6],
    },
    function (a) {
      a.addTimelineLayer({ id: Wr, label: 'Vuex Mutations', color: Ur }),
        a.addTimelineLayer({ id: Mn, label: 'Vuex Actions', color: Ur }),
        a.addInspector({
          id: j1,
          label: 'Vuex',
          icon: 'storage',
          treeFilterPlaceholder: 'Filter stores...',
        }),
        a.on.getInspectorTree(function (n) {
          if (n.app === t && n.inspectorId === j1)
            if (n.filter) {
              var s = []
              uo(s, e._modules.root, n.filter, ''), (n.rootNodes = s)
            } else n.rootNodes = [ho(e._modules.root, '')]
        }),
        a.on.getInspectorState(function (n) {
          if (n.app === t && n.inspectorId === j1) {
            var s = n.nodeId
            co(e, s),
              (n.state = k6(
                E6(e._modules, s),
                s === 'root' ? e.getters : e._makeLocalGettersCache,
                s,
              ))
          }
        }),
        a.on.editInspectorState(function (n) {
          if (n.app === t && n.inspectorId === j1) {
            var s = n.nodeId,
              r = n.path
            s !== 'root' && (r = s.split('/').filter(Boolean).concat(r)),
              e._withCommit(function () {
                n.set(e._state.data, r, n.state.value)
              })
          }
        }),
        e.subscribe(function (n, s) {
          var r = {}
          n.payload && (r.payload = n.payload),
            (r.state = s),
            a.notifyComponentUpdate(),
            a.sendInspectorTree(j1),
            a.sendInspectorState(j1),
            a.addTimelineEvent({ layerId: Wr, event: { time: Date.now(), title: n.type, data: r } })
        }),
        e.subscribeAction({
          before: function (n, s) {
            var r = {}
            n.payload && (r.payload = n.payload),
              (n._id = _6++),
              (n._time = Date.now()),
              (r.state = s),
              a.addTimelineEvent({
                layerId: Mn,
                event: { time: n._time, title: n.type, groupId: n._id, subtitle: 'start', data: r },
              })
          },
          after: function (n, s) {
            var r = {},
              i = Date.now() - n._time
            ;(r.duration = {
              _custom: {
                type: 'duration',
                display: i + 'ms',
                tooltip: 'Action duration',
                value: i,
              },
            }),
              n.payload && (r.payload = n.payload),
              (r.state = s),
              a.addTimelineEvent({
                layerId: Mn,
                event: {
                  time: Date.now(),
                  title: n.type,
                  groupId: n._id,
                  subtitle: 'end',
                  data: r,
                },
              })
          },
        })
    },
  )
}
var Ur = 8702998,
  w6 = 6710886,
  C6 = 16777215,
  lo = { label: 'namespaced', textColor: C6, backgroundColor: w6 }
function oo(t) {
  return t && t !== 'root' ? t.split('/').slice(-2, -1)[0] : 'Root'
}
function ho(t, e) {
  return {
    id: e || 'root',
    label: oo(e),
    tags: t.namespaced ? [lo] : [],
    children: Object.keys(t._children).map(function (a) {
      return ho(t._children[a], e + a + '/')
    }),
  }
}
function uo(t, e, a, n) {
  n.includes(a) &&
    t.push({
      id: n || 'root',
      label: n.endsWith('/') ? n.slice(0, n.length - 1) : n || 'Root',
      tags: e.namespaced ? [lo] : [],
    }),
    Object.keys(e._children).forEach(function (s) {
      uo(t, e._children[s], a, n + s + '/')
    })
}
function k6(t, e, a) {
  e = a === 'root' ? e : e[a]
  var n = Object.keys(e),
    s = {
      state: Object.keys(t.state).map(function (i) {
        return { key: i, editable: !0, value: t.state[i] }
      }),
    }
  if (n.length) {
    var r = x6(e)
    s.getters = Object.keys(r).map(function (i) {
      return {
        key: i.endsWith('/') ? oo(i) : i,
        editable: !1,
        value: v2(function () {
          return r[i]
        }),
      }
    })
  }
  return s
}
function x6(t) {
  var e = {}
  return (
    Object.keys(t).forEach(function (a) {
      var n = a.split('/')
      if (n.length > 1) {
        var s = e,
          r = n.pop()
        n.forEach(function (i) {
          s[i] || (s[i] = { _custom: { value: {}, display: i, tooltip: 'Module', abstract: !0 } }),
            (s = s[i]._custom.value)
        }),
          (s[r] = v2(function () {
            return t[a]
          }))
      } else
        e[a] = v2(function () {
          return t[a]
        })
    }),
    e
  )
}
function E6(t, e) {
  var a = e.split('/').filter(function (n) {
    return n
  })
  return a.reduce(
    function (n, s, r) {
      var i = n[s]
      if (!i) throw new Error('Missing module "' + s + '" for path "' + e + '".')
      return r === a.length - 1 ? i : i._children
    },
    e === 'root' ? t : t.root._children,
  )
}
function v2(t) {
  try {
    return t()
  } catch (e) {
    return e
  }
}
var Ee = function (e, a) {
    ;(this.runtime = a), (this._children = Object.create(null)), (this._rawModule = e)
    var n = e.state
    this.state = (typeof n == 'function' ? n() : n) || {}
  },
  po = { namespaced: { configurable: !0 } }
po.namespaced.get = function () {
  return !!this._rawModule.namespaced
}
Ee.prototype.addChild = function (e, a) {
  this._children[e] = a
}
Ee.prototype.removeChild = function (e) {
  delete this._children[e]
}
Ee.prototype.getChild = function (e) {
  return this._children[e]
}
Ee.prototype.hasChild = function (e) {
  return e in this._children
}
Ee.prototype.update = function (e) {
  ;(this._rawModule.namespaced = e.namespaced),
    e.actions && (this._rawModule.actions = e.actions),
    e.mutations && (this._rawModule.mutations = e.mutations),
    e.getters && (this._rawModule.getters = e.getters)
}
Ee.prototype.forEachChild = function (e) {
  i0(this._children, e)
}
Ee.prototype.forEachGetter = function (e) {
  this._rawModule.getters && i0(this._rawModule.getters, e)
}
Ee.prototype.forEachAction = function (e) {
  this._rawModule.actions && i0(this._rawModule.actions, e)
}
Ee.prototype.forEachMutation = function (e) {
  this._rawModule.mutations && i0(this._rawModule.mutations, e)
}
Object.defineProperties(Ee.prototype, po)
var L1 = function (e) {
  this.register([], e, !1)
}
L1.prototype.get = function (e) {
  return e.reduce(function (a, n) {
    return a.getChild(n)
  }, this.root)
}
L1.prototype.getNamespace = function (e) {
  var a = this.root
  return e.reduce(function (n, s) {
    return (a = a.getChild(s)), n + (a.namespaced ? s + '/' : '')
  }, '')
}
L1.prototype.update = function (e) {
  mo([], this.root, e)
}
L1.prototype.register = function (e, a, n) {
  var s = this
  n === void 0 && (n = !0)
  var r = new Ee(a, n)
  if (e.length === 0) this.root = r
  else {
    var i = this.get(e.slice(0, -1))
    i.addChild(e[e.length - 1], r)
  }
  a.modules &&
    i0(a.modules, function (c, l) {
      s.register(e.concat(l), c, n)
    })
}
L1.prototype.unregister = function (e) {
  var a = this.get(e.slice(0, -1)),
    n = e[e.length - 1],
    s = a.getChild(n)
  s && s.runtime && a.removeChild(n)
}
L1.prototype.isRegistered = function (e) {
  var a = this.get(e.slice(0, -1)),
    n = e[e.length - 1]
  return a ? a.hasChild(n) : !1
}
function mo(t, e, a) {
  if ((e.update(a), a.modules))
    for (var n in a.modules) {
      if (!e.getChild(n)) return
      mo(t.concat(n), e.getChild(n), a.modules[n])
    }
}
function P6(t) {
  return new ce(t)
}
var ce = function (e) {
    var a = this
    e === void 0 && (e = {})
    var n = e.plugins
    n === void 0 && (n = [])
    var s = e.strict
    s === void 0 && (s = !1)
    var r = e.devtools
    ;(this._committing = !1),
      (this._actions = Object.create(null)),
      (this._actionSubscribers = []),
      (this._mutations = Object.create(null)),
      (this._wrappedGetters = Object.create(null)),
      (this._modules = new L1(e)),
      (this._modulesNamespaceMap = Object.create(null)),
      (this._subscribers = []),
      (this._makeLocalGettersCache = Object.create(null)),
      (this._devtools = r)
    var i = this,
      c = this,
      l = c.dispatch,
      h = c.commit
    ;(this.dispatch = function (u, p) {
      return l.call(i, u, p)
    }),
      (this.commit = function (u, p, f) {
        return h.call(i, u, p, f)
      }),
      (this.strict = s)
    var o = this._modules.root.state
    sn(this, o, [], this._modules.root),
      ls(this, o),
      n.forEach(function (d) {
        return d(a)
      })
  },
  hs = { state: { configurable: !0 } }
ce.prototype.install = function (e, a) {
  e.provide(a || no, this), (e.config.globalProperties.$store = this)
  var n = this._devtools !== void 0 ? this._devtools : !1
  n && S6(e, this)
}
hs.state.get = function () {
  return this._state.data
}
hs.state.set = function (t) {}
ce.prototype.commit = function (e, a, n) {
  var s = this,
    r = Va(e, a, n),
    i = r.type,
    c = r.payload,
    l = { type: i, payload: c },
    h = this._mutations[i]
  h &&
    (this._withCommit(function () {
      h.forEach(function (d) {
        d(c)
      })
    }),
    this._subscribers.slice().forEach(function (o) {
      return o(l, s.state)
    }))
}
ce.prototype.dispatch = function (e, a) {
  var n = this,
    s = Va(e, a),
    r = s.type,
    i = s.payload,
    c = { type: r, payload: i },
    l = this._actions[r]
  if (l) {
    try {
      this._actionSubscribers
        .slice()
        .filter(function (o) {
          return o.before
        })
        .forEach(function (o) {
          return o.before(c, n.state)
        })
    } catch {}
    var h =
      l.length > 1
        ? Promise.all(
            l.map(function (o) {
              return o(i)
            }),
          )
        : l[0](i)
    return new Promise(function (o, d) {
      h.then(
        function (u) {
          try {
            n._actionSubscribers
              .filter(function (p) {
                return p.after
              })
              .forEach(function (p) {
                return p.after(c, n.state)
              })
          } catch {}
          o(u)
        },
        function (u) {
          try {
            n._actionSubscribers
              .filter(function (p) {
                return p.error
              })
              .forEach(function (p) {
                return p.error(c, n.state, u)
              })
          } catch {}
          d(u)
        },
      )
    })
  }
}
ce.prototype.subscribe = function (e, a) {
  return ro(e, this._subscribers, a)
}
ce.prototype.subscribeAction = function (e, a) {
  var n = typeof e == 'function' ? { before: e } : e
  return ro(n, this._actionSubscribers, a)
}
ce.prototype.watch = function (e, a, n) {
  var s = this
  return nt(
    function () {
      return e(s.state, s.getters)
    },
    a,
    Object.assign({}, n),
  )
}
ce.prototype.replaceState = function (e) {
  var a = this
  this._withCommit(function () {
    a._state.data = e
  })
}
ce.prototype.registerModule = function (e, a, n) {
  n === void 0 && (n = {}),
    typeof e == 'string' && (e = [e]),
    this._modules.register(e, a),
    sn(this, this.state, e, this._modules.get(e), n.preserveState),
    ls(this, this.state)
}
ce.prototype.unregisterModule = function (e) {
  var a = this
  typeof e == 'string' && (e = [e]),
    this._modules.unregister(e),
    this._withCommit(function () {
      var n = os(a.state, e.slice(0, -1))
      delete n[e[e.length - 1]]
    }),
    io(this)
}
ce.prototype.hasModule = function (e) {
  return typeof e == 'string' && (e = [e]), this._modules.isRegistered(e)
}
ce.prototype.hotUpdate = function (e) {
  this._modules.update(e), io(this, !0)
}
ce.prototype._withCommit = function (e) {
  var a = this._committing
  ;(this._committing = !0), e(), (this._committing = a)
}
Object.defineProperties(ce.prototype, hs)
const T6 = 15,
  A6 = '/',
  I6 = A6,
  O6 = '/projects/new',
  D6 = 'edit',
  R6 = '/projects/:projectId',
  L6 = 'tasks/:taskId',
  M6 = 'tasks/new',
  V6 = 'tasks/:taskId/edit',
  $6 = '/:pathMatch(.*)*',
  fo = 'https://jsonplaceholder.typicode.com/posts/',
  vo = 'https://jsonplaceholder.typicode.com/posts',
  zo = 'https://jsonplaceholder.typicode.com/comments?postId='
function ds(t) {
  return String(t).charAt(0).toUpperCase() + String(t).slice(1)
}
function cm(t) {
  return new Date(t).toISOString().split('T')[0].replace(/-/g, '-')
}
const za = { LOW: 'low', MEDIUM: 'medium', HIGH: 'high' },
  lm = { low: 0, medium: 1, high: 2 },
  ga = { PENDING: 'pending', IN_PROGRESS: 'in-progress', COMPLETED: 'completed' }
function go() {
  const t = Math.floor(Math.random() * 1801) + 200
  return new Promise((e) => {
    setTimeout(e, t)
  })
}
const us = () => Math.floor(Math.random() * 9899) + 102
function rn(t, e = !1) {
  return t
    .map(({ id: a, title: n, userId: s, body: r }) => ({
      id: e ? us() : a,
      title: ds(n),
      userId: s,
      description: r,
    }))
    .slice(0, T6)
}
function N6() {
  const t = Math.random()
  return t < 0.3 ? ga.COMPLETED : t > 0.6 ? ga.PENDING : ga.IN_PROGRESS
}
function B6() {
  const t = Math.random()
  return t < 0.3 ? za.HIGH : t > 0.6 ? za.LOW : za.MEDIUM
}
function F6() {
  const t = new Date(),
    e = new Date()
  e.setDate(t.getDate() - 1)
  const a = new Date(),
    n = 14 - a.getDay()
  a.setDate(t.getDate() + n)
  const s = e.getTime() + Math.random() * (a.getTime() - e.getTime())
  return new Date(s)
}
function j6(t, e = !1) {
  return t.map(({ id: a, name: n, postId: s, body: r }) => ({
    id: e ? us() : a,
    title: ds(n),
    projectId: s,
    description: r,
    status: N6(),
    priority: B6(),
    dueDate: F6(),
  }))
}
function H6(t) {
  return t.map(
    ({ title: e, projectId: a, description: n, status: s, priority: r, dueDate: i }) => ({
      id: us(),
      title: ds(e),
      projectId: a,
      description: n,
      status: s,
      priority: r,
      dueDate: i,
    }),
  )
}
async function W6() {
  try {
    const e = (await Promise.allSettled([fetch(vo).then((a) => a.json()), go()]))[0]
    return e.status === 'fulfilled' ? rn(e.value) : (console.error('[Fetch failed] ', e.reason), [])
  } catch (t) {
    return console.error('[Failed getting projects list] ', t), []
  }
}
async function U6(t) {
  try {
    const e = await fetch(`${fo}${t}`)
    if (!e.ok)
      return (
        console.error('[Fetch project] ', `Fetching project failed with status ${e.status}`), null
      )
    const a = await e.json()
    return rn([a])[0]
  } catch (e) {
    return console.error('[Failed getting project] ', e), null
  }
}
async function G6(t) {
  const e = { ...t, body: t.description }
  try {
    const a = await fetch(vo, {
      method: 'POST',
      body: JSON.stringify(e),
      headers: { 'Content-Type': 'application/json; charset=UTF-8' },
    })
    if (!a.ok) throw new Error(`[API:createProject] failed with status ${a.status}`)
    const n = await a.json()
    return rn([n], !0)[0]
  } catch (a) {
    return console.error(a), null
  }
}
async function K6(t) {
  const e = { ...t, body: t.description }
  try {
    const a = await fetch(`${fo}${t.id}`, {
      method: 'PUT',
      body: JSON.stringify(e),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    })
    if (!a.ok) throw new Error(`[API:updateProject]: failed with status ${a.status}`)
    const n = await a.json()
    return rn([n])[0]
  } catch (a) {
    return console.error(a), null
  }
}
const Vn = 'loadingStarted',
  $n = 'loadingStopped',
  Gr = 'setCurrentProject',
  Kr = 'setProjectsData',
  Yr = 'deleteProject',
  qr = 'saveProject',
  Jr = 'updateProject',
  Y6 = {
    namespaced: !0,
    state: { isLoadingProject: !1, currentProject: null, projectsList: [] },
    mutations: {
      [Vn](t) {
        t.isLoadingProject = !0
      },
      [$n](t) {
        t.isLoadingProject = !1
      },
      [Gr](t, e) {
        t.currentProject = e
      },
      [Kr](t, e) {
        t.projectsList = e
      },
      [Yr](t, e) {
        t.projectsList = t.projectsList.filter((a) => a.id !== e)
      },
      [qr](t, e) {
        t.projectsList.push(e)
      },
      [Jr](t, e) {
        const a = t.projectsList.findIndex((n) => n.id === e.id)
        a >= 0 ? (t.projectsList[a] = e) : t.projectsList.push(e)
      },
    },
    actions: {
      addIsLoading({ commit: t }) {
        t(Vn)
      },
      removeIsLoading({ commit: t }) {
        t($n)
      },
      setCurrentProject({ commit: t }, e) {
        t(Gr, e)
      },
      async setProjectsData({ commit: t }) {
        t(Vn)
        try {
          const e = await W6()
          t(Kr, e)
        } catch (e) {
          console.error('[Error]: fetching projects: ', e)
        } finally {
          t($n)
        }
      },
      async getById({ state: t }, e) {
        const a = await U6(e)
        a && (t.projectsList.push(a), (t.currentProject = a))
      },
      async deleteProject({ commit: t, dispatch: e }, a) {
        await e('tasks/deleteTasksByProjectId', a, { root: !0 }), t(Yr, a)
      },
      async createProject({ commit: t }, e) {
        try {
          const a = await G6(e)
          if (!a) throw new Error('Server responded with an error')
          return t(qr, a), a
        } catch (a) {
          return console.error('[store:createProject]', a), Promise.reject(a)
        }
      },
      async updateProject({ commit: t }, e) {
        try {
          const a = await K6(e)
          if (!a) throw new Error('Oops! Updating projects is limited by the back-end side.')
          return t(Jr, a), a
        } catch (a) {
          return console.error(a), Promise.reject(a)
        }
      },
    },
    getters: {
      isLoading: (t) => t.isLoadingProject,
      list: (t) => t.projectsList,
      current: (t) => t.currentProject,
      findProjectById: (t) => (e) => t.projectsList.find((a) => a.id === e),
    },
  }
async function q6(t) {
  try {
    const a = (await Promise.allSettled([fetch(`${zo}${t}`).then((n) => n.json()), go()]))[0]
    return a.status === 'fulfilled' ? j6(a.value) : (console.error('[Fetch failed] ', a.reason), [])
  } catch (e) {
    return console.error('[Failed getting tasks list] ', e), []
  }
}
async function J6(t) {
  const e = { ...t, name: t.title, postId: t.projectId, body: t.description }
  try {
    const a = await fetch(`${zo}${t.projectId}`, {
      method: 'POST',
      body: JSON.stringify(e),
      headers: { 'Content-Type': 'application/json; charset=UTF-8' },
    })
    if (!a.ok) throw new Error(`[Create task]: failed with status ${a.status}`)
    const n = await a.json()
    return H6([n])[0]
  } catch (a) {
    return console.error('[Failed getting project] ', a), null
  }
}
async function Z6(t) {
  throw (
    (console.error(`Attempt to update task with ID: ${t} failed due to the API response.`),
    new Error('API of JSONPlaceholder is not allowed to update tasks.'))
  )
}
const Nn = 'loadingStarted',
  Bn = 'loadingStopped',
  Zr = 'setTasksData',
  Xr = 'deleteTask',
  Qr = 'deleteTasks',
  ti = 'setFilters',
  ei = 'setPriorityOrder',
  ai = 'resetFilters',
  ni = 'createTask',
  si = 'updateTask',
  ri = Object.values(ga),
  ii = za.HIGH,
  X6 = {
    namespaced: !0,
    state: { isLoadingTasks: !1, tasksByProjectId: {}, filters: ri, priorityOrder: ii },
    mutations: {
      [Nn](t) {
        t.isLoadingTasks = !0
      },
      [Bn](t) {
        t.isLoadingTasks = !1
      },
      [Zr](t, { tasksList: e, projectId: a }) {
        t.tasksByProjectId[a] = e
      },
      [ni](t, e) {
        t.tasksByProjectId[e.projectId].push(e)
      },
      [si](t, e) {
        const a = t.tasksByProjectId[e.projectId],
          n = a.findIndex((s) => s.id === e.id)
        n !== -1 ? (a[n] = e) : a.push(e)
      },
      [Xr](t, { projectId: e, taskId: a }) {
        t.tasksByProjectId[e] = t.tasksByProjectId[e].filter((n) => n.id !== a)
      },
      [Qr](t, e) {
        delete t.tasksByProjectId[e]
      },
      [ti](t, e) {
        t.filters = e
      },
      [ei](t, e) {
        t.priorityOrder = e
      },
      [ai](t) {
        ;(t.filters = ri), (t.priorityOrder = ii)
      },
    },
    actions: {
      addIsLoading({ commit: t }) {
        t(Nn)
      },
      removeIsLoading({ commit: t }) {
        t(Bn)
      },
      async getTasksData({ commit: t }, e) {
        t(Nn)
        try {
          const a = await q6(e)
          t(Zr, { tasksList: a, projectId: e })
        } catch (a) {
          console.error('[Error]: fetching tasks: ', a)
        } finally {
          t(Bn)
        }
      },
      async deleteTaskById({ commit: t }, { taskId: e, projectId: a }) {
        t(Xr, { taskId: e, projectId: a })
      },
      async deleteTasksByProjectId({ commit: t }, e) {
        t(Qr, e)
      },
      async createTask({ commit: t }, e) {
        try {
          const a = await J6(e)
          if (!a) throw new Error('Server responded with an error')
          return t(ni, a), a
        } catch (a) {
          return console.error('[store:createTask]', a), Promise.reject(a)
        }
      },
      async updateTask({ commit: t }, e) {
        try {
          const a = await Z6(e.id)
          if (!a) throw new Error('Oops! Updating tasks is limited by the back-end side.')
          return t(si, a), a
        } catch (a) {
          return console.error(a), Promise.reject(a)
        }
      },
      setFilters({ commit: t }, e) {
        t(ti, e)
      },
      setPriority({ commit: t }, e) {
        t(ei, e)
      },
      resetFilters({ commit: t }) {
        t(ai)
      },
    },
    getters: {
      isLoading: (t) => t.isLoadingTasks,
      getFilters: (t) => t.filters,
      getPriorityOrder: (t) => t.priorityOrder,
      getTasksByProjectId: (t) => (e) => t.tasksByProjectId[e] || [],
      hasTasks: (t, e) => (a) => e.getTasksByProjectId(a).length > 0,
    },
  },
  Q6 = { success: { color: 'success' }, error: { color: 'error' } },
  ci = 'addSnackBar',
  t4 = 2e3,
  e4 = ({ text: t, type: e, duration: a }) => {
    const { color: n } = Q6[e]
    return { text: t, color: n, duration: a }
  },
  a4 = {
    namespaced: !0,
    state: { snackBar: null },
    mutations: {
      [ci](t, e) {
        t.snackBar = e
      },
    },
    actions: {
      add({ commit: t }, { text: e, type: a, duration: n = t4 }) {
        const s = e4({ text: e, type: a, duration: n })
        t(ci, s)
      },
    },
    getters: { getItem: (t) => t.snackBar },
  },
  G0 = P6({ modules: { projects: Y6, tasks: X6, snacks: a4 } }),
  n4 = 'modulepreload',
  s4 = function (t) {
    return '/' + t
  },
  li = {},
  S1 = function (e, a, n) {
    let s = Promise.resolve()
    if (a && a.length > 0) {
      document.getElementsByTagName('link')
      const i = document.querySelector('meta[property=csp-nonce]'),
        c = (i == null ? void 0 : i.nonce) || (i == null ? void 0 : i.getAttribute('nonce'))
      s = Promise.allSettled(
        a.map((l) => {
          if (((l = s4(l)), l in li)) return
          li[l] = !0
          const h = l.endsWith('.css'),
            o = h ? '[rel="stylesheet"]' : ''
          if (document.querySelector(`link[href="${l}"]${o}`)) return
          const d = document.createElement('link')
          if (
            ((d.rel = h ? 'stylesheet' : n4),
            h || (d.as = 'script'),
            (d.crossOrigin = ''),
            (d.href = l),
            c && d.setAttribute('nonce', c),
            document.head.appendChild(d),
            h)
          )
            return new Promise((u, p) => {
              d.addEventListener('load', u),
                d.addEventListener('error', () => p(new Error(`Unable to preload CSS for ${l}`)))
            })
        }),
      )
    }
    function r(i) {
      const c = new Event('vite:preloadError', { cancelable: !0 })
      if (((c.payload = i), window.dispatchEvent(c), !c.defaultPrevented)) throw i
    }
    return s.then((i) => {
      for (const c of i || []) c.status === 'rejected' && r(c.reason)
      return e().catch(r)
    })
  }
/*!
 * vue-router v4.5.0
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */ const U1 = typeof document < 'u'
function yo(t) {
  return typeof t == 'object' || 'displayName' in t || 'props' in t || '__vccOpts' in t
}
function r4(t) {
  return t.__esModule || t[Symbol.toStringTag] === 'Module' || (t.default && yo(t.default))
}
const zt = Object.assign
function Fn(t, e) {
  const a = {}
  for (const n in e) {
    const s = e[n]
    a[n] = xe(s) ? s.map(t) : t(s)
  }
  return a
}
const k0 = () => {},
  xe = Array.isArray,
  bo = /#/g,
  i4 = /&/g,
  c4 = /\//g,
  l4 = /=/g,
  o4 = /\?/g,
  _o = /\+/g,
  h4 = /%5B/g,
  d4 = /%5D/g,
  So = /%5E/g,
  u4 = /%60/g,
  wo = /%7B/g,
  p4 = /%7C/g,
  Co = /%7D/g,
  m4 = /%20/g
function ps(t) {
  return encodeURI('' + t)
    .replace(p4, '|')
    .replace(h4, '[')
    .replace(d4, ']')
}
function f4(t) {
  return ps(t).replace(wo, '{').replace(Co, '}').replace(So, '^')
}
function z2(t) {
  return ps(t)
    .replace(_o, '%2B')
    .replace(m4, '+')
    .replace(bo, '%23')
    .replace(i4, '%26')
    .replace(u4, '`')
    .replace(wo, '{')
    .replace(Co, '}')
    .replace(So, '^')
}
function v4(t) {
  return z2(t).replace(l4, '%3D')
}
function z4(t) {
  return ps(t).replace(bo, '%23').replace(o4, '%3F')
}
function g4(t) {
  return t == null ? '' : z4(t).replace(c4, '%2F')
}
function M0(t) {
  try {
    return decodeURIComponent('' + t)
  } catch {}
  return '' + t
}
const y4 = /\/$/,
  b4 = (t) => t.replace(y4, '')
function jn(t, e, a = '/') {
  let n,
    s = {},
    r = '',
    i = ''
  const c = e.indexOf('#')
  let l = e.indexOf('?')
  return (
    c < l && c >= 0 && (l = -1),
    l > -1 && ((n = e.slice(0, l)), (r = e.slice(l + 1, c > -1 ? c : e.length)), (s = t(r))),
    c > -1 && ((n = n || e.slice(0, c)), (i = e.slice(c, e.length))),
    (n = C4(n ?? e, a)),
    { fullPath: n + (r && '?') + r + i, path: n, query: s, hash: M0(i) }
  )
}
function _4(t, e) {
  const a = e.query ? t(e.query) : ''
  return e.path + (a && '?') + a + (e.hash || '')
}
function oi(t, e) {
  return !e || !t.toLowerCase().startsWith(e.toLowerCase()) ? t : t.slice(e.length) || '/'
}
function S4(t, e, a) {
  const n = e.matched.length - 1,
    s = a.matched.length - 1
  return (
    n > -1 &&
    n === s &&
    e0(e.matched[n], a.matched[s]) &&
    ko(e.params, a.params) &&
    t(e.query) === t(a.query) &&
    e.hash === a.hash
  )
}
function e0(t, e) {
  return (t.aliasOf || t) === (e.aliasOf || e)
}
function ko(t, e) {
  if (Object.keys(t).length !== Object.keys(e).length) return !1
  for (const a in t) if (!w4(t[a], e[a])) return !1
  return !0
}
function w4(t, e) {
  return xe(t) ? hi(t, e) : xe(e) ? hi(e, t) : t === e
}
function hi(t, e) {
  return xe(e)
    ? t.length === e.length && t.every((a, n) => a === e[n])
    : t.length === 1 && t[0] === e
}
function C4(t, e) {
  if (t.startsWith('/')) return t
  if (!t) return e
  const a = e.split('/'),
    n = t.split('/'),
    s = n[n.length - 1]
  ;(s === '..' || s === '.') && n.push('')
  let r = a.length - 1,
    i,
    c
  for (i = 0; i < n.length; i++)
    if (((c = n[i]), c !== '.'))
      if (c === '..') r > 1 && r--
      else break
  return a.slice(0, r).join('/') + '/' + n.slice(i).join('/')
}
const n1 = {
  path: '/',
  name: void 0,
  params: {},
  query: {},
  hash: '',
  fullPath: '/',
  matched: [],
  meta: {},
  redirectedFrom: void 0,
}
var V0
;(function (t) {
  ;(t.pop = 'pop'), (t.push = 'push')
})(V0 || (V0 = {}))
var x0
;(function (t) {
  ;(t.back = 'back'), (t.forward = 'forward'), (t.unknown = '')
})(x0 || (x0 = {}))
function k4(t) {
  if (!t)
    if (U1) {
      const e = document.querySelector('base')
      ;(t = (e && e.getAttribute('href')) || '/'), (t = t.replace(/^\w+:\/\/[^\/]+/, ''))
    } else t = '/'
  return t[0] !== '/' && t[0] !== '#' && (t = '/' + t), b4(t)
}
const x4 = /^[^#]+#/
function E4(t, e) {
  return t.replace(x4, '#') + e
}
function P4(t, e) {
  const a = document.documentElement.getBoundingClientRect(),
    n = t.getBoundingClientRect()
  return {
    behavior: e.behavior,
    left: n.left - a.left - (e.left || 0),
    top: n.top - a.top - (e.top || 0),
  }
}
const cn = () => ({ left: window.scrollX, top: window.scrollY })
function T4(t) {
  let e
  if ('el' in t) {
    const a = t.el,
      n = typeof a == 'string' && a.startsWith('#'),
      s =
        typeof a == 'string'
          ? n
            ? document.getElementById(a.slice(1))
            : document.querySelector(a)
          : a
    if (!s) return
    e = P4(s, t)
  } else e = t
  'scrollBehavior' in document.documentElement.style
    ? window.scrollTo(e)
    : window.scrollTo(
        e.left != null ? e.left : window.scrollX,
        e.top != null ? e.top : window.scrollY,
      )
}
function di(t, e) {
  return (history.state ? history.state.position - e : -1) + t
}
const g2 = new Map()
function A4(t, e) {
  g2.set(t, e)
}
function I4(t) {
  const e = g2.get(t)
  return g2.delete(t), e
}
let O4 = () => location.protocol + '//' + location.host
function xo(t, e) {
  const { pathname: a, search: n, hash: s } = e,
    r = t.indexOf('#')
  if (r > -1) {
    let c = s.includes(t.slice(r)) ? t.slice(r).length : 1,
      l = s.slice(c)
    return l[0] !== '/' && (l = '/' + l), oi(l, '')
  }
  return oi(a, t) + n + s
}
function D4(t, e, a, n) {
  let s = [],
    r = [],
    i = null
  const c = ({ state: u }) => {
    const p = xo(t, location),
      f = a.value,
      m = e.value
    let g = 0
    if (u) {
      if (((a.value = p), (e.value = u), i && i === f)) {
        i = null
        return
      }
      g = m ? u.position - m.position : 0
    } else n(p)
    s.forEach((S) => {
      S(a.value, f, {
        delta: g,
        type: V0.pop,
        direction: g ? (g > 0 ? x0.forward : x0.back) : x0.unknown,
      })
    })
  }
  function l() {
    i = a.value
  }
  function h(u) {
    s.push(u)
    const p = () => {
      const f = s.indexOf(u)
      f > -1 && s.splice(f, 1)
    }
    return r.push(p), p
  }
  function o() {
    const { history: u } = window
    u.state && u.replaceState(zt({}, u.state, { scroll: cn() }), '')
  }
  function d() {
    for (const u of r) u()
    ;(r = []),
      window.removeEventListener('popstate', c),
      window.removeEventListener('beforeunload', o)
  }
  return (
    window.addEventListener('popstate', c),
    window.addEventListener('beforeunload', o, { passive: !0 }),
    { pauseListeners: l, listen: h, destroy: d }
  )
}
function ui(t, e, a, n = !1, s = !1) {
  return {
    back: t,
    current: e,
    forward: a,
    replaced: n,
    position: window.history.length,
    scroll: s ? cn() : null,
  }
}
function R4(t) {
  const { history: e, location: a } = window,
    n = { value: xo(t, a) },
    s = { value: e.state }
  s.value ||
    r(
      n.value,
      {
        back: null,
        current: n.value,
        forward: null,
        position: e.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0,
    )
  function r(l, h, o) {
    const d = t.indexOf('#'),
      u = d > -1 ? (a.host && document.querySelector('base') ? t : t.slice(d)) + l : O4() + t + l
    try {
      e[o ? 'replaceState' : 'pushState'](h, '', u), (s.value = h)
    } catch (p) {
      console.error(p), a[o ? 'replace' : 'assign'](u)
    }
  }
  function i(l, h) {
    const o = zt({}, e.state, ui(s.value.back, l, s.value.forward, !0), h, {
      position: s.value.position,
    })
    r(l, o, !0), (n.value = l)
  }
  function c(l, h) {
    const o = zt({}, s.value, e.state, { forward: l, scroll: cn() })
    r(o.current, o, !0)
    const d = zt({}, ui(n.value, l, null), { position: o.position + 1 }, h)
    r(l, d, !1), (n.value = l)
  }
  return { location: n, state: s, push: c, replace: i }
}
function L4(t) {
  t = k4(t)
  const e = R4(t),
    a = D4(t, e.state, e.location, e.replace)
  function n(r, i = !0) {
    i || a.pauseListeners(), history.go(r)
  }
  const s = zt({ location: '', base: t, go: n, createHref: E4.bind(null, t) }, e, a)
  return (
    Object.defineProperty(s, 'location', { enumerable: !0, get: () => e.location.value }),
    Object.defineProperty(s, 'state', { enumerable: !0, get: () => e.state.value }),
    s
  )
}
function M4(t) {
  return typeof t == 'string' || (t && typeof t == 'object')
}
function Eo(t) {
  return typeof t == 'string' || typeof t == 'symbol'
}
const Po = Symbol('')
var pi
;(function (t) {
  ;(t[(t.aborted = 4)] = 'aborted'),
    (t[(t.cancelled = 8)] = 'cancelled'),
    (t[(t.duplicated = 16)] = 'duplicated')
})(pi || (pi = {}))
function a0(t, e) {
  return zt(new Error(), { type: t, [Po]: !0 }, e)
}
function Ue(t, e) {
  return t instanceof Error && Po in t && (e == null || !!(t.type & e))
}
const mi = '[^/]+?',
  V4 = { sensitive: !1, strict: !1, start: !0, end: !0 },
  $4 = /[.+*?^${}()[\]/\\]/g
function N4(t, e) {
  const a = zt({}, V4, e),
    n = []
  let s = a.start ? '^' : ''
  const r = []
  for (const h of t) {
    const o = h.length ? [] : [90]
    a.strict && !h.length && (s += '/')
    for (let d = 0; d < h.length; d++) {
      const u = h[d]
      let p = 40 + (a.sensitive ? 0.25 : 0)
      if (u.type === 0) d || (s += '/'), (s += u.value.replace($4, '\\$&')), (p += 40)
      else if (u.type === 1) {
        const { value: f, repeatable: m, optional: g, regexp: S } = u
        r.push({ name: f, repeatable: m, optional: g })
        const b = S || mi
        if (b !== mi) {
          p += 10
          try {
            new RegExp(`(${b})`)
          } catch (x) {
            throw new Error(`Invalid custom RegExp for param "${f}" (${b}): ` + x.message)
          }
        }
        let w = m ? `((?:${b})(?:/(?:${b}))*)` : `(${b})`
        d || (w = g && h.length < 2 ? `(?:/${w})` : '/' + w),
          g && (w += '?'),
          (s += w),
          (p += 20),
          g && (p += -8),
          m && (p += -20),
          b === '.*' && (p += -50)
      }
      o.push(p)
    }
    n.push(o)
  }
  if (a.strict && a.end) {
    const h = n.length - 1
    n[h][n[h].length - 1] += 0.7000000000000001
  }
  a.strict || (s += '/?'), a.end ? (s += '$') : a.strict && !s.endsWith('/') && (s += '(?:/|$)')
  const i = new RegExp(s, a.sensitive ? '' : 'i')
  function c(h) {
    const o = h.match(i),
      d = {}
    if (!o) return null
    for (let u = 1; u < o.length; u++) {
      const p = o[u] || '',
        f = r[u - 1]
      d[f.name] = p && f.repeatable ? p.split('/') : p
    }
    return d
  }
  function l(h) {
    let o = '',
      d = !1
    for (const u of t) {
      ;(!d || !o.endsWith('/')) && (o += '/'), (d = !1)
      for (const p of u)
        if (p.type === 0) o += p.value
        else if (p.type === 1) {
          const { value: f, repeatable: m, optional: g } = p,
            S = f in h ? h[f] : ''
          if (xe(S) && !m)
            throw new Error(
              `Provided param "${f}" is an array but it is not repeatable (* or + modifiers)`,
            )
          const b = xe(S) ? S.join('/') : S
          if (!b)
            if (g) u.length < 2 && (o.endsWith('/') ? (o = o.slice(0, -1)) : (d = !0))
            else throw new Error(`Missing required param "${f}"`)
          o += b
        }
    }
    return o || '/'
  }
  return { re: i, score: n, keys: r, parse: c, stringify: l }
}
function B4(t, e) {
  let a = 0
  for (; a < t.length && a < e.length; ) {
    const n = e[a] - t[a]
    if (n) return n
    a++
  }
  return t.length < e.length
    ? t.length === 1 && t[0] === 80
      ? -1
      : 1
    : t.length > e.length
      ? e.length === 1 && e[0] === 80
        ? 1
        : -1
      : 0
}
function To(t, e) {
  let a = 0
  const n = t.score,
    s = e.score
  for (; a < n.length && a < s.length; ) {
    const r = B4(n[a], s[a])
    if (r) return r
    a++
  }
  if (Math.abs(s.length - n.length) === 1) {
    if (fi(n)) return 1
    if (fi(s)) return -1
  }
  return s.length - n.length
}
function fi(t) {
  const e = t[t.length - 1]
  return t.length > 0 && e[e.length - 1] < 0
}
const F4 = { type: 0, value: '' },
  j4 = /[a-zA-Z0-9_]/
function H4(t) {
  if (!t) return [[]]
  if (t === '/') return [[F4]]
  if (!t.startsWith('/')) throw new Error(`Invalid path "${t}"`)
  function e(p) {
    throw new Error(`ERR (${a})/"${h}": ${p}`)
  }
  let a = 0,
    n = a
  const s = []
  let r
  function i() {
    r && s.push(r), (r = [])
  }
  let c = 0,
    l,
    h = '',
    o = ''
  function d() {
    h &&
      (a === 0
        ? r.push({ type: 0, value: h })
        : a === 1 || a === 2 || a === 3
          ? (r.length > 1 &&
              (l === '*' || l === '+') &&
              e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),
            r.push({
              type: 1,
              value: h,
              regexp: o,
              repeatable: l === '*' || l === '+',
              optional: l === '*' || l === '?',
            }))
          : e('Invalid state to consume buffer'),
      (h = ''))
  }
  function u() {
    h += l
  }
  for (; c < t.length; ) {
    if (((l = t[c++]), l === '\\' && a !== 2)) {
      ;(n = a), (a = 4)
      continue
    }
    switch (a) {
      case 0:
        l === '/' ? (h && d(), i()) : l === ':' ? (d(), (a = 1)) : u()
        break
      case 4:
        u(), (a = n)
        break
      case 1:
        l === '('
          ? (a = 2)
          : j4.test(l)
            ? u()
            : (d(), (a = 0), l !== '*' && l !== '?' && l !== '+' && c--)
        break
      case 2:
        l === ')' ? (o[o.length - 1] == '\\' ? (o = o.slice(0, -1) + l) : (a = 3)) : (o += l)
        break
      case 3:
        d(), (a = 0), l !== '*' && l !== '?' && l !== '+' && c--, (o = '')
        break
      default:
        e('Unknown state')
        break
    }
  }
  return a === 2 && e(`Unfinished custom RegExp for param "${h}"`), d(), i(), s
}
function W4(t, e, a) {
  const n = N4(H4(t.path), a),
    s = zt(n, { record: t, parent: e, children: [], alias: [] })
  return e && !s.record.aliasOf == !e.record.aliasOf && e.children.push(s), s
}
function U4(t, e) {
  const a = [],
    n = new Map()
  e = yi({ strict: !1, end: !0, sensitive: !1 }, e)
  function s(d) {
    return n.get(d)
  }
  function r(d, u, p) {
    const f = !p,
      m = zi(d)
    m.aliasOf = p && p.record
    const g = yi(e, d),
      S = [m]
    if ('alias' in d) {
      const x = typeof d.alias == 'string' ? [d.alias] : d.alias
      for (const M of x)
        S.push(
          zi(
            zt({}, m, {
              components: p ? p.record.components : m.components,
              path: M,
              aliasOf: p ? p.record : m,
            }),
          ),
        )
    }
    let b, w
    for (const x of S) {
      const { path: M } = x
      if (u && M[0] !== '/') {
        const O = u.record.path,
          D = O[O.length - 1] === '/' ? '' : '/'
        x.path = u.record.path + (M && D + M)
      }
      if (
        ((b = W4(x, u, g)),
        p
          ? p.alias.push(b)
          : ((w = w || b), w !== b && w.alias.push(b), f && d.name && !gi(b) && i(d.name)),
        Ao(b) && l(b),
        m.children)
      ) {
        const O = m.children
        for (let D = 0; D < O.length; D++) r(O[D], b, p && p.children[D])
      }
      p = p || b
    }
    return w
      ? () => {
          i(w)
        }
      : k0
  }
  function i(d) {
    if (Eo(d)) {
      const u = n.get(d)
      u && (n.delete(d), a.splice(a.indexOf(u), 1), u.children.forEach(i), u.alias.forEach(i))
    } else {
      const u = a.indexOf(d)
      u > -1 &&
        (a.splice(u, 1),
        d.record.name && n.delete(d.record.name),
        d.children.forEach(i),
        d.alias.forEach(i))
    }
  }
  function c() {
    return a
  }
  function l(d) {
    const u = Y4(d, a)
    a.splice(u, 0, d), d.record.name && !gi(d) && n.set(d.record.name, d)
  }
  function h(d, u) {
    let p,
      f = {},
      m,
      g
    if ('name' in d && d.name) {
      if (((p = n.get(d.name)), !p)) throw a0(1, { location: d })
      ;(g = p.record.name),
        (f = zt(
          vi(
            u.params,
            p.keys
              .filter((w) => !w.optional)
              .concat(p.parent ? p.parent.keys.filter((w) => w.optional) : [])
              .map((w) => w.name),
          ),
          d.params &&
            vi(
              d.params,
              p.keys.map((w) => w.name),
            ),
        )),
        (m = p.stringify(f))
    } else if (d.path != null)
      (m = d.path), (p = a.find((w) => w.re.test(m))), p && ((f = p.parse(m)), (g = p.record.name))
    else {
      if (((p = u.name ? n.get(u.name) : a.find((w) => w.re.test(u.path))), !p))
        throw a0(1, { location: d, currentLocation: u })
      ;(g = p.record.name), (f = zt({}, u.params, d.params)), (m = p.stringify(f))
    }
    const S = []
    let b = p
    for (; b; ) S.unshift(b.record), (b = b.parent)
    return { name: g, path: m, params: f, matched: S, meta: K4(S) }
  }
  t.forEach((d) => r(d))
  function o() {
    ;(a.length = 0), n.clear()
  }
  return {
    addRoute: r,
    resolve: h,
    removeRoute: i,
    clearRoutes: o,
    getRoutes: c,
    getRecordMatcher: s,
  }
}
function vi(t, e) {
  const a = {}
  for (const n of e) n in t && (a[n] = t[n])
  return a
}
function zi(t) {
  const e = {
    path: t.path,
    redirect: t.redirect,
    name: t.name,
    meta: t.meta || {},
    aliasOf: t.aliasOf,
    beforeEnter: t.beforeEnter,
    props: G4(t),
    children: t.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components: 'components' in t ? t.components || null : t.component && { default: t.component },
  }
  return Object.defineProperty(e, 'mods', { value: {} }), e
}
function G4(t) {
  const e = {},
    a = t.props || !1
  if ('component' in t) e.default = a
  else for (const n in t.components) e[n] = typeof a == 'object' ? a[n] : a
  return e
}
function gi(t) {
  for (; t; ) {
    if (t.record.aliasOf) return !0
    t = t.parent
  }
  return !1
}
function K4(t) {
  return t.reduce((e, a) => zt(e, a.meta), {})
}
function yi(t, e) {
  const a = {}
  for (const n in t) a[n] = n in e ? e[n] : t[n]
  return a
}
function Y4(t, e) {
  let a = 0,
    n = e.length
  for (; a !== n; ) {
    const r = (a + n) >> 1
    To(t, e[r]) < 0 ? (n = r) : (a = r + 1)
  }
  const s = q4(t)
  return s && (n = e.lastIndexOf(s, n - 1)), n
}
function q4(t) {
  let e = t
  for (; (e = e.parent); ) if (Ao(e) && To(t, e) === 0) return e
}
function Ao({ record: t }) {
  return !!(t.name || (t.components && Object.keys(t.components).length) || t.redirect)
}
function J4(t) {
  const e = {}
  if (t === '' || t === '?') return e
  const n = (t[0] === '?' ? t.slice(1) : t).split('&')
  for (let s = 0; s < n.length; ++s) {
    const r = n[s].replace(_o, ' '),
      i = r.indexOf('='),
      c = M0(i < 0 ? r : r.slice(0, i)),
      l = i < 0 ? null : M0(r.slice(i + 1))
    if (c in e) {
      let h = e[c]
      xe(h) || (h = e[c] = [h]), h.push(l)
    } else e[c] = l
  }
  return e
}
function bi(t) {
  let e = ''
  for (let a in t) {
    const n = t[a]
    if (((a = v4(a)), n == null)) {
      n !== void 0 && (e += (e.length ? '&' : '') + a)
      continue
    }
    ;(xe(n) ? n.map((r) => r && z2(r)) : [n && z2(n)]).forEach((r) => {
      r !== void 0 && ((e += (e.length ? '&' : '') + a), r != null && (e += '=' + r))
    })
  }
  return e
}
function Z4(t) {
  const e = {}
  for (const a in t) {
    const n = t[a]
    n !== void 0 &&
      (e[a] = xe(n) ? n.map((s) => (s == null ? null : '' + s)) : n == null ? n : '' + n)
  }
  return e
}
const X4 = Symbol(''),
  _i = Symbol(''),
  ln = Symbol(''),
  ms = Symbol(''),
  y2 = Symbol('')
function f0() {
  let t = []
  function e(n) {
    return (
      t.push(n),
      () => {
        const s = t.indexOf(n)
        s > -1 && t.splice(s, 1)
      }
    )
  }
  function a() {
    t = []
  }
  return { add: e, list: () => t.slice(), reset: a }
}
function l1(t, e, a, n, s, r = (i) => i()) {
  const i = n && (n.enterCallbacks[s] = n.enterCallbacks[s] || [])
  return () =>
    new Promise((c, l) => {
      const h = (u) => {
          u === !1
            ? l(a0(4, { from: a, to: e }))
            : u instanceof Error
              ? l(u)
              : M4(u)
                ? l(a0(2, { from: e, to: u }))
                : (i && n.enterCallbacks[s] === i && typeof u == 'function' && i.push(u), c())
        },
        o = r(() => t.call(n && n.instances[s], e, a, h))
      let d = Promise.resolve(o)
      t.length < 3 && (d = d.then(h)), d.catch((u) => l(u))
    })
}
function Hn(t, e, a, n, s = (r) => r()) {
  const r = []
  for (const i of t)
    for (const c in i.components) {
      let l = i.components[c]
      if (!(e !== 'beforeRouteEnter' && !i.instances[c]))
        if (yo(l)) {
          const o = (l.__vccOpts || l)[e]
          o && r.push(l1(o, a, n, i, c, s))
        } else {
          let h = l()
          r.push(() =>
            h.then((o) => {
              if (!o) throw new Error(`Couldn't resolve component "${c}" at "${i.path}"`)
              const d = r4(o) ? o.default : o
              ;(i.mods[c] = o), (i.components[c] = d)
              const p = (d.__vccOpts || d)[e]
              return p && l1(p, a, n, i, c, s)()
            }),
          )
        }
    }
  return r
}
function Si(t) {
  const e = yt(ln),
    a = yt(ms),
    n = _(() => {
      const l = Ot(t.to)
      return e.resolve(l)
    }),
    s = _(() => {
      const { matched: l } = n.value,
        { length: h } = l,
        o = l[h - 1],
        d = a.matched
      if (!o || !d.length) return -1
      const u = d.findIndex(e0.bind(null, o))
      if (u > -1) return u
      const p = wi(l[h - 2])
      return h > 1 && wi(o) === p && d[d.length - 1].path !== p
        ? d.findIndex(e0.bind(null, l[h - 2]))
        : u
    }),
    r = _(() => s.value > -1 && n5(a.params, n.value.params)),
    i = _(() => s.value > -1 && s.value === a.matched.length - 1 && ko(a.params, n.value.params))
  function c(l = {}) {
    if (a5(l)) {
      const h = e[Ot(t.replace) ? 'replace' : 'push'](Ot(t.to)).catch(k0)
      return (
        t.viewTransition &&
          typeof document < 'u' &&
          'startViewTransition' in document &&
          document.startViewTransition(() => h),
        h
      )
    }
    return Promise.resolve()
  }
  return { route: n, href: _(() => n.value.href), isActive: r, isExactActive: i, navigate: c }
}
function Q4(t) {
  return t.length === 1 ? t[0] : t
}
const t5 = R1({
    name: 'RouterLink',
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: 'page' },
    },
    useLink: Si,
    setup(t, { slots: e }) {
      const a = Lt(Si(t)),
        { options: n } = yt(ln),
        s = _(() => ({
          [Ci(t.activeClass, n.linkActiveClass, 'router-link-active')]: a.isActive,
          [Ci(t.exactActiveClass, n.linkExactActiveClass, 'router-link-exact-active')]:
            a.isExactActive,
        }))
      return () => {
        const r = e.default && Q4(e.default(a))
        return t.custom
          ? r
          : Be(
              'a',
              {
                'aria-current': a.isExactActive ? t.ariaCurrentValue : null,
                href: a.href,
                onClick: a.navigate,
                class: s.value,
              },
              r,
            )
      }
    },
  }),
  e5 = t5
function a5(t) {
  if (
    !(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey) &&
    !t.defaultPrevented &&
    !(t.button !== void 0 && t.button !== 0)
  ) {
    if (t.currentTarget && t.currentTarget.getAttribute) {
      const e = t.currentTarget.getAttribute('target')
      if (/\b_blank\b/i.test(e)) return
    }
    return t.preventDefault && t.preventDefault(), !0
  }
}
function n5(t, e) {
  for (const a in e) {
    const n = e[a],
      s = t[a]
    if (typeof n == 'string') {
      if (n !== s) return !1
    } else if (!xe(s) || s.length !== n.length || n.some((r, i) => r !== s[i])) return !1
  }
  return !0
}
function wi(t) {
  return t ? (t.aliasOf ? t.aliasOf.path : t.path) : ''
}
const Ci = (t, e, a) => t ?? e ?? a,
  s5 = R1({
    name: 'RouterView',
    inheritAttrs: !1,
    props: { name: { type: String, default: 'default' }, route: Object },
    compatConfig: { MODE: 3 },
    setup(t, { attrs: e, slots: a }) {
      const n = yt(y2),
        s = _(() => t.route || n.value),
        r = yt(_i, 0),
        i = _(() => {
          let h = Ot(r)
          const { matched: o } = s.value
          let d
          for (; (d = o[h]) && !d.components; ) h++
          return h
        }),
        c = _(() => s.value.matched[i.value])
      me(
        _i,
        _(() => i.value + 1),
      ),
        me(X4, c),
        me(y2, s)
      const l = ct()
      return (
        nt(
          () => [l.value, c.value, t.name],
          ([h, o, d], [u, p, f]) => {
            o &&
              ((o.instances[d] = h),
              p &&
                p !== o &&
                h &&
                h === u &&
                (o.leaveGuards.size || (o.leaveGuards = p.leaveGuards),
                o.updateGuards.size || (o.updateGuards = p.updateGuards))),
              h && o && (!p || !e0(o, p) || !u) && (o.enterCallbacks[d] || []).forEach((m) => m(h))
          },
          { flush: 'post' },
        ),
        () => {
          const h = s.value,
            o = t.name,
            d = c.value,
            u = d && d.components[o]
          if (!u) return ki(a.default, { Component: u, route: h })
          const p = d.props[o],
            f = p ? (p === !0 ? h.params : typeof p == 'function' ? p(h) : p) : null,
            g = Be(
              u,
              zt({}, f, e, {
                onVnodeUnmounted: (S) => {
                  S.component.isUnmounted && (d.instances[o] = null)
                },
                ref: l,
              }),
            )
          return ki(a.default, { Component: g, route: h }) || g
        }
      )
    },
  })
function ki(t, e) {
  if (!t) return null
  const a = t(e)
  return a.length === 1 ? a[0] : a
}
const Io = s5
function r5(t) {
  const e = U4(t.routes, t),
    a = t.parseQuery || J4,
    n = t.stringifyQuery || bi,
    s = t.history,
    r = f0(),
    i = f0(),
    c = f0(),
    l = ot(n1)
  let h = n1
  U1 && t.scrollBehavior && 'scrollRestoration' in history && (history.scrollRestoration = 'manual')
  const o = Fn.bind(null, (P) => '' + P),
    d = Fn.bind(null, g4),
    u = Fn.bind(null, M0)
  function p(P, F) {
    let j, J
    return Eo(P) ? ((j = e.getRecordMatcher(P)), (J = F)) : (J = P), e.addRoute(J, j)
  }
  function f(P) {
    const F = e.getRecordMatcher(P)
    F && e.removeRoute(F)
  }
  function m() {
    return e.getRoutes().map((P) => P.record)
  }
  function g(P) {
    return !!e.getRecordMatcher(P)
  }
  function S(P, F) {
    if (((F = zt({}, F || l.value)), typeof P == 'string')) {
      const k = jn(a, P, F.path),
        L = e.resolve({ path: k.path }, F),
        $ = s.createHref(k.fullPath)
      return zt(k, L, { params: u(L.params), hash: M0(k.hash), redirectedFrom: void 0, href: $ })
    }
    let j
    if (P.path != null) j = zt({}, P, { path: jn(a, P.path, F.path).path })
    else {
      const k = zt({}, P.params)
      for (const L in k) k[L] == null && delete k[L]
      ;(j = zt({}, P, { params: d(k) })), (F.params = d(F.params))
    }
    const J = e.resolve(j, F),
      vt = P.hash || ''
    J.params = o(u(J.params))
    const z = _4(n, zt({}, P, { hash: f4(vt), path: J.path })),
      y = s.createHref(z)
    return zt({ fullPath: z, hash: vt, query: n === bi ? Z4(P.query) : P.query || {} }, J, {
      redirectedFrom: void 0,
      href: y,
    })
  }
  function b(P) {
    return typeof P == 'string' ? jn(a, P, l.value.path) : zt({}, P)
  }
  function w(P, F) {
    if (h !== P) return a0(8, { from: F, to: P })
  }
  function x(P) {
    return D(P)
  }
  function M(P) {
    return x(zt(b(P), { replace: !0 }))
  }
  function O(P) {
    const F = P.matched[P.matched.length - 1]
    if (F && F.redirect) {
      const { redirect: j } = F
      let J = typeof j == 'function' ? j(P) : j
      return (
        typeof J == 'string' &&
          ((J = J.includes('?') || J.includes('#') ? (J = b(J)) : { path: J }), (J.params = {})),
        zt({ query: P.query, hash: P.hash, params: J.path != null ? {} : P.params }, J)
      )
    }
  }
  function D(P, F) {
    const j = (h = S(P)),
      J = l.value,
      vt = P.state,
      z = P.force,
      y = P.replace === !0,
      k = O(j)
    if (k)
      return D(
        zt(b(k), { state: typeof k == 'object' ? zt({}, vt, k.state) : vt, force: z, replace: y }),
        F || j,
      )
    const L = j
    L.redirectedFrom = F
    let $
    return (
      !z && S4(n, J, j) && (($ = a0(16, { to: L, from: J })), dt(J, J, !0, !1)),
      ($ ? Promise.resolve($) : T(L, J))
        .catch((V) => (Ue(V) ? (Ue(V, 2) ? V : St(V)) : q(V, L, J)))
        .then((V) => {
          if (V) {
            if (Ue(V, 2))
              return D(
                zt({ replace: y }, b(V.to), {
                  state: typeof V.to == 'object' ? zt({}, vt, V.to.state) : vt,
                  force: z,
                }),
                F || L,
              )
          } else V = C(L, J, !0, y, vt)
          return I(L, J, V), V
        })
    )
  }
  function A(P, F) {
    const j = w(P, F)
    return j ? Promise.reject(j) : Promise.resolve()
  }
  function E(P) {
    const F = Wt.values().next().value
    return F && typeof F.runWithContext == 'function' ? F.runWithContext(P) : P()
  }
  function T(P, F) {
    let j
    const [J, vt, z] = i5(P, F)
    j = Hn(J.reverse(), 'beforeRouteLeave', P, F)
    for (const k of J)
      k.leaveGuards.forEach((L) => {
        j.push(l1(L, P, F))
      })
    const y = A.bind(null, P, F)
    return (
      j.push(y),
      $t(j)
        .then(() => {
          j = []
          for (const k of r.list()) j.push(l1(k, P, F))
          return j.push(y), $t(j)
        })
        .then(() => {
          j = Hn(vt, 'beforeRouteUpdate', P, F)
          for (const k of vt)
            k.updateGuards.forEach((L) => {
              j.push(l1(L, P, F))
            })
          return j.push(y), $t(j)
        })
        .then(() => {
          j = []
          for (const k of z)
            if (k.beforeEnter)
              if (xe(k.beforeEnter)) for (const L of k.beforeEnter) j.push(l1(L, P, F))
              else j.push(l1(k.beforeEnter, P, F))
          return j.push(y), $t(j)
        })
        .then(
          () => (
            P.matched.forEach((k) => (k.enterCallbacks = {})),
            (j = Hn(z, 'beforeRouteEnter', P, F, E)),
            j.push(y),
            $t(j)
          ),
        )
        .then(() => {
          j = []
          for (const k of i.list()) j.push(l1(k, P, F))
          return j.push(y), $t(j)
        })
        .catch((k) => (Ue(k, 8) ? k : Promise.reject(k)))
    )
  }
  function I(P, F, j) {
    c.list().forEach((J) => E(() => J(P, F, j)))
  }
  function C(P, F, j, J, vt) {
    const z = w(P, F)
    if (z) return z
    const y = F === n1,
      k = U1 ? history.state : {}
    j &&
      (J || y
        ? s.replace(P.fullPath, zt({ scroll: y && k && k.scroll }, vt))
        : s.push(P.fullPath, vt)),
      (l.value = P),
      dt(P, F, j, y),
      St()
  }
  let R
  function N() {
    R ||
      (R = s.listen((P, F, j) => {
        if (!ze.listening) return
        const J = S(P),
          vt = O(J)
        if (vt) {
          D(zt(vt, { replace: !0, force: !0 }), J).catch(k0)
          return
        }
        h = J
        const z = l.value
        U1 && A4(di(z.fullPath, j.delta), cn()),
          T(J, z)
            .catch((y) =>
              Ue(y, 12)
                ? y
                : Ue(y, 2)
                  ? (D(zt(b(y.to), { force: !0 }), J)
                      .then((k) => {
                        Ue(k, 20) && !j.delta && j.type === V0.pop && s.go(-1, !1)
                      })
                      .catch(k0),
                    Promise.reject())
                  : (j.delta && s.go(-j.delta, !1), q(y, J, z)),
            )
            .then((y) => {
              ;(y = y || C(J, z, !1)),
                y &&
                  (j.delta && !Ue(y, 8)
                    ? s.go(-j.delta, !1)
                    : j.type === V0.pop && Ue(y, 20) && s.go(-1, !1)),
                I(J, z, y)
            })
            .catch(k0)
      }))
  }
  let Z = f0(),
    U = f0(),
    X
  function q(P, F, j) {
    St(P)
    const J = U.list()
    return J.length ? J.forEach((vt) => vt(P, F, j)) : console.error(P), Promise.reject(P)
  }
  function ft() {
    return X && l.value !== n1
      ? Promise.resolve()
      : new Promise((P, F) => {
          Z.add([P, F])
        })
  }
  function St(P) {
    return X || ((X = !P), N(), Z.list().forEach(([F, j]) => (P ? j(P) : F())), Z.reset()), P
  }
  function dt(P, F, j, J) {
    const { scrollBehavior: vt } = t
    if (!U1 || !vt) return Promise.resolve()
    const z =
      (!j && I4(di(P.fullPath, 0))) || ((J || !j) && history.state && history.state.scroll) || null
    return ee()
      .then(() => vt(P, F, z))
      .then((y) => y && T4(y))
      .catch((y) => q(y, P, F))
  }
  const mt = (P) => s.go(P)
  let Jt
  const Wt = new Set(),
    ze = {
      currentRoute: l,
      listening: !0,
      addRoute: p,
      removeRoute: f,
      clearRoutes: e.clearRoutes,
      hasRoute: g,
      getRoutes: m,
      resolve: S,
      options: t,
      push: x,
      replace: M,
      go: mt,
      back: () => mt(-1),
      forward: () => mt(1),
      beforeEach: r.add,
      beforeResolve: i.add,
      afterEach: c.add,
      onError: U.add,
      isReady: ft,
      install(P) {
        const F = this
        P.component('RouterLink', e5),
          P.component('RouterView', Io),
          (P.config.globalProperties.$router = F),
          Object.defineProperty(P.config.globalProperties, '$route', {
            enumerable: !0,
            get: () => Ot(l),
          }),
          U1 && !Jt && l.value === n1 && ((Jt = !0), x(s.location).catch((vt) => {}))
        const j = {}
        for (const vt in n1)
          Object.defineProperty(j, vt, { get: () => l.value[vt], enumerable: !0 })
        P.provide(ln, F), P.provide(ms, wc(j)), P.provide(y2, l)
        const J = P.unmount
        Wt.add(P),
          (P.unmount = function () {
            Wt.delete(P),
              Wt.size < 1 && ((h = n1), R && R(), (R = null), (l.value = n1), (Jt = !1), (X = !1)),
              J()
          })
      },
    }
  function $t(P) {
    return P.reduce((F, j) => F.then(() => E(j)), Promise.resolve())
  }
  return ze
}
function i5(t, e) {
  const a = [],
    n = [],
    s = [],
    r = Math.max(e.matched.length, t.matched.length)
  for (let i = 0; i < r; i++) {
    const c = e.matched[i]
    c && (t.matched.find((h) => e0(h, c)) ? n.push(c) : a.push(c))
    const l = t.matched[i]
    l && (e.matched.find((h) => e0(h, l)) || s.push(l))
  }
  return [a, n, s]
}
function c5() {
  return yt(ln)
}
function om(t) {
  return yt(ms)
}
const At = Object.freeze({
    PROJECTS_LIST: { path: I6, name: 'projects' },
    NEW_PROJECT: { path: O6, name: 'newProject' },
    EDIT_PROJECT: { path: D6, name: 'editProject' },
    PROJECT_DETAILS: { path: R6, name: 'projectDetails' },
    TASK: { path: L6, name: 'task' },
    TASK_NEW: { path: M6, name: 'taskNew' },
    EDIT_TASK: { path: V6, name: 'taskEdit' },
    NOT_FOUND: { path: $6, name: 'not-found' },
  }),
  c0 = G({ border: [Boolean, Number, String] }, 'border')
function l0(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Fe()
  return {
    borderClasses: _(() => {
      const n = Tt(t) ? t.value : t.border,
        s = []
      if (n === !0 || n === '') s.push(`${e}--border`)
      else if (typeof n == 'string' || n === 0)
        for (const r of String(n).split(' ')) s.push(`border-${r}`)
      return s
    }),
  }
}
const l5 = [null, 'default', 'comfortable', 'compact'],
  o0 = G(
    { density: { type: String, default: 'default', validator: (t) => l5.includes(t) } },
    'density',
  )
function K0(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Fe()
  return { densityClasses: _(() => `${e}--density-${t.density}`) }
}
const Y0 = G(
  {
    elevation: {
      type: [Number, String],
      validator(t) {
        const e = parseInt(t)
        return !isNaN(e) && e >= 0 && e <= 24
      },
    },
  },
  'elevation',
)
function q0(t) {
  return {
    elevationClasses: _(() => {
      const a = Tt(t) ? t.value : t.elevation,
        n = []
      return a == null || n.push(`elevation-${a}`), n
    }),
  }
}
const je = G(
  { rounded: { type: [Boolean, Number, String], default: void 0 }, tile: Boolean },
  'rounded',
)
function He(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Fe()
  return {
    roundedClasses: _(() => {
      const n = Tt(t) ? t.value : t.rounded,
        s = Tt(t) ? t.value : t.tile,
        r = []
      if (n === !0 || n === '') r.push(`${e}--rounded`)
      else if (typeof n == 'string' || n === 0)
        for (const i of String(n).split(' ')) r.push(`rounded-${i}`)
      else (s || n === !1) && r.push('rounded-0')
      return r
    }),
  }
}
const qt = G({ tag: { type: String, default: 'div' } }, 'tag')
function fs(t) {
  return es(() => {
    const e = [],
      a = {}
    if (t.value.background)
      if (d2(t.value.background)) {
        if (((a.backgroundColor = t.value.background), !t.value.text && Au(t.value.background))) {
          const n = Le(t.value.background)
          if (n.a == null || n.a === 1) {
            const s = Ll(n)
            ;(a.color = s), (a.caretColor = s)
          }
        }
      } else e.push(`bg-${t.value.background}`)
    return (
      t.value.text &&
        (d2(t.value.text)
          ? ((a.color = t.value.text), (a.caretColor = t.value.text))
          : e.push(`text-${t.value.text}`)),
      { colorClasses: e, colorStyles: a }
    )
  })
}
function n0(t, e) {
  const a = _(() => ({ text: Tt(t) ? t.value : e ? t[e] : null })),
    { colorClasses: n, colorStyles: s } = fs(a)
  return { textColorClasses: n, textColorStyles: s }
}
function $e(t, e) {
  const a = _(() => ({ background: Tt(t) ? t.value : e ? t[e] : null })),
    { colorClasses: n, colorStyles: s } = fs(a)
  return { backgroundColorClasses: n, backgroundColorStyles: s }
}
const o5 = ['elevated', 'flat', 'tonal', 'outlined', 'text', 'plain']
function on(t, e) {
  return v(xt, null, [
    t && v('span', { key: 'overlay', class: `${e}__overlay` }, null),
    v('span', { key: 'underlay', class: `${e}__underlay` }, null),
  ])
}
const J0 = G(
  {
    color: String,
    variant: { type: String, default: 'elevated', validator: (t) => o5.includes(t) },
  },
  'variant',
)
function hn(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Fe()
  const a = _(() => {
      const { variant: r } = Ot(t)
      return `${e}--variant-${r}`
    }),
    { colorClasses: n, colorStyles: s } = fs(
      _(() => {
        const { variant: r, color: i } = Ot(t)
        return { [['elevated', 'flat'].includes(r) ? 'background' : 'text']: i }
      }),
    )
  return { colorClasses: n, colorStyles: s, variantClasses: a }
}
const Oo = G(
    {
      baseColor: String,
      divided: Boolean,
      ...c0(),
      ..._t(),
      ...o0(),
      ...Y0(),
      ...je(),
      ...qt(),
      ...Yt(),
      ...J0(),
    },
    'VBtnGroup',
  ),
  xi = tt()({
    name: 'VBtnGroup',
    props: Oo(),
    setup(t, e) {
      let { slots: a } = e
      const { themeClasses: n } = ie(t),
        { densityClasses: s } = K0(t),
        { borderClasses: r } = l0(t),
        { elevationClasses: i } = q0(t),
        { roundedClasses: c } = He(t)
      tn({
        VBtn: {
          height: 'auto',
          baseColor: Mt(t, 'baseColor'),
          color: Mt(t, 'color'),
          density: Mt(t, 'density'),
          flat: !0,
          variant: Mt(t, 'variant'),
        },
      }),
        ht(() =>
          v(
            t.tag,
            {
              class: [
                'v-btn-group',
                { 'v-btn-group--divided': t.divided },
                n.value,
                r.value,
                s.value,
                i.value,
                c.value,
                t.class,
              ],
              style: t.style,
            },
            a,
          ),
        )
    },
  }),
  h5 = G(
    {
      modelValue: { type: null, default: void 0 },
      multiple: Boolean,
      mandatory: [Boolean, String],
      max: Number,
      selectedClass: String,
      disabled: Boolean,
    },
    'group',
  ),
  d5 = G({ value: null, disabled: Boolean, selectedClass: String }, 'group-item')
function u5(t, e) {
  let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0
  const n = Rt('useGroupItem')
  if (!n)
    throw new Error(
      '[Vuetify] useGroupItem composable must be used inside a component setup function',
    )
  const s = t1()
  me(Symbol.for(`${e.description}:id`), s)
  const r = yt(e, null)
  if (!r) {
    if (!a) return r
    throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${e.description}`)
  }
  const i = Mt(t, 'value'),
    c = _(() => !!(r.disabled.value || t.disabled))
  r.register({ id: s, value: i, disabled: c }, n),
    Se(() => {
      r.unregister(s)
    })
  const l = _(() => r.isSelected(s)),
    h = _(() => r.items.value[0].id === s),
    o = _(() => r.items.value[r.items.value.length - 1].id === s),
    d = _(() => l.value && [r.selectedClass.value, t.selectedClass])
  return (
    nt(
      l,
      (u) => {
        n.emit('group:selected', { value: u })
      },
      { flush: 'sync' },
    ),
    {
      id: s,
      isSelected: l,
      isFirst: h,
      isLast: o,
      toggle: () => r.select(s, !l.value),
      select: (u) => r.select(s, u),
      selectedClass: d,
      value: i,
      disabled: c,
      group: r,
    }
  )
}
function p5(t, e) {
  let a = !1
  const n = Lt([]),
    s = Dt(
      t,
      'modelValue',
      [],
      (u) => (u == null ? [] : Do(n, Ve(u))),
      (u) => {
        const p = f5(n, u)
        return t.multiple ? p : p[0]
      },
    ),
    r = Rt('useGroup')
  function i(u, p) {
    const f = u,
      m = Symbol.for(`${e.description}:id`),
      S = G1(m, r == null ? void 0 : r.vnode).indexOf(p)
    Ot(f.value) == null && ((f.value = S), (f.useIndexAsValue = !0)),
      S > -1 ? n.splice(S, 0, f) : n.push(f)
  }
  function c(u) {
    if (a) return
    l()
    const p = n.findIndex((f) => f.id === u)
    n.splice(p, 1)
  }
  function l() {
    const u = n.find((p) => !p.disabled)
    u && t.mandatory === 'force' && !s.value.length && (s.value = [u.id])
  }
  Ne(() => {
    l()
  }),
    Se(() => {
      a = !0
    }),
    W2(() => {
      for (let u = 0; u < n.length; u++) n[u].useIndexAsValue && (n[u].value = u)
    })
  function h(u, p) {
    const f = n.find((m) => m.id === u)
    if (!(p && f != null && f.disabled))
      if (t.multiple) {
        const m = s.value.slice(),
          g = m.findIndex((b) => b === u),
          S = ~g
        if (
          ((p = p ?? !S),
          (S && t.mandatory && m.length <= 1) || (!S && t.max != null && m.length + 1 > t.max))
        )
          return
        g < 0 && p ? m.push(u) : g >= 0 && !p && m.splice(g, 1), (s.value = m)
      } else {
        const m = s.value.includes(u)
        if (t.mandatory && m) return
        s.value = (p ?? !m) ? [u] : []
      }
  }
  function o(u) {
    if ((t.multiple, s.value.length)) {
      const p = s.value[0],
        f = n.findIndex((S) => S.id === p)
      let m = (f + u) % n.length,
        g = n[m]
      for (; g.disabled && m !== f; ) (m = (m + u) % n.length), (g = n[m])
      if (g.disabled) return
      s.value = [n[m].id]
    } else {
      const p = n.find((f) => !f.disabled)
      p && (s.value = [p.id])
    }
  }
  const d = {
    register: i,
    unregister: c,
    selected: s,
    select: h,
    disabled: Mt(t, 'disabled'),
    prev: () => o(n.length - 1),
    next: () => o(1),
    isSelected: (u) => s.value.includes(u),
    selectedClass: _(() => t.selectedClass),
    items: _(() => n),
    getItemIndex: (u) => m5(n, u),
  }
  return me(e, d), d
}
function m5(t, e) {
  const a = Do(t, [e])
  return a.length ? t.findIndex((n) => n.id === a[0]) : -1
}
function Do(t, e) {
  const a = []
  return (
    e.forEach((n) => {
      const s = t.find((i) => Xa(n, i.value)),
        r = t[n]
      ;(s == null ? void 0 : s.value) != null ? a.push(s.id) : r != null && a.push(r.id)
    }),
    a
  )
}
function f5(t, e) {
  const a = []
  return (
    e.forEach((n) => {
      const s = t.findIndex((r) => r.id === n)
      if (~s) {
        const r = t[s]
        a.push(r.value != null ? r.value : s)
      }
    }),
    a
  )
}
const Ro = Symbol.for('vuetify:v-btn-toggle'),
  v5 = G({ ...Oo(), ...h5() }, 'VBtnToggle'),
  hm = tt()({
    name: 'VBtnToggle',
    props: v5(),
    emits: { 'update:modelValue': (t) => !0 },
    setup(t, e) {
      let { slots: a } = e
      const { isSelected: n, next: s, prev: r, select: i, selected: c } = p5(t, Ro)
      return (
        ht(() => {
          const l = xi.filterProps(t)
          return v(xi, lt({ class: ['v-btn-toggle', t.class] }, l, { style: t.style }), {
            default: () => {
              var h
              return [
                (h = a.default) == null
                  ? void 0
                  : h.call(a, { isSelected: n, next: s, prev: r, select: i, selected: c }),
              ]
            },
          })
        }),
        { next: s, prev: r, select: i }
      )
    },
  }),
  z5 = G(
    {
      defaults: Object,
      disabled: Boolean,
      reset: [Number, String],
      root: [Boolean, String],
      scoped: Boolean,
    },
    'VDefaultsProvider',
  ),
  Ht = tt(!1)({
    name: 'VDefaultsProvider',
    props: z5(),
    setup(t, e) {
      let { slots: a } = e
      const { defaults: n, disabled: s, reset: r, root: i, scoped: c } = N2(t)
      return (
        tn(n, { reset: r, root: i, scoped: c, disabled: s }),
        () => {
          var l
          return (l = a.default) == null ? void 0 : l.call(a)
        }
      )
    },
  }),
  g5 = ['x-small', 'small', 'default', 'large', 'x-large'],
  dn = G({ size: { type: [String, Number], default: 'default' } }, 'size')
function un(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Fe()
  return es(() => {
    let a, n
    return (
      Aa(g5, t.size)
        ? (a = `${e}--size-${t.size}`)
        : t.size && (n = { width: it(t.size), height: it(t.size) }),
      { sizeClasses: a, sizeStyles: n }
    )
  })
}
const y5 = G(
    {
      color: String,
      disabled: Boolean,
      start: Boolean,
      end: Boolean,
      icon: Nt,
      ..._t(),
      ...dn(),
      ...qt({ tag: 'i' }),
      ...Yt(),
    },
    'VIcon',
  ),
  d1 = tt()({
    name: 'VIcon',
    props: y5(),
    setup(t, e) {
      let { attrs: a, slots: n } = e
      const s = ct(),
        { themeClasses: r } = Zl(),
        { iconData: i } = qp(_(() => s.value || t.icon)),
        { sizeClasses: c } = un(t),
        { textColorClasses: l, textColorStyles: h } = n0(Mt(t, 'color'))
      return (
        ht(() => {
          var u, p
          const o = (u = n.default) == null ? void 0 : u.call(n)
          o &&
            (s.value =
              (p = kl(o).filter(
                (f) => f.type === j0 && f.children && typeof f.children == 'string',
              )[0]) == null
                ? void 0
                : p.children)
          const d = !!(a.onClick || a.onClickOnce)
          return v(
            i.value.component,
            {
              tag: t.tag,
              icon: i.value.icon,
              class: [
                'v-icon',
                'notranslate',
                r.value,
                c.value,
                l.value,
                {
                  'v-icon--clickable': d,
                  'v-icon--disabled': t.disabled,
                  'v-icon--start': t.start,
                  'v-icon--end': t.end,
                },
                t.class,
              ],
              style: [
                c.value ? void 0 : { fontSize: it(t.size), height: it(t.size), width: it(t.size) },
                h.value,
                t.style,
              ],
              role: d ? 'button' : void 0,
              'aria-hidden': !d,
              tabindex: d ? (t.disabled ? -1 : 0) : void 0,
            },
            { default: () => [o] },
          )
        }),
        {}
      )
    },
  })
function Lo(t, e) {
  const a = ct(),
    n = ot(!1)
  if (Q2) {
    const s = new IntersectionObserver((r) => {
      n.value = !!r.find((i) => i.isIntersecting)
    }, e)
    Se(() => {
      s.disconnect()
    }),
      nt(
        a,
        (r, i) => {
          i && (s.unobserve(i), (n.value = !1)), r && s.observe(r)
        },
        { flush: 'post' },
      )
  }
  return { intersectionRef: a, isIntersecting: n }
}
const b5 = G(
    {
      bgColor: String,
      color: String,
      indeterminate: [Boolean, String],
      modelValue: { type: [Number, String], default: 0 },
      rotate: { type: [Number, String], default: 0 },
      width: { type: [Number, String], default: 4 },
      ..._t(),
      ...dn(),
      ...qt({ tag: 'div' }),
      ...Yt(),
    },
    'VProgressCircular',
  ),
  _5 = tt()({
    name: 'VProgressCircular',
    props: b5(),
    setup(t, e) {
      let { slots: a } = e
      const n = 20,
        s = 2 * Math.PI * n,
        r = ct(),
        { themeClasses: i } = ie(t),
        { sizeClasses: c, sizeStyles: l } = un(t),
        { textColorClasses: h, textColorStyles: o } = n0(Mt(t, 'color')),
        { textColorClasses: d, textColorStyles: u } = n0(Mt(t, 'bgColor')),
        { intersectionRef: p, isIntersecting: f } = Lo(),
        { resizeRef: m, contentRect: g } = Xl(),
        S = _(() => Math.max(0, Math.min(100, parseFloat(t.modelValue)))),
        b = _(() => Number(t.width)),
        w = _(() => (l.value ? Number(t.size) : g.value ? g.value.width : Math.max(b.value, 32))),
        x = _(() => (n / (1 - b.value / w.value)) * 2),
        M = _(() => (b.value / w.value) * x.value),
        O = _(() => it(((100 - S.value) / 100) * s))
      return (
        fe(() => {
          ;(p.value = r.value), (m.value = r.value)
        }),
        ht(() =>
          v(
            t.tag,
            {
              ref: r,
              class: [
                'v-progress-circular',
                {
                  'v-progress-circular--indeterminate': !!t.indeterminate,
                  'v-progress-circular--visible': f.value,
                  'v-progress-circular--disable-shrink': t.indeterminate === 'disable-shrink',
                },
                i.value,
                c.value,
                h.value,
                t.class,
              ],
              style: [l.value, o.value, t.style],
              role: 'progressbar',
              'aria-valuemin': '0',
              'aria-valuemax': '100',
              'aria-valuenow': t.indeterminate ? void 0 : S.value,
            },
            {
              default: () => [
                v(
                  'svg',
                  {
                    style: { transform: `rotate(calc(-90deg + ${Number(t.rotate)}deg))` },
                    xmlns: 'http://www.w3.org/2000/svg',
                    viewBox: `0 0 ${x.value} ${x.value}`,
                  },
                  [
                    v(
                      'circle',
                      {
                        class: ['v-progress-circular__underlay', d.value],
                        style: u.value,
                        fill: 'transparent',
                        cx: '50%',
                        cy: '50%',
                        r: n,
                        'stroke-width': M.value,
                        'stroke-dasharray': s,
                        'stroke-dashoffset': 0,
                      },
                      null,
                    ),
                    v(
                      'circle',
                      {
                        class: 'v-progress-circular__overlay',
                        fill: 'transparent',
                        cx: '50%',
                        cy: '50%',
                        r: n,
                        'stroke-width': M.value,
                        'stroke-dasharray': s,
                        'stroke-dashoffset': O.value,
                      },
                      null,
                    ),
                  ],
                ),
                a.default &&
                  v('div', { class: 'v-progress-circular__content' }, [
                    a.default({ value: S.value }),
                  ]),
              ],
            },
          ),
        ),
        {}
      )
    },
  }),
  M1 = G(
    {
      height: [Number, String],
      maxHeight: [Number, String],
      maxWidth: [Number, String],
      minHeight: [Number, String],
      minWidth: [Number, String],
      width: [Number, String],
    },
    'dimension',
  )
function V1(t) {
  return {
    dimensionStyles: _(() => {
      const a = {},
        n = it(t.height),
        s = it(t.maxHeight),
        r = it(t.maxWidth),
        i = it(t.minHeight),
        c = it(t.minWidth),
        l = it(t.width)
      return (
        n != null && (a.height = n),
        s != null && (a.maxHeight = s),
        r != null && (a.maxWidth = r),
        i != null && (a.minHeight = i),
        c != null && (a.minWidth = c),
        l != null && (a.width = l),
        a
      )
    }),
  }
}
const Ei = { center: 'center', top: 'bottom', bottom: 'top', left: 'right', right: 'left' },
  Z0 = G({ location: String }, 'location')
function pn(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
    a = arguments.length > 2 ? arguments[2] : void 0
  const { isRtl: n } = e1()
  return {
    locationStyles: _(() => {
      if (!t.location) return {}
      const { side: r, align: i } = h2(
        t.location.split(' ').length > 1 ? t.location : `${t.location} center`,
        n.value,
      )
      function c(h) {
        return a ? a(h) : 0
      }
      const l = {}
      return (
        r !== 'center' && (e ? (l[Ei[r]] = `calc(100% - ${c(r)}px)`) : (l[r] = 0)),
        i !== 'center'
          ? e
            ? (l[Ei[i]] = `calc(100% - ${c(i)}px)`)
            : (l[i] = 0)
          : (r === 'center'
              ? (l.top = l.left = '50%')
              : (l[{ top: 'left', bottom: 'left', left: 'top', right: 'top' }[r]] = '50%'),
            (l.transform = {
              top: 'translateX(-50%)',
              bottom: 'translateX(-50%)',
              left: 'translateY(-50%)',
              right: 'translateY(-50%)',
              center: 'translate(-50%, -50%)',
            }[r])),
        l
      )
    }),
  }
}
const S5 = G(
    {
      absolute: Boolean,
      active: { type: Boolean, default: !0 },
      bgColor: String,
      bgOpacity: [Number, String],
      bufferValue: { type: [Number, String], default: 0 },
      bufferColor: String,
      bufferOpacity: [Number, String],
      clickable: Boolean,
      color: String,
      height: { type: [Number, String], default: 4 },
      indeterminate: Boolean,
      max: { type: [Number, String], default: 100 },
      modelValue: { type: [Number, String], default: 0 },
      opacity: [Number, String],
      reverse: Boolean,
      stream: Boolean,
      striped: Boolean,
      roundedBar: Boolean,
      ..._t(),
      ...Z0({ location: 'top' }),
      ...je(),
      ...qt(),
      ...Yt(),
    },
    'VProgressLinear',
  ),
  vs = tt()({
    name: 'VProgressLinear',
    props: S5(),
    emits: { 'update:modelValue': (t) => !0 },
    setup(t, e) {
      var I
      let { slots: a } = e
      const n = Dt(t, 'modelValue'),
        { isRtl: s, rtlClasses: r } = e1(),
        { themeClasses: i } = ie(t),
        { locationStyles: c } = pn(t),
        { textColorClasses: l, textColorStyles: h } = n0(t, 'color'),
        { backgroundColorClasses: o, backgroundColorStyles: d } = $e(_(() => t.bgColor || t.color)),
        { backgroundColorClasses: u, backgroundColorStyles: p } = $e(
          _(() => t.bufferColor || t.bgColor || t.color),
        ),
        { backgroundColorClasses: f, backgroundColorStyles: m } = $e(t, 'color'),
        { roundedClasses: g } = He(t),
        { intersectionRef: S, isIntersecting: b } = Lo(),
        w = _(() => parseFloat(t.max)),
        x = _(() => parseFloat(t.height)),
        M = _(() => O1((parseFloat(t.bufferValue) / w.value) * 100, 0, 100)),
        O = _(() => O1((parseFloat(n.value) / w.value) * 100, 0, 100)),
        D = _(() => s.value !== t.reverse),
        A = _(() => (t.indeterminate ? 'fade-transition' : 'slide-x-transition')),
        E =
          Pt &&
          ((I = window.matchMedia) == null
            ? void 0
            : I.call(window, '(forced-colors: active)').matches)
      function T(C) {
        if (!S.value) return
        const { left: R, right: N, width: Z } = S.value.getBoundingClientRect(),
          U = D.value ? Z - C.clientX + (N - Z) : C.clientX - R
        n.value = Math.round((U / Z) * w.value)
      }
      return (
        ht(() =>
          v(
            t.tag,
            {
              ref: S,
              class: [
                'v-progress-linear',
                {
                  'v-progress-linear--absolute': t.absolute,
                  'v-progress-linear--active': t.active && b.value,
                  'v-progress-linear--reverse': D.value,
                  'v-progress-linear--rounded': t.rounded,
                  'v-progress-linear--rounded-bar': t.roundedBar,
                  'v-progress-linear--striped': t.striped,
                },
                g.value,
                i.value,
                r.value,
                t.class,
              ],
              style: [
                {
                  bottom: t.location === 'bottom' ? 0 : void 0,
                  top: t.location === 'top' ? 0 : void 0,
                  height: t.active ? it(x.value) : 0,
                  '--v-progress-linear-height': it(x.value),
                  ...(t.absolute ? c.value : {}),
                },
                t.style,
              ],
              role: 'progressbar',
              'aria-hidden': t.active ? 'false' : 'true',
              'aria-valuemin': '0',
              'aria-valuemax': t.max,
              'aria-valuenow': t.indeterminate ? void 0 : Math.min(parseFloat(n.value), w.value),
              onClick: t.clickable && T,
            },
            {
              default: () => [
                t.stream &&
                  v(
                    'div',
                    {
                      key: 'stream',
                      class: ['v-progress-linear__stream', l.value],
                      style: {
                        ...h.value,
                        [D.value ? 'left' : 'right']: it(-x.value),
                        borderTop: `${it(x.value / 2)} dotted`,
                        opacity: parseFloat(t.bufferOpacity),
                        top: `calc(50% - ${it(x.value / 4)})`,
                        width: it(100 - M.value, '%'),
                        '--v-progress-linear-stream-to': it(x.value * (D.value ? 1 : -1)),
                      },
                    },
                    null,
                  ),
                v(
                  'div',
                  {
                    class: ['v-progress-linear__background', E ? void 0 : o.value],
                    style: [
                      d.value,
                      { opacity: parseFloat(t.bgOpacity), width: t.stream ? 0 : void 0 },
                    ],
                  },
                  null,
                ),
                v(
                  'div',
                  {
                    class: ['v-progress-linear__buffer', E ? void 0 : u.value],
                    style: [
                      p.value,
                      { opacity: parseFloat(t.bufferOpacity), width: it(M.value, '%') },
                    ],
                  },
                  null,
                ),
                v(
                  I1,
                  { name: A.value },
                  {
                    default: () => [
                      t.indeterminate
                        ? v('div', { class: 'v-progress-linear__indeterminate' }, [
                            ['long', 'short'].map((C) =>
                              v(
                                'div',
                                {
                                  key: C,
                                  class: [
                                    'v-progress-linear__indeterminate',
                                    C,
                                    E ? void 0 : f.value,
                                  ],
                                  style: m.value,
                                },
                                null,
                              ),
                            ),
                          ])
                        : v(
                            'div',
                            {
                              class: ['v-progress-linear__determinate', E ? void 0 : f.value],
                              style: [m.value, { width: it(O.value, '%') }],
                            },
                            null,
                          ),
                    ],
                  },
                ),
                a.default &&
                  v('div', { class: 'v-progress-linear__content' }, [
                    a.default({ value: O.value, buffer: M.value }),
                  ]),
              ],
            },
          ),
        ),
        {}
      )
    },
  }),
  zs = G({ loading: [Boolean, String] }, 'loader')
function gs(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Fe()
  return { loaderClasses: _(() => ({ [`${e}--loading`]: t.loading })) }
}
function Mo(t, e) {
  var n
  let { slots: a } = e
  return v('div', { class: `${t.name}__loader` }, [
    ((n = a.default) == null ? void 0 : n.call(a, { color: t.color, isActive: t.active })) ||
      v(
        vs,
        { absolute: t.absolute, active: t.active, color: t.color, height: '2', indeterminate: !0 },
        null,
      ),
  ])
}
const w5 = ['static', 'relative', 'fixed', 'absolute', 'sticky'],
  mn = G({ position: { type: String, validator: (t) => w5.includes(t) } }, 'position')
function fn(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Fe()
  return { positionClasses: _(() => (t.position ? `${e}--${t.position}` : void 0)) }
}
function C5() {
  const t = Rt('useRoute')
  return _(() => {
    var e
    return (e = t == null ? void 0 : t.proxy) == null ? void 0 : e.$route
  })
}
function k5() {
  var t, e
  return (e = (t = Rt('useRouter')) == null ? void 0 : t.proxy) == null ? void 0 : e.$router
}
function Vo(t, e) {
  var d, u
  const a = Gc('RouterLink'),
    n = _(() => !!(t.href || t.to)),
    s = _(() => (n == null ? void 0 : n.value) || zr(e, 'click') || zr(t, 'click'))
  if (typeof a == 'string' || !('useLink' in a)) {
    const p = Mt(t, 'href')
    return { isLink: n, isClickable: s, href: p, linkProps: Lt({ href: p }) }
  }
  const r = _(() => ({ ...t, to: Mt(() => t.to || '') })),
    i = a.useLink(r.value),
    c = _(() => (t.to ? i : void 0)),
    l = C5(),
    h = _(() => {
      var p, f, m
      return c.value
        ? t.exact
          ? l.value
            ? ((m = c.value.isExactActive) == null ? void 0 : m.value) &&
              Xa(c.value.route.value.query, l.value.query)
            : (((f = c.value.isExactActive) == null ? void 0 : f.value) ?? !1)
          : (((p = c.value.isActive) == null ? void 0 : p.value) ?? !1)
        : !1
    }),
    o = _(() => {
      var p
      return t.to ? ((p = c.value) == null ? void 0 : p.route.value.href) : t.href
    })
  return {
    isLink: n,
    isClickable: s,
    isActive: h,
    route: (d = c.value) == null ? void 0 : d.route,
    navigate: (u = c.value) == null ? void 0 : u.navigate,
    href: o,
    linkProps: Lt({ href: o, 'aria-current': _(() => (h.value ? 'page' : void 0)) }),
  }
}
const $o = G({ href: String, replace: Boolean, to: [String, Object], exact: Boolean }, 'router')
let Wn = !1
function x5(t, e) {
  let a = !1,
    n,
    s
  Pt &&
    t != null &&
    t.beforeEach &&
    (ee(() => {
      window.addEventListener('popstate', r),
        (n = t.beforeEach((i, c, l) => {
          Wn ? (a ? e(l) : l()) : setTimeout(() => (a ? e(l) : l())), (Wn = !0)
        })),
        (s =
          t == null
            ? void 0
            : t.afterEach(() => {
                Wn = !1
              }))
    }),
    _e(() => {
      window.removeEventListener('popstate', r), n == null || n(), s == null || s()
    }))
  function r(i) {
    var c
    ;((c = i.state) != null && c.replaced) || ((a = !0), setTimeout(() => (a = !1)))
  }
}
function E5(t, e) {
  nt(
    () => {
      var a
      return (a = t.isActive) == null ? void 0 : a.value
    },
    (a) => {
      t.isLink.value &&
        a &&
        e &&
        ee(() => {
          e(!0)
        })
    },
    { immediate: !0 },
  )
}
const b2 = Symbol('rippleStop'),
  P5 = 80
function Pi(t, e) {
  ;(t.style.transform = e), (t.style.webkitTransform = e)
}
function _2(t) {
  return t.constructor.name === 'TouchEvent'
}
function No(t) {
  return t.constructor.name === 'KeyboardEvent'
}
const T5 = function (t, e) {
    var d
    let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      n = 0,
      s = 0
    if (!No(t)) {
      const u = e.getBoundingClientRect(),
        p = _2(t) ? t.touches[t.touches.length - 1] : t
      ;(n = p.clientX - u.left), (s = p.clientY - u.top)
    }
    let r = 0,
      i = 0.3
    ;(d = e._ripple) != null && d.circle
      ? ((i = 0.15),
        (r = e.clientWidth / 2),
        (r = a.center ? r : r + Math.sqrt((n - r) ** 2 + (s - r) ** 2) / 4))
      : (r = Math.sqrt(e.clientWidth ** 2 + e.clientHeight ** 2) / 2)
    const c = `${(e.clientWidth - r * 2) / 2}px`,
      l = `${(e.clientHeight - r * 2) / 2}px`,
      h = a.center ? c : `${n - r}px`,
      o = a.center ? l : `${s - r}px`
    return { radius: r, scale: i, x: h, y: o, centerX: c, centerY: l }
  },
  $a = {
    show(t, e) {
      var p
      let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}
      if (!((p = e == null ? void 0 : e._ripple) != null && p.enabled)) return
      const n = document.createElement('span'),
        s = document.createElement('span')
      n.appendChild(s),
        (n.className = 'v-ripple__container'),
        a.class && (n.className += ` ${a.class}`)
      const { radius: r, scale: i, x: c, y: l, centerX: h, centerY: o } = T5(t, e, a),
        d = `${r * 2}px`
      ;(s.className = 'v-ripple__animation'),
        (s.style.width = d),
        (s.style.height = d),
        e.appendChild(n)
      const u = window.getComputedStyle(e)
      u &&
        u.position === 'static' &&
        ((e.style.position = 'relative'), (e.dataset.previousPosition = 'static')),
        s.classList.add('v-ripple__animation--enter'),
        s.classList.add('v-ripple__animation--visible'),
        Pi(s, `translate(${c}, ${l}) scale3d(${i},${i},${i})`),
        (s.dataset.activated = String(performance.now())),
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            s.classList.remove('v-ripple__animation--enter'),
              s.classList.add('v-ripple__animation--in'),
              Pi(s, `translate(${h}, ${o}) scale3d(1,1,1)`)
          })
        })
    },
    hide(t) {
      var r
      if (!((r = t == null ? void 0 : t._ripple) != null && r.enabled)) return
      const e = t.getElementsByClassName('v-ripple__animation')
      if (e.length === 0) return
      const a = e[e.length - 1]
      if (a.dataset.isHiding) return
      a.dataset.isHiding = 'true'
      const n = performance.now() - Number(a.dataset.activated),
        s = Math.max(250 - n, 0)
      setTimeout(() => {
        a.classList.remove('v-ripple__animation--in'),
          a.classList.add('v-ripple__animation--out'),
          setTimeout(() => {
            var c
            t.getElementsByClassName('v-ripple__animation').length === 1 &&
              t.dataset.previousPosition &&
              ((t.style.position = t.dataset.previousPosition), delete t.dataset.previousPosition),
              ((c = a.parentNode) == null ? void 0 : c.parentNode) === t &&
                t.removeChild(a.parentNode)
          }, 300)
      }, s)
    },
  }
function Bo(t) {
  return typeof t > 'u' || !!t
}
function $0(t) {
  const e = {},
    a = t.currentTarget
  if (!(!(a != null && a._ripple) || a._ripple.touched || t[b2])) {
    if (((t[b2] = !0), _2(t))) (a._ripple.touched = !0), (a._ripple.isTouch = !0)
    else if (a._ripple.isTouch) return
    if (
      ((e.center = a._ripple.centered || No(t)),
      a._ripple.class && (e.class = a._ripple.class),
      _2(t))
    ) {
      if (a._ripple.showTimerCommit) return
      ;(a._ripple.showTimerCommit = () => {
        $a.show(t, a, e)
      }),
        (a._ripple.showTimer = window.setTimeout(() => {
          var n
          ;(n = a == null ? void 0 : a._ripple) != null &&
            n.showTimerCommit &&
            (a._ripple.showTimerCommit(), (a._ripple.showTimerCommit = null))
        }, P5))
    } else $a.show(t, a, e)
  }
}
function Ti(t) {
  t[b2] = !0
}
function he(t) {
  const e = t.currentTarget
  if (e != null && e._ripple) {
    if (
      (window.clearTimeout(e._ripple.showTimer), t.type === 'touchend' && e._ripple.showTimerCommit)
    ) {
      e._ripple.showTimerCommit(),
        (e._ripple.showTimerCommit = null),
        (e._ripple.showTimer = window.setTimeout(() => {
          he(t)
        }))
      return
    }
    window.setTimeout(() => {
      e._ripple && (e._ripple.touched = !1)
    }),
      $a.hide(e)
  }
}
function Fo(t) {
  const e = t.currentTarget
  e != null &&
    e._ripple &&
    (e._ripple.showTimerCommit && (e._ripple.showTimerCommit = null),
    window.clearTimeout(e._ripple.showTimer))
}
let N0 = !1
function jo(t) {
  !N0 && (t.keyCode === pr.enter || t.keyCode === pr.space) && ((N0 = !0), $0(t))
}
function Ho(t) {
  ;(N0 = !1), he(t)
}
function Wo(t) {
  N0 && ((N0 = !1), he(t))
}
function Uo(t, e, a) {
  const { value: n, modifiers: s } = e,
    r = Bo(n)
  if (
    (r || $a.hide(t),
    (t._ripple = t._ripple ?? {}),
    (t._ripple.enabled = r),
    (t._ripple.centered = s.center),
    (t._ripple.circle = s.circle),
    ru(n) && n.class && (t._ripple.class = n.class),
    r && !a)
  ) {
    if (s.stop) {
      t.addEventListener('touchstart', Ti, { passive: !0 }), t.addEventListener('mousedown', Ti)
      return
    }
    t.addEventListener('touchstart', $0, { passive: !0 }),
      t.addEventListener('touchend', he, { passive: !0 }),
      t.addEventListener('touchmove', Fo, { passive: !0 }),
      t.addEventListener('touchcancel', he),
      t.addEventListener('mousedown', $0),
      t.addEventListener('mouseup', he),
      t.addEventListener('mouseleave', he),
      t.addEventListener('keydown', jo),
      t.addEventListener('keyup', Ho),
      t.addEventListener('blur', Wo),
      t.addEventListener('dragstart', he, { passive: !0 })
  } else !r && a && Go(t)
}
function Go(t) {
  t.removeEventListener('mousedown', $0),
    t.removeEventListener('touchstart', $0),
    t.removeEventListener('touchend', he),
    t.removeEventListener('touchmove', Fo),
    t.removeEventListener('touchcancel', he),
    t.removeEventListener('mouseup', he),
    t.removeEventListener('mouseleave', he),
    t.removeEventListener('keydown', jo),
    t.removeEventListener('keyup', Ho),
    t.removeEventListener('dragstart', he),
    t.removeEventListener('blur', Wo)
}
function A5(t, e) {
  Uo(t, e, !1)
}
function I5(t) {
  delete t._ripple, Go(t)
}
function O5(t, e) {
  if (e.value === e.oldValue) return
  const a = Bo(e.oldValue)
  Uo(t, e, a)
}
const Ko = { mounted: A5, unmounted: I5, updated: O5 },
  D5 = G(
    {
      active: { type: Boolean, default: void 0 },
      activeColor: String,
      baseColor: String,
      symbol: { type: null, default: Ro },
      flat: Boolean,
      icon: [Boolean, String, Function, Object],
      prependIcon: Nt,
      appendIcon: Nt,
      block: Boolean,
      readonly: Boolean,
      slim: Boolean,
      stacked: Boolean,
      ripple: { type: [Boolean, Object], default: !0 },
      text: { type: [String, Number, Boolean], default: void 0 },
      ...c0(),
      ..._t(),
      ...o0(),
      ...M1(),
      ...Y0(),
      ...d5(),
      ...zs(),
      ...Z0(),
      ...mn(),
      ...je(),
      ...$o(),
      ...dn(),
      ...qt({ tag: 'button' }),
      ...Yt(),
      ...J0({ variant: 'elevated' }),
    },
    'VBtn',
  ),
  pe = tt()({
    name: 'VBtn',
    props: D5(),
    emits: { 'group:selected': (t) => !0 },
    setup(t, e) {
      let { attrs: a, slots: n } = e
      const { themeClasses: s } = ie(t),
        { borderClasses: r } = l0(t),
        { densityClasses: i } = K0(t),
        { dimensionStyles: c } = V1(t),
        { elevationClasses: l } = q0(t),
        { loaderClasses: h } = gs(t),
        { locationStyles: o } = pn(t),
        { positionClasses: d } = fn(t),
        { roundedClasses: u } = He(t),
        { sizeClasses: p, sizeStyles: f } = un(t),
        m = u5(t, t.symbol, !1),
        g = Vo(t, a),
        S = _(() => {
          var I
          return t.active !== void 0
            ? t.active
            : g.isLink.value
              ? (I = g.isActive) == null
                ? void 0
                : I.value
              : m == null
                ? void 0
                : m.isSelected.value
        }),
        b = _(() => (S.value ? (t.activeColor ?? t.color) : t.color)),
        w = _(() => {
          var C, R
          return {
            color:
              ((m == null ? void 0 : m.isSelected.value) &&
                (!g.isLink.value || ((C = g.isActive) == null ? void 0 : C.value))) ||
              !m ||
              ((R = g.isActive) == null ? void 0 : R.value)
                ? (b.value ?? t.baseColor)
                : t.baseColor,
            variant: t.variant,
          }
        }),
        { colorClasses: x, colorStyles: M, variantClasses: O } = hn(w),
        D = _(() => (m == null ? void 0 : m.disabled.value) || t.disabled),
        A = _(() => t.variant === 'elevated' && !(t.disabled || t.flat || t.border)),
        E = _(() => {
          if (!(t.value === void 0 || typeof t.value == 'symbol'))
            return Object(t.value) === t.value ? JSON.stringify(t.value, null, 0) : t.value
        })
      function T(I) {
        var C
        D.value ||
          (g.isLink.value &&
            (I.metaKey || I.ctrlKey || I.shiftKey || I.button !== 0 || a.target === '_blank')) ||
          ((C = g.navigate) == null || C.call(g, I), m == null || m.toggle())
      }
      return (
        E5(g, m == null ? void 0 : m.select),
        ht(() => {
          const I = g.isLink.value ? 'a' : t.tag,
            C = !!(t.prependIcon || n.prepend),
            R = !!(t.appendIcon || n.append),
            N = !!(t.icon && t.icon !== !0)
          return u1(
            v(
              I,
              lt(
                {
                  type: I === 'a' ? void 0 : 'button',
                  class: [
                    'v-btn',
                    m == null ? void 0 : m.selectedClass.value,
                    {
                      'v-btn--active': S.value,
                      'v-btn--block': t.block,
                      'v-btn--disabled': D.value,
                      'v-btn--elevated': A.value,
                      'v-btn--flat': t.flat,
                      'v-btn--icon': !!t.icon,
                      'v-btn--loading': t.loading,
                      'v-btn--readonly': t.readonly,
                      'v-btn--slim': t.slim,
                      'v-btn--stacked': t.stacked,
                    },
                    s.value,
                    r.value,
                    x.value,
                    i.value,
                    l.value,
                    h.value,
                    d.value,
                    u.value,
                    p.value,
                    O.value,
                    t.class,
                  ],
                  style: [M.value, c.value, o.value, f.value, t.style],
                  'aria-busy': t.loading ? !0 : void 0,
                  disabled: D.value || void 0,
                  tabindex: t.loading || t.readonly ? -1 : void 0,
                  onClick: T,
                  value: E.value,
                },
                g.linkProps,
              ),
              {
                default: () => {
                  var Z
                  return [
                    on(!0, 'v-btn'),
                    !t.icon &&
                      C &&
                      v('span', { key: 'prepend', class: 'v-btn__prepend' }, [
                        n.prepend
                          ? v(
                              Ht,
                              {
                                key: 'prepend-defaults',
                                disabled: !t.prependIcon,
                                defaults: { VIcon: { icon: t.prependIcon } },
                              },
                              n.prepend,
                            )
                          : v(d1, { key: 'prepend-icon', icon: t.prependIcon }, null),
                      ]),
                    v('span', { class: 'v-btn__content', 'data-no-activator': '' }, [
                      !n.default && N
                        ? v(d1, { key: 'content-icon', icon: t.icon }, null)
                        : v(
                            Ht,
                            {
                              key: 'content-defaults',
                              disabled: !N,
                              defaults: { VIcon: { icon: t.icon } },
                            },
                            {
                              default: () => {
                                var U
                                return [
                                  ((U = n.default) == null ? void 0 : U.call(n)) ?? P1(t.text),
                                ]
                              },
                            },
                          ),
                    ]),
                    !t.icon &&
                      R &&
                      v('span', { key: 'append', class: 'v-btn__append' }, [
                        n.append
                          ? v(
                              Ht,
                              {
                                key: 'append-defaults',
                                disabled: !t.appendIcon,
                                defaults: { VIcon: { icon: t.appendIcon } },
                              },
                              n.append,
                            )
                          : v(d1, { key: 'append-icon', icon: t.appendIcon }, null),
                      ]),
                    !!t.loading &&
                      v('span', { key: 'loader', class: 'v-btn__loader' }, [
                        ((Z = n.loader) == null ? void 0 : Z.call(n)) ??
                          v(
                            _5,
                            {
                              color: typeof t.loading == 'boolean' ? void 0 : t.loading,
                              indeterminate: !0,
                              width: '2',
                            },
                            null,
                          ),
                      ]),
                  ]
                },
              },
            ),
            [[Ko, !D.value && t.ripple, '', { center: !!t.icon }]],
          )
        }),
        { group: m }
      )
    },
  }),
  R5 = tt()({
    name: 'VCardActions',
    props: _t(),
    setup(t, e) {
      let { slots: a } = e
      return (
        tn({ VBtn: { slim: !0, variant: 'text' } }),
        ht(() => {
          var n
          return v('div', { class: ['v-card-actions', t.class], style: t.style }, [
            (n = a.default) == null ? void 0 : n.call(a),
          ])
        }),
        {}
      )
    },
  }),
  L5 = G({ opacity: [Number, String], ..._t(), ...qt() }, 'VCardSubtitle'),
  M5 = tt()({
    name: 'VCardSubtitle',
    props: L5(),
    setup(t, e) {
      let { slots: a } = e
      return (
        ht(() =>
          v(
            t.tag,
            {
              class: ['v-card-subtitle', t.class],
              style: [{ '--v-card-subtitle-opacity': t.opacity }, t.style],
            },
            a,
          ),
        ),
        {}
      )
    },
  }),
  V5 = rs('v-card-title')
function $5(t) {
  return {
    aspectStyles: _(() => {
      const e = Number(t.aspectRatio)
      return e ? { paddingBottom: String((1 / e) * 100) + '%' } : void 0
    }),
  }
}
const Yo = G(
    { aspectRatio: [String, Number], contentClass: null, inline: Boolean, ..._t(), ...M1() },
    'VResponsive',
  ),
  Ai = tt()({
    name: 'VResponsive',
    props: Yo(),
    setup(t, e) {
      let { slots: a } = e
      const { aspectStyles: n } = $5(t),
        { dimensionStyles: s } = V1(t)
      return (
        ht(() => {
          var r
          return v(
            'div',
            {
              class: ['v-responsive', { 'v-responsive--inline': t.inline }, t.class],
              style: [s.value, t.style],
            },
            [
              v('div', { class: 'v-responsive__sizer', style: n.value }, null),
              (r = a.additional) == null ? void 0 : r.call(a),
              a.default &&
                v('div', { class: ['v-responsive__content', t.contentClass] }, [a.default()]),
            ],
          )
        }),
        {}
      )
    },
  }),
  vn = G(
    {
      transition: {
        type: [Boolean, String, Object],
        default: 'fade-transition',
        validator: (t) => t !== !0,
      },
    },
    'transition',
  ),
  Je = (t, e) => {
    let { slots: a } = e
    const { transition: n, disabled: s, group: r, ...i } = t,
      { component: c = r ? X2 : I1, ...l } = typeof n == 'object' ? n : {}
    return Be(
      c,
      lt(
        typeof n == 'string' ? { name: s ? '' : n } : l,
        typeof n == 'string'
          ? {}
          : Object.fromEntries(
              Object.entries({ disabled: s, group: r }).filter((h) => {
                let [o, d] = h
                return d !== void 0
              }),
            ),
        i,
      ),
      a,
    )
  }
function N5(t, e) {
  if (!Q2) return
  const a = e.modifiers || {},
    n = e.value,
    { handler: s, options: r } = typeof n == 'object' ? n : { handler: n, options: {} },
    i = new IntersectionObserver(function () {
      var d
      let c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
        l = arguments.length > 1 ? arguments[1] : void 0
      const h = (d = t._observe) == null ? void 0 : d[e.instance.$.uid]
      if (!h) return
      const o = c.some((u) => u.isIntersecting)
      s && (!a.quiet || h.init) && (!a.once || o || h.init) && s(o, c, l),
        o && a.once ? qo(t, e) : (h.init = !0)
    }, r)
  ;(t._observe = Object(t._observe)),
    (t._observe[e.instance.$.uid] = { init: !1, observer: i }),
    i.observe(t)
}
function qo(t, e) {
  var n
  const a = (n = t._observe) == null ? void 0 : n[e.instance.$.uid]
  a && (a.observer.unobserve(t), delete t._observe[e.instance.$.uid])
}
const Jo = { mounted: N5, unmounted: qo },
  B5 = G(
    {
      absolute: Boolean,
      alt: String,
      cover: Boolean,
      color: String,
      draggable: { type: [Boolean, String], default: void 0 },
      eager: Boolean,
      gradient: String,
      lazySrc: String,
      options: {
        type: Object,
        default: () => ({ root: void 0, rootMargin: void 0, threshold: void 0 }),
      },
      sizes: String,
      src: { type: [String, Object], default: '' },
      crossorigin: String,
      referrerpolicy: String,
      srcset: String,
      position: String,
      ...Yo(),
      ..._t(),
      ...je(),
      ...vn(),
    },
    'VImg',
  ),
  ys = tt()({
    name: 'VImg',
    directives: { intersect: Jo },
    props: B5(),
    emits: { loadstart: (t) => !0, load: (t) => !0, error: (t) => !0 },
    setup(t, e) {
      let { emit: a, slots: n } = e
      const { backgroundColorClasses: s, backgroundColorStyles: r } = $e(Mt(t, 'color')),
        { roundedClasses: i } = He(t),
        c = Rt('VImg'),
        l = ot(''),
        h = ct(),
        o = ot(t.eager ? 'loading' : 'idle'),
        d = ot(),
        u = ot(),
        p = _(() =>
          t.src && typeof t.src == 'object'
            ? {
                src: t.src.src,
                srcset: t.srcset || t.src.srcset,
                lazySrc: t.lazySrc || t.src.lazySrc,
                aspect: Number(t.aspectRatio || t.src.aspect || 0),
              }
            : {
                src: t.src,
                srcset: t.srcset,
                lazySrc: t.lazySrc,
                aspect: Number(t.aspectRatio || 0),
              },
        ),
        f = _(() => p.value.aspect || d.value / u.value || 0)
      nt(
        () => t.src,
        () => {
          m(o.value !== 'idle')
        },
      ),
        nt(f, (C, R) => {
          !C && R && h.value && x(h.value)
        }),
        H2(() => m())
      function m(C) {
        if (!(t.eager && C) && !(Q2 && !C && !t.eager)) {
          if (((o.value = 'loading'), p.value.lazySrc)) {
            const R = new Image()
            ;(R.src = p.value.lazySrc), x(R, null)
          }
          p.value.src &&
            ee(() => {
              var R
              a('loadstart', ((R = h.value) == null ? void 0 : R.currentSrc) || p.value.src),
                setTimeout(() => {
                  var N
                  if (!c.isUnmounted)
                    if ((N = h.value) != null && N.complete) {
                      if ((h.value.naturalWidth || S(), o.value === 'error')) return
                      f.value || x(h.value, null), o.value === 'loading' && g()
                    } else f.value || x(h.value), b()
                })
            })
        }
      }
      function g() {
        var C
        c.isUnmounted ||
          (b(),
          x(h.value),
          (o.value = 'loaded'),
          a('load', ((C = h.value) == null ? void 0 : C.currentSrc) || p.value.src))
      }
      function S() {
        var C
        c.isUnmounted ||
          ((o.value = 'error'),
          a('error', ((C = h.value) == null ? void 0 : C.currentSrc) || p.value.src))
      }
      function b() {
        const C = h.value
        C && (l.value = C.currentSrc || C.src)
      }
      let w = -1
      Se(() => {
        clearTimeout(w)
      })
      function x(C) {
        let R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100
        const N = () => {
          if ((clearTimeout(w), c.isUnmounted)) return
          const { naturalHeight: Z, naturalWidth: U } = C
          Z || U
            ? ((d.value = U), (u.value = Z))
            : !C.complete && o.value === 'loading' && R != null
              ? (w = window.setTimeout(N, R))
              : (C.currentSrc.endsWith('.svg') || C.currentSrc.startsWith('data:image/svg+xml')) &&
                ((d.value = 1), (u.value = 1))
        }
        N()
      }
      const M = _(() => ({ 'v-img__img--cover': t.cover, 'v-img__img--contain': !t.cover })),
        O = () => {
          var N
          if (!p.value.src || o.value === 'idle') return null
          const C = v(
              'img',
              {
                class: ['v-img__img', M.value],
                style: { objectPosition: t.position },
                crossorigin: t.crossorigin,
                src: p.value.src,
                srcset: p.value.srcset,
                alt: t.alt,
                referrerpolicy: t.referrerpolicy,
                draggable: t.draggable,
                sizes: t.sizes,
                ref: h,
                onLoad: g,
                onError: S,
              },
              null,
            ),
            R = (N = n.sources) == null ? void 0 : N.call(n)
          return v(
            Je,
            { transition: t.transition, appear: !0 },
            {
              default: () => [
                u1(R ? v('picture', { class: 'v-img__picture' }, [R, C]) : C, [
                  [Za, o.value === 'loaded'],
                ]),
              ],
            },
          )
        },
        D = () =>
          v(
            Je,
            { transition: t.transition },
            {
              default: () => [
                p.value.lazySrc &&
                  o.value !== 'loaded' &&
                  v(
                    'img',
                    {
                      class: ['v-img__img', 'v-img__img--preload', M.value],
                      style: { objectPosition: t.position },
                      crossorigin: t.crossorigin,
                      src: p.value.lazySrc,
                      alt: t.alt,
                      referrerpolicy: t.referrerpolicy,
                      draggable: t.draggable,
                    },
                    null,
                  ),
              ],
            },
          ),
        A = () =>
          n.placeholder
            ? v(
                Je,
                { transition: t.transition, appear: !0 },
                {
                  default: () => [
                    (o.value === 'loading' || (o.value === 'error' && !n.error)) &&
                      v('div', { class: 'v-img__placeholder' }, [n.placeholder()]),
                  ],
                },
              )
            : null,
        E = () =>
          n.error
            ? v(
                Je,
                { transition: t.transition, appear: !0 },
                {
                  default: () => [
                    o.value === 'error' && v('div', { class: 'v-img__error' }, [n.error()]),
                  ],
                },
              )
            : null,
        T = () =>
          t.gradient
            ? v(
                'div',
                {
                  class: 'v-img__gradient',
                  style: { backgroundImage: `linear-gradient(${t.gradient})` },
                },
                null,
              )
            : null,
        I = ot(!1)
      {
        const C = nt(f, (R) => {
          R &&
            (requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                I.value = !0
              })
            }),
            C())
        })
      }
      return (
        ht(() => {
          const C = Ai.filterProps(t)
          return u1(
            v(
              Ai,
              lt(
                {
                  class: [
                    'v-img',
                    { 'v-img--absolute': t.absolute, 'v-img--booting': !I.value },
                    s.value,
                    i.value,
                    t.class,
                  ],
                  style: [{ width: it(t.width === 'auto' ? d.value : t.width) }, r.value, t.style],
                },
                C,
                { aspectRatio: f.value, 'aria-label': t.alt, role: t.alt ? 'img' : void 0 },
              ),
              {
                additional: () =>
                  v(xt, null, [
                    v(O, null, null),
                    v(D, null, null),
                    v(T, null, null),
                    v(A, null, null),
                    v(E, null, null),
                  ]),
                default: n.default,
              },
            ),
            [[Ya('intersect'), { handler: m, options: t.options }, null, { once: !0 }]],
          )
        }),
        { currentSrc: l, image: h, state: o, naturalWidth: d, naturalHeight: u }
      )
    },
  }),
  F5 = G(
    {
      start: Boolean,
      end: Boolean,
      icon: Nt,
      image: String,
      text: String,
      ...c0(),
      ..._t(),
      ...o0(),
      ...je(),
      ...dn(),
      ...qt(),
      ...Yt(),
      ...J0({ variant: 'flat' }),
    },
    'VAvatar',
  ),
  Ii = tt()({
    name: 'VAvatar',
    props: F5(),
    setup(t, e) {
      let { slots: a } = e
      const { themeClasses: n } = ie(t),
        { borderClasses: s } = l0(t),
        { colorClasses: r, colorStyles: i, variantClasses: c } = hn(t),
        { densityClasses: l } = K0(t),
        { roundedClasses: h } = He(t),
        { sizeClasses: o, sizeStyles: d } = un(t)
      return (
        ht(() =>
          v(
            t.tag,
            {
              class: [
                'v-avatar',
                { 'v-avatar--start': t.start, 'v-avatar--end': t.end },
                n.value,
                s.value,
                r.value,
                l.value,
                h.value,
                o.value,
                c.value,
                t.class,
              ],
              style: [i.value, d.value, t.style],
            },
            {
              default: () => [
                a.default
                  ? v(
                      Ht,
                      {
                        key: 'content-defaults',
                        defaults: { VImg: { cover: !0, src: t.image }, VIcon: { icon: t.icon } },
                      },
                      { default: () => [a.default()] },
                    )
                  : t.image
                    ? v(ys, { key: 'image', src: t.image, alt: '', cover: !0 }, null)
                    : t.icon
                      ? v(d1, { key: 'icon', icon: t.icon }, null)
                      : t.text,
                on(!1, 'v-avatar'),
              ],
            },
          ),
        ),
        {}
      )
    },
  }),
  j5 = G(
    {
      appendAvatar: String,
      appendIcon: Nt,
      prependAvatar: String,
      prependIcon: Nt,
      subtitle: { type: [String, Number, Boolean], default: void 0 },
      title: { type: [String, Number, Boolean], default: void 0 },
      ..._t(),
      ...o0(),
    },
    'VCardItem',
  ),
  H5 = tt()({
    name: 'VCardItem',
    props: j5(),
    setup(t, e) {
      let { slots: a } = e
      return (
        ht(() => {
          var h
          const n = !!(t.prependAvatar || t.prependIcon),
            s = !!(n || a.prepend),
            r = !!(t.appendAvatar || t.appendIcon),
            i = !!(r || a.append),
            c = !!(t.title != null || a.title),
            l = !!(t.subtitle != null || a.subtitle)
          return v('div', { class: ['v-card-item', t.class], style: t.style }, [
            s &&
              v('div', { key: 'prepend', class: 'v-card-item__prepend' }, [
                a.prepend
                  ? v(
                      Ht,
                      {
                        key: 'prepend-defaults',
                        disabled: !n,
                        defaults: {
                          VAvatar: { density: t.density, image: t.prependAvatar },
                          VIcon: { density: t.density, icon: t.prependIcon },
                        },
                      },
                      a.prepend,
                    )
                  : v(xt, null, [
                      t.prependAvatar &&
                        v(
                          Ii,
                          { key: 'prepend-avatar', density: t.density, image: t.prependAvatar },
                          null,
                        ),
                      t.prependIcon &&
                        v(
                          d1,
                          { key: 'prepend-icon', density: t.density, icon: t.prependIcon },
                          null,
                        ),
                    ]),
              ]),
            v('div', { class: 'v-card-item__content' }, [
              c &&
                v(
                  V5,
                  { key: 'title' },
                  {
                    default: () => {
                      var o
                      return [((o = a.title) == null ? void 0 : o.call(a)) ?? P1(t.title)]
                    },
                  },
                ),
              l &&
                v(
                  M5,
                  { key: 'subtitle' },
                  {
                    default: () => {
                      var o
                      return [((o = a.subtitle) == null ? void 0 : o.call(a)) ?? P1(t.subtitle)]
                    },
                  },
                ),
              (h = a.default) == null ? void 0 : h.call(a),
            ]),
            i &&
              v('div', { key: 'append', class: 'v-card-item__append' }, [
                a.append
                  ? v(
                      Ht,
                      {
                        key: 'append-defaults',
                        disabled: !r,
                        defaults: {
                          VAvatar: { density: t.density, image: t.appendAvatar },
                          VIcon: { density: t.density, icon: t.appendIcon },
                        },
                      },
                      a.append,
                    )
                  : v(xt, null, [
                      t.appendIcon &&
                        v(d1, { key: 'append-icon', density: t.density, icon: t.appendIcon }, null),
                      t.appendAvatar &&
                        v(
                          Ii,
                          { key: 'append-avatar', density: t.density, image: t.appendAvatar },
                          null,
                        ),
                    ]),
              ]),
          ])
        }),
        {}
      )
    },
  }),
  W5 = G({ opacity: [Number, String], ..._t(), ...qt() }, 'VCardText'),
  U5 = tt()({
    name: 'VCardText',
    props: W5(),
    setup(t, e) {
      let { slots: a } = e
      return (
        ht(() =>
          v(
            t.tag,
            {
              class: ['v-card-text', t.class],
              style: [{ '--v-card-text-opacity': t.opacity }, t.style],
            },
            a,
          ),
        ),
        {}
      )
    },
  }),
  G5 = G(
    {
      appendAvatar: String,
      appendIcon: Nt,
      disabled: Boolean,
      flat: Boolean,
      hover: Boolean,
      image: String,
      link: { type: Boolean, default: void 0 },
      prependAvatar: String,
      prependIcon: Nt,
      ripple: { type: [Boolean, Object], default: !0 },
      subtitle: { type: [String, Number, Boolean], default: void 0 },
      text: { type: [String, Number, Boolean], default: void 0 },
      title: { type: [String, Number, Boolean], default: void 0 },
      ...c0(),
      ..._t(),
      ...o0(),
      ...M1(),
      ...Y0(),
      ...zs(),
      ...Z0(),
      ...mn(),
      ...je(),
      ...$o(),
      ...qt(),
      ...Yt(),
      ...J0({ variant: 'elevated' }),
    },
    'VCard',
  ),
  K5 = tt()({
    name: 'VCard',
    directives: { Ripple: Ko },
    props: G5(),
    setup(t, e) {
      let { attrs: a, slots: n } = e
      const { themeClasses: s } = ie(t),
        { borderClasses: r } = l0(t),
        { colorClasses: i, colorStyles: c, variantClasses: l } = hn(t),
        { densityClasses: h } = K0(t),
        { dimensionStyles: o } = V1(t),
        { elevationClasses: d } = q0(t),
        { loaderClasses: u } = gs(t),
        { locationStyles: p } = pn(t),
        { positionClasses: f } = fn(t),
        { roundedClasses: m } = He(t),
        g = Vo(t, a),
        S = _(() => t.link !== !1 && g.isLink.value),
        b = _(() => !t.disabled && t.link !== !1 && (t.link || g.isClickable.value))
      return (
        ht(() => {
          const w = S.value ? 'a' : t.tag,
            x = !!(n.title || t.title != null),
            M = !!(n.subtitle || t.subtitle != null),
            O = x || M,
            D = !!(n.append || t.appendAvatar || t.appendIcon),
            A = !!(n.prepend || t.prependAvatar || t.prependIcon),
            E = !!(n.image || t.image),
            T = O || A || D,
            I = !!(n.text || t.text != null)
          return u1(
            v(
              w,
              lt(
                {
                  class: [
                    'v-card',
                    {
                      'v-card--disabled': t.disabled,
                      'v-card--flat': t.flat,
                      'v-card--hover': t.hover && !(t.disabled || t.flat),
                      'v-card--link': b.value,
                    },
                    s.value,
                    r.value,
                    i.value,
                    h.value,
                    d.value,
                    u.value,
                    f.value,
                    m.value,
                    l.value,
                    t.class,
                  ],
                  style: [c.value, o.value, p.value, t.style],
                  onClick: b.value && g.navigate,
                  tabindex: t.disabled ? -1 : void 0,
                },
                g.linkProps,
              ),
              {
                default: () => {
                  var C
                  return [
                    E &&
                      v('div', { key: 'image', class: 'v-card__image' }, [
                        n.image
                          ? v(
                              Ht,
                              {
                                key: 'image-defaults',
                                disabled: !t.image,
                                defaults: { VImg: { cover: !0, src: t.image } },
                              },
                              n.image,
                            )
                          : v(ys, { key: 'image-img', cover: !0, src: t.image }, null),
                      ]),
                    v(
                      Mo,
                      {
                        name: 'v-card',
                        active: !!t.loading,
                        color: typeof t.loading == 'boolean' ? void 0 : t.loading,
                      },
                      { default: n.loader },
                    ),
                    T &&
                      v(
                        H5,
                        {
                          key: 'item',
                          prependAvatar: t.prependAvatar,
                          prependIcon: t.prependIcon,
                          title: t.title,
                          subtitle: t.subtitle,
                          appendAvatar: t.appendAvatar,
                          appendIcon: t.appendIcon,
                        },
                        {
                          default: n.item,
                          prepend: n.prepend,
                          title: n.title,
                          subtitle: n.subtitle,
                          append: n.append,
                        },
                      ),
                    I &&
                      v(
                        U5,
                        { key: 'text' },
                        {
                          default: () => {
                            var R
                            return [((R = n.text) == null ? void 0 : R.call(n)) ?? t.text]
                          },
                        },
                      ),
                    (C = n.default) == null ? void 0 : C.call(n),
                    n.actions && v(R5, null, { default: n.actions }),
                    on(b.value, 'v-card'),
                  ]
                },
              },
            ),
            [[Ya('ripple'), b.value && t.ripple]],
          )
        }),
        {}
      )
    },
  }),
  Zo = an.reduce((t, e) => ((t[e] = { type: [Boolean, String, Number], default: !1 }), t), {}),
  Xo = an.reduce((t, e) => {
    const a = 'offset' + Xe(e)
    return (t[a] = { type: [String, Number], default: null }), t
  }, {}),
  Qo = an.reduce((t, e) => {
    const a = 'order' + Xe(e)
    return (t[a] = { type: [String, Number], default: null }), t
  }, {}),
  Oi = { col: Object.keys(Zo), offset: Object.keys(Xo), order: Object.keys(Qo) }
function Y5(t, e, a) {
  let n = t
  if (!(a == null || a === !1)) {
    if (e) {
      const s = e.replace(t, '')
      n += `-${s}`
    }
    return (
      t === 'col' && (n = 'v-' + n),
      (t === 'col' && (a === '' || a === !0)) || (n += `-${a}`),
      n.toLowerCase()
    )
  }
}
const q5 = ['auto', 'start', 'end', 'center', 'baseline', 'stretch'],
  J5 = G(
    {
      cols: { type: [Boolean, String, Number], default: !1 },
      ...Zo,
      offset: { type: [String, Number], default: null },
      ...Xo,
      order: { type: [String, Number], default: null },
      ...Qo,
      alignSelf: { type: String, default: null, validator: (t) => q5.includes(t) },
      ..._t(),
      ...qt(),
    },
    'VCol',
  ),
  Z5 = tt()({
    name: 'VCol',
    props: J5(),
    setup(t, e) {
      let { slots: a } = e
      const n = _(() => {
        const s = []
        let r
        for (r in Oi)
          Oi[r].forEach((c) => {
            const l = t[c],
              h = Y5(r, c, l)
            h && s.push(h)
          })
        const i = s.some((c) => c.startsWith('v-col-'))
        return (
          s.push({
            'v-col': !i || !t.cols,
            [`v-col-${t.cols}`]: t.cols,
            [`offset-${t.offset}`]: t.offset,
            [`order-${t.order}`]: t.order,
            [`align-self-${t.alignSelf}`]: t.alignSelf,
          }),
          s
        )
      })
      return () => {
        var s
        return Be(
          t.tag,
          { class: [n.value, t.class], style: t.style },
          (s = a.default) == null ? void 0 : s.call(a),
        )
      }
    },
  }),
  bs = ['start', 'end', 'center'],
  t3 = ['space-between', 'space-around', 'space-evenly']
function _s(t, e) {
  return an.reduce((a, n) => {
    const s = t + Xe(n)
    return (a[s] = e()), a
  }, {})
}
const X5 = [...bs, 'baseline', 'stretch'],
  e3 = (t) => X5.includes(t),
  a3 = _s('align', () => ({ type: String, default: null, validator: e3 })),
  Q5 = [...bs, ...t3],
  n3 = (t) => Q5.includes(t),
  s3 = _s('justify', () => ({ type: String, default: null, validator: n3 })),
  t7 = [...bs, ...t3, 'stretch'],
  r3 = (t) => t7.includes(t),
  i3 = _s('alignContent', () => ({ type: String, default: null, validator: r3 })),
  Di = { align: Object.keys(a3), justify: Object.keys(s3), alignContent: Object.keys(i3) },
  e7 = { align: 'align', justify: 'justify', alignContent: 'align-content' }
function a7(t, e, a) {
  let n = e7[t]
  if (a != null) {
    if (e) {
      const s = e.replace(t, '')
      n += `-${s}`
    }
    return (n += `-${a}`), n.toLowerCase()
  }
}
const n7 = G(
    {
      dense: Boolean,
      noGutters: Boolean,
      align: { type: String, default: null, validator: e3 },
      ...a3,
      justify: { type: String, default: null, validator: n3 },
      ...s3,
      alignContent: { type: String, default: null, validator: r3 },
      ...i3,
      ..._t(),
      ...qt(),
    },
    'VRow',
  ),
  s7 = tt()({
    name: 'VRow',
    props: n7(),
    setup(t, e) {
      let { slots: a } = e
      const n = _(() => {
        const s = []
        let r
        for (r in Di)
          Di[r].forEach((i) => {
            const c = t[i],
              l = a7(r, i, c)
            l && s.push(l)
          })
        return (
          s.push({
            'v-row--no-gutters': t.noGutters,
            'v-row--dense': t.dense,
            [`align-${t.align}`]: t.align,
            [`justify-${t.justify}`]: t.justify,
            [`align-content-${t.alignContent}`]: t.alignContent,
          }),
          s
        )
      })
      return () => {
        var s
        return Be(
          t.tag,
          { class: ['v-row', n.value, t.class], style: t.style },
          (s = a.default) == null ? void 0 : s.call(a),
        )
      }
    },
  }),
  r7 = rs('v-spacer', 'div', 'VSpacer'),
  i7 = { class: 'd-flex align-center justify-space-between' },
  c7 = { class: 'd-flex ga-3' },
  l7 = R1({
    __name: 'ProjectsList',
    setup(t) {
      const e = c5(),
        a = so(),
        n = _(() => a.getters['projects/list']),
        s = _(() => n.value.length !== 0),
        r = _(() => a.getters['projects/isLoading']),
        i = () => e.push(At.NEW_PROJECT.path),
        c = (h) => {
          a.dispatch('projects/setCurrentProject', h),
            e.push({ name: At.PROJECT_DETAILS.name, params: { projectId: h.id } })
        },
        l = async () => await a.dispatch('projects/setProjectsData')
      return (h, o) => {
        const d = e2('AppLoading'),
          u = e2('NoEntries')
        return (
          Ft(),
          p1('div', null, [
            ue('div', i7, [
              o[2] || (o[2] = ue('h2', null, 'All Projects', -1)),
              ue('div', c7, [
                s.value
                  ? ud('', !0)
                  : (Ft(),
                    Ke(
                      pe,
                      {
                        key: 0,
                        variant: 'tonal',
                        color: 'primary',
                        'data-test': 'populate-projects',
                        onClick: l,
                      },
                      { default: Bt(() => o[0] || (o[0] = [ye(' Populate Projects ')])), _: 1 },
                    )),
                v(
                  pe,
                  { variant: 'elevated', color: 'primary', onClick: i },
                  { default: Bt(() => o[1] || (o[1] = [ye('Add New Project')])), _: 1 },
                ),
              ]),
            ]),
            r.value
              ? (Ft(), Ke(d, { key: 0 }))
              : s.value
                ? (Ft(),
                  Ke(
                    s7,
                    { key: 1, class: 'mt-2', 'data-test': 'projects-list' },
                    {
                      default: Bt(() => [
                        (Ft(!0),
                        p1(
                          xt,
                          null,
                          Rh(
                            n.value,
                            (p, f) => (
                              Ft(),
                              Ke(
                                Z5,
                                { key: f, cols: '12', md: '4' },
                                {
                                  default: Bt(() => [
                                    (Ft(),
                                    Ke(
                                      K5,
                                      {
                                        key: p.id,
                                        title: p.title,
                                        color: 'primary',
                                        variant: 'tonal',
                                        link: '',
                                        onClick: (m) => c(p),
                                      },
                                      null,
                                      8,
                                      ['title', 'onClick'],
                                    )),
                                  ]),
                                  _: 2,
                                },
                                1024,
                              )
                            ),
                          ),
                          128,
                        )),
                      ]),
                      _: 1,
                    },
                  ))
                : (Ft(), Ke(u, { key: 2, item: 'projects', 'button-text': 'POPULATE PROJECTS' })),
          ])
        )
      }
    },
  })
function c3(t) {
  return {
    showSnack: ({ text: a, type: n = 'success' }) => {
      t.dispatch('snacks/add', { text: a, type: n })
    },
  }
}
const { showSnack: o7 } = c3(G0),
  h7 = (t) => !G0.getters['projects/findProjectById'](+t)
function d7(t) {
  if (t.name === 'projectDetails' && h7(t.params.projectId))
    return (
      o7({
        text: `[GUARD] No project with ID "${t.params.projectId}". Redirected to Projects List`,
      }),
      { name: At.PROJECTS_LIST.name }
    )
}
const { showSnack: u7 } = c3(G0),
  p7 = ({ projectId: t, taskId: e }) =>
    !G0.getters['tasks/getTasksByProjectId'](t).find((s) => s.id === +e)
function m7(t) {
  if (t.name === 'task' && p7({ projectId: t.params.projectId, taskId: t.params.taskId }))
    return (
      u7({ text: `[GUARD] No task with ID "${t.params.taskId}". Redirected to Projects List` }),
      { name: At.PROJECTS_LIST.name }
    )
}
const f7 = [
    { path: At.PROJECTS_LIST.path, name: At.PROJECTS_LIST.name, component: l7 },
    {
      path: At.NEW_PROJECT.path,
      name: At.NEW_PROJECT.name,
      component: () =>
        S1(() => import('./ProjectForm-BcKrDY4V.js'), __vite__mapDeps([0, 1, 2, 3, 4, 5])),
    },
    {
      path: At.PROJECT_DETAILS.path,
      children: [
        {
          path: '',
          name: At.PROJECT_DETAILS.name,
          component: () =>
            S1(() => import('./ProjectDetails-Bf4Dr6B0.js'), __vite__mapDeps([6, 7, 8, 9, 1, 10])),
        },
        {
          path: At.EDIT_PROJECT.path,
          name: At.EDIT_PROJECT.name,
          component: () =>
            S1(() => import('./ProjectForm-BcKrDY4V.js'), __vite__mapDeps([0, 1, 2, 3, 4, 5])),
        },
        {
          path: At.TASK.path,
          name: At.TASK.name,
          component: () =>
            S1(() => import('./TaskView-BwoPksXr.js'), __vite__mapDeps([11, 7, 8, 4, 5])),
        },
        {
          path: At.TASK_NEW.path,
          name: At.TASK_NEW.name,
          component: () =>
            S1(() => import('./TaskForm-BFXjniBd.js'), __vite__mapDeps([12, 9, 2, 3, 4, 5])),
        },
        {
          path: At.EDIT_TASK.path,
          name: At.EDIT_TASK.name,
          component: () =>
            S1(() => import('./TaskForm-BFXjniBd.js'), __vite__mapDeps([12, 9, 2, 3, 4, 5])),
        },
      ],
    },
    {
      path: At.NOT_FOUND.path,
      name: At.NOT_FOUND.name,
      component: () => S1(() => import('./NotFound-BvGiszcF.js'), []),
    },
  ],
  l3 = r5({
    history: L4('/'),
    routes: f7,
    scrollBehavior(t, e, a) {
      return a || { top: 0 }
    },
    strict: !0,
  })
l3.beforeEach((t) => {
  const e = [d7, m7]
  for (const a of e) {
    const n = a(t)
    if (n) return n
  }
})
const X0 = (t, e) => {
    const a = t.__vccOpts || t
    for (const [n, s] of e) a[n] = s
    return a
  },
  v7 = {},
  z7 = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' }
function g7(t, e) {
  return (
    Ft(),
    p1(
      'svg',
      z7,
      e[0] ||
        (e[0] = [
          ue(
            'path',
            {
              d: 'M7.5,2C5.71,3.15 4.5,5.18 4.5,7.5C4.5,9.82 5.71,11.85 7.53,13C4.46,13 2,10.54 2,7.5A5.5,5.5 0 0,1 7.5,2M19.07,3.5L20.5,4.93L4.93,20.5L3.5,19.07L19.07,3.5M12.89,5.93L11.41,5L9.97,6L10.39,4.3L9,3.24L10.75,3.12L11.33,1.47L12,3.1L13.73,3.13L12.38,4.26L12.89,5.93M9.59,9.54L8.43,8.81L7.31,9.59L7.65,8.27L6.56,7.44L7.92,7.35L8.37,6.06L8.88,7.33L10.24,7.36L9.19,8.23L9.59,9.54M19,13.5A5.5,5.5 0 0,1 13.5,19C12.28,19 11.15,18.6 10.24,17.93L17.93,10.24C18.6,11.15 19,12.28 19,13.5M14.6,20.08L17.37,18.93L17.13,22.28L14.6,20.08M18.93,17.38L20.08,14.61L22.28,17.15L18.93,17.38M20.08,12.42L18.94,9.64L22.28,9.88L20.08,12.42M9.63,18.93L12.4,20.08L9.87,22.27L9.63,18.93Z',
            },
            null,
            -1,
          ),
        ]),
    )
  )
}
const y7 = X0(v7, [['render', g7]])
function Un(t, e) {
  return { x: t.x + e.x, y: t.y + e.y }
}
function b7(t, e) {
  return { x: t.x - e.x, y: t.y - e.y }
}
function Ri(t, e) {
  if (t.side === 'top' || t.side === 'bottom') {
    const { side: a, align: n } = t,
      s = n === 'left' ? 0 : n === 'center' ? e.width / 2 : n === 'right' ? e.width : n,
      r = a === 'top' ? 0 : a === 'bottom' ? e.height : a
    return Un({ x: s, y: r }, e)
  } else if (t.side === 'left' || t.side === 'right') {
    const { side: a, align: n } = t,
      s = a === 'left' ? 0 : a === 'right' ? e.width : a,
      r = n === 'top' ? 0 : n === 'center' ? e.height / 2 : n === 'bottom' ? e.height : n
    return Un({ x: s, y: r }, e)
  }
  return Un({ x: e.width / 2, y: e.height / 2 }, e)
}
const o3 = { static: w7, connected: k7 },
  _7 = G(
    {
      locationStrategy: {
        type: [String, Function],
        default: 'static',
        validator: (t) => typeof t == 'function' || t in o3,
      },
      location: { type: String, default: 'bottom' },
      origin: { type: String, default: 'auto' },
      offset: [Number, String, Array],
    },
    'VOverlay-location-strategies',
  )
function S7(t, e) {
  const a = ct({}),
    n = ct()
  Pt &&
    m1(
      () => !!(e.isActive.value && t.locationStrategy),
      (r) => {
        var i, c
        nt(() => t.locationStrategy, r),
          _e(() => {
            window.removeEventListener('resize', s), (n.value = void 0)
          }),
          window.addEventListener('resize', s, { passive: !0 }),
          typeof t.locationStrategy == 'function'
            ? (n.value = (i = t.locationStrategy(e, t, a)) == null ? void 0 : i.updateLocation)
            : (n.value = (c = o3[t.locationStrategy](e, t, a)) == null ? void 0 : c.updateLocation)
      },
    )
  function s(r) {
    var i
    ;(i = n.value) == null || i.call(n, r)
  }
  return { contentStyles: a, updateLocation: n }
}
function w7() {}
function C7(t, e) {
  const a = as(t)
  return (
    e ? (a.x += parseFloat(t.style.right || 0)) : (a.x -= parseFloat(t.style.left || 0)),
    (a.y -= parseFloat(t.style.top || 0)),
    a
  )
}
function k7(t, e, a) {
  ;(Array.isArray(t.target.value) || Gu(t.target.value)) &&
    Object.assign(a.value, { position: 'fixed', top: 0, [t.isRtl.value ? 'right' : 'left']: 0 })
  const { preferredAnchor: s, preferredOrigin: r } = es(() => {
      const f = h2(e.location, t.isRtl.value),
        m = e.origin === 'overlap' ? f : e.origin === 'auto' ? On(f) : h2(e.origin, t.isRtl.value)
      return f.side === m.side && f.align === Dn(m).align
        ? { preferredAnchor: yr(f), preferredOrigin: yr(m) }
        : { preferredAnchor: f, preferredOrigin: m }
    }),
    [i, c, l, h] = ['minWidth', 'minHeight', 'maxWidth', 'maxHeight'].map((f) =>
      _(() => {
        const m = parseFloat(e[f])
        return isNaN(m) ? 1 / 0 : m
      }),
    ),
    o = _(() => {
      if (Array.isArray(e.offset)) return e.offset
      if (typeof e.offset == 'string') {
        const f = e.offset.split(' ').map(parseFloat)
        return f.length < 2 && f.push(0), f
      }
      return typeof e.offset == 'number' ? [e.offset, 0] : [0, 0]
    })
  let d = !1
  const u = new ResizeObserver(() => {
    d && p()
  })
  nt(
    [t.target, t.contentEl],
    (f, m) => {
      let [g, S] = f,
        [b, w] = m
      b && !Array.isArray(b) && u.unobserve(b),
        g && !Array.isArray(g) && u.observe(g),
        w && u.unobserve(w),
        S && u.observe(S)
    },
    { immediate: !0 },
  ),
    _e(() => {
      u.disconnect()
    })
  function p() {
    if (((d = !1), requestAnimationFrame(() => (d = !0)), !t.target.value || !t.contentEl.value))
      return
    const f = Al(t.target.value),
      m = C7(t.contentEl.value, t.isRtl.value),
      g = Ra(t.contentEl.value),
      S = 12
    g.length ||
      (g.push(document.documentElement),
      (t.contentEl.value.style.top && t.contentEl.value.style.left) ||
        ((m.x -= parseFloat(
          document.documentElement.style.getPropertyValue('--v-body-scroll-x') || 0,
        )),
        (m.y -= parseFloat(
          document.documentElement.style.getPropertyValue('--v-body-scroll-y') || 0,
        ))))
    const b = g.reduce(
      (I, C) => {
        const R = C.getBoundingClientRect(),
          N = new E1({
            x: C === document.documentElement ? 0 : R.x,
            y: C === document.documentElement ? 0 : R.y,
            width: C.clientWidth,
            height: C.clientHeight,
          })
        return I
          ? new E1({
              x: Math.max(I.left, N.left),
              y: Math.max(I.top, N.top),
              width: Math.min(I.right, N.right) - Math.max(I.left, N.left),
              height: Math.min(I.bottom, N.bottom) - Math.max(I.top, N.top),
            })
          : N
      },
      void 0,
    )
    ;(b.x += S), (b.y += S), (b.width -= S * 2), (b.height -= S * 2)
    let w = { anchor: s.value, origin: r.value }
    function x(I) {
      const C = new E1(m),
        R = Ri(I.anchor, f),
        N = Ri(I.origin, C)
      let { x: Z, y: U } = b7(R, N)
      switch (I.anchor.side) {
        case 'top':
          U -= o.value[0]
          break
        case 'bottom':
          U += o.value[0]
          break
        case 'left':
          Z -= o.value[0]
          break
        case 'right':
          Z += o.value[0]
          break
      }
      switch (I.anchor.align) {
        case 'top':
          U -= o.value[1]
          break
        case 'bottom':
          U += o.value[1]
          break
        case 'left':
          Z -= o.value[1]
          break
        case 'right':
          Z += o.value[1]
          break
      }
      return (
        (C.x += Z),
        (C.y += U),
        (C.width = Math.min(C.width, l.value)),
        (C.height = Math.min(C.height, h.value)),
        { overflows: _r(C, b), x: Z, y: U }
      )
    }
    let M = 0,
      O = 0
    const D = { x: 0, y: 0 },
      A = { x: !1, y: !1 }
    let E = -1
    for (; !(E++ > 10); ) {
      const { x: I, y: C, overflows: R } = x(w)
      ;(M += I), (O += C), (m.x += I), (m.y += C)
      {
        const N = br(w.anchor),
          Z = R.x.before || R.x.after,
          U = R.y.before || R.y.after
        let X = !1
        if (
          (['x', 'y'].forEach((q) => {
            if ((q === 'x' && Z && !A.x) || (q === 'y' && U && !A.y)) {
              const ft = { anchor: { ...w.anchor }, origin: { ...w.origin } },
                St = q === 'x' ? (N === 'y' ? Dn : On) : N === 'y' ? On : Dn
              ;(ft.anchor = St(ft.anchor)), (ft.origin = St(ft.origin))
              const { overflows: dt } = x(ft)
              ;((dt[q].before <= R[q].before && dt[q].after <= R[q].after) ||
                dt[q].before + dt[q].after < (R[q].before + R[q].after) / 2) &&
                ((w = ft), (X = A[q] = !0))
            }
          }),
          X)
        )
          continue
      }
      R.x.before && ((M += R.x.before), (m.x += R.x.before)),
        R.x.after && ((M -= R.x.after), (m.x -= R.x.after)),
        R.y.before && ((O += R.y.before), (m.y += R.y.before)),
        R.y.after && ((O -= R.y.after), (m.y -= R.y.after))
      {
        const N = _r(m, b)
        ;(D.x = b.width - N.x.before - N.x.after),
          (D.y = b.height - N.y.before - N.y.after),
          (M += N.x.before),
          (m.x += N.x.before),
          (O += N.y.before),
          (m.y += N.y.before)
      }
      break
    }
    const T = br(w.anchor)
    return (
      Object.assign(a.value, {
        '--v-overlay-anchor-origin': `${w.anchor.side} ${w.anchor.align}`,
        transformOrigin: `${w.origin.side} ${w.origin.align}`,
        top: it(Gn(O)),
        left: t.isRtl.value ? void 0 : it(Gn(M)),
        right: t.isRtl.value ? it(Gn(-M)) : void 0,
        minWidth: it(T === 'y' ? Math.min(i.value, f.width) : i.value),
        maxWidth: it(Li(O1(D.x, i.value === 1 / 0 ? 0 : i.value, l.value))),
        maxHeight: it(Li(O1(D.y, c.value === 1 / 0 ? 0 : c.value, h.value))),
      }),
      { available: D, contentBox: m }
    )
  }
  return (
    nt(
      () => [s.value, r.value, e.offset, e.minWidth, e.minHeight, e.maxWidth, e.maxHeight],
      () => p(),
    ),
    ee(() => {
      const f = p()
      if (!f) return
      const { available: m, contentBox: g } = f
      g.height > m.y &&
        requestAnimationFrame(() => {
          p(),
            requestAnimationFrame(() => {
              p()
            })
        })
    }),
    { updateLocation: p }
  )
}
function Gn(t) {
  return Math.round(t * devicePixelRatio) / devicePixelRatio
}
function Li(t) {
  return Math.ceil(t * devicePixelRatio) / devicePixelRatio
}
let S2 = !0
const Na = []
function x7(t) {
  !S2 || Na.length ? (Na.push(t), w2()) : ((S2 = !1), t(), w2())
}
let Mi = -1
function w2() {
  cancelAnimationFrame(Mi),
    (Mi = requestAnimationFrame(() => {
      const t = Na.shift()
      t && t(), Na.length ? w2() : (S2 = !0)
    }))
}
const ya = { none: null, close: T7, block: A7, reposition: I7 },
  E7 = G(
    {
      scrollStrategy: {
        type: [String, Function],
        default: 'block',
        validator: (t) => typeof t == 'function' || t in ya,
      },
    },
    'VOverlay-scroll-strategies',
  )
function P7(t, e) {
  if (!Pt) return
  let a
  fe(async () => {
    a == null || a.stop(),
      e.isActive.value &&
        t.scrollStrategy &&
        ((a = I2()),
        await new Promise((n) => setTimeout(n)),
        a.active &&
          a.run(() => {
            var n
            typeof t.scrollStrategy == 'function'
              ? t.scrollStrategy(e, t, a)
              : (n = ya[t.scrollStrategy]) == null || n.call(ya, e, t, a)
          }))
  }),
    _e(() => {
      a == null || a.stop()
    })
}
function T7(t) {
  function e(a) {
    t.isActive.value = !1
  }
  h3(t.targetEl.value ?? t.contentEl.value, e)
}
function A7(t, e) {
  var i
  const a = (i = t.root.value) == null ? void 0 : i.offsetParent,
    n = [
      ...new Set([
        ...Ra(t.targetEl.value, e.contained ? a : void 0),
        ...Ra(t.contentEl.value, e.contained ? a : void 0),
      ]),
    ].filter((c) => !c.classList.contains('v-overlay-scroll-blocked')),
    s = window.innerWidth - document.documentElement.offsetWidth,
    r = ((c) => is(c) && c)(a || document.documentElement)
  r && t.root.value.classList.add('v-overlay--scroll-blocked'),
    n.forEach((c, l) => {
      c.style.setProperty('--v-body-scroll-x', it(-c.scrollLeft)),
        c.style.setProperty('--v-body-scroll-y', it(-c.scrollTop)),
        c !== document.documentElement && c.style.setProperty('--v-scrollbar-offset', it(s)),
        c.classList.add('v-overlay-scroll-blocked')
    }),
    _e(() => {
      n.forEach((c, l) => {
        const h = parseFloat(c.style.getPropertyValue('--v-body-scroll-x')),
          o = parseFloat(c.style.getPropertyValue('--v-body-scroll-y')),
          d = c.style.scrollBehavior
        ;(c.style.scrollBehavior = 'auto'),
          c.style.removeProperty('--v-body-scroll-x'),
          c.style.removeProperty('--v-body-scroll-y'),
          c.style.removeProperty('--v-scrollbar-offset'),
          c.classList.remove('v-overlay-scroll-blocked'),
          (c.scrollLeft = -h),
          (c.scrollTop = -o),
          (c.style.scrollBehavior = d)
      }),
        r && t.root.value.classList.remove('v-overlay--scroll-blocked')
    })
}
function I7(t, e, a) {
  let n = !1,
    s = -1,
    r = -1
  function i(c) {
    x7(() => {
      var o, d
      const l = performance.now()
      ;(d = (o = t.updateLocation).value) == null || d.call(o, c),
        (n = (performance.now() - l) / (1e3 / 60) > 2)
    })
  }
  ;(r = (typeof requestIdleCallback > 'u' ? (c) => c() : requestIdleCallback)(() => {
    a.run(() => {
      h3(t.targetEl.value ?? t.contentEl.value, (c) => {
        n
          ? (cancelAnimationFrame(s),
            (s = requestAnimationFrame(() => {
              s = requestAnimationFrame(() => {
                i(c)
              })
            })))
          : i(c)
      })
    })
  })),
    _e(() => {
      typeof cancelIdleCallback < 'u' && cancelIdleCallback(r), cancelAnimationFrame(s)
    })
}
function h3(t, e) {
  const a = [document, ...Ra(t)]
  a.forEach((n) => {
    n.addEventListener('scroll', e, { passive: !0 })
  }),
    _e(() => {
      a.forEach((n) => {
        n.removeEventListener('scroll', e)
      })
    })
}
const C2 = Symbol.for('vuetify:v-menu'),
  O7 = G({ closeDelay: [Number, String], openDelay: [Number, String] }, 'delay')
function D7(t, e) {
  let a = () => {}
  function n(i) {
    a == null || a()
    const c = Number(i ? t.openDelay : t.closeDelay)
    return new Promise((l) => {
      a = hu(c, () => {
        e == null || e(i), l(i)
      })
    })
  }
  function s() {
    return n(!0)
  }
  function r() {
    return n(!1)
  }
  return { clearDelay: a, runOpenDelay: s, runCloseDelay: r }
}
const R7 = G(
  {
    target: [String, Object],
    activator: [String, Object],
    activatorProps: { type: Object, default: () => ({}) },
    openOnClick: { type: Boolean, default: void 0 },
    openOnHover: Boolean,
    openOnFocus: { type: Boolean, default: void 0 },
    closeOnContentClick: Boolean,
    ...O7(),
  },
  'VOverlay-activator',
)
function L7(t, e) {
  let { isActive: a, isTop: n, contentEl: s } = e
  const r = Rt('useActivator'),
    i = ct()
  let c = !1,
    l = !1,
    h = !0
  const o = _(() => t.openOnFocus || (t.openOnFocus == null && t.openOnHover)),
    d = _(() => t.openOnClick || (t.openOnClick == null && !t.openOnHover && !o.value)),
    { runOpenDelay: u, runCloseDelay: p } = D7(t, (A) => {
      A === ((t.openOnHover && c) || (o.value && l)) &&
        !(t.openOnHover && a.value && !n.value) &&
        (a.value !== A && (h = !0), (a.value = A))
    }),
    f = ct(),
    m = {
      onClick: (A) => {
        A.stopPropagation(),
          (i.value = A.currentTarget || A.target),
          a.value || (f.value = [A.clientX, A.clientY]),
          (a.value = !a.value)
      },
      onMouseenter: (A) => {
        var E
        ;((E = A.sourceCapabilities) != null && E.firesTouchEvents) ||
          ((c = !0), (i.value = A.currentTarget || A.target), u())
      },
      onMouseleave: (A) => {
        ;(c = !1), p()
      },
      onFocus: (A) => {
        ou(A.target, ':focus-visible') !== !1 &&
          ((l = !0), A.stopPropagation(), (i.value = A.currentTarget || A.target), u())
      },
      onBlur: (A) => {
        ;(l = !1), A.stopPropagation(), p()
      },
    },
    g = _(() => {
      const A = {}
      return (
        d.value && (A.onClick = m.onClick),
        t.openOnHover && ((A.onMouseenter = m.onMouseenter), (A.onMouseleave = m.onMouseleave)),
        o.value && ((A.onFocus = m.onFocus), (A.onBlur = m.onBlur)),
        A
      )
    }),
    S = _(() => {
      const A = {}
      if (
        (t.openOnHover &&
          ((A.onMouseenter = () => {
            ;(c = !0), u()
          }),
          (A.onMouseleave = () => {
            ;(c = !1), p()
          })),
        o.value &&
          ((A.onFocusin = () => {
            ;(l = !0), u()
          }),
          (A.onFocusout = () => {
            ;(l = !1), p()
          })),
        t.closeOnContentClick)
      ) {
        const E = yt(C2, null)
        A.onClick = () => {
          ;(a.value = !1), E == null || E.closeParents()
        }
      }
      return A
    }),
    b = _(() => {
      const A = {}
      return (
        t.openOnHover &&
          ((A.onMouseenter = () => {
            h && ((c = !0), (h = !1), u())
          }),
          (A.onMouseleave = () => {
            ;(c = !1), p()
          })),
        A
      )
    })
  nt(n, (A) => {
    var E
    A &&
      ((t.openOnHover && !c && (!o.value || !l)) || (o.value && !l && (!t.openOnHover || !c))) &&
      !((E = s.value) != null && E.contains(document.activeElement)) &&
      (a.value = !1)
  }),
    nt(
      a,
      (A) => {
        A ||
          setTimeout(() => {
            f.value = void 0
          })
      },
      { flush: 'post' },
    )
  const w = Ia()
  fe(() => {
    w.value &&
      ee(() => {
        i.value = w.el
      })
  })
  const x = Ia(),
    M = _(() =>
      t.target === 'cursor' && f.value ? f.value : x.value ? x.el : d3(t.target, r) || i.value,
    ),
    O = _(() => (Array.isArray(M.value) ? void 0 : M.value))
  let D
  return (
    nt(
      () => !!t.activator,
      (A) => {
        A && Pt
          ? ((D = I2()),
            D.run(() => {
              M7(t, r, { activatorEl: i, activatorEvents: g })
            }))
          : D && D.stop()
      },
      { flush: 'post', immediate: !0 },
    ),
    _e(() => {
      D == null || D.stop()
    }),
    {
      activatorEl: i,
      activatorRef: w,
      target: M,
      targetEl: O,
      targetRef: x,
      activatorEvents: g,
      contentEvents: S,
      scrimEvents: b,
    }
  )
}
function M7(t, e, a) {
  let { activatorEl: n, activatorEvents: s } = a
  nt(
    () => t.activator,
    (l, h) => {
      if (h && l !== h) {
        const o = c(h)
        o && i(o)
      }
      l && ee(() => r())
    },
    { immediate: !0 },
  ),
    nt(
      () => t.activatorProps,
      () => {
        r()
      },
    ),
    _e(() => {
      i()
    })
  function r() {
    let l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : c(),
      h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t.activatorProps
    l && pu(l, lt(s.value, h))
  }
  function i() {
    let l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : c(),
      h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t.activatorProps
    l && mu(l, lt(s.value, h))
  }
  function c() {
    let l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : t.activator
    const h = d3(l, e)
    return (n.value = (h == null ? void 0 : h.nodeType) === Node.ELEMENT_NODE ? h : void 0), n.value
  }
}
function d3(t, e) {
  var n, s
  if (!t) return
  let a
  if (t === 'parent') {
    let r =
      (s = (n = e == null ? void 0 : e.proxy) == null ? void 0 : n.$el) == null
        ? void 0
        : s.parentNode
    for (; r != null && r.hasAttribute('data-no-activator'); ) r = r.parentNode
    a = r
  } else typeof t == 'string' ? (a = document.querySelector(t)) : '$el' in t ? (a = t.$el) : (a = t)
  return a
}
function V7() {
  if (!Pt) return ot(!1)
  const { ssr: t } = Gl()
  if (t) {
    const e = ot(!1)
    return (
      Ne(() => {
        e.value = !0
      }),
      e
    )
  } else return ot(!0)
}
const $7 = G({ eager: Boolean }, 'lazy')
function N7(t, e) {
  const a = ot(!1),
    n = _(() => a.value || t.eager || e.value)
  nt(e, () => (a.value = !0))
  function s() {
    t.eager || (a.value = !1)
  }
  return { isBooted: a, hasContent: n, onAfterLeave: s }
}
function zn() {
  const e = Rt('useScopeId').vnode.scopeId
  return { scopeId: e ? { [e]: '' } : void 0 }
}
const Vi = Symbol.for('vuetify:stack'),
  v0 = Lt([])
function B7(t, e, a) {
  const n = Rt('useStack'),
    s = !a,
    r = yt(Vi, void 0),
    i = Lt({ activeChildren: new Set() })
  me(Vi, i)
  const c = ot(Number(e.value))
  m1(t, () => {
    var d
    const o = (d = v0.at(-1)) == null ? void 0 : d[1]
    ;(c.value = o ? o + 10 : Number(e.value)),
      s && v0.push([n.uid, c.value]),
      r == null || r.activeChildren.add(n.uid),
      _e(() => {
        if (s) {
          const u = ut(v0).findIndex((p) => p[0] === n.uid)
          v0.splice(u, 1)
        }
        r == null || r.activeChildren.delete(n.uid)
      })
  })
  const l = ot(!0)
  s &&
    fe(() => {
      var d
      const o = ((d = v0.at(-1)) == null ? void 0 : d[0]) === n.uid
      setTimeout(() => (l.value = o))
    })
  const h = _(() => !i.activeChildren.size)
  return { globalTop: B0(l), localTop: h, stackStyles: _(() => ({ zIndex: c.value })) }
}
function F7(t) {
  return {
    teleportTarget: _(() => {
      const a = t()
      if (a === !0 || !Pt) return
      const n = a === !1 ? document.body : typeof a == 'string' ? document.querySelector(a) : a
      if (n == null) return
      let s = [...n.children].find((r) => r.matches('.v-overlay-container'))
      return (
        s ||
          ((s = document.createElement('div')),
          (s.className = 'v-overlay-container'),
          n.appendChild(s)),
        s
      )
    }),
  }
}
function j7() {
  return !0
}
function u3(t, e, a) {
  if (!t || p3(t, a) === !1) return !1
  const n = Vl(e)
  if (typeof ShadowRoot < 'u' && n instanceof ShadowRoot && n.host === t.target) return !1
  const s = ((typeof a.value == 'object' && a.value.include) || (() => []))()
  return s.push(e), !s.some((r) => (r == null ? void 0 : r.contains(t.target)))
}
function p3(t, e) {
  return ((typeof e.value == 'object' && e.value.closeConditional) || j7)(t)
}
function H7(t, e, a) {
  const n = typeof a.value == 'function' ? a.value : a.value.handler
  ;(t.shadowTarget = t.target),
    e._clickOutside.lastMousedownWasOutside &&
      u3(t, e, a) &&
      setTimeout(() => {
        p3(t, a) && n && n(t)
      }, 0)
}
function $i(t, e) {
  const a = Vl(t)
  e(document), typeof ShadowRoot < 'u' && a instanceof ShadowRoot && e(a)
}
const W7 = {
  mounted(t, e) {
    const a = (s) => H7(s, t, e),
      n = (s) => {
        t._clickOutside.lastMousedownWasOutside = u3(s, t, e)
      }
    $i(t, (s) => {
      s.addEventListener('click', a, !0), s.addEventListener('mousedown', n, !0)
    }),
      t._clickOutside || (t._clickOutside = { lastMousedownWasOutside: !1 }),
      (t._clickOutside[e.instance.$.uid] = { onClick: a, onMousedown: n })
  },
  beforeUnmount(t, e) {
    t._clickOutside &&
      ($i(t, (a) => {
        var r
        if (!a || !((r = t._clickOutside) != null && r[e.instance.$.uid])) return
        const { onClick: n, onMousedown: s } = t._clickOutside[e.instance.$.uid]
        a.removeEventListener('click', n, !0), a.removeEventListener('mousedown', s, !0)
      }),
      delete t._clickOutside[e.instance.$.uid])
  },
}
function U7(t) {
  const { modelValue: e, color: a, ...n } = t
  return v(
    I1,
    { name: 'fade-transition', appear: !0 },
    {
      default: () => [
        t.modelValue &&
          v(
            'div',
            lt(
              {
                class: ['v-overlay__scrim', t.color.backgroundColorClasses.value],
                style: t.color.backgroundColorStyles.value,
              },
              n,
            ),
            null,
          ),
      ],
    },
  )
}
const gn = G(
    {
      absolute: Boolean,
      attach: [Boolean, String, Object],
      closeOnBack: { type: Boolean, default: !0 },
      contained: Boolean,
      contentClass: null,
      contentProps: null,
      disabled: Boolean,
      opacity: [Number, String],
      noClickAnimation: Boolean,
      modelValue: Boolean,
      persistent: Boolean,
      scrim: { type: [Boolean, String], default: !0 },
      zIndex: { type: [Number, String], default: 2e3 },
      ...R7(),
      ..._t(),
      ...M1(),
      ...$7(),
      ..._7(),
      ...E7(),
      ...Yt(),
      ...vn(),
    },
    'VOverlay',
  ),
  s0 = tt()({
    name: 'VOverlay',
    directives: { ClickOutside: W7 },
    inheritAttrs: !1,
    props: { _disableGlobalStack: Boolean, ...gn() },
    emits: {
      'click:outside': (t) => !0,
      'update:modelValue': (t) => !0,
      keydown: (t) => !0,
      afterEnter: () => !0,
      afterLeave: () => !0,
    },
    setup(t, e) {
      let { slots: a, attrs: n, emit: s } = e
      const r = Rt('VOverlay'),
        i = ct(),
        c = ct(),
        l = ct(),
        h = Dt(t, 'modelValue'),
        o = _({
          get: () => h.value,
          set: (P) => {
            ;(P && t.disabled) || (h.value = P)
          },
        }),
        { themeClasses: d } = ie(t),
        { rtlClasses: u, isRtl: p } = e1(),
        { hasContent: f, onAfterLeave: m } = N7(t, o),
        g = $e(_(() => (typeof t.scrim == 'string' ? t.scrim : null))),
        {
          globalTop: S,
          localTop: b,
          stackStyles: w,
        } = B7(o, Mt(t, 'zIndex'), t._disableGlobalStack),
        {
          activatorEl: x,
          activatorRef: M,
          target: O,
          targetEl: D,
          targetRef: A,
          activatorEvents: E,
          contentEvents: T,
          scrimEvents: I,
        } = L7(t, { isActive: o, isTop: b, contentEl: l }),
        { teleportTarget: C } = F7(() => {
          var j, J, vt
          const P = t.attach || t.contained
          if (P) return P
          const F =
            ((j = x == null ? void 0 : x.value) == null ? void 0 : j.getRootNode()) ||
            ((vt = (J = r.proxy) == null ? void 0 : J.$el) == null ? void 0 : vt.getRootNode())
          return F instanceof ShadowRoot ? F : !1
        }),
        { dimensionStyles: R } = V1(t),
        N = V7(),
        { scopeId: Z } = zn()
      nt(
        () => t.disabled,
        (P) => {
          P && (o.value = !1)
        },
      )
      const { contentStyles: U, updateLocation: X } = S7(t, {
        isRtl: p,
        contentEl: l,
        target: O,
        isActive: o,
      })
      P7(t, { root: i, contentEl: l, targetEl: D, isActive: o, updateLocation: X })
      function q(P) {
        s('click:outside', P), t.persistent ? Wt() : (o.value = !1)
      }
      function ft(P) {
        return (
          o.value &&
          S.value &&
          (!t.scrim ||
            P.target === c.value ||
            (P instanceof MouseEvent && P.shadowTarget === c.value))
        )
      }
      Pt &&
        nt(
          o,
          (P) => {
            P ? window.addEventListener('keydown', St) : window.removeEventListener('keydown', St)
          },
          { immediate: !0 },
        ),
        Se(() => {
          Pt && window.removeEventListener('keydown', St)
        })
      function St(P) {
        var F, j, J
        P.key === 'Escape' &&
          S.value &&
          (((F = l.value) != null && F.contains(document.activeElement)) || s('keydown', P),
          t.persistent
            ? Wt()
            : ((o.value = !1),
              (j = l.value) != null &&
                j.contains(document.activeElement) &&
                ((J = x.value) == null || J.focus())))
      }
      function dt(P) {
        ;(P.key === 'Escape' && !S.value) || s('keydown', P)
      }
      const mt = k5()
      m1(
        () => t.closeOnBack,
        () => {
          x5(mt, (P) => {
            S.value && o.value ? (P(!1), t.persistent ? Wt() : (o.value = !1)) : P()
          })
        },
      )
      const Jt = ct()
      nt(
        () => o.value && (t.absolute || t.contained) && C.value == null,
        (P) => {
          if (P) {
            const F = Wu(i.value)
            F && F !== document.scrollingElement && (Jt.value = F.scrollTop)
          }
        },
      )
      function Wt() {
        t.noClickAnimation ||
          (l.value &&
            K1(
              l.value,
              [
                { transformOrigin: 'center' },
                { transform: 'scale(1.03)' },
                { transformOrigin: 'center' },
              ],
              { duration: 150, easing: Da },
            ))
      }
      function ze() {
        s('afterEnter')
      }
      function $t() {
        m(), s('afterLeave')
      }
      return (
        ht(() => {
          var P
          return v(xt, null, [
            (P = a.activator) == null
              ? void 0
              : P.call(a, {
                  isActive: o.value,
                  targetRef: A,
                  props: lt({ ref: M }, E.value, t.activatorProps),
                }),
            N.value &&
              f.value &&
              v(
                Ch,
                { disabled: !C.value, to: C.value },
                {
                  default: () => [
                    v(
                      'div',
                      lt(
                        {
                          class: [
                            'v-overlay',
                            {
                              'v-overlay--absolute': t.absolute || t.contained,
                              'v-overlay--active': o.value,
                              'v-overlay--contained': t.contained,
                            },
                            d.value,
                            u.value,
                            t.class,
                          ],
                          style: [
                            w.value,
                            { '--v-overlay-opacity': t.opacity, top: it(Jt.value) },
                            t.style,
                          ],
                          ref: i,
                          onKeydown: dt,
                        },
                        Z,
                        n,
                      ),
                      [
                        v(
                          U7,
                          lt({ color: g, modelValue: o.value && !!t.scrim, ref: c }, I.value),
                          null,
                        ),
                        v(
                          Je,
                          {
                            appear: !0,
                            persisted: !0,
                            transition: t.transition,
                            target: O.value,
                            onAfterEnter: ze,
                            onAfterLeave: $t,
                          },
                          {
                            default: () => {
                              var F
                              return [
                                u1(
                                  v(
                                    'div',
                                    lt(
                                      {
                                        ref: l,
                                        class: ['v-overlay__content', t.contentClass],
                                        style: [R.value, U.value],
                                      },
                                      T.value,
                                      t.contentProps,
                                    ),
                                    [(F = a.default) == null ? void 0 : F.call(a, { isActive: o })],
                                  ),
                                  [
                                    [Za, o.value],
                                    [
                                      Ya('click-outside'),
                                      {
                                        handler: q,
                                        closeConditional: ft,
                                        include: () => [x.value],
                                      },
                                    ],
                                  ],
                                ),
                              ]
                            },
                          },
                        ),
                      ],
                    ),
                  ],
                },
              ),
          ])
        }),
        {
          activatorEl: x,
          scrimEl: c,
          target: O,
          animateClick: Wt,
          contentEl: l,
          globalTop: S,
          localTop: b,
          updateLocation: X,
        }
      )
    },
  }),
  Kn = Symbol('Forwarded refs')
function Yn(t, e) {
  let a = t
  for (; a; ) {
    const n = Reflect.getOwnPropertyDescriptor(a, e)
    if (n) return n
    a = Object.getPrototypeOf(a)
  }
}
function Q0(t) {
  for (var e = arguments.length, a = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
    a[n - 1] = arguments[n]
  return (
    (t[Kn] = a),
    new Proxy(t, {
      get(s, r) {
        if (Reflect.has(s, r)) return Reflect.get(s, r)
        if (!(typeof r == 'symbol' || r.startsWith('$') || r.startsWith('__'))) {
          for (const i of a)
            if (i.value && Reflect.has(i.value, r)) {
              const c = Reflect.get(i.value, r)
              return typeof c == 'function' ? c.bind(i.value) : c
            }
        }
      },
      has(s, r) {
        if (Reflect.has(s, r)) return !0
        if (typeof r == 'symbol' || r.startsWith('$') || r.startsWith('__')) return !1
        for (const i of a) if (i.value && Reflect.has(i.value, r)) return !0
        return !1
      },
      set(s, r, i) {
        if (Reflect.has(s, r)) return Reflect.set(s, r, i)
        if (typeof r == 'symbol' || r.startsWith('$') || r.startsWith('__')) return !1
        for (const c of a) if (c.value && Reflect.has(c.value, r)) return Reflect.set(c.value, r, i)
        return !1
      },
      getOwnPropertyDescriptor(s, r) {
        var c
        const i = Reflect.getOwnPropertyDescriptor(s, r)
        if (i) return i
        if (!(typeof r == 'symbol' || r.startsWith('$') || r.startsWith('__'))) {
          for (const l of a) {
            if (!l.value) continue
            const h =
              Yn(l.value, r) ??
              ('_' in l.value ? Yn((c = l.value._) == null ? void 0 : c.setupState, r) : void 0)
            if (h) return h
          }
          for (const l of a) {
            const h = l.value && l.value[Kn]
            if (!h) continue
            const o = h.slice()
            for (; o.length; ) {
              const d = o.shift(),
                u = Yn(d.value, r)
              if (u) return u
              const p = d.value && d.value[Kn]
              p && o.push(...p)
            }
          }
        }
      },
    })
  )
}
function G7(t) {
  const e = ot(t())
  let a = -1
  function n() {
    clearInterval(a)
  }
  function s() {
    n(), ee(() => (e.value = t()))
  }
  function r(i) {
    const c = i ? getComputedStyle(i) : { transitionDuration: 0.2 },
      l = parseFloat(c.transitionDuration) * 1e3 || 200
    if ((n(), e.value <= 0)) return
    const h = performance.now()
    a = window.setInterval(() => {
      const o = performance.now() - h + l
      ;(e.value = Math.max(t() - o, 0)), e.value <= 0 && n()
    }, l)
  }
  return _e(n), { clear: n, time: e, start: r, reset: s }
}
const K7 = G(
    {
      multiLine: Boolean,
      text: String,
      timer: [Boolean, String],
      timeout: { type: [Number, String], default: 5e3 },
      vertical: Boolean,
      ...Z0({ location: 'bottom' }),
      ...mn(),
      ...je(),
      ...J0(),
      ...Yt(),
      ...ke(gn({ transition: 'v-snackbar-transition' }), [
        'persistent',
        'noClickAnimation',
        'scrim',
        'scrollStrategy',
      ]),
    },
    'VSnackbar',
  ),
  Y7 = tt()({
    name: 'VSnackbar',
    props: K7(),
    emits: { 'update:modelValue': (t) => !0 },
    setup(t, e) {
      let { slots: a } = e
      const n = Dt(t, 'modelValue'),
        { positionClasses: s } = fn(t),
        { scopeId: r } = zn(),
        { themeClasses: i } = ie(t),
        { colorClasses: c, colorStyles: l, variantClasses: h } = hn(t),
        { roundedClasses: o } = He(t),
        d = G7(() => Number(t.timeout)),
        u = ct(),
        p = ct(),
        f = ot(!1),
        m = ot(0),
        g = ct(),
        S = yt(L0, void 0)
      m1(
        () => !!S,
        () => {
          const I = to()
          fe(() => {
            g.value = I.mainStyles.value
          })
        },
      ),
        nt(n, w),
        nt(() => t.timeout, w),
        Ne(() => {
          n.value && w()
        })
      let b = -1
      function w() {
        d.reset(), window.clearTimeout(b)
        const I = Number(t.timeout)
        if (!n.value || I === -1) return
        const C = ts(p.value)
        d.start(C),
          (b = window.setTimeout(() => {
            n.value = !1
          }, I))
      }
      function x() {
        d.reset(), window.clearTimeout(b)
      }
      function M() {
        ;(f.value = !0), x()
      }
      function O() {
        ;(f.value = !1), w()
      }
      function D(I) {
        m.value = I.touches[0].clientY
      }
      function A(I) {
        Math.abs(m.value - I.changedTouches[0].clientY) > 50 && (n.value = !1)
      }
      function E() {
        f.value && O()
      }
      const T = _(() =>
        t.location.split(' ').reduce((I, C) => ((I[`v-snackbar--${C}`] = !0), I), {}),
      )
      return (
        ht(() => {
          const I = s0.filterProps(t),
            C = !!(a.default || a.text || t.text)
          return v(
            s0,
            lt(
              {
                ref: u,
                class: [
                  'v-snackbar',
                  {
                    'v-snackbar--active': n.value,
                    'v-snackbar--multi-line': t.multiLine && !t.vertical,
                    'v-snackbar--timer': !!t.timer,
                    'v-snackbar--vertical': t.vertical,
                  },
                  T.value,
                  s.value,
                  t.class,
                ],
                style: [g.value, t.style],
              },
              I,
              {
                modelValue: n.value,
                'onUpdate:modelValue': (R) => (n.value = R),
                contentProps: lt(
                  {
                    class: ['v-snackbar__wrapper', i.value, c.value, o.value, h.value],
                    style: [l.value],
                    onPointerenter: M,
                    onPointerleave: O,
                  },
                  I.contentProps,
                ),
                persistent: !0,
                noClickAnimation: !0,
                scrim: !1,
                scrollStrategy: 'none',
                _disableGlobalStack: !0,
                onTouchstartPassive: D,
                onTouchend: A,
                onAfterLeave: E,
              },
              r,
            ),
            {
              default: () => {
                var R, N
                return [
                  on(!1, 'v-snackbar'),
                  t.timer &&
                    !f.value &&
                    v('div', { key: 'timer', class: 'v-snackbar__timer' }, [
                      v(
                        vs,
                        {
                          ref: p,
                          color: typeof t.timer == 'string' ? t.timer : 'info',
                          max: t.timeout,
                          'model-value': d.time.value,
                        },
                        null,
                      ),
                    ]),
                  C &&
                    v(
                      'div',
                      {
                        key: 'content',
                        class: 'v-snackbar__content',
                        role: 'status',
                        'aria-live': 'polite',
                      },
                      [
                        ((R = a.text) == null ? void 0 : R.call(a)) ?? t.text,
                        (N = a.default) == null ? void 0 : N.call(a),
                      ],
                    ),
                  a.actions &&
                    v(
                      Ht,
                      { defaults: { VBtn: { variant: 'text', ripple: !1, slim: !0 } } },
                      {
                        default: () => [
                          v('div', { class: 'v-snackbar__actions' }, [a.actions({ isActive: n })]),
                        ],
                      },
                    ),
                ]
              },
              activator: a.activator,
            },
          )
        }),
        Q0({}, u)
      )
    },
  }),
  q7 = { class: 'text-center' },
  J7 = R1({
    __name: 'SnackBar',
    setup(t) {
      const e = so(),
        a = ct(!1),
        n = _(() => e.getters['snacks/getItem'])
      return (
        nt(
          n,
          () => {
            a.value = !0
          },
          { deep: !0 },
        ),
        (s, r) => {
          var i
          return (
            Ft(),
            p1('div', q7, [
              v(
                Y7,
                {
                  modelValue: a.value,
                  'onUpdate:modelValue': r[0] || (r[0] = (c) => (a.value = c)),
                  timeout: '3000',
                  color: (i = n.value) == null ? void 0 : i.color,
                  variant: 'tonal',
                },
                { default: Bt(() => [ye(P1(n.value.text), 1)]), _: 1 },
                8,
                ['modelValue', 'color'],
              ),
            ])
          )
        }
      )
    },
  }),
  Z7 = G({ ..._t(), ...Xp({ fullHeight: !0 }), ...Yt() }, 'VApp'),
  X7 = tt()({
    name: 'VApp',
    props: Z7(),
    setup(t, e) {
      let { slots: a } = e
      const n = ie(t),
        { layoutClasses: s, getLayoutItem: r, items: i, layoutRef: c } = a6(t),
        { rtlClasses: l } = e1()
      return (
        ht(() => {
          var h
          return v(
            'div',
            {
              ref: c,
              class: ['v-application', n.themeClasses.value, s.value, l.value, t.class],
              style: [t.style],
            },
            [
              v('div', { class: 'v-application__wrap' }, [
                (h = a.default) == null ? void 0 : h.call(a),
              ]),
            ],
          )
        }),
        { getLayoutItem: r, items: i, theme: n }
      )
    },
  }),
  m3 = G({ text: String, ..._t(), ...qt() }, 'VToolbarTitle'),
  f3 = tt()({
    name: 'VToolbarTitle',
    props: m3(),
    setup(t, e) {
      let { slots: a } = e
      return (
        ht(() => {
          const n = !!(a.default || a.text || t.text)
          return v(
            t.tag,
            { class: ['v-toolbar-title', t.class], style: t.style },
            {
              default: () => {
                var s
                return [
                  n &&
                    v('div', { class: 'v-toolbar-title__placeholder' }, [
                      a.text ? a.text() : t.text,
                      (s = a.default) == null ? void 0 : s.call(a),
                    ]),
                ]
              },
            },
          )
        }),
        {}
      )
    },
  }),
  Q7 = G(
    {
      disabled: Boolean,
      group: Boolean,
      hideOnLeave: Boolean,
      leaveAbsolute: Boolean,
      mode: String,
      origin: String,
    },
    'transition',
  )
function ve(t, e, a) {
  return tt()({
    name: t,
    props: Q7({ mode: a, origin: e }),
    setup(n, s) {
      let { slots: r } = s
      const i = {
        onBeforeEnter(c) {
          n.origin && (c.style.transformOrigin = n.origin)
        },
        onLeave(c) {
          if (n.leaveAbsolute) {
            const { offsetTop: l, offsetLeft: h, offsetWidth: o, offsetHeight: d } = c
            ;(c._transitionInitialStyles = {
              position: c.style.position,
              top: c.style.top,
              left: c.style.left,
              width: c.style.width,
              height: c.style.height,
            }),
              (c.style.position = 'absolute'),
              (c.style.top = `${l}px`),
              (c.style.left = `${h}px`),
              (c.style.width = `${o}px`),
              (c.style.height = `${d}px`)
          }
          n.hideOnLeave && c.style.setProperty('display', 'none', 'important')
        },
        onAfterLeave(c) {
          if (n.leaveAbsolute && c != null && c._transitionInitialStyles) {
            const { position: l, top: h, left: o, width: d, height: u } = c._transitionInitialStyles
            delete c._transitionInitialStyles,
              (c.style.position = l || ''),
              (c.style.top = h || ''),
              (c.style.left = o || ''),
              (c.style.width = d || ''),
              (c.style.height = u || '')
          }
        },
      }
      return () => {
        const c = n.group ? X2 : I1
        return Be(
          c,
          {
            name: n.disabled ? '' : t,
            css: !n.disabled,
            ...(n.group ? void 0 : { mode: n.mode }),
            ...(n.disabled ? {} : i),
          },
          r.default,
        )
      }
    },
  })
}
function v3(t, e) {
  let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 'in-out'
  return tt()({
    name: t,
    props: { mode: { type: String, default: a }, disabled: Boolean, group: Boolean },
    setup(n, s) {
      let { slots: r } = s
      const i = n.group ? X2 : I1
      return () =>
        Be(i, { name: n.disabled ? '' : t, css: !n.disabled, ...(n.disabled ? {} : e) }, r.default)
    },
  })
}
function z3() {
  let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ''
  const a = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1)
      ? 'width'
      : 'height',
    n = re(`offset-${a}`)
  return {
    onBeforeEnter(i) {
      ;(i._parent = i.parentNode),
        (i._initialStyle = {
          transition: i.style.transition,
          overflow: i.style.overflow,
          [a]: i.style[a],
        })
    },
    onEnter(i) {
      const c = i._initialStyle
      if (!c) return
      i.style.setProperty('transition', 'none', 'important'), (i.style.overflow = 'hidden')
      const l = `${i[n]}px`
      ;(i.style[a] = '0'),
        i.offsetHeight,
        (i.style.transition = c.transition),
        t && i._parent && i._parent.classList.add(t),
        requestAnimationFrame(() => {
          i.style[a] = l
        })
    },
    onAfterEnter: r,
    onEnterCancelled: r,
    onLeave(i) {
      ;(i._initialStyle = { transition: '', overflow: i.style.overflow, [a]: i.style[a] }),
        (i.style.overflow = 'hidden'),
        (i.style[a] = `${i[n]}px`),
        i.offsetHeight,
        requestAnimationFrame(() => (i.style[a] = '0'))
    },
    onAfterLeave: s,
    onLeaveCancelled: s,
  }
  function s(i) {
    t && i._parent && i._parent.classList.remove(t), r(i)
  }
  function r(i) {
    if (!i._initialStyle) return
    const c = i._initialStyle[a]
    ;(i.style.overflow = i._initialStyle.overflow),
      c != null && (i.style[a] = c),
      delete i._initialStyle
  }
}
const t8 = G({ target: [Object, Array] }, 'v-dialog-transition'),
  e8 = tt()({
    name: 'VDialogTransition',
    props: t8(),
    setup(t, e) {
      let { slots: a } = e
      const n = {
        onBeforeEnter(s) {
          ;(s.style.pointerEvents = 'none'), (s.style.visibility = 'hidden')
        },
        async onEnter(s, r) {
          var u
          await new Promise((p) => requestAnimationFrame(p)),
            await new Promise((p) => requestAnimationFrame(p)),
            (s.style.visibility = '')
          const { x: i, y: c, sx: l, sy: h, speed: o } = Bi(t.target, s),
            d = K1(
              s,
              [{ transform: `translate(${i}px, ${c}px) scale(${l}, ${h})`, opacity: 0 }, {}],
              { duration: 225 * o, easing: ju },
            )
          ;(u = Ni(s)) == null ||
            u.forEach((p) => {
              K1(p, [{ opacity: 0 }, { opacity: 0, offset: 0.33 }, {}], {
                duration: 225 * 2 * o,
                easing: Da,
              })
            }),
            d.finished.then(() => r())
        },
        onAfterEnter(s) {
          s.style.removeProperty('pointer-events')
        },
        onBeforeLeave(s) {
          s.style.pointerEvents = 'none'
        },
        async onLeave(s, r) {
          var u
          await new Promise((p) => requestAnimationFrame(p))
          const { x: i, y: c, sx: l, sy: h, speed: o } = Bi(t.target, s)
          K1(s, [{}, { transform: `translate(${i}px, ${c}px) scale(${l}, ${h})`, opacity: 0 }], {
            duration: 125 * o,
            easing: Hu,
          }).finished.then(() => r()),
            (u = Ni(s)) == null ||
              u.forEach((p) => {
                K1(p, [{}, { opacity: 0, offset: 0.2 }, { opacity: 0 }], {
                  duration: 125 * 2 * o,
                  easing: Da,
                })
              })
        },
        onAfterLeave(s) {
          s.style.removeProperty('pointer-events')
        },
      }
      return () =>
        t.target
          ? v(I1, lt({ name: 'dialog-transition' }, n, { css: !1 }), a)
          : v(I1, { name: 'dialog-transition' }, a)
    },
  })
function Ni(t) {
  var a
  const e =
    (a = t.querySelector(':scope > .v-card, :scope > .v-sheet, :scope > .v-list')) == null
      ? void 0
      : a.children
  return e && [...e]
}
function Bi(t, e) {
  const a = Al(t),
    n = as(e),
    [s, r] = getComputedStyle(e)
      .transformOrigin.split(' ')
      .map((S) => parseFloat(S)),
    [i, c] = getComputedStyle(e).getPropertyValue('--v-overlay-anchor-origin').split(' ')
  let l = a.left + a.width / 2
  i === 'left' || c === 'left'
    ? (l -= a.width / 2)
    : (i === 'right' || c === 'right') && (l += a.width / 2)
  let h = a.top + a.height / 2
  i === 'top' || c === 'top'
    ? (h -= a.height / 2)
    : (i === 'bottom' || c === 'bottom') && (h += a.height / 2)
  const o = a.width / n.width,
    d = a.height / n.height,
    u = Math.max(1, o, d),
    p = o / u || 0,
    f = d / u || 0,
    m = (n.width * n.height) / (window.innerWidth * window.innerHeight),
    g = m > 0.12 ? Math.min(1.5, (m - 0.12) * 10 + 1) : 1
  return { x: l - (s + n.left), y: h - (r + n.top), sx: p, sy: f, speed: g }
}
ve('fab-transition', 'center center', 'out-in')
ve('dialog-bottom-transition')
ve('dialog-top-transition')
const a8 = ve('fade-transition')
ve('scale-transition')
ve('scroll-x-transition')
ve('scroll-x-reverse-transition')
ve('scroll-y-transition')
ve('scroll-y-reverse-transition')
ve('slide-x-transition')
ve('slide-x-reverse-transition')
const g3 = ve('slide-y-transition')
ve('slide-y-reverse-transition')
const n8 = v3('expand-transition', z3()),
  s8 = v3('expand-x-transition', z3('', !0)),
  r8 = [null, 'prominent', 'default', 'comfortable', 'compact'],
  y3 = G(
    {
      absolute: Boolean,
      collapse: Boolean,
      color: String,
      density: { type: String, default: 'default', validator: (t) => r8.includes(t) },
      extended: Boolean,
      extensionHeight: { type: [Number, String], default: 48 },
      flat: Boolean,
      floating: Boolean,
      height: { type: [Number, String], default: 64 },
      image: String,
      title: String,
      ...c0(),
      ..._t(),
      ...Y0(),
      ...je(),
      ...qt({ tag: 'header' }),
      ...Yt(),
    },
    'VToolbar',
  ),
  Fi = tt()({
    name: 'VToolbar',
    props: y3(),
    setup(t, e) {
      var p
      let { slots: a } = e
      const { backgroundColorClasses: n, backgroundColorStyles: s } = $e(Mt(t, 'color')),
        { borderClasses: r } = l0(t),
        { elevationClasses: i } = q0(t),
        { roundedClasses: c } = He(t),
        { themeClasses: l } = ie(t),
        { rtlClasses: h } = e1(),
        o = ot(!!(t.extended || ((p = a.extension) != null && p.call(a)))),
        d = _(() =>
          parseInt(
            Number(t.height) +
              (t.density === 'prominent' ? Number(t.height) : 0) -
              (t.density === 'comfortable' ? 8 : 0) -
              (t.density === 'compact' ? 16 : 0),
            10,
          ),
        ),
        u = _(() =>
          o.value
            ? parseInt(
                Number(t.extensionHeight) +
                  (t.density === 'prominent' ? Number(t.extensionHeight) : 0) -
                  (t.density === 'comfortable' ? 4 : 0) -
                  (t.density === 'compact' ? 8 : 0),
                10,
              )
            : 0,
        )
      return (
        tn({ VBtn: { variant: 'text' } }),
        ht(() => {
          var S
          const f = !!(t.title || a.title),
            m = !!(a.image || t.image),
            g = (S = a.extension) == null ? void 0 : S.call(a)
          return (
            (o.value = !!(t.extended || g)),
            v(
              t.tag,
              {
                class: [
                  'v-toolbar',
                  {
                    'v-toolbar--absolute': t.absolute,
                    'v-toolbar--collapse': t.collapse,
                    'v-toolbar--flat': t.flat,
                    'v-toolbar--floating': t.floating,
                    [`v-toolbar--density-${t.density}`]: !0,
                  },
                  n.value,
                  r.value,
                  i.value,
                  c.value,
                  l.value,
                  h.value,
                  t.class,
                ],
                style: [s.value, t.style],
              },
              {
                default: () => [
                  m &&
                    v('div', { key: 'image', class: 'v-toolbar__image' }, [
                      a.image
                        ? v(
                            Ht,
                            {
                              key: 'image-defaults',
                              disabled: !t.image,
                              defaults: { VImg: { cover: !0, src: t.image } },
                            },
                            a.image,
                          )
                        : v(ys, { key: 'image-img', cover: !0, src: t.image }, null),
                    ]),
                  v(
                    Ht,
                    { defaults: { VTabs: { height: it(d.value) } } },
                    {
                      default: () => {
                        var b, w, x
                        return [
                          v(
                            'div',
                            { class: 'v-toolbar__content', style: { height: it(d.value) } },
                            [
                              a.prepend &&
                                v('div', { class: 'v-toolbar__prepend' }, [
                                  (b = a.prepend) == null ? void 0 : b.call(a),
                                ]),
                              f && v(f3, { key: 'title', text: t.title }, { text: a.title }),
                              (w = a.default) == null ? void 0 : w.call(a),
                              a.append &&
                                v('div', { class: 'v-toolbar__append' }, [
                                  (x = a.append) == null ? void 0 : x.call(a),
                                ]),
                            ],
                          ),
                        ]
                      },
                    },
                  ),
                  v(
                    Ht,
                    { defaults: { VTabs: { height: it(u.value) } } },
                    {
                      default: () => [
                        v(n8, null, {
                          default: () => [
                            o.value &&
                              v(
                                'div',
                                { class: 'v-toolbar__extension', style: { height: it(u.value) } },
                                [g],
                              ),
                          ],
                        }),
                      ],
                    },
                  ),
                ],
              },
            )
          )
        }),
        { contentHeight: d, extensionHeight: u }
      )
    },
  }),
  i8 = G(
    { scrollTarget: { type: String }, scrollThreshold: { type: [String, Number], default: 300 } },
    'scroll',
  )
function c8(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
  const { canScroll: a } = e
  let n = 0,
    s = 0
  const r = ct(null),
    i = ot(0),
    c = ot(0),
    l = ot(0),
    h = ot(!1),
    o = ot(!1),
    d = _(() => Number(t.scrollThreshold)),
    u = _(() => O1((d.value - i.value) / d.value || 0)),
    p = () => {
      const f = r.value
      if (!f || (a && !a.value)) return
      ;(n = i.value), (i.value = 'window' in f ? f.pageYOffset : f.scrollTop)
      const m = f instanceof Window ? document.documentElement.scrollHeight : f.scrollHeight
      if (s !== m) {
        s = m
        return
      }
      ;(o.value = i.value < n), (l.value = Math.abs(i.value - d.value))
    }
  return (
    nt(o, () => {
      c.value = c.value || i.value
    }),
    nt(h, () => {
      c.value = 0
    }),
    Ne(() => {
      nt(
        () => t.scrollTarget,
        (f) => {
          var g
          const m = f ? document.querySelector(f) : window
          m &&
            m !== r.value &&
            ((g = r.value) == null || g.removeEventListener('scroll', p),
            (r.value = m),
            r.value.addEventListener('scroll', p, { passive: !0 }))
        },
        { immediate: !0 },
      )
    }),
    Se(() => {
      var f
      ;(f = r.value) == null || f.removeEventListener('scroll', p)
    }),
    a && nt(a, p, { immediate: !0 }),
    {
      scrollThreshold: d,
      currentScroll: i,
      currentThreshold: l,
      isScrollActive: h,
      scrollRatio: u,
      isScrollingUp: o,
      savedScroll: c,
    }
  )
}
function b3() {
  const t = ot(!1)
  return (
    Ne(() => {
      window.requestAnimationFrame(() => {
        t.value = !0
      })
    }),
    {
      ssrBootStyles: _(() => (t.value ? void 0 : { transition: 'none !important' })),
      isBooted: B0(t),
    }
  )
}
const l8 = G(
    {
      scrollBehavior: String,
      modelValue: { type: Boolean, default: !0 },
      location: { type: String, default: 'top', validator: (t) => ['top', 'bottom'].includes(t) },
      ...y3(),
      ...Qp(),
      ...i8(),
      height: { type: [Number, String], default: 64 },
    },
    'VAppBar',
  ),
  o8 = tt()({
    name: 'VAppBar',
    props: l8(),
    emits: { 'update:modelValue': (t) => !0 },
    setup(t, e) {
      let { slots: a } = e
      const n = ct(),
        s = Dt(t, 'modelValue'),
        r = _(() => {
          var w
          const b = new Set(((w = t.scrollBehavior) == null ? void 0 : w.split(' ')) ?? [])
          return {
            hide: b.has('hide'),
            fullyHide: b.has('fully-hide'),
            inverted: b.has('inverted'),
            collapse: b.has('collapse'),
            elevate: b.has('elevate'),
            fadeImage: b.has('fade-image'),
          }
        }),
        i = _(() => {
          const b = r.value
          return (
            b.hide ||
            b.fullyHide ||
            b.inverted ||
            b.collapse ||
            b.elevate ||
            b.fadeImage ||
            !s.value
          )
        }),
        {
          currentScroll: c,
          scrollThreshold: l,
          isScrollingUp: h,
          scrollRatio: o,
        } = c8(t, { canScroll: i }),
        d = _(() => r.value.hide || r.value.fullyHide),
        u = _(
          () =>
            t.collapse || (r.value.collapse && (r.value.inverted ? o.value > 0 : o.value === 0)),
        ),
        p = _(
          () =>
            t.flat ||
            (r.value.fullyHide && !s.value) ||
            (r.value.elevate && (r.value.inverted ? c.value > 0 : c.value === 0)),
        ),
        f = _(() => (r.value.fadeImage ? (r.value.inverted ? 1 - o.value : o.value) : void 0)),
        m = _(() => {
          var x, M
          if (r.value.hide && r.value.inverted) return 0
          const b = ((x = n.value) == null ? void 0 : x.contentHeight) ?? 0,
            w = ((M = n.value) == null ? void 0 : M.extensionHeight) ?? 0
          return d.value ? (c.value < l.value || r.value.fullyHide ? b + w : b) : b + w
        })
      m1(
        _(() => !!t.scrollBehavior),
        () => {
          fe(() => {
            d.value
              ? r.value.inverted
                ? (s.value = c.value > l.value)
                : (s.value = h.value || c.value < l.value)
              : (s.value = !0)
          })
        },
      )
      const { ssrBootStyles: g } = b3(),
        { layoutItemStyles: S } = t6({
          id: t.name,
          order: _(() => parseInt(t.order, 10)),
          position: Mt(t, 'location'),
          layoutSize: m,
          elementSize: ot(void 0),
          active: s,
          absolute: Mt(t, 'absolute'),
        })
      return (
        ht(() => {
          const b = Fi.filterProps(t)
          return v(
            Fi,
            lt(
              {
                ref: n,
                class: ['v-app-bar', { 'v-app-bar--bottom': t.location === 'bottom' }, t.class],
                style: [
                  { ...S.value, '--v-toolbar-image-opacity': f.value, height: void 0, ...g.value },
                  t.style,
                ],
              },
              b,
              { collapse: u.value, flat: p.value },
            ),
            a,
          )
        }),
        {}
      )
    },
  }),
  h8 = tt()({
    name: 'VAppBarTitle',
    props: m3(),
    setup(t, e) {
      let { slots: a } = e
      return ht(() => v(f3, lt(t, { class: 'v-app-bar-title' }), a)), {}
    },
  }),
  d8 = G({ scrollable: Boolean, ..._t(), ...M1(), ...qt({ tag: 'main' }) }, 'VMain'),
  u8 = tt()({
    name: 'VMain',
    props: d8(),
    setup(t, e) {
      let { slots: a } = e
      const { dimensionStyles: n } = V1(t),
        { mainStyles: s } = to(),
        { ssrBootStyles: r } = b3()
      return (
        ht(() =>
          v(
            t.tag,
            {
              class: ['v-main', { 'v-main--scrollable': t.scrollable }, t.class],
              style: [s.value, r.value, n.value, t.style],
            },
            {
              default: () => {
                var i, c
                return [
                  t.scrollable
                    ? v('div', { class: 'v-main__scroller' }, [
                        (i = a.default) == null ? void 0 : i.call(a),
                      ])
                    : (c = a.default) == null
                      ? void 0
                      : c.call(a),
                ]
              },
            },
          ),
        ),
        {}
      )
    },
  }),
  p8 = G({ withBackground: Boolean, ..._t(), ...Yt(), ...qt() }, 'VThemeProvider'),
  m8 = tt()({
    name: 'VThemeProvider',
    props: p8(),
    setup(t, e) {
      let { slots: a } = e
      const { themeClasses: n } = ie(t)
      return () => {
        var s
        return t.withBackground
          ? v(
              t.tag,
              { class: ['v-theme-provider', n.value, t.class], style: t.style },
              {
                default: () => {
                  var r
                  return [(r = a.default) == null ? void 0 : r.call(a)]
                },
              },
            )
          : (s = a.default) == null
            ? void 0
            : s.call(a)
      }
    },
  }),
  f8 = G(
    {
      id: String,
      text: String,
      ...ke(
        gn({
          closeOnBack: !1,
          location: 'end',
          locationStrategy: 'connected',
          eager: !0,
          minWidth: 0,
          offset: 10,
          openOnClick: !1,
          openOnHover: !0,
          origin: 'auto',
          scrim: !1,
          scrollStrategy: 'reposition',
          transition: !1,
        }),
        ['absolute', 'persistent'],
      ),
    },
    'VTooltip',
  ),
  v8 = tt()({
    name: 'VTooltip',
    props: f8(),
    emits: { 'update:modelValue': (t) => !0 },
    setup(t, e) {
      let { slots: a } = e
      const n = Dt(t, 'modelValue'),
        { scopeId: s } = zn(),
        r = t1(),
        i = _(() => t.id || `v-tooltip-${r}`),
        c = ct(),
        l = _(() => (t.location.split(' ').length > 1 ? t.location : t.location + ' center')),
        h = _(() =>
          t.origin === 'auto' ||
          t.origin === 'overlap' ||
          t.origin.split(' ').length > 1 ||
          t.location.split(' ').length > 1
            ? t.origin
            : t.origin + ' center',
        ),
        o = _(() =>
          t.transition ? t.transition : n.value ? 'scale-transition' : 'fade-transition',
        ),
        d = _(() => lt({ 'aria-describedby': i.value }, t.activatorProps))
      return (
        ht(() => {
          const u = s0.filterProps(t)
          return v(
            s0,
            lt(
              { ref: c, class: ['v-tooltip', t.class], style: t.style, id: i.value },
              u,
              {
                modelValue: n.value,
                'onUpdate:modelValue': (p) => (n.value = p),
                transition: o.value,
                absolute: !0,
                location: l.value,
                origin: h.value,
                persistent: !0,
                role: 'tooltip',
                activatorProps: d.value,
                _disableGlobalStack: !0,
              },
              s,
            ),
            {
              activator: a.activator,
              default: function () {
                var g
                for (var p = arguments.length, f = new Array(p), m = 0; m < p; m++)
                  f[m] = arguments[m]
                return ((g = a.default) == null ? void 0 : g.call(a, ...f)) ?? t.text
              },
            },
          )
        }),
        Q0({}, c)
      )
    },
  }),
  z8 = { 'data-test': 'test-guards' },
  g8 = R1({
    __name: 'App',
    setup(t) {
      const e = Zl()
      function a() {
        e.global.name.value = e.global.current.value.dark ? 'light' : 'dark'
      }
      return (n, s) => {
        const r = e2('RouterLink')
        return (
          Ft(),
          Ke(
            m8,
            { class: 'pa-10', theme: `${Ot(e)}`, 'with-background': '' },
            {
              default: Bt(() => [
                v(X7, null, {
                  default: Bt(() => [
                    v(
                      o8,
                      { class: 'd-flex align-center justify-space-between' },
                      {
                        default: Bt(() => [
                          v(h8, null, {
                            default: Bt(() => [
                              ue('div', null, [
                                v(
                                  r,
                                  { to: { name: Ot(At).PROJECTS_LIST.name } },
                                  {
                                    default: Bt(
                                      () => s[0] || (s[0] = [ye('Tasks Management App')]),
                                    ),
                                    _: 1,
                                  },
                                  8,
                                  ['to'],
                                ),
                              ]),
                            ]),
                            _: 1,
                          }),
                          ue('div', z8, [
                            s[3] || (s[3] = ye(' To test guards: ')),
                            v(
                              r,
                              {
                                to: {
                                  name: Ot(At).PROJECT_DETAILS.name,
                                  params: { projectId: 'aaa' },
                                },
                              },
                              {
                                default: Bt(() => s[1] || (s[1] = [ye('Non-Existent Project')])),
                                _: 1,
                              },
                              8,
                              ['to'],
                            ),
                            s[4] || (s[4] = ye(' | ')),
                            v(
                              r,
                              {
                                to: {
                                  name: Ot(At).TASK.name,
                                  params: { projectId: 1, taskId: 'aaa' },
                                },
                              },
                              {
                                default: Bt(() => s[2] || (s[2] = [ye('Non-Existent Task')])),
                                _: 1,
                              },
                              8,
                              ['to'],
                            ),
                            v(
                              v8,
                              { text: 'Toggle Theme' },
                              {
                                activator: Bt(({ props: i }) => [
                                  v(
                                    pe,
                                    { onClick: a },
                                    {
                                      default: Bt(() => [
                                        v(
                                          d1,
                                          lt(i, { size: 'large' }),
                                          { default: Bt(() => [v(y7)]), _: 2 },
                                          1040,
                                        ),
                                      ]),
                                      _: 2,
                                    },
                                    1024,
                                  ),
                                ]),
                                _: 1,
                              },
                            ),
                          ]),
                        ]),
                        _: 1,
                      },
                    ),
                    v(u8, null, { default: Bt(() => [v(Ot(Io)), v(J7)]), _: 1 }),
                  ]),
                  _: 1,
                }),
              ]),
              _: 1,
            },
            8,
            ['theme'],
          )
        )
      }
    },
  }),
  y8 = {},
  b8 = { class: 'd-flex align-center flex-column' }
function _8(t, e) {
  return (
    Ft(),
    p1('div', b8, [
      e[0] || (e[0] = ue('h2', { class: 'mb-6' }, 'Loading...', -1)),
      v(vs, { height: 10, rounded: '', color: 'primary', indeterminate: '' }),
    ])
  )
}
const S8 = X0(y8, [['render', _8]]),
  w8 = {},
  C8 = { viewBox: '0 0 305.98 291.86', xmlns: 'http://www.w3.org/2000/svg' }
function k8(t, e) {
  return (
    Ft(),
    p1(
      'svg',
      C8,
      e[0] ||
        (e[0] = [
          dl(
            '<path d="m109.08 100.48a1.1 1.1 0 0 1 -1-.74c-.19-.51-4.51-12.7-3.58-31.14.86-17 6.59-42.6 29-68.22a1.11 1.11 0 1 1 1.67 1.47c-22 25.09-27.6 50.15-28.46 66.76-.93 18 3.4 30.25 3.44 30.37a1.12 1.12 0 0 1 -.67 1.43 1 1 0 0 1 -.4.07z" fill="#333"></path><path d="m146.59 291.86h-146.59a73.87 73.87 0 0 1 146.59 0z" fill="#333"></path><path d="m277.08 291.86h-186.52a93.26 93.26 0 0 1 186.52 0z" fill="#cfd0d1"></path><circle cx="127.16" cy="124.26" fill="#cfd0d1" r="43.79"></circle><g fill="#333"><path d="m159 209.22a1.11 1.11 0 0 1 -1.11-1.12c0-.16-.06-16.25-4.37-22.51-4.76-6.91-21.71-13-21.88-13.1a1.11 1.11 0 0 1 -.67-1.42 1.12 1.12 0 0 1 1.42-.68c.73.26 17.79 6.43 23 13.93 4.71 6.84 4.76 23.1 4.76 23.78a1.12 1.12 0 0 1 -1.15 1.12z"></path><path d="m192 209.22h-.11a1.11 1.11 0 0 1 -1-1.21c.08-.87 8.92-87.41 48.4-146.63a1.12 1.12 0 0 1 1.86 1.24c-39.17 58.75-48 144.74-48 145.6a1.12 1.12 0 0 1 -1.15 1z"></path><path d="m203.16 157.28c-38.19 0-71.62-40.5-72-40.94a1.11 1.11 0 1 1 1.73-1.4c.38.46 38.33 46.41 78.79 39.38a1.12 1.12 0 1 1 .38 2.2 52 52 0 0 1 -8.9.76z"></path><circle cx="154.63" cy="69.97" r="10.79"></circle><path d="m101.11 167.79.1.14s-.08-.11-.1-.14z"></path><path d="m101.28 168.07.14.09c-.04-.1-.03-.24-.14-.09z"></path><path d="m121.57 142.91c.13.37.57.1.47-.24a.32.32 0 0 0 -.47.24z"></path><path d="m122.33 142.1a.21.21 0 0 0 .24 0c.29-.35-.3-.4-.24 0z"></path><path d="m84.35 130.06c-.15.1-.13.33.07.26s.04-.26-.07-.26z"></path><path d="m104.58 146.14-.1-.06s.09.13.1.06z"></path><path d="m84.89 130.64c-.09 0 0 .15 0 .18s.11-.15 0-.18z"></path><path d="m105.52 147.33c.22-.25-.23-.38-.35-.48.01.21.1.45.35.48z"></path><path d="m84 132.53c-.29.15-.09.69.19.36.04-.16-.04-.35-.19-.36z"></path><path d="m94.28 125.73c-.7.54.06.55 0 0-.02.09.03-.01 0 0z"></path><path d="m128.39 155.14c.21-.94.61-1.71-.7-.91.08.55-.62.29-.77.72.54.05.95 1.05 1.47.19zm-.88-.35h-.06c.02-.1.15-.08.06 0z"></path><path d="m93.15 126.8c-.18.43.33.09.16-.13z"></path><path d="m93.89 127c0 .11-.2.23-.12.33s.23-.25.12-.33z"></path><path d="m94.35 127.19s-.01.02 0 0z"></path><path d="m96 129.48s.07 0 0 0z"></path><path d="m93.85 136.33c0 .09 0 .1.13.1.15-.15.02-.28-.13-.1z"></path><path d="m97.82 134c-.25.07-.12.32.08.12a.11.11 0 0 0 -.08-.12z"></path><path d="m99.31 132.23c-.21 0-.56.29-.31.45s.49-.27.31-.45z"></path><path d="m98.25 133.69c-.09 0-.15.13-.08.18s.21-.14.08-.18z"></path><path d="m96.35 137.74c-.4 0-.17.55.08.17.01-.08-.05-.12-.08-.17z"></path><path d="m90.29 131.66c-.18 0 0 .05 0 .1z"></path><path d="m90.2 133c.32-.19 0-.73-.18-.91-.02.24-.42.76.18.91z"></path><path d="m98.75 134.94c0 .1.08.16.14.1s-.04-.25-.14-.1z"></path><path d="m97.45 138.16c.1.1.25.06.22-.09s-.24-.02-.22.09z"></path><path d="m98.49 136.9c0 .21.28.14.17-.06-.06.03-.15-.06-.17.06z"></path><path d="m98 138c-.38.12 0 .26.14.34.22-.16-.14-.18-.14-.34z"></path><path d="m91.81 134c-.64-.2-.39.81.09 1 .72 0 0-1.5-.09-1z"></path><path d="m90 135.3c0 .21.13.91.47.59a.62.62 0 0 0 -.47-.59z"></path><path d="m111.85 153.64c0-.58-.81-1-1.32-1.09.23.45.71 1.17 1.32 1.09z"></path><path d="m90.56 136.61v.11c.08-.06.09-.08 0-.11z"></path><path d="m91.22 137.78a.62.62 0 0 0 -.57-.61c.06.11.08.9.57.61z"></path><path d="m90.6 137.31s.07 0 0 0z"></path><path d="m91.22 138.36c-.38.1-.1-.08-.08.35.71.81.86-.22.08-.35z"></path><path d="m88.1 145.08c.21.19.43.63.8.58.1-.37-.58-.45-.8-.58z"></path><path d="m104.48 127.83c1.26.22-.22-1-.53-1 .17.29.17.75.53 1z"></path><path d="m96.23 145.37c0 .31.77.69.57.12-.16-.1-.37-.3-.57-.12z"></path><path d="m94 143.79.13.05s-.08-.07-.13-.05z"></path><path d="m99.44 147.35c.22.2-.21-.09 0 .36.77.88 1.08-.63 0-.36z"></path><path d="m104.7 132-.11-.08s.08.14.11.08z"></path><path d="m104.32 132.77c-.37-.07-.13.08 0 .25-.14-.26-.13-.18 0-.25z"></path><path d="m104.56 133.09s-.02 0 0 0z"></path><path d="m104.53 133.15c.07-.09-.08-.05-.14-.05s.08.08.14.05z"></path><path d="m104.38 132.85c0 .08-.07.14 0 0 .26.31.23 0 0 0z"></path><path d="m105.48 132.3h-.15c.04.04.1.01.15 0z"></path><path d="m102.6 143c-.12-.35-.74-.54-.95-.55.19.22.62 1.12.95.55z"></path><path d="m101 149.74c-.38 0-.31.37 0 .47s.31-.35 0-.47z"></path><path d="m105.26 139.35c.33.14.34-.3.08-.43-.47-.14-.5.26-.08.43z"></path><path d="m101.05 150.64s.06.13-.06.14c.13.09.16-.08.06-.14z"></path><path d="m109.85 132.9c0-.14-.09-.28-.24-.33-.43.09.02.91.24.33z"></path><path d="m109.14 136.41c-.18-.62-.87-.67-1.13-.75.13.42.73 1.34 1.13.75z"></path><path d="m105.48 141.61c-.26.12-.1-.17-.14-.17-.21-.14 0 .21 0 .24 1.35.66.02-1.16.14-.07z"></path><path d="m105.23 141.27c.06.06.07.19.12 0-.04.08-.08.01-.12 0z"></path><path d="m99.49 155.37c.22 0 .25.31.49.31.6-.15-.23-.44-.49-.31z"></path><path d="m120.46 163.11c.22.21-1.22-.91-1.57-.8.24.36-.31.2-.43.13.33.31-.22.26.16.38-.72.87 4.71.9 1.84.29z"></path><path d="m102.72 152c-.17-.13-.26.2-.29.27.13.45.94.18.29-.27z"></path><path d="m109.53 138.39c.28-.22-.33-.61-.47-.29.11.13.24.38.47.29z"></path><path d="m103.45 154.62c.64.08-.1-.63-.1-.2-.19-.01.09.15.1.2z"></path><path d="m106 155.5c-.38.27.21.8.61.49a.47.47 0 0 0 -.61-.49z"></path><path d="m103.53 159.91c.17.12 0 .19-.11.13.63.96 1.37.08.11-.13z"></path><path d="m112.05 139.52c1.39.74.36-1.43 0-.37-.27.11.27.17 0 .37z"></path><path d="m110 143.11c-.05-.05-.11 0-.12-.1s.05.22.12.1z"></path><path d="m106 157.21c-.25.17-.4.18-.19.55.38.58 1.13-.12.19-.55z"></path><path d="m110.09 143.09c.29 0 .24.19.17.34.74.06-.51-.81-.17-.34z"></path><path d="m110.21 143.4s-.11-.1-.11-.1.1.08.11.1z"></path><path d="m110.14 143.2c-.09 0-.15 0 0 .1s-.05-.06 0-.1z"></path><path d="m112.61 148.24s.09-.12 0-.14-.05.07 0 .14z"></path><path d="m110.17 156.31a.19.19 0 0 1 0 .18c.21 0 .04-.1 0-.18z"></path><path d="m116 149.38c-.07 0-.12.06-.05.09z"></path><path d="m116.28 149.61c-.4-.19-.15.19.23.19.11-.19-.13-.37-.23-.19z"></path><path d="m116.21 149.44a.23.23 0 0 0 -.12 0c.01.04.08 0 .12 0z"></path><path d="m116.37 149.5s0 0 0 0z"></path><path d="m116.14 149.53c.09-.03.04-.02 0 0z"></path><path d="m116.14 160.51c.5-.51-.75-.69-.73-.41.36.33.21.25.73.41z"></path><path d="m117.32 153.53c0-.39-.72-.44-.62-.23-.18.23.46.57.62.23z"></path><path d="m114.15 160.11c-.06.29-.36.2.19.26.32-.37-.71-.3-.19-.26z"></path><path d="m118.21 152.85c-.24 0 .13.07.28.07-.33-.45-.25-.3-.28-.07z"></path><path d="m119.41 154.74c.6.26-.09-.62 0 0-.17-.43-.41-.24 0 0z"></path><path d="m120.24 156c-.29.12.39.9.88.83.48-.58-.56-1.65-.88-.83z"></path><path d="m144.91 155.76c-.23-2.06-1.88-.1-1.39.69.37-.11.4 0 .91 0 0 .19 0 .58.25.33.03.67 1.91-1.09.23-1.02z"></path><path d="m143.37 155.9s0 0 0-.05 0 .03 0 .05z"></path><path d="m125.49 165c-.74-.11-.88.23-1.1.64.49.78 2.84.02 1.1-.64z"></path><path d="m120.41 158.84h-.09s.1.05.09 0z"></path><path d="m122.4 158.73c.15 0 0-.19-.09-.13.1-.06.15.1.09.13z"></path><path d="m125 159.88c-.25-.52-1.27-1.1-1.57-.53.32.43.91 1.38 1.57.53z"></path><path d="m133.74 160.52a.83.83 0 0 0 -1.2.95c.39.58 1.99 0 1.2-.95z"></path><path d="m132.81 162.59h-.16s.47-.02.16 0z"></path><path d="m140.48 166.16c0 .06.23 0 .18 0z"></path><path d="m144.43 160.46a.35.35 0 0 0 -.4.42c.23.35.86-.2.4-.42z"></path><path d="m144.52 160.05c0 .18.28 0 .16-.09z"></path><path d="m149.86 160.71c-1.13-1.28-3.6.69-2.43 1.45.28.84 2.39.1 2.43-1.45z"></path><path d="m147.89 155c.24.06.33-.26.05-.28-.16.13-.02.11-.05.28z"></path><path d="m145.25 149.73c.12-.32-.37-.36-.17 0 .13-.04.06.07.17 0z"></path><path d="m155.63 156.26c0 .43.16-.21.24.2.25-.28-.03-.46-.24-.2z"></path><path d="m153.13 152.23c-.15-1-1.79-.07-.91.51.35.38.67-.27.91-.51z"></path><path d="m152.45 152.92s0-.07 0 0z"></path><path d="m155 152.18c.43-1.92-3.05 0-1.1.74.32.34 1.1-.02 1.1-.74z"></path><path d="m159.38 147.82c-.23-1.67-2.42-.75-3.54.46-.37.75.87 1.12.72 1.74a1.84 1.84 0 0 1 .81.64c.84-.45 2.88-.66 2.01-2.84z"></path><path d="m137.79 158.29c.43-.14.3-.87-.22-.61-.12.26-.13.49.22.61z"></path><path d="m138.67 157.64a1.56 1.56 0 0 0 .26-.21s-.37.12-.26.21z"></path><path d="m140.77 157.16c-.53-2-2-.69-1.62.77.27-.69.85.96 1.62-.77z"></path><path d="m140.82 158.12c.06 0 0-.09 0-.1z"></path><path d="m131.09 141.62h-.09s.07 0 .09 0z"></path><path d="m130.88 141.6c-.12.05 0 .05 0 .09z"></path><path d="m139.58 165.41a.25.25 0 0 0 .22.28c.42-.19.07-.69-.22-.28z"></path><path d="m157.31 134.67a.12.12 0 0 0 .06-.21c-.15-.01-.19.15-.06.21z"></path><path d="m144.78 151.56.07-.05s-.11.03-.07.05z"></path><path d="m157.36 135.24c.08.07.12 0 .08-.1s-.09.06-.08.1z"></path><path d="m144.08 151.78c-.14-.07-.58 0-.41.2.17.02.33-.15.41-.2z"></path><path d="m156 135.9a.24.24 0 0 0 .1-.28c-.27-.11-.43.25-.1.28z"></path><path d="m166 135.28c.05-.2-.63.5-.46.7.3.02.53-.66.46-.7z"></path><path d="m127.26 163.43c.15-.25-.34-.27-.37-.42-1.57.39.65 1.73.37.42z"></path><path d="m164.76 136.47c-.17.07-.41.33-.33.51.19-.04.31-.34.33-.51z"></path><path d="m164.51 138c.19.05.34-.36.36-.48-.12.11-.31.19-.36.48z"></path><path d="m165 138.16-.06.07s-.01-.04.06-.07z"></path><path d="m162.37 143.74s0 0 0 0-.09.03 0 0z"></path><path d="m155.13 145c.09-.07 0-.1 0-.16s-.13.22 0 .16z"></path><path d="m153.17 146.87c0 .11.05.12.07.2.29.03.15-.43-.07-.2z"></path><path d="m159.31 139.6-.05.17c.05-.04.1-.1.05-.17z"></path><path d="m158.48 140.35c.39-.4.6-.61.09-.56-.23.11-.68.88-.09.56z"></path><path d="m155.13 149.49c.05-.18-.2-.15-.16 0 .03-.01.11.09.16 0z"></path><path d="m152.8 148.08a.1.1 0 0 0 0-.19c-.12.11-.13.19 0 .19z"></path><path d="m153.53 149.08c.09-.15 0-.24-.14-.1a.11.11 0 0 0 .14.1z"></path><path d="m152.75 148.36c0-.34-.2 0-.3.06.09.21.19-.06.3-.06z"></path><path d="m157.65 142.34c-.26-.43-.46-.33-1 .15-.34.98.7.25 1-.15z"></path><path d="m155.71 141.68a.68.68 0 0 0 .47-.55c-.18.05-.76.33-.47.55z"></path><path d="m137 154.21c.38.23 1-.17 1.24-.49-.46-.01-1.11.05-1.24.49z"></path><path d="m155.1 141.93h-.09c.06.07.07.07.09 0z"></path><path d="m154.29 142.58c.2-.07.52-.57.23-.42-.11-.22-.8.58-.23.42z"></path><path d="m154.52 142.06s0 .06 0 0z"></path><path d="m153.27 143.09c.35-.13.33-.45.4-.65-.2.06-.94.63-.4.65z"></path><path d="m148.62 139.82c-.12.11-.44.18-.41.43.22.18.34-.25.41-.43z"></path><path d="m147.29 146c.12-.1.31-.22.22-.4s-.68.4-.22.4z"></path><path d="m149.11 144.25-.06.09s.07-.06.06-.09z"></path><path d="m145.12 147.88c.17-.26.24-.34.1-.45.16-.33-1.22.57-.1.45z"></path><path d="m155.71 154.86c0 .08.1 0 .13-.05z"></path><path d="m155.25 154.31c-.17.23 0 .07 0-.07-.18.09-.37.14 0 .07z"></path><path d="m154.82 154.54c.05.07.07-.06.09-.1s-.1.05-.09.1z"></path><path d="m154.86 154.58s0-.02 0 0z"></path><path d="m155.09 154.37c-.09.11 0 .2-.21.21.22.06.2-.08.21-.21z"></path><path d="m155.26 155.36c-.06 0 0 .08-.06.13z"></path><path d="m147.75 150.93c.3 0 .61-.43.68-.59-.25.09-1.06.18-.68.59z"></path><path d="m143.18 147.9c-.07.32.15 0 0-.23-.41-.2-.51.65 0 .23z"></path><path d="m149.69 153.86c-.3.49.65.14.36-.18-.13-.03-.25.08-.36.18z"></path><path d="m142.43 147.69c.18 0 0 0 0-.09s-.07.09 0 .09z"></path><path d="m153.13 158.71c-.13.07 0 .21 0 .29.52.07.47-.48 0-.29z"></path><path d="m151.64 156.9c-.37 0-1.33.21-1 .72.54.01.84-.53 1-.72z"></path><path d="m148.1 153.4s0 0 0 0z"></path><path d="m148.22 153.36c-.06 0-.17 0-.07.08s.05-.05.07-.08z"></path><path d="m148.15 153.6c-.48-.36 0-.1-.11-.32-.46.01-.54.97.11.32z"></path><path d="m139.6 145.13c0 .16-.28.07-.34.23-.05.45.36 0 .34-.23z"></path><path d="m141 148.15a.39.39 0 0 0 -.18 0c-.47.57.71.38.18 0z"></path><path d="m149.05 157.55c.23-.05.41-.22.3-.41-.17.03-.6.27-.3.41z"></path><path d="m139.32 148.19c0-.12-.08-.17-.25-.1-.17.25.15.32.25.1z"></path><path d="m137.16 149.79c.33.18.63-.1.48-.42-.22.01-.54.05-.48.42z"></path><path d="m135.35 146.24c-.31-.45-.7 1 .12 0a.08.08 0 0 1 -.12 0z"></path><path d="m147.55 159.34c-.13-.3-.23-.07-.44-.25-.83.5.22.98.44.25z"></path><path d="m136.5 148.8c.18-.25-.26-.3-.43-.2-.5.58.5.52.43.2z"></path><path d="m135.67 152c-.08.14 0 .09.11.09-.08-.09-.15-.15-.11-.09z"></path><path d="m138.15 158.75c.07 0 0-.1 0-.06z"></path><path d="m137.94 158.71s.06.01 0 0z"></path><path d="m138 158.85a.27.27 0 0 0 .08-.07s-.03.04-.08.07z"></path><path d="m138 158.77c.07-.09 0-.08-.05-.05s.05.01.05.05z"></path><path d="m137.94 158.72c-.31 0-.42.42 0 .22-.1-.06-.05-.15 0-.22z"></path><path d="m135.13 157.62c-.47-.41-.67.82 0 .16-.13-.04.22-.17 0-.16z"></path><path d="m131.92 152.92c-.15-.17 0-.32-.23 0 .09.36.46-.29.23 0z"></path><path d="m134.68 158.81c.16-.14-.12.06-.19.16.51.03.35-.03.19-.16z"></path><path d="m118.08 155s0-.05.06-.07z"></path><path d="m118.75 156.48a1.42 1.42 0 0 1 .49-.8c-.27.11-.41-.18-.1-.45-.42 0-1 0-.88-.4-1.35.73-1.26 2.84.49 1.65z"></path><path d="m132.83 158.72c-.55.26.49.25 0 0 .36.1.35-.11 0 0z"></path><path d="m131.58 158.59c.08-.23-.74-.23-1 .09.11.63 1.34.52 1-.09z"></path><path d="m112.43 164.21c-.18-.1-.69-.48-.49-.72-2.39.01.79 3.37.49.72z"></path><path d="m112.61 164.63s0 0 0 0-.01.01 0 0z"></path><path d="m124.25 154.89c-1.41.63.35 1.54.36.37.1-.44-.43-.16-.36-.37z"></path><path d="m128.83 158.35c-.05.11.09.12.12 0-.02.11-.13.05-.12 0z"></path><path d="m127.86 158.49c-.5-.46-1.89.43-.58.56.25-.27.95-.05.58-.56z"></path><path d="m121.18 160.42c-.34-.46-1.55.18-.78.86a.66.66 0 0 0 .78-.86z"></path><path d="m120.67 159.55.1-.05s-.3.13-.1.05z"></path><path d="m115.39 157.46c.12-.34 0-.36-.27-.42-.33.24-.12.63.27.42z"></path><path d="m113 151.36c-.34-.05-.32.46 0 .37s.17-.34 0-.37z"></path><path d="m112.73 160.6c-.38.15 0 .58.22.31.05-.21.05-.27-.22-.31z"></path><path d="m112.41 161.29h.12c.01-.17-.19-.11-.12 0z"></path><path d="m113.63 156.22c-.14 0-.3.18-.13.28s.26-.18.13-.28z"></path><path d="m109.69 155c-.85 1.35 1.09 1.17.82.48.18-.48-.35-.48-.82-.48z"></path><path d="m110.86 159.74c.63-.87-.38-1.63-1.35-1-.7.9.94 1.86 1.35 1z"></path><path d="m105.41 157.35c-.13-.7-1.57-.23-1.33.76.49 1.4 2.1-.58 1.33-.76z"></path><path d="m108.87 164c0 .18.19.15.22 0-.09-.06-.19-.1-.22 0z"></path><path d="m104.94 159.76c-.09-.17-.13-.22-.18 0 .24.24.24-.2.18 0z"></path><path d="m117.57 163.43c-.46-.31-.59.69 0 .4.07-.19.1-.19 0-.4z"></path><path d="m116.6 163.9c0-.09-.17.11-.19.11s.37-.23.19-.11z"></path><path d="m116.18 164.41c0-.17-.14-.46.09-.8-.4.69-.08-.16-.33.08-1.85-.87-.67 2.68.24.72z"></path><path d="m115 163.41s0-.11 0-.08z"></path><path d="m120.83 157.5v.08s-.01-.06 0-.08z"></path><path d="m120.69 157.74.1-.06c-.08-.04-.09-.02-.1.06z"></path><path d="m142.37 163.8c-.2.17 0 .52.26.3 0-.16-.04-.36-.26-.3z"></path><path d="m143.08 164.15a.24.24 0 0 0 0 .22c.37.11.24-.37 0-.22z"></path><path d="m132.22 134.57c0 .27.33 0 .05 0z"></path><path d="m135.29 153.19s.05-.1 0-.08z"></path><path d="m132.76 135c0-.05 0-.06-.06-.09s.03.22.06.09z"></path><path d="m134.91 154.18c.22.06.15-.27.17-.38a.32.32 0 0 0 -.17.38z"></path><path d="m131.9 136.22c0 .16.14.14.23.09.08-.23-.13-.31-.23-.09z"></path><path d="m138.77 131c.22.67.25-.51 0-.51.09.14-.05.29 0 .51z"></path><path d="m138.58 132.43c.12-.12.06-.38 0-.5-.11.13-.15.42 0 .5z"></path><path d="m139.21 133a.57.57 0 0 0 -.05-.48c.01.12-.16.42.05.48z"></path><path d="m139.59 132.9v.1s0-.07 0-.1z"></path><path d="m141 137.65v.06s0-.02 0-.06z"></path><path d="m137 142.58v.14s.12-.16 0-.14z"></path><path d="m140 144.2c.13-.1-.1-.27-.13-.1s.06.06.13.1z"></path><path d="m141.35 144c-.35.23.18.66.28.19-.09-.06-.14-.19-.28-.19z"></path><path d="m140.37 144.23c0-.09-.14 0-.14 0s.17.1.14 0z"></path><path d="m137.07 145c.05.09.11 0 .17.07.21-.17-.17-.35-.17-.07z"></path><path d="m136.58 136.89c-.14-.11 0 .06 0 .1z"></path><path d="m136.24 138c.3-.06.17-.63.08-.85-.05.23-.44.51-.08.85z"></path><path d="m140 145.29c-.08-.14-.22 0-.1.09s.1-.01.1-.09z"></path><path d="m137.65 145.93c0-.1-.09-.16-.14-.1s.06.17.14.1z"></path><path d="m138.6 146.08a.09.09 0 0 0 .14 0c-.04-.17-.17-.16-.14 0z"></path><path d="m137.66 146.35c.19.06.08-.16.14-.23-.22-.2-.14.11-.14.23z"></path><path d="m137 139.6c-.3-.54-.52.45-.34.82.39.46.53-1.1.34-.82z"></path><path d="m135.25 139.87c0 .12-.1.46.15.4.18-.21.01-.91-.15-.4z"></path><path d="m132.91 160.11c.37-.15.42-.8.32-1.14-.23.29-.54.78-.32 1.14z"></path><path d="m135.16 140.79v.08c.03 0 .03-.02 0-.08z"></path><path d="m134.86 141.23s0 .05 0 0z"></path><path d="m134.81 141.71c.35.46.28-.81.1-.42-.09-.06-.15.29-.1.42z"></path><path d="m134.74 142.64c.13-.29-.09-.48-.17-.65-.09.17-.19 1.01.17.65z"></path><path d="m129.87 144.09c.08-.2-.06-.36-.11-.53-.03.11-.17.67.11.53z"></path><path d="m146.59 145c-.11.33-.7 1.19-.14 1.35.41-.35.05-1 .14-1.35z"></path><path d="m132.72 148.28c.35.44.32-.69.05-.26-.09-.12-.04.24-.05.26z"></path><path d="m132.93 146.06c0-.09 0 .06 0 .07z"></path><path d="m132.58 151c.65.55.3-1 .4-1.31a2.19 2.19 0 0 0 -.4 1.31z"></path><path d="m143.9 147.82v.1c.03.08 0-.08 0-.1z"></path><path d="m143.17 148.3s.01-.02 0 0z"></path><path d="m143.27 148.21c0-.15 0-.08-.09-.17.09.09-.02.31.09.17z"></path><path d="m143.13 148.3c.07 0 0-.07 0-.11s-.04.09 0 .11z"></path><path d="m143.93 148.47v.11z"></path><path d="m136.62 150.06h-.05c-.57.94.33 1.12.05 0z"></path><path d="m131.78 152.51c.24-.12.11-.46-.11-.38-.06.12-.11.4.11.38z"></path><path d="m139.84 151.34a.31.31 0 0 0 .14-.26c-.14-.58-.52.19-.14.26z"></path><path d="m131.34 152.63c.11-.1 0 0-.06 0s.01.05.06 0z"></path><path d="m145.19 151.74a.32.32 0 0 0 .11-.29c-.2-.26-.54.37-.11.29z"></path><path d="m143 151.69c-.17-.19-.73.84-.16.94.23-.27.1-.69.16-.94z"></path><path d="m138.52 151.88c0 .06-.1.11 0 .1-.03.02 0-.07 0-.1z"></path><path d="m138.64 152.06c-.23.09-.42 0-.18-.07-.46-.07.24 1.07.18.07z"></path><path d="m138.47 152s0 0 0 0z"></path><path d="m128 153.55c.29.29.19-.27 0-.38.07.12-.13.23 0 .38z"></path><path d="m128.78 166.21c-.81-.62-.66.54-.6 1.54.42-.19.44-1.06.6-1.54z"></path><path d="m130.94 154.28c.64-.25.42-.86.25-.5-.19-.1-.62.31-.25.5z"></path><path d="m141.87 153.22c-.22-.12-.33.53 0 .39a.44.44 0 0 0 0-.39z"></path><path d="m129.84 155.13c-.05-.12-.07.1-.09.12.14.41.36-.25.09-.12z"></path><path d="m129.84 157s-.06.22-.15.15c-.02.85.82.05.15-.15z"></path><path d="m126.47 156.83c0 .13-.1.08-.11 0-.36.59.38.8.11 0z"></path><path d="m142.27 155.56c-.27-.08-.17.11-.41.15-.11.82.81.38.41-.15z"></path><path d="m138.94 155.6c.08.05 0 0 .06 0s0-.04-.06 0z"></path><path d="m128.72 157.35c-.15.17-.23.13-.27.35.27.74.65-.21.27-.35z"></path><path d="m138.91 155.67c0 .09 0 0 .06.06z"></path><path d="m138.87 155.84a.87.87 0 0 0 0-.1.22.22 0 0 0 0 .1z"></path><path d="m139.08 155.54c-.07.08 0 .47-.21.31.06.43.35-.1.21-.31z"></path><path d="m136.65 159s-.06 0-.09 0 .11 0 .09 0z"></path><path d="m130.61 159.82c.06.14.08 0 .12 0s-.14.03-.12 0z"></path><path d="m136.71 161.66h.06c.02-.06-.07-.06-.06 0z"></path><path d="m136.64 161.79c.18-.17-.2.14 0 .33.25-.02.08-.2 0-.33z"></path><path d="m136.74 161.73c0 .08.06.07 0 0z"></path><path d="m129.72 163.82c-.11.05-.4.2-.16.22-.37.51.44.38.16-.22z"></path><path d="m134.45 163.15s-.16.12-.2.09c-.19.76.54.39.2-.09z"></path><path d="m129.32 163.06c-.19 0-.22-.18-.13.16.32.13.05-.48.13-.16z"></path><path d="m135.1 164.22c-.21-.28 0 .06-.12 0 .16.52.23-.71.12 0z"></path><path d="m134 165.5c.19-.62-.27 0 0 .15.16-.12.16-.4 0-.15z"></path><path d="m133.23 166.27c-.12-.18-.54.42-.43.76.5.25 1.06-.69.43-.76z"></path><path d="m131.34 166.79s0-.08 0-.06z"></path><path d="m131.63 168.13c.05.09.14 0 .09-.07s-.06.1-.09.07z"></path><path d="m109.54 161.7v-.08s-.06.15 0 .08z"></path><path d="m109.46 161.9.07-.08c-.08-.05-.07.01-.07.08z"></path><path d="m129.72 165.16c-.16.19.1.4.27.21.01-.14-.09-.27-.27-.21z"></path><path d="m130.4 165.36a.18.18 0 0 0 .06.16c.29.06.15-.34-.06-.16z"></path><path d="m120.54 139.75c.06-.05 0-.15-.06-.16s-.06.19.06.16z"></path><path d="m122.59 156.58s0 .09 0 .07z"></path><path d="m120.89 140.08s0-.06 0-.08-.03.17 0 .08z"></path><path d="m122.38 157.2c-.12.05-.29.36-.07.35s.05-.26.07-.35z"></path><path d="m120.25 141.21a.19.19 0 0 0 -.07-.24c-.18.03-.18.37.07.24z"></path><path d="m126.57 136.67c.12.58.27-.25.09-.44-.02-.04-.11.24-.09.44z"></path><path d="m126.41 137.84c0-.18-.06-.4-.15-.14s.09.47.15.14z"></path><path d="m126.88 138.56a.56.56 0 0 0 0-.44c-.01.12-.17.39 0 .44z"></path><path d="m127.23 138.5v.07s0-.04 0-.07z"></path><path d="m128.23 142.93c.02.07.01.07 0 0z"></path><path d="m124.32 147.16v.13s.13-.14 0-.13z"></path><path d="m127 148.74c.12-.08-.09-.25-.11-.09s.05.06.11.09z"></path><path d="m128.3 149c.26 0 .16-.38-.06-.36s-.16.36.06.36z"></path><path d="m127.33 148.78c0-.07-.12 0-.12 0s.15.09.12 0z"></path><path d="m124.46 149.4c.05 0 .05-.07.06-.11-.13-.29-.35.11-.06.11z"></path><path d="m124.28 142c-.13-.1 0 .06 0 .1z"></path><path d="m123.9 143c.27 0 .2-.56.13-.77-.03.19-.44.42-.13.77z"></path><path d="m126.93 149.7c-.06-.12-.2 0-.09.08s.16 0 .09-.08z"></path><path d="m124.79 150.19c0-.08-.07-.15-.12-.1s.05.17.12.1z"></path><path d="m125.78 150.33c0-.12-.15-.11-.13 0a.08.08 0 0 0 .13 0z"></path><path d="m124.79 150.56c.17.07.07-.13.13-.2-.19-.18-.13.1-.13.2z"></path><path d="m124 145c.27 1 .71-.69.41-.51-.18-.49-.35.2-.41.51z"></path><path d="m122.89 144.62c0 .11-.11.41.12.37s.05-.82-.12-.37z"></path><path d="m120.76 163c.31-.18.29-.76.17-1.07-.19.31-.41.79-.17 1.07z"></path><path d="m122.72 145.52c.07 0 .07 0 0-.07z"></path><path d="m122.52 145.89c-.11-.06-.23.49 0 .48s.12-.72 0-.48z"></path><path d="m122.47 145.83s0 0 0 0z"></path><path d="m122.28 147.11c.13-.26 0-.44-.12-.6-.09.14-.22.88.12.6z"></path><path d="m117.78 148.2c.08-.18 0-.34-.08-.49-.03.1-.18.61.08.49z"></path><path d="m120.23 152.17c.21.32.37-.29.12-.34a.35.35 0 0 0 -.12.34z"></path><path d="m120.48 150.11v.09a.15.15 0 0 0 0-.09z"></path><path d="m120.06 154.63c.49.41.3-.51.2-.46a.59.59 0 0 0 -.2.46z"></path><path d="m130.43 152v.1c.02.04-.01-.05 0-.1z"></path><path d="m129.85 152.17c-.08-.23-.09 0-.15.06.11-.14.06-.11.15-.06z"></path><path d="m129.82 152.24c-.06 0-.09 0 0 0-.08.26.08.11 0 0z"></path><path d="m129.75 152.41s0-.06-.06-.08-.01.12.06.08z"></path><path d="m129.76 152.41s0 0 0 0z"></path><path d="m130.44 152.58s0 .07 0 .1z"></path><path d="m123.71 154.55c.16-.18.06-.58 0-.7-.08.15-.44.71 0 .7z"></path><path d="m119.31 155.7a.22.22 0 0 0 -.11.25c.14.38.45-.21.11-.25z"></path><path d="m126.68 155c.07 0 .11-.13.12-.22-.11-.52-.47.16-.12.22z"></path><path d="m131.35 155.24c0 .1.1.12.19.11.3-.25-.09-.42-.19-.11z"></path><path d="m129.49 155.42c.06-.41-.42.19-.34.55.34.4.44-.32.34-.55z"></path><path d="m125.47 155.46v.1c.03-.01-.01-.03 0-.1z"></path><path d="m125.45 156c.55-.39-.38-.33 0-.43-.11-.2-.3.34 0 .43z"></path><path d="m115.88 157.13c.27.28.16-.26 0-.37.12.12-.08.24 0 .37z"></path><path d="m118.52 157.41s-.06.09-.06.13c.11.59.54-.31.06-.13z"></path><path d="m128.54 156.93c.09-.16.06-.33-.11-.35s-.13.42.11.35z"></path><path d="m117.69 158.83a.15.15 0 0 0 -.09-.28c-.04.1-.08.28.09.28z"></path><path d="m117.73 160.37c-.08.16-.21.41.08.54a.28.28 0 0 0 -.08-.54z"></path><path d="m114.66 160.49c-.06.09-.08 0-.11-.07-.3.79.45.58.11.07z"></path><path d="m128.84 158.51c-.13 0-.08.18-.25.18-.02.83.87.04.25-.18z"></path><path d="m126 158.64c0-.06 0 0 0 0s0 .04 0 0z"></path><path d="m116.84 160.93c0-.19-.22-.07-.28.07-.25.62.65.34.28-.07z"></path><path d="m125.87 158.89s0-.09 0-.09.01.08 0 .09z"></path><path d="m126 159c.2-.06.11-.56 0-.31.16.31-.31.2 0 .31z"></path><path d="m125.9 158.74c0 .09 0 0 .06 0z"></path><path d="m124 161.74s.09 0 .08-.05-.08-.01-.08.05z"></path><path d="m124.42 164c0-.07-.1.05 0 0z"></path><path d="m124.37 164.12c0-.08 0-.06-.06 0s.05-.03.06 0z"></path><path d="m124.42 164.06s0 .05 0 .08.02-.06 0-.08z"></path><path d="m124.46 164.25c-.07 0-.12-.05-.15-.11-.13.2.14.43.15.11z"></path><path d="m124.46 164.23s0 0 0 0z"></path><path d="m122.49 165.57s-.13.13-.17.11c-.06.64.53.32.17-.11z"></path><path d="m117.87 166.23c-.18.05-.22-.13-.09.17.3.07-.04-.46.09-.17z"></path><path d="m123.23 166.41c-.21-.22 0 0-.1 0 .23.44.09-.61.1 0z"></path><path d="m122.5 167.68c0-.56-.25 0 0 .12.11-.12.06-.36 0-.12z"></path><path d="m167 244.46c.12-.11.45-.27.28-.47-.15.11-.48.27-.28.47z"></path><path d="m161.74 245.44c.18 1.67 1.45.24 2.06-.25-.64-.58-1.53-.86-2.06.25z"></path><path d="m245 238.32c.06-.27.1-.23-.19-.3 0 .16.04.3.19.3z"></path><path d="m216.82 220.86c.48-.21.12-.72.14-1.19-.69-.31-.77 1.16-.14 1.19z"></path><path d="m216.39 247.23c.26-1.73-.86-1.27-.61.15a.41.41 0 0 0 .61-.15z"></path><path d="m218.17 257.09c-1 .62-.59 3.35.84 2.84.49-.87.6-3.78-.84-2.84z"></path><path d="m216 249.52a1.85 1.85 0 0 0 0 1c.81.3.59-1.4 0-1z"></path><path d="m206.55 227.94c-.31.61.06.94 0 1.53 1.39.81.96-2.55 0-1.53z"></path><path d="m210.55 250.28c.49 1.08.85.23.61-.51-.26-.33-.65 0-.61.51z"></path><path d="m204.93 242.91c-.09.44.13 1 .46 1 .34-.51.4-1.78-.46-1z"></path><path d="m201.81 236.77c.18 1.78 1.75-.16 1.34-.82-.61-.58-.86.79-1.34.82z"></path><path d="m131.47 257c1.5 1.81 4.48-.79 5.64-3.05-2.11-.4-4.73-.06-5.64 3.05z"></path><path d="m171.57 218.45c1.46-1.52.75-2.75 1.42-3.18-2.14-1.9-4.91 3.04-1.42 3.18z"></path><path d="m180.23 242.16c-2.12 4.25 2.77 1.67 3.15-.52-1.05.36-2.16-.53-3.15.52z"></path><path d="m163 215.88c.38-1.1.13-1.21-.13-2.17-2.03.03-2.16 4.21.13 2.17z"></path><path d="m185.7 268.58c-.8.65-.2 2.7 1.11 1.71.9-1.19.88-3.56-1.11-1.71z"></path><path d="m159.65 213.27c.82.56.38.29.27-.54 1.37-.49-.22-.51-.27.54z"></path><path d="m178.69 261.79a2.71 2.71 0 0 1 .19-.25.31.31 0 0 0 -.19.25z"></path><path d="m179.53 262.61s.01-.04 0 0z"></path><path d="m179.43 261.67c-5.79 2.49 2.41 5.65-.79 1.07.19-1.86 1.11.95.79-1.07z"></path><path d="m179.74 263c0-.34.26-.3.38-.48-.48.09-.57-.04-.38.48z"></path><path d="m152.89 215c-.83.41-1.8.86-1.44 2.36 1.74 1.64 2.22-1.36 1.44-2.36z"></path><path d="m145.18 213.91c-.24 0 .13-1-.31-.75-.87-1.79-1.97 3.9.31.75z"></path><path d="m135.51 224.85c1.94-.89 1.12-3.08 0-3.74-.51.61-2.8 3.89 0 3.74z"></path><path d="m166.1 280.05c.16.24.07-.24-.27-.19.04.28-.03.5.27.19z"></path><path d="m166.22 280h.16s-.11-.13-.16 0z"></path><path d="m165.38 280.65.1-.68c-.48.21-.13.11-.1.68z"></path><path d="m165.79 280.72c-.84 1.59-1 .43-1.3-.2-1.82 3.24 3.2.4 1.3.2z"></path><path d="m164.66 280.38c-.07.14.52-.27.52-.25-.18-.13-.44.24-.52.25z"></path><path d="m146.33 277.33c-.54-.15-.32.13-.24.47.35.2.19-.21.24-.47z"></path><path d="m126.66 240.46a.24.24 0 0 0 .16 0 .12.12 0 0 0 -.16 0z"></path><path d="m126.3 239.94a.69.69 0 0 0 0 .78c.56-.22.07-.43 0-.78z"></path><path d="m126.3 239.94v-.13s-.02.05 0 .13z"></path><path d="m106.53 252.38c-.65.13-1.22.55-.79-.45-.28.32-.77 1.27-.27 1.31-4.1 1.1 1.3 5.11 1.06-.86z"></path><path d="m123 281.44c-1.83-3-3.38 6 .18 1.13-.61-.18.65-1.17-.18-1.13z"></path><path d="m108.18 247.47c.56.08.92-.75 1.16-1.4-.59-.26-.22 1.27-.9.09 1.35-2.44-1.44.45-.26 1.31z"></path><path d="m265 240.9a5.2 5.2 0 0 0 .66-1z"></path><path d="m238.37 240.48c-.69-2.61-1.94-.58-2.58 1.14.48 3.51 2.38.78 2.58-1.14z"></path><path d="m233.9 273.2c-2.94-1.66-1.17 6 .3 1.11-.15-.64-.45-.7-.3-1.11z"></path><path d="m232.63 278.1c0 .35 0 .65.18.87.37-.33.59-1.55-.18-.87z"></path><path d="m257.84 275.38c-2.34-.82-1.4 6.26.64 2.71-.03-1.29.09-1.68-.64-2.71z"></path><path d="m154.46 249.44h.21s-.17-.01-.21 0z"></path><path d="m154.87 249.4.17-.11c-.15-.02-.29-.11-.17.11z"></path><path d="m112.94 264.32c-.16.09-.07.31.09.34a.18.18 0 0 0 -.09-.34z"></path><path d="m129.55 234c0 .09.2 0 .12-.08z"></path><path d="m112.26 263.56c0 .09 0 .13.09.18s.01-.35-.09-.18z"></path><path d="m131.63 233.38c-.19-.4-.59.09-.78.19a.62.62 0 0 0 .78-.19z"></path><path d="m114 261.54a.34.34 0 0 0 .06.48c.41-.02.39-.64-.06-.48z"></path><path d="m100.51 271.28c-.63-1.81-.33 1.21 0 1.17.16.39.06-.79 0-1.17z"></path><path d="m157.07 210.79c.66-.35-.58-1.09-.19-1.29-.82-2.67-2.28 3.37.19 1.29z"></path><path d="m100.53 268a1.94 1.94 0 0 0 .2.82c.27-.43-.04-1.98-.2-.82z"></path><path d="m99.5 265.82a1.92 1.92 0 0 0 0 1.3c-.01-.38.35-1.03 0-1.3z"></path><path d="m98.76 265.91v-.2c-.04.04 0 .12 0 .2z"></path><path d="m99.25 252.18a.1.1 0 0 1 0 .11s.2-.24 0-.11z"></path><path d="m111.75 245.76c-.16.17 0 .19.07.3.25-.06.18-.45-.07-.3z"></path><path d="m108.24 237.68c.71-1.15-1.22-.54-.49.22.15-.12.37.1.49-.22z"></path><path d="m109.43 238.86c-.11.17.13.24.24.12s-.14-.32-.24-.12z"></path><path d="m115.11 242c.07-.2-.1-.2-.12-.35-.51 0-.27.8.12.35z"></path><path d="m106.3 257.8v-.34c-.05.1-.12.26 0 .34z"></path><path d="m107.28 255.84c-.4.92-.7 1.59.15 1.08.27-.34.69-2.05-.15-1.08z"></path><path d="m112 237.61c-.17-.13-.42.06-.23.24.08.03.23-.13.23-.24z"></path><path d="m115.76 239.83c-.19.09-.14.35 0 .34s.24-.35 0-.34z"></path><path d="m114.5 238.15c-.17.26 0 .4.25.15a.17.17 0 0 0 -.25-.15z"></path><path d="m115.85 239.34c0 .6.37 0 .54-.14-.14-.36-.34.12-.54.14z"></path><path d="m109.4 250a2 2 0 0 0 -1.28 2.27c.7-.39 1.88-1.27 1.28-2.27z"></path><path d="m111.41 251.93a1.28 1.28 0 0 0 -.6 1.2c.28-.19 1.19-.94.6-1.2z"></path><path d="m142.68 228.88c-.7-.31-1.65.46-2 1.05.69-.04 1.78-.27 2-1.05z"></path><path d="m112.36 251.25.16-.09c-.12-.08-.13-.03-.16.09z"></path><path d="m114 250.07c0-1.17-1.4 1.06-.66.58.07.2.55-.33.66-.58z"></path><path d="m113.34 250.82v-.06z"></path><path d="m115.23 248.66c-.57.3-.48.85-.55 1.24.32-.18 1.49-1.33.55-1.24z"></path><path d="m124.05 252.68c-.34.14-.28.51-.38.77.15-.09.91-.61.38-.77z"></path><path d="m125.43 243.33c-.28 0-.73.33-.57.67.26.09 1.02-.3.57-.67z"></path><path d="m122.18 246.23.1-.15s-.11.1-.1.15z"></path><path d="m129 240.18c-.5.5-.13.68-.37.82.71.31 1.76-1 .37-.82z"></path><path d="m124.64 234.88c-.51 0-1.06.69-1.19 1 .43-.18 1.81-.29 1.19-1z"></path><path d="m132.32 240.6a.45.45 0 0 0 .54-.14c.44-.71-.92-.46-.54.14z"></path><path d="m121.5 229.41c-.32-.18-1 .35-.67.69.27.04.95-.34.67-.69z"></path><path d="m133.65 240.59c-.59-.14.33.17-.32.23a.27.27 0 0 0 .32-.23z"></path><path d="m124.21 230.88c2.4-1.39-1.39-.77.27-.31-.03.43-.48-.14-.27.31z"></path><path d="m124.13 230.67s.01.01 0 0z"></path><path d="m124 230.59c0 .08-.09.09-.13.14s.32 0 .13-.14z"></path><path d="m138.92 244.16c-.33.1-.4.51-.5.79.09-.24 1.09-.43.5-.79z"></path><path d="m159.47 224.37c-1.22.9-2.27 1-2.82 2.28.61-.08.63.74.94.21.67-.38 2.19-1.98 1.88-2.49z"></path><path d="m136.43 239.68c.83-.94-1.25-.57-.31.07a.66.66 0 0 0 .31-.07z"></path><path d="m122 224.31c.29 0 1-.39.46-.63-.35.05-.62.32-.46.63z"></path><path d="m139.08 239.57c.1.22.15.28.44.14.31-.46-.27-.52-.44-.14z"></path><path d="m142.34 236.47c-.6.24-.44.91.13.81.26-.08.81-1.1-.13-.81z"></path><path d="m146.07 242.35c.23-.15.26.06.1.21 1.45-.31.83-1.65-.1-.21z"></path><path d="m125.25 220.27c-1 .49-.37.85.16 1 .52-.27.7-1.13-.16-1z"></path><path d="m128.69 225.74c-.09-.05 0 .07.11 0s-.04-.06-.11 0z"></path><path d="m144 238c.08.39 0 .58.58.51.92-.24.42-1.51-.58-.51z"></path><path d="m128.79 225.56c.17-.34.36-.19.5 0 .47-.91-1.29.17-.5 0z"></path><path d="m129.23 225.57s-.18.09-.18.09a.74.74 0 0 0 .18-.09z"></path><path d="m128.94 225.56c0 .12 0 .2.11.1-.05 0-.05-.02-.11-.1z"></path><path d="m136.36 225c-.11 0-.08 0-.07.12s.18.02.07-.12z"></path><path d="m145.23 232.28c-.25.16 0 0 0 .18.1-.11.06-.12 0-.18z"></path><path d="m139.73 221.48c-.06.09.05.14.11.08s-.07-.15-.11-.08z"></path><path d="m139.89 221.41c.05-.13 0-.14 0 0z"></path><path d="m140.35 221c-.34.17-.08.48-.42.57.27-.01.94-.46.42-.57z"></path><path d="m139.93 221.28a.73.73 0 0 1 .17-.18c-.1 0-.1.09-.17.18z"></path><path d="m152.78 227.51c-.91.66-.39.68-.16.94.07-.29 1.11-.71.16-.94z"></path><path d="m144.89 222.52c.11.09-.08.27.1.3 1.01.33.84-1.54-.1-.3z"></path><path d="m151.87 229.62c-.47.26-.47.34-.06.32-.44.66.57-.19.06-.32z"></path><path d="m145.66 220.36c-.33-.27-1 .76-.3.1-.03.54.06.16.3-.1z"></path><path d="m174.79 220.2s0 .1-.07.14z"></path><path d="m148.22 220.2c.64-.27-.09.5-.09 0-.13.8 1.01-.79.09 0z"></path><path d="m152.19 219.72c-.48-.75-1.79-1-1.81.5a1.48 1.48 0 0 0 1.81-.5z"></path><path d="m178.64 201.2c-.88.68-1.62 1.94-.07 2.17.84-.43 1.24-2.24 1.82-.42 2.81-.4-.59-4.7-1.75-1.75zm.22.28a.21.21 0 0 0 -.15 0s.18-.09.15 0zm.54.66s0 .09 0 .1 0-.07 0-.1z"></path><path d="m163.4 223.05a.9.9 0 0 0 .91.39c1.94-1.38-.79-2.53-.91-.39z"></path><path d="m153.81 222c0 .07.17-.05.11-.08z"></path><path d="m155 219.64c0-.14.22-.08.21 0 .08-.19-.21-.16-.21 0z"></path><path d="m157.38 219.07c.75.38 2.12-1.68.16-1.17-.66.52-1.72 1.1-.16 1.17z"></path><path d="m167.87 211.13a1.06 1.06 0 0 0 -.68 1.87c.81.36 2.17-1.28.68-1.87z"></path><path d="m168.26 214.08-.13.14s.43-.36.13-.14z"></path><path d="m178.79 214.43c-.64-.23-.68.48-.71.79.53.12 1.04-.22.71-.79z"></path><path d="m185.56 222.86a.34.34 0 0 0 -.55-.23c-.58.45.48.91.55.23z"></path><path d="m180.21 207.69c.11.34.15.43.54.38.53-.46-.26-.97-.54-.38z"></path><path d="m181.67 215.66c.19-.11.17-.33.36-.3-.03-.59-.95.14-.36.3z"></path><path d="m188.69 213.79c-1.65-.48-1.76 1.81-1.24 1.6.63.7 2.23.16 1.24-1.6z"></path><path d="m195.79 208.9c1.16-.37.76-3.79-1.52-2.08-.76 1.63.3 2.91 1.52 2.08z"></path><path d="m194 204.92c.57-.42-.57-.61-.15 0 .04-.43.15-.1.15 0z"></path><path d="m192.45 199.89c.35.5 1 .69 1.49-.29-.41 1.79 2.55 1.42 2.1.25.2-1.27-2.08-.36-1.88-.57-.38-2.28-3.39-.53-1.71.61z"></path><path d="m171.35 206.18c.9.26.62-1.43-.19-.65-.02.35-.07.37.19.65z"></path><path d="m172.69 205 .21-.31c-.14.05-.49.36-.21.31z"></path><path d="m172.93 203.44c-.13.71.64.61.42 1.76.23-1.22.26.16.49-.31.71.81 0 .25.76 0 .56-.21.74-.1 1.2-.37-.44-.32 0-.83-.07-1 .27-.52-2.53-1.64-2.8-.08z"></path><path d="m175.63 204.91-.11-.1s.08.19.11.1z"></path><path d="m185.9 236.43v-.09s.01.08 0 .09z"></path><path d="m186 236.16-.08.08c.08.04.08 0 .08-.08z"></path><path d="m163.39 231.36c0 .17.07.35.29.28a.2.2 0 1 0 -.29-.28z"></path><path d="m162.71 231.19c-.12.18.14.26.22.16s-.12-.3-.22-.16z"></path><path d="m173.87 260.44c-.08.05 0 .17 0 .18s.13-.21 0-.18z"></path><path d="m171.44 241.65s0 .1 0 .08z"></path><path d="m173.48 260.06c0 .05 0 .06.05.09s0-.15-.05-.09z"></path><path d="m171.8 240.65c-.23-.05-.15.27-.17.38a.31.31 0 0 0 .17-.38z"></path><path d="m174.23 258.82a.2.2 0 0 0 .07.26c.24-.08.16-.41-.07-.26z"></path><path d="m166.92 263.27a.64.64 0 0 0 0 .72c-.01-.2.26-.6 0-.72z"></path><path d="m171 222.93c1-1-1.42-.89-.48 0a.33.33 0 0 0 .48 0z"></path><path d="m167.28 262.29a.56.56 0 0 0 .06.3c.19-.14.06-.74-.06-.3z"></path><path d="m166.83 261.51c-.17 0-.08.37 0 .47-.03-.16.08-.3 0-.47z"></path><path d="m166.39 261.56v-.07s.01.04 0 .07z"></path><path d="m165.39 256.87v-.06c-.03 0-.01.02 0 .06z"></path><path d="m169.69 252.24a.1.1 0 0 0 0-.14c-.16-.02-.15.16 0 .14z"></path><path d="m166.83 250.65c0-.07-.08-.06-.12-.1s.1.27.12.1z"></path><path d="m165.31 250.68c.36-.21-.17-.64-.27-.19.08.1.13.21.27.19z"></path><path d="m166.31 250.52c0 .08.14 0 .14 0s-.17-.1-.14 0z"></path><path d="m169.66 249.85c0-.09-.11 0-.17-.08-.21.16.17.35.17.08z"></path><path d="m169.76 257.9c.14.11 0-.06 0-.1z"></path><path d="m170.19 256.83c-.3 0-.22.61-.14.83.07-.23.48-.48.14-.83z"></path><path d="m166.84 249.55a.08.08 0 0 0 0-.15c-.12.02-.14.15 0 .15z"></path><path d="m169.1 248.91a.09.09 0 0 0 .14.1c.02-.11-.07-.18-.14-.1z"></path><path d="m168 248.78c0 .13.18.12.15 0a.1.1 0 0 0 -.15 0z"></path><path d="m169.1 248.49c-.19-.07-.08.15-.15.22.21.2.15-.1.15-.22z"></path><path d="m170 254.63c-.3-1.07-.78.76-.45.56.28.52.45-.19.45-.56z"></path><path d="m171.18 254.61a.58.58 0 0 0 0 .63c.1-.13.33-.65 0-.63z"></path><path d="m173.41 234.6a1.31 1.31 0 0 0 -.13 1.14c.2-.22.59-1.16.13-1.14z"></path><path d="m171.45 254.1.05-.07c-.08-.03-.08-.03-.05.07z"></path><path d="m171.77 253.67s0 0 0 0z"></path><path d="m171.7 253.08a.51.51 0 0 0 0 .65c-.01-.1.39-.53 0-.65z"></path><path d="m172 252.26c-.15.29.06.48.14.66.06-.16.19-.98-.14-.66z"></path><path d="m176.94 251c-.08.2.06.37.1.55.04-.17.19-.74-.1-.55z"></path><path d="m160.2 248.43c-.42.31-.07.89-.18 1.27.12-.31.74-1.12.18-1.27z"></path><path d="m173.92 246.5c-.11.1-.11.42.08.47s.23-.52-.08-.47z"></path><path d="m173.87 248.78s0 .08 0 .1z"></path><path d="m174.25 243.85c-.44-.58-.48.67-.23.39.04.28.25-.19.23-.39z"></path><path d="m162.79 247v-.11c-.02-.01.01.11 0 .11z"></path><path d="m163.43 246.83c.1.25.1 0 .17-.07-.13.16-.07.12-.17.07z"></path><path d="m163.43 246.63c0 .14 0 .08.1.17-.1-.09.01-.3-.1-.17z"></path><path d="m163.58 246.55c-.08 0 0 .07 0 .1s.04-.08 0-.1z"></path><path d="m163.53 246.55s-.01.01 0 0z"></path><path d="m162.76 246.38s0-.07 0-.1z"></path><path d="m170.2 244c-.18.2-.06.64 0 .78.1-.19.49-.78 0-.78z"></path><path d="m175 242.25c-.23.13-.09.47.14.39.05-.13.1-.41-.14-.39z"></path><path d="m166.89 243.58a.33.33 0 0 0 -.13.25c.14.58.52-.19.13-.25z"></path><path d="m175.46 242.11c-.11.11 0 0 .07.06s-.03-.1-.07-.06z"></path><path d="m161.48 243.27a.31.31 0 0 0 -.12.28c.21.24.55-.36.12-.28z"></path><path d="m163.87 242.38c-.32.35-.1.81-.05 1 .18-.23.57-.96.05-1z"></path><path d="m168.22 243c0-.06.09-.12 0-.1s-.01.1 0 .1z"></path><path d="m168.23 242.41c-.59.45.44.37.06.48.08.25.29-.37-.06-.48z"></path><path d="m178.86 241.06c-.3-.3-.19.29 0 .4-.11-.12.14-.25 0-.4z"></path><path d="m177.46 228.05c.62.22.15-1.14.09-1.75-.41.2-.55 1.95-.09 1.75z"></path><path d="m175.82 240.41c-.29.14-.16.47.12.39.06-.13.06-.37-.12-.39z"></path><path d="m164.8 241.41c-.1.18-.07.38.12.4.08-.13.14-.53-.12-.4z"></path><path d="m177 239.36c-.17-.42-.35.27-.08.12.08.12.08-.1.08-.12z"></path><path d="m176.93 237.38s0-.4-.2-.41c-.42.2-.06.83.2.41z"></path><path d="m180.2 237c-.18.36.09.49.14.6.1-.22.17-.68-.14-.6z"></path><path d="m164.47 238.93c-.44 0-.23.83 0 .58.21.07.41-.51 0-.58z"></path><path d="m167.65 239.42s-.01-.04 0 0z"></path><path d="m177.9 236.46a.39.39 0 0 0 0 .66c.22-.12.46-.57 0-.66z"></path><path d="m167.75 239.14s0 .11 0 .1-.01-.09 0-.1z"></path><path d="m167.72 239.32c0-.1 0 0-.07-.06z"></path><path d="m167.64 239c-.22.06-.12.65 0 .36-.21-.3.36-.22 0-.36z"></path><path d="m169.86 236v-.07c-.03-.03-.09.01 0 .07z"></path><path d="m175.76 234.64c0 .16.06 0 .1.05s-.05-.07-.1-.05z"></path><path d="m169.56 233.29h-.07a0 0 0 1 0 .07 0z"></path><path d="m169.52 233.22c0-.08-.06-.07 0 0z"></path><path d="m169.61 232.83c-.38 0 .15.34-.06.34.07.18.18-.25.06-.34z"></path><path d="m169.55 233.17s-.02-.02 0 0z"></path><path d="m169.46 233s0 0 0 0z"></path><path d="m176.63 230.32c0 .09 0-.18 0-.36-.57-.22-.16.96 0 .36z"></path><path d="m172 231.28c-.23-.52-.45.14-.22.34.08-.1.22-.12.22-.34z"></path><path d="m177.06 231.36c0-.79-.24.2-.16-.11.1-.08.15 0 .16.11z"></path><path d="m171.12 230.68c-.08-.28-.23-.18-.17.18.05-.47.11 0 .17-.18z"></path><path d="m181.19 219.06s0 0 0 .06z"></path><path d="m181.25 219.26c-.11-2.1-2.47-1.25-1.21 0 .43.74.62-.05 1.21 0z"></path><path d="m171.81 229.41c0 .38.38-.37.05-.31-.21.27.37.19-.05.31z"></path><path d="m172.73 227.73c-.56-.41-.43.93-.09.67.29.32.64-1.4.09-.67z"></path><path d="m176.05 210.77s0-.01 0 0z"></path><path d="m176.46 210.86c.46-.33.87.25 1.1-.64-1.16-1.34-2.37.41-1.1.64z"></path><path d="m178.29 224.28c.47.22.38-.3.41-.64-.57-.83-.99.56-.41.64z"></path><path d="m174.48 227.72s0-.08 0-.06z"></path><path d="m174 226.35c-.07-.1-.14 0-.08.08s.08-.12.08-.08z"></path><path d="m174.47 224.45c-.27.12-.58 1-.29 1 .28.28.97-.81.29-1z"></path><path d="m175.73 219.2c.39-3.5-2.81-2.27-3.26.53.15-.09.94-.14.41.65.23-.23.85-.49.82.09 1.1-.4.8-.3 2.03-1.27z"></path><path d="m176.48 219.23a1 1 0 0 0 0 .17z"></path><path d="m180.31 216.07c.13.1.24.27.35.05.26-.12-.32-.63-.35-.05z"></path><path d="m186.13 216.94c.17-.21-.26-.35-.29-.14s.21.2.29.14z"></path><path d="m179 212.68c-.23-.27-.49.2-.2.23.08.09.32-.1.2-.23z"></path><path d="m178.73 212.36c0-.11-.1-.06-.11 0s.09.03.11 0z"></path><path d="m184.09 213.14c-.79.16-.1.93.06.77.49.16.71-.51-.06-.77z"></path><path d="m181.62 212.53c.93-.6-.7-2.15-1.11-.67-.15.61.75.58 1.11.67z"></path><path d="m184.92 211c.37 0 .31-.13.46-.21-1.22-1.63.82 0 1.67-1.62.57-2.4-3.44-2.15-2.86-.13-.14 1 .52.28.65 1.05-1.22-.52-.31.91.08.91z"></path><path d="m178.45 208.66c.18 0 .14-.22 0-.18s-.03.07 0 .18z"></path><path d="m175.64 205.52c.1-.34-.32-.16-.15.06.11-.08.06.04.15-.06z"></path><path d="m181.19 206.5c-.73-.41-.62.7-.06.57.19-.19.29-.41.06-.57z"></path><path d="m181.61 206.58c-.41.31.55 1.12.83.73-.05 2.95 4.38-1 1.49-1.91-1.93-.25.66 1.32-2.32 1.18zm.89.38s-.01.04 0 .04z"></path><path d="m174.34 215c.12.15.1.17.31.19.44-.19-.3-.75-.31-.19z"></path><path d="m174.7 214s-.08.28 0 .25a1.29 1.29 0 0 0 0-.25z"></path><path d="m175.37 213c-.11-1.14-1.86.39-.88.66.59.42 1.26.23.88-.66z"></path><path d="m175.89 213.21s-.07 0-.08 0z"></path><path d="m208.24 216.41s0 .12 0 .15z"></path><path d="m208.15 216.16v.15c.13-.02.05-.07 0-.15z"></path><path d="m184.62 228.58a.3.3 0 0 0 -.25.26c.22.32.63-.12.25-.26z"></path><path d="m183.66 229.24c0 .22.29.08.3-.06a.16.16 0 0 0 -.3.06z"></path><path d="m209.22 250.73c-.07.08 0 .2.11.2s.03-.26-.11-.2z"></path><path d="m198.36 231.83v.07c.1 0 .03-.12 0-.07z"></path><path d="m208.69 250.39c0 .06.05.07.08.1s-.05-.22-.08-.1z"></path><path d="m198 230.68c-.07.16.12.31.16.42.13-.1.11-.59-.16-.42z"></path><path d="m209.19 248.77c0 .12.06.27.17.28s.05-.5-.17-.28z"></path><path d="m202.07 255.61c-.29-.67-.26.47-.08.45s.1-.3.08-.45z"></path><path d="m184.19 216.38c-.68-1.12-1.57 1-.42.6.36.02.32-.38.42-.6z"></path><path d="m202.18 254.13c-.12.13 0 .38.07.49.09-.13.11-.44-.07-.49z"></path><path d="m201.41 253.66a.49.49 0 0 0 .1.47c-.03-.13.1-.47-.1-.47z"></path><path d="m201 253.81v-.08s0 .05 0 .08z"></path><path d="m198.72 249.51v-.07c-.04.02-.03.03 0 .07z"></path><path d="m201.83 243.11c-.17 0-.1.22.06.14s.01-.1-.06-.14z"></path><path d="m198 242.91c-.11.16.22.21.17 0s-.11.02-.17 0z"></path><path d="m196.31 243.35c-.3.14 0 .46.24.32a.2.2 0 0 0 -.24-.32z"></path><path d="m197.54 243c0 .14.2.12.15 0a.14.14 0 0 0 -.15 0z"></path><path d="m200.63 240.85v.16c.26.2.37-.32 0-.16z"></path><path d="m203.9 249.11c.18.07 0-.06 0-.11z"></path><path d="m204.3 248.41c-.1-1.17-.71-.2-.16.36-.04-.18.14-.28.16-.36z"></path><path d="m197.59 241.89c.12.09.22-.13.06-.13s-.13.07-.06.13z"></path><path d="m199.94 240.1c-.23 0 0 .29.08.11s-.02-.11-.08-.11z"></path><path d="m198.6 240.59c.1.11.24 0 .15-.1a.12.12 0 0 0 -.15.1z"></path><path d="m199.58 240.07c.31.08.12-.18.06-.3-.23.03-.02.23-.06.3z"></path><path d="m203.16 245.59c-.72-1-.6 1.07-.3.74.46.44.38-.4.3-.74z"></path><path d="m204.41 245.13a.63.63 0 0 0 .24.67c.06-.18.11-.8-.24-.67z"></path><path d="m196.24 225c0-.44-.18-1.11-.67-1.24-.19.46.31 1.02.67 1.24z"></path><path d="m204.51 244.48v-.09c-.06.02-.06.04 0 .09z"></path><path d="m204.7 243.91s0 0 0 0z"></path><path d="m204.59 243.36c-.54-.38 0 1 0 .49.15.04.1-.37 0-.49z"></path><path d="m204.54 242.17c-.5.06.08.75.23.8-.03-.3.05-.59-.23-.8z"></path><path d="m209.5 239.05c0-.14-.08-.39-.26-.43-.3.12.5 1.01.26.43z"></path><path d="m190.61 244.31c-.77-.67-.27.73-.07 1-0-.31.2-.68.07-1z"></path><path d="m204 235.56c-.21-.29.19-1.21-.28-1.64-1.03.45.07 2.08.28 1.64z"></path><path d="m204.85 237.79c.09.08 0-.06 0-.07z"></path><path d="m202.24 232.27c-.35.51.38.62.37.7.07-.24.05-.84-.37-.7z"></path><path d="m192.35 241.53v.08s.07-.15 0-.08z"></path><path d="m193.07 241.18c-.17-.16-.07 0 .05 0-.01-.18.01-.28-.05 0z"></path><path d="m193 241c.21.05-.14 0 0-.16-.15.05-.08.3 0 .16z"></path><path d="m193 240.81c-.09 0 0 .06.07.08s-.02-.09-.07-.08z"></path><path d="m193 240.83s0 0 0 0z"></path><path d="m192 241 .1.06c-.03-.06-.1-.01-.1-.06z"></path><path d="m198.86 234.86c-.67-.38-.15.56 0 .75a1 1 0 0 0 0-.75z"></path><path d="m202.36 230.58c.29.14.37-.15.19-.34s-.39.13-.19.34z"></path><path d="m195 236.33a.29.29 0 0 0 0 .3c.38.45.38-.48 0-.3z"></path><path d="m202.66 229.75c-.08.27 0 .05.08.06a.24.24 0 0 0 -.08-.06z"></path><path d="m189.36 239.22c0 .11-.07.22 0 .3.34.06.39-.62 0-.3z"></path><path d="m191.61 237c-1-.11.48 1.73.18.36.09.12-.19-.36-.18-.36z"></path><path d="m196.12 234.76c-.71-1-.56.75-.17 0 .21.05 0 .14 0 .2.25.04.05-.34.17-.2z"></path><path d="m196 234.93s0 0 0 0z"></path><path d="m196 235.05c0-.07 0-.16-.07-.08s.07.03.07.08z"></path><path d="m205.28 226.55c-.51-.13 0 .44.27.45-.19-.07-.08-.34-.27-.45z"></path><path d="m193.11 213.93c-1.74-.8-.83-.37-.18 1 .76.15 1.31-.17.18-1z"></path><path d="m201.91 228.21c.1.2.27-.09.35-.08-.07-.46-.64-.44-.35.08z"></path><path d="m192 236c0-.17-.16-.52-.33-.25.03.19.18.31.33.25z"></path><path d="m202.2 226.24c.14-.06.18-.09.09-.28-.29-.21-.29.15-.09.28z"></path><path d="m200.78 224s-.29-.4-.49-.27c-.24.5.56.88.49.27z"></path><path d="m190.37 234.4c.12-.15 0-.23.16-.36-.53-.81-.96.58-.16.36z"></path><path d="m193.37 232.18c0 .1 0 0 0-.07s-.03.03 0 .07z"></path><path d="m201.45 222.48c-.85-.54-.39.73.06.57-.01-.29.09-.32-.06-.57z"></path><path d="m193.27 232c.07 0 .13 0 .07-.06s-.02.06-.07.06z"></path><path d="m193.29 231.87s.05.1.05.1a.19.19 0 0 0 -.05-.1z"></path><path d="m193.27 232.12c-.21-.11-.1-.21 0-.29-.51-.3.07.74 0 .29z"></path><path d="m193.26 227.68v-.09c-.08.04-.11.13 0 .09z"></path><path d="m197.64 222.19c.1.19 0-.07.13 0-.06-.05-.1-.06-.13 0z"></path><path d="m191.05 225.69c0 .06.11 0 .06-.05z"></path><path d="m191.07 225.48a0 0 0 0 0 0 0z"></path><path d="m191 225.65c0-.05 0 0-.08-.06s.08.05.08.06z"></path><path d="m191 225.55c-.06-.01 0-.01 0 0z"></path><path d="m191.06 225.48c0-.3-.47-.32-.23 0 .05-.06.17-.03.23 0z"></path><path d="m191 225.55c.09 0 .08 0 0-.06s.05.08 0 .06z"></path><path d="m190.83 225.5s.02.01 0 0z"></path><path d="m195 217.79c-.16-.35-.08-.24-.4-.52-.6.18.29.79.4.52z"></path><path d="m191.65 222.55c0-.09.16.08.18-.06.17-.63-.96-.43-.18.06z"></path><path d="m196.14 218.15c-.73-.69 0 .38-.23 0 .09-.15.09-.08.23 0z"></path><path d="m190.45 222.24c-.56-.2.43.71-.08.13.41.02-.03-.06.08-.13z"></path><path d="m185.49 204.2c-.29 2.06 2.19 1.11 2.32 1.2-.35-.89-.81-2.05-2.32-1.2z"></path><path d="m187.38 204.23s.06 0 .1 0z"></path><path d="m190.18 220.49c-.37-.41-.14.5 0 0-.01.38.2.32 0 0z"></path><path d="m190 219.35a.91.91 0 0 0 -.39-1.09c-.38.33-.49 1.15.39 1.09z"></path><path d="m175.42 204.83s-.01 0 0 0z"></path><path d="m190.82 210.49c.3 0-.38-.23-.41-.35-1.85.19 1.13 1.78.41.35z"></path><path d="m190.94 217.13s0-.1-.05-.06z"></path><path d="m189.38 216.43c-.12 0-.09.13 0 .13-.08 0-.05-.13 0-.13z"></path><path d="m183.84 209.28c-1.25-.81-1.07 1.37 0 .79.27-.24.36-.61 0-.79z"></path><path d="m177.31 199.31c.57 1.68 1.83.82 1.9-.11-.35-.5-1.9-1.36-1.9.11z"></path><path d="m173.59 201.53c0-.21-.27-.21-.22 0s.09 0 .22 0z"></path><path d="m169.63 204.79a.12.12 0 0 0 .15-.19c-.13-.05-.31.1-.15.19z"></path><path d="m179.25 208.49c.14 0 .26-.46.06-.42-.41-.35-.63.52-.06.42z"></path><path d="m178.26 207.62s.25.23.27.11a2.07 2.07 0 0 0 -.27-.11z"></path><path d="m177 207.53c1.17.83 1.08-.54 1.55-.82-.85-.36-2.09-.62-1.55.82z"></path><path d="m178 206s0 .07-.06.07z"></path><path d="m242 193.07-.18-.23c-.06.06.1.16.18.23z"></path><path d="m241.66 192.61-.24-.15c.07.15.05.37.24.15z"></path><path d="m211 229.27a.6.6 0 0 0 -.24.61c.49.33.94-.7.24-.61z"></path><path d="m209.94 230.71c-.42.54.42.61.34 0a.27.27 0 0 0 -.34 0z"></path><path d="m263.45 252.25c-.1.17.11.34.27.3.17-.23-.06-.46-.27-.3z"></path><path d="m235.39 225.25.12.1c.09-.04-.1-.2-.12-.1z"></path><path d="m262.46 251.77c-.19.06 0 .23.1.24s-.02-.21-.1-.24z"></path><path d="m234.27 223.38c-.37.32.26.59.42.75a.66.66 0 0 0 -.42-.75z"></path><path d="m262.56 248.83c0 .21.21.44.41.42.39-.33-.12-.92-.41-.42z"></path><path d="m252.75 263.52c-.71-1-.3.9 0 .8.25.18.09-.55 0-.8z"></path><path d="m201 211.79c1-.22 1.24-1.77 0-1.83-.88-.12-1.14 1.8 0 1.83z"></path><path d="m252.75 261.76c.1-.25.05-.79-.29-.81-.16.27.07.67.29.81z"></path><path d="m251 260.48c-.08.28.18.61.35.75-.14-.23-.05-.83-.35-.75z"></path><path d="m250.25 260.92v-.13c-.08.05-.02.08 0 .13z"></path><path d="m244.63 254.7s.05 0 .06 0-.03-.13-.06 0z"></path><path d="m247.26 242.44c-.28.16-.07.42.17.21-.01-.14-.03-.17-.17-.21z"></path><path d="m240.61 244.08c-.1.33.47.23.31 0-.09-.08-.2 0-.31 0z"></path><path d="m238 245.71c-.46.4.18.78.54.41.14-.34-.21-.75-.54-.41z"></path><path d="m239.87 244.43c0 .27.38.11.25-.1a.31.31 0 0 0 -.25.1z"></path><path d="m244.13 239.21v.27c.61.2.5-.73 0-.27z"></path><path d="m253.51 251.68c.35 0 0-.11-.07-.19z"></path><path d="m253.92 250.3c-1.52-2.76-.31 1.76-.16.15.1-.02.24-.1.16-.15z"></path><path d="m239.5 242.32c-.18.19 0 .38.17.19a.14.14 0 0 0 -.17-.19z"></path><path d="m242.58 238.31c-.41.17.1.5.19.14-.07-.04-.11-.17-.19-.14z"></path><path d="m240.81 239.85c.14-.28-.35-.29-.27 0 .1 0 .18.15.27 0z"></path><path d="m241.88 237.93c-.38.17.07.32.06.52.57-.02.12-.36-.06-.52z"></path><path d="m251 246.83c.55 0-.44-.58-.3-.82-2.45-1.21.71 3.54.3.82z"></path><path d="m253.35 245.67c0-.34-.16-1.46-.71-1a1.14 1.14 0 0 0 .71 1z"></path><path d="m227.32 214.8c-.25-.43-1.49-1.78-1.76-1 .09.61 2.31 2.06 1.76 1z"></path><path d="m252.53 243.28c-.12.07-.12.1 0 .18z"></path><path d="m252.44 242.31c.3 0-.22-1.18-.66-.84-.21.53.76 1.45.66.84z"></path><path d="m252.61 242.36c.07 0-.1-.06-.07 0z"></path><path d="m252.27 240.72c-.14-1.72-2-1.2-.35-.11.08-.3.23.16.35.11z"></path><path d="m228.77 250.47c-1.58-.63-.15 1.31.33 1.6-.1-.49.04-1.17-.33-1.6z"></path><path d="m247.15 228.37c.3-.22-1-.92-.71-.1.16.29.95.73.71.1z"></path><path d="m249.86 231.78-.18-.12s.12.13.18.12z"></path><path d="m243.22 224.15c-1.81-1.84-.79 1.36-.2.4.41.33.03-.19.2-.4z"></path><path d="m230.42 245 .12.12s-.03-.3-.12-.12z"></path><path d="m231.46 244c-.35-.18-.11 0 .1 0-.11-.35-.13-.51-.1 0z"></path><path d="m231.39 243.76c-.15-.11-.35.13-.29-.29-.1.34.06.35.29.29z"></path><path d="m231.17 243.4c-.16.1.08.07.15.09s-.06-.12-.15-.09z"></path><path d="m229.59 244.37h.19c-.03-.04-.11-.01-.19 0z"></path><path d="m238.45 231.31.07-.07c-.52-2.19-2.14-1.01-.07.07z"></path><path d="m241.9 220.5c-.13-.14-.18-.33-.37-.42-1.08-.27.02 1.32.37.42z"></path><path d="m232.91 235.32c0-.75-1.19-.72-.58.05.21.01.39.22.58-.05z"></path><path d="m241.42 219.25c.05.52.08-.47.35.22.05-.16-.35-.47-.35-.22z"></path><path d="m224.36 243.06c0 .19 0 .38.17.46.58-.1.32-1.23-.17-.46z"></path><path d="m227.52 238.58c-1-1.28-1.46.5-.2.75.28.55.4-.39.2-.75z"></path><path d="m233.13 231.91s0 0 0 0z"></path><path d="m232.8 232.1c.17-.5.47-.64.34-.2.63-.9-1.89-.7-.34.2z"></path><path d="m233.22 232.11-.09-.2c-.07.09-.02.09.09.2z"></path><path d="m226.94 236.24c.45-.24-.3-1.06-.48-.41a.55.55 0 0 0 .48.41z"></path><path d="m223.6 233.91c-1.39-1-1.22 1.54 0 .67.06-.31-.23-.35 0-.67z"></path><path d="m227.26 229s0-.24-.11-.09c.08.09.05.09.11.09z"></path><path d="m226.92 228.53s.14.14.13.14-.11-.12-.13-.14z"></path><path d="m227.15 228.76c-.14-.13 0-.06-.17.05z"></path><path d="m226.54 228.53c-.18.44.83.89.49.44-.63.03.15-.77-.49-.44z"></path><path d="m224.18 221.62c0 .13.07.07.15 0s-.07-.15-.15 0z"></path><path d="m228.1 209.41c-.31 0-.07.15 0 .27a.24.24 0 0 1 0-.27z"></path><path d="m219.46 219.89c.2 0 0-.25 0 0z"></path><path d="m218.94 219.71c.2-.38.38-.06.49-.05-.16-.55-1.19-.44-.49.05z"></path><path d="m219.11 219.8a.91.91 0 0 1 -.17-.09.16.16 0 0 0 .17.09z"></path><path d="m219.33 219.76c-.24 0-.23.08 0 .06z"></path><path d="m218.26 214.34c0-.19.31 0 .24-.24-.14-1.16-1.9-.05-.24.24z"></path><path d="m216.47 215.17c-.86-.39.08-.2-.2-.45-.66-.05-.48.28.2.45z"></path><path d="m214.42 212.34c-.17-.6.19.2.35 0-.25-.82-1.4-.15-.35 0z"></path><path d="m211.76 209.68c-.57.88 1.73 1.12 1.41.43.53-.49-1.9-2.29-1.41-.43z"></path><path d="m213.12 206-.13-.05c-.06.05.14.05.13.05z"></path><path d="m210.16 206.24c-.14.07-.21-.16-.12-.21-.22.07-.04.29.12.21z"></path><path d="m208.38 205.31c.56-.49-.52-1.11-.69-1.54-2.64-.49-.14 2.11.69 1.54z"></path><path d="m196.48 198.05-.36-.05a1.49 1.49 0 0 0 .36.05z"></path><path d="m169.63 204.94c-.2-.1 0-.14-.2-.18-.55.18.02.75.2.18z"></path><path d="m187.09 202.08c.29-.26.35-.24.36-.66-.45-.9-1.58.64-.36.66z"></path><path d="m185.07 201.43c.06 0 .58.13.5-.07a3.23 3.23 0 0 0 -.5.07z"></path><path d="m182.24 202c.74 0 .73.93 1.31.94 0-.3 1.2-.7.81-1 .2-.27.13-.89.79-1.28-.37.22-.87.5-.43-.14s-3.07-1.35-2.48 1.48z"></path><path d="m183.15 199.14c-.08 0 0 .15 0 .17z"></path><path d="m223.77 227.78v.07s-.01-.14 0-.07z"></path><path d="m223.7 227.7c.09 0 0 0 0-.09z"></path><path d="m210 235.74a.19.19 0 0 0 -.15.16c.15.18.44-.08.15-.16z"></path><path d="m209.47 236.16c.06.2.31-.11.07-.1-.03.04-.08.05-.07.1z"></path><path d="m225.51 248.18s0 .11.07.11.01-.16-.07-.11z"></path><path d="m218.37 237.31s0-.07 0 0z"></path><path d="m225.18 248s0 0 0 .06.01-.14 0-.06z"></path><path d="m218.17 236.55c-.15.07 0 .22.06.29.03-.1.04-.23-.06-.29z"></path><path d="m225.59 247c0-.11-.12-.08-.18 0s.19.23.18 0z"></path><path d="m221.43 251.37c-.2-.39-.14.29 0 .27s.01-.18 0-.27z"></path><path d="m209.28 228.82a1.15 1.15 0 0 0 .13-.37c-.5-.64-.92.66-.13.37z"></path><path d="m221.44 250.48c-.07.08 0 .23.06.29.04-.09.04-.27-.06-.29z"></path><path d="m221 250.23a.28.28 0 0 0 .07.27c-.07-.07.01-.28-.07-.27z"></path><path d="m219.2 247.8s0 0 0 0z"></path><path d="m220.75 244c0 .07.06 0 .1 0s-.09-.13-.1 0z"></path><path d="m218.52 244c.14 0 .11-.12 0-.08a.06.06 0 0 0 0 .08z"></path><path d="m217.69 244.27c-.08-.15-.28 0-.24.13s.33.02.24-.13z"></path><path d="m218.33 244a.14.14 0 0 0 -.09 0c-.03.05.12 0 .09 0z"></path><path d="m220 242.59s0 .06 0 .09c.19.11.19-.2 0-.09z"></path><path d="m222.26 247.41c.12 0 0 0 0-.07z"></path><path d="m222.48 247c-.08-.66-.44-.08-.08.22-.03-.14.08-.22.08-.22z"></path><path d="m218.31 243.31s0-.09-.05-.08-.04.12.05.08z"></path><path d="m219.57 242.16c-.14 0 0 .18.05.06s-.02-.06-.05-.06z"></path><path d="m218.79 242.5c.07.07.14 0 .08-.07a.08.08 0 0 0 -.08.07z"></path><path d="m219.36 242.15c.18 0 .06-.11 0-.17s.02.11 0 .17z"></path><path d="m221.58 245.21c-.39-.18-.13.81 0 .57.28.27.21-.39 0-.57z"></path><path d="m222.42 245a.38.38 0 0 0 .17.39c.03-.1.04-.48-.17-.39z"></path><path d="m216.84 233.11c-.06-.21-.17-.52-.42-.56-.17.19.5.96.42.56z"></path><path d="m222.47 244.56c-.05 0-.05 0 0 .06z"></path><path d="m222.47 244c-.35-.21 0 .59 0 .29.1-.03.06-.29 0-.29z"></path><path d="m222.55 244.27s0 0 0 0z"></path><path d="m222.39 243.24c-.29 0 .08.44.17.46-.03-.16.01-.35-.17-.46z"></path><path d="m225.24 241.2c0-.08-.06-.23-.17-.25s.33.58.17.25z"></path><path d="m214.15 245c-.5-.4-.13.45 0 .59-.02-.19.09-.41 0-.59z"></path><path d="m221.79 239.13c-.38-.15.07.54.07.18.14.04-.08-.17-.07-.18z"></path><path d="m222.4 240.57a.08.08 0 0 0 0 .06z"></path><path d="m220.85 237.42c-.48-.07 0 .48.07.39a.49.49 0 0 0 -.07-.39z"></path><path d="m215.08 243.27s.04-.04 0 0z"></path><path d="m215.5 243c-.1-.09 0 0 0 0 .02-.07.03-.13 0 0z"></path><path d="m215.42 242.83s0 .01 0 0z"></path><path d="m215.45 242.92c0 .07-.06 0 0-.08-.15.16.11.16 0 .08z"></path><path d="m215.45 242.82s0 0 0 0 .03-.01 0 0z"></path><path d="m218.82 239.5c.05-.73-.58-.51 0 0z"></path><path d="m220.84 236.39a.16.16 0 0 0 -.05-.2c-.26-.19-.18.33.05.2z"></path><path d="m216.47 240.07a.17.17 0 0 0 0 .18c.27.26.24-.25 0-.18z"></path><path d="m220.9 235.92s0 0-.06 0-.02.08.06 0z"></path><path d="m213.21 242v.18c.22.01.23-.4 0-.18z"></path><path d="m214.62 240.82c-.23-.53-.52 0-.12.23.06.22.16-.05.12-.23z"></path><path d="m217.1 239.09c-.45-.31-.21.17 0 .07-.1.11-.04.02 0-.07z"></path><path d="m222.48 234.15c-.11 0-.06-.2-.17-.26-.31-.05.03.26.17.26z"></path><path d="m214.67 226.74c-1.23-.62-.29.22.13.67.28-.13.48-.28-.13-.67z"></path><path d="m220.32 234.75c-.1.2.11.36.23.19-.04-.08-.1-.26-.23-.19z"></path><path d="m214.56 239.74c-.16 0 0 .32.14.2s-.02-.2-.14-.2z"></path><path d="m220.36 233.63a.12.12 0 0 0 .19.13c-.02-.08-.09-.22-.19-.13z"></path><path d="m219.56 232.52c-.3-.39-.51.12-.12.2.18-.03.03-.13.12-.2z"></path><path d="m221.35 231.11c0-.1.05 0 .1 0-.21-.66-.55-.11-.1 0z"></path><path d="m213.63 238.72c-.48-.16-.17.64 0 .28.11 0 .07-.21 0-.28z"></path><path d="m215.38 237.65s-.02 0 0 0z"></path><path d="m219.9 231.59c-.6-.34-.06.65 0 .26.1-.11.04-.14 0-.26z"></path><path d="m215.32 237.45s0 .06 0 .06 0-.05 0-.06z"></path><path d="m215.37 237.55c0-.05 0 0-.06 0z"></path><path d="m215.31 237.6c-.12 0-.06-.12 0-.17-.31-.16.05.44 0 .17z"></path><path d="m215.12 234.93s0 0 0 0 .04-.04 0 0z"></path><path d="m217.65 231.6s0-.11 0-.08-.01.02 0 .08z"></path><path d="m213.78 233.82s.07 0 0 0z"></path><path d="m213.76 233.74c.05 0 .05 0 0 0s.02.01 0 0z"></path><path d="m213.71 233.68c.14.07 0-.13-.08-.13s0 .19.08.13z"></path><path d="m213.76 233.8s-.06-.02 0 0z"></path><path d="m213.65 233.73s0 0 0 0z"></path><path d="m215.83 229c.1 0 0-.2-.19-.29-.36.05.25.48.19.29z"></path><path d="m214.05 231.93c0-.06.09 0 .1 0 .1-.42-.58-.27-.1 0z"></path><path d="m216.6 229.17c-.15-.26-.36 0-.06.07-.1-.09-.06-.17.06-.07z"></path><path d="m213.28 231.78c-.16-.1.2.37 0 .08.2-.04.09.01 0-.08z"></path><path d="m210.74 222c.48-.11.5-.49.25-.82-.99-.82-1.78.7-.25.82z"></path><path d="m213 230.71c.1.2.07.13.14 0 .05.45.06-.12-.14 0z"></path><path d="m213 230c.15 0 0-.49-.24-.57-.38.17-.11.89.24.57z"></path><path d="m204.14 221c-.86-.95-1.3 1.13-.22.84.31-.15-.16-.75.22-.84z"></path><path d="m213.34 225c0-.06-.19-.29-.08-.22-.96-.78-.6.82.08.22z"></path><path d="m213.47 228.7s0 0 0 0 0 .03 0 0z"></path><path d="m212.52 228.33c-.08 0-.05.09 0 .08s-.04-.07 0-.08z"></path><path d="m212.17 227.59s-.1-.19-.07-.26c-1.05-.57.22 1.33.07.26z"></path><path d="m208.85 224.75c.23-.05.31-.14.34-.35-.19-.69-1.28.12-.34.35z"></path><path d="m209.54 224.06-.11-.06z"></path><path d="m208.58 220.42c.24 0 .2-.12.11-.29-.26-.13-.4.14-.11.29z"></path><path d="m210.77 217a.23.23 0 0 0 -.19-.1c-.29.1.28.39.19.1z"></path><path d="m205.76 220.17c-.24.13.05.33.15.2a.14.14 0 0 0 -.15-.2z"></path><path d="m205.47 220.28c-.09 0-.06.05 0 .08s.02-.06 0-.08z"></path><path d="m208.42 219.09c.19 0-.2-.24-.15 0 .04.01.18.06.15 0z"></path><path d="m207.63 217c-.14-.29-.12-.34-.36-.5-1.27.22.33.95.36.5z"></path><path d="m205.91 218.57c.23-.35-.45-.84-.95-.6-.48.89 1.04 1.36.95.6z"></path><path d="m203 215.35c.56.68 1.4-.08.94-.42-.09-.35-1.29-.3-.94.42z"></path><path d="m202.71 219.83c0-.13-.17-.12-.14 0s.06 0 .14 0z"></path><path d="m200.37 221.8c0 .14.22 0 .13-.05s-.12-.01-.13.05z"></path><path d="m202.66 216.13c.17-.06-.08-.06.08-.14-.14-.08-.21.08-.08.14z"></path><path d="m201.25 217.9c0-.19-.4-.25-.42-.06-.22.53.73.42.42.06z"></path><path d="m201.35 217c-.25-.18-.53-.42-.82.06.08.78.85.6.82-.06z"></path><path d="m200.27 215.91c0-1-1-1.59-1.58-.61.17 1.51.69 1.45 1.58.61z"></path><path d="m206.28 223.61c-.45-.21-.14.57.07.11-.01-.03 0-.16-.07-.11z"></path><path d="m205.77 223.4c-.2-.06-.1 0 0 0s-.03.04 0 0z"></path><path d="m205.22 223.51c0-.07.77-.47.35-.36.63-.94-1.82-.35-.35.36z"></path><path d="m205.43 222.39s0 0 0 0z"></path><path d="m149.89 227.45h.14s-.11-.01-.14 0z"></path><path d="m150.16 227.43.11-.08c-.1-.01-.19-.07-.11.08z"></path><path d="m119 238.1a.14.14 0 0 0 0 .25c.22-.04.2-.23 0-.25z"></path><path d="m132.27 217.11c0-.06-.14 0-.09.07z"></path><path d="m118.67 237.48v.14s.09-.24 0-.14z"></path><path d="m133.6 216.61c-.14-.27-.41.09-.54.17a.44.44 0 0 0 .54-.17z"></path><path d="m120.14 236.32a.26.26 0 0 0 0 .35c.3.04.34-.4 0-.35z"></path><path d="m109.11 242c0 .31.41-1.11.11-1.28-.22.28-.17 1.28-.11 1.28z"></path><path d="m109.88 239c-.19.42 0 1.38.06.5.25-.29.2-1.29-.06-.5z"></path><path d="m109.56 237.33c-.28.07-.23.71-.21.9a2.83 2.83 0 0 0 .21-.9z"></path><path d="m109 237.29v-.15s0 .09 0 .15z"></path><path d="m120.16 225.29c-.14-.16-.29.05-.13.16s.12-.06.13-.16z"></path><path d="m122.35 222.88c.05-.14-.07-.15-.09-.24-.35-.04-.18.52.09.24z"></path><path d="m115.37 232.52c-.05.06-.12.16 0 .23z"></path><path d="m116.23 231.57c-.38.58-.66 1 0 .74.22-.19.66-1.31 0-.74z"></path><path d="m117 228.87c.37.5.59.32 1.16-.35.41-1.29-.8-.21-1.16.35z"></path><path d="m119.45 229.39a.9.9 0 0 0 -.52.75c.22-.09.89-.52.52-.75z"></path><path d="m141.29 213.15c-.49-.21-1.16.35-1.41.76.5-.03 1.26-.2 1.41-.76z"></path><path d="m120.2 228.92v.09c.04-.01.12-.01 0-.09z"></path><path d="m120.87 228.69c.07.17.71-.39.44-.6-.31-.09-.81.79-.44.6z"></path><path d="m120.87 228.8s0-.08 0 0z"></path><path d="m122.21 228.08c.82-.76-.2-.87-.33-.05.12.38-.08.08.33.05z"></path><path d="m128.37 230.61c-.24.1-.24.38-.34.57.13-.07.73-.44.34-.57z"></path><path d="m129.35 224.29c.13.19.58-.59.07-.44-.19.09-.48.56-.07.44z"></path><path d="m127.27 225.93.07-.11s-.08.08-.07.11z"></path><path d="m132.12 222.09c.38 0 .66-.82-.1-.58-.27.49-.38.63.1.58z"></path><path d="m128.77 217.93c-.35 0-.71.5-.79.69.3-.11 1.25-.21.79-.69z"></path><path d="m134.47 221.71c.1-.06.22-.07.29-.17.24-.63-.76-.15-.29.17z"></path><path d="m139.27 224.13c0-.56-.44.05-.41.33.04-.21.34-.11.41-.33z"></path><path d="m151 211.77c.76.7 1.33-.49 2.14-1.31-.31-.48-.78.36-.69.41-1-.29-1.05.58-1.45.9z"></path><path d="m136.87 220.56c-.19.14.15.29.15.38.49-.13.38-.76-.15-.38z"></path><path d="m139.16 220.79c-.06.17.17 0 .21 0 .27-.55-.58-.14-.21 0z"></path><path d="m140.94 218.84c.11.43.77.1.62-.35a.42.42 0 0 0 -.62.35z"></path><path d="m144.13 222.53c.41.5.78-1.32-.16 0a.11.11 0 0 1 .16 0z"></path><path d="m142.4 219.49c.07.27 0 .41.41.36.62-.15.27-1.05-.41-.36z"></path><path d="m136.83 210.6s-.08-.12-.13-.06.04.08.13.06z"></path><path d="m143 215.58c.1 0 .2.09.15.09.07-.19-.06-.1-.15-.09z"></path><path d="m148.27 212.82c0 .29 0-.44.2-.06.53-1.05-1.16.24-.2.06z"></path><path d="m142.86 208.66c.07.06-.05.18.06.21.73.24.62-1.09-.06-.21z"></path><path d="m147.7 213.72c-.32.18-.32.23 0 .22-.32.45.35-.13 0-.22z"></path><path d="m162.45 207.81c-.08.84 2 1.07 1.93-1-.52-1.97-2.58 1-1.93 1z"></path><path d="m163.7 208.43s0 .06 0 .09z"></path><path d="m145.45 207.15c.58-.41-.63-.21 0 0-.45-.06-.39.19 0 0z"></path><path d="m146.91 207.2c.54.08 1.71-.36.75-.77-.47-.56-1.05.57-.75.77z"></path><path d="m149.16 208.43s.12 0 .08-.05z"></path><path d="m150.23 206.83c.05-.15-.13-.13-.15 0 .02-.12.16-.07.15 0z"></path><path d="m151.22 206.23c0 .47.75.16 1 .25 1.31-1.14-1-.88-1-.25z"></path><path d="m158.72 202.45c.24 1 2-.18.84-.9a.81.81 0 0 0 -.84.9z"></path><path d="m159.52 203.72.18-.13a1.18 1.18 0 0 0 -.18.13z"></path><path d="m166.72 205.35c.54-.73-.56-.69-.44 0 .24.05.26-.05.44 0z"></path><path d="m170.45 211.59c.41 0 .26-.61-.09-.43s-.07.43.09.43z"></path><path d="m168.41 200.33c0 .24.06.31.33.32.4-.25-.08-.65-.33-.32z"></path><path d="m169 199.9c.07-.16 0-.15-.14-.08s.05.09.14.08z"></path><path d="m168.75 205.64c-.21.06-.26.27-.09.35.16-.07.34-.27.09-.35z"></path><path d="m173.69 206.05c-.56-1.49-1.41.1-1.36.48.52.08 1.11.58 1.36-.48z"></path><path d="m171 201.71c.06 1.28 1.92 1.21 2.08-.29-.61-1.06-2.28-.74-2.08.29z"></path><path d="m94.65 227.55a1.13 1.13 0 0 1 -.69-.24 1.12 1.12 0 0 1 -.18-1.57 168.62 168.62 0 0 0 27.22-51.74 1.11 1.11 0 1 1 2.14.6 170.89 170.89 0 0 1 -27.62 52.48 1.12 1.12 0 0 1 -.87.47z"></path></g><path d="m235.92 79.21h65.17v37.17h-65.17z" fill="#2196f3" transform="matrix(.88957588 .45678743 -.45678743 .88957588 74.33 -111.86)"></path>',
            6,
          ),
        ]),
    )
  )
}
const x8 = X0(w8, [['render', k8]]),
  E8 = {},
  P8 = { viewBox: '0 0 410.28 303.3', xmlns: 'http://www.w3.org/2000/svg' }
function T8(t, e) {
  return (
    Ft(),
    p1(
      'svg',
      P8,
      e[0] ||
        (e[0] = [
          dl(
            '<path d="m217.25 44.27h34.34v31.67h-34.34z" fill="#2196f3"></path><circle cx="86.22" cy="66.86" fill="#333" r="10.79"></circle><circle cx="300.59" cy="126.35" fill="#333" r="10.79"></circle><path d="m310.77 156.66a1 1 0 0 1 -.09-2c.47 0 47.1-4.8 67-27.64a1 1 0 0 1 1.51 1.31c-10.69 12.28-28.7 19.33-41.94 23.08a168.45 168.45 0 0 1 -26.35 5.24z" fill="#333"></path><circle cx="309.19" cy="188.14" fill="#cfd0d1" r="43.79"></circle><rect fill="#333" height="82.93" rx="15" width="57.65" x="169.17" y="99.44"></rect><path d="m82 265.36a.84.84 0 0 1 -.27 0 1 1 0 0 1 -.69-1.24c9.72-34.14 9.22-59 7.1-73.8-2.3-16-7-24.13-7-24.21a1 1 0 0 1 .36-1.37 1 1 0 0 1 1.37.36c.19.33 4.86 8.41 7.23 24.79 2.17 15 2.7 40.21-7.14 74.78a1 1 0 0 1 -.96.69z" fill="#333"></path><path d="m66.59 110.78a1 1 0 0 1 -.86-.49 86.16 86.16 0 0 1 -6.89-15.55c-2.75-8.31-5.26-20.48-1.58-31.27 3.12-9.15 10.14-15.93 20.86-20.13a1 1 0 1 1 .73 1.87c-10.14 4-16.77 10.33-19.7 18.9-6.72 19.69 8.15 44.9 8.3 45.15a1 1 0 0 1 -.34 1.38 1.1 1.1 0 0 1 -.52.14z" fill="#333"></path><path d="m46.28 265.36h-.07a1 1 0 0 1 -.92-1.07c1.07-15.61 26-98.78 27.1-102.31a1 1 0 0 1 1.92.57c-.26.87-26 86.49-27 101.88a1 1 0 0 1 -1.03.93z" fill="#333"></path><circle cx="77.41" cy="131.2" fill="#cfd0d1" r="43.79"></circle><path d="m188.39 265.36a1 1 0 0 1 -1-.86c-10.12-72.25 2.25-77 3.69-77.34a1 1 0 0 1 .46 1.94c-.3.12-12 5.28-2.17 75.12a1 1 0 0 1 -.85 1.13z" fill="#333"></path><path d="m188.32 234.58q-8.61 0-19.24-.94a1 1 0 0 1 -.91-1.08 1 1 0 0 1 1.09-.91c30.79 2.74 49.09-.61 52.92-9.66 5.35-12.65-17.9-32.89-18.14-33.1a1 1 0 1 1 1.31-1.51c1 .87 24.59 21.41 18.68 35.39-3.33 7.86-15.31 11.81-35.71 11.81z" fill="#333"></path><path d="m299.36 265.36a1 1 0 0 1 -.62-.22 1 1 0 0 1 -.15-1.41c7.31-9.11 9.59-26.79 9.61-27a1 1 0 1 1 2 .25c-.1.75-2.38 18.41-10 28a1 1 0 0 1 -.84.38z" fill="#333"></path><path d="m349.45 249.53a23.43 23.43 0 0 1 -11.19-2.86c-8.71-4.67-14.68-14.37-18.15-21.67a85.91 85.91 0 0 1 -5.47-14.8 1 1 0 0 1 .72-1.22 1 1 0 0 1 1.22.73c.06.27 6.8 26.71 22.63 35.21 5.79 3.08 12.09 3.43 18.79 1.08a1 1 0 1 1 .67 1.89 27.75 27.75 0 0 1 -9.22 1.64z" fill="#333"></path><path d="m307 237.05.16.07s-.16-.06-.16-.07z" fill="#333"></path><path d="m307.23 237.22h.16c-.08-.06-.13-.22-.16 0z" fill="#333"></path><path d="m313.68 205.55c.28.26.54-.18.3-.43a.31.31 0 0 0 -.3.43z" fill="#333"></path><path d="m314 204.47c.19.07.32-.22.17-.32s-.3.21-.17.32z" fill="#333"></path><path d="m274.71 211.25c-.09.17.05.36.19.2s-.09-.25-.19-.2z" fill="#333"></path><path d="m300.07 216.23h-.07c-.07.05.1.06.07 0z" fill="#333"></path><path d="m275.46 211.52c-.06.06 0 .15.07.16s.01-.17-.07-.16z" fill="#333"></path><path d="m301.45 216.85c.09-.32-.38-.23-.53-.26.08.18.31.35.53.26z" fill="#333"></path><path d="m275.56 213.59c-.19.28.24.66.34.24-.06-.15-.22-.28-.34-.24z" fill="#333"></path><path d="m281.59 202.86s-.17.26-.17.39c.14.41.32-.47.17-.39z" fill="#333"></path><path d="m325.35 213.27c-.13-2.09-1.22-.83-1.23.6.36-.67 1.19.66 1.23-.6zm-1 0c.07 0 0 .09 0 .08s.03-.04.04-.06z" fill="#333"></path><path d="m281 204.31c0 .27.19.22.19 0s-.11-.17-.19 0z" fill="#333"></path><path d="m281.78 204.15c0 .12-.07.3.05.35s.05-.31-.05-.35z" fill="#333"></path><path d="m282.27 204.11s0 .02 0 0z" fill="#333"></path><path d="m284.75 205.4c0-.05 0-.06 0-.06z" fill="#333"></path><path d="m286 212.45c.11.16.26 0 .14-.14s-.06.08-.14.14z" fill="#333"></path><path d="m288.49 208.56c-.06.05-.12.22 0 .23s.17-.26 0-.23z" fill="#333"></path><path d="m289 206.3c-.2.08-.37.52-.07.54s.31-.46.07-.54z" fill="#333"></path><path d="m288.73 208.08c-.09 0-.07.19 0 .2s.13-.22 0-.2z" fill="#333"></path><path d="m288.91 212.55c-.19 0-.19.34 0 .34a.18.18 0 0 0 0-.34z" fill="#333"></path><path d="m280.72 209.94c-.17.07 0 .05.07.09z" fill="#333"></path><path d="m281.25 211.16c.2-.32-.31-.66-.58-.73.13.23-.01.89.58.73z" fill="#333"></path><path d="m289.75 209c.12.23.26-.14.07-.14s-.08.04-.07.14z" fill="#333"></path><path d="m290.08 212.42c.13.05.24-.06.15-.18s-.23.09-.15.18z" fill="#333"></path><path d="m290.41 210.83c.06.2.32 0 .13-.13-.04.05-.16.01-.13.13z" fill="#333"></path><path d="m290.5 212.05c-.29.27.11.23.28.23.11-.28-.2-.13-.28-.23z" fill="#333"></path><path d="m283.13 211.29c-.66.11 0 .89.53.82.65-.29-.66-1.27-.53-.82z" fill="#333"></path><path d="m282.12 213.33c.08.19.53.74.69.3a.61.61 0 0 0 -.69-.3z" fill="#333"></path><path d="m310 219.54c-.26-.51-1.18-.51-1.67-.35.41.32 1.15.7 1.67.35z" fill="#333"></path><path d="m283.25 214.21.06.1c.03-.09.03-.11-.06-.1z" fill="#333"></path><path d="m284.36 215a.61.61 0 0 0 -.78-.29c.11.04.48.72.78.29z" fill="#333"></path><path d="m283.6 214.82c-.05 0 .08 0 0 0z" fill="#333"></path><path d="m284.63 215.47c-.7.18 1.08.78.68.12a.7.7 0 0 0 -.68-.12z" fill="#333"></path><path d="m285 222.87c.28.07.68.36 1 .15-.12-.4-.79-.14-1-.15z" fill="#333"></path><path d="m291.56 200c1.23-.38-.63-.73-.94-.66.3.21.52.66.94.66z" fill="#333"></path><path d="m292.31 219.38a.6.6 0 0 0 .53.22c.53-.3-.41-.6-.53-.22z" fill="#333"></path><path d="m289.61 219h.14s-.12 0-.14 0z" fill="#333"></path><path d="m296.07 219.67c.21 0 .09.11-.06 0 .92 1.14 1.33-.79.06 0z" fill="#333"></path><path d="m293.66 203.57h-.14s.16.12.14 0z" fill="#333"></path><path d="m293.69 204.48c-.35.11-.08.13.08.24-.21-.19-.16-.12-.08-.24z" fill="#333"></path><path d="m294.06 204.65s-.06.01 0 0z" fill="#333"></path><path d="m294.05 204.71c0-.1-.09 0-.14 0s.09.06.14 0z" fill="#333"></path><path d="m294 204.5c-.2-.05-.11.06-.24.12.1-.14.36.05.24-.12z" fill="#333"></path><path d="m294.51 203.52-.15.06c.07.03.1-.02.15-.06z" fill="#333"></path><path d="m296.85 214.31c-.27-.26-.9-.14-1.1-.06.3.15 1.09.75 1.1.06z" fill="#333"></path><path d="m298.54 221.09c-.33.18-.11.47.2.42s.14-.51-.2-.42z" fill="#333"></path><path d="m297.55 209.89c.64-.19-.41-.71-.44-.15.09.13.28.14.44.15z" fill="#333"></path><path d="m298.93 222a.13.13 0 0 1 -.09-.05s.05.05.09.05z" fill="#333"></path><path d="m299.11 221.92c-.15-.17 0 0-.09.08s.15 0 .09-.08z" fill="#333"></path><path d="m299 222a.09.09 0 0 1 -.09 0z" fill="#333"></path><path d="m298.67 202.05c-.11-.11-.21-.21-.37-.18-.3.28.44.8.37.18z" fill="#333"></path><path d="m299.65 205.5c-.45-.49-1.11-.18-1.35-.15.31.31 1.28.88 1.35.15z" fill="#333"></path><path d="m298.79 211.79c-.17.23-.16-.1-.2-.08-.32.12.24.23.46.2.72-.51-.86-.72-.26-.12z" fill="#333"></path><path d="m298.41 211.61c.08 0 .15.13.13 0-.03.03-.09-.01-.13 0z" fill="#333"></path><path d="m299.8 226.77c.18-.13.36.16.58 0 .46-.37-.38-.24-.58 0z" fill="#333"></path><path d="m322 224c.06 0-2.47-.28-1.83.48-.63 1.32 4.52-1.15 1.83-.48z" fill="#333"></path><path d="m301.13 222.3c-.31 0-.15.5.07.48.49-.06.34-.45-.07-.48z" fill="#333"></path><path d="m300.91 207.07c.13-.25-.33-.34-.52-.22s.3.42.52.22z" fill="#333"></path><path d="m303 224.28c.4-.12.09-.43-.19-.29-.08.17-.08.23.19.29z" fill="#333"></path><path d="m305.67 223.87c-.22.42.55.62.76.16a.47.47 0 0 0 -.76-.16z" fill="#333"></path><path d="m305.48 228.94c.18.1 0 .36.55.31.79-.36-.2-.47-.55-.31z" fill="#333"></path><path d="m303.67 206.91c1.65 0-.39-1.43-.17-.33-.19.23.31.04.17.33z" fill="#333"></path><path d="m303.5 211.05c-.07 0-.11 0-.15 0s.14.13.15 0z" fill="#333"></path><path d="m306.4 225.42c-.27.33-.09.34.05.64.93.08.78-.69-.05-.64z" fill="#333"></path><path d="m303.56 211c.28-.13.3.07.31.22.71-.28-.87-.52-.31-.22z" fill="#333"></path><path d="m303.81 211.2s-.14 0-.14 0 .12-.01.14 0z" fill="#333"></path><path d="m303.66 211.06c-.07.07-.12.09 0 .11a.08.08 0 0 1 0-.11z" fill="#333"></path><path d="m308.17 214.4s0-.15-.06-.13-.02.09.06.13z" fill="#333"></path><path d="m309.8 222.85s-.01.01 0 0z" fill="#333"></path><path d="m309.71 222.69a.18.18 0 0 1 .09.16c.2-.1-.01-.11-.09-.16z" fill="#333"></path><path d="m311.74 213.84c-.09 0-.08.11 0 .1z" fill="#333"></path><path d="m312.06 213.93c-.18.17-.14 0-.26 0 .52.49.7-.43.26 0z" fill="#333"></path><path d="m311.92 213.81a.29.29 0 0 1 .1 0 .38.38 0 0 0 -.1 0z" fill="#333"></path><path d="m311.83 213.87.09-.06s-.15.01-.09.06z" fill="#333"></path><path d="m312.09 213.79s0 .01 0 0z" fill="#333"></path><path d="m311.89 213.92c.11-.06.04-.03 0 0z" fill="#333"></path><path d="m317 223.67c.22-.8-1.44-.1-.55.08-.19.05.23.03.55-.08z" fill="#333"></path><path d="m314.79 216.93c-.16-.36-.84-.06-.66.08-.06.29.67.3.66-.08z" fill="#333"></path><path d="m315 224.23c.07.29-.23.35.28.14.11-.49-.77.07-.28-.14z" fill="#333"></path><path d="m315.26 215.92c-.23.07.15 0 .28-.07-.54-.25-.36-.15-.28.07z" fill="#333"></path><path d="m317.19 217.05c.67-.05-.36-.52 0 0-.34-.28-.43-.05 0 0z" fill="#333"></path><path d="m318.52 217.81c-.19.24.76.62 1.18.33.14-.76-1.28-1.23-1.18-.33z" fill="#333"></path><path d="m340.31 206.22c-1.16-1.72-1.72.78-.92 1.26.28-.27.35-.2.84-.38.1.14.29.49.36.17.34.54 1.17-1.9-.28-1.05z" fill="#333"></path><path d="m339 207.05a0 0 0 0 1 0-.05s0 0 0 .05z" fill="#333"></path><path d="m327.31 223.35c-.7.24-.68.61-.69 1.08.81.47 2.55-1.29.69-1.08z" fill="#333"></path><path d="m320 220.22h-.1c-.05.06.1.04.1 0z" fill="#333"></path><path d="m321.69 219.22c.11-.12-.07-.18-.14-.09.06-.13.17.03.14.09z" fill="#333"></path><path d="m324.48 219.06c-.46-.34-1.63-.4-1.64.25.53.21 1.49.79 1.64-.25z" fill="#333"></path><path d="m332.58 215.59c-.9 0-1.2 1.38-.44 1.37.43.42 1.56-1.05.44-1.37z" fill="#333"></path><path d="m332.71 217.85-.13.1s.42-.26.13-.1z" fill="#333"></path><path d="m341.17 217.5c0 .05.18-.13.13-.13z" fill="#333"></path><path d="m342 210.62a.36.36 0 0 0 -.16.56c.41.2.72-.58.16-.56z" fill="#333"></path><path d="m341.93 210.21c.11.16.27-.1.11-.16z" fill="#333"></path><path d="m344.89 210.35s0 .02 0 0z" fill="#333"></path><path d="m347 208.34c-1.58-.62-2.88 2.26-1.49 2.41.61.56 2.2-.9 1.49-2.41z" fill="#333"></path><path d="m342.6 204.18c.25-.06.18-.39-.08-.27-.08.19.04.09.08.27z" fill="#333"></path><path d="m337.84 200.71c0-.34-.49-.14-.16.07.11-.08.1.05.16-.07z" fill="#333"></path><path d="m350.06 201.74c.23.37.05-.26.3.07.1-.37-.25-.45-.3-.07z" fill="#333"></path><path d="m346 199.31c-.6-.84-1.62.76-.57.87.47.18.45-.53.57-.87z" fill="#333"></path><path d="m345.7 200.24s0-.07 0 0z" fill="#333"></path><path d="m347.6 198.42c-.09-1.19-2.07-.12-1.41.84a.82.82 0 0 0 1.41-.84z" fill="#333"></path><path d="m349.51 192.52c.54-.39-.53.15-.12-.5-.07 0-.21.3-.26.06-.92.16-.15-.08-1.17.14-1.08.85-.83 1.46-1.39 2.34 0 .84 1.3.59 1.45 1.2.29-.1.05.07.4.13.25-.3.4 0 .61.07-.09-.69.32 0 .27-.3.26-.14.12-.45.44-.27 0-.3.24-.84.65-.67-.63-.8.34-1.67-.88-2.2z" fill="#333"></path><path d="m335.15 211.75c.33-.34-.14-.92-.47-.44.01.29.11.48.47.44z" fill="#333"></path><path d="m335.63 210.77a1.92 1.92 0 0 0 .14-.31s-.27.28-.14.31z" fill="#333"></path><path d="m337.28 209.37c-.56-1.38-2.37.1-1.51.63.87 1 1.45.75 1.51-.63z" fill="#333"></path><path d="m337.77 210.2c.05 0-.09-.06-.09-.07z" fill="#333"></path><path d="m321.53 200h-.09s.08 0 .09 0z" fill="#333"></path><path d="m321.34 200.1c-.09.11 0 .07.07.07z" fill="#333"></path><path d="m340 217.24c.1.27.4.16.41-.08s-.41-.16-.41.08z" fill="#333"></path><path d="m341.62 181.79c.09 0 .05-.18 0-.21s-.14.22 0 .21z" fill="#333"></path><path d="m338.27 202.55v-.08s-.06.09 0 .08z" fill="#333"></path><path d="m341.93 182.28c.1 0 .08-.1 0-.13s-.03.09 0 .13z" fill="#333"></path><path d="m337.74 203.08c-.15 0-.52.25-.27.36s.2-.27.27-.36z" fill="#333"></path><path d="m341 183.5a.22.22 0 0 0 0-.3c-.3.02-.28.41 0 .3z" fill="#333"></path><path d="m349.66 178.32c-.05-.2-.34.74-.09.83.22-.15.13-.81.09-.83z" fill="#333"></path><path d="m328.17 221.16c0-.3-.43-.1-.53-.21-1.21 1.05 1.36 1.24.53.21z" fill="#333"></path><path d="m349.06 180c-.11.14-.21.48-.05.6a.61.61 0 0 0 .05-.6z" fill="#333"></path><path d="m349.52 181.39c.2 0 .14-.47.1-.59-.03.2-.16.36-.1.59z" fill="#333"></path><path d="m350 181.37v.1s0-.06 0-.1z" fill="#333"></path><path d="m350.29 187.52a0 0 0 0 1 0-.05s-.07.11 0 .05z" fill="#333"></path><path d="m344.44 192c.05-.11-.06-.09-.11-.13s-.01.23.11.13z" fill="#333"></path><path d="m343.56 194.53c0 .12.1.08.15.15.29-.11-.06-.45-.15-.15z" fill="#333"></path><path d="m345.67 185.25v.18c.05-.06.07-.14 0-.18z" fill="#333"></path><path d="m345.27 186.3c.17-.53.25-.82-.18-.54-.15.24-.2 1.1.18.54z" fill="#333"></path><path d="m346.5 196c0-.19-.24 0-.14.07s.14-.01.14-.07z" fill="#333"></path><path d="m343.79 195.78c.07-.09 0-.21-.11-.17s-.01.23.11.17z" fill="#333"></path><path d="m344.89 196.32s0-.14-.06-.14-.08.29.06.14z" fill="#333"></path><path d="m343.87 196c-.15-.29-.2.07-.24.2.17.18.14-.1.24-.2z" fill="#333"></path><path d="m345.46 188.45c-.43-.26-.57-.08-.79.58.11 1.04.71-.09.79-.58z" fill="#333"></path><path d="m343.43 188.76a.71.71 0 0 0 .16-.71c-.14.13-.52.64-.16.71z" fill="#333"></path><path d="m332.54 208.51c.44 0 .8-.61.87-1-.41.17-.92.49-.87 1z" fill="#333"></path><path d="m343 189.26-.07.07c.07.02.07 0 .07-.07z" fill="#333"></path><path d="m342.58 190.21c.14-.15.2-.74 0-.48-.19-.15-.43.88 0 .48z" fill="#333"></path><path d="m342.55 189.64s0 .06 0 0z" fill="#333"></path><path d="m341.91 191.13c.25-.27.08-.55 0-.77-.11.16-.48 1 0 .77z" fill="#333"></path><path d="m336.28 190.36c-.07.15-.31.36-.17.58.28.06.17-.42.17-.58z" fill="#333"></path><path d="m337.92 196.43c.11-.14.15-.6-.11-.36-.17-.07-.21.66.11.36z" fill="#333"></path><path d="m338.75 194.07v.11s.02-.09 0-.11z" fill="#333"></path><path d="m336.87 199.13c0-.43 0-.61-.29-.4s-.17.84.29.4z" fill="#333"></path><path d="m349.49 200.46c.05.06.06-.08.08-.11z" fill="#333"></path><path d="m348.82 200.18c0 .29 0 0 0-.07-.14.17-.29.3 0 .07z" fill="#333"></path><path d="m348.55 200.58c.08 0 0-.08 0-.13s-.03.09 0 .13z" fill="#333"></path><path d="m348.6 200.6s0-.02 0 0z" fill="#333"></path><path d="m348.72 200.31c0 .13.12.16-.1.28.22-.05.14-.17.1-.28z" fill="#333"></path><path d="m349.32 201.11s0 .09 0 .14z" fill="#333"></path><path d="m340.61 200.63c.26-.14.34-.66.33-.84-.18.21-.85.65-.33.84z" fill="#333"></path><path d="m335.16 200c.08.32.15 0-.12-.2-.46.05-.14.85.12.2z" fill="#333"></path><path d="m343.68 202.34c-.08.3.27.24.34 0 .08-.43-.25-.34-.34 0z" fill="#333"></path><path d="m334.4 200.2c.16-.06 0 0 0-.08s-.06.11 0 .08z" fill="#333"></path><path d="m334.4 200.05s0 0 .06 0-.04-.05-.06 0z" fill="#333"></path><path d="m334.36 200.11s0 0 0-.06a.21.21 0 0 0 0 .06z" fill="#333"></path><path d="m349 205.06c-.11.34.4.26.42 0s-.37-.06-.42 0z" fill="#333"></path><path d="m346.81 204.14c-.32.18-1.09.81-.56 1.11.5-.25.5-.89.56-1.11z" fill="#333"></path><path d="m342.05 202.66s0 0 0 0z" fill="#333"></path><path d="m342.15 202.57c0 .05-.15.08 0 .11-.06-.04-.01-.07 0-.11z" fill="#333"></path><path d="m342.19 202.82c-.28 0-.43-.14-.15-.16-.5-.27-.2 1.26.15.16z" fill="#333"></path><path d="m330.71 199.22c0 .17-.22.19-.19.37.16.41.31-.17.19-.37z" fill="#333"></path><path d="m333.33 201.27a.38.38 0 0 0 -.14.11c-.19.69.81-.02.14-.11z" fill="#333"></path><path d="m344.81 205.91c.18-.15.27-.38.08-.5-.14.1-.41.51-.08.5z" fill="#333"></path><path d="m331.87 202.07c-.11-.08-.15-.11-.27 0-.04.33.27.24.27 0z" fill="#333"></path><path d="m330.69 204.48a.32.32 0 0 0 .22-.59c-.18.11-.45.29-.22.59z" fill="#333"></path><path d="m327.44 202.17c.05-.34-.54.41-.14.48.19-.09.33-.58.14-.48z" fill="#333"></path><path d="m344.3 208.19c-.26-.17-.45-.06-.63.28-.04.7.81.13.63-.28z" fill="#333"></path><path d="m329.64 203.91c.05-.3-.37-.14-.48 0-.16.73.69.27.48 0z" fill="#333"></path><path d="m330.35 207.09c0 .17.07.07.14 0s-.18.01-.14 0z" fill="#333"></path><path d="m335.68 212c.06-.05 0-.1-.06 0z" fill="#333"></path><path d="m335.48 212.05s.01 0 0 0z" fill="#333"></path><path d="m335.62 212.14a.41.41 0 0 1 0 .08.13.13 0 0 0 0-.08z" fill="#333"></path><path d="m335.56 212.27s.01-.02 0 0z" fill="#333"></path><path d="m335.62 212.05c0 .09 0 .09 0 0z" fill="#333"></path><path d="m335.56 212.07c0-.1 0-.08-.07 0s.08-.07.07 0z" fill="#333"></path><path d="m335.56 212.07c.01.08 0 .04 0 0z" fill="#333"></path><path d="m335.48 212.06c-.28.13-.17.56.07.21-.08-.02-.08-.13-.07-.21z" fill="#333"></path><path d="m332.48 212.38c-.09-.11-.25.05-.32.17-.11.77.69-.15.32-.17z" fill="#333"></path><path d="m327.47 209.68c-.21-.23-.32 0-.09.15.19-.04.11-.46.09-.15z" fill="#333"></path><path d="m332.63 213.64c.08-.2-.08.11-.09.22.4-.23.29-.18.09-.22z" fill="#333"></path><path d="m316.14 217.88s0 0 0-.08z" fill="#333"></path><path d="m317.42 218.89a1.33 1.33 0 0 1 .06-.93c-.14.06-.5.13-.3-.35-.38.17-.86.43-1 0-.82 1.32.24 3.14 1.24 1.28z" fill="#333"></path><path d="m330.94 214.41c-.36.48.56 0 0 0 .34-.08.28-.26 0 0z" fill="#333"></path><path d="m329.77 214.86c0-.24-.76.15-.83.54.37.52 1.42-.15.83-.54z" fill="#333"></path><path d="m315.36 228.66c-.05-.1-.27 0-.56 0 0-.13-.11-.43-.24-.22-1-.16-.39 1.2.49 1.54.8-.26.65-1.44.31-1.32z" fill="#333"></path><path d="m315.71 229a.08.08 0 0 1 0 0s0 0 0 0z" fill="#333"></path><path d="m321.57 215c-1 1.21 1 1.21.48.16-.11-.49-.45.02-.48-.16z" fill="#333"></path><path d="m327.22 215.92c0 .12.14.06.13 0 .01.08-.11.08-.13 0z" fill="#333"></path><path d="m326.43 216.49c-.37.13-.66 0-.85.42-.32 1.21 1.64-.31.85-.42z" fill="#333"></path><path d="m321.38 221.28c-.42-.05-.86.15-.74.82.61.9 1.29-.48.74-.82z" fill="#333"></path><path d="m320.54 220.74.06-.09s-.21.25-.06.09z" fill="#333"></path><path d="m314.88 221.31c-.05-.36-.15-.32-.43-.25-.18.37.14.64.43.25z" fill="#333"></path><path d="m310 217a.19.19 0 1 0 .18.32c.16-.14-.06-.38-.18-.32z" fill="#333"></path><path d="m314 225.32c-.27.3.24.54.34.17-.13-.18-.16-.23-.34-.17z" fill="#333"></path><path d="m314 226.09.1-.09c-.1-.13-.22 0-.1.09z" fill="#333"></path><path d="m312.74 221c-.1.1-.17.3 0 .31s.16-.31 0-.31z" fill="#333"></path><path d="m308.66 221.71c.07 1.69 1.37.48 1-.21-.45.05-.5-.08-1 .21z" fill="#333"></path><path d="m311.91 225.41c.11-1-.86-1.13-1.52-.53-.71 1.29 1.53 1.62 1.52.53z" fill="#333"></path><path d="m306 225.8c-.44-.55-1.5.51-.84 1.29 1.05 1.02 1.57-1.48.84-1.29z" fill="#333"></path><path d="m312.11 230.13c.13.14.24.05.18-.13-.07 0-.22 0-.18.13z" fill="#333"></path><path d="m306.65 228.16c-.15-.11-.21-.13-.13.12.28.09.14-.35.13-.12z" fill="#333"></path><path d="m319.57 225.61c-.31 0-.42.3-.18.51a.27.27 0 0 0 .18-.51z" fill="#333"></path><path d="m318.92 226.47c0-.09-.1.18-.12.18s.2-.37.12-.18z" fill="#333"></path><path d="m318.78 227.12c-.31-.75-1-1-1.21.1-.57 1.09 1.93.78 1.21-.1z" fill="#333"></path><path d="m317.26 226.78s-.06-.09-.07-.05z" fill="#333"></path><path d="m319.73 218.84v.1s0-.08 0-.1z" fill="#333"></path><path d="m319.72 219.12v-.1c-.03-.02-.04.03 0 .1z" fill="#333"></path><path d="m341.75 214.53c-.09.24.26.46.37.15-.07-.15-.2-.31-.37-.15z" fill="#333"></path><path d="m342.55 214.52c0 .15.23.24.27.07s-.24-.2-.27-.07z" fill="#333"></path><path d="m319.3 193.25c0 .09.12.09.16 0s-.17-.15-.16 0z" fill="#333"></path><path d="m330.59 208.37s0-.11 0-.07z" fill="#333"></path><path d="m320 193.4c0-.05-.06 0-.09-.05s.09.16.09.05z" fill="#333"></path><path d="m330.7 209.42c.23 0 0-.31 0-.42a.33.33 0 0 0 0 .42z" fill="#333"></path><path d="m319.77 194.86c.09.13.19.06.25 0-.02-.27-.32-.26-.25 0z" fill="#333"></path><path d="m323.46 187c.5.5 0-.57-.2-.47.12.16.07.36.2.47z" fill="#333"></path><path d="m324 188.41c.05-.16-.13-.36-.25-.42-.05.15.05.43.25.42z" fill="#333"></path><path d="m324.77 188.63a.58.58 0 0 0 -.26-.41c.08.11.08.45.26.41z" fill="#333"></path><path d="m325.07 188.37v.07s.02-.04 0-.07z" fill="#333"></path><path d="m328.5 192c.05 0 .02 0 0 0z" fill="#333"></path><path d="m327.21 198.16c0 .14.15.16.14 0s-.09.01-.14 0z" fill="#333"></path><path d="m330.61 198.23c.08-.15-.21-.2-.15 0s.1-.02.15 0z" fill="#333"></path><path d="m331.76 197.45c-.1.15.05.44.26.31s-.02-.46-.26-.31z" fill="#333"></path><path d="m331 198.07c-.06-.06-.14 0-.1.1s.15-.02.1-.1z" fill="#333"></path><path d="m328.4 200.26c.08.06.11 0 .18 0 .11-.26-.31-.26-.18 0z" fill="#333"></path><path d="m324.24 193.29c-.18 0 0 .06 0 .1z" fill="#333"></path><path d="m324.44 194.43c.24-.19-.13-.63-.32-.79.07.24-.12.67.32.79z" fill="#333"></path><path d="m331.1 199.2c-.13-.09-.17.13 0 .13s.07-.08 0-.13z" fill="#333"></path><path d="m329.34 200.83a.09.09 0 0 0 -.17 0c.03.08.14.11.17 0z" fill="#333"></path><path d="m330.25 200.53c.16 0 .11-.22 0-.13s-.02.08 0 .13z" fill="#333"></path><path d="m329.55 201.2c.19 0 0-.17 0-.27-.27-.07-.06.17 0 .27z" fill="#333"></path><path d="m325.82 195.54c-.54-.46-.26 1 .28.86.19-.18-.2-1.16-.28-.86z" fill="#333"></path><path d="m324.43 196.56c.06.1.12.45.32.28s-.42-.84-.32-.28z" fill="#333"></path><path d="m331.66 215.61c.25-.31 0-.91-.24-1.17-.08.37-.13.95.24 1.17z" fill="#333"></path><path d="m324.77 197.42v.08c.06-.03.05-.04 0-.08z" fill="#333"></path><path d="m324.7 197.94s.05 0 0 0z" fill="#333"></path><path d="m324.88 198.4c.53.24-.12-.86-.1-.42-.11.02 0 .32.1.42z" fill="#333"></path><path d="m325.24 199.26c0-.33-.29-.39-.45-.51 0 .25.29.95.45.51z" fill="#333"></path><path d="m321.59 202.78c0-.22-.22-.3-.34-.42.03.11.15.64.34.42z" fill="#333"></path><path d="m336.83 195.85c.06.34-.07 1.38.5 1.26.21-.48-.4-.86-.5-1.26z" fill="#333"></path><path d="m326 205.19c.37.2.22-.47-.06-.39a.41.41 0 0 0 .06.39z" fill="#333"></path><path d="m325.22 203.12c-.09-.06 0 0 0 .06z" fill="#333"></path><path d="m327.15 207.63c.87.37-.34-1.56-.26-1.18a2.12 2.12 0 0 0 .26 1.18z" fill="#333"></path><path d="m335.76 199.63v.12c.09-.01.01-.09 0-.12z" fill="#333"></path><path d="m335.38 200.27c0-.14-.07-.05-.16-.11.13.04.13.29.16.11z" fill="#333"></path><path d="m335.29 200.42c.08 0 0-.07-.06-.09s.02.09.06.09z" fill="#333"></path><path d="m336.09 200.2c0 .06.05.06.09.08z" fill="#333"></path><path d="m330.32 205c-.09.17-.06 1 .33.72.09-.34-.26-.51-.33-.72z" fill="#333"></path><path d="m327.16 209.37c.15-.21-.12-.45-.28-.28.01.13.12.4.28.28z" fill="#333"></path><path d="m333.78 204.62c.12-.14-.08-.5-.28-.39s.07.5.28.39z" fill="#333"></path><path d="m326.82 209.69c.05-.14 0 0-.08 0s.06.06.08 0z" fill="#333"></path><path d="m326.72 209.61s0-.05 0-.07 0 .04 0 .07z" fill="#333"></path><path d="m326.74 209.67a.07.07 0 0 1 0-.06.07.07 0 0 0 0 .06z" fill="#333"></path><path d="m338.71 202.53a.31.31 0 0 0 0-.31c-.33-.14-.34.58 0 .31z" fill="#333"></path><path d="m336.7 203.51c-.25 0-.17.52 0 .89.66.25.12-.76 0-.89z" fill="#333"></path><path d="m332.85 205.72c0 .06 0 .14.06.08s-.04-.06-.06-.08z" fill="#333"></path><path d="m333 205.83c-.41.34-.09 0-.3 0-.04.44.78.66.3 0z" fill="#333"></path><path d="m324.23 212.06c.4.13 0-.32-.15-.35.14.06.01.29.15.35z" fill="#333"></path><path d="m330.79 222.93c-1-.4-.34 1.29.33 1.57-.21-.61-.12-.98-.33-1.57z" fill="#333"></path><path d="m327.22 211.33c.45-.51 0-1 0-.55-.22.01-.41.55 0 .55z" fill="#333"></path><path d="m336.44 205.37c-.18 0-.14.35.05.42s.08-.33-.05-.42z" fill="#333"></path><path d="m326.64 212.59c-.11-.05 0 .33.16.21s-.12-.36-.16-.21z" fill="#333"></path><path d="m327.5 214.25c0 .19 0 .48.3.49a.29.29 0 0 0 -.3-.49z" fill="#333"></path><path d="m324.43 215.65c0 .14-.23.09 0 .42.41.34.22-.25 0-.42z" fill="#333"></path><path d="m337.88 207.26c-.26.08-.3.27-.16.57.44.39.55-.48.16-.57z" fill="#333"></path><path d="m334.93 208.83c.07 0 0-.07 0-.08s.07.05 0 .08z" fill="#333"></path><path d="m326.67 215.08c-.13.21-.16.67.28.57.2-.31-.1-.53-.28-.57z" fill="#333"></path><path d="m335 208.93c-.06 0-.09-.05-.06 0s.06 0 .06 0z" fill="#333"></path><path d="m335 209.08s0-.11 0-.11 0 .09 0 .11z" fill="#333"></path><path d="m335 208.71c0 .11.25.4 0 .37.24.36.25-.25 0-.37z" fill="#333"></path><path d="m334.45 212.86c-.05 0-.06 0-.06.08s.1-.03.06-.08z" fill="#333"></path><path d="m329.48 216.41c.12.09.08 0 .09-.09s-.1.12-.09.09z" fill="#333"></path><path d="m335.8 215.19c-.09-.06-.09.09 0 0z" fill="#333"></path><path d="m335.74 215.38c.08-.23-.11.21.14.3.23-.14-.02-.22-.14-.3z" fill="#333"></path><path d="m335.79 215.34c.07.03.03.01 0 0z" fill="#333"></path><path d="m335.81 215.28c.06.06.07 0 0 0z" fill="#333"></path><path d="m335.87 215.33.05.06a.13.13 0 0 0 -.05-.06z" fill="#333"></path><path d="m335.92 215.39s0 0 0 0z" fill="#333"></path><path d="m330.53 220.37c-.08.09-.26.36 0 .27-.13.62.55.1 0-.27z" fill="#333"></path><path d="m334.43 217.6c-.16.13-.16.56.18.52.17-.25-.06-.38-.18-.52z" fill="#333"></path><path d="m329.83 219.88c-.27 0-.17.22.06.14s-.26-.32-.06-.14z" fill="#333"></path><path d="m335.49 218.25c-.32-.16 0 .06-.1.07.38.37-.13-.75.1-.07z" fill="#333"></path><path d="m335.14 219.87c0-.51-.29 0 .09.12.03-.15-.1-.4-.09-.12z" fill="#333"></path><path d="m334.77 220.92c-.19-.1-.28.63 0 .88.54 0 .59-1.1 0-.88z" fill="#333"></path><path d="m333.33 222.26s0-.09 0-.06z" fill="#333"></path><path d="m334.21 223.31c.09.06.12-.07 0-.1s.04.12 0 .1z" fill="#333"></path><path d="m311.63 227.77v-.08s-.02.16 0 .08z" fill="#333"></path><path d="m311.65 228v-.11c-.06-.02-.03.03 0 .11z" fill="#333"></path><path d="m331.15 221.56c-.06.24.27.31.34.06s-.21-.2-.34-.06z" fill="#333"></path><path d="m331.85 221.42c0 .14.23.14.24 0s-.22-.11-.24 0z" fill="#333"></path><path d="m311.31 203.22a.1.1 0 0 0 -.13-.12c-.06.1.04.19.13.12z" fill="#333"></path><path d="m320.87 217.22c-.05 0 0 .1 0 .07z" fill="#333"></path><path d="m311.78 203.35s0 0-.09-.06.09.15.09.06z" fill="#333"></path><path d="m321 217.87c-.08.1-.09.45.1.34s-.1-.21-.1-.34z" fill="#333"></path><path d="m311.72 204.64a.17.17 0 0 0 -.17-.17c-.16.14.05.38.17.17z" fill="#333"></path><path d="m315.24 197.71c.38.45.13-.35-.11-.44-.05-.02.01.27.11.44z" fill="#333"></path><path d="m315.64 198.82c-.1-.15-.24-.33-.2 0s.3.32.2 0z" fill="#333"></path><path d="m316.39 199.25a.55.55 0 0 0 -.22-.39c.06.14.05.41.22.39z" fill="#333"></path><path d="m316.67 199v.07s.01-.01 0-.07z" fill="#333"></path><path d="m319.59 202.5v.06s.03-.03 0-.06z" fill="#333"></path><path d="m318.07 208.05c0 .12.13.15.13 0s-.08.01-.13 0z" fill="#333"></path><path d="m321.16 208.24c.07-.13-.19-.18-.14 0s.09-.02.14 0z" fill="#333"></path><path d="m322.45 207.87c.24-.12 0-.41-.21-.29s.02.42.21.29z" fill="#333"></path><path d="m321.51 208.18s0-.05 0-.07-.15.18 0 .07z" fill="#333"></path><path d="m319.23 210c.1-.21-.28-.21-.17 0s.1 0 .17 0z" fill="#333"></path><path d="m315.65 203.48c-.16 0 0 .05 0 .09z" fill="#333"></path><path d="m315.77 204.53c.23-.16-.08-.59-.24-.74.05.21-.18.6.24.74z" fill="#333"></path><path d="m321.56 209.11c-.11-.07-.17.11-.05.12s.1-.06.05-.12z" fill="#333"></path><path d="m319.88 210.53a.08.08 0 0 0 -.15 0c.02.06.13.09.15 0z" fill="#333"></path><path d="m320.83 210.19c-.05 0-.07-.09-.12 0s.12.16.12 0z" fill="#333"></path><path d="m320.05 210.86c.18 0 0-.15 0-.24-.22-.07-.05.15 0 .24z" fill="#333"></path><path d="m316.82 206.25c.68.75.32-.94.13-.64-.41-.32-.24.39-.13.64z" fill="#333"></path><path d="m315.63 206.46c.06.09.09.42.28.27s-.34-.73-.28-.27z" fill="#333"></path><path d="m322.21 223.79c.2-.31-.09-.81-.34-1-.04.3-.01.83.34 1z" fill="#333"></path><path d="m315.9 207.33c.06 0 .05 0 0-.07z" fill="#333"></path><path d="m315.89 207.76c-.1 0 0 .3.07.39.46.25-.07-.78-.07-.39z" fill="#333"></path><path d="m315.82 207.73s0 0 0 0z" fill="#333"></path><path d="m316.23 209c0-.29-.24-.37-.38-.48-.01.13.21.83.38.48z" fill="#333"></path><path d="m312.74 212c0-.2-.19-.28-.3-.4.02.09.13.61.3.4z" fill="#333"></path><path d="m316.75 214.39c.33.19.19-.42-.06-.36a.35.35 0 0 0 .06.36z" fill="#333"></path><path d="m316 212.45.06.07s-.01-.07-.06-.07z" fill="#333"></path><path d="m317.73 216.65c.57.27.18-.7 0-.41-.04-.24-.13.31 0 .41z" fill="#333"></path><path d="m325.73 209.57v.1c.07-.01.01-.08 0-.1z" fill="#333"></path><path d="m325.29 210c-.18-.16-.1 0-.11.13.04-.22.01-.13.11-.13z" fill="#333"></path><path d="m325.29 210c-.05 0-.08.05 0 0 .05.31.13.1 0 0z" fill="#333"></path><path d="m325.31 210.22s-.06 0-.09-.05.04.12.09.05z" fill="#333"></path><path d="m325.32 210.21s0 0 0 0z" fill="#333"></path><path d="m326 210.06c0 .05.05.05.08.06z" fill="#333"></path><path d="m320.93 214.89c.06-.23-.21-.54-.32-.62.01.21-.07.84.32.62z" fill="#333"></path><path d="m317.55 218c-.1.07 0 .43.21.31s-.04-.43-.21-.31z" fill="#333"></path><path d="m323.77 213.93c.11-.13-.06-.45-.24-.35s.05.42.24.35z" fill="#333"></path><path d="m328 212c.12.2.36-.11.21-.25s-.21.16-.21.25z" fill="#333"></path><path d="m326.46 213c-.16-.43-.27.36 0 .64.44.21.2-.47 0-.64z" fill="#333"></path><path d="m322.92 215s0 0 0 0z" fill="#333"></path><path d="m322.91 214.9v.1c.09 0 .03 0 0-.1z" fill="#333"></path><path d="m323.15 215.39c.3-.6-.5-.11-.24-.36-.16-.16-.08.42.24.36z" fill="#333"></path><path d="m315.16 220.79c.37.13 0-.31-.16-.33.13.06 0 .25.16.33z" fill="#333"></path><path d="m317.63 219.82a1 1 0 0 0 0 .15c.37.47.37-.54 0-.15z" fill="#333"></path><path d="m326.31 214.79c0-.18-.1-.32-.25-.26s.09.47.25.26z" fill="#333"></path><path d="m317.55 221.47c.08-.2-.11-.26-.2-.2s.06.28.2.2z" fill="#333"></path><path d="m318.3 222.81c0 .19 0 .47.31.45a.28.28 0 0 0 -.31-.45z" fill="#333"></path><path d="m315.62 224.33c-.25-.06 0 .58.26.43.06-.15-.29-.46-.26-.43z" fill="#333"></path><path d="m327.31 216.05c-.07.17-.15.27 0 .48.48.31.43-.63 0-.48z" fill="#333"></path><path d="m324.82 217.5s0 0 0-.05.03.16 0 .05z" fill="#333"></path><path d="m317.76 223.72c-.3-.27-.31.66.15.46.15-.12-.07-.54-.15-.46z" fill="#333"></path><path d="m324.85 217.76s0-.09 0-.09a.46.46 0 0 0 0 .09z" fill="#333"></path><path d="m325 217.85c.15-.14-.16-.55-.11-.29.25.14-.2.28.11.29z" fill="#333"></path><path d="m324.88 217.63c-.06 0-.09 0-.06 0s.02.01.06 0z" fill="#333"></path><path d="m324.46 221.16s.09 0 .06-.07-.06.01-.06.07z" fill="#333"></path><path d="m325.91 223s-.08 0-.05 0z" fill="#333"></path><path d="m326 223.08s0 0 0 0a.08.08 0 0 0 0 0z" fill="#333"></path><path d="m325.92 223.09c-.07-.05-.06 0-.05 0s.02-.02.05 0z" fill="#333"></path><path d="m325.92 223c.07 0 .08 0 0 0z" fill="#333"></path><path d="m326.05 223.17s-.05 0-.08 0c-.32-.12.27.51.08 0z" fill="#333"></path><path d="m326.05 223.15s0 0 0 0z" fill="#333"></path><path d="m325.87 223.14s0 0 0 0z" fill="#333"></path><path d="m324.92 225.25c-.13.14-.07.51.23.43.12-.24-.15-.32-.23-.43z" fill="#333"></path><path d="m321.11 228c-.24.07-.11.23.09.13.04-.2-.3-.31-.09-.13z" fill="#333"></path><path d="m326 225.65c-.25 0-.11-.05 0 .09s-.18-.51 0-.09z" fill="#333"></path><path d="m325.89 227.11c-.12-.05-.12-.43-.09 0 .28.46.1-.41.09 0z" fill="#333"></path><rect fill="#cfd0d1" height="41.48" rx="7.51" width="15.03" x="190.48" y="52.1"></rect><g fill="#333"><path d="m69.3 149.29c.07 0 .09.05.18 0a.34.34 0 0 1 -.13.35.18.18 0 0 1 -.24-.12.37.37 0 0 1 .19-.23z"></path><path d="m70 148.63v.2a.15.15 0 0 1 -.19 0c-.13-.13.05-.38.19-.2z"></path><path d="m39.9 136.47c-.07.05-.21 0-.19-.09v-.09c.13-.02.29.09.19.18z"></path><path d="m55.46 152.27.02-.03.07.06-.02.02z"></path><path d="m40.5 136.72s0 0 0 .06-.11-.11-.05-.14.04.02.05.08z"></path><path d="m56.26 153.28-.07.09a.38.38 0 0 1 -.24-.43c.05.06.32.16.31.34z"></path><path d="m40.31 138.46c-.08.1-.21.17-.31 0a.25.25 0 0 1 .09-.25c.11-.01.21.13.22.25z"></path><path d="m46.41 129.94c.14.17.32.42.18.66-.12 0-.15-.09-.19-.18s0-.35 0-.5-.04.08.01.02z"></path><path d="m74.92 159.72s0-.07-.06-.07l.15-.08c0-.25.24-.08.28-.22a.6.6 0 0 1 .48.33c0 .24-.06.22-.07.45-.16 0-.1.43-.36.26-.17.11-.22-.12-.4-.07.11 0 0-.13-.06-.19h-.09c.13-.08.06-.2 0-.3.06 0 .08-.09.13-.11z"></path><path d="m46.49 131.63v.21s-.16-.18-.19-.28v-.19a.54.54 0 0 1 .19.26z"></path><path d="m47.31 132.05s0 .06 0 .09c-.15-.12-.08-.3-.12-.45-0 .09.14.22.12.36z"></path><path d="m47.22 132s-.09 0 0-.1z"></path><path d="m47.73 132v-.07s.03.07 0 .07z"></path><path d="m50.71 135.51s0 0 0 .05v-.07s-.01.02 0 .02z"></path><path d="m49 142.29a.13.13 0 0 1 -.08.13c-.08 0-.09 0-.1-.12s.18-.11.18-.01z"></path><path d="m52.7 141.43a.12.12 0 0 1 0 .13c-.07 0-.13.06-.18 0s.12-.14.18-.13z"></path><path d="m54.35 140.35c0 .09.06.23-.07.3s-.21.1-.29 0 0-.17 0-.24c.11-.11.23-.06.36-.06z"></path><path d="m53.14 141.28s0 .05 0 .08a.16.16 0 0 1 -.14 0s.07-.12.14-.08z"></path><path d="m50.64 144.14v.16s-.11.11-.21.06.07-.3.21-.22z"></path><path d="m45.6 137.17-.12-.11h.08z"></path><path d="m45.75 138.06c0 .11.06.25-.08.28s-.31-.35-.38-.51.06-.06.12-.05c-.15-.14.12-.16 0-.3a1.08 1.08 0 0 1 .34.58z"></path><path d="m53.38 142.41c.08 0 0 .1 0 .15a.08.08 0 0 1 -.1-.11.16.16 0 0 1 .1-.04z"></path><path d="m51.63 144.71c0 .06-.06.08-.09.11s-.07-.06-.11-.08.17-.13.2-.03z"></path><path d="m52.72 144a.12.12 0 0 1 -.11.14c0-.05-.1-.07 0-.14s.05 0 .11 0z"></path><path d="m51.9 144.75c0 .11.25.2 0 .29 0-.1-.24-.09-.19-.25.07-.01.13-.06.19-.04z"></path><path d="m47 139.42a.19.19 0 0 0 .19.12s0-.13.08-.15c.12.36.45.69.25 1.08a.26.26 0 0 1 -.25 0s-.13-.16-.22-.17c.05-.2-.28-.28-.24-.51h.09a2 2 0 0 1 0-.49z"></path><path d="m45.89 141.09c-.23.21-.3-.19-.38-.31v-.3a.64.64 0 0 1 .38.61z"></path><path d="m45.78 140.93h-.14l.07-.15-.05.14z"></path><path d="m61.25 158.76v.14c-.42.08-.79-.37-1-.67l-.12-.24a1.65 1.65 0 0 1 1.12.77z"></path><path d="m45.93 141.86v-.1l.07.05z"></path><path d="m46.34 142.73a.56.56 0 0 1 0 .18c-.06.06-.17 0-.22 0a.65.65 0 0 1 -.2-.51h.09c.08 0 0-.1 0-.15.09.11.31.27.33.48z"></path><path d="m46.1 142.66v-.08c-.11 0 0 0 0-.06-.03.13.05-.02 0 .14z"></path><path d="m46.23 143.4a.63.63 0 0 1 .38.47c0 .09 0 .24-.14.19a.83.83 0 0 1 -.37-.39c.08-.12 0-.23-.07-.34s.13.24.2.07z"></path><path d="m46.36 143.58-.01.04-.02-.02z"></path><path d="m42.78 148.73c0 .07 0 .07-.06.1-.19 0-.3-.24-.38-.38s-.14-.11-.11-.23c.18.16.46.23.55.51z"></path><path d="m59.94 138c-.16.21-.26 0-.37 0s0-.53-.15-.73v-.16c.11.3.74.37.52.89z"></path><path d="m49.23 150.54s0 .08 0 .13-.11.15-.24.08l-.25-.25s0 0 .06 0v-.17c.2-.12.31.09.43.21z"></path><path d="m47.39 148.56-.1-.07.05.01z"></path><path d="m51.11 152.7h.07c0-.05 0-.06-.07-.09.19 0 .31.09.5.16s.13.26 0 .4-.2.05-.3.06-.12-.28-.29-.3l-.05-.31s.16.03.14.08z"></path><path d="m58.5 141.11-.03-.1.06.07z"></path><path d="m58 141.66h-.1v.2l-.06-.21z"></path><path d="m58.05 141.73c.05 0 .08 0 .11.06s0 .13-.08.17 0 0-.08-.05.07 0 .13 0a.14.14 0 0 0 -.06-.17s0 0 0 .05h-.08.08z"></path><path d="m59 141.41h-.1c0 .03.1.01.1 0z"></path><path d="m53.82 148.83c.16.23.59.25.61.62a.21.21 0 0 1 -.34.08c-.21-.16-.18-.45-.31-.66z"></path><path d="m52.1 154.87c.1.1.25.19.2.34s-.18 0-.27 0-.14-.16-.21-.24.08-.05 0-.09c.18.01.12-.03.28-.01z"></path><path d="m57.33 146.52a.29.29 0 0 1 .08.29.16.16 0 0 1 -.23 0c-.09-.08-.2-.17-.17-.3s.2 0 .32.01z"></path><path d="m52 155.76c.11 0 0-.13.07-.12s0 .09 0 .1a.19.19 0 0 1 -.21-.17s.05.16.14.19z"></path><path d="m61.82 141.86c.1 0 .1.15.09.26s-.2.21-.26.13-.02-.39.17-.39z"></path><path d="m60.1 144.23a.09.09 0 0 0 0-.08c.11-.07.09.06.08.1.21.11.5.18.46.54a.33.33 0 0 1 -.29.16l-.29-.28a1.41 1.41 0 0 1 -.12-.51s.06.08.16.07z"></path><path d="m56.9 148.43s0 .08-.06.12 0 0 0 0 0 .16.13.1c-.14-.15.14-.17.1-.29.11.06.37.18.25.42a.4.4 0 0 1 -.25.07.88.88 0 0 0 -.28-.17 0 0 0 0 0 .06 0l-.11-.12s0-.09.12-.07l-.06-.12s.05.08.1.06z"></path><path d="m50.91 159.71c.05.14-.12.14-.2.13s-.23-.34-.44-.35c.22.03.5.02.64.22z"></path><path d="m57 148.56s-.07 0-.06 0z"></path><path d="m57.12 148.54s0 .1 0 .15h-.07s0 0 0 .07v-.14c.06 0 .11 0 .12-.1h-.09s.01.03.04.02z"></path><path d="m67.48 166.17-.07-.15c0-.05.42.35.4 0 .28.26.77.35.84.74 0 0 .09.06.13 0l-.09-.13c.24.05.56 0 .74.21v.2c-.47.25-.81-.57-1.28-.06a1.18 1.18 0 0 1 -.82-.27h-.3c.22.05.11-.18.19-.24l-.17-.07h.16l-.13-.2c.07-.03.26.07.4-.03z"></path><path d="m53.4 157c.07.13.27.19.18.38s-.22 0-.35 0 0-.15-.14-.18.17-.3.31-.2z"></path><path d="m60.39 146a.3.3 0 0 1 .27.23c0 .05 0 .14-.09.13s-.23-.14-.29-.25.07-.11.11-.11z"></path><path d="m60.46 146.15-.09-.07.02-.02z"></path><path d="m53.81 159.19c-.09-.08.09-.06.07-.12s.28.1.27.25-.15 0-.25.05l-.15-.17z"></path><path d="m53.87 159.19.1.08-.1.02.03-.01-.07-.11.08-.02z"></path><path d="m56.19 160.36c.12 0 .34 0 .42.13a.46.46 0 0 1 .12.33c-.19.2-.42 0-.62-.07 0-.12-.09-.18-.13-.26a.26.26 0 0 0 .21-.13z"></path><path d="m54 164.17s0-.08 0-.11v-.06c.24.14.58.13.73.41 0 .12-.24.17-.38.09a1.43 1.43 0 0 1 -.45-.39z"></path><path d="m62.42 146.79a.34.34 0 0 1 .38.16.29.29 0 0 1 0 .32.33.33 0 0 1 -.31.14c-.1 0-.1-.14-.22-.13.22-.15-.16-.21.06-.29v-.09c.01.02.09-.04.09-.11z"></path><path d="m60.18 150.1v-.12s-.02.12 0 .12z"></path><path d="m56.08 161.93.06-.09c.09.17.56.23.49.54s-.31.11-.49.09c0-.12-.14-.08-.21-.13s0 0 0 0c-.14-.1 0-.11-.1-.23l-.08-.12c.25.01.19-.2.33-.06z"></path><path d="m60.59 150.37c-.05.09-.15 0-.18 0l-.17-.15h.1c-.12.09 0 .14 0 .16s.1 0 .12-.08-.13-.14-.18-.17l-.09-.11c.21.06.46.1.4.35z"></path><path d="m61.93 154.24s0 0 0 0l-.05.07v-.08s.04.03.05.01z"></path><path d="m59.94 161.26s0 0 0 .06h-.11s.07-.08 0-.15.09.06.11.09z"></path><path d="m64.66 155.21v.07a0 0 0 1 1 0-.07z"></path><path d="m64.76 155.33v.08h.14c.05 0 .05-.07.08-.09s-.14-.05-.23 0c.14 0 .24.06.36.15a.19.19 0 0 1 0 .15c-.19.05-.3-.07-.4-.2z"></path><path d="m64.85 155.5-.01-.03.08-.03z"></path><path d="m65.14 164.28c.13.11.06.25 0 .32s-.2 0-.3 0 .1-.18 0-.18c.08.1-.11.09-.2.07h.11c0-.1-.13-.09-.19-.18h.11l-.07-.12a1.21 1.21 0 0 1 .54.09z"></path><path d="m65.42 158.36c.19.07.4 0 .43.29s-.21.14-.31.13l-.25-.11v-.16-.09c.05.02.16 0 .13-.06z"></path><path d="m65.65 158.52c0-.06-.09-.06-.12-.08a.17.17 0 0 1 .12 0c.06.08-.05.16-.07.22s-.18-.1-.24-.08c.18.02.12-.17.31-.06z"></path><path d="m65.6 158.6s0 0 0 0h-.06v-.1z"></path><path d="m63.61 164.4s0 .09 0 .14-.25 0-.38-.09c.09 0 .11.07.21 0v-.13c-.06 0-.14 0-.16 0a.37.37 0 0 1 .33.08z"></path><path d="m66.8 158v.1h-.16s0 0 0 0v-.1l-.15.07c0-.07-.06-.06-.08-.08h.07l.1-.08-.24-.12c.21.1.37.08.46.21z"></path><path d="m78.07 171.77c.1-.18-.17-.1-.22-.19s.18.11.26 0a.27.27 0 0 0 -.28-.11c.16-.08.48.1.6-.12-.06 0-.11-.12 0-.15.23 0 .33-.14.55-.14l-.08-.07a3.05 3.05 0 0 1 .58.07c-.11-.22.33 0 .32-.16.09.15.23.24.32.16.21.15.47.4.44.66s-.06.16-.12.34c0 .06-.12.11 0 .18a.36.36 0 0 0 -.28.13c0 .12-.15.22-.25.17s0 .06 0 .08a.2.2 0 0 0 -.17 0 2.42 2.42 0 0 0 -.89.17h.1v-.1l-.26.16c.05-.1.24-.17.17-.29s-.19 0-.28 0h.1c-.08-.11-.26 0-.38-.09.19-.14.07-.26-.06-.36l-.32-.06a.34.34 0 0 0 .15-.28z"></path><path d="m67.6 159.38s0 0-.06.06.09.1.14.15l.07-.06c0-.1-.11 0-.1-.11s.18.08.27.12-.19.11-.27.07-.14-.14-.21-.21.12-.08.16-.02z"></path><path d="m69.14 160.51c.1.1.16.31.09.37s-.08.08-.11.11.23.26.07.38c-.49 0-.73-.45-.89-.66h.11l-.08-.1a.79.79 0 0 1 .81-.1z"></path><path d="m88.77 165.44h-.06c.09 0 .13-.11.2-.17s-.06-.07-.12-.06c0-.05.2 0 .14-.15.26 0 .3-.2.53-.17.19-.23.43 0 .59 0 0 .09.1.13.15.19v.49a.84.84 0 0 0 -.22.26.69.69 0 0 1 .36.33c.12.27-.18.31-.25.5a.41.41 0 0 0 -.37.07l-.06.05c.1-.22-.25-.14-.38-.19h-.09c0-.05.15 0 .15-.12h-.21s.09 0 .12-.06l-.06-.08s.06 0 .08-.06 0-.06-.06-.09l.1-.06c-.08-.07-.16-.08-.12-.2h-.29l.08-.06a.12.12 0 0 0 -.14-.06l.06-.08h-.2c-.05-.11.23-.15.07-.28z"></path><path d="m71.86 168.49v-.08c.2 0 .43-.28.76-.17s.29.16.47.3c0 .31-.15.43-.41.57-.14-.1-.46 0-.63-.08l.11-.06-.38-.23c-.01-.04-0-.18.08-.25z"></path><path d="m68.54 163.04.01-.02.07.03v.02z"></path><path d="m70.36 162.88s0 0-.06 0 0-.16-.07-.11.15.03.13.11z"></path><path d="m71.29 163.33s.16 0 .13-.11c.36-.09.28.5.67.27.11.21.38.21.36.47s-.26.25-.44.25h-.27s0-.08-.07-.08h-.11c.13-.13-.14-.1-.17-.22 0-.18-.18-.15-.2-.31l-.08-.06c.02-.17.12-.16.18-.21z"></path><path d="m78.53 165.71c-.08-.05.15 0 0-.12.13 0 .14-.12.23-.13.19.11.21-.27.5 0 .17-.14.22.18.36.15a.47.47 0 0 1 0 .58c-.15.17-.09 0-.29.22l-.11.06c0-.2-.19.18-.26 0-.1 0-.17 0-.27 0s0 0 0-.07-.14-.05-.2-.07v-.08l-.13-.09s0 0 .05-.07h-.09c.09-.28.35-.23.21-.38z"></path><path d="m78.56 167.06-.21-.02h.12z"></path><path d="m83 171.79v-.09c.1.05.09-.07.14-.1s.45 0 .49.18l-.08.26c-.09-.06-.2.05-.29.08s-.17-.05-.16-.06a.53.53 0 0 1 -.24-.17c.14-0 .14-.04.14-.1z"></path><path d="m83.04 171.94v-.03l.13.01v.03z"></path><path d="m87.22 169.17c0-.09 0-.06 0-.17s.28-.06.36 0a.26.26 0 0 1 0 .29c-.12.08-.09 0-.22.08s-.23-.1-.21-.23z"></path><path d="m88 168.77c0 .06 0 .09-.06.12s-.13 0-.09-.12z"></path><path d="m84.64 173.39a.33.33 0 0 1 .3-.07c0 .06.12.11 0 .17a.47.47 0 0 1 -.29.07c0-.05-.1-.1 0-.14z"></path><path d="m84.8 173.46c.07 0-.15.12-.14 0s.11-.03.14 0z"></path><path d="m88.93 171.15c.09-.06.09-.1 0-.17h.13s0-.19.18-.15-.06-.13-.07-.2c.16 0 .15.14.31.09.15-.29.42.06.57-.07s.18 0 .19.09.06-.05.09-.07.2.32.32.3.08.13.16.17a.12.12 0 0 0 .07.14c-.2.12.24.17 0 .25 0 .09.1.12.12.14s-.14 0-.22 0c.26.18-.18.2-.08.43 0-.06-.14 0-.16.07v.06c-.15-.11-.24.12-.35.12s-.32-.2-.48 0c-.12.06-.15-.33-.36-.15l-.09.09c-.08-.11.17-.13 0-.23s-.1.09-.19.11.25-.26 0-.31l-.23.06c0-.07.12-.14.13-.23s-.22.05-.19-.05.17 0 .12-.15l-.22-.11c.18.04.09-.2.25-.23z"></path><path d="m92.5 166.64c0 .05.09.08.08.16s-.21 0-.25 0c.11-.1 0-.16.17-.16z"></path><path d="m93.43 161.64s.08 0 .12.05-.07.16-.12.2 0 0-.12-.09.05-.14.12-.16z"></path><path d="m96.16 167.62a.75.75 0 0 1 0-.24.71.71 0 0 1 .48-.18c.22.14.36.15.36.38.12 0-.12.16.06.2-.07 0-.25.08-.12.19 0-.08-.19 0-.23 0s-.07-.07-.13 0-.14 0-.23 0 0-.07 0-.1-.1 0-.15 0h.06l-.14-.13.05-.07h-.09z"></path><path d="m96.87 168.3c0-.05.24 0 .19-.17 0 0 .08 0 .1-.08v-.05c0 .06.09 0 .13 0s0-.07 0-.12.09 0 .14.07l.1-.07s.06 0 .08.07c.16-.14.26.09.41.1s0 .25.26.24c-.19.25.16.35 0 .65 0 0-.07 0-.1 0s0 .15 0 .2-.1 0-.14-.06c0 .23-.32.12-.41.21 0-.11-.14 0-.19-.06v.07-.12c-.06 0-.14 0-.18.08-.09-.12 0-.32-.23-.25.08 0 0-.12 0-.18-.34-.08.04-.39-.16-.53z"></path><path d="m83.55 164.34c.13 0 .3 0 .35.18s-.1.45-.31.32h-.06l-.15-.15c.1-.1-.1-.19 0-.29s.19.04.17-.06z"></path><path d="m84.22 164.75.17-.05z"></path><path d="m84.74 164.62-.23.07v-.04l-.06.03.01-.06z"></path><path d="m85.06 164.38s0 0-.06 0a.43.43 0 0 0 .12-.05l-.14-.08c.12 0 .17-.09.24-.18a.74.74 0 0 1 .66-.1c.13.11.26.3.46.25s-.13.07 0 .14.12.28.18.41c-.18.1-.13.21-.19.37s-.2 0-.15.17l-.07-.1c-.11.06 0 .18-.08.26l-.13-.12c-.08.12-.3.08-.4.12-.12-.17-.31 0-.41.13-.05-.12.21-.27 0-.43 0 0 0 .07-.09.05s.19-.2 0-.31l-.29.21c.2-.29.44-.4.35-.74z"></path><path d="m84.84 164.59.12-.05z"></path><path d="m85.97 165.84h-.03l.01-.1z"></path><path d="m77.12 142.38.1.02h-.08z"></path><path d="m76.94 142.36.09-.02.01.09z"></path><path d="m79.51 164.91c-.05.06-.12 0-.19.1a.22.22 0 0 1 -.12-.29.25.25 0 0 1 .3-.07.21.21 0 0 1 .01.26z"></path><path d="m79.36 165.7c-.09 0-.07-.09-.09-.15a.21.21 0 0 1 .18-.11c.12.05.12.31-.09.26z"></path><path d="m102.83 145c0-.05 0-.17.07-.16h.07c.03.07-.06.16-.14.16z"></path><path d="m86.6 154.17h.08v.03h-.08z" transform="matrix(.94765701 -.31929012 .31929012 .94765701 -44.69 35.73)"></path><path d="m102.65 145.46s0 0-.05 0 .08-.09.11 0-.01 0-.06 0z"></path><path d="m85.57 154.27v-.08a.33.33 0 0 1 .42 0c-.13.04-.29.17-.42.08z"></path><path d="m101.24 145.31c-.09-.08-.14-.18 0-.25a.21.21 0 0 1 .2.07c.01.1-.11.17-.2.18z"></path><path d="m108.89 149.71c-.17.15-.42.35-.66.27 0-.09.09-.14.18-.19s.34 0 .49-.13-.04.01-.01.05z"></path><path d="m69.12 160.53s0 0 .08 0l-.11.11c.13.17-.17.14-.16.26a.58.58 0 0 1 -.52-.09c-.09-.18 0-.19-.11-.36.15 0-.06-.36.22-.32.1-.13.23 0 .36-.07-.09 0 .06.09.12.12h.09c-.07.1 0 .16.12.22-.08.02-.06.1-.09.13z"></path><path d="m107.23 150.07c-.07 0-.15 0-.2 0s.17-.16.27-.21h.18a.72.72 0 0 1 -.25.21z"></path><path d="m106.8 150.84s-.06 0-.08 0c.12-.15.29-.11.44-.17a.64.64 0 0 1 -.36.17z"></path><path d="m106.85 150.75s.05-.09.1 0z"></path><path d="m106.85 151.19h.08s-.05.02-.08 0z"></path><path d="m103 154.08s0 0 0 0 0-.01 0 0z"></path><path d="m97 152.13a.12.12 0 0 1 -.1-.09c0-.06.06-.07.13-.06s.08.12-.03.15z"></path><path d="m96.72 155.33a.11.11 0 0 1 -.13 0c0-.05 0-.12 0-.14s.16.08.13.14z"></path><path d="m97.15 156.89c-.1 0-.25 0-.26-.1a.17.17 0 0 1 .11-.25c.09-.1.15 0 .23 0s-.03.24-.08.35z"></path><path d="m96.7 155.72s0 0-.08 0a.12.12 0 0 1 0-.13c.07-.01.15.08.08.13z"></path><path d="m95 153.11s-.09 0-.14 0-.06-.12 0-.19.22.08.14.19z"></path><path d="m102.11 149.7.1-.1-.01.07z"></path><path d="m101.29 149.81c-.1 0-.23 0-.23-.08s.34-.24.48-.3.05.05 0 .1c.15-.12.14.1.27 0a1.05 1.05 0 0 1 -.52.28z"></path><path d="m95.58 155.71c-.06.06-.08 0-.12-.05a.08.08 0 0 1 .13-.06s.01.07-.01.11z"></path><path d="m94.17 153.78s0-.07-.06-.1.07 0 .1-.07a.09.09 0 0 1 -.04.17z"></path><path d="m94.45 154.84a.09.09 0 0 1 -.08-.13s.09-.06.13 0-.03.08-.05.13z"></path><path d="m94.05 154c-.09 0-.26.15-.26-.05.1 0 .16-.17.28-.09s.02.08-.02.14z"></path><path d="m99.94 150.79c-.08 0-.14.06-.14.15s.11 0 .11.07c-.33.08-.69.32-1 .11a.22.22 0 0 1 0-.21.39.39 0 0 0 .19-.17c.16.06.29-.2.49-.15v.07a2.22 2.22 0 0 1 .44.06z"></path><path d="m98.64 149.72c-.14-.22.22-.23.32-.28h.26a.6.6 0 0 1 -.58.28z"></path><path d="m98.8 149.65.02-.12.12.07-.11-.06z"></path><path d="m79.39 154.62-.07-.08c.2-.3.66-.24 1-.2l.21.06a1.27 1.27 0 0 1 -1.14.22z"></path><path d="m97.99 149.66.08.01-.05.05z"></path><path d="m97.19 149.87a.56.56 0 0 1 -.15 0c0-.05 0-.13 0-.17a.63.63 0 0 1 .47-.09v.07c0 .07.09 0 .13 0a.58.58 0 0 1 -.45.19z"></path><path d="m97.3 149.69h.06c0-.09 0 0 .06 0-.11-.02 0 .06-.12 0z"></path><path d="m96.66 149.68a.58.58 0 0 1 -.46.23c-.07 0-.19 0-.12-.15a.68.68 0 0 1 .38-.23c.08.08.19 0 .29 0s-.22.07-.09.15z"></path><path d="m96.49 149.76-.03-.02.01-.01z"></path><path d="m93.15 145.88c-.06 0-.05 0-.07-.07s.23-.17.34-.2.1-.07.18 0c-.13.08-.24.27-.45.27z"></path><path d="m97 162.11c-.14-.18.13-.24.23-.33.31-.17.59.05.88 0h.18c-.46.04-.89.59-1.29.33z"></path><path d="m90.32 150.26s-.07 0-.1 0a.14.14 0 0 1 0-.2l.26-.1s0 0 0 .05h.13c.04.17-.16.2-.29.25z"></path><path d="m92.32 149.46.08-.06-.02.03z"></path><path d="m88.14 150.87v.06s0 0 .09 0c0 .15-.18.19-.3.31s-.22 0-.29-.13 0-.16.07-.24.23 0 .31-.09l.24.07s-.1.06-.12.02z"></path><path d="m94.54 160.26h.11l-.1.04z"></path><path d="m94.25 159.74s0-.1.08-.08h-.2.24z"></path><path d="m94.18 159.74s-.09.06-.11.08-.13 0-.14-.11.07 0 .1-.06-.06.06-.08.1a.21.21 0 0 0 .2 0s0 0 0 0l.08-.06v.08z"></path><path d="m94 160.6.08-.08s-.08.04-.08.08z"></path><path d="m90 154.28c-.25.05-.45.36-.74.25a.17.17 0 0 1 .08-.28c.21-.11.43 0 .64 0z"></path><path d="m86.26 150.69c-.1 0-.22.1-.31 0s0-.14.07-.2.16 0 .25 0 0 .08 0 .06.07.04-.01.14z"></path><path d="m90.24 157.77a.33.33 0 0 1 -.28 0 .15.15 0 0 1 .08-.2c.11 0 .24-.1.34 0s-.08.11-.14.2z"></path><path d="m85.71 150.23c0 .08.07.08.05.1s-.07 0-.08 0a.13.13 0 0 1 .19-.06s-.12-.08-.16-.04z"></path><path d="m91.83 162.85a.29.29 0 0 1 -.31 0c0-.09-.07-.22 0-.24s.48.07.31.24z"></path><path d="m90.7 160.71s0 0 .06 0-.1.05-.14 0c-.23.12-.48.32-.77.16a.22.22 0 0 1 0-.28l.42-.12a1.65 1.65 0 0 1 .54.09s-.09.1-.11.15z"></path><path d="m88.9 156.75c0-.05-.05-.06-.08-.09s0 0 0 0-.14 0-.15.05c.19 0 .07.17.19.19-.11.06-.34.2-.46 0a.26.26 0 0 1 .07-.21.78.78 0 0 0 .27-.14s0 0 0 0h.15s0 .07 0 .11h.11s-.1.05-.1.09z"></path><path d="m83.6 147.7c-.11 0 0-.15 0-.19s.28 0 .36-.13c-.1.13-.2.32-.36.32z"></path><path d="m88.74 156.76s0 0 0 0z"></path><path d="m88.69 156.86s-.07-.05-.1-.08v-.05s0 0 0-.06l.1.07v.12-.07s.01.05 0 .07z"></path><path d="m72 153 .11.08s-.41-.08-.25.17c-.28-.07-.63.06-.82-.2 0 0-.08 0-.09 0l.11.06c-.17.06-.36.22-.55.14s-.1-.1-.06-.15c.2-.37.73.09.82-.47a.8.8 0 0 1 .62-.12l.19-.11c-.15.06 0 .17 0 .25h.13l-.08.1.16.09c-.08-.01-.24.02-.29.16z"></path><path d="m84.31 150.6c-.1 0-.22.1-.31-.06s.1-.13.14-.23.11.05.17 0c.02.06.15.26 0 .29z"></path><path d="m89 160.29a.36.36 0 0 1 -.36.12s-.1-.06 0-.11.26-.13.39-.13c-.16.04-.03.08-.03.12z"></path><path d="m88.79 160.29.11-.04.01.01z"></path><path d="m82.8 149.84c.09 0 0 .09 0 .1s-.18.13-.27 0 0-.1.08-.18h.17z"></path><path d="m82.78 149.88-.09.03.03-.08-.01.02.1.02-.02.05z"></path><path d="m81.07 150.71c0 .08-.15.21-.28.18a.36.36 0 0 1 -.24-.1c0-.23.22-.23.32-.34 0 .09.14 0 .21.06a.22.22 0 0 0 -.01.2z"></path><path d="m79.86 147.32s0 0 .06.05c-.17.06-.3.27-.51.2s0-.23.1-.27a.78.78 0 0 1 .4 0z"></path><path d="m87 161.52a.48.48 0 0 1 -.4.21.26.26 0 0 1 -.25-.15c0-.12 0-.21.1-.28s.19 0 .25-.11c0 .23.28 0 .2.17h.1a.09.09 0 0 0 0 .16z"></path><path d="m85.79 158.46h-.06.11s-.04-.02-.05 0z"></path><path d="m80.22 149.79v.08c-.14 0-.38.2-.52 0s.08-.25.17-.34.1 0 .17-.05 0 0 0 .05.06.06.18.07h.11c-.14.08.03.17-.11.19z"></path><path d="m85.33 158.61c0-.07.08-.11.09-.14h.22v.08c0-.13-.12-.05-.15-.06s0 .08 0 .12.17 0 .23 0h.14c-.19.02-.37.16-.53-0z"></path><path d="m81.78 157.57s0 0 0 0v-.07h.08s-.09.05-.08.07z"></path><path d="m78.7 152.41s0 0 0 0v-.07s0 .09.08.11-.05-.04-.08-.04z"></path><path d="m79.36 158.68v-.07a0 0 0 1 1 0 .07z"></path><path d="m79.21 158.67-.09.09s0 .07 0 .1.12-.05.17-.11c-.08.1-.2.1-.34.12a.15.15 0 0 1 -.08-.1.36.36 0 0 1 .4-.1z"></path><path d="m79.05 158.62.03.01-.04.06z"></path><path d="m74.24 153.21c-.13 0-.15-.13-.12-.23s.1-.11.18-.14 0 .17.11.1c-.09 0 0-.12.09-.14l-.06.06c.07.06.12 0 .2 0l-.06.06.1.05c-.14.11-.25.24-.44.24z"></path><path d="m77 157.22c-.17.06-.29.18-.45 0s.07-.2.14-.24l.23-.06.1.07h.08c-.1.13-.1.21-.1.23z"></path><path d="m76.78 157.23s.09 0 .12 0-.05.05-.08.07 0-.13-.07-.17.18 0 .21-.08c-.14.06.04.15-.18.18z"></path><path d="m76.76 157.15s0 0 0 0l.07.06z"></path><path d="m75.08 152.4s0-.07 0-.11.16-.1.26-.12c-.05.05-.1 0-.13.09l.07.09s.07-.09.11 0-.21.09-.31.05z"></path><path d="m76.25 158.15v-.06l.1-.09s0 0 0 .05l.06-.12c0 .05.08 0 .11 0h-.07v.11l.23-.05c-.19.1-.3.19-.43.16z"></path><path d="m63.42 152.09c0 .16.14 0 .19.1s-.14 0-.17.07a.18.18 0 0 0 .21 0c-.09.09-.34 0-.38.22.05 0 .1.07.06.11s-.2.18-.34.22h.07a2.65 2.65 0 0 1 -.42.06c.12.15-.23 0-.19.18-.08-.1-.2-.14-.25-.07-.17-.08-.39-.24-.4-.45s0-.14 0-.29.07-.11 0-.15a.23.23 0 0 0 .2-.09c0-.09.07-.2.14-.18s0-.05 0-.07.09 0 .11-.06a1.18 1.18 0 0 0 .55-.31l-.06.05v.07l.13-.18c0 .09-.12.18-.05.26s.13 0 .19 0l-.06.06c.07.07.17-.07.27 0-.1.15 0 .22.11.28h.22a.25.25 0 0 0 -.13.17z"></path><path d="m75 157.66s0 0 0-.08-.11 0-.17 0v.08c.06.05.08-.06.13 0s-.17 0-.26 0 .08-.16.16-.17.17 0 .25 0-.11.18-.11.17z"></path><path d="m73.33 157.63c-.12 0-.26-.14-.23-.21s0-.1 0-.13-.27-.07-.21-.22c.33-.25.71 0 .92 0v.08h.1a.71.71 0 0 1 -.58.48z"></path><path d="m56.18 158.54c-.07 0-.1.09-.16.14s0 .06.1 0-.17 0-.12.12c-.21 0-.25.18-.45.15-.15.19-.35 0-.49 0 0-.07-.08-.1-.12-.16v-.4c.08 0 .12-.12.18-.21a.57.57 0 0 1 -.29-.28c-.09-.22.15-.25.21-.4.1.05.21 0 .3-.06-.09.18.19.11.3.15h.07s-.12 0-.11.1h.16s-.07 0-.09.06v.06s0 0-.06.05 0 0 .05.07l-.08.05c.06.06.13.07.1.16h.24l-.07.05a.1.1 0 0 0 .12 0v.06h.16c.15.15-.08.18.05.29z"></path><path d="m68.38 153h.05c-.11.1-.19.35-.44.37s-.25 0-.41-.08c-.11-.23 0-.37.1-.56.12 0 .3-.13.43-.13l-.06.08h.33c-.01.08.03.18 0 .32z"></path><path d="m72.63 155.62v.02l-.07.01v-.02z"></path><path d="m71.43 156.47a.08.08 0 0 1 0-.05s.06.12.1.05-.09.07-.1 0z"></path><path d="m70.59 156.52s-.11.07 0 .12c-.22.2-.39-.25-.59.06-.15-.11-.35 0-.43-.21s.1-.28.22-.35l.21-.09s0 .06.07 0h.1c0 .15.14 0 .2.11 0 .14.19 0 .27.14h.08c-.04.14-.11.17-.13.22z"></path><path d="m64.42 157c.07 0-.11 0 0 .1-.1 0-.07.12-.14.15-.18-.06-.1.25-.38.13-.1.15-.22-.09-.32 0a.4.4 0 0 1 -.14-.45c.08-.17.07-.06.18-.24l.07-.07c.07.15.11-.18.21 0 .07 0 .11-.09.2-.07a.1.1 0 0 0 0 .07h.17v.07h.12s0 0 0 .07h.08c.02.12-.2.13-.05.24z"></path><path d="m64.09 155.93.16-.04-.1.03z"></path><path d="m60.09 152.91v.09c-.07 0-.05.07-.08.11s-.32 0-.36-.1v-.22c.07 0 .12-.06.19-.1s.12 0 .11 0a.41.41 0 0 1 .19.11s-.07.07-.05.11z"></path><path d="m60.03 152.8v.02h-.09v-.01z"></path><path d="m59.12 147.66a.17.17 0 0 1 -.16-.26.2.2 0 0 1 .23-.06c.11.05.12.35-.07.32z"></path><path d="m57.27 155.44v.14s-.2.07-.27 0a.19.19 0 0 1 0-.23c.08-.07.06 0 .16-.08s.17.07.17.18z"></path><path d="m56.71 155.79s0-.06 0-.09.1 0 .07.09z"></path><path d="m58.79 151.79a.21.21 0 0 1 -.2.08c0-.05-.09-.08 0-.13a.25.25 0 0 1 .19-.08s.08.07 0 .11z"></path><path d="m58.68 151.75s.08-.1.09 0-.08.02-.09 0z"></path><path d="m56.31 150.34h.11c-.09 0-.13.05-.18.1a.07.07 0 0 0 0 .07c-.07 0-.1 0-.15.05l.05.09c-.23 0-.61.14-.77-.22v-.37c.06-.18.19-.19.27-.33v-.05l.11.09c.05-.07 0 0 .09 0l.17-.11s0 .05-.05.07.1 0 .14 0 .06.16.15.28h.08s-.07 0-.09.07h.15c.06.2-.11.13-.08.26z"></path><path d="m55.94 153.86c-.06 0-.06.08 0 .14s-.07 0-.09 0 0 .15-.13.12 0 .1.05.16-.1-.11-.22-.06c-.11.24-.31-.05-.42.06s-.13 0-.13-.08 0 0-.07.05-.14-.26-.23-.24-.05-.11-.11-.15a.09.09 0 0 0 -.05-.11c.15-.1-.16-.15 0-.21 0-.07-.07-.1-.09-.12s.1.05.16 0c-.18-.15.13-.16.06-.35h.11v-.07c.1.09.16-.1.24-.1s.22.16.33 0 .11.27.25.12l.07-.07c.05.08-.12.1 0 .18s.07-.07.14-.09-.17.22 0 .25l.15-.05c0 .06-.08.12-.08.19s.15 0 .14 0-.12 0-.09.12l.16.09c-.09-.01-.04.19-.15.22z"></path><path d="m51.76 151.11s0 0 0 0-.15.18-.11.31c-.16 0-.12.27-.29.2s0 .16-.13.07a.08.08 0 0 0 0 .08c-.18-.07-.36 0-.52-.11s-.08-.18-.2-.14c0-.1-.21-.15-.1-.3v-.12a.53.53 0 0 0 .14-.31s.2 0 .18-.15c.12.06.11-.12.17-.17v.05l.07-.07s0 .07 0 .09.15-.07.22-.13 0 .05 0 .07.09 0 .15 0v.05h.08c0 .1.14 0 .2 0s-.08.09 0 .14l.09.1s0 0 .07 0l-.07.14c.07.08.13-.08.19 0-.16-.04-.03.09-.14.2z"></path><path d="m53.16 157.51s-.07-.08 0-.13.17 0 .2 0-.06.14-.2.13z"></path><path d="m52 161.51c-.05 0-.07 0-.1 0s.08-.13.13-.16 0 0 .1.09a.15.15 0 0 1 -.13.07z"></path><path d="m50.79 152.88c-.06 0-.12 0-.16-.08s0-.13.1-.14h.06c.05.06-.13.08 0 .14l.05-.07c-.01.06 0 .12-.05.15z"></path><path d="m50.39 156.35a.49.49 0 0 1 0 .18.53.53 0 0 1 -.39.1c-.15-.14-.25-.17-.22-.36s.11-.11 0-.17c0 0 .2 0 .11-.14 0 .07.15 0 .19 0s0 .07.09 0 .11 0 .18 0 0 0 0 .08.08 0 .12 0l.09.12v.05h.07z"></path><path d="m50 155.71s-.18 0-.17.11-.07 0-.09.05-.06 0-.09 0 0 .06 0 .1-.07 0-.1-.07h-.08s0 0 0-.07-.19-.12-.29-.15 0-.22-.15-.25c.17-.16-.07-.3.13-.51h.06s.06-.11 0-.15.06 0 .09.07c.06-.18.25 0 .33-.1 0 .09.1 0 .13.07v.1c.05 0 .1 0 .15-.05 0 .11 0 .27.12.24-.05 0 0 .09-.05.14.15.13-.17.33.01.47z"></path><path d="m47.76 154.25c0 .07.05.13.07.14a.17.17 0 0 0 0 .12s.07 0 .09 0-.18 0-.16.08h-.12l.06.09c-.06 0-.2 0-.19.14v.12s0 0 0 0 0 .21-.12.14c0 .15-.09.28-.07.37s-.06.06-.09.09-.06 0-.1 0-.07 0-.11 0-.14-.15-.23-.08c.1-.12-.07-.17-.08-.26s0 .18-.1.23c-.06-.12.07-.26-.12-.29l-.07.07c0-.05 0-.19-.13-.11l-.06-.14h-.08s0-.07 0-.09 0 0-.07 0a.21.21 0 0 0 0-.2h-.08v-.19c-.14 0 0-.14-.12-.17.14-.09 0-.19-.08-.22s.1 0 .1-.06-.09-.08-.12-.13h.13c0-.06 0-.14 0-.2 0-.06.19-.12.06-.2s0 0 0 0-.06-.1 0-.15.15.2.19 0v-.22l.07.17c.26-.07.09-.45.37-.45 0 .1.09.13.15.12s.09-.19.23-.15c0 .18.19.23.28.18s0-.14.12-.16-.12.19 0 .28l.12-.06a.17.17 0 0 0 0 .19h.08s-.09.11 0 .14h.11c0 .05-.08.05 0 .11s.07.11.13 0-.08.1 0 .15h.09c0 .05-.13.07-.09.18h.15s-.09.05-.08.12h.14c-.16.22-.26.2-.27.3z"></path><path d="m60.63 159c-.11 0-.24.07-.31-.1s0-.38.21-.29v-.06l.15.11c-.08.09.1.14 0 .24s-.07.04-.05.1z"></path><path d="m60 158.78-.13.05z"></path><path d="m59.61 158.94.18-.08v.03l.05-.04v.05z"></path><path d="m59.36 159.17s0 0 0 0l-.09.06h.12c-.1 0-.13.1-.18.18a.65.65 0 0 1 -.55.13c-.13-.07-.26-.22-.42-.16s.11-.07 0-.12-.12-.22-.18-.32c.14-.1.1-.18.13-.31s.16 0 .11-.16l.07.08c.09-.06 0-.15 0-.22l.12.09c.06-.11.24-.09.32-.14.12.13.25 0 .33-.14.05.09-.15.25 0 .36s0-.06.06-.06-.13.19 0 .26l.22-.2c.02.29-.17.41-.06.67z"></path><path d="m59.52 159-.1.06z"></path><path d="m58.47 158.07.02-.01v.08z"></path><path d="m84.43 155.5h.09l-.07.01z"></path><path d="m84.26 155.51.08-.03.02.07z"></path><path d="m107.55 155.77c0-.05 0-.15.06-.14h.06c.02.09-.05.17-.12.14z"></path><path d="m94 164.77.01.03-.06.02-.01-.02z"></path><path d="m107.41 156.21s0 0 0 0 .07-.09.1 0-.06-.01-.1 0z"></path><path d="m93.06 165v-.07a.29.29 0 0 1 .36 0c-.12-.02-.24.07-.36.07z"></path><path d="m106.17 156.12c-.08-.06-.13-.15 0-.22a.22.22 0 0 1 .18.06c-0 .04-.1.16-.18.16z"></path><path d="m79.64 172.32s0 0 .07 0l-.07.11c.13.13-.13.15-.1.25a.5.5 0 0 1 -.46 0c-.1-.14 0-.15-.14-.29.12-.06-.11-.3.14-.31.06-.13.19 0 .29-.11-.07 0 .07.07.12.09h.08c0 .09.05.14.13.17s-.04.06-.06.09z"></path><path d="m108.05 163.72s0 0 0 0h.06s-.06-.01-.06 0z"></path><path d="m102.81 162.27c-.06 0-.08 0-.09-.07a.09.09 0 0 1 .11 0s.06.05-.02.07z"></path><path d="m102.76 165.08a.1.1 0 0 1 -.11 0s0-.11 0-.13.14.05.11.13z"></path><path d="m103.24 166.41c-.08 0-.21 0-.23-.07a.14.14 0 0 1 .08-.22c.07-.1.13 0 .2 0s-.01.2-.05.29z"></path><path d="m102.78 165.42s0 0-.07 0a.13.13 0 0 1 0-.12c.05 0 .12.07.07.12z"></path><path d="m101.11 163.25s-.08 0-.12 0-.06-.09 0-.16a.11.11 0 0 1 .12.16z"></path><path d="m107.09 159.94.09-.1v.07z"></path><path d="m106.39 160.06c-.08 0-.19 0-.2-.06s.28-.23.4-.28 0 0 0 .08.12.09.24 0a.9.9 0 0 1 -.44.26z"></path><path d="m101.82 165.48c0 .05-.08 0-.11 0a.07.07 0 0 1 .11-.06s.01.02 0 .06z"></path><path d="m100.46 163.88s0-.06-.06-.09.06 0 .09-.06.06.14-.03.15z"></path><path d="m100.78 164.78a.08.08 0 0 1 -.08-.1s.08-.06.11 0-.02.06-.03.1z"></path><path d="m100.37 164.07c-.08 0-.21.14-.23 0 .09 0 .13-.15.24-.09a.17.17 0 0 1 -.01.09z"></path><path d="m105.27 161c-.07 0-.12.07-.12.14s.1 0 .11.06c-.29.08-.59.31-.87.14 0-.06 0-.12 0-.19a.29.29 0 0 0 .16-.15c.14 0 .24-.19.41-.15v.06a2.31 2.31 0 0 1 .37 0z"></path><path d="m104.09 160.09c-.14-.18.17-.21.26-.26h.23a.51.51 0 0 1 -.49.26z"></path><path d="m104.22 160.02.01-.1.11.05-.1-.04z"></path><path d="m87.73 165.9-.08-.06c.14-.28.55-.29.82-.28h.19a1.11 1.11 0 0 1 -.93.34z"></path><path d="m103.52 160.07.07.01-.04.04z"></path><path d="m102.84 160.3h-.14c0-.05 0-.12 0-.15a.5.5 0 0 1 .4-.1s0 0 0 .07.07 0 .11 0a.51.51 0 0 1 -.37.18z"></path><path d="m102.92 160.14c0-.08 0 0 0 0s.08.04 0 0z"></path><path d="m102.36 160.16a.47.47 0 0 1 -.39.22c-.06 0-.16 0-.11-.12a.6.6 0 0 1 .32-.22c.07.07.17 0 .25 0s-.18.05-.07.12z"></path><path d="m102.21 160.24-.02-.02.01-.01z"></path><path d="m99.06 157s0 0-.06-.06.19-.16.29-.19.08-.08.16 0c-.12.1-.2.25-.39.25z"></path><path d="m96.86 161.07s-.06 0-.09 0a.13.13 0 0 1 0-.18l.22-.11s0 0 0 .05h.12c.03.17-.11.17-.25.24z"></path><path d="m98.55 160.23.07-.05-.01.02z"></path><path d="m95 161.78v.05s0 0 .08 0-.14.18-.23.29-.2 0-.27-.08 0-.15 0-.22.21 0 .26-.11l.22.05s-.06.05-.06.02z"></path><path d="m96.88 164.61c-.21.06-.36.35-.62.27a.15.15 0 0 1 0-.25c.18-.11.37 0 .56-.06z"></path><path d="m93.34 161.79c-.09 0-.19.1-.27 0s0-.13 0-.19.14 0 .21-.06 0 .07 0 .05.12.1.06.2z"></path><path d="m97.4 167.62c-.08 0-.18 0-.24 0a.12.12 0 0 1 0-.17c.09-.05.2-.11.29-.06s-0 .15-.05.23z"></path><path d="m92.81 161.44c0 .07.07.06 0 .08s-.06 0-.07 0a.12.12 0 0 1 .16-.08s-.05-.04-.09 0z"></path><path d="m96.16 166.84s0-.05-.08-.08 0 0 0 0-.13 0-.12.05c.16 0 .07.15.17.15-.08.07-.27.21-.39.06a.26.26 0 0 1 0-.19.79.79 0 0 0 .23-.14s0 0 0 0h.13s0 .06 0 .1h.11s-.05.01-.05.05z"></path><path d="m90.73 159.43c-.09 0 0-.13 0-.17s.25 0 .31-.14c-.04.12-.16.29-.31.31z"></path><path d="m96 166.86s0-.05 0 0z"></path><path d="m96 167s-.06 0-.1-.06v-.05s0 0 0 0h.09v.11-.07s.01.01.01.07z"></path><path d="m81.08 165.39.1.05s-.36 0-.2.18c-.25 0-.54.14-.74-.06 0 0-.07 0-.07.05h.1c-.14.07-.28.24-.46.19s-.1-.07-.07-.12c.13-.34.65 0 .65-.51a.68.68 0 0 1 .53-.2l.15-.12c-.12.07 0 .14 0 .21h.11v.1l.15.06c-.09.02-.23.06-.25.17z"></path><path d="m91.62 161.89c-.09 0-.19.11-.28 0s.08-.13.1-.22.11 0 .15 0 .16.18.03.22z"></path><path d="m96.54 169.92a.33.33 0 0 1 -.29.13s-.09-.05-.06-.1.21-.13.32-.14c-.05.04.04.07.03.11z"></path><path d="m96.39 169.92.1-.04v.02z"></path><path d="m90.22 161.38c.08 0 0 .07 0 .08s-.14.13-.23.06 0-.1 0-.16h.15z"></path><path d="m90.2 161.41-.07.03.02-.07-.01.02.09.01-.01.05z"></path><path d="m88.78 162.32c0 .07-.11.2-.22.18a.29.29 0 0 1 -.23-.06c0-.19.17-.22.25-.33.05.08.13 0 .19 0a.26.26 0 0 0 .01.21z"></path><path d="m87.37 159.5s0 0 .06 0c-.15.07-.24.27-.44.23s0-.2.07-.25a.71.71 0 0 1 .34-.08z"></path><path d="m95 171.14c0 .1-.18.2-.31.22a.21.21 0 0 1 -.17-.37c.07-.05.16 0 .2-.11 0 .2.23 0 .19.13h.09a.08.08 0 0 0 0 .13z"></path><path d="m93.65 168.59v-.05h.09s-.08.03-.09.05z"></path><path d="m87.93 161.6v.08c-.12 0-.31.21-.46 0s0-.22.12-.32.09 0 .14-.06 0 0 0 0 .06.05.16 0h.11c-.1.21.06.28-.07.3z"></path><path d="m93.28 168.77c0-.07 0-.11.06-.14h.18v.07c0-.1-.11 0-.13 0s0 .07 0 .1.15 0 .19-.05h.11c-.12 0-.26.13-.41.02z"></path><path d="m90.12 168.2a0 0 0 0 1 -.05 0v-.06h.07s-.03.05-.02.06z"></path><path d="m86.88 164.06s0 0 0 0v-.07s0 .08.08.08-.05-.01-.08-.01z"></path><path d="m88.17 169.43v-.06a0 0 0 0 1 0 .06z"></path><path d="m88 169.44-.06.09s0 .06 0 .08.1-.06.14-.11c-.06.1-.16.12-.28.15a.13.13 0 0 1 -.08-.08.33.33 0 0 1 .33-.14z"></path><path d="m87.89 169.41.03.01-.03.06z"></path><path d="m83.07 165.3c-.12 0-.15-.1-.13-.19s.07-.11.13-.14.05.14.12.07c-.09 0 0-.1 0-.13v.06h.18v.06h.09c-.14.12-.22.25-.39.27z"></path><path d="m86 168.42c-.14.07-.24.2-.39.08s0-.17.09-.22l.19-.07.11.05h.07c-.07.08-.14.16-.07.16z"></path><path d="m85.77 168.46s.08 0 .1 0a.13.13 0 0 1 -.06.07c-.07 0-.06-.11-.08-.14s.15-.05.17-.09.03.11-.13.16z"></path><path d="m85.74 168.4s0 0 0 0h.06z"></path><path d="m83.7 164.49s0-.07 0-.09.12-.11.21-.14-.08 0-.1.1l.07.06s0-.08.09-.06-.17.15-.27.13z"></path><path d="m85.43 169.33h-.05l.07-.1s0 0 0 .05v-.11s.06 0 .09 0h-.06v.1l.2-.08c-.06.06-.13.15-.25.14z"></path><path d="m73.42 165.92c0 .15.13 0 .18.06s-.13 0-.14.08a.14.14 0 0 0 .19 0c-.07.1-.3.08-.3.26 0 0 .1 0 .07.08s-.14.19-.26.25h.07a1.91 1.91 0 0 1 -.36.13c.13.11-.19.07-.13.19-.09-.07-.2-.09-.23 0a.61.61 0 0 1 -.44-.32c-.08-.09 0-.12 0-.25s0-.11 0-.13.11-.09.11-.16 0-.19.1-.18 0-.05 0-.06.07 0 .08-.07.32-.17.44-.36v.06l.09-.18c0 .08-.07.18 0 .24s.1 0 .16-.07v.06c.08.05.14-.09.24 0-.06.14 0 .18.14.21h.19a.22.22 0 0 0 -.2.16z"></path><path d="m84.26 169.06a0 0 0 0 0 0-.06c-.06-.05-.11 0-.16 0v.07c.07 0 .07-.06.12 0s-.14.05-.21.08 0-.16.11-.17.15 0 .22 0-.02.09-.08.08z"></path><path d="m82.85 169.24c-.12 0-.25-.08-.23-.15s0-.09 0-.12-.25 0-.21-.16c.25-.26.61-.13.8-.1v.08h.09a.61.61 0 0 1 -.45.45z"></path><path d="m68.25 172.73c-.05 0-.07.09-.11.15s0 0 .09 0-.14 0-.08.12c-.19 0-.18.2-.35.21-.1.19-.31 0-.43.09s-.09-.08-.13-.12l-.08-.34a.68.68 0 0 0 .11-.21.51.51 0 0 1 -.3-.19c-.12-.17.08-.24.1-.38.1 0 .18-.05.25-.1v-.05c0 .17.19.06.29.07h.06s-.09.05-.08.1h.14s-.06 0-.07.06v.05s0 0 0 .06 0 0 0 0v.06c.06 0 .12 0 .11.12h.21v.05a.09.09 0 0 0 .11 0v.07h.15c.07.04-.12.11.01.18z"></path><path d="m77.9 165.88c-.09.1-.11.33-.34.39s-.21 0-.36 0a.42.42 0 0 1 0-.5c.1 0 .24-.16.36-.18v.07h.29c.01.06.06.14.05.22z"></path><path d="m81.97 167.59.01.02-.06.02-.01-.02z"></path><path d="m81.05 168.5a0 0 0 0 1 0-.05s.07.09.09 0-.07.1-.09.05z"></path><path d="m80.33 168.66s-.08.07 0 .11c-.17.21-.38-.17-.5.13-.16-.07-.31 0-.41-.12s0-.25.14-.33l.17-.1s0 0 .07 0h.08c0 .13.12 0 .19.06.06.11.16 0 .24.08h.08s-.05.12-.06.17z"></path><path d="m75.07 170c.06 0-.09.05 0 .08-.09 0 0 .12-.11.16-.15 0 0 .24-.3.18-.07.14-.2 0-.28 0a.33.33 0 0 1 -.19-.37c0-.16 0-.06.12-.23v-.08c.08.12.07-.17.18-.05s.08-.09.16-.1a.06.06 0 0 0 0 .07s.1 0 .14 0v.06h.11s0 0 0 .06h.1c.11.1-.08.14.07.22z"></path><path d="m74.61 169.12.13-.06-.07.04z"></path><path d="m70.63 167.2v.06c-.07 0 0 .07-.06.1s-.27.09-.33 0v-.19c.06 0 .1-.08.15-.12s.11 0 .1 0c.08 0 .1 0 .18.06s-.06.05-.04.09z"></path><path d="m70.56 167.11.01.02-.08.02v-.02z"></path><path d="m68.88 162.86a.15.15 0 0 1 -.19-.19.2.2 0 0 1 .2-.1c.11.03.17.28-.01.29z"></path><path d="m68.62 169.87v.12s-.16.1-.24 0a.19.19 0 0 1 0-.2c.06-.08 0 0 .12-.1s.17 0 .18.12z"></path><path d="m68.2 170.28s0-.07 0-.1.09 0 .08.07z"></path><path d="m69.3 166.47a.18.18 0 0 1 -.16.1s-.09 0 0-.11a.31.31 0 0 1 .15-.1s.09 0 0 .1z"></path><path d="m69.19 166.45c0 .05.06-.1.09 0s-.07.01-.09 0z"></path><path d="m66.85 165.69h.15c-.07 0-.1.07-.14.13s0 0 0 0-.08 0-.12.07l.06.07c-.21 0-.51.24-.72 0v-.32c0-.17.13-.2.18-.34l.11.05c0-.06 0 0 .08 0l.14-.12s0 .05 0 .07.08 0 .12 0 .08.12.19.21 0 0 .06 0-.05.05-.07.07h.11c0 .03-.19-.01-.15.11z"></path><path d="m67.18 168.77c-.05 0 0 .08 0 .12s-.06 0-.08 0 0 .14-.09.13 0 .08.07.13-.11-.08-.21 0c0 .22-.27 0-.34.13s-.12 0-.13 0 0 0-.05.06-.18-.2-.25-.17-.07-.08-.13-.1a.09.09 0 0 0 -.06-.09c.11-.11-.17-.1 0-.18s-.07-.07-.09-.09.1 0 .13 0c-.18-.1.09-.16 0-.31 0 0 .09 0 .09-.07.1.06.12-.11.19-.13s.23.1.28-.09.14.2.24.05v-.08c.07.07-.08.12 0 .17s0-.08.1-.11-.11.22.07.21l.13-.07a.53.53 0 0 0 0 .18c.06.1.13-.07.13 0s-.1.06-.06.12l.16.05c-.11-.07-.01.09-.1.14z"></path><path d="m63 167.24s0 0 0 0-.1.18 0 .29c-.14 0 0 .25-.21.23s0 .14-.1.08 0 .05 0 .07c-.17 0-.31.11-.48 0s-.1-.14-.2-.08v-.05c-.05-.08-.21-.09-.15-.24l-.06-.09a.43.43 0 0 0 .06-.29c0-.06.17-.07.13-.17.12 0 .07-.12.12-.18v-.08s0 .07 0 .08.12-.09.17-.16 0 0 0 .06.07-.06.13-.05h.08c.07.07.12 0 .18 0s0 .09 0 .12l.1.07s0 0 0 0v.14c.08.05.1-.1.17-.06-.01.07.14.2.06.31z"></path><path d="m65.47 172.42s-.07-.06-.07-.11.14-.06.17 0 .02.09-.1.11z"></path><path d="m62.5 169s-.1 0-.15 0 0-.11.06-.13h.05s-.09.09 0 .12v-.07c.06-.06.09-.01.04.08z"></path><path d="m62.87 172a1.09 1.09 0 0 1 0 .17.47.47 0 0 1 -.32.16c-.15-.09-.25-.1-.26-.26s.07-.12-.05-.14c0 0 .16-.07.07-.15 0 .07.13 0 .16 0s0 .05.09 0 .1 0 .16 0 0 0 0 .07.07 0 .11 0v.05l.1.08v.05h.06z"></path><path d="m62.35 171.52s-.15 0-.12.14 0 0-.06.06-.06 0-.09 0 0 .05 0 .09-.06 0-.09 0h-.07s0 0-.06 0-.18-.06-.28-.07 0-.19-.18-.18c.12-.18-.12-.24 0-.46h.06s0-.1 0-.13.06 0 .09 0c0-.17.21-.08.26-.16 0 .08.09 0 .13 0v.08s.08 0 .11-.06c.06.08 0 .23.16.17v.13c.24.07 0 .3.14.39z"></path><path d="m72.15 172.35c-.1 0-.2.1-.29 0s0-.33.13-.29v-.06l.15.07c0 .09.11.1 0 .2s-.03.02.01.08z"></path><path d="m71.58 172.25-.11.07z"></path><path d="m71.25 172.46.14-.1.01.02.04-.03.01.04z"></path><path d="m71.09 172.7s0 0 0 0l-.07.07h.11c-.08 0-.09.11-.12.18a.57.57 0 0 1 -.45.21c-.12 0-.25-.15-.39-.07s.08-.07 0-.1-.14-.17-.21-.25c.1-.1 0-.17.06-.29s.13-.07.06-.15h.08c.06-.06 0-.13 0-.19l.12.06c0-.11.19-.13.25-.18s.21-.09.26-.17-.08.23.06.3 0-.06 0-.06-.09.19 0 .22l.16-.21c.07.29-.07.43.08.63z"></path><path d="m71.19 172.5-.08.07z"></path><path d="m70.13 171.91.01-.01.02.07z"></path><path d="m55.22 156.94.16.04-.13-.01z"></path><path d="m54.93 156.88.15-.02-.01.13z"></path><path d="m95.79 167.52c-.05-.09 0-.27.16-.21l.1.07c.01.12-.15.24-.26.14z"></path><path d="m95.34 168.24s0 0-.06-.08.16-.12.19 0-.05.08-.13.08z"></path><path d="m93.2 167.53c-.1-.14-.15-.33.09-.39a.35.35 0 0 1 .29.18c-.02.15-.22.23-.38.21z"></path><path d="m88.06 173.49.07-.18.17.15-.17-.12z"></path><path d="m86.81 173.26.12.05-.1.06z"></path><path d="m85.51 173.36a.84.84 0 0 1 -.22-.1c0-.1.06-.21.13-.26a.9.9 0 0 1 .74 0l-.09.1c0 .11.14 0 .2 0a.88.88 0 0 1 -.76.26z"></path><path d="m85.72 173.12h.09c0-.14 0 0 .11 0-.17-.04-.02.13-.2 0z"></path><path d="m84.74 172.9a.88.88 0 0 1 -.78.23c-.11 0-.28-.14-.15-.26a1.06 1.06 0 0 1 .66-.25c.1.15.3 0 .46.08-.01.09-.36.04-.19.2z"></path><path d="m84.45 172.98-.04-.04.03-.01z"></path><path d="m80.33 166c-.08 0 0-.09-.08-.13.09-.22.41-.2.59-.21s.18-.09.3 0c-.25.11-.47.34-.81.34z"></path><path d="m74.7 172.09s-.12 0-.16-.08a.22.22 0 0 1 .07-.31l.44-.1s0 .05 0 .09l.2.07c-.03.24-.34.29-.55.33z"></path><path d="m78.03 171.35.15-.06-.04.04z"></path><path d="m71.11 172.52v.08c0 .05.1 0 .15 0-.1.23-.32.26-.54.41-.15-.06-.35-.06-.43-.27s.1-.24.16-.36.37.09.52-.07l.36.18c-.12.04-.19.09-.22.03z"></path><path d="m68.2 171.81c-.17 0-.38.1-.49-.08s.1-.21.15-.31.27 0 .4 0 0 .12.06.1c-.05.16.02.15-.12.29z"></path><path d="m67.42 171c-.09.11.1.13.06.17s-.11 0-.12 0a.21.21 0 0 1 .31-.06c-.1-.11-.16-.2-.25-.11z"></path><path d="m64.63 166.54c-.15-.08 0-.25 0-.3s.46.08.61-.12c-.14.18-.34.46-.61.42z"></path><path d="m65.13 171.25c-.16 0-.38.1-.49-.16s.2-.19.28-.33.17.1.28 0c0 .14.18.47-.07.49z"></path><path d="m62.89 169.74c.15 0 0 .14.06.17-.12.05-.31.17-.44 0s.1-.16.16-.27h.27z"></path><path d="m62.84 169.79-.14.03.06-.12-.01.04.15.04-.05.09z"></path><path d="m60 170.77c-.09.13-.27.31-.47.24a.57.57 0 0 1 -.37-.21c0-.36.39-.32.58-.47 0 .15.21.09.31.14a.44.44 0 0 0 -.05.3z"></path><path d="m58.69 165.21s.07.07.09.1h.07c-.29.06-.54.37-.87.22-.09-.13.06-.37.22-.41a1.2 1.2 0 0 1 .65 0z"></path><path d="m58.77 169.16v.14c-.21-.1-.65.24-.83-.12s.18-.37.34-.51c.11.11.18 0 .28 0s0 0 0 .08c.2 0 .08.11.27.14l.17.05c-.24.06-0 .23-.23.22z"></path><path d="m69.31 161.8c.09 0 .1.07.2.07a.31.31 0 0 1 -.18.33.22.22 0 0 1 -.25-.18.3.3 0 0 1 .23-.22z"></path><path d="m70.11 161.27c0 .08 0 .13-.08.19a.18.18 0 0 1 -.21-.05c-.03-.14.18-.36.29-.14z"></path><path d="m38.43 146.83c-.07.06-.21 0-.2-.08v-.09c.12-.03.24.07.2.17z"></path><path d="m54.52 162.78.03-.02.07.06-.03.03z"></path><path d="m39.05 147s0 0 0 .06-.12-.1-.06-.14.01.08.06.08z"></path><path d="m55.26 163.89-.07.08a.38.38 0 0 1 -.21-.46c.07.1.3.19.28.38z"></path><path d="m39 148.79c-.08.11-.2.2-.31 0a.26.26 0 0 1 .06-.26c.12.01.25.14.25.26z"></path><path d="m44.24 139.47c.17.17.4.42.29.68-.12 0-.17-.08-.22-.17s0-.37-.13-.52.01.05.06.01z"></path><path d="m73.33 173.73s0-.08 0-.09h.18c0-.26.26 0 .33-.15a.62.62 0 0 1 .41.45c-.06.24-.12.2-.18.43-.16-.06-.21.4-.44.16-.19.06-.19-.17-.37-.18.1 0 0-.13 0-.2l-.08-.07c.15 0 .1-.18.06-.3 0 .04.04-.04.09-.05z"></path><path d="m44.59 141.25v.22s-.18-.17-.23-.27v-.2a.6.6 0 0 1 .23.25z"></path><path d="m45.49 141.64s0 .06 0 .09c-.17-.13-.12-.32-.18-.48a.66.66 0 0 1 .18.39z"></path><path d="m45.38 141.59s-.1 0 0-.1z"></path><path d="m45.9 141.54v-.08s.03.04 0 .08z"></path><path d="m49.37 145.18s0 0 0 0v-.07s-.01.07 0 .07z"></path><path d="m48.05 152.32a.13.13 0 0 1 -.08.13c-.08 0-.09 0-.1-.13s.13-.11.18 0z"></path><path d="m51.84 151.45a.15.15 0 0 1 0 .13c-.07 0-.14.07-.19 0s.11-.14.19-.13z"></path><path d="m53.51 150.36c0 .1.08.24 0 .31a.19.19 0 0 1 -.31 0c-.14 0 0-.17 0-.25s.17-.07.31-.06z"></path><path d="m52.29 151.31s.05 0 0 .08a.16.16 0 0 1 -.14.05c-.02-.06.06-.18.14-.13z"></path><path d="m49.79 154.23c0 .05.05.09 0 .15s-.11.12-.21.07a.15.15 0 0 1 .21-.22z"></path><path d="m44.28 147.1-.13-.1.08-.01z"></path><path d="m44.5 148c0 .12.07.26-.07.29s-.33-.35-.41-.5.06-.07.12-.05c-.16-.15.11-.18 0-.32a1.19 1.19 0 0 1 .36.58z"></path><path d="m52.58 152.49c.08 0 0 .11 0 .16s-.13-.05-.1-.12.05-.04.1-.04z"></path><path d="m50.8 154.84c0 .06 0 .08-.09.11s-.07-.06-.11-.09a.1.1 0 0 1 .2-.02z"></path><path d="m51.92 154.08a.12.12 0 0 1 -.12.15c0-.06-.1-.08 0-.15s.06.01.12 0z"></path><path d="m51.08 154.89c0 .11.25.22 0 .31 0-.11-.24-.12-.19-.28.11-.01.11-.05.19-.03z"></path><path d="m45.84 149.38c0 .08.1.14.21.12s0-.13.06-.15c.16.36.52.69.33 1.1a.25.25 0 0 1 -.25.05.4.4 0 0 0 -.24-.17c0-.21-.3-.28-.28-.51h.09a2.09 2.09 0 0 1 0-.5z"></path><path d="m44.82 151.14c-.22.22-.32-.19-.41-.3v-.31a.67.67 0 0 1 .41.61z"></path><path d="m44.7 150.98-.15.01.06-.17-.04.15z"></path><path d="m59.71 170v.13c-.44 0-.75-.46-.94-.79l-.08-.26a1.62 1.62 0 0 1 1.02.92z"></path><path d="m44.9 151.92v-.1l.07.05z"></path><path d="m45.35 152.79a1.2 1.2 0 0 1 0 .19c-.06.06-.17 0-.23 0a.72.72 0 0 1 -.21-.52h.09c.08 0 0-.1 0-.15.11.1.33.26.35.48z"></path><path d="m45.12 152.72v-.08c-.11 0 0 0 0-.06-.04.14.04-.03 0 .14z"></path><path d="m45.26 153.48a.66.66 0 0 1 .39.48c0 .1 0 .24-.14.19a.85.85 0 0 1 -.38-.39c.08-.12-.05-.23-.08-.35s.14.25.21.07z"></path><path d="m45.4 153.66-.02.05-.01-.02z"></path><path d="m59.33 148.18c-.16.22-.28 0-.41-.06-.23-.23-.05-.59-.19-.83v-.18c.12.36.8.51.6 1.07z"></path><path d="m48.28 160.73s0 .08 0 .14-.12.14-.25.07l-.24-.26s0 0 .06 0v-.16c.15-.13.31.08.43.21z"></path><path d="m46.48 158.71-.1-.08.04.01z"></path><path d="m50.08 163h.07c0-.05 0-.06-.06-.1.19 0 .3.11.49.19 0 .13.11.27 0 .41s-.2 0-.3 0-.1-.29-.27-.32v-.31s.1.05.07.13z"></path><path d="m57.92 151.42-.04-.1.07.07z"></path><path d="m57.43 152h-.11v.22l-.07-.24z"></path><path d="m57.46 152s.08.06.11.07 0 .14-.07.19-.06-.05-.1-.06.08 0 .14 0a.16.16 0 0 0 -.06-.19s0 0 0 .05l-.09-.05h.1z"></path><path d="m58.46 151.78h-.12c.02.02.07 0 .12 0z"></path><path d="m53 159.17c.15.25.59.3.6.68a.22.22 0 0 1 -.35.06c-.22-.18-.17-.47-.29-.7z"></path><path d="m50.94 165.2c.1.1.25.2.18.35s-.18 0-.27 0-.13-.17-.2-.25.08-.05 0-.09c.18 0 .13-.04.29-.01z"></path><path d="m56.69 157a.3.3 0 0 1 .08.31.16.16 0 0 1 -.24 0c-.09-.09-.2-.19-.17-.33s.21.02.33.02z"></path><path d="m61.5 152.57c.1.06.1.18.1.29s-.22.21-.28.11-.03-.42.18-.4z"></path><path d="m59.64 154.9s0-.05 0-.08.09.07.09.11c.22.15.53.26.49.62a.33.33 0 0 1 -.32.14l-.3-.32a1.43 1.43 0 0 1 -.13-.55s.12.09.17.08z"></path><path d="m56.19 159c-.06 0 0 .08-.07.13s0 0 0 0 0 .17.12.12c-.13-.17.15-.17.11-.29.12.06.38.22.25.44a.34.34 0 0 1 -.26.05 1 1 0 0 0 -.29-.19s0 0 .06 0l-.11-.13s0-.09.12-.07v-.13s.02.07.07.07z"></path><path d="m56.28 159.13s-.08 0-.06 0z"></path><path d="m56.41 159.12a.66.66 0 0 0 0 .15h-.07s0 0 0 .06v-.14c.07 0 .12 0 .13-.09h-.09s0 .02.03.02z"></path><path d="m59.94 156.78a.35.35 0 0 1 .28.27s0 .14-.09.13-.25-.17-.31-.29c.07.03.07-.09.12-.11z"></path><path d="m60.01 156.96-.09-.09.01-.01z"></path><path d="m62.06 157.9c.14 0 .32.09.4.22a.29.29 0 0 1 0 .33.31.31 0 0 1 -.34.1c-.1 0-.1-.16-.23-.16.24-.13-.15-.24.08-.3v-.1s.08.01.09-.09z"></path><path d="m59.51 161.05v-.13s-.02.13 0 .13z"></path><path d="m59.93 161.38c-.06.08-.17 0-.2 0l-.16-.18h.1c-.13.08 0 .14 0 .17s.09 0 .12-.07-.13-.15-.17-.19a.94.94 0 0 1 -.09-.12c.22.06.47.14.4.39z"></path><path d="m61 165.52a0 0 0 0 1 0 0l-.06.07v-.09s.06.04.06.02z"></path><path d="m58.05 172.31s0 0 0 .07h-.11s.08-.07 0-.15.06.05.11.08z"></path><path d="m63.67 166.91v.07s-.06-.08 0-.07z"></path><path d="m63.76 167.06v.08h.14c.06 0 .07-.06.1-.08s-.14-.07-.23-.06c.15 0 .23.11.35.23a.21.21 0 0 1 0 .14c-.2 0-.3-.13-.38-.28z"></path><path d="m63.83 167.25-.01-.04.09-.01z"></path><path d="m64 170.25c.19.1.41.1.39.37-.06.12-.24.1-.34.08l-.23-.16v-.16-.11c.06.05.18.04.18-.02z"></path><path d="m64.17 170.45c0-.06-.08-.07-.1-.1a.29.29 0 0 1 .13 0c0 .1-.08.15-.11.21s-.17-.13-.24-.12c.15.07.15-.13.32.01z"></path><path d="m64.12 170.53s-.06 0-.06 0h-.05v-.1z"></path><path d="m65.44 170.13v.1h-.16s0 0 0 0h-.16c0-.06 0-.07-.08-.1h.07l.12-.06-.23-.16c.2.09.37.09.44.22z"></path><path d="m66 171.66s-.06 0-.08.05.08.12.12.19l.08-.05c0-.11-.12 0-.09-.13s.17.11.26.17-.21.08-.28 0-.12-.16-.17-.25.16-.05.16.02z"></path><path d="m67.33 173.13c.09.13.1.34 0 .39s-.09.06-.12.08.17.31 0 .39c-.49-.08-.63-.6-.74-.84h.11l-.06-.12a.83.83 0 0 1 .81.1z"></path><path d="m79.88 139.24.15-.03-.11.04z"></path><path d="m79.6 139.3.12-.08.06.13z"></path><path d="m120 126.35c-.11 0-.18-.23 0-.29h.12a.17.17 0 0 1 -.12.29z"></path><path d="m101.91 152 .02.03-.1.09-.02-.04z"></path><path d="m120.13 127.25s-.07 0-.1 0 0-.21.12-.15.05.09-.02.15z"></path><path d="m100.25 152.89-.1-.12a.56.56 0 0 1 .67-.23c-.15.09-.32.4-.57.35z"></path><path d="m117.9 128.12c-.18-.05-.34-.16-.19-.37a.38.38 0 0 1 .37 0 .34.34 0 0 1 -.18.37z"></path><path d="m77.37 172.28s.1.05.14 0l-.12.23c.29.21-.22.31-.13.49a1 1 0 0 1 -.91.11c-.23-.24-.14-.29-.35-.53.22-.14-.27-.55.21-.62.1-.27.38-.08.55-.29-.13.09.15.11.25.14h.16c-.08.2.12.26.3.3-.13-.01-.07.11-.1.17z"></path><path d="m116.62 141.66a.18.18 0 0 1 -.21-.06c0-.13 0-.15.15-.19s.19.14.06.25z"></path><path d="m114.15 144.67c-.07 0-.13.09-.22.07s-.17-.13-.12-.29a.2.2 0 0 1 .34.22z"></path><path d="m116.91 148.23c-.06.14-.15 0-.23 0s.07-.22.17-.19.06.12.06.19z"></path><path d="m113.38 146.27c-.09 0-.12-.06-.17-.11s.08-.11.11-.18a.15.15 0 0 1 .06.29z"></path><path d="m114.54 147.71a.16.16 0 0 1 -.21-.13c.07-.06.11-.17.2-.1s-0 .14.01.23z"></path><path d="m113.33 146.68c-.16 0-.29.42-.44.12.16-.07.14-.37.38-.34.01.06.09.13.06.22z"></path><path d="m120.14 137.39c-.09.1-.17.2-.11.34s.19-.08.24 0c-.47.37-.84 1-1.48.92a.36.36 0 0 1 -.13-.33.64.64 0 0 0 .17-.39c.3 0 .3-.53.64-.6v.14a3.13 3.13 0 0 1 .71-.24z"></path><path d="m117.36 136.74c-.38-.21.16-.5.28-.66l.42-.15a1 1 0 0 1 -.7.81z"></path><path d="m117.54 136.52-.05-.19.24.01-.22.01z"></path><path d="m90.72 157.21-.16-.09c.14-.57.91-.76 1.42-.86h.37a2.12 2.12 0 0 1 -1.63.95z"></path><path d="m116.31 137.14.14-.04-.05.11z"></path><path d="m115.26 138.07a.92.92 0 0 1 -.26.05c-.1-.06-.08-.22 0-.3a1 1 0 0 1 .64-.48v-.05c0-.06 0 .09 0 .14s.13-.06.19-.11a1 1 0 0 1 -.57.75z"></path><path d="m115.29 137.72h.1c0-.15 0 0 .08-.09-.19.04.05.09-.18.09z"></path><path d="m114.3 138.17a1 1 0 0 1 -.52.7c-.13 0-.33 0-.3-.14a1.19 1.19 0 0 1 .41-.64c.19.07.3-.14.44-.22.06.13-.28.27-.03.3z"></path><path d="m114.1 138.42-.06-.01.02-.03z"></path><path d="m106.22 134.9c-.08 0-.1 0-.15-.06-.06-.25.22-.41.37-.52.17.06.1-.19.26-.17-.13.26-.15.61-.48.75z"></path><path d="m105 143.52c-.06 0-.12 0-.19 0a.24.24 0 0 1 -.12-.32l.34-.33s0 .05 0 .08l.22-.05c.2.29-.08.47-.25.62z"></path><path d="m107.51 140.93.09-.14-.01.06z"></path><path d="m102.05 145.93v.1c.07 0 .09-.06.13-.08 0 .26-.13.41-.24.67-.18 0-.36.14-.54 0s0-.28-.05-.42.37-.12.41-.36h.42s-.06.16-.13.09z"></path><path d="m107.17 150c-.35.24-.46.87-1 .89-.22-.08-.19-.38-.06-.5.26-.31.67-.26 1-.44z"></path><path d="m99 146.86c-.14.11-.28.29-.48.18s0-.24 0-.36.23-.15.35-.23 0 .12.11.07c.02.18.1.13.02.34z"></path><path d="m109.87 155.26c-.13.11-.33.21-.46.14a.23.23 0 0 1 0-.35c.16-.15.32-.33.51-.3s-.01.32-.05.51z"></path><path d="m97.87 146.49c0 .15.16.07.14.13s-.11 0-.13 0h-.06a.23.23 0 0 1 .26-.22s-.16 0-.21.09z"></path><path d="m107.08 154.58c0-.08-.12-.07-.18-.09h-.05s0-.05 0-.07-.25 0-.2.17c.28-.18.22.22.42.18-.13.17-.42.54-.72.33a.44.44 0 0 1 0-.37 1.71 1.71 0 0 0 .35-.4s-.07 0-.06.09l.22-.15c0 .06.13.08.08.18l.2-.07s-.08.13-.06.2z"></path><path d="m93 143.86c-.18 0-.16-.21-.14-.3.07-.26.45-.15.48-.4-.06.25-.09.6-.34.7z"></path><path d="m106.84 154.7v-.08z"></path><path d="m106.83 154.9a.79.79 0 0 0 -.22-.06v-.09s-.06 0-.09-.07h.2c0 .1 0 .17.12.19v-.13s-.02.12-.01.16z"></path><path d="m78.14 158.66.2.08c0 .07-.68.06-.31.38-.47 0-1 .41-1.39.1 0 0-.13 0-.13.1l.21.05c-.24.18-.45.53-.81.49-.07 0-.19-.1-.16-.21.13-.68 1.2-.22 1-1.15a1.3 1.3 0 0 1 .91-.51l.24-.27c-.2.18.1.27.1.41l.19-.12-.06.21.29.05c-.04.06-.27.19-.28.39z"></path><path d="m96 147.94c-.17.05-.29.29-.52.11s.08-.28.07-.46.2 0 .26-.12c.03.11.36.33.19.47z"></path><path d="m109.43 160.09a.73.73 0 0 1 -.5.44c-.07-.05-.21 0-.17-.15 0-.29.34-.37.55-.47-.08.09.11.09.12.18z"></path><path d="m109.14 160.2.16-.14.02.02z"></path><path d="m93.15 147.69c.13-.08.06.13.14.13-.08.1-.2.3-.39.22s0-.2 0-.33l.26-.11z"></path><path d="m93.13 147.76-.11.09v-.14.04l.16-.03v.1z"></path><path d="m91 150.06c0 .16-.09.43-.31.45a.52.52 0 0 1 -.44 0c-.18-.34.2-.48.29-.72.13.12.25 0 .36 0a.4.4 0 0 0 .1.27z"></path><path d="m87.05 145.45c0 .05.09 0 .13.05-.22.19-.29.6-.65.6-.15-.07-.13-.37 0-.48a1.2 1.2 0 0 1 .58-.3z"></path><path d="m107 163.37a.78.78 0 0 1 -.51.6.44.44 0 0 1 -.51-.07.45.45 0 0 1 0-.51c.12-.15.31-.13.35-.34.1.38.42-.24.42.13h.16a.13.13 0 0 0 .09.19z"></path><path d="m103.21 159.33-.07.06v-.07h.19s-.11-.02-.12.01z"></path><path d="m89.12 149.11.09.12c-.24 0-.47.55-.81.29s0-.44 0-.64c.16.05.15-.11.23-.18s0 .05 0 .09c.17-.11.13.07.31 0h.17c-.11.21.22.21.01.32z"></path><path d="m102.57 159.87c-.1-.1.05-.23.06-.28l.33-.19v.14c-.07-.2-.22 0-.26 0s0 .14.06.19c.22.1.27-.16.35-.22l.21-.12c-.19.29-.4.61-.75.48z"></path><path d="m96.26 160.45s-.06 0-.09 0l-.07-.09h.14s-.01.07.02.09z"></path><path d="m88.34 154.12s0 0-.07-.05v-.13c-.06 0 .06.13.18.11-.02-.05-.06.05-.11.07z"></path><path d="m93 163.67-.07-.09c.07-.03.14.02.07.09z"></path><path d="m92.77 163.74h-.1l-.08.2h.05-.05c0 .07.05.11.06.16s.17-.16.21-.29c-.07.21-.27.29-.49.39a.21.21 0 0 1 -.18-.11c.08-.28.34-.36.59-.4z"></path><path d="m92.49 163.75.04.01-.02.12z"></path><path d="m81.78 157.86c-.21 0-.3-.14-.31-.31s.1-.23.2-.31.13.24.23.09c-.16 0 0-.2.06-.27v.13c.13.06.18-.07.32-.06v.13h.18c-.27.22-.37.49-.68.6z"></path><path d="m88.44 162.71c-.24.19-.37.46-.71.3-.13-.14 0-.35.09-.46l.34-.21.22.05v.05h.15c-.13.12-.19.28-.09.27z"></path><path d="m88.06 162.87c.07 0 .14-.07.19-.08a.29.29 0 0 1 -.09.15c-.15 0-.15-.18-.21-.24s.27-.14.29-.23c-.18.19.1.25-.18.4z"></path><path d="m88 162.76s0-.07 0-.08v-.05h.07l.14.05z"></path><path d="m82.66 156.12c-.08 0-.09-.11-.14-.16s.18-.24.33-.33c0 .11-.14.07-.14.22l.16.1c0-.08.06-.17.13-.13s-.16.3-.34.3z"></path><path d="m87.72 164.63-.12-.06.11-.2s0 .06 0 .08h.07v-.22c.07.06.12 0 .17 0l-.1.06v.06h-.06v.19l.35-.21c-.08.08-.14.28-.42.3z"></path><path d="m64.17 161.32c0 .27.23 0 .34.08 0 .1-.25 0-.24.18a.25.25 0 0 0 .34 0c-.11.19-.54.18-.5.52.07 0 .19.07.14.16-.23.11-.23.37-.44.5h.13a2.79 2.79 0 0 1 -.63.28c.26.2-.34.17-.21.38-.18-.12-.39-.15-.43 0a1.1 1.1 0 0 1 -.85-.55c-.17-.15 0-.24-.1-.48h.06c0-.08.06-.2-.06-.24a.37.37 0 0 0 .19-.32c-.06-.16 0-.36.14-.36s0-.08 0-.12a.18.18 0 0 0 .14-.14c.24-.22.55-.35.72-.74l-.07.1.1.1.14-.35c0 .15-.11.34 0 .45s.19-.09.28-.15l-.07.12c.15.08.23-.2.42-.13-.08.28.11.35.31.4l.34-.13a.37.37 0 0 0 -.19.44z"></path><path d="m85.38 164.55s0-.08 0-.12-.2 0-.3 0v.12c.13.06.1-.13.22 0s-.25.15-.38.23c-.2-.15 0-.31.16-.37s.28-.05.42-.08c-.03.05-.01.22-.12.22z"></path><path d="m82.73 165.41c-.22 0-.49-.08-.49-.21s0-.16 0-.22c-.19.08-.48 0-.47-.24.4-.58 1.13-.46 1.49-.46v.16h.18a1.23 1.23 0 0 1 -.71.97z"></path><path d="m72.4 160.43h.11c-.13.23-.12.67-.52.82-.22.12-.41.05-.68.05a.84.84 0 0 1 -.13-.94c.21 0 .42-.35.63-.41v-.06.15l.53-.08c-.05.17.06.32.06.47z"></path><path d="m80.53 162.57.02.03-.1.05-.02-.03z"></path><path d="m79.06 164.55s0-.07 0-.09.16.16.19 0c-.02.1-.14.2-.19.09z"></path><path d="m77.73 165.07s-.14.16 0 .22c-.26.44-.76-.21-.92.39-.3-.1-.57.17-.81-.11s0-.5.19-.68l.28-.24a.09.09 0 0 0 .14 0l.15-.08c0 .26.23 0 .38.06h-.05c.15.2.32 0 .5.09h.14c.11.16 0 .28 0 .35z"></path><path d="m68 168.82c.12 0-.17.11 0 .16-.17.07-.07.24-.17.31-.31 0-.05.46-.55.39-.1.29-.4-.06-.54.08a.66.66 0 0 1 -.43-.68c.06-.3.08-.12.19-.46l.08-.15c.17.21.09-.34.32-.13.11-.06.15-.18.3-.2a.13.13 0 0 0 0 .12c.1.05.19 0 .27-.05v.12h.21s0 .08 0 .13h.13c.28.16-.07.27.19.36z"></path><path d="m66.99 167.25.25-.13-.14.09z"></path><path d="m59.26 164.07v.11c-.13 0 0 .14-.09.2-.21.05-.49.19-.62 0v-.37c.12 0 .17-.16.25-.23 0 .13.21 0 .2 0v.06c.14 0 .18 0 .34.1-.1-.02-.13.06-.08.13z"></path><path d="m59.13 163.91.01.03-.15.04-.01-.03z"></path><path d="m55.5 155.88a.3.3 0 0 1 -.36-.36.3.3 0 0 1 .33-.19c.19.05.33.52.03.55z"></path><path d="m56.73 162.75a.32.32 0 0 1 -.28.21c0-.07-.18-.1-.1-.21a.43.43 0 0 1 .26-.2s.16.09.06.19z"></path><path d="m56.53 162.73h-.05c0 .09.09-.2.15 0s-.06.02-.1 0z"></path><path d="m52.24 161.34h.19c-.13 0-.18.12-.23.23a.11.11 0 0 0 .07.1c-.11 0-.14.09-.22.14l.11.13c-.37 0-.9.45-1.29-.08l-.09-.63c0-.32.22-.39.29-.64v-.08l.21.1c.05-.13.05 0 .15 0l.22-.22v.13s.15 0 .21-.06c0 .14.15.24.35.41 0-.06.06 0 .11-.06s-.08.1-.12.14h.26c-.02.24-.31.18-.22.39z"></path><path d="m83.56 121.25c-.11-.12-.09-.39.13-.37l.17.06c.06.17-.11.4-.3.31z"></path><path d="m45.17 140.48.01.06-.18.03-.01-.06z"></path><path d="m83.23 122.43c-.07 0-.08 0-.11-.09s.17-.23.24-.11-.01.17-.13.2z"></path><path d="m42.59 140.38v-.21a.76.76 0 0 1 .95.2c-.27 0-.69.25-.95.01z"></path><path d="m80 122.25c-.19-.16-.33-.4 0-.58a.52.52 0 0 1 .47.15c-.03.18-.27.41-.47.43z"></path><path d="m99 130.4.07-.06c-.38.43-1 1-1.57.95-.11-.21.19-.38.4-.54.37-.34.85-.24 1.19-.55.07.07-.15.12-.09.2z"></path><path d="m94.94 132c-.17 0-.37.14-.5.07 0-.26.41-.44.64-.58h.46a1.88 1.88 0 0 1 -.6.51z"></path><path d="m94 134c-.08 0-.15 0-.21 0l-.06-.08c.31-.4.73-.37 1.11-.57a1.89 1.89 0 0 1 -.84.65z"></path><path d="m94.08 133.75c0 .06.12-.22.23-.13z"></path><path d="m94.12 134.8v-.05.05l.19-.08c-.08.04-.11.12-.19.08z"></path><path d="m84.31 142.57c-.06 0-.08 0-.1-.08h.17c-.06.02-.06.05-.07.08z"></path><path d="m69.91 138.08a.22.22 0 0 1 -.21-.21.26.26 0 0 1 .32-.12c-.02.13.13.25-.11.33z"></path><path d="m68.61 145.51a.33.33 0 0 1 -.32 0c.07-.12 0-.28.15-.34s.26.21.17.34z"></path><path d="m69.32 149.19c-.23 0-.61 0-.62-.26s0-.46.33-.57.37.11.56.09c.12.29-.11.49-.27.74z"></path><path d="m68.49 146.41c-.07 0-.14.07-.21 0a.28.28 0 0 1 0-.29c.2-.04.39.18.21.29z"></path><path d="m64.87 140.14c-.1 0-.22 0-.32-.06 0-.16-.12-.27.06-.43.39-.14.55.27.26.49z"></path><path d="m82.34 132.38.26-.25-.02.17z"></path><path d="m80.38 132.72c-.24 0-.56.11-.56-.18.06-.55.82-.57 1.16-.72h.08c0 .1.12.11.07.23.34-.3.32.23.65 0a2.51 2.51 0 0 1 -1.4.67z"></path><path d="m65.77 146.26c-.17.12-.2-.11-.29-.15a.21.21 0 0 1 .34-.11c.06.1 0 .17-.05.26z"></path><path d="m62.83 141.53c-.13 0-.1-.15-.13-.24s.18-.08.26-.13.1.39-.13.37z"></path><path d="m63.25 144a.22.22 0 0 1 -.18-.31c.13 0 .25-.12.32 0s-.1.24-.14.31z"></path><path d="m62.49 142c-.21-.1-.65.3-.61-.17.23 0 .42-.34.69-.15-.03.09.01.22-.08.32z"></path><path d="m77.08 135.05c-.18.08-.33.15-.35.36.08.06.28 0 .27.17-.8.19-1.68.76-2.41.26a.46.46 0 0 1 0-.49.93.93 0 0 0 .46-.38c.4.15.72-.48 1.17-.37-.07 0 0 .1-.1.17a4.46 4.46 0 0 1 1 .12z"></path><path d="m74.07 132.58c-.32-.5.52-.53.77-.66l.6.07a1.39 1.39 0 0 1 -1.37.59z"></path><path d="m74.44 132.41.06-.27.28.16-.27-.12z"></path><path d="m72.53 132.41.2.04-.13.11z"></path><path d="m70.64 132.88a1.33 1.33 0 0 1 -.34-.11c-.08-.14 0-.31.14-.4a1.52 1.52 0 0 1 1.09-.16v-.08a1.6 1.6 0 0 0 -.1.17c0 .15.2 0 .3 0a1.37 1.37 0 0 1 -1.09.58z"></path><path d="m70.91 132.47.14.05c0-.22 0 0 .15-.07-.26-.03 0 .17-.29.02z"></path><path d="m69.41 132.37a1.3 1.3 0 0 1 -1.1.5c-.17-.05-.43-.15-.26-.36a1.64 1.64 0 0 1 .95-.51c.18.2.45 0 .68 0-.02.18-.55.17-.27.37z"></path><path d="m69 132.54-.07-.05.05-.01z"></path><path d="m61.83 123.12c-.11 0-.09-.12-.13-.18.07-.34.5-.36.75-.4.16.18.23-.16.41 0-.32.19-.56.61-1.03.58z"></path><path d="m67.41 161.33c-.31-.42.39-.52.68-.73.84-.34 1.48.19 2.24.05l.44.07c-1.04.07-2.3 1.28-3.36.61z"></path><path d="m54.69 132.57c-.06 0-.17 0-.23-.1a.34.34 0 0 1 .08-.47l.62-.16s0 .07 0 .12l.3.09c-.01.42-.46.44-.77.52z"></path><path d="m59.42 131.2.2-.11-.05.07z"></path><path d="m49.54 133.38-.06.12c.07.07.14 0 .21 0-.14.34-.45.39-.76.6-.23-.07-.52-.07-.64-.37s.14-.36.23-.53.53.12.74-.12v.07l.53.25c-.1-.01-.19.07-.25-.02z"></path><path d="m61.95 156.63.28.02-.25.07z"></path><path d="m61.41 155.37c-.13.1.1-.24.2-.18l-.48-.15.59.06z"></path><path d="m61.22 155.35c0 .11-.22.1-.3.14s-.29-.1-.29-.27.17-.07.25-.11-.16.11-.22.22a.47.47 0 0 0 .48 0c0-.05 0-.06-.08-.09l.22-.11-.15.15z"></path><path d="m60.47 157.3h.06-.06l.23-.17c-.14-.01-.17.09-.23.17z"></path><path d="m52.81 141.75c-.59 0-1.16.69-1.81.34-.21-.25 0-.57.28-.62.53-.18 1 .18 1.5.18z"></path><path d="m45.33 132.4c-.24 0-.53.15-.69-.12s.14-.31.21-.45.38 0 .57 0c0 .09 0 .18.09.16-.07.22.03.2-.18.41z"></path><path d="m52.33 149.82c-.23 0-.53 0-.65-.16a.32.32 0 0 1 .25-.42c.28-.06.6-.16.82 0 .13.35-.24.39-.42.58z"></path><path d="m44.22 131.18c-.13.15.14.19.08.24s-.15-.06-.17-.08l-.06-.05a.3.3 0 0 1 .45-.09c-.08.02-.18-.11-.3-.02z"></path><path d="m54.43 162a.8.8 0 0 1 -.75-.09c-.07-.23-.09-.55.2-.57s.93.27.55.66z"></path><path d="m52.45 156.71c0 .09.08.09.13.12 0 .25-.28.09-.35 0-.59.21-1.26.6-1.9.17a.51.51 0 0 1 .18-.64l1.05-.17-.05.05a4.6 4.6 0 0 1 1.26.33c-.11.07-.26.04-.32.14z"></path><path d="m49.49 147.09c0-.11-.09-.15-.14-.23v.06h-.09v-.06c.06 0 .07 0 .09-.06-.14-.12-.32-.13-.36.07.46 0 .11.41.37.49-.26.11-.86.36-1.08-.09a.65.65 0 0 1 .24-.45 2.34 2.34 0 0 0 .68-.25s-.09 0-.12.07v.06h.36c-.05.07.09.17 0 .27h.29c-.09.03-.22.03-.24.12z"></path><path d="m40.27 124.66c-.22-.11 0-.35 0-.44.27-.26.63.13.85-.15-.2.26-.47.65-.85.59z"></path><path d="m49.12 147.08c-.09 0 .07-.12.08-.08v.06z"></path><path d="m49 147.3a.89.89 0 0 0 -.22-.21l.06-.12c-.06 0-.06-.08-.07-.14l.23.17c0 .14-.16.18 0 .3l.06-.16c.01.08-.06.11-.06.16z"></path><path d="m41 131.55c-.24-.07-.55.13-.7-.26s.28-.26.4-.47c.15-.06.24.16.39 0-.04.18.21.71-.09.73z"></path><path d="m48.44 155.28a1 1 0 0 1 -.89.16c0-.1-.22-.17-.09-.28.19-.36.66-.21 1-.18-.2.08.03.21-.02.3z"></path><path d="m48.03 155.21.29-.05v.04z"></path><path d="m37.78 129.27c.2 0 0 .2.07.24-.16.07-.45.24-.62 0s.14-.23.23-.4h.38z"></path><path d="m37.7 129.34-.2.03.1-.16-.03.05.21.07-.06.12z"></path><path d="m41.64 150v.05h-.13v-.11l.25.11s-.09-.05-.12-.05z"></path><path d="m40.52 150.22c0-.19.21-.25.26-.3h.52l-.11.17c.05-.29-.26-.16-.31-.17s-.11.16-.06.26c.19.28.42 0 .55 0v.05h.33c-.39.13-.87.39-1.18-.01z"></path><path d="m71.8 131.13h.07l-.06.01z"></path><path d="m71.67 131.13.06-.02.01.05z"></path><path d="m74.49 145.64s-.08 0-.11.07a.13.13 0 1 1 .08-.24.18.18 0 0 1 .03.17z"></path><path d="m74.45 146.16s0-.06-.06-.09a.15.15 0 0 1 .1-.09c.08.02.09.2-.04.18z"></path><path d="m89.42 133.41a.06.06 0 0 1 .06-.09c.04.08-.02.13-.06.09z"></path><path d="m78.48 138.52.01.02-.05.01-.01-.02z"></path><path d="m89.24 133.72s0 0 0 0 .06-.05.07 0-.03 0-.07 0z"></path><path d="m77.77 138.6v-.06a.21.21 0 0 1 .27 0c-.04.03-.18.11-.27.06z"></path><path d="m88.35 133.47c0-.06-.07-.13 0-.16a.14.14 0 0 1 .13.06.13.13 0 0 1 -.13.1z"></path><path d="m92.67 137.19c-.11.07-.28.16-.42.08s.07-.08.13-.1.21 0 .31 0-.03-.01-.02.02z"></path><path d="m67.73 143.62s0 0 0 0v.08c.1.1-.09.11-.06.19a.4.4 0 0 1 -.34 0c-.07-.11 0-.12-.11-.22.09-.05-.08-.22.1-.23s.14 0 .21-.09 0 0 .09.07h.06c0 .07 0 .1.1.13s-.03.04-.05.07z"></path><path d="m91.63 137.2s-.1 0-.13 0 .13-.08.19-.1h.11a.38.38 0 0 1 -.17.1z"></path><path d="m91.29 137.64s0 0-.05 0c.09-.08.19 0 .29 0a.43.43 0 0 1 -.24 0z"></path><path d="m91.33 137.59s0-.05.06 0z"></path><path d="m91.29 137.87s.01.01 0 0z"></path><path d="m88.69 139.27s0 0 0 0z"></path><path d="m85.12 137.52s-.05 0-.06-.06a.08.08 0 0 1 .09 0s.03.06-.03.06z"></path><path d="m84.8 139.57a.08.08 0 0 1 -.08 0s0-.08 0-.1.1.07.08.1z"></path><path d="m85 140.61c-.06 0-.15 0-.15-.09s0-.12.07-.15.09 0 .14 0-.01.17-.06.24z"></path><path d="m84.78 139.82a.07.07 0 0 1 -.06 0 .08.08 0 0 1 0-.08s.1.06.06.08z"></path><path d="m83.79 138.05s-.06 0-.09 0 0-.08 0-.12.16.07.09.12z"></path><path d="m88.49 136.38.08-.05-.01.05z"></path><path d="m88 136.38c-.06 0-.15 0-.14-.08s.23-.12.33-.14 0 0 0 .07.08.08.17 0a.69.69 0 0 1 -.36.15z"></path><path d="m84.09 139.76s0 0-.08 0a.05.05 0 0 1 .09 0s-0-.03-.01 0z"></path><path d="m83.26 138.44s0-.05 0-.07 0 0 .06 0a.06.06 0 0 1 -.06.07z"></path><path d="m83.41 139.13a.06.06 0 0 1 0-.08s.06 0 .08 0-.07.05-.08.08z"></path><path d="m83.18 138.57c-.06 0-.17.08-.16 0s.1-.1.18 0-0-.03-.02 0z"></path><path d="m87 136.88s-.09 0-.09.08.07 0 .06.06c-.21 0-.45.15-.63 0a.11.11 0 0 1 0-.13.38.38 0 0 0 .13-.1c.1.06.2-.11.31-.06s0 0 0 .05a.9.9 0 0 1 .27.07z"></path><path d="m86.3 136.09c-.08-.15.15-.14.22-.16h.17a.39.39 0 0 1 -.39.16z"></path><path d="m86.4 136.05.03-.07.07.05-.07-.04z"></path><path d="m73.78 139v-.05c.11-.2.42-.19.62-.18h.14a.87.87 0 0 1 -.76.23z"></path><path d="m85.89 136 .05.01-.04.03z"></path><path d="m85.36 136.08h-.09s0-.09 0-.11a.38.38 0 0 1 .31 0s.06 0 .08 0a.34.34 0 0 1 -.3.11z"></path><path d="m85.44 136c0-.06 0 0 0 0s.08 0 0 0z"></path><path d="m85 135.92a.34.34 0 0 1 -.31.12s-.11 0-.07-.1a.43.43 0 0 1 .27-.13c0 .06.12 0 .18 0s-.07.05-.07.11z"></path><path d="m84.92 135.96-.02-.01.01-.01z"></path><path d="m83 133.25s0 0 0-.05.16-.1.24-.11.07-.05.12 0-.26.17-.36.16z"></path><path d="m84.78 143.94c-.08-.12.08-.14.14-.19s.35.07.52 0h.1c-.24.07-.49.39-.76.19z"></path><path d="m80.89 136s0 0-.07 0a.09.09 0 0 1 0-.13l.17-.06s0 0 0 0h.09c.03.19-.08.19-.19.19z"></path><path d="m82.23 135.56.05-.03-.01.01z"></path><path d="m79.44 136.38s0 0 .06 0-.12.12-.2.19-.15 0-.19-.08 0-.11.05-.16.15 0 .2-.06l.15.06s-.05.07-.07.05z"></path><path d="m83.36 142.64h.07l-.06.02z"></path><path d="m83.2 142.29s0-.06 0 0h-.12.15z"></path><path d="m83.15 142.29s-.05 0-.07 0-.07 0-.08-.07 0 0 .06 0 0 0 0 .07a.1.1 0 0 0 .12 0z"></path><path d="m83 142.83v-.05s0 .03 0 .05z"></path><path d="m80.6 138.63c-.16 0-.29.22-.48.14s0-.16.06-.18.27 0 .41 0z"></path><path d="m78.21 136.26c-.07 0-.15.06-.21 0s0-.09 0-.14a.45.45 0 0 1 .16 0s0 0 0 0 .1.07.05.14z"></path><path d="m80.75 140.89c-.06 0-.14 0-.17 0a.08.08 0 0 1 0-.12c.07 0 .15-.06.21 0s0 .06-.04.12z"></path><path d="m77.84 136s0 0 0 .06 0 0-.05 0a.1.1 0 0 1 .13 0s-.05-.12-.08-.06z"></path><path d="m81.75 144.2a.17.17 0 0 1 -.18 0c0-.06 0-.15 0-.16s.26.06.18.16z"></path><path d="m81.05 142.79s0 0 0 0-.07 0-.09 0-.28.2-.46.1a.15.15 0 0 1 0-.19l.25-.07a1.91 1.91 0 0 1 .33.06s-.02.07-.03.1z"></path><path d="m79.91 140.21s0 0 0-.06-.09 0-.09 0 0 .11.11.12-.21.13-.28 0a.15.15 0 0 1 0-.13.56.56 0 0 0 .17-.09s0 0 0 0h.09s0 0 0 .07h.09s-.09.06-.09.09z"></path><path d="m76.42 134.34c-.07 0 0-.1 0-.13s.19 0 .25-.08c-.07.08-.13.2-.25.21z"></path><path d="m79.81 140.21s0 0 0 0z"></path><path d="m79.78 140.28s0 0-.07-.05 0 0 0 0h.07s0 .05 0 .08v-.05a0 0 0 0 1 0 .02z"></path><path d="m68.81 138.46h.07s-.27 0-.15.13c-.19 0-.41.11-.56 0h.07c-.1.05-.21.18-.35.14s-.07-.05 0-.09c.1-.25.49 0 .5-.38a.52.52 0 0 1 .4-.15l.12-.09c-.1 0 0 .11 0 .16h.08v.07h.11s-.27.13-.29.21z"></path><path d="m76.91 136.22c-.07 0-.15.07-.21 0s.07-.09.1-.16.07 0 .11 0 .09.14 0 .16z"></path><path d="m80 142.51a.22.22 0 0 1 -.22.07s-.06 0 0-.07.15-.08.23-.08-.01.05-.01.08z"></path><path d="m79.88 142.5.07-.02.01.01z"></path><path d="m75.89 135.75c.06 0 0 .06 0 .07s-.12.09-.18 0 0-.07 0-.12h.12z"></path><path d="m75.88 135.78-.06.02.02-.05-.01.01.07.01-.01.04z"></path><path d="m74.75 136.38c0 .06-.09.15-.18.13a.22.22 0 0 1 -.17-.06c0-.14.14-.15.21-.23s.1 0 .14 0a.13.13 0 0 0 0 .16z"></path><path d="m73.84 134.22s0 0 0 0c-.12 0-.21.19-.35.16s0-.16.06-.19a.65.65 0 0 1 .27-.05z"></path><path d="m78.81 143.28a.31.31 0 0 1 -.24.14.18.18 0 0 1 -.16-.1.15.15 0 0 1 .06-.18s.11 0 .15-.07c0 .14.17 0 .12.1h.06s-.03.09.01.11z"></path><path d="m78 141.3h.07z"></path><path d="m74.15 135.81v.06c-.1 0-.26.14-.36 0s0-.16.11-.23.07 0 .11 0 0 0 0 0 0 0 .12 0h.07c-.07.1.04.16-.05.17z"></path><path d="m77.71 141.41s0-.07.05-.09h.14v.05c0-.08-.08 0-.09 0s0 .05 0 .08.11 0 .14 0h.05c-.08-.03-.19.06-.29-.04z"></path><path d="m75.45 140.81v-.05s-.01.04 0 .05z"></path><path d="m73.23 137.6s0 0 0 0 0 .05.05.06-.03-.06-.05-.06z"></path><path d="m74 141.64s0-.03 0 0z"></path><path d="m73.89 141.63v.06s0 0 0 .06.08 0 .1-.08c0 .07-.12.08-.21.09a.12.12 0 0 1 -.06-.06.24.24 0 0 1 .25-.08z"></path><path d="m73.78 141.61.02.01-.02.04z"></path><path d="m70.31 138.42c-.08 0-.1-.07-.09-.14s.06-.08.1-.1 0 .1.09 0 0-.08 0-.1v.05s.08 0 .13 0h.07c-.11.18-.17.28-.3.29z"></path><path d="m72.4 140.8c-.1 0-.17.14-.28 0s0-.13.07-.16l.14-.05h.08s-.04.21-.01.21z"></path><path d="m72.25 140.83s.06 0 .08 0v.05s0-.09-.06-.11.11 0 .13-.07-.03.1-.15.13z"></path><path d="m72.23 140.78s0 0 0 0z"></path><path d="m70.81 137.83s0-.05 0-.07.09-.08.16-.1-.06 0-.08.07v.05s0-.06.07 0a.21.21 0 0 1 -.15.05z"></path><path d="m72 141.47.06-.06s0 0 0 0v-.08s0 0 .07 0h-.05v.07l.15-.05c-.1.06-.16.13-.23.12z"></path><path d="m63 139c0 .1.1 0 .14 0s-.1 0-.11.07a.12.12 0 0 0 .15 0c-.05.08-.23.07-.22.2s.08 0 0 .06-.1.15-.19.2a1.69 1.69 0 0 1 -.27.1c.11.08-.14.06-.09.15s-.16-.06-.18 0a.44.44 0 0 1 -.34-.22c-.07-.06 0-.09 0-.18s0-.08 0-.1a.15.15 0 0 0 .08-.12c0-.06 0-.14.07-.14s0 0 0 0a.09.09 0 0 0 .06-.06 1 1 0 0 0 .32-.29l.07-.13c0 .05-.06.13 0 .17s.08 0 .12-.06c.06 0 .1-.08.18 0s0 .14.11.16l.15-.05a.16.16 0 0 0 -.05.24z"></path><path d="m71.13 141.24s0 0 0-.05-.07 0-.11 0 0 0 .09 0-.11 0-.16 0 0-.11.09-.12.1 0 .16 0-.03.18-.07.17z"></path><path d="m70.08 141.34c-.08 0-.18-.06-.17-.11s0-.07 0-.09-.18 0-.16-.12c.19-.19.46-.09.59-.06v.06h.07a.45.45 0 0 1 -.33.32z"></path><path d="m59.38 144.3s0 .07-.07.12a.08.08 0 0 0 .07 0s-.1 0 0 .1c-.14 0-.12.16-.25.18s-.22.06-.31.09-.07-.05-.1-.07l-.09-.25a.38.38 0 0 0 .07-.17.38.38 0 0 1 -.23-.11c-.1-.12 0-.18.05-.29s.13 0 .17-.1c0 .12.14 0 .22 0s-.07 0-.05.08h.1a.08.08 0 0 0 0 .05s0 0 0 0v.05c.05 0 .09 0 .09.08h.16a.1.1 0 0 0 .09 0h.11c-0 .13-.13.2-.03.24z"></path><path d="m66.39 138.84c-.06.08-.08.25-.25.3a.88.88 0 0 1 -.28 0 .32.32 0 0 1 0-.37c.09 0 .19-.13.28-.15v.06h.22c.01.04.04.1.03.16z"></path><path d="m69.41 140.11h.04v.01h-.04z" transform="matrix(.94534798 -.32606318 .32606318 .94534798 -41.9 30.3)"></path><path d="m68.76 140.78s0 0 0 0 .06.06.07 0-.06.04-.07 0z"></path><path d="m68.22 140.9s-.07.06 0 .09c-.12.15-.28-.13-.37.09-.12-.05-.23 0-.31-.09s0-.18.11-.24l.12-.08a0 0 0 0 0 .06 0h.06c0 .1.09 0 .14 0 0 .08.12 0 .19.06s.01.13 0 .17z"></path><path d="m64.32 142s-.07 0 0 .06 0 .09-.08.12c-.12 0 0 .18-.22.14s-.15 0-.21 0a.25.25 0 0 1 -.15-.27c0-.12 0 0 .08-.18v-.06c.06.09 0-.13.13 0s.06-.07.12-.08a0 0 0 0 0 0 0s.07 0 .11 0h.08s0 0 0 .05h.05c.11.09-.02.13.09.22z"></path><path d="m63.95 141.32.1-.04-.06.03z"></path><path d="m60.88 140.06c-.06 0 0 .05 0 .08s-.2.08-.26 0v-.14s.07-.06.11-.1.08 0 .08 0a.18.18 0 0 1 .14 0 0 0 0 0 0 -.07.16z"></path><path d="m60.77 140h.06v.01h-.06z" transform="matrix(.94529106 -.32622817 .32622817 .94529106 -42.36 27.5)"></path><path d="m59.37 136.92a.11.11 0 0 1 -.16-.12.15.15 0 0 1 .16-.09c.08.01.14.2 0 .21z"></path><path d="m59.48 142.15s0 0 0 .09a.17.17 0 0 1 -.18 0 .13.13 0 0 1 0-.14c0-.07 0 0 .09-.08s.12 0 .14.08z"></path><path d="m59.19 142.48s0 0 0-.07.07 0 .06.05z"></path><path d="m59.83 139.59s-.06.07-.11.09-.08 0 0-.08a.22.22 0 0 1 .12-.09s.06 0 0 .07z"></path><path d="m59.75 139.58s0-.08.06 0-.04.01-.06 0z"></path><path d="m57.91 139.17h.09c-.06 0-.07.05-.1.1s0 0 0 0-.06 0-.1.06h.05c-.16 0-.37.21-.55 0v-.24c0-.13.1-.16.12-.27h.09s0 0 .07 0l.09-.1s0 0 0 .05.06 0 .09 0 .07.09.16.14 0 0 0 0 0 .05 0 .07h.11c-.03.12-.16.11-.12.19z"></path><path d="m58.33 141.43s0 .07 0 .09 0 0-.07 0 0 .1-.06.1 0 .06.07.09-.09 0-.16 0-.21 0-.26.12-.08 0-.1 0 0 0 0 0-.15-.14-.2-.11-.06-.06-.1-.07a.08.08 0 0 0 -.06-.06c.08-.09-.13-.05 0-.13s-.06-.05-.08-.05.08 0 .1 0c-.14-.06.06-.13 0-.23a0 0 0 0 0 .06 0c.09 0 .09-.1.14-.11s.18.05.21-.1.13.14.19 0v-.06c.05 0-.06.1 0 .12s0-.05.07-.08-.07.17.07.15l.09-.06a.3.3 0 0 0 0 .13c0 .07.09-.06.1 0s-.07.05 0 .09h.13c-.16.02-.07.13-.14.17z"></path><path d="m55 140.64s0 0 0 0-.06.14 0 .21c-.1 0 0 .2-.14.19s0 .11-.07.08 0 0 0 .05-.23.11-.36.06-.09-.09-.16 0c-.05-.06-.17 0-.14-.16l-.05-.07a.32.32 0 0 0 0-.22s.13-.06.08-.14 0-.09.08-.14v-.06s0 .05 0 .06a.24.24 0 0 0 .12-.14s0 0 0 .05.05-.05.1-.05h.05c.06 0 .09 0 .14-.05s0 .08 0 .09h.08s0 0 0 0v.11c.07 0 .07-.09.12-.07s.24.12.15.2z"></path><path d="m57.3 144.26s-.06 0-.06-.07.09-.06.12 0 .02.05-.06.07z"></path><path d="m57.44 147a0 0 0 0 1 -.07 0s0-.09 0-.12 0 0 .08 0a.11.11 0 0 1 -.01.12z"></path><path d="m54.79 142s-.08 0-.12 0 0-.08 0-.1-.07.08 0 .09v-.06s.15-.01.12.07z"></path><path d="m55.32 144.16a.49.49 0 0 1 0 .13.37.37 0 0 1 -.22.14c-.13-.05-.2-.05-.22-.17s0-.09 0-.09.12-.07 0-.12.09 0 .11 0 0 0 .06 0 .08 0 .12 0 0 0 0 .06 0 0 .08 0l.08.05h.05z"></path><path d="m54.9 143.87s-.12 0-.08.11 0 0 0 .05 0 0-.07 0 0 0 0 .06 0 0-.08 0v.05s0 0 0 0-.14 0-.21 0-.05-.13-.15-.11c.07-.14-.12-.17 0-.34s0-.09 0-.1 0 0 .08 0 .15-.09.18-.15.07 0 .1 0v.06s.07 0 .08-.06 0 .17.13.12 0 .06 0 .09c.06-.03-.1.17.02.22z"></path><path d="m53.18 143.52c0 .06.07.07.09.07a.08.08 0 0 0 0 .08s.05 0 .07 0-.13 0-.09.09l-.06.05h.06s-.12.06-.08.13v.06c-.06 0 .06.12 0 .11s0 .19 0 .24 0 .06 0 .08 0 0-.07 0 0 0-.06.06-.12-.06-.16 0c0-.1-.08-.09-.11-.14s.05.1 0 .16 0-.17-.16-.14v.06s-.07-.11-.11 0l-.07-.07s0 0 0 0a.13.13 0 0 0 -.08-.11v-.12c-.09 0 0-.09-.12-.07.06-.09-.07-.11-.11-.11s.06 0 0-.07-.07 0-.11 0h.08s0-.09-.05-.12.09-.12 0-.14 0 0 0 0-.06 0-.08-.08.15.08.13 0l-.06-.13.09.08c.15-.1-.06-.29.12-.36 0 .07.09.06.13 0s0-.14.11-.15.18.09.22 0 0-.1 0-.12 0 .14.06.17l.06-.07s0 .09 0 .11h.05s0 .09 0 .09h.06s0 0 0 .08.08.05.09 0 0 .09.06.08h.06s-.06.07 0 .13h.1s0 .06 0 .09h.1s-.17-.08-.16-.02z"></path><path d="m62.23 143.81c-.07 0-.14.08-.21 0s-.05-.24.09-.22h.11c0 .07.09.07 0 .15s-.02.03.01.07z"></path><path d="m61.81 143.76-.07.06z"></path><path d="m61.58 143.94.1-.09.01.02.02-.03.01.03z"></path><path d="m61.47 144.12h.09c-.06 0-.07.08-.08.14a.42.42 0 0 1 -.32.18c-.09 0-.19-.1-.28 0s.05-.06 0-.08-.11-.12-.17-.17 0-.13 0-.22.09-.06 0-.11h.06c0-.05 0-.1 0-.14h.09c0-.07.14-.1.18-.14s.15-.07.18-.14-.05.18.06.22 0 0 0 0 0 .14.06.15l.1-.16c.01.22-.09.35.03.47z"></path><path d="m61.53 144-.05.05z"></path><path d="m60.72 143.58h.01l.02.05z"></path><path d="m53.21 265.21c-.13 0-.25 0-.21.15.13 0 .25.03.21-.15z"></path><path d="m55.88 267.15c.07-1-.4-1-1-.84.19.69.58 1.24 1 .84zm-.31-.84a.39.39 0 0 0 -.18 0 .12.12 0 0 1 .18 0z"></path><path d="m69.83 274.31c6.27 2.94-.16-4-.16-.18-.95-.06-.09.74.16.18z"></path><path d="m21.92 265.31a.32.32 0 0 0 .1.09s-.02-.1-.1-.09z"></path><path d="m22 265.4c0 .28.06-.3.21.15-.15-.49-.09-.13-.21-.15z"></path><path d="m23.93 268.39c2.06.83 1.32-2.73-.25-1.21-.57 1.04-.26.08.25 1.21z"></path><path d="m25.3 294.72c.39.11 1.17 1 1.66.08.11-1.22-1.15-.41-1.66-.08z"></path><path d="m39.77 279.87c1-.84-.59-2.44-1-.69.32.49.23.82 1 .69z"></path><path d="m33.64 278.25c-.25.22.12 0 .18 0z"></path><path d="m47.07 278.36c-1.39.75-1 1-.69 2.19 1.46.52 1.73-1.34.69-2.19z"></path><path d="m51.75 284.66c-.73-1.92-1.9 1.22-.38 1 .14-.35.5-.24.38-1z"></path><path d="m52 286.83c.08.18.2 1-.32.4.32.77.79-.23.32-.4z"></path><path d="m93.66 292.83-.13.11a.36.36 0 0 0 .13-.11z"></path><path d="m96.61 289.65c.14.18.61.56.08.53-1.24-2.26-2.57-.66-3.31-.73.65.53 0 1.23-.5 1.14a3.13 3.13 0 0 1 .78 2.24c.6-.64 1.74.32 2.38-.72.19-2.95 1.92-.21 2.48-2.07.14-1.45-1.24-1.04-1.91-.39z"></path><path d="m56.18 287.92c-.54.12-.3 1.84.23 1.8a1 1 0 0 0 -.23-1.8z"></path><path d="m59.79 293.81a3.89 3.89 0 0 1 0 .8c.98.92 1.1-1.61 0-.8z"></path><path d="m66.45 291.82c-1.37-.28-.87 1.57-.52 2.23.82-.15 1.76-1.57.52-2.23z"></path><path d="m67.44 298a2.66 2.66 0 0 0 .29 2.41 1.22 1.22 0 1 0 -.29-2.41z"></path><path d="m73.39 286.53c-.36-.1 0 .31-.07.48.17-.16.09-.31.07-.48z"></path><path d="m73.19 286.53-.09-.09c.03.06.05.08.09.09z"></path><path d="m73.32 287v.06s0 .01 0-.06z"></path><path d="m86.85 286.86c-1.91 0-3.14 1.29-.89 2 0-1 .45.8.34-.63.79 1.29 1.29-.73.55-1.37z"></path><path d="m83.72 290.68c-.51 3.09 1.67-1.71-.33.18.1.21.26.03.33-.18z"></path><path d="m91.53 275.24c.08 0 .24 0 .17-.13-.08.02-.24-.01-.17.13z"></path><path d="m94.7 271.55c.12-.17 0-.7-.23-.44.11-.06.27.26.23.44z"></path><path d="m94.41 271.22a.24.24 0 0 1 .06-.11.15.15 0 0 0 -.06.11z"></path><path d="m100.09 272c-.41-1.27-3.57-2-3-.55-.39 1.83 3.4 4.17 3 .55z"></path><path d="m115.43 268.29c-2.08.65-.62 3.92.29 4.84 1.93.07 2-5.13-.29-4.84z"></path><path d="m116.15 276.24-.25.17s.78-.33.25-.17z"></path><path d="m132.25 290.11c-.21 1.32.05 1.69 1 2.11.75-.85.44-2.79-1-2.11z"></path><path d="m138.35 276.25c.07-.69-.66-1.93-1.26-1-.02.75.81 2.21 1.26 1z"></path><path d="m138.36 274.19c.07-.29 0-.7-.37-.44a.41.41 0 0 0 .37.44z"></path><path d="m138.11 296.16c.17.16 0 .51.32.69 1.15-.27.09-2.11-.32-.69z"></path><path d="m69.06 267.12c-.06-.2-.17-.1-.29 0 .06.17.17.07.29 0z"></path><path d="m72.69 267.32c-.3-.95-1.11-.57-1.5-.23.6.5 1.32.85 1.5.23z"></path><path d="m37 273.25a.94.94 0 0 0 -.48-.56c-.46 0 .38 1.41.48.56z"></path><path d="m42.77 270.1c.07-.41-.31-1.27-.81-1.19-.22.46.43 1.48.81 1.19z"></path><path d="m21.7 281 .24-.43c-.35-.04-.31.14-.24.43z"></path><path d="m25.72 281.66c-.52-1.27-2.2-.79-2.66.19.72-.01 2.48 2.15 2.66-.19z"></path><path d="m43.71 266.74c.47-.11.09-.77-.16-.88s-.17.65.16.88z"></path><path d="m27.92 276c.9 1.11-.13 2 1.84 2.28 3.12 1.03 1.4-4.28-1.84-2.28z"></path><path d="m32.82 285.13c.58.34 2.68.91 1.7-.81-.94-.58-1.47.06-1.7.81z"></path><path d="m36.78 284.91c-.23.23 0 .27.21.37z"></path><path d="m38.72 286.3c0 .15.09-.17 0-.18z"></path><path d="m38.76 285.94c.73 1.34 2.59-.55.78-1.12-.81-.23-1.66.92-.78 1.12z"></path><path d="m42.77 287.36c2.86-1.28-1.39-3.18-1.06-.24.35.07.63-.29 1.06.24z"></path><path d="m64.26 287.69c-.77-.78-1.9 1-.52 1.28.38.76 1.37-.74.52-1.28z"></path><path d="m57.82 291 .2-.25c-.1.08-.22.17-.2.25z"></path><path d="m72 283.94c-1.86-2.2-1.71 1.09-1.77 1 .94.76 2.69.8 1.77-1z"></path><path d="m78.88 287.67c0-2.35-1.23-1.2-1.5-.16.52 1.79 1.73 1.73 1.5.16z"></path><path d="m80.12 288.5c.18.13.76.85-.07.57.73.52.64-.72.07-.57z"></path><path d="m122.78 273.36-.08.17a.44.44 0 0 0 .08-.17z"></path><path d="m125.49 267.68c-1.56-.2-1 1.43-1.09 1.7-2.26-1.76-2.78.44-3.53.69 1.52.68-.68 1.46.85 1.73.3 1.24 2.13 1.85 3-.19-1.48-3.05 3.21-1.37.77-3.93z"></path><path d="m92.27 290.69c-1.27-.76-.78 1.49.15 1-.07-.4.33-.3-.15-1z"></path><path d="m96 286.51c.36 1.43 2.39 1.77 1.66-.5-.85-.81-1.85-.77-1.66.5z"></path><path d="m100.86 291a3.15 3.15 0 0 0 1.59 2.2 1.36 1.36 0 1 0 -1.59-2.2z"></path><path d="m100.45 277.22v.07s.03-.02 0-.07z"></path><path d="m100.06 276.82s-.08-.06-.12-.06a.22.22 0 0 0 .12.06z"></path><path d="m100.27 276.7c-.41.11.14.32.18.52.08-.22-.07-.36-.18-.52z"></path><path d="m113.32 270.43c-1.74 1-.13 1.74.22 2.41.15-.17.31-.7-.07-.81 1.3.97.93-1.34-.15-1.6z"></path><path d="m112.63 275.34c-1.65.6.71.4-.09 1.41.68-.14.64-1.09.09-1.41z"></path><path d="m178.89 283.74c-.69.17.29 1.68.81 1.77 1.38-.12-.25-2.35-.81-1.77z"></path><path d="m116.17 291.94c.1.14.16 0 .23-.06-.09-.14-.15-.03-.23.06z"></path><path d="m118.12 291.32c.6.24 1.26.34 1.25-.21-.48-.69-1.02-.11-1.25.21z"></path><path d="m67.45 300.33h.22c-.18-.14-.18-.16-.22 0z"></path><path d="m83.28 293.27c.2.32-.12 1.33.35.48.76.34-.08-1.04-.35-.48z"></path><path d="m82.18 291.78c-.06.23.46.54.58.4-.03-.18-.41-.72-.58-.4z"></path><path d="m95.55 300.92c-1.13-.31.2 1.24.52.71 0-.3-.35-.43-.52-.71z"></path><path d="m85.57 291.29c0 .36.87.77.53.16-.16-.04-.51-.45-.53-.16z"></path><path d="m95.91 298.67c.35-.23-.13-.64-.37-.66s.04.57.37.66z"></path><path d="m91.56 294.1c-.07.28.38.84.63.43a.8.8 0 0 0 -.63-.43z"></path><path d="m95.29 297.15c.28.8.71.57.94.06-.61-.76-.56.03-.94-.06z"></path><path d="m134.79 284.35a1.91 1.91 0 0 0 -2.23 1.86c1.11.37 3.98-.67 2.23-1.86z"></path><path d="m62.8 268.94c.75-3.24-2.9-.15-2.4-.85-.06-.54-1.36-1.22-2.15-1.25-2.17 1 1.66 2.49 2 1.88-1.39 1.41 1.62.51 2.55.22zm-2.4-.48c.08 0 0 .09 0 .14s-.15-.13 0-.14z"></path><path d="m74.78 273.49.33-.06c-.11-.19-.22-.07-.33.06z"></path><path d="m77.54 275.61c.17-.66-.15-.23 0 .19.82-.13.78-.1 0-.19z"></path><path d="m78.54 275.22c-.27-.32-.12.07-.1.27.01-.1.21-.1.1-.27z"></path><path d="m77.73 275.22c.27.25.4.28 0-.06.97-.27-.05-.45 0 .06z"></path><path d="m75.71 271.83v.37c.17-.04.06-.2 0-.37z"></path><path d="m107.83 292.35c.38-5.69-5.4-.22-1.6 1.27-.53.56 4 .32 1.6-1.27z"></path><path d="m95.48 280.4c-.53-.06-.59.79 0 1.25 1.24.35 1.11-1.35 0-1.25z"></path><path d="m84.66 269.91c4.24 1.17 1.6-4.19.16-.66-1.19-.25.52.38-.16.66z"></path><path d="m103.13 284.16a.49.49 0 0 1 0 .11.09.09 0 0 0 0-.11z"></path><path d="m101.77 283.09c2.2 1.44 0 .38.92 1.15 1.76-.31-.43-2.92-.92-1.15z"></path><path d="m102 283.85.34-.05c-.34-.16-.2-.15-.34.05z"></path><path d="m162.24 281.7c.12.32.32-.57.43.55.76-.45-.37-1.73-.91-2-.7-.12-1.21 1.4-.43 1.3a2.4 2.4 0 0 0 -2.79 1.4.6.6 0 0 1 .35 1.09c.73.32 1.61.47 1.82 1.36 1.47-1 .29-3.28 1.53-3.7z"></path><path d="m91.41 270.48c.83 0 1.08-.84.17-1.17-.95.05-.58.8-.17 1.17z"></path><path d="m142.76 300c-1 .68.54 1.56 1.17 1.78.4-.59.01-2.11-1.17-1.78z"></path><path d="m105.77 274.92c-.12-.25-.19-.06-.31-.14-.03.16.19.12.31.14z"></path><path d="m105.47 274.89h-.1s.09.03.1 0z"></path><path d="m105.52 274.5c0-.9.63-.08.92 0 .13-1.59-2.2-.01-.92 0z"></path><path d="m106.37 274.62c0-.07-.25.14-.27.14.15.03.22-.14.27-.14z"></path><path d="m105.81 274.52c.09.11.1.47.29.24a.64.64 0 0 1 -.29-.24z"></path><path d="m119.12 275.11c.12.13.2.27.42.22-.07-.05-.34-.4-.42-.22z"></path><path d="m143.37 292.36a.12.12 0 0 0 .11 0z"></path><path d="m143.89 292.62v.06s.03-.02 0-.06z"></path><path d="m143.83 292.38c-.19-.09-.22-.17-.35 0 .28.03.52.45.35 0z"></path><path d="m122.21 268.81-.26-.23c-.14.13.22.36.26.23z"></path><path d="m122.56 268.3c.25.85-.31 0-.2.49 2.02-.03-.66-2.01.2-.49z"></path><path d="m122.35 268.53c-.1-.25-.05-.12 0 0z"></path><path d="m122.23 267.92c-.13 0-.18.08-.17.21a.68.68 0 0 1 .17-.21z"></path><path d="m122 268.48c.22.12 0-.25 0-.35a.5.5 0 0 0 0 .35z"></path><path d="m153.25 286.23c.07.73.28-.37-.17-.34.44-.36.71.77.6-.47-1.31-2.23-2.24 1.25-.43.81z"></path><path d="m132.85 272.58c.55.08.92.7 1.32 0 .14-1.5-1.88-1.53-1.32 0z"></path><path d="m153.6 289.07c-1-1.27-.77.93-.69 0 .64.27.7 1.27.69 0z"></path><path d="m132 268.29c0-1-1.44-.61-.23.1-.25-.05 0 .05 0 .12-.21.3-.08-.11.16.06-.17-.22-.27-.86.07-.28z"></path><path d="m185.75 277c-.09-.06 0 .17 0 .27z"></path><path d="m137 267.74c-.58.05-.75.68-.07.43.56.5-.48.58-.54.07-.39.96 1.94.39.61-.5z"></path><path d="m143.49 268.35a6.92 6.92 0 0 0 -2.89-1.72c-1.71 1.5 2.17 4.3 2.89 1.72z"></path><path d="m149 273.5c-.07-.12-.13 0-.2.06s.2 0 .2-.06z"></path><path d="m148.7 269.05c-.13-.3.32-.11.41.08-.04-.29-.54-.5-.41-.08z"></path><path d="m151.64 266.21c.56 1.43-1.35-.14-1.24.9.65 1.71 1.7 1.11 2.91 1.7 1.69-.67.05-3.14-1.67-2.6z"></path><path d="m188.15 267.35c-.62-.81-.88-1.56-1.75-.68.39 1.17 1.6 2 1.75.68z"></path><path d="m206.69 286.08c-.5.19.52 1.3.93 1.32 1.06-.26-.62-1.83-.93-1.32z"></path><path d="m193.49 269.74c.1.58.75.49.54-.17s-1.18-.3-.54.17z"></path><path d="m206.75 272.51c-1.05-4.47-5.45-5.05-3.08-.44a4.65 4.65 0 0 1 2.29 1c-.12-.76.17-.73.79-.56z"></path><path d="m224 289.29.19-.09c-.11-.03-.19.06-.19.09z"></path><path d="m224.37 289.15c.17-.25-.1-.11-.23-.13z"></path><path d="m180 280.75c-.09-.07-.1 0-.13.07s.13-.01.13-.07z"></path><path d="m181.52 279.72c-.41-.3-.62.1-.67.36.39.02.79-.08.67-.36z"></path><path d="m153.69 302.13c-.24.1-.21.42-.19.56.26-.13.83-.69.19-.56z"></path><path d="m152.71 301.64.1-.07c-.1-.02-.06.04-.1.07z"></path><path d="m153.52 294.26c-.13-.05-.13-.06-.13 0z"></path><path d="m168.42 293.22c-.11.11.16.16.29.27.36-.09-.14-.37-.29-.27z"></path><path d="m161.38 287.54c-.49 0 .2.49.28.28s-.19-.17-.28-.28z"></path><path d="m157.37 285.4c-.86-.34-.71.37 0 .61s.63-.35 0-.61z"></path><path d="m160.28 287c0 .14.37.22.41.12s-.37-.32-.41-.12z"></path><path d="m169.73 289.85c-.71 0 .34.68.44.32-.06-.17-.29-.17-.44-.32z"></path><path d="m164.93 301.19.14.13c-.07-.12.02-.38-.14-.13z"></path><path d="m166.28 300.31c-.86.76-.16.91.41.82.67-.26.31-1.27-.41-.82z"></path><path d="m162.13 286.15c.05.2.65.28.34 0-.11 0-.37-.15-.34 0z"></path><path d="m169.52 288.3c-.11 0-.26-.16-.35-.11-.26.14.54.52.35.11z"></path><path d="m166.35 286.92c.48 0 0-.37-.23-.24.1.09-.01.19.23.24z"></path><path d="m168.86 287.74c.31.4.52.21.55-.13-.49-.32-.31.12-.55.13z"></path><path d="m168 296.73c-1.72-1.13-1.86.76-2.28 1.36 1.02-.09 2.37-.3 2.28-1.36z"></path><path d="m171.27 298.54c-.56.07-.57.49-.43.87.35-.05 1.37-.49.43-.87z"></path><path d="m189.38 273.41c.84.52 0-2.39-.29-.72-1.73.23-1.04 2.55.29.72zm0-.4s0 0 0 0 .04-.01.04-.01z"></path><path d="m172.39 298.18h.18c-.1-.05-.25-.18-.18 0z"></path><path d="m173.59 298c0 .08 0-.1-.07-.06z"></path><path d="m173.8 297.1c-.55 0-.77.38-.52.86.24-.11 1.43-.3.52-.86z"></path><path d="m175.1 296.3c-.66.27-.09.8-.06 1.09.58-.16 1.13-1.19.06-1.09z"></path><path d="m190 300.57c-.38.19-.09.61-.09.91.27-.12.93-.85.09-.91z"></path><path d="m144.25 276.82c-1.37-.1-.72 1.09-1.24 1.47.6-.22 2.68-.7 1.24-1.47z"></path><path d="m184.23 291.36c.13-.05.3-.09.4 0 .73-1-1.47-.9-.4 0z"></path><path d="m182.76 293.78s0 .12 0 .16z"></path><path d="m186.78 287.19c-.5-1.17-2 0-.87.29-.02.39.75.11.87-.29z"></path><path d="m152.44 278 .17-.09c-.11-.05-.13.02-.17.09z"></path><path d="m154.35 278.55c.08.37.27.24.52.1a.42.42 0 0 1 -.52-.1z"></path><path d="m154.46 278.28c-.15.21.13.17.19.35-.3-.4.35-.35-.19-.35z"></path><path d="m154.79 278.29c.09.09.07.14.14.22.07-.1-.01-.2-.14-.22z"></path><path d="m152.63 277 .08.2c.08-.1-.01-.2-.08-.2z"></path><path d="m175.73 283.21c-.28-1.16-1.48 0-1 .59.27-.23.94-.22 1-.59z"></path><path d="m189.34 286c.17.29.34.28.65.43.79-.35-.51-1.11-.65-.43z"></path><path d="m165.48 278.38c0 .4.74.83.88.18.09-.32-.76-.56-.88-.18z"></path><path d="m191.19 286.07c-.58 0 .58.09 0 .3a.15.15 0 1 0 0-.3z"></path><path d="m150.28 271.66c.21.36.89.29 1 .19.22-.26-1.02-.68-1-.19z"></path><path d="m158 273c-.86 0-.76.89-.83 1.09.48.57 2.39-.6.83-1.09z"></path><path d="m170.8 278.91v.09a.06.06 0 0 0 0-.09z"></path><path d="m170.8 278.91c-2.19-5.07-5.92.08-1.13.8.43.51.18-1.38 1.13-.8z"></path><path d="m201 288.14c-.25.18.07.59.26.89-.05-.34.58-.8-.26-.89z"></path><path d="m193.12 284c-1.09-.05-.48.59.14.71.16-.21.42-.46-.14-.71z"></path><path d="m161.15 272.72c-1 .5.95 1 .38.13-.07-.12-.24-.08-.38-.13z"></path><path d="m196.68 283.85c.07.2.22 0 .31-.09-.15-.76-1.2-.04-.31.09z"></path><path d="m197.41 279.89c-.42-.05-.7-.34-.68.13-.28 1.08 2.08.98.68-.13z"></path><path d="m207.15 284.58c.62.46 1.18-.54.19-.84-.45.03-.16.91-.19.84z"></path><path d="m161.05 269.78c.52.11.32-.19.89 0 .53-1.4-2.68-1.13-.89 0z"></path><path d="m170.23 273.24h-.06s.06.02.06 0z"></path><path d="m170.41 273.2c-.11-.12-.12 0-.21 0s.14.01.21 0z"></path><path d="m201.66 281.16c0-1.08-1.89-.66-1.17-.06.13.52 1.01.31 1.17.06z"></path><path d="m170.69 272.91s-.11.12-.12.12.09-.11.12-.12z"></path><path d="m170.35 273c.08 0 .16.24.22.06-.04-.06-.1-.06-.22-.06z"></path><path d="m170.13 273c0-.21.31-.25.58-.11-.27-1-1.19.39-.58.11z"></path><path d="m178.06 270.67c.09.05.16.11.28 0-.05.02-.28-.12-.28 0z"></path><path d="m195.92 275.47s.02.01 0 0z"></path><path d="m195.92 275.47c-.06-.15-.26-.22-.29-.05a.63.63 0 0 1 .29.05z"></path><path d="m178.24 266.43c0 .1.21.12.21.06s-.22-.13-.21-.06z"></path><path d="m178.28 266.33c.15 0-.05-.13-.06-.2a.33.33 0 0 0 .06.2z"></path><path d="m178.68 266.35c-.16 0-.26-.13-.15.09 1.14-.44-.97-1.12.15-.09z"></path><path d="m178.27 266c-.08 0-.08.08-.05.15a.44.44 0 0 1 .05-.15z"></path><path d="m185.33 266.39c.33-.08.67.2.75-.29-.25-.88-1.41-.46-.75.29z"></path><path d="m200.34 271.41c.26 0 .45.12.42.34.47-.53-.89-.93-.41-.14.13.01.08-.11-.01-.2z"></path><path d="m12.36 284.59a.92.92 0 0 0 .54.23c.65-.25-.83-.82-.54-.23z"></path><path d="m10.86 283.73c-.28.12.26.37.47.31s-.33-.39-.47-.31z"></path><path d="m27.22 300.82c.06 0 .07 0 .08-.06s-.07.01-.08.06z"></path><path d="m28.18 299.84c-.29 0-.2.28-.28.38.41.03.73-.29.28-.38z"></path><path d="m30.42 279.65c.26-2.16-3.78-.3-2.16.63.68-1.05 1.24-.61 2.16-.63z"></path><path d="m33.43 294.3a.86.86 0 0 0 -.55 1.18c.52-.06 1.49-1.03.55-1.18z"></path><path d="m.83 300c-1 0-.46.85-.83 1.15.43-.23 1.93-.7.83-1.15z"></path><path d="m6.92 300.37.08-.07c0-.05-.07 0-.08.07z"></path><path d="m8.35 300.64c.08.27.21.16.39.05a.31.31 0 0 1 -.39-.05z"></path><path d="m8.41 300.44c-.09.16.11.11.16.24-.21-.26.16-.25-.16-.24z"></path><path d="m8.67 300.44c.05.05.05.09.1.14s0-.15-.1-.14z"></path><path d="m8.63 300.43s.02 0 0 0z"></path><path d="m7.06 299.71c.06 0 0-.09-.07-.14z"></path><path d="m23.87 302.46c-.54.1-.15.58-.34.81.47 0 1.32-.62.34-.81z"></path><path d="m16.88 299.69c-.46 0-.46.42 0 .54.35-.05.43-.44 0-.54z"></path><path d="m5.29 295.61c-.88.18.27.54.44.29s-.22-.22-.44-.29z"></path><path d="m10.24 297.07c-.45.15.52.33.77 0 .78-.78-1.15-1.07-.77 0z"></path><path d="m20.47 299.65c-.64-.83-1.2.4-.21.15.3.24-.16.09-.15.13s.36.07.36-.28z"></path><path d="m19.92 300c.12-.09.16-.07 0-.12.08.12-.01.12 0 .12z"></path><path d="m20.46 300s0 0 0-.06a.13.13 0 0 1 0 .06z"></path><path d="m44.19 289.62a7.62 7.62 0 0 0 -.24-2.25c-.54-.45-.76.72-.27.54-1.63.78-.53 1.38.51 1.71z"></path><path d="m37.15 302.36c-1 0 0 .77.3.36-.15-.13.08-.25-.3-.36z"></path><path d="m13 296c-.69.43.76.7.29.08-.06-.08-.18-.08-.29-.08z"></path><path d="m39.69 301.72c-.55.09.14.61.29.25-.12-.1.02-.17-.29-.25z"></path><path d="m40.06 299.11c-1 0-.26.91.33.59a.49.49 0 0 0 -.33-.59z"></path><path d="m47.58 301.36c-.32.15-.14.73.09.62.27.41.6-.64-.09-.62z"></path><path d="m13 293.12c-.92-.28-.71.77-.09.63.4.19.87-.4.09-.63z"></path><path d="m19.83 295.77c-.09-.08-.09 0-.15 0s.1.01.15 0z"></path><path d="m19.71 295.81h-.05z"></path><path d="m43.25 299.79c-.07-.79-1.42-.38-.86 0 .13.4.77.21.86 0z"></path><path d="m20 295.54s-.07.1-.08.1.08-.09.08-.1z"></path><path d="m19.8 295.42c.23.16.36.05 0-.13-.56.12-.39.62 0 .13z"></path><path d="m19.78 295.6s.13.17.16 0-.07.05-.16 0z"></path><path d="m25.3 293.46c.07 0 .13.08.22 0s-.22-.08-.22 0z"></path><path d="m38.53 295.84c-.1.18 0 0 .18.1-.04-.08-.11-.08-.18-.1z"></path><path d="m38.71 295.94s.02.06 0 0z"></path><path d="m25.2 290.32c0 .08.16.11.15.05z"></path><path d="m25.18 290c-.05 0-.05.06 0 .11a.36.36 0 0 1 0-.11z"></path><path d="m25.51 290.26c-.11 0-.2-.08-.1.07.8-.42-.79-.76.1-.07z"></path><path d="m25.22 290.27h.05c-.09-.14-.16-.18-.05 0z"></path><path d="m41.47 291.34c-.69-1.21-1.2.47-.08.24-.04-.26-.39-.36.08-.24z"></path><path d="m30.54 289.29c-.6 0-.24.66 0 .56.46.2.55-.43 0-.56z"></path><path d="m41.73 292.51c-.21.34 0 .3.22.21.26.52.15-.35-.22-.21z"></path><path d="m29.12 288.28c.17-.07-.46-.28-.28.27 0-.36.32-.19.29 0 .19-.06-.13-.26-.01-.27z"></path><path d="m50.9 281c4.26 1-1.3-4.78-1.49-1 .85.6.85 1.07 1.49 1z"></path><path d="m31.13 287.15c-.52.21.71.43-.15.31.02.47.86-.21.15-.31z"></path><path d="m33.23 286.13c-1-.73-1.2.61-.16.82.85.05 1.17-1.3.16-.82z"></path><path d="m40.41 268a.08.08 0 0 1 0-.05s0 .05 0 .05z"></path><path d="m46.78 284.94c-.58-.92-2.36-.53-1.07.53.78.24 1.1.23 1.07-.53z"></path><path d="m37.08 287.11s0 .09 0 .09.06-.09 0-.09z"></path><path d="m36.1 285.39c-.11-.1.11-.11.18-.05-.07-.11-.28-.1-.18.05z"></path><path d="m37.48 283.42c-.6 0-1.29.79-.85 1 .63.46 2.29-.42.85-1z"></path><path d="m41 278c1.12-.5-2.39-2.15-1.59-.38.42.31 1.06.74 1.59.38z"></path><path d="m42.32 278.5s0 .15 0 .19z"></path><path d="m51.53 276.74c.54-.1-.68-1-.78-.23.25.17.51.49.78.23z"></path><path d="m63.56 280.19c.38-.34-.63-.62-.65-.33s.48.42.65.33z"></path><path d="m47.05 271.67c.65.29.45-.5-.15-.41-.37.1-.06.41.15.41z"></path><path d="m46.73 270.91c-.08-.08-.23-.19-.24 0a.19.19 0 0 0 .24 0z"></path><path d="m54.1 275.9c-.14.22.19.38.38.35.08-.25-.17-.39-.38-.35z"></path><path d="m59.05 274.71c1.42.08 1-.95-.4-1.38-1.93.29.35 1.6.4 1.38z"></path><path d="m50.59 271c.52 1.1 2.71.78 2.6.77 1.86-1.64-4-2.77-2.6-.77z"></path><path d="m50.71 271.28s-.01.01 0 0z"></path><path d="m44.57 265.67c-.12-.06-.2 0-.31 0-.15.16.64.33.31 0z"></path><path d="m37.35 270.66c.54.47 1.18.34 1.78 1-.82-.9.34.07.16-.32.93.5.68-.59.28-.88.34-.58-3.16-1.25-2.22.2z"></path><path d="m40.75 270.94s-.17-.05-.17-.06z"></path><path d="m63 294.83c-.3.12.12.33.28.18s-.05-.19-.28-.18z"></path><path d="m57.82 270.23c-.08 0-.07 0-.07.1s.07-.04.07-.1z"></path><path d="m62.27 294.27c-.07 0-.14 0-.16 0s.39.17.16 0z"></path><path d="m58.7 268.91c-.43-.1-.46.29-.41.51.31-.11.6-.3.41-.51z"></path><path d="m64.25 292.74c-.27.37.46.42.59.15s-.32-.21-.59-.15z"></path><path d="m44.36 297.79a.51.51 0 0 0 -.12.92c.02-.27.76-.71.12-.92z"></path><path d="m45.73 296.37a.36.36 0 0 0 -.15.61c.21-.09.54-.46.15-.61z"></path><path d="m44.24 295.65c-.15.16 0 .39 0 .5.2-.15.47-.81 0-.5z"></path><path d="m43.32 295.59v-.09c-.04.01.01.05 0 .09z"></path><path d="m41.43 289.6.09-.07c-.12-0-.12-0-.09.07z"></path><path d="m52.87 283.81c-.06.13.18.08.31.12.25-.19-.18-.25-.31-.12z"></path><path d="m45.79 281.8c0-.1-.51-.19-.42 0s.42.14.42 0z"></path><path d="m41.1 281.56c.16.2 1 .39 1 0s-.91-.29-1 0z"></path><path d="m44.44 281.62c.05.11.36.06.36 0s-.4-.18-.36 0z"></path><path d="m52.61 280.9c.12.13.64.18.62-.06s-.61-.11-.62.06z"></path><path d="m52.75 291.21.15.05c-.07-.08-.1-.26-.15-.05z"></path><path d="m54 289.86c-.59-.07-.75.68-.48 1.06.15-.28 1.32-.51.48-1.06z"></path><path d="m45.87 280.4c.41-.17-.34-.25-.27-.07a.45.45 0 0 0 .27.07z"></path><path d="m48.91 279.44c.06.13.43.2.39 0a.41.41 0 0 0 -.39 0z"></path><path d="m53.67 287.67c.84-2.24-2.27-.21-1.06 0 .45.75.65-.18 1.06 0z"></path><path d="m56.85 287.05c-.42.23-.28.57-.05.82.25-.15.91-.87.05-.82z"></path><path d="m57.61 286.4.13-.09c-.08.02-.26-.06-.13.09z"></path><path d="m58.73 285.24c-.43-.47-1.1.3-.5.69.02-.21.7-.25.5-.69z"></path><path d="m58.49 285.86c0 .05-.05-.07-.08 0z"></path><path d="m59.74 284.55c.35-1-1.35-.57-.57.16.52.29.04.12.57-.16z"></path><path d="m72.46 282.43c-.57 0-.18.54 0 .78.05-.21.46-.57 0-.78z"></path><path d="m64.47 276.53c-.26.09-.34.55.18.62.48-.15.43-.73-.18-.62z"></path><path d="m64.29 279.62c.11.11 0-.06 0-.09z"></path><path d="m65.28 273c-.78-.75-1.55.67-.59.51.11.36.62-.12.59-.51z"></path><path d="m35.34 277.16.1-.13c-.11-.03-.11.04-.1.13z"></path><path d="m37 276.94c.19.26.29.09.44-.09a.36.36 0 0 1 -.44.09z"></path><path d="m37.26 276.59s.04.02 0 0z"></path><path d="m37.39 276.59c-.19 0 0 .07 0 .13s.1-.11 0-.13z"></path><path d="m37.08 276.85c.19 0 .24 0 0 0 .25-.44-.23-.13 0 0z"></path><path d="m35.13 276.25.13.13c.05-.06-.06-.09-.13-.13z"></path><path d="m67.56 271.42c.49-.56-.78-.73-.65-.12.23.17.35.11.65.12z"></path><path d="m46.21 273.42c.73-.43-.41-.92-.54-.28.17.11.12.31.54.28z"></path><path d="m68.24 270.81c.09 0 .49-.1.2.15.36-.16-.13-.4-.2-.15z"></path><path d="m31.83 272.53c-.89.51.5.49.59.15.04-.14-.32-.16-.59-.15z"></path><path d="m38.67 272.07c.21-1.5-1.59-.26-.93.44.99.74.53-.14.93-.44z"></path><path d="m49.47 272.09c.1-.13.15-.13 0-.12.04.03-.03.08 0 .12z"></path><path d="m49.76 271.72c.41.15-.15.15-.13.2s.26.21.3-.13c.29-1.34-2.15.49-.17-.07z"></path><path d="m50 271.81v.05a.05.05 0 0 0 0-.05z"></path><path d="m77.2 269.2c-.63-.4-.64.28 0 .54-.27-.17.24-.35 0-.54z"></path><path d="m69.53 269c.41-.52-.73-.72-.75-.12-.04.19.61.01.75.12z"></path><path d="m40.76 270.11c-.28-.13-.68.23-.34.49.29.09.8-.25.34-.49z"></path><path d="m39 267.8c1.08-.09.81-.41 1.51.11.75.79 1 0 1.93.32.64.61 1.59-.59.17-1-.94-.16-4.61-.93-3.61.57z"></path><path d="m47.83 267.46c-.12-.06-.09 0-.16.05s.11-.02.16-.05z"></path><path d="m47.71 267.55s.01.01 0 0z"></path><path d="m48 267.14s0 .13-.05.13-.01-.11.05-.13z"></path><path d="m47.54 267.37c-.1-.15.16-.3.42-.28-.53-.67-.79.72-.42.28z"></path><path d="m47.71 267.29c.08 0 .2.14.2 0-.03.01-.08.02-.2 0z"></path><path d="m77.44 269.48c.3.67 1-.45.27-.41-.17.28.2.32-.27.41zm.44-.07s0 0 0 0z"></path><path d="m76.6 269.37c-.09 0-.22 0-.26 0-.22.26.66.21.26 0z"></path><path d="m91.11 276.69s0 .08 0 .06.05-.07 0-.06z"></path><path d="m91.66 275.88c-.26-.05-.27.19-.24.32.18-.08.36-.2.24-.32z"></path><path d="m84.29 292.69a.21.21 0 0 0 -.07.37c.12-.06.31-.29.07-.37z"></path><path d="m83.38 292.28c-.09.1 0 .24 0 .3.13-.11.28-.49 0-.3z"></path><path d="m82.82 292.26v-.06s.01.03 0 .06z"></path><path d="m81.58 288.67c-.02-.04-.02-.04 0 0z"></path><path d="m88.58 285.05c.15-.12-.14-.15-.19-.07s.11.02.19.07z"></path><path d="m84.08 283.89c0-.06-.31-.11-.25 0s.25.11.25 0z"></path><path d="m81.56 283.66c-.48 0-.25.33.11.3s.25-.31-.11-.3z"></path><path d="m83.48 283.77s-.25-.07-.22 0 .22.06.22 0z"></path><path d="m88.18 283.22c.08.11.4.09.38 0s-.34-.12-.38 0z"></path><path d="m88.44 289.45h.1c-.05-.02-.07-.15-.1 0z"></path><path d="m89.18 288.61c-.36 0-.45.43-.27.66.09-.18.78-.33.27-.66z"></path><path d="m83.94 283c.07.08.37 0 .16-.08-.05.08-.2.08-.16.08z"></path><path d="m87.67 282.47c-.09.12.36.13.19 0-.06-.02-.16-.04-.19 0z"></path><path d="m85.93 282.41c0 .07.26.11.23 0a.23.23 0 0 0 -.23 0z"></path><path d="m87.66 282.15c-.3 0-.12.12-.23.18.24.12.29-.02.23-.18z"></path><path d="m88.87 287.25c.62-.59-.83-.87-.75.15.35-.08.44.28.75-.15z"></path><path d="m90.85 286.87c-.25.15-.16.35 0 .49.15-.09.52-.51 0-.49z"></path><path d="m93.74 271.76c.18-.24.44-.6.06-.8-.54.04-.51 1.25-.06.8z"></path><path d="m91.3 286.46h.07c-.05-.04-.15-.08-.07 0z"></path><path d="m92 285.74c-.26-.27-.65.2-.28.43-.05-.17.37-.17.28-.43z"></path><path d="m91.82 286.12s0 0 0 0z"></path><path d="m92.17 285c-.26.27.13.39.2.52.24-.19.28-.79-.2-.52z"></path><path d="m100.2 283.81c-.35 0-.1.33 0 .47.04-.11.28-.35 0-.47z"></path><path d="m73.6 282.43c-.67.25-.11.67-.27 1 .23-.27 1.11-.94.27-1z"></path><path d="m95.25 282.28v-.08a.06.06 0 0 0 0 .08z"></path><path d="m95.33 278.66c0-.08.43 0 .37-.39-.35-.27-1 .14-.37.39z"></path><path d="m77.75 281.19c-.07 0-.07 0-.06.07z"></path><path d="m78.69 281.1c.11.16.18 0 .26-.06a.21.21 0 0 1 -.26.06z"></path><path d="m78.73 281.05c.12 0 .15 0 0 0 .17-.27-.14-.05 0 0z"></path><path d="m78.92 280.88c-.12 0 0 .05 0 .08s.08-.06 0-.08z"></path><path d="m77.63 280.8s0-.06-.08-.08z"></path><path d="m89.3 278.62c-.33.2 0 .42 0 .61.28-.11.7-.72 0-.61z"></path><path d="m97.05 277.25c.29-.35-.48-.43-.4-.07.15.11.23.06.4.07z"></path><path d="m84.19 278.82c.43-.27-.27-.55-.33-.16.14.06.08.18.33.16z"></path><path d="m97.62 276.9a.08.08 0 0 1 -.05.05z"></path><path d="m97.63 276.85s0 0 0 0 .01.02 0 0z"></path><path d="m97.53 276.81c-.17.09 0 0 .1 0s-.06-.04-.1 0z"></path><path d="m75.49 278.53c-.53.32.31.29.36.08s-.2-.09-.36-.08z"></path><path d="m79.09 278.31c-.26.2.41.09.49-.19.34-.69-.99-.39-.49.19z"></path><path d="m86.2 277.87s.02 0 0 0z"></path><path d="m86.41 277.77c.15-.81-1.3.34-.11 0 .22-.02-.3.31.11 0z"></path><path d="m86.46 277.78s.02.01 0 0z"></path><path d="m86.1 277.89c.06 0 0 .05 0 .07s.13-.08 0-.07z"></path><path d="m102.84 276.06c-.16-.09.14-.21 0-.32-.39-.23-.39.18 0 .32z"></path><path d="m98.27 275.58c-.1-.23-.53-.18-.53.08s.54.07.53-.08z"></path><path d="m80.84 276.91c-.17-.07-.4.15-.2.31s.49-.17.2-.31z"></path><path d="m99.5 274.4c-.34.19.24.36.25.09-.1-.04-.03-.11-.25-.09z"></path><path d="m104.59 272.29c-.17.18.08.52.2.39.28.21.26-.56-.2-.39z"></path><path d="m80.39 275.4c-.06-.78-1.5 0-.43.18.27-.06.11-.16.43-.18z"></path><path d="m85.07 275.19c-.08 0-.06 0-.1 0s.03.02.1 0z"></path><path d="m101 272.62c.38-.15.57-.51-.09-.53-.48.23-.12.45.09.53z"></path><path d="m85 274.87c-.34.09-.15.47 0 .28-.35-.25.46-.15 0-.28z"></path><path d="m85.11 275.08a.19.19 0 0 1 -.12 0c.01.02.13.09.12 0z"></path><path d="m85.14 275s0 .08 0 .08-.01-.08 0-.08z"></path><path d="m88.25 272.34s-.16 0-.14 0 .1.06.14 0z"></path><path d="m87.3 270.36s.12 0 .11 0-.13-.03-.11 0z"></path><path d="m87.22 270.14s0 .06 0 .08a.11.11 0 0 1 0-.08z"></path><path d="m87.23 270.22s0 .11.1.07a.26.26 0 0 1 -.1-.07z"></path><path d="m87.38 270.16c.24.12-.08.06.06.14.44-.45-.59-.3-.06-.14z"></path><path d="m98 267.39c.5 0-.15-.21.26-.22-.45-.59-.92.3-.26.22z"></path><path d="m90.87 268.72c.23-.52-1-.28-.26.12.05-.06.19-.07.26-.12z"></path><path d="m98.75 268.1c0-.14.11-.2.22 0 .1-.38-.62-.27-.22 0z"></path><path d="m89.27 268.14c.36.17 0-.07.18 0-.38-.42-.16.5-.18 0z"></path><path d="m90.52 267c.24 0-.27.52.14 0-.02-.44-.49.19-.14 0z"></path><path d="m91.48 266.3c.2-.07.84-.35.51-.75-.56-.01-1.61.32-.51.75z"></path><path d="m94.37 265.48s0-.07 0-.05-.05.07 0 .05z"></path><path d="m54.26 266.33c.33-.28-.65-.32-.36 0a.54.54 0 0 0 .36 0z"></path><path d="m53.19 266.19c0-.15-.28-.17-.33-.1s.22.17.33.1z"></path><path d="m68.78 285.94h.08c.14-.2-.46-.1-.08 0z"></path><path d="m65.8 272.8s0-.07 0-.06-.05.07 0 .06z"></path><path d="m68.28 285.6c.14 0 0-.13-.07-.07s.03.05.07.07z"></path><path d="m66 272.31c.16-.06.32-.17.21-.28s-.21.16-.21.28z"></path><path d="m69.35 284.69c-.15.2.24.22.31.08s-.17-.11-.31-.08z"></path><path d="m58.78 287.49a.27.27 0 0 0 -.05.49c-0-.14.38-.4.05-.49z"></path><path d="m59.51 286.73a.19.19 0 0 0 -.08.33c.11-.06.28-.25.08-.33z"></path><path d="m58.73 286.62c0-.11.19-.19.1-.31s-.19.22-.1.31z"></path><path d="m58.22 286.33v-.05s0 .03 0 .05z"></path><path d="m57.16 283.13s0 0 .07 0-.06-.02-.07 0z"></path><path d="m59.23 279c.06 0 .22.05.22 0s-.26-.13-.22 0z"></path><path d="m57.23 278.74c-.42 0-.22.28.1.26s.23-.27-.1-.26z"></path><path d="m58.73 278.89c0 .05.2 0 .19 0s-.21-.1-.19 0z"></path><path d="m63.41 278.42c-.08-.06-.29-.08-.33 0s.35.11.33 0z"></path><path d="m63.21 283.94h.09s-.06-.13-.09 0z"></path><path d="m63.62 283.34c-.23.47.11.4.32.26s-.11-.6-.32-.26z"></path><path d="m59.49 278.13c-.05 0-.18 0-.14.06s.32 0 .14-.06z"></path><path d="m62.64 277.78c-.08.1.32.11.17 0s-.14-.04-.17 0z"></path><path d="m61.1 277.7c0 .06.23.1.21 0a.22.22 0 0 0 -.21 0z"></path><path d="m62.64 277.49c-.27 0-.11.11-.21.16.21.11.25-.01.21-.16z"></path><path d="m63 282.13a1.14 1.14 0 0 0 .74-.08c.26-.83-.84-.61-.74.08z"></path><path d="m65.37 281.7c-.22.13-.15.31 0 .44.11-.08.46-.45 0-.44z"></path><path d="m68.15 268.43c.17-.2.4-.51.07-.7-.48-.01-.47 1.1-.07.7z"></path><path d="m65.84 281.3h-.1c.02.08.06.03.1 0z"></path><path d="m66.24 281.06s0 0 0 0z"></path><path d="m66.17 281c.75-.37-.65-.54-.07.08.02-.01-.03-.08.07-.08z"></path><path d="m66.73 280.55c.22-.18.26-.7-.17-.47-.22.24.11.36.17.47z"></path><path d="m73.73 279.44c.1-.12 0-.37-.19-.26s.13.51.19.26z"></path><path d="m50 278.36c.21-.2 1-.77.26-.83-.61.2-.12.58-.26.83z"></path><path d="m69.47 276.39c0-.05.11-.1.17-.07.12-.55-.78-.11-.17.07z"></path><path d="m69.29 277.7c.07.06 0 0 0 0z"></path><path d="m53.86 276.56.06-.07c-.06-.01-.06.02-.06.07z"></path><path d="m54.75 276.43c.1.14.15.05.23-.05a.19.19 0 0 1 -.23.05z"></path><path d="m54.89 276.25.09.06c.02-.05.02-.08-.09-.06z"></path><path d="m54.79 276.38c.1 0 .13 0 0 0 .14-.23-.13-.07 0 0z"></path><path d="m53.74 276.08.07.07s-.02-.05-.07-.07z"></path><path d="m64.1 275c.13 0 .39-.28.37-.42-.32-.43-.54.07-.37.42z"></path><path d="m71.41 272.94c-.14.08 0 0 .09 0s-.05-.03-.09 0z"></path><path d="m71.5 273s0 0 0 0 .01 0 0 0z"></path><path d="m71.49 273s0 0 0 0z"></path><path d="m52 274.11c-.47.28.27.26.31.08s-.2-.08-.31-.08z"></path><path d="m55.26 273.47c-.79-.64-1 .65-.54.87.13-.34 1.62-.53.54-.87z"></path><path d="m61.67 273.66s0 0 0 0z"></path><path d="m61.35 273.36c-.68.37.55.24.08.34.29.1.25-.36-.08-.34z"></path><path d="m61.42 273.71s0 0 0 0z"></path><path d="m61.36 273.78c0-.07.08-.07 0-.07.02.02-.02.05 0 .07z"></path><path d="m76.11 272.08c-.34-.2-.35.15 0 .29-.11-.09.13-.19 0-.29z"></path><path d="m72.09 271.87c-.08-.21-.46-.17-.47.06s.48.07.47-.06z"></path><path d="m56.71 273.05c.38-.36-.49-.38-.18 0 .05 0 .16-.05.18 0z"></path><path d="m73.29 271c.07.07.09-.06.12-.09-.2-.27-.51.23-.12.09z"></path><path d="m73.22 269.55c0-.45-1-.24-.42.08.2.07.2-.06.42-.08z"></path><path d="m56 271.53c.29 0 .44-.42-.07-.39s-.24.59.07.39z"></path><path d="m60.46 271.32c-.07 0-.05 0-.09 0s.07.02.09 0z"></path><path d="m74.88 269.15c0-.57-.95-.19-.5.05.09.2.36-.06.5-.05z"></path><path d="m60.53 271.15s0 .07 0 .07-.01-.06 0-.07z"></path><path d="m60.4 271.24s.1.07.1 0-.04 0-.1 0z"></path><path d="m60.37 271c-.3.07-.14.41 0 .25-.27-.2.44-.06 0-.25z"></path><path d="m63.31 268.86s-.14 0-.12 0 .09.05.12 0z"></path><path d="m71.47 267.68c-.09-.07-.1 0-.15.05a.23.23 0 0 1 .15-.05z"></path><path d="m62.5 267.1s.11 0 .1 0-.12-.03-.1 0z"></path><path d="m62.46 267v-.05s-.02.05 0 .05z"></path><path d="m62.57 266.92c.21.12-.06.05 0 .13.43-.38-.46-.26 0-.13z"></path><path d="m62.53 267c-.05 0-.09-.05 0 0z"></path><path d="m62.43 266.91s0 0 0 0 .01 0 0 0z"></path><path d="m62.57 267c-.06 0-.03 0 0 0z"></path><path d="m65.44 265.81c.12-.09.32 0 .26-.25-.26-.32-.7.05-.26.25z"></path><path d="m353.62 298 .31-.05c-.08-.1-.24-.03-.31.05z"></path><path d="m354.26 298c.35-.27-.09-.2-.25-.29z"></path><path d="m297.39 265.66c-.09-.12-.14 0-.21 0 .09.17.14.08.21 0z"></path><path d="m275.63 301.12c-.28.16.34.63.23.15-.09-.08-.16-.17-.23-.15z"></path><path d="m280.12 301.56c-.78.17.11 1.07.58.87.23-.27-.17-.63-.58-.87z"></path><path d="m247.82 286.36c0 .15.83.08 1.21-.21.79-1.15-1.38-.72-1.21.21z"></path><path d="m251.88 285.23c-.48.41-.32.74.26.7.6-.24.42-.93-.26-.7z"></path><path d="m251.76 282.79c-.37-.41-.92.14-.91.54.31-.19.88-.05.91-.54z"></path><path d="m250.27 281.53.16-.07c-.12-.07-.1.03-.16.07z"></path><path d="m254.64 271.78h.19c-.15-.12-.16-.14-.19 0z"></path><path d="m276 277.84c.55 0 0-.57-.26-.5s.13.3.26.5z"></path><path d="m269 266.78c.12-.13-.42-.82-.56-.43.05.2.4.65.56.43z"></path><path d="m279.54 274c0-.3-.51-.82-.85-.64-.04.35.65.91.85.64z"></path><path d="m267.35 286.86.07-.36c-.25.07-.19.19-.07.36z"></path><path d="m269.28 287.09c.21.55 1.57.09 1.06-.78-1.01-1.15-2.64 1.26-1.06.78z"></path><path d="m279.53 271.12c-.13-.12-.28-.34-.42-.32-.42.07.49.96.42.32z"></path><path d="m278.89 270c.24.7.61.53.82.08-.53-.63-.49.05-.82-.08z"></path><path d="m273 281.22c-2.26-.64-2.23.5-2 1.57 1.36.55 3.25-.09 2-1.57z"></path><path d="m277.14 286c-.8-.17-1 .41-1 1 .5 0 2.1-.09 1-1z"></path><path d="m278.83 286h.27c-.1 0-.26-.34-.27 0z"></path><path d="m280.77 285.07c-.71.59-.94-.12-1.69.19.08 1.89 4.01.68 1.69-.19z"></path><path d="m280.56 286.3c0 .12 0-.14-.07-.11z"></path><path d="m283.43 284.68c-1 .06-.5 1.06-.59 1.46.87.06 2.1-1.09.59-1.46z"></path><path d="m301.88 297.52c-.61.08-.41.79-.54 1.21.36-.06 1.66-.73.54-1.21z"></path><path d="m298.73 281.2c-.73-.38-1.1 1.12-.07 1 .45.45.79-.82.07-1z"></path><path d="m295 285 .08-.22c-.08.08-.08.22-.08.22z"></path><path d="m303.69 277.67c.27-.94-2.4-1.64-1.62-.87-.25 1.07.79 1.7 1.62.87z"></path><path d="m290.42 267.05c0-1.59-1.53-.92-1.79.2.37.18 1.54.18 1.79-.2z"></path><path d="m308.43 278.19a1.18 1.18 0 0 0 .47-1.63c-.52.56-1.9.61-.47 1.63zm.41-.92c0 .16-.07 0-.17 0 .06-.05.09-.09.17 0z"></path><path d="m310.07 278.6c.63.2.28-.65-.08-.42.15.05.72.42.08.42z"></path><path d="m322.66 285.61c-.44.12-.19.83-.07 1.33.16-.47 1.23-.79.07-1.33z"></path><path d="m318.42 277.42c.16.18.38.32.46.48 1.12-.08-.38-1.58-.46-.48z"></path><path d="m320.63 273.35c.41.52.48.48 1.16.62 1.13-.45-1.44-2.72-1.16-.62z"></path><path d="m333.47 282.57c-.71 0-.84 1.21-.34 1.18.17.97 1.59-.67.34-1.18z"></path><path d="m326.33 275.07c-1.06-.6-1.74.95-1.08 1.15.38.25 2.75.69 1.08-1.15z"></path><path d="m321.33 265.69h-.1s.08.01.1 0z"></path><path d="m321.64 265.68c-.17-.08-.2-.15-.31 0 .25.03.44.39.31 0z"></path><path d="m321.69 265.89v.05s.03-.02 0-.05z"></path><path d="m409 297.83.49-.21c-.11-.07-.35.13-.49.21z"></path><path d="m409.58 297.17c.3.2.55.57.7 0z"></path><path d="m306.33 266.91c-.09.15-.2.27 0 .34.12-.15.23-.25 0-.34z"></path><path d="m240 289.31h.31c-.31-.19-.31-.23-.31 0z"></path><path d="m275.61 292.54c-.31.23.32.44.58.72.89-.08-.19-.9-.58-.72z"></path><path d="m260.78 276.9c-1.16-.12.34 1.18.58.75.12-.22-.36-.48-.58-.75z"></path><path d="m252 270.54c-1.94-1.07-1.75.6-.24 1.4 1.31.43 1.7-.55.24-1.4z"></path><path d="m258.62 275.12c-.83.08.46.94.65.6a1.6 1.6 0 0 0 -.65-.6z"></path><path d="m263.74 274.06c-.25 0-.84-.45-.8-.11s1.44.89.8.11z"></path><path d="m279.61 281.93c.43-.4-.38-.86-.7-.84s.21.79.7.84z"></path><path d="m272.64 277.21c1.13.25 0-.87-.46-.65.19.24-.1.44.46.65z"></path><path d="m279.65 279.84c-1.07-.92-.78.16-1.34.11.61 1.05 1.16.67 1.34-.11z"></path><path d="m272.42 299.52c-3.84-.38-3.44 1.43-2.73 3.09 2.36.5 5.19-1.07 2.73-3.09z"></path><path d="m290 303.3c.13-.11-.15-.08-.19-.12z"></path><path d="m314 291.59c-1.29-.36-1.4 2.19.22 1.66.84.57.98-1.6-.22-1.66z"></path><path d="m309.2 299 .06-.39c-.08.14-.16.31-.06.39z"></path><path d="m319.8 283c-3.29-1.19-1.14 2.18-1.24 2.15 1.44.13 3.36-.9 1.24-2.15z"></path><path d="m294.57 270.15c-1.77 0-.84 1.73-1.57 2.32 1.5.32 4.55-1.09 1.57-2.32z"></path><path d="m328.48 281.57c-2.75-.42.21 3 .9 1.07-.28-.36.09-.72-.9-1.07z"></path><path d="m331.62 282.7c-1.38-.11 1.37.38-.16.71.6.16.74-.7.16-.71z"></path><path d="m354.27 290.17c-.67.37 0 1.44.33 2.21.09-.81 1.77-1.76-.33-2.21z"></path><path d="m336.82 278.18c-3.16-.6-.44 2.48.73 1.34-.41-.52.45-.76-.73-1.34z"></path><path d="m345.33 277.61c-1.8 0 .09 2.05.78 1-.32-.42.15-.56-.78-1z"></path><path d="m348.14 269.35c-3.2-.61-1.41 2.81.68 2.11a1.63 1.63 0 0 0 -.68-2.11z"></path><path d="m370.81 280.86c-1.12.33-1 2.33-.14 2.09.58 1.52 2.38-1.73.14-2.09z"></path><path d="m356.56 271.46c-2.53-.17-1.63 1.54-.91 2.4 1.86.24 3.48-.76.91-2.4z"></path><path d="m210.34 278.06c.08.12.13 0 .2-.05-.09-.12-.14-.01-.2.05z"></path><path d="m212 277.51c.52.21 1.09.29 1.08-.18-.41-.59-.88-.14-1.08.18z"></path><path d="m162 298.6c0 .15.81.08 1.18-.21.82-1.11-1.34-.7-1.18.21z"></path><path d="m165.86 295.08c-.37-.4-.91.14-.89.53.3-.18.86-.05.89-.53z"></path><path d="m164.39 293.85.16-.07c-.12-.06-.1.03-.16.07z"></path><path d="m168.81 284.26c-.15-.12-.16-.14-.19 0z"></path><path d="m189.81 289.85a.69.69 0 0 0 -.46-.26c-.29.11.65.86.46.26z"></path><path d="m182.68 279.27c.11-.13-.42-.8-.55-.42.05.15.4.59.55.42z"></path><path d="m181.18 277.56c-.05.18.4.46.5.35s-.35-.63-.5-.35z"></path><path d="m192.63 285.65c-1-.29.17 1.07.45.62-.01-.27-.3-.38-.45-.62z"></path><path d="m181.18 299 .06-.36c-.24.07-.17.18-.06.36z"></path><path d="m183.26 298.18c-1.5.63-.62 1.15.19 1.29 1.01-.06.96-1.59-.19-1.29z"></path><path d="m184.07 277.23c0 .29.74.67.46.14-.15-.04-.44-.37-.46-.14z"></path><path d="m192.63 283.16c-.41.07.49.94.42.31-.13-.12-.28-.33-.42-.31z"></path><path d="m189.74 280.13a.66.66 0 0 0 -.53-.38c-.07.25.32.72.53.38z"></path><path d="m193.21 282.49c-.52-.66-.47 0-.8-.07.24.68.59.51.8.07z"></path><path d="m186.69 293.42c-2.22-.61-2.19.5-1.94 1.55 1.33.53 3.18-.1 1.94-1.55z"></path><path d="m190.78 298.05c-.78-.17-1 .4-1 1 .52.06 2.09-.05 1-1z"></path><path d="m226.68 271.4a1.57 1.57 0 0 0 -2.27 1.47c.92.13 2.72-.11 2.27-1.47z"></path><path d="m192.45 298.06h.26c-.12-.06-.26-.32-.26 0z"></path><path d="m194.14 298.36c0 .12 0-.13-.06-.11z"></path><path d="m194.34 297.16c-.6 0-.91 1-.26.95.83.74 1.64-1.01.26-.95z"></path><path d="m197 296.76c-1 .06-.49 1-.57 1.43.8.05 2-1.08.57-1.43z"></path><path d="m211.94 293.25c-.71-.36-1.07 1.11-.06 1 .44.42.77-.82.06-1z"></path><path d="m208.33 297 .08-.22c-.06.09-.13.22-.08.22z"></path><path d="m216.33 288.93c-1.77-1.09-.91 1.13-1 1.1.87.28 2.08-.1 1-1.1z"></path><path d="m203.16 278.44c-1-.23-.7.92-1.2 1.18.83.38 2.79-.11 1.2-1.18z"></path><path d="m221.55 289.2c-1.15-.41-.75.73-.11 1 .56-.08.75-.53.11-1z"></path><path d="m192.45 269.21c1.39.27.5-1.6-.37-.94.09.33-.18.52.37.94z"></path><path d="m223.23 290.25c-.78-.24.75.38-.18.39.34.17.52-.31.18-.39z"></path><path d="m199 271.4v.1a.09.09 0 0 0 0-.1z"></path><path d="m198.29 271.09s.01 0 0 0z"></path><path d="m198.91 271.28c1.05-.27-.83-2.26-1.09-.8.43.11 1.51 1.2.74.65-.42-.29-.08.59.35.15z"></path><path d="m198 271.14.29-.05c-.23-.09-.14-.09-.29.05z"></path><path d="m235.45 297.44c-.43.13-.18.82-.06 1.31.16-.45 1.2-.75.06-1.31z"></path><path d="m250.17 266.87c-.62-1.22-1.9.7-.89.75a2.12 2.12 0 0 0 -2.37 1.39.52.52 0 0 1 .33.93c.66.24 1.43.32 1.65 1.09-.09-.8 1.15-.72 1-1.71-1.5-1.87.95-1.05.28-2.45z"></path><path d="m226.78 288.3c-1.76-.75-.55 1.37.26.87-.17-.35.34-.39-.26-.87z"></path><path d="m231.77 289.08c-1-.25-.2 1.19.33.68-.1-.28.15-.3-.33-.68z"></path><path d="m233.53 284.6c-.9.62.49 1.35 1 1.52.39-.54.03-1.85-1-1.52z"></path><path d="m246 294.41c-.69 0-.81 1.19-.32 1.16.21.94 1.59-.67.32-1.16z"></path><path d="m239 287.08c-1.44-.44-1.12.67-.81 1.26 1.03.39 2.07.03.81-1.26z"></path><path d="m234.39 278.1s.03.03 0 0z"></path><path d="m234.34 277.89c-.17-.07-.2-.14-.31 0 .24.04.44.39.31 0z"></path><path d="m234 277.91h-.09s.09.01.09 0z"></path><path d="m242.39 272.14c.39.63-.6-1.09.37-.11-.12-2.83-2.68.24-.37.11z"></path><path d="m242.35 274.3c-.64.44-.25.52.23.54.07 1.16.53-.51-.23-.54z"></path><path d="m290.36 269c.91-.49-.64-1.56-1.12-1 .2.31.7 1 1.12 1z"></path><path d="m291 269.23s0 0 0 0z"></path><path d="m288.29 267.36s0 0 0 0 .01.01 0 0z"></path><path d="m288.32 267.28s0 0 0 0z"></path><path d="m288.46 267.42s0 0 0 0 0 .01 0 0z"></path><path d="m287.82 266.08c.06 0-.06-.05-.05 0s.03.01.05 0z"></path><path d="m291.64 265.89s0 .11 0 .16.08-.17 0-.16z"></path><path d="m288 266.14a0 0 0 0 0 0 0s0 .03 0 0z"></path><path d="m288 266s0 .05 0 0z"></path><path d="m288.39 265.74s0 .01 0 0z"></path><path d="m289 266.49s0 0 0 0z"></path><path d="m289 265.93s0 0 0 0z"></path><path d="m289 265.69s0-.07 0-.07-.06.08 0 .07z"></path><path d="m289 265.86s0 .02 0 0z"></path><path d="m288.42 266.57s0 0 0 0z"></path><path d="m288.51 266.61c-.08 0-.05 0 0 .05s.05-.02 0-.05z"></path><path d="m289.1 265.92s0 .05 0 0 .01 0 0 0z"></path><path d="m289.21 266.15s0 0 0 0z"></path><path d="m288.68 266.59c.17 0 0-.16 0-.07s.01.04 0 .07z"></path><path d="m288.71 266.82s.07.06.06 0a0 0 0 0 0 -.06 0z"></path><path d="m290.59 266.86c1.31.75-.49-1.54.26 0-.03.39-.17-.16-.26 0zm.1 0s-.01.03 0 .03z"></path><path d="m288.83 266.85s0 0 0 0z"></path><path d="m289.26 267.88s.05 0 0 0-.03 0 0 0z"></path><path d="m289.22 265.27s0 0 0 0 .02.02 0 0z"></path><path d="m289.26 265.29s0 0 0 0z"></path><path d="m289.25 265.28s0 0 0 0-.02.01 0 0z"></path><path d="m290 267.38c.05 0 .05-.07 0-.05s0 .02 0 .05z"></path><path d="m289.6 265.88s.06 0 0-.05 0 .02 0 .05z"></path><path d="m290.08 267.44s0 0 0 0z"></path><path d="m290.08 267.42s.01.02 0 0z"></path><path d="m289.6 265.32c.09 0 0-.13 0-.06s-.04.05 0 .06z"></path><path d="m291.47 267.4c0 .12.17 0 .15-.07s-.17-.04-.15.07z"></path><path d="m290.24 267.49s0-.07 0-.06-.01.07 0 .06z"></path><path d="m289.77 265.44s0 0 0 0-.01.04 0 0z"></path><path d="m290.4 267.65s0-.07 0 0-.02-.01 0 0z"></path><path d="m290.61 267.54c0-.08-.07 0 0 0s.01.04 0 0z"></path><path d="m290.74 268.23c0-.05 0-.07-.05 0s.01.02.05 0z"></path><path d="m289.92 265.32s.06.05.05 0-.08-.04-.05 0z"></path><path d="m290.05 265.91s0 0 0 0 0 .02 0 0z"></path><path d="m290.67 267.79c.05 0 0-.13 0-.05s-.01.05 0 .05z"></path><path d="m290.06 265.92s0 0 0 0z"></path><path d="m290.05 265.9s0 0 0 0-.05-.03 0 0z"></path><path d="m290.44 266.23s0 .01 0 0z"></path><path d="m290.79 267.29s0 0 0 0 0 .01 0 0z"></path><path d="m290.67 266.09s0 0 0 0z"></path><path d="m290.69 266.1s0-.02 0 0z"></path><path d="m290.68 266.1s0 0 0 0 0-.02 0 0z"></path><path d="m291.2 267.31s0 0 0 0-.01-.08 0 0z"></path><path d="m291.15 267.44s0-.07 0 0 .01-.01 0 0z"></path><path d="m291.15 267.4s0 0 0 0a0 0 0 0 0 0 0z"></path><path d="m291 266.3s0 0 0 0 0-.02 0 0z"></path><path d="m292.37 267.58c0 .07.1.26.15 0s-.19-.13-.15 0z"></path><path d="m291.14 266.4s0 .07 0 0 .02.06 0 0z"></path><path d="m291.23 266.54c.06.07.11 0 .07-.05s-.09-.01-.07.05z"></path><path d="m292.92 266.32c0 .08.07.14.07.21.16.09.01-.47-.07-.21z"></path><path d="m291.92 267.36c-.07-.08-.11.11 0 .12s.08-.06 0-.12z"></path><path d="m291.48 266.7s0 .02 0 0z"></path><path d="m291.56 266.73s.11.11.1 0-.14-.07-.1 0z"></path><path d="m292.16 266.68s0 .06 0 .09.03-.31 0-.09z"></path><path d="m292.7 267.44a.06.06 0 0 0 0 .05s.03-.13 0-.05z"></path><path d="m293 268.51s0-.07 0-.06-.07.05 0 .06z"></path><path d="m292.93 267s0-.1 0-.06a.07.07 0 0 0 0 .06z"></path><path d="m293 266.88s0 0 0 0z"></path><path d="m292.87 267.68s0 0 0 0-.01-.01 0 0z"></path><path d="m293.26 268c0-.22-.15-.05-.09 0s.07 0 .09 0z"></path><path d="m293.1 267.3c0 .14.13.16.15 0s-.25-.19-.15 0z"></path><path d="m293.72 267.59c-.13-.13-.14.17-.08.19s.14-.05.08-.19z"></path><path d="m293.25 266.51s0 .06 0 0z"></path><path d="m293.23 265.73s0 0 0 0a0 0 0 0 0 0 0z"></path><path d="m293.65 267.38s0-.05 0 0 .01-.03 0 0z"></path><path d="m293.56 266.69s0 .07 0 .05-.02-.25 0-.05z"></path><path d="m293.62 266.78c0 .06 0 .16.05.15s.03-.36-.05-.15z"></path><path d="m293.86 267c.06.25.21.34.23.11s-.24-.52-.23-.11z"></path><path d="m292.5 266.38s0-.11 0-.09a.08.08 0 0 0 0 .09z"></path><path d="m292.56 266.31s0 0 0 0-.01.02 0 0z"></path><path d="m292.6 266.24c0 .17 0 .16.1.16s-.07-.4-.1-.16z"></path><path d="m292.71 266.45s0 0 0 0z"></path><path d="m310.21 298.19.13.05s-.1-.05-.13-.05z"></path><path d="m310.47 298.33c.2 0 0-.1 0-.17z"></path><path d="m277.19 283.39c.31.11-.13-.68-.09-.1z"></path><path d="m294.16 272.44c-.05 0-.1 0-.06.08s.1-.03.06-.08z"></path><path d="m277.46 282.4c0-.15-.13-.15-.13 0s.12.06.13 0z"></path><path d="m294.91 272.61c.17.21.39.37.49.17s-.34-.26-.49-.17z"></path><path d="m278.93 283.68a.53.53 0 0 0 .26.27c.3-.1-.19-.88-.26-.27z"></path><path d="m269.24 270.06c-.09.11.33.22.51.19.62-.35-.55-.53-.51-.19z"></path><path d="m271.35 270.64a.28.28 0 0 0 -.49.06c.14.13.49.3.49-.06z"></path><path d="m271.61 269.47c-.06-.25-.41-.14-.49 0 .17.02.37.2.49 0z"></path><path d="m271.28 268.62h.08c-.04-.04-.05.01-.08 0z"></path><path d="m282.68 272.78c.22.14.12-.24 0-.26s0 .15 0 .26z"></path><path d="m282.25 266.42c-.24-.23-.15.32 0 .26s-.01-.17 0-.26z"></path><path d="m282.13 265.89c0-.07 0-.34-.13-.26s.06.28.13.26z"></path><path d="m285 272c.05-.13 0-.45-.21-.45-.1.12.06.5.21.45z"></path><path d="m277.24 274.46c-.12 0-.12 0-.11.13z"></path><path d="m277.88 275.11c-.05.26.62.39.6-.09-.16-.7-1.36-.02-.6.09z"></path><path d="m283.44 266.31c-.05-.05-.1-.25-.16-.17s.16.46.16.17z"></path><path d="m285.52 270.88c.17 0 .07-.26 0-.31s-.1.21 0 .31z"></path><path d="m285 268.65a.31.31 0 0 0 -.14-.28c-.08.08-.03.37.14.28z"></path><path d="m285.6 270.21c-.06.34.14.35.31.21-.06-.42-.2-.1-.31-.21z"></path><path d="m280.56 274.14c.66-.95-1.11-1.43-1-.52.15.49.63.55 1 .52z"></path><path d="m280.74 276.56c.18.15.87.46.62-.18-.29-.25-.5-.06-.62.18z"></path><path d="m282.11 276.7c-.09.07 0 .09.05.14z"></path><path d="m283.23 277.28c.23-.44-.53-.73-.65-.18.16-.04.42.46.65.18z"></path><path d="m282.71 277.22s0 0 0 .06-.01-.01 0-.06z"></path><path d="m283.74 277.46c0 .46-.08.07.28.39.86-.02.05-1.17-.28-.39z"></path><path d="m288.51 287c.15 0 .55.18.58-.22-.09-.46-.45-.01-.58.22z"></path><path d="m291.16 279.08c-.37 0-.31.37-.09.61.4-.03.38-.46.09-.61z"></path><path d="m289 279.89c-.06.12 0 0 .06 0z"></path><path d="m291 271c-.38-.33-.51.23-.78.22.27.33 1.2.58.78-.22z"></path><path d="m295.87 279.56c-.07.22 0 .3.09.52.55.21.33-.78-.09-.52z"></path><path d="m296.71 280.49c-.19-.16 0 0 0 .14a.08.08 0 0 0 0-.14z"></path><path d="m296.67 280.66h-.07z"></path><path d="m296.6 280.64h-.06s.04-.01.06 0z"></path><path d="m290.64 266.81s0 .02 0 0z"></path><path d="m290.58 266.69c0 .08-.06 0-.08.07s.13.08.08-.07z"></path><path d="m290.86 267.1s-.01.03 0 0z"></path><path d="m299.86 286.81c.05-.25.33.08.4-.15.13-.58-.38-.4-.4.15z"></path><path d="m313.28 276.88c1.6 1.22.75-1.59-.37-.62-.19.95-.42.42-1.28.39.31.5-.23.24-.19.33.3.31-.13.76.26.81.3 1.12 1.15-.69 1.58-.91z"></path><path d="m298.34 280.88c.5.16.34-.75-.11-.6-.23.04.12.47.11.6z"></path><path d="m300.24 282c.06 0 0 .19.09.24.43.42.25-.77-.09-.24z"></path><path d="m302.63 280.72c-.56-.73-.8.33-.24.58a.46.46 0 0 0 .24-.58z"></path><path d="m304.76 287.72c.14-.05.16.15.06.24.93.34.52-1.21-.06-.24z"></path><path d="m303.39 282.62c.05.29 0 .62.37.75.52.23.38-1.17-.37-.75z"></path><path d="m298.4 267.05s-.06-.21-.12-.16.02.11.12.16z"></path><path d="m304.14 277.94s0 .06 0 0z"></path><path d="m304.11 277.76c-.18 0 0 0 0 .18.07-.07.02-.12 0-.18z"></path><path d="m303.86 268.59c.1.44.63.17.41-.31s-.62.21-.41.31z"></path><path d="m308.21 278.63c.6-.42-.23-.38 0-.37s.12.28 0 .37z"></path><path d="m304.09 266.77c-.09.1.06 0 .16-.17-.44-.26-.25-.11-.16.17z"></path><path d="m323.4 277.4c-.68-2.83-2-.24-1.85.64.8 1.24 1.91 2.02 1.85-.64z"></path><path d="m322.92 279.35s0 .06 0 .1z"></path><path d="m305.76 267.74c.56.52.5-.64.13-.16.11.11.18-.05.18.2-.24.12-.28-.48-.31-.04z"></path><path d="m308.43 268.88c-.21-.46-.69-1.58-1.21-1.15.13.37.2 1.95 1.21 1.15z"></path><path d="m316.66 277c.68-.71-1.8-3.77-2.3-3.19-.47 1.99 2.12 6.02 2.3 3.19z"></path><path d="m309.49 271.76c0 .06.05 0 .09 0s-.05 0-.09 0z"></path><path d="m311.24 269.89c0 .71 1.58 1.42 1.2 0-.32-.42-1.3-.44-1.2 0z"></path><path d="m318 269.12c1.76 1.45.27-3.46-.29-.8.1.3.12.53.29.8z"></path><path d="m318.67 270.63-.08.07s.27-.15.08-.07z"></path><path d="m329.5 286.18c-.24 0 0 .59.13.66.46.07.08-.84-.13-.66z"></path><path d="m326.31 270.12c.31.65.59 0 .24-.35s-.24.23-.24.35z"></path><path d="m326.7 269.45c0-.1 0-.27-.14-.17a.18.18 0 0 0 .14.17z"></path><path d="m327.44 277.85c0-.12-.08-.17-.13-.26-.31.03 0 .8.13.26z"></path><path d="m331.5 280.92c.05 0 .58 0 .45-.8.19-.61-1.12-1.57-1.07-.73a1.21 1.21 0 0 0 .62 1.53z"></path><path d="m330.7 274c0-.82-.85-3-1.72-2s1.02 3.84 1.72 2z"></path><path d="m328.7 272.52s0 .01 0 0z"></path><path d="m335.27 277.41c.3-.31.34.55.72.46 2.2.4-1.33-6.17-.72-.46z"></path><path d="m335.07 273.3c.22-.05.05-.49-.15-.42-.03.4.16.02.15.42z"></path><path d="m335 268.21c.55-.06-.77-2.69-1.12-1.75-.6.54.71 2.96 1.12 1.75z"></path><path d="m278.14 273.27c-.09-.13-.14.09-.05.14s.08-.06.05-.14z"></path><path d="m288.8 267.82s-.06 0 0 .05.02-.01 0-.05z"></path><path d="m278.3 272.84c0-.09-.07-.09-.07 0s.06.04.07 0z"></path><path d="m275.26 265.59c.08.06.06-.18-.08-.18s-.11.25.08.18z"></path><path d="m282 267.38a.19.19 0 0 0 -.07-.14c-.05-.03.07.3.07.14z"></path><path d="m283.37 267c0-.07 0-.27-.1-.28s.01.36.1.28z"></path><path d="m278.55 268.09v.08s.11-.09 0-.08z"></path><path d="m279 268.52c0 .15.35.27.37 0s-.86-.13-.37 0z"></path><path d="m283.81 266.38c0-.05 0-.13-.05-.14s-.04.3.05.14z"></path><path d="m284 266.17c0-.24-.11-.07-.18-.14-.05.2.07.21.18.14z"></path><path d="m280.29 268.08c1.14.11-.2-1.07-.15-.48-.27.29.19.28.15.48z"></path><path d="m280.58 269.54c.1.1.49.32.38-.07-.16-.16-.3-.06-.38.07z"></path><path d="m293.68 268.85a.44.44 0 0 0 -.77 0c.2.15.66.39.77 0z"></path><path d="m281.39 269.7c-.06 0 0 .06 0 .08z"></path><path d="m281.71 270.08s0 0 0 0z"></path><path d="m281.73 270c.49.56.32-.68-.09 0 .03 0 .08-.08.09 0z"></path><path d="m282.72 270.36c0-.44-.42-.18-.46 0 .16.05.33.24.46 0z"></path><path d="m284.76 276.2c.13.06.32-.08.19-.22s-.42.23-.19.22z"></path><path d="m286.56 272c.5 0-.07-.69-.1-.13.05 0 .11.05.1.13z"></path><path d="m288.05 271.46c.34.47.64-.12.18-.33-.23.12-.08.35-.18.33z"></path><path d="m286.52 266.88c.07.1.33.28.45.23.26-.37-.22-.45-.45-.23z"></path><path d="m289.43 272.16c-.05.13 0 .18 0 .32.33.16.27-.48 0-.32z"></path><path d="m289.88 272.76c-.1-.1 0 0 0 .09s.03-.06 0-.09z"></path><path d="m289.82 272.85a.06.06 0 0 1 -.05 0s.03-.01.05 0z"></path><path d="m289.86 272.85s0 0 0 0z"></path><path d="m291.41 276.7c0-.14.18.07.24-.06.11-.34-.2-.27-.24.06z"></path><path d="m298.78 271.76c.18.87 1.1.08 1.11-.45-.63.21-.79-.2-1.11.45z"></path><path d="m291 273.11c.16-.12 0-.44-.16-.39s0 .43.16.39z"></path><path d="m291.9 273.84s0 .13 0 .13c.24.33.24-.4 0-.13z"></path><path d="m293.39 273.23c-.29-.47-.5.15-.17.33a.28.28 0 0 0 .17-.33z"></path><path d="m294.27 277.51c.09 0 .09.11 0 .15.56.26.41-.66 0-.15z"></path><path d="m293.74 274.4c0 .18 0 .37.18.47s.29-.68-.18-.47z"></path><path d="m297.38 271.55c.35-.68-.57-.41-.13 0 .11-.06.04-.27.13 0z"></path><path d="m294.79 266.07c0 .27.37.13.26-.16s-.37.09-.26.16z"></path><path d="m296.83 272.07c.06.64.24-.36-.06.05.03.05.06 0 .06-.05z"></path><path d="m305.55 273.53s0 0 0 .06z"></path><path d="m296.15 265.73c.23-.11-.2-.33 0 0-.25-.21-.22-.01 0 0z"></path><path d="m296.88 266.37c.48.46.76.11.42-.33-.15-.59-.58-.04-.42.33z"></path><path d="m301.44 272.11c.09.2-.25.18.23.07.05.07.19.11.13.58.1-.51.09-.38.24 0 .71.49-.66 0-.89.69.37.24 1.16.57 1.28-.1 1.04-1.35-.9-4.23-.99-1.24z"></path><path d="m298 268.26s-.05 0 0 0 0 .03 0 0z"></path><path d="m298.51 267.3s.01-.03 0 0z"></path><path d="m298.59 267.36s0-.15-.06-.09.06.06.06.09z"></path><path d="m299.14 267.28c-.08.26.31.43.44.53.89-.17-.58-1.21-.44-.53z"></path><path d="m303.06 266.79c.06.26.25.69.44.5.66-.21-.4-1.92-.44-.5z"></path><path d="m303.5 268.1h-.05s.17-.04.05 0z"></path><path d="m307 271.37a.45.45 0 0 0 .13.46c.22.08.21-.63-.13-.46z"></path><path d="m309.13 278.36c.27.07.1-.47 0-.4s-.13.35 0 .4z"></path><path d="m308.08 268.22c.28.63.34-.48 0-.18-.01.11.03.13 0 .18z"></path><path d="m308.35 267.84c0-.06 0-.16-.07-.11s.04.11.07.11z"></path><path d="m308.22 273c.13 0 .13-.2 0-.28s-.07.21 0 .28z"></path><path d="m310.24 273.89c0 .51.08 1.19.48 1 .33.11.18-1.48-.48-1z"></path><path d="m309.43 270c.08.89.61 1.49 1.05.8.18-1.07-1.11-2.12-1.05-.8z"></path><path d="m313.13 271.75c-.39.7.1 2.08.56 1.52.31.19.36-1.79-.56-1.52z"></path><path d="m313.12 270.6c.14 0 .06-.3-.07-.26-.05.23.1.02.07.26z"></path><path d="m312.23 266.41s0 0 0 0z"></path><path d="m312.11 266.13c.14.23.21.37.4.36.38-.29-.44-1.49-.4-.36z"></path><path d="m312.8 267.28c.05.31.38.7.55.28.54-.63-1.16-2.09-.55-.28z"></path><path d="m314.38 266.82c-.16 1.44.58 2.56 1.32 2.42a2.83 2.83 0 0 0 -.66-2.71c-.28.02-.91-.89-.66.29z"></path><path d="m292.23 301.78h.11s-.08 0-.11 0z"></path><path d="m292.45 301.89c.18 0 0-.08 0-.14z"></path><path d="m263.74 289.39.08.09c.26.09-.12-.59-.08-.09z"></path><path d="m278.17 280s.08 0 0-.07-.04.01 0 .07z"></path><path d="m263.92 288.64c0 .1.11 0 .11 0s-.11-.14-.11 0z"></path><path d="m265.31 289.71a.38.38 0 0 0 .23.22c.25-.08-.21-.75-.23-.22z"></path><path d="m256.84 278.17c0 .06.28.19.47.15.48-.25-.31-.51-.47-.15z"></path><path d="m292.62 271.41c.77 0 .17-1.75-.48-1.45a1.49 1.49 0 0 0 .48 1.45z"></path><path d="m258.26 278.69c.11.11.43.23.42-.06a.24.24 0 0 0 -.42.06z"></path><path d="m258.78 277.51c-.14-.06-.26.08-.31.15.16.06.62.08.31-.15z"></path><path d="m258.59 276.91h.07c-.03-.04-.04 0-.07 0z"></path><path d="m261.94 274.26h.07c-.01-.04-.01-.04-.07 0z"></path><path d="m268.52 280.3a.28.28 0 0 0 -.12-.18c-.13-.02.06.42.12.18z"></path><path d="m268 274.9c-.21-.19-.13.28 0 .23s0-.13 0-.23z"></path><path d="m267.22 272.74c.23-.08 0-.66-.25-.64s.03.74.25.64z"></path><path d="m267.82 274.24c-.17-.12-.07.24 0 .21a.41.41 0 0 0 0-.21z"></path><path d="m270.37 279.63c0-.12 0-.39-.18-.39s.05.45.18.39z"></path><path d="m263.67 281.84v.16c.03-.12.16-.19 0-.16z"></path><path d="m264.57 282.05c-.67-.05-.43.31-.18.5a.27.27 0 1 0 .18-.5z"></path><path d="m268.86 274.84c.21.22.08-.28 0-.18a.3.3 0 0 0 0 .18z"></path><path d="m270.89 278.61c0-.07 0-.17-.09-.19s0 .43.09.19z"></path><path d="m270.33 276.78a.27.27 0 0 0 -.12-.24c-.06.07-.02.32.12.24z"></path><path d="m270.86 278.11c0 .3.13.3.28.18-.06-.29-.14-.09-.28-.18z"></path><path d="m265.72 280.73a1.47 1.47 0 0 0 .42.84c1.15.03.39-1.21-.42-.84z"></path><path d="m267.31 283.43c-.25-.2-.44 0-.54.17.16.12.75.4.54-.17z"></path><path d="m285.3 280.64a.64.64 0 0 0 -1.1.1c.32.26 1.01.48 1.1-.1z"></path><path d="m267.9 283.76.09.06c.01-.05.01-.18-.09-.06z"></path><path d="m268.91 284.19c.2-.39-.45-.63-.56-.15.14-.04.33.39.56.15z"></path><path d="m268.46 284.13v.06s.03-.05 0-.06z"></path><path d="m269.3 284.55c.3.18.94 0 .48-.41-.38-.14-.38.29-.48.41z"></path><path d="m273.54 292.42c.13 0 .47.15.49-.19s-.38.01-.49.19z"></path><path d="m275.65 286.16c.71-.1-.21-1-.16-.17.08.01.16.08.16.17z"></path><path d="m273.82 286.4.07-.06a.07.07 0 0 0 -.07.06z"></path><path d="m277.9 284.7c-.33.4-.18.45.06.76.51-.02.35-.63-.06-.76z"></path><path d="m268.44 267.33h-.08c.06.04.15.11.08 0z"></path><path d="m268.87 268.48s.07-.18 0-.11c-.21.22.49.38 0 .11z"></path><path d="m269 268.42c0 .26 0-.23.16 0-.01-.11-.27-.15-.16 0z"></path><path d="m269.23 268.53c0-.13-.06 0-.07.06s.07.01.07-.06z"></path><path d="m269.19 268.45s0 0 0 0z"></path><path d="m268.89 267-.05.11c.05.03.04-.04.05-.11z"></path><path d="m275.49 278.72c-.33-.28-.43.2-.66.2.23.28 1.03.49.66-.2z"></path><path d="m273.7 273.4c.06 0 .08-.14 0-.31-.41-.54-.53.59 0 .31z"></path><path d="m280.45 286.93h-.05z"></path><path d="m280.48 286.78c-.16-.13 0 0 0 .12a.07.07 0 0 0 0-.12z"></path><path d="m280.4 286.91s0 0-.06 0 .04-.01.06 0z"></path><path d="m280.48 286.91s-.01 0 0 0z"></path><path d="m271.88 267.93c1.11 1.06 1.11-1 .15-.18-.33-.28.1.25-.15.18z"></path><path d="m275.08 275.05c0 .06 0 0-.06.06s.12.06.06-.06z"></path><path d="m275.14 275.15s0 .01 0 0z"></path><path d="m275.32 275.33c.92-.14-.84-1.25 0-.13.07.24-.48-.2 0 .13z"></path><path d="m275.33 275.39s0 .03 0 0z"></path><path d="m283.25 292.16c0-.22.28.06.34-.14.1-.49-.34-.33-.34.14z"></path><path d="m294 283.47c-.44-.2-1.31.11-.75.84.18 1.33 2.21-2.01.75-.84z"></path><path d="m281.78 286.58c-.15.1.13.61.28.54s0-.63-.28-.54z"></path><path d="m273.77 269c0 .07.11.17.07.22.58.3.22-.76-.07-.22z"></path><path d="m283.52 288c.05 0 0 .19.09.18.32.45.21-.59-.09-.18z"></path><path d="m285.27 286.7c-.44.06-.09.58.08.75.23-.13.35-.67-.08-.75z"></path><path d="m287.45 292.88c.12 0 .14.13.06.21.79.28.49-1.09-.06-.21z"></path><path d="m275.2 267.42c.18.68.57.56 1 .28-.2-.27-.93-.89-1-.28z"></path><path d="m277.48 272.89s-.01.01 0 0z"></path><path d="m277.5 272.88c-.05-.06 0 .06.06.07s0-.11-.06-.07z"></path><path d="m286.22 288.54c0 .24 0 .52.33.63s.31-1-.33-.63z"></path><path d="m277.8 273s-.1 0-.1 0 .08-.06.1 0z"></path><path d="m277.55 272.78c.14-.28.21.07.28.16.29-.49-.67-.38-.28-.16z"></path><path d="m277.64 272.83c0 .05 0 .16.06.12s-.04-.04-.06-.12z"></path><path d="m281.73 275.15c-.09-.08 0 .12 0 .12z"></path><path d="m286.81 284.52s0 .02 0 0z"></path><path d="m286.78 284.36c-.15 0 0 0 0 .16.06-.06.03-.1 0-.16z"></path><path d="m283.59 273.63v-.12c-.11.03-.03.15 0 .12z"></path><path d="m283.73 273.35c-.05 0-.07 0-.09 0z"></path><path d="m283.73 273.67c-.07-.05-.05-.16-.09 0 .65.26.08-.88.09 0z"></path><path d="m283.64 273.39s-.09.1 0 .14z"></path><path d="m283.67 273.56c.01-.09.01-.04 0 0z"></path><path d="m290.87 283.29c-.56.19-.14.49-.07.71.06-.23.59-.24.07-.71z"></path><path d="m286.4 276.29a.77.77 0 0 0 .19.45c.54-.04.14-.96-.19-.45z"></path><path d="m290.19 284.84c.14-.07.26.05.11.23.41-.02.03-.75-.11-.23z"></path><path d="m286.64 275c-.07.1.06 0 .15-.15-.39-.25-.2-.13-.15.15z"></path><path d="m302.89 285.52s0 .05 0 .09z"></path><path d="m303.28 283.85c-.6-2.41-1.76-.18-1.57.57.7 1.05 1.65 1.71 1.57-.57z"></path><path d="m288.2 275.64c.33.29-.15-.1-.11.13.48.44.42-.55.11-.13z"></path><path d="m290.38 276.72c-.05-.45-.33-.28-.34-.61-.9-1.32-.73 1.63.34.61z"></path><path d="m306.23 272.68c-1.5-3.41-1.51-.9-1.37.38.52.19 1.73 1.24 1.37-.38z"></path><path d="m304.66 271.73a.05.05 0 0 1 0 0s0-.01 0 0z"></path><path d="m296.9 282.92c-.56.46 0 1.16.25 1.4.5-.32.55-1.43-.25-1.4z"></path><path d="m291.32 279.18c0 .05.05 0 .08 0s-.05-.01-.08 0z"></path><path d="m292 277.71c0-.12.12 0 .12.09-.02-.1-.12-.24-.12-.09z"></path><path d="m293.24 278.12c.14.09.9 1.51.88.25s-2.18-1.37-.88-.25z"></path><path d="m298.89 275.55c-.87-.32-.58 1.06-.18 1.44.62.3.78-.85.18-1.44z"></path><path d="m299.09 278.17.13-.09a.38.38 0 0 0 -.13.09z"></path><path d="m304.85 282.82c.33.28.28-.92-.24-.59.03.25-.04.55.24.59z"></path><path d="m308.59 291.3c-.2 0 0 .49.12.55.4.06.07-.68-.12-.55z"></path><path d="m305.65 277.34c0 .14.08.17 0 .25.55.84.45-.75 0-.25z"></path><path d="m306 276.83c-.17 0-.05.19 0 .18a.24.24 0 0 0 0-.18z"></path><path d="m306.5 284.15c.05.06 0 .17.11.22.32-.09-.04-.67-.11-.22z"></path><path d="m310.46 285.46c-1.14-1-.74.79-.7 1 .72.63 1.12.24.7-1z"></path><path d="m309.3 281.3c.53-.64-.45-3-1.3-2.14-.59.77.56 2.63 1.3 2.14z"></path><path d="m313.94 281.84c-1.38-.15-.35 2.43.12 2.27.56.43.99-1.58-.12-2.27z"></path><path d="m308.15 273.1c-.09-.22-.23-.3-.18 0 .03.11.2.18.18 0z"></path><path d="m306.51 266.09c.06 0 .05-.41-.12-.35s0 .35.12.35z"></path><path d="m313.23 280.22c.18-.05 0-.43-.14-.37-.02.34.13.02.14.37z"></path><path d="m311.44 274.34c.41.52.6-.75-.13-1.09-.5.14-.16 1.06.13 1.09z"></path><path d="m311.32 274.39s0-.05 0 0z"></path><path d="m313.13 275.67c.2-.68-.82-1.84-1.12-1.32-.23 1.1 1.06 2.55 1.12 1.32z"></path><path d="m300.71 272.81c.46.56.39-.88-.11-.6a.88.88 0 0 0 .11.6z"></path><path d="m303.06 273.38-.07-.13s.01.16.07.13z"></path><path d="m326.79 287.39h.11s-.09-.01-.11 0z"></path><path d="m327 287.44c.14-.05 0-.07-.06-.12z"></path><path d="m310.85 271.5c0-.05-.05 0-.08 0s.05.02.08 0z"></path><path d="m300.42 281.49c0-.1-.12-.08-.09 0s.1.05.09 0z"></path><path d="m311.4 271.46c.15.12.34.2.38 0s-.29-.09-.38 0z"></path><path d="m301.7 282.17a.4.4 0 0 0 .24.15c.2-.12-.32-.6-.24-.15z"></path><path d="m292.87 273.79a.31.31 0 0 0 -.49.25c.14-.04.62.11.49-.25z"></path><path d="m293.83 274c-.42.18.25.41.19.05-.02-.05-.13-.05-.19-.05z"></path><path d="m293.89 273.05c-.12 0-.2.11-.23.17.14.03.54-.04.23-.17z"></path><path d="m293.62 272.57h.06s-.03-.01-.06 0z"></path><path d="m296 269.66s0 0 0 0z"></path><path d="m302.67 273.59a.27.27 0 0 0 -.13-.13c-.11.01.13.35.13.13z"></path><path d="m301.23 269.31s-.06-.31-.15-.19.08.24.15.19z"></path><path d="m300.16 267.42c.18-.11-.16-.55-.33-.5s.17.63.33.5z"></path><path d="m301 268.75c0-.05-.07-.24-.14-.16s.14.19.14.16z"></path><path d="m304.12 272.67c0-.1-.1-.32-.23-.29s.11.37.23.29z"></path><path d="m299.92 276c-.16-.31-.58-.15-.68.11.19-.04.67.47.68-.11z"></path><path d="m302 268.84c-.05 0-.12-.17-.15-.1s.24.31.15.1z"></path><path d="m304.31 271.79c.12 0 0-.19-.05-.22s-.04.17.05.22z"></path><path d="m303.44 270.25c.19.16.09-.16 0-.16s-.09.07 0 .16z"></path><path d="m304.31 271.48c.15.12.12-.09.21-.08-.14-.29-.33-.05-.21.08z"></path><path d="m301.27 274.51c-.71-.41-.79 0-.81.35.41.31 1.09.27.81-.35z"></path><path d="m317 270.75a.56.56 0 0 0 -.91.29c.28.12.91.22.91-.29z"></path><path d="m303.35 276.9s0 0 0 0z"></path><path d="m303.69 276.58c-.22-.17-.43-.05-.46.21.13.03.68.28.46-.21z"></path><path d="m304.46 276.61c-.36-.07-.27.32-.33.44.28.1.8-.18.33-.44z"></path><path d="m309.58 282.68c-.17-.29-.33.09-.39.26.1-.04.43.06.39-.26z"></path><path d="m309.78 276.77c-.26.08-.16.33 0 .46.32-.09.22-.4 0-.46z"></path><path d="m311.37 276.05c.57.41.7-.4.08-.47-.2.22.05.42-.08.47z"></path><path d="m308.29 271c-.33-.18-.32.25-.52.29.23.15.96.17.52-.29z"></path><path d="m305.78 266.77c.05 0 .05-.13 0-.26-.5-.39-.39.6 0 .26z"></path><path d="m307.26 267.91v.07s.07.02 0-.07z"></path><path d="m317.38 280.9c0-.19.25 0 .27-.18-.01-.43-.35-.22-.27.18z"></path><path d="m325.41 271.41c-.09-.47-.71.06-.37.17a.75.75 0 0 0 -.94.25c.45 1.3.9.51 1.31-.42z"></path><path d="m316.84 277.33c.05 0 0 .17.1.14.36.31.06-.55-.1-.14z"></path><path d="m318.07 275.9c-.36.13 0 .5.21.61.18-.15.17-.63-.21-.61z"></path><path d="m321.08 280.73c.09-.06.14.09.08.17.73.1.18-.97-.08-.17z"></path><path d="m308.91 265.62c-.05 0 0 0 .07.05s.02-.09-.07-.05z"></path><path d="m319.31 277.61c.32.23.71.21.39-.35-.45-.26-.44.12-.39.35z"></path><path d="m309 265.55c0 .05 0 .15.07.09s-.07-.02-.07-.09z"></path><path d="m308.93 265.53c.07-.27.19 0 .27.08.15-.47-.64-.19-.27-.08z"></path><path d="m309.17 265.63s-.08 0-.08 0 .07-.01.08 0z"></path><path d="m319 273.78c0-.13 0-.13-.13-.13.04.01.13.14.13.13z"></path><path d="m322.08 272.47c.16 0 .32.15.15-.11.77.16-.52-1.03-.15.11z"></path><path d="m317.44 266.75c-.34-.26-.38.24-.24.33s.45-.08.24-.33z"></path><path d="m317.05 265.68c0 .1.05 0 .09-.15-.36-.11-.14-.04-.09.15z"></path><path d="m332.8 271.6s0 .06 0 .09z"></path><path d="m332.8 271.6c.77-1.18-.93-3.23-1.25-1.78a1.48 1.48 0 0 0 1.25 1.78z"></path><path d="m318.66 266.11c.23-.23-.36-.32 0 0-.38-.11-.26.07 0 0z"></path><path d="m319.77 266.45c0 .25.72.4.78 0-.26-.62-1.33-.94-.78 0z"></path><path d="m327.23 271.19c0 .33.5.39.48.42.91-.69-1.04-1.83-.48-.42z"></path><path d="m321.87 268.38s0 0-.06 0 .04.01.06 0z"></path><path d="m322.18 267.07c0-.09-.13-.18-.12-.05-.06-.09.1-.02.12.05z"></path><path d="m323.13 266.36c-.44.3-.59.42.09.79s.68-.82-.09-.79z"></path><path d="m328.26 266-.05.07s.17-.15.05-.07z"></path><path d="m333.64 268.5c.07.35.17.45.44.5.11-.26-.08-.78-.44-.5z"></path><path d="m338.72 275.44c-.17 0 .07.43.2.45.35-.02-.07-.59-.2-.45z"></path><path d="m335.74 269.94c.25-.14-.16-.56-.13-.17.05.04.05.14.13.17z"></path><path d="m339.47 270.64c-.46-1.84-.44-3.47-2.42-4.89.38 1.17-.44-.46-.56.11-.2 1.07.36 2.48.53 3.55.75.59 2.82 3 2.45 1.23z"></path><path d="m342.42 267.84c-.81-3-2.22-.32-.65.39.4.32.57-.02.65-.39z"></path><path d="m187.16 284.51s0 0 0 0z"></path><path d="m187.24 284.55v-.06s-.05.08 0 .06z"></path><path d="m187.46 265.75s0-.11 0-.13-.1.38 0 .13z"></path><path d="m176.61 275.32c0-.06-.07 0-.07 0s.08.11.07 0z"></path><path d="m176.72 275.06c0 .08.07 0 0 0s.01-.06 0 0z"></path><path d="m177.17 275.7a.17.17 0 0 0 .07.13c.12 0 .01-.35-.07-.13z"></path><path d="m175.25 269.75c.28-.09-.18-.27-.19-.09.07-.02.12.11.19.09z"></path><path d="m191.48 271.47c.27-.11-.11-1.09-.22-.47-.08.14.03.59.22.47z"></path><path d="m175.8 270.07a.11.11 0 0 0 -.19 0c.04.02.16.12.19 0z"></path><path d="m176 269.66c0-.1-.14-.09-.19 0s.19.06.19 0z"></path><path d="m176 269.31s0 .01 0 0z"></path><path d="m177.79 268.62s.02-.01 0 0z"></path><path d="m179.78 272s0 .05 0 .09.04-.09 0-.09z"></path><path d="m180.25 269.8s.05-.16 0-.13-.04.13 0 .13z"></path><path d="m180.23 268.36c0 .06-.1.32 0 .31s.09-.29 0-.31z"></path><path d="m180.3 269.49s0-.12 0-.11-.03.11 0 .11z"></path><path d="m177.56 272.12s-.05 0-.06 0z"></path><path d="m177.73 272.51c.39.19.17-.42-.11-.17.07 0 .08.15.11.17z"></path><path d="m180.74 269.79s0-.1 0-.08-.04.19 0 .08z"></path><path d="m178.61 272.32c.71.21 0-.7 0-.32-.24.15.06.2 0 .32z"></path><path d="m178.87 273.28c-.08-.13-.18-.08-.25 0s.27.26.25 0z"></path><path d="m186.48 274.38c.11.12.37.33.49.1a.29.29 0 0 0 -.49-.1z"></path><path d="m179.11 273.48s0 0 0 0z"></path><path d="m179.29 273.71c.23.42.28-.38-.06 0 .02-.03.06-.05.06 0z"></path><path d="m179.26 273.75s0 0 0 0z"></path><path d="m179.69 274.11c.31.09.14-.42-.06-.17s-.04.06.06.17z"></path><path d="m180.34 278c.06 0 .19.12.24 0s-.17-.09-.24 0z"></path><path d="m182.2 275.55c.59 1.65.73-.17 1.83 1.56.78-.52 1-.87 1.67.54.09-2 .42-5.17-2.17-6.93-4.71-2.6-2.53 4.82-1.33 4.83z"></path><path d="m181.27 275.42s0-.02 0 0z"></path><path d="m181.5 266.52s.01.05 0 0z"></path><path d="m181.53 267.06c.09-.05 0 0 0 0s.07.1 0 0z"></path><path d="m181.68 267.13c0-.05 0 0 0 0s-.01.04 0 0z"></path><path d="m181.68 267.09s-.02.03 0 0z"></path><path d="m181.62 267.08c-.05-.1.07 0 0-.06s-.06.12 0 .06z"></path><path d="m181.74 266.44s-.01.02 0 0z"></path><path d="m183 269.69c-.05-.15-.2-.1-.18.07s.18.09.18-.07z"></path><path d="m182.81 265.36c0-.06-.07-.11-.11-.08-.08.19.17.41.11.08z"></path><path d="m183.09 267.42c.35.16.18-.51-.11-.25-.1-.17-.04.21.11.25z"></path><path d="m184.71 279.14c.11-.2-.09-.2-.16 0 .04-.08.11.07.16 0z"></path><path d="m189.82 277c0 .57.68.19.75-.14-.39-.01-.49-.25-.75.14z"></path><path d="m183.57 268c.21.21.2-.29 0-.1-.01.1.02.1 0 .1z"></path><path d="m185.29 277.56c0-.06.06 0 0-.13s-.14.12 0 .13z"></path><path d="m186 277.16c0 .19.17.36.23 0-.04-.1-.16-.16-.23 0z"></path><path d="m186.43 280.16c.17-.15 0-.31-.18-.14.07.04-.01.19.18.14z"></path><path d="m184.42 267.6c0 .16.25.24.22-.05s-.35-.13-.22.05z"></path><path d="m184.67 270.1s0 0 0 0 .01.08 0 0z"></path><path d="m186.3 278.2c0 .19.25.18.23-.1s-.33-.01-.23.1z"></path><path d="m184.7 270.16c.06 0 0 0 0-.06z"></path><path d="m184.69 270.05c.05 0 .09 0 .09.12.22-.17-.22-.23-.09-.12z"></path><path d="m186.16 271.64s0 .05 0 .06z"></path><path d="m187.06 276.26s0 .11 0 .09.04-.07 0-.09z"></path><path d="m187.15 271.18s0 .07 0 .06.02-.07 0-.06z"></path><path d="m187.21 271.16s.01-.02 0 0z"></path><path d="m187.19 271.2s0-.06 0 0z"></path><path d="m187.21 271.22s0 0 0 0-.01.01 0 0z"></path><path d="m187.22 271.27c.22.13.07-.31 0 0z"></path><path d="m188.81 276.46c0 .09.13.28.11.09.19.26.17-.47-.11-.09z"></path><path d="m188.05 273c.27.1.12-.49-.07-.13.02-.02.02.06.07.13z"></path><path d="m188.5 276.93c.07 0 .11.06 0 .11.19.05.14-.31 0-.11z"></path><path d="m193.81 278.78c0 .55.91-.89.18-1.19-.24.15-.3.4-.5.61 0-.39-.37-.21-.49 0 .21.06-1.17-.16-.71.27-.1 1.26.75.31 1.2-.27.2.03-.01.62.32.58z"></path><path d="m196.68 274.14c.48.45.38-1.35 0-1.14s.07.85 0 1.14z"></path><path d="m196.47 273.23s0 0 0 0z"></path><path d="m191.64 277c-.3.13-.15.5-.08.64.26-.06.44-.55.08-.64z"></path><path d="m189.77 274.65s0 0 0 0 .01.02 0 0z"></path><path d="m190.25 274.16s0-.12 0-.06.01.03 0 .06z"></path><path d="m190.59 274.15c0 .18.14.32.23.41.56 0-.14-.79-.23-.41z"></path><path d="m193.2 274.16c-.16.3 0 .7.24.56.26-.3-.02-.96-.24-.56z"></path><path d="m193.22 275.25h.06s-.05 0-.06 0z"></path><path d="m195 277.73c-.06.18 0 .25.07.34.15-.07.19-.38-.07-.34z"></path><path d="m195.55 282.16c-.09 0-.08.21 0 .25s.09-.28 0-.25z"></path><path d="m196.26 275.78c-.17-.14-.16.21-.06.25s.09-.16.06-.25z"></path><path d="m196.31 275.6c0 .11.07.09.05 0z"></path><path d="m195.6 278.81s0 .08 0 .11.09-.29 0-.11z"></path><path d="m196.91 276.87c-.35.23-.12 1.21.27 1.09s.2-1.36-.27-1.09z"></path><path d="m199.18 279c-.39-.71-.67.66-.41.74.12.39.68-.18.41-.74z"></path><path d="m197.7 274.28c.07.13.1 0 .05-.1s-.02.04-.05.1z"></path><path d="m198.05 270.93c-.06-.14-.12.1 0 .13a.14.14 0 0 0 0-.13z"></path><path d="m199 278c.1-.11-.09-.29 0-.06.06-.13 0 .11 0 .06z"></path><path d="m199.23 275.05c0-.53-.44-.11-.24.18s.28.08.24-.18z"></path><path d="m199.53 276.13c.22 0 0-1-.26-.79s-.03 1.14.26.79z"></path><path d="m194.66 272.9a.3.3 0 0 0 0 .36c.12.02.2-.41 0-.36z"></path><path d="m195 273c0 .06.06 0 .07 0s-.14.08-.07 0z"></path><path d="m195.24 273.59c.32-.27.51-.34.34-1-.77-.38-.27.82-.34 1z"></path><path d="m195.55 273.73s0-.06 0-.07z"></path><path d="m227.15 300 .27.08c-.04-.08-.2-.08-.27-.08z"></path><path d="m227.66 300.23c.39-.07 0-.18-.07-.32z"></path><path d="m166.67 269.71c0-.27-.22-.29-.24 0s.21.11.24 0z"></path><path d="m169.6 272.76c.3-.08.17-.52 0-.88-.6-.23-.43.81 0 .88z"></path><path d="m186.42 279.29c.28 0 1 .37 1.11-.35-.22-.83-.85.06-1.11.35z"></path><path d="m187.9 266.41c-.11.23.08 0 .13 0z"></path><path d="m200.78 267.1c1 .4.65-1.42-.14-1-.13.44.01.59.14 1z"></path><path d="m201.83 268.08c.39.41.5-.37.12-.34.1.1.36.61-.12.34z"></path><path d="m207.74 279.43c.1-.45.61.16.77-.27.25-1.07-.72-.71-.77.27z"></path><path d="m205.16 268.59c.92.29.64-1.35-.2-1.09-.34.07.21.86.2 1.09z"></path><path d="m208.82 271c-.12.25.23.17.36.22.59-.82-.98-1.14-.36-.22z"></path><path d="m212.51 267.83c-1 .1-.21 1.23.15 1.59.51-.27.79-1.42-.15-1.59z"></path><path d="m217 281c.27-.09.31.27.12.44 1.74.62.99-2.21-.12-.44z"></path><path d="m215.23 273.29c1.53-.44-.37-2.63-.6-1.23-.43.42.48.87.6 1.23z"></path><path d="m264.37 275.3c-.45 0 0 1.07.32 1.17.88.06.1-1.47-.32-1.17z"></path><path d="m191 293.2s-.08 0-.11 0z"></path><path d="m191.1 293.26c.15 0 0-.06 0-.12z"></path><path d="m167.9 281c-.09-.16-.17.09-.07.16s.09-.06.07-.16z"></path><path d="m180.17 275.22s0 0 .07 0-.04-.01-.07 0z"></path><path d="m168.05 280.53c0 .15.13 0 .06-.07s-.05.03-.06.07z"></path><path d="m181.05 275.5c0-.24-.22-.2-.33-.14.11.15.28.27.33.14z"></path><path d="m169.15 281.47c-.23-.11-.19.29 0 .33s.05-.19 0-.33z"></path><path d="m164.41 271.11a.41.41 0 0 0 .31.2c.38-.11-.17-.47-.31-.2z"></path><path d="m191 267.84c0 .27.42 1 .65.64s-.91-1.74-.65-.64z"></path><path d="m165.65 271.8a.17.17 0 0 0 -.31 0c.06.07.27.2.31 0z"></path><path d="m165.89 271.09c0 .48.54.57.29-.08-.18-.24-.8-.01-.29.08z"></path><path d="m165.84 270.44s.02 0 0 0z"></path><path d="m168.55 268.91s0 0 0 .06.02-.05 0-.06z"></path><path d="m172.62 274.63c.12.12.09-.15 0-.18s0 .11 0 .18z"></path><path d="m172.7 270.24c0 .06 0 .24.07.22s.04-.29-.07-.22z"></path><path d="m172.43 268.48c.17 0 0-.53-.13-.53s-.07.58.13.53z"></path><path d="m172.75 269.91s0-.23-.06-.19.02.2.06.19z"></path><path d="m174.08 274c-.08.09 0 .36.1.32s.01-.32-.1-.32z"></path><path d="m168.86 275.14v.09s.14-.08 0-.09z"></path><path d="m169.28 275.68c-.06.16.36.34.4 0-.03-.48-.88-.2-.4 0z"></path><path d="m173.55 270.32s-.05-.18-.09-.13.07.32.09.13z"></path><path d="m174.67 273.55c0-.06 0-.14-.06-.16s-.04.34.06.16z"></path><path d="m174.3 272c.12.19.12-.12 0-.15s-.05.03 0 .15z"></path><path d="m174.88 273.32c0-.27-.12-.09-.19-.17-.06.22.06.25.19.17z"></path><path d="m170.63 274.74c-.31.31.19.34.14.56 1.23.2-.16-1.23-.14-.56z"></path><path d="m171 277c.1.11.53.39.43-.07-.17-.19-.33-.09-.43.07z"></path><path d="m171.85 277.26.06.06s.01-.14-.06-.06z"></path><path d="m172.51 277.4c-.16-.11-.43.09-.25.2.08.4.62.05.25-.2z"></path><path d="m172.23 277.68s0 0 0-.05z"></path><path d="m173.27 277.81c-.28-.19-.33.18-.43.26.22.18.75.11.43-.26z"></path><path d="m177.84 279.6c-.25 0-.24.23-.1.41.26-.01.26-.29.1-.41z"></path><path d="m176.25 280c-.05.08 0 0 .05 0z"></path><path d="m179.91 279.59c.29-.53-.58-.72-.36-.23-.15.1.19.3.36.23z"></path><path d="m173.86 265.33c.12-.13 0-.08 0 0 .14.16.14.13 0 0z"></path><path d="m174.09 265.34s0 0 0 0z"></path><path d="m174 265.38c.07-.05 0-.22.13-.05-.13-.18-.13-.11-.13.05z"></path><path d="m174.11 265.4c0-.1 0 0-.05.05s.06.01.05-.05z"></path><path d="m178.18 274.06a1.83 1.83 0 0 0 -1.11-.26c-.07 1.03 1.99 1.94 1.11.26z"></path><path d="m181.1 280.16c-.06.15 0 .21 0 .36.4.18.32-.52 0-.36z"></path><path d="m177.13 269.46c-.14-.26-.35-.11-.26.18s.36.07.26-.18z"></path><path d="m181.58 280.93a.07.07 0 0 1 -.06 0s.03-.01.06 0z"></path><path d="m181.64 280.83c-.12-.11 0 0 0 .1a.06.06 0 0 0 0-.1z"></path><path d="m181.62 280.93s0 0 0 0z"></path><path d="m178.38 271.31c.17-.62-.61-.48-.15-.05 0 .28-.12-.19-.22-.1.16.14.13.31.37.15z"></path><path d="m178.23 271.41a0 0 0 0 0 0 0z"></path><path d="m183.58 285.27c0-.17.23.07.3-.09.12-.41-.26-.27-.3.09z"></path><path d="m182.92 281.17a.25.25 0 0 0 -.19-.44c-.13.08.07.49.19.44z"></path><path d="m177.59 266.32c0-.06 0-.11-.06-.17-.43-.22-.06.62.06.17z"></path><path d="m184.29 282.18c0-.1.09-.06 0-.25-.24-.24-.29.31 0 .25z"></path><path d="m185.85 281.11c-.38-.51-.59.22-.19.39a.31.31 0 0 0 .19-.39z"></path><path d="m187.17 286c.11 0 .12.11 0 .17.71.19.47-.89 0-.17z"></path><path d="m180 269.56s0 0 0 0 0 .11 0 0z"></path><path d="m186.8 282.51c-.35-.35-.46 0-.47.23.24.26.67.35.47-.23z"></path><path d="m180.17 269.64h-.08s.06-.01.08 0z"></path><path d="m180 269.49c.11-.22.15.08.2.14.22-.33-.48-.36-.2-.14z"></path><path d="m180.05 269.54s0 .13 0 .1a.25.25 0 0 1 0-.1z"></path><path d="m184.49 270.33s0 .11 0 .09.02-.12 0-.09z"></path><path d="m184.55 270.34c0-.06 0-.11 0 0z"></path><path d="m184.57 270.26v-.05a.11.11 0 0 0 0 .05z"></path><path d="m184.57 270.43c.27.2.36-.29.07-.23.1.23-.03.2-.07.23z"></path><path d="m190.45 278.68c.33-.84-.73-.38-.15.06.11-.12.01-.36.15-.06z"></path><path d="m186.78 272.78c.08.3.43.1.28-.21s-.41.14-.28.21z"></path><path d="m189.88 279.62c.45-.27-.25-.29 0-.26s.12.19 0 .26z"></path><path d="m186.93 271.6c.08-.2.09-.41-.2-.15.27-.15.07.13.2.15z"></path><path d="m200.58 279.18s0 .05 0 .08z"></path><path d="m200.26 279.11c.75.09 1.33-.16.47-1.72.64-.22.07-1.88-.34-2a2.34 2.34 0 0 0 -.13 1.63c-1.26-.02-.69 1.92 0 2.09z"></path><path d="m188.13 272.06c.29.22-.12-.06-.08.11.4.35.36-.39.08-.11zm.17.16s0 0 0 0z"></path><path d="m201.86 269.23c1.37.4-1.4-3.93-.93-1.08.24.43.82.68.93 1.08z"></path><path d="m200.81 267.94s0 0 0 0 .01-.01 0 0z"></path><path d="m195.38 277.61c-.45.42.05.94.26 1.12.42-.26.36-1.21-.26-1.12z"></path><path d="m190.7 274.88s.07 0 0 0-.02-.03 0 0z"></path><path d="m191.25 273.72s0-.17-.08-.1.08.06.08.1z"></path><path d="m191.15 273.65s0-.02 0 0z"></path><path d="m192.21 273.94c.2.22.69.1.45-.46-.52-.48-1.31.03-.45.46z"></path><path d="m196.19 271.83a1.08 1.08 0 0 0 .38.88c.98.36-.04-2.07-.38-.88z"></path><path d="m197.06 273.55s-.08.05-.1.08z"></path><path d="m202.08 276.78c.3.19.16-.78-.25-.45.04.2.01.45.25.45z"></path><path d="m205.92 283.14c-.17 0 0 .41.15.43.34 0 .03-.57-.15-.43z"></path><path d="m202.25 272.28c0 .12.08.13.06.2.5.61.26-.65-.06-.2z"></path><path d="m202.52 272c0-.07 0-.19-.12-.1a.11.11 0 0 0 .12.1z"></path><path d="m203.69 277.47c-.17 0-.09.26 0 .33a.19.19 0 0 0 0-.33z"></path><path d="m206.6 278.86c.4.71 1.11.2.51-.76-.9-.65-.75.8-.51.76z"></path><path d="m205.6 274.08c0-.82-1.48-1.27-1.37-.27.3 1.28 1.95 1.83 1.37.27z"></path><path d="m210.36 276.14c.21.26.18-.85-.11-1.1-1.94-1.82-.61 2.59.11 1.1z"></path><path d="m203.76 268.57c-.1-.17-.22-.2-.14.05.06.05.18.09.14-.05z"></path><path d="m208.7 273.13c0 .27.12 0 .17.26.13-.07-.03-.39-.17-.26z"></path><path d="m206.26 268.83c.21.51.91 1.25 1.31 1.2 1.99.97-.94-3.74-1.31-1.2z"></path><path d="m211.21 270.79c.58-.24-.47-2.29-1.36-2.49-1-.4-1.33-.46-.69.77.23 1.31 1.73 2.44 2.05 1.72z"></path><path d="m197.82 269.21c.41.41.22-.73-.15-.46a.75.75 0 0 0 .15.46z"></path><path d="m198.32 268.71c0 .11.07-.11.09-.12s-.16.24-.09.12z"></path><path d="m198.29 268.1c.82.76.37 1.75 1.63 1.6.2.4.08-.28-.17-.16.34-.16.55-.09 0-.55.4-.61-1.67-2.32-1.46-.89z"></path><path d="m228.55 299.51h.32c-.06-.04-.24-.01-.32 0z"></path><path d="m229.19 299.7c.43-.17 0-.23-.17-.37z"></path><path d="m148.87 279.91c-.14 0-.09.16-.08.3.31.38.33-.3.08-.3z"></path><path d="m153.61 282.71c.31-.2 0-.68-.33-1-.84-.1-.21 1.06.33 1z"></path><path d="m154.6 265.73c-.08-.35-.14-.7 0-.07-.6-.44-.35-.22 0 .07z"></path><path d="m156.62 265.4c-.17.19 0 .21.18.28z"></path><path d="m158.18 266.39c0 .12.06-.14 0-.13z"></path><path d="m158.2 266.11c.63 1 2-.53.56-.9-.63-.15-1.25.79-.56.9z"></path><path d="m161.37 267c1.88-.45-.44-2.59-.79-.72.12 1.06-.14.22.79.72z"></path><path d="m176.43 284c-.47-.05-1.13.92-1 .9.12.29 2.02-.04 1-.9z"></path><path d="m177.66 267.55c0 .48.5-.1.65-.14.31-1.71-2.31-.67-.65.14z"></path><path d="m173.17 269.22c-.06.28.09-.05.14-.08z"></path><path d="m188.7 266.35c1.31.2.36-1.88-.44-1.11-.05.51.17.65.44 1.11z"></path><path d="m190.23 267.24c.58.38.48-.58 0-.45.18.1.65.64 0 .45z"></path><path d="m194.31 267c1.19.1.38-1.8-.53-1.27-.39.16.48.97.53 1.27z"></path><path d="m211.64 279c.29-.17.43.26.26.5 2.2.34.57-2.89-.26-.5z"></path><path d="m100.7 116.19a1 1 0 0 1 -.12-2c.48-.06 47.26-5.84 52.17-47.46a1 1 0 1 1 2 .23c-5.09 43.21-53.43 49.16-53.92 49.22z"></path><path d="m281 166.77c-16.82 0-28.89-5.3-34.94-15.35a1 1 0 0 1 1.72-1c13.92 23.15 56.91 11.34 57.34 11.22a1 1 0 0 1 .54 1.92 102 102 0 0 1 -24.06 3.24z"></path><path d="m231.67 118.9a1 1 0 0 1 -.78-.38 1 1 0 0 1 .16-1.41c.43-.34 43.14-34.62 30-69.78a1 1 0 0 1 .59-1.29 1 1 0 0 1 1.28.59c13.63 36.53-30.21 71.7-30.65 72.05a1 1 0 0 1 -.6.22z"></path><path d="m164.39 116.19a1 1 0 0 1 -.86-.49c-5.58-9.44-7.34-16.49-5.39-21.53 2.29-6 9.09-8.06 15.66-10.1 7.42-2.3 13.82-4.29 13.07-11.12a1 1 0 1 1 2-.22c.93 8.48-6.9 10.91-14.47 13.25-6.11 1.9-12.44 3.86-14.38 8.91-1.72 4.44 0 10.91 5.24 19.79a1 1 0 0 1 -.36 1.37.9.9 0 0 1 -.51.14z"></path></g><path d="m115.23 26.63h34.34v31.67h-34.34z" fill="#2196f3"></path><path d="m173.37 0h34.34v31.67h-34.34z" fill="#2196f3"></path><path d="m301.97 55.24h34.34v31.67h-34.34z" fill="#2196f3"></path><path d="m143.08 36.61h-21.35a1 1 0 0 1 0-2h21.35a1 1 0 0 1 0 2z" fill="#f4f4f4"></path><path d="m143.08 45.27h-21.35a1 1 0 0 1 0-2h21.35a1 1 0 0 1 0 2z" fill="#f4f4f4"></path><path d="m201.22 9.91h-21.35a1 1 0 0 1 0-2h21.35a1 1 0 0 1 0 2z" fill="#f4f4f4"></path><path d="m329.82 63.23h-21.36a1 1 0 0 1 0-2h21.36a1 1 0 0 1 0 2z" fill="#f4f4f4"></path><path d="m329.82 71.93h-21.36a1 1 0 0 1 0-2h21.36a1 1 0 0 1 0 2z" fill="#f4f4f4"></path><path d="m329.82 80.91h-21.36a1 1 0 0 1 0-2h21.36a1 1 0 0 1 0 2z" fill="#f4f4f4"></path><path d="m245.1 55.43h-21.36a1 1 0 0 1 0-2h21.36a1 1 0 0 1 0 2z" fill="#f4f4f4"></path><path d="m245.1 64h-21.36a1 1 0 1 1 0-2h21.36a1 1 0 0 1 0 2z" fill="#f4f4f4"></path>',
            382,
          ),
        ]),
    )
  )
}
const A8 = X0(E8, [['render', T8]]),
  I8 = { class: 'd-flex align-center flex-column justify-center py-16' },
  O8 = { class: 'illustration' },
  D8 = { class: 'my-8 text-h6 text-blue-darken-3' },
  R8 = R1({
    __name: 'NoEntries',
    props: { item: { type: String, default: '' }, buttonText: { type: String, default: '' } },
    setup(t) {
      const e = t.item === 'projects',
        a = e ? 'Ready to start a new project' : 'There are no tasks here yet'
      return (n, s) => (
        Ft(),
        p1('div', I8, [
          ue('div', O8, [(Ft(), Ke(Gc(e ? x8 : A8)))]),
          ue('h2', D8, P1(Ot(a)), 1),
          ue('h4', null, [
            s[0] || (s[0] = ye(' Try to get them by clicking the button ')),
            ue('strong', null, P1(t.buttonText), 1),
            s[1] || (s[1] = ye('. ')),
          ]),
        ])
      )
    },
  }),
  L8 = X0(R8, [['__scopeId', 'data-v-04734ea9']]),
  _3 = G(
    {
      color: String,
      ...c0(),
      ..._t(),
      ...M1(),
      ...Y0(),
      ...Z0(),
      ...mn(),
      ...je(),
      ...qt(),
      ...Yt(),
    },
    'VSheet',
  ),
  ji = tt()({
    name: 'VSheet',
    props: _3(),
    setup(t, e) {
      let { slots: a } = e
      const { themeClasses: n } = ie(t),
        { backgroundColorClasses: s, backgroundColorStyles: r } = $e(Mt(t, 'color')),
        { borderClasses: i } = l0(t),
        { dimensionStyles: c } = V1(t),
        { elevationClasses: l } = q0(t),
        { locationStyles: h } = pn(t),
        { positionClasses: o } = fn(t),
        { roundedClasses: d } = He(t)
      return (
        ht(() =>
          v(
            t.tag,
            {
              class: ['v-sheet', n.value, s.value, i.value, l.value, o.value, d.value, t.class],
              style: [r.value, c.value, h.value, t.style],
            },
            a,
          ),
        ),
        {}
      )
    },
  }),
  M8 = G(
    {
      allowedDates: [Array, Function],
      disabled: { type: Boolean, default: null },
      displayValue: null,
      modelValue: Array,
      month: [Number, String],
      max: null,
      min: null,
      showAdjacentMonths: Boolean,
      year: [Number, String],
      weekdays: { type: Array, default: () => [0, 1, 2, 3, 4, 5, 6] },
      weeksInMonth: { type: String, default: 'dynamic' },
      firstDayOfWeek: [Number, String],
    },
    'calendar',
  )
function V8(t) {
  const e = r0(),
    a = Dt(t, 'modelValue', [], (f) => Ve(f).map((m) => e.date(m))),
    n = _(() =>
      t.displayValue
        ? e.date(t.displayValue)
        : a.value.length > 0
          ? e.date(a.value[0])
          : t.min
            ? e.date(t.min)
            : Array.isArray(t.allowedDates)
              ? e.date(t.allowedDates[0])
              : e.date(),
    ),
    s = Dt(
      t,
      'year',
      void 0,
      (f) => {
        const m = f != null ? Number(f) : e.getYear(n.value)
        return e.startOfYear(e.setYear(e.date(), m))
      },
      (f) => e.getYear(f),
    ),
    r = Dt(
      t,
      'month',
      void 0,
      (f) => {
        const m = f != null ? Number(f) : e.getMonth(n.value),
          g = e.setYear(e.startOfMonth(e.date()), e.getYear(s.value))
        return e.setMonth(g, m)
      },
      (f) => e.getMonth(f),
    ),
    i = _(() => t.firstDayOfWeek ?? t.weekdays[0]),
    c = _(() => {
      const f = Number(t.firstDayOfWeek ?? 0)
      return t.weekdays.map((m) => (m + f) % 7)
    }),
    l = _(() => {
      const f = e.getWeekArray(r.value, i.value),
        m = f.flat(),
        g = 6 * 7
      if (t.weeksInMonth === 'static' && m.length < g) {
        const S = m[m.length - 1]
        let b = []
        for (let w = 1; w <= g - m.length; w++)
          b.push(e.addDays(S, w)), w % 7 === 0 && (f.push(b), (b = []))
      }
      return f
    })
  function h(f, m) {
    return f
      .filter((g) => c.value.includes(e.toJsDate(g).getDay()))
      .map((g, S) => {
        const b = e.toISO(g),
          w = !e.isSameMonth(g, r.value),
          x = e.isSameDay(g, e.startOfMonth(r.value)),
          M = e.isSameDay(g, e.endOfMonth(r.value)),
          O = e.isSameDay(g, r.value)
        return {
          date: g,
          isoDate: b,
          formatted: e.format(g, 'keyboardDate'),
          year: e.getYear(g),
          month: e.getMonth(g),
          isDisabled: p(g),
          isWeekStart: S % 7 === 0,
          isWeekEnd: S % 7 === 6,
          isToday: e.isSameDay(g, m),
          isAdjacent: w,
          isHidden: w && !t.showAdjacentMonths,
          isStart: x,
          isSelected: a.value.some((D) => e.isSameDay(g, D)),
          isEnd: M,
          isSame: O,
          localized: e.format(g, 'dayOfMonth'),
        }
      })
  }
  const o = _(() => {
      const f = e.startOfWeek(n.value, t.firstDayOfWeek),
        m = []
      for (let S = 0; S <= 6; S++) m.push(e.addDays(f, S))
      const g = e.date()
      return h(m, g)
    }),
    d = _(() => {
      const f = l.value.flat(),
        m = e.date()
      return h(f, m)
    }),
    u = _(() => l.value.map((f) => (f.length ? $p(e, f[0]) : null)))
  function p(f) {
    if (t.disabled) return !0
    const m = e.date(f)
    return (t.min && e.isAfter(e.date(t.min), m)) || (t.max && e.isAfter(m, e.date(t.max)))
      ? !0
      : Array.isArray(t.allowedDates) && t.allowedDates.length > 0
        ? !t.allowedDates.some((g) => e.isSameDay(e.date(g), m))
        : typeof t.allowedDates == 'function'
          ? !t.allowedDates(m)
          : !1
  }
  return {
    displayValue: n,
    daysInMonth: d,
    daysInWeek: o,
    genDays: h,
    model: a,
    weeksInMonth: l,
    weekDays: c,
    weekNumbers: u,
  }
}
const S3 = G(
    {
      modelValue: null,
      color: String,
      cancelText: { type: String, default: '$vuetify.confirmEdit.cancel' },
      okText: { type: String, default: '$vuetify.confirmEdit.ok' },
    },
    'VConfirmEdit',
  ),
  Hi = tt()({
    name: 'VConfirmEdit',
    props: S3(),
    emits: { cancel: () => !0, save: (t) => !0, 'update:modelValue': (t) => !0 },
    setup(t, e) {
      let { emit: a, slots: n } = e
      const s = Dt(t, 'modelValue'),
        r = ct()
      fe(() => {
        r.value = structuredClone(ut(s.value))
      })
      const { t: i } = U0(),
        c = _(() => Xa(s.value, r.value))
      function l() {
        ;(s.value = r.value), a('save', r.value)
      }
      function h() {
        ;(r.value = structuredClone(ut(s.value))), a('cancel')
      }
      function o(u) {
        return v(xt, null, [
          v(
            pe,
            lt(
              {
                disabled: c.value,
                variant: 'text',
                color: t.color,
                onClick: h,
                text: i(t.cancelText),
              },
              u,
            ),
            null,
          ),
          v(
            pe,
            lt(
              { disabled: c.value, variant: 'text', color: t.color, onClick: l, text: i(t.okText) },
              u,
            ),
            null,
          ),
        ])
      }
      let d = !1
      return (
        ht(() => {
          var u
          return v(xt, null, [
            (u = n.default) == null
              ? void 0
              : u.call(n, {
                  model: r,
                  save: l,
                  cancel: h,
                  isPristine: c.value,
                  get actions() {
                    return (d = !0), o
                  },
                }),
            !d && o(),
          ])
        }),
        { save: l, cancel: h, isPristine: c }
      )
    },
  }),
  w3 = G(
    {
      active: { type: [String, Array], default: void 0 },
      disabled: { type: [Boolean, String, Array], default: null },
      nextIcon: { type: Nt, default: '$next' },
      prevIcon: { type: Nt, default: '$prev' },
      modeIcon: { type: Nt, default: '$subgroup' },
      text: String,
      viewMode: { type: String, default: 'month' },
    },
    'VDatePickerControls',
  ),
  Wi = tt()({
    name: 'VDatePickerControls',
    props: w3(),
    emits: {
      'click:year': () => !0,
      'click:month': () => !0,
      'click:prev': () => !0,
      'click:next': () => !0,
      'click:text': () => !0,
    },
    setup(t, e) {
      let { emit: a } = e
      const n = _(() => (Array.isArray(t.disabled) ? t.disabled.includes('text') : !!t.disabled)),
        s = _(() => (Array.isArray(t.disabled) ? t.disabled.includes('mode') : !!t.disabled)),
        r = _(() => (Array.isArray(t.disabled) ? t.disabled.includes('prev') : !!t.disabled)),
        i = _(() => (Array.isArray(t.disabled) ? t.disabled.includes('next') : !!t.disabled))
      function c() {
        a('click:prev')
      }
      function l() {
        a('click:next')
      }
      function h() {
        a('click:year')
      }
      function o() {
        a('click:month')
      }
      return (
        ht(() =>
          v('div', { class: ['v-date-picker-controls'] }, [
            v(
              pe,
              {
                class: 'v-date-picker-controls__month-btn',
                'data-testid': 'month-btn',
                disabled: n.value,
                text: t.text,
                variant: 'text',
                rounded: !0,
                onClick: o,
              },
              null,
            ),
            v(
              pe,
              {
                class: 'v-date-picker-controls__mode-btn',
                'data-testid': 'year-btn',
                disabled: s.value,
                density: 'comfortable',
                icon: t.modeIcon,
                variant: 'text',
                onClick: h,
              },
              null,
            ),
            v(r7, null, null),
            v('div', { class: 'v-date-picker-controls__month' }, [
              v(
                pe,
                {
                  'data-testid': 'prev-month',
                  disabled: r.value,
                  icon: t.prevIcon,
                  variant: 'text',
                  onClick: c,
                },
                null,
              ),
              v(
                pe,
                {
                  'data-testid': 'next-month',
                  disabled: i.value,
                  icon: t.nextIcon,
                  variant: 'text',
                  onClick: l,
                },
                null,
              ),
            ]),
          ]),
        ),
        {}
      )
    },
  }),
  $8 = G(
    { appendIcon: Nt, color: String, header: String, transition: String, onClick: h1() },
    'VDatePickerHeader',
  ),
  Ui = tt()({
    name: 'VDatePickerHeader',
    props: $8(),
    emits: { click: () => !0, 'click:append': () => !0 },
    setup(t, e) {
      let { emit: a, slots: n } = e
      const { backgroundColorClasses: s, backgroundColorStyles: r } = $e(t, 'color')
      function i() {
        a('click')
      }
      function c() {
        a('click:append')
      }
      return (
        ht(() => {
          const l = !!(n.default || t.header),
            h = !!(n.append || t.appendIcon)
          return v(
            'div',
            {
              class: [
                'v-date-picker-header',
                { 'v-date-picker-header--clickable': !!t.onClick },
                s.value,
              ],
              style: r.value,
              onClick: i,
            },
            [
              n.prepend &&
                v('div', { key: 'prepend', class: 'v-date-picker-header__prepend' }, [n.prepend()]),
              l &&
                v(
                  Je,
                  { key: 'content', name: t.transition },
                  {
                    default: () => {
                      var o
                      return [
                        v('div', { key: t.header, class: 'v-date-picker-header__content' }, [
                          ((o = n.default) == null ? void 0 : o.call(n)) ?? t.header,
                        ]),
                      ]
                    },
                  },
                ),
              h &&
                v('div', { class: 'v-date-picker-header__append' }, [
                  n.append
                    ? v(
                        Ht,
                        {
                          key: 'append-defaults',
                          disabled: !t.appendIcon,
                          defaults: { VBtn: { icon: t.appendIcon, variant: 'text' } },
                        },
                        {
                          default: () => {
                            var o
                            return [(o = n.append) == null ? void 0 : o.call(n)]
                          },
                        },
                      )
                    : v(
                        pe,
                        { key: 'append-btn', icon: t.appendIcon, variant: 'text', onClick: c },
                        null,
                      ),
                ]),
            ],
          )
        }),
        {}
      )
    },
  }),
  C3 = G(
    {
      color: String,
      hideWeekdays: Boolean,
      multiple: [Boolean, Number, String],
      showWeek: Boolean,
      transition: { type: String, default: 'picker-transition' },
      reverseTransition: { type: String, default: 'picker-reverse-transition' },
      ...ke(M8(), ['displayValue']),
    },
    'VDatePickerMonth',
  ),
  Gi = tt()({
    name: 'VDatePickerMonth',
    props: C3(),
    emits: { 'update:modelValue': (t) => !0, 'update:month': (t) => !0, 'update:year': (t) => !0 },
    setup(t, e) {
      let { emit: a, slots: n } = e
      const s = ct(),
        { daysInMonth: r, model: i, weekNumbers: c } = V8(t),
        l = r0(),
        h = ot(),
        o = ot(),
        d = ot(!1),
        u = _(() => (d.value ? t.reverseTransition : t.transition))
      t.multiple === 'range' &&
        i.value.length > 0 &&
        ((h.value = i.value[0]), i.value.length > 1 && (o.value = i.value[i.value.length - 1]))
      const p = _(() => {
        const S = ['number', 'string'].includes(typeof t.multiple) ? Number(t.multiple) : 1 / 0
        return i.value.length >= S
      })
      nt(r, (S, b) => {
        b && (d.value = l.isBefore(S[0].date, b[0].date))
      })
      function f(S) {
        const b = l.startOfDay(S)
        if (
          (i.value.length === 0
            ? (h.value = void 0)
            : i.value.length === 1 && ((h.value = i.value[0]), (o.value = void 0)),
          !h.value)
        )
          (h.value = b), (i.value = [h.value])
        else if (o.value) (h.value = S), (o.value = void 0), (i.value = [h.value])
        else {
          if (l.isSameDay(b, h.value)) {
            ;(h.value = void 0), (i.value = [])
            return
          } else
            l.isBefore(b, h.value)
              ? ((o.value = l.endOfDay(h.value)), (h.value = b))
              : (o.value = l.endOfDay(b))
          const w = l.getDiff(o.value, h.value, 'days'),
            x = [h.value]
          for (let M = 1; M < w; M++) {
            const O = l.addDays(h.value, M)
            x.push(O)
          }
          x.push(o.value), (i.value = x)
        }
      }
      function m(S) {
        const b = i.value.findIndex((w) => l.isSameDay(w, S))
        if (b === -1) i.value = [...i.value, S]
        else {
          const w = [...i.value]
          w.splice(b, 1), (i.value = w)
        }
      }
      function g(S) {
        t.multiple === 'range' ? f(S) : t.multiple ? m(S) : (i.value = [S])
      }
      return () =>
        v('div', { class: 'v-date-picker-month' }, [
          t.showWeek &&
            v('div', { key: 'weeks', class: 'v-date-picker-month__weeks' }, [
              !t.hideWeekdays &&
                v('div', { key: 'hide-week-days', class: 'v-date-picker-month__day' }, [ye(' ')]),
              c.value.map((S) =>
                v(
                  'div',
                  { class: ['v-date-picker-month__day', 'v-date-picker-month__day--adjacent'] },
                  [S],
                ),
              ),
            ]),
          v(
            Je,
            { name: u.value },
            {
              default: () => {
                var S
                return [
                  v(
                    'div',
                    {
                      ref: s,
                      key: (S = r.value[0].date) == null ? void 0 : S.toString(),
                      class: 'v-date-picker-month__days',
                    },
                    [
                      !t.hideWeekdays &&
                        l
                          .getWeekdays(t.firstDayOfWeek)
                          .map((b) =>
                            v(
                              'div',
                              {
                                class: ['v-date-picker-month__day', 'v-date-picker-month__weekday'],
                              },
                              [b],
                            ),
                          ),
                      r.value.map((b, w) => {
                        const x = { props: { onClick: () => g(b.date) }, item: b, i: w }
                        return (
                          p.value && !b.isSelected && (b.isDisabled = !0),
                          v(
                            'div',
                            {
                              class: [
                                'v-date-picker-month__day',
                                {
                                  'v-date-picker-month__day--adjacent': b.isAdjacent,
                                  'v-date-picker-month__day--hide-adjacent': b.isHidden,
                                  'v-date-picker-month__day--selected': b.isSelected,
                                  'v-date-picker-month__day--week-end': b.isWeekEnd,
                                  'v-date-picker-month__day--week-start': b.isWeekStart,
                                },
                              ],
                              'data-v-date': b.isDisabled ? void 0 : b.isoDate,
                            },
                            [
                              (t.showAdjacentMonths || !b.isAdjacent) &&
                                v(
                                  Ht,
                                  {
                                    defaults: {
                                      VBtn: {
                                        class: 'v-date-picker-month__day-btn',
                                        color:
                                          (b.isSelected || b.isToday) && !b.isDisabled
                                            ? t.color
                                            : void 0,
                                        disabled: b.isDisabled,
                                        icon: !0,
                                        ripple: !1,
                                        text: b.localized,
                                        variant: b.isDisabled
                                          ? b.isToday
                                            ? 'outlined'
                                            : 'text'
                                          : b.isToday && !b.isSelected
                                            ? 'outlined'
                                            : 'flat',
                                        onClick: () => g(b.date),
                                      },
                                    },
                                  },
                                  {
                                    default: () => {
                                      var M
                                      return [
                                        ((M = n.day) == null ? void 0 : M.call(n, x)) ??
                                          v(pe, x.props, null),
                                      ]
                                    },
                                  },
                                ),
                            ],
                          )
                        )
                      }),
                    ],
                  ),
                ]
              },
            },
          ),
        ])
    },
  }),
  k3 = G(
    {
      color: String,
      height: [String, Number],
      min: null,
      max: null,
      modelValue: Number,
      year: Number,
    },
    'VDatePickerMonths',
  ),
  Ki = tt()({
    name: 'VDatePickerMonths',
    props: k3(),
    emits: { 'update:modelValue': (t) => !0 },
    setup(t, e) {
      let { emit: a, slots: n } = e
      const s = r0(),
        r = Dt(t, 'modelValue'),
        i = _(() => {
          let c = s.startOfYear(s.date())
          return (
            t.year && (c = s.setYear(c, t.year)),
            Qa(12).map((l) => {
              const h = s.format(c, 'monthShort'),
                o = !!(
                  (t.min && s.isAfter(s.startOfMonth(s.date(t.min)), c)) ||
                  (t.max && s.isAfter(c, s.startOfMonth(s.date(t.max))))
                )
              return (c = s.getNextMonth(c)), { isDisabled: o, text: h, value: l }
            })
          )
        })
      return (
        fe(() => {
          r.value = r.value ?? s.getMonth(s.date())
        }),
        ht(() =>
          v('div', { class: 'v-date-picker-months', style: { height: it(t.height) } }, [
            v('div', { class: 'v-date-picker-months__content' }, [
              i.value.map((c, l) => {
                var d
                const h = {
                  active: r.value === l,
                  color: r.value === l ? t.color : void 0,
                  disabled: c.isDisabled,
                  rounded: !0,
                  text: c.text,
                  variant: r.value === c.value ? 'flat' : 'text',
                  onClick: () => o(l),
                }
                function o(u) {
                  if (r.value === u) {
                    a('update:modelValue', r.value)
                    return
                  }
                  r.value = u
                }
                return (
                  ((d = n.month) == null ? void 0 : d.call(n, { month: c, i: l, props: h })) ??
                  v(pe, lt({ key: 'month' }, h), null)
                )
              }),
            ]),
          ]),
        ),
        {}
      )
    },
  }),
  x3 = G(
    { color: String, height: [String, Number], min: null, max: null, modelValue: Number },
    'VDatePickerYears',
  ),
  Yi = tt()({
    name: 'VDatePickerYears',
    props: x3(),
    emits: { 'update:modelValue': (t) => !0 },
    setup(t, e) {
      let { emit: a, slots: n } = e
      const s = r0(),
        r = Dt(t, 'modelValue'),
        i = _(() => {
          const l = s.getYear(s.date())
          let h = l - 100,
            o = l + 52
          t.min && (h = s.getYear(s.date(t.min))), t.max && (o = s.getYear(s.date(t.max)))
          let d = s.startOfYear(s.date())
          return (
            (d = s.setYear(d, h)),
            Qa(o - h + 1, h).map((u) => {
              const p = s.format(d, 'year')
              return (d = s.setYear(d, s.getYear(d) + 1)), { text: p, value: u }
            })
          )
        })
      fe(() => {
        r.value = r.value ?? s.getYear(s.date())
      })
      const c = Ia()
      return (
        Ne(async () => {
          var l
          await ee(), (l = c.el) == null || l.scrollIntoView({ block: 'center' })
        }),
        ht(() =>
          v('div', { class: 'v-date-picker-years', style: { height: it(t.height) } }, [
            v('div', { class: 'v-date-picker-years__content' }, [
              i.value.map((l, h) => {
                var d
                const o = {
                  ref: r.value === l.value ? c : void 0,
                  active: r.value === l.value,
                  color: r.value === l.value ? t.color : void 0,
                  rounded: !0,
                  text: l.text,
                  variant: r.value === l.value ? 'flat' : 'text',
                  onClick: () => {
                    if (r.value === l.value) {
                      a('update:modelValue', r.value)
                      return
                    }
                    r.value = l.value
                  },
                }
                return (
                  ((d = n.year) == null ? void 0 : d.call(n, { year: l, i: h, props: o })) ??
                  v(pe, lt({ key: 'month' }, o), null)
                )
              }),
            ]),
          ]),
        ),
        {}
      )
    },
  }),
  N8 = rs('v-picker-title'),
  E3 = G(
    { bgColor: String, landscape: Boolean, title: String, hideHeader: Boolean, ..._3() },
    'VPicker',
  ),
  qi = tt()({
    name: 'VPicker',
    props: E3(),
    setup(t, e) {
      let { slots: a } = e
      const { backgroundColorClasses: n, backgroundColorStyles: s } = $e(Mt(t, 'color'))
      return (
        ht(() => {
          const r = ji.filterProps(t),
            i = !!(t.title || a.title)
          return v(
            ji,
            lt(r, {
              color: t.bgColor,
              class: [
                'v-picker',
                { 'v-picker--landscape': t.landscape, 'v-picker--with-actions': !!a.actions },
                t.class,
              ],
              style: t.style,
            }),
            {
              default: () => {
                var c
                return [
                  !t.hideHeader &&
                    v('div', { key: 'header', class: [n.value], style: [s.value] }, [
                      i &&
                        v(
                          N8,
                          { key: 'picker-title' },
                          {
                            default: () => {
                              var l
                              return [((l = a.title) == null ? void 0 : l.call(a)) ?? t.title]
                            },
                          },
                        ),
                      a.header && v('div', { class: 'v-picker__header' }, [a.header()]),
                    ]),
                  v('div', { class: 'v-picker__body' }, [
                    (c = a.default) == null ? void 0 : c.call(a),
                  ]),
                  a.actions &&
                    v(
                      Ht,
                      { defaults: { VBtn: { slim: !0, variant: 'text' } } },
                      { default: () => [v('div', { class: 'v-picker__actions' }, [a.actions()])] },
                    ),
                ]
              },
            },
          )
        }),
        {}
      )
    },
  }),
  P3 = G(
    {
      header: { type: String, default: '$vuetify.datePicker.header' },
      ...w3(),
      ...C3({ weeksInMonth: 'static' }),
      ...ke(k3(), ['modelValue']),
      ...ke(x3(), ['modelValue']),
      ...E3({ title: '$vuetify.datePicker.title' }),
      modelValue: null,
    },
    'VDatePicker',
  ),
  Ji = tt()({
    name: 'VDatePicker',
    props: P3(),
    emits: {
      'update:modelValue': (t) => !0,
      'update:month': (t) => !0,
      'update:year': (t) => !0,
      'update:viewMode': (t) => !0,
    },
    setup(t, e) {
      let { emit: a, slots: n } = e
      const s = r0(),
        { t: r } = U0(),
        i = Dt(
          t,
          'modelValue',
          void 0,
          (E) => Ve(E).map((T) => s.date(T)),
          (E) => (t.multiple ? E : E[0]),
        ),
        c = Dt(t, 'viewMode'),
        l = _(() => {
          const E = s.date(t.min)
          return t.min && s.isValid(E) ? E : null
        }),
        h = _(() => {
          const E = s.date(t.max)
          return t.max && s.isValid(E) ? E : null
        }),
        o = _(() => {
          var I
          const E = s.date()
          let T = E
          return (
            (I = i.value) != null && I[0]
              ? (T = s.date(i.value[0]))
              : l.value && s.isBefore(E, l.value)
                ? (T = l.value)
                : h.value && s.isAfter(E, h.value) && (T = h.value),
            T && s.isValid(T) ? T : E
          )
        }),
        d = ct(Number(t.month ?? s.getMonth(s.startOfMonth(o.value)))),
        u = ct(Number(t.year ?? s.getYear(s.startOfYear(s.setMonth(o.value, d.value))))),
        p = ot(!1),
        f = _(() =>
          t.multiple && i.value.length > 1
            ? r('$vuetify.datePicker.itemsSelected', i.value.length)
            : i.value[0] && s.isValid(i.value[0])
              ? s.format(s.date(i.value[0]), 'normalDateWithWeekday')
              : r(t.header),
        ),
        m = _(() => {
          let E = s.date()
          return (
            (E = s.setDate(E, 1)),
            (E = s.setMonth(E, d.value)),
            (E = s.setYear(E, u.value)),
            s.format(E, 'monthAndYear')
          )
        }),
        g = _(() => `date-picker-header${p.value ? '-reverse' : ''}-transition`),
        S = _(() => {
          if (t.disabled) return !0
          const E = []
          if (c.value !== 'month') E.push('prev', 'next')
          else {
            let T = s.date()
            if (
              ((T = s.startOfMonth(T)),
              (T = s.setMonth(T, d.value)),
              (T = s.setYear(T, u.value)),
              l.value)
            ) {
              const I = s.addDays(s.startOfMonth(T), -1)
              s.isAfter(l.value, I) && E.push('prev')
            }
            if (h.value) {
              const I = s.addDays(s.endOfMonth(T), 1)
              s.isAfter(I, h.value) && E.push('next')
            }
          }
          return E
        })
      function b() {
        d.value < 11 ? d.value++ : (u.value++, (d.value = 0), A(u.value)), D(d.value)
      }
      function w() {
        d.value > 0 ? d.value-- : (u.value--, (d.value = 11), A(u.value)), D(d.value)
      }
      function x() {
        c.value = 'month'
      }
      function M() {
        c.value = c.value === 'months' ? 'month' : 'months'
      }
      function O() {
        c.value = c.value === 'year' ? 'month' : 'year'
      }
      function D(E) {
        c.value === 'months' && M(), a('update:month', E)
      }
      function A(E) {
        c.value === 'year' && O(), a('update:year', E)
      }
      return (
        nt(i, (E, T) => {
          const I = Ve(T),
            C = Ve(E)
          if (!C.length) return
          const R = s.date(I[I.length - 1]),
            N = s.date(C[C.length - 1]),
            Z = s.getMonth(N),
            U = s.getYear(N)
          Z !== d.value && ((d.value = Z), D(d.value)),
            U !== u.value && ((u.value = U), A(u.value)),
            (p.value = s.isBefore(R, N))
        }),
        ht(() => {
          const E = qi.filterProps(t),
            T = Wi.filterProps(t),
            I = Ui.filterProps(t),
            C = Gi.filterProps(t),
            R = ke(Ki.filterProps(t), ['modelValue']),
            N = ke(Yi.filterProps(t), ['modelValue']),
            Z = { header: f.value, transition: g.value }
          return v(
            qi,
            lt(E, {
              class: [
                'v-date-picker',
                `v-date-picker--${c.value}`,
                { 'v-date-picker--show-week': t.showWeek },
                t.class,
              ],
              style: t.style,
            }),
            {
              title: () => {
                var U
                return (
                  ((U = n.title) == null ? void 0 : U.call(n)) ??
                  v('div', { class: 'v-date-picker__title' }, [r(t.title)])
                )
              },
              header: () =>
                n.header
                  ? v(
                      Ht,
                      { defaults: { VDatePickerHeader: { ...Z } } },
                      {
                        default: () => {
                          var U
                          return [(U = n.header) == null ? void 0 : U.call(n, Z)]
                        },
                      },
                    )
                  : v(
                      Ui,
                      lt({ key: 'header' }, I, Z, { onClick: c.value !== 'month' ? x : void 0 }),
                      { ...n, default: void 0 },
                    ),
              default: () =>
                v(xt, null, [
                  v(
                    Wi,
                    lt(T, {
                      disabled: S.value,
                      text: m.value,
                      'onClick:next': b,
                      'onClick:prev': w,
                      'onClick:month': M,
                      'onClick:year': O,
                    }),
                    null,
                  ),
                  v(
                    a8,
                    { hideOnLeave: !0 },
                    {
                      default: () => [
                        c.value === 'months'
                          ? v(
                              Ki,
                              lt({ key: 'date-picker-months' }, R, {
                                modelValue: d.value,
                                'onUpdate:modelValue': [(U) => (d.value = U), D],
                                min: l.value,
                                max: h.value,
                                year: u.value,
                              }),
                              null,
                            )
                          : c.value === 'year'
                            ? v(
                                Yi,
                                lt({ key: 'date-picker-years' }, N, {
                                  modelValue: u.value,
                                  'onUpdate:modelValue': [(U) => (u.value = U), A],
                                  min: l.value,
                                  max: h.value,
                                }),
                                null,
                              )
                            : v(
                                Gi,
                                lt({ key: 'date-picker-month' }, C, {
                                  modelValue: i.value,
                                  'onUpdate:modelValue': (U) => (i.value = U),
                                  month: d.value,
                                  'onUpdate:month': [(U) => (d.value = U), D],
                                  year: u.value,
                                  'onUpdate:year': [(U) => (u.value = U), A],
                                  min: l.value,
                                  max: h.value,
                                }),
                                null,
                              ),
                      ],
                    },
                  ),
                ]),
              actions: n.actions,
            },
          )
        }),
        {}
      )
    },
  }),
  B8 = G(
    {
      id: String,
      submenu: Boolean,
      ...ke(
        gn({
          closeDelay: 250,
          closeOnContentClick: !0,
          locationStrategy: 'connected',
          location: void 0,
          openDelay: 300,
          scrim: !1,
          scrollStrategy: 'reposition',
          transition: { component: e8 },
        }),
        ['absolute'],
      ),
    },
    'VMenu',
  ),
  F8 = tt()({
    name: 'VMenu',
    props: B8(),
    emits: { 'update:modelValue': (t) => !0 },
    setup(t, e) {
      let { slots: a } = e
      const n = Dt(t, 'modelValue'),
        { scopeId: s } = zn(),
        { isRtl: r } = e1(),
        i = t1(),
        c = _(() => t.id || `v-menu-${i}`),
        l = ct(),
        h = yt(C2, null),
        o = ot(new Set())
      me(C2, {
        register() {
          o.value.add(i)
        },
        unregister() {
          o.value.delete(i)
        },
        closeParents(g) {
          setTimeout(() => {
            var S
            !o.value.size &&
              !t.persistent &&
              (g == null || ((S = l.value) != null && S.contentEl && !du(g, l.value.contentEl))) &&
              ((n.value = !1), h == null || h.closeParents())
          }, 40)
        },
      }),
        Se(() => {
          h == null || h.unregister(), document.removeEventListener('focusin', d)
        }),
        j2(() => (n.value = !1))
      async function d(g) {
        var w, x, M
        const S = g.relatedTarget,
          b = g.target
        await ee(),
          n.value &&
            S !== b &&
            (w = l.value) != null &&
            w.contentEl &&
            (x = l.value) != null &&
            x.globalTop &&
            ![document, l.value.contentEl].includes(b) &&
            !l.value.contentEl.contains(b) &&
            ((M = o2(l.value.contentEl)[0]) == null || M.focus())
      }
      nt(
        n,
        (g) => {
          g
            ? (h == null || h.register(),
              Pt && document.addEventListener('focusin', d, { once: !0 }))
            : (h == null || h.unregister(), Pt && document.removeEventListener('focusin', d))
        },
        { immediate: !0 },
      )
      function u(g) {
        h == null || h.closeParents(g)
      }
      function p(g) {
        var S, b, w, x, M
        if (!t.disabled)
          if (g.key === 'Tab' || (g.key === 'Enter' && !t.closeOnContentClick)) {
            if (
              g.key === 'Enter' &&
              (g.target instanceof HTMLTextAreaElement ||
                (g.target instanceof HTMLInputElement && g.target.closest('form')))
            )
              return
            g.key === 'Enter' && g.preventDefault(),
              Pl(
                o2((S = l.value) == null ? void 0 : S.contentEl, !1),
                g.shiftKey ? 'prev' : 'next',
                (D) => D.tabIndex >= 0,
              ) ||
                ((n.value = !1),
                (w = (b = l.value) == null ? void 0 : b.activatorEl) == null || w.focus())
          } else
            t.submenu &&
              g.key === (r.value ? 'ArrowRight' : 'ArrowLeft') &&
              ((n.value = !1),
              (M = (x = l.value) == null ? void 0 : x.activatorEl) == null || M.focus())
      }
      function f(g) {
        var b
        if (t.disabled) return
        const S = (b = l.value) == null ? void 0 : b.contentEl
        S && n.value
          ? g.key === 'ArrowDown'
            ? (g.preventDefault(), g.stopImmediatePropagation(), ma(S, 'next'))
            : g.key === 'ArrowUp'
              ? (g.preventDefault(), g.stopImmediatePropagation(), ma(S, 'prev'))
              : t.submenu &&
                (g.key === (r.value ? 'ArrowRight' : 'ArrowLeft')
                  ? (n.value = !1)
                  : g.key === (r.value ? 'ArrowLeft' : 'ArrowRight') &&
                    (g.preventDefault(), ma(S, 'first')))
          : (t.submenu
              ? g.key === (r.value ? 'ArrowLeft' : 'ArrowRight')
              : ['ArrowDown', 'ArrowUp'].includes(g.key)) &&
            ((n.value = !0), g.preventDefault(), setTimeout(() => setTimeout(() => f(g))))
      }
      const m = _(() =>
        lt(
          {
            'aria-haspopup': 'menu',
            'aria-expanded': String(n.value),
            'aria-controls': c.value,
            onKeydown: f,
          },
          t.activatorProps,
        ),
      )
      return (
        ht(() => {
          const g = s0.filterProps(t)
          return v(
            s0,
            lt(
              { ref: l, id: c.value, class: ['v-menu', t.class], style: t.style },
              g,
              {
                modelValue: n.value,
                'onUpdate:modelValue': (S) => (n.value = S),
                absolute: !0,
                activatorProps: m.value,
                location: t.location ?? (t.submenu ? 'end' : 'bottom'),
                'onClick:outside': u,
                onKeydown: p,
              },
              s,
            ),
            {
              activator: a.activator,
              default: function () {
                for (var S = arguments.length, b = new Array(S), w = 0; w < S; w++)
                  b[w] = arguments[w]
                return v(
                  Ht,
                  { root: 'VMenu' },
                  {
                    default: () => {
                      var x
                      return [(x = a.default) == null ? void 0 : x.call(a, ...b)]
                    },
                  },
                )
              },
            },
          )
        }),
        Q0({ id: c, ΨopenChildren: o }, l)
      )
    },
  }),
  j8 = G(
    {
      active: Boolean,
      disabled: Boolean,
      max: [Number, String],
      value: { type: [Number, String], default: 0 },
      ..._t(),
      ...vn({ transition: { component: g3 } }),
    },
    'VCounter',
  ),
  H8 = tt()({
    name: 'VCounter',
    functional: !0,
    props: j8(),
    setup(t, e) {
      let { slots: a } = e
      const n = _(() => (t.max ? `${t.value} / ${t.max}` : String(t.value)))
      return (
        ht(() =>
          v(
            Je,
            { transition: t.transition },
            {
              default: () => [
                u1(
                  v(
                    'div',
                    {
                      class: [
                        'v-counter',
                        {
                          'text-error':
                            t.max && !t.disabled && parseFloat(t.value) > parseFloat(t.max),
                        },
                        t.class,
                      ],
                      style: t.style,
                    },
                    [
                      a.default
                        ? a.default({ counter: n.value, max: t.max, value: t.value })
                        : n.value,
                    ],
                  ),
                  [[Za, t.active]],
                ),
              ],
            },
          ),
        ),
        {}
      )
    },
  }),
  W8 = G({ text: String, onClick: h1(), ..._t(), ...Yt() }, 'VLabel'),
  U8 = tt()({
    name: 'VLabel',
    props: W8(),
    setup(t, e) {
      let { slots: a } = e
      return (
        ht(() => {
          var n
          return v(
            'label',
            {
              class: ['v-label', { 'v-label--clickable': !!t.onClick }, t.class],
              style: t.style,
              onClick: t.onClick,
            },
            [t.text, (n = a.default) == null ? void 0 : n.call(a)],
          )
        }),
        {}
      )
    },
  }),
  G8 = G({ floating: Boolean, ..._t() }, 'VFieldLabel'),
  la = tt()({
    name: 'VFieldLabel',
    props: G8(),
    setup(t, e) {
      let { slots: a } = e
      return (
        ht(() =>
          v(
            U8,
            {
              class: ['v-field-label', { 'v-field-label--floating': t.floating }, t.class],
              style: t.style,
              'aria-hidden': t.floating || void 0,
            },
            a,
          ),
        ),
        {}
      )
    },
  })
function T3(t) {
  const { t: e } = U0()
  function a(n) {
    let { name: s } = n
    const r = {
        prepend: 'prependAction',
        prependInner: 'prependAction',
        append: 'appendAction',
        appendInner: 'appendAction',
        clear: 'clear',
      }[s],
      i = t[`onClick:${s}`]
    function c(h) {
      ;(h.key !== 'Enter' && h.key !== ' ') ||
        (h.preventDefault(), h.stopPropagation(), El(i, new PointerEvent('click', h)))
    }
    const l = i && r ? e(`$vuetify.input.${r}`, t.label ?? '') : void 0
    return v(d1, { icon: t[`${s}Icon`], 'aria-label': l, onClick: i, onKeydown: c }, null)
  }
  return { InputIcon: a }
}
const Ss = G({ focused: Boolean, 'onUpdate:focused': h1() }, 'focus')
function ws(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Fe()
  const a = Dt(t, 'focused'),
    n = _(() => ({ [`${e}--focused`]: a.value }))
  function s() {
    a.value = !0
  }
  function r() {
    a.value = !1
  }
  return { focusClasses: n, isFocused: a, focus: s, blur: r }
}
const K8 = ['underlined', 'outlined', 'filled', 'solo', 'solo-inverted', 'solo-filled', 'plain'],
  A3 = G(
    {
      appendInnerIcon: Nt,
      bgColor: String,
      clearable: Boolean,
      clearIcon: { type: Nt, default: '$clear' },
      active: Boolean,
      centerAffix: { type: Boolean, default: void 0 },
      color: String,
      baseColor: String,
      dirty: Boolean,
      disabled: { type: Boolean, default: null },
      error: Boolean,
      flat: Boolean,
      label: String,
      persistentClear: Boolean,
      prependInnerIcon: Nt,
      reverse: Boolean,
      singleLine: Boolean,
      variant: { type: String, default: 'filled', validator: (t) => K8.includes(t) },
      'onClick:clear': h1(),
      'onClick:appendInner': h1(),
      'onClick:prependInner': h1(),
      ..._t(),
      ...zs(),
      ...je(),
      ...Yt(),
    },
    'VField',
  ),
  Zi = tt()({
    name: 'VField',
    inheritAttrs: !1,
    props: { id: String, ...Ss(), ...A3() },
    emits: { 'update:focused': (t) => !0, 'update:modelValue': (t) => !0 },
    setup(t, e) {
      let { attrs: a, emit: n, slots: s } = e
      const { themeClasses: r } = ie(t),
        { loaderClasses: i } = gs(t),
        { focusClasses: c, isFocused: l, focus: h, blur: o } = ws(t),
        { InputIcon: d } = T3(t),
        { roundedClasses: u } = He(t),
        { rtlClasses: p } = e1(),
        f = _(() => t.dirty || t.active),
        m = _(() => !!(t.label || s.label)),
        g = _(() => !t.singleLine && m.value),
        S = t1(),
        b = _(() => t.id || `input-${S}`),
        w = _(() => `${b.value}-messages`),
        x = ct(),
        M = ct(),
        O = ct(),
        D = _(() => ['plain', 'underlined'].includes(t.variant)),
        { backgroundColorClasses: A, backgroundColorStyles: E } = $e(Mt(t, 'bgColor')),
        { textColorClasses: T, textColorStyles: I } = n0(
          _(() => (t.error || t.disabled ? void 0 : f.value && l.value ? t.color : t.baseColor)),
        )
      nt(
        f,
        (N) => {
          if (g.value) {
            const Z = x.value.$el,
              U = M.value.$el
            requestAnimationFrame(() => {
              const X = as(Z),
                q = U.getBoundingClientRect(),
                ft = q.x - X.x,
                St = q.y - X.y - (X.height / 2 - q.height / 2),
                dt = q.width / 0.75,
                mt = Math.abs(dt - X.width) > 1 ? { maxWidth: it(dt) } : void 0,
                Jt = getComputedStyle(Z),
                Wt = getComputedStyle(U),
                ze = parseFloat(Jt.transitionDuration) * 1e3 || 150,
                $t = parseFloat(Wt.getPropertyValue('--v-field-label-scale')),
                P = Wt.getPropertyValue('color')
              ;(Z.style.visibility = 'visible'),
                (U.style.visibility = 'hidden'),
                K1(
                  Z,
                  { transform: `translate(${ft}px, ${St}px) scale(${$t})`, color: P, ...mt },
                  { duration: ze, easing: Da, direction: N ? 'normal' : 'reverse' },
                ).finished.then(() => {
                  Z.style.removeProperty('visibility'), U.style.removeProperty('visibility')
                })
            })
          }
        },
        { flush: 'post' },
      )
      const C = _(() => ({ isActive: f, isFocused: l, controlRef: O, blur: o, focus: h }))
      function R(N) {
        N.target !== document.activeElement && N.preventDefault()
      }
      return (
        ht(() => {
          var ft, St, dt
          const N = t.variant === 'outlined',
            Z = !!(s['prepend-inner'] || t.prependInnerIcon),
            U = !!(t.clearable || s.clear) && !t.disabled,
            X = !!(s['append-inner'] || t.appendInnerIcon || U),
            q = () =>
              s.label ? s.label({ ...C.value, label: t.label, props: { for: b.value } }) : t.label
          return v(
            'div',
            lt(
              {
                class: [
                  'v-field',
                  {
                    'v-field--active': f.value,
                    'v-field--appended': X,
                    'v-field--center-affix': t.centerAffix ?? !D.value,
                    'v-field--disabled': t.disabled,
                    'v-field--dirty': t.dirty,
                    'v-field--error': t.error,
                    'v-field--flat': t.flat,
                    'v-field--has-background': !!t.bgColor,
                    'v-field--persistent-clear': t.persistentClear,
                    'v-field--prepended': Z,
                    'v-field--reverse': t.reverse,
                    'v-field--single-line': t.singleLine,
                    'v-field--no-label': !q(),
                    [`v-field--variant-${t.variant}`]: !0,
                  },
                  r.value,
                  A.value,
                  c.value,
                  i.value,
                  u.value,
                  p.value,
                  t.class,
                ],
                style: [E.value, t.style],
                onClick: R,
              },
              a,
            ),
            [
              v('div', { class: 'v-field__overlay' }, null),
              v(
                Mo,
                {
                  name: 'v-field',
                  active: !!t.loading,
                  color: t.error ? 'error' : typeof t.loading == 'string' ? t.loading : t.color,
                },
                { default: s.loader },
              ),
              Z &&
                v('div', { key: 'prepend', class: 'v-field__prepend-inner' }, [
                  t.prependInnerIcon && v(d, { key: 'prepend-icon', name: 'prependInner' }, null),
                  (ft = s['prepend-inner']) == null ? void 0 : ft.call(s, C.value),
                ]),
              v('div', { class: 'v-field__field', 'data-no-activator': '' }, [
                ['filled', 'solo', 'solo-inverted', 'solo-filled'].includes(t.variant) &&
                  g.value &&
                  v(
                    la,
                    {
                      key: 'floating-label',
                      ref: M,
                      class: [T.value],
                      floating: !0,
                      for: b.value,
                      style: I.value,
                    },
                    { default: () => [q()] },
                  ),
                m.value && v(la, { key: 'label', ref: x, for: b.value }, { default: () => [q()] }),
                (St = s.default) == null
                  ? void 0
                  : St.call(s, {
                      ...C.value,
                      props: { id: b.value, class: 'v-field__input', 'aria-describedby': w.value },
                      focus: h,
                      blur: o,
                    }),
              ]),
              U &&
                v(
                  s8,
                  { key: 'clear' },
                  {
                    default: () => [
                      u1(
                        v(
                          'div',
                          {
                            class: 'v-field__clearable',
                            onMousedown: (mt) => {
                              mt.preventDefault(), mt.stopPropagation()
                            },
                          },
                          [
                            v(
                              Ht,
                              { defaults: { VIcon: { icon: t.clearIcon } } },
                              {
                                default: () => [
                                  s.clear
                                    ? s.clear({
                                        ...C.value,
                                        props: {
                                          onFocus: h,
                                          onBlur: o,
                                          onClick: t['onClick:clear'],
                                        },
                                      })
                                    : v(d, { name: 'clear', onFocus: h, onBlur: o }, null),
                                ],
                              },
                            ),
                          ],
                        ),
                        [[Za, t.dirty]],
                      ),
                    ],
                  },
                ),
              X &&
                v('div', { key: 'append', class: 'v-field__append-inner' }, [
                  (dt = s['append-inner']) == null ? void 0 : dt.call(s, C.value),
                  t.appendInnerIcon && v(d, { key: 'append-icon', name: 'appendInner' }, null),
                ]),
              v('div', { class: ['v-field__outline', T.value], style: I.value }, [
                N &&
                  v(xt, null, [
                    v('div', { class: 'v-field__outline__start' }, null),
                    g.value &&
                      v('div', { class: 'v-field__outline__notch' }, [
                        v(la, { ref: M, floating: !0, for: b.value }, { default: () => [q()] }),
                      ]),
                    v('div', { class: 'v-field__outline__end' }, null),
                  ]),
                D.value &&
                  g.value &&
                  v(la, { ref: M, floating: !0, for: b.value }, { default: () => [q()] }),
              ]),
            ],
          )
        }),
        { controlRef: O }
      )
    },
  }),
  Y8 = G(
    {
      active: Boolean,
      color: String,
      messages: { type: [Array, String], default: () => [] },
      ..._t(),
      ...vn({ transition: { component: g3, leaveAbsolute: !0, group: !0 } }),
    },
    'VMessages',
  ),
  q8 = tt()({
    name: 'VMessages',
    props: Y8(),
    setup(t, e) {
      let { slots: a } = e
      const n = _(() => Ve(t.messages)),
        { textColorClasses: s, textColorStyles: r } = n0(_(() => t.color))
      return (
        ht(() =>
          v(
            Je,
            {
              transition: t.transition,
              tag: 'div',
              class: ['v-messages', s.value, t.class],
              style: [r.value, t.style],
            },
            {
              default: () => [
                t.active &&
                  n.value.map((i, c) =>
                    v('div', { class: 'v-messages__message', key: `${c}-${n.value}` }, [
                      a.message ? a.message({ message: i }) : i,
                    ]),
                  ),
              ],
            },
          ),
        ),
        {}
      )
    },
  }),
  J8 = Symbol.for('vuetify:form')
function Z8(t) {
  const e = yt(J8, null)
  return {
    ...e,
    isReadonly: _(
      () => !!((t == null ? void 0 : t.readonly) ?? (e == null ? void 0 : e.isReadonly.value)),
    ),
    isDisabled: _(
      () => !!((t == null ? void 0 : t.disabled) ?? (e == null ? void 0 : e.isDisabled.value)),
    ),
  }
}
const X8 = G(
  {
    disabled: { type: Boolean, default: null },
    error: Boolean,
    errorMessages: { type: [Array, String], default: () => [] },
    maxErrors: { type: [Number, String], default: 1 },
    name: String,
    label: String,
    readonly: { type: Boolean, default: null },
    rules: { type: Array, default: () => [] },
    modelValue: null,
    validateOn: String,
    validationValue: null,
    ...Ss(),
  },
  'validation',
)
function Q8(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Fe(),
    a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : t1()
  const n = Dt(t, 'modelValue'),
    s = _(() => (t.validationValue === void 0 ? n.value : t.validationValue)),
    r = Z8(t),
    i = ct([]),
    c = ot(!0),
    l = _(
      () =>
        !!(
          Ve(n.value === '' ? null : n.value).length || Ve(s.value === '' ? null : s.value).length
        ),
    ),
    h = _(() => {
      var w
      return (w = t.errorMessages) != null && w.length
        ? Ve(t.errorMessages)
            .concat(i.value)
            .slice(0, Math.max(0, Number(t.maxErrors)))
        : i.value
    }),
    o = _(() => {
      var M
      let w = (t.validateOn ?? ((M = r.validateOn) == null ? void 0 : M.value)) || 'input'
      w === 'lazy' && (w = 'input lazy'), w === 'eager' && (w = 'input eager')
      const x = new Set((w == null ? void 0 : w.split(' ')) ?? [])
      return {
        input: x.has('input'),
        blur: x.has('blur') || x.has('input') || x.has('invalid-input'),
        invalidInput: x.has('invalid-input'),
        lazy: x.has('lazy'),
        eager: x.has('eager'),
      }
    }),
    d = _(() => {
      var w
      return t.error || ((w = t.errorMessages) != null && w.length)
        ? !1
        : t.rules.length
          ? c.value
            ? i.value.length || o.value.lazy
              ? null
              : !0
            : !i.value.length
          : !0
    }),
    u = ot(!1),
    p = _(() => ({
      [`${e}--error`]: d.value === !1,
      [`${e}--dirty`]: l.value,
      [`${e}--disabled`]: r.isDisabled.value,
      [`${e}--readonly`]: r.isReadonly.value,
    })),
    f = Rt('validation'),
    m = _(() => t.name ?? Ot(a))
  H2(() => {
    var w
    ;(w = r.register) == null ||
      w.call(r, { id: m.value, vm: f, validate: b, reset: g, resetValidation: S })
  }),
    Se(() => {
      var w
      ;(w = r.unregister) == null || w.call(r, m.value)
    }),
    Ne(async () => {
      var w
      o.value.lazy || (await b(!o.value.eager)),
        (w = r.update) == null || w.call(r, m.value, d.value, h.value)
    }),
    m1(
      () => o.value.input || (o.value.invalidInput && d.value === !1),
      () => {
        nt(s, () => {
          if (s.value != null) b()
          else if (t.focused) {
            const w = nt(
              () => t.focused,
              (x) => {
                x || b(), w()
              },
            )
          }
        })
      },
    ),
    m1(
      () => o.value.blur,
      () => {
        nt(
          () => t.focused,
          (w) => {
            w || b()
          },
        )
      },
    ),
    nt([d, h], () => {
      var w
      ;(w = r.update) == null || w.call(r, m.value, d.value, h.value)
    })
  async function g() {
    ;(n.value = null), await ee(), await S()
  }
  async function S() {
    ;(c.value = !0), o.value.lazy ? (i.value = []) : await b(!o.value.eager)
  }
  async function b() {
    let w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1
    const x = []
    u.value = !0
    for (const M of t.rules) {
      if (x.length >= Number(t.maxErrors ?? 1)) break
      const D = await (typeof M == 'function' ? M : () => M)(s.value)
      if (D !== !0) {
        if (D !== !1 && typeof D != 'string') {
          console.warn(
            `${D} is not a valid value. Rule functions must return boolean true or a string.`,
          )
          continue
        }
        x.push(D || '')
      }
    }
    return (i.value = x), (u.value = !1), (c.value = w), i.value
  }
  return {
    errorMessages: h,
    isDirty: l,
    isDisabled: r.isDisabled,
    isReadonly: r.isReadonly,
    isPristine: c,
    isValid: d,
    isValidating: u,
    reset: g,
    resetValidation: S,
    validate: b,
    validationClasses: p,
  }
}
const I3 = G(
    {
      id: String,
      appendIcon: Nt,
      centerAffix: { type: Boolean, default: !0 },
      prependIcon: Nt,
      hideDetails: [Boolean, String],
      hideSpinButtons: Boolean,
      hint: String,
      persistentHint: Boolean,
      messages: { type: [Array, String], default: () => [] },
      direction: {
        type: String,
        default: 'horizontal',
        validator: (t) => ['horizontal', 'vertical'].includes(t),
      },
      'onClick:prepend': h1(),
      'onClick:append': h1(),
      ..._t(),
      ...o0(),
      ...Sl(M1(), ['maxWidth', 'minWidth', 'width']),
      ...Yt(),
      ...X8(),
    },
    'VInput',
  ),
  Xi = tt()({
    name: 'VInput',
    props: { ...I3() },
    emits: { 'update:modelValue': (t) => !0 },
    setup(t, e) {
      let { attrs: a, slots: n, emit: s } = e
      const { densityClasses: r } = K0(t),
        { dimensionStyles: i } = V1(t),
        { themeClasses: c } = ie(t),
        { rtlClasses: l } = e1(),
        { InputIcon: h } = T3(t),
        o = t1(),
        d = _(() => t.id || `input-${o}`),
        u = _(() => `${d.value}-messages`),
        {
          errorMessages: p,
          isDirty: f,
          isDisabled: m,
          isReadonly: g,
          isPristine: S,
          isValid: b,
          isValidating: w,
          reset: x,
          resetValidation: M,
          validate: O,
          validationClasses: D,
        } = Q8(t, 'v-input', d),
        A = _(() => ({
          id: d,
          messagesId: u,
          isDirty: f,
          isDisabled: m,
          isReadonly: g,
          isPristine: S,
          isValid: b,
          isValidating: w,
          reset: x,
          resetValidation: M,
          validate: O,
        })),
        E = _(() => {
          var T
          return ((T = t.errorMessages) != null && T.length) || (!S.value && p.value.length)
            ? p.value
            : t.hint && (t.persistentHint || t.focused)
              ? t.hint
              : t.messages
        })
      return (
        ht(() => {
          var N, Z, U, X
          const T = !!(n.prepend || t.prependIcon),
            I = !!(n.append || t.appendIcon),
            C = E.value.length > 0,
            R = !t.hideDetails || (t.hideDetails === 'auto' && (C || !!n.details))
          return v(
            'div',
            {
              class: [
                'v-input',
                `v-input--${t.direction}`,
                {
                  'v-input--center-affix': t.centerAffix,
                  'v-input--hide-spin-buttons': t.hideSpinButtons,
                },
                r.value,
                c.value,
                l.value,
                D.value,
                t.class,
              ],
              style: [i.value, t.style],
            },
            [
              T &&
                v('div', { key: 'prepend', class: 'v-input__prepend' }, [
                  (N = n.prepend) == null ? void 0 : N.call(n, A.value),
                  t.prependIcon && v(h, { key: 'prepend-icon', name: 'prepend' }, null),
                ]),
              n.default &&
                v('div', { class: 'v-input__control' }, [
                  (Z = n.default) == null ? void 0 : Z.call(n, A.value),
                ]),
              I &&
                v('div', { key: 'append', class: 'v-input__append' }, [
                  t.appendIcon && v(h, { key: 'append-icon', name: 'append' }, null),
                  (U = n.append) == null ? void 0 : U.call(n, A.value),
                ]),
              R &&
                v(
                  'div',
                  { id: u.value, class: 'v-input__details', role: 'alert', 'aria-live': 'polite' },
                  [
                    v(q8, { active: C, messages: E.value }, { message: n.message }),
                    (X = n.details) == null ? void 0 : X.call(n, A.value),
                  ],
                ),
            ],
          )
        }),
        { reset: x, resetValidation: M, validate: O, isValid: b, errorMessages: p }
      )
    },
  }),
  tm = ['color', 'file', 'time', 'date', 'datetime-local', 'week', 'month'],
  O3 = G(
    {
      autofocus: Boolean,
      counter: [Boolean, Number, String],
      counterValue: [Number, Function],
      prefix: String,
      placeholder: String,
      persistentPlaceholder: Boolean,
      persistentCounter: Boolean,
      suffix: String,
      role: String,
      type: { type: String, default: 'text' },
      modelModifiers: Object,
      ...I3(),
      ...A3(),
    },
    'VTextField',
  ),
  Qi = tt()({
    name: 'VTextField',
    directives: { Intersect: Jo },
    inheritAttrs: !1,
    props: O3(),
    emits: {
      'click:control': (t) => !0,
      'mousedown:control': (t) => !0,
      'update:focused': (t) => !0,
      'update:modelValue': (t) => !0,
    },
    setup(t, e) {
      let { attrs: a, emit: n, slots: s } = e
      const r = Dt(t, 'modelValue'),
        { isFocused: i, focus: c, blur: l } = ws(t),
        h = _(() =>
          typeof t.counterValue == 'function'
            ? t.counterValue(r.value)
            : typeof t.counterValue == 'number'
              ? t.counterValue
              : (r.value ?? '').toString().length,
        ),
        o = _(() => {
          if (a.maxlength) return a.maxlength
          if (!(!t.counter || (typeof t.counter != 'number' && typeof t.counter != 'string')))
            return t.counter
        }),
        d = _(() => ['plain', 'underlined'].includes(t.variant))
      function u(O, D) {
        var A, E
        !t.autofocus ||
          !O ||
          (E = (A = D[0].target) == null ? void 0 : A.focus) == null ||
          E.call(A)
      }
      const p = ct(),
        f = ct(),
        m = ct(),
        g = _(() => tm.includes(t.type) || t.persistentPlaceholder || i.value || t.active)
      function S() {
        var O
        m.value !== document.activeElement && ((O = m.value) == null || O.focus()), i.value || c()
      }
      function b(O) {
        n('mousedown:control', O), O.target !== m.value && (S(), O.preventDefault())
      }
      function w(O) {
        S(), n('click:control', O)
      }
      function x(O) {
        O.stopPropagation(),
          S(),
          ee(() => {
            ;(r.value = null), El(t['onClick:clear'], O)
          })
      }
      function M(O) {
        var A
        const D = O.target
        if (
          ((r.value = D.value),
          (A = t.modelModifiers) != null &&
            A.trim &&
            ['text', 'search', 'password', 'tel', 'url'].includes(t.type))
        ) {
          const E = [D.selectionStart, D.selectionEnd]
          ee(() => {
            ;(D.selectionStart = E[0]), (D.selectionEnd = E[1])
          })
        }
      }
      return (
        ht(() => {
          const O = !!(s.counter || (t.counter !== !1 && t.counter != null)),
            D = !!(O || s.details),
            [A, E] = cu(a),
            { modelValue: T, ...I } = Xi.filterProps(t),
            C = Zi.filterProps(t)
          return v(
            Xi,
            lt(
              {
                ref: p,
                modelValue: r.value,
                'onUpdate:modelValue': (R) => (r.value = R),
                class: [
                  'v-text-field',
                  {
                    'v-text-field--prefixed': t.prefix,
                    'v-text-field--suffixed': t.suffix,
                    'v-input--plain-underlined': d.value,
                  },
                  t.class,
                ],
                style: t.style,
              },
              A,
              I,
              { centerAffix: !d.value, focused: i.value },
            ),
            {
              ...s,
              default: (R) => {
                let { id: N, isDisabled: Z, isDirty: U, isReadonly: X, isValid: q } = R
                return v(
                  Zi,
                  lt(
                    {
                      ref: f,
                      onMousedown: b,
                      onClick: w,
                      'onClick:clear': x,
                      'onClick:prependInner': t['onClick:prependInner'],
                      'onClick:appendInner': t['onClick:appendInner'],
                      role: t.role,
                    },
                    C,
                    {
                      id: N.value,
                      active: g.value || U.value,
                      dirty: U.value || t.dirty,
                      disabled: Z.value,
                      focused: i.value,
                      error: q.value === !1,
                    },
                  ),
                  {
                    ...s,
                    default: (ft) => {
                      let {
                        props: { class: St, ...dt },
                      } = ft
                      const mt = u1(
                        v(
                          'input',
                          lt(
                            {
                              ref: m,
                              value: r.value,
                              onInput: M,
                              autofocus: t.autofocus,
                              readonly: X.value,
                              disabled: Z.value,
                              name: t.name,
                              placeholder: t.placeholder,
                              size: 1,
                              type: t.type,
                              onFocus: S,
                              onBlur: l,
                            },
                            dt,
                            E,
                          ),
                          null,
                        ),
                        [[Ya('intersect'), { handler: u }, null, { once: !0 }]],
                      )
                      return v(xt, null, [
                        t.prefix &&
                          v('span', { class: 'v-text-field__prefix' }, [
                            v('span', { class: 'v-text-field__prefix__text' }, [t.prefix]),
                          ]),
                        s.default
                          ? v('div', { class: St, 'data-no-activator': '' }, [s.default(), mt])
                          : Ze(mt, { class: St }),
                        t.suffix &&
                          v('span', { class: 'v-text-field__suffix' }, [
                            v('span', { class: 'v-text-field__suffix__text' }, [t.suffix]),
                          ]),
                      ])
                    },
                  },
                )
              },
              details: D
                ? (R) => {
                    var N
                    return v(xt, null, [
                      (N = s.details) == null ? void 0 : N.call(s, R),
                      O &&
                        v(xt, null, [
                          v('span', null, null),
                          v(
                            H8,
                            {
                              active: t.persistentCounter || i.value,
                              value: h.value,
                              max: o.value,
                              disabled: t.disabled,
                            },
                            s.counter,
                          ),
                        ]),
                    ])
                  }
                : void 0,
            },
          )
        }),
        Q0({}, p, f, m)
      )
    },
  }),
  em = G(
    {
      displayFormat: [Function, String],
      hideActions: Boolean,
      location: { type: String, default: 'bottom start' },
      ...Fp(),
      ...Ss(),
      ...S3(),
      ...O3({ placeholder: 'mm/dd/yyyy', prependIcon: '$calendar' }),
      ...ke(P3({ hideHeader: !0, showAdjacentMonths: !0 }), ['active', 'location', 'rounded']),
    },
    'VDateInput',
  ),
  am = tt()({
    name: 'VDateInput',
    props: em(),
    emits: { save: (t) => !0, cancel: () => !0, 'update:modelValue': (t) => !0 },
    setup(t, e) {
      let { emit: a, slots: n } = e
      const { t: s } = U0(),
        r = r0(),
        { mobile: i } = Gl(),
        { isFocused: c, focus: l, blur: h } = ws(t),
        o = Dt(
          t,
          'modelValue',
          t.multiple ? [] : null,
          (T) => (Array.isArray(T) ? T.map((I) => r.toJsDate(I)) : T && r.toJsDate(T)),
          (T) => (Array.isArray(T) ? T.map((I) => r.date(I)) : T && r.date(T)),
        ),
        d = ot(!1),
        u = ot(!1),
        p = ct()
      function f(T) {
        return typeof t.displayFormat == 'function'
          ? t.displayFormat(T)
          : r.format(T, t.displayFormat ?? 'keyboardDate')
      }
      const m = _(() => {
          const T = Ve(o.value)
          if (!T.length) return null
          if (t.multiple === !0) return s('$vuetify.datePicker.itemsSelected', T.length)
          if (t.multiple === 'range') {
            const I = T[0],
              C = T[T.length - 1]
            return !r.isValid(I) || !r.isValid(C) ? '' : `${f(r.date(I))} - ${f(r.date(C))}`
          }
          return r.isValid(o.value) ? f(r.date(o.value)) : ''
        }),
        g = _(() => {
          if (i.value) return u.value ? 'text' : 'none'
        }),
        S = _(() => !t.disabled && !t.readonly),
        b = _(() => !(i.value && u.value) && t.readonly)
      nt(d, (T) => {
        T || (u.value = !1)
      })
      function w(T) {
        if (T.key !== 'Enter') return
        if (!d.value || !c.value) {
          d.value = !0
          return
        }
        const I = T.target
        o.value = I.value === '' ? null : I.value
      }
      function x(T) {
        T.preventDefault(),
          T.stopPropagation(),
          d.value && i.value ? (u.value = !0) : (d.value = !0)
      }
      function M() {
        a('cancel'), (d.value = !1), (u.value = !1)
      }
      function O(T) {
        a('save', T), (d.value = !1)
      }
      function D(T) {
        T == null && (o.value = null)
      }
      function A(T) {
        T || (u.value = !1)
      }
      function E() {
        h(), i.value && u.value && !c.value && ((d.value = !1), (u.value = !1))
      }
      return (
        ht(() => {
          const T = Hi.filterProps(t),
            I = Ji.filterProps(ke(t, ['active', 'location', 'rounded'])),
            C = Qi.filterProps(t)
          return v(
            Qi,
            lt({ ref: p }, C, {
              class: t.class,
              style: t.style,
              modelValue: m.value,
              inputmode: g.value,
              readonly: b.value,
              onKeydown: S.value ? w : void 0,
              focused: d.value || c.value,
              onFocus: l,
              onBlur: E,
              'onClick:control': S.value ? x : void 0,
              'onClick:prepend': S.value ? x : void 0,
              'onUpdate:modelValue': D,
            }),
            {
              ...n,
              default: () => {
                var R
                return v(xt, null, [
                  v(
                    F8,
                    {
                      modelValue: d.value,
                      'onUpdate:modelValue': [(N) => (d.value = N), A],
                      activator: 'parent',
                      'min-width': '0',
                      eager: c.value,
                      location: t.location,
                      closeOnContentClick: !1,
                      openOnClick: !1,
                    },
                    {
                      default: () => [
                        v(
                          Hi,
                          lt(T, {
                            modelValue: o.value,
                            'onUpdate:modelValue': (N) => (o.value = N),
                            onSave: O,
                            onCancel: M,
                          }),
                          {
                            default: (N) => {
                              let { actions: Z, model: U, save: X, cancel: q, isPristine: ft } = N
                              function St(dt) {
                                var mt
                                t.hideActions
                                  ? ((o.value = dt), t.multiple || (d.value = !1))
                                  : (U.value = dt),
                                  a('save', dt),
                                  (mt = p.value) == null || mt.blur()
                              }
                              return v(
                                Ji,
                                lt(I, {
                                  modelValue: t.hideActions ? o.value : U.value,
                                  'onUpdate:modelValue': (dt) => St(dt),
                                  onMousedown: (dt) => dt.preventDefault(),
                                }),
                                {
                                  actions: t.hideActions
                                    ? void 0
                                    : () => {
                                        var dt
                                        return (
                                          ((dt = n.actions) == null
                                            ? void 0
                                            : dt.call(n, { save: X, cancel: q, isPristine: ft })) ??
                                          Z()
                                        )
                                      },
                                },
                              )
                            },
                          },
                        ),
                      ],
                    },
                  ),
                  (R = n.default) == null ? void 0 : R.call(n),
                ])
              },
            },
          )
        }),
        Q0({}, p)
      )
    },
  }),
  h0 = tu(g8),
  nm = eo({ theme: { defaultTheme: 'light' }, components: { VDateInput: am } })
h0.component('AppLoading', S8)
h0.component('NoEntries', L8)
h0.use(nm)
h0.use(G0)
h0.use(l3)
h0.mount('#app')
export {
  c3 as $,
  Ke as A,
  _ as B,
  tt as C,
  G as D,
  ie as E,
  xt as F,
  K0 as G,
  ht as H,
  Yt as I,
  qt as J,
  o0 as K,
  _t as L,
  it as M,
  Ne as N,
  Wc as O,
  za as P,
  lm as Q,
  At as R,
  ga as S,
  e2 as T,
  S8 as U,
  pe as V,
  u1 as W,
  cm as X,
  Ko as Y,
  G0 as Z,
  X0 as _,
  v as a,
  l3 as a0,
  h5 as a1,
  Fp as a2,
  Nt as a3,
  e1 as a4,
  Gl as a5,
  p5 as a6,
  ot as a7,
  Xl as a8,
  im as a9,
  s8 as aA,
  Ht as aB,
  Za as aC,
  Ii as aD,
  Lt as aE,
  Jo as aF,
  ws as aG,
  fe as aH,
  Se as aI,
  cu as aJ,
  Xi as aK,
  Zi as aL,
  Q0 as aM,
  A3 as aN,
  I3 as aO,
  ee as aP,
  O1 as aQ,
  H8 as aR,
  sm as aS,
  El as aT,
  n0 as aU,
  Pt as aa,
  a8 as ab,
  d1 as ac,
  o2 as ad,
  J0 as ae,
  Xa as af,
  tn as ag,
  Mt as ah,
  U0 as ai,
  l0 as aj,
  hn as ak,
  q0 as al,
  He as am,
  un as an,
  Dt as ao,
  u5 as ap,
  Vo as aq,
  Ya as ar,
  dn as as,
  $o as at,
  je as au,
  d5 as av,
  Y0 as aw,
  c0 as ax,
  h1 as ay,
  on as az,
  s7 as b,
  p1 as c,
  R1 as d,
  c5 as e,
  so as f,
  ye as g,
  Z5 as h,
  K5 as i,
  V5 as j,
  ue as k,
  ud as l,
  Ot as m,
  U5 as n,
  Ft as o,
  Qi as p,
  lt as q,
  rm as r,
  v8 as s,
  P1 as t,
  om as u,
  ct as v,
  Bt as w,
  nt as x,
  Rh as y,
  hm as z,
}
