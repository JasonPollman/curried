module.exports = ({ foldr, fp, ramda }) => {
  const tests = {
    foldr: input => foldr.differenceFx(...input),
    lodash: input => fp.difference(...input),
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
      setup: () => [[1, 2, 3, 4, 5, 6, 7, 8, 9], [5]],
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
