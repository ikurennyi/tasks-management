<script setup lang="ts">
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

import type { RootStore } from '@/store'
import { ROUTES } from '@/types/routes'
import type { Project } from '@/entities/project'

const router = useRouter()
const store = useStore<RootStore>()
const projectsList = computed(() => store.getters['projects/list'])
const hasProjects = computed(() => projectsList.value.length !== 0)

onMounted(async () => {
  if (!hasProjects.value) {
    await store.dispatch('projects/setProjectsData')
  }
})

const createNewProject = () => router.push(ROUTES.NEW_PROJECT.path)
const processProject = (project: Project) => {
  store.dispatch('projects/setCurrentProject', project)
  router.push({ name: ROUTES.PROJECT_DETAILS.name, params: { projectId: project.id } })
}
</script>

<template>
  <div>
    <div class="d-flex align-center justify-space-between">
      <h2>All Projects</h2>
      <v-btn variant="elevated" color="primary" @click="createNewProject">Add New Project</v-btn>
    </div>

    <div v-if="!hasProjects" class="d-flex align-center flex-column">
      <h2 class="mb-6">Loading...</h2>
      <v-progress-linear :height="10" rounded color="primary" indeterminate></v-progress-linear>
    </div>

    <v-row v-else class="mt-2">
      <v-col v-for="(project, index) in projectsList" :key="index" cols="12" md="4">
        <v-card
          :key="project.id"
          :title="project.title"
          color="primary"
          variant="tonal"
          link
          @click="processProject(project)"
        >
          <!-- :text="`Owner ID: ${project.userId}`" -->
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped></style>
