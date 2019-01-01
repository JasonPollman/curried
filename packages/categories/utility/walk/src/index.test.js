import walk from '.';

describe('walk', () => {
  it('Should be a function', () => {
    expect(typeof walk).toBe('function');
  });

  it('Should walk an object and call `invokee` (shallow)', () => {
    const object = {
      x: 1,
      y: 2,
    };

    const expected = [
      [1, ['x']],
      [2, ['y']],
    ];

    let calls = 0;
    const invokee = (...args) => {
      calls++;
      expect(args).toEqual(expected.shift());
    };

    walk(object, invokee);
    expect(calls).toBe(2);
    expect(expected.length).toBe(0);
  });

  it('Should walk an object and call `invokee` (deep)', () => {
    const object = {
      x: 1,
      y: 2,
      a: {
        b: {
          c: {
            d: 7,
          },
        },
      },
    };

    const expected = [
      [1, ['x']],
      [2, ['y']],
      [7, ['a', 'b', 'c', 'd']],
    ];

    let calls = 0;
    const invokee = (...args) => {
      calls++;
      expect(args).toEqual(expected.shift());
    };

    walk(object, invokee);
    expect(calls).toBe(3);
    expect(expected.length).toBe(0);
  });

  it('Should walk an object and call `invokee` (with array)', () => {
    const object = {
      x: 1,
      y: 2,
      a: {
        b: {
          c: {
            d: 7,
          },
        },
      },
      p: {
        q: {
          w: [1, 2, 3],
          x: [4, 5, {
            z: 'foo',
          }],
        },
      },
    };

    const expected = [
      [1, ['x']],
      [2, ['y']],
      [7, ['a', 'b', 'c', 'd']],
      [1, ['p', 'q', 'w', '0']],
      [2, ['p', 'q', 'w', '1']],
      [3, ['p', 'q', 'w', '2']],
      [4, ['p', 'q', 'x', '0']],
      [5, ['p', 'q', 'x', '1']],
      ['foo', ['p', 'q', 'x', '2', 'z']],
    ];

    let calls = 0;
    const invokee = (...args) => {
      calls++;
      expect(args).toEqual(expected.shift());
    };

    walk(object, invokee);
    expect(calls).toBe(9);
    expect(expected.length).toBe(0);
  });

  it('Should walk an object and call `invokee` (with array 2)', () => {
    const object = [
      { foo: 1 },
      { bar: 0 },
    ];

    const expected = [
      [1, ['0', 'foo']],
      [0, ['1', 'bar']],
    ];

    let calls = 0;
    const invokee = (...args) => {
      calls++;
      expect(args).toEqual(expected.shift());
    };

    walk(object, invokee);
    expect(calls).toBe(2);
    expect(expected.length).toBe(0);
  });

  it('Should walk an object and call `invokee` (with string)', () => {
    const object = 'foobar';

    const expected = [
      ['f', ['0']],
      ['o', ['1']],
      ['o', ['2']],
      ['b', ['3']],
      ['a', ['4']],
      ['r', ['5']],
    ];

    let calls = 0;
    const invokee = (...args) => {
      calls++;
      expect(args).toEqual(expected.shift());
    };

    walk(object, invokee);
    expect(calls).toBe(6);
    expect(expected.length).toBe(0);
  });

  it('Should guard against bad/empty input', () => {
    let calls = 0;
    const invokee = () => { calls++; };

    walk(0, invokee);
    walk(-1, invokee);
    walk(Infinity, invokee);
    walk(NaN, invokee);
    walk(false, invokee);
    walk(true, invokee);
    walk('', invokee);
    walk({}, invokee);
    walk([], invokee);
    walk(() => {}, invokee);
    walk(Symbol('foo'), invokee);

    expect(calls).toBe(0);
  });

  it('Shouldn\'t run if not given a function invokee', () => {
    walk([1, 2, 3, 4]);
    walk([1, 2, 3, 4], {});
    walk([1, 2, 3, 4], '');
    walk([1, 2, 3, 4], 7);
  });
});
