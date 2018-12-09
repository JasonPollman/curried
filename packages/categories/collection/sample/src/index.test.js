import sample from '.';

describe('sample', () => {
  it('Should be a function', () => {
    expect(typeof sample).toBe('function');
  });

  it('Should return `undefined` for invalid input', () => {
    expect(sample()).toEqual(undefined);
    expect(sample(0)).toEqual(undefined);
    expect(sample(null)).toEqual(undefined);
    expect(sample(() => {})).toEqual(undefined);
  });

  it('Should sample the given collection (single item)', () => {
    expect(sample({ foo: 'bar' })).toEqual('bar');
    expect(sample(['x'])).toEqual('x');
    expect(sample(new Set([0]))).toEqual(0);
    expect(sample(new Map([['a', 1]]))).toEqual(1);
    expect(sample('s')).toEqual('s');
  });

  it('Should sample the given collection (multi item)', () => {
    expect(typeof sample({ foo: 'bar', bax: 'quxx' })).toBe('string');
    expect(sample(['x', 1, 2]).toString()).toMatch(/^(x|1|2)$/);
    expect(sample({ a: 1, b: 2, c: 3 }).toString()).toMatch(/^(1|2|3)$/);
  });

  it('Should work on Arguments objects', () => {
    (function data() {
      expect(sample(arguments)).toBeLessThan(4);
      expect(sample(arguments)).toBeGreaterThan(0);
    }(1, 2, 3));
  });
});
