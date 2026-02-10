<template>
  <BannerComponent
      title="Hello World!"
      description="Bienvenu sur mon site portfolio ! Vous trouverez les projets auxquels j’ai participé, ceux que j’ai réalisés mais aussi des infos sur mon parcours. Belle découverte !"
      :links="[
        {'url':'/#experiences','text':'Expériences'},
        {'url':'/a-propos-de-moi','text':'A propos de moi'},
      ]"
  />
  <div>
    <h2 class="h2-red">Réalisations</h2>
    <Carousel :items-to-show="1" :wrap-around="true" :transition="500" class="pt-1">

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

  <div class="bg-red pb-8" id="competences">
    <h2 class="h2-white">Hard Skills</h2>

    <div class="flex flex-row flex-wrap justify-evenly">
      <TechSkillComponent
          :title="skill.skill_name"
          alt_img="logo vue.js"
          url_img="public/img/logo_skills/java.png"
          :subtitle="skill.skill_subtitle"

          v-for="skill in tab_skills.hard_skills" :key="skill"
      />
    </div>

  </div>
  <div class="bg-red-soft pb-8">
    <h2 class="h2-red">Soft skills</h2>

    <div class="flex flex-row flex-wrap justify-evenly">
      <OtherSkillComponent
          :title="skill"

          v-for="skill in tab_skills.soft_skills" :key="skill"
      />
    </div>

  </div>

  <div class="mb-4" id="experiences">
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
    <div class="text-center my-8">
      <a href="/public/doc/CV_thea_fort.pdf" target="_blank" class="mx-auto bg-red text-white font-extrabold p-2 rounded-sm">
        Consulter mon CV complet
      </a>

    </div>
  </div>

  <div class="bg-red pb-8">
    <h2 class="h2-white">Formations</h2>
    <Accordion type="single" collapsible class="mx-3">
      <AccordionItem :value="trainings_texts.trainings.indexOf(training)"  v-for="training in trainings_texts.trainings" :key="training">
        <AccordionTrigger class="py-0">
          <p class="font-bold text-white">{{training.title}}</p>
        </AccordionTrigger>
        <AccordionContent class="bg-white p-2">
          <div>
<!--            <h3 class="text-red text-left">{{ title }}</h3>-->
            <ul class="list-disc list-inside">
              <li v-for="description in training.descriptions">{{ description }}</li>
            </ul>
            <hr class="w-1/2 border-red mt-3">
            <div class="text-sm">
              <div class="flex flex-row mr-1 mt-2">
                <CalendarDays color="#FF9E9E" class="mr-1"/>
                <p>{{ training.date }}</p>
              </div>
              <div class="flex flex-row mr-1">
                <GraduationCap color="#FF9E9E" class="mr-1"/>
                <p>{{ training.school }}</p>
              </div>
              <div class="flex flex-row mr-1">
                <MapPin color="#FF9E9E" class="mr-1"/>
                <p>{{ training.location }}</p>
              </div>

              <div v-if="training.link" class="flex flex-row flex-wrap mr-1">
                <Link color="#FF9E9E" class="mr-1"/>
                <a :href="training.link" target="_blank" class="underline">La formation en détail</a>
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>

    </Accordion>
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
// import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion/index.js";

import {Accordion, AccordionContent, AccordionItem, AccordionTrigger,} from '@/components/ui/accordion'
import {CalendarDays, GraduationCap, Link, MapPin, Code} from "lucide-vue-next";
</script>

