<script setup lang="ts">
import { useStore } from 'vuex'
import { computed, ref, watch, type Ref } from 'vue'

import type { RootStore } from '@/store'
import type { SnackBar } from '@/entities/snackbar'
const store = useStore<RootStore>()

const showSnackbar = ref(false)
const snack: Ref<SnackBar> = computed(() => store.getters['snacks/getItem'])

watch(
  snack,
  () => {
    showSnackbar.value = true
  },
  { deep: true },
)
</script>

<template>
  <div class="text-center">
    <v-snackbar v-model="showSnackbar" timeout="3000" :color="snack?.color" variant="tonal">
      {{ snack.text }}
    </v-snackbar>
  </div>
</template>
