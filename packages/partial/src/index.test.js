/**
 * Tests for the `partial` function.
 * @since 10/23/18
 * @file
 */

import partial, { _, IS_PARTIAL, SOURCE } from '.';

describe('partial', () => {
  it('Should be a function', () => {
    expect(typeof partial).toBe('function');
  });

  it('Should partialize functions', () => {
    const pow = (x, y) => x ** y;
    const powerOf2 = partial(pow, 2);
    const square = partial(pow, _, 2);
    const eight = partial(pow, 2, 3);

    expect(typeof powerOf2).toBe('function');
    expect(typeof square).toBe('function');

    expect(powerOf2(0)).toBe(1);
    expect(powerOf2(1)).toBe(2);
    expect(powerOf2(2)).toBe(4);

    expect(square(0)).toBe(0);
    expect(square(1)).toBe(1);
    expect(square(2)).toBe(4);

    expect(eight()).toBe(8);
    expect(eight(1)).toBe(8);
    expect(eight(1, _, 3)).toBe(8);
  });

  it('Should apply the correct properties to the partialized function', () => {
    const identity = x => x;
    const two = partial(identity, 2);
    expect(two[SOURCE]).toBe(identity);
    expect(two[IS_PARTIAL]).toBe(true);
  });

  it('Should throw if given a non-function', () => {
    expect(() => partial('')).toThrow('The first argument given to `partial` must be a function.');
  });

  it('Should return the source function if no partial arguments are given', () => {
    const fn = x => x;
    expect(partial(fn)).toBe(fn);
  });
});
