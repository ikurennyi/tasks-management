<script setup lang="ts">
const { msg = 'Message' } = defineProps<{ msg?: string }>()
</script>

<template>
  <main>{{ msg }}</main>
</template>
