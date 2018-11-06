/**
 * Tests for the `toString` function.
 * @since 10/23/18
 * @file
 */

import toString from '.';

describe('toString', () => {
  it('Should be a function', () => {
    expect(typeof toString).toBe('function');
  });

  it('Should convert values to a string', () => {
    expect(toString(undefined)).toBe('');
    expect(toString(null)).toBe('');
    expect(toString()).toBe('');
    expect(toString(1)).toBe('1');
    expect(toString(0)).toBe('0');
    expect(toString('foo')).toBe('foo');
    expect(toString(NaN)).toBe('NaN');
    expect(toString(Infinity)).toBe('Infinity');
    expect(toString({})).toBe('[object Object]');
    expect(toString([])).toBe('');
    expect(toString([1, 2, 3])).toBe('1,2,3');
  });
});
