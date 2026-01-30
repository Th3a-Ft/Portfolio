<template>
  <BannerComponent
      title="Hello World!"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices odio sed est malesuada, ut malesuada mauris ultricies. Curabitur ornare sem a dui tristique, sit amet fringilla nisi maximus."
      :links="[
        {'url_img':'https://www.youtube.com/watch?v=dQw4w9WgXcQ','alt':'Réalisation','text':'Réalisations'},
        {'url_img':'https://www.youtube.com/watch?v=dQw4w9WgXcQ','alt':'A propos de moi','text':'A propos de moi'},
      ]"
  />
  <div>
    <h2 class="h2-red">Réalisations</h2>

    <Carousel :items-to-show="1" :wrap-around="true" :transition="500">
      <Slide v-for="slide in 3" :key="slide">
        <div class="carousel__item">
          <CardProjectComponent
              :title="texts.booktracker.title"
              :description="texts.booktracker.description"
              :url_img="texts.default.url_img"
              :alt_img="texts.default.alt_img"
              :skills="texts.booktracker.skills"
              :date="texts.booktracker.date"

              class="mx-auto"
          />
        </div>
      </Slide>
      <Slide v-for="slide in 3" :key="slide">
        <div class="carousel__item">
          <CardProjectComponent
              :title="texts.booktracker.title"
              :description="texts.booktracker.description"
              :url_img="texts.default.url_img"
              :alt_img="texts.default.alt_img"
              :skills="texts.booktracker.skills"
              :date="texts.booktracker.date"
              organisation="TR"

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
      <a href="/views/ProjectsView" class="mx-auto bg-red text-white font-extrabold p-2 rounded-sm">Voir plus</a>
    </div>
  </div>


  <div class="bg-red pb-8">
    <h2 class="h2-white">Compétences techniques</h2>

    <div class="flex flex-row flex-wrap justify-evenly" >

      <TechninalSkillsComponent
          :title="skill.skill_name"
          alt_img="logo vue.js"
          url_img="public/img/img_placeholder.png"
          :subtitle="skill.skill_subtitle"

          v-for="skill in tab_skills" :key="skill"
      />

    </div>


  </div>


</template>

<script>
import {defineComponent} from "vue";
import BannerComponent from "@/components/BannerComponent.vue";
import CardProjectComponent from "@/components/CardProjectComponent.vue";
import {texts} from "@/content/projects.js";
import {tab_skills} from "@/content/skills.js"

import 'vue3-carousel/carousel.css'
import {Carousel, Slide, Pagination, Navigation} from 'vue3-carousel'
import TechninalSkillsComponent from "@/components/TechninalSkillsComponent.vue";

const carouselConfig = {
  itemsToShow: 2.5,
  wrapAround: true,
  clamp: true
}

export default defineComponent({
  components: {TechninalSkillsComponent, Carousel, Slide, Pagination, Navigation, CardProjectComponent, BannerComponent},
  setup() {
    return {
      texts,
      tab_skills
    };
  }
});
</script>
