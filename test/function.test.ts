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
