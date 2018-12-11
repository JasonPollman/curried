import isUndefined from '.';

describe('isUndefined', () => {
  it('Should be a function', () => {
    expect(typeof isUndefined).toBe('function');
  });

  it('Should return `true` for `null`', () => {
    // eslint-disable-next-line no-void
    expect(isUndefined(void 0)).toBe(true);
    expect(isUndefined(undefined)).toBe(true);
  });

  it('Should return `false` otherwise', () => {
    expect(isUndefined(null)).toBe(false);
    expect(isUndefined(0)).toBe(false);
    expect(isUndefined(false)).toBe(false);
    expect(isUndefined(true)).toBe(false);
    expect(isUndefined(NaN)).toBe(false);
    expect(isUndefined([])).toBe(false);
    expect(isUndefined('foo')).toBe(false);
  });
});
