import { Cell } from "@/models/cell";
import { GRID_ROW } from "@/configs/constants";
import { cellsConfig, redNumber } from "@/configs/cells-config";

function addSpecialCells(cells: Cell[]): void {
    for (const cell of cellsConfig) {
        cells.push(
            new Cell(
                cell.title,
                cell.factor,
                cell.gridCol,
                cell.gridRow,
                cell.background,
                0,
                cell.predicate
            )
        );
    }
}

function initCells(): Cell[] {
    const cells: Cell[] = [];
    const FACTOR = 36;

    for (let row = 1; row <= GRID_ROW; row += 1) {
        for (let col = GRID_ROW + 1 - row; col <= FACTOR; col += GRID_ROW) {
            const TITLE = col.toString();
            const GD_ROW = row.toString();
            const GD_COL = ((col + GRID_ROW) / GRID_ROW).toString();
            const predicate = (value: number): boolean => value === col;
            const COLOR = redNumber.includes(col) ? "red" : "black";

            cells.push(
                new Cell(TITLE, FACTOR, GD_COL, GD_ROW, COLOR, 0, predicate)
            );
        }
    }
    addSpecialCells(cells);

    return cells;
}

export { initCells };
