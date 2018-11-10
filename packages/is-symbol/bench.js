module.exports = ({ foldr, lodash, rambda }) => {
  const tests = {
    foldr: input => foldr.isSymbol(input),
    lodash: input => lodash.isSymbol(input),
    rambda: input => rambda.is(Symbol, input),
  };

  return [
    {
      name: 'isSymbol => True',
      expect: (result, assert) => assert(result === true),
      setup: () => Symbol('foo'),
      tests,
    },
    {
      name: 'isSymbol => False',
      expect: (result, assert) => assert(result === false),
      setup: () => [],
      tests,
    },
  ];
};
