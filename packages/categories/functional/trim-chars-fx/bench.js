module.exports = ({ foldr, fp }) => {
  const tests = {
    foldr: ([x, chars]) => foldr.trimCharsFx(chars)(x),
    lodash: ([x, chars]) => fp.trimChars(chars)(x),
  };

  return [
    {
      name: 'Trims a String (1)',
      expect: (result, assert) => assert(result === 'foo bar'),
      setup: () => ['   foo bar   '],
      tests,
    },
    {
      name: 'Trims a String (2)',
      expect: (result, assert) => assert(result === 'foo bar'),
      setup: () => ['   foo bar', ' '],
      tests,
    },
    {
      name: 'Trims a String (3)',
      expect: (result, assert) => assert(result === 'foo bar'),
      setup: () => ['foo bar   ', ' '],
      tests,
    },
    {
      name: 'Trims a String (4)',
      expect: (result, assert) => assert(result === 'foo'),
      setup: () => ['????????foo???????', '?'],
      tests,
    },
    {
      name: 'Trims a String (5)',
      expect: (result, assert) => assert(result === ''),
      setup: () => ['x'.repeat(100000), 'x'],
      tests,
    },
  ];
};
