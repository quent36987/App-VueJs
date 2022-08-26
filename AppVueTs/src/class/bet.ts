import { store } from "@/store";

export default class Bet {
  public id: number;
  public title: string;
  public gain: number;
  public gridRow: string;
  public gridCol: string;
  public backgroundColor: string;
  public value: number;
  public condition: (val: number) => boolean;

  constructor(
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
    this.value = value;
    this.condition = condition;
  }

  Increment(val: number) {
    if (store.getters.getMoney() >= val) {
      store.commit("incrementMoney", -val);
      store.commit("addBet", { id: this.id, val: val });
      this.value += val;
    }
  }
  Decrement(val: number) {
    if (this.value >= val) {
      store.commit("incrementMoney", val);
      store.commit("addBet", { id: this.id, val: -val });
      this.value -= val;
    }
  }

  Result(val: number): number {
    const tmp = this.value;
    if (this.condition(val)) {
      const color = this.backgroundColor;
      this.backgroundColor = "rgba(134,192,119,0.3)";
      setTimeout(() => {
        this.backgroundColor = color;
        this.value = 0;
      }, 1500);
      return this.gain * tmp;
    }
    this.value = 0;
    return 0;
  }
}
