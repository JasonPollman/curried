import intersection from '.';

describe('intersection', () => {
  it('Should be a function', () => {
    expect(typeof intersection).toBe('function');
  });

  it('Should return the intersection between arrays (no input)', () => {
    expect(intersection()).toEqual([]);
    expect(intersection(null)).toEqual([]);
    expect(intersection(undefined)).toEqual([]);
    expect(intersection(() => {})).toEqual([]);
  });

  it('Should return the intersection between arrays (1)', () => {
    expect(intersection([1, 2, 3], [1, 2, 3, 4, 5, 6], [1, 2, 3], [1, 2, 3, 4])).toEqual([1, 2, 3]);
  });

  it('Should return the intersection between arrays (2)', () => {
    expect(intersection([1, 2, 3], [1, 2, 3, 4, 5, 6])).toEqual([1, 2, 3]);
  });

  it('Should return the intersection between arrays (3)', () => {
    expect(intersection([1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12], [13, 14, 15])).toEqual([]);
  });

  it('Should return the intersection between arrays (4)', () => {
    expect(intersection(
      [13, 14, 15],
      [13, 14, 15],
      [13, 14, 15],
      [13, 14, 15],
      [13, 14, 15],
    )).toEqual([13, 14, 15]);
  });

  it('Should return the intersection between arrays (5)', () => {
    expect(intersection([13, 14, 15], [13, 14, 15], [13, 14, 15])).toEqual([13, 14, 15]);
  });

  it('Should work for NaN', () => {
    expect(intersection(
      [13, 14, 15, NaN],
      [13, 14, NaN, 15],
      [13, NaN, 14, 15],
      [NaN, 13, 14, 15],
      [13, 14, 15, NaN],
    )).toEqual([13, 14, 15, NaN]);
  });

  it('Should not duplicate values', () => {
    expect(intersection(
      [13, 14, 15, NaN, 15],
      [13, 14, NaN, 15, 15],
      [15, 13, NaN, 14, 15],
      [NaN, 15, 13, 14, 15],
      [13, 14, 15, NaN],
    )).toEqual([13, 14, 15, NaN]);
  });

  it('Should not duplicate values (2)', () => {
    expect(intersection(
      Array(1000).fill(0),
      Array(1000).fill(0),
      Array(1000).fill(0),
      Array(1000).fill(0),
      Array(1000).fill(0),
    )).toEqual([0]);
  });
});
