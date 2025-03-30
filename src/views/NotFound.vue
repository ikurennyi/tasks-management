<script setup lang="ts">
import { ROUTES } from '@/types/routes'
</script>

<template>
  <div>
    <h1>Page not Found</h1>
    <p>
      Try again from the
      <RouterLink :to="{ name: ROUTES.PROJECTS_LIST.name }">Projects List</RouterLink>
    </p>
  </div>
</template>

<style scoped></style>
