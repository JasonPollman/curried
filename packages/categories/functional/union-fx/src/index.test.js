import unionFx from '.';

describe('unionFx', () => {
  it('Should be a function', () => {
    expect(typeof unionFx).toBe('function');
  });

  it('Should return the union between 2 arrays (1)', () => {
    expect(unionFx([1, 2, 3])([1, 2])).toEqual([1, 2, 3]);
    expect(unionFx([1, 2, 3], [1, 2])).toEqual([1, 2, 3]);
  });

  it('Should return the difference between 2 arrays (2)', () => {
    expect(unionFx([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('Should work with NaN', () => {
    expect(unionFx([1, 2, 3, NaN])([4, 5, 6])).toEqual([1, 2, 3, NaN, 4, 5, 6]);
    expect(unionFx([1, 2, 3, NaN])([4, 5, 6, NaN])).toEqual([1, 2, 3, NaN, 4, 5, 6]);
  });
});
