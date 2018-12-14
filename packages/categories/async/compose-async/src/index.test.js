import composeAsync, { ARITY } from '.';

describe('composeAsync', () => {
  it('Should be a function', () => {
    expect(typeof composeAsync).toBe('function');
  });

  it('Should throw if a non-function argument is passed', () => {
    expect(() => composeAsync(() => {}, 5)).toThrow('The composeAsync function only accepts functions as arguments.');
  });

  it('Should throw if the number of provided function is less than 2 (1)', () => {
    expect(() => composeAsync()).toThrow('You must provide at least two functions to compose.');
  });

  it('Should throw if the number of provided function is less than 2 (2)', () => {
    expect(() => composeAsync(() => {})).toThrow('You must provide at least two functions to compose.');
  });

  it('Should compose async functions', async () => {
    const sum = (a, b) => Promise.resolve(a + b);
    const square = x => Promise.resolve(x * x);
    const sumSquared = composeAsync(square, sum);

    expect(typeof sumSquared).toBe('function');
    expect(typeof sumSquared(1, 2)).toBe('object');
    expect(sumSquared(1, 2).constructor).toBe(Promise);

    expect(await sumSquared(1, 2)).toBe(9);
    expect(await sumSquared(2, 3)).toBe(25);
  });

  it('Should compose async functions (correct ordering)', async () => {
    const appendAsync = y => x => new Promise((resolve) => {
      setTimeout(() => resolve(`${x}-${y}`), 100);
    });

    const appendA = appendAsync('a');
    const appendB = appendAsync('b');
    const appendC = appendAsync('c');

    const composed = composeAsync(appendC, appendB, appendA);

    expect(typeof composed).toBe('function');
    expect(typeof composed('x')).toBe('object');
    expect(composed('x').constructor).toBe(Promise);
    expect(await composed('x')).toBe('x-a-b-c');
  });

  it('Should add the `ARITY` property to composed functions', async () => {
    const sum = (a, b) => Promise.resolve(a + b);
    const square = x => Promise.resolve(x * x);
    const sumSquared = composeAsync(square, sum);

    expect(typeof sumSquared).toBe('function');
    expect(await sumSquared(1, 2)).toBe(9);
    expect(sumSquared[ARITY]).toBe(2);
  });

  it('Should add the `ARITY` property to composed functions (already there)', async () => {
    const sum = (a, b) => Promise.resolve(a + b);
    sum[ARITY] = 3;
    const square = x => Promise.resolve(x * x);
    const sumSquared = composeAsync(square, sum);

    expect(typeof sumSquared).toBe('function');
    expect(await sumSquared(1, 2)).toBe(9);
    expect(await sumSquared[ARITY]).toBe(3);
  });
});
