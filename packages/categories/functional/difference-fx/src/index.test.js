import differenceFx from '.';

describe('differenceFx', () => {
  it('Should be a function', () => {
    expect(typeof differenceFx).toBe('function');
  });

  it('Should return the difference between 2 arrays (1)', () => {
    expect(differenceFx([1, 2, 3])([1, 2])).toEqual([3]);
    expect(differenceFx([1, 2, 3], [1, 2])).toEqual([3]);
  });

  it('Should return the difference between 2 arrays (2)', () => {
    expect(differenceFx([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3]);
  });

  it('Should work with NaN', () => {
    expect(differenceFx([1, 2, 3, NaN])([4, 5, 6])).toEqual([1, 2, 3, NaN]);
    expect(differenceFx([1, 2, 3, NaN])([4, 5, 6, NaN])).toEqual([1, 2, 3]);
  });
});
