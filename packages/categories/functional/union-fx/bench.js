module.exports = ({ foldr, fp, ramda }) => {
  const tests = {
    foldr: input => foldr.unionFx(input[0])(input[1]),
    lodash: input => fp.union(input[1])(input[0]),
    ramda: input => ramda.union(input[0])(input[1]),
  };

  return [
    {
      name: 'Union of Arrays (Nil)',
      expect: (result, { deepEqual }) => deepEqual(result, []),
      setup: () => [null, null],
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
      setup: () => [[1, 2, 3, 4, 5, 6, 7, 8, 9], [9, 10]],
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
  ];
};
