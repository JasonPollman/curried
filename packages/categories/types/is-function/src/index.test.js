/**
 * Tests for the `isFunction` function.
 * @since 10/23/18
 * @file
 */

import isFunction from '.';

describe('isFunction', () => {
  it('Should be a function', () => {
    expect(typeof isFunction).toBe('function');
  });

  it('Should return `true` for Function instances', () => {
    expect(isFunction(() => {})).toBe(true);
    expect(isFunction(async () => {})).toBe(true);
    expect(isFunction(function* gen() { /* noop */ })).toBe(true);

    // eslint-disable-next-line no-new-func
    expect(isFunction(new Function('console.log("foo");'))).toBe(true);
  });

  it('Should return false otherwise', () => {
    expect(isFunction('')).toBe(false);
    expect(isFunction(new class {}())).toBe(false);
    expect(isFunction(new Error(''))).toBe(false);
    expect(isFunction('string')).toBe(false);
    expect(isFunction([])).toBe(false);
    expect(isFunction({})).toBe(false);
    expect(isFunction(0)).toBe(false);
    expect(isFunction(Infinity)).toBe(false);
    expect(isFunction(undefined)).toBe(false);
    expect(isFunction(NaN)).toBe(false);
    expect(isFunction(null)).toBe(false);
  });
});
