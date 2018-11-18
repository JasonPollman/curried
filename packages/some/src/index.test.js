/**
 * Tests for the `some` function.
 * @since 11/10/18
 * @file
 */

import some, { f } from '.';

const isOdd = x => x % 2 !== 0;

describe('some', () => {
  it('Should be a function', () => {
    expect(typeof some).toBe('function');
  });

  it('Should some an array', () => {
    expect(some([1, 2, 3, 4], isOdd)).toEqual(true);
    expect(some([1], isOdd)).toEqual(true);
    expect(some([1, 3, 5, 7, 9], isOdd)).toEqual(true);
    expect(some([2, 4, 6], isOdd)).toEqual(false);
    expect(some([], isOdd)).toEqual(false);
  });

  it('Should work for objects', () => {
    const collection = {
      foo: 1,
      bar: 2,
      baz: 3,
      quxx: 4,
    };

    expect(some(collection, isOdd)).toEqual(true);
    expect(some({ foo: 0 }, isOdd)).toEqual(false);
    expect(some({ foo: 1 }, isOdd)).toEqual(true);
  });

  it('Should work for falsy values', () => {
    expect(some(null, isOdd)).toEqual(false);
    expect(some(undefined, isOdd)).toEqual(false);
    expect(some('', isOdd)).toEqual(false);
    expect(some(0, isOdd)).toEqual(false);
    expect(some(false, isOdd)).toEqual(false);
    expect(some(NaN, isOdd)).toEqual(false);
  });

  it('Should pass the proper values to the iteratee function', () => {
    const arr = [1, 2, 3, 4];
    const copy = [1, 2, 3, 4];
    const keys = [0, 1, 2, 3];

    const fn = (value, key, collection) => {
      expect(collection).toBe(arr);
      expect(value).toBe(copy.shift());
      expect(key).toBe(keys.shift());
      return false;
    };

    const results = some(arr, fn);
    expect(results).toEqual(false);
  });

  describe('some.f', () => {
    it('Should be a function', () => {
      // eslint-disable-next-line import/no-named-as-default-member
      expect(typeof some.f).toBe('function');
      expect(typeof f).toBe('function');
    });

    it('Should some an array', () => {
      expect(f(isOdd, [1, 2, 3, 4])).toEqual(true);
      expect(f(isOdd, [1])).toEqual(true);
      expect(f(isOdd, [1, 3, 5, 7, 9])).toEqual(true);
      expect(f(isOdd, [2, 4, 6])).toEqual(false);
      expect(f(isOdd, [])).toEqual(false);
    });

    it('Should work for objects', () => {
      const collection = {
        foo: 1,
        bar: 2,
        baz: 3,
        quxx: 4,
      };

      expect(f(isOdd)(collection)).toEqual(true);
      expect(f(isOdd)({ foo: 0 })).toEqual(false);
      expect(f(isOdd)({ foo: 1 })).toEqual(true);
    });

    it('Should work for falsy values', () => {
      expect(f(isOdd)(null)).toEqual(false);
      expect(f(isOdd)(undefined)).toEqual(false);
      expect(f(isOdd)('')).toEqual(false);
      expect(f(isOdd)(0)).toEqual(false);
      expect(f(isOdd)(false)).toEqual(false);
      expect(f(isOdd)(NaN)).toEqual(false);
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

      const results = f(fn, arr);
      expect(results).toEqual(false);
    });
  });
});
