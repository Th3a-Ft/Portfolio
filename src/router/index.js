import {createRouter, createWebHistory} from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import TestView from "@/views/TestView.vue";
import AboutMeView from "@/views/AboutMeView.vue";


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
                title: 'Bienvenue sur le portfolio de Théa Fort !',
                description: 'Projets, expériences, compétences toutes les infos sur mon parcours !'
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
