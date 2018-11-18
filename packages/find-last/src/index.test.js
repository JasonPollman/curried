/**
 * Tests for the `findLast` function.
 * @since 11/10/18
 * @file
 */

import findLast, { f } from '.';

const isTwo = x => x === 2;

describe('findLast', () => {
  it('Should be a function', () => {
    expect(typeof findLast).toBe('function');
  });

  it('Should findLast within an array', () => {
    expect(findLast([1, 2, 3, 2, 4], isTwo)).toEqual(2);
  });

  it('Should pass the proper values to the iteratee function', () => {
    const arr = [1, 2, 3, 4];
    const copy = [4, 3, 2, 1];
    const keys = [3, 2, 1, 0];

    const fn = (value, key, collection) => {
      expect(collection).toBe(arr);
      expect(value).toBe(copy.shift());
      expect(key).toBe(keys.shift());
      return value === 1;
    };

    const results = findLast(arr, fn);
    expect(results).toBe(1);
  });

  it('Should work with shorthand string iteratees', () => {
    expect(findLast([{ x: true, y: 3 }, { x: false, y: 1 }, { x: true, y: 1 }], 'x')).toEqual({ x: true, y: 1 });
  });

  it('Should work with shorthand array iteratees', () => {
    expect(findLast([
      { value: 1, i: 0 },
      { value: 2, i: 1 },
      { value: 2, i: 2 },
      { value: 2, i: 3 },
      { value: 3, i: 4 },
    ], ['value', 2])).toEqual({ value: 2, i: 3 });
  });

  it('Should work with shorthand object iteratees', () => {
    const things = [
      { value: 1, name: 'a', foo: 'bar' },
      { value: 2, name: 'b', foo: 'bar' },
      { value: 2, name: 'c', foo: 'bar' },
      { value: 2, name: 'c', foo: 'baz' },
      { value: 2, name: 'd', foo: 'bar' },
    ];

    expect(findLast(things, { value: 2, name: 'c' })).toEqual({ value: 2, name: 'c', foo: 'baz' });
  });

  it('Should work for objects', () => {
    const collection = {
      foo: 1,
      bar: 2,
      baz: 3,
      quxx: 4,
    };

    expect(findLast(collection, isTwo)).toBe(2);
  });

  it('Should work for Map objects', () => {
    const collection = new Map([['a', 1], ['b', 2], ['c', 3], ['d', 2], ['e', 1]]);
    expect(findLast(collection, isTwo)).toBe(2);
  });

  it('Should work for Set objects', () => {
    const collection = new Set([1, 2, 3, 4, 2]);
    expect(findLast(collection, isTwo)).toBe(2);
  });

  it('Should work for falsy values', () => {
    expect(findLast(null, isTwo)).toBe(undefined);
    expect(findLast(undefined, isTwo)).toBe(undefined);
    expect(findLast('', isTwo)).toBe(undefined);
    expect(findLast(0, isTwo)).toBe(undefined);
    expect(findLast(false, isTwo)).toBe(undefined);
    expect(findLast(NaN, isTwo)).toBe(undefined);
  });

  describe('findLast.f', () => {
    it('Should be a function', () => {
      // eslint-disable-next-line import/no-named-as-default-member
      expect(typeof findLast.f).toBe('function');
      expect(typeof f).toBe('function');
    });

    it('Should findLast within an array', () => {
      expect(f(isTwo)([1, 2, 3, 2, 4])).toEqual(2);
    });

    it('Should pass the proper values to the iteratee function', () => {
      const arr = [1, 2, 3, 4];
      const copy = [4, 3, 2, 1];

      const fn = (value, key, collection) => {
        expect(collection).toBe(undefined);
        expect(value).toBe(copy.shift());
        expect(key).toBe(undefined);
        return value === 1;
      };

      const results = f(fn, arr);
      expect(results).toBe(1);
    });

    it('Should work with shorthand string iteratees', () => {
      expect(f('x', [{ x: true, y: 3 }, { x: false, y: 1 }, { x: true, y: 1 }])).toEqual({ x: true, y: 1 });
    });

    it('Should work with shorthand array iteratees', () => {
      expect(f(['value', 2])([
        { value: 1, i: 0 },
        { value: 2, i: 1 },
        { value: 2, i: 2 },
        { value: 2, i: 3 },
        { value: 3, i: 4 },
      ])).toEqual({ value: 2, i: 3 });
    });

    it('Should work with shorthand object iteratees', () => {
      const things = [
        { value: 1, name: 'a', foo: 'bar' },
        { value: 2, name: 'b', foo: 'bar' },
        { value: 2, name: 'c', foo: 'bar' },
        { value: 2, name: 'c', foo: 'baz' },
        { value: 2, name: 'd', foo: 'bar' },
      ];

      expect(f({ value: 2, name: 'c' })(things)).toEqual({ value: 2, name: 'c', foo: 'baz' });
    });

    it('Should work for objects', () => {
      const collection = {
        foo: 1,
        bar: 2,
        baz: 3,
        quxx: 4,
      };

      expect(f(isTwo, collection)).toBe(2);
    });

    it('Should work for Map objects', () => {
      const collection = new Map([['a', 1], ['b', 2], ['c', 3], ['d', 2], ['e', 1]]);
      expect(f(isTwo, collection)).toBe(2);
    });

    it('Should work for Set objects', () => {
      const collection = new Set([1, 2, 3, 4, 2]);
      expect(f(isTwo, collection)).toBe(2);
    });

    it('Should work for falsy values', () => {
      expect(f(isTwo)(null)).toBe(undefined);
      expect(f(isTwo)(undefined)).toBe(undefined);
      expect(f(isTwo)('')).toBe(undefined);
      expect(f(isTwo)(0)).toBe(undefined);
      expect(f(isTwo)(false)).toBe(undefined);
      expect(f(isTwo)(NaN)).toBe(undefined);
    });
  });
});
