import {
  d as F,
  u as A,
  B as v,
  c as u,
  a as l,
  w as d,
  V as r,
  b as G,
  e as L,
  f as M,
  S as c,
  P as p,
  T as z,
  o as i,
  g as n,
  h as J,
  i as W,
  j as $,
  k as o,
  l as q,
  t as f,
  m as e,
  n as H,
  p as K,
  z as y,
  F as k,
  y as T,
  A as _,
  R as Q,
} from './index-wFdHHgAa.js'
import { u as X } from './useTask-BXCLAk2K.js'
import { u as Y, V as Z } from './VTextarea-IAXKVb60.js'
import { V as h } from './VDivider-q9Iqy01J.js'
const ee = { class: 'd-flex justify-space-between' },
  te = { key: 0, class: 'd-flex ga-2' },
  ae = { class: 'd-flex justify-space-between align-center py-4' },
  se = { class: 'd-flex justify-space-between py-4' },
  le = { class: 'd-flex justify-space-between align-center py-4' },
  de = { class: 'd-flex justify-end' },
  fe = F({
    __name: 'TaskForm',
    setup(oe) {
      const x = L(),
        g = M(),
        { taskId: C, projectId: V } = A().params,
        {
          action: w,
          createdOrUpdatedText: D,
          isNewTask: S,
          task: R,
          taskTitle: B,
          saveButtonText: E,
          deleteTask: I,
        } = X({ projectId: V, taskId: C }),
        t = Y({ fields: R.value, action: D, type: 'task' }),
        U = v(() => {
          switch (t.fields.status) {
            case c.PENDING:
              return 'primary'
            case c.IN_PROGRESS:
              return 'orange'
            default:
              return 'green'
          }
        }),
        N = v(() => {
          switch (t.fields.priority) {
            case p.LOW:
              return 'green'
            case p.MEDIUM:
              return 'orange'
            default:
              return 'red'
          }
        }),
        m = () => x.push({ name: Q.PROJECT_DETAILS.name, params: { projectId: V } }),
        j = () => {
          I(), m()
        },
        O = async () => {
          await t.submit(async (b) => {
            await g.dispatch(`tasks/${w}`, b), m()
          })
        }
      return (b, a) => {
        const P = z('v-date-input')
        return (
          i(),
          u('div', null, [
            l(
              r,
              { class: 'my-4', onClick: m },
              { default: d(() => a[5] || (a[5] = [n('Go back')])), _: 1 },
            ),
            l(
              G,
              { 'data-test': 'task-form' },
              {
                default: d(() => [
                  l(J, null, {
                    default: d(() => [
                      l(
                        W,
                        { elevation: '6' },
                        {
                          default: d(() => [
                            l($, null, {
                              default: d(() => [
                                o('div', ee, [
                                  o('h4', null, f(e(B)), 1),
                                  e(S)
                                    ? q('', !0)
                                    : (i(),
                                      u('div', te, [
                                        l(
                                          r,
                                          { variant: 'outlined', onClick: j },
                                          {
                                            default: d(() => a[6] || (a[6] = [n('Delete')])),
                                            _: 1,
                                          },
                                        ),
                                      ])),
                                ]),
                              ]),
                              _: 1,
                            }),
                            l(h),
                            l(H, null, {
                              default: d(() => [
                                o('div', null, [
                                  l(
                                    K,
                                    {
                                      modelValue: e(t).fields.title,
                                      'onUpdate:modelValue':
                                        a[0] || (a[0] = (s) => (e(t).fields.title = s)),
                                      autofocus: '',
                                      label: 'Title',
                                      variant: 'outlined',
                                      'data-test': 'task-form-title',
                                      disabled: e(t).disabled,
                                    },
                                    null,
                                    8,
                                    ['modelValue', 'disabled'],
                                  ),
                                ]),
                                o('div', ae, [
                                  a[7] || (a[7] = o('div', { class: '' }, 'Status', -1)),
                                  o('div', null, [
                                    l(
                                      y,
                                      {
                                        modelValue: e(t).fields.status,
                                        'onUpdate:modelValue':
                                          a[1] || (a[1] = (s) => (e(t).fields.status = s)),
                                        disabled: e(t).disabled,
                                        color: '',
                                        group: '',
                                        'data-test': 'task-form-status',
                                        mandatory: '',
                                        density: 'compact',
                                      },
                                      {
                                        default: d(() => [
                                          (i(!0),
                                          u(
                                            k,
                                            null,
                                            T(
                                              e(c),
                                              (s) => (
                                                i(),
                                                _(
                                                  r,
                                                  {
                                                    key: s,
                                                    color: U.value,
                                                    value: s,
                                                    class: 'text-body-2',
                                                  },
                                                  { default: d(() => [n(f(s), 1)]), _: 2 },
                                                  1032,
                                                  ['color', 'value'],
                                                )
                                              ),
                                            ),
                                            128,
                                          )),
                                        ]),
                                        _: 1,
                                      },
                                      8,
                                      ['modelValue', 'disabled'],
                                    ),
                                  ]),
                                ]),
                                o('div', se, [
                                  a[8] || (a[8] = o('div', null, 'Priority', -1)),
                                  o('div', null, [
                                    l(
                                      y,
                                      {
                                        modelValue: e(t).fields.priority,
                                        'onUpdate:modelValue':
                                          a[2] || (a[2] = (s) => (e(t).fields.priority = s)),
                                        color: '',
                                        group: '',
                                        mandatory: '',
                                        density: 'compact',
                                        'data-test': 'task-form-priority',
                                        disabled: e(t).disabled,
                                      },
                                      {
                                        default: d(() => [
                                          (i(!0),
                                          u(
                                            k,
                                            null,
                                            T(
                                              e(p),
                                              (s) => (
                                                i(),
                                                _(
                                                  r,
                                                  {
                                                    key: s,
                                                    color: N.value,
                                                    value: s,
                                                    class: 'text-body-2',
                                                  },
                                                  { default: d(() => [n(f(s), 1)]), _: 2 },
                                                  1032,
                                                  ['color', 'value'],
                                                )
                                              ),
                                            ),
                                            128,
                                          )),
                                        ]),
                                        _: 1,
                                      },
                                      8,
                                      ['modelValue', 'disabled'],
                                    ),
                                  ]),
                                ]),
                                o('div', le, [
                                  l(
                                    P,
                                    {
                                      modelValue: e(t).fields.dueDate,
                                      'onUpdate:modelValue':
                                        a[3] || (a[3] = (s) => (e(t).fields.dueDate = s)),
                                      'prepend-icon': '',
                                      label: 'Due Date',
                                      variant: 'outlined',
                                      'data-test': 'task-form-due-date',
                                      disabled: e(t).disabled,
                                    },
                                    null,
                                    8,
                                    ['modelValue', 'disabled'],
                                  ),
                                ]),
                                l(
                                  Z,
                                  {
                                    modelValue: e(t).fields.description,
                                    'onUpdate:modelValue':
                                      a[4] || (a[4] = (s) => (e(t).fields.description = s)),
                                    label: 'Description',
                                    variant: 'outlined',
                                    'data-test': 'task-form-description',
                                    disabled: e(t).disabled,
                                  },
                                  null,
                                  8,
                                  ['modelValue', 'disabled'],
                                ),
                                o('div', de, [
                                  l(
                                    r,
                                    {
                                      disabled: e(t).disabled,
                                      color: 'success',
                                      'data-test': 'task-form-submit',
                                      onClick: O,
                                    },
                                    { default: d(() => [n(f(e(E)), 1)]), _: 1 },
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
              },
            ),
          ])
        )
      }
    },
  })
export { fe as default }
