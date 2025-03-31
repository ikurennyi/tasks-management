import type { Module } from 'vuex'

import type { RootStore } from '../index'

import { type Project } from '@/entities/project'
import { getProjectById, getProjects } from '@/services/apiService'

export interface ProjectsStore {
  isLoadingProject: boolean
  currentProject: Project | null
  projectsList: Project[]
}

const LOADING_STARTED = 'loadingStarted'
const LOADING_STOPPED = 'loadingStopped'
const SET_CURRENT_PROJECT = 'setCurrentProject'
const SET_PROJECTS_DATA = 'setProjectsData'
const DELETE_PROJECT = 'deleteProject'

const projectsStore: Module<ProjectsStore, RootStore> = {
  namespaced: true,
  state: {
    isLoadingProject: false,
    currentProject: null,
    projectsList: [],
  },
  mutations: {
    [LOADING_STARTED](state) {
      state.isLoadingProject = true
    },
    [LOADING_STOPPED](state) {
      state.isLoadingProject = false
    },
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
    addIsLoading({ commit }) {
      commit(LOADING_STARTED)
    },
    removeIsLoading({ commit }) {
      commit(LOADING_STOPPED)
    },
    setCurrentProject({ commit }, project: Project): void {
      commit(SET_CURRENT_PROJECT, project)
    },
    async setProjectsData({ commit }) {
      commit(LOADING_STARTED)
      try {
        const projectsList = await getProjects()
        commit(SET_PROJECTS_DATA, projectsList)
      } catch (error) {
        console.error('[Error]: fetching projects: ', error)
      } finally {
        commit(LOADING_STOPPED)
      }
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
    isLoading: (state): boolean => state.isLoadingProject,
    list: (state): Project[] | [] => state.projectsList,
    current: (state): Project | null => state.currentProject,
  },
}

export default projectsStore
