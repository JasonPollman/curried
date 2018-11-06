/**
 * Tests for the `toKebabCase` function.
 * @since 10/23/18
 * @file
 */

import toKebabCase from '.';

describe('t', () => {
  it('Should be a function', () => {
    expect(typeof toKebabCase).toBe('function');
  });

  it('Should guard against bad input', () => {
    expect(toKebabCase()).toBe('');
    expect(toKebabCase(null)).toBe('');
    expect(toKebabCase(undefined)).toBe('');
    expect(toKebabCase([])).toBe('');
    expect(toKebabCase({})).toBe('object-object');
  });

  it('Should convert a string to kebab case', () => {
    expect(toKebabCase('')).toBe('');
    expect(toKebabCase('foo bar')).toBe('foo-bar');
    expect(toKebabCase('foo bar baz')).toBe('foo-bar-baz');
    expect(toKebabCase('__foo bar baz__')).toBe('foo-bar-baz');
    expect(toKebabCase('foo_bar_baz')).toBe('foo-bar-baz');
    expect(toKebabCase('      foo bar baz      ')).toBe('foo-bar-baz');
    expect(toKebabCase('!@#$%^&*()_+foo barBaz')).toBe('foo-bar-baz');
    expect(toKebabCase('foo bar baz.')).toBe('foo-bar-baz');
    expect(toKebabCase('foo-bar-baz')).toBe('foo-bar-baz');
    expect(toKebabCase('foo_bar_baz')).toBe('foo-bar-baz');
    expect(toKebabCase('fooBarBaz')).toBe('foo-bar-baz');
  });
});
