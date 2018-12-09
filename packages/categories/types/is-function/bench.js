module.exports = ({ foldr, lodash, ramda }) => {
  const tests = {
    foldr: input => foldr.isFunction(input),
    ramda: input => ramda.is(Function)(input),
    lodash: input => lodash.isFunction(input),
  };

  return [
    {
      name: 'isFunction => True',
      expect: (result, assert) => assert(result === true),
      setup: () => () => {},
      tests,
    },
    {
      name: 'isFunction => False',
      expect: (result, assert) => assert(result === false),
      setup: () => 'foobar',
      tests,
    },
  ];
};
