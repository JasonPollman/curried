module.exports = ({ foldr, lodash, rambda }) => {
  const tests = {
    foldr: input => foldr.isArray(input),
    rambda: input => rambda.is(Array)(input),
    lodash: input => lodash.isArray(input),
  };

  return [
    {
      name: 'isArray => True',
      expect: (result, assert) => assert(result === true),
      setup: () => [],
      tests,
    },
    {
      name: 'isArray => False',
      expect: (result, assert) => assert(result === false),
      setup: () => false,
      tests,
    },
  ];
};
