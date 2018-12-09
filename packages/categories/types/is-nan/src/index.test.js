/**
 * Tests for the `isNaN` function.
 * @since 10/23/18
 * @file
 */

import { isNaNPolyfill } from '.';

describe('isNaN', () => {
  it('Should be a function', () => {
    expect(typeof isNaNPolyfill).toBe('function');
  });

  it('Should return `true` for NaN', () => {
    expect(isNaNPolyfill(NaN)).toBe(true);
  });

  it('Should return `false` otherwise', () => {
    expect(isNaNPolyfill(0)).toBe(false);
    expect(isNaNPolyfill(false)).toBe(false);
    expect(isNaNPolyfill(true)).toBe(false);
    expect(isNaNPolyfill([])).toBe(false);
    expect(isNaNPolyfill('foo')).toBe(false);
  });
});
