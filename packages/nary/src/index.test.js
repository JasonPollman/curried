/**
 * Tests for the `nary` function.
 * @since 11/10/18
 * @file
 */

import nary from '.';

describe('f', () => {
  it('Should be a function', () => {
    expect(typeof nary).toBe('function');
  });

  it('Should throw if not given a function', () => {
    expect(() => nary()).toThrow('Expected a function.');
  });

  it('Should limit the arity of a function', () => {
    const echo = (...args) => args;

    let fixed = nary(echo, 2);
    expect(fixed(1, 2, 3, 4)).toEqual([1, 2]);

    fixed = nary(echo, 0);
    expect(fixed(1, 2, 3, 4)).toEqual([]);

    fixed = nary(echo, -1);
    expect(fixed(1, 2, 3, 4)).toEqual([]);

    fixed = nary(echo, '3');
    expect(fixed(1, 2, 3, 4)).toEqual([1, 2, 3]);

    fixed = nary(echo, 100);
    expect(fixed(1, 2, 3, 4)).toEqual([1, 2, 3, 4]);
  });
});
