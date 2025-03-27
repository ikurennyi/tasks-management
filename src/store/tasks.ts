import type { Module } from 'vuex'
import type { RootStore } from '.'

interface Task {
  id: string
  title: string
  description: string
  dueDate: Date
}

export interface TasksStore {
  tasksList: Task[]
}

const tasksStore: Module<TasksStore, RootStore> = {
  namespaced: true,
  state: {
    tasksList: [],
  },
  mutations: {},
  actions: {},
  getters: {},
}

export default tasksStore
