import stubArray from '.';

describe('stubArray', () => {
  it('Should be a function', () => {
    expect(typeof stubArray).toBe('function');
  });

  it('Should always return false', () => {
    expect(stubArray()).toEqual([]);
    expect(stubArray(1)).toEqual([]);
    expect(stubArray(0)).toEqual([]);
  });
});
