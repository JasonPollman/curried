module.exports = ({
  fp,
  foldr,
  ramda,
}) => {
  const tests = {
    foldr: input => foldr.flattenDepthFx(10)(input),
    lodash: input => fp.flattenDepth(10)(input),
    ramda: input => ramda.flatten(input),
  };

  return [
    {
      name: 'Flattens an Array: Nothing to flatten (Functional)',
      expect: (result, { deepEqual }) => deepEqual(result, []),
      setup: () => [],
      tests,
    },
    {
      name: 'Flattens an Array (Functional)',
      expect: (result, { deepEqual }) => deepEqual(result, [1, 2, 3]),
      setup: () => [1, 2, 3],
      tests,
    },
    {
      name: 'Flattens an Array: Frequent (Functional)',
      expect: (result, { deepEqual }) => deepEqual(result, [1, 1, 2, 1, 2, 3]),
      setup: () => [[1], [1, 2], [1, 2, 3], []],
      tests,
    },
  ];
};
