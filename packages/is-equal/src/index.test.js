/**
 * Tests for the `isEqual` function.
 * @since 11/17/18
 * @file
 */

import isEqual from '.';

describe('isEqual', () => {
  it('Should be a function', () => {
    expect(typeof isEqual).toBe('function');
  });

  it('Should return `true` for things that pass the SameValueZero comparison test', () => {
    expect(isEqual(undefined, undefined)).toBe(true);
    expect(isEqual(null, null)).toBe(true);
    expect(isEqual(true, true)).toBe(true);
    expect(isEqual(false, false)).toBe(true);
    expect(isEqual('foo', 'foo')).toBe(true);
    expect(isEqual(0, 0)).toBe(true);
    expect(isEqual(-0, 0)).toBe(true);
    expect(isEqual(+0, 0)).toBe(true);
    expect(isEqual(+0, -0)).toBe(true);
    expect(isEqual(NaN, NaN)).toBe(true);

    const obj = {};
    expect(isEqual(obj, obj)).toBe(true);
  });

  it('Should return `false` for things that fail the SameValueZero comparison test', () => {
    expect(isEqual(0, false)).toBe(false);
    expect(isEqual('', false)).toBe(false);
    expect(isEqual('', 0)).toBe(false);
    expect(isEqual(0, '0')).toBe(false);
    expect(isEqual(17, '17')).toBe(false);
    expect(isEqual([1, 2], '1,2')).toBe(false);
    expect(isEqual(null, undefined)).toBe(false);
    expect(isEqual(null, false)).toBe(false);
    expect(isEqual(false, undefined)).toBe(false);
    expect(isEqual({}, {})).toBe(false);
    expect(isEqual(null, 0)).toBe(false);
    expect(isEqual(0, NaN)).toBe(false);
    expect(isEqual('foo', NaN)).toBe(false);
    expect(isEqual(null, NaN)).toBe(false);
    expect(isEqual(undefined, NaN)).toBe(false);

    /* eslint-disable no-new-wrappers */
    expect(isEqual(new String('foo'), 'foo')).toBe(false);
    expect(isEqual(new String('foo'), new String('foo'))).toBe(false);
  });
});
