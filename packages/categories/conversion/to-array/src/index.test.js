import toArray from '.';

describe('toArray', () => {
  it('Should be a function', () => {
    expect(typeof toArray).toBe('function');
  });

  it('Should convert a value to an array (edge cases)', () => {
    expect(toArray(0)).toEqual([]);
    expect(toArray(() => {})).toEqual([]);
    expect(toArray(NaN)).toEqual([]);
    expect(toArray(5.123124)).toEqual([]);
    expect(toArray({})).toEqual([]);
    expect(toArray(null)).toEqual([]);
    expect(toArray(undefined)).toEqual([]);
  });

  it('Should convert a value to an array', () => {
    expect(toArray({ foo: 1, bar: 2, baz: 3 })).toEqual([1, 2, 3]);
    expect(toArray(new Set([1, 2, 3]))).toEqual([1, 2, 3]);
    expect(toArray(new Map([[0, 1], [1, 2], [2, 3]]))).toEqual([1, 2, 3]);
    expect(toArray('foobar')).toEqual(['f', 'o', 'o', 'b', 'a', 'r']);
  });

  it('Should shallow copy arrays', () => {
    const array = [1, 2, 3, 4, 5];
    expect(toArray(array)).toEqual([1, 2, 3, 4, 5]);
    expect(toArray(array)).not.toBe(array);
  });
});
