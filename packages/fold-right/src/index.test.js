/**
 * Tests for the `foldRight` function.
 * @since 11/10/18
 * @file
 */

import foldRight, { f } from '.';

const sum = (prev, curr) => prev + curr;

describe('fold', () => {
  it('Should be a function', () => {
    expect(typeof foldRight).toBe('function');
  });

  it('Should fold an array (empty input)', () => {
    expect(foldRight(null, sum, 0)).toEqual(0);
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

  describe('foldRight.f', () => {
    it('Should be a function', () => {
      // eslint-disable-next-line import/no-named-as-default-member
      expect(typeof foldRight.f).toBe('function');
      expect(typeof f).toBe('function');
    });

    it('Should fold an array (empty input)', () => {
      expect(f(sum, 0)(null)).toEqual(0);
    });

    it('Should fold an array (1)', () => {
      expect(f(sum, 0)([1, 2, 3, 4])).toEqual(10);
    });

    it('Should fold an array (2)', () => {
      const arr = [1, 2, 3, 4];

      const reducer = (acc, val, key, array) => {
        expect(array).toBe(undefined);
        expect(key).toBe(undefined);
        acc.push(val * 2);
        return acc;
      };

      expect(f(reducer, [], arr)).toEqual([8, 6, 4, 2]);
    });

    it('Should fold an object (1)', () => {
      const obj = { foo: 1, bar: 2 };
      expect(f(sum)(0)(obj)).toEqual(3);
    });

    it('Should fold an object (2)', () => {
      const obj = { foo: 1, bar: 2, baz: 3 };

      const reducer = (acc, val, key, collection) => {
        expect(collection).toBe(undefined);
        expect(key).toBe(undefined);
        acc.push(val * 2);
        return acc;
      };

      expect(f(reducer, [], obj)).toEqual([6, 4, 2]);
    });
  });
});
