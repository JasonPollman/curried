import trinary from '.';

describe('trinary', () => {
  it('Should be a function', () => {
    expect(typeof trinary).toBe('function');
  });

  it('Should limit the arity of a function to 3', () => {
    const echo = (...args) => args;
    const fixed = trinary(echo);
    expect(fixed(1, 2, 3, 4)).toEqual([1, 2, 3]);
  });
});
