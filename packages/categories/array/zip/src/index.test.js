import zip from '.';

describe('zip', () => {
  it('Should be a function', () => {
    expect(typeof zip).toBe('function');
  });

  it('Should zip arrays', () => {
    expect(zip([1, 2, 3], ['a', 'b', 'c'])).toEqual([[1, 'a'], [2, 'b'], [3, 'c']]);
  });

  it('Should zip arrays (bad values given)', () => {
    expect(zip([1, 2, 3], true, ['a', 'b', 'c'], {})).toEqual([[1, 'a'], [2, 'b'], [3, 'c']]);
  });

  it('Should zip arrays (2)', () => {
    expect(zip([1, 2, 3], ['a', 'b', 'c'], ['x', 'y'])).toEqual([[1, 'a', 'x'], [2, 'b', 'y'], [3, 'c', undefined]]);
  });

  it('Should zip arrays (no elements in first array)', () => {
    expect(zip([], ['a', 'b', 'c'])).toEqual([[undefined, 'a'], [undefined, 'b'], [undefined, 'c']]);
  });

  it('Should zip arrays (no elements in second array)', () => {
    expect(zip([1, 2], [])).toEqual([[1, undefined], [2, undefined]]);
  });

  it('Should zip arrays (no arguments given)', () => {
    expect(zip()).toEqual([]);
    expect(zip(5)).toEqual([]);
    expect(zip(() => {})).toEqual([]);
  });

  it('Should zip arrays (no elements given)', () => {
    expect(zip([], [], [])).toEqual([]);
  });

  it('Should zip arrays (one element given)', () => {
    expect(zip([1], [], [])).toEqual([[1, undefined, undefined]]);
  });

  it('Should zip arrays (one array given)', () => {
    expect(zip([1, 2, 3])).toEqual([[1], [2], [3]]);
  });

  it('Should zip arrays (strings given)', () => {
    expect(zip('foo', 'bar')).toEqual([['f', 'b'], ['o', 'a'], ['o', 'r']]);
  });

  it('Should handle bad input', () => {
    expect(zip(true)).toEqual([]);
    expect(zip(false)).toEqual([]);
    expect(zip(NaN)).toEqual([]);
    expect(zip(Symbol('foo'))).toEqual([]);
    expect(zip(undefined)).toEqual([]);
    expect(zip(Infinity)).toEqual([]);
    expect(zip(0)).toEqual([]);
    expect(zip(null)).toEqual([]);
  });
});
