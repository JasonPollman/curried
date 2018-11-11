/**
 * Tests for the `keys` function.
 * @since 11/10/18
 * @file
 */

import keys, { keysWithoutArgumentsLength } from '.';

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

  it('Should return an arguments\'s keys', () => {
    (function test() {
      expect(keys(arguments)).toEqual(['0', '1']);
    }(1, 2));
  });

  describe('keysWithoutArgumentsLength', () => {
    it('Should return any empty array for nil input', () => {
      expect(keysWithoutArgumentsLength()).toEqual([]);
      expect(keysWithoutArgumentsLength(null)).toEqual([]);
      expect(keysWithoutArgumentsLength(NaN)).toEqual([]);
      expect(keysWithoutArgumentsLength(undefined)).toEqual([]);
      expect(keysWithoutArgumentsLength(0)).toEqual([]);
      expect(keysWithoutArgumentsLength('')).toEqual([]);
    });

    it('Should return an arguments\'s keys', () => {
      (function test() {
        expect(keysWithoutArgumentsLength(arguments)).toEqual(['0', '1']);
      }(1, 2));
    });

    it('Should return an argument\'s keys (with enumerable length property)', () => {
      class Args {
        constructor(args) {
          [this[0], this[1]] = args;
          this.length = args.length;
        }

        // eslint-disable-next-line class-methods-use-this
        get [Symbol.toStringTag]() {
          return 'Arguments';
        }
      }

      const args = new Args([1, 2]);
      expect(keysWithoutArgumentsLength(args)).toEqual(['0', '1']);
    });

    it('Should call `keys` otherwise', () => {
      expect(keysWithoutArgumentsLength([1, 2])).toEqual(['0', '1']);
    });
  });
});
