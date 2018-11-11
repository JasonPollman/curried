/**
 * Tests for the `map` function.
 * @since 11/10/18
 * @file
 */

import map from '.';

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
});
