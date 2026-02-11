<template>
  <div class="border border-red mb-8 w-3/4 md:w-1/4 p-2">
    <img :src="url_img" :alt="alt_img">
    <h3 class="text-red">{{ title }}</h3>
    <p>{{ description }}</p>
    <hr class="w-1/2 border-red mt-3">
    <div class="flex flex-row flex-wrap justify-start">
      <p class="bg-red-soft text-sm rounded-sm p-2 mr-2 mt-2" v-for="skill in skills">{{ skill }}</p>
    </div>
    <div class="flex flex-row mr-1 mt-2 text-sm">
      <CalendarDays color="#FF9E9E" class="mr-1"/>
      <p>{{ date }}</p>
    </div>
    <div class="flex flex-row mr-1 text-sm">
      <Handshake color="#FF9E9E" class="mr-1"/>
      <p>{{ organisation }}</p>
    </div>

    <div v-if="link" class="flex flex-row flex-wrap mr-1 text-sm">
      <Link color="#FF9E9E" class="mr-1"/>
      <a :href="link" target="_blank" class="underline">{{ text_link }}</a>
    </div>
  </div>

</template>

<script setup>
import {CalendarDays, Handshake, Link} from 'lucide-vue-next';

const props = defineProps({
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      url_img: {
        type: String,
        required: false,
      },
      alt_img: {
        type: String,
        required: false,
      },
      skills: {
        type: Array,
        required: true,
      },
      date: {
        type: String,
        required: true
      },
      organisation: {
        type: String,
        required: false,
        default: "Projet personnel",
      },
      link: {
        type: String,
        required: false,
      },
      text_link: {
        type: String,
        required: false,
      },

    }
)


</script>