import everyFx from '.';

const isOdd = x => x % 2 !== 0;

describe('everyFx', () => {
  it('Should be a function', () => {
    expect(typeof everyFx).toBe('function');
  });

  it('Should ensure all elements pass the given predicate', () => {
    expect(everyFx(isOdd, [1, 3, 5, 7])).toEqual(true);
    expect(everyFx(isOdd, [1])).toEqual(true);
    expect(everyFx(isOdd, [1, 2, 3, 4, 5, 6])).toEqual(false);
    expect(everyFx(isOdd, [2, 4, 6])).toEqual(false);
    expect(everyFx(isOdd, [])).toEqual(true);
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

    const results = everyFx(fn, arr);
    expect(results).toBe(true);
  });

  it('Should work for objects', () => {
    const collection = {
      foo: 1,
      bar: 2,
      baz: 3,
      quxx: 4,
    };

    expect(everyFx(isOdd, collection)).toEqual(false);
    expect(everyFx(isOdd, { foo: 0, bar: 1 })).toEqual(false);
    expect(everyFx(isOdd, { foo: 1 })).toEqual(true);
    expect(everyFx(isOdd, {})).toEqual(true);
  });

  it('Should work for falsy values', () => {
    expect(everyFx(isOdd)(null)).toEqual(true);
    expect(everyFx(isOdd)(undefined)).toEqual(true);
    expect(everyFx(isOdd)('')).toEqual(true);
    expect(everyFx(isOdd)(0)).toEqual(true);
    expect(everyFx(isOdd)(false)).toEqual(true);
    expect(everyFx(isOdd)(NaN)).toEqual(true);
  });
});
