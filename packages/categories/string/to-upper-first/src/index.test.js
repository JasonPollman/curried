import toUpperFirst from '.';

describe('toUpperFirst', () => {
  it('Should be a function', () => {
    expect(typeof toUpperFirst).toBe('function');
  });

  it('Should convert the first character of a string to uppercase', () => {
    expect(toUpperFirst('foo')).toBe('Foo');
    expect(toUpperFirst(' foo')).toBe(' foo');
    expect(toUpperFirst('FOO')).toBe('FOO');
  });

  it('Should work with numbers', () => {
    expect(toUpperFirst(0)).toBe('0');
    expect(toUpperFirst(Infinity)).toBe('Infinity');
  });

  it('Should work with objects', () => {
    expect(toUpperFirst({})).toBe('[object Object]');
  });
});
