<template>
  <div class="border border-white rounded-sm w-1/3 p-1 mb-4 mx-1">
<!--    <img :src="url_img" :alt="alt_img" class="w-2/3 mx-auto">-->

    <p class="font-bold text-white text-center">{{ title }}</p>
    <p class="text-white mt-2 text-sm text-center">{{ subtitle }}</p>
  </div>
</template>

<script setup>

const props = defineProps({
  // url_img: {
  //   type: String,
  //   required: true
  // },
  // alt_img: {
  //   type: String,
  //   required: true
  // },
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