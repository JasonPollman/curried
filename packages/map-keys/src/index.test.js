/**
 * Tests for the `mapKeys` function.
 * @since 11/10/18
 * @file
 */

import mapKeys, { f } from '.';

const uppercaseKey = (x, y) => y.toString().toUpperCase();

describe('mapKeys', () => {
  it('Should be a function', () => {
    expect(typeof mapKeys).toBe('function');
  });

  it('Should map an array\'s values', () => {
    expect(mapKeys([1, 2, 3, 4], uppercaseKey)).toEqual({
      0: 1,
      1: 2,
      2: 3,
      3: 4,
    });
  });

  it('Should map an objects\'s values', () => {
    expect(mapKeys({}, uppercaseKey)).toEqual({});
    expect(mapKeys({ foo: 1, bar: 2 }, uppercaseKey)).toEqual({ FOO: 1, BAR: 2 });
  });

  it('Should work with shorthand string iteratees (1)', () => {
    const things = [
      { value: 1, name: 'a', foo: 'bar' },
      { value: 2, name: 'b', foo: 'bar' },
      { value: 2, name: 'c', foo: 'bar' },
      { value: 2, name: 'd', foo: 'bar' },
    ];

    expect(mapKeys(things, 'name')).toEqual({
      a: { value: 1, name: 'a', foo: 'bar' },
      b: { value: 2, name: 'b', foo: 'bar' },
      c: { value: 2, name: 'c', foo: 'bar' },
      d: { value: 2, name: 'd', foo: 'bar' },
    });
  });

  it('Should work for Map objects', () => {
    const collection = new Map([['a', 1], ['b', 2], ['c', 3]]);
    expect(mapKeys(collection, uppercaseKey)).toEqual({
      A: 1,
      B: 2,
      C: 3,
    });
  });

  it('Should work for Set objects', () => {
    const collection = new Set([1, 2, 3]);
    expect(mapKeys(collection, x => x)).toEqual({
      1: 1,
      2: 2,
      3: 3,
    });
  });

  it('Should work for Map objects', () => {
    const collection = new Map([['a', 1], ['b', 2], ['c', 3]]);
    expect(mapKeys(collection, x => x * 2)).toEqual({ 2: 1, 4: 2, 6: 3 });
  });

  it('Should work for Set objects', () => {
    const collection = new Set([1, 2, 3, 4, 2]);
    expect(mapKeys(collection, x => x * 2)).toEqual({
      2: 1,
      4: 2,
      6: 3,
      8: 4,
    });
  });

  it('Should work for falsy values', () => {
    expect(mapKeys(null, uppercaseKey)).toEqual({});
    expect(mapKeys(undefined, uppercaseKey)).toEqual({});
    expect(mapKeys('', uppercaseKey)).toEqual({});
    expect(mapKeys(0, uppercaseKey)).toEqual({});
    expect(mapKeys(false, uppercaseKey)).toEqual({});
    expect(mapKeys(NaN, uppercaseKey)).toEqual({});
  });

  describe('mapKeys.f', () => {
    const upperKey = x => x.toUpperCase();

    it('Should be a function', () => {
      // eslint-disable-next-line import/no-named-as-default-member
      expect(typeof mapKeys.f).toBe('function');
      expect(typeof f).toBe('function');
    });

    it('Should map an array\'s values', () => {
      expect(f(x => x * 2)([1, 2, 3, 4])).toEqual({
        0: 1,
        2: 2,
        4: 3,
        6: 4,
      });
    });

    it('Should map an objects\'s values', () => {
      expect(f(upperKey, {})).toEqual({});
      expect(f(upperKey, { foo: 1, bar: 2 })).toEqual({ FOO: 1, BAR: 2 });
    });

    it('Should work for Map objects', () => {
      const collection = new Map([['a', 1], ['b', 2], ['c', 3]]);

      function fn(x) {
        return x.toUpperCase();
      }

      expect(f(fn)(collection)).toEqual({
        A: 1,
        B: 2,
        C: 3,
      });
    });

    it('Should work for Set objects', () => {
      const collection = new Set([1, 2, 3]);
      expect(f(x => x)(collection)).toEqual({
        0: 1,
        1: 2,
        2: 3,
      });
    });

    it('Should work for Map objects', () => {
      const collection = new Map([['a', 1], ['b', 2], ['c', 3]]);
      expect(f(upperKey)(collection)).toEqual({ A: 1, B: 2, C: 3 });
    });

    it('Should work for Set objects', () => {
      const collection = new Set([1, 2, 3, 4, 2]);
      expect(f(x => x * 2)(collection)).toEqual({
        0: 1,
        2: 2,
        4: 3,
        6: 4,
      });
    });

    it('Should work for falsy values', () => {
      expect(f(upperKey)(null)).toEqual({});
      expect(f(upperKey)(undefined)).toEqual({});
      expect(f(upperKey)('')).toEqual({});
      expect(f(upperKey)(0)).toEqual({});
      expect(f(upperKey)(false)).toEqual({});
      expect(f(upperKey)(NaN)).toEqual({});
    });
  });
});
