import compose, { ARITY } from '.';

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
});
