module.exports = ({ foldr, lodash }) => {
  const tests = {
    foldr: input => foldr.isNil(input),
    lodash: input => lodash.isNil(input),
  };

  return [
    {
      name: 'isNil => True',
      expect: (result, assert) => assert(result === true),
      setup: () => null,
      tests,
    },
    {
      name: 'isNil => True',
      expect: (result, assert) => assert(result === true),
      setup: () => undefined,
      tests,
    },
    {
      name: 'isNil => False',
      expect: (result, assert) => assert(result === false),
      setup: () => 0,
      tests,
    },
  ];
};
