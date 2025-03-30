<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

import { ROUTES } from '@/types/routes'
import type { RootStore } from '@/store'
import { computed } from 'vue'

const { projectId } = useRoute().params
const store = useStore<RootStore>()
const tasksList = computed(() => store.getters['tasks/list'])
</script>

<template>
  <div>
    <h1>Project Details</h1>

    <v-btn class="my-4" @click.prevent="$router.push(ROUTES.PROJECTS_LIST.path)">
      back to the Projects List
    </v-btn>

    <h3>Project ID: {{ $route.params.projectId }}</h3>

    <v-btn
      class="my-4"
      @click="$router.push({ name: ROUTES.EDIT_PROJECT.name, params: { projectId } })"
    >
      Edit Project
    </v-btn>

    <h2 class="my-4">Tasks list:</h2>

    <ul>
      <li v-for="(task, index) in tasksList" :key="index" class="my-4">
        <h3>{{ task.title }}</h3>
        <div><strong>Priority:</strong> {{ task.priority }}</div>
        <div><strong>Status:</strong> {{ task.status }}</div>
        <v-btn
          variant="outlined"
          @click="$router.push({ name: ROUTES.EDIT_TASK.name, params: { taskId: task.id } })"
          >Edit Task</v-btn
        >
        <br />
      </li>
    </ul>
    <v-btn class="mt-4" @click="$router.push({ name: ROUTES.TASK_NEW.name })">Add new Task</v-btn>
  </div>

  <RouterView />
</template>

<style scoped></style>
