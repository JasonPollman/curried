module.exports = ({ foldr, lodash, ramda }) => {
  const rtrue = ramda.always(true);

  const tests = {
    foldr: () => foldr.True(),
    ramda: () => rtrue(),
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
