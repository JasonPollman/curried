module.exports = ({ foldr, lodash }) => [
  {
    name: 'Gets a random number (0)',
    expect: (result, assert) => assert(result === 0 || result === 1),
    tests: {
      foldr: () => foldr.random(),
      lodash: () => lodash.random(),
    }
  },
  {
    name: 'Gets a random number (1)',
    expect: (result, assert) => assert(result >= 0 || result <= 10),
    tests: {
      foldr: () => foldr.random(0, 10),
      lodash: () => lodash.random(0, 10),
    }
  },
  {
    name: 'Gets a random number (3)',
    expect: (result, assert) => assert(result >= 0 || result <= 10),
    tests: {
      foldr: () => foldr.random(10),
      lodash: () => lodash.random(10),
    }
  },
  {
    name: 'Gets a random number (4)',
    expect: (result, assert) => assert(result >= -10 || result <= 10),
    tests: {
      foldr: () => foldr.random(-10, 10),
      lodash: () => lodash.random(-10, 10),
    }
  },
  {
    name: 'Gets a random number (5)',
    expect: (result, assert) => assert(result === 10),
    tests: {
      foldr: () => foldr.random(10, 10),
      lodash: () => lodash.random(10, 10),
    }
  },
  {
    name: 'Gets a random number (6)',
    expect: (result, assert) => assert(result >= 10 || result <= 11),
    tests: {
      foldr: () => foldr.random(10, 11, true),
      lodash: () => lodash.random(10, 11, true),
    }
  },
];
