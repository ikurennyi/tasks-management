<script setup lang="ts">
import { RouterView } from 'vue-router'

import { ROUTES } from './types/routes'
</script>

<template>
  <v-app>
    <v-app-bar class="d-flex align-center justify-space-between">
      <v-app-bar-title>
        <div>
          Tasks Management App |
          <RouterLink :to="{ name: ROUTES.PROJECTS_LIST.name }">Projects</RouterLink>
        </div>
      </v-app-bar-title>
    </v-app-bar>

    <v-main>
      <div class="py-4">
        <RouterView />
      </div>
    </v-main>
  </v-app>
</template>
