import Gain from "@/class/gain";

// TODO : a sup ca dans database apres :O
const MONEY_INIT = 25;
// eslint-disable-next-line @typescript-eslint/no-magic-numbers
const tokenInit = [1, 5, 25, 100];

export interface IBet {
    id: number;
    val: number;
}

export interface IStoreType {
    bets: IBet[];
    gains: Gain[];
    money: number;
    tokenList: number[];
    tokenSelected: number;
    wheelNumber: number;
}

export const state: IStoreType = {
    bets: [],
    gains: [],
    money: MONEY_INIT,
    tokenList: tokenInit,
    tokenSelected: 1,
    wheelNumber: 0,
};
