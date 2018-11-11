/**
 * Tests for the `foldRight` function.
 * @since 11/10/18
 * @file
 */

import foldRight from '.';

const sum = (prev, curr) => prev + curr;

describe('fold', () => {
  it('Should be a function', () => {
    expect(typeof foldRight).toBe('function');
  });

  it('Should fold an array (1)', () => {
    expect(foldRight([1, 2, 3, 4], sum, 0)).toEqual(10);
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

    expect(foldRight(arr, reducer, [])).toEqual([8, 6, 4, 2]);
    expect(keys).toEqual([3, 2, 1, 0]);
  });

  it('Should fold an object (1)', () => {
    const obj = { foo: 1, bar: 2 };
    expect(foldRight(obj, sum, 0)).toEqual(3);
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

    expect(foldRight(obj, reducer, [])).toEqual([6, 4, 2]);
    expect(keys).toEqual(['baz', 'bar', 'foo']);
  });
});
