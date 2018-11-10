module.exports = ({ foldr, lodash, rambda }) => {
  const tests = {
    foldr: input => foldr.isError(input),
    rambda: input => rambda.is(Error)(input),
    lodash: input => lodash.isError(input),
  };

  class ExtendedError extends Error {}

  return [
    {
      name: 'isError => True (1)',
      expect: (result, assert) => assert(result === true),
      setup: () => new Error('foo'),
      tests,
    },
    {
      name: 'isError => True (2)',
      expect: (result, assert) => assert(result === true),
      setup: () => new ExtendedError('foo'),
      tests,
    },
    {
      name: 'isError => False',
      expect: (result, assert) => assert(result === false),
      setup: () => 'foobar',
      tests,
    },
  ];
};
