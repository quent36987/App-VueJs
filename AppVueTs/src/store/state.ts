import { Round } from "@/models/round";
import { MONEY_INIT, tokenInit } from "@/configs/constants";

export interface IBet {
    id: number;
    value: number;
}
export interface IMessage {
    message: string;
    user: string;
}

export interface IStoreType {
    bets: IBet[];
    messages: IMessage[];
    money: number;
    rounds: Round[];
    time: number;
    tokenSelected: number;
    tokens: { id: number; value: number }[];
    user: string;
    wheelNumber: number;
}

export const state: IStoreType = {
    bets: [],
    messages: [],
    money: MONEY_INIT,
    rounds: [],
    time: 0,
    tokens: tokenInit,
    tokenSelected: 1,
    user: "",
    wheelNumber: 0,
};
