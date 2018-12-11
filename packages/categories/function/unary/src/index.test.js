import unary from '.';

describe('unary', () => {
  it('Should be a function', () => {
    expect(typeof unary).toBe('function');
  });

  it('Should limit the arity of a function to 1', () => {
    const echo = (...args) => args;
    const fixed = unary(echo);
    expect(fixed(1, 2, 3, 4)).toEqual([1]);
  });
});
