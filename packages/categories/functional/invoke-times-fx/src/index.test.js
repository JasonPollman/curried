import invokeTimesFx from '.';

describe('invokeTimesFx', () => {
  it('Should be a function', () => {
    expect(typeof invokeTimesFx).toBe('function');
  });

  it('Should invoke the given iteratee', (done) => {
    invokeTimesFx(done)(1);
  });

  it('Should invoke the given iteratee with the current index', () => {
    const expectations = [0, 1, 2];
    invokeTimesFx(i => expect(i).toBe(expectations.shift()))(3);
  });

  it('Should return an array of the values returned from invoking iteratee', () => {
    const expectations = [0, 1, 2];

    const results = invokeTimesFx((i) => {
      expect(i).toBe(expectations.shift());
      return i * 2;
    })(3);

    expect(results).toEqual([0, 2, 4]);
  });

  it('Should return an empty array if called with a non-function iteratee', () => {
    const results = invokeTimesFx('foo')(3);
    expect(results).toEqual([]);
  });

  it('Should handle strange values of `n`', () => {
    let results = invokeTimesFx(x => x)(NaN);
    expect(results).toEqual([]);

    results = invokeTimesFx(x => x)([]);
    expect(results).toEqual([]);

    results = invokeTimesFx(x => x)('???');
    expect(results).toEqual([]);

    results = invokeTimesFx(x => x)(Symbol('foo'));
    expect(results).toEqual([]);

    results = invokeTimesFx(x => x)(() => {});
    expect(results).toEqual([]);

    results = invokeTimesFx(x => x)(null);
    expect(results).toEqual([]);

    results = invokeTimesFx(x => x)(undefined);
    expect(results).toEqual([]);

    results = invokeTimesFx(x => x)(Infinity);
    expect(results).toEqual([]);

    results = invokeTimesFx(x => x)(-Infinity);
    expect(results).toEqual([]);
  });
});
