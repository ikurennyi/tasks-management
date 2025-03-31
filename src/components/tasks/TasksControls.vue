<script setup lang="ts">
import { ROUTES } from '@/types/routes'
import StatusFilter from '@/components/tasks/filters/StatusFilter.vue'
import PrioritySorting from '@/components/tasks/filters/PrioritySorting.vue'
</script>

<template>
  <div class="d-flex justify-space-between align-end mb-4">
    <div>
      <v-btn
        variant="elevated"
        color="primary"
        @click="$router.push({ name: ROUTES.TASK_NEW.name })"
        >Add new Task</v-btn
      >
    </div>
    <StatusFilter />
    <div class="d-flex align-center ga-4">
      <PrioritySorting />
    </div>
  </div>
</template>

<style scoped></style>
