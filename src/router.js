import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: /views/App },
        // { path: '/contact', component: contact },
        // { path: '/API', component: API },
        // { path: '/bonus', component: bonus },
    ]
})