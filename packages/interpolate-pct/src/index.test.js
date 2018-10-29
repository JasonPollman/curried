/**
 * Tests for the `interpolatePct` function.
 * @since 10/23/18
 * @file
 */

import interpolatePct from '.';

describe('interpolatePct', () => {
  it('Should be a function', () => {
    expect(typeof interpolatePct).toBe('function');
  });

  it('Should interpolatePct a string', () => {
    const string = 'The <% verb %> brown <% thing %> jumped over the lazy brown <%animal%>.';

    const tokens = {
      verb: 'quick',
      thing: 'fox',
      animal: 'dog',
    };

    expect(interpolatePct(string, tokens)).toBe('The quick brown fox jumped over the lazy brown dog.');
  });
});
