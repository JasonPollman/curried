/**
 * Tests for the `isSafeInteger` function.
 * @since 10/23/18
 * @file
 */

import { isStringNode, isStringBrowser } from '.';

class Foo {
  // eslint-disable-next-line class-methods-use-this
  get [Symbol.toStringTag]() {
    return 'String';
  }
}

describe('isString', () => {
  [isStringNode, isStringBrowser].forEach((method) => {
    it('Should be a function', () => {
      expect(typeof method).toBe('function');
    });

    it('Should return `true` for string values', () => {
      expect(method('')).toBe(true);
      expect(method('foo')).toBe(true);

      expect(method(String(''))).toBe(true);
      expect(method(String(0))).toBe(true);
      expect(method(String('xxx'))).toBe(true);

      /* eslint-disable no-new-wrappers */
      expect(method(new String(''))).toBe(true);
      expect(method(new String('xxx'))).toBe(true);
      /* eslint-enable no-new-wrappers */
    });

    it('Should return false otherwise', () => {
      expect(method([])).toBe(false);
      expect(method({})).toBe(false);
      expect(method(0)).toBe(false);
      expect(method(Infinity)).toBe(false);
      expect(method(undefined)).toBe(false);
      expect(method(NaN)).toBe(false);
      expect(method(null)).toBe(false);
      expect(method(() => {})).toBe(false);
    });
  });

  it('Should work across browser frames in browsers', () => {
    expect(isStringBrowser(new Foo())).toBe(true);
  });

  it('Should *not* attempt to work across browser frames in browsers', () => {
    expect(isStringNode(new Foo())).toBe(false);
  });
});
