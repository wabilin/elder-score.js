import _ from '../src'

describe('compact', () => {
  it('remove all falsy values', () => {
    expect(
      _.compact([1, 0, true, 'hi', '', null, undefined, {}])
    ).toEqual([1, true, 'hi', {}])
  })
})

describe('difference', () => {
  it('returns elements in 1st array but not in the 2nd', () => {
    expect(
      _.difference([1, 2, 3, 4, 5], [5, 2, 10])
    ).toEqual([1, 3, 4])
  })
})

describe('drop', () => {
  it('removes first element by default', () => {
    expect(_.drop([1, 2, 3])).toEqual([2, 3])
  })

  it('removes first n elements', () => {
    expect(_.drop([1, 2, 3], 2)).toEqual([3])
  })

  it('returns [] when n > length', () => {
    expect(_.drop([1, 2, 3], 8)).toEqual([])
  })
})

describe('dropRight', () => {
  it('removes first element from right by default', () => {
    expect(_.dropRight([1, 2, 3])).toEqual([1, 2])
  })

  it('removes first n elements from right', () => {
    expect(_.dropRight([1, 2, 3], 2)).toEqual([1])
  })

  it('returns [] when n > length', () => {
    expect(_.dropRight([1, 2, 3], 8)).toEqual([])
  })
})

describe('fromParis', () => {
  it('returns {} when given {}', () => {
    expect(_.fromEntries([])).toEqual({});
  })

  it('transforms pairs to object', () => {
    expect(
      _.fromEntries([['a', 1], ['b', 2]])
    ).toEqual({a: 1, b: 2});
  })
})

describe('flatten', () => {
  it('default flatten depth is 1', () => {
    expect(
      _.flatten([0, [1], [[2]], [3, 4]])
    ).toEqual([0, 1, [2], 3, 4])
  })

  it('could flat to deeper', () => {
    expect(
      _.flatten([0, [1], [[2]], [3, 4]], 10)
    ).toEqual([0, 1, 2, 3, 4])
  })
})

describe('last', () => {
  it('returns undefined is array is empty', () => {
    expect(_.last([])).toBe(undefined);
  })

  it('returns last element of array', () => {
    expect(_.last([1, 2, 3])).toBe(3);
  })
})
