module.exports = ({
  foldr,
  ramda,
  lodash,
}) => {
  const noop = f => f;
  const lDebounced = lodash.debounce(noop, 1000);
  const fDebounced = foldr.debounce(noop, 1000);

  const tests = {
    foldr: () => fDebounced(),
    lodash: () => lDebounced(),
  };

  return [
    {
      name: 'Debounces a function',
      expect: () => {}, // testing benchmark efficiency not output..
      setup: () => [1, 2, 2, 3, 4, 6, 6, 1],
      tests,
    },
  ];
};
