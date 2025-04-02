<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'

import type { RootStore } from '@/store'
import { ROUTES } from '@/types/routes'
import { PRIORITIES, STATUSES } from '@/entities/task'
import { useTask } from '@/shared/composables/useTask'
import { useForm } from '@/shared/composables/useForm'

const router = useRouter()
const store = useStore<RootStore>()

const { taskId, projectId } = useRoute().params
const { action, createdOrUpdatedText, isNewTask, task, taskTitle, saveButtonText, deleteTask } =
  useTask({
    projectId,
    taskId,
  })

const form = useForm({
  fields: task.value,
  action: createdOrUpdatedText,
  type: 'task',
})

const statusColor = computed(() => {
  switch (form.fields.status) {
    case STATUSES.PENDING:
      return 'primary'
    case STATUSES.IN_PROGRESS:
      return 'orange'
    default:
      return 'green'
  }
})

const priorityColor = computed(() => {
  switch (form.fields.priority) {
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
  await form.submit(async (fields) => {
    await store.dispatch(`tasks/${action}`, fields)
    goBack()
  })
}
</script>

<template>
  <div>
    <v-btn class="my-4" @click="goBack">Go back</v-btn>

    <v-row data-test="task-form">
      <v-col>
        <v-card elevation="6">
          <v-card-title>
            <div class="d-flex justify-space-between">
              <h4>{{ taskTitle }}</h4>
              <div v-if="!isNewTask" class="d-flex ga-2">
                <v-btn variant="outlined" @click="processDelete">Delete</v-btn>
              </div>
            </div>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <div>
              <v-text-field
                v-model="form.fields.title"
                autofocus
                label="Title"
                variant="outlined"
                data-test="task-form-title"
                :disabled="form.disabled"
              ></v-text-field>
            </div>

            <div class="d-flex justify-space-between align-center py-4">
              <div class="">Status</div>
              <div>
                <v-btn-toggle
                  v-model="form.fields.status"
                  :disabled="form.disabled"
                  color=""
                  group
                  data-test="task-form-status"
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
                  v-model="form.fields.priority"
                  color=""
                  group
                  mandatory
                  density="compact"
                  data-test="task-form-priority"
                  :disabled="form.disabled"
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
                v-model="form.fields.dueDate"
                prepend-icon=""
                label="Due Date"
                variant="outlined"
                data-test="task-form-due-date"
                :disabled="form.disabled"
              ></v-date-input>
            </div>

            <v-textarea
              v-model="form.fields.description"
              label="Description"
              variant="outlined"
              data-test="task-form-description"
              :disabled="form.disabled"
            ></v-textarea>

            <div class="d-flex justify-end">
              <v-btn
                :disabled="form.disabled"
                color="success"
                data-test="task-form-submit"
                @click="saveTask"
              >
                {{ saveButtonText }}
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped></style>
