import invokeTimes from '.';

describe('invokeTimes', () => {
  it('Should be a function', () => {
    expect(typeof invokeTimes).toBe('function');
  });

  it('Should invoke the given iteratee', (done) => {
    invokeTimes(1, done);
  });

  it('Should invoke the given iteratee with the current index', () => {
    const expectations = [0, 1, 2];
    invokeTimes(3, i => expect(i).toBe(expectations.shift()));
  });

  it('Should return an array of the values returned from invoking iteratee', () => {
    const expectations = [0, 1, 2];

    const results = invokeTimes(3, (i) => {
      expect(i).toBe(expectations.shift());
      return i * 2;
    });

    expect(results).toEqual([0, 2, 4]);
  });

  it('Should return an empty array if called with a non-function iteratee', () => {
    const results = invokeTimes(3, 'foo');
    expect(results).toEqual([]);
  });

  it('Should handle strange values of `n`', () => {
    let results = invokeTimes(NaN, () => 1);
    expect(results).toEqual([]);

    results = invokeTimes([], () => 1);
    expect(results).toEqual([]);

    results = invokeTimes(-1, () => 1);
    expect(results).toEqual([]);

    results = invokeTimes(Number.MAX_SAFE_INTEGER + 0.001, () => 1);
    expect(results).toEqual([]);

    results = invokeTimes('???', () => 1);
    expect(results).toEqual([]);

    results = invokeTimes(Symbol('foo'), () => 1);
    expect(results).toEqual([]);

    results = invokeTimes(() => {}, () => 1);
    expect(results).toEqual([]);

    results = invokeTimes(null, () => 1);
    expect(results).toEqual([]);

    results = invokeTimes(undefined, () => 1);
    expect(results).toEqual([]);

    results = invokeTimes(Infinity, () => 1);
    expect(results).toEqual([]);

    results = invokeTimes(-Infinity, () => 1);
    expect(results).toEqual([]);
  });
});
