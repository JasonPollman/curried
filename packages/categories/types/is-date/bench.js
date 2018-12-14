module.exports = ({ foldr, lodash, ramda }) => {
  const tests = {
    foldr: input => foldr.isDate(input),
    ramda: input => ramda.is(Date)(input),
    lodash: input => lodash.isDate(input),
  };

  return [
    {
      name: 'isDate => True (1)',
      expect: (result, assert) => assert(result === true),
      setup: () => new Date(),
      tests,
    },
    {
      name: 'isDate => True (2)',
      expect: (result, assert) => assert(result === true),
      setup: () => new Date(0),
      tests,
    },
    {
      name: 'isDate => False',
      expect: (result, assert) => assert(result === false),
      setup: () => 'foobar',
      tests,
    },
  ];
};
