import type { Module } from 'vuex'

import type { RootStore } from '../index'

import { type Project, type RawProject } from '@/entities/project'
import { createProject, getProjectById, getProjects, updateProject } from '@/services/apiProjects'

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
const CREATE_PROJECT = 'saveProject'
const UPDATE_PROJECT = 'updateProject'

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
    [CREATE_PROJECT](state, project) {
      state.projectsList.push(project)
    },
    [UPDATE_PROJECT](state, updatedProject: Project): void {
      const index = state.projectsList.findIndex((p: Project) => p.id === updatedProject.id)
      if (index >= 0) {
        state.projectsList[index] = updatedProject
      } else {
        state.projectsList.push(updatedProject)
      }
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
    async createProject({ commit }, rawProject: RawProject): Promise<Project | Error> {
      try {
        const project = await createProject(rawProject)
        if (!project) {
          throw new Error('Server responded with an error')
        }

        commit(CREATE_PROJECT, project)
        return project
      } catch (error) {
        console.error('[store:createProject]', error)
        return Promise.reject(error)
      }
    },
    async updateProject({ commit }, updatedProject): Promise<Project | Error> {
      try {
        const project = await updateProject(updatedProject)
        if (!project) {
          throw new Error('Oops! Updating projects is limited by the back-end side.')
        }
        commit(UPDATE_PROJECT, project)
        return project
      } catch (error) {
        console.error(error)
        return Promise.reject(error)
      }
    },
  },
  getters: {
    isLoading: (state): boolean => state.isLoadingProject,
    list: (state): Project[] | [] => state.projectsList,
    current: (state): Project | null => state.currentProject,
    findProjectById: (state) => (projectId: number) =>
      state.projectsList.find((p: Project) => p.id === projectId),
  },
}

export default projectsStore
