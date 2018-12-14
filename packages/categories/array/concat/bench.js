module.exports = ({
  foldr,
  ramda,
  lodash,
}) => {
  const tests = {
    foldr: input => foldr.concat(input, [4, 5, 6]),
    ramda: input => ramda.concat(input, [4, 5, 6]),
    lodash: input => lodash.concat(input, [4, 5, 6]),
  };

  const concatResult = [1, 2, 3, 4, 5, 6];

  return [
    {
      name: 'Concats: 2 Arrays',
      expect: (result, assert) => assert.deepEqual(result, concatResult),
      setup: () => [1, 2, 3],
      tests,
    },
    {
      name: 'Concats: Arrays (Large)',
      expect: (result, assert) => assert.deepEqual(result, [...Array(10000).fill(0), 4, 5, 6]),
      setup: () => Array(10000).fill(0),
      tests,
    },
    {
      name: 'Concats: Empty',
      expect: (result, assert) => assert.deepEqual(result, [4, 5, 6]),
      setup: () => [],
      tests,
    },
    {
      name: 'Concats: Null',
      expect: (result, assert) => assert.deepEqual(result, [null, 4, 5, 6]),
      setup: () => null,
      tests,
    },
  ];
};
