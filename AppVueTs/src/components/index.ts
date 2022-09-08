import { VList } from "@/components/commons";
import Vue from "vue";

function declareComponents(): void {
    Vue.component("v-list", VList);
}

export { declareComponents };
