/**
 * Tests for the `compose` function.
 * @since 11/18/18
 * @file
 */

import unique from '.';

describe('unique', () => {
  it('Should be a function', () => {
    expect(typeof unique).toBe('function');
  });

  it('Should pull unique values from an array', () => {
    expect(unique([1, 1, 2, 3, 3, 3, 6, 9, 9, 1])).toEqual([1, 2, 3, 6, 9]);
    expect(unique([1, null, 2, undefined, undefined])).toEqual([1, null, 2, undefined]);
    expect(unique([2, 2, 2])).toEqual([2]);
  });

  it('Should default to an empty array', () => {
    expect(unique()).toEqual([]);
  });
});
