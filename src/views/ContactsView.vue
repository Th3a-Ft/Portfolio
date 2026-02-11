<template>
  <BannerComponent
      title="Contactez-moi !"
      description="Une question sur mon parcours, sur mes différentes expériences ? Je suis à votre écoute, n'hésitez pas à me contacter !"
  />
  <div class="my-4">
    <div class="border border-red rounded-sm p-1 mb-4 mx-1 flex flex-row items-center">
      <AtSign color="#800101"/>
      <a href="mailto:thea.fort@gmail.com" class="pl-2">thea.fort@gmail.com</a>
    </div>
    <div class="border border-red rounded-sm p-1 mb-4 mx-1 flex flex-row items-center">
      <Linkedin color="#800101"/>
      <a href="https://www.linkedin.com/in/thea-fort/" target="_blank" class="pl-2">thea.fort@gmail.com</a>
    </div>
    <div class="border border-red rounded-sm p-1 mb-4 mx-1 flex flex-row items-center">
      <Github color="#800101"/>
      <a href="https://github.com/Th3a-Ft" target="_blank" class="pl-2">Mon GitHub</a>
    </div>
  </div>

</template>

<script setup>
import BannerComponent from "@/components/BannerComponent.vue";
import {AtSign, Linkedin, Github} from 'lucide-vue-next';
</script>