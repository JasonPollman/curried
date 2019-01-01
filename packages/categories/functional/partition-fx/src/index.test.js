import partitionFx from '.';

const isEven = x => x % 2 === 0;

describe('partitionFx', () => {
  it('Should be a function', () => {
    expect(typeof partitionFx).toBe('function');
  });

  it('Should partition an array', () => {
    expect(partitionFx(isEven)([1, 2, 3, 4])).toEqual([[2, 4], [1, 3]]);
  });

  it('Should pass the proper values to the iteratee function', () => {
    const arr = [1, 2, 3, 4];
    const vals = [1, 2, 3, 4];

    const fn = (value, key, collection) => {
      expect(collection).toBe(undefined);
      expect(value).toBe(vals.shift());
      expect(key).toBe(undefined);
      return value % 2 === 0;
    };

    const results = partitionFx(fn)(arr);
    expect(results).toEqual([[2, 4], [1, 3]]);
    expect(results).not.toBe(arr);
  });

  it('Should work for objects', () => {
    const collection = {
      foo: 1,
      bar: 2,
      baz: 3,
      quxx: 4,
    };

    expect(partitionFx(isEven)(collection)).toEqual([[2, 4], [1, 3]]);
  });

  it('Should work for falsy values', () => {
    expect(partitionFx(isEven)(null)).toEqual([[], []]);
    expect(partitionFx(isEven)(undefined)).toEqual([[], []]);
    expect(partitionFx(isEven)('')).toEqual([[], []]);
    expect(partitionFx(isEven)(0)).toEqual([[], []]);
    expect(partitionFx(isEven)(false)).toEqual([[], []]);
    expect(partitionFx(isEven)(NaN)).toEqual([[], []]);
  });

  it('Should work for Map objects', () => {
    const collection = new Map([['a', 1], ['b', 2], ['c', 3]]);
    expect(partitionFx(isEven, collection)).toEqual([[2], [1, 3]]);
  });

  it('Should work for Set objects', () => {
    const collection = new Set([1, 2, 3, 4, 2]);
    expect(partitionFx(isEven, collection)).toEqual([[2, 4], [1, 3]]);
  });
});
