module.exports = ({ foldr, lodash }) => {
  const tests = {
    foldr: x => foldr.size(x),
    lodash: x => lodash.size(x),
  };

  return [
    {
      name: 'Gets Size (1)',
      expect: (result, assert) => assert(result === 3),
      tests,
      setup: () => [1, 2, 3],
    },
    {
      name: 'Gets Size (2)',
      expect: (result, assert) => assert(result === 0),
      tests,
      setup: () => [],
    },
    {
      name: 'Gets Size (3)',
      expect: (result, assert) => assert(result === 0),
      tests,
      setup: () => null,
    },
    {
      name: 'Gets Size (4)',
      expect: (result, assert) => assert(result === 3),
      tests,
      setup: () => 'bar',
    },
    {
      name: 'Gets Size (5)',
      expect: (result, assert) => assert(result === 2),
      tests,
      setup: () => ({ foo: 'bar', baz: 'quxx' }),
    },
    {
      name: 'Gets Size (6)',
      expect: (result, assert) => assert(result === 2),
      tests,
      setup: () => new Map([[1, 2], [3, 4]]),
    },
  ];
};
