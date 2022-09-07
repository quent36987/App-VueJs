import { Round } from "@/models/round";
import { IBet, IMessage, IStoreType } from "@/store/state";

export enum EMutation {
    AddBet = "addBet",
    AddRound = "addRound",
    IncrementMoney = "incrementMoney",
    ResetBet = "resetBet",
    PickToken = "pickToken",
    SetWheelNumber = "setWheelNumber",
    SetMoney = "setMoney",
    AddMessage = "addMessage",
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
    [EMutation.AddRound](state: IStoreType, round: Round): void {
        state.rounds.unshift(round);
    },
    [EMutation.PickToken](state: IStoreType, token: number): void {
        state.tokenSelected = token;
    },

    [EMutation.SetWheelNumber](state: IStoreType, value: number): void {
        state.wheelNumber = value;
    },
    [EMutation.SetMoney](state: IStoreType, value: number): void {
        state.money = value;
    },
    [EMutation.AddMessage](state: IStoreType, message: IMessage): void {
        state.messages.unshift(message);
    },
};
