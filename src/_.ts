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

const { assign, entries, keys, values } = Object;
const { isInteger, isNaN, isFinite, isSafeInteger } = Number;
const { isArray } = Array;

// e for Elder Score
const e = {
  // functions from Object
  // TODO: Add to Spec
  assign, entries, keys, values,

  // functions from Number
  // TODO: Add to Spec
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
    if (_.isArray(x)) { return (x as T[]).length === 0; }
    return _.isEmpty(keys(x));
  },

  isObject(x: unknown): x is object {
    const t = typeof x;
    return (t === 'object' && !!x) || t === 'function';
  },

  isObjectLike(x: unknown): x is object {
    return typeof x === 'object' && x !== null;
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

  // TODO: use Array.prototype.flat when the standard release.
  flatten<T = any>(array: any[], depth: number = 1): T[] {
    return flatDepth(array, depth);
  },

  first<T>(array: T[], n?: number): T|T[] {
    return n ? array.slice(0, n) : array[0];
  },

  initial<T>(array: T[], n: number = 1): T[] {
    return _.first(array, array.length - n) as T[];
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
