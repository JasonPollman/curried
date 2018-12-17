import isLessThanOrEqual from '.';

describe('isLessThanOrEqual', () => {
  it('Should be a function', () => {
    expect(typeof isLessThanOrEqual).toBe('function');
  });

  it('Should compare two numbers', () => {
    expect(isLessThanOrEqual(1, 2)).toBe(true);
    expect(isLessThanOrEqual(2, 1)).toBe(false);
    expect(isLessThanOrEqual(2, 2)).toBe(true);
    expect(isLessThanOrEqual(NaN, 2)).toBe(false);
    expect(isLessThanOrEqual(1, NaN)).toBe(false);
    expect(isLessThanOrEqual(1, Infinity)).toBe(true);
    expect(isLessThanOrEqual(Infinity, 2)).toBe(false);
    expect(isLessThanOrEqual(0, 0)).toBe(true);
    expect(isLessThanOrEqual(0.01, 0)).toBe(false);
    expect(isLessThanOrEqual(-10, -20)).toBe(false);
    expect(isLessThanOrEqual(-20, -10)).toBe(true);
  });

  it('Should compare two strings', () => {
    expect(isLessThanOrEqual('', 'a')).toBe(true);
    expect(isLessThanOrEqual('a', '')).toBe(false);
    expect(isLessThanOrEqual('a', 'b')).toBe(true);
    expect(isLessThanOrEqual('b', 'a')).toBe(false);
  });

  it('Should compare two things', () => {
    expect(isLessThanOrEqual('', undefined)).toBe(false);
    expect(isLessThanOrEqual(undefined, '')).toBe(false);
    expect(isLessThanOrEqual('', NaN)).toBe(false);
    expect(isLessThanOrEqual(NaN, '')).toBe(false);
    expect(isLessThanOrEqual('', null)).toBe(true);
    expect(isLessThanOrEqual(null, '')).toBe(true);
    expect(isLessThanOrEqual(0, undefined)).toBe(false);
    expect(isLessThanOrEqual(undefined, 0)).toBe(false);
    expect(isLessThanOrEqual(0, NaN)).toBe(false);
    expect(isLessThanOrEqual(NaN, 0)).toBe(false);
    expect(isLessThanOrEqual(0, null)).toBe(true);
    expect(isLessThanOrEqual(null, 0)).toBe(true);
  });
});
