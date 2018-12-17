import isGreaterThanOrEqualFx from '.';

describe('isGreaterThanOrEqualFx', () => {
  it('Should be a function', () => {
    expect(typeof isGreaterThanOrEqualFx).toBe('function');
  });

  it('Should compare two numbers', () => {
    expect(isGreaterThanOrEqualFx(2)(1)).toBe(false);
    expect(isGreaterThanOrEqualFx(1)(2)).toBe(true);
    expect(isGreaterThanOrEqualFx(2)(2)).toBe(true);
    expect(isGreaterThanOrEqualFx(2)(NaN)).toBe(false);
    expect(isGreaterThanOrEqualFx(NaN)(1)).toBe(false);
    expect(isGreaterThanOrEqualFx(Infinity)(1)).toBe(false);
    expect(isGreaterThanOrEqualFx(2)(Infinity)).toBe(true);
    expect(isGreaterThanOrEqualFx(0)(0)).toBe(true);
    expect(isGreaterThanOrEqualFx(0)(0.01)).toBe(true);
    expect(isGreaterThanOrEqualFx(-20)(-10)).toBe(true);
    expect(isGreaterThanOrEqualFx(-10)(-20)).toBe(false);
  });

  it('Should compare two strings', () => {
    expect(isGreaterThanOrEqualFx('a')('')).toBe(false);
    expect(isGreaterThanOrEqualFx('')('a')).toBe(true);
    expect(isGreaterThanOrEqualFx('b')('a')).toBe(false);
    expect(isGreaterThanOrEqualFx('a')('b')).toBe(true);
  });

  it('Should compare two things', () => {
    expect(isGreaterThanOrEqualFx(undefined)('')).toBe(false);
    expect(isGreaterThanOrEqualFx('')(undefined)).toBe(false);
    expect(isGreaterThanOrEqualFx(NaN)('')).toBe(false);
    expect(isGreaterThanOrEqualFx('')(NaN)).toBe(false);
    expect(isGreaterThanOrEqualFx(null)('')).toBe(true);
    expect(isGreaterThanOrEqualFx('')(null)).toBe(true);
    expect(isGreaterThanOrEqualFx(undefined)(0)).toBe(false);
    expect(isGreaterThanOrEqualFx(0)(undefined)).toBe(false);
    expect(isGreaterThanOrEqualFx(NaN)(0)).toBe(false);
    expect(isGreaterThanOrEqualFx(0)(NaN)).toBe(false);
    expect(isGreaterThanOrEqualFx(null)(0)).toBe(true);
    expect(isGreaterThanOrEqualFx(0)(null)).toBe(true);
  });
});
