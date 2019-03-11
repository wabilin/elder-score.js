import _ from '../src'

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
