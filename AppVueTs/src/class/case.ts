import { EMutation, store } from "@/store";

export default class Case {
    public backgroundColor: string;
    public condition: (val: number) => boolean;
    public gain: number;
    public gridCol: string;
    public gridRow: string;
    public id: number;
    public title: string;
    public value: number;

    // eslint-disable-next-line max-params
    public constructor(
        id: number,
        title: string,
        gain: number,
        gridCol: string,
        gridRow: string,
        backgroundColor: string,
        value: number,
        condition: (val: number) => boolean
    ) {
        this.id = id;
        this.title = title;
        this.gain = gain;
        this.gridRow = gridRow;
        this.gridCol = gridCol;
        this.backgroundColor = backgroundColor;
        const getters = store.getters as { betsId(id: number): number };
        this.value = value + getters.betsId(id);
        this.condition = condition;
    }

    public decrementValue(value: number): void {
        if (this.value >= value) {
            store.commit(EMutation.IncrementMoney, value);
            store.commit(EMutation.AddBet, { id: this.id, val: -value });
            this.value -= value;
        }
    }

    public incrementValue(value: number): void {
        const getters = store.getters as { money: number };
        if (getters.money >= value) {
            store.commit(EMutation.IncrementMoney, -value);
            store.commit(EMutation.AddBet, { id: this.id, val: value });
            this.value += value;
        }
    }

    public result(val: number): number {
        const TMP = this.value;
        if (this.condition(val)) {
            const DELAY = 1500;
            setTimeout((): void => {
                this.value = 0;
            }, DELAY);
            return this.gain * TMP;
        }
        this.value = 0;
        return 0;
    }
}
