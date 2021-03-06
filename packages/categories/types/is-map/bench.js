module.exports = ({ foldr, lodash, ramda }) => {
  const tests = {
    foldr: input => foldr.isMap(input),
    ramda: input => ramda.is(Map)(input),
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
