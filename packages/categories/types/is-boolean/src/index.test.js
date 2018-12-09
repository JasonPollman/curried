/**
 * Tests for the `isBoolean` function.
 * @since 10/23/18
 * @file
 */

import isBoolean from '.';

describe('isBoolean', () => {
  it('Should be a function', () => {
    expect(typeof isBoolean).toBe('function');
  });

  it('Should return `true` for Map instances', () => {
    expect(isBoolean(true)).toBe(true);
    expect(isBoolean(false)).toBe(true);
    expect(isBoolean(Boolean(1))).toBe(true);
    expect(isBoolean(Boolean(0))).toBe(true);
    expect(isBoolean(Boolean(''))).toBe(true);
    expect(isBoolean(Boolean(false))).toBe(true);
    expect(isBoolean(Boolean(true))).toBe(true);
    expect(isBoolean(Boolean())).toBe(true);
  });

  it('Should return false otherwise', () => {
    expect(isBoolean('')).toBe(false);
    expect(isBoolean(new class {}())).toBe(false);
    expect(isBoolean(new Error(''))).toBe(false);
    expect(isBoolean('string')).toBe(false);
    expect(isBoolean([])).toBe(false);
    expect(isBoolean({})).toBe(false);
    expect(isBoolean(0)).toBe(false);
    expect(isBoolean(Infinity)).toBe(false);
    expect(isBoolean(undefined)).toBe(false);
    expect(isBoolean(NaN)).toBe(false);
    expect(isBoolean(null)).toBe(false);
    expect(isBoolean(() => {})).toBe(false);
  });
});
