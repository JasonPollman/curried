module.exports = ({ foldr, lodash, ramda }) => {
  const tests = {
    foldr: s => foldr.toLowerCase(s),
    lodash: s => lodash.toLower(s),
    ramda: s => ramda.toLower(s),
  };

  return [
    {
      name: 'Lowercases A String (0)',
      expect: (result, assert) => assert(result === 'foobar'),
      setup: () => 'FoOBaR',
      tests,
    },
    {
      name: 'Lowercases A String (1)',
      expect: (result, assert) => assert(result === ''),
      setup: () => '',
      tests,
    },
    {
      name: 'Lowercases A String (2)',
      expect: (result, assert) => assert(result === ''),
      setup: () => null,
      tests,
    },
  ];
};
