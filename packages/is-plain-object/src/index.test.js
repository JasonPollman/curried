/**
 * Tests for the `isPlainObject` function.
 * @since 10/23/18
 * @file
 */

import isPlainObject from '.';

describe('isPlainObject', () => {
  it('Should return `true` for objects', () => {
    // eslint-disable-next-line
    expect(isPlainObject(new Object())).toBe(true);
    expect(isPlainObject({})).toBe(true);
    expect(isPlainObject({ foo: 'bar' })).toBe(true);
    expect(isPlainObject(Object())).toBe(true);
    expect(isPlainObject(new class Foo {}())).toBe(true);
  });

  it('Should return `false` otherwise', () => {
    // eslint-disable-next-line no-void
    expect(isPlainObject(void 0)).toBe(false);
    expect(isPlainObject(undefined)).toBe(false);
    expect(isPlainObject(false)).toBe(false);
    expect(isPlainObject(true)).toBe(false);
    expect(isPlainObject([])).toBe(false);
    expect(isPlainObject(() => {})).toBe(false);
    expect(isPlainObject('foo')).toBe(false);
    expect(isPlainObject('0')).toBe(false);
    expect(isPlainObject('1')).toBe(false);
    expect(isPlainObject('-1')).toBe(false);
    expect(isPlainObject(0)).toBe(false);
    expect(isPlainObject(1e6)).toBe(false);
    expect(isPlainObject(0xfff)).toBe(false);
    expect(isPlainObject(-1.01)).toBe(false);
    expect(isPlainObject(-0)).toBe(false);
    expect(isPlainObject(-0.00000001)).toBe(false);
    expect(isPlainObject(NaN)).toBe(false);
    expect(isPlainObject(Number.MAX_SAFE_INTEGER)).toBe(false);
    expect(isPlainObject(Number.MIN_SAFE_INTEGER)).toBe(false);
    expect(isPlainObject(Infinity)).toBe(false);
    expect(isPlainObject(-Infinity)).toBe(false);
    expect(isPlainObject(new class Foo extends Array {}())).toBe(false);
  });
});
