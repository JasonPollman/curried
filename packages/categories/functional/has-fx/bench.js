module.exports = ({ foldr, fp }) => {
  const tests = {
    foldr: ([x, y]) => foldr.hasFx(y)(x),
    lodash: ([x, y]) => fp.has(y)(x),
  };

  return [
    {
      name: 'Object Has Property (Functional, True)',
      expect: (result, assert) => assert(result === true),
      setup: () => [{ foo: 'bar' }, 'foo'],
      tests,
    },
    {
      name: 'Object Has Property (Functional, False)',
      expect: (result, assert) => assert(result === false),
      setup: () => [{ foo: 'bar' }, 'baz'],
      tests,
    },
  ];
};
