import { createWebHistory, createRouter } from "vue-router";
import Profile from '../components/Profile.vue';
import Home from '../components/Home.vue';
import animeDetail from '../components/animeDetail.vue';

//now creat a array of object
const routes = [
    {
        path: '/',
        name: Home,
        component: Home,
    },
    {
        path: '/profile',
        name: Profile,
        component: Profile,
    },
    {
        path: '/anime/:id',
        name: animeDetail,
        component: animeDetail,
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router; 