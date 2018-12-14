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

  it('Should return a false function if not given a valid constructor any currying', () => {
    expect(is(null)('')).toBe(false);
    expect(is(undefined)(undefined)).toBe(false);
  });

  it('Should be curried', () => {
    expect(is(String)('')).toBe(true);
    expect(is(String)('foo')).toBe(true);

    expect(is(String)(String(''))).toBe(true);
    expect(is(String)(String(0))).toBe(true);
    expect(is(String)(String('xxx'))).toBe(true);

    /* eslint-disable no-new-wrappers */
    expect(is(String)(new String(''))).toBe(true);
    expect(is(String)(new String('xxx'))).toBe(true);
    /* eslint-enable no-new-wrappers */

    expect(is(String)([])).toBe(false);
    expect(is(String)({})).toBe(false);
    expect(is(String)(0)).toBe(false);
    expect(is(String)(Infinity)).toBe(false);
    expect(is(String)(undefined)).toBe(false);
    expect(is(String)(NaN)).toBe(false);
    expect(is(String)(null)).toBe(false);
    expect(is(String)(() => {})).toBe(false);
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
