/**
 * Tests for the `partial` function.
 * @since 10/23/18
 * @file
 */

import partial, {
  _,
  ARITY,
  SOURCE,
  IS_PARTIAL,
} from '.';

const TO_STRING_MATCH = /^\/\* Partial Wrapped \*\/\r\n/;

describe('partial', () => {
  it('Should be a function', () => {
    expect(typeof partial).toBe('function');
  });

  it('Should alter the partialed function\'s `toString` method', () => {
    const source = x => x;
    expect(partial(source, 1).toString()).toMatch(TO_STRING_MATCH);
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

  it('Should respect the `ARITY` symbol (none)', () => {
    const pow = (x, y) => x ** y;
    const powerOf2 = partial(pow, 2);
    expect(powerOf2(1)).toBe(2);
    expect(powerOf2[ARITY]).toBe(2);
  });

  it('Should respect the `ARITY` symbol (passthrough)', () => {
    const pow = (x, y) => x ** y;
    pow[ARITY] = 10;

    const powerOf2 = partial(pow, 2);
    expect(powerOf2(1)).toBe(2);
    expect(powerOf2[ARITY]).toBe(10);
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
