<script setup lang="ts">
import { useTheme } from 'vuetify'
import { RouterView } from 'vue-router'

import ThemeIcon from '@/components/icons/ThemeIcon.vue'
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
            Tasks Management App |
            <RouterLink :to="{ name: ROUTES.PROJECTS_LIST.name }">Projects</RouterLink>
          </div>
        </v-app-bar-title>

        <v-tooltip text="Toggle Theme">
          <template #activator="{ props }">
            <v-btn @click="toggleTheme">
              <v-icon v-bind="props" size="large">
                <ThemeIcon />
              </v-icon>
            </v-btn>
          </template>
        </v-tooltip>
      </v-app-bar>

      <v-main>
        <div class="py-4">
          <RouterView />
        </div>
      </v-main>
    </v-app>
  </v-theme-provider>
</template>
