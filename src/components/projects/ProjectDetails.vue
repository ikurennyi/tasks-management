<script setup lang="ts">
import { type Ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'

import { ROUTES } from '@/types/routes'
import type { RootStore } from '@/store'
import type { Project } from '@/entities/project'
import TasksList from '@/components/tasks/TasksList.vue'

const store = useStore<RootStore>()

const router = useRouter()
const route = useRoute()

const projectId = route.params.projectId as string
const project: Ref<Project | null> = computed(() => store.getters['projects/current'])

const deleteProject = async () => {
  const confirmationText =
    'This action will remove project and all corresponding tasks. Are you sure you want to delete it?'
  if (window.confirm(confirmationText)) {
    await store.dispatch('projects/deleteProject', +projectId)
    router.push({ name: ROUTES.PROJECTS_LIST.name })
  }
}

onMounted(async () => {
  if (!project.value) {
    await store.dispatch('projects/getById', projectId)
  }
})
</script>

<template>
  <div>
    <div class="d-flex align-top justify-space-between mb-6">
      <h2>{{ project?.title }}</h2>

      <div class="d-flex ga-4 pt-2">
        <v-btn
          v-if="false"
          variant="tonal"
          color="secondary"
          @click.prevent="$router.push(ROUTES.PROJECTS_LIST.path)"
        >
          back to the Projects List
        </v-btn>
        <v-btn
          variant="outlined"
          color="primary"
          @click="$router.push({ name: ROUTES.EDIT_PROJECT.name, params: { projectId } })"
        >
          Edit
        </v-btn>
        <v-btn variant="outlined" @click="deleteProject">Delete Project</v-btn>
      </div>
    </div>

    <div v-if="!project" class="d-flex align-center flex-column">
      <h2 class="mb-6">Loading project...</h2>
    </div>

    <TasksList :project-id />
  </div>

  <RouterView />
</template>
