import tap from '.';

describe('tap', () => {
  it('Should be a function', () => {
    expect(typeof tap).toBe('function');
  });

  it('Should return the input value and call the provided `fn`', () => {
    const tappable = (x, y, z) => {
      expect(x).toBe(5);
      expect(y).toBe(6);
      expect(z).toBe(7);
    };

    expect(tap(tappable)(5, 6, 7)).toBe(5);
  });

  it('Should call noop if a non-function is passed', () => {
    expect(tap('foobar')(5, 6, 7)).toBe(5);
  });
});
