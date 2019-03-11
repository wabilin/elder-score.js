import _ from '../src'

describe('compact', () => {
  it('remove all falsy values', () => {
    expect(
      _.compact([1, 0, true, 'hi', '', null, undefined, {}])
    ).toEqual([1, true, 'hi', {}])
  })
})

describe('concat', () => {
  it('returns [] when no args are given', () => {
    expect(_.concat()).toEqual([]);
  })

  it('concats non-array and array', () => {
    expect(_.concat(1, [2])).toEqual([1 ,2]);
  })

  it('concats two arrays', () => {
    expect(_.concat([1], [2])).toEqual([1 ,2]);
  })

  it('concats many elements', () => {
    expect(_.concat<any>([1, 1], [2] , [[3]], 4)).toEqual([1, 1, 2, [3], 4]);
  })
})

describe('difference', () => {
  it('returns elements in 1st array but not in the 2nd', () => {
    expect(
      _.difference([1, 2, 3, 4, 5], [5, 2, 10])
    ).toEqual([1, 3, 4])
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

describe('findIndex', () => {
  it('returns index of 1st element matchs the callback', () => {
    expect(_.findIndex([1, 2, 3, 4, 5], x => x > 2)).toEqual(2)
  })

  it('returns -1 when no matched element', () => {
    expect(_.findIndex([1, 2, 3, 4, 5], x => x > 10)).toEqual(-1)
  })
})

describe('fill', () => {
  it('returns [] when args[0] is []', () => {
    expect(_.fill([], 1)).toEqual([]);
  })

  it('fill array by the given value', () => {
    expect(_.fill([1, 2, 3], 1)).toEqual([1, 1, 1]);
  })

  it('fill array from `start`', () => {
    expect(_.fill([0, 0, 0, 0], 1, 2)).toEqual([0, 0, 1, 1]);
  })

  it('fill array from `start` to `end`', () => {
    expect(_.fill([0, 0, 0, 0], 1, 1, 3)).toEqual([0, 1, 1, 0]);
  })
})
