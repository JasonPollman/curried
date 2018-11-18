module.exports = ({
  foldr,
  ramda,
  lodash,
}) => {
  const tests = {
    foldr: input => foldr.unique(input),
    ramda: input => ramda.uniq(input),
    lodash: input => lodash.uniq(input),
  };

  const concatResult = [1, 2, 3, 4, 6];

  return [
    {
      name: 'Gets unique values from an array',
      expect: (result, assert) => assert.deepEqual(result, concatResult),
      setup: () => [1, 2, 2, 3, 4, 6, 6, 1],
      tests,
    },
    {
      name: 'Gets unique values from an array with length over 150',
      expect: (result, assert) => assert.deepEqual(result, [undefined]),
      setup: () => new Array(250),
      tests,
    },
  ];
};
