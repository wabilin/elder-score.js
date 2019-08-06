// tslint:disable-next-line: no-relative-imports
import _ from '../src/_';

describe('bindAll', () => {
  it('bind all methods by given name', () => {
    const obj = {
      count: 0,
      foo() {
        this.count += 1;
      },
      bar() {
        this.count += 1;
      },
    }

    const callMethods = () => {
      const { foo, bar } = obj;
      foo();
      bar();
    }

    expect(callMethods).toThrowError(TypeError);
    expect(obj.count).toEqual(0);

    _.bindAll(obj, 'foo', 'bar');
    expect(callMethods).not.toThrow();
    expect(obj.count).toEqual(2);
  });
})

describe('memoize', () => {
  it('returns a memoized function', () => {
    const spy = jest.fn(x => x);
    const memoized = _.memoize(spy);

    const results = [1, 2, 2, 3, 3, 3].map(memoized);
    expect(results).toEqual([1, 2, 2, 3, 3, 3])
    expect(spy).toBeCalledTimes(3);
  });

  it('works well with "this"', () => {
    const memoized = _.memoize(function (x) {
      this.foo();
    });

    const obj = {
      memoized,
      foo: jest.fn(),
    };

    [1, 2, 2, 3, 3, 3].forEach(n => { obj.memoized(n) })
    expect(obj.foo).toBeCalledTimes(3);
  })
})
