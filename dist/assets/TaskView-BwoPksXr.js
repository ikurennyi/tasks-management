import {
  d as E,
  u as R,
  B as r,
  N as S,
  f as b,
  c as A,
  a as t,
  A as _,
  w as a,
  V as p,
  b as L,
  e as P,
  T as N,
  o as c,
  g as f,
  h as v,
  i as y,
  j as T,
  k as e,
  t as d,
  n as C,
  m as O,
  X as $,
  R as m,
  $ as J,
} from './index-wFdHHgAa.js'
import { _ as h, a as M } from './TaskPriority.vue_vue_type_script_setup_true_lang-BF39xCEa.js'
import { V } from './VDivider-q9Iqy01J.js'
const U = { class: 'd-flex justify-space-between' },
  X = { class: 'd-flex ga-2' },
  q = { class: 'd-flex justify-space-between py-4' },
  z = { class: 'd-flex justify-space-between py-4' },
  F = { class: 'd-flex justify-space-between py-4' },
  W = E({
    __name: 'TaskView',
    setup(G) {
      const o = b(),
        { showSnack: D } = J(o),
        { taskId: u, projectId: n } = R().params,
        i = P(),
        g = r(() => o.getters['projects/current']),
        j = r(() => o.getters['tasks/getTasksByProjectId'](n)),
        l = r(() => j.value.find((k) => k.id === +u) || null)
      S(async () => {
        g.value || (await o.dispatch('projects/getById', n))
      })
      const w = () => i.push({ name: m.PROJECT_DETAILS.name, params: { projectId: n } }),
        x = () => i.push({ name: m.EDIT_PROJECT.name, params: { projectId: n } }),
        I = () => {
          o.dispatch('tasks/deleteTaskById', { taskId: +u, projectId: +n }),
            i.push({ name: m.PROJECT_DETAILS.name, params: { projectId: n } }),
            D({ text: `Task #${u} was removed` })
        }
      return (k, s) => {
        const B = N('AppLoading')
        return (
          c(),
          A('div', null, [
            t(
              p,
              { class: 'my-4', onClick: w },
              { default: a(() => s[0] || (s[0] = [f('go back')])), _: 1 },
            ),
            l.value
              ? (c(),
                _(
                  L,
                  { key: 1 },
                  {
                    default: a(() => [
                      t(
                        v,
                        { cols: '6', 'data-test': 'task-info' },
                        {
                          default: a(() => [
                            t(y, null, {
                              default: a(() => [
                                t(T, null, {
                                  default: a(() => [
                                    e('div', U, [
                                      e('span', null, 'Task ID: ' + d(l.value.id), 1),
                                      e('div', X, [
                                        t(
                                          p,
                                          { variant: 'outlined', color: 'primary', onClick: x },
                                          { default: a(() => s[1] || (s[1] = [f('Edit')])), _: 1 },
                                        ),
                                        t(
                                          p,
                                          { variant: 'outlined', onClick: I },
                                          {
                                            default: a(() => s[2] || (s[2] = [f('Delete')])),
                                            _: 1,
                                          },
                                        ),
                                      ]),
                                    ]),
                                  ]),
                                  _: 1,
                                }),
                                t(V),
                                t(C, null, {
                                  default: a(() => [
                                    e('h2', null, d(l.value.title), 1),
                                    e('p', null, d(l.value.description), 1),
                                  ]),
                                  _: 1,
                                }),
                              ]),
                              _: 1,
                            }),
                          ]),
                          _: 1,
                        },
                      ),
                      t(
                        v,
                        { cols: '6', 'data-test': 'task-details' },
                        {
                          default: a(() => [
                            t(y, null, {
                              default: a(() => [
                                t(T, null, {
                                  default: a(
                                    () => s[3] || (s[3] = [e('span', null, 'Task Details', -1)]),
                                  ),
                                  _: 1,
                                }),
                                t(V),
                                t(C, null, {
                                  default: a(() => [
                                    e('div', q, [
                                      s[4] || (s[4] = e('div', null, 'Status', -1)),
                                      t(h, { status: l.value.status }, null, 8, ['status']),
                                    ]),
                                    e('div', z, [
                                      s[5] || (s[5] = e('div', null, 'Priority', -1)),
                                      t(M, { priority: l.value.priority }, null, 8, ['priority']),
                                    ]),
                                    e('div', F, [
                                      s[6] || (s[6] = e('div', null, 'Due Date', -1)),
                                      e('div', null, d(O($)(l.value.dueDate)), 1),
                                    ]),
                                  ]),
                                  _: 1,
                                }),
                              ]),
                              _: 1,
                            }),
                          ]),
                          _: 1,
                        },
                      ),
                    ]),
                    _: 1,
                  },
                ))
              : (c(), _(B, { key: 0 })),
          ])
        )
      }
    },
  })
export { W as default }
