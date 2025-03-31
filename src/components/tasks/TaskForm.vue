<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import { ROUTES } from '@/types/routes'

const { taskId, projectId } = useRoute().params
const isNewTask = computed(() => !taskId)
</script>

<template>
  <div>
    <h1>{{ isNewTask ? 'Add New Task' : `Edit Task ${taskId}` }}</h1>

    <v-btn
      class="my-4"
      @click.prevent="$router.push({ name: ROUTES.PROJECT_DETAILS.name, params: { projectId } })"
    >
      go back
    </v-btn>
  </div>
</template>

<style scoped></style>
