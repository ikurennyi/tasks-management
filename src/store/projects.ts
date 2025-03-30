import type { Module } from 'vuex'
import type { RootStore } from './index'

export interface Project {
  id: string
  title: string
}

export interface ProjectsStore {
  projectsList: Project[]
}

// TODO: [delete]: for the testing purposes only
const tempProjectsList = [
  { id: '1', title: 'First project' },
  { id: '2', title: 'Second project' },
]

const projectsStore: Module<ProjectsStore, RootStore> = {
  namespaced: true,
  state: {
    projectsList: [...tempProjectsList],
  },
  mutations: {},
  actions: {},
  getters: {
    list: (state) => state.projectsList,
  },
}

export default projectsStore
