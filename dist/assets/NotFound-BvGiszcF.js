import {
  d as a,
  c as s,
  k as o,
  g as t,
  a as r,
  w as u,
  m as l,
  T as m,
  o as d,
  R as p,
} from './index-wFdHHgAa.js'
const _ = a({
  __name: 'NotFound',
  setup(i) {
    return (f, e) => {
      const n = m('RouterLink')
      return (
        d(),
        s('div', null, [
          e[2] || (e[2] = o('h1', null, 'Page not Found', -1)),
          o('p', null, [
            e[1] || (e[1] = t(' Try again from the ')),
            r(
              n,
              { to: { name: l(p).PROJECTS_LIST.name } },
              { default: u(() => e[0] || (e[0] = [t('Projects List')])), _: 1 },
              8,
              ['to'],
            ),
          ]),
        ])
      )
    }
  },
})
export { _ as default }
