export const PROJECTS_LIMIT = 15

export interface DummyProject {
  id: number
  title: string
  body: string
  userId: number
}

export interface Project {
  id: number
  title: string
  description: string
  userId: number
}

export type RawProject = Omit<Project, 'id' | 'userId'>
