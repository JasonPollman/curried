import findKey from '.';

const isTwo = x => x === 2;

describe('findKey', () => {
  it('Should be a function', () => {
    expect(typeof findKey).toBe('function');
  });

  it('Should findKey within an array', () => {
    expect(findKey([1, 2, 3, 4], isTwo)).toEqual(1);
  });

  it('Should work with shorthand string iteratees', () => {
    expect(findKey([{ x: true }, { x: false }], 'x')).toEqual(0);
  });

  it('Should work for capped functions', () => {
    const context = {
      capped: true,
    };

    function iteratee() {
      expect(arguments.length).toBe(1);
      return true;
    }

    expect(findKey.call(context, [1, 2, 3], iteratee)).toEqual(0);
  });

  it('Should work with shorthand array iteratees', () => {
    expect(findKey([{ value: 1 }, { value: 2 }, { value: 3 }], ['value', 2])).toEqual(1);
  });

  it('Should pass the proper values to the iteratee function', () => {
    const arr = [1, 2, 3, 4];
    const copy = [1, 2, 3, 4];
    const keys = [0, 1, 2, 3];

    const fn = (value, key, collection) => {
      expect(collection).toBe(arr);
      expect(value).toBe(copy.shift());
      expect(key).toBe(keys.shift());
      return value === 4;
    };

    const results = findKey(arr, fn);
    expect(results).toBe(3);
  });

  it('Should work with shorthand object iteratees', () => {
    const things = [
      { value: 1, name: 'a', foo: 'bar' },
      { value: 2, name: 'b', foo: 'bar' },
      { value: 2, name: 'c', foo: 'bar' },
      { value: 2, name: 'd', foo: 'bar' },
    ];

    expect(findKey(things, { value: 2, name: 'c' })).toEqual(2);
  });

  it('Should work for objects', () => {
    const collection = {
      foo: 1,
      bar: 2,
      baz: 3,
      quxx: 4,
    };

    expect(findKey(collection, isTwo)).toBe('bar');
  });

  it('Should work for Map objects', () => {
    const collection = new Map([['a', 1], ['b', 2], ['c', 3]]);
    expect(findKey(collection, isTwo)).toBe('b');
  });

  it('Should work for Set objects', () => {
    const collection = new Set([1, 2, 3, 4, 2]);
    expect(findKey(collection, isTwo)).toBe(1);
  });

  it('Should work for falsy values', () => {
    expect(findKey(null, isTwo)).toBe(undefined);
    expect(findKey(undefined, isTwo)).toBe(undefined);
    expect(findKey('', isTwo)).toBe(undefined);
    expect(findKey(0, isTwo)).toBe(undefined);
    expect(findKey(false, isTwo)).toBe(undefined);
    expect(findKey(NaN, isTwo)).toBe(undefined);
  });
});
