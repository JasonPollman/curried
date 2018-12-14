module.exports = ({ foldr, lodash }) => {
  const tests = {
    foldr: input => foldr.castArray(input),
    lodash: input => lodash.castArray(input),
  };

  return [
    {
      name: 'Casts an item as an array (1)',
      expect: (result, { deepEqual }) => deepEqual(result, [1]),
      setup: () => 1,
      tests,
    },
    {
      name: 'Casts an item as an array (2)',
      expect: (result, { deepEqual }) => deepEqual(result, [1]),
      setup: () => [1],
      tests,
    },
  ];
};
