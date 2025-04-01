import store from '@/store'
import { useSnack } from '@/shared/composables/useSnack'
import { ROUTES } from '@/types/routes'
import type { Task } from '@/entities/task'
import type { RouteLocationNormalized } from 'vue-router'

const { showSnack } = useSnack(store)

export const noTask = ({ projectId, taskId }: { projectId: string; taskId: string }) => {
  const tasksList: Task[] = store.getters['tasks/getTasksByProjectId'](projectId)
  const task: Task | undefined = tasksList.find((task: Task) => task.id === +taskId)
  return !task
}

function tasksGuard(to: RouteLocationNormalized) {
  if (
    to.name === 'task' &&
    noTask({ projectId: to.params.projectId as string, taskId: to.params.taskId as string })
  ) {
    showSnack({
      text: `[GUARD] No task with ID "${to.params.taskId}". Redirected to Projects List`,
    })
    return { name: ROUTES.PROJECTS_LIST.name }
  }
}

export default tasksGuard
