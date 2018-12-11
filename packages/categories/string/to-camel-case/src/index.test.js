import toCamelCase from '.';

describe('t', () => {
  it('Should be a function', () => {
    expect(typeof toCamelCase).toBe('function');
  });

  it('Should guard against bad input', () => {
    expect(toCamelCase()).toBe('');
    expect(toCamelCase(null)).toBe('');
    expect(toCamelCase(undefined)).toBe('');
    expect(toCamelCase([])).toBe('');
    expect(toCamelCase({})).toBe('objectObject');
  });

  it('Should convert a string to camel case', () => {
    expect(toCamelCase('')).toBe('');
    expect(toCamelCase('foo bar')).toBe('fooBar');
    expect(toCamelCase('foo bar baz')).toBe('fooBarBaz');
    expect(toCamelCase('__foo bar baz__')).toBe('fooBarBaz');
    expect(toCamelCase('foo_bar_baz')).toBe('fooBarBaz');
    expect(toCamelCase('      foo bar baz      ')).toBe('fooBarBaz');
    expect(toCamelCase('!@#$%^&*()_+foo barBaz')).toBe('fooBarBaz');
    expect(toCamelCase('foo bar baz.')).toBe('fooBarBaz');
    expect(toCamelCase('foo-bar-baz')).toBe('fooBarBaz');
    expect(toCamelCase('foo_bar_baz')).toBe('fooBarBaz');
  });
});
