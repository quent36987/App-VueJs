import { getters } from "@/store/getter";
import { mutations } from "@/store/mutation";
import Vue from "vue";
import Vuex from "vuex";
import { IStoreType, state } from "@/store/state";

export { EMutation } from "./mutation";

Vue.use(Vuex);

export const store = new Vuex.Store<IStoreType>({
    actions: {},
    getters,
    modules: {},
    mutations,
    state,
});
