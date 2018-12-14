import { isIntegerPolyfill } from '.';

describe('isInteger', () => {
  it('Should be a function', () => {
    expect(typeof isIntegerPolyfill).toBe('function');
  });

  it('Should return `false` for non-numeric values', () => {
    expect(isIntegerPolyfill('foo')).toBe(false);
    expect(isIntegerPolyfill(NaN)).toBe(false);
    expect(isIntegerPolyfill(undefined)).toBe(false);
    expect(isIntegerPolyfill(null)).toBe(false);
  });

  it('Should return `true` for integer values', () => {
    expect(isIntegerPolyfill(0)).toBe(true);
    expect(isIntegerPolyfill(1)).toBe(true);
    expect(isIntegerPolyfill(1e6)).toBe(true);
    expect(isIntegerPolyfill(-0)).toBe(true);
    expect(isIntegerPolyfill(-1)).toBe(true);
    expect(isIntegerPolyfill(-1e6)).toBe(true);
    expect(isIntegerPolyfill(0xf)).toBe(true);
    expect(isIntegerPolyfill(-0)).toBe(true);
    expect(isIntegerPolyfill(-10)).toBe(true);
  });

  it('Should return `false` for non-integer values', () => {
    expect(isIntegerPolyfill(0.02)).toBe(false);
    expect(isIntegerPolyfill(1.87)).toBe(false);
    expect(isIntegerPolyfill(-0.02)).toBe(false);
  });

  it('Should return `false` for +/-Infinity', () => {
    expect(isIntegerPolyfill(Infinity)).toBe(false);
    expect(isIntegerPolyfill(-Infinity)).toBe(false);
  });

  it('Should return `true` for Number constants', () => {
    expect(isIntegerPolyfill(Number.MAX_SAFE_INTEGER)).toBe(true);
    expect(isIntegerPolyfill(Number.MIN_SAFE_INTEGER)).toBe(true);
    expect(isIntegerPolyfill(Number.MAX_VALUE)).toBe(true);
  });
});
