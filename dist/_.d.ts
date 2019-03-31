interface Dict<V> {
    [key: string]: V;
}
declare const _: {
    head: <T>(array: T[], n?: number | undefined) => T | T[];
    tail: <T>(array: T[], index?: number) => T[];
    drop: <T>(array: T[], index?: number) => T[];
    dropRight: <T>(array: T[], n?: number) => T[];
    assign: {
        <T, U>(target: T, source: U): T & U;
        <T, U, V>(target: T, source1: U, source2: V): T & U & V;
        <T, U, V, W>(target: T, source1: U, source2: V, source3: W): T & U & V & W;
        (target: object, ...sources: any[]): any;
    };
    entries: {
        <T>(o: {
            [s: string]: T;
        } | ArrayLike<T>): [string, T][];
        (o: {}): [string, any][];
    };
    keys: (o: {}) => string[];
    values: {
        <T>(o: {
            [s: string]: T;
        } | ArrayLike<T>): T[];
        (o: {}): any[];
    };
    isInteger: (number: number) => boolean;
    isNaN: (number: number) => boolean;
    isFinite: (number: number) => boolean;
    isSafeInteger: (number: number) => boolean;
    isArray: (arg: any) => arg is any[];
    isArguments(x: unknown): boolean;
    isBoolean(x: unknown): x is boolean;
    isObjectLike(x: unknown): x is object;
    compact<T>(elements: T[]): T[];
    difference<T>(a: T[], b: T[]): T[];
    fromEntries<T>(pairs: [string, T][]): Dict<T>;
    flatten<T = any>(array: any[], depth?: number): T[];
    first<T>(array: T[], n?: number | undefined): T | T[];
    initial<T>(array: T[], n?: number): T[];
    intersection<T>(...arrays: T[][]): T[];
    last<T>(array: T[], n?: number | undefined): T | T[] | undefined;
    rest<T>(array: T[], index?: number): T[];
    take<T>(array: T[], n?: number): T[];
    without<T>(array: T[], ...values: T[]): T[];
    union<T>(array: T[], ...rest: T[][]): T[];
    uniq<T>(array: T[]): T[];
    zip<T>(...arrays: T[][]): (T | undefined)[][];
    max(array: number[]): number;
};
export default _;
//# sourceMappingURL=_.d.ts.map