module.exports = ({ foldr, lodash, rambda }) => {
  const tests = {
    foldr: input => foldr.isSet(input),
    rambda: input => rambda.is(Set)(input),
    lodash: input => lodash.isSet(input),
  };

  class Extended extends Set {}

  return [
    {
      name: 'isSet => True (1)',
      expect: (result, assert) => assert(result === true),
      setup: () => new Set(),
      tests,
    },
    {
      name: 'isSet => True (2)',
      expect: (result, assert) => assert(result === true),
      setup: () => new Extended(),
      tests,
    },
    {
      name: 'isSet => False',
      expect: (result, assert) => assert(result === false),
      setup: () => 'foobar',
      tests,
    },
  ];
};
