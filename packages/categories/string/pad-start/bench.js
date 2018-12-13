module.exports = ({ foldr, lodash }) => {
  const tests = {
    foldr: ([x, y, z]) => foldr.padStart(x, y, z),
    lodash: ([x, y, z]) => lodash.padStart(x, y, z),
  };

  return [
    {
      name: 'Left Pads a String (0)',
      expect: (result, assert) => assert(result === ''),
      setup: () => ['', 0],
      tests,
    },
    {
      name: 'Left Pads a String (1)',
      expect: (result, assert) => assert(result === 'foobar'),
      setup: () => ['foobar', 0],
      tests,
    },
    {
      name: 'Left Pads a String (2)',
      expect: (result, assert) => assert(result === 'foobar'),
      setup: () => ['foobar', 6],
      tests,
    },
    {
      name: 'Left Pads a String (3)',
      expect: (result, assert) => assert(result === 'foobar'),
      setup: () => ['foobar', -6],
      tests,
    },
    {
      name: 'Left Pads a String (4)',
      expect: (result, assert) => assert(result === ' foobar'),
      setup: () => ['foobar', 7],
      tests,
    },
    {
      name: 'Left Pads a String (5)',
      expect: (result, assert) => assert(result === '  foobar'),
      setup: () => ['foobar', 8],
      tests,
    },
    {
      name: 'Left Pads a String (6)',
      expect: (result, assert) => assert(result === `${' '.repeat(100)}foobar`),
      setup: () => ['foobar', 106],
      tests,
    },
    {
      name: 'Left Pads a String (7)',
      expect: (result, assert) => assert(result === `${' '.repeat(10000)}foobar`),
      setup: () => ['foobar', 10006],
      tests,
    },
    {
      name: 'Left Pads a String (8)',
      expect: (result, assert) => assert(result === 'ABABfoobar'),
      setup: () => ['foobar', 10, 'AB'],
      tests,
    },
    {
      name: 'Left Pads a String (9)',
      expect: (result, assert) => assert(result === 'ABCAfoobar'),
      setup: () => ['foobar', 10, 'ABC'],
      tests,
    },
    {
      name: 'Left Pads a String (10)',
      expect: (result, assert) => assert(result === 'ABCABfoobar'),
      setup: () => ['foobar', 11, 'ABC'],
      tests,
    },
    {
      name: 'Left Pads a String (11)',
      expect: (result, assert) => assert(result === 'ABABABAfoobar'),
      setup: () => ['foobar', 13, 'AB'],
      tests,
    },
    {
      name: 'Left Pads a String (12)',
      expect: (result, assert) => assert(result === `${' '.repeat(1000000)}foobar`),
      setup: () => ['foobar', 1000006],
      tests,
    },
    {
      name: 'Left Pads a String (13)',
      expect: (result, assert) => assert(result === `${'<>'.repeat(500000)}foobar`),
      setup: () => ['foobar', 1000006, '<>'],
      tests,
    },
  ];
};
