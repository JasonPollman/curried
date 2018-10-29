/**
 * Tests for the `isSet` function.
 * @since 10/23/18
 * @file
 */

import isSet from '.';

describe('isSet', () => {
  it('Should be a function', () => {
    expect(typeof isSet).toBe('function');
  });

  it('Should return `true` for Map instances', () => {
    expect(isSet(new Set())).toBe(true);
  });

  it('Should return false otherwise', () => {
    expect(isSet('')).toBe(false);
    expect(isSet(new class {}())).toBe(false);
    expect(isSet(new Error(''))).toBe(false);
    expect(isSet('string')).toBe(false);
    expect(isSet([])).toBe(false);
    expect(isSet({})).toBe(false);
    expect(isSet(0)).toBe(false);
    expect(isSet(Infinity)).toBe(false);
    expect(isSet(undefined)).toBe(false);
    expect(isSet(NaN)).toBe(false);
    expect(isSet(null)).toBe(false);
    expect(isSet(() => {})).toBe(false);
  });
});
