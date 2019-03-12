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

const _ = {
  isArguments(x: unknown) {
    return _.isObjectLike(x) && x.toString() === '[object Arguments]';
  },

  isArray(x: unknown) {
    return Array.isArray(x);
  },

  isBoolean(x: unknown): x is boolean {
    return x === true || x === false;
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

  drop<T>(a: T[], count: number = 1): T[] {
    return a.slice(count < 0 ? 0 : count);
  },

  dropRight<T>(a: T[], count: number = 1): T[] {
    return a.slice(0, a.length - count);
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

  last<T>(array: T[]): T|undefined {
    return array[array.length - 1];
  },

  take<T> (array: T[], n: number = 1): T[] {
    return array.slice(0, n);
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

  // TODO: Add test
  max (array: number[]): number {
    return Math.max(...array);
  },
};

export default _;
