/**
 * Tests for the `isObjectLike` function.
 * @since 10/23/18
 * @file
 */

import isObjectLike from '.';

describe('isObjectLike', () => {
  it('Should be a function', () => {
    expect(typeof isObjectLike).toBe('function');
  });

  it('Should return `true` for objects', () => {
    expect(isObjectLike({})).toBe(true);
  });

  it('Should return `true` for arrays', () => {
    expect(isObjectLike([])).toBe(true);
  });

  it('Should return `false` for functions', () => {
    expect(isObjectLike(() => {})).toBe(false);
  });

  it('Should return `true` for regexps', () => {
    expect(isObjectLike(/foo/)).toBe(true);
  });

  it('Should return `true` for `new String()`', () => {
    // eslint-disable-next-line no-new-wrappers
    expect(isObjectLike(new String('foo'))).toBe(true);
  });

  it('Should return `true` for `new Number()`', () => {
    // eslint-disable-next-line no-new-wrappers
    expect(isObjectLike(new Number(5))).toBe(true);
  });

  it('Should return `false` otherwise', () => {
    // eslint-disable-next-line no-void
    expect(isObjectLike(void 0)).toBe(false);
    expect(isObjectLike(undefined)).toBe(false);
    expect(isObjectLike(0)).toBe(false);
    expect(isObjectLike(false)).toBe(false);
    expect(isObjectLike(true)).toBe(false);
    expect(isObjectLike(NaN)).toBe(false);
    expect(isObjectLike('foo')).toBe(false);
  });
});
