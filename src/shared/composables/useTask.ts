import { computed, type Ref } from 'vue'
import { PRIORITIES, STATUSES, type RawTask, type Task } from '@/entities/task'
import store from '@/store'
import { useSnack } from '@/shared/composables/useSnack'
const { showSnack } = useSnack(store)

export function useTask({
  projectId,
  taskId = null,
}: {
  projectId: string | string[]
  taskId: string | string[] | number | null
}) {
  const isNewTask = computed(() => !taskId)

  const tempTask: RawTask = {
    title: '',
    description: '',
    dueDate: new Date(),
    priority: PRIORITIES.LOW,
    status: STATUSES.PENDING,
    projectId: +projectId,
  }

  const task: Ref<Task> = computed(() => {
    if (!taskId) {
      return tempTask
    }
    const tasksByProjectId = store.getters['tasks/getTasksByProjectId'](projectId)
    return tasksByProjectId.find((task: Task) => task.id === +taskId) || null
  })

  const action = isNewTask.value ? 'createTask' : 'updateTask'
  const createdOrUpdatedText = isNewTask.value ? 'created' : 'updated'
  const taskTitle = isNewTask.value ? 'New Task' : `Task ID: ${taskId}`
  const saveButtonText = isNewTask.value ? 'Create' : 'Update'

  const deleteTask = () => {
    // NOTE: this is just a temporary stub
    if (taskId === null) {
      console.error('You can not use remove task functionality at this moment.')
      return
    }
    showSnack({ text: `Task #${taskId} was removed` })
    store.dispatch('tasks/deleteTaskById', { taskId: +taskId, projectId: +projectId })
  }

  return { action, createdOrUpdatedText, isNewTask, task, taskTitle, saveButtonText, deleteTask }
}
