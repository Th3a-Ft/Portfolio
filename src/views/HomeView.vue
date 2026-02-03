<template>
  <BannerComponent
      title="Hello World!"
      description="Bienvenu sur mon site portfolio ! Vous trouverez les projets auxquels j’ai participé, ceux que j’ai réalisés mais aussi des infos sur mon parcours. Belle découverte !"
      :links="[
        {'url_img':'https://www.youtube.com/watch?v=dQw4w9WgXcQ','alt':'Réalisation','text':'Réalisations'},
        {'url_img':'https://www.youtube.com/watch?v=dQw4w9WgXcQ','alt':'A propos de moi','text':'A propos de moi'},
      ]"
  />
  <div>
    <h2 class="h2-red">Réalisations</h2>

    <Carousel :items-to-show="1" :wrap-around="true" :transition="500">

      <Slide v-for="project in projects_texts.projects.slice(0,3)" :key="project">
        <div class="carousel__item">
          <CardComponent
              :title="project.title"
              :description="project.description"
              :skills="project.skills"
              :date="project.date"
              :organisation="project.organisation"
              :link="project.link"
              :text_link="project.text_link"

              class="mx-auto"
          />
        </div>
      </Slide>


      <template #addons>
        <Navigation/>
        <Pagination/>
      </template>
    </Carousel>

    <div class="text-center my-8">
      <router-link to="/realisations" class="mx-auto bg-red text-white font-extrabold p-2 rounded-sm">
        Découvrir + de projets
      </router-link>

    </div>
  </div>


  <div class="bg-red pb-8">
    <h2 class="h2-white">Compétences techniques</h2>

    <div class="flex flex-row flex-wrap justify-evenly">
      <TechSkillComponent
          :title="skill.skill_name"
          alt_img="logo vue.js"
          url_img="public/img/img_placeholder.png"
          :subtitle="skill.skill_subtitle"

          v-for="skill in tab_skills" :key="skill"
      />
    </div>

  </div>
  <div class="bg-red-soft pb-8">
    <h2 class="h2-red">Autres compétences</h2>

    <div class="flex flex-row flex-wrap justify-evenly">
      <OtherSkillComponent
          :title="skill.skill_name"
          alt_img="logo vue.js"
          url_img="public/img/img_placeholder.png"
          :subtitle="skill.skill_subtitle"

          v-for="skill in tab_skills" :key="skill"
      />
    </div>

  </div>

  <div>
    <h2 class="h2-red">Expériences</h2>
    <Carousel :items-to-show="1" :wrap-around="true" :transition="500">

      <Slide v-for="experience in experiences_texts.experiences" :key="experience">
        <div class="carousel__item">
          <CardComponent
              :title="experience.title"
              :description="experience.description"
              :skills="experience.skills"
              :date="experience.date"
              :organisation="experience.organisation"
              :link="experience.link"
              :text_link="experience.text_link"

              class="mx-auto"
          />
        </div>
      </Slide>


      <template #addons>
        <Navigation/>
        <Pagination/>
      </template>
    </Carousel>
  </div>


  <div class="bg-red pb-8">
    <h2 class="h2-white">Formations</h2>
    <TrainingComponent
        :title="training.title"
        :school="training.school"
        :location="training.location"
        :date="training.date"
        :descriptions="training.descriptions"
        :skills="training.skills"
        :link="training.link"


        v-for="training in trainings_texts.trainings" :key="training"
    />






  </div>


</template>

<script setup>
import BannerComponent from "@/components/BannerComponent.vue"
import CardComponent from "@/components/CardComponent.vue"
import TechSkillComponent from "@/components/TechSkillComponent.vue"
import OtherSkillComponent from "@/components/OtherSkillComponent.vue"

import {projects_texts} from "@/content/projects.js"
import {experiences_texts} from "@/content/experiences.js"
import {trainings_texts} from "@/content/trainings.js"
import {tab_skills} from "@/content/skills.js"

import 'vue3-carousel/carousel.css'
import {Carousel, Slide, Pagination, Navigation} from 'vue3-carousel'
import TrainingComponent from "@/components/TrainingComponent.vue";
</script>

