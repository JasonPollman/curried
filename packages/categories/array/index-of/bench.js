module.exports = ({ foldr, lodash, ramda }) => {
  const tests = {
    foldr: ([x, y]) => foldr.indexOf(x, y),
    lodash: ([x, y]) => lodash.indexOf(x, y),
    ramda: ([x, y]) => ramda.indexOf(y, x),
  };

  return [
    {
      name: 'Gets a Value\'s Index (1)',
      expect: (result, assert) => assert(result === 2),
      setup: () => [[1, 2, 3, 4], 3],
      tests,
    },
    {
      name: 'Gets a Value\'s Index (2)',
      expect: (result, assert) => assert(result === 13),
      setup: () => [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 14],
      tests,
    },
    {
      name: 'Gets a Value\'s Index (3)',
      expect: (result, assert) => assert(result === 0),
      setup: () => [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 1],
      tests,
    },
    {
      name: 'Gets a Value\'s Index (4)',
      expect: (result, assert) => assert(result === 1),
      setup: () => [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 2],
      tests,
    },
    {
      name: 'Gets a Value\'s Index (Large)',
      expect: (result, assert) => assert(result === 0),
      setup: () => [new Array(10000).fill(0), 0],
      tests,
    },
    {
      name: 'Gets a Value\'s Index (Large, 2)',
      expect: (result, assert) => assert(result === -1),
      setup: () => [new Array(10000).fill(0), 1],
      tests,
    },
    {
      name: 'Gets a Value\'s Index (Not Found)',
      expect: (result, assert) => assert(result === -1),
      setup: () => [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 100],
      tests,
    },
    {
      name: 'Gets a Value\'s Index (SameValueZero)',
      expect: (result, assert) => assert(result === 1),
      setup: () => [[1, NaN, 2], NaN],
      tests,
    },
  ];
};
