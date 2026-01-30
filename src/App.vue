<template>
  <header class="flex flex-row justify-between items-center">
    <div>
      <img src="/public/img/logo_tf.png" alt="logo Théa Fort" class="max-w-16">
    </div>

    <!--Menu Burger Mobile-->

    <div class="md:hidden">
      <button @click="toggleMenu" value="hamburger-menu">
        <Menu color="#800101"/>
      </button>
      <transition name="menu">
        <div v-if="isMenuOpen" class="fixed inset-0 bg-white z-40 pt-8 px-6">
          <nav class="flex flex-col items-end justify-evenly h-1/2 text-2xl">
            <X @click="closeMenu" color="white" class="bg-red rounded-full"/>
            <router-link @click="closeMenu" to="/">
              <House/>
            </router-link>
            <router-link to="/realisations">Réalisations</router-link>
            <router-link to="/experiences">Expériences</router-link>
            <router-link to="/competences">Compétences</router-link>
            <router-link to="/contact">Contact</router-link>
            <router-link to="/cv">CV</router-link>
          </nav>
        </div>
      </transition>
    </div>


    <!-- Menu desktop-->
    <div class="hidden md:flex">
      <nav>
        <router-link to="/">
          <House/>
        </router-link>
        <router-link to="/realisations">Réalisations</router-link>
        <router-link to="/experiences">Expériences</router-link>
        <router-link to="/competences">Compétences</router-link>
        <router-link to="/contact">Contact</router-link>
        <router-link to="/cv">CV</router-link>
      </nav>
    </div>
  </header>

  <router-view/>

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
import {House, Menu, X} from 'lucide-vue-next';
import {ref, watch} from 'vue';
import {useRoute} from "vue-router";

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

