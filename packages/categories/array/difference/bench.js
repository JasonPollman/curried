module.exports = ({ foldr, lodash, ramda }) => {
  const tests = {
    foldr: input => foldr.difference(...input),
    lodash: input => lodash.difference(...input),
    ramda: input => ramda.difference(...input),
  };

  return [
    {
      name: 'Diffs Arrays (1)',
      expect: (result, { deepEqual }) => deepEqual(result, [1, 2, 3, 7, 8, 9]),
      setup: () => [[1, 2, 3, 4, 5, 6, 7, 8, 9], [4, 5, 6]],
      tests,
    },
    {
      name: 'Diffs Arrays (2)',
      expect: (result, { deepEqual }) => deepEqual(result, [1, 2, 3, 4, 6, 7, 8, 9]),
      setup: () => [[1, 2, 3, 4, 5, 6, 7, 8, 9], [], [5]],
      tests,
    },
    {
      name: 'Diffs Arrays (3)',
      expect: (result, { deepEqual }) => deepEqual(result, [1]),
      setup: () => [[1, 2], [2, 3, 4, 5, 6, 7], [2, 3, 4, 5, 6, 7]],
      tests,
    },
    {
      name: 'Diffs Arrays (4)',
      expect: (result, { deepEqual }) => deepEqual(result, []),
      setup: () => [
        [1, 2, 3, 4, 5],
        [1, 2, 3, 4, 5, 6, 7],
        [1, 2, 3, 4, 5, 6, 7],
        [1, 2, 3, 4, 5, 6, 7],
      ],
      tests,
    },
    {
      name: 'Diffs Arrays (Bad Input)',
      expect: (result, { deepEqual }) => deepEqual(result, []),
      setup: () => [1234, [1, 2, 3]],
      tests,
    },
  ];
};
