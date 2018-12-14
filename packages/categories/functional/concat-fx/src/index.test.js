import concatFx from '.';

describe('concatFx', () => {
  it('Should be a function', () => {
    expect(typeof concatFx).toBe('function');
  });

  it('Should concatFx two arrays', () => {
    expect(concatFx([1, 2, 3])([4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('Should concatFx two falsy values', () => {
    expect(concatFx(null)(null)).toEqual([null, null]);
  });
});
