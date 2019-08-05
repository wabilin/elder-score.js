interface Dict<V> {
  [key: string]: V;
}

const flatDepth = (array: any[], depth: number): any[] => {
  return array.reduce(
    (acc, val) => {
      if (depth > 1 && Array.isArray(val)) {
        return acc.concat(flatDepth(val, depth - 1));
      }
      return acc.concat(val);
    },
    []);
};

const endIndex = <T>(array: T[]): number => array.length - 1;
const bSearch = <T>(array: T[], val: T, low: number, high: number): number => {
  if (low >= high) { return low; }

  const m = Math.floor((low + high) / 2);
  if (array[m] < val) { return bSearch(array, val, m + 1, high); }
  return bSearch(array, val, low, m);
};

const range = (start: number, end: number, step = 1) => {
  const len = Math.max(Math.ceil((end - start) / step), 0);
  // tslint:disable-next-line: prefer-array-literal
  const ary = Array(len);
  for (let val = start, i = 0; i < len; i += 1, val += step) {
    ary[i] = val;
  }

  return ary;
}

const { assign, entries, keys, values } = Object;
const { isInteger, isNaN, isFinite, isSafeInteger } = Number;
const { isArray } = Array;

// e for Elder Score
const e = {
  // functions from Object
  assign, entries, keys, values,

  // functions from Number
  isInteger, isNaN, isFinite, isSafeInteger,

  // functions from Array
  isArray,

  isArguments(x: unknown) {
    return _.isObjectLike(x) && x.toString() === '[object Arguments]';
  },

  isBoolean(x: unknown): x is boolean {
    return x === true || x === false;
  },

  isEmpty<T>(x: null|undefined|object|T[]): boolean {
    if (x == null) { return true; }
    if (_.isArray(x)) {
      return (<T[]>x).length === 0;
    }
    return _.isEmpty(keys(x));
  },

  isObject(x: unknown): x is object {
    const t = typeof x;
    return (t === 'object' && !!x) || t === 'function';
  },

  isObjectLike(x: unknown): x is object {
    return typeof x === 'object' && x !== null;
  },

  range(start: number, end?: number, step?: number): number[] {
    if (end === undefined) {
      return range(0, start, step);
    }
    return range(start, end, step);
  },

  chunk<T>(array: T[], size = 1): T[][] {
    const { length } = array;
    return range(0, Math.ceil(length / size) * size, size)
      .map(i => array.slice(i, i + size));
  },

  compact<T>(elements: T[]): T[] {
    return elements.filter(Boolean);
  },

  difference<T>(a: T[], b: T[]): T[] {
    const set = new Set(b);
    return a.filter(x => !set.has(x));
  },

  fromEntries<T>(pairs: [string, T][]): Dict<T> {
    const obj: Dict<T> = {};
    pairs.forEach(([key, val]) => { obj[key] = val; });
    return obj;
  },

  // NOTE: use Array.prototype.flat when the standard release.
  flatten<T = any>(array: any[], depth: number = 1): T[] {
    return flatDepth(array, depth);
  },

  first<T>(array: T[], n?: number): T|T[] {
    return n ? array.slice(0, n) : array[0];
  },

  initial<T>(array: T[], n: number = 1): T[] {
    return <T[]>(_.first(array, array.length - n));
  },

  findLastIndex<T>(array: T[], predicate: (ele: T) => boolean): number {
    for (let i = endIndex(array); i >= 0; i -= 1) {
      if (predicate(array[i])) { return i; }
    }

    return -1;
  },

  intersection<T>(...arrays: T[][]): T[] {
    if (_.isEmpty(arrays)) { return []; }

    const head = [...(new Set(arrays[0]))];
    const sets = _.rest(arrays).map(x => new Set(x));
    return head.filter(x => sets.every(set => set.has(x)));
  },

  last<T>(array: T[], n?: number): T|T[]|undefined {
    const { length } = array;
    return n ? array.slice(length - n) : array[length - 1];
  },

  rest<T>(array: T[], index: number = 1): T[] {
    return array.slice(index);
  },

  take<T> (array: T[], n: number = 1): T[] {
    return array.slice(0, n);
  },

  sortedIndex<T>(array: T[], val: T) {
    return bSearch(array, val, 0, array.length);
  },

  unzip<T>(arrays: T[][]): T[][] {
    if (_.isEmpty(arrays)) { return []; }

    return arrays[0].map((e, i) => arrays.map(array => array[i]));
  },

  without<T>(array: T[], ...values: T[]): T[] {
    return _.difference(array, values);
  },

  union<T> (array: T[], ...rest: T[][]): T[] {
    return _.uniq(array.concat(...rest));
  },

  uniq<T> (array: T[]): T[] {
    return [...new Set(array)];
  },

  zip<T> (...arrays: T[][]): (T|undefined)[][] {
    const len = _.max(arrays.map(x => x.length));
    const zipped = [];
    for (let i = 0; i < len; i += 1) {
      zipped.push(arrays.map(array => array[i]));
    }
    return zipped;
  },

  max (array: number[]): number {
    return Math.max(...array);
  },
};

// alias
const _ = {
  ...e,
  head: e.first,
  tail: e.rest,
  drop: e.rest,
  dropRight: e.initial,
};

export default _;
