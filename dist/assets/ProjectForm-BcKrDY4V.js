import {
  d as y,
  u as B,
  c as V,
  a as t,
  w as o,
  V as i,
  b as R,
  e as S,
  f as D,
  o as j,
  g as r,
  h as E,
  i as N,
  j as g,
  k as n,
  l as h,
  t as _,
  m as a,
  n as I,
  p as O,
  R as b,
} from './index-wFdHHgAa.js'
import { u as U } from './useProject-BoIFukOZ.js'
import { u as F, V as J } from './VTextarea-IAXKVb60.js'
import { V as L } from './VDivider-q9Iqy01J.js'
const A = { class: 'd-flex justify-space-between' },
  G = { key: 0, class: 'd-flex ga-2' },
  $ = { class: 'd-flex justify-end' },
  Q = y({
    __name: 'ProjectForm',
    setup(q) {
      const u = S(),
        c = D(),
        { projectId: p } = B().params,
        {
          action: C,
          createdOrUpdatedText: T,
          project: v,
          deleteProject: x,
          isNewProject: m,
          saveButtonText: k,
          projectTitle: P,
        } = U(p),
        f = (l) =>
          m.value
            ? u.push(b.PROJECTS_LIST.path)
            : u.push({ name: b.PROJECT_DETAILS.name, params: { projectId: l || p } }),
        s = F({ fields: v.value, action: T }),
        w = async () => {
          await s.submit(async (l) => {
            const e = await c.dispatch(`projects/${C}`, l)
            c.dispatch('projects/setCurrentProject', e), f(e.id)
          })
        }
      return (l, e) => (
        j(),
        V('div', null, [
          t(
            i,
            { class: 'my-4', onClick: f },
            { default: o(() => e[2] || (e[2] = [r('Go Back')])), _: 1 },
          ),
          t(R, null, {
            default: o(() => [
              t(E, null, {
                default: o(() => [
                  t(
                    N,
                    { elevation: '6', 'data-test': 'project-form' },
                    {
                      default: o(() => [
                        t(g, null, {
                          default: o(() => [
                            n('div', A, [
                              n('h4', null, _(a(P)), 1),
                              a(m)
                                ? h('', !0)
                                : (j(),
                                  V('div', G, [
                                    t(
                                      i,
                                      { variant: 'outlined', onClick: a(x) },
                                      { default: o(() => e[3] || (e[3] = [r('Delete')])), _: 1 },
                                      8,
                                      ['onClick'],
                                    ),
                                  ])),
                            ]),
                          ]),
                          _: 1,
                        }),
                        t(L),
                        t(I, null, {
                          default: o(() => [
                            t(
                              O,
                              {
                                modelValue: a(s).fields.title,
                                'onUpdate:modelValue':
                                  e[0] || (e[0] = (d) => (a(s).fields.title = d)),
                                autofocus: '',
                                label: 'Title',
                                variant: 'outlined',
                                'data-test': 'project-form-title',
                                disabled: a(s).disabled,
                              },
                              null,
                              8,
                              ['modelValue', 'disabled'],
                            ),
                            t(
                              J,
                              {
                                modelValue: a(s).fields.description,
                                'onUpdate:modelValue':
                                  e[1] || (e[1] = (d) => (a(s).fields.description = d)),
                                label: 'Description',
                                variant: 'outlined',
                                'data-test': 'project-form-description',
                                disabled: a(s).disabled,
                              },
                              null,
                              8,
                              ['modelValue', 'disabled'],
                            ),
                            n('div', $, [
                              t(
                                i,
                                { color: 'success', disabled: a(s).disabled, onClick: w },
                                { default: o(() => [r(_(a(k)), 1)]), _: 1 },
                                8,
                                ['disabled'],
                              ),
                            ]),
                          ]),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    },
                  ),
                ]),
                _: 1,
              }),
            ]),
            _: 1,
          }),
        ])
      )
    },
  })
export { Q as default }
