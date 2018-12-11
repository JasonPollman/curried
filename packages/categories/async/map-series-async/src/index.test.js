import mapSeriesAsync from '.';

describe('mapSeriesAsync', () => {
  it('Should be a function', () => {
    expect(typeof mapSeriesAsync).toBe('function');
  });

  it('Should perform an asynchronous mapSeries', async () => {
    const promise = mapSeriesAsync([1, 2, 3], x => Promise.resolve(x * 2));
    expect(promise.constructor).toBe(Promise);
    expect(await promise).toEqual([2, 4, 6]);
  });

  it('Should perform an asynchronous map with capped iteratee', async () => {
    const iteratee = (x, y, z) => {
      expect(y).toBe(undefined);
      expect(z).toBe(undefined);
      return Promise.resolve(x * 2);
    };

    const promise = mapSeriesAsync.call({ capped: true }, [1, 2, 3], iteratee);
    expect(promise.constructor).toBe(Promise);
    expect(await promise).toEqual([2, 4, 6]);
  });

  it('Should default to using `identity` if an invalid iteratee is provided', async () => {
    const promise = mapSeriesAsync([1, 2, 3], 'foobar', 2);

    expect(promise.constructor).toBe(Promise);
    expect(await promise).toEqual([1, 2, 3]);
  });

  it('Should work for large arrays', async () => {
    let invocations = 0;

    const iteratee = async (x) => {
      ++invocations;
      await new Promise(resolve => setTimeout(resolve, 10));
      return x * 2;
    };

    const promise = mapSeriesAsync(Array(100).fill(100), iteratee);

    expect(promise.constructor).toBe(Promise);
    expect(await promise).toEqual(Array(100).fill(200));
    expect(invocations).toBe(100);
  });

  it('Should properly reject', async () => {
    let invocations = 0;

    const iteratee = async (x, i) => {
      ++invocations;
      await new Promise(resolve => setTimeout(resolve, 10));
      if (i === 3) throw new Error('oops...');
      return x * 2;
    };

    const promise = mapSeriesAsync(Array(10).fill(100), iteratee);
    expect(promise.constructor).toBe(Promise);

    try {
      await promise;
    } catch (e) {
      expect(invocations).toBe(4);
      expect(e.message).toBe('oops...');
      return;
    }

    throw new Error('Expected test to throw...');
  });

  it('Should work with objects', async () => {
    const promise = mapSeriesAsync({ foo: 1, bar: 2, baz: 3 }, x => Promise.resolve(x * 2));
    expect(promise.constructor).toBe(Promise);
    expect(await promise).toEqual([2, 4, 6]);
  });

  it('Should work with Maps', async () => {
    const promise = mapSeriesAsync(new Map([['a', 1], ['b', 2], ['c', 3]]), x => Promise.resolve(x * 2));
    expect(promise.constructor).toBe(Promise);
    expect(await promise).toEqual([2, 4, 6]);
  });

  it('Should work with Sets', async () => {
    const promise = mapSeriesAsync(new Set([1, 2, 3]), x => Promise.resolve(x * 2));
    expect(promise.constructor).toBe(Promise);
    expect(await promise).toEqual([2, 4, 6]);
  });
});
