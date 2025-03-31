<script setup lang="ts">
import { computed, onMounted, onUnmounted, type Ref } from 'vue'
import { useStore } from 'vuex'

import type { RootStore } from '@/store'
import { PRIORITIES, PRIORITY_ORDER, type Priority, type Task } from '@/entities/task'
import TaskStatus from '@/components/tasks/TaskStatus.vue'
import TaskActions from '@/components/tasks/TaskActions.vue'
import TaskPriority from '@/components/tasks/TaskPriority.vue'
import TasksControls from '@/components/tasks/TasksControls.vue'
import { formatDate } from '@/shared/lib/ui'

const store = useStore<RootStore>()

interface Props {
  projectId: string
}

const { projectId } = defineProps<Props>()

const statusFilter = computed(() => store.getters['tasks/getFilters'])
const priorityModel: Ref<Priority> = computed(() => store.getters['tasks/getPriorityOrder'])

const hasTasks = computed(() => store.getters['tasks/hasTasks'](projectId))
const tasksList: Ref<Task[]> = computed(() => store.getters['tasks/getTasksByProjectId'](projectId))

const filteredTasks = computed(() =>
  tasksList.value.filter((t) => statusFilter.value.includes(t.status)),
)

function sortTasks(): Task[] {
  return [...filteredTasks.value].sort((a, b) => {
    return priorityModel.value === PRIORITIES.LOW
      ? PRIORITY_ORDER[a.priority] - PRIORITY_ORDER[b.priority]
      : PRIORITY_ORDER[b.priority] - PRIORITY_ORDER[a.priority]
  })
}

const sortedTasks: Ref<Task[]> = computed(() => sortTasks())

const showTask = () => {
  alert('show task')
}

onMounted(() => {
  if (tasksList.value.length === 0) {
    store.dispatch('tasks/getTasksData', projectId)
  }
})

onUnmounted(() => store.dispatch('tasks/resetFilters'))
</script>

<template>
  <div v-if="!hasTasks" class="d-flex align-center flex-column">
    <h2 class="mb-6">Loading tasks...</h2>
    <v-progress-linear :height="10" rounded color="primary" indeterminate></v-progress-linear>
  </div>

  <div v-else>
    <TasksControls />

    <v-table density="default" hover>
      <thead>
        <tr>
          <th class="text-left">ID</th>
          <th class="text-left">Title</th>
          <th class="text-left">Status</th>
          <th class="text-left">Priority</th>
          <th class="text-left">Due Date</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="{ id, title, status, priority, dueDate } in sortedTasks"
          :key="id"
          v-ripple
          cursor-pointer
          @click="showTask"
        >
          <td>{{ id }}</td>
          <td>{{ title }}</td>
          <td><TaskStatus :status /></td>
          <td><TaskPriority :priority /></td>
          <td>{{ formatDate(dueDate) }}</td>
          <td class="text-right"><TaskActions :id :project-id /></td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<style scoped></style>
