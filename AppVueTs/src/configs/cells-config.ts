import { isEven } from "@/utils/math";
import {
    FIRST_TIER,
    GRID_ROW,
    MIDDLE_CELL,
    SECOND_TIER,
} from "@/configs/constants";

const redNumber = [
    /* eslint-disable @typescript-eslint/no-magic-numbers */
    1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36,
    /* eslint-enable @typescript-eslint/no-magic-numbers */
];

/* eslint-disable @typescript-eslint/no-magic-numbers */
const cellsConfig = [
    {
        background: "green",
        factor: 36,
        gridCol: "1",
        gridRow: "1/4",
        predicate: (value: number): boolean => value === 0,
        title: "0",
    },
    {
        background: "green",
        factor: 3,
        gridCol: "2 / 6",
        gridRow: "",
        predicate: (value: number): boolean => value > 0 && value <= FIRST_TIER,
        title: "1st 12",
    },
    {
        background: "green",
        factor: 3,
        gridCol: "6/10",
        gridRow: "",
        predicate: (value: number): boolean =>
            value > FIRST_TIER && value <= SECOND_TIER,
        title: "2nd 12",
    },
    {
        background: "green",
        factor: 3,
        gridCol: "10/14",
        gridRow: "",
        predicate: (value: number): boolean => value > SECOND_TIER,
        title: "3rd 12",
    },
    {
        background: "green",
        factor: 2,
        gridCol: "2/4",
        gridRow: "",
        predicate: (value: number): boolean =>
            value > 0 && value <= MIDDLE_CELL,
        title: "1 To 18",
    },
    {
        background: "green",
        factor: 2,
        gridCol: "4/6",
        gridRow: "",
        predicate: (value: number): boolean => isEven(value) && value !== 0,
        title: "EVEN",
    },
    {
        background: "red",
        factor: 2,
        gridCol: "6/8",
        gridRow: "",
        predicate: (value: number): boolean => redNumber.includes(value),
        title: "R",
    },
    {
        background: "black",
        factor: 2,
        gridCol: "8/10",
        gridRow: "",
        predicate: (value: number): boolean =>
            !redNumber.includes(value) && value !== 0,
        title: "B",
    },
    {
        background: "green",
        factor: 2,
        gridCol: "10/12",
        gridRow: "",
        predicate: (value: number): boolean => !isEven(value),
        title: "ODD",
    },
    {
        background: "green",
        factor: 2,
        gridCol: "12/14",
        gridRow: "",
        predicate: (value: number): boolean => value > MIDDLE_CELL,
        title: "19 To 36",
    },
    {
        background: "green",
        factor: 3,
        gridCol: "14",
        gridRow: "1",
        predicate: (value: number): boolean =>
            value % GRID_ROW === 0 && value !== 0,
        title: "2to1",
    },
    {
        background: "green",
        factor: 3,
        gridCol: "14",
        gridRow: "2",
        predicate: (value: number): boolean => (value + 1) % GRID_ROW === 0,
        title: "2to1",
    },
    {
        background: "green",
        factor: 3,
        gridCol: "14",
        gridRow: "3",
        predicate: (value: number): boolean =>
            (value + GRID_ROW - 1) % GRID_ROW === 0,
        title: "2to1",
    },
];
/* eslint-enable @typescript-eslint/no-magic-numbers */

export { cellsConfig, redNumber };
