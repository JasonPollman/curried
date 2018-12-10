import indexOf from '.';

describe('indexOf', () => {
  it('Should be a function', () => {
    expect(typeof indexOf).toBe('function');
  });

  it('Should get the index of value', () => {
    expect(indexOf([5, 6, 7], 5)).toBe(0);
    expect(indexOf([5, 6, 7], '5')).toBe(-1);
    expect(indexOf([5, 6, 7], 6)).toBe(1);
    expect(indexOf([5, 6, 7], '6')).toBe(-1);
    expect(indexOf([5, 6, 7], 7)).toBe(2);
    expect(indexOf([5, 6, 7], '7')).toBe(-1);
  });

  it('Should get the index of value (with `fromIndex`)', () => {
    expect(indexOf([5, 6, 7], 5, 1)).toBe(-1);
    expect(indexOf([5, 6, 7], 5, 0)).toBe(0);
    expect(indexOf([5, 6, 7, 5], 5, 2)).toBe(3);
    expect(indexOf([5, 6, 7, 5, '5', 5], '5', 1)).toBe(4);
  });

  it('Should return -1 (edge cases)', () => {
    expect(indexOf(() => {}, 5)).toBe(-1);
    expect(indexOf({}, 5)).toBe(-1);
  });

  it('Should work for NaN', () => {
    expect(indexOf([1, 2, NaN, 3], NaN)).toBe(2);
    expect(indexOf([1, 2, 3], NaN)).toBe(-1);
  });
});
