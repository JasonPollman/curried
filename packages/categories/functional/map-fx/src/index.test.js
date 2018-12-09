/**
 * Tests for the `map` function.
 * @since 11/10/18
 * @file
 */

import map, { f } from '.';

describe('map', () => {
  it('Should be a function', () => {
    expect(typeof map).toBe('function');
  });

  it('Should map over an array', () => {
    expect(map([1, 2, 3], x => x * 2)).toEqual([2, 4, 6]);
  });

  it('Should work for objects', () => {
    expect(map({ foo: 1, bar: 2, baz: 3 }, x => x * 2)).toEqual([2, 4, 6]);
  });

  it('Should work for falsy values', () => {
    expect(map(null, x => x * 2)).toEqual([]);
    expect(map(undefined, x => x * 2)).toEqual([]);
    expect(map('', x => x * 2)).toEqual([]);
    expect(map(0, x => x * 2)).toEqual([]);
    expect(map(false, x => x * 2)).toEqual([]);
    expect(map(NaN, x => x * 2)).toEqual([]);
  });

  it('Should work for Map objects', () => {
    const collection = new Map([['a', 1], ['b', 2], ['c', 3]]);
    expect(map(collection, x => x * 2)).toEqual([2, 4, 6]);
  });

  it('Should work for Set objects', () => {
    const collection = new Set([1, 2, 3, 4, 2]);
    expect(map(collection, x => x * 2)).toEqual([2, 4, 6, 8]);
  });

  describe('map.f', () => {
    it('Should be a function', () => {
      // eslint-disable-next-line import/no-named-as-default-member
      expect(typeof map.f).toBe('function');
      expect(typeof f).toBe('function');
    });

    it('Should map over an array', () => {
      expect(f(x => x * 2, [1, 2, 3])).toEqual([2, 4, 6]);
      expect(f(x => x * 2)([1, 2, 3])).toEqual([2, 4, 6]);
    });

    it('Should work for objects', () => {
      expect(f(x => x * 2, { foo: 1, bar: 2, baz: 3 })).toEqual([2, 4, 6]);
      expect(f(x => x * 2)({ foo: 1, bar: 2, baz: 3 })).toEqual([2, 4, 6]);
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
      expect(f(x => x * 2)(collection)).toEqual([2, 4, 6]);
    });

    it('Should work for Set objects', () => {
      const collection = new Set([1, 2, 3, 4, 2]);
      expect(f(x => x * 2)(collection)).toEqual([2, 4, 6, 8]);
    });
  });
});
