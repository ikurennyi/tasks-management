<script setup lang="ts">
import { computed, type Ref } from 'vue'
import { useStore } from 'vuex'

import { type RootStore } from '@/store'
import { PRIORITIES, type Priority } from '@/entities/task'
import SortIcon from '@/components/icons/SortIcon.vue'

const store = useStore<RootStore>()

const priorityModel: Ref<Priority> = computed(() => store.getters['tasks/getPriorityOrder'])

const togglePriority = () => {
  const targetPriority = priorityModel.value === PRIORITIES.HIGH ? PRIORITIES.LOW : PRIORITIES.HIGH
  store.dispatch('tasks/setPriority', targetPriority)
}
</script>

<template>
  <div>
    <v-btn :prepend-icon="SortIcon" variant="text" @click="togglePriority">Sort by Priority</v-btn>
  </div>
</template>

<style scoped></style>
