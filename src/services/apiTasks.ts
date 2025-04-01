import { URL_GET_TASKS } from '@/config'
import type { DummyTask, RawTask, Task } from '@/entities/task'

import { delayWithTimeout, prepareNewTasks, prepareTasks } from '@/shared/lib/api-helpers'

export async function getTasks(projectId: number) {
  try {
    const results = await Promise.allSettled<[Promise<DummyTask[]>, Promise<unknown>]>([
      fetch(`${URL_GET_TASKS}${projectId}`).then((res) => res.json() as Promise<DummyTask[]>),
      delayWithTimeout(),
    ])

    const tasksResponse = results[0]
    if (tasksResponse.status === 'fulfilled') {
      return prepareTasks(tasksResponse.value)
    } else {
      console.error('[Fetch failed] ', tasksResponse.reason)
      return []
    }
  } catch (error) {
    console.error('[Failed getting tasks list] ', error)
    return []
  }
}

export async function createTask(task: RawTask): Promise<Task | null> {
  const commentLikeTask = {
    ...task,
    name: task.title,
    postId: task.projectId,
    body: task.description,
  }
  try {
    const response = await fetch(`${URL_GET_TASKS}${task.projectId}`, {
      method: 'POST',
      body: JSON.stringify(commentLikeTask),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    })

    if (!response.ok) {
      throw new Error(`[Create task]: failed with status ${response.status}`)
    }

    const newTask: Task = await response.json()
    return prepareNewTasks([newTask])[0]
  } catch (error) {
    console.error('[Failed getting project] ', error)
    return null
  }
}

export async function updateTask(taskId: number): Promise<null> {
  console.error(`Attempt to update task with ID: ${taskId} failed due to the API response.`)
  throw new Error('API of JSONPlaceholder is not allowed to update tasks.')
}
