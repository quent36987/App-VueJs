/* eslint-disable @typescript-eslint/explicit-function-return-type, @typescript-eslint/naming-convention */
const VPageRoulette = async () => import("@/pages/v-page-roulette.vue");
const VPageHistory = async () => import("@/pages/v-page-history.vue");
const VPageHome = async () => import("@/pages/v-page-home.vue");
const VPageGame = async () => import("@/pages/v-page-game.vue");
/* eslint-enable @typescript-eslint/explicit-function-return-type, @typescript-eslint/naming-convention */
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routesGame: RouteConfig[] = [
    {
        component: VPageRoulette,
        name: "wheel-page",
        path: "/play",
    },
    {
        component: VPageHistory,
        name: "rounds-history-page",
        path: "/history",
    },
];

const routes: RouteConfig[] = [
    {
        component: VPageHome,
        name: "home-page",
        path: "/",
    },
    {
        children: routesGame,
        component: VPageGame,
        name: "game-page",
        path: "/play",
    },
    { path: "*", redirect: "/" },
];

const router = new VueRouter({
    routes,
});

export { router };
