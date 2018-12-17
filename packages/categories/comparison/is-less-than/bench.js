module.exports = ({ foldr, lodash }) => {
  const tests = {
    foldr: input => foldr.isLessThan(...input),
    lodash: input => lodash.lt(...input),
  };

  return [
    {
      name: 'Is Less Than (1)',
      expect: (result, assert) => assert(result === false),
      setup: () => [2, 1],
      tests,
    },
    {
      name: 'Is Less Than (2)',
      expect: (result, assert) => assert(result === false),
      setup: () => [1, 1],
      tests,
    },
    {
      name: 'Is Less Than (3)',
      expect: (result, assert) => assert(result === true),
      setup: () => [1, 2],
      tests,
    },
    {
      name: 'Is Less Than (4)',
      expect: (result, assert) => assert(result === false),
      setup: () => ['b', 'a'],
      tests,
    },
    {
      name: 'Is Less Than (5)',
      expect: (result, assert) => assert(result === true),
      setup: () => ['a', 'b'],
      tests,
    },
  ];
};
