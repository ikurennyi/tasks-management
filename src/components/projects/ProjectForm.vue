<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import { ROUTES } from '@/types/routes'

const { projectId } = useRoute().params
const isNewProject = computed(() => !projectId)
</script>

<template>
  <h1>{{ isNewProject ? 'Add new project' : 'Edit project' }}</h1>

  <v-btn v-if="isNewProject" class="my-4" @click.prevent="$router.push(ROUTES.PROJECTS_LIST.path)">
    back to the Projects List
  </v-btn>
  <v-btn
    v-else
    class="my-4"
    @click.prevent="$router.push({ name: ROUTES.PROJECT_DETAILS.name, params: { projectId } })"
  >
    back to the Project Details
  </v-btn>

  <div>ProjectForm.vue: {{ projectId }}</div>
</template>

<style scoped></style>
