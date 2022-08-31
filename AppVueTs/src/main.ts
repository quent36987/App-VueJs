import App from "./App.vue";
import { declareComponents } from "@/components";
import router from "./router";
import { store } from "@/store";
import Vue, { VNode } from "vue";

Vue.config.productionTip = false;

declareComponents();

new Vue({
    render: (renderFunc): VNode => renderFunc(App),
    router,
    store,
}).$mount("#app");
