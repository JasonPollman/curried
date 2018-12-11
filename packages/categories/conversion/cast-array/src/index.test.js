import castArray from '.';

describe('castArray', () => {
  it('Should be a function', () => {
    expect(typeof castArray).toBe('function');
  });

  it('Should wrap non-arrays with an array', () => {
    const obj = {};
    expect(castArray(obj)).toEqual([obj]);
  });

  it('Should return arrays', () => {
    const array = [1, 2, 3];
    expect(castArray(array)).toBe(array);
  });
});
