import initial from '.';

describe('initial', () => {
  it('Should return all except for the last value', () => {
    expect(initial([5, 6, 7])).toEqual([5, 6]);
    expect(initial(['a', 'b', 'c'])).toEqual(['a', 'b']);
    expect(initial('hello')).toEqual(['h', 'e', 'l', 'l']);
  });

  it('Should return all except for the last value (length < 2)', () => {
    expect(initial([])).toEqual([]);
    expect(initial([5])).toEqual([]);
    expect(initial(['a', 'b', 'c'])).toEqual(['a', 'b']);
    expect(initial('hello')).toEqual(['h', 'e', 'l', 'l']);
  });

  it('Should return an empty array for edge cases', () => {
    expect(initial(null)).toEqual([]);
    expect(initial()).toEqual([]);
    expect(initial({})).toEqual([]);
  });
});
