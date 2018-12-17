import isGreaterThanFx from '.';

describe('isGreaterThanFx', () => {
  it('Should be a function', () => {
    expect(typeof isGreaterThanFx).toBe('function');
  });

  it('Should compare two numbers', () => {
    expect(isGreaterThanFx(2)(1)).toBe(false);
    expect(isGreaterThanFx(1)(2)).toBe(true);
    expect(isGreaterThanFx(2)(2)).toBe(false);
    expect(isGreaterThanFx(2)(NaN)).toBe(false);
    expect(isGreaterThanFx(NaN)(1)).toBe(false);
    expect(isGreaterThanFx(Infinity)(1)).toBe(false);
    expect(isGreaterThanFx(2)(Infinity)).toBe(true);
    expect(isGreaterThanFx(0)(0)).toBe(false);
    expect(isGreaterThanFx(0)(0.01)).toBe(true);
    expect(isGreaterThanFx(-20)(-10)).toBe(true);
    expect(isGreaterThanFx(-10)(-20)).toBe(false);
  });

  it('Should compare two strings', () => {
    expect(isGreaterThanFx('a')('')).toBe(false);
    expect(isGreaterThanFx('')('a')).toBe(true);
    expect(isGreaterThanFx('b')('a')).toBe(false);
    expect(isGreaterThanFx('a')('b')).toBe(true);
  });

  it('Should compare two things', () => {
    expect(isGreaterThanFx(undefined)('')).toBe(false);
    expect(isGreaterThanFx('')(undefined)).toBe(false);
    expect(isGreaterThanFx(NaN)('')).toBe(false);
    expect(isGreaterThanFx('')(NaN)).toBe(false);
    expect(isGreaterThanFx(null)('')).toBe(false);
    expect(isGreaterThanFx('')(null)).toBe(false);
    expect(isGreaterThanFx(undefined)(0)).toBe(false);
    expect(isGreaterThanFx(0)(undefined)).toBe(false);
    expect(isGreaterThanFx(NaN)(0)).toBe(false);
    expect(isGreaterThanFx(0)(NaN)).toBe(false);
    expect(isGreaterThanFx(null)(0)).toBe(false);
    expect(isGreaterThanFx(0)(null)).toBe(false);
  });
});
