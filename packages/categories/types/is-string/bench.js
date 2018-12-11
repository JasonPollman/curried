module.exports = ({ foldr, lodash, ramda }) => {
  const tests = {
    foldr: input => foldr.isString(input),
    lodash: input => lodash.isString(input),
    ramda: input => ramda.is(String, input),
  };

  return [
    {
      name: 'isString => True (1)',
      expect: (result, assert) => assert(result === true),
      setup: () => 'foobar',
      tests,
    },
    {
      name: 'isString => True (2)',
      expect: (result, assert) => assert(result === true),
      setup: () => '',
      tests,
    },
    {
      name: 'isString => True (3)',
      expect: (result, assert) => assert(result === true),
      setup: () => new String('foobar'), // eslint-disable-line no-new-wrappers
      tests,
    },
    {
      name: 'isString => False (1)',
      expect: (result, assert) => assert(result === false),
      setup: () => false,
      tests,
    },
    {
      name: 'isString => False (2)',
      expect: (result, assert) => assert(result === false),
      setup: () => [],
      tests,
    },
  ];
};
