import intersectionFx from '.';

describe('intersectionFx', () => {
  it('Should be a function', () => {
    expect(typeof intersectionFx).toBe('function');
  });

  it('Should return the intersectionFx between arrays (1)', () => {
    expect(intersectionFx([1, 2, 3], [1, 2, 3, 4, 5, 6])).toEqual([1, 2, 3]);
    expect(intersectionFx([1, 2, 3])([1, 2, 3, 4, 5, 6])).toEqual([1, 2, 3]);
  });

  it('Should return the intersectionFx between arrays (2)', () => {
    expect(intersectionFx([1, 2, 3], [1, 2, 3, 4, 5, 6])).toEqual([1, 2, 3]);
    expect(intersectionFx([1, 2, 3])([1, 2, 3, 4, 5, 6])).toEqual([1, 2, 3]);
  });

  it('Should return the intersectionFx between arrays (3)', () => {
    expect(intersectionFx([1, 2, 3], [4, 5, 6])).toEqual([]);
    expect(intersectionFx([1, 2, 3])([4, 5, 6])).toEqual([]);
  });

  it('Should return the intersectionFx between arrays (4)', () => {
    expect(intersectionFx(
      [13, 14, 15],
      [13, 14, 15],
    )).toEqual([13, 14, 15]);
  });

  it('Should work for NaN', () => {
    expect(intersectionFx([13, 14, 15, NaN], [13, 14, NaN, 15])).toEqual([13, 14, 15, NaN]);
    expect(intersectionFx([13, 14, 15, NaN])([13, 14, NaN, 15])).toEqual([13, 14, 15, NaN]);
  });

  it('Should not duplicate values (2)', () => {
    expect(intersectionFx(Array(1000).fill(0), Array(1000).fill(0))).toEqual([0]);
    expect(intersectionFx(Array(1000).fill(0))(Array(1000).fill(0))).toEqual([0]);
  });
});
