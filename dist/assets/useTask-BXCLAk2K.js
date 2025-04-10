import { B as o, S as l, $ as k, Z as a, P as p } from './index-wFdHHgAa.js'
const { showSnack: m } = k(a)
function y({ projectId: s, taskId: e = null }) {
  const t = o(() => !e),
    n = {
      title: '',
      description: '',
      dueDate: new Date(),
      priority: p.LOW,
      status: l.PENDING,
      projectId: +s,
    },
    r = o(() =>
      e ? a.getters['tasks/getTasksByProjectId'](s).find((d) => d.id === +e) || null : n,
    ),
    c = t.value ? 'createTask' : 'updateTask',
    u = t.value ? 'created' : 'updated',
    i = t.value ? 'New Task' : `Task ID: ${e}`,
    T = t.value ? 'Create' : 'Update'
  return {
    action: c,
    createdOrUpdatedText: u,
    isNewTask: t,
    task: r,
    taskTitle: i,
    saveButtonText: T,
    deleteTask: () => {
      if (e === null) {
        console.error('You can not use remove task functionality at this moment.')
        return
      }
      m({ text: `Task #${e} was removed` }),
        a.dispatch('tasks/deleteTaskById', { taskId: +e, projectId: +s })
    },
  }
}
export { y as u }
