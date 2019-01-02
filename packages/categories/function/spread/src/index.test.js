import spread from '.';
import SafeSymbolFor from '@foldr/internal-symbol';

const ARITY = SafeSymbolFor('source-arity');

describe('spread', () => {
  it('Should be a function', () => {
    expect(typeof spread).toBe('function');
  });

  it('Should create a function that spreads the given array value onto the given function\'s arguments list', () => {
    const sum = (x, y) => x + y;
    const add = spread(sum);
    expect(add([1, 2])).toBe(3);
    expect(add[ARITY]).toBe(1);
  });

  it('Should create a function that spreads the given array value onto the given function\'s arguments list (2)', async () => {
    const sum = (x, y) => x + y;
    const promise = Promise.all([100, 400]);
    const spreadSum = spread(sum);
    expect(spreadSum[ARITY]).toBe(1);
    expect(await promise.then(spreadSum)).toBe(500);
  });

  it('Should create a function that spreads the given array value onto the given function\'s arguments list (3, with start index)', async () => {
    const sum = (x, y) => x + y;
    const spreadSum = spread(sum, 2);
    expect(spreadSum[ARITY]).toBe(2);
    expect(spreadSum(100, 400, [500, 600])).toBe(500);
  });

  it('Should create a function that spreads the given array value onto the given function\'s arguments list (3.5, with start index)', async () => {
    const sum = (x, y) => x + y;
    const spreadSum = spread(sum, 1);
    expect(spreadSum[ARITY]).toBe(2);
    expect(spread(sum, 1)(100, 400, [500, 600])).toBe(NaN);
  });

  it('Should create a function that spreads the given array value onto the given function\'s arguments list (4, with negative start index)', async () => {
    const sum = (x, y) => x + y;
    const promise = Promise.all([100, 400, 500]);
    const spreadSum = spread(sum, -1);
    expect(spreadSum[ARITY]).toBe(1);
    expect(await promise.then(spreadSum)).toBe(500);
  });

  it('Should create a function that spreads the given array value onto the given function\'s arguments list (5, with NaN start index)', async () => {
    const sum = (x, y) => x + y;
    const spreadSum = spread(sum, NaN);
    const promise = Promise.all([100, 401, 500]);
    expect(await promise.then(spreadSum)).toBe(501);
  });

  it('Should create a function that spreads the given array value onto the given function\'s arguments list (6, no args given)', () => {
    const sum = (x, y) => `${x}-${y}`;
    expect(spread(sum)()).toBe('undefined-undefined');
  });

  it('Should retain any existing ARITY property', () => {
    const sum = (x, y) => `${x}-${y}`;
    sum[ARITY] = 9;
    const spreadSum = spread(sum, 10);
    expect(spreadSum[ARITY]).toBe(9);
    expect(spreadSum()).toBe('undefined-undefined');
  });

  it('Should create a function that spreads the given array value onto the given function\'s arguments list (7, non-array given)', () => {
    const sum = (x, y) => `${x}-${y}`;
    expect(spread(sum)('foobar')).toBe('undefined-undefined');
  });

  it('Should create a function that spreads the given array value onto the given function\'s arguments list (8)', () => {
    const sum = (x, y) => `${x}-${y}`;
    expect(spread(sum)(['a', 'b'])).toBe('a-b');
  });

  it('Should throw if called with a non-function', () => {
    expect(spread).toThrow('Expected a function.');
  });

  it('Should create a function that spreads the given array value onto the given function\'s arguments list (9, with start index)', () => {
    const sum = (x, y, ...rest) => `${x}-${y}-${rest.join('.')}`;
    expect(spread(sum, 2)(100, 400, ['a', 'b', 'c'])).toBe('100-400-a.b.c');
  });
});
