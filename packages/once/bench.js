module.exports = ({ foldr, lodash }) => {
  const double = x => x * 2;

  const fonce = foldr.once(double);
  const lonce = lodash.once(double);

  return [
    {
      name: 'Only Executes Once',
      expect: (result, { deepEqual }) => deepEqual(result, 10),
      tests: {
        foldr: () => fonce(5),
        lodash: () => lonce(5),
      },
    },
    {
      name: 'Once Function Creation',
      expect: (result, assert) => assert(typeof result === 'function'),
      setup: () => x => x * 2,
      tests: {
        foldr: input => foldr.once(input),
        lodash: input => lodash.once(input),
      },
    },
  ];
};
