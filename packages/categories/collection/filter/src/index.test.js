import filter from '.';

const filterOdd = x => x % 2 === 0;

describe('filter', () => {
  it('Should be a function', () => {
    expect(typeof filter).toBe('function');
  });

  it('Should work for capped functions', () => {
    const context = {
      capped: true,
    };

    function iteratee() {
      expect(arguments.length).toBe(1);
      return true;
    }

    expect(filter.call(context, [1, 2, 3], iteratee)).toEqual([1, 2, 3]);
  });

  it('Should filter an array', () => {
    expect(filter([1, 2, 3, 4], filterOdd)).toEqual([2, 4]);
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

    const results = filter(arr, fn);
    expect(results).toEqual([1, 2, 3, 4]);
    expect(results).not.toBe(arr);
  });

  it('Should work for objects', () => {
    const collection = {
      foo: 1,
      bar: 2,
      baz: 3,
      quxx: 4,
    };

    expect(filter(collection, filterOdd)).toEqual([2, 4]);
  });

  it('Should work for falsy values', () => {
    expect(filter(null, filterOdd)).toEqual([]);
    expect(filter(undefined, filterOdd)).toEqual([]);
    expect(filter('', filterOdd)).toEqual([]);
    expect(filter(0, filterOdd)).toEqual([]);
    expect(filter(false, filterOdd)).toEqual([]);
    expect(filter(NaN, filterOdd)).toEqual([]);
  });

  it('Should work for Map objects', () => {
    const collection = new Map([['a', 1], ['b', 2], ['c', 3]]);
    expect(filter(collection, filterOdd)).toEqual([2]);
  });

  it('Should work for Set objects', () => {
    const collection = new Set([1, 2, 3, 4, 2]);
    expect(filter(collection, filterOdd)).toEqual([2, 4]);
  });
});
