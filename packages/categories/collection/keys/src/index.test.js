import keys, { removeLengthFromKeys } from '.';

describe('keys', () => {
  it('Should be a function', () => {
    expect(typeof keys).toBe('function');
  });

  it('Should return any empty array for nil input', () => {
    expect(keys()).toEqual([]);
    expect(keys(null)).toEqual([]);
    expect(keys(NaN)).toEqual([]);
    expect(keys(undefined)).toEqual([]);
    expect(keys(0)).toEqual([]);
    expect(keys('')).toEqual([]);
  });

  it('Should return an arrays\'s keys', () => {
    expect(keys([1, 2, 3])).toEqual(['0', '1', '2']);
    expect(keys([])).toEqual([]);
  });

  it('Should return an object\'s keys', () => {
    expect(keys({ 0: 1, 1: 2, 2: 3 })).toEqual(['0', '1', '2']);
    expect(keys({ foo: 'bar' })).toEqual(['foo']);
    expect(keys({})).toEqual([]);
  });

  it('Should return a strings\'s keys', () => {
    expect(keys('foo')).toEqual(['0', '1', '2']);
  });

  it('Should return a Map\'s keys', () => {
    expect(keys(new Map([[1, 2], ['foo', 'bar']]))).toEqual([1, 'foo']);
  });

  it('Should return a Sets\'s keys', () => {
    expect(keys(new Set([1, 2, 3]))).toEqual([0, 1, 2]);
  });

  it('Should return an arguments\'s keys', () => {
    (function test() {
      expect(keys(arguments)).toEqual(['0', '1']);
    }(1, 2));
  });

  describe('removeLengthFromKeys', () => {
    it('Should remove the `length` property from a keyset', () => {
      expect(removeLengthFromKeys([])).toEqual([]);
      expect(removeLengthFromKeys(['length'])).toEqual([]);
      expect(removeLengthFromKeys([1, 2, 3, 'length', 4])).toEqual([1, 2, 3, 4]);
    });
  });
});
