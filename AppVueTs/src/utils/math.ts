function isEven(value: number): boolean {
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    return value % 2 === 0;
}

function randomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1));
}

function tableSum(table: number[]): number {
    let sum = 0;
    for (const VALUE of table) {
        sum += VALUE;
    }
    return sum;
}

export { isEven, randomNumber, tableSum };
