<script setup lang="ts">
import { computed } from 'vue'

import { PRIORITIES, type Priority } from '@/entities/task'

interface Props {
  priority: Priority
}
const { priority } = defineProps<Props>()

const color = computed(() => {
  switch (priority) {
    case PRIORITIES.LOW:
      return 'green'
    case PRIORITIES.MEDIUM:
      return 'orange'
    default:
      return 'red'
  }
})
</script>

<template>
  <v-chip size="small" class="px-0 text-uppercase" variant="text" :color> {{ priority }} </v-chip>
</template>

<style scoped></style>
