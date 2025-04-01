import store from '@/store'
import { useSnack } from '@/shared/composables/useSnack'
import { ROUTES } from '@/types/routes'
import type { RouteLocationNormalized } from 'vue-router'

const { showSnack } = useSnack(store)

export const noProject = (projectId: string): boolean => {
  return !store.getters['projects/findProjectById'](+projectId)
}

function projectsGuard(to: RouteLocationNormalized) {
  if (to.name === 'projectDetails' && noProject(to.params.projectId as string)) {
    showSnack({
      text: `[GUARD] No project with ID "${to.params.projectId}". Redirected to Projects List`,
    })
    return { name: ROUTES.PROJECTS_LIST.name }
  }
}

export default projectsGuard
