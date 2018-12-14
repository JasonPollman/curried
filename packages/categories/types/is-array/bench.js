module.exports = ({ foldr, lodash, ramda }) => {
  const tests = {
    foldr: input => foldr.isArray(input),
    ramda: input => ramda.is(Array)(input),
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
