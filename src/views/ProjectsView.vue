<template>
  <BannerComponent
      title="Mes projets"
      description="Découvrez l'ensemble de mes projets ! Vous trouverez des projets réalisés en cours de formation ou en entreprise et certains personnels perso. Développement, graphisme, communication : mes projets sont à l'image de mon parcours"

  />

  <!-- Filters -->
  <div class="text-center">
    <button @click="currentFilter = 'all'" class="btn-filter">
      Tous les projets
    </button>
    <button @click="currentFilter = 'dev'" class="btn-filter">
      Développement
    </button>
    <button @click="currentFilter = 'graph'" class="btn-filter">
      Graphisme
    </button>
    <button @click="currentFilter = 'comm'" class="btn-filter">
      Communication
    </button>
    <button @click="currentFilter = 'others'" class="btn-filter">
      Autres
    </button>
  </div>

  <div class="md:flex md:flex-row md:mx-3 md:flex-wrap md:justify-evenly">
<!--    <div v-for="project in filteredProjects" :key="project.title" >-->
      <CardComponent
          :url_img="project.url_img"
          :alt_img="project.alt_img"
          :title="project.title"
          :description="project.description"
          :skills="project.skills"
          :date="project.date"
          :organisation="project.organisation"
          :link="project.link"
          :text_link="project.text_link"

          class="mx-auto md:mx-1"
          v-for="project in filteredProjects" :key="project.title"
      />
<!--    </div>-->
  </div>

</template>

<script setup>
import BannerComponent from "@/components/BannerComponent.vue";
import CardComponent from "@/components/CardComponent.vue";
import {projects_texts} from "@/content/projects.js"
import {computed, ref} from "vue";

const currentFilter = ref('all');

const filteredProjects = computed(() => {
  if (currentFilter.value === 'all') {
    return projects_texts.projects;
  }
  return projects_texts.projects.filter(project => project.category === currentFilter.value);
});


</script>