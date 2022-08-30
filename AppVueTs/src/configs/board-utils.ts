import { Case } from "@/models/case";
import { caseConfig, redNumber } from "@/configs/case-config";

function initCaseConfig(cases: Case[]): void {
    for (const elt of caseConfig) {
        cases.push(
            new Case(
                elt.title,
                elt.gain,
                elt.gridCol,
                elt.gridRow,
                elt.background,
                0,
                elt.condition
            )
        );
    }
}

export function initCase(): Case[] {
    const cases: Case[] = [];
    const ROW = 3;
    const COL = 36;
    for (let row = 1; row <= ROW; row += 1) {
        for (let col = ROW + 1 - row; col <= COL; col += ROW) {
            cases.push(
                new Case(
                    col.toString(),
                    COL,
                    ((col + ROW) / ROW).toString(),
                    row.toString(),
                    redNumber.includes(col) ? "red" : "black",
                    0,
                    (val: number): boolean => val === col
                )
            );
        }
    }
    initCaseConfig(cases);
    return cases;
}
