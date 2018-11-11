module.exports = ({ foldr, lodash, rambda }) => {
  const noop = () => {};

  const tests = {
    foldr: input => foldr.forEach(input, noop),
    lodash: input => lodash.forEach(input, noop),
    rambda: input => rambda.forEach(input, noop),
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
