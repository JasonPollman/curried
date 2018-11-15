module.exports = ({ foldr, lodash, ramda }) => {
  const object = {};

  return [
    {
      name: 'Creates a Constant Function (1)',
      expect: (result, assert) => assert(result() === 1),
      tests: {
        foldr: () => foldr.constant(1),
        lodash: () => lodash.constant(1),
        ramda: () => ramda.always(1),
      },
    },
    {
      name: 'Creates a Constant Function (2)',
      expect: (result, assert) => assert(result('x') === null),
      tests: {
        foldr: () => foldr.constant(null),
        lodash: () => lodash.constant(null),
        ramda: () => ramda.always(null),
      },
    },
    {
      name: 'Creates a Constant Function (3)',
      expect: (result, assert) => assert(result('x') === object),
      tests: {
        foldr: () => foldr.constant(object),
        lodash: () => lodash.constant(object),
        ramda: () => ramda.always(object),
      },
    },
  ];
};
