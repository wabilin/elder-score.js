const _ = {
  concat<T>(...arrays: (T[]|T)[]): T[] {
    const ary: T[] = [];
    return ary.concat(...arrays)
  },

  fill<T>(array: T[], value: T, start = 0, end=array.length): T[] {
    return array.fill(value, start, end);
  },
};

export default _;

