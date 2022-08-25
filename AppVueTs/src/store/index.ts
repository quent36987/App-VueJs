import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    money: 25,
    bets: Array<{ id: number; val: number }>(),
  },
  getters: {
    getMoney: (state) => () => {
      return state.money;
    },
    getBets: (state) => () => {
      return state.bets;
    },
  },
  mutations: {
    increment(state, n: number) {
      state.money += n;
    },
    addBet(state, payload: { id: number; val: number }) {
      const bet = state.bets.find((e) => e.id == payload.id);
      if (bet) {
        bet.val += payload.val;
      } else {
        state.bets.push(payload);
      }
      console.log(state.bets);
    },
  },
  actions: {},
  modules: {},
});
