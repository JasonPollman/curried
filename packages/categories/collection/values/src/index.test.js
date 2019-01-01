import values from '.';

describe('values', () => {
  it('Should be a function', () => {
    expect(typeof values).toBe('function');
  });

  it('Should return any empty array for nil input', () => {
    expect(values()).toEqual([]);
    expect(values(null)).toEqual([]);
    expect(values(NaN)).toEqual([]);
    expect(values(undefined)).toEqual([]);
    expect(values(true)).toEqual([]);
    expect(values(false)).toEqual([]);
    expect(values(Symbol('foo'))).toEqual([]);
    expect(values(0)).toEqual([]);
    expect(values('')).toEqual([]);
  });

  it('Should return an arrays\'s values', () => {
    const arr = [1, 2, 3];
    expect(values(arr)).toEqual([1, 2, 3]);
    expect(values(arr)).not.toBe(arr);
    expect(values([])).toEqual([]);
  });

  it('Should return an object\'s values', () => {
    expect(values({ 0: 1, 1: 2, 2: 3 })).toEqual([1, 2, 3]);
    expect(values({ foo: 'bar' })).toEqual(['bar']);
    expect(values({})).toEqual([]);
  });

  it('Should return a strings\'s values', () => {
    expect(values('foo')).toEqual(['f', 'o', 'o']);
  });

  it('Should return a Map\'s values', () => {
    expect(values(new Map([[1, 2], ['foo', 'bar']]))).toEqual([2, 'bar']);
  });

  it('Should return a Sets\'s values', () => {
    expect(values(new Set([1, 2, 3]))).toEqual([1, 2, 3]);
  });

  it('Should return an arguments\'s values', () => {
    (function test() {
      expect(values(arguments)).toEqual([1, 2]);
    }(1, 2));
  });
});
