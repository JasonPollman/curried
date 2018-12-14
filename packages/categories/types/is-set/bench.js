module.exports = ({ foldr, lodash, ramda }) => {
  const tests = {
    foldr: input => foldr.isSet(input),
    ramda: input => ramda.is(Set)(input),
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
