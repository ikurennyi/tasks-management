import { createStore } from 'vuex'
import projectsStore from '@/store/modules/projects.ts'
import tasksStore from '@/store/modules/tasks.ts'

const createVuexStore = ({
  projects: { projectsStore, state: projectsState } = {},
  tasks: { tasksStore, state: tasksState } = {},
}) =>
  createStore({
    modules: {
      projects: {
        ...projectsStore,
        namespaced: true,
        state: { ...projectsState },
      },
      tasks: {
        ...tasksStore,
        namespaced: true,
        state: { ...tasksState },
      },
    },
  })

export const createProjectsStore = (state) =>
  createVuexStore({ projects: { projectsStore: projectsStore, state } })

export const createTasksStore = (state) =>
  createVuexStore({ tasks: { tasksStore: tasksStore, state } })
