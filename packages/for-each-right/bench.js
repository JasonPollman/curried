module.exports = ({ foldr, lodash }) => {
  const plus2 = x => x + 2;

  const tests = {
    foldr: input => foldr.forEachRight(input, plus2),
    lodash: input => lodash.forEachRight(input, plus2),
  };

  return [
    {
      name: 'Iterates over each item (Array)',
      setup: () => [1, 2, 3],
      tests,
    },
    {
      name: 'Iterates over each item (String)',
      setup: () => 'aaaaaaaaaaaaaaaaaaaaaaaaa',
      tests,
    },
    {
      name: 'Iterates over each item (Object)',
      setup: () => ({ foo: 1, bar: 2, baz: 3 }),
      tests,
    },
    {
      name: 'Iterates over each item (Falsy)',
      setup: () => null,
      tests,
    },
  ];
};
