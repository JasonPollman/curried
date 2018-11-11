/**
 * Tests for the `nullary` function.
 * @since 11/10/18
 * @file
 */

import nullary from '.';

describe('nullary', () => {
  it('Should be a function', () => {
    expect(typeof nullary).toBe('function');
  });

  it('Should limit the arity of a function to 0', () => {
    const echo = (...args) => args;
    const fixed = nullary(echo);
    expect(fixed(1, 2, 3, 4)).toEqual([]);
  });
});
