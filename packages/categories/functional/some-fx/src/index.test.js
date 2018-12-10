import someFx from '.';

const isOdd = x => x % 2 !== 0;

describe('someFx', () => {
  it('Should be a function', () => {
    expect(typeof someFx).toBe('function');
  });

  it('Should some an array', () => {
    expect(someFx(isOdd, [1, 2, 3, 4])).toEqual(true);
    expect(someFx(isOdd, [1])).toEqual(true);
    expect(someFx(isOdd, [1, 3, 5, 7, 9])).toEqual(true);
    expect(someFx(isOdd, [2, 4, 6])).toEqual(false);
    expect(someFx(isOdd, [])).toEqual(false);
  });

  it('Should work for objects', () => {
    const collection = {
      foo: 1,
      bar: 2,
      baz: 3,
      quxx: 4,
    };

    expect(someFx(isOdd)(collection)).toEqual(true);
    expect(someFx(isOdd)({ foo: 0 })).toEqual(false);
    expect(someFx(isOdd)({ foo: 1 })).toEqual(true);
  });

  it('Should work for falsy values', () => {
    expect(someFx(isOdd)(null)).toEqual(false);
    expect(someFx(isOdd)(undefined)).toEqual(false);
    expect(someFx(isOdd)('')).toEqual(false);
    expect(someFx(isOdd)(0)).toEqual(false);
    expect(someFx(isOdd)(false)).toEqual(false);
    expect(someFx(isOdd)(NaN)).toEqual(false);
  });

  it('Should pass the proper values to the iteratee function', () => {
    const arr = [1, 2, 3, 4];
    const copy = [1, 2, 3, 4];

    const fn = (value, key, collection) => {
      expect(collection).toBe(undefined);
      expect(value).toBe(copy.shift());
      expect(key).toBe(undefined);
      return false;
    };

    const results = someFx(fn, arr);
    expect(results).toEqual(false);
  });
});
