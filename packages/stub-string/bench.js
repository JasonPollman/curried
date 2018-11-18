module.exports = ({ foldr, lodash }) => {
  const tests = {
    foldr: () => foldr.stubString(),
    lodash: () => lodash.stubString(),
  };

  return [
    {
      name: 'Returns `\'\'`',
      expect: (result, { deepEqual }) => deepEqual(result, ''),
      tests,
    },
  ];
};
