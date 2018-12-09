/**
 * Tests for the `isNull` function.
 * @since 10/23/18
 * @file
 */

import isNull from '.';

describe('isNull', () => {
  it('Should be a function', () => {
    expect(typeof isNull).toBe('function');
  });

  it('Should return `true` for `null`', () => {
    expect(isNull(null)).toBe(true);
  });

  it('Should return `false` otherwise', () => {
    // eslint-disable-next-line no-void
    expect(isNull(void 0)).toBe(false);
    expect(isNull(undefined)).toBe(false);
    expect(isNull(0)).toBe(false);
    expect(isNull(false)).toBe(false);
    expect(isNull(true)).toBe(false);
    expect(isNull(NaN)).toBe(false);
    expect(isNull([])).toBe(false);
    expect(isNull('foo')).toBe(false);
  });
});
