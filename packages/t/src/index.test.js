/**
 * Tests for the `t` function.
 * @since 10/23/18
 * @file
 */

import t from '.';

describe('t', () => {
  it('Should be a function', () => {
    expect(typeof t).toBe('function');
  });

  it('Should always return true', () => {
    expect(t()).toBe(true);
    expect(t(1)).toBe(true);
    expect(t(0)).toBe(true);
  });
});
