module.exports = ({ foldr, lodash, ramda }) => {
  const rfalse = ramda.always(false);

  const tests = {
    foldr: () => foldr.False(),
    ramda: () => rfalse(),
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
