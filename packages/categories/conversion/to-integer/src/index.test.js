import toInteger from '.';

describe('toInteger', () => {
  it('Should be a function', () => {
    expect(typeof toInteger).toBe('function');
  });

  it('Should convert a value to an integer', () => {
    expect(toInteger(0)).toBe(0);
    expect(toInteger(1)).toBe(1);
    expect(toInteger(Number.MAX_SAFE_INTEGER)).toBe(Number.MAX_SAFE_INTEGER);
    expect(toInteger(Number.MAX_VALUE)).toBe(Number.MAX_VALUE);
    expect(toInteger(Number.MIN_VALUE)).toBe(0);
    expect(toInteger(1.1)).toBe(1);
    expect(toInteger(0.00000001)).toBe(0);
    expect(toInteger('5.123124')).toBe(5);
    expect(toInteger('1.111')).toBe(1);
  });
});
