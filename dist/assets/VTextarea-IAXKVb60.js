import {
  aE as te,
  $ as ae,
  Z as ne,
  C as le,
  D as oe,
  aF as re,
  ao as ie,
  aG as ue,
  B as C,
  v as m,
  a7 as se,
  aH as ce,
  N as de,
  x,
  aI as fe,
  H as ve,
  aJ as me,
  aK as D,
  aL as $,
  a as o,
  q as N,
  aM as xe,
  aN as he,
  aO as ge,
  aP as M,
  M as we,
  aQ as ye,
  F as T,
  aR as Ve,
  W as U,
  ar as Fe,
  aS as Pe,
  aT as Ce,
} from './index-wFdHHgAa.js'
const { showSnack: H } = ae(ne)
function Se({ fields: e = {}, type: b = 'project', action: v = 'created' }) {
  const h = b === 'project' ? 'Project' : 'Task'
  return te({
    fields: e,
    disabled: !1,
    responseError: '',
    async submit(n) {
      if ('title' in e && !e.title.trim()) {
        ;(this.disabled = !0),
          H({ text: 'You have to specify at least Title', type: 'error' }),
          setTimeout(() => (this.disabled = !1), 700)
        return
      }
      this.disabled = !0
      try {
        await n(this.fields), H({ text: `${h} "${e.title}" was ${v}.` })
      } catch (i) {
        const g = i instanceof Error ? i.message : String(i)
        ;(this.responseError = g), H({ text: g, type: 'error' })
      } finally {
        this.disabled = !1
      }
    },
  })
}
const be = oe(
    {
      autoGrow: Boolean,
      autofocus: Boolean,
      counter: [Boolean, Number, String],
      counterValue: Function,
      prefix: String,
      placeholder: String,
      persistentPlaceholder: Boolean,
      persistentCounter: Boolean,
      noResize: Boolean,
      rows: { type: [Number, String], default: 5, validator: (e) => !isNaN(parseFloat(e)) },
      maxRows: { type: [Number, String], validator: (e) => !isNaN(parseFloat(e)) },
      suffix: String,
      modelModifiers: Object,
      ...ge(),
      ...he(),
    },
    'VTextarea',
  ),
  Ie = le()({
    name: 'VTextarea',
    directives: { Intersect: re },
    inheritAttrs: !1,
    props: be(),
    emits: {
      'click:control': (e) => !0,
      'mousedown:control': (e) => !0,
      'update:focused': (e) => !0,
      'update:modelValue': (e) => !0,
    },
    setup(e, b) {
      let { attrs: v, emit: h, slots: r } = b
      const n = ie(e, 'modelValue'),
        { isFocused: i, focus: g, blur: j } = ue(e),
        O = C(() =>
          typeof e.counterValue == 'function'
            ? e.counterValue(n.value)
            : (n.value || '').toString().length,
        ),
        p = C(() => {
          if (v.maxlength) return v.maxlength
          if (!(!e.counter || (typeof e.counter != 'number' && typeof e.counter != 'string')))
            return e.counter
        })
      function q(t, l) {
        var a, u
        !e.autofocus ||
          !t ||
          (u = (a = l[0].target) == null ? void 0 : a.focus) == null ||
          u.call(a)
      }
      const B = m(),
        w = m(),
        E = se(''),
        y = m(),
        J = C(() => e.persistentPlaceholder || i.value || e.active)
      function k() {
        var t
        y.value !== document.activeElement && ((t = y.value) == null || t.focus()), i.value || g()
      }
      function K(t) {
        k(), h('click:control', t)
      }
      function L(t) {
        h('mousedown:control', t)
      }
      function Q(t) {
        t.stopPropagation(),
          k(),
          M(() => {
            ;(n.value = ''), Ce(e['onClick:clear'], t)
          })
      }
      function W(t) {
        var a
        const l = t.target
        if (((n.value = l.value), (a = e.modelModifiers) != null && a.trim)) {
          const u = [l.selectionStart, l.selectionEnd]
          M(() => {
            ;(l.selectionStart = u[0]), (l.selectionEnd = u[1])
          })
        }
      }
      const d = m(),
        V = m(Number(e.rows)),
        S = C(() => ['plain', 'underlined'].includes(e.variant))
      ce(() => {
        e.autoGrow || (V.value = Number(e.rows))
      })
      function f() {
        e.autoGrow &&
          M(() => {
            if (!d.value || !w.value) return
            const t = getComputedStyle(d.value),
              l = getComputedStyle(w.value.$el),
              a =
                parseFloat(t.getPropertyValue('--v-field-padding-top')) +
                parseFloat(t.getPropertyValue('--v-input-padding-top')) +
                parseFloat(t.getPropertyValue('--v-field-padding-bottom')),
              u = d.value.scrollHeight,
              F = parseFloat(t.lineHeight),
              I = Math.max(
                parseFloat(e.rows) * F + a,
                parseFloat(l.getPropertyValue('--v-input-control-height')),
              ),
              R = parseFloat(e.maxRows) * F + a || 1 / 0,
              c = ye(u ?? 0, I, R)
            ;(V.value = Math.floor((c - a) / F)), (E.value = we(c))
          })
      }
      de(f), x(n, f), x(() => e.rows, f), x(() => e.maxRows, f), x(() => e.density, f)
      let s
      return (
        x(d, (t) => {
          t ? ((s = new ResizeObserver(f)), s.observe(d.value)) : s == null || s.disconnect()
        }),
        fe(() => {
          s == null || s.disconnect()
        }),
        ve(() => {
          const t = !!(r.counter || e.counter || e.counterValue),
            l = !!(t || r.details),
            [a, u] = me(v),
            { modelValue: F, ...I } = D.filterProps(e),
            R = $.filterProps(e)
          return o(
            D,
            N(
              {
                ref: B,
                modelValue: n.value,
                'onUpdate:modelValue': (c) => (n.value = c),
                class: [
                  'v-textarea v-text-field',
                  {
                    'v-textarea--prefixed': e.prefix,
                    'v-textarea--suffixed': e.suffix,
                    'v-text-field--prefixed': e.prefix,
                    'v-text-field--suffixed': e.suffix,
                    'v-textarea--auto-grow': e.autoGrow,
                    'v-textarea--no-resize': e.noResize || e.autoGrow,
                    'v-input--plain-underlined': S.value,
                  },
                  e.class,
                ],
                style: e.style,
              },
              a,
              I,
              { centerAffix: V.value === 1 && !S.value, focused: i.value },
            ),
            {
              ...r,
              default: (c) => {
                let { id: P, isDisabled: z, isDirty: A, isReadonly: Y, isValid: Z } = c
                return o(
                  $,
                  N(
                    {
                      ref: w,
                      style: { '--v-textarea-control-height': E.value },
                      onClick: K,
                      onMousedown: L,
                      'onClick:clear': Q,
                      'onClick:prependInner': e['onClick:prependInner'],
                      'onClick:appendInner': e['onClick:appendInner'],
                    },
                    R,
                    {
                      id: P.value,
                      active: J.value || A.value,
                      centerAffix: V.value === 1 && !S.value,
                      dirty: A.value || e.dirty,
                      disabled: z.value,
                      focused: i.value,
                      error: Z.value === !1,
                    },
                  ),
                  {
                    ...r,
                    default: (X) => {
                      let {
                        props: { class: G, ..._ },
                      } = X
                      return o(T, null, [
                        e.prefix && o('span', { class: 'v-text-field__prefix' }, [e.prefix]),
                        U(
                          o(
                            'textarea',
                            N(
                              {
                                ref: y,
                                class: G,
                                value: n.value,
                                onInput: W,
                                autofocus: e.autofocus,
                                readonly: Y.value,
                                disabled: z.value,
                                placeholder: e.placeholder,
                                rows: e.rows,
                                name: e.name,
                                onFocus: k,
                                onBlur: j,
                              },
                              _,
                              u,
                            ),
                            null,
                          ),
                          [[Fe('intersect'), { handler: q }, null, { once: !0 }]],
                        ),
                        e.autoGrow &&
                          U(
                            o(
                              'textarea',
                              {
                                class: [G, 'v-textarea__sizer'],
                                id: `${_.id}-sizer`,
                                'onUpdate:modelValue': (ee) => (n.value = ee),
                                ref: d,
                                readonly: !0,
                                'aria-hidden': 'true',
                              },
                              null,
                            ),
                            [[Pe, n.value]],
                          ),
                        e.suffix && o('span', { class: 'v-text-field__suffix' }, [e.suffix]),
                      ])
                    },
                  },
                )
              },
              details: l
                ? (c) => {
                    var P
                    return o(T, null, [
                      (P = r.details) == null ? void 0 : P.call(r, c),
                      t &&
                        o(T, null, [
                          o('span', null, null),
                          o(
                            Ve,
                            {
                              active: e.persistentCounter || i.value,
                              value: O.value,
                              max: p.value,
                              disabled: e.disabled,
                            },
                            r.counter,
                          ),
                        ]),
                    ])
                  }
                : void 0,
            },
          )
        }),
        xe({}, B, w, y)
      )
    },
  })
export { Ie as V, Se as u }
