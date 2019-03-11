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

const arrayFunctions = {
  compact<T>(elements: T[]): T[] {
    return elements.filter(Boolean);
  },

  concat<T>(...arrays: (T[]|T)[]): T[] {
    const ary: T[] = [];
    return ary.concat(...arrays)
  },

  difference<T>(a: T[], b: T[]): T[] {
    const set = new Set(b)
    return a.filter(x => !set.has(x));
  },

  // TODO: use Array.prototype.flat when the standard release.
  flatten<T = any>(array: any[], depth: number = 1): T[] {
    return flatDepth(array, depth);
  },

  findIndex<T>(array: T[], callback: FindIndexCallback<T>, thisArg?: object) {
    return array.findIndex(callback, thisArg);
  },

  fill<T>(array: T[], value: T, start = 0, end=array.length): T[] {
    return array.fill(value, start, end);
  },
};

export default { 
  ...arrayFunctions,
};
