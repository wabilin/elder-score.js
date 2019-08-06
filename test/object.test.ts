// tslint:disable-next-line: no-relative-imports
import _ from '../src/_';

describe('has', () => {
  it('returns true when object has the key', () => {
    const obj = {
      1: 1,
      'a': 2,
    };

    expect(_.has(obj, 1)).toBe(true);
    expect(_.has(obj, 'a')).toBe(true);
  });

  it('returns false when object does not have the key', () => {
    const obj = {
      'a': 2,
    };

    expect(_.has(obj, 'b')).toBe(false);
    expect(_.has(obj, 2)).toBe(false);
  });

  it('ignores attrs from prototype', () => {
    class K {
      constructor(public bar: () => void) {}
      foo() {}
    }

    const k = new K(() => {});
    expect(_.has(k, 'foo')).toBe(false);
    expect(_.has(k, 'bar')).toBe(true);
  });
})
