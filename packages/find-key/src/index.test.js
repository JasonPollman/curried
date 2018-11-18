/**
 * Tests for the `findKey` function.
 * @since 11/10/18
 * @file
 */

import findKey, { f } from '.';

const isTwo = x => x === 2;

describe('findKey', () => {
  it('Should be a function', () => {
    expect(typeof findKey).toBe('function');
  });

  it('Should findKey within an array', () => {
    expect(findKey([1, 2, 3, 4], isTwo)).toEqual(1);
  });

  it('Should work with shorthand string iteratees', () => {
    expect(findKey([{ x: true }, { x: false }], 'x')).toEqual(0);
  });

  it('Should work with shorthand array iteratees', () => {
    expect(findKey([{ value: 1 }, { value: 2 }, { value: 3 }], ['value', 2])).toEqual(1);
  });

  it('Should pass the proper values to the iteratee function', () => {
    const arr = [1, 2, 3, 4];
    const copy = [1, 2, 3, 4];
    const keys = [0, 1, 2, 3];

    const fn = (value, key, collection) => {
      expect(collection).toBe(arr);
      expect(value).toBe(copy.shift());
      expect(key).toBe(keys.shift());
      return value === 4;
    };

    const results = findKey(arr, fn);
    expect(results).toBe(3);
  });

  it('Should work with shorthand object iteratees', () => {
    const things = [
      { value: 1, name: 'a', foo: 'bar' },
      { value: 2, name: 'b', foo: 'bar' },
      { value: 2, name: 'c', foo: 'bar' },
      { value: 2, name: 'd', foo: 'bar' },
    ];

    expect(findKey(things, { value: 2, name: 'c' })).toEqual(2);
  });

  it('Should work for objects', () => {
    const collection = {
      foo: 1,
      bar: 2,
      baz: 3,
      quxx: 4,
    };

    expect(findKey(collection, isTwo)).toBe('bar');
  });

  it('Should work for Map objects', () => {
    const collection = new Map([['a', 1], ['b', 2], ['c', 3]]);
    expect(findKey(collection, isTwo)).toBe('b');
  });

  it('Should work for Set objects', () => {
    const collection = new Set([1, 2, 3, 4, 2]);
    expect(findKey(collection, isTwo)).toBe(1);
  });

  it('Should work for falsy values', () => {
    expect(findKey(null, isTwo)).toBe(undefined);
    expect(findKey(undefined, isTwo)).toBe(undefined);
    expect(findKey('', isTwo)).toBe(undefined);
    expect(findKey(0, isTwo)).toBe(undefined);
    expect(findKey(false, isTwo)).toBe(undefined);
    expect(findKey(NaN, isTwo)).toBe(undefined);
  });

  describe('findKey.f', () => {
    it('Should be a function', () => {
      // eslint-disable-next-line import/no-named-as-default-member
      expect(typeof findKey.f).toBe('function');
      expect(typeof f).toBe('function');
    });

    it('Should findKey within an array', () => {
      expect(f(isTwo)([1, 2, 3, 4])).toEqual(1);
    });

    it('Should work with shorthand string iteratees', () => {
      expect(f('x', [{ x: true }, { x: false }])).toEqual(0);
    });

    it('Should work with shorthand array iteratees', () => {
      expect(f(['value', 2])([{ value: 1 }, { value: 2 }, { value: 3 }])).toEqual(1);
    });

    it('Should pass the proper values to the iteratee function', () => {
      const arr = [1, 2, 3, 4];
      const copy = [1, 2, 3, 4];

      const fn = (value, key, collection) => {
        expect(collection).toBe(undefined);
        expect(value).toBe(copy.shift());
        expect(key).toBe(undefined);
        return value === 4;
      };

      const results = f(fn)(arr);
      expect(results).toBe(3);
    });

    it('Should work with shorthand object iteratees', () => {
      const things = [
        { value: 1, name: 'a', foo: 'bar' },
        { value: 2, name: 'b', foo: 'bar' },
        { value: 2, name: 'c', foo: 'bar' },
        { value: 2, name: 'd', foo: 'bar' },
      ];

      expect(f({ value: 2, name: 'c' })(things)).toEqual(2);
    });

    it('Should work for objects', () => {
      const collection = {
        foo: 1,
        bar: 2,
        baz: 3,
        quxx: 4,
      };

      expect(f(isTwo)(collection)).toBe('bar');
    });

    it('Should work for Map objects', () => {
      const collection = new Map([['a', 1], ['b', 2], ['c', 3]]);
      expect(f(isTwo)(collection)).toBe('b');
    });

    it('Should work for Set objects', () => {
      const collection = new Set([1, 2, 3, 4, 2]);
      expect(f(isTwo)(collection)).toBe(1);
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
