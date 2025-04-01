<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'

import type { RootStore } from '@/store'
import { ROUTES } from '@/types/routes'
import { useProject } from '@/shared/composables/useProject'
import { useSnack } from '@/shared/composables/useSnack'

const router = useRouter()
const store = useStore<RootStore>()
const { showSnack } = useSnack(store)

const { projectId } = useRoute().params
const {
  action,
  createdOrUpdatedText,
  project,
  deleteProject,
  isNewProject,
  saveButtonText,
  projectTitle,
} = useProject(projectId)

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
  // NOTE: just a pure validation
  if (!formProject.value.title.trim()) {
    alert('You have to specify at least Title')
    return
  }
  disabled.value = true

  // TODO: can it be refactored? composable?
  try {
    const newProject = await store.dispatch(`projects/${action}`, formProject.value)
    resetForm()
    showSnack({ text: `Project ${newProject.title} was ${createdOrUpdatedText}.` })
    store.dispatch('projects/setCurrentProject', newProject)
    goBack(newProject.id)
  } catch (error: unknown) {
    const text = error instanceof Error ? error.message : String(error)
    showSnack({ text, type: 'error' })
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
