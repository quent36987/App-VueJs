import Gain from "@/class/gain";

const MONEY_INIT = 25;
// TODO : a sup ca
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
}

export const state: IStoreType = {
    bets: [],
    gains: [],
    money: MONEY_INIT,
    tokenList: tokenInit,
    tokenSelected: 1,
};
