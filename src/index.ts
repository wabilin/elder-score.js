interface FindIndexCallback<T> {
  (ele: T, index?: number, array?: T[]): boolean
}

const flatDepth = (array: any[], depth: number): any[] => {
  return array.reduce((acc, val) => {
    if (depth > 1 && Array.isArray(val)) {
      return acc.concat(flatDepth(val, depth - 1))
    } else {
      return acc.concat(val)
    }
  }, []);
}

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
    return typeof x === 'object' && x !== null
  },

  compact<T>(elements: T[]): T[] {
    return elements.filter(Boolean);
  },

  difference<T>(a: T[], b: T[]): T[] {
    const set = new Set(b)
    return a.filter(x => !set.has(x));
  },

  // TODO: use Array.prototype.flat when the standard release.
  flatten<T = any>(array: any[], depth: number = 1): T[] {
    return flatDepth(array, depth);
  },
};

export default _;
