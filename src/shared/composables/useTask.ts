import { computed, type Ref } from 'vue'
import { PRIORITIES, STATUSES, type RawTask, type Task } from '@/entities/task'
import store from '@/store'
export function useTask({
  projectId,
  taskId = null,
}: {
  projectId: string | string[]
  taskId: string | string[] | null
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

  const taskTitle = isNewTask.value ? 'New Task' : `Task ID: ${taskId}`
  const saveButtonText = isNewTask.value ? 'Create' : 'Update'

  const deleteTask = () => {}

  return { isNewTask, task, taskTitle, saveButtonText, deleteTask }
}
