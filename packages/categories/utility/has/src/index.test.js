import has from '.';

describe('has', () => {
  it('Should be a function', () => {
    expect(typeof has).toBe('function');
  });

  it('Should determine if an object has the specified property', () => {
    expect(has({ foo: 'bar' }, 'foo')).toBe(true);
  });

  it('Should determine if an object doesn\'t has the specified property', () => {
    expect(has({ foo: 'bar' }, 'bar')).toBe(false);
  });

  it('Should work with numeric properties', () => {
    expect(has([1, 2, 3], 0)).toBe(true);
    expect(has([1, 2, 3], '0')).toBe(true);
    expect(has([1, 2, 3], 4)).toBe(false);
    expect(has([1, 2, 3], '4')).toBe(false);
  });

  it('Should return false for nil values', () => {
    expect(has(null, 5)).toBe(false);
  });

  it('Should work for functions', () => {
    const foo = Object.assign(() => {}, { bar: 5 });
    expect(has(foo, 'bar')).toBe(true);
  });
});
