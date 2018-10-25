/**
 * Tests for the `isArrayLike` function.
 * @since 10/23/18
 * @file
 */

import isArrayLike from '.';

describe('isArrayLike', () => {
  it('Should be a function', () => {
    expect(typeof isArrayLike).toBe('function');
  });

  it('Should return `false` for literal values (except strings)', () => {
    expect(isArrayLike(0)).toBe(false);
    expect(isArrayLike(NaN)).toBe(false);
    expect(isArrayLike(undefined)).toBe(false);
    expect(isArrayLike(null)).toBe(false);
  });

  it('Should return `true` for array-like objects', () => {
    expect(isArrayLike({ length: 0 })).toBe(true);
    expect(isArrayLike({ 0: 1, 1: 2, length: 0 })).toBe(true);
  });

  it('Should return `true` for arrays', () => {
    expect(isArrayLike([])).toBe(true);
    expect(isArrayLike([1, 2, 3])).toBe(true);
  });

  it('Should return `true` for strings', () => {
    expect(isArrayLike('')).toBe(true);
    expect(isArrayLike('foobar')).toBe(true);
  });

  it('Should return `false` for objects without a length', () => {
    expect(isArrayLike({ foo: 'bar' })).toBe(false);
  });

  it('Should return `true` for Arguments objects', () => {
    (function iife() {
      expect(isArrayLike(arguments)).toBe(true);
    }(1, 2, 3));
  });
});
