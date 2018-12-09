/**
 * Tests for the `isError` function.
 * @since 10/23/18
 * @file
 */

import isError from '.';

describe('isError', () => {
  it('Should be a function', () => {
    expect(typeof isError).toBe('function');
  });

  it('Should return `true` for Error instances', () => {
    expect(isError(new Error('foo'))).toBe(true);
    expect(isError(Error('foo'))).toBe(true);
  });

  it('Should return false otherwise', () => {
    expect(isError('')).toBe(false);
    expect(isError('string')).toBe(false);
    expect(isError([])).toBe(false);
    expect(isError({})).toBe(false);
    expect(isError(0)).toBe(false);
    expect(isError(Infinity)).toBe(false);
    expect(isError(undefined)).toBe(false);
    expect(isError(NaN)).toBe(false);
    expect(isError(null)).toBe(false);
    expect(isError(() => {})).toBe(false);
  });
});
