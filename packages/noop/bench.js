module.exports = ({ foldr, lodash, rambda }) => {
  const rnoop = rambda.always(undefined);

  const tests = {
    foldr: () => foldr.noop(),
    rambda: () => rnoop(),
    lodash: () => lodash.noop(),
  };

  return [
    {
      name: 'Returns Nothing',
      expect: (result, assert) => assert(result === undefined),
      tests,
    },
  ];
};
