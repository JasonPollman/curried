import isRegExp from '.';

describe('isRegExp', () => {
  it('Should be a function', () => {
    expect(typeof isRegExp).toBe('function');
  });

  it('Should return `true` for RegExp instances', () => {
    expect(isRegExp(new RegExp('.*'))).toBe(true);
    expect(isRegExp(/foo/)).toBe(true);
  });

  it('Should return false otherwise', () => {
    expect(isRegExp('')).toBe(false);
    expect(isRegExp(new class {}())).toBe(false);
    expect(isRegExp(new Error(''))).toBe(false);
    expect(isRegExp('string')).toBe(false);
    expect(isRegExp([])).toBe(false);
    expect(isRegExp({})).toBe(false);
    expect(isRegExp(0)).toBe(false);
    expect(isRegExp(Infinity)).toBe(false);
    expect(isRegExp(undefined)).toBe(false);
    expect(isRegExp(NaN)).toBe(false);
    expect(isRegExp(null)).toBe(false);
    expect(isRegExp(() => {})).toBe(false);
  });
});
