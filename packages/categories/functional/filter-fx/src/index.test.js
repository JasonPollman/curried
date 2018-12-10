import filterFx from '.';

const filterOdd = x => x % 2 === 0;

describe('filterFx', () => {
  it('Should be a function', () => {
    expect(typeof filterFx).toBe('function');
  });

  it('Should filter an array', () => {
    expect(filterFx(filterOdd, [1, 2, 3, 4])).toEqual([2, 4]);
  });

  it('Should pass the proper values to the iteratee function', () => {
    const arr = [1, 2, 3, 4];
    const copy = [1, 2, 3, 4];

    const fn = (value, key, collection) => {
      expect(collection).toBe(undefined);
      expect(value).toBe(copy.shift());
      expect(key).toBe(undefined);
      return true;
    };

    const results = filterFx(fn)(arr);
    expect(results).toEqual([1, 2, 3, 4]);
    expect(results).not.toBe(arr);
  });

  it('Should work for objects', () => {
    const collection = {
      foo: 1,
      bar: 2,
      baz: 3,
      quxx: 4,
    };

    expect(filterFx(filterOdd, collection)).toEqual([2, 4]);
  });

  it('Should work for falsy values', () => {
    expect(filterFx(filterOdd, null)).toEqual([]);
    expect(filterFx(filterOdd, undefined)).toEqual([]);
    expect(filterFx(filterOdd, '')).toEqual([]);
    expect(filterFx(filterOdd, 0)).toEqual([]);
    expect(filterFx(filterOdd, false)).toEqual([]);
    expect(filterFx(filterOdd, NaN)).toEqual([]);
  });
});
