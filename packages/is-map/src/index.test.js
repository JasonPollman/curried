/**
 * Tests for the `isMap` function.
 * @since 10/23/18
 * @file
 */

import isMap from '.';

describe('isMap', () => {
  it('Should be a function', () => {
    expect(typeof isMap).toBe('function');
  });

  it('Should return `true` for Map instances', () => {
    expect(isMap(new Map())).toBe(true);
  });

  it('Should return false otherwise', () => {
    expect(isMap('')).toBe(false);
    expect(isMap(new class {}())).toBe(false);
    expect(isMap(new Error(''))).toBe(false);
    expect(isMap('string')).toBe(false);
    expect(isMap([])).toBe(false);
    expect(isMap({})).toBe(false);
    expect(isMap(0)).toBe(false);
    expect(isMap(Infinity)).toBe(false);
    expect(isMap(undefined)).toBe(false);
    expect(isMap(NaN)).toBe(false);
    expect(isMap(null)).toBe(false);
    expect(isMap(() => {})).toBe(false);
  });
});
