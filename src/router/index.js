import { createWebHistory, createRouter } from "vue-router";
import Profile from '../components/Profile.vue';
import Home from '../components/Home.vue';

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
    }]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router; 