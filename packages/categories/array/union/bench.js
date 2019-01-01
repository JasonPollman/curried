module.exports = ({ foldr, lodash, ramda }) => {
  const tests = {
    foldr: input => foldr.union(...input),
    lodash: input => lodash.union(...input),
    ramda: input => ramda.union(...input),
  };

  return [
    {
      name: 'Union of Arrays (Nil)',
      expect: (result, { deepEqual }) => deepEqual(result, []),
      setup: () => [null],
      tests,
    },
    {
      name: 'Union of Arrays (1)',
      expect: (result, { deepEqual }) => deepEqual(result, [1, 2, 3, 4, 5, 6, 7, 8, 9]),
      setup: () => [[1, 2, 3, 4, 5, 6, 7, 8, 9], [4, 5, 6]],
      tests,
    },
    {
      name: 'Union of Arrays (2)',
      expect: (result, { deepEqual }) => deepEqual(result, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
      setup: () => [[1, 2, 3, 4, 5, 6, 7, 8, 9], [9, 10], [5]],
      tests,
    },
    {
      name: 'Union of Arrays (3)',
      expect: (result, { deepEqual }) => deepEqual(result, [1, 2, 3, 4, 5, 6, 7]),
      setup: () => [[1, 2], [2, 3, 4, 5, 6, 7], [2, 3, 4, 5, 6, 7]],
      tests,
    },
    {
      name: 'Union of Arrays (4)',
      expect: (result, { deepEqual }) => deepEqual(result, [1, 2, 3, 4, 5, 6, 7]),
      setup: () => [
        [1, 2, 3, 4, 5],
        [1, 2, 3, 4, 5, 6, 7],
        [1, 2, 3, 4, 5, 6, 7],
        [1, 2, 3, 4, 5, 6, 7],
      ],
      tests,
    },
    {
      name: 'Union of Arrays (Bad Input)',
      expect: (result, { deepEqual }) => deepEqual(result, [1, 2, 3]),
      setup: () => [1234, [1, 2, 3]],
      tests,
    },
    {
      name: 'Union of Arrays (Large)',
      expect: (result, { deepEqual }) => deepEqual(result, [0]),
      setup: () => [new Array(10000).fill(0), new Array(10000).fill(0)],
      tests,
    },
    {
      name: 'Union of Arrays (Large, 2)',
      expect: (result, { deepEqual }) => deepEqual(result, [0, 1]),
      setup: () => [new Array(10000).fill(0), new Array(10000).fill(1)],
      tests,
    },
  ];
};
