/**
 * Tests for the `f` function.
 * @since 10/23/18
 * @file
 */

import f from '.';

describe('f', () => {
  it('Should be a function', () => {
    expect(typeof f).toBe('function');
  });

  it('Should always return false', () => {
    expect(f()).toBe(false);
    expect(f(1)).toBe(false);
    expect(f(0)).toBe(false);
  });
});
