/**
 * Tests for the `noop` function.
 * @since 10/23/18
 * @file
 */

import noop from '.';

describe('noop', () => {
  it('Should be a function', () => {
    expect(typeof noop).toBe('function');
  });

  it('Should return `undefined`', () => {
    expect(noop()).toBe(undefined);
    expect(noop(1)).toBe(undefined);
    expect(noop(1, 2, 3, 4)).toBe(undefined);
  });
});
