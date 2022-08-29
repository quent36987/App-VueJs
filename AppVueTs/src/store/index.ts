import Gain from "@/class/gain";
import { mutations } from "@/store/mutation";
import Vue from "vue";
import Vuex from "vuex";

export { EMutation } from "./mutation";

Vue.use(Vuex);

const MONEY_INIT = 25;
// TODO : a sup ca
// eslint-disable-next-line @typescript-eslint/no-magic-numbers
const tokenInit = [1, 5, 25, 100];

export interface IBet {
    id: number;
    val: number;
}

export interface IStore {
    bets: IBet[];
    gains: Gain[];
    money: number;
    tokenList: number[];
    tokenSelected: number;
}

export const store = new Vuex.Store<IStore>({
    actions: {},
    getters: {
        bets(state): IBet[] {
            return state.bets;
        },
        betsId:
            (state): ((id: number) => number) =>
            (id: number): number => {
                const bet = state.bets.find((elt): boolean => elt.id === id);
                return bet ? bet.val : 0;
            },
        money(state): number {
            return state.money;
        },
        tokenSelected(state): number {
            return state.tokenSelected;
        },
    },
    modules: {},
    mutations,
    state: {
        bets: [],
        gains:[],
        money: MONEY_INIT,
        tokenList: tokenInit,
        tokenSelected: 1,
    },
});
