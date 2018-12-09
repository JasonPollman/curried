import True from '.';

describe('True', () => {
  it('Should be a function', () => {
    expect(typeof True).toBe('function');
  });

  it('Should always return true', () => {
    expect(True()).toBe(true);
    expect(True(1)).toBe(true);
    expect(True(0)).toBe(true);
  });
});
