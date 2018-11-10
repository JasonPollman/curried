module.exports = ({ foldr, lodash }) => {
  const tests = {
    foldr: input => foldr.isUndefined(input),
    lodash: input => lodash.isUndefined(input),
  };

  return [
    {
      name: 'isUndefined => True',
      expect: (result, assert) => assert(result === true),
      setup: () => undefined,
      tests,
    },
    {
      name: 'isUndefined => False',
      expect: (result, assert) => assert(result === false),
      setup: () => null,
      tests,
    },
  ];
};
