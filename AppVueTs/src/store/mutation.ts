import Gain from "@/class/gain";
import { IStore } from "@/store/index";

export const enum EMutation {
    AddBet = "addBet",
    AddGain = "addGain",
    IncrementMoney = "incrementMoney",
    ResetBet = "resetBet",
    PickToken = "pickToken",
}

export const mutations = {
    [EMutation.IncrementMoney](state: IStore, val: number): void {
        state.money += val;
    },
    [EMutation.AddBet](
        state: IStore,
        payload: { id: number; val: number }
    ): void {
        const bet = state.bets.find((elt): boolean => elt.id === payload.id);
        if (bet) {
            bet.val += payload.val;
        } else {
            state.bets.push(payload);
        }
    },
    [EMutation.ResetBet](state: IStore): void {
        state.bets = [];
    },
    [EMutation.PickToken](state: IStore, token: number): void {
        state.tokenSelected = token;
    },
    [EMutation.AddGain](state: IStore, gain: Gain): void {
        state.gains.unshift(gain);
    },
};
