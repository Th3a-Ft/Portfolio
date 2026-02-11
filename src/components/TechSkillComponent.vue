<template>
  <div class="border border-white rounded-sm w-1/3 p-1 mb-4 mx-1">
    <p class="font-bold text-white text-center">{{ title }}</p>
    <p class="text-white mt-2 text-sm text-center">{{ subtitle }}</p>
  </div>
</template>

<script setup>

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: false
  },
  icon: {
    type: String,
    required: false,
  },
})

</script>