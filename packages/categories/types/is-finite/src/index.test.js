import { isFinitePolyfill } from '.';

describe('isFinite', () => {
  it('Should be a function', () => {
    expect(typeof isFinitePolyfill).toBe('function');
  });

  it('Should return `false` for non-numeric values', () => {
    expect(isFinitePolyfill('foo')).toBe(false);
    expect(isFinitePolyfill(NaN)).toBe(false);
    expect(isFinitePolyfill(undefined)).toBe(false);
    expect(isFinitePolyfill(null)).toBe(false);
  });

  it('Should return `true` for finite numbers', () => {
    expect(isFinitePolyfill(0)).toBe(true);
    expect(isFinitePolyfill(1)).toBe(true);
    expect(isFinitePolyfill(0.1)).toBe(true);
    expect(isFinitePolyfill(1e6)).toBe(true);
    expect(isFinitePolyfill(-0)).toBe(true);
    expect(isFinitePolyfill(-1)).toBe(true);
    expect(isFinitePolyfill(-0.1)).toBe(true);
    expect(isFinitePolyfill(-1e6)).toBe(true);
    expect(isFinitePolyfill(0xf)).toBe(true);
  });

  it('Should return `false` for +/-Infinity', () => {
    expect(isFinitePolyfill(Infinity)).toBe(false);
    expect(isFinitePolyfill(-Infinity)).toBe(false);
  });

  it('Should return `true` for Number constants', () => {
    expect(isFinitePolyfill(Number.MAX_SAFE_INTEGER)).toBe(true);
    expect(isFinitePolyfill(Number.MAX_VALUE)).toBe(true);
  });
});
