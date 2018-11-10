module.exports = ({ foldr, lodash, rambda }) => {
  const tests = {
    foldr: input => foldr.isBuffer(input),
    rambda: input => rambda.is(Buffer)(input),
    lodash: input => lodash.isBuffer(input),
  };

  return [
    {
      name: 'isBuffer => True (1)',
      expect: (result, assert) => assert(result === true),
      setup: () => Buffer.from('foobar'),
      tests,
    },
    {
      name: 'isBuffer => True (2)',
      expect: (result, assert) => assert(result === true),
      setup: () => Buffer.from([1, 2, 3]),
      tests,
    },
    {
      name: 'isBuffer => False',
      expect: (result, assert) => assert(result === false),
      setup: () => 'foobar',
      tests,
    },
  ];
};
