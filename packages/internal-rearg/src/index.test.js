/**
 * Tests for the `rearg` function.
 * @since 10/23/18
 * @file
 */

import rearg, { IS_REARGED, ARITY, SOURCE } from '.';

const TO_STRING_MATCH = /^\/\* Rearg Wrapped \*\/\r\n/;

describe('rearg', () => {
  it('Should be a function', () => {
    expect(typeof rearg).toBe('function');
  });

  it('Should alter the partialed function\'s `toString` method', () => {
    const source = x => x;
    expect(rearg(source, [0]).toString()).toMatch(TO_STRING_MATCH);
  });

  it('Should respect the `ARITY` symbol (none)', () => {
    const fn = (x, y, z) => x + y + z;
    const rearged = rearg(fn, [1, 0]);

    expect(typeof rearged).toBe('function');
    expect(rearged('x', 'y', 'z')).toBe('yxz');
    expect(rearged[ARITY]).toBe(3);
  });

  it('Should respect the `ARITY` symbol (passthrough)', () => {
    const fn = (x, y, z) => x + y + z;
    fn[ARITY] = 2;

    const rearged = rearg(fn, [1, 0]);

    expect(typeof rearged).toBe('function');
    expect(rearged('x', 'y', 'z')).toBe('yxz');
    expect(rearged[ARITY]).toBe(2);
  });

  it('Should rearg functions (1)', () => {
    const fn = (x, y) => x + y;
    const rearged = rearg(fn, [1, 0]);

    expect(typeof rearged).toBe('function');
    expect(rearged('x', 'y')).toBe('yx');
  });

  it('Should rearg functions (2)', () => {
    const fn = (x, y, z) => x + y + z;
    const rearged = rearg(fn, [1, 0]);

    expect(typeof rearged).toBe('function');
    expect(rearged('x', 'y', 'z')).toBe('yxz');
  });

  it('Should rearg functions (3)', () => {
    const fn = (x, y, z) => x + y + z;
    const rearged = rearg(fn);

    expect(typeof rearged).toBe('function');
    expect(rearged('x', 'y', 'z')).toBe('xyz');
  });

  it('Should rearg functions (4)', () => {
    const fn = (x, y, z) => x + y + z;
    const rearged = rearg(fn, [2, 0, 1]);

    expect(typeof rearged).toBe('function');
    expect(rearged('x', 'y', 'z')).toBe('zxy');
  });

  it('Should apply the correct properties to the rearged function', () => {
    const identity = x => x;
    const rearged = rearg(identity, [1]);
    expect(rearged[SOURCE]).toBe(identity);
    expect(rearged[IS_REARGED]).toBe(true);
  });

  it('Should return the source function if no signature is given', () => {
    const fn = x => x;
    expect(rearg(fn)).toBe(fn);
  });
});
