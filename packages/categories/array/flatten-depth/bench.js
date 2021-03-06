module.exports = ({
  foldr,
  lodash,
}) => {
  const tests = {
    foldr: ([input, depth]) => foldr.flattenDepth(input, depth),
    lodash: ([input, depth]) => lodash.flattenDepth(input, depth),
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
      setup: () => [[1, 2, 3], 1],
      tests,
    },
    {
      name: 'Flattens an Array: Frequent',
      expect: (result, { deepEqual }) => deepEqual(result, [1, 1, 2, 1, 2, 3]),
      setup: () => [[[1], [1, 2], [1, 2, 3], []], Infinity],
      tests,
    },
    {
      name: 'Flattens an Array Deep: Frequent (1)',
      expect: (result, { deepEqual }) => deepEqual(result, [1, 1, 2, 1, 2, 3]),
      setup: () => [[[[1]], [[1, 2], [[1, [2, 3]]]], []], Infinity],
      tests,
    },
    {
      name: 'Flattens an Array Deep: Frequent (2)',
      expect: (result, { deepEqual }) => deepEqual(result, [1, 2, 3, 4, 5, 6, 7, 8, 9]),
      setup: () => [[1, [2, [3, [4, [5, [6, [7, [8, [9]]]]]]]]], Infinity],
      tests,
    },
    {
      name: 'Flattens an Array Deep: Frequent (3)',
      expect: (result, { deepEqual }) => (
        deepEqual(result, [1, [2, [3, [4, [5, [6, [7, [8, [9]]]]]]]]])
      ),
      setup: () => [[1, [2, [3, [4, [5, [6, [7, [8, [9]]]]]]]]], 0],
      tests,
    },
    {
      name: 'Flattens an Array Deep: Frequent (4)',
      expect: (result, { deepEqual }) => (
        deepEqual(result, [1, 2, 3, [4, [5, [6, [7, [8, [9]]]]]]])
      ),
      setup: () => [[1, [2, [3, [4, [5, [6, [7, [8, [9]]]]]]]]], 2],
      tests,
    },
  ];
};
