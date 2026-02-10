<template>
  <div class="bg-red py-8 flex flex-col items-center justify-evenly">
    <h1>{{ title }}</h1>
    <p class="text-white text-center mx-3">{{description}} </p>
    <div class="w-full text-center flex justify-evenly pt-8">
      <a v-for="link in links"
          :href="link.url"
          class="bg-white text-red font-extrabold p-2 rounded-sm">{{link.text}}</a>

    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type:String,
    required:true
  },
  description: {
    type:String,
    required:true
  },
  links:{
    type:Array,
    required:false
  },
})


</script>

