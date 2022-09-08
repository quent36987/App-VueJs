/* eslint-disable @typescript-eslint/explicit-function-return-type, @typescript-eslint/naming-convention */
const VGameWheel = async () => import("@/pages/v-game-wheel.vue");
const VGameHistory = async () => import("@/pages/v-game-history.vue");
const VHome = async () => import("@/pages/v-home.vue");
const VGame = async () => import("@/pages/v-game.vue");
/* eslint-enable @typescript-eslint/explicit-function-return-type, @typescript-eslint/naming-convention */
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routesGame: RouteConfig[] = [
    {
        component: VGameWheel,
        name: "wheel-page",
        path: "/game",
    },
    {
        component: VGameHistory,
        name: "rounds-history-page",
        path: "/history",
    },
];

const routes: RouteConfig[] = [
    {
        component: VHome,
        name: "home-page",
        path: "/",
    },
    {
        children: routesGame,
        component: VGame,
        name: "game-page",
        path: "/game",
    },
    { path: "*", redirect: "/" },
];

const router = new VueRouter({
    routes,
});

export { router };
