import composeFx from '.';

describe('compose.f', () => {
  it('Should be a function', () => {
    expect(typeof composeFx).toBe('function');
  });

  it('Should compose functions', () => {
    const sum = (a, b) => a + b;
    const square = x => x * x;
    const sumSquared = composeFx(square)(sum);

    expect(typeof sumSquared).toBe('function');
    expect(sumSquared(1, 2)).toBe(9);
    expect(sumSquared(2, 3)).toBe(25);
  });
});
