/* eslint-disable @typescript-eslint/explicit-function-return-type, @typescript-eslint/naming-convention */
const VPageRoulette = async () => import("@/pages/v-page-roulette.vue");
const VPageHistory = async () => import("@/pages/v-page-history.vue");
/* eslint-enable @typescript-eslint/explicit-function-return-type, @typescript-eslint/naming-convention */
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: RouteConfig[] = [
    {
        component: VPageRoulette,
        name: "home",
        path: "/",
    },
    { component: VPageHistory, name: "history", path: "/history" },
];

const router = new VueRouter({
    routes,
});

export default router;
