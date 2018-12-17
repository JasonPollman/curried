module.exports = ({ foldr, lodash }) => {
  const tests = {
    foldr: ([x, chars]) => foldr.trim(x, chars),
    lodash: ([x, chars]) => lodash.trim(x, chars),
  };

  return [
    {
      name: 'Trims a String (Single Space)',
      expect: (result, assert) => assert(result === ''),
      setup: () => [' '],
      tests,
    },
    {
      name: 'Trims a String (Threshold - 1)',
      expect: (result, assert) => assert(result === ''),
      setup: () => [' '.repeat(9)],
      tests,
    },
    {
      name: 'Trims a String (Threshold + 1)',
      expect: (result, assert) => assert(result === ''),
      setup: () => [' '.repeat(11)],
      tests,
    },
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
      expect: (result, assert) => assert(result === ''),
      setup: () => ['x'.repeat(100000), 'x'],
      tests,
    },
    {
      name: 'Trims a String (6)',
      expect: (result, assert) => assert(result === 'x'.repeat(100000)),
      setup: () => ['x'.repeat(100000), 'z'],
      tests,
    },
    {
      name: 'Trims a String (7)',
      expect: (result, assert) => assert(result === 'x'.repeat(1000)),
      setup: () => [`${' '.repeat(1000)}${'x'.repeat(1000)}${' '.repeat(1000)}`],
      tests,
    },
    {
      name: 'Trims a String (8)',
      expect: (result, assert) => assert(result === 'end'),
      setup: () => [`${'xo'.repeat(100000)}end`, 'xo'],
      tests,
    },
    {
      name: 'Trims a String (9)',
      expect: (result, assert) => assert(result === 'x'.repeat(100000)),
      setup: () => ['x'.repeat(100000)],
      tests,
    },
    {
      name: 'Trims a String (10)',
      expect: (result, assert) => assert(result === ''),
      setup: () => ['x'.repeat(100000), 'x'],
      tests,
    },
    {
      name: 'Trims a String (11)',
      expect: (result, assert) => assert(result === 'foo bar'),
      setup: () => ['//foo bar//', '/'],
      tests,
    },
    {
      name: 'Trims a String (12)',
      expect: (result, assert) => assert(result === 'foo bar'),
      setup: () => ['//foo bar//', '/'],
      tests,
    },
    {
      name: 'Trims a String (13)',
      expect: (result, assert) => assert(result === 'foo bar'),
      setup: () => ['<><><foo bar><><>', '<><>'],
      tests,
    },
    {
      name: 'Trims a String (14)',
      expect: (result, assert) => assert(result === 'bar'),
      setup: () => ['foobar', /^foo/],
      tests,
    },
    {
      name: 'Trims a String (15)',
      expect: (result, assert) => assert(result === 'foo bar'),
      setup: () => ['9012308foo bar98712', '1234567890'],
      tests,
    },
    {
      name: 'Trims a String (16)',
      expect: (result, assert) => assert(result === ''),
      setup: () => ['9012308foo bar98712', 'abcdefghijklmnopqrstuvwxyz0123456789 '],
      tests,
    },
    {
      name: 'Trims a String (17)',
      expect: (result, assert) => assert(result === 'foo bar'),
      setup: () => ['11111111111111foo bar1111111111111', '1111111111111111111111111'],
      tests,
    },
  ];
};
