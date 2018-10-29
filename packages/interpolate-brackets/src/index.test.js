/**
 * Tests for the `interpolateBrackets` function.
 * @since 10/23/18
 * @file
 */

import interpolateBrackets from '.';

describe('interpolateBrackets', () => {
  it('Should be a function', () => {
    expect(typeof interpolateBrackets).toBe('function');
  });

  it('Should interpolateBrackets a string', () => {
    const string = 'The [verb] brown [thing] jumped over the lazy brown [animal].';

    const tokens = {
      verb: 'quick',
      thing: 'fox',
      animal: 'dog',
    };

    expect(interpolateBrackets(string, tokens)).toBe('The quick brown fox jumped over the lazy brown dog.');
  });
});
