import includes from '.';

describe('includes', () => {
  it('Should be a function', () => {
    expect(typeof includes).toBe('function');
  });

  it('Should return false by default', () => {
    expect(includes()).toBe(false);
    expect(includes(NaN)).toBe(false);
    expect(includes(Infinity)).toBe(false);
    expect(includes(0)).toBe(false);
    expect(includes(0, 0)).toBe(false);
    expect(includes([], [])).toBe(false);
    expect(includes(() => {})).toBe(false);
  });

  it('Should determine if an array includes an item', () => {
    expect(includes([5, 6, 7], 7)).toEqual(true);
    expect(includes(['a', 'b', 'c'], 'c')).toEqual(true);
    expect(includes('hello', 'e')).toEqual(true);
  });

  it('Should determine if an array doesn\'t include an item', () => {
    expect(includes([5, 6, 7], 17)).toEqual(false);
    expect(includes(['a', 'b', 'c'], 'e')).toEqual(false);
    expect(includes('hello', 'p')).toEqual(false);
    expect(includes()).toBe(false);
    expect(includes(null, 5)).toEqual(false);
  });

  it('Should work with NaN', () => {
    expect(includes([1, NaN, 2], NaN)).toBe(true);
  });

  it('Should determine if a string includes an item', () => {
    expect(includes('foobarbaz', 'bar')).toBe(true);
    expect(includes('foobarbaz', 'bar', 3)).toBe(true);
    expect(includes('foobarbaz', 'baz')).toBe(true);
  });

  it('Should determine if a string doesn\'t include an item', () => {
    expect(includes('foo', 'baz')).toBe(false);
    expect(includes('foobarbaz', 'xxx')).toBe(false);
    expect(includes('foobarbaz', 'foo', 4)).toBe(false);
  });

  it('Should determine if a Map includes an item', () => {
    expect(includes(new Map([[1, 2], [3, 4]]), 4)).toBe(true);
    expect(includes(new Map([[1, 2], [3, 4]]), 2)).toBe(true);
  });

  it('Should determine if a Map doesn\'t include an item', () => {
    expect(includes(new Map([[1, 2], [3, 4]]), 3)).toBe(false);
    expect(includes(new Map([[1, 2], [3, 4]]), 'foo')).toBe(false);
  });

  it('Should determine if a Set includes an item', () => {
    expect(includes(new Set([1, 2, 3, 4]), 4)).toBe(true);
    expect(includes(new Set([1, 2, 3, 4]), 2)).toBe(true);
  });

  it('Should determine if a Set doesn\'t include an item', () => {
    expect(includes(new Set([1, 2, 3, 4]), 14)).toBe(false);
    expect(includes(new Set([1, 2, 3, 4]), false)).toBe(false);
  });

  it('Should work on custom object', () => {
    const x = new class Foo {}();
    x.foo = 'bar';
    expect(includes(x, 'bar')).toBe(true);
  });
});
