module.exports = ({
  fp,
  foldr,
  ramda,
  lodash,
}) => {
  const tests = {
    foldr: input => foldr.concat(input, [4, 5, 6]),
    ramda: input => ramda.concat(input, [4, 5, 6]),
    lodash: input => lodash.concat(input, [4, 5, 6]),
  };

  const functionalTests = {
    foldr: input => foldr.concat.f(input)([4, 5, 6]),
    ramda: input => ramda.concat(input)([4, 5, 6]),
    lodash: input => fp.concat(input)([4, 5, 6]),
  };

  const concatResult = [1, 2, 3, 4, 5, 6];

  return [
    {
      name: 'Concats 2 arrays',
      expect: (result, assert) => assert.deepEqual(result, concatResult),
      setup: () => [1, 2, 3],
      tests,
    },
    {
      name: 'Concats 2 arrays',
      expect: (result, assert) => assert.deepEqual(result, concatResult),
      setup: () => [1, 2, 3],
      tests,
    },
    {
      name: 'Concats 2 arrays (Functional)',
      expect: (result, assert) => assert.deepEqual(result, concatResult),
      setup: () => [1, 2, 3],
      tests: functionalTests,
    },
  ];
};
