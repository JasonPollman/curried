/**
 * Tests for the `is` function.
 * @since 10/23/18
 * @file
 */

import is, { isNodeCheck, isBrowserCheck } from '.';

class Foo {
  // eslint-disable-next-line class-methods-use-this
  get [Symbol.toStringTag]() {
    return 'String';
  }
}

describe('is', () => {
  it('Should work for falsy constructor values', () => {
    expect(is('', [])).toBe(false);
    expect(is(null, [])).toBe(false);
    expect(is(undefined, [])).toBe(false);
    expect(is(1, [])).toBe(false);
  });

  [is, isNodeCheck, isBrowserCheck].forEach((method) => {
    it('Should be a function', () => {
      expect(typeof method).toBe('function');
    });

    it('Should return `true` for string values', () => {
      expect(method(String, '')).toBe(true);
      expect(method(String, 'foo')).toBe(true);

      expect(method(String, String(''))).toBe(true);
      expect(method(String, String(0))).toBe(true);
      expect(method(String, String('xxx'))).toBe(true);

      /* eslint-disable no-new-wrappers */
      expect(method(String, new String(''))).toBe(true);
      expect(method(String, new String('xxx'))).toBe(true);
      /* eslint-enable no-new-wrappers */
    });

    it('Should return false otherwise', () => {
      expect(method(String, [])).toBe(false);
      expect(method(String, {})).toBe(false);
      expect(method(String, 0)).toBe(false);
      expect(method(String, Infinity)).toBe(false);
      expect(method(String, undefined)).toBe(false);
      expect(method(String, NaN)).toBe(false);
      expect(method(String, null)).toBe(false);
      expect(method(String, () => {})).toBe(false);
    });
  });

  it('Should work across browser frames in browsers', () => {
    expect(isBrowserCheck(String, new Foo())).toBe(true);
  });

  it('Should *not* attempt to work across browser frames in browsers', () => {
    expect(isNodeCheck(String, new Foo())).toBe(false);
  });
});
