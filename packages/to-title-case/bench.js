module.exports = ({ foldr, lodash }) => {
  const tests = {
    foldr: s => foldr.toTitleCase(s),
    lodash: s => lodash.startCase(s),
  };

  return [
    {
      name: 'Title-Cases A String (1)',
      expect: (result, assert) => assert(result === 'Foo Bar'),
      setup: () => 'FooBar',
      tests,
    },
    {
      name: 'Title-Cases A String (2)',
      expect: (result, assert) => assert(result === 'Foo Bar'),
      setup: () => 'foo bar',
      tests,
    },
    {
      name: 'Title-Cases A String (3)',
      expect: (result, assert) => assert(result === ''),
      setup: () => '',
      tests,
    },
    {
      name: 'Title-Cases A String (4)',
      expect: (result, assert) => assert(result === ''),
      setup: () => null,
      tests,
    },
  ];
};
