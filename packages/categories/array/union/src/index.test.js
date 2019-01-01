import union from '.';

describe('union', () => {
  it('Should be a function', () => {
    expect(typeof union).toBe('function');
  });

  it('Should return the union between arrays (no input)', () => {
    expect(union()).toEqual([]);
    expect(union(null)).toEqual([]);
    expect(union(undefined)).toEqual([]);
    expect(union(() => {})).toEqual([]);
  });

  it('Should return the union between 2 arrays (1)', () => {
    expect(union([1, 2, 3], [1, 2])).toEqual([1, 2, 3]);
  });

  it('Should return the union between 2 arrays (2)', () => {
    expect(union([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('Should return the union between 3 arrays (1)', () => {
    expect(union([1, 2, 3], [1, 2], [3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it('Should return the union between 3 arrays (2)', () => {
    expect(union([1, 2, 3], [8, 9], [3, 4, 5])).toEqual([1, 2, 3, 8, 9, 4, 5]);
  });

  it('Should return the union between 3 arrays + junk', () => {
    expect(union([1, 2, 3], [8, 9], {}, 'foo', [3, 4, 5])).toEqual([1, 2, 3, 8, 9, 'f', 'o', 4, 5]);
  });

  it('Should return the union between 2 strings', () => {
    expect(union('foo', 'bar')).toEqual('fobar'.split(''));
  });

  it('Should work with NaN', () => {
    expect(union([1, 2, 3, NaN], [4, 5, 6])).toEqual([1, 2, 3, NaN, 4, 5, 6]);
    expect(union([1, 2, 3, NaN], [4, 5, 6, NaN])).toEqual([1, 2, 3, NaN, 4, 5, 6]);
  });

  it('Should handle bad inputs', () => {
    expect(union(null)).toEqual([]);
    expect(union(undefined)).toEqual([]);
    expect(union(false)).toEqual([]);
    expect(union(true)).toEqual([]);
    expect(union({})).toEqual([]);
    expect(union(NaN)).toEqual([]);
    expect(union(Symbol('foo'))).toEqual([]);
    expect(union(undefined)).toEqual([]);
    expect(union(Infinity)).toEqual([]);
    expect(union(0)).toEqual([]);
    expect(union(null)).toEqual([]);
  });
});
