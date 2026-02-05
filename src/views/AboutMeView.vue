<template>
  <BannerComponent
      title="Qui je suis..."
      description="Développeuse web en reconversion après 3 ans dans la communication, je combine créativité, gestion de projet et compétences techniques.
      Mon objectif : concevoir des solutions web polyvalentes et innovantes, alliant technicité et sens de l’utilisateur. "/>

  <h2 class="h2-red">Mes centres d'intérêt</h2>
  <div>
    <div class="border-solid border-red border-1 rounded-sm m-3 p-4">
      <div class="flex flex-row flex-wrap mr-1 text-sm items-center">
        <Volleyball color="#FF9E9E" class="mr-1"/>
        <p class="font-bold text-lg">Le sport</p>
      </div>
      <p>Je joue au basket depuis plusieurs années, cette saison j'évolue en Pré-Régionale.</p>
      <p>J'aime aussi beaucoup la randonnée et j'apprécie particulièrement découvrir les (nombreux) itinéraires autour
        de Grenoble.</p>
    </div>

    <div class="border-solid border-red border-1 rounded-sm m-3 p-4">
      <div class="flex flex-row flex-wrap mr-1 text-sm items-center">
        <BookOpenText color="#FF9E9E" class="mr-1"/>
        <p class="font-bold text-lg">La lecture</p>
      </div>
      <p>Il m'arrive régulièrement de me perdre dans un livre ou dans les rayons d'une librairie.</p>
      <p>J'ai une préférence pour les polars, policiers et thrillers mais j'aime aussi les fantastiques.</p>
    </div>

    <div class="border-solid border-red border-1 rounded-sm m-3 p-4">
      <div class="flex flex-row flex-wrap mr-1 text-sm items-center">
        <MapPlus color="#FF9E9E" class="mr-1"/>
        <p class="font-bold text-lg">Les voyages</p>
      </div>
      <p>J'ai la chance d'avoir pu voyager dans plusieurs pays d'Europe (Allemagne, Irlande, Pays de Galles, Portugal)
        mais aussi La Réunion.</p>
      <p>J'ai une préférence pour les polars, policiers et thrillers mais j'aime aussi les fantastiques.</p>
    </div>
  </div>

  <div class="bg-red py-4">
    <h2 class="h2-white">Bénévolat</h2>

    <div class="border border-white rounded-sm p-2 mb-4 mx-3">
      <p class="font-bold text-white">Media Delegate</p>
      <p class="text-white">Communication tout au long des compétitions sur les réseaux sociaux de PVE et rédaction d'articles récapitulatifs.</p>

      <hr class="w-1/2 border-white mt-3">

      <div class="flex flex-row mr-1 mt-2 text-sm">
        <CalendarDays color="white" class="mr-1"/>
        <p class="text-white">Depuis 2025</p>
      </div>
      <div class="flex flex-row mr-1 text-sm">
        <Handshake color="white" class="mr-1"/>
        <p class="text-white">ParaVolley Europe</p>
      </div>
    </div>

    <div class="border border-white rounded-sm p-2 mb-4 mx-3">
      <p class="font-bold text-white">Graphiste</p>
      <p class="text-white">Réalisation des affiches des événements de l'association et autres missions diverses</p>

      <hr class="w-1/2 border-white mt-3">

      <div class="flex flex-row mr-1 mt-2 text-sm">
        <CalendarDays color="white" class="mr-1"/>
        <p class="text-white">Depuis 2019</p>
      </div>
      <div class="flex flex-row mr-1 text-sm">
        <Handshake color="white" class="mr-1"/>
        <p class="text-white">Union Cressolanne</p>
      </div>
    </div>



  </div>


</template>

<script setup>
import BannerComponent from "@/components/BannerComponent.vue";
import {BookOpenText, Volleyball, MapPlus, CalendarDays, Link, Handshake} from "lucide-vue-next";
import CardComponent from "@/components/CardComponent.vue";
</script>