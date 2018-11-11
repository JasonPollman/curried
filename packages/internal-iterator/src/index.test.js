/**
 * Tests for the `internal-iterator` file.
 * @since 11/10/18
 * @file
 */

import IteratorFactory, { BREAK } from '.';

describe('internal-env', () => {
  it('Should be a function', () => {
    expect(typeof IteratorFactory).toBe('function');
  });

  it('Should create an iterator function', () => {
    expect(typeof IteratorFactory({})).toBe('function');
  });

  it('Should return a instance of the ResultsConstructor if given a falsy collection', () => {
    const options = {
      ResultsConstructor: Array,
      iterateeHandler: (results, iteratee, i, value) => {
        results.push(iteratee(value));
      },
    };

    expect(IteratorFactory(options)(null, x => x * 2)).toEqual([]);
    expect(IteratorFactory(options)(0, x => x * 2)).toEqual([]);
    expect(IteratorFactory(options)(undefined, x => x * 2)).toEqual([]);
    expect(IteratorFactory(options)(NaN, x => x * 2)).toEqual([]);
  });

  it('Should return a instance of the ResultsConstructor if given a non-function iterator', () => {
    const options = {
      ResultsConstructor: Array,
      iterateeHandler: (results, iteratee, i, value) => {
        results.push(iteratee(value));
      },
    };

    expect(IteratorFactory(options)([1, 2, 3])).toEqual([]);
    expect(IteratorFactory(options)([1, 2, 3], '')).toEqual([]);
    expect(IteratorFactory(options)([1, 2, 3], {})).toEqual([]);
  });

  it('Should create an iterator function (array)', () => {
    const array = [1, 2, 3];

    const options = {
      ResultsConstructor: Array,
      iterateeHandler: (results, iteratee, i, value, key, collection) => {
        expect(collection).toBe(array);
        results.push(iteratee(value));
      },
    };

    expect(IteratorFactory(options)(array, x => x * 2)).toEqual([2, 4, 6]);
  });

  it('Should create an iterator function (array, breaking)', () => {
    const array = [1, 2, 3];

    const options = {
      ResultsConstructor: Array,
      iterateeHandler: (results, iteratee, i, value, key, collection) => {
        expect(collection).toBe(array);
        if (i === 1) return BREAK;
        return results.push(iteratee(value));
      },
    };

    expect(IteratorFactory(options)(array, x => x * 2)).toEqual([2]);
  });

  it('Should create an iterator function (object)', () => {
    const options = {
      ResultsConstructor: Array,
      iterateeHandler: (results, iteratee, i, value) => {
        results.push(iteratee(value));
      },
    };

    expect(IteratorFactory(options)({ foo: 1, bar: 2, baz: 3 }, x => x * 2)).toEqual([2, 4, 6]);
  });

  it('Should create an iterator function (object, breaking)', () => {
    const options = {
      ResultsConstructor: Array,
      iterateeHandler: (results, iteratee, i, value) => {
        if (i === 1) return BREAK;
        return results.push(iteratee(value));
      },
    };

    expect(IteratorFactory(options)({ foo: 1, bar: 2, baz: 3 }, x => x * 2)).toEqual([2]);
  });

  it('Should create an iterator function (Set)', () => {
    const options = {
      ResultsConstructor: Array,
      iterateeHandler: (results, iteratee, i, value) => {
        results.push(iteratee(value));
      },
    };

    expect(IteratorFactory(options)(new Set([1, 2, 3]), x => x * 2)).toEqual([2, 4, 6]);
  });

  it('Should create an iterator function (Set, breaking)', () => {
    const options = {
      ResultsConstructor: Array,
      iterateeHandler: (results, iteratee, i, value) => {
        if (i === 1) return BREAK;
        return results.push(iteratee(value));
      },
    };

    expect(IteratorFactory(options)(new Set([1, 2, 3]), x => x * 2)).toEqual([2]);
  });

  it('Should create an iterator function (Map)', () => {
    const map = new Map([['a', 1], ['b', 2], ['c', 3], ['d', 4]]);

    const options = {
      ResultsConstructor: Array,
      iterateeHandler: (results, iteratee, i, value, key, collection) => {
        expect(typeof key).toBe('string');
        expect(collection).toBe(map);
        results.push(iteratee(value));
      },
    };

    expect(IteratorFactory(options)(map, x => x * 2)).toEqual([2, 4, 6, 8]);
  });

  it('Should create an iterator function (Map, breaking)', () => {
    const options = {
      ResultsConstructor: Array,
      iterateeHandler: (results, iteratee, i, value) => {
        if (i === 1) return BREAK;
        return results.push(iteratee(value));
      },
    };

    expect(IteratorFactory(options)(new Map([['a', 1], ['b', 2], ['c', 3], ['d', 4]]), x => x * 2)).toEqual([2]);
  });

  it('Should return an empty set on unknown collection types', () => {
    const options = {
      ResultsConstructor: Array,
      iterateeHandler: (results, iteratee, i, value) => {
        if (i === 1) return BREAK;
        return results.push(iteratee(value));
      },
    };

    expect(IteratorFactory(options)(new Date(), x => x * 2)).toEqual([]);
  });

  it('Should return a functional-style signature if `flipped` is true', () => {
    const options = {
      flipped: true,
      ResultsConstructor: Array,
      iterateeHandler: (results, iteratee, i, value) => {
        if (i === 1) return BREAK;
        return results.push(iteratee(value));
      },
    };

    expect(IteratorFactory(options)(x => x * 2, [1, 2, 3])).toEqual([2]);
  });

  it('Should provide the ability to "unwrap" results', () => {
    const options = {
      unwrapResults: results => results.passed,
      ResultsConstructor: () => ({ passed: false }),
      iterateeHandler: (results, iteratee, i, value, key, collection) => {
        const passes = iteratee(value, key, collection);
        if (!passes) return undefined;

        // eslint-disable-next-line no-param-reassign
        results.passed = true;
        return BREAK;
      },
    };

    expect(IteratorFactory(options)([1, 2, 3], x => x % 2 === 0)).toEqual(true);
    expect(IteratorFactory(options)([1, 3, 5], x => x % 2 === 0)).toEqual(false);
  });

  it('Should provide the ability to "unwrap" results (invalid input)', () => {
    const options = {
      unwrapResults: results => results.passed,
      ResultsConstructor: () => ({ passed: false }),
      iterateeHandler: (results, iteratee, i, value, key, collection) => {
        const passes = iteratee(value, key, collection);
        if (!passes) return undefined;

        // eslint-disable-next-line no-param-reassign
        results.passed = true;
        return BREAK;
      },
    };

    expect(IteratorFactory(options)(null, x => x % 2 === 0)).toEqual(false);
  });
});
