module.exports = ({ foldr, lodash }) => {
  const tests = {
    foldr: input => foldr.isNaN(input),
    lodash: input => lodash.isNaN(input),
  };

  return [
    {
      name: 'isNaN => True',
      expect: (result, assert) => assert(result === true),
      setup: () => NaN,
      tests,
    },
    {
      name: 'isNaN => False',
      expect: (result, assert) => assert(result === false),
      setup: () => 0,
      tests,
    },
  ];
};
