/**
 * Tests for the `curry` function.
 * @since 10/23/18
 * @file
 */

import curry from '.';

describe('curry', () => {
  it('Should be a function', () => {
    expect(typeof curry).toBe('function');
  });

  it('Should curry a function', () => {
    const curried = curry((x, y) => x + y);
    expect(curried(1)(2)).toBe(3);
  });

  it('Should throw if `fn` isn\'t a function', () => {
    expect(() => curry('foo')).toThrow('Argument for parameter `fn` must be a function.');
  });
});
