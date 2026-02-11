<template>
  <header class="flex flex-row justify-between items-center pb-8 px-8">
    <div>
      <router-link to="/">
        <img src="/public/img/logo_tf.png" alt="logo Théa Fort" class="max-w-16">
      </router-link>
    </div>

    <!--Menu Burger Mobile-->

    <div class="md:hidden">
      <button @click="toggleMenu" value="hamburger-menu">
        <Menu color="#800101"/>
      </button>
      <transition name="menu">
        <div v-if="isMenuOpen" class="fixed inset-0 bg-white text-red z-40 pt-8 px-6">
          <nav class="flex flex-col items-end justify-evenly h-1/2 text-2xl">
            <X @click="closeMenu" color="white" class="bg-red rounded-full"/>
            <router-link @click="closeMenu" to="/">
              <House/>
            </router-link>
            <router-link to="/realisations">Réalisations</router-link>
            <router-link to="/#experiences" @click="closeMenu">Expériences</router-link>
            <router-link to="/#competences" @click="closeMenu">Compétences</router-link>
            <router-link to="/a-propos-de-moi">A propos de moi</router-link>
            <router-link to="/contact">Contact</router-link>
            <a :href="`${publicPath}doc/CV_thea_fort.pdf`" target="_blank">
              Mon CV
            </a>
          </nav>
        </div>
      </transition>
    </div>


    <!-- Menu desktop-->
    <div class="hidden md:flex">
      <nav class="md:flex md:flex-row md:items-center md:text-xl md:text-red">
        <router-link to="/" class="mx-3">
          <House/>
        </router-link>
        <router-link to="/realisations" class="mx-3">Réalisations</router-link>
        <router-link :to="{ path: '/', hash: '#experiences' }" class="mx-3">Expériences</router-link>
        <router-link :to="{ path: '/', hash: '#skills' }" class="mx-3">Compétences</router-link>
        <router-link to="/a-propos-de-moi" class="mx-3">A propos de moi</router-link>
        <router-link to="/contact" class="mx-3">Contact</router-link>
        <a :href="`${publicPath}doc/CV_thea_fort.pdf`" target="_blank" class="mx-3">
          Mon CV
        </a>
      </nav>

    </div>
  </header>

  <router-view/>


  <footer class="py-8 border-t border-red">
    <div class="mx-4 flex justify-between items-center">
      <router-link to="/">
        <img src="/public/img/logo_tf.png" alt="logo Théa Fort" class="max-w-16">
      </router-link>
      <div>
        <div class="flex flex-col text-right text-red text-xs md:text-sm">
          <router-link to="/realisations">Réalisations</router-link>
          <a target="_blank" :href="`${publicPath}doc/CV_thea_fort.pdf`">Mon CV complet</a>
          <router-link to="/contact">Contacts</router-link>
        </div>
        <div class="flex justify-end mt-4">
          <a target="_blank" href="https://www.linkedin.com/in/thea-fort">
            <Linkedin color="#800101" size="16"/>
          </a>
          <a target="_blank" href="https://github.com/Th3a-Ft">
            <Github color="#800101" size="16"/>
          </a>
        </div>
      </div>
    </div>
  </footer>

</template>
<style scoped>
.menu-enter-active,
.menu-leave-active {
  transition: all 0.2s ease-in-out;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateX(20px);
}

.menu-enter-to,
.menu-leave-from {
  opacity: 1;
  transform: translateX(0);
}


</style>

<script setup>
import {House, Menu, X, Linkedin, Github} from 'lucide-vue-next';
import {ref, watch} from 'vue';
import {useRoute} from "vue-router";
const publicPath = import.meta.env.BASE_URL;
const route = useRoute();
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

function closeMenu() {
  isMenuOpen.value = false;
}

watch(() => route.path, () => {
  closeMenu();
});
</script>

