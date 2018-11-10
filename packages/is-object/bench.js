module.exports = ({ foldr, lodash, rambda }) => {
  const tests = {
    foldr: input => foldr.isObject(input),
    rambda: input => rambda.is(Object)(input),
    lodash: input => lodash.isObject(input),
  };

  return [
    {
      name: 'isObject => True (1)',
      expect: (result, assert) => assert(result === true),
      setup: () => ({}),
      tests,
    },
    {
      name: 'isObject => True (2)',
      expect: (result, assert) => assert(result === true),
      setup: () => new Map(),
      tests,
    },
    {
      name: 'isObject => True (3)',
      expect: (result, assert) => assert(result === true),
      setup: () => [],
      tests,
    },
    {
      name: 'isObject => True (4)',
      expect: (result, assert) => assert(result === true),
      setup: () => new Number(7), // eslint-disable-line no-new-wrappers
      tests,
    },
    {
      name: 'isObject => False (1)',
      expect: (result, assert) => assert(result === false),
      setup: () => 'foobar',
      tests,
    },
    {
      name: 'isObject => False (2)',
      expect: (result, assert) => assert(result === false),
      setup: () => 123,
      tests,
    },
    {
      name: 'isObject => False (3)',
      expect: (result, assert) => assert(result === false),
      setup: () => null,
      tests,
    },
    {
      name: 'isObject => False (4)',
      expect: (result, assert) => assert(result === false),
      setup: () => undefined,
      tests,
    },
  ];
};
