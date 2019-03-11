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
