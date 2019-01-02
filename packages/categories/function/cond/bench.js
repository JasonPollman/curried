module.exports = ({
  foldr,
  ramda,
  lodash,
}) => {
  const tests = {
    foldr: input => foldr.cond(input)(1),
    lodash: input => lodash.cond(input)(1),
    ramda: input => ramda.cond(input)(1),
  };

  return [
    {
      name: 'Cond (Null)',
      expect: (result, assert) => assert(result === undefined),
      setup: () => null,
      tests,
    },
    {
      name: 'Cond (Basic)',
      expect: (result, assert) => assert(result === 'yep'),
      setup: () => [
        [() => false, () => 'nope'],
        [() => true, () => 'yep'],
      ],
      tests,
    },
    {
      name: 'Cond (Lots of Conditions)',
      expect: (result, assert) => assert(result === 'yep'),
      setup: () => [
        [() => false, () => 'nope'],
        [() => false, () => 'nope'],
        [() => false, () => 'nope'],
        [() => false, () => 'nope'],
        [() => false, () => 'nope'],
        [() => false, () => 'nope'],
        [() => false, () => 'nope'],
        [() => false, () => 'nope'],
        [() => false, () => 'nope'],
        [() => false, () => 'nope'],
        [() => false, () => 'nope'],
        [() => false, () => 'nope'],
        [() => false, () => 'nope'],
        [() => false, () => 'nope'],
        [() => true, () => 'yep'],
        [() => false, () => 'nope'],
        [() => false, () => 'nope'],
        [() => false, () => 'nope'],
        [() => false, () => 'nope'],
        [() => false, () => 'nope'],
        [() => false, () => 'nope'],
        [() => false, () => 'nope'],
        [() => false, () => 'nope'],
        [() => false, () => 'nope'],
        [() => false, () => 'nope'],
        [() => false, () => 'nope'],
        [() => false, () => 'nope'],
        [() => false, () => 'nope'],
        [() => false, () => 'nope'],
      ],
      tests,
    },
    {
      name: 'Cond (Identity)',
      expect: (result, assert) => assert(result === 1),
      setup: () => [
        [x => x, x => x],
        [() => false, () => 'nope'],
      ],
      tests,
    },
  ];
};
