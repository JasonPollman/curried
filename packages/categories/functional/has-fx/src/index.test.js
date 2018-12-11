import hasFx from '.';

describe('hasFx', () => {
  it('Should be a function', () => {
    expect(typeof hasFx).toBe('function');
  });

  it('Should determine if an object has the specified property', () => {
    expect(hasFx('foo')({ foo: 'bar' })).toBe(true);
  });

  it('Should determine if an object doesn\'t has the specified property', () => {
    expect(hasFx('bar')({ foo: 'bar' })).toBe(false);
  });

  it('Should work with numeric properties', () => {
    expect(hasFx(0, [1, 2, 3])).toBe(true);
    expect(hasFx('0', [1, 2, 3])).toBe(true);
    expect(hasFx(4, [1, 2, 3])).toBe(false);
    expect(hasFx('4', [1, 2, 3])).toBe(false);
  });

  it('Should return false for nil values', () => {
    expect(hasFx(5)(null)).toBe(false);
  });

  it('Should work for functions', () => {
    const foo = Object.assign(() => {}, { bar: 5 });
    expect(hasFx('bar')(foo)).toBe(true);
  });
});
