// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface IDict<T = any> {
  [key: string]: T | undefined;
}
