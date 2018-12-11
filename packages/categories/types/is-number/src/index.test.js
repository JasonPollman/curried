/**
 * Tests for the `isNumber` function.
 * @since 10/23/18
 * @file
 */

import isNumber from '.';

describe('isNumber', () => {
  it('Should return `true` for numbers', () => {
    expect(isNumber(0)).toBe(true);
    expect(isNumber(1e6)).toBe(true);
    expect(isNumber(0xfff)).toBe(true);
    expect(isNumber(-1.01)).toBe(true);
    expect(isNumber(-0)).toBe(true);
    expect(isNumber(-0.00000001)).toBe(true);
    expect(isNumber(NaN)).toBe(true);
    expect(isNumber(Number.MAX_SAFE_INTEGER)).toBe(true);
    expect(isNumber(Number.MIN_SAFE_INTEGER)).toBe(true);
    expect(isNumber(Infinity)).toBe(true);
    expect(isNumber(-Infinity)).toBe(true);
  });

  it('Should return `false` otherwise', () => {
    // eslint-disable-next-line no-void
    expect(isNumber(void 0)).toBe(false);
    expect(isNumber(undefined)).toBe(false);
    expect(isNumber(false)).toBe(false);
    expect(isNumber(true)).toBe(false);
    expect(isNumber([])).toBe(false);
    expect(isNumber('foo')).toBe(false);
    expect(isNumber('0')).toBe(false);
    expect(isNumber('1')).toBe(false);
    expect(isNumber('-1')).toBe(false);
  });

  it('Should return `true` for Number objects', () => {
    /* eslint-disable no-new-wrappers */
    expect(isNumber(new Number(0))).toBe(true);
    expect(isNumber(new Number(1))).toBe(true);
    expect(isNumber(new Number('5'))).toBe(true);
    /* eslint-enable no-new-wrappers */

    expect(isNumber(Number(0))).toBe(true);
    expect(isNumber(Number(1))).toBe(true);
    expect(isNumber(Number('5'))).toBe(true);
  });
});
