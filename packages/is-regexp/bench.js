module.exports = ({ foldr, lodash, ramda }) => {
  const tests = {
    foldr: input => foldr.isRegExp(input),
    ramda: input => ramda.is(RegExp)(input),
    lodash: input => lodash.isRegExp(input),
  };

  class Extended extends RegExp {}

  return [
    {
      name: 'isRegExp => True (1)',
      expect: (result, assert) => assert(result === true),
      setup: () => /foobar/,
      tests,
    },
    {
      name: 'isRegExp => True (2)',
      expect: (result, assert) => assert(result === true),
      setup: () => new RegExp('foobar'),
      tests,
    },
    {
      name: 'isRegExp => True (3)',
      expect: (result, assert) => assert(result === true),
      setup: () => new Extended('foobar'),
      tests,
    },
    {
      name: 'isRegExp => False (1)',
      expect: (result, assert) => assert(result === false),
      setup: () => 'foobar',
      tests,
    },
    {
      name: 'isRegExp => False',
      expect: (result, assert) => assert(result === false),
      setup: () => '^.*$',
      tests,
    },
  ];
};
