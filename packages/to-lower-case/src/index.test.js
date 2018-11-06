/**
 * Tests for the `toLowerCase` function.
 * @since 10/23/18
 * @file
 */

import toLowerCase from '.';

describe('toLowerCase', () => {
  it('Should be a function', () => {
    expect(typeof toLowerCase).toBe('function');
  });

  it('Should convert a string to lower case', () => {
    expect(toLowerCase('FoO BaR')).toBe('foo bar');
    expect(toLowerCase('FOO_BAR')).toBe('foo_bar');
    expect(toLowerCase('')).toBe('');
  });

  it('Should work with numbers', () => {
    expect(toLowerCase(0)).toBe('0');
    expect(toLowerCase(Infinity)).toBe('infinity');
  });

  it('Should work with objects', () => {
    expect(toLowerCase({})).toBe('[object object]');
  });
});
