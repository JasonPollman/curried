module.exports = ({ fp, foldr }) => {
  const tests = {
    foldr: ([array, n]) => foldr.chunkFx(n, array),
    lodash: ([array, n]) => fp.chunk(n, array),
  };

  return [
    {
      name: 'Chunks an Array (F1)',
      expect: (result, { deepEqual }) => deepEqual(result, [[1, 2], [3, 4], [5, 6]]),
      setup: () => [[1, 2, 3, 4, 5, 6], 2],
      tests,
    },
    {
      name: 'Chunks an Array (F2)',
      expect: (result, { deepEqual }) => deepEqual(result, []),
      setup: () => [[1, 2, 3, 4, 5, 6], 0],
      tests,
    },
    {
      name: 'Chunks an Array (F3)',
      expect: (result, { deepEqual }) => deepEqual(result, []),
      setup: () => [[], 2],
      tests,
    },
    {
      name: 'Chunks an Array (F4)',
      expect: (result, { deepEqual }) => deepEqual(result, [[1, 2, 3], [4, 5, 6], [7, 8]]),
      setup: () => [[1, 2, 3, 4, 5, 6, 7, 8], 3],
      tests,
    },
  ];
};
