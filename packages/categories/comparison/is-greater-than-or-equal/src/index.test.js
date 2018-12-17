import isGreaterThanOrEqual from '.';

describe('isGreaterThanOrEqual', () => {
  it('Should be a function', () => {
    expect(typeof isGreaterThanOrEqual).toBe('function');
  });

  it('Should compare two numbers', () => {
    expect(isGreaterThanOrEqual(1, 2)).toBe(false);
    expect(isGreaterThanOrEqual(2, 1)).toBe(true);
    expect(isGreaterThanOrEqual(2, 2)).toBe(true);
    expect(isGreaterThanOrEqual(NaN, 2)).toBe(false);
    expect(isGreaterThanOrEqual(1, NaN)).toBe(false);
    expect(isGreaterThanOrEqual(1, Infinity)).toBe(false);
    expect(isGreaterThanOrEqual(Infinity, 2)).toBe(true);
    expect(isGreaterThanOrEqual(0, 0)).toBe(true);
    expect(isGreaterThanOrEqual(0.01, 0)).toBe(true);
    expect(isGreaterThanOrEqual(-10, -20)).toBe(true);
    expect(isGreaterThanOrEqual(-20, -10)).toBe(false);
  });

  it('Should compare two strings', () => {
    expect(isGreaterThanOrEqual('', 'a')).toBe(false);
    expect(isGreaterThanOrEqual('a', '')).toBe(true);
    expect(isGreaterThanOrEqual('a', 'b')).toBe(false);
    expect(isGreaterThanOrEqual('b', 'a')).toBe(true);
  });

  it('Should compare two things', () => {
    expect(isGreaterThanOrEqual('', undefined)).toBe(false);
    expect(isGreaterThanOrEqual(undefined, '')).toBe(false);
    expect(isGreaterThanOrEqual('', NaN)).toBe(false);
    expect(isGreaterThanOrEqual(NaN, '')).toBe(false);
    expect(isGreaterThanOrEqual('', null)).toBe(true);
    expect(isGreaterThanOrEqual(null, '')).toBe(true);
    expect(isGreaterThanOrEqual(0, undefined)).toBe(false);
    expect(isGreaterThanOrEqual(undefined, 0)).toBe(false);
    expect(isGreaterThanOrEqual(0, NaN)).toBe(false);
    expect(isGreaterThanOrEqual(NaN, 0)).toBe(false);
    expect(isGreaterThanOrEqual(0, null)).toBe(true);
    expect(isGreaterThanOrEqual(null, 0)).toBe(true);
  });
});
