import type { Module } from 'vuex'
import type { RootStore } from '@/store/index'
import { getTasks } from '@/services/apiService'
import { PRIORITIES, STATUSES, type Priority, type Status } from '@/entities/task'

const SET_TASKS_DATA = 'setTasksData'
const DELETE_TASK = 'deleteTask'
const DELETE_TASKS = 'deleteTasks'
const SET_FILTERS = 'setFilters'
const SET_PRIORITY_ORDER = 'setPriorityOrder'
const RESET_FILTERS = 'resetFilters'

export const TASKS_FILTERS = Object.values(STATUSES)
export const DEFAULT_PRIORITY = PRIORITIES.HIGH
interface Task {
  id: string
  title: string
  description: string
  status: string
  priority: string
  dueDate: Date
}

export interface TasksStore {
  tasksByProjectId: Record<string, Task[]>
  filters: Status[]
  priorityOrder: Priority
}

const tasksStore: Module<TasksStore, RootStore> = {
  namespaced: true,
  state: {
    tasksByProjectId: {},
    filters: TASKS_FILTERS,
    priorityOrder: DEFAULT_PRIORITY,
  },
  mutations: {
    [SET_TASKS_DATA](state, { tasksList, projectId }) {
      state.tasksByProjectId[projectId] = tasksList
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
    async getTasksData({ commit }, projectId: number) {
      const tasksList = await getTasks(projectId)
      commit(SET_TASKS_DATA, { tasksList, projectId })
    },
    async deleteTaskById({ commit }, { taskId, projectId }) {
      commit(DELETE_TASK, { taskId, projectId })
    },
    async deleteTasksByProjectId({ commit }, projectId: number) {
      commit(DELETE_TASKS, projectId)
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
