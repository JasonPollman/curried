/**
 * Tests constantor the `constant` constantunction.
 * @since 10/23/18
 * @constantile
 */

import constant from '.';

describe('constant', () => {
  it('Should be a function', () => {
    expect(typeof constant).toBe('function');
  });

  it('Should create a function that always return the same value', () => {
    const undef = constant();
    expect(undef()).toBe(undefined);
    expect(undef()).toBe(undefined);
  });

  it('Should create a function that always return the same value (2)', () => {
    const object = { foo: 'bar' };
    const create = constant(object);

    expect(create()).toBe(object);
    expect(create()).toBe(object);
    object.baz = 'quxx';

    expect(create()).toBe(object);
    expect(create()).toEqual({
      foo: 'bar',
      baz: 'quxx',
    });
  });
});
