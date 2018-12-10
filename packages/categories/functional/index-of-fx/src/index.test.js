import indexOfFx from '.';

describe('indexOfFx', () => {
  it('Should be a function', () => {
    expect(typeof indexOfFx).toBe('function');
  });

  it('Should get the index of value', () => {
    expect(indexOfFx(5, [5, 6, 7])).toBe(0);
    expect(indexOfFx('5', [5, 6, 7])).toBe(-1);
    expect(indexOfFx(6)([5, 6, 7])).toBe(1);
    expect(indexOfFx('6')([5, 6, 7])).toBe(-1);
    expect(indexOfFx(7)([5, 6, 7])).toBe(2);
    expect(indexOfFx('7', [5, 6, 7])).toBe(-1);
  });

  it('Should return -1 (edge cases)', () => {
    expect(indexOfFx(5, () => {})).toBe(-1);
    expect(indexOfFx(5, {})).toBe(-1);
  });

  it('Should work for NaN', () => {
    expect(indexOfFx(NaN)([1, 2, NaN, 3])).toBe(2);
    expect(indexOfFx(NaN, [1, 2, 3])).toBe(-1);
  });
});
