/**
 * Tests for the `fold` function.
 * @since 11/10/18
 * @file
 */

import fold, { f } from '.';

const sum = (prev, curr) => prev + curr;

describe('fold', () => {
  it('Should be a function', () => {
    expect(typeof fold).toBe('function');
  });

  it('Should fold an array (empty input)', () => {
    expect(fold(null, sum, 0)).toEqual(0);
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

  describe('fold.f', () => {
    it('Should be a function', () => {
      // eslint-disable-next-line import/no-named-as-default-member
      expect(typeof fold.f).toBe('function');
      expect(typeof f).toBe('function');
    });

    it('Should fold an array (empty input)', () => {
      expect(f(sum, 0, null)).toEqual(0);
      expect(f(sum)(0)(null)).toEqual(0);
    });

    it('Should fold an array (1)', () => {
      expect(f(sum)(0)([1, 2, 3, 4])).toEqual(10);
    });

    it('Should fold an array (2)', () => {
      const arr = [1, 2, 3, 4];

      const reducer = (acc, val, key, array) => {
        expect(key).toBe(undefined);
        expect(array).toBe(undefined);
        acc.push(val * 2);
        return acc;
      };

      expect(f(reducer, [])(arr)).toEqual([2, 4, 6, 8]);
    });

    it('Should fold an object (1)', () => {
      const obj = { foo: 1, bar: 2 };
      expect(f(sum, 0)(obj)).toEqual(3);
    });

    it('Should fold an object (2)', () => {
      const obj = { foo: 1, bar: 2, baz: 3 };

      const reducer = (acc, val) => {
        acc.push(val * 2);
        return acc;
      };

      expect(f(reducer, [])(obj)).toEqual([2, 4, 6]);
    });
  });
});
