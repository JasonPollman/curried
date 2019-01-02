module.exports = ({ foldr, lodash }) => {
  const tests = {
    foldr: input => foldr.chunk(...input),
    lodash: input => lodash.chunk(...input),
  };

  return [
    {
      name: 'Chunks an Array (Null)',
      expect: (result, { deepEqual }) => deepEqual(result, []),
      setup: () => [null, 2],
      tests,
    },
    {
      name: 'Chunks an Array (Empty)',
      expect: (result, { deepEqual }) => deepEqual(result, []),
      setup: () => [[], 2],
      tests,
    },
    {
      name: 'Chunks an Array (Large)',
      expect: (result, { deepEqual }) => (
        deepEqual(result, new Array(1000).fill([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]))
      ),
      setup: () => [new Array(10000).fill(0), 10],
      tests,
    },
    {
      name: 'Chunks an Array (2 size)',
      expect: (result, { deepEqual }) => deepEqual(result, [[1, 2], [3, 4], [5, 6]]),
      setup: () => [[1, 2, 3, 4, 5, 6], 2],
      tests,
    },
    {
      name: 'Chunks an Array (0 size)',
      expect: (result, { deepEqual }) => deepEqual(result, []),
      setup: () => [[1, 2, 3, 4, 5, 6], 0],
      tests,
    },
    {
      name: 'Chunks an Array (3 size)',
      expect: (result, { deepEqual }) => deepEqual(result, [[1, 2, 3], [4, 5, 6], [7, 8]]),
      setup: () => [[1, 2, 3, 4, 5, 6, 7, 8], 3],
      tests,
    },
  ];
};
