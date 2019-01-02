module.exports = ({ foldr, lodash, ramda }) => {
  const tests = {
    foldr: input => foldr.isLessThanOrEqual(...input),
    lodash: input => lodash.lte(...input),
    ramda: input => ramda.lte(...input),
  };

  return [
    {
      name: 'Is Less Than Or Equal (1)',
      expect: (result, assert) => assert(result === false),
      setup: () => [2, 1],
      tests,
    },
    {
      name: 'Is Less Than Or Equal (2)',
      expect: (result, assert) => assert(result === true),
      setup: () => [1, 1],
      tests,
    },
    {
      name: 'Is Less Than Or Equal (3)',
      expect: (result, assert) => assert(result === true),
      setup: () => [1, 2],
      tests,
    },
    {
      name: 'Is Less Than Or Equal (4)',
      expect: (result, assert) => assert(result === false),
      setup: () => ['b', 'a'],
      tests,
    },
    {
      name: 'Is Less Than Or Equal (5)',
      expect: (result, assert) => assert(result === true),
      setup: () => ['a', 'b'],
      tests,
    },
    {
      name: 'Is Less Than Or Equal (5)',
      expect: (result, assert) => assert(result === true),
      setup: () => ['a', 'a'],
      tests,
    },
  ];
};
