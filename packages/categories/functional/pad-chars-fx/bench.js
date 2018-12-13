module.exports = ({ foldr, fp }) => {
  const tests = {
    foldr: ([x, y, z]) => foldr.padCharsFx(z)(y)(x),
    lodash: ([x, y, z]) => fp.padChars(z)(y)(x),
  };

  return [
    {
      name: 'Pads a String (0)',
      expect: (result, assert) => assert(result === ''),
      setup: () => ['', 0, ' '],
      tests,
    },
    {
      name: 'Pads a String (1)',
      expect: (result, assert) => assert(result === 'foobar'),
      setup: () => ['foobar', 0, '~~~'],
      tests,
    },
    {
      name: 'Pads a String (2)',
      expect: (result, assert) => assert(result === 'foobar'),
      setup: () => ['foobar', 6, '<>'],
      tests,
    },
    {
      name: 'Pads a String (3)',
      expect: (result, assert) => assert(result === 'foobar'),
      setup: () => ['foobar', -6, ' '],
      tests,
    },
    {
      name: 'Pads a String (4)',
      expect: (result, assert) => assert(result === 'foobar:'),
      setup: () => ['foobar', 7, ':'],
      tests,
    },
    {
      name: 'Pads a String (5)',
      expect: (result, assert) => assert(result === ':foobar:'),
      setup: () => ['foobar', 8, '::'],
      tests,
    },
    {
      name: 'Pads a String (6)',
      expect: (result, assert) => assert(result === `${'~'.repeat(50)}foobar${'~'.repeat(50)}`),
      setup: () => ['foobar', 106, '~'],
      tests,
    },
    {
      name: 'Pads a String (6)',
      expect: (result, assert) => assert(result === `${'++'.repeat(2500)}foobar${'++'.repeat(2500)}`),
      setup: () => ['foobar', 10006, '++'],
      tests,
    },
  ];
};
