module.exports = ({ foldr, lodash }) => {
  const tests = {
    foldr: () => foldr.stubArray(),
    lodash: () => lodash.stubArray(),
  };

  return [
    {
      name: 'Returns `[]`',
      expect: (result, { deepEqual }) => deepEqual(result, []),
      tests,
    },
    {
      name: 'Returns `[]`',
      expect: (result, { deepEqual }) => deepEqual(result, []),
      tests: {
        foldr: () => foldr.stubArray('x'),
        lodash: () => lodash.stubArray('x'),
      },
    },
  ];
};
