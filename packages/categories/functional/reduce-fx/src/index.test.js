import reduceFx from '.';

const sum = (prev, curr) => prev + curr;

describe('reduceFx', () => {
  it('Should be a function', () => {
    expect(typeof reduceFx).toBe('function');
  });

  it('Should reduce an array (empty input)', () => {
    expect(reduceFx(sum, 0, null)).toEqual(0);
    expect(reduceFx(sum)(0)(null)).toEqual(0);
  });

  it('Should reduce an array (1)', () => {
    expect(reduceFx(sum)(0)([1, 2, 3, 4])).toEqual(10);
  });

  it('Should reduce an array (2)', () => {
    const arr = [1, 2, 3, 4];

    const reducer = (acc, val, key, array) => {
      expect(key).toBe(undefined);
      expect(array).toBe(undefined);
      acc.push(val * 2);
      return acc;
    };

    expect(reduceFx(reducer, [])(arr)).toEqual([2, 4, 6, 8]);
  });

  it('Should reduce an object (1)', () => {
    const obj = { foo: 1, bar: 2 };
    expect(reduceFx(sum, 0)(obj)).toEqual(3);
  });

  it('Should reduce an object (2)', () => {
    const obj = { foo: 1, bar: 2, baz: 3 };

    const reducer = (acc, val) => {
      acc.push(val * 2);
      return acc;
    };

    expect(reduceFx(reducer, [])(obj)).toEqual([2, 4, 6]);
  });
});
