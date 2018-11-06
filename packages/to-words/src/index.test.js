/**
 * Tests for the `toWords` function.
 * @since 10/23/18
 * @file
 */

import toWords from '.';

describe('t', () => {
  it('Should be a function', () => {
    expect(typeof toWords).toBe('function');
  });

  it('Should convert a string into an array of words', () => {
    expect(toWords('foo bar')).toEqual(['foo', 'bar']);
  });

  it('Should return an empty array if no match', () => {
    expect(toWords('')).toEqual([]);
  });

  it('Should return an empty array if no match (2)', () => {
    expect(toWords()).toEqual([]);
  });

  it('Should take a custom pattern', () => {
    expect(toWords('foo', /./g)).toEqual(['f', 'o', 'o']);
  });

  it('Should omit punctuation', () => {
    expect(toWords('foo.bar')).toEqual(['foo', 'bar']);
    expect(toWords('foo~bar')).toEqual(['foo', 'bar']);
    expect(toWords('foo`bar')).toEqual(['foo', 'bar']);
    expect(toWords('foo@#$%^&*()_+bar')).toEqual(['foo', 'bar']);
  });

  it('Should work in the camel "case"', () => {
    expect(toWords('fooBarBaz')).toEqual(['foo', 'Bar', 'Baz']);
  });

  it('Should work in the snake "case"', () => {
    expect(toWords('foo_bar_baz')).toEqual(['foo', 'bar', 'baz']);
  });

  it('Should work in the kebab "case"', () => {
    expect(toWords('foo-bar-baz')).toEqual(['foo', 'bar', 'baz']);
  });
});
