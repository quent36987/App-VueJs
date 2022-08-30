import { IBet } from "@/store/state";

export default class Gain {
    public static idIndex = 0;
    private readonly _bets: IBet;
    private readonly _gain: number;
    private readonly _id: number;
    private readonly _money: number;
    private readonly _value: number;

    public constructor(value: number, gain: number, bets: IBet, money: number) {
        this._value = value;
        this._gain = gain;
        this._id = Gain.idIndex;
        this._bets = bets;
        this._money = money;
        Gain.idIndex += 1;
    }

    public get gain(): number {
        return this._gain;
    }

    public get id(): number {
        return this._id;
    }

    public get value(): number {
        return this._value;
    }

    public get money(): number {
        return this._money;
    }
}
