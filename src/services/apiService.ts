import { URL_GET_PROJECT, URL_GET_PROJECTS, URL_GET_TASKS } from '@/config'
import { type DummyProject, type Project } from '@/entities/project'
import type { DummyTask } from '@/entities/task'

import { delayWithTimeout, prepareProjects, prepareTasks } from '@/shared/lib/api-helpers'

export async function getProjects() {
  try {
    const results = await Promise.allSettled<[Promise<DummyProject[]>, Promise<unknown>]>([
      fetch(URL_GET_PROJECTS).then((res) => res.json() as Promise<DummyProject[]>),
      delayWithTimeout(),
    ])

    const projectsResponse = results[0]
    if (projectsResponse.status === 'fulfilled') {
      return prepareProjects(projectsResponse.value)
    } else {
      console.error('[Fetch failed] ', projectsResponse.reason)
      return []
    }
  } catch (error) {
    console.error('[Failed getting projects list] ', error)
    return []
  }
}

export async function getProjectById(projectId: number): Promise<Project | null> {
  try {
    const response = await fetch(`${URL_GET_PROJECT}${projectId}`)

    if (!response.ok) {
      console.error('[Fetch project] ', `Fetching project failed with status ${response.status}`)
      return null
    }
    const project = await response.json()
    return prepareProjects([project])[0]
  } catch (error) {
    console.error('[Failed getting project] ', error)
    return null
  }
}

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
