import isObject from '.';

describe('isObject', () => {
  it('Should be a function', () => {
    expect(typeof isObject).toBe('function');
  });

  it('Should return `true` for objects', () => {
    expect(isObject({})).toBe(true);
  });

  it('Should return `true` for arrays', () => {
    expect(isObject([])).toBe(true);
  });

  it('Should return `true` for functions', () => {
    expect(isObject(() => {})).toBe(true);
  });

  it('Should return `true` for regexps', () => {
    expect(isObject(/foo/)).toBe(true);
  });

  it('Should return `true` for `new String()`', () => {
    // eslint-disable-next-line no-new-wrappers
    expect(isObject(new String('foo'))).toBe(true);
  });

  it('Should return `true` for `new Number()`', () => {
    // eslint-disable-next-line no-new-wrappers
    expect(isObject(new Number(5))).toBe(true);
  });

  it('Should return `false` otherwise', () => {
    // eslint-disable-next-line no-void
    expect(isObject(void 0)).toBe(false);
    expect(isObject(undefined)).toBe(false);
    expect(isObject(0)).toBe(false);
    expect(isObject(false)).toBe(false);
    expect(isObject(true)).toBe(false);
    expect(isObject(NaN)).toBe(false);
    expect(isObject('foo')).toBe(false);
  });
});
