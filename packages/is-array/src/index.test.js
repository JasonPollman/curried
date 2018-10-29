/**
 * Tests for the `isArray` function.
 * @since 10/23/18
 * @file
 */

import isArray from '.';

describe('isArray', () => {
  it('Should be a function', () => {
    expect(typeof isArray).toBe('function');
  });

  it('Should return `true` for Array instances', () => {
    expect(isArray([])).toBe(true);
    expect(isArray(new Array(0))).toBe(true);
  });

  it('Should return false otherwise', () => {
    expect(isArray('foo')).toBe(false);
    expect(isArray('')).toBe(false);
    expect(isArray({})).toBe(false);
    expect(isArray(0)).toBe(false);
    expect(isArray(Infinity)).toBe(false);
    expect(isArray(undefined)).toBe(false);
    expect(isArray(NaN)).toBe(false);
    expect(isArray(null)).toBe(false);
    expect(isArray(() => {})).toBe(false);
  });
});
