module.exports = ({ foldr, lodash, rambda }) => {
  const tests = {
    foldr: input => foldr.isBoolean(input),
    rambda: input => rambda.is(Boolean)(input),
    lodash: input => lodash.isBoolean(input),
  };

  return [
    {
      name: 'isBoolean => True (1)',
      expect: (result, assert) => assert(result === true),
      setup: () => true,
      tests,
    },
    {
      name: 'isBoolean => True (2)',
      expect: (result, assert) => assert(result === true),
      setup: () => false,
      tests,
    },
    {
      name: 'isBoolean => False',
      expect: (result, assert) => assert(result === false),
      setup: () => 'foobar',
      tests,
    },
  ];
};
