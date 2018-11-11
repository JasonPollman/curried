module.exports = ({ foldr, lodash }) => {
  const noop = () => {};

  const tests = {
    foldr: input => foldr.forEachRight(input, noop),
    lodash: input => lodash.forEachRight(input, noop),
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
