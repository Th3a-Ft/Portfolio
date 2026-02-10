import {createRouter, createWebHistory} from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import AboutMeView from "@/views/AboutMeView.vue";
import ProjectsView from "@/views/ProjectsView.vue";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
            meta: {
                title: 'Bienvenue sur le portfolio de Théa Fort !',
                description: 'Projets, expériences, compétences toutes les infos sur mon parcours !'
            }
        },
        {
            path: '/a-propos-de-moi',
            name: 'aboutme',
            component: AboutMeView,
            meta: {
                title: 'A propos de moi',
                description: 'Découvrez en plus sur moi.'
            }
        },
        {
            path: '/realisations',
            name: 'realisations',
            component: ProjectsView,
            meta: {
                title: 'Tous mes projets',
                description: 'Découvrez l\'ensemble de mes projets !'
            }
        },

    ],

});

// Loads the title and description of each page before changing the route
/*router.beforeEach((to) => {
        const {title, description} = to.meta;
        const defaultTitle = 'Book Tracker';
        const defaultDescription = 'Bibliothèque Book Tracker';

        document.title = title || defaultTitle

        const descriptionElement = document.querySelector('head meta[name="description"]')

        descriptionElement.setAttribute('content', description || defaultDescription)
    }
);*/

export default router
