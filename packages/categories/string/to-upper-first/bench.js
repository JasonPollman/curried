module.exports = ({ foldr, lodash }) => {
  const tests = {
    foldr: s => foldr.toUpperFirst(s),
    lodash: s => lodash.upperFirst(s),
  };

  return [
    {
      name: 'Capitalizes A String (1)',
      expect: (result, assert) => assert(result === 'FooBar'),
      setup: () => 'FooBar',
      tests,
    },
    {
      name: 'Capitalizes A String (2)',
      expect: (result, assert) => assert(result === 'Foo bar'),
      setup: () => 'foo bar',
      tests,
    },
    {
      name: 'Capitalizes A String (3)',
      expect: (result, assert) => assert(result === ''),
      setup: () => '',
      tests,
    },
    {
      name: 'Capitalizes A String (4)',
      expect: (result, assert) => assert(result === ''),
      setup: () => null,
      tests,
    },
  ];
};
