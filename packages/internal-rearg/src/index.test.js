/**
 * Tests for the `rearg` function.
 * @since 10/23/18
 * @file
 */

import rearg, { IS_REARGED, SOURCE } from '.';

describe('rearg', () => {
  it('Should be a function', () => {
    expect(typeof rearg).toBe('function');
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
