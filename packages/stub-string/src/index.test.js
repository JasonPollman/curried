/**
 * Tests for the `stubString` function.
 * @since 11/18/18
 * @file
 */

import stubString from '.';

describe('stubString', () => {
  it('Should be a function', () => {
    expect(typeof stubString).toBe('function');
  });

  it('Should always return false', () => {
    expect(stubString()).toEqual('');
    expect(stubString(1)).toEqual('');
    expect(stubString(0)).toEqual('');
  });
});
