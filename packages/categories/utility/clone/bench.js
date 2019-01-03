module.exports = ({ foldr, lodash, ramda }) => {
  const tests = {
    foldr: x => foldr.clone(x),
    ramda: x => ramda.clone(x),
    lodash: x => lodash.clone(x),
  };

  return [
    {
      name: 'Clone (Null)',
      expect: (result, assert) => assert(result === null),
      setup: () => null,
      tests,
    },
    {
      name: 'Clone (Literal Value)',
      expect: (result, assert) => assert(result === 5),
      setup: () => 5,
      tests,
    },
    {
      name: 'Clone (Object)',
      expect: (result, { deepEqual }) => deepEqual(result, { foo: 'bar', baz: 'quxx' }),
      setup: () => ({ foo: 'bar', baz: 'quxx' }),
      tests,
    },
    {
      name: 'Clone (Array)',
      expect: (result, { deepEqual }) => deepEqual(result, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
      setup: () => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      tests,
    },
    {
      name: 'Clone (Array, Large)',
      expect: (result, { deepEqual }) => deepEqual(result, Array(10000).fill(1)),
      setup: () => Array(10000).fill(1),
      tests,
    },
  ];
};
