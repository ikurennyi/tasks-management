<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'

import type { RootStore } from '@/store'
import { ROUTES } from '@/types/routes'
import { useProject } from '@/shared/composables/useProject'
import { useForm } from '@/shared/composables/useForm'
import type { Project } from '@/entities/project'

const router = useRouter()
const store = useStore<RootStore>()

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

const goBack = (newProjectId: number) =>
  isNewProject.value
    ? router.push(ROUTES.PROJECTS_LIST.path)
    : router.push({
        name: ROUTES.PROJECT_DETAILS.name,
        params: { projectId: newProjectId || projectId },
      })

const form = useForm({
  fields: project.value,
  action: createdOrUpdatedText,
})

const saveProject = async () => {
  await form.submit(async (fields: unknown) => {
    const project: Project = await store.dispatch(`projects/${action}`, fields)
    store.dispatch('projects/setCurrentProject', project)
    goBack(project.id)
  })
}
</script>

<template>
  <div>
    <v-btn class="my-4" @click="goBack">Go Back</v-btn>

    <v-row>
      <v-col>
        <v-card elevation="6" data-test="project-form">
          <v-card-title>
            <div class="d-flex justify-space-between">
              <h4>{{ projectTitle }}</h4>

              <div v-if="!isNewProject" class="d-flex ga-2">
                <v-btn variant="outlined" @click="deleteProject">Delete</v-btn>
              </div>
            </div>
          </v-card-title>

          <v-divider></v-divider>

          <v-card-text>
            <v-text-field
              v-model="form.fields.title"
              autofocus
              label="Title"
              variant="outlined"
              data-test="project-form-title"
              :disabled="form.disabled"
            ></v-text-field>

            <v-textarea
              v-model="form.fields.description"
              label="Description"
              variant="outlined"
              data-test="project-form-description"
              :disabled="form.disabled"
            ></v-textarea>

            <div class="d-flex justify-end">
              <v-btn color="success" :disabled="form.disabled" @click="saveProject">
                {{ saveButtonText }}
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
