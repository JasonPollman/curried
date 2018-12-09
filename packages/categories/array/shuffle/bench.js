module.exports = ({ foldr, lodash }) => {
  const tests = {
    foldr: input => foldr.shuffle(input),
    lodash: input => lodash.shuffle(input),
  };

  return [
    {
      name: 'Shuffles an Array: Basic',
      expect: (result, assert) => assert(typeof result === 'object' && result.length),
      setup: () => [1, 2, 3],
      tests,
    },
    {
      name: 'Shuffles an Array: Larger',
      expect: (result, assert) => assert(typeof result === 'object' && result.length),
      setup: () => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
      tests,
    },
  ];
};
