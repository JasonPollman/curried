module.exports = ({ foldr, lodash }) => {
  const tests = {
    foldr: input => foldr.isObjectLike(input),
    lodash: input => lodash.isObjectLike(input),
  };

  return [
    {
      name: 'isObjectLike => True (1)',
      expect: (result, assert) => assert(result === true),
      setup: () => ({}),
      tests,
    },
    {
      name: 'isObjectLike => True (2)',
      expect: (result, assert) => assert(result === true),
      setup: () => new Map(),
      tests,
    },
    {
      name: 'isObjectLike => True (3)',
      expect: (result, assert) => assert(result === true),
      setup: () => [],
      tests,
    },
    {
      name: 'isObjectLike => True (4)',
      expect: (result, assert) => assert(result === true),
      setup: () => new Number(7), // eslint-disable-line no-new-wrappers
      tests,
    },
    {
      name: 'isObjectLike => False (1)',
      expect: (result, assert) => assert(result === false),
      setup: () => 'foobar',
      tests,
    },
    {
      name: 'isObjectLike => False (2)',
      expect: (result, assert) => assert(result === false),
      setup: () => 123,
      tests,
    },
    {
      name: 'isObjectLike => False (3)',
      expect: (result, assert) => assert(result === false),
      setup: () => null,
      tests,
    },
    {
      name: 'isObjectLike => False (4)',
      expect: (result, assert) => assert(result === false),
      setup: () => undefined,
      tests,
    },
  ];
};
