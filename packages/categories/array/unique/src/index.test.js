import unique from '.';

describe('unique', () => {
  it('Should unique an array of values', () => {
    expect(unique([])).toEqual([]);
    expect(unique([5, 6, 7])).toEqual([5, 6, 7]);
    expect(unique(['a', 'b', 'c'])).toEqual(['a', 'b', 'c']);
    expect(unique('foo')).toEqual(['f', 'o']);
  });

  it('Should not mutate the input array', () => {
    const array = [1, 2, 3, -1];
    const results = unique([1, 2, 3, -1]);
    expect(results).toEqual([1, 2, 3, -1]);
    expect(results).not.toBe(array);
  });

  it('Should unique an array of values (large)', () => {
    expect(unique(Array(10000).fill(0))).toEqual([0]);
  });

  it('Should unique an array of values (large, NaN)', () => {
    expect(unique(Array(10000).fill(NaN))).toEqual([NaN]);
  });

  it('Should unique an array of values (large, varied)', () => {
    const array = '1234567890'.repeat(10000).split('').map(Number);
    expect(unique(array)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
  });

  it('Should unique an array of values (empty)', () => {
    expect(unique([])).toEqual([]);
  });

  it('Should unique an array of values (zeros)', () => {
    expect(unique([0, 0, 0, 0, 0, 0])).toEqual([0]);
  });

  it('Should unique an array of values (array size 1)', () => {
    expect(unique([1])).toEqual([1]);
    expect(unique([null])).toEqual([null]);
  });

  it('Should unique an array of values (with NaN)', () => {
    expect(unique([NaN, NaN, NaN, NaN])).toEqual([NaN]);
    expect(unique(['a', NaN, NaN, NaN, NaN, 'b'])).toEqual(['a', NaN, 'b']);
    expect(unique(['a', 'b', NaN, NaN, NaN, NaN, 'b'])).toEqual(['a', 'b', NaN]);
    expect(unique(['a', 'b', NaN, 'c', NaN, 'd', NaN, NaN, 'b'])).toEqual(['a', 'b', NaN, 'c', 'd']);
    expect(unique([NaN, 2, 1, NaN, 1, NaN, -1, NaN])).toEqual([NaN, 2, 1, -1]);
  });

  it('Should unique an array of values (with null, undefined)', () => {
    expect(unique([null, undefined, 'a', null, undefined, 'b'])).toEqual([null, undefined, 'a', 'b']);
  });

  it('Should unique an array of values (with NaN, etc.)', () => {
    const array = [NaN, Infinity, NaN, Infinity, -Infinity, -Infinity, 0, -0, -0, 0];
    expect(unique(array)).toEqual([NaN, Infinity, -Infinity, 0]);
  });

  it('Should unique an array of values (with Symbols)', () => {
    const a = Symbol('a');
    const b = Symbol('b');
    const array = [a, b, 1, a, a, b, b, a, b, 2];
    expect(unique(array)).toEqual([a, b, 1, 2]);
  });

  it('Should unique an array of values (bad input)', () => {
    expect(unique(null)).toEqual([]);
    expect(unique(undefined)).toEqual([]);
    expect(unique(NaN)).toEqual([]);
    expect(unique(false)).toEqual([]);
    expect(unique(true)).toEqual([]);
    expect(unique(Infinity)).toEqual([]);
    expect(unique(-Infinity)).toEqual([]);
    expect(unique(Symbol('foo'))).toEqual([]);
    expect(unique({})).toEqual([]);
    expect(unique(() => {})).toEqual([]);
  });
});
