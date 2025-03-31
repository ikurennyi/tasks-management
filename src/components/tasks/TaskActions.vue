<script setup lang="ts">
import { useStore } from 'vuex'
import type { RootStore } from '@/store'

import { ROUTES } from '@/types/routes'
import PencilIcon from '@/components/icons/PencilIcon.vue'
import DeleteIcon from '@/components/icons/DeleteIcon.vue'

const { id, projectId } = defineProps<{ id: number; projectId: string }>()
const store = useStore<RootStore>()

const deleteTask = (taskId: string) =>
  store.dispatch('tasks/deleteTaskById', { taskId: +taskId, projectId: +projectId })
</script>

<template>
  <div>
    <v-tooltip text="Edit Task" location="top">
      <template #activator="{ props }">
        <v-btn
          v-bind="props"
          :icon="PencilIcon"
          variant="flat"
          size="small"
          @click.stop="$router.push({ name: ROUTES.EDIT_TASK.name, params: { taskId: id } })"
        >
        </v-btn>
      </template>
    </v-tooltip>
    <v-tooltip text="Delete Task" location="top">
      <template #activator="{ props }">
        <v-btn
          v-bind="props"
          :icon="DeleteIcon"
          variant="flat"
          size="small"
          @click.stop="deleteTask(id)"
        >
        </v-btn>
      </template>
    </v-tooltip>
  </div>
</template>
