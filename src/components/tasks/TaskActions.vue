<script setup lang="ts">
import { ROUTES } from '@/types/routes'
import PencilIcon from '@/components/icons/PencilIcon.vue'
import DeleteIcon from '@/components/icons/DeleteIcon.vue'
import { useTask } from '@/shared/composables/useTask'

const { id, projectId } = defineProps<{ id: number; projectId: string }>()
const { deleteTask } = useTask({ projectId, taskId: id })
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
          @click.stop="deleteTask()"
        >
        </v-btn>
      </template>
    </v-tooltip>
  </div>
</template>
