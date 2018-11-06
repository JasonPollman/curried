/**
 * Tests for the `isWeakMap` function.
 * @since 10/23/18
 * @file
 */

import isWeakMap from '.';

describe('isWeakMap', () => {
  it('Should be a function', () => {
    expect(typeof isWeakMap).toBe('function');
  });

  it('Should return `true` for WeakMap instances', () => {
    expect(isWeakMap(new WeakMap())).toBe(true);
  });

  it('Should return false otherwise', () => {
    expect(isWeakMap('')).toBe(false);
    expect(isWeakMap(new class {}())).toBe(false);
    expect(isWeakMap(new Error(''))).toBe(false);
    expect(isWeakMap('string')).toBe(false);
    expect(isWeakMap([])).toBe(false);
    expect(isWeakMap({})).toBe(false);
    expect(isWeakMap(0)).toBe(false);
    expect(isWeakMap(Infinity)).toBe(false);
    expect(isWeakMap(undefined)).toBe(false);
    expect(isWeakMap(NaN)).toBe(false);
    expect(isWeakMap(null)).toBe(false);
    expect(isWeakMap(() => {})).toBe(false);
  });
});
