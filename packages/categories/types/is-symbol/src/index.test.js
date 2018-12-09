import isSymbol from '.';

describe('isSymbol', () => {
  it('Should be a function', () => {
    expect(typeof isSymbol).toBe('function');
  });

  it('Should return `true` for Symbol instances', () => {
    expect(isSymbol(Symbol('foo'))).toBe(true);
    // eslint-disable-next-line symbol-description
    expect(isSymbol(Symbol())).toBe(true);
  });

  it('Should return false otherwise', () => {
    expect(isSymbol('')).toBe(false);
    expect(isSymbol(new class {}())).toBe(false);
    expect(isSymbol(new Error(''))).toBe(false);
    expect(isSymbol('string')).toBe(false);
    expect(isSymbol([])).toBe(false);
    expect(isSymbol({})).toBe(false);
    expect(isSymbol(0)).toBe(false);
    expect(isSymbol(Infinity)).toBe(false);
    expect(isSymbol(undefined)).toBe(false);
    expect(isSymbol(NaN)).toBe(false);
    expect(isSymbol(null)).toBe(false);
    expect(isSymbol(() => {})).toBe(false);
  });
});
