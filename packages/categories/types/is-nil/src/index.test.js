/**
 * Tests for the `isNil` function.
 * @since 10/23/18
 * @file
 */

import isNil from '.';

describe('isNil', () => {
  it('Should be a function', () => {
    expect(typeof isNil).toBe('function');
  });

  it('Should return `true` for `null`', () => {
    expect(isNil(null)).toBe(true);
  });

  it('Should return `true` for `undefined`', () => {
    expect(isNil(undefined)).toBe(true);
  });

  it('Should return `false` otherwise', () => {
    expect(isNil(0)).toBe(false);
    expect(isNil(false)).toBe(false);
    expect(isNil(true)).toBe(false);
    expect(isNil(NaN)).toBe(false);
    expect(isNil([])).toBe(false);
    expect(isNil('foo')).toBe(false);
  });
});
