module.exports = ({
  fp,
  foldr,
  ramda,
}) => {
  const tests = {
    foldr: ([array, n]) => foldr.nthFx(n)(array),
    lodash: ([array, n]) => fp.nth(n)(array),
    ramda: ([array, n]) => ramda.nth(n)(array),
  };

  return [
    {
      name: 'Gets Nth Value (0)',
      expect: (result, assert) => assert(result === 0),
      setup: () => [[0, 1, 2], 0],
      tests,
    },
    {
      name: 'Gets Nth Value (Bad Nth Value)',
      expect: (result, assert) => assert(result === undefined || result === 0 /* lodash */),
      setup: () => [[0, 1, 2], undefined],
      tests,
    },
    {
      name: 'Gets Nth Value (3)',
      expect: (result, assert) => assert(result === 3),
      setup: () => [[0, 1, 2, 3], 3],
      tests,
    },
    {
      name: 'Gets Nth Value (-1)',
      expect: (result, assert) => assert(result === 3),
      setup: () => [[0, 1, 2, 3], -1],
      tests,
    },
  ];
};
