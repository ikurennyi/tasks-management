<script setup lang="ts">
import { ref, watch, type Ref } from 'vue'
import { useStore } from 'vuex'

import type { RootStore } from '@/store'
import { STATUSES, type Status } from '@/entities/task'

const store = useStore<RootStore>()

const statusFilter: Ref<Status[]> = ref(store.getters['tasks/getFilters'])
watch(statusFilter, () => {
  store.dispatch('tasks/setFilters', statusFilter.value)
})
</script>

<template>
  <div>
    <v-btn-toggle
      v-model="statusFilter"
      density="compact"
      variant="plain"
      divided
      color="primary"
      multiple
    >
      <v-btn v-for="status in STATUSES" :key="status" :value="status" class="text-body-2">{{
        status
      }}</v-btn>
    </v-btn-toggle>
  </div>
</template>

<style scoped></style>
