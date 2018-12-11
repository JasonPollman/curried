module.exports = ({
  fp,
  foldr,
  ramda,
}) => {
  const tests = {
    foldr: input => foldr.flattenDeepFx(10)(input),
    lodash: input => fp.flattenDeep(input),
    ramda: input => ramda.flatten(input),
  };

  return [
    {
      name: 'Flattens an Array: Nothing to flatten (Functional)',
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
