import { PROJECTS_LIMIT, type DummyProject, type Project } from '@/entities/project'
import { capitalizeFirstLetter } from './ui'
import {
  PRIORITIES,
  STATUSES,
  type DummyTask,
  type Priority,
  type Status,
  type Task,
} from '@/entities/task'

export function delayWithTimeout() {
  // random delay in a range 200-2000 ms
  const randomDelay = Math.floor(Math.random() * (2000 - 200 + 1)) + 200

  return new Promise((resolve) => {
    setTimeout(resolve, randomDelay)
  })
}

export function prepareProjects(dummyProjects: DummyProject[], limit = PROJECTS_LIMIT): Project[] {
  return dummyProjects
    .map(({ id, title, userId, body: description }) => ({
      id,
      title: capitalizeFirstLetter(title),
      userId,
      description,
    }))
    .slice(0, limit)
}

function generateRandomStatus(): Status {
  const rand = Math.random()
  return rand < 0.3 ? STATUSES.COMPLETED : rand > 0.6 ? STATUSES.PENDING : STATUSES.IN_PROGRESS
}

function generateRandomPriority(): Priority {
  const rand = Math.random()
  return rand < 0.3 ? PRIORITIES.HIGH : rand > 0.6 ? PRIORITIES.LOW : PRIORITIES.MEDIUM
}

function generateRandomDueDate(): Date {
  const now = new Date()

  // yesterday
  const start = new Date()
  start.setDate(now.getDate() - 1)

  // end of the next week
  const end = new Date()
  // next Sunday
  const daysUntilNextSunday = 14 - end.getDay()
  end.setDate(now.getDate() + daysUntilNextSunday)

  // generate random timestamp
  const randomTimestamp = start.getTime() + Math.random() * (end.getTime() - start.getTime())

  return new Date(randomTimestamp)
}

export function prepareTasks(commentsList: DummyTask[]): Task[] {
  return commentsList.map(({ id, name: title, postId: projectId, body: description }) => ({
    id,
    title: capitalizeFirstLetter(title),
    projectId,
    description,
    status: generateRandomStatus(),
    priority: generateRandomPriority(),
    dueDate: generateRandomDueDate(),
  }))
}
