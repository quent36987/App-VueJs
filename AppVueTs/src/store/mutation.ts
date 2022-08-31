import { Gain } from "@/models/gain";
import { IBet, IStoreType } from "@/store/state";

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
    [EMutation.IncrementMoney](state: IStoreType, value: number): void {
        state.money += value;
    },
    [EMutation.AddBet](state: IStoreType, payload: IBet): void {
        const betFind = state.bets.find(
            (bet): boolean => bet.id === payload.id
        );
        if (betFind) {
            betFind.value += payload.value;
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
