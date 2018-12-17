import isLessThan from '.';

describe('isLessThan', () => {
  it('Should be a function', () => {
    expect(typeof isLessThan).toBe('function');
  });

  it('Should compare two numbers', () => {
    expect(isLessThan(1, 2)).toBe(true);
    expect(isLessThan(2, 1)).toBe(false);
    expect(isLessThan(2, 2)).toBe(false);
    expect(isLessThan(NaN, 2)).toBe(false);
    expect(isLessThan(1, NaN)).toBe(false);
    expect(isLessThan(1, Infinity)).toBe(true);
    expect(isLessThan(Infinity, 2)).toBe(false);
    expect(isLessThan(0, 0)).toBe(false);
    expect(isLessThan(0.01, 0)).toBe(false);
    expect(isLessThan(-10, -20)).toBe(false);
    expect(isLessThan(-20, -10)).toBe(true);
  });

  it('Should compare two strings', () => {
    expect(isLessThan('', 'a')).toBe(true);
    expect(isLessThan('a', '')).toBe(false);
    expect(isLessThan('a', 'b')).toBe(true);
    expect(isLessThan('b', 'a')).toBe(false);
  });

  it('Should compare two things', () => {
    expect(isLessThan('', undefined)).toBe(false);
    expect(isLessThan(undefined, '')).toBe(false);
    expect(isLessThan('', NaN)).toBe(false);
    expect(isLessThan(NaN, '')).toBe(false);
    expect(isLessThan('', null)).toBe(false);
    expect(isLessThan(null, '')).toBe(false);
    expect(isLessThan(0, undefined)).toBe(false);
    expect(isLessThan(undefined, 0)).toBe(false);
    expect(isLessThan(0, NaN)).toBe(false);
    expect(isLessThan(NaN, 0)).toBe(false);
    expect(isLessThan(0, null)).toBe(false);
    expect(isLessThan(null, 0)).toBe(false);
  });
});
