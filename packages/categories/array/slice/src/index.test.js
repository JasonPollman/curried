import slice from '.';

describe('slice', () => {
  it('Should be a function', () => {
    expect(typeof slice).toBe('function');
  });

  it('Should slice an array (edge cases)', () => {
    expect(slice([5, 6, 7], 2, 1)).toEqual([]);
    expect(slice([5, 6, 7], 100, 2)).toEqual([]);
    expect(slice([5, 6, 7], 100, 101)).toEqual([]);
  });

  it('Should slice an array (start and end given)', () => {
    expect(slice([5, 6, 7], 0, 0)).toEqual([]);
    expect(slice([5, 6, 7], 0, 1)).toEqual([5]);
    expect(slice([5, 6, 7], 0, 2)).toEqual([5, 6]);
    expect(slice([5, 6, 7], 0, 3)).toEqual([5, 6, 7]);
    expect(slice([5, 6, 7], 0, 4)).toEqual([5, 6, 7]);
  });

  it('Should slice an array (start and end given, negative start)', () => {
    expect(slice([5, 6, 7], -1, 1)).toEqual([]);
    expect(slice([5, 6, 7], -1, 2)).toEqual([]);
    expect(slice([5, 6, 7], -1, 3)).toEqual([7]);
    expect(slice([5, 6, 7], -1, 300)).toEqual([7]);
    expect(slice([5, 6, 7], -2, 3)).toEqual([6, 7]);
    expect(slice([5, 6, 7], -100, 3)).toEqual([5, 6, 7]);
  });

  it('Should slice an array (only start given, negative start)', () => {
    expect(slice([5, 6, 7], -0)).toEqual([5, 6, 7]);
    expect(slice([5, 6, 7], -1)).toEqual([7]);
    expect(slice([5, 6, 7], -2)).toEqual([6, 7]);
    expect(slice([5, 6, 7], -3)).toEqual([5, 6, 7]);
    expect(slice([5, 6, 7], -4)).toEqual([5, 6, 7]);
    expect(slice([5, 6, 7], -5)).toEqual([5, 6, 7]);
  });

  it('Should slice an array (only start given, positive start)', () => {
    expect(slice([5, 6, 7], 0)).toEqual([5, 6, 7]);
    expect(slice([5, 6, 7], 1)).toEqual([6, 7]);
    expect(slice([5, 6, 7], 2)).toEqual([7]);
    expect(slice([5, 6, 7], 3)).toEqual([]);
    expect(slice([5, 6, 7], 4)).toEqual([]);
    expect(slice([5, 6, 7], 5)).toEqual([]);
  });

  it('Should slice an array (start and end given, negative end)', () => {
    expect(slice([5, 6, 7], 0, -1)).toEqual([5, 6]);
    expect(slice([5, 6, 7], 0, -2)).toEqual([5]);
    expect(slice([5, 6, 7], 0, -3)).toEqual([]);
    expect(slice([5, 6, 7], 0, -4)).toEqual([]);
  });

  it('Should slice an array (start and end given, negative start and semi-negative end)', () => {
    expect(slice([5, 6, 7], -1, -1)).toEqual([]);
    expect(slice([5, 6, 7], -1, 1)).toEqual([]);
    expect(slice([5, 6, 7], -1, 2)).toEqual([]);
    expect(slice([5, 6, 7], -1, 3)).toEqual([7]);
    expect(slice([5, 6, 7], -2, 3)).toEqual([6, 7]);
    expect(slice([5, 6, 7], -1, 100)).toEqual([7]);
    expect(slice([5, 6, 7], -10, 100)).toEqual([5, 6, 7]);
  });

  it('Should slice an array (start and end given, negative start and negative end)', () => {
    expect(slice([5, 6, 7], -1, -1)).toEqual([]);
    expect(slice([5, 6, 7], -1, -2)).toEqual([]);
    expect(slice([5, 6, 7], -1, -3)).toEqual([]);
    expect(slice([5, 6, 7], -1, -100)).toEqual([]);
    expect(slice([5, 6, 7], -2, -1)).toEqual([6]);
    expect(slice([5, 6, 7], -2, -2)).toEqual([]);
    expect(slice([5, 6, 7], -2, -3)).toEqual([]);
    expect(slice([5, 6, 7], -3, -1)).toEqual([5, 6]);
    expect(slice([5, 6, 7], -4, -1)).toEqual([5, 6]);
    expect(slice([5, 6, 7], -5, -1)).toEqual([5, 6]);
    expect(slice([5, 6, 7], -100, -1)).toEqual([5, 6]);
  });

  it('Should slice an array (only start given, positive start)', () => {
    expect(slice([5, 6, 7], 0)).toEqual([5, 6, 7]);
    expect(slice([5, 6, 7], 1)).toEqual([6, 7]);
    expect(slice([5, 6, 7], 2)).toEqual([7]);
    expect(slice([5, 6, 7], 3)).toEqual([]);
    expect(slice([5, 6, 7], 100)).toEqual([]);
  });

  it('Should shallow copy the array if no start and end are passed', () => {
    const array = [1, 2];
    const results = slice(array);
    expect(results).toEqual([1, 2]);
    expect(results).not.toBe(array);
  });

  it('Should always return an array', () => {
    expect(slice(1)).toEqual([]);
    expect(slice({})).toEqual([]);
    expect(slice(() => {})).toEqual([]);
    expect(slice(Symbol('foo'))).toEqual([]);
    expect(slice(NaN)).toEqual([]);
    expect(slice(Infinity)).toEqual([]);
    expect(slice(0)).toEqual([]);
    expect(slice(undefined)).toEqual([]);
    expect(slice(null)).toEqual([]);
    expect(slice('')).toEqual([]);
    expect(slice(false)).toEqual([]);
    expect(slice(true)).toEqual([]);
  });
});
