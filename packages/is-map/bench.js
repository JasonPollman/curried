module.exports = ({ foldr, lodash, rambda }) => {
  const tests = {
    foldr: input => foldr.isMap(input),
    rambda: input => rambda.is(Map)(input),
    lodash: input => lodash.isMap(input),
  };

  class Extended extends Map {}

  return [
    {
      name: 'isMap => True (1)',
      expect: (result, assert) => assert(result === true),
      setup: () => new Map(),
      tests,
    },
    {
      name: 'isMap => True (2)',
      expect: (result, assert) => assert(result === true),
      setup: () => new Extended(),
      tests,
    },
    {
      name: 'isMap => False',
      expect: (result, assert) => assert(result === false),
      setup: () => 'foobar',
      tests,
    },
  ];
};
