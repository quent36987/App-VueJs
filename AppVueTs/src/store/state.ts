import { IToken } from "@/utils/interfaces";
import { Round } from "@/models/round";
import { MONEY_INIT, tokenInit } from "@/configs/constants";

interface IBet {
    id: number;
    value: number;
}
interface IMessage {
    message: string;
    user: string;
}

interface IStoreType {
    bets: IBet[];
    messages: IMessage[];
    money: number;
    rounds: Round[];
    selectedToken: number;
    time: number;
    tokens: IToken[];
    user: string;
    wheelNumber: number;
}

const state: IStoreType = {
    bets: [],
    messages: [],
    money: MONEY_INIT,
    rounds: [],
    selectedToken: 1,
    time: 0,
    tokens: tokenInit,
    user: "",
    wheelNumber: 0,
};

export { IMessage, IStoreType, state, IBet };
