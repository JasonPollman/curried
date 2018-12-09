module.exports = ({
  fp,
  foldr,
  ramda,
  lodash,
}) => {
  const tests = {
    foldr: input => foldr.flattenDeep(input),
    lodash: input => lodash.flattenDeep(input),
    ramda: input => ramda.flatten(input),
  };

  const functionalTests = {
    foldr: input => foldr.flattenDeep.f(10)(input),
    lodash: input => fp.flattenDeep(input),
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
      name: 'Flattens an Array: Nothing to flatten (Functional)',
      expect: (result, { deepEqual }) => deepEqual(result, [1, 2, 3]),
      setup: () => [1, 2, 3],
      tests: functionalTests,
    },
    {
      name: 'Flattens an Array: Frequent',
      expect: (result, { deepEqual }) => deepEqual(result, [1, 1, 2, 1, 2, 3]),
      setup: () => [[1], [1, 2], [1, 2, 3], []],
      tests,
    },
    {
      name: 'Flattens an Array: Frequent (Functional)',
      expect: (result, { deepEqual }) => deepEqual(result, [1, 1, 2, 1, 2, 3]),
      setup: () => [[1], [1, 2], [1, 2, 3], []],
      tests: functionalTests,
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
