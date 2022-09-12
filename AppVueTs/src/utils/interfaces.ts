// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface IDict<T = any> {
    [key: string]: T | undefined;
}

interface IListItem {
    id: string | number;
}

interface IToken {
    id: number;
    value: number;
}

export { IDict, IListItem, IToken };
