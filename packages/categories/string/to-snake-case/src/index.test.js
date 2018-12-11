import toSnakeCase from '.';

describe('t', () => {
  it('Should be a function', () => {
    expect(typeof toSnakeCase).toBe('function');
  });

  it('Should guard against bad input', () => {
    expect(toSnakeCase()).toBe('');
    expect(toSnakeCase(null)).toBe('');
    expect(toSnakeCase(undefined)).toBe('');
    expect(toSnakeCase([])).toBe('');
    expect(toSnakeCase({})).toBe('object_object');
  });

  it('Should convert a string to kebab case', () => {
    expect(toSnakeCase('')).toBe('');
    expect(toSnakeCase('foo bar')).toBe('foo_bar');
    expect(toSnakeCase('foo bar baz')).toBe('foo_bar_baz');
    expect(toSnakeCase('__foo bar baz__')).toBe('foo_bar_baz');
    expect(toSnakeCase('foo_bar_baz')).toBe('foo_bar_baz');
    expect(toSnakeCase('      foo bar baz      ')).toBe('foo_bar_baz');
    expect(toSnakeCase('!@#$%^&*()_+foo barBaz')).toBe('foo_bar_baz');
    expect(toSnakeCase('foo bar baz.')).toBe('foo_bar_baz');
    expect(toSnakeCase('foo-bar-baz')).toBe('foo_bar_baz');
    expect(toSnakeCase('foo_bar_baz')).toBe('foo_bar_baz');
    expect(toSnakeCase('fooBarBaz')).toBe('foo_bar_baz');
  });
});
