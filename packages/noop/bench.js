module.exports = ({ foldr, lodash, ramda }) => {
  const rnoop = ramda.always(undefined);

  const tests = {
    foldr: () => foldr.noop(),
    ramda: () => rnoop(),
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
