<script setup lang="ts">
import { useTheme } from 'vuetify'
import { RouterView } from 'vue-router'

import ThemeIcon from '@/components/icons/ThemeIcon.vue'
import SnackBar from '@/shared/ui/SnackBar.vue'
import { ROUTES } from './types/routes'

const theme = useTheme()
function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>

<template>
  <v-theme-provider class="pa-10" :theme="`${theme}`" with-background>
    <v-app>
      <v-app-bar class="d-flex align-center justify-space-between">
        <v-app-bar-title>
          <div>
            <RouterLink :to="{ name: ROUTES.PROJECTS_LIST.name }">Tasks Management App</RouterLink>
          </div>
        </v-app-bar-title>

        <div data-test="test-guards">
          To test guards:
          <RouterLink :to="{ name: ROUTES.PROJECT_DETAILS.name, params: { projectId: 'aaa' } }"
            >Non-Existent Project</RouterLink
          >
          |
          <RouterLink :to="{ name: ROUTES.TASK.name, params: { projectId: 1, taskId: 'aaa' } }"
            >Non-Existent Task</RouterLink
          >
          <v-tooltip text="Toggle Theme">
            <template #activator="{ props }">
              <v-btn @click="toggleTheme">
                <v-icon v-bind="props" size="large">
                  <ThemeIcon />
                </v-icon>
              </v-btn>
            </template>
          </v-tooltip>
        </div>
      </v-app-bar>

      <v-main>
        <RouterView />

        <SnackBar />
      </v-main>
    </v-app>
  </v-theme-provider>
</template>
