module.exports = ({ foldr, fp }) => {
  const tests = {
    foldr: ([x]) => foldr.trimFx(x),
    lodash: ([x]) => fp.trim(x),
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
      setup: () => ['   foo bar'],
      tests,
    },
    {
      name: 'Trims a String (3)',
      expect: (result, assert) => assert(result === 'foo bar'),
      setup: () => ['foo bar   '],
      tests,
    },
    {
      name: 'Trims a String (4)',
      expect: (result, assert) => assert(result === ''),
      setup: () => [' '.repeat(100000)],
      tests,
    },
    {
      name: 'Trims a String (5)',
      expect: (result, assert) => assert(result === 'x'.repeat(100000)),
      setup: () => ['x'.repeat(100000)],
      tests,
    },
  ];
};
