/**
 * Tests for the `mapRight` function.
 * @since 11/10/18
 * @file
 */

import mapRight, { f } from '.';

describe('mapRight', () => {
  it('Should be a function', () => {
    expect(typeof mapRight).toBe('function');
  });

  it('Should mapRight over an array in reverse', () => {
    expect(mapRight([1, 2, 3], x => x * 2)).toEqual([6, 4, 2]);
  });

  it('Should work for objects, in reverse', () => {
    expect(mapRight({ foo: 1, bar: 2, baz: 3 }, x => x * 2)).toEqual([6, 4, 2]);
  });

  it('Should work for falsy values', () => {
    expect(mapRight(null, x => x * 2)).toEqual([]);
    expect(mapRight(undefined, x => x * 2)).toEqual([]);
    expect(mapRight('', x => x * 2)).toEqual([]);
    expect(mapRight(0, x => x * 2)).toEqual([]);
    expect(mapRight(false, x => x * 2)).toEqual([]);
    expect(mapRight(NaN, x => x * 2)).toEqual([]);
  });

  it('Should work for Map objects', () => {
    const collection = new Map([['a', 1], ['b', 2], ['c', 3]]);
    expect(mapRight(collection, x => x * 2)).toEqual([6, 4, 2]);
  });

  it('Should work for Set objects', () => {
    const collection = new Set([1, 2, 3, 4, 2]);
    expect(mapRight(collection, x => x * 2)).toEqual([8, 6, 4, 2]);
  });

  describe('mapRight.f', () => {
    it('Should be a function', () => {
      // eslint-disable-next-line import/no-named-as-default-member
      expect(typeof mapRight.f).toBe('function');
      expect(typeof f).toBe('function');
    });

    it('Should mapRight over an array in reverse', () => {
      expect(f(x => x * 2, [1, 2, 3])).toEqual([6, 4, 2]);
    });

    it('Should work for objects, in reverse', () => {
      expect(f(x => x * 2, { foo: 1, bar: 2, baz: 3 })).toEqual([6, 4, 2]);
    });

    it('Should work for falsy values', () => {
      expect(f(x => x * 2)(null)).toEqual([]);
      expect(f(x => x * 2)(undefined)).toEqual([]);
      expect(f(x => x * 2)('')).toEqual([]);
      expect(f(x => x * 2)(0)).toEqual([]);
      expect(f(x => x * 2)(false)).toEqual([]);
      expect(f(x => x * 2)(NaN)).toEqual([]);
    });

    it('Should work for Map objects', () => {
      const collection = new Map([['a', 1], ['b', 2], ['c', 3]]);
      expect(f(x => x * 2)(collection)).toEqual([6, 4, 2]);
    });

    it('Should work for Set objects', () => {
      const collection = new Set([1, 2, 3, 4, 2]);
      expect(f(x => x * 2)(collection)).toEqual([8, 6, 4, 2]);
    });
  });
});
