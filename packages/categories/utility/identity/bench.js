module.exports = ({ foldr, lodash, ramda }) => {
  const tests = {
    foldr: x => foldr.identity(x),
    ramda: x => ramda.identity(x),
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
