module.exports = ({ foldr, lodash }) => {
  const tests = {
    foldr: x => foldr.toKebabCase(x),
    lodash: x => lodash.kebabCase(x),
  };

  return [
    {
      name: 'Converts a String to KebabCase (1)',
      expect: (result, assert) => assert(result === 'foo-bar'),
      setup: () => 'foo bar',
      tests,
    },
    {
      name: 'Converts a String to KebabCase (2)',
      expect: (result, assert) => assert(result === 'foo-bar'),
      setup: () => 'fooBar',
      tests,
    },
    {
      name: 'Converts a String to KebabCase (3)',
      expect: (result, assert) => assert(result === 'foo-bar'),
      setup: () => '?  foo_bar  ?',
      tests,
    },
  ];
};
