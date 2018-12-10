module.exports = ({
  fp,
  foldr,
  ramda,
}) => {
  const hasEven = x => x % 2 === 0;

  const tests = {
    foldr: input => foldr.someFx(hasEven, input),
    lodash: input => fp.some(hasEven, input),
    ramda: input => ramda.any(hasEven, input),
  };

  return [
    {
      name: 'Somes an Array (Functional)',
      expect: (result, assert) => assert(result === true),
      setup: () => [1, 2, 3],
      tests,
    },
    {
      name: 'Somes an Object (Functional)',
      expect: (result, assert) => assert(result === true),
      setup: () => ({ foo: 1, bar: 2, baz: 3 }),
      tests,
    },
  ];
};
