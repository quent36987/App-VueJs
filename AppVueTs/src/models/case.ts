import { EMutation, store } from "@/store";

export class Case {
    public static idIndex = 0;
    public backgroundColor: string;
    public factor: number;
    public gridCol: string;
    public gridRow: string;
    public predicate: (val: number) => boolean;
    public title: string;
    public value: number;
    private readonly _id: number;

    // eslint-disable-next-line max-params
    public constructor(
        title: string,
        factor: number,
        gridCol: string,
        gridRow: string,
        backgroundColor: string,
        value: number,
        condition: (val: number) => boolean
    ) {
        this._id = Case.idIndex;
        this.title = title;
        this.factor = factor;
        this.gridRow = gridRow;
        this.gridCol = gridCol;
        this.backgroundColor = backgroundColor;
        const getters = store.getters as { betsId(id: number): number };
        this.value = value + getters.betsId(Case.idIndex);
        this.predicate = condition;
        Case.idIndex += 1;
    }

    public get id(): number {
        return this._id;
    }

    public decrementValue(value: number): void {
        if (this.value >= value) {
            this.storeMutation(value);
        }
    }

    public incrementValue(value: number): void {
        const getters = store.getters as { money: number };
        if (getters.money >= value) {
            this.storeMutation(-value);
        }
    }

    public result(value: number): number {
        const CASE_VALUE = this.value;

        if (this.predicate(value)) {
            const DELAY_DELETE_VALUE = 1500;
            setTimeout((): void => {
                this.value = 0;
            }, DELAY_DELETE_VALUE);

            return this.factor * CASE_VALUE;
        }

        this.value = 0;

        return 0;
    }

    private storeMutation(value: number): void {
        store.commit(EMutation.IncrementMoney, value);
        store.commit(EMutation.AddBet, { id: this.id, value: -value });
        this.value -= value;
    }
}
