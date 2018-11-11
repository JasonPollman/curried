import pipe from '.';

describe('pipe', () => {
  it('should error if arguments passed to pipe are not of type function', () => {
    try {
      pipe(f => f, 'hello');
    } catch (e) {
      expect(e.message).toBe('Expected arguments of pipe to be of type function');
    }
  });

  it('should error if no arguments are passed to pipe', () => {
    try {
      pipe();
    } catch (e) {
      expect(e.message).toBe('Expected arguments of pipe to be of type function');
    }
  });

  it('should pipe values through pipe chain', () => {
    const add = (a, b) => a + b;
    const multiply = v => v * v;

    const piped = pipe(add, multiply);

    expect(piped(2, 5)).toBe(49);
  });
});
