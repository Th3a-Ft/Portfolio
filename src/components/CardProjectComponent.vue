<template>
  <div class="border border-red my-8 w-3/4 p-2">
    <img :src="url_img" :alt="alt_img">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <hr class="w-1/2 border-red mt-3">
    <div class="flex flex-row flex-wrap justify-start" >
      <p class="bg-red-soft text-sm rounded-sm p-2 mr-2 my-2" v-for="skill in skills">{{ skill }}</p>
    </div>
    <div class="flex flex-row mr-1">
      <CalendarDays color="#FF9E9E"/>
      <p>{{ date }}</p>
    </div>
    <div class="flex flex-row mr-1">
      <Handshake color="#FF9E9E"/>
      <p>{{ organisation }}</p>
    </div>
  </div>

</template>

<script setup>
import {CalendarDays, Handshake} from 'lucide-vue-next';

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
        required: true
      },
      alt_img: {
        type: String,
        required: true
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
      }
    }
)

</script>