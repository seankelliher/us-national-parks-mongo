import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../src/views/HomePage.vue";
import ParksByName from "../src/views/ParksByName.vue";
import ParksByRegion from "../src/views/ParksByRegion.vue";
import ParksByState from "../src/views/ParksByState.vue";
import NotFound from "../src/views/NotFound.vue";

const routes = [
    {
        path: "/",
        name: "HomePage",
        component: HomePage
    },
    {
        path: "/parks-by-name",
        name: "ParksByName",
        component: ParksByName
    },
    {
        path: "/parks-by-region",
        name: "ParksByRegion",
        component: ParksByRegion
    },
    {
        path: "/parks-by-state",
        name: "ParksByState",
        component: ParksByState
    },
    {
        path: "/:catchAll(.*)",
        name: "NotFound",
        component: NotFound
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;