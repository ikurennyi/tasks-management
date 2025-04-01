import { beforeAll, describe, expect, test, vi } from 'vitest'

import projectsStore from '@/store/modules/projects.ts'

import { project } from '../helpers/mocks/projects'
import { createProjectsStore } from '../helpers/store-factory'

import { getProjects, getProjectById } from '@/services/apiProjects'
vi.mock('@/services/apiProjects', { spy: true })

describe('Projects store', () => {
  describe('initial state', () => {
    let state

    beforeAll(() => {
      state = projectsStore.state
    })

    test('has no currentProject', () => {
      expect(state.currentProject).toBe(null)
    })

    test('has empty array of projectsList', () => {
      expect(state.projectsList).toEqual([])
    })
  })

  describe('getters', () => {
    test('current', () => {
      const state = { currentProject: project }
      const store = createProjectsStore(state)

      const current = store.getters['projects/current']
      expect(current).toEqual(project)
    })

    test('list', () => {
      const state = { projectsList: [project] }
      const store = createProjectsStore(state)

      const list = store.getters['projects/list']
      expect(list).toEqual([project])
    })

    test('findProjectById with existing project', async () => {
      const state = { projectsList: [project] }
      const store = createProjectsStore(state)

      const res = await store.getters['projects/findProjectById'](project.id)
      expect(res.id).toEqual(project.id)
    })

    test('findProjectById without projects', async () => {
      const state = { projectsList: [] }
      const store = createProjectsStore(state)

      const res = await store.getters['projects/findProjectById'](project.id)
      expect(res).toBeUndefined()
    })
  })

  describe('actions', () => {
    test('isLoadingProject', () => {
      const store = createProjectsStore({})
      store.dispatch('projects/addIsLoading')

      expect(store.state.projects.isLoadingProject).toBe(true)

      store.dispatch('projects/removeIsLoading')
      expect(store.state.projects.isLoadingProject).toBe(false)
    })

    test('setCurrentProject', () => {
      const store = createProjectsStore({})

      store.dispatch('projects/setCurrentProject', project)
      expect(store.state.projects.currentProject).toEqual(project)
    })

    test('setProjectsData', async () => {
      const store = createProjectsStore({})
      vi.mocked(getProjects).mockResolvedValue([project, project])
      await store.dispatch('projects/setProjectsData')

      expect(getProjects).toHaveResolvedTimes(1)
      const { projectsList } = store.state.projects
      expect(projectsList).toHaveLength(2)
      expect(projectsList[0]).toMatchObject(project)
    })

    test('getById', async () => {
      const state = { projectsList: [] }
      const store = createProjectsStore(state)
      vi.mocked(getProjectById).mockResolvedValue(project)
      await store.dispatch('projects/getById')

      const { projectsList } = store.state.projects
      expect(projectsList).toHaveLength(1)
      expect(projectsList[0]).toMatchObject(project)
    })

    test('deleteProject', async () => {
      const state = { projectsList: [project] }
      const store = createProjectsStore(state)

      await store.dispatch('projects/deleteProject', project.id)
      expect(store.state.projects.projectsList).toHaveLength(0)
    })
  })
})
