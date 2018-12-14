import always from '.';

describe('always', () => {
  it('Should be a function', () => {
    expect(typeof always).toBe('function');
  });

  it('Should create a function that always return the same value', () => {
    const undef = always();
    expect(undef()).toBe(undefined);
    expect(undef()).toBe(undefined);
  });

  it('Should create a function that always return the same value (2)', () => {
    const foo = always('foo');
    expect(foo()).toBe('foo');
    expect(foo()).toBe('foo');
    expect(foo(1)).toBe('foo');
    expect(foo(null)).toBe('foo');
  });

  it('Should create a function that always return the same value (3)', () => {
    const nan = always(NaN);
    expect(nan()).toBe(NaN);
    expect(nan()).toBe(NaN);
  });

  it('Should create a function that always return the same value (4)', () => {
    const object = { foo: 'bar' };
    const create = always(object);

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
