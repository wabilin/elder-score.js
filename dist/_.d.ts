interface Dict<V> {
    [key: string]: V;
}
interface FuncObj {
    [key: string]: Function | unknown;
}
declare const _: {
    head: <T>(array: T[], n?: number | undefined) => T | T[];
    tail: <T_1>(array: T_1[], index?: number) => T_1[];
    drop: <T_1>(array: T_1[], index?: number) => T_1[];
    dropRight: <T_2>(array: T_2[], n?: number) => T_2[];
    assign: {
        <T_3, U>(target: T_3, source: U): T_3 & U;
        <T_4, U_1, V>(target: T_4, source1: U_1, source2: V): T_4 & U_1 & V;
        <T_5, U_2, V_1, W>(target: T_5, source1: U_2, source2: V_1, source3: W): T_5 & U_2 & V_1 & W;
        (target: object, ...sources: any[]): any;
    };
    entries: {
        <T_6>(o: {
            [s: string]: T_6;
        } | ArrayLike<T_6>): [string, T_6][];
        (o: {}): [string, any][];
    };
    keys: {
        (o: object): string[];
        (o: {}): string[];
    };
    values: {
        <T_7>(o: {
            [s: string]: T_7;
        } | ArrayLike<T_7>): T_7[];
        (o: {}): any[];
    };
    isInteger: (number: number) => boolean;
    isNaN: (number: number) => boolean;
    isFinite: (number: number) => boolean;
    isSafeInteger: (number: number) => boolean;
    isArray: (arg: any) => arg is any[];
    isArguments(x: unknown): boolean;
    isBoolean(x: unknown): x is boolean;
    isEmpty<T_8>(x: object | T_8[] | null | undefined): boolean;
    isObject(x: unknown): x is object;
    isObjectLike(x: unknown): x is object;
    range(start: number, end?: number | undefined, step?: number | undefined): number[];
    chunk<T_9>(array: T_9[], size?: number): T_9[][];
    compact<T_10>(elements: T_10[]): T_10[];
    difference<T_11>(a: T_11[], b: T_11[]): T_11[];
    fromEntries<T_12>(pairs: [string, T_12][]): Dict<T_12>;
    flatten<T_13 = any>(array: any[], depth?: number): T_13[];
    first<T>(array: T[], n?: number | undefined): T | T[];
    initial<T_2>(array: T_2[], n?: number): T_2[];
    findLastIndex<T_14>(array: T_14[], predicate: (ele: T_14) => boolean): number;
    intersection<T_15>(...arrays: T_15[][]): T_15[];
    last<T_16>(array: T_16[], n?: number | undefined): T_16 | T_16[] | undefined;
    rest<T_1>(array: T_1[], index?: number): T_1[];
    take<T_17>(array: T_17[], n?: number): T_17[];
    sortedIndex<T_18>(array: T_18[], val: T_18): number;
    unzip<T_19>(arrays: T_19[][]): T_19[][];
    without<T_20>(array: T_20[], ...values: T_20[]): T_20[];
    union<T_21>(array: T_21[], ...rest: T_21[][]): T_21[];
    uniq<T_22>(array: T_22[]): T_22[];
    zip<T_23>(...arrays: T_23[][]): (T_23 | undefined)[][];
    max(array: number[]): number;
    has(obj: object, key: string | number | symbol): boolean;
    bindAll<T_24 extends FuncObj>(object: T_24, ...methodNames: (keyof T_24)[]): void;
    memoize<K extends string | number, T_25, R, TH>(fun: (key: K, ...rest: T_25[]) => R, hasher?: Function | undefined): (this: TH, key: K, ...rest: T_25[]) => {
        [key: string]: R;
    }[K];
};
export default _;
//# sourceMappingURL=_.d.ts.map