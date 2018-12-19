module.exports = ({ foldr, lodash }) => {
  const tests = {
    foldr: input => foldr.escapeRegExp(input),
    lodash: input => lodash.escapeRegExp(input),
  };

  return [
    {
      name: 'Escapes Regular Expressions (0)',
      expect: (result, assert) => assert(result === ''),
      setup: () => '',
      tests,
    },
    {
      name: 'Escapes Regular Expressions (1)',
      expect: (result, assert) => assert(result === 'foo\\$bar'),
      setup: () => 'foo$bar',
      tests,
    },
    {
      name: 'Escapes Regular Expressions (2)',
      expect: (result, assert) => assert(result === '\\^\\?\\(\\)!@#\\{\\}'),
      setup: () => '^?()!@#{}',
      tests,
    },
    {
      name: 'Escapes Regular Expressions (3)',
      expect: (result, assert) => assert(result === 'foobar'),
      setup: () => 'foobar',
      tests,
    },
    {
      name: 'Escapes Regular Expressions (4)',
      expect: (result, assert) => assert(result === `\\?\\?${'x'.repeat(1000)}\\?\\?`),
      setup: () => `??${'x'.repeat(1000)}??`,
      tests,
    },
  ];
};
