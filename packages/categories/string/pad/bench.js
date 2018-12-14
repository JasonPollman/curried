module.exports = ({ foldr, lodash }) => {
  const tests = {
    foldr: ([x, y, z]) => foldr.pad(x, y, z),
    lodash: ([x, y, z]) => lodash.pad(x, y, z),
  };

  return [
    {
      name: 'Pads a String (0)',
      expect: (result, assert) => assert(result === ''),
      setup: () => ['', 0],
      tests,
    },
    {
      name: 'Pads a String (1)',
      expect: (result, assert) => assert(result === 'foobar'),
      setup: () => ['foobar', 0],
      tests,
    },
    {
      name: 'Pads a String (2)',
      expect: (result, assert) => assert(result === 'foobar'),
      setup: () => ['foobar', 6],
      tests,
    },
    {
      name: 'Pads a String (3)',
      expect: (result, assert) => assert(result === 'foobar'),
      setup: () => ['foobar', -6],
      tests,
    },
    {
      name: 'Pads a String (4)',
      expect: (result, assert) => assert(result === 'foobar '),
      setup: () => ['foobar', 7],
      tests,
    },
    {
      name: 'Pads a String (5)',
      expect: (result, assert) => assert(result === ' foobar '),
      setup: () => ['foobar', 8],
      tests,
    },
    {
      name: 'Pads a String (6)',
      expect: (result, assert) => assert(result === `${' '.repeat(50)}foobar${' '.repeat(50)}`),
      setup: () => ['foobar', 106],
      tests,
    },
    {
      name: 'Pads a String (7)',
      expect: (result, assert) => assert(result === `${' '.repeat(5000)}foobar${' '.repeat(5000)}`),
      setup: () => ['foobar', 10006],
      tests,
    },
    {
      name: 'Pads a String (8)',
      expect: (result, assert) => assert(result === 'ABfoobarAB'),
      setup: () => ['foobar', 10, 'AB'],
      tests,
    },
    {
      name: 'Pads a String (9)',
      expect: (result, assert) => assert(result === 'ABfoobarAB'),
      setup: () => ['foobar', 10, 'ABC'],
      tests,
    },
    {
      name: 'Pads a String (10)',
      expect: (result, assert) => assert(result === 'ABfoobarABC'),
      setup: () => ['foobar', 11, 'ABC'],
      tests,
    },
    {
      name: 'Pads a String (11)',
      expect: (result, assert) => assert(result === 'ABAfoobarABAB'),
      setup: () => ['foobar', 13, 'AB'],
      tests,
    },
    {
      name: 'Pads a String (12)',
      expect: (result, assert) => assert(result === `${' '.repeat(500000)}foobar${' '.repeat(500000)}`),
      setup: () => ['foobar', 1000006],
      tests,
    },
    {
      name: 'Pads a String (13)',
      expect: (result, assert) => assert(result === `${'<>'.repeat(250000)}foobar${'<>'.repeat(250000)}`),
      setup: () => ['foobar', 1000006, '<>'],
      tests,
    },
  ];
};
