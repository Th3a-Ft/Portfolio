<template>
  <div class="border border-red rounded-sm w-1/3 p-1 mb-4 mx-1">
    <p class="font-bold text-red text-center">{{ title }}</p>
<!--    <p class="text-red mt-2 text-sm text-center">{{ subtitle }}</p>-->
  </div>
</template>

<script setup>
const props = defineProps({
  title:{
    type:String,
    required:true
  },
  // subtitle:{
  //   type:String,
  //   required:false
  // },
})

</script>