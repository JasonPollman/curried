module.exports = ({ foldr, lodash }) => {
  const tests = {
    foldr: input => foldr.compact(input),
    lodash: input => lodash.compact(input),
  };

  return [
    {
      name: 'Compacts an Array: Nothing to Compact',
      expect: (result, { deepEqual }) => deepEqual(result, [1, 2, 3]),
      setup: () => [1, 2, 3],
      tests,
    },
    {
      name: 'Compacts an Array: Sparse',
      expect: (result, { deepEqual }) => deepEqual(result, [1, 2, 3]),
      setup: () => [1, false, 2, 3],
      tests,
    },
    {
      name: 'Compacts an Array: Frequent',
      expect: (result, { deepEqual }) => deepEqual(result, [1, 2, 3]),
      setup: () => [NaN, null, 1, false, 0, 2, null, undefined, 3, false],
      tests,
    },
  ];
};
