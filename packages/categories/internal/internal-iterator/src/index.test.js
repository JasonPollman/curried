/**
 * Tests for the `internal-iterator` file.
 * @since 11/10/18
 * @file
 */

import IteratorFactory, { BREAK } from '.';

describe('internal-iterator', () => {
  it('Should be a function', () => {
    expect(typeof IteratorFactory).toBe('function');
  });

  it('Should create an iterator function', () => {
    expect(typeof IteratorFactory({})).toBe('function');
  });

  it('Should return a instance of the Results if given a falsy collection', () => {
    const options = {
      $$empty: () => [],
      $$results: () => [],
      $$handler: (context, results, iteratee, i, value) => {
        results.push(iteratee(value));
      },
    };

    expect(IteratorFactory(options)(null, x => x * 2)).toEqual([]);
    expect(IteratorFactory(options)(0, x => x * 2)).toEqual([]);
    expect(IteratorFactory(options)(undefined, x => x * 2)).toEqual([]);
    expect(IteratorFactory(options)(NaN, x => x * 2)).toEqual([]);
  });

  it('Should use `identity` if given a non-function iterator', () => {
    const options = {
      $$empty: () => [],
      $$results: () => [],
      $$handler: (context, results, iteratee, i, value) => {
        results.push(iteratee(value));
      },
    };

    expect(IteratorFactory(options)([1, 2, 3])).toEqual([1, 2, 3]);
    expect(IteratorFactory(options)([1, 2, 3], '')).toEqual([1, 2, 3]);
    expect(IteratorFactory(options)([1, 2, 3], {})).toEqual([1, 2, 3]);
  });

  it('Should create an iterator function (array)', () => {
    const array = [1, 2, 3];

    const options = {
      $$empty: () => [],
      $$results: () => [],
      $$handler: (context, results, iteratee, i, value, key, collection) => {
        expect(collection).toBe(array);
        results.push(iteratee(value));
      },
    };

    expect(IteratorFactory(options)(array, x => x * 2)).toEqual([2, 4, 6]);
  });

  it('Should create an iterator function (array, breaking)', () => {
    const array = [1, 2, 3];

    const options = {
      $$empty: () => [],
      $$results: () => [],
      $$handler: (context, results, iteratee, i, value, key, collection) => {
        expect(collection).toBe(array);
        if (i === 1) return BREAK;
        return results.push(iteratee(value));
      },
    };

    expect(IteratorFactory(options)(array, x => x * 2)).toEqual([2]);
  });

  it('Should create an iterator function (array, reverse)', () => {
    const array = [1, 2, 3];

    const options = {
      $$reverse: true,
      $$empty: () => [],
      $$results: () => [],
      $$handler: (context, results, iteratee, i, value, key, collection) => {
        expect(collection).toBe(array);
        results.push(iteratee(value));
      },
    };

    expect(IteratorFactory(options)(array, x => x * 2)).toEqual([6, 4, 2]);
  });

  it('Should create an iterator function (array, breaking, reverse)', () => {
    const array = [1, 2, 3];

    const options = {
      $$reverse: true,
      $$empty: () => [],
      $$results: () => [],
      $$handler: (context, results, iteratee, i, value, key, collection) => {
        expect(collection).toBe(array);
        if (i === 1) return BREAK;
        return results.push(iteratee(value));
      },
    };

    expect(IteratorFactory(options)(array, x => x * 2)).toEqual([6]);
  });

  it('Should create an iterator function (object)', () => {
    const object = { foo: 1, bar: 2, baz: 3 };

    const options = {
      $$empty: () => [],
      $$results: () => [],
      $$handler: (context, results, iteratee, i, value, key, collection) => {
        expect(['foo', 'bar', 'baz'].indexOf(key)).toBeGreaterThan(-1);
        expect(collection).toBe(object);
        results.push(iteratee(value));
      },
    };

    expect(IteratorFactory(options)(object, x => x * 2)).toEqual([2, 4, 6]);
  });

  it('Should create an iterator function (object, breaking)', () => {
    const options = {
      $$empty: () => [],
      $$results: () => [],
      $$handler: (context, results, iteratee, i, value) => {
        if (i === 1) return BREAK;
        return results.push(iteratee(value));
      },
    };

    expect(IteratorFactory(options)({ foo: 1, bar: 2, baz: 3 }, x => x * 2)).toEqual([2]);
  });

  it('Should create an iterator function (object, reverse)', () => {
    const options = {
      $$empty: () => [],
      $$reverse: true,
      $$results: () => [],
      $$handler: (context, results, iteratee, i, value) => {
        results.push(iteratee(value));
      },
    };

    expect(IteratorFactory(options)({ foo: 1, bar: 2, baz: 3 }, x => x * 2)).toEqual([6, 4, 2]);
  });

  it('Should create an iterator function (object, breaking, reverse)', () => {
    const object = { foo: 1, bar: 2, baz: 3 };

    const options = {
      $$empty: () => [],
      $$reverse: true,
      $$results: () => [],
      $$handler: (context, results, iteratee, i, value, key, collection) => {
        expect(['foo', 'bar', 'baz'].indexOf(key)).toBeGreaterThan(-1);
        expect(collection).toBe(object);
        if (i === 1) return BREAK;
        return results.push(iteratee(value));
      },
    };

    expect(IteratorFactory(options)(object, x => x * 2)).toEqual([6]);
  });

  it('Should create an iterator function (Set)', () => {
    const options = {
      $$empty: () => [],
      $$results: () => [],
      $$handler: (context, results, iteratee, i, value) => {
        results.push(iteratee(value));
      },
    };

    expect(IteratorFactory(options)(new Set([1, 2, 3]), x => x * 2)).toEqual([2, 4, 6]);
  });

  it('Should create an iterator function (Set, breaking)', () => {
    const options = {
      $$empty: () => [],
      $$results: () => [],
      $$handler: (context, results, iteratee, i, value) => {
        if (i === 1) return BREAK;
        return results.push(iteratee(value));
      },
    };

    expect(IteratorFactory(options)(new Set([1, 2, 3]), x => x * 2)).toEqual([2]);
  });

  it('Should create an iterator function (Set, reverse)', () => {
    const set = new Set([1, 2, 3]);

    const options = {
      $$empty: () => [],
      $$reverse: true,
      $$results: () => [],
      $$handler: (context, results, iteratee, i, value, key, collection) => {
        expect([0, 1, 2].indexOf(key)).toBeGreaterThan(-1);
        expect(collection).toBe(set);
        results.push(iteratee(value));
      },
    };

    expect(IteratorFactory(options)(set, x => x * 2)).toEqual([6, 4, 2]);
  });

  it('Should create an iterator function (Set, breaking, reverse)', () => {
    const options = {
      $$empty: () => [],
      $$reverse: true,
      $$results: () => [],
      $$handler: (context, results, iteratee, i, value) => {
        if (i === 1) return BREAK;
        return results.push(iteratee(value));
      },
    };

    expect(IteratorFactory(options)(new Set([1, 2, 3]), x => x * 2)).toEqual([6]);
  });

  it('Should create an iterator function (Map)', () => {
    const map = new Map([['a', 1], ['b', 2], ['c', 3], ['d', 4]]);

    const options = {
      $$empty: () => [],
      $$results: () => [],
      $$handler: (context, results, iteratee, i, value, key, collection) => {
        expect(typeof key).toBe('string');
        expect(collection).toBe(map);
        results.push(iteratee(value));
      },
    };

    expect(IteratorFactory(options)(map, x => x * 2)).toEqual([2, 4, 6, 8]);
  });

  it('Should create an iterator function (Map, breaking)', () => {
    const options = {
      $$empty: () => [],
      $$results: () => [],
      $$handler: (context, results, iteratee, i, value) => {
        if (i === 1) return BREAK;
        return results.push(iteratee(value));
      },
    };

    expect(IteratorFactory(options)(new Map([['a', 1], ['b', 2], ['c', 3], ['d', 4]]), x => x * 2)).toEqual([2]);
  });

  it('Should create an iterator function (Map, reverse)', () => {
    const map = new Map([['a', 1], ['b', 2], ['c', 3], ['d', 4]]);

    const options = {
      $$empty: () => [],
      $$reverse: true,
      $$results: () => [],
      $$handler: (context, results, iteratee, i, value, key, collection) => {
        expect(['a', 'b', 'c', 'd'].indexOf(key)).toBeGreaterThan(-1);
        expect(collection).toBe(map);
        results.push(iteratee(value));
      },
    };

    expect(IteratorFactory(options)(map, x => x * 2)).toEqual([8, 6, 4, 2]);
  });

  it('Should create an iterator function (Map, breaking, reverse)', () => {
    const map = new Map([['a', 1], ['b', 2], ['c', 3], ['d', 4]]);

    const options = {
      $$empty: () => [],
      $$reverse: true,
      $$results: () => [],
      $$handler: (context, results, iteratee, i, value, key, collection) => {
        expect(['a', 'b', 'c', 'd'].indexOf(key)).toBeGreaterThan(-1);
        expect(collection).toBe(map);
        if (i === 1) return BREAK;
        return results.push(iteratee(value));
      },
    };

    expect(IteratorFactory(options)(map, x => x * 2)).toEqual([8]);
  });

  it('Should return an empty set on unknown collection types', () => {
    const options = {
      $$empty: () => [],
      $$results: () => [],
      $$handler: (context, results, iteratee, i, value) => {
        if (i === 1) return BREAK;
        return results.push(iteratee(value));
      },
    };

    expect(IteratorFactory(options)(new Date(), x => x * 2)).toEqual([]);
  });

  it('Should provide the ability to "unwrap" results', () => {
    const options = {
      $$empty: () => false,
      $$unwrap: results => results.passed,
      $$results: () => ({ passed: false }),
      $$handler: (context, results, iteratee, i, value, key, collection) => {
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

  it('Should provide the ability to "prepare" iteratees', () => {
    const iteratee = x => x % 2 === 0;
    let prepared = false;

    function prep(iter) {
      prepared = true;
      expect(iter).toBe(iteratee);
      return iteratee;
    }

    const options = {
      $$empty: () => false,
      $$unwrap: results => results.passed,
      $$results: () => ({ passed: false }),
      $$prepare: prep,
      $$handler: (context, results, iter, i, value, key, collection) => {
        const passes = iter(value, key, collection);
        if (!passes) return undefined;

        // eslint-disable-next-line no-param-reassign
        results.passed = true;
        return BREAK;
      },
    };

    expect(IteratorFactory(options)([1, 2, 3], iteratee)).toEqual(true);
    expect(IteratorFactory(options)([1, 3, 5], iteratee)).toEqual(false);
    expect(prepared).toBe(true);
  });

  it('Should provide the ability to "unwrap" results (invalid input)', () => {
    const options = {
      $$empty: () => false,
      $$unwrap: results => results.passed,
      $$results: () => ({ passed: false }),
      $$handler: (context, results, iteratee, i, value, key, collection) => {
        const passes = iteratee(value, key, collection);
        if (!passes) return undefined;

        // eslint-disable-next-line no-param-reassign
        results.passed = true;
        return BREAK;
      },
    };

    expect(IteratorFactory(options)(null, x => x % 2 === 0)).toEqual(false);
  });

  it('Should work for reduce', () => {
    const array = [1, 2, 3];

    const options = {
      $$empty: x => x,
      $$unwrap: results => results.acc,
      $$results: acc => ({ acc }),
      $$handler: (context, results, iteratee, i, value, key, collection) => {
        // eslint-disable-next-line no-param-reassign
        results.acc = iteratee(results.acc, value, key, collection);
      },
    };

    expect(IteratorFactory(options)(array, (acc, x) => acc + x * 2, 0)).toEqual(12);
  });
});
