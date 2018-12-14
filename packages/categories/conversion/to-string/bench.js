module.exports = ({ foldr, lodash, ramda }) => {
  const tests = {
    foldr: input => foldr.toString(input),
    lodash: input => lodash.toString(input),
    ramda: input => ramda.toString(input),
  };

  return [
    {
      name: 'Converts to a String: String',
      expect: (result, assert) => assert(result === 'foobar'),
      setup: () => 'foobar',
      tests,
    },
    {
      name: 'Converts to a String: Object',
      expect: (result, assert) => assert(result === 'testing'),
      setup: () => ({
        value: 'testing',
        toString() {
          return this.value;
        },
      }),
      tests,
    },
    {
      name: 'Converts to a String: Array',
      expect: (result, assert) => assert(result === '1,2,3'),
      setup: () => [1, 2, 3],
      tests,
    },
    {
      name: 'Converts to a String: `null`',
      expect: (result, assert) => assert(result === ''),
      setup: () => null,
      tests,
    },
  ];
};
