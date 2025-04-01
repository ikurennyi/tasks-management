export interface DummyTask {
  id: number
  postId: number
  name: string
  email: string
  body: string
}

export interface Task {
  id: number
  title: string
  description: string
  projectId: number
  status: Status
  priority: Priority
  dueDate: Date
}

export type RawTask = Omit<Task, 'id'>

export const PRIORITIES = { LOW: 'low', MEDIUM: 'medium', HIGH: 'high' } as const
export type Priority = (typeof PRIORITIES)[keyof typeof PRIORITIES]
export const PRIORITY_ORDER = {
  low: 0,
  medium: 1,
  high: 2,
} as const

export const STATUSES = {
  PENDING: 'pending',
  IN_PROGRESS: 'in-progress',
  COMPLETED: 'completed',
} as const
export type Status = (typeof STATUSES)[keyof typeof STATUSES]
