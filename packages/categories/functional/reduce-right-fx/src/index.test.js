import reduceRightFx from '.';

const sum = (prev, curr) => prev + curr;

describe('reduceRightFx', () => {
  it('Should be a function', () => {
    expect(typeof reduceRightFx).toBe('function');
  });

  it('Should reduce an array (empty input)', () => {
    expect(reduceRightFx(sum, 0)(null)).toEqual(0);
  });

  it('Should reduce an array (1)', () => {
    expect(reduceRightFx(sum, 0)([1, 2, 3, 4])).toEqual(10);
  });

  it('Should reduce an array (2)', () => {
    const arr = [1, 2, 3, 4];

    const reducer = (acc, val, key, array) => {
      expect(array).toBe(undefined);
      expect(key).toBe(undefined);
      acc.push(val * 2);
      return acc;
    };

    expect(reduceRightFx(reducer, [], arr)).toEqual([8, 6, 4, 2]);
  });

  it('Should reduce an object (1)', () => {
    const obj = { foo: 1, bar: 2 };
    expect(reduceRightFx(sum)(0)(obj)).toEqual(3);
  });

  it('Should reduce an object (2)', () => {
    const obj = { foo: 1, bar: 2, baz: 3 };

    const reducer = (acc, val, key, collection) => {
      expect(collection).toBe(undefined);
      expect(key).toBe(undefined);
      acc.push(val * 2);
      return acc;
    };

    expect(reduceRightFx(reducer, [], obj)).toEqual([6, 4, 2]);
  });
});
