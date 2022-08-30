import Gain from "@/models/gain";
import { IStoreType } from "@/store/state";

export const enum EMutation {
    AddBet = "addBet",
    AddGain = "addGain",
    IncrementMoney = "incrementMoney",
    ResetBet = "resetBet",
    PickToken = "pickToken",
    SetWheelNumber = "setWheelNumber",
    SetMoney = "setMoney",
}

export const mutations = {
    [EMutation.IncrementMoney](state: IStoreType, val: number): void {
        state.money += val;
    },
    [EMutation.AddBet](
        state: IStoreType,
        payload: { id: number; val: number }
    ): void {
        const bet = state.bets.find((elt): boolean => elt.id === payload.id);
        if (bet) {
            bet.val += payload.val;
        } else {
            state.bets.push(payload);
        }
    },
    [EMutation.ResetBet](state: IStoreType): void {
        state.bets = [];
    },
    [EMutation.PickToken](state: IStoreType, token: number): void {
        state.tokenSelected = token;
    },
    [EMutation.AddGain](state: IStoreType, gain: Gain): void {
        state.gains.unshift(gain);
    },
    [EMutation.SetWheelNumber](state: IStoreType, value: number): void {
        state.wheelNumber = value;
    },
    [EMutation.SetMoney](state: IStoreType, value: number): void {
        state.money = value;
    },
};
