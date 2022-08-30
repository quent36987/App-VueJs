import { isEven } from "@/utils/math";

export const redNumber = [
    /* eslint-disable @typescript-eslint/no-magic-numbers */
    1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36,
    /* eslint-enable @typescript-eslint/no-magic-numbers */
];

const GAIN_X2 = 2;
const GAIN_X3 = 3;
const GAIN_X36 = 36;

const FIRST_TIER = 12;
const SECOND_TIER = 24;

const MIDDLE_CASE = 18;

const GRID_ROW = 3;

export const caseConfig = [
    {
        background: "green",
        condition: (val: number): boolean => val === 0,
        gain: GAIN_X36,
        gridCol: "1",
        gridRow: "1/4",
        title: "0",
        value: 0,
    },
    {
        background: "green",
        condition: (val: number): boolean => val > 0 && val <= FIRST_TIER,
        gain: GAIN_X3,
        gridCol: "2 / 6",
        gridRow: "",
        title: "1st 12",
        value: 0,
    },
    {
        background: "green",
        condition: (val: number): boolean =>
            val > FIRST_TIER && val <= SECOND_TIER,
        gain: GAIN_X3,
        gridCol: "6/10",
        gridRow: "",
        title: "2nd 12",
        value: 0,
    },
    {
        background: "green",
        condition: (val: number): boolean => val > SECOND_TIER,
        gain: GAIN_X3,
        gridCol: "10/14",
        gridRow: "",
        title: "3rd 12",
        value: 0,
    },
    {
        background: "green",
        condition: (val: number): boolean => val > 0 && val <= MIDDLE_CASE,
        gain: GAIN_X2,
        gridCol: "2/4",
        gridRow: "",
        title: "1 To 18",
        value: 0,
    },
    {
        background: "green",
        condition: (val: number): boolean => isEven(val) && val !== 0,
        gain: GAIN_X2,
        gridCol: "4/6",
        gridRow: "",
        title: "EVEN",
        value: 0,
    },
    {
        background: "red",
        condition: (val: number): boolean => redNumber.includes(val),
        gain: GAIN_X2,
        gridCol: "6/8",
        gridRow: "",
        title: "R",
        value: 0,
    },
    {
        background: "black",
        condition: (val: number): boolean =>
            !redNumber.includes(val) && val !== 0,
        gain: GAIN_X2,
        gridCol: "8/10",
        gridRow: "",
        title: "B",
        value: 0,
    },
    {
        background: "green",
        condition: (val: number): boolean => !isEven(val),
        gain: GAIN_X2,
        gridCol: "10/12",
        gridRow: "",
        title: "ODD",
        value: 0,
    },
    {
        background: "green",
        condition: (val: number): boolean => val > MIDDLE_CASE,
        gain: GAIN_X2,
        gridCol: "12/14",
        gridRow: "",
        title: "19 To 36",
        value: 0,
    },
    {
        background: "green",
        condition: (val: number): boolean => val % GRID_ROW === 0 && val !== 0,
        gain: GAIN_X3,
        gridCol: "14",
        gridRow: "1",
        title: "2to1",
        value: 0,
    },
    {
        background: "green",
        condition: (val: number): boolean => (val + 1) % GRID_ROW === 0,
        gain: GAIN_X3,
        gridCol: "14",
        gridRow: "2",
        title: "2to1",
        value: 0,
    },
    {
        background: "green",
        condition: (val: number): boolean =>
            (val + GRID_ROW - 1) % GRID_ROW === 0,
        gain: GAIN_X3,
        gridCol: "14",
        gridRow: "3",
        title: "2to1",
        value: 0,
    },
];
