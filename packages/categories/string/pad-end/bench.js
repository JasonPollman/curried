module.exports = ({ foldr, lodash }) => {
  const tests = {
    foldr: ([x, y, z]) => foldr.padEnd(x, y, z),
    lodash: ([x, y, z]) => lodash.padEnd(x, y, z),
  };

  return [
    {
      name: 'Pads the End of a String (0)',
      expect: (result, assert) => assert(result === ''),
      setup: () => ['', 0],
      tests,
    },
    {
      name: 'Pads the End of a String (1)',
      expect: (result, assert) => assert(result === 'foobar'),
      setup: () => ['foobar', 0],
      tests,
    },
    {
      name: 'Pads the End of a String (2)',
      expect: (result, assert) => assert(result === 'foobar'),
      setup: () => ['foobar', 6],
      tests,
    },
    {
      name: 'Pads the End of a String (3)',
      expect: (result, assert) => assert(result === 'foobar'),
      setup: () => ['foobar', -6],
      tests,
    },
    {
      name: 'Pads the End of a String (4)',
      expect: (result, assert) => assert(result === 'foobar '),
      setup: () => ['foobar', 7],
      tests,
    },
    {
      name: 'Pads the End of a String (5)',
      expect: (result, assert) => assert(result === 'foobar  '),
      setup: () => ['foobar', 8],
      tests,
    },
    {
      name: 'Pads the End of a String (6)',
      expect: (result, assert) => assert(result === `foobar${' '.repeat(100)}`),
      setup: () => ['foobar', 106],
      tests,
    },
    {
      name: 'Pads the End of a String (7)',
      expect: (result, assert) => assert(result === `foobar${' '.repeat(10000)}`),
      setup: () => ['foobar', 10006],
      tests,
    },
    {
      name: 'Pads the End of a String (8)',
      expect: (result, assert) => assert(result === 'foobarABAB'),
      setup: () => ['foobar', 10, 'AB'],
      tests,
    },
    {
      name: 'Pads the End of a String (9)',
      expect: (result, assert) => assert(result === 'foobarABCA'),
      setup: () => ['foobar', 10, 'ABC'],
      tests,
    },
    {
      name: 'Pads the End of a String (10)',
      expect: (result, assert) => assert(result === 'foobarABCAB'),
      setup: () => ['foobar', 11, 'ABC'],
      tests,
    },
    {
      name: 'Pads the End of a String (11)',
      expect: (result, assert) => assert(result === 'foobarABABABA'),
      setup: () => ['foobar', 13, 'AB'],
      tests,
    },
    {
      name: 'Pads the End of a String (12)',
      expect: (result, assert) => assert(result === `foobar${' '.repeat(1000000)}`),
      setup: () => ['foobar', 1000006],
      tests,
    },
    {
      name: 'Pads the End of a String (13)',
      expect: (result, assert) => assert(result === `foobar${'<>'.repeat(500000)}`),
      setup: () => ['foobar', 1000006, '<>'],
      tests,
    },
  ];
};
