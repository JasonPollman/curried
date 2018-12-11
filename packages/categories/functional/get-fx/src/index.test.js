import getFx from '.';

describe('getFx', () => {
  it('Should be a function', () => {
    expect(typeof getFx).toBe('function');
  });

  it('Should get a property by path', () => {
    expect(getFx('foo')({ foo: 'bar' })).toBe('bar');
  });

  it('Should get a property by path (depth 2)', () => {
    expect(getFx('foo.bar')({ foo: { bar: 5 } })).toBe(5);
  });

  it('Should get a property by path (depth 3)', () => {
    expect(getFx('foo.bar.baz', { foo: { bar: { baz: 5 } } })).toBe(5);
  });

  it('Should get a property by path (depth 4)', () => {
    expect(getFx('foo.bar.baz[1]')({ foo: { bar: { baz: [0, 1] } } })).toBe(1);
    expect(getFx('foo.bar.baz[1]')({ foo: { bar: { baz: ['0', '1'] } } })).toBe('1');
  });

  it('Should work for strings', () => {
    expect(getFx('0', 'foo')).toBe('f');
    expect(getFx(0, 'foo')).toBe('f');
    expect(getFx('foo', 'foo')).toBe(undefined);
    expect(getFx('0.1', 'foo')).toBe(undefined);
    expect(getFx('1', 'foo')).toBe('o');
  });

  it('Should work for arrays', () => {
    expect(getFx('1', [0, 1])).toBe(1);
    expect(getFx('1[1]', [0, [0, 1]])).toBe(1);
    expect(getFx('1.1', [0, [0, 1]])).toBe(1);
  });
});
