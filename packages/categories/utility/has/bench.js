module.exports = ({ foldr, lodash }) => {
  const tests = {
    foldr: ([x, y]) => foldr.has(x, y),
    lodash: ([x, y]) => lodash.has(x, y),
  };

  return [
    {
      name: 'Object Has Property (True)',
      expect: (result, assert) => assert(result === true),
      setup: () => [{ foo: 'bar' }, 'foo'],
      tests,
    },
    {
      name: 'Object Has Property (False)',
      expect: (result, assert) => assert(result === false),
      setup: () => [{ foo: 'bar' }, 'baz'],
      tests,
    },
  ];
};
