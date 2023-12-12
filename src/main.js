import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router";
import App from './App.vue'
import Home from './views/Home.vue';
import Contact from './views/Contact.vue';
import API from './views/API.vue';
import Bonus from './views/Bonus.vue';
//import router from './router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/contact', component: Contact },
        { path: '/API', component: API },
        { path: '/bonus', component: Bonus },
    ],
});

createApp(App).use(router).mount('#app');