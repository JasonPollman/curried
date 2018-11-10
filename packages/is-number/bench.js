module.exports = ({ foldr, lodash, rambda }) => {
  const tests = {
    foldr: input => foldr.isNumber(input),
    rambda: input => rambda.is(Number)(input),
    lodash: input => lodash.isNumber(input),
  };

  return [
    {
      name: 'isNumber => True (1)',
      expect: (result, assert) => assert(result === true),
      setup: () => 1,
      tests,
    },
    {
      name: 'isNumber => True (2)',
      expect: (result, assert) => assert(result === true),
      setup: () => -1,
      tests,
    },
    {
      name: 'isNumber => True (3)',
      expect: (result, assert) => assert(result === true),
      setup: () => 0,
      tests,
    },
    {
      name: 'isNumber => True (4)',
      expect: (result, assert) => assert(result === true),
      setup: () => new Number(7), // eslint-disable-line no-new-wrappers
      tests,
    },
    {
      name: 'isNumber => False (1)',
      expect: (result, assert) => assert(result === false),
      setup: () => 'foobar',
      tests,
    },
    {
      name: 'isNumber => False (2)',
      expect: (result, assert) => assert(result === false),
      setup: () => '0',
      tests,
    },
    {
      name: 'isNumber => False (3)',
      expect: (result, assert) => assert(result === false),
      setup: () => '1',
      tests,
    },
    {
      name: 'isNumber => False (4)',
      expect: (result, assert) => assert(result === false),
      setup: () => {},
      tests,
    },
  ];
};
