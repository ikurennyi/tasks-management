<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'

import type { RootStore } from '@/store'
import { ROUTES } from '@/types/routes'
import type { Project } from '@/entities/project'
import { useProject } from '@/shared/composables/useProject'

const router = useRouter()
const store = useStore<RootStore>()

const { projectId } = useRoute().params
const { project, deleteProject, isNewProject, saveButtonText, projectTitle } = useProject(projectId)

// Form
const formProject = ref({ ...project.value })
const disabled = ref<boolean>(false)

const resetForm = () => {
  formProject.value.title = ''
  formProject.value.description = ''
}

const goBack = (newProjectId: number) =>
  isNewProject.value
    ? router.push(ROUTES.PROJECTS_LIST.path)
    : router.push({
        name: ROUTES.PROJECT_DETAILS.name,
        params: { projectId: newProjectId || projectId },
      })

const saveProject = async () => {
  if (!formProject.value.title.trim()) {
    alert('You have to specify at least Title')
    return
  }
  disabled.value = true

  try {
    let newProject: Project
    if (isNewProject.value) {
      newProject = await store.dispatch('projects/createProject', formProject.value)
    } else {
      newProject = await store.dispatch('projects/updateProject', formProject.value)
    }
    resetForm()
    // TODO: ALERT show alert
    alert(`Project ${newProject.title} was created.`)
    store.dispatch('projects/setCurrentProject', newProject)
    setTimeout(() => goBack(newProject.id), 700)
  } catch (error) {
    // TODO: ALERT show alert
    console.error('[Error]: Creating project failed with error ', error)
  } finally {
    disabled.value = false
  }
}
</script>

<template>
  <div>
    <v-btn class="my-4" @click="goBack">Go back</v-btn>

    <v-row>
      <v-col>
        <v-card elevation="6">
          <v-card-title>
            <div class="d-flex justify-space-between">
              <span>{{ projectTitle }}</span>

              <div v-if="!isNewProject" class="d-flex ga-2">
                <v-btn variant="outlined" @click="deleteProject">Delete</v-btn>
              </div>
            </div>
          </v-card-title>

          <v-divider></v-divider>

          <v-card-text>
            <v-text-field
              v-model="formProject.title"
              autofocus
              label="Title"
              variant="outlined"
              :disabled
            ></v-text-field>

            <v-textarea
              v-model="formProject.description"
              label="Description"
              variant="outlined"
              :disabled
            ></v-textarea>

            <div class="d-flex justify-end">
              <v-btn color="success" :disabled @click="saveProject">{{ saveButtonText }}</v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
