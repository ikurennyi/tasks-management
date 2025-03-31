<script setup lang="ts">
import { computed } from 'vue'

import { STATUSES, type Status } from '@/entities/task'

interface Props {
  status: Status
}
const { status } = defineProps<Props>()

const color = computed(() => {
  switch (status) {
    case STATUSES.PENDING:
      return 'primary'
    case STATUSES.IN_PROGRESS:
      return 'orange'
    default:
      return 'green'
  }
})
</script>

<template>
  <v-chip :color> {{ status }} </v-chip>
</template>

<style scoped></style>
