import { URL_GET_PROJECT, URL_GET_PROJECTS } from '@/config'
import type { DummyProject, Project, RawProject } from '@/entities/project'
import { delayWithTimeout, prepareProjects } from '@/shared/lib/api-helpers'

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

export async function createProject(project: RawProject): Promise<Project | null> {
  const postLikeProject = { ...project, body: project.description }
  try {
    const response = await fetch(URL_GET_PROJECTS, {
      method: 'POST',
      body: JSON.stringify(postLikeProject),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    })

    if (!response.ok) {
      throw new Error(`[CREATE project]: failed with status ${response.status}`)
    }

    const newProject = await response.json()
    return prepareProjects([newProject])[0]
  } catch (error) {
    console.error('[Failed getting project] ', error)
    return null
  }
}

export async function updateProject(project: RawProject): Promise<Project | null> {
  const postLikeProject = { ...project, body: project.description }
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'PUT',
      body: JSON.stringify(postLikeProject),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })

    if (!response.ok) {
      throw new Error(`[UPDATE project]: failed with status ${response.status}`)
    }

    const newProject = await response.json()
    return prepareProjects([newProject])[0]
  } catch (error) {
    console.error('[Failed getting project] ', error)
    return null
  }
}
