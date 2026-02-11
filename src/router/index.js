import {createRouter, createWebHistory} from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import AboutMeView from "@/views/AboutMeView.vue";
import ProjectsView from "@/views/ProjectsView.vue";
import ContactsView from "@/views/ContactsView.vue";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
            meta: {
                title: 'Portfolio de Théa Fort',
                description: 'Projets, expériences, compétences toutes les infos sur mon parcours !'
            }
        },
        {
            path: '/a-propos-de-moi',
            name: 'aboutme',
            component: AboutMeView,
            meta: {
                title: 'A propos de moi',
            }
        },
        {
            path: '/realisations',
            name: 'realisations',
            component: ProjectsView,
            meta: {
                title: 'Tous mes projets',
            }
        },
        {
            path: '/contact',
            name: 'contact',
            component: ContactsView,
            meta: {
                title: 'Contactez-moi',
            }
        },

    ],

});

// Loads the title and description of each page before changing the route
router.beforeEach((to) => {
        const {title, description} = to.meta;
        const defaultTitle = 'Théa Fort Portfolio';
        document.title = title || defaultTitle
    }
);

export default router
