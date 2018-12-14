import isString from '.';

describe('isString', () => {
  it('Should be a function', () => {
    expect(typeof isString).toBe('function');
  });

  it('Should return `true` for string values', () => {
    expect(isString('')).toBe(true);
    expect(isString('foo')).toBe(true);

    expect(isString(String(''))).toBe(true);
    expect(isString(String(0))).toBe(true);
    expect(isString(String('xxx'))).toBe(true);

    /* eslint-disable no-new-wrappers */
    expect(isString(new String(''))).toBe(true);
    expect(isString(new String('xxx'))).toBe(true);
    /* eslint-enable no-new-wrappers */
  });

  it('Should return false otherwise', () => {
    expect(isString([])).toBe(false);
    expect(isString({})).toBe(false);
    expect(isString(0)).toBe(false);
    expect(isString(Infinity)).toBe(false);
    expect(isString(undefined)).toBe(false);
    expect(isString(NaN)).toBe(false);
    expect(isString(null)).toBe(false);
    expect(isString(() => {})).toBe(false);
  });
});
