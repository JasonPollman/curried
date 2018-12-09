import False from '.';

describe('False', () => {
  it('Should be a function', () => {
    expect(typeof False).toBe('function');
  });

  it('Should always return false', () => {
    expect(False()).toBe(false);
    expect(False(1)).toBe(false);
    expect(False(0)).toBe(false);
  });
});
