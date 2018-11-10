module.exports = ({ foldr, lodash, rambda }) => {
  const rtrue = rambda.always(true);

  const tests = {
    foldr: () => foldr.t(),
    rambda: () => rtrue(),
    lodash: () => lodash.stubTrue(),
  };

  return [
    {
      name: 'Returns `true`',
      expect: (result, assert) => assert(result === true),
      tests,
    },
  ];
};
