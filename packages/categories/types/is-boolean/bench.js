module.exports = ({ foldr, lodash, ramda }) => {
  const tests = {
    foldr: input => foldr.isBoolean(input),
    ramda: input => ramda.is(Boolean)(input),
    lodash: input => lodash.isBoolean(input),
  };

  return [
    {
      name: 'isBoolean => True (1)',
      expect: (result, assert) => assert(result === true),
      setup: () => true,
      tests,
    },
    {
      name: 'isBoolean => True (2)',
      expect: (result, assert) => assert(result === true),
      setup: () => false,
      tests,
    },
    {
      name: 'isBoolean => False',
      expect: (result, assert) => assert(result === false),
      setup: () => 'foobar',
      tests,
    },
  ];
};
