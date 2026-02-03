<template>
  <div class="bg-white rounded-sm mx-4 p-2">
    <h3 class="text-left">{{ title }}</h3>
    <ul class="list-disc list-inside">
      <li v-for="description in descriptions">{{ description }}</li>
    </ul>
    <hr class="w-1/2 border-red mt-3">
    <div class="text-sm">
      <div class="flex flex-row mr-1 mt-2">
        <CalendarDays color="#FF9E9E" class="mr-1"/>
        <p>{{ date }}</p>
      </div>
      <div class="flex flex-row mr-1">
        <GraduationCap color="#FF9E9E" class="mr-1"/>
        <p>{{ school }}</p>
      </div>
      <div class="flex flex-row mr-1">
        <MapPin color="#FF9E9E" class="mr-1"/>
        <p>{{ location }}</p>
      </div>

      <div v-if="link" class="flex flex-row flex-wrap mr-1">
        <Link color="#FF9E9E" class="mr-1"/>
        <a :href="link" target="_blank" class="underline">{{ text_link }}</a>
      </div>
    </div>

  </div>
</template>

<script setup>
import {CalendarDays, GraduationCap, Link, MapPin} from 'lucide-vue-next';


const props = defineProps({
  title: {
    type: String,
    required: true
  },
  school: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  descriptions: {
    type: Array,
    required: true
  },
  link: {
    type: String,
    required: false,
  },
  text_link: {
    type: String,
    required: false,
    default:'La formation en détail'
  },

})

</script>