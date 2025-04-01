import { URL_GET_TASKS } from '@/config'
import type { DummyTask } from '@/entities/task'

import { delayWithTimeout, prepareTasks } from '@/shared/lib/api-helpers'

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
