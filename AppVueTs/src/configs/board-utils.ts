import { Case } from "@/models/case";
import { caseConfig, redNumber } from "@/configs/case-config";

function initCaseConfig(cases: Case[]): void {
    for (const element of caseConfig) {
        cases.push(
            new Case(
                element.title,
                element.factor,
                element.gridCol,
                element.gridRow,
                element.background,
                0,
                element.predicate
            )
        );
    }
}

function initCase(): Case[] {
    const cases: Case[] = [];
    const ROW = 3;
    const FACTOR = 36;

    for (let row = 1; row <= ROW; row += 1) {
        for (let col = ROW + 1 - row; col <= FACTOR; col += ROW) {
            const TITLE = col.toString();
            const GD_ROW = row.toString();
            const GD_COL = ((col + ROW) / ROW).toString();
            const predicate = (value: number): boolean => value === col;
            const COLOR = redNumber.includes(col) ? "red" : "black";

            cases.push(
                new Case(TITLE, FACTOR, GD_COL, GD_ROW, COLOR, 0, predicate)
            );
        }
    }
    initCaseConfig(cases);

    return cases;
}

export { initCase };
