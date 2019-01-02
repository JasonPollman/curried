import groupByFx from '.';

const isTwo = x => x === 2;

describe('groupByFx', () => {
  it('Should be a function', () => {
    expect(typeof groupByFx).toBe('function');
  });

  it('Should group an array', () => {
    expect(groupByFx(isTwo)([1, 2, 3, 4])).toEqual({
      true: [2],
      false: [1, 3, 4],
    });
  });

  it('Should work for capped functions', () => {
    const context = {
      capped: true,
    };

    function iteratee() {
      expect(arguments.length).toBe(1);
      return 'x';
    }

    expect(groupByFx.call(context, iteratee, [1, 2, 3])).toEqual({
      x: [1, 2, 3],
    });
  });

  it('Should work with shorthand string iteratees', () => {
    expect(groupByFx('x')([{ x: 1 }, { x: 2 }])).toEqual({
      1: [{ x: 1 }],
      2: [{ x: 2 }],
    });
  });

  it('Should work with shorthand array iteratees', () => {
    expect(groupByFx(['value', 2])([{ value: 1 }, { value: 2 }, { value: 3 }])).toEqual({
      true: [{ value: 2 }],
      false: [{ value: 1 }, { value: 3 }],
    });
  });

  it('Should pass the proper values to the iteratee function', () => {
    const arr = [1, 2, 3, 4];
    const copy = [1, 2, 3, 4];

    const fn = (value, key, collection) => {
      expect(collection).toBe(undefined);
      expect(value).toBe(copy.shift());
      expect(key).toBe(undefined);
      return value;
    };

    const results = groupByFx(fn)(arr);
    expect(results).toEqual({
      1: [1],
      2: [2],
      3: [3],
      4: [4],
    });
  });

  it('Should work with shorthand object iteratees', () => {
    const things = [
      { value: 1, name: 'a', foo: 'bar' },
      { value: 2, name: 'b', foo: 'bar' },
      { value: 2, name: 'c', foo: 'bar' },
      { value: 2, name: 'd', foo: 'bar' },
    ];

    expect(groupByFx({ value: 2, name: 'c' })(things)).toEqual({
      true: [
        { value: 2, name: 'c', foo: 'bar' },
      ],
      false: [
        { value: 1, name: 'a', foo: 'bar' },
        { value: 2, name: 'b', foo: 'bar' },
        { value: 2, name: 'd', foo: 'bar' },
      ],
    });
  });

  it('Should work for objects', () => {
    const collection = {
      foo: 1,
      bar: 2,
      baz: 3,
      quxx: 4,
    };

    expect(groupByFx(isTwo)(collection)).toEqual({
      true: [2],
      false: [1, 3, 4],
    });
  });

  it('Should work for Map objects', () => {
    const collection = new Map([['a', 1], ['b', 2], ['c', 3]]);
    expect(groupByFx(isTwo, collection)).toEqual({
      true: [2],
      false: [1, 3],
    });
  });

  it('Should work for Set objects', () => {
    const collection = new Set([1, 2, 3, 4, 2]);
    expect(groupByFx(isTwo, collection)).toEqual({
      true: [2],
      false: [1, 3, 4],
    });
  });

  it('Should work for falsy values', () => {
    expect(groupByFx(isTwo)(null)).toEqual({});
    expect(groupByFx(isTwo)(undefined)).toEqual({});
    expect(groupByFx(isTwo)('')).toEqual({});
    expect(groupByFx(isTwo)(0)).toEqual({});
    expect(groupByFx(isTwo)(false)).toEqual({});
    expect(groupByFx(isTwo)(true)).toEqual({});
    expect(groupByFx(isTwo)(Symbol('foo'))).toEqual({});
    expect(groupByFx(isTwo)(NaN)).toEqual({});
  });
});
