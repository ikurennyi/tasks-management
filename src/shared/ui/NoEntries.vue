<script setup lang="ts">
import NoProjects from '@/components/illustrations/NoProjects.vue'
import NoTasks from '@/components/illustrations/NoTasks.vue'

const { item, buttonText } = defineProps({
  item: {
    type: String,
    default: '',
  },
  buttonText: {
    type: String,
    default: '',
  },
})

const isProject = item === 'projects'
const mainText = isProject ? 'Ready to start a new project' : 'There are no tasks here yet'
</script>

<template>
  <div class="d-flex align-center flex-column justify-center py-16">
    <div class="illustration">
      <component :is="isProject ? NoProjects : NoTasks" />
    </div>
    <h2 class="my-8 text-h6 text-blue-darken-3">{{ mainText }}</h2>
    <h4>
      Try to get them by clicking the button
      <strong>{{ buttonText }}</strong
      >.
    </h4>
  </div>
</template>

<style scoped>
.illustration {
  width: 35%;
}

@media screen and (max-width: 640px) {
  .illustration {
    width: 55%;
  }
}
</style>
