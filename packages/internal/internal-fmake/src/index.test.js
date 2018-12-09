import fmake from '.';

describe('internal-env', () => {
  it('Should be a function', () => {
    expect(typeof fmake).toBe('function');
  });

  it('Should return a functional version of a function (curried by default)', () => {
    const fn = (x, y) => x.concat('-').concat(y);
    expect(fn('a', 'b')).toBe('a-b');
    const ffn = fmake(fn);
    expect(ffn('a')('b')).toBe('a-b');
  });

  it('Should return a functional version of a function (overriding the `curried` option)', () => {
    const fn = (x, y) => x.concat('-').concat(y);
    expect(fn('a', 'b')).toBe('a-b');

    const ffn = fmake(fn, {
      curried: false,
      signature: [1, 0],
    });

    expect(ffn('a', 'b')).toBe('b-a');
    expect(() => ffn('a')('b')).toThrow("Cannot read property 'concat' of undefined");
    expect(typeof fn.make).toBe('function');
  });

  it('Should add a `.f` property on the input function', () => {
    const fn = (x, y) => x.concat('-').concat(y);
    expect(fn('a', 'b')).toBe('a-b');
    const ffn = fmake(fn);
    expect(ffn('a')('b')).toBe('a-b');
    expect(fn.f).toBe(ffn);
    expect(typeof fn.make).toBe('function');
  });

  it('Should allow for a custom namespace', () => {
    const fn = (x, y) => x.concat('-').concat(y);
    expect(fn('a', 'b')).toBe('a-b');

    const ffn = fmake(fn, {
      namespace: 'foobar',
    });

    expect(ffn('a')('b')).toBe('a-b');
    expect(fn.foobar).toBe(ffn);
    expect(typeof fn.make).toBe('function');
  });

  it('Should return a functional version of a function (changing arguments signature)', () => {
    const fn = (x, y) => x.concat('-').concat(y);
    expect(fn('a', 'b')).toBe('a-b');

    const ffn = fmake(fn, {
      signature: [1, 0],
    });

    expect(ffn('a')('b')).toBe('b-a');
    expect(typeof fn.make).toBe('function');
  });

  it('Should set the function\'s context if `options.context` is supplied (as "config")', () => {
    function fn(x, y) {
      expect(this).toEqual({
        curried: true,
        context: 'config',
        signature: [1, 0],
        optimized: false,
      });

      return x.concat('-').concat(y);
    }

    const ffn = fmake(fn, {
      context: 'config',
      signature: [1, 0],
    });

    expect(ffn('a')('b')).toBe('b-a');
    expect(typeof fn.make).toBe('function');
  });

  it('Should set the function\'s context if `options.context` is supplied (as other)', () => {
    function fn(x, y) {
      expect(this).toBe('foo');
      return x.concat('-').concat(y);
    }

    const ffn = fmake(fn, {
      context: 'foo',
      signature: [1, 0],
    });

    expect(ffn('a')('b')).toBe('b-a');
    expect(typeof fn.make).toBe('function');
  });

  it('Should set `config.optimized` to allow for a context', () => {
    function fn(x, y) {
      expect(this).toEqual('foo');
      return x.concat('-').concat(y);
    }

    const ffn = fmake(fn, {
      signature: [0, 0],
      optimized: false,
    });

    expect(ffn.call('foo', 'a', 'b')).toBe('a-a');
    expect(typeof fn.make).toBe('function');
  });

  it('Should create a `make` function on the original function', () => {
    function fn(x, y) {
      expect(this).toEqual('foo');
      return x.concat('-').concat(y);
    }

    const ffn = fmake(fn, {
      signature: [0, 0],
      optimized: false,
    });

    expect(ffn.call('foo', 'a', 'b')).toBe('a-a');
    expect(typeof fn.make).toBe('function');

    const ffn2 = fn.make({
      signature: [0, 1],
      optimized: false,
    });

    expect(typeof ffn2).toBe('function');
    expect(ffn2.call('foo', 'a')('b')).toBe('a-b');
  });
});
