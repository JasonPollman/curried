import binary from '.';

describe('binary', () => {
  it('Should be a function', () => {
    expect(typeof binary).toBe('function');
  });

  it('Should limit the arity of a function to 2', () => {
    const echo = (...args) => args;
    const fixed = binary(echo);
    expect(fixed(1, 2, 3, 4)).toEqual([1, 2]);
  });
});
