
import {store} from '@/store'

export default class Bet {
  public id: number;
  public title: string;
  public gain: number;
  public gridRow: string;
  public gridCol: string;
  public backgroundColor: string;
  public value: number;
  public condition: (val: number) => boolean;

  constructor(id: number,
    title: string,
    gain: number,
              gridCol: string,
              gridRow: string,
              backgroundColor: string,
              value: number,
              condition: (val: number) => boolean) {
    this.id = id;
    this.title = title;
    this.gain = gain;
    this.gridRow = gridRow;
    this.gridCol = gridCol;
    this.backgroundColor = backgroundColor;
    this.value = value;
    this.condition = condition;
}

  Increment() {
    if (store.getters.getMoney() > 0) {
      store.commit("increment", -1);
      store.commit("addBet", { id: this.id, val: 1 });
      this.value++;
    }
    console.log(store.state.money);
  }

  Result(val: number): number {
    if (this.condition(val)) {
      const color = this.backgroundColor;
      this.backgroundColor = "rgba(134,192,119,0.3)";
      setTimeout(() => this.backgroundColor = color, 1500);
      return this.gain;
    }
    return 0;
  }




}
