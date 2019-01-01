module.exports = ({
  foldr,
  lodash,
}) => {
  const tests = {
    foldr: ([array, start, end]) => foldr.slice(array, start, end),
    lodash: ([array, start, end]) => lodash.slice(array, start, end),
  };

  return [
    {
      name: 'Slices An Array (Nil)',
      expect: (result, { deepEqual }) => deepEqual(result, [1, 2, 3]),
      setup: () => [[1, 2, 3]],
      tests,
    },
    {
      name: 'Slices An Array (Empty)',
      expect: (result, { deepEqual }) => deepEqual(result, []),
      setup: () => [[]],
      tests,
    },
    {
      name: 'Slices An Array (0)',
      expect: (result, { deepEqual }) => deepEqual(result, [1, 2, 3]),
      setup: () => [[1, 2, 3], 0],
      tests,
    },
    {
      name: 'Slices An Array (-100, 100)',
      expect: (result, { deepEqual }) => deepEqual(result, [1, 2, 3]),
      setup: () => [[1, 2, 3], -100, 100],
      tests,
    },
    {
      name: 'Slices An Array (0, 3)',
      expect: (result, { deepEqual }) => deepEqual(result, [1, 2, 3]),
      setup: () => [[1, 2, 3], 0, 3],
      tests,
    },
    {
      name: 'Slices An Array (1, 2)',
      expect: (result, { deepEqual }) => deepEqual(result, [1, 2]),
      setup: () => [[1, 2, 3], 0, 2],
      tests,
    },
    {
      name: 'Slices An Array (-5)',
      expect: (result, { deepEqual }) => deepEqual(result, [5, 6, 7, 8, 9]),
      setup: () => [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], -5],
      tests,
    },
    {
      name: 'Slices An Array (Large)',
      expect: (result, assert) => assert(result.length === 9000),
      setup: () => [Array(10000).fill(0), 1000, 10000],
      tests,
    },
    {
      name: 'Slices An Array (Large, 0)',
      expect: (result, assert) => assert(result.length === 10000),
      setup: () => [Array(10000).fill(0), 0],
      tests,
    },
  ];
};
