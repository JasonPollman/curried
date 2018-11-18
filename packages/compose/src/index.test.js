/**
 * Tests for the `compose` function.
 * @since 10/23/18
 * @file
 */

import compose, { f, ARITY } from '.';

describe('compose', () => {
  it('Should be a function', () => {
    expect(typeof compose).toBe('function');
  });

  it('Should throw if the number of provided function is less than 2 (1)', () => {
    expect(() => compose()).toThrow('You must provide at least two functions to compose.');
  });

  it('Should throw if the number of provided function is less than 2 (2)', () => {
    expect(() => compose(() => {})).toThrow('You must provide at least two functions to compose.');
  });

  it('Should throw if a non-function argument is passed', () => {
    expect(() => compose(() => {}, 5)).toThrow('The compose function only accepts functions as arguments.');
  });

  it('Should compose functions', () => {
    const sum = (a, b) => a + b;
    const square = x => x * x;
    const sumSquared = compose(square, sum);

    expect(typeof sumSquared).toBe('function');
    expect(sumSquared(1, 2)).toBe(9);
    expect(sumSquared(2, 3)).toBe(25);
  });

  it('Should add the `ARITY` property to composed functions', () => {
    const sum = (a, b) => a + b;
    const square = x => x * x;
    const sumSquared = compose(square, sum);

    expect(typeof sumSquared).toBe('function');
    expect(sumSquared(1, 2)).toBe(9);
    expect(sumSquared[ARITY]).toBe(2);
  });

  it('Should add the `ARITY` property to composed functions (already there)', () => {
    const sum = (a, b) => a + b;
    sum[ARITY] = 3;
    const square = x => x * x;
    const sumSquared = compose(square, sum);

    expect(typeof sumSquared).toBe('function');
    expect(sumSquared(1, 2)).toBe(9);
    expect(sumSquared[ARITY]).toBe(3);
  });

  describe('compose.f', () => {
    it('Should be a function', () => {
      // eslint-disable-next-line import/no-named-as-default-member
      expect(typeof compose.f).toBe('function');
      expect(typeof f).toBe('function');

      // eslint-disable-next-line import/no-named-as-default-member
      expect(compose.f === f).toBe(true);
    });

    it('Should compose functions', () => {
      const sum = (a, b) => a + b;
      const square = x => x * x;
      const sumSquared = f(square)(sum);

      expect(typeof sumSquared).toBe('function');
      expect(sumSquared(1, 2)).toBe(9);
      expect(sumSquared(2, 3)).toBe(25);
    });
  });
});
