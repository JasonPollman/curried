import concat from '.';

describe('concat', () => {
  it('Should be a function', () => {
    expect(typeof concat).toBe('function');
  });

  it('Should concat two arrays', () => {
    expect(concat([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('Should concat two falsy values', () => {
    expect(concat(null, null)).toEqual([null, null]);
  });

  it('Should default to empty array given no arguments', () => {
    expect(concat()).toEqual([]);
  });

  it('Should handle bad inputs', () => {
    expect(concat(null)).toEqual([null]);
    expect(concat(undefined)).toEqual([undefined]);
    expect(concat(false)).toEqual([false]);
    expect(concat(true)).toEqual([true]);
    expect(concat({})).toEqual([{}]);
    expect(concat(NaN)).toEqual([NaN]);
    expect(concat(undefined)).toEqual([undefined]);
    expect(concat(Infinity)).toEqual([Infinity]);
    expect(concat(0)).toEqual([0]);
    expect(concat(null)).toEqual([null]);
  });
});
