/**
 * Tests for the `find` function.
 * @since 11/10/18
 * @file
 */

import find from '.';

const isTwo = x => x === 2;

describe('find', () => {
  it('Should be a function', () => {
    expect(typeof find).toBe('function');
  });

  it('Should find within an array', () => {
    expect(find([1, 2, 3, 4], isTwo)).toEqual(2);
  });

  it('Should work with shorthand string iteratees', () => {
    expect(find([{ x: true }, { x: false }], 'x')).toEqual({ x: true });
  });

  it('Should work with shorthand array iteratees', () => {
    expect(find([{ value: 1 }, { value: 2 }, { value: 3 }], ['value', 2])).toEqual({ value: 2 });
  });

  it('Should work with shorthand object iteratees', () => {
    const things = [
      { value: 1, name: 'a', foo: 'bar' },
      { value: 2, name: 'b', foo: 'bar' },
      { value: 2, name: 'c', foo: 'bar' },
      { value: 2, name: 'd', foo: 'bar' },
    ];

    expect(find(things, { value: 2, name: 'c' })).toEqual({ value: 2, name: 'c', foo: 'bar' });
  });

  it('Should work for objects', () => {
    const collection = {
      foo: 1,
      bar: 2,
      baz: 3,
      quxx: 4,
    };

    expect(find(collection, isTwo)).toBe(2);
  });

  it('Should work for Map objects', () => {
    const collection = new Map([['a', 1], ['b', 2], ['c', 3]]);
    expect(find(collection, isTwo)).toBe(2);
  });

  it('Should work for Set objects', () => {
    const collection = new Set([1, 2, 3, 4, 2]);
    expect(find(collection, isTwo)).toBe(2);
  });

  it('Should work for falsy values', () => {
    expect(find(null, isTwo)).toBe(undefined);
    expect(find(undefined, isTwo)).toBe(undefined);
    expect(find('', isTwo)).toBe(undefined);
    expect(find(0, isTwo)).toBe(undefined);
    expect(find(false, isTwo)).toBe(undefined);
    expect(find(NaN, isTwo)).toBe(undefined);
  });
});
