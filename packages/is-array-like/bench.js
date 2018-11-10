module.exports = ({ foldr, lodash }) => {
  const tests = {
    foldr: input => foldr.isArrayLike(input),
    lodash: input => lodash.isArrayLike(input),
  };

  return [
    {
      name: 'isArrayLike => True (1)',
      expect: (result, assert) => assert(result === true),
      setup: () => [],
      tests,
    },
    {
      name: 'isArrayLike => True (2)',
      expect: (result, assert) => assert(result === true),
      setup: () => ({ length: 0 }),
      tests,
    },
    {
      name: 'isArrayLike => False',
      expect: (result, assert) => assert(result === false),
      setup: () => false,
      tests,
    },
  ];
};
