import isLessThanOrEqualFx from '.';

describe('isLessThanOrEqualFx', () => {
  it('Should be a function', () => {
    expect(typeof isLessThanOrEqualFx).toBe('function');
  });

  it('Should compare two numbers', () => {
    expect(isLessThanOrEqualFx(2)(1)).toBe(true);
    expect(isLessThanOrEqualFx(1)(2)).toBe(false);
    expect(isLessThanOrEqualFx(2)(2)).toBe(true);
    expect(isLessThanOrEqualFx(2)(NaN)).toBe(false);
    expect(isLessThanOrEqualFx(NaN)(1)).toBe(false);
    expect(isLessThanOrEqualFx(Infinity)(1)).toBe(true);
    expect(isLessThanOrEqualFx(2)(Infinity)).toBe(false);
    expect(isLessThanOrEqualFx(0)(0)).toBe(true);
    expect(isLessThanOrEqualFx(0)(0.01)).toBe(false);
    expect(isLessThanOrEqualFx(-20)(-10)).toBe(false);
    expect(isLessThanOrEqualFx(-10)(-20)).toBe(true);
  });

  it('Should compare two strings', () => {
    expect(isLessThanOrEqualFx('a')('')).toBe(true);
    expect(isLessThanOrEqualFx('')('a')).toBe(false);
    expect(isLessThanOrEqualFx('b')('a')).toBe(true);
    expect(isLessThanOrEqualFx('a')('b')).toBe(false);
  });

  it('Should compare two things', () => {
    expect(isLessThanOrEqualFx(undefined)('')).toBe(false);
    expect(isLessThanOrEqualFx('')(undefined)).toBe(false);
    expect(isLessThanOrEqualFx(NaN)('')).toBe(false);
    expect(isLessThanOrEqualFx('')(NaN)).toBe(false);
    expect(isLessThanOrEqualFx(null)('')).toBe(true);
    expect(isLessThanOrEqualFx('')(null)).toBe(true);
    expect(isLessThanOrEqualFx(undefined)(0)).toBe(false);
    expect(isLessThanOrEqualFx(0)(undefined)).toBe(false);
    expect(isLessThanOrEqualFx(NaN)(0)).toBe(false);
    expect(isLessThanOrEqualFx(0)(NaN)).toBe(false);
    expect(isLessThanOrEqualFx(null)(0)).toBe(true);
    expect(isLessThanOrEqualFx(0)(null)).toBe(true);
  });
});
