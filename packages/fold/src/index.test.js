/**
 * Tests for the `fold` function.
 * @since 11/10/18
 * @file
 */

import fold from '.';

const sum = (prev, curr) => prev + curr;

describe('fold', () => {
  it('Should be a function', () => {
    expect(typeof fold).toBe('function');
  });

  it('Should fold an array (1)', () => {
    expect(fold([1, 2, 3, 4], sum, 0)).toEqual(10);
  });

  it('Should fold an array (2)', () => {
    const arr = [1, 2, 3, 4];
    const keys = [];

    const reducer = (acc, val, key, array) => {
      expect(array).toBe(arr);
      keys.push(key);
      acc.push(val * 2);
      return acc;
    };

    expect(fold(arr, reducer, [])).toEqual([2, 4, 6, 8]);
    expect(keys).toEqual([0, 1, 2, 3]);
  });

  it('Should fold an object (1)', () => {
    const obj = { foo: 1, bar: 2 };
    expect(fold(obj, sum, 0)).toEqual(3);
  });

  it('Should fold an object (2)', () => {
    const obj = { foo: 1, bar: 2, baz: 3 };
    const keys = [];

    const reducer = (acc, val, key, collection) => {
      expect(collection).toBe(obj);
      keys.push(key);
      acc.push(val * 2);
      return acc;
    };

    expect(fold(obj, reducer, [])).toEqual([2, 4, 6]);
    expect(keys).toEqual(['foo', 'bar', 'baz']);
  });
});
