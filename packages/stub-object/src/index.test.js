/**
 * Tests for the `stubObject` function.
 * @since 11/18/18
 * @file
 */

import stubObject from '.';

describe('stubObject', () => {
  it('Should be a function', () => {
    expect(typeof stubObject).toBe('function');
  });

  it('Should always return false', () => {
    expect(stubObject()).toEqual({});
    expect(stubObject(1)).toEqual({});
    expect(stubObject(0)).toEqual({});
  });
});
