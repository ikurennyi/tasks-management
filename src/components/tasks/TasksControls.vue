<script setup lang="ts">
import { ROUTES } from '@/types/routes'
import StatusFilter from '@/components/tasks/filters/StatusFilter.vue'
import PrioritySorting from '@/components/tasks/filters/PrioritySorting.vue'

const { hasTasks = true } = defineProps<{ hasTasks?: boolean }>()
</script>

<template>
  <div class="d-flex justify-space-between align-end mb-4" data-test="tasks-controls">
    <div>
      <v-btn
        variant="elevated"
        color="primary"
        data-test="create-task"
        @click="$router.push({ name: ROUTES.TASK_NEW.name })"
        >Add New Task</v-btn
      >
    </div>
    <StatusFilter v-if="hasTasks" />
    <div v-if="hasTasks" class="d-flex align-center ga-4">
      <PrioritySorting />
    </div>
  </div>
</template>

<style scoped></style>
