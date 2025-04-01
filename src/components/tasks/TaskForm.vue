<script setup lang="ts">
import { computed, ref, type Ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'

import type { RootStore } from '@/store'
import { ROUTES } from '@/types/routes'
import { PRIORITIES, STATUSES, type Task } from '@/entities/task'
import { useTask } from '@/shared/composables/useTask'
import { useSnack } from '@/shared/composables/useSnack'

const router = useRouter()
const store = useStore<RootStore>()
const { showSnack } = useSnack(store)

const { taskId, projectId } = useRoute().params
const { action, createdOrUpdatedText, isNewTask, task, taskTitle, saveButtonText, deleteTask } =
  useTask({
    projectId,
    taskId,
  })

// FORM
const taskForm: Ref<Task> = ref({ ...task.value })
const disabled = ref<boolean>(false)

const resetForm = () => {
  taskForm.value.title = ''
  taskForm.value.status = STATUSES.PENDING
  taskForm.value.priority = PRIORITIES.LOW
  taskForm.value.dueDate = new Date()
  taskForm.value.description = ''
}

const statusColor = computed(() => {
  switch (taskForm.value.status) {
    case STATUSES.PENDING:
      return 'primary'
    case STATUSES.IN_PROGRESS:
      return 'orange'
    default:
      return 'green'
  }
})

const priorityColor = computed(() => {
  switch (taskForm.value.priority) {
    case PRIORITIES.LOW:
      return 'green'
    case PRIORITIES.MEDIUM:
      return 'orange'
    default:
      return 'red'
  }
})

const goBack = () => router.push({ name: ROUTES.PROJECT_DETAILS.name, params: { projectId } })

const processDelete = () => {
  deleteTask()
  goBack()
}

const saveTask = async () => {
  // NOTE: just a pure validation
  if (!taskForm.value.title.trim()) {
    alert('You have to specify at least Title')
    return
  }
  disabled.value = true

  try {
    const newTask = await store.dispatch(`tasks/${action}`, taskForm.value)
    resetForm()
    showSnack({ text: `Task ${newTask.title} was ${createdOrUpdatedText}.` })
    goBack()
  } catch (error: unknown) {
    const text = error instanceof Error ? error.message : String(error)
    showSnack({ text, type: 'error' })
  } finally {
    disabled.value = false
  }
}
</script>

<template>
  <div>
    <v-btn class="my-4" @click="goBack">Go back</v-btn>

    <v-row>
      <v-col>
        <v-card elevation="6">
          <v-card-title>
            <div class="d-flex justify-space-between">
              <span>{{ taskTitle }}</span>
              <div v-if="!isNewTask" class="d-flex ga-2">
                <v-btn variant="outlined" @click="processDelete">Delete</v-btn>
              </div>
            </div>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <div>
              <v-text-field
                v-model="taskForm.title"
                autofocus
                label="Title"
                variant="outlined"
                :disabled
              ></v-text-field>
            </div>

            <div class="d-flex justify-space-between align-center py-4">
              <div class="">Status</div>
              <div>
                <v-btn-toggle
                  v-model="taskForm.status"
                  :disabled
                  color=""
                  group
                  mandatory
                  density="compact"
                >
                  <v-btn
                    v-for="s in STATUSES"
                    :key="s"
                    :color="statusColor"
                    :value="s"
                    class="text-body-2"
                  >
                    {{ s }}
                  </v-btn>
                </v-btn-toggle>
              </div>
            </div>

            <div class="d-flex justify-space-between py-4">
              <div>Priority</div>
              <div>
                <v-btn-toggle
                  v-model="taskForm.priority"
                  color=""
                  group
                  mandatory
                  density="compact"
                  :disabled
                >
                  <v-btn
                    v-for="p in PRIORITIES"
                    :key="p"
                    :color="priorityColor"
                    :value="p"
                    class="text-body-2"
                  >
                    {{ p }}
                  </v-btn>
                </v-btn-toggle>
              </div>
            </div>

            <div class="d-flex justify-space-between align-center py-4">
              <v-date-input
                v-model="taskForm.dueDate"
                prepend-icon=""
                label="Due Date"
                variant="outlined"
                :disabled
              ></v-date-input>
            </div>

            <v-textarea
              v-model="taskForm.description"
              label="Description"
              variant="outlined"
              :disabled
            ></v-textarea>

            <div class="d-flex justify-end">
              <v-btn :disabled color="success" @click="saveTask">{{ saveButtonText }}</v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped></style>
