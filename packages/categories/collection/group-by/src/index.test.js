import groupBy from '.';

const isTwo = x => x === 2;

describe('groupBy', () => {
  it('Should be a function', () => {
    expect(typeof groupBy).toBe('function');
  });

  it('Should group an array', () => {
    expect(groupBy([1, 2, 3, 4], isTwo)).toEqual({
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

    expect(groupBy.call(context, [1, 2, 3], iteratee)).toEqual({
      x: [1, 2, 3],
    });
  });

  it('Should work with shorthand string iteratees', () => {
    expect(groupBy([{ x: 1 }, { x: 2 }], 'x')).toEqual({
      1: [{ x: 1 }],
      2: [{ x: 2 }],
    });
  });

  it('Should work with shorthand array iteratees', () => {
    expect(groupBy([{ value: 1 }, { value: 2 }, { value: 3 }], ['value', 2])).toEqual({
      true: [{ value: 2 }],
      false: [{ value: 1 }, { value: 3 }],
    });
  });

  it('Should pass the proper values to the iteratee function', () => {
    const arr = [1, 2, 3, 4];
    const copy = [1, 2, 3, 4];
    const keys = [0, 1, 2, 3];

    const fn = (value, key, collection) => {
      expect(collection).toBe(arr);
      expect(value).toBe(copy.shift());
      expect(key).toBe(keys.shift());
      return value;
    };

    const results = groupBy(arr, fn);
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

    expect(groupBy(things, { value: 2, name: 'c' })).toEqual({
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

    expect(groupBy(collection, isTwo)).toEqual({
      true: [2],
      false: [1, 3, 4],
    });
  });

  it('Should work for Map objects', () => {
    const collection = new Map([['a', 1], ['b', 2], ['c', 3]]);
    expect(groupBy(collection, isTwo)).toEqual({
      true: [2],
      false: [1, 3],
    });
  });

  it('Should work for Set objects', () => {
    const collection = new Set([1, 2, 3, 4, 2]);
    expect(groupBy(collection, isTwo)).toEqual({
      true: [2],
      false: [1, 3, 4],
    });
  });

  it('Should work for falsy values', () => {
    expect(groupBy(null, isTwo)).toEqual({});
    expect(groupBy(undefined, isTwo)).toEqual({});
    expect(groupBy('', isTwo)).toEqual({});
    expect(groupBy(0, isTwo)).toEqual({});
    expect(groupBy(false, isTwo)).toEqual({});
    expect(groupBy(true, isTwo)).toEqual({});
    expect(groupBy(Symbol('foo'), isTwo)).toEqual({});
    expect(groupBy(NaN, isTwo)).toEqual({});
  });
});
