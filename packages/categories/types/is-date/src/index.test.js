import isDate from '.';

describe('isDate', () => {
  it('Should be a function', () => {
    expect(typeof isDate).toBe('function');
  });

  it('Should return `true` for Date instances', () => {
    expect(isDate(new Date())).toBe(true);
  });

  it('Should return false otherwise', () => {
    expect(isDate('')).toBe(false);
    expect(isDate(new class {}())).toBe(false);
    expect(isDate(new Error(''))).toBe(false);
    expect(isDate('string')).toBe(false);
    expect(isDate([])).toBe(false);
    expect(isDate({})).toBe(false);
    expect(isDate(0)).toBe(false);
    expect(isDate(Infinity)).toBe(false);
    expect(isDate(undefined)).toBe(false);
    expect(isDate(NaN)).toBe(false);
    expect(isDate(null)).toBe(false);
    expect(isDate(() => {})).toBe(false);
  });
});
