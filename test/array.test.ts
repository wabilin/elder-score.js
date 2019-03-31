import _ from '../src/_';

describe('compact', () => {
  it('remove all falsy values', () => {
    expect(
      _.compact([1, 0, true, 'hi', '', null, undefined, {}]),
    ).toEqual([1, true, 'hi', {}]);
  });
});

describe('difference', () => {
  it('returns elements in 1st array but not in the 2nd', () => {
    expect(
      _.difference([1, 2, 3, 4, 5], [5, 2, 10]),
    ).toEqual([1, 3, 4]);
  });
});

describe('fromParis', () => {
  it('returns {} when given {}', () => {
    expect(_.fromEntries([])).toEqual({});
  });

  it('transforms pairs to object', () => {
    expect(
      _.fromEntries([['a', 1], ['b', 2]]),
    ).toEqual({ a: 1, b: 2 });
  });
});

describe('flatten', () => {
  it('default flatten depth is 1', () => {
    expect(
      _.flatten([0, [1], [[2]], [3, 4]]),
    ).toEqual([0, 1, [2], 3, 4]);
  });

  it('could flat to deeper', () => {
    expect(
      _.flatten([0, [1], [[2]], [3, 4]], 10),
    ).toEqual([0, 1, 2, 3, 4]);
  });
});

describe('first', () => {
  it('returns the first element by default', () => {
    expect(
      _.first([1, 2, 3]),
    ).toEqual(1);
  });

  it('returns the first n elements when given n', () => {
    expect(
      _.first([1, 2, 3], 2),
    ).toEqual([1, 2]);
  });
});

describe('initial', () => {
  it('returns an array without last entry by default', () => {
    expect(
      _.initial([1, 2, 3]),
    ).toEqual([1, 2]);
  });

  it('returns an array without last n entry when given n', () => {
    expect(
      _.initial([1, 2, 3], 2),
    ).toEqual([1]);
  });

  it('returns [] when n > length', () => {
    expect(_.initial([1, 2, 3], 8)).toEqual([]);
  });
});

describe('intersection', () => {
  it('returns [] when given no arrays', () => {
    expect(
      _.intersection(),
    ).toEqual([]);
  });

  it('returns uniq(array) when given 1 array', () => {
    expect(
      _.intersection([1, 1, 2, 3]),
    ).toEqual([1, 2, 3]);
  });

  it('returns intersection of all the arrays', () => {
    expect(
      _.intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]),
    ).toEqual([1, 2]);
  });
});

describe('last', () => {
  it('returns undefined is array is empty', () => {
    expect(_.last([])).toBe(undefined);
  });

  it('returns last element of array by default', () => {
    expect(_.last([1, 2, 3])).toBe(3);
  });

  it('returns last n element of array when given n', () => {
    expect(_.last([1, 2, 3], 2)).toEqual([2, 3]);
  });
});

describe('rest', () => {
  it('returns the rest of the elements in an array.', () => {
    expect(_.rest([1, 2, 3, 4])).toEqual([2, 3, 4]);
  });

  it('removes first n elements', () => {
    expect(_.rest([1, 2, 3, 4], 2)).toEqual([3, 4]);
  });
  it('returns [] when n > length', () => {
    expect(_.rest([1, 2, 3], 8)).toEqual([]);
  });
});

describe('take', () => {
  it('takes [1st-element] by default', () => {
    expect(_.take([1, 2, 3])).toEqual([1]);
  });

  it('takes the first n elements', () => {
    expect(_.take([1, 2, 3, 4], 3)).toEqual([1, 2, 3]);
    expect(_.take([1, 2, 3, 4], 0)).toEqual([]);
  });
});

describe('unzip', () => {
  it('returns unziped array', () => {
    expect(
      _.unzip([['moe', 30, true], ['larry', 40, false], ['curly', 50, false]]),
    ).toEqual(
      [['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]],
    );
  });
});

describe('without', () => {
  it('returns a copy of the array with all instances of the values removed.', () => {
    expect(
      _.without([1, 2, 1, 0, 3, 1, 4], 0, 1),
    ).toEqual([2, 3, 4]);
  });
});

describe('union', () => {
  it('creates an array of unique values', () => {
    expect(_.union([1 , 2], [2, 3], [1, 3, 5])).toEqual([1, 2, 3, 5]);
  });
});

describe('uniq', () => {
  it('creates a duplicate-free version of an array', () => {
    expect(_.uniq([5, 5, 6, 6])).toEqual([5, 6]);
  });
});

describe('zip', () => {
  it('zip arrays having the same length', () => {
    expect(
      _.zip(['a', 'b', 'c'], ['1', '2', '3']),
    ).toEqual([['a', '1'], ['b', '2'], ['c', '3']]);
  });
});

describe('max', () => {
  it('returns the max number in array', () => {
    expect(_.max([1, 3, 2, 4, 5, -1])).toEqual(5);
  });

  it('returns -Infinity when given empty array', () => {
    expect(_.max([])).toEqual(-Infinity);
  });
});
