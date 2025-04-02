<script setup lang="ts">
import { type Ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

import { ROUTES } from '@/types/routes'
import type { RootStore } from '@/store'
import type { Project } from '@/entities/project'
import TasksList from '@/components/tasks/TasksList.vue'
import { useProject } from '@/shared/composables/useProject'

const store = useStore<RootStore>()

const route = useRoute()

const projectId = route.params.projectId as string
const project: Ref<Project | null> = computed(() => store.getters['projects/current'])

const { deleteProject } = useProject(projectId)

const isLoading = computed(() => store.getters['projects/isLoading'])
onMounted(async () => {
  if (!project.value) {
    await store.dispatch('projects/getById', projectId)
  }
})
</script>

<template>
  <div>
    <div class="d-flex align-top justify-space-between mb-6" data-test="project-main">
      <h2>{{ project?.title }}</h2>

      <div class="d-flex ga-4 pt-2">
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

    <div v-if="isLoading" class="d-flex align-center flex-column">
      <h2 class="mb-6">Loading project...</h2>
    </div>

    <TasksList :project-id />
  </div>

  <RouterView />
</template>
