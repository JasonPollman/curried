import pipe, { ARITY } from '.';

describe('pipe', () => {
  it('Should error if arguments passed to pipe are not of type function', () => {
    try {
      pipe(f => f, 'hello');
    } catch (e) {
      expect(e.message).toBe('Expected arguments of pipe to be of type function');
    }
  });

  it('Should error if no arguments are passed to pipe', () => {
    try {
      pipe();
    } catch (e) {
      expect(e.message).toBe('Expected arguments of pipe to be of type function');
    }
  });

  it('Should pipe values through pipe chain', () => {
    const add = (a, b) => a + b;
    const multiply = v => v * v;
    const piped = pipe(add, multiply);
    expect(piped(2, 5)).toBe(49);
  });

  it('Should add the `ARITY` property to composed functions', () => {
    const sum = (a, b) => a + b;
    const square = x => x * x;
    const sumSquared = pipe(sum, square);

    expect(typeof sumSquared).toBe('function');
    expect(sumSquared(1, 2)).toBe(9);
    expect(sumSquared[ARITY]).toBe(2);
  });

  it('Should add the `ARITY` property to composed functions (existing)', () => {
    const sum = (a, b) => a + b;
    sum[ARITY] = 3;

    const square = x => x * x;
    const sumSquared = pipe(sum, square);

    expect(typeof sumSquared).toBe('function');
    expect(sumSquared(1, 2)).toBe(9);
    expect(sumSquared[ARITY]).toBe(3);
  });
});
