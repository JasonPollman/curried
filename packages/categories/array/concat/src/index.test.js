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
});
