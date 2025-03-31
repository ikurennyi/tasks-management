import type { Module } from 'vuex'

import type { RootStore } from '../index'

import { type Project } from '@/entities/project'
import { getProjectById, getProjects } from '@/services/apiService'

export interface ProjectsStore {
  currentProject: Project | null
  projectsList: Project[]
}

const SET_CURRENT_PROJECT = 'setCurrentProject'
const SET_PROJECTS_DATA = 'setProjectsData'
const DELETE_PROJECT = 'deleteProject'

const projectsStore: Module<ProjectsStore, RootStore> = {
  namespaced: true,
  state: {
    currentProject: null,
    projectsList: [],
  },
  mutations: {
    [SET_CURRENT_PROJECT](state, project: Project): void {
      state.currentProject = project
    },
    [SET_PROJECTS_DATA](state, projectsData) {
      state.projectsList = projectsData
    },
    [DELETE_PROJECT](state, projectId: number): void {
      state.projectsList = state.projectsList.filter((p) => p.id !== projectId)
    },
  },
  actions: {
    setCurrentProject({ commit }, project: Project): void {
      commit(SET_CURRENT_PROJECT, project)
    },
    async setProjectsData({ commit }) {
      const projectsList = await getProjects()
      commit(SET_PROJECTS_DATA, projectsList)
    },
    findBydId({ state }, projectId: number): Project | null {
      return state.projectsList.filter((p) => p.id === projectId)[0] || null
    },
    async getById({ state }, projectId: number): Promise<void> {
      const project = await getProjectById(projectId)

      if (project) {
        state.projectsList.push(project)
        state.currentProject = project
      }
    },
    async deleteProject({ commit, dispatch }, projectId): Promise<void> {
      await dispatch('tasks/deleteTasksByProjectId', projectId, { root: true })
      commit(DELETE_PROJECT, projectId)
    },
  },
  getters: {
    list: (state): Project[] | [] => state.projectsList,
    current: (state): Project | null => state.currentProject,
  },
}

export default projectsStore
