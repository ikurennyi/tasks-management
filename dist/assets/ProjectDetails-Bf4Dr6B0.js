import {
  _ as C,
  c as d,
  o,
  k as a,
  d as g,
  a as r,
  w as m,
  V as _,
  q as S,
  r as B,
  s as E,
  m as p,
  R as $,
  v as W,
  f as b,
  x as z,
  F as L,
  y as R,
  S as G,
  z as Z,
  A as y,
  g as x,
  t as T,
  B as c,
  P as w,
  l as P,
  C as J,
  D as Y,
  E as q,
  G as Q,
  H as X,
  I as tt,
  J as et,
  K as st,
  L as at,
  M as ot,
  N as M,
  O as rt,
  Q as j,
  e as nt,
  T as A,
  U as lt,
  W as it,
  X as dt,
  Y as ut,
  u as ct,
} from './index-wFdHHgAa.js'
import { _ as pt, a as mt } from './TaskPriority.vue_vue_type_script_setup_true_lang-BF39xCEa.js'
import { u as vt } from './useTask-BXCLAk2K.js'
import { u as ft } from './useProject-BoIFukOZ.js'
const kt = {},
  _t = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' }
function gt(s, t) {
  return (
    o(),
    d(
      'svg',
      _t,
      t[0] ||
        (t[0] = [
          a(
            'path',
            {
              d: 'M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z',
            },
            null,
            -1,
          ),
        ]),
    )
  )
}
const ht = C(kt, [['render', gt]]),
  yt = {},
  Tt = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' }
function xt(s, t) {
  return (
    o(),
    d(
      'svg',
      Tt,
      t[0] ||
        (t[0] = [
          a(
            'path',
            {
              d: 'M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z',
            },
            null,
            -1,
          ),
        ]),
    )
  )
}
const Vt = C(yt, [['render', xt]]),
  It = g({
    __name: 'TaskActions',
    props: { id: {}, projectId: {} },
    setup(s) {
      const { deleteTask: t } = vt({ projectId: s.projectId, taskId: s.id })
      return (e, n) => (
        o(),
        d('div', null, [
          r(
            E,
            { text: 'Edit Task', location: 'top' },
            {
              activator: m(({ props: l }) => [
                r(
                  _,
                  S(l, {
                    icon: ht,
                    variant: 'flat',
                    size: 'small',
                    'data-test': 'task-actions-edit',
                    onClick:
                      n[0] ||
                      (n[0] = B(
                        (i) =>
                          e.$router.push({ name: p($).EDIT_TASK.name, params: { taskId: e.id } }),
                        ['stop'],
                      )),
                  }),
                  null,
                  16,
                ),
              ]),
              _: 1,
            },
          ),
          r(
            E,
            { text: 'Delete Task', location: 'top' },
            {
              activator: m(({ props: l }) => [
                r(
                  _,
                  S(l, {
                    icon: Vt,
                    variant: 'flat',
                    size: 'small',
                    'data-test': 'task-actions-delete',
                    onClick: n[1] || (n[1] = B((i) => p(t)(), ['stop'])),
                  }),
                  null,
                  16,
                ),
              ]),
              _: 1,
            },
          ),
        ])
      )
    },
  }),
  jt = g({
    __name: 'StatusFilter',
    setup(s) {
      const t = b(),
        e = W(t.getters['tasks/getFilters'])
      return (
        z(e, () => {
          t.dispatch('tasks/setFilters', e.value)
        }),
        (n, l) => (
          o(),
          d('div', null, [
            r(
              Z,
              {
                modelValue: e.value,
                'onUpdate:modelValue': l[0] || (l[0] = (i) => (e.value = i)),
                density: 'compact',
                variant: 'plain',
                divided: '',
                color: 'primary',
                multiple: '',
                'data-test': 'filter-status',
              },
              {
                default: m(() => [
                  (o(!0),
                  d(
                    L,
                    null,
                    R(
                      p(G),
                      (i) => (
                        o(),
                        y(
                          _,
                          { key: i, value: i, class: 'text-body-2' },
                          { default: m(() => [x(T(i), 1)]), _: 2 },
                          1032,
                          ['value'],
                        )
                      ),
                    ),
                    128,
                  )),
                ]),
                _: 1,
              },
              8,
              ['modelValue'],
            ),
          ])
        )
      )
    },
  }),
  wt = {},
  $t = { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' }
function bt(s, t) {
  return (
    o(),
    d(
      'svg',
      $t,
      t[0] ||
        (t[0] = [
          a('title', null, 'sort', -1),
          a(
            'path',
            {
              d: 'M18 21L14 17H17V7H14L18 3L22 7H19V17H22M2 19V17H12V19M2 13V11H9V13M2 7V5H6V7H2Z',
            },
            null,
            -1,
          ),
        ]),
    )
  )
}
const Ht = C(wt, [['render', bt]]),
  Pt = g({
    __name: 'PrioritySorting',
    setup(s) {
      const t = b(),
        e = c(() => t.getters['tasks/getPriorityOrder']),
        n = () => {
          const l = e.value === w.HIGH ? w.LOW : w.HIGH
          t.dispatch('tasks/setPriority', l)
        }
      return (l, i) => (
        o(),
        d('div', null, [
          r(
            _,
            { 'prepend-icon': Ht, variant: 'text', 'data-test': 'sort-priority', onClick: n },
            { default: m(() => i[0] || (i[0] = [x(' Sort by Priority ')])), _: 1 },
          ),
        ])
      )
    },
  }),
  Ct = { class: 'd-flex justify-space-between align-end mb-4', 'data-test': 'tasks-controls' },
  Lt = { key: 1, class: 'd-flex align-center ga-4' },
  Dt = g({
    __name: 'TasksControls',
    props: { hasTasks: { type: Boolean, default: !0 } },
    setup(s) {
      return (t, e) => (
        o(),
        d('div', Ct, [
          a('div', null, [
            r(
              _,
              {
                variant: 'elevated',
                color: 'primary',
                'data-test': 'create-task',
                onClick: e[0] || (e[0] = (n) => t.$router.push({ name: p($).TASK_NEW.name })),
              },
              { default: m(() => e[1] || (e[1] = [x('Add New Task')])), _: 1 },
            ),
          ]),
          t.hasTasks ? (o(), y(jt, { key: 0 })) : P('', !0),
          t.hasTasks ? (o(), d('div', Lt, [r(Pt)])) : P('', !0),
        ])
      )
    },
  }),
  St = Y(
    {
      fixedHeader: Boolean,
      fixedFooter: Boolean,
      height: [Number, String],
      hover: Boolean,
      ...at(),
      ...st(),
      ...et(),
      ...tt(),
    },
    'VTable',
  ),
  Bt = J()({
    name: 'VTable',
    props: St(),
    setup(s, t) {
      let { slots: e, emit: n } = t
      const { themeClasses: l } = q(s),
        { densityClasses: i } = Q(s)
      return (
        X(() =>
          r(
            s.tag,
            {
              class: [
                'v-table',
                {
                  'v-table--fixed-height': !!s.height,
                  'v-table--fixed-header': s.fixedHeader,
                  'v-table--fixed-footer': s.fixedFooter,
                  'v-table--has-top': !!e.top,
                  'v-table--has-bottom': !!e.bottom,
                  'v-table--hover': s.hover,
                },
                l.value,
                i.value,
                s.class,
              ],
              style: s.style,
            },
            {
              default: () => {
                var f, k, u
                return [
                  (f = e.top) == null ? void 0 : f.call(e),
                  e.default
                    ? r('div', { class: 'v-table__wrapper', style: { height: ot(s.height) } }, [
                        r('table', null, [e.default()]),
                      ])
                    : (k = e.wrapper) == null
                      ? void 0
                      : k.call(e),
                  (u = e.bottom) == null ? void 0 : u.call(e),
                ]
              },
            },
          ),
        ),
        {}
      )
    },
  }),
  Et = { key: 1 },
  Rt = ['onClick'],
  Mt = { class: 'text-right', 'data-test': 'task-table-actions' },
  At = g({
    __name: 'TasksList',
    props: { projectId: {} },
    setup(s) {
      const t = b(),
        e = nt(),
        n = c(() => t.getters['tasks/getFilters']),
        l = c(() => t.getters['tasks/getPriorityOrder']),
        i = c(() => t.getters['tasks/isLoading']),
        f = c(() => t.getters['tasks/hasTasks'](s.projectId)),
        k = c(() => t.getters['tasks/getTasksByProjectId'](s.projectId)),
        u = c(() => k.value.filter((v) => n.value.includes(v.status)))
      function H() {
        return [...u.value].sort((v, h) =>
          l.value === w.LOW ? j[v.priority] - j[h.priority] : j[h.priority] - j[v.priority],
        )
      }
      const V = c(() => H()),
        D = (v) => {
          e.push({ name: $.TASK.name, params: { projectId: s.projectId, taskId: v } })
        }
      return (
        M(() => {
          k.value.length === 0 && t.dispatch('tasks/getTasksData', s.projectId)
        }),
        rt(() => t.dispatch('tasks/resetFilters')),
        (v, h) => {
          const F = A('NoEntries')
          return i.value
            ? (o(), y(lt, { key: 0 }))
            : (o(),
              d('div', Et, [
                r(Dt, { 'has-tasks': f.value }, null, 8, ['has-tasks']),
                f.value
                  ? (o(),
                    y(
                      Bt,
                      { key: 0, density: 'default', hover: '', 'data-test': 'tasks-table' },
                      {
                        default: m(() => [
                          h[0] ||
                            (h[0] = a(
                              'thead',
                              null,
                              [
                                a('tr', null, [
                                  a('th', { class: 'text-left' }, 'ID'),
                                  a('th', { class: 'text-left' }, 'Title'),
                                  a('th', { class: 'text-left' }, 'Status'),
                                  a('th', { class: 'text-left' }, 'Priority'),
                                  a('th', { class: 'text-left' }, 'Due Date'),
                                  a('th'),
                                ]),
                              ],
                              -1,
                            )),
                          a('tbody', null, [
                            (o(!0),
                            d(
                              L,
                              null,
                              R(
                                V.value,
                                ({ id: I, title: N, status: O, priority: U, dueDate: K }) =>
                                  it(
                                    (o(),
                                    d(
                                      'tr',
                                      { key: I, 'cursor-pointer': '', onClick: (Ut) => D(I) },
                                      [
                                        a('td', null, T(I), 1),
                                        a('td', null, T(N), 1),
                                        a('td', null, [r(pt, { status: O }, null, 8, ['status'])]),
                                        a('td', null, [
                                          r(mt, { priority: U }, null, 8, ['priority']),
                                        ]),
                                        a('td', null, T(p(dt)(K)), 1),
                                        a('td', Mt, [
                                          r(It, { id: I, 'project-id': v.projectId }, null, 8, [
                                            'id',
                                            'project-id',
                                          ]),
                                        ]),
                                      ],
                                      8,
                                      Rt,
                                    )),
                                    [[ut]],
                                  ),
                              ),
                              128,
                            )),
                          ]),
                        ]),
                        _: 1,
                      },
                    ))
                  : (o(), y(F, { key: 1, item: 'tasks', 'button-text': 'ADD NEW TASK' })),
              ]))
        }
      )
    },
  }),
  Ft = { class: 'd-flex align-top justify-space-between mb-6', 'data-test': 'project-main' },
  Nt = { class: 'd-flex ga-4 pt-2' },
  Ot = { key: 0, class: 'd-flex align-center flex-column' },
  Zt = g({
    __name: 'ProjectDetails',
    setup(s) {
      const t = b(),
        n = ct().params.projectId,
        l = c(() => t.getters['projects/current']),
        { deleteProject: i } = ft(n),
        f = c(() => t.getters['projects/isLoading'])
      return (
        M(async () => {
          l.value || (await t.dispatch('projects/getById', n))
        }),
        (k, u) => {
          var V
          const H = A('RouterView')
          return (
            o(),
            d(
              L,
              null,
              [
                a('div', null, [
                  a('div', Ft, [
                    a('h2', null, T((V = l.value) == null ? void 0 : V.title), 1),
                    a('div', Nt, [
                      r(
                        _,
                        {
                          variant: 'outlined',
                          color: 'primary',
                          onClick:
                            u[0] ||
                            (u[0] = (D) =>
                              k.$router.push({
                                name: p($).EDIT_PROJECT.name,
                                params: { projectId: p(n) },
                              })),
                        },
                        { default: m(() => u[1] || (u[1] = [x(' Edit ')])), _: 1 },
                      ),
                      r(
                        _,
                        { variant: 'outlined', onClick: p(i) },
                        { default: m(() => u[2] || (u[2] = [x('Delete Project')])), _: 1 },
                        8,
                        ['onClick'],
                      ),
                    ]),
                  ]),
                  f.value
                    ? (o(),
                      d(
                        'div',
                        Ot,
                        u[3] || (u[3] = [a('h2', { class: 'mb-6' }, 'Loading project...', -1)]),
                      ))
                    : P('', !0),
                  r(At, { 'project-id': p(n) }, null, 8, ['project-id']),
                ]),
                r(H),
              ],
              64,
            )
          )
        }
      )
    },
  })
export { Zt as default }
