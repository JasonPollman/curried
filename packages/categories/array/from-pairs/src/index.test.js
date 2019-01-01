import fromPairs from '.';

describe('fromPairs', () => {
  it('Should be a function', () => {
    expect(typeof fromPairs).toBe('function');
  });

  it('Should create an object from tuples', () => {
    expect(fromPairs([['foo', 1], ['bar', 2], ['baz', 3]])).toEqual({
      foo: 1,
      bar: 2,
      baz: 3,
    });
  });

  it('Should create an object from tuples (with junk)', () => {
    expect(fromPairs([['foo', 1], null, ['bar', 2], () => {}, {}, ['baz', 3]])).toEqual({
      foo: 1,
      bar: 2,
      baz: 3,
    });
  });

  it('Should create an object from tuples (empty array)', () => {
    expect(fromPairs([])).toEqual({});
  });

  it('Should create an object from tuples (with strings)', () => {
    expect(fromPairs(['foo', 'bar'])).toEqual({
      f: 'o',
      b: 'a',
    });
  });

  it('Should handle bad input', () => {
    expect(fromPairs()).toEqual({});
    expect(fromPairs(null)).toEqual({});
    expect(fromPairs(undefined)).toEqual({});
    expect(fromPairs(false)).toEqual({});
    expect(fromPairs(true)).toEqual({});
    expect(fromPairs({})).toEqual({});
    expect(fromPairs(NaN)).toEqual({});
    expect(fromPairs(Symbol('foo'))).toEqual({});
    expect(fromPairs(undefined)).toEqual({});
    expect(fromPairs(Infinity)).toEqual({});
    expect(fromPairs(0)).toEqual({});
    expect(fromPairs(null)).toEqual({});
  });
});
