module.exports = ({ foldr, lodash, ramda }) => {
  const tests = {
    foldr: x => foldr.identity(x),
    ramda: x => ramda.identity(x),
    lodash: x => lodash.identity(x),
  };

  return [
    {
      name: 'Returns First Argument (1)',
      expect: (result, assert) => assert(result === 5),
      setup: () => 5,
      tests,
    },
    {
      name: 'Returns First Argument (2)',
      expect: (result, { deepEqual }) => deepEqual(result, { foo: 'x' }),
      setup: () => ({ foo: 'x' }),
      tests,
    },
  ];
};
