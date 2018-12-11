module.exports = ({ foldr, lodash, ramda }) => {
  const tests = {
    foldr: ([x, y]) => foldr.includes(x, y),
    lodash: ([x, y]) => lodash.includes(x, y),
    ramda: ([x, y]) => ramda.includes(y, x),
  };

  const obj = {};

  return [
    {
      name: 'Includes (1)',
      expect: (result, assert) => assert(result === true),
      setup: () => [[1, 2, 3], 1],
      tests,
    },
    {
      name: 'Includes (2)',
      expect: (result, assert) => assert(result === true),
      setup: () => [[1, 2, 3], 2],
      tests,
    },
    {
      name: 'Includes (3)',
      expect: (result, assert) => assert(result === false),
      setup: () => [Array(500).fill(0), 2],
      tests,
    },
    {
      name: 'Includes (4)',
      expect: (result, assert) => assert(result === true),
      setup: () => [[1, 2, 3, 4, 5, obj, 6, 7, 8], obj],
      tests,
    },
    {
      name: 'Includes (String)',
      expect: (result, assert) => assert(result === true),
      setup: () => ['foobar', 'foo'],
      tests,
    },
    {
      name: 'Includes (String 2)',
      expect: (result, assert) => assert(result === false),
      setup: () => ['foobar', 'baz'],
      tests,
    },
    {
      name: 'Includes (Object)',
      expect: (result, assert) => assert(result === true),
      setup: () => [{ foo: 'bar', baz: 2, quxx: 3 }, 3],
      tests,
    },
    {
      name: 'Includes (Object, 4)',
      expect: (result, assert) => assert(result === false),
      setup: () => [{ foo: 'bar', baz: 2, quxx: 3 }, 4],
      tests,
    },
  ];
};
