module.exports = ({ foldr, lodash, ramda }) => {
  const tests = {
    foldr: ([array, n]) => foldr.nth(array, n),
    lodash: ([array, n]) => lodash.nth(array, n),
    ramda: ([array, n]) => ramda.nth(n, array),
  };

  return [
    {
      name: 'Gets Nth Value (0)',
      expect: (result, assert) => assert(result === 0),
      setup: () => [[0, 1, 2], 0],
      tests,
    },
    {
      name: 'Gets Nth Value (3)',
      expect: (result, assert) => assert(result === 3),
      setup: () => [[0, 1, 2, 3], 3],
      tests,
    },
    {
      name: 'Gets Nth Value (null)',
      expect: (result, assert) => assert(result === 0),
      setup: () => [[0, 1, 2, 3], null],
      tests,
    },
    {
      name: 'Gets Nth Value (-1)',
      expect: (result, assert) => assert(result === 3),
      setup: () => [[0, 1, 2, 3], -1],
      tests,
    },
    {
      name: 'Gets Nth Value (-100)',
      expect: (result, assert) => assert(result === undefined),
      setup: () => [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], -100],
      tests,
    },
  ];
};
