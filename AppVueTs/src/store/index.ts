import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const MONEY_INIT = 25;

export const enum EMutation {
    AddBet = "addBet",
    IncrementMoney = "incrementMoney",
    ResetBet = "resetBet",
}

interface IBet {
    id: number;
    val: number;
}

interface IStore {
    bets: IBet[];
    money: number;
}

export const store = new Vuex.Store<IStore>({
    actions: {},
    getters: {
        getBets(state): IBet[] {
            return state.bets;
        },
        getMoney(state): number {
            return state.money;
        },
    },
    modules: {},
    mutations: {
        [EMutation.IncrementMoney](state, val: number): void {
            state.money += val;
        },
        [EMutation.AddBet](state, payload: { id: number; val: number }): void {
            const bet = state.bets.find(
                (elt): boolean => elt.id === payload.id
            );
            if (bet) {
                bet.val += payload.val;
            } else {
                state.bets.push(payload);
            }
        },
        [EMutation.ResetBet](state): void {
            state.bets = [];
        },
    },
    state: {
        bets: [],
        money: MONEY_INIT,
    },
});
