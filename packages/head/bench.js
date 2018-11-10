module.exports = ({ foldr, lodash, rambda }) => {
  const tests = {
    foldr: input => foldr.head(input),
    lodash: input => lodash.head(input),
    rambda: input => rambda.head(input),
  };

  return [
    {
      name: 'Gets An Array\'s First Item (1)',
      expect: (result, assert) => assert(result === 1),
      setup: () => [1, 2, 3],
      tests,
    },
    {
      name: 'Gets An Array\'s First Item (2)',
      expect: (result, assert) => assert(result === null),
      setup: () => [null, 2, 3],
      tests,
    },
    {
      name: 'Gets An Array\'s First Item (3)',
      expect: (result, assert) => assert(result === undefined),
      setup: () => null,
      tests,
    },
    {
      name: 'Gets An Array\'s First Item (4)',
      expect: (result, assert) => assert(result === 'f'),
      setup: () => ['f'],
      tests,
    },
  ];
};
