module.exports = ({ foldr, lodash }) => {
  const tests = {
    foldr: () => foldr.stubObject(),
    lodash: () => lodash.stubObject(),
  };

  return [
    {
      name: 'Returns `{}`',
      expect: (result, { deepEqual }) => deepEqual(result, {}),
      tests,
    },
    {
      name: 'Returns `{}`',
      expect: (result, { deepEqual }) => deepEqual(result, {}),
      tests: {
        foldr: () => foldr.stubObject({}),
        lodash: () => lodash.stubObject({}),
      },
    },
  ];
};
