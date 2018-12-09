module.exports = ({ foldr, lodash, ramda }) => {
  const tests = {
    foldr: input => foldr.isWeakMap(input),
    ramda: input => ramda.is(WeakMap)(input),
    lodash: input => lodash.isWeakMap(input),
  };

  class Extended extends WeakMap {}

  return [
    {
      name: 'isWeakMap => True (1)',
      expect: (result, assert) => assert(result === true),
      setup: () => new WeakMap(),
      tests,
    },
    {
      name: 'isWeakMap => True (2)',
      expect: (result, assert) => assert(result === true),
      setup: () => new Extended(),
      tests,
    },
    {
      name: 'isWeakMap => False',
      expect: (result, assert) => assert(result === false),
      setup: () => 'foobar',
      tests,
    },
  ];
};
