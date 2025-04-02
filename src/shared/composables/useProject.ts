import type { Project } from '@/entities/project'
import router from '@/router'
import store from '@/store'
import { ROUTES } from '@/types/routes'
import { computed, type Ref } from 'vue'
import { useSnack } from './useSnack'

const { showSnack } = useSnack(store)
export function useProject(projectId: string | string[]) {
  const deleteProject = async () => {
    const confirmationText =
      'This action will remove project and all corresponding tasks. Are you sure you want to delete it?'
    if (window.confirm(confirmationText)) {
      await store.dispatch('projects/deleteProject', +projectId)
      showSnack({ text: 'Project was successfully removed.' })
      router.push({ name: ROUTES.PROJECTS_LIST.name })
    }
  }

  const tempProject: Project = {
    id: +projectId,
    title: '',
    description: '',
    userId: 1,
  }

  const project: Ref<Project> = computed(
    () => store.getters['projects/findProjectById'](+projectId) || tempProject,
  )

  const isNewProject = computed(() => !project.value.id)

  const action = isNewProject.value ? 'createProject' : 'updateProject'
  const createdOrUpdatedText = isNewProject.value ? 'created' : 'updated'
  const saveButtonText = isNewProject.value ? 'Create' : 'Update'
  const projectTitle = isNewProject.value ? 'New Project' : `Project ID: ${project.value.id}`

  return {
    action,
    createdOrUpdatedText,
    deleteProject,
    project,
    isNewProject,
    saveButtonText,
    projectTitle,
  }
}
