import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Tableau from "../views/Tableau.vue";
import User from "../views/User.vue";
import NotFound from "../views/NotFound.vue";

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/Tableau",
        name: "Tableau",
        component: Tableau,
    },
    {
        path: "/user/:name", // <-- notice the colon
        name: "User",
        component: User,
        props: true,
    },
    {
        path: "/:catchAll(.*)",
        component: NotFound,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;