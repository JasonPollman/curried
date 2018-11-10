module.exports = ({ foldr, lodash, rambda }) => {
  const rfalse = rambda.always(false);

  const tests = {
    foldr: () => foldr.f(),
    rambda: () => rfalse(),
    lodash: () => lodash.stubFalse(),
  };

  return [
    {
      name: 'Returns `false`',
      expect: (result, assert) => assert(result === false),
      tests,
    },
  ];
};
