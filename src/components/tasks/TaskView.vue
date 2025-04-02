<script setup lang="ts">
import { computed, onMounted, type Ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'

import { ROUTES } from '@/types/routes'
import type { RootStore } from '@/store'
import type { Task } from '@/entities/task'
import type { Project } from '@/entities/project'
import TaskPriority from './TaskPriority.vue'
import TaskStatus from './TaskStatus.vue'
import { formatDate } from '@/shared/lib/ui'
import { useSnack } from '@/shared/composables/useSnack'

const store = useStore<RootStore>()
const { showSnack } = useSnack(store)

const { taskId, projectId } = useRoute().params
const router = useRouter()

const project: Ref<Project | null> = computed(() => store.getters['projects/current'])

const tasksList: Ref<Task[]> = computed(() => store.getters['tasks/getTasksByProjectId'](projectId))
const task: Ref<Task | null> = computed(
  () => tasksList.value.find((task: Task) => task.id === +taskId) || null,
)

onMounted(async () => {
  if (!project.value) {
    await store.dispatch('projects/getById', projectId)
  }
})

const goBack = () => router.push({ name: ROUTES.PROJECT_DETAILS.name, params: { projectId } })

const editTask = () => router.push({ name: ROUTES.EDIT_PROJECT.name, params: { projectId } })

const deleteTask = () => {
  store.dispatch('tasks/deleteTaskById', { taskId: +taskId, projectId: +projectId })
  router.push({ name: ROUTES.PROJECT_DETAILS.name, params: { projectId } })
  showSnack({ text: `Task #${taskId} was removed` })
}
</script>

<template>
  <div>
    <v-btn class="my-4" @click="goBack">go back</v-btn>

    <AppLoading v-if="!task" />

    <v-row v-else>
      <v-col cols="6" data-test="task-info">
        <v-card>
          <v-card-title>
            <div class="d-flex justify-space-between">
              <span>Task ID: {{ task.id }}</span>
              <div class="d-flex ga-2">
                <v-btn variant="outlined" color="primary" @click="editTask">Edit</v-btn>
                <v-btn variant="outlined" @click="deleteTask">Delete</v-btn>
              </div>
            </div>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <h2>{{ task.title }}</h2>
            <p>{{ task.description }}</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="6" data-test="task-details">
        <v-card>
          <v-card-title>
            <span>Task Details</span>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <div class="d-flex justify-space-between py-4">
              <div>Status</div>
              <TaskStatus :status="task.status" />
            </div>

            <div class="d-flex justify-space-between py-4">
              <div>Priority</div>
              <TaskPriority :priority="task.priority" />
            </div>

            <div class="d-flex justify-space-between py-4">
              <div>Due Date</div>
              <div>{{ formatDate(task.dueDate) }}</div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
