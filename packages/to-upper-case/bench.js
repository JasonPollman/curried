module.exports = ({ foldr, lodash, rambda }) => {
  const tests = {
    foldr: s => foldr.toUpperCase(s),
    lodash: s => lodash.toUpper(s),
    rambda: s => rambda.toUpper(s),
  };

  return [
    {
      name: 'Uppercases A String (0)',
      expect: (result, assert) => assert(result === 'FOOBAR'),
      setup: () => 'FoOBaR',
      tests,
    },
    {
      name: 'Uppercases A String (1)',
      expect: (result, assert) => assert(result === ''),
      setup: () => '',
      tests,
    },
    {
      name: 'Uppercases A String (2)',
      expect: (result, assert) => assert(result === ''),
      setup: () => null,
      tests,
    },
  ];
};
