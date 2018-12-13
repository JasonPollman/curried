module.exports = ({ foldr, lodash }) => {
  const tests = {
    foldr: ([x, y]) => foldr.repeat(x, y),
    lodash: ([x, y]) => lodash.repeat(x, y),
  };

  const bigString = 'x'.repeat(1e8);

  return [
    {
      name: 'Repeats a String (1)',
      expect: (result, assert) => assert(result === 'foobarfoobar'),
      setup: () => ['foobar', 2],
      tests,
    },
    {
      name: 'Repeats a String (2)',
      expect: (result, assert) => assert(result === ''),
      setup: () => ['', 2000],
      tests,
    },
    {
      name: 'Repeats a String (3)',
      expect: (result, assert) => assert(result === 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'),
      setup: () => ['xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', 2],
      tests,
    },
    {
      name: 'Repeats a String (4)',
      expect: (result, assert) => assert(result === '[object Object][object Object]'),
      setup: () => [{}, 2],
      tests,
    },
    {
      name: 'Repeats a String (5)',
      expect: (result, assert) => assert(result === ''),
      setup: () => [null, 2],
      tests,
    },
    {
      name: 'Repeats a String (6)',
      expect: (result, assert) => assert(result === 'x'.repeat(5)),
      setup: () => ['x', 5],
      tests,
    },
    {
      name: 'Repeats a String (7)',
      expect: (result, assert) => assert(result === 'x'.repeat(10)),
      setup: () => ['x', 10],
      tests,
    },
    {
      name: 'Repeats a String (8)',
      expect: (result, assert) => assert(result === bigString),
      setup: () => ['x'.repeat(10), 1e7],
      tests,
    },
  ];
};
