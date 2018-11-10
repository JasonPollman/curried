module.exports = ({ foldr, lodash, rambda }) => {
  const tests = {
    foldr: x => foldr.identity(x),
    rambda: x => rambda.identity(x),
    lodash: x => lodash.identity(x),
  };

  return [
    {
      name: 'Returns First Argument',
      expect: (result, assert) => assert(result === 5),
      setup: () => 5,
      tests,
    },
  ];
};
