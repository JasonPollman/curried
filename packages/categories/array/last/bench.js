module.exports = ({ foldr, lodash, ramda }) => {
  const tests = {
    foldr: input => foldr.last(input),
    lodash: input => lodash.last(input),
    ramda: input => ramda.last(input),
  };

  return [
    {
      name: 'Gets An Array\'s Last Item (1)',
      expect: (result, assert) => assert(result === 3),
      setup: () => [1, 2, 3],
      tests,
    },
    {
      name: 'Gets An Array\'s Last Item (2)',
      expect: (result, assert) => assert(result === 3),
      setup: () => [null, 2, 3],
      tests,
    },
    {
      name: 'Gets An Array\'s Last Item (3)',
      expect: (result, assert) => assert(result === undefined),
      setup: () => null,
      tests,
    },
    {
      name: 'Gets An Array\'s Last Item (4)',
      expect: (result, assert) => assert(result === 'f'),
      setup: () => ['f'],
      tests,
    },
  ];
};
