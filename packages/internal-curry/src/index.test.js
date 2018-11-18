/**
 * Tests for the `curry` function.
 * @since 10/23/18
 * @file
 */

import curry, {
  _,
  ARITY,
  SOURCE,
  IS_CURRIED,
} from '.';

const TO_STRING_MATCH = /^\/\* Curry Wrapped \*\/\r\n/;

describe('curry', () => {
  it('Should be a function', () => {
    expect(typeof curry).toBe('function');
  });

  it('Should alter the curried function\'s `toString` method', () => {
    const source = x => x;
    expect(curry(source).toString()).toMatch(TO_STRING_MATCH);
  });

  it('Should curry a function', () => {
    const curried = curry((x, y) => x + y);
    expect(curried(1)(2)).toBe(3);
  });

  it('Should return the original function if the arity is < 1', () => {
    const fn = () => {};
    expect(curry(fn)).toBe(fn);
  });

  it('Should return the original function for nullary functions', () => {
    const source = () => 5;
    const curried = curry(source);
    expect(curried).toBe(source);
  });

  it('Should return the original function for arity values <= 0 (1)', () => {
    const source = x => x;
    const curried = curry(source, { arity: 0 });
    expect(curried).toBe(source);
  });

  it('Should return the original function for arity values <= 0 (2)', () => {
    const source = x => x;
    const curried = curry(source, { arity: -1 });
    expect(curried).toBe(source);
  });

  it('Should return the original function for arity values <= 0 (3)', () => {
    const source = x => x;
    const curried = curry(source, { arity: '-5' });
    expect(curried).toBe(source);
  });

  it('Should return the original function for arity values <= 0 (4)', () => {
    const source = x => x;
    const curried = curry(source, { arity: null });
    expect(curried).toBe(source);
  });

  it('Should apply the correct properties to the curried function', () => {
    const identity = x => x;
    const id = curry(identity);
    expect(id[IS_CURRIED]).toBe(true);
    expect(id[SOURCE]).toBe(identity);
  });

  describe('Unary optimized', () => {
    it('Should curry a function with arity 1', () => {
      const curried = curry(x => x);
      expect(curried(5)).toBe(5);
      expect(curried(_)(5)).toBe(5);
      expect(curried()()()(5)).toBe(5);
    });
  });

  describe('Binary optimized', () => {
    it('Should curry a function with arity 2', () => {
      const curried = curry((x, y) => x + y);
      expect(curried(1, 2)).toBe(3);
      expect(curried(1)(2)).toBe(3);
      expect(curried()(1)(2)).toBe(3);
      expect(curried(_)(1)(_)(2)).toBe(3);
      expect(curried(1)(_)(2)).toBe(3);
      expect(curried(2)(1)).toBe(3);
      expect(curried(_, _)(1, _)(2)).toBe(3);
      expect(curried(_, _)(_, 2)(1)).toBe(3);
    });

    it('Should curry a function with arity 2 (2)', () => {
      const curried = curry((x, y) => `${x}-${y}`);
      expect(curried()()()(1, 2)).toBe('1-2');
      expect(curried(1, 2)).toBe('1-2');
      expect(curried(1)(2)).toBe('1-2');
      expect(curried()(1)(2)).toBe('1-2');
      expect(curried(_)(1)(_)(2)).toBe('1-2');
      expect(curried(1)(_)(2)).toBe('1-2');
      expect(curried(2)(1)).toBe('2-1');
      expect(curried(_, _)(1, _)(2)).toBe('1-2');
      expect(curried(_, _)(_, 2)(1)).toBe('1-2');
    });
  });

  it('Should respect the ARITY symbol', () => {
    function fn(a, b) {
      return `${a}-${b}`;
    }

    fn[ARITY] = 1;

    const curried = curry(fn);
    expect(curried(1, 2)).toBe('1-undefined');
    expect(() => curried(1)(2)).toThrow(/is not a function/);
  });

  describe('Nary', () => {
    it('Should curry a binary function (non-optimized)', () => {
      const fn = (a, b) => `${a}-${b}`;
      const curried = curry(fn, { optimized: false });
      expect(curried(1, 2)).toBe('1-2');
      expect(curried(1)(2)).toBe('1-2');
      expect(curried()(1)(2)).toBe('1-2');
      expect(curried(1)()(2)).toBe('1-2');
      expect(curried(_)(1)(2)).toBe('1-2');
      expect(curried(1)(_)(2)).toBe('1-2');
      expect(curried(1, _)(2)).toBe('1-2');
      expect(curried(_, 2)(1)).toBe('1-2');
      expect(curried(_, 2)(1, _)).toBe('1-2');
    });

    it('Should curry a 5-ary function', () => {
      const fn = (a, b, c, d, e) => `${a}-${b}-${c}-${d}-${e}`;
      const curried = curry(fn, { optimized: true });
      expect(curried(1, 2, 3, 4, 5)).toBe('1-2-3-4-5');
      expect(curried(1, 2)(3, 4)(5)).toBe('1-2-3-4-5');
      expect(curried(1)(2)(3)(4)(5)).toBe('1-2-3-4-5');
    });

    it('Should retain context if "unoptimized" (nary)', () => {
      const obj = {};

      function fn(a, b) {
        expect(this).toBe(obj);
        return `${a}-${b}`;
      }

      const curried = curry(fn, { optimized: false });
      obj.curried = curried;

      expect(obj.curried(1, 2)).toBe('1-2');
      expect(obj.curried(1)(2)).toBe('1-2');
      expect(obj.curried()(1)(2)).toBe('1-2');
      expect(obj.curried(1)()(2)).toBe('1-2');
      expect(obj.curried(_)(1)(2)).toBe('1-2');
      expect(obj.curried(1)(_)(2)).toBe('1-2');
      expect(obj.curried(1, _)(2)).toBe('1-2');
      expect(obj.curried(_, 2)(1)).toBe('1-2');
      expect(obj.curried(_, 2)(1, _)).toBe('1-2');
    });
  });

  describe('Trinary optimized', () => {
    it('Should curry a function with arity 3', () => {
      const curried = curry((x, y, z) => `${x}-${y}-${z}`);
      expect(curried()()()(1, 2, 3)).toBe('1-2-3');
      expect(curried(_)(1, 2, 3)).toBe('1-2-3');
      expect(curried(_, _)(1, 2, 3)).toBe('1-2-3');
      expect(curried(_, _, _)(1, 2, 3)).toBe('1-2-3');
      expect(curried(1, 2, 3)).toBe('1-2-3');
      expect(curried(1)(2)(3)).toBe('1-2-3');
      expect(curried(1)()(2)()(3)).toBe('1-2-3');
      expect(curried(1, _, _)(2, _)(3)).toBe('1-2-3');
      expect(curried(1, _, 3)(2)).toBe('1-2-3');
      expect(curried(1, 2, _)(3)).toBe('1-2-3');
      expect(curried(_, 2, _)(1, _)(3)).toBe('1-2-3');
      expect(curried(_, _, 3)(1, _)(2)).toBe('1-2-3');
      expect(curried(_, 2, 3)(1, _)).toBe('1-2-3');
      expect(curried(1)(2, _)(3)).toBe('1-2-3');
      expect(curried(1)(_, 3)(2)).toBe('1-2-3');
      expect(curried(1, _, 3)(2)).toBe('1-2-3');
      expect(curried(1, 2)(3)).toBe('1-2-3');
      expect(curried(_, 2)(1, 3)).toBe('1-2-3');
      expect(curried(_, 2)()(1, 3)).toBe('1-2-3');
      expect(curried(1, _)()(2, 3)).toBe('1-2-3');
    });
  });

  describe('Quarternary optimized', () => {
    it('Should curry a function with arity 4', () => {
      const curried = curry((x, y, z, p) => `${x}-${y}-${z}-${p}`);

      expect(curried()()()(1)(2)(3)(4)).toBe('1-2-3-4');
      expect(curried(_)(_)(_)(1)(2)(3)(4)).toBe('1-2-3-4');
      expect(curried(_, _, _, _)(1)(2)(3)(4)).toBe('1-2-3-4');
      expect(curried(1, _, _, _)(2)(3)(4)).toBe('1-2-3-4');
      expect(curried(1, 2, _, _)(3)(4)).toBe('1-2-3-4');
      expect(curried(1, 2, 3, _)(4)).toBe('1-2-3-4');
      expect(curried(1, 2, 3, 4)).toBe('1-2-3-4');
      expect(curried(1, _, _, 4)(2, 3)).toBe('1-2-3-4');
      expect(curried(1, _, 3, 4)(2)).toBe('1-2-3-4');
      expect(curried(1, 2, _, 4)(3)).toBe('1-2-3-4');
      expect(curried(1, _, 3, _)(2, 4)).toBe('1-2-3-4');
      expect(curried(_, 2, _, _)(1)(3)(4)).toBe('1-2-3-4');
      expect(curried(_, 2, _, _)(1)(3)(4)).toBe('1-2-3-4');
      expect(curried(_, 2, 3, _)(1)(4)).toBe('1-2-3-4');
      expect(curried(_, 2, _, 4)(1)(3)).toBe('1-2-3-4');
      expect(curried(_, 2, 3, 4)(1)).toBe('1-2-3-4');
      expect(curried(_, _, 3, _)(1)(2)(4)).toBe('1-2-3-4');
      expect(curried(_, _, 3, 4)(1)(2)).toBe('1-2-3-4');
      expect(curried(_, _, _, 4)(1)(2)(3)).toBe('1-2-3-4');

      expect(curried(_, _, _)(1)(2)(3)(4)).toBe('1-2-3-4');
      expect(curried(1, _, _)(2)(3)(4)).toBe('1-2-3-4');
      expect(curried(_, 2, _)(1)(3)(4)).toBe('1-2-3-4');
      expect(curried(_, _, 3)(1)(2)(4)).toBe('1-2-3-4');
      expect(curried(1, 2, _)(3)(4)).toBe('1-2-3-4');
      expect(curried(1, _, 3)(2)(4)).toBe('1-2-3-4');
      expect(curried(_, 2, _)(1)(3)(4)).toBe('1-2-3-4');
      expect(curried(_, 2, 3)(1)(4)).toBe('1-2-3-4');
      expect(curried(1, 2, 3)(4)).toBe('1-2-3-4');

      expect(curried(_, _)(1, 2, 3, 4)).toBe('1-2-3-4');
      expect(curried(1, 2)(3, 4)).toBe('1-2-3-4');
      expect(curried(_, 2)(1, 3, 4)).toBe('1-2-3-4');
      expect(curried(1, _)(2, 3, 4)).toBe('1-2-3-4');
    });
  });
});
