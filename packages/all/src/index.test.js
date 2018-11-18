/**
 * Tests for the @foldr/all package.
 * This is mostly for tests involving "integration" between functions.
 * All other tests go in their respective package directory.
 * @since 11/18/18
 * @file
 */

import * as foldr from '.';

describe('@foldr/all', () => {
  describe('Partial <=> Curry', () => {
    it('Should be able to curry a partialed function', () => {
      const fn = (x, y, z) => `${x}-${y}-${z}`;

      const partialed = foldr.partial(fn, foldr._, 'y');
      expect(partialed('x', 'z')).toBe('x-y-z');

      const curried = foldr.curry(partialed);
      expect(curried('x', 'z')).toBe('x-y-z');
      expect(curried('x')('z')).toBe('x-y-z');
    });

    it('Should be able to partial a curried function', () => {
      const fn = (x, y, z) => `${x}-${y}-${z}`;

      const curried = foldr.curry(fn);
      expect(curried('x', foldr._, 'z')('y')).toBe('x-y-z');

      const partialed = foldr.partial(curried, 'x');

      expect(partialed('y')('z')).toBe('x-y-z');
      expect(partialed('y', 'z')).toBe('x-y-z');
    });

    it('Should be able to partial/curried/partial a function', () => {
      const fn = (x, y, z) => `${x}-${y}-${z}`;

      const partialed = foldr.partial(fn, foldr._, 'y');
      expect(partialed('x', 'z')).toBe('x-y-z');

      const curried = foldr.curry(partialed);
      expect(curried('x', 'z')).toBe('x-y-z');
      expect(curried('x')('z')).toBe('x-y-z');

      const partialed2 = foldr.partial(curried, foldr._, 'z');
      expect(partialed2('x')).toBe('x-y-z');
    });
  });

  describe('Rearg <=> Curry', () => {
    it('Should be able to curry a rearged function', () => {
      const fn = (y, z, x) => `${x}-${y}-${z}`;

      const rearged = foldr.rearg(fn, [1, 2, 0]);
      expect(rearged('x', 'y', 'z')).toBe('x-y-z');

      const curried = foldr.curry(rearged);
      expect(curried('x', 'y', 'z')).toBe('x-y-z');
      expect(curried('x')('y')('z')).toBe('x-y-z');
    });

    it('Should be able to rearg a curried function', () => {
      const fn = (y, z, x) => `${x}-${y}-${z}`;

      const curried = foldr.curry(fn);
      expect(curried('x', foldr._, 'z')('y')).toBe('z-x-y');

      const rearged = foldr.rearg(curried, [1, 2, 0]);
      expect(rearged('x', 'y', 'z')).toBe('x-y-z');
    });
  });

  describe('Memoize <=> Curry', () => {
    it('Should be able to curry a memoized function', () => {
      const fn = (x, y, z) => `${x}-${y}-${z}`;

      const memoized = foldr.memoize(fn);

      expect(memoized.cache.size).toBe(0);
      expect(memoized('x', 'y', 'z')).toBe('x-y-z');
      expect(memoized.cache.size).toBe(1);

      const curried = foldr.curry(memoized);
      expect(curried('x', 'y', 'z')).toBe('x-y-z');

      expect(memoized.cache.size).toBe(1);
      expect(curried('x')('y')('z')).toBe('x-y-z');
      expect(memoized.cache.size).toBe(1);
    });

    it('Should be able to memoize a curried function', () => {
      const fn = (x, y, z) => `${x}-${y}-${z}`;

      const curried = foldr.curry(fn);
      expect(curried('x', foldr._, 'z')('y')).toBe('x-y-z');

      const memoized = foldr.memoize(curried);

      expect(memoized.cache.size).toBe(0);
      expect(memoized('x', 'y', 'z')).toBe('x-y-z');
      expect(memoized.cache.size).toBe(1);
      expect(memoized('x')('y')('z')).toBe('x-y-z');
      expect(memoized.cache.size).toBe(2);
    });
  });

  describe('Once <=> Curry', () => {
    it('Should be able to curry a "onced" function', () => {
      const fn = (x, y, z) => `${x}-${y}-${z}`;

      const onced = foldr.once(fn);
      const curried = foldr.curry(onced);

      expect(curried('x', 'y', 'z')).toBe('x-y-z');
      expect(curried('x')('y')('z')).toBe('x-y-z');
      expect(curried('a')('s')('d')).toBe('x-y-z');
    });

    it('Should be able to once a curried function', () => {
      const fn = (x, y, z) => `${x}-${y}-${z}`;

      const curried = foldr.curry(fn);
      expect(curried('x', foldr._, 'z')('y')).toBe('x-y-z');

      const onced = foldr.once(curried);
      expect(onced('x')('y', 'z')).toBe('x-y-z');
      expect(onced('a', 's', 'd')('y')('z')).toBe('x-y-z');
    });
  });

  describe('Memoize <=> Partial', () => {
    it('Should be able to partial a memoized function', () => {
      const fn = (x, y, z) => `${x}-${y}-${z}`;

      const memoized = foldr.memoize(fn);

      expect(memoized.cache.size).toBe(0);
      expect(memoized('x', 'y', 'z')).toBe('x-y-z');
      expect(memoized('x', 'y', 'z')).toBe('x-y-z');
      expect(memoized.cache.size).toBe(1);

      const partialed = foldr.partial(memoized, foldr._, 'X');
      expect(partialed('x', 'y', 'z')).toBe('x-X-y');
      expect(partialed('x', 'y', 'z')).toBe('x-X-y');

      expect(memoized.cache.size).toBe(2);
      expect(partialed('x', 'y')).toBe('x-X-y');
      expect(memoized.cache.size).toBe(3);
    });

    it('Should be able to memoize a partialed function', () => {
      const fn = (x, y, z) => `${x}-${y}-${z}`;

      const partialed = foldr.partial(fn, foldr._, 'X');
      expect(partialed('x', 'z')).toBe('x-X-z');

      const memoized = foldr.memoize(partialed);

      expect(memoized.cache.size).toBe(0);
      expect(memoized('x', 'y', 'z')).toBe('x-X-y');
      expect(memoized('x', 'y', 'z')).toBe('x-X-y');
      expect(memoized.cache.size).toBe(1);
    });
  });
});
