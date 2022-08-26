import AboutView from "../views/AboutView.vue";
import HomeView from "../views/HomeView.vue";
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: RouteConfig[] = [
    {
        component: HomeView,
        name: "home",
        path: "/",
    },
    { component: AboutView, name: "about", path: "/about" },
];

const router = new VueRouter({
    routes,
});

export default router;
