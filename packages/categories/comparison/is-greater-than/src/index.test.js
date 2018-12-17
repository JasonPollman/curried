import isGreaterThan from '.';

describe('isGreaterThan', () => {
  it('Should be a function', () => {
    expect(typeof isGreaterThan).toBe('function');
  });

  it('Should compare two numbers', () => {
    expect(isGreaterThan(1, 2)).toBe(false);
    expect(isGreaterThan(2, 1)).toBe(true);
    expect(isGreaterThan(2, 2)).toBe(false);
    expect(isGreaterThan(NaN, 2)).toBe(false);
    expect(isGreaterThan(1, NaN)).toBe(false);
    expect(isGreaterThan(1, Infinity)).toBe(false);
    expect(isGreaterThan(Infinity, 2)).toBe(true);
    expect(isGreaterThan(0, 0)).toBe(false);
    expect(isGreaterThan(0.01, 0)).toBe(true);
    expect(isGreaterThan(-10, -20)).toBe(true);
    expect(isGreaterThan(-20, -10)).toBe(false);
  });

  it('Should compare two strings', () => {
    expect(isGreaterThan('', 'a')).toBe(false);
    expect(isGreaterThan('a', '')).toBe(true);
    expect(isGreaterThan('a', 'b')).toBe(false);
    expect(isGreaterThan('b', 'a')).toBe(true);
  });

  it('Should compare two things', () => {
    expect(isGreaterThan('', undefined)).toBe(false);
    expect(isGreaterThan(undefined, '')).toBe(false);
    expect(isGreaterThan('', NaN)).toBe(false);
    expect(isGreaterThan(NaN, '')).toBe(false);
    expect(isGreaterThan('', null)).toBe(false);
    expect(isGreaterThan(null, '')).toBe(false);
    expect(isGreaterThan(0, undefined)).toBe(false);
    expect(isGreaterThan(undefined, 0)).toBe(false);
    expect(isGreaterThan(0, NaN)).toBe(false);
    expect(isGreaterThan(NaN, 0)).toBe(false);
    expect(isGreaterThan(0, null)).toBe(false);
    expect(isGreaterThan(null, 0)).toBe(false);
  });
});
