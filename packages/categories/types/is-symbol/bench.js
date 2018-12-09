module.exports = ({ foldr, lodash, ramda }) => {
  const tests = {
    foldr: input => foldr.isSymbol(input),
    lodash: input => lodash.isSymbol(input),
    ramda: input => ramda.is(Symbol, input),
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
