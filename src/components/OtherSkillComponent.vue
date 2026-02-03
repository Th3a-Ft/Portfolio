
<template>
  <div class="border border-red rounded-sm max-w-1/4 pb-3 mb-4 mx-1">
    <img :src="url_img" :alt="alt_img" class="w-2/3 mx-auto">
    <p class="font-bold text-red text-center">{{title}}</p>
    <p class="text-red text-center">{{subtitle}}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  url_img: {
    type:String,
    required:true
  },
  alt_img: {
    type:String,
    required:true
  },
  title:{
    type:String,
    required:true
  },
  subtitle:{
    type:String,
    required:false
  },
})

</script>