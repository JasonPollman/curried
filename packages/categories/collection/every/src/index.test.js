import every from '.';

const isOdd = x => x % 2 !== 0;
const isEven = x => x % 2 === 0;

describe('every', () => {
  it('Should be a function', () => {
    expect(typeof every).toBe('function');
  });

  it('Should ensure all elements pass the given predicate', () => {
    expect(every([1, 3, 5, 7], isOdd)).toEqual(true);
    expect(every([1], isOdd)).toEqual(true);
    expect(every([1, 2, 3, 4, 5, 6], isOdd)).toEqual(false);
    expect(every([2, 4, 6], isOdd)).toEqual(false);
    expect(every([], isOdd)).toEqual(true);
  });

  it('Should pass the proper values to the iteratee function', () => {
    const arr = [1, 2, 3, 4];
    const copy = [1, 2, 3, 4];
    const keys = [0, 1, 2, 3];

    const fn = (value, key, collection) => {
      expect(collection).toBe(arr);
      expect(value).toBe(copy.shift());
      expect(key).toBe(keys.shift());
      return true;
    };

    const results = every(arr, fn);
    expect(results).toBe(true);
  });

  it('Should work for objects', () => {
    const collection = {
      foo: 1,
      bar: 2,
      baz: 3,
      quxx: 4,
    };

    expect(every(collection, isOdd)).toEqual(false);
    expect(every({ foo: 0, bar: 1 }, isOdd)).toEqual(false);
    expect(every({ foo: 1 }, isOdd)).toEqual(true);
    expect(every({}, isOdd)).toEqual(true);
  });

  it('Should work for falsy values', () => {
    expect(every(null, isOdd)).toEqual(true);
    expect(every(undefined, isOdd)).toEqual(true);
    expect(every('', isOdd)).toEqual(true);
    expect(every(0, isOdd)).toEqual(true);
    expect(every(false, isOdd)).toEqual(true);
    expect(every(NaN, isOdd)).toEqual(true);
  });

  it('Should work for Map objects (false)', () => {
    const collection = new Map([['a', 1], ['b', 2], ['c', 3]]);
    expect(every(collection, isOdd)).toEqual(false);
  });

  it('Should work for Set objects (false)', () => {
    const collection = new Set([1, 2, 3, 4, 2]);
    expect(every(collection, isOdd)).toEqual(false);
  });

  it('Should work for Map objects (true)', () => {
    const collection = new Map([['a', 2], ['b', 2], ['c', 18]]);
    expect(every(collection, isEven)).toEqual(true);
  });

  it('Should work for Set objects (true)', () => {
    const collection = new Set([6, 8, 0, 2, 4, 6]);
    expect(every(collection, isEven)).toEqual(true);
  });
});
