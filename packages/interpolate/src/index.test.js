/**
 * Tests for the `interpolate` function.
 * @since 10/23/18
 * @file
 */

import interpolate, { INTERPOLATOR_RE_CACHE } from '.';

describe('interpolate', () => {
  it('Should be a function', () => {
    expect(typeof interpolate).toBe('function');
  });

  it('Should interpolate a string', () => {
    const string = 'The {verb} brown {thing} jumped over the lazy brown {animal}.';

    const tokens = {
      verb: 'quick',
      thing: 'fox',
      animal: 'dog',
    };

    expect(INTERPOLATOR_RE_CACHE['\\{\\}'] instanceof RegExp).toBe(false);
    expect(interpolate(null, string, tokens)).toBe('The quick brown fox jumped over the lazy brown dog.');
    expect(interpolate(0, string, tokens)).toBe('The quick brown fox jumped over the lazy brown dog.');
    expect(interpolate(false, string, tokens)).toBe('The quick brown fox jumped over the lazy brown dog.');
    expect(interpolate(undefined, string, tokens)).toBe('The quick brown fox jumped over the lazy brown dog.');
    expect(interpolate([], string, tokens)).toBe('The quick brown fox jumped over the lazy brown dog.');
    expect(interpolate('foo', string, tokens)).toBe('The quick brown fox jumped over the lazy brown dog.');
    expect(interpolate({}, string, tokens)).toBe('The quick brown fox jumped over the lazy brown dog.');
    expect(INTERPOLATOR_RE_CACHE['\\{\\}'] instanceof RegExp).toBe(true);
  });

  it('Should work on non-strings (returning empty string)', () => {
    const tokens = {
      verb: 'quick',
      thing: 'fox',
      animal: 'dog',
    };

    expect(interpolate({}, '', tokens)).toBe('');
    expect(interpolate({}, null, tokens)).toBe('');
    expect(interpolate({}, [], tokens)).toBe('');
    expect(interpolate({}, () => {}, tokens)).toMatch(/function ?\(\)/);
  });

  it('Should interpolate a string (with extra spaces, custom delimiter)', () => {
    const string = 'The [ verb] brown [   thing   ] jumped over the lazy brown [\nanimal\n].';

    const tokens = {
      verb: 'quick',
      thing: 'fox',
      animal: 'dog',
    };

    expect(INTERPOLATOR_RE_CACHE['\\[\\]'] instanceof RegExp).toBe(false);
    const replaceBrackets = interpolate({ delims: ['[', ']'] });
    expect(replaceBrackets(string, tokens)).toBe('The quick brown fox jumped over the lazy brown dog.');
    expect(INTERPOLATOR_RE_CACHE['\\[\\]'] instanceof RegExp).toBe(true);
    expect(replaceBrackets(string, tokens)).toBe('The quick brown fox jumped over the lazy brown dog.');
    expect(INTERPOLATOR_RE_CACHE['\\[\\]'] instanceof RegExp).toBe(true);
  });

  it('Should ignore escaped strings by default', () => {
    const string = 'The {verb} brown \\{thing} jumped over the lazy brown \\{animal}.';

    const tokens = {
      verb: 'quick',
      thing: 'fox',
      animal: 'dog',
    };

    expect(interpolate({}, string, tokens)).toBe('The quick brown {thing} jumped over the lazy brown {animal}.');
  });

  it('Should replace missing tokens with an empty string by default', () => {
    const string = 'The {verb} brown {thing} jumped over the lazy brown {animal}.';

    const tokens = {
      verb: 'quick',
    };

    expect(interpolate({}, string, tokens)).toBe('The quick brown  jumped over the lazy brown .');
  });

  it('Should *not* replace missing tokens with an empty string is `options.strict` is `true`', () => {
    const string = 'The {verb} brown {thing} jumped over the lazy brown {animal}.';

    const tokens = {
      verb: 'quick',
    };

    expect(interpolate({ strict: true }, string, tokens)).toBe('The quick brown {thing} jumped over the lazy brown {animal}.');
  });

  it('Should invoke the `onReplacement` method for each token replaced', () => {
    const string = 'The {verb} brown {thing} jumped over the lazy brown { animal }.';

    const tokens = {
      verb: 'quick',
      thing: 'fox',
      animal: 'dog',
    };

    let times = 0;
    const expectations = [
      ['quick', 'verb', '{verb}'],
      ['fox', 'thing', '{thing}'],
      ['dog', 'animal', '{ animal }'],
    ];

    function onReplacement() {
      expect([].slice.call(arguments)).toEqual(expectations.shift());
      times++;
      return 'foo';
    }

    expect(interpolate({ onReplacement }, string, tokens)).toBe('The foo brown foo jumped over the lazy brown foo.');
    expect(times).toBe(3);
  });
});
