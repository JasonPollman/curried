module.exports = ({
  foldr,
  ramda,
  lodash,
}) => {
  const tests = {
    foldr: input => foldr.flattenDeep(input),
    lodash: input => lodash.flattenDeep(input),
    ramda: input => ramda.flatten(input),
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
      name: 'Flattens an Array: Nothing to flatten (Large)',
      expect: (result, { deepEqual }) => deepEqual(result, new Array(10000).fill(0)),
      setup: () => new Array(10000).fill(0),
      tests,
    },
    {
      name: 'Flattens an Array (Large, Deeeep)',
      expect: (result, { deepEqual }) => deepEqual(result, new Array(10000).fill(0)),
      setup: () => new Array(10000).fill([[[[0]]]]),
      tests,
    },
    {
      name: 'Flattens an Array: Frequent',
      expect: (result, { deepEqual }) => deepEqual(result, [1, 1, 2, 1, 2, 3]),
      setup: () => [[1], [1, 2], [1, 2, 3], []],
      tests,
    },
    {
      name: 'Flattens an Array Deep: Frequent (1)',
      expect: (result, { deepEqual }) => deepEqual(result, [1, 1, 2, 1, 2, 3]),
      setup: () => [[[1]], [[1, 2], [[1, [2, 3]]]], []],
      tests,
    },
    {
      name: 'Flattens an Array Deep: Frequent (2)',
      expect: (result, { deepEqual }) => deepEqual(result, [1, 2, 3, 4, 5, 6, 7, 8, 9]),
      setup: () => [1, [2, [3, [4, [5, [6, [7, [8, [9]]]]]]]]],
      tests,
    },
  ];
};
