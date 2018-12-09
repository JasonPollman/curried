module.exports = ({ fp, foldr }) => [
  {
    name: 'Gets A Property (Functional)',
    expect: (result, assert) => assert(result === 'bar'),
    setup: () => ({ foo: 'bar' }),
    tests: {
      foldr: input => foldr.getFx('foo', input),
      lodash: input => fp.get('foo', input),
    },
  },
  {
    name: 'Gets A Property (Functional, Nested)',
    expect: (result, assert) => assert(result === 1),
    setup: () => ({ foo: { bar: { baz: 1 } } }),
    tests: {
      foldr: input => foldr.getFx('foo.bar.baz', input),
      lodash: input => fp.get('foo.bar.baz', input),
    },
  },
  {
    name: 'Gets A Property (Nested, Complex, Functional)',
    expect: (result, assert) => assert(result === 'expected'),
    setup: () => ({ foo: { bar: { baz: [0, { quxx: [1, 2, { foo: 'expected' }] }] } } }),
    tests: {
      foldr: input => foldr.getFx('foo.bar.baz[1].quxx[2].foo', input),
      lodash: input => fp.get('foo.bar.baz[1].quxx[2].foo', input),
    },
  },
];
