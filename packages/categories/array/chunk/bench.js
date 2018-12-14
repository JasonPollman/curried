module.exports = ({ foldr, lodash }) => {
  const tests = {
    foldr: input => foldr.chunk(...input),
    lodash: input => lodash.chunk(...input),
  };

  return [
    {
      name: 'Chunks an Array (1)',
      expect: (result, { deepEqual }) => deepEqual(result, [[1, 2], [3, 4], [5, 6]]),
      setup: () => [[1, 2, 3, 4, 5, 6], 2],
      tests,
    },
    {
      name: 'Chunks an Array (2)',
      expect: (result, { deepEqual }) => deepEqual(result, []),
      setup: () => [[1, 2, 3, 4, 5, 6], 0],
      tests,
    },
    {
      name: 'Chunks an Array (3)',
      expect: (result, { deepEqual }) => deepEqual(result, []),
      setup: () => [[], 2],
      tests,
    },
    {
      name: 'Chunks an Array (4)',
      expect: (result, { deepEqual }) => deepEqual(result, [[1, 2, 3], [4, 5, 6], [7, 8]]),
      setup: () => [[1, 2, 3, 4, 5, 6, 7, 8], 3],
      tests,
    },
  ];
};
