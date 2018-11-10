module.exports = ({ foldr, lodash }) => {
  const tests = {
    foldr: input => foldr.isNull(input),
    lodash: input => lodash.isNull(input),
  };

  return [
    {
      name: 'isNull => True',
      expect: (result, assert) => assert(result === true),
      setup: () => null,
      tests,
    },
    {
      name: 'isNull => False',
      expect: (result, assert) => assert(result === false),
      setup: () => undefined,
      tests,
    },
  ];
};
