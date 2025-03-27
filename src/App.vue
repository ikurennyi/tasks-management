<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useStore } from 'vuex'
import { computed } from 'vue'

import type { RootStore } from '@/store'
import HomeView from './views/HomeView.vue'

const store = useStore<RootStore>()
const projectsList = computed(() => store.getters['projects/list'])
</script>

<template>
  <HomeView />
  {{ projectsList }}
  <RouterView />
</template>
