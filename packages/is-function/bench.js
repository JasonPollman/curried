module.exports = ({ foldr, lodash, rambda }) => {
  const tests = {
    foldr: input => foldr.isFunction(input),
    rambda: input => rambda.is(Function)(input),
    lodash: input => lodash.isFunction(input),
  };

  return [
    {
      name: 'isFunction => True',
      expect: (result, assert) => assert(result === true),
      setup: () => () => {},
      tests,
    },
    {
      name: 'isFunction => False',
      expect: (result, assert) => assert(result === false),
      setup: () => 'foobar',
      tests,
    },
  ];
};
