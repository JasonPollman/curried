/**
 * Tests for the `identity` function.
 * @since 10/23/18
 * @file
 */

import identity from '.';

describe('identity', () => {
  it('Should be a function', () => {
    expect(typeof identity).toBe('function');
  });

  it('Should return the value passed to it', () => {
    const object = {};
    expect(identity(1)).toBe(1);
    expect(identity('foo')).toBe('foo');
    expect(identity(null)).toBe(null);
    expect(identity(undefined)).toBe(undefined);
    expect(identity(object)).toBe(object);
  });

  it('Should ignore extraneous arguments', () => {
    expect(identity(1, 2, [], 'foo')).toBe(1);
  });
});
