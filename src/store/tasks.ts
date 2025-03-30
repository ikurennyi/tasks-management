import type { Module } from 'vuex'
import type { RootStore } from '.'

interface Task {
  id: string
  title: string
  description: string
  status: string
  priority: string
  dueDate: Date
}

export interface TasksStore {
  tasksList: Task[]
}

// TODO: [delete]: for the testing purposes only
const DAYS_COUNT = 2
const tasks = [
  {
    id: '1',
    title: 'First task',
    description: 'Description of the Task 1',
    status: 'pending',
    priority: 'low',
    dueDate: new Date(new Date().getTime() + DAYS_COUNT * 24 * 60 * 60 * 1000),
  },
  {
    id: '2',
    title: 'Second task',
    description: 'Description of the Task 2',
    status: 'in-progress',
    priority: 'medium',
    dueDate: new Date(new Date().getTime() + (DAYS_COUNT + 1) * 24 * 60 * 60 * 1000),
  },
]
const tasksStore: Module<TasksStore, RootStore> = {
  namespaced: true,
  state: {
    tasksList: [...tasks],
  },
  mutations: {},
  actions: {},
  getters: {
    list: (state) => state.tasksList,
  },
}

export default tasksStore
