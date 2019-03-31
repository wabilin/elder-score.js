import _ from '../src/_';

describe('isArguments', () => {
  it('returns false when give other types', () => {
    [1, null, undefined, true, [1], 'string', {}, () => {}].forEach((x) => {
      expect(_.isArguments(x)).toBe(false);
    });
  });

  it('returns true when given arguments', function () {
    expect(_.isArguments(arguments)).toBe(true);
  });
});

describe('isArray', () => {
  it('returns false when give other types', () => {
    [1, null, undefined, true, 'string', {}, () => {}].forEach((x) => {
      expect(_.isArray(x)).toBe(false);
    });
  });

  it('returns true when given array', () => {
    expect(_.isArray([1, 2, 3])).toBe(true);
  });
});

describe('isBoolean', () => {
  it('returns false when give other types', () => {
    [1, null, undefined, 'string', [], {}, () => {}].forEach((x) => {
      expect(_.isBoolean(x)).toBe(false);
    });
  });

  it('returns true when given boolean', () => {
    expect(_.isBoolean(true)).toBe(true);
    expect(_.isBoolean(false)).toBe(true);
  });
});

describe('isEmpty', () => {
  it('null is empty', () => {
    expect(_.isEmpty(null)).toBe(true);
  });

  it('undefined is empty', () => {
    expect(_.isEmpty(undefined)).toBe(true);
  });

  it('empty array is empty', () => {
    expect(_.isEmpty([])).toBe(true);
  });

  it('array having elements is not empty', () => {
    expect(_.isEmpty([1, 2, 3])).toBe(false);
  });

  it('empty object is empty', () => {
    expect(_.isEmpty({})).toBe(true);
  });

  it('object having elements is not empty', () => {
    expect(_.isEmpty({ a: 1 , b: 2 })).toBe(false);
  });
});

describe('isObjectLike', () => {
  it('returns false when give other types', () => {
    [1, null, undefined, 'string'].forEach((x) => {
      expect(_.isObjectLike(x)).toBe(false);
    });
  });

  it('returns true when given boolean', () => {
    expect(_.isObjectLike({})).toBe(true);
    expect(_.isObjectLike([])).toBe(true);
  });
});
