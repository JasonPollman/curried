import difference from '.';

describe('difference', () => {
  it('Should be a function', () => {
    expect(typeof difference).toBe('function');
  });

  it('Should return the difference between arrays (no input)', () => {
    expect(difference()).toEqual([]);
    expect(difference(null)).toEqual([]);
    expect(difference(undefined)).toEqual([]);
    expect(difference(() => {})).toEqual([]);
  });

  it('Should return the difference between 2 arrays (1)', () => {
    expect(difference([1, 2, 3], [1, 2])).toEqual([3]);
  });

  it('Should return the difference between 2 arrays (2)', () => {
    expect(difference([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3]);
  });

  it('Should return the difference between 3 arrays (1)', () => {
    expect(difference([1, 2, 3], [1, 2], [3, 4, 5])).toEqual([]);
  });

  it('Should return the difference between 3 arrays (2)', () => {
    expect(difference([1, 2, 3], [8, 9], [3, 4, 5])).toEqual([1, 2]);
  });

  it('Should return the difference between 3 arrays + junk', () => {
    expect(difference([1, 2, 3], [8, 9], {}, 'foobar', [3, 4, 5])).toEqual([1, 2]);
  });

  it('Should work with NaN', () => {
    expect(difference([1, 2, 3, NaN], [4, 5, 6])).toEqual([1, 2, 3, NaN]);
    expect(difference([1, 2, 3, NaN], [4, 5, 6, NaN])).toEqual([1, 2, 3]);
  });
});
