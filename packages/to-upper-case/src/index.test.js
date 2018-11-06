/**
 * Tests for the `toUpperCase` function.
 * @since 10/23/18
 * @file
 */

import toUpperCase from '.';

describe('toUpperCase', () => {
  it('Should be a function', () => {
    expect(typeof toUpperCase).toBe('function');
  });

  it('Should convert a string to upper case', () => {
    expect(toUpperCase('foo')).toBe('FOO');
    expect(toUpperCase(' foo')).toBe(' FOO');
    expect(toUpperCase('FOO')).toBe('FOO');
  });

  it('Should work with numbers', () => {
    expect(toUpperCase(0)).toBe('0');
    expect(toUpperCase(Infinity)).toBe('INFINITY');
  });

  it('Should work with objects', () => {
    expect(toUpperCase({})).toBe('[OBJECT OBJECT]');
  });
});
