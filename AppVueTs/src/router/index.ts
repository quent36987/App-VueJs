/* eslint-disable @typescript-eslint/explicit-function-return-type, @typescript-eslint/naming-convention */
const VPageRoulette = async () => import("@/pages/v-page-roulette.vue");
const VPageHistory = async () => import("@/pages/v-page-history.vue");
const VPageHome = async () => import("@/pages/v-page-home.vue");
const VPageJeux = async () => import("@/pages/v-page-jeux.vue");
/* eslint-enable @typescript-eslint/explicit-function-return-type, @typescript-eslint/naming-convention */
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: RouteConfig[] = [
    {
        component: VPageHome,
        name: "home",
        path: "/",
    },
    {
        children: [
            { component: VPageHistory, name: "history", path: "/history" },
            {
                component: VPageRoulette,
                name: "roulette",
                path: "/jeux",
            },
        ],
        component: VPageJeux,
        name: "jeux",
        path: "/jeux",
    },
    { path: "*", redirect: "/" },
];

const router = new VueRouter({
    routes,
});

export default router;
