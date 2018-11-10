module.exports = ({ foldr, lodash, rambda }) => {
  const tests = {
    foldr: input => foldr.flatten(input),
    lodash: input => lodash.flatten(input),
    rambda: input => rambda.flatten(input),
  };

  return [
    {
      name: 'Flattens an Array: Empty',
      expect: (result, { deepEqual }) => deepEqual(result, []),
      setup: () => [],
      tests,
    },
    {
      name: 'Flattens an Array: Nothing to flatten',
      expect: (result, { deepEqual }) => deepEqual(result, [1, 2, 3]),
      setup: () => [1, 2, 3],
      tests,
    },
    {
      name: 'Flattens an Array: Sparse',
      expect: (result, { deepEqual }) => deepEqual(result, [1, 2, 3, 4, 5]),
      setup: () => [1, [2], 3, 4, 5],
      tests,
    },
    {
      name: 'Flattens an Array: Frequent',
      expect: (result, { deepEqual }) => deepEqual(result, [1, 1, 2, 1, 2, 3]),
      setup: () => [[1], [1, 2], [1, 2, 3], []],
      tests,
    },
  ];
};
