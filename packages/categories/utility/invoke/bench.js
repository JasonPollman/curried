module.exports = ({ foldr, lodash }) => {
  const tests = {
    foldr: ([object, path, args]) => foldr.invoke(object, path, args),
    lodash: ([object, path, args]) => lodash.invoke(object, path, ...args),
  };

  return [
    {
      name: 'Invokes `fn`',
      expect: (result, assert) => assert(result === 'invoked!'),
      setup: () => [
        {
          foo: {
            bar: {
              baz() {
                return 'invoked!';
              },
            },
          },
        },
        'foo.bar.baz',
        [],
      ],
      tests,
    },
    {
      name: 'Invokes `fn` (Null)',
      expect: (result, assert) => assert(result === undefined),
      setup: () => [
        {
          foo: {
            bar: {
              baz: null,
            },
          },
        },
        'foo.bar.baz',
        [],
      ],
      tests,
    },
    {
      name: 'Invokes `fn` (Retains `this`)',
      expect: (result, { deepEqual }) => deepEqual(result, [1, 2, 3]),
      setup: () => [
        {
          foo: {
            bar: {
              baz: [1, 2, 3, 4],
            },
          },
        },
        'foo.bar.baz.slice',
        [0, 3],
      ],
      tests,
    },
  ];
};
