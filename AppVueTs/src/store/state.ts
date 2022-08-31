import { Gain } from "@/models/gain";

// TODO : a sup ca dans database apres :O
const MONEY_INIT = 25;
/* eslint-disable @typescript-eslint/no-magic-numbers */
const tokenInit = [
    { id: 1, value: 1 },
    { id: 2, value: 5 },
    { id: 3, value: 25 },
    { id: 4, value: 100 },
];
/* eslint-enable @typescript-eslint/no-magic-numbers */

export interface IBet {
    id: number;
    value: number;
}

export interface IStoreType {
    bets: IBet[];
    gains: Gain[];
    money: number;
    tokenList: { id: number; value: number }[];
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
