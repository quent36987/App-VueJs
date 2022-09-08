import { DELAY_DELETE_VALUE } from "@/configs/constants";
import { EMutation, store } from "@/store";

class Cell {
    private static _idIndex = 0;
    private readonly _backgroundColor: string;
    private readonly _factor: number;
    private readonly _gridCol: string;
    private readonly _gridRow: string;
    private readonly _id: number;
    private readonly _predicate: (val: number) => boolean;
    private readonly _title: string;
    private _value: number;

    // eslint-disable-next-line max-params
    public constructor(
        title: string,
        factor: number,
        gridCol: string,
        gridRow: string,
        backgroundColor: string,
        value: number,
        predicate: (val: number) => boolean
    ) {
        this._id = Cell._idIndex;
        this._title = title;
        this._factor = factor;
        this._gridRow = gridRow;
        this._gridCol = gridCol;
        this._backgroundColor = backgroundColor;
        const getters = store.getters as { betsId(id: number): number };
        this._value = value + getters.betsId(Cell._idIndex);
        this._predicate = predicate;
        Cell._idIndex += 1;
    }

    public get id(): number {
        return this._id;
    }

    public get backgroundColor(): string {
        return this._backgroundColor;
    }

    public get gridCol(): string {
        return this._gridCol;
    }

    public get gridRow(): string {
        return this._gridRow;
    }

    public get predicate(): (val: number) => boolean {
        return this._predicate;
    }

    public get title(): string {
        return this._title;
    }

    public get value(): number {
        return this._value;
    }

    public decrementValue(value: number): void {
        if (this._value >= value) {
            this.storeMutation(value);
        }
    }

    public gainEarning(value: number): number {
        const CELL_VALUE = this._value;

        if (this._predicate(value)) {
            setTimeout((): void => {
                this._value = 0;
            }, DELAY_DELETE_VALUE);

            return this._factor * CELL_VALUE;
        }

        this._value = 0;

        return 0;
    }

    public incrementValue(value: number): void {
        const getters = store.getters as { money: number };
        if (getters.money >= value) {
            this.storeMutation(-value);
        }
    }

    protected storeMutation(value: number): void {
        store.commit(EMutation.IncrementMoney, value);
        store.commit(EMutation.AddBet, { id: this.id, value: -value });
        this._value -= value;
    }
}
export { Cell };
