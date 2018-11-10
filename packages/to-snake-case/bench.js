module.exports = ({ foldr, lodash }) => {
  const tests = {
    foldr: x => foldr.toSnakeCase(x),
    lodash: x => lodash.snakeCase(x),
  };

  return [
    {
      name: 'Converts a String to SnakeCase (1)',
      expect: (result, assert) => assert(result === 'foo_bar'),
      setup: () => 'foo bar',
      tests,
    },
    {
      name: 'Converts a String to SnakeCase (2)',
      expect: (result, assert) => assert(result === 'foo_bar'),
      setup: () => 'fooBar',
      tests,
    },
    {
      name: 'Converts a String to SnakeCase (3)',
      expect: (result, assert) => assert(result === 'foo_bar'),
      setup: () => '?  foo-bar  ?',
      tests,
    },
  ];
};
