/**
 * Tests for the `filter` function.
 * @since 11/10/18
 * @file
 */

import filter from '.';

const filterOdd = x => x % 2 === 0;

describe('filter', () => {
  it('Should be a function', () => {
    expect(typeof filter).toBe('function');
  });

  it('Should filter an array', () => {
    expect(filter([1, 2, 3, 4], filterOdd)).toEqual([2, 4]);
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
});
