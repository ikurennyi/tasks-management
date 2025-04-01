import { describe, expect, test, vi } from 'vitest'
import tasksStore, { TASKS_FILTERS, DEFAULT_PRIORITY } from '@/store/modules/tasks.ts'
import { STATUSES, PRIORITIES } from '@/entities/task'

import { createTasksStore } from '../helpers/store-factory'
import { tasksList } from '../helpers/mocks/tasks'

import { getTasks, createTask, updateTask } from '@/services/apiTasks'
vi.mock('@/services/apiTasks', { spy: true })

const projectId = Object.keys(tasksList)[0]

describe('Tasks store', () => {
  describe('initial state', () => {
    test('has no tasksByProjectId', () => {
      const state = tasksStore.state
      expect(state.tasksByProjectId).toEqual({})
    })

    test('filters should have all TASKS_FILTERS', () => {
      const state = tasksStore.state
      expect(state.filters).toEqual(Object.values(STATUSES))
    })

    test('priorityOrder should be descendant', () => {
      const state = tasksStore.state
      expect(state.priorityOrder).toEqual(DEFAULT_PRIORITY)
    })
  })

  describe('getters', () => {
    test('getFilters', () => {
      const state = { filters: TASKS_FILTERS }
      const store = createTasksStore(state)

      const getFilters = store.getters['tasks/getFilters']
      expect(getFilters).toEqual(TASKS_FILTERS)
    })

    test('getPriorityOrder', () => {
      const state = { priorityOrder: PRIORITIES.LOW }
      const store = createTasksStore(state)

      const priorityOrder = store.getters['tasks/getPriorityOrder']
      expect(priorityOrder).toBe(PRIORITIES.LOW)
    })

    test('getTasksByProjectId', () => {
      const state = { tasksByProjectId: tasksList }
      const store = createTasksStore(state)

      const tasksByProjectId = store.getters['tasks/getTasksByProjectId'](projectId)
      expect(tasksByProjectId).toEqual(tasksList[1])
    })

    test('hasTasks', () => {
      const projectId = Object.keys(tasksList)[0]
      const state = { tasksByProjectId: tasksList }
      const store = createTasksStore(state)

      const tasksByProjectId = store.getters['tasks/hasTasks'](projectId)
      expect(tasksByProjectId).toEqual(true)

      const tasksByNotValidProjectId = store.getters['tasks/hasTasks'](2)
      expect(tasksByNotValidProjectId).toEqual(false)
    })
  })

  describe('actions', () => {
    let tempTasksList
    beforeEach(() => {
      tempTasksList = { ...tasksList }
    })

    test('isLoadingProject', () => {
      const store = createTasksStore({})
      store.dispatch('tasks/addIsLoading')

      expect(store.state.tasks.isLoadingTasks).toBe(true)

      store.dispatch('tasks/removeIsLoading')
      expect(store.state.tasks.isLoadingTasks).toBe(false)
    })

    test('getTasksData', async () => {
      const tasks = tempTasksList[projectId]
      const store = createTasksStore({ tasksByProjectId: {} })
      const tasksLength = tasks.length
      vi.mocked(getTasks).mockResolvedValue(tasks)
      await store.dispatch('tasks/getTasksData', projectId)

      expect(getTasks).toHaveBeenCalledTimes(1)
      const { tasksByProjectId } = store.state.tasks
      expect(tasksByProjectId[projectId]).toHaveLength(tasksLength)
      expect(Object.keys(tasksByProjectId)).toHaveLength(1)
    })

    test('deleteTaskById', async () => {
      const initialTasksLength = tempTasksList[projectId].length
      const firstTaskID = tempTasksList[projectId][0]['id']
      const store = createTasksStore({ tasksByProjectId: tempTasksList })

      await store.dispatch('tasks/deleteTaskById', { projectId, taskId: firstTaskID })
      expect(store.state.tasks.tasksByProjectId[projectId]).toHaveLength(initialTasksLength - 1)
    })

    test('deleteTasksByProjectId', async () => {
      const store = createTasksStore({ tasksByProjectId: tempTasksList })

      await store.dispatch('tasks/deleteTasksByProjectId', projectId)
      expect(store.state.tasks.tasksByProjectId).toEqual({})
    })

    test('createTask finished successfully', async () => {
      const initialTasksLength = tempTasksList[projectId].length
      const task = tempTasksList[projectId][0]
      const store = createTasksStore({ tasksByProjectId: tempTasksList })
      vi.mocked(createTask).mockResolvedValue(task)

      await store.dispatch('tasks/createTask', task)
      expect(createTask).toHaveBeenCalledWith(task)
      expect(store.state.tasks.tasksByProjectId[projectId]).toHaveLength(initialTasksLength + 1)
    })

    test('createTask finished with Error', async () => {
      const task = tempTasksList[projectId][0]
      const store = createTasksStore({ tasksByProjectId: tempTasksList })
      vi.mocked(createTask).mockRejectedValue(new Error('ERROR'))

      await expect(store.dispatch('tasks/createTask', task)).rejects.toThrow('ERROR')
      expect(store.state.tasks.tasksByProjectId[projectId]).not.toContain(task)
    })

    test('updateTask', async () => {
      const errorText = 'API of JSONPlaceholder is not allowed to update tasks.'
      const task = tempTasksList[projectId][0]
      const store = createTasksStore()
      vi.mocked(updateTask).mockRejectedValue(new Error(errorText))

      await expect(store.dispatch('tasks/updateTask', task)).rejects.toThrow(errorText)
    })

    test('setFilters', () => {
      const store = createTasksStore({})
      const filters = [STATUSES.PENDING, STATUSES.IN_PROGRESS]

      store.dispatch('tasks/setFilters', filters)
      expect(store.state.tasks.filters).toEqual([STATUSES.PENDING, STATUSES.IN_PROGRESS])
    })

    test('setPriority', () => {
      const store = createTasksStore({})

      store.dispatch('tasks/setPriority', PRIORITIES.LOW)
      expect(store.state.tasks.priorityOrder).toBe(PRIORITIES.LOW)
    })

    test('resetFilters', () => {
      const store = createTasksStore({ filters: STATUSES.PENDING, priorityOrder: PRIORITIES.LOW })

      store.dispatch('tasks/resetFilters', PRIORITIES.LOW)
      expect(store.state.tasks.filters).toEqual(TASKS_FILTERS)
      expect(store.state.tasks.priorityOrder).toEqual(PRIORITIES.HIGH)
    })
  })
})
