module.exports = ({ foldr, lodash }) => [
  {
    name: 'Gets A Property',
    expect: (result, assert) => assert(result === 'bar'),
    setup: () => ({ foo: 'bar' }),
    tests: {
      foldr: input => foldr.get(input, 'foo'),
      lodash: input => lodash.get(input, 'foo'),
    },
  },
  {
    name: 'Gets A Property (Nested)',
    expect: (result, assert) => assert(result === 1),
    setup: () => ({ foo: { bar: { baz: 1 } } }),
    tests: {
      foldr: input => foldr.get(input, 'foo.bar.baz'),
      lodash: input => lodash.get(input, 'foo.bar.baz'),
    },
  },
  {
    name: 'Gets A Property (String, Found)',
    expect: (result, assert) => assert(result === 'o'),
    setup: () => 'foobar',
    tests: {
      foldr: input => foldr.get(input, 1),
      lodash: input => lodash.get(input, 1),
    },
  },
  {
    name: 'Gets A Property (String, Not Found)',
    expect: (result, assert) => assert(result === undefined),
    setup: () => 'foobar',
    tests: {
      foldr: input => foldr.get(input, '0.1.2'),
      lodash: input => lodash.get(input, '0.1.2'),
    },
  },
];
