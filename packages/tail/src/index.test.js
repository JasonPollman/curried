/**
 * Tests for the `tail` function.
 * @since 10/11/18
 * @file
 */

import tail from '.';

describe('tail', () => {
  it('Should return all except for the first value', () => {
    expect(tail([5, 6, 7])).toEqual([6, 7]);
    expect(tail(['a', 'b', 'c'])).toEqual(['b', 'c']);
    expect(tail('hello')).toEqual(['e', 'l', 'l', 'o']);
  });

  it('Should return an empty array for edge cases', () => {
    expect(tail(null)).toEqual([]);
    expect(tail()).toEqual([]);
    expect(tail({})).toEqual([]);
  });
});
