/**
 * Tests for the `every` function.
 * @since 11/10/18
 * @file
 */

import every from '.';

const isOdd = x => x % 2 !== 0;

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
});
