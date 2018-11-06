/**
 * Tests for the `nth` function.
 * @since 10/11/18
 * @file
 */

import nth from '.';

describe('nth', () => {
  it('Should return the value at the nth index of an array', () => {
    expect(nth([5, 6, 7], 0)).toEqual(5);
    expect(nth([5, 6, 7], 1)).toEqual(6);
    expect(nth([5, 6, 7], 2)).toEqual(7);

    expect(nth(['a', 'b', 'c'], 2)).toEqual('c');
    expect(nth('hello', 2)).toEqual('l');
  });

  it('Should return undefined if param is not an array', () => {
    expect(nth()).toEqual(undefined);
    expect(nth(0)).toEqual(undefined);
    expect(nth(null, 2)).toEqual(undefined);
    expect(nth({}, 2)).toEqual(undefined);
  });
});
