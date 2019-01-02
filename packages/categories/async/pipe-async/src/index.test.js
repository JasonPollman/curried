import pipeAsync, { ARITY } from '.';

describe('pipeAsync', () => {
  it('Should be a function', () => {
    expect(typeof pipeAsync).toBe('function');
  });

  it('Should throw if a non-function argument is passed', () => {
    expect(() => pipeAsync(() => {}, 5)).toThrow('The pipeAsync function only accepts functions as arguments.');
  });

  it('Should throw if the number of provided function is less than 2 (1)', () => {
    expect(() => pipeAsync()).toThrow('You must provide at least two functions to pipe.');
  });

  it('Should throw if the number of provided function is less than 2 (2)', () => {
    expect(() => pipeAsync(() => {})).toThrow('You must provide at least two functions to pipe.');
  });

  it('Should pipe async functions', async () => {
    const sum = (a, b) => Promise.resolve(a + b);
    const square = x => Promise.resolve(x * x);
    const sumSquared = pipeAsync(sum, square);

    expect(typeof sumSquared).toBe('function');
    expect(typeof sumSquared(1, 2)).toBe('object');
    expect(sumSquared(1, 2).constructor).toBe(Promise);

    expect(await sumSquared(1, 2)).toBe(9);
    expect(await sumSquared(2, 3)).toBe(25);
  });

  it('Should pipe async functions (correct ordering)', async () => {
    const appendAsync = y => x => new Promise((resolve) => {
      setTimeout(() => resolve(`${x}-${y}`), 100);
    });

    const appendA = appendAsync('a');
    const appendB = appendAsync('b');
    const appendC = appendAsync('c');

    const piped = pipeAsync(appendA, appendB, appendC);

    expect(typeof piped).toBe('function');
    expect(typeof piped('x')).toBe('object');
    expect(piped('x').constructor).toBe(Promise);
    expect(await piped('x')).toBe('x-a-b-c');
  });

  it('Should add the `ARITY` property to piped functions', async () => {
    const sum = (a, b) => Promise.resolve(a + b);
    const square = x => Promise.resolve(x * x);
    const sumSquared = pipeAsync(sum, square);

    expect(typeof sumSquared).toBe('function');
    expect(await sumSquared(1, 2)).toBe(9);
    expect(sumSquared[ARITY]).toBe(2);
  });

  it('Should add the `ARITY` property to piped functions (already there)', async () => {
    const sum = (a, b) => Promise.resolve(a + b);
    sum[ARITY] = 3;
    const square = x => Promise.resolve(x * x);
    const sumSquared = pipeAsync(sum, square);

    expect(typeof sumSquared).toBe('function');
    expect(await sumSquared(1, 2)).toBe(9);
    expect(await sumSquared[ARITY]).toBe(3);
  });
});
