<script setup lang="ts">
import { useStore } from 'vuex'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

import type { RootStore } from '@/store'
import { ROUTES } from '@/types/routes'
import type { Project } from '@/entities/project'

const router = useRouter()
const store = useStore<RootStore>()
const projectsList = computed(() => store.getters['projects/list'])
const hasProjects = computed(() => projectsList.value.length !== 0)
const isLoading = computed(() => store.getters['projects/isLoading'])

const createNewProject = () => router.push(ROUTES.NEW_PROJECT.path)
const processProject = (project: Project) => {
  store.dispatch('projects/setCurrentProject', project)
  router.push({ name: ROUTES.PROJECT_DETAILS.name, params: { projectId: project.id } })
}

const fetchProjects = async () => await store.dispatch('projects/setProjectsData')
</script>

<template>
  <div>
    <div class="d-flex align-center justify-space-between">
      <h2>All Projects</h2>

      <div class="d-flex ga-3">
        <v-btn
          v-if="!hasProjects"
          variant="tonal"
          color="primary"
          data-test="populate-projects"
          @click="fetchProjects"
        >
          Populate Projects
        </v-btn>
        <v-btn variant="elevated" color="primary" @click="createNewProject">Add New Project</v-btn>
      </div>
    </div>

    <AppLoading v-if="isLoading" />

    <v-row v-else-if="hasProjects" class="mt-2" data-test="projects-list">
      <v-col v-for="(project, index) in projectsList" :key="index" cols="12" md="4">
        <v-card
          :key="project.id"
          :title="project.title"
          color="primary"
          variant="tonal"
          link
          @click="processProject(project)"
        >
        </v-card>
      </v-col>
    </v-row>

    <NoEntries v-else item="projects" button-text="POPULATE PROJECTS" />
  </div>
</template>

<style scoped></style>
