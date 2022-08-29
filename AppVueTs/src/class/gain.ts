export default class Gain {
    public static idVal = 0;
    public gain: number;
    public id: number;
    public value: number;

    public constructor(value: number, gain: number) {
        this.value = value;
        this.gain = gain;
        this.id = Gain.idVal;
        Gain.idVal += 1;
    }
}
