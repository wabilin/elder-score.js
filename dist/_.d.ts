interface Dict<V> {
    [key: string]: V;
}
declare const _: {
    isArguments(x: unknown): boolean;
    isArray(x: unknown): boolean;
    isBoolean(x: unknown): x is boolean;
    isObjectLike(x: unknown): x is object;
    compact<T>(elements: T[]): T[];
    difference<T>(a: T[], b: T[]): T[];
    drop<T>(a: T[], count?: number): T[];
    dropRight<T>(a: T[], count?: number): T[];
    fromEntries<T>(pairs: [string, T][]): Dict<T>;
    flatten<T = any>(array: any[], depth?: number): T[];
    last<T>(array: T[]): T | undefined;
    take<T>(array: T[], n?: number): T[];
    union<T>(array: T[], ...rest: T[][]): T[];
    uniq<T>(array: T[]): T[];
    zip<T>(...arrays: T[][]): (T | undefined)[][];
    max(array: number[]): number;
};
export default _;
//# sourceMappingURL=_.d.ts.map