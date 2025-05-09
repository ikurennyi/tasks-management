import {
  D as Y,
  C as Z,
  a1 as pe,
  J as ee,
  a2 as Ee,
  L as te,
  a3 as V,
  a4 as we,
  a5 as Re,
  a6 as he,
  a7 as D,
  B as k,
  a8 as le,
  a9 as Te,
  aa as ne,
  x as Be,
  H as ye,
  a as i,
  ab as se,
  ac as E,
  ad as De,
  ae as me,
  I as ke,
  af as Fe,
  E as ge,
  ag as Ge,
  ah as M,
  q as X,
  Y as Oe,
  ai as Me,
  aj as We,
  ak as Le,
  G as He,
  al as Ne,
  am as $e,
  an as qe,
  ao as Ke,
  ap as Ue,
  aq as je,
  W as ie,
  ar as Je,
  as as Qe,
  at as Xe,
  au as Ye,
  av as Ze,
  aw as et,
  K as tt,
  ax as at,
  ay as oe,
  az as lt,
  aA as nt,
  aB as W,
  aC as st,
  F as ce,
  aD as re,
  t as ae,
  d as Se,
  S as ue,
  A as be,
  o as Ce,
  w as xe,
  g as Ie,
  P as de,
} from './index-wFdHHgAa.js'
function it(e) {
  let { selectedElement: n, containerElement: l, isRtl: r, isHorizontal: o } = e
  const y = F(o, l),
    u = Pe(o, r, l),
    m = F(o, n),
    v = _e(o, n),
    S = m * 0.4
  return u > v ? v - S : u + y < v + m ? v - y + m + S : u
}
function ot(e) {
  let { selectedElement: n, containerElement: l, isHorizontal: r } = e
  const o = F(r, l),
    y = _e(r, n),
    u = F(r, n)
  return y - o / 2 + u / 2
}
function ve(e, n) {
  const l = e ? 'scrollWidth' : 'scrollHeight'
  return (n == null ? void 0 : n[l]) || 0
}
function ct(e, n) {
  const l = e ? 'clientWidth' : 'clientHeight'
  return (n == null ? void 0 : n[l]) || 0
}
function Pe(e, n, l) {
  if (!l) return 0
  const { scrollLeft: r, offsetWidth: o, scrollWidth: y } = l
  return e ? (n ? y - o + r : r) : l.scrollTop
}
function F(e, n) {
  const l = e ? 'offsetWidth' : 'offsetHeight'
  return (n == null ? void 0 : n[l]) || 0
}
function _e(e, n) {
  const l = e ? 'offsetLeft' : 'offsetTop'
  return (n == null ? void 0 : n[l]) || 0
}
const rt = Symbol.for('vuetify:v-slide-group'),
  ze = Y(
    {
      centerActive: Boolean,
      direction: { type: String, default: 'horizontal' },
      symbol: { type: null, default: rt },
      nextIcon: { type: V, default: '$next' },
      prevIcon: { type: V, default: '$prev' },
      showArrows: {
        type: [Boolean, String],
        validator: (e) => typeof e == 'boolean' || ['always', 'desktop', 'mobile'].includes(e),
      },
      ...te(),
      ...Ee({ mobile: null }),
      ...ee(),
      ...pe({ selectedClass: 'v-slide-group-item--active' }),
    },
    'VSlideGroup',
  ),
  fe = Z()({
    name: 'VSlideGroup',
    props: ze(),
    emits: { 'update:modelValue': (e) => !0 },
    setup(e, n) {
      let { slots: l } = n
      const { isRtl: r } = we(),
        { displayClasses: o, mobile: y } = Re(e),
        u = he(e, e.symbol),
        m = D(!1),
        v = D(0),
        S = D(0),
        x = D(0),
        d = k(() => e.direction === 'horizontal'),
        { resizeRef: f, contentRect: w } = le(),
        { resizeRef: p, contentRect: _ } = le(),
        s = Te(),
        g = k(() => ({ container: f.el, duration: 200, easing: 'easeOutQuart' })),
        L = k(() =>
          u.selected.value.length
            ? u.items.value.findIndex((a) => a.id === u.selected.value[0])
            : -1,
        ),
        b = k(() =>
          u.selected.value.length
            ? u.items.value.findIndex((a) => a.id === u.selected.value[u.selected.value.length - 1])
            : -1,
        )
      if (ne) {
        let a = -1
        Be(
          () => [u.selected.value, w.value, _.value, d.value],
          () => {
            cancelAnimationFrame(a),
              (a = requestAnimationFrame(() => {
                if (w.value && _.value) {
                  const t = d.value ? 'width' : 'height'
                  ;(S.value = w.value[t]), (x.value = _.value[t]), (m.value = S.value + 1 < x.value)
                }
                if (L.value >= 0 && p.el) {
                  const t = p.el.children[b.value]
                  R(t, e.centerActive)
                }
              }))
          },
        )
      }
      const z = D(!1)
      function R(a, t) {
        let c = 0
        t
          ? (c = ot({ containerElement: f.el, isHorizontal: d.value, selectedElement: a }))
          : (c = it({
              containerElement: f.el,
              isHorizontal: d.value,
              isRtl: r.value,
              selectedElement: a,
            })),
          G(c)
      }
      function G(a) {
        if (!ne || !f.el) return
        const t = F(d.value, f.el),
          c = Pe(d.value, r.value, f.el)
        if (!(ve(d.value, f.el) <= t || Math.abs(a - c) < 16)) {
          if (d.value && r.value && f.el) {
            const { scrollWidth: J, offsetWidth: Q } = f.el
            a = J - Q - a
          }
          d.value ? s.horizontal(a, g.value) : s(a, g.value)
        }
      }
      function h(a) {
        const { scrollTop: t, scrollLeft: c } = a.target
        v.value = d.value ? c : t
      }
      function I(a) {
        if (((z.value = !0), !(!m.value || !p.el))) {
          for (const t of a.composedPath())
            for (const c of p.el.children)
              if (c === t) {
                R(c)
                return
              }
        }
      }
      function H(a) {
        z.value = !1
      }
      let T = !1
      function O(a) {
        var t
        !T &&
          !z.value &&
          !(a.relatedTarget && (t = p.el) != null && t.contains(a.relatedTarget)) &&
          C(),
          (T = !1)
      }
      function B() {
        T = !0
      }
      function N(a) {
        if (!p.el) return
        function t(c) {
          a.preventDefault(), C(c)
        }
        d.value
          ? a.key === 'ArrowRight'
            ? t(r.value ? 'prev' : 'next')
            : a.key === 'ArrowLeft' && t(r.value ? 'next' : 'prev')
          : a.key === 'ArrowDown'
            ? t('next')
            : a.key === 'ArrowUp' && t('prev'),
          a.key === 'Home' ? t('first') : a.key === 'End' && t('last')
      }
      function P(a, t) {
        if (!a) return
        let c = a
        do
          c = c == null ? void 0 : c[t === 'next' ? 'nextElementSibling' : 'previousElementSibling']
        while (c != null && c.hasAttribute('disabled'))
        return c
      }
      function C(a) {
        if (!p.el) return
        let t
        if (!a) t = De(p.el)[0]
        else if (a === 'next') {
          if (((t = P(p.el.querySelector(':focus'), a)), !t)) return C('first')
        } else if (a === 'prev') {
          if (((t = P(p.el.querySelector(':focus'), a)), !t)) return C('last')
        } else
          a === 'first'
            ? ((t = p.el.firstElementChild),
              t != null && t.hasAttribute('disabled') && (t = P(t, 'next')))
            : a === 'last' &&
              ((t = p.el.lastElementChild),
              t != null && t.hasAttribute('disabled') && (t = P(t, 'prev')))
        t && t.focus({ preventScroll: !0 })
      }
      function A(a) {
        const t = d.value && r.value ? -1 : 1,
          c = (a === 'prev' ? -t : t) * S.value
        let j = v.value + c
        if (d.value && r.value && f.el) {
          const { scrollWidth: J, offsetWidth: Q } = f.el
          j += J - Q
        }
        G(j)
      }
      const $ = k(() => ({
          next: u.next,
          prev: u.prev,
          select: u.select,
          isSelected: u.isSelected,
        })),
        q = k(() => {
          switch (e.showArrows) {
            case 'always':
              return !0
            case 'desktop':
              return !y.value
            case !0:
              return m.value || Math.abs(v.value) > 0
            case 'mobile':
              return y.value || m.value || Math.abs(v.value) > 0
            default:
              return !y.value && (m.value || Math.abs(v.value) > 0)
          }
        }),
        K = k(() => Math.abs(v.value) > 1),
        U = k(() => {
          if (!f.value) return !1
          const a = ve(d.value, f.el),
            t = ct(d.value, f.el)
          return a - t - Math.abs(v.value) > 1
        })
      return (
        ye(() =>
          i(
            e.tag,
            {
              class: [
                'v-slide-group',
                {
                  'v-slide-group--vertical': !d.value,
                  'v-slide-group--has-affixes': q.value,
                  'v-slide-group--is-overflowing': m.value,
                },
                o.value,
                e.class,
              ],
              style: e.style,
              tabindex: z.value || u.selected.value.length ? -1 : 0,
              onFocus: O,
            },
            {
              default: () => {
                var a, t, c
                return [
                  q.value &&
                    i(
                      'div',
                      {
                        key: 'prev',
                        class: [
                          'v-slide-group__prev',
                          { 'v-slide-group__prev--disabled': !K.value },
                        ],
                        onMousedown: B,
                        onClick: () => K.value && A('prev'),
                      },
                      [
                        ((a = l.prev) == null ? void 0 : a.call(l, $.value)) ??
                          i(se, null, {
                            default: () => [
                              i(E, { icon: r.value ? e.nextIcon : e.prevIcon }, null),
                            ],
                          }),
                      ],
                    ),
                  i(
                    'div',
                    { key: 'container', ref: f, class: 'v-slide-group__container', onScroll: h },
                    [
                      i(
                        'div',
                        {
                          ref: p,
                          class: 'v-slide-group__content',
                          onFocusin: I,
                          onFocusout: H,
                          onKeydown: N,
                        },
                        [(t = l.default) == null ? void 0 : t.call(l, $.value)],
                      ),
                    ],
                  ),
                  q.value &&
                    i(
                      'div',
                      {
                        key: 'next',
                        class: [
                          'v-slide-group__next',
                          { 'v-slide-group__next--disabled': !U.value },
                        ],
                        onMousedown: B,
                        onClick: () => U.value && A('next'),
                      },
                      [
                        ((c = l.next) == null ? void 0 : c.call(l, $.value)) ??
                          i(se, null, {
                            default: () => [
                              i(E, { icon: r.value ? e.prevIcon : e.nextIcon }, null),
                            ],
                          }),
                      ],
                    ),
                ]
              },
            },
          ),
        ),
        { selected: u.selected, scrollTo: A, scrollOffset: v, focus: C, hasPrev: K, hasNext: U }
      )
    },
  }),
  Ae = Symbol.for('vuetify:v-chip-group'),
  ut = Y(
    {
      column: Boolean,
      filter: Boolean,
      valueComparator: { type: Function, default: Fe },
      ...ze(),
      ...te(),
      ...pe({ selectedClass: 'v-chip--selected' }),
      ...ee(),
      ...ke(),
      ...me({ variant: 'tonal' }),
    },
    'VChipGroup',
  )
Z()({
  name: 'VChipGroup',
  props: ut(),
  emits: { 'update:modelValue': (e) => !0 },
  setup(e, n) {
    let { slots: l } = n
    const { themeClasses: r } = ge(e),
      { isSelected: o, select: y, next: u, prev: m, selected: v } = he(e, Ae)
    return (
      Ge({
        VChip: {
          color: M(e, 'color'),
          disabled: M(e, 'disabled'),
          filter: M(e, 'filter'),
          variant: M(e, 'variant'),
        },
      }),
      ye(() => {
        const S = fe.filterProps(e)
        return i(
          fe,
          X(S, {
            class: ['v-chip-group', { 'v-chip-group--column': e.column }, r.value, e.class],
            style: e.style,
          }),
          {
            default: () => {
              var x
              return [
                (x = l.default) == null
                  ? void 0
                  : x.call(l, { isSelected: o, select: y, next: u, prev: m, selected: v.value }),
              ]
            },
          },
        )
      }),
      {}
    )
  },
})
const dt = Y(
    {
      activeClass: String,
      appendAvatar: String,
      appendIcon: V,
      closable: Boolean,
      closeIcon: { type: V, default: '$delete' },
      closeLabel: { type: String, default: '$vuetify.close' },
      draggable: Boolean,
      filter: Boolean,
      filterIcon: { type: V, default: '$complete' },
      label: Boolean,
      link: { type: Boolean, default: void 0 },
      pill: Boolean,
      prependAvatar: String,
      prependIcon: V,
      ripple: { type: [Boolean, Object], default: !0 },
      text: { type: [String, Number, Boolean], default: void 0 },
      modelValue: { type: Boolean, default: !0 },
      onClick: oe(),
      onClickOnce: oe(),
      ...at(),
      ...te(),
      ...tt(),
      ...et(),
      ...Ze(),
      ...Ye(),
      ...Xe(),
      ...Qe(),
      ...ee({ tag: 'span' }),
      ...ke(),
      ...me({ variant: 'tonal' }),
    },
    'VChip',
  ),
  Ve = Z()({
    name: 'VChip',
    directives: { Ripple: Oe },
    props: dt(),
    emits: {
      'click:close': (e) => !0,
      'update:modelValue': (e) => !0,
      'group:selected': (e) => !0,
      click: (e) => !0,
    },
    setup(e, n) {
      let { attrs: l, emit: r, slots: o } = n
      const { t: y } = Me(),
        { borderClasses: u } = We(e),
        { colorClasses: m, colorStyles: v, variantClasses: S } = Le(e),
        { densityClasses: x } = He(e),
        { elevationClasses: d } = Ne(e),
        { roundedClasses: f } = $e(e),
        { sizeClasses: w } = qe(e),
        { themeClasses: p } = ge(e),
        _ = Ke(e, 'modelValue'),
        s = Ue(e, Ae, !1),
        g = je(e, l),
        L = k(() => e.link !== !1 && g.isLink.value),
        b = k(() => !e.disabled && e.link !== !1 && (!!s || e.link || g.isClickable.value)),
        z = k(() => ({
          'aria-label': y(e.closeLabel),
          onClick(h) {
            h.preventDefault(), h.stopPropagation(), (_.value = !1), r('click:close', h)
          },
        }))
      function R(h) {
        var I
        r('click', h),
          b.value && ((I = g.navigate) == null || I.call(g, h), s == null || s.toggle())
      }
      function G(h) {
        ;(h.key === 'Enter' || h.key === ' ') && (h.preventDefault(), R(h))
      }
      return () => {
        var C
        const h = g.isLink.value ? 'a' : e.tag,
          I = !!(e.appendIcon || e.appendAvatar),
          H = !!(I || o.append),
          T = !!(o.close || e.closable),
          O = !!(o.filter || e.filter) && s,
          B = !!(e.prependIcon || e.prependAvatar),
          N = !!(B || o.prepend),
          P = !s || s.isSelected.value
        return (
          _.value &&
          ie(
            i(
              h,
              X(
                {
                  class: [
                    'v-chip',
                    {
                      'v-chip--disabled': e.disabled,
                      'v-chip--label': e.label,
                      'v-chip--link': b.value,
                      'v-chip--filter': O,
                      'v-chip--pill': e.pill,
                      [`${e.activeClass}`]:
                        e.activeClass && ((C = g.isActive) == null ? void 0 : C.value),
                    },
                    p.value,
                    u.value,
                    P ? m.value : void 0,
                    x.value,
                    d.value,
                    f.value,
                    w.value,
                    S.value,
                    s == null ? void 0 : s.selectedClass.value,
                    e.class,
                  ],
                  style: [P ? v.value : void 0, e.style],
                  disabled: e.disabled || void 0,
                  draggable: e.draggable,
                  tabindex: b.value ? 0 : void 0,
                  onClick: R,
                  onKeydown: b.value && !L.value && G,
                },
                g.linkProps,
              ),
              {
                default: () => {
                  var A
                  return [
                    lt(b.value, 'v-chip'),
                    O &&
                      i(
                        nt,
                        { key: 'filter' },
                        {
                          default: () => [
                            ie(
                              i('div', { class: 'v-chip__filter' }, [
                                o.filter
                                  ? i(
                                      W,
                                      {
                                        key: 'filter-defaults',
                                        disabled: !e.filterIcon,
                                        defaults: { VIcon: { icon: e.filterIcon } },
                                      },
                                      o.filter,
                                    )
                                  : i(E, { key: 'filter-icon', icon: e.filterIcon }, null),
                              ]),
                              [[st, s.isSelected.value]],
                            ),
                          ],
                        },
                      ),
                    N &&
                      i('div', { key: 'prepend', class: 'v-chip__prepend' }, [
                        o.prepend
                          ? i(
                              W,
                              {
                                key: 'prepend-defaults',
                                disabled: !B,
                                defaults: {
                                  VAvatar: { image: e.prependAvatar, start: !0 },
                                  VIcon: { icon: e.prependIcon, start: !0 },
                                },
                              },
                              o.prepend,
                            )
                          : i(ce, null, [
                              e.prependIcon &&
                                i(E, { key: 'prepend-icon', icon: e.prependIcon, start: !0 }, null),
                              e.prependAvatar &&
                                i(
                                  re,
                                  { key: 'prepend-avatar', image: e.prependAvatar, start: !0 },
                                  null,
                                ),
                            ]),
                      ]),
                    i('div', { class: 'v-chip__content', 'data-no-activator': '' }, [
                      ((A = o.default) == null
                        ? void 0
                        : A.call(o, {
                            isSelected: s == null ? void 0 : s.isSelected.value,
                            selectedClass: s == null ? void 0 : s.selectedClass.value,
                            select: s == null ? void 0 : s.select,
                            toggle: s == null ? void 0 : s.toggle,
                            value: s == null ? void 0 : s.value.value,
                            disabled: e.disabled,
                          })) ?? ae(e.text),
                    ]),
                    H &&
                      i('div', { key: 'append', class: 'v-chip__append' }, [
                        o.append
                          ? i(
                              W,
                              {
                                key: 'append-defaults',
                                disabled: !I,
                                defaults: {
                                  VAvatar: { end: !0, image: e.appendAvatar },
                                  VIcon: { end: !0, icon: e.appendIcon },
                                },
                              },
                              o.append,
                            )
                          : i(ce, null, [
                              e.appendIcon &&
                                i(E, { key: 'append-icon', end: !0, icon: e.appendIcon }, null),
                              e.appendAvatar &&
                                i(
                                  re,
                                  { key: 'append-avatar', end: !0, image: e.appendAvatar },
                                  null,
                                ),
                            ]),
                      ]),
                    T &&
                      i(
                        'button',
                        X(
                          {
                            key: 'close',
                            class: 'v-chip__close',
                            type: 'button',
                            'data-testid': 'close-chip',
                          },
                          z.value,
                        ),
                        [
                          o.close
                            ? i(
                                W,
                                {
                                  key: 'close-defaults',
                                  defaults: { VIcon: { icon: e.closeIcon, size: 'x-small' } },
                                },
                                o.close,
                              )
                            : i(E, { key: 'close-icon', icon: e.closeIcon, size: 'x-small' }, null),
                        ],
                      ),
                  ]
                },
              },
            ),
            [[Je('ripple'), b.value && e.ripple, null]],
          )
        )
      }
    },
  }),
  ft = Se({
    __name: 'TaskStatus',
    props: { status: {} },
    setup(e) {
      const n = k(() => {
        switch (e.status) {
          case ue.PENDING:
            return 'primary'
          case ue.IN_PROGRESS:
            return 'orange'
          default:
            return 'green'
        }
      })
      return (l, r) => (
        Ce(),
        be(Ve, { color: n.value }, { default: xe(() => [Ie(ae(l.status), 1)]), _: 1 }, 8, ['color'])
      )
    },
  }),
  pt = Se({
    __name: 'TaskPriority',
    props: { priority: {} },
    setup(e) {
      const n = k(() => {
        switch (e.priority) {
          case de.LOW:
            return 'green'
          case de.MEDIUM:
            return 'orange'
          default:
            return 'red'
        }
      })
      return (l, r) => (
        Ce(),
        be(
          Ve,
          { size: 'small', class: 'px-0 text-uppercase', variant: 'text', color: n.value },
          { default: xe(() => [Ie(ae(l.priority), 1)]), _: 1 },
          8,
          ['color'],
        )
      )
    },
  })
export { ft as _, pt as a }
