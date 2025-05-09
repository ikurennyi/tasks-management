import type { Module } from 'vuex'
import type { RootStore } from '@/store/index'
import { createTask, getTasks, updateTask } from '@/services/apiTasks'
import { PRIORITIES, STATUSES, type Priority, type RawTask, type Status } from '@/entities/task'

const LOADING_STARTED = 'loadingStarted'
const LOADING_STOPPED = 'loadingStopped'
const SET_TASKS_DATA = 'setTasksData'
const DELETE_TASK = 'deleteTask'
const DELETE_TASKS = 'deleteTasks'
const SET_FILTERS = 'setFilters'
const SET_PRIORITY_ORDER = 'setPriorityOrder'
const RESET_FILTERS = 'resetFilters'
const CREATE_TASK = 'createTask'
const UPDATE_TASK = 'updateTask'

export const TASKS_FILTERS = Object.values(STATUSES)
export const DEFAULT_PRIORITY = PRIORITIES.HIGH
interface Task {
  id: number
  title: string
  description: string
  status: string
  priority: string
  dueDate: Date
}

export interface TasksStore {
  tasksByProjectId: Record<string, Task[]>
  isLoadingTasks: boolean
  filters: Status[]
  priorityOrder: Priority
}

const tasksStore: Module<TasksStore, RootStore> = {
  namespaced: true,
  state: {
    isLoadingTasks: false,
    tasksByProjectId: {},
    filters: TASKS_FILTERS,
    priorityOrder: DEFAULT_PRIORITY,
  },
  mutations: {
    [LOADING_STARTED](state) {
      state.isLoadingTasks = true
    },
    [LOADING_STOPPED](state) {
      state.isLoadingTasks = false
    },
    [SET_TASKS_DATA](state, { tasksList, projectId }) {
      state.tasksByProjectId[projectId] = tasksList
    },
    [CREATE_TASK](state, task) {
      state.tasksByProjectId[task.projectId].push(task)
    },
    [UPDATE_TASK](state, task) {
      const tasksByProjectId = state.tasksByProjectId[task.projectId]
      const index = tasksByProjectId.findIndex((t: Task) => t.id === task.id)
      if (index !== -1) {
        tasksByProjectId[index] = task
      } else {
        tasksByProjectId.push(task)
      }
    },
    [DELETE_TASK](state, { projectId, taskId }) {
      state.tasksByProjectId[projectId] = state.tasksByProjectId[projectId].filter(
        (task) => task.id !== taskId,
      )
    },
    [DELETE_TASKS](state, projectId) {
      delete state.tasksByProjectId[projectId]
    },
    [SET_FILTERS](state, filters: Status[]) {
      state.filters = filters
    },
    [SET_PRIORITY_ORDER](state, priority: Priority) {
      state.priorityOrder = priority
    },
    [RESET_FILTERS](store) {
      store.filters = TASKS_FILTERS
      store.priorityOrder = DEFAULT_PRIORITY
    },
  },
  actions: {
    addIsLoading({ commit }) {
      commit(LOADING_STARTED)
    },
    removeIsLoading({ commit }) {
      commit(LOADING_STOPPED)
    },
    async getTasksData({ commit }, projectId: number) {
      commit(LOADING_STARTED)
      try {
        const tasksList = await getTasks(projectId)
        commit(SET_TASKS_DATA, { tasksList, projectId })
      } catch (error) {
        console.error('[Error]: fetching tasks: ', error)
      } finally {
        commit(LOADING_STOPPED)
      }
    },
    async deleteTaskById({ commit }, { taskId, projectId }) {
      commit(DELETE_TASK, { taskId, projectId })
    },
    async deleteTasksByProjectId({ commit }, projectId: number) {
      commit(DELETE_TASKS, projectId)
    },
    async createTask({ commit }, rawTask: RawTask): Promise<Task | null> {
      try {
        const task = await createTask(rawTask)
        if (!task) {
          throw new Error('Server responded with an error')
        }

        commit(CREATE_TASK, task)
        return task
      } catch (error) {
        console.error('[store:createTask]', error)
        return Promise.reject(error)
      }
    },
    async updateTask({ commit }, taskData: Task): Promise<Error> {
      try {
        const task = await updateTask(taskData.id)
        if (!task) {
          throw new Error('Oops! Updating tasks is limited by the back-end side.')
        }

        commit(UPDATE_TASK, task)
        return task
      } catch (error) {
        console.error(error)
        return Promise.reject(error)
      }
    },
    setFilters({ commit }, filters) {
      commit(SET_FILTERS, filters)
    },
    setPriority({ commit }, priority: Priority) {
      commit(SET_PRIORITY_ORDER, priority)
    },
    resetFilters({ commit }) {
      commit(RESET_FILTERS)
    },
  },
  getters: {
    isLoading: (state): boolean => state.isLoadingTasks,
    getFilters: (state) => state.filters,
    getPriorityOrder: (state) => state.priorityOrder,
    getTasksByProjectId:
      (state) =>
      (projectId: number): Task[] | [] =>
        state.tasksByProjectId[projectId] || [],
    hasTasks:
      (state, getters) =>
      (projectId: number): boolean =>
        getters.getTasksByProjectId(projectId).length > 0,
  },
}

export default tasksStore
