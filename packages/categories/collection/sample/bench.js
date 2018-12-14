module.exports = ({ foldr, lodash }) => {
  const tests = {
    foldr: x => foldr.sample(x),
    lodash: x => lodash.sample(x),
  };

  return [
    {
      name: 'Samples An Array',
      expect: (result, assert) => assert(result > 0 && result < 5),
      setup: () => [1, 2, 3, 4],
      tests,
    },
    {
      name: 'Samples An Array (Empty)',
      expect: (result, assert) => assert(result === undefined),
      setup: () => [],
      tests,
    },
    {
      name: 'Samples An Array (Null)',
      expect: (result, assert) => assert(result === undefined),
      setup: () => null,
      tests,
    },
    {
      name: 'Samples An Object',
      expect: (result, assert) => assert(result > 0 && result < 5),
      setup: () => ({
        a: 1,
        b: 2,
        c: 3,
        d: 4,
      }),
      tests,
    },
  ];
};
