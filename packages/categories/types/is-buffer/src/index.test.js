import isBuffer from '.';

describe('isBuffer', () => {
  it('Should be a function', () => {
    expect(typeof isBuffer).toBe('function');
  });

  it('Should return `true` for Date instances', () => {
    // eslint-disable-next-line no-buffer-constructor
    expect(isBuffer(new Buffer('foo'))).toBe(true);
    expect(isBuffer(Buffer.from([1, 2, 3]))).toBe(true);
  });

  it('Should return false otherwise', () => {
    expect(isBuffer('')).toBe(false);
    expect(isBuffer(new class {}())).toBe(false);
    expect(isBuffer(new Error(''))).toBe(false);
    expect(isBuffer('string')).toBe(false);
    expect(isBuffer([])).toBe(false);
    expect(isBuffer({})).toBe(false);
    expect(isBuffer(0)).toBe(false);
    expect(isBuffer(Infinity)).toBe(false);
    expect(isBuffer(undefined)).toBe(false);
    expect(isBuffer(NaN)).toBe(false);
    expect(isBuffer(null)).toBe(false);
    expect(isBuffer(() => {})).toBe(false);
  });
});
