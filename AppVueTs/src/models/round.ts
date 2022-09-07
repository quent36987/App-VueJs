import { IBet } from "@/store/state";

class Round {
    public static idIndex = 0;
    private readonly _bets: IBet;
    private readonly _gain: number;
    private readonly _id: number;
    private readonly _money: number;
    private readonly _wheelNumber: number;

    public constructor(
        wheelNumber: number,
        gain: number,
        bets: IBet,
        money: number
    ) {
        this._wheelNumber = wheelNumber;
        this._gain = gain;
        this._id = Round.idIndex;
        this._bets = bets;
        this._money = money;
        Round.idIndex += 1;
    }

    public get gain(): number {
        return this._gain;
    }

    public get id(): number {
        return this._id;
    }

    public get wheelNumber(): number {
        return this._wheelNumber;
    }

    public get money(): number {
        return this._money;
    }
}

export { Round };
