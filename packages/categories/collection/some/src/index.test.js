import some from '.';

const isOdd = x => x % 2 !== 0;

describe('some', () => {
  it('Should be a function', () => {
    expect(typeof some).toBe('function');
  });

  it('Should work for capped functions', () => {
    const context = {
      capped: true,
    };

    function iteratee() {
      expect(arguments.length).toBe(1);
      return true;
    }

    expect(some.call(context, [1, 2, 3], iteratee)).toEqual(true);
  });

  it('Should some an array', () => {
    expect(some([1, 2, 3, 4], isOdd)).toEqual(true);
    expect(some([1], isOdd)).toEqual(true);
    expect(some([1, 3, 5, 7, 9], isOdd)).toEqual(true);
    expect(some([2, 4, 6], isOdd)).toEqual(false);
    expect(some([], isOdd)).toEqual(false);
  });

  it('Should work for objects', () => {
    const collection = {
      foo: 1,
      bar: 2,
      baz: 3,
      quxx: 4,
    };

    expect(some(collection, isOdd)).toEqual(true);
    expect(some({ foo: 0 }, isOdd)).toEqual(false);
    expect(some({ foo: 1 }, isOdd)).toEqual(true);
  });

  it('Should work for falsy values', () => {
    expect(some(null, isOdd)).toEqual(false);
    expect(some(undefined, isOdd)).toEqual(false);
    expect(some('', isOdd)).toEqual(false);
    expect(some(0, isOdd)).toEqual(false);
    expect(some(false, isOdd)).toEqual(false);
    expect(some(NaN, isOdd)).toEqual(false);
  });

  it('Should pass the proper values to the iteratee function', () => {
    const arr = [1, 2, 3, 4];
    const copy = [1, 2, 3, 4];
    const keys = [0, 1, 2, 3];

    const fn = (value, key, collection) => {
      expect(collection).toBe(arr);
      expect(value).toBe(copy.shift());
      expect(key).toBe(keys.shift());
      return false;
    };

    const results = some(arr, fn);
    expect(results).toEqual(false);
  });
});
