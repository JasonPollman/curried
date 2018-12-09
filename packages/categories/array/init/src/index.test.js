import init from '.';

describe('init', () => {
  it('Should return all except for the last value', () => {
    expect(init([5, 6, 7])).toEqual([5, 6]);
    expect(init(['a', 'b', 'c'])).toEqual(['a', 'b']);
    expect(init('hello')).toEqual(['h', 'e', 'l', 'l']);
  });

  it('Should return all except for the last value (length < 2)', () => {
    expect(init([])).toEqual([]);
    expect(init([5])).toEqual([]);
    expect(init(['a', 'b', 'c'])).toEqual(['a', 'b']);
    expect(init('hello')).toEqual(['h', 'e', 'l', 'l']);
  });

  it('Should return an empty array for edge cases', () => {
    expect(init(null)).toEqual([]);
    expect(init()).toEqual([]);
    expect(init({})).toEqual([]);
  });
});
