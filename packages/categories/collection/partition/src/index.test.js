import partition from '.';

const isEven = x => x % 2 === 0;

describe('partition', () => {
  it('Should be a function', () => {
    expect(typeof partition).toBe('function');
  });

  it('Should work for capped functions', () => {
    const context = {
      capped: true,
    };

    function iteratee() {
      expect(arguments.length).toBe(1);
      return true;
    }

    expect(partition.call(context, [1, 2, 3], iteratee)).toEqual([[1, 2, 3], []]);
  });

  it('Should partition an array', () => {
    expect(partition([1, 2, 3, 4], isEven)).toEqual([[2, 4], [1, 3]]);
  });

  it('Should pass the proper values to the iteratee function', () => {
    const arr = [1, 2, 3, 4];
    const copy = [1, 2, 3, 4];
    const keys = [0, 1, 2, 3];

    const fn = (value, key, collection) => {
      expect(collection).toBe(arr);
      expect(value).toBe(copy.shift());
      expect(key).toBe(keys.shift());
      return value % 2 === 0;
    };

    const results = partition(arr, fn);
    expect(results).toEqual([[2, 4], [1, 3]]);
    expect(results).not.toBe(arr);
  });

  it('Should work for objects', () => {
    const collection = {
      foo: 1,
      bar: 2,
      baz: 3,
      quxx: 4,
    };

    expect(partition(collection, isEven)).toEqual([[2, 4], [1, 3]]);
  });

  it('Should work for falsy values', () => {
    expect(partition(null, isEven)).toEqual([[], []]);
    expect(partition(undefined, isEven)).toEqual([[], []]);
    expect(partition('', isEven)).toEqual([[], []]);
    expect(partition(0, isEven)).toEqual([[], []]);
    expect(partition(false, isEven)).toEqual([[], []]);
    expect(partition(NaN, isEven)).toEqual([[], []]);
  });

  it('Should work for Map objects', () => {
    const collection = new Map([['a', 1], ['b', 2], ['c', 3]]);
    expect(partition(collection, isEven)).toEqual([[2], [1, 3]]);
  });

  it('Should work for Set objects', () => {
    const collection = new Set([1, 2, 3, 4, 2]);
    expect(partition(collection, isEven)).toEqual([[2, 4], [1, 3]]);
  });
});
