import size from '.';

describe('size', () => {
  it('Should be a function', () => {
    expect(typeof size).toBe('function');
  });

  it('Should return 0 for nil input', () => {
    expect(size()).toEqual(0);
    expect(size(null)).toEqual(0);
    expect(size(NaN)).toEqual(0);
    expect(size(undefined)).toEqual(0);
    expect(size(true)).toEqual(0);
    expect(size(false)).toEqual(0);
    expect(size(Symbol('foo'))).toEqual(0);
    expect(size(Infinity)).toEqual(0);
    expect(size(0)).toEqual(0);
    expect(size('')).toEqual(0);
  });

  it('Should return an arrays\'s size', () => {
    expect(size([1, 2, 3])).toEqual(3);
    expect(size([])).toEqual(0);
  });

  it('Should return an object\'s size', () => {
    expect(size({ 0: 1, 1: 2, 2: 3 })).toEqual(3);
    expect(size({ foo: 'bar' })).toEqual(1);
    expect(size({})).toEqual(0);
  });

  it('Should return a strings\'s size', () => {
    expect(size('foo')).toEqual(3);
    expect(size('')).toEqual(0);
  });

  it('Should return an arguments\'s size', () => {
    (function test() {
      expect(size(arguments)).toEqual(2);
    }(1, 2));
  });

  it('Should return a Map\'s size', () => {
    expect(size(new Map())).toEqual(0);
    expect(size(new Map([[1, 2], [2, 3]]))).toEqual(2);
  });

  it('Should return a Set\'s size', () => {
    expect(size(new Set())).toEqual(0);
    expect(size(new Set([1, 2]))).toEqual(2);
  });
});
