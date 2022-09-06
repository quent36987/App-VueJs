import { isEven } from "@/utils/math";

const redNumber = [
    /* eslint-disable @typescript-eslint/no-magic-numbers */
    1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36,
    /* eslint-enable @typescript-eslint/no-magic-numbers */
];

const FIRST_TIER = 12;
const SECOND_TIER = 24;

const MIDDLE_CASE = 18;

const GRID_ROW = 3;
/* eslint-disable @typescript-eslint/no-magic-numbers */
const caseConfig = [
    {
        background: "green",
        factor: 36,
        gridCol: "1",
        gridRow: "1/4",
        predicate: (value: number): boolean => value === 0,
        title: "0",
        value: 0,
    },
    {
        background: "green",
        factor: 3,
        gridCol: "2 / 6",
        gridRow: "",
        predicate: (value: number): boolean => value > 0 && value <= FIRST_TIER,
        title: "1st 12",
        value: 0,
    },
    {
        background: "green",
        factor: 3,
        gridCol: "6/10",
        gridRow: "",
        predicate: (value: number): boolean =>
            value > FIRST_TIER && value <= SECOND_TIER,
        title: "2nd 12",
        value: 0,
    },
    {
        background: "green",
        factor: 3,
        gridCol: "10/14",
        gridRow: "",
        predicate: (value: number): boolean => value > SECOND_TIER,
        title: "3rd 12",
        value: 0,
    },
    {
        background: "green",
        factor: 2,
        gridCol: "2/4",
        gridRow: "",
        predicate: (value: number): boolean =>
            value > 0 && value <= MIDDLE_CASE,
        title: "1 To 18",
        value: 0,
    },
    {
        background: "green",
        factor: 2,
        gridCol: "4/6",
        gridRow: "",
        predicate: (value: number): boolean => isEven(value) && value !== 0,
        title: "EVEN",
        value: 0,
    },
    {
        background: "red",
        factor: 2,
        gridCol: "6/8",
        gridRow: "",
        predicate: (value: number): boolean => redNumber.includes(value),
        title: "R",
        value: 0,
    },
    {
        background: "black",
        factor: 2,
        gridCol: "8/10",
        gridRow: "",
        predicate: (value: number): boolean =>
            !redNumber.includes(value) && value !== 0,
        title: "B",
        value: 0,
    },
    {
        background: "green",
        factor: 2,
        gridCol: "10/12",
        gridRow: "",
        predicate: (value: number): boolean => !isEven(value),
        title: "ODD",
        value: 0,
    },
    {
        background: "green",
        factor: 2,
        gridCol: "12/14",
        gridRow: "",
        predicate: (value: number): boolean => value > MIDDLE_CASE,
        title: "19 To 36",
        value: 0,
    },
    {
        background: "green",
        factor: 3,
        gridCol: "14",
        gridRow: "1",
        predicate: (value: number): boolean =>
            value % GRID_ROW === 0 && value !== 0,
        title: "2to1",
        value: 0,
    },
    {
        background: "green",
        factor: 3,
        gridCol: "14",
        gridRow: "2",
        predicate: (value: number): boolean => (value + 1) % GRID_ROW === 0,
        title: "2to1",
        value: 0,
    },
    {
        background: "green",
        factor: 3,
        gridCol: "14",
        gridRow: "3",
        predicate: (value: number): boolean =>
            (value + GRID_ROW - 1) % GRID_ROW === 0,
        title: "2to1",
        value: 0,
    },
];
/* eslint-enable @typescript-eslint/no-magic-numbers */

export { caseConfig, redNumber };
