/**
 * Tests for the `chunk` function.
 * @since 11/18/18
 * @file
 */

import chunk, { f } from '.';

describe('chunk', () => {
  it('Should be a function', () => {
    expect(typeof chunk).toBe('function');
  });

  it('Should chunk an array (default)', () => {
    const array = [1, 2, 3, 4];
    const results = chunk(array);

    expect(results).toEqual([[1], [2], [3], [4]]);
    expect(results).not.toBe(array);
  });

  it('Should chunk an array (empty array)', () => {
    const array = [];
    const results = chunk(array, 10);

    expect(results).toEqual([]);
    expect(results).not.toBe(array);
  });

  it('Should chunk an array (n specified, 2)', () => {
    const array = [1, 2, 3, 4];
    const results = chunk(array, 2);

    expect(results).toEqual([[1, 2], [3, 4]]);
    expect(results).not.toBe(array);
  });

  it('Should chunk an array (n specified, 3)', () => {
    const array = [1, 2, 3, 4];
    const results = chunk(array, 3);

    expect(results).toEqual([[1, 2, 3], [4]]);
    expect(results).not.toBe(array);
  });

  it('Should chunk an array (n specified, 30)', () => {
    const array = [1, 2, 3, 4];
    const results = chunk(array, 30);

    expect(results).toEqual([[1, 2, 3, 4]]);
    expect(results).not.toBe(array);
  });

  it('Should chunk an array (n specified, 4)', () => {
    const array = [1, 2, 3, 4];
    const results = chunk(array, '2');

    expect(results).toEqual([[1, 2], [3, 4]]);
    expect(results).not.toBe(array);
  });

  it('Should chunk an array (n specified, 5)', () => {
    const array = [1, 2, 3, 4];
    const results = chunk(array, '0');

    expect(results).toEqual([]);
    expect(results).not.toBe(array);
  });

  it('Should chunk an array (n specified, 6)', () => {
    const array = [1, 2, 3, 4];
    const results = chunk(array, -10);

    expect(results).toEqual([]);
    expect(results).not.toBe(array);
  });

  it('Should chunk an array (n specified, 7)', () => {
    const array = [1, 2, 3, 4];
    const results = chunk(array, '0x3');

    expect(results).toEqual([[1, 2, 3], [4]]);
    expect(results).not.toBe(array);
  });

  describe('chunk.f', () => {
    it('Should be a function', () => {
      // eslint-disable-next-line import/no-named-as-default-member
      expect(typeof chunk.f).toBe('function');
      expect(typeof f).toBe('function');

      // eslint-disable-next-line import/no-named-as-default-member
      expect(chunk.f === f).toBe(true);
    });

    it('Should chunk an array (empty array)', () => {
      const array = [];
      const results = chunk(10, array);

      expect(results).toEqual([]);
      expect(results).not.toBe(array);
    });

    it('Should chunk an array (n specified, 1)', () => {
      const array = [1, 2, 3, 4];
      const results = f(2)(array);

      expect(results).toEqual([[1, 2], [3, 4]]);
      expect(results).not.toBe(array);
    });

    it('Should chunk an array (n specified, 2)', () => {
      const array = [1, 2, 3, 4];
      const results = f(3, array);

      expect(results).toEqual([[1, 2, 3], [4]]);
      expect(results).not.toBe(array);
    });

    it('Should chunk an array (n specified, 3)', () => {
      const array = [1, 2, 3, 4];
      const results = f(30, array);

      expect(results).toEqual([[1, 2, 3, 4]]);
      expect(results).not.toBe(array);
    });

    it('Should chunk an array (n specified, 4)', () => {
      const array = [1, 2, 3, 4];
      const results = f('2')(array);

      expect(results).toEqual([[1, 2], [3, 4]]);
      expect(results).not.toBe(array);
    });

    it('Should chunk an array (n specified, 5)', () => {
      const array = [1, 2, 3, 4];
      const results = f('0')()(array);

      expect(results).toEqual([]);
      expect(results).not.toBe(array);
    });

    it('Should chunk an array (n specified, 6)', () => {
      const array = [1, 2, 3, 4];
      const results = f(-10, array);

      expect(results).toEqual([]);
      expect(results).not.toBe(array);
    });

    it('Should chunk an array (n specified, 7)', () => {
      const array = [1, 2, 3, 4];
      const results = f('0x3')(array);

      expect(results).toEqual([[1, 2, 3], [4]]);
      expect(results).not.toBe(array);
    });
  });
});
