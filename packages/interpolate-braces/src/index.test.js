/**
 * Tests for the `interpolateBraces` function.
 * @since 10/23/18
 * @file
 */

import interpolateBraces from '.';

describe('interpolateBraces', () => {
  it('Should be a function', () => {
    expect(typeof interpolateBraces).toBe('function');
  });

  it('Should interpolateBraces a string', () => {
    const string = 'The {verb} brown {thing} jumped over the lazy brown {animal}.';

    const tokens = {
      verb: 'quick',
      thing: 'fox',
      animal: 'dog',
    };

    expect(interpolateBraces(string, tokens)).toBe('The quick brown fox jumped over the lazy brown dog.');
  });
});
