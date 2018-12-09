import reduce from '.';

const sum = (prev, curr) => prev + curr;

describe('reduce', () => {
  it('Should be a function', () => {
    expect(typeof reduce).toBe('function');
  });

  it('Should reduce an array (empty input)', () => {
    expect(reduce(null, sum, 0)).toEqual(0);
  });

  it('Should reduce an array (1)', () => {
    expect(reduce([1, 2, 3, 4], sum, 0)).toEqual(10);
  });

  it('Should reduce an array (2)', () => {
    const arr = [1, 2, 3, 4];
    const keys = [];

    const reducer = (acc, val, key, array) => {
      expect(array).toBe(arr);
      keys.push(key);
      acc.push(val * 2);
      return acc;
    };

    expect(reduce(arr, reducer, [])).toEqual([2, 4, 6, 8]);
    expect(keys).toEqual([0, 1, 2, 3]);
  });

  it('Should reduce an object (1)', () => {
    const obj = { foo: 1, bar: 2 };
    expect(reduce(obj, sum, 0)).toEqual(3);
  });

  it('Should reduce an object (2)', () => {
    const obj = { foo: 1, bar: 2, baz: 3 };
    const keys = [];

    const reducer = (acc, val, key, collection) => {
      expect(collection).toBe(obj);
      keys.push(key);
      acc.push(val * 2);
      return acc;
    };

    expect(reduce(obj, reducer, [])).toEqual([2, 4, 6]);
    expect(keys).toEqual(['foo', 'bar', 'baz']);
  });
});
