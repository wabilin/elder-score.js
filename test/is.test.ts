import _ from '../src/index';

describe('isArguments', () => {
  it ('returns false when give other types', () => {
    [1, null, undefined, true, [1], 'string', {}, () => {}].forEach(x => {
      expect(_.isArguments(x)).toBe(false);
    })
  })

  it ('returns true when given arguments', function() {
    expect(_.isArguments(arguments)).toBe(true);
  })
})

describe('isArray', () => {
  it ('returns false when give other types', () => {
    [1, null, undefined, true, 'string', {}, () => {}].forEach(x => {
      expect(_.isArray(x)).toBe(false);
    })
  })

  it ('returns true when given array', function() {
    expect(_.isArray([1,2,3])).toBe(true);
  })
})

describe('isBoolean', () => {
  it ('returns false when give other types', () => {
    [1, null, undefined, 'string', [], {}, () => {}].forEach(x => {
      expect(_.isBoolean(x)).toBe(false);
    })
  })

  it ('returns true when given boolean', () => {
    expect(_.isBoolean(true)).toBe(true)
    expect(_.isBoolean(false)).toBe(true)
  })
})

describe('isObjectLike', () => {
  it ('returns false when give other types', () => {
    [1, null, undefined, 'string'].forEach(x => {
      expect(_.isObjectLike(x)).toBe(false);
    })
  })

  it ('returns true when given boolean', () => {
    expect(_.isObjectLike({})).toBe(true)
    expect(_.isObjectLike([])).toBe(true)
  })
})
