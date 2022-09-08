import { Cell } from "@/models/cell";
import { cellsConfig, redNumber } from "@/configs/cells-config";
import { GRID_ROW, MAX_NUMBER_WHEEL } from "@/configs/constants";

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
    const FACTOR = MAX_NUMBER_WHEEL;

    for (let row = 0; row < GRID_ROW; row += 1) {
        for (let value = GRID_ROW - row; value <= FACTOR; value += GRID_ROW) {
            const TITLE = value.toString();
            const GD_ROW = (row + 1).toString();
            const GD_COL = ((value + GRID_ROW) / GRID_ROW).toString();
            const COLOR = redNumber.includes(value) ? "red" : "black";
            const predicate = (wheelNumber: number): boolean => {
                return wheelNumber === value;
            };

            cells.push(
                new Cell(TITLE, FACTOR, GD_COL, GD_ROW, COLOR, 0, predicate)
            );
        }
    }
    addSpecialCells(cells);

    return cells;
}

export { initCells };
