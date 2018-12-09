module.exports = ({ foldr, lodash }) => {
  const tests = {
    foldr: x => foldr.toCamelCase(x),
    lodash: x => lodash.camelCase(x),
  };

  return [
    {
      name: 'Converts a String to CamelCase (1)',
      expect: (result, assert) => assert(result === 'fooBar'),
      setup: () => 'foo bar',
      tests,
    },
    {
      name: 'Converts a String to CamelCase (2)',
      expect: (result, assert) => assert(result === 'fooBar'),
      setup: () => 'foo-bar',
      tests,
    },
    {
      name: 'Converts a String to CamelCase (3)',
      expect: (result, assert) => assert(result === 'fooBar'),
      setup: () => '?  foo_bar  ?',
      tests,
    },
  ];
};
