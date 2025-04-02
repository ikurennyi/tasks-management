import { B as a, Z as c, $ as l, a0 as p, R as j } from './index-wFdHHgAa.js'
const { showSnack: P } = l(c)
function w(t) {
  const r = async () => {
      window.confirm(
        'This action will remove project and all corresponding tasks. Are you sure you want to delete it?',
      ) &&
        (await c.dispatch('projects/deleteProject', +t),
        P({ text: 'Project was successfully removed.' }),
        p.push({ name: j.PROJECTS_LIST.name }))
    },
    s = { id: +t, title: '', description: '', userId: 1 },
    o = a(() => c.getters['projects/findProjectById'](+t) || s),
    e = a(() => !o.value.id),
    n = e.value ? 'createProject' : 'updateProject',
    i = e.value ? 'created' : 'updated',
    u = e.value ? 'Create' : 'Update',
    d = e.value ? 'New Project' : `Project ID: ${o.value.id}`
  return {
    action: n,
    createdOrUpdatedText: i,
    deleteProject: r,
    project: o,
    isNewProject: e,
    saveButtonText: u,
    projectTitle: d,
  }
}
export { w as u }
