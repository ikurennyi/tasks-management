<script setup lang="ts">
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
</script>

<template>
  <div class="d-flex align-center flex-column justify-center py-16">
    <h2 class="font-italic my-8">There are currently no {{ item }}.</h2>
    <h4>
      Try to get them by clicking this button
      <strong>{{ buttonText }}</strong
      >.
    </h4>
  </div>
</template>
