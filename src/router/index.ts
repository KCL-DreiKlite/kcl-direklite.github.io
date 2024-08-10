import { createRouter, createWebHistory } from 'vue-router'

// const routes: Array<RouteRecordRaw> = [
//
// ];

console.log(import.meta.env.BASE_URL);

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "Home",
            component: () => import("@views/HomeView.vue")
        },
        {
            path: "/about",
            name: "About Me",
            component: () => import("@views/AboutMe.vue")
        },
        {
            path: "/posts",
            name: "Posts",
            component: () => import("@views/PostsView.vue")
        }
    ],
});

export default router;
