import { createApp } from 'vue'
import { createRouter, createWebHistory } from "vue-router";
import App from './App.vue'
import Home from './views/HomeView.vue';
import Contact from './views/ContactView.vue';
import API from './views/APIView.vue';
import Bonus from './views/BonusView.vue';

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