<script setup lang="ts">
import { useStore } from 'vuex'
import { computed } from 'vue'

import type { RootStore } from '@/store'
import { ROUTES } from '@/types/routes'

const store = useStore<RootStore>()
const projectsList = computed(() => store.getters['projects/list'])
</script>

<template>
  <div>
    <h1>Projects List</h1>

    <v-btn class="my-4" @click="$router.push(ROUTES.NEW_PROJECT.path)">Add New Project</v-btn>

    <ul>
      <li v-for="project of projectsList" :key="project.id">
        <RouterLink
          :to="{
            name: ROUTES.PROJECT_DETAILS.name,
            params: { projectId: project.id },
          }"
          >{{ project.title }}</RouterLink
        >
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
