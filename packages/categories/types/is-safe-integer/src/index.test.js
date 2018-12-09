/**
 * Tests for the `isSafeInteger` function.
 * @since 10/23/18
 * @file
 */

import { isSafeIntegerPolyfill } from '.';

describe('isSafeInteger', () => {
  it('Should be a function', () => {
    expect(typeof isSafeIntegerPolyfill).toBe('function');
  });

  it('Should return `true` for integer values', () => {
    expect(isSafeIntegerPolyfill(0)).toBe(true);
    expect(isSafeIntegerPolyfill(1)).toBe(true);
    expect(isSafeIntegerPolyfill(1e6)).toBe(true);
    expect(isSafeIntegerPolyfill(0xfff)).toBe(true);
    expect(isSafeIntegerPolyfill(Number.MAX_SAFE_INTEGER)).toBe(true);
    expect(isSafeIntegerPolyfill(Number.MIN_SAFE_INTEGER)).toBe(true);
    expect(isSafeIntegerPolyfill(-0)).toBe(true);
    expect(isSafeIntegerPolyfill(-10)).toBe(true);
  });

  it('Should return `false` otherwise', () => {
    // eslint-disable-next-line no-void
    expect(isSafeIntegerPolyfill(void 0)).toBe(false);
    expect(isSafeIntegerPolyfill(Number.MAX_VALUE)).toBe(false);
    expect(isSafeIntegerPolyfill(Number.MIN_VALUE)).toBe(false);
    expect(isSafeIntegerPolyfill(Infinity)).toBe(false);
    expect(isSafeIntegerPolyfill(-Infinity)).toBe(false);
    expect(isSafeIntegerPolyfill(-1.01)).toBe(false);
    expect(isSafeIntegerPolyfill(-0.00000001)).toBe(false);
    expect(isSafeIntegerPolyfill(undefined)).toBe(false);
    expect(isSafeIntegerPolyfill(false)).toBe(false);
    expect(isSafeIntegerPolyfill(true)).toBe(false);
    expect(isSafeIntegerPolyfill(NaN)).toBe(false);
    expect(isSafeIntegerPolyfill([])).toBe(false);
    expect(isSafeIntegerPolyfill('foo')).toBe(false);
    expect(isSafeIntegerPolyfill('0')).toBe(false);
    expect(isSafeIntegerPolyfill('1')).toBe(false);
    expect(isSafeIntegerPolyfill('-1')).toBe(false);
  });
});
