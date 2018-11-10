module.exports = ({ foldr, lodash }) => {
  const tests = {
    foldr: input => foldr.isPlainObject(input),
    lodash: input => lodash.isPlainObject(input),
  };

  class Foo {}

  return [
    {
      name: 'isPlainObject => True (1)',
      expect: (result, assert) => assert(result === true),
      setup: () => ({}),
      tests,
    },
    {
      name: 'isPlainObject => True (2)',
      expect: (result, assert) => assert(result === true),
      setup: () => new Foo(),
      tests,
    },
    {
      name: 'isPlainObject => False (1)',
      expect: (result, assert) => assert(result === false),
      setup: () => 'foobar',
      tests,
    },
    {
      name: 'isPlainObject => False (2)',
      expect: (result, assert) => assert(result === false),
      setup: () => [],
      tests,
    },
    {
      name: 'isPlainObject => False (3)',
      expect: (result, assert) => assert(result === false),
      setup: () => null,
      tests,
    },
  ];
};
