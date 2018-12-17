import isLessThanFx from '.';

describe('isLessThanFx', () => {
  it('Should be a function', () => {
    expect(typeof isLessThanFx).toBe('function');
  });

  it('Should compare two numbers', () => {
    expect(isLessThanFx(2)(1)).toBe(true);
    expect(isLessThanFx(1)(2)).toBe(false);
    expect(isLessThanFx(2)(2)).toBe(false);
    expect(isLessThanFx(2)(NaN)).toBe(false);
    expect(isLessThanFx(NaN)(1)).toBe(false);
    expect(isLessThanFx(Infinity)(1)).toBe(true);
    expect(isLessThanFx(2)(Infinity)).toBe(false);
    expect(isLessThanFx(0)(0)).toBe(false);
    expect(isLessThanFx(0)(0.01)).toBe(false);
    expect(isLessThanFx(-20)(-10)).toBe(false);
    expect(isLessThanFx(-10)(-20)).toBe(true);
  });

  it('Should compare two strings', () => {
    expect(isLessThanFx('a')('')).toBe(true);
    expect(isLessThanFx('')('a')).toBe(false);
    expect(isLessThanFx('b')('a')).toBe(true);
    expect(isLessThanFx('a')('b')).toBe(false);
  });

  it('Should compare two things', () => {
    expect(isLessThanFx(undefined)('')).toBe(false);
    expect(isLessThanFx('')(undefined)).toBe(false);
    expect(isLessThanFx(NaN)('')).toBe(false);
    expect(isLessThanFx('')(NaN)).toBe(false);
    expect(isLessThanFx(null)('')).toBe(false);
    expect(isLessThanFx('')(null)).toBe(false);
    expect(isLessThanFx(undefined)(0)).toBe(false);
    expect(isLessThanFx(0)(undefined)).toBe(false);
    expect(isLessThanFx(NaN)(0)).toBe(false);
    expect(isLessThanFx(0)(NaN)).toBe(false);
    expect(isLessThanFx(null)(0)).toBe(false);
    expect(isLessThanFx(0)(null)).toBe(false);
  });
});
