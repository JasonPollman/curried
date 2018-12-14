import mapAsync from '.';

describe('mapAsync', () => {
  it('Should be a function', () => {
    expect(typeof mapAsync).toBe('function');
  });

  it('Should perform an asynchronous map', async () => {
    const promise = mapAsync([1, 2, 3], x => Promise.resolve(x * 2));
    expect(promise.constructor).toBe(Promise);
    expect(await promise).toEqual([2, 4, 6]);
  });

  it('Should perform an asynchronous map (concurrency > items)', async () => {
    const promise = mapAsync([1, 2, 3], x => Promise.resolve(x * 2), 1e6);
    expect(promise.constructor).toBe(Promise);
    expect(await promise).toEqual([2, 4, 6]);
  });

  it('Should perform an asynchronous map with capped iteratee', async () => {
    const iteratee = (x, y, z) => {
      expect(y).toBe(undefined);
      expect(z).toBe(undefined);
      return Promise.resolve(x * 2);
    };

    const promise = mapAsync.call({ capped: true }, [1, 2, 3], iteratee);
    expect(promise.constructor).toBe(Promise);
    expect(await promise).toEqual([2, 4, 6]);
  });

  it('Should perform an asynchronous map with capped iteratee (with concurrency)', async () => {
    const iteratee = (x, y, z) => {
      expect(y).toBe(undefined);
      expect(z).toBe(undefined);
      return Promise.resolve(x * 2);
    };

    const promise = mapAsync.call({ capped: true }, [1, 2, 3], iteratee, 1e6);
    expect(promise.constructor).toBe(Promise);
    expect(await promise).toEqual([2, 4, 6]);
  });

  it('Should perform an asynchronous map (with concurrency 1)', async () => {
    const promise = mapAsync([1, 2, 3], x => Promise.resolve(x * 2), 1);

    expect(promise.constructor).toBe(Promise);
    expect(await promise).toEqual([2, 4, 6]);
  });

  it('Should perform an asynchronous map (with concurrency 2)', async () => {
    const promise = mapAsync([1, 2, 3], x => Promise.resolve(x * 2), 2);

    expect(promise.constructor).toBe(Promise);
    expect(await promise).toEqual([2, 4, 6]);
  });

  it('Should default to using `identity` if an invalid iteratee is provided', async () => {
    const promise = mapAsync([1, 2, 3], 'foobar', 2);

    expect(promise.constructor).toBe(Promise);
    expect(await promise).toEqual([1, 2, 3]);
  });

  it('Should work for large arrays (no concurrency)', async () => {
    let invocations = 0;
    const start = Date.now();

    const iteratee = async (x) => {
      ++invocations;
      await new Promise(resolve => setTimeout(resolve, 10));
      return x * 2;
    };

    const promise = mapAsync(Array(1000).fill(100), iteratee);

    expect(promise.constructor).toBe(Promise);
    expect(await promise).toEqual(Array(1000).fill(200));
    expect(invocations).toBe(1000);
    expect(Date.now() - start).toBeLessThanOrEqual(100);
  });

  it('Should work for large arrays (with concurrency)', async () => {
    let invocations = 0;
    const start = Date.now();

    const iteratee = async (x) => {
      ++invocations;
      await new Promise(resolve => setTimeout(resolve, 10));
      return x * 2;
    };

    const promise = mapAsync(Array(10).fill(100), iteratee, 1);

    expect(promise.constructor).toBe(Promise);
    expect(await promise).toEqual(Array(10).fill(200));
    expect(invocations).toBe(10);
    expect(Date.now() - start).toBeGreaterThanOrEqual(100);
  });

  it('Should work for large arrays (with concurrency, 2)', async () => {
    let invocations = 0;
    const start = Date.now();

    const iteratee = async (x) => {
      ++invocations;
      await new Promise(resolve => setTimeout(resolve, 10));
      return x * 2;
    };

    const promise = mapAsync(Array(10).fill(100), iteratee, 2);

    expect(promise.constructor).toBe(Promise);
    expect(await promise).toEqual(Array(10).fill(200));
    expect(invocations).toBe(10);
    expect(Date.now() - start).toBeLessThanOrEqual(100);
    expect(Date.now() - start).toBeGreaterThanOrEqual(50);
  });

  it('Should properly reject (no concurrency)', async () => {
    let invocations = 0;

    const iteratee = async (x, i) => {
      ++invocations;
      await new Promise(resolve => setTimeout(resolve, 10));
      if (i === 3) throw new Error('oops...');
      return x * 2;
    };

    const promise = mapAsync(Array(10).fill(100), iteratee);
    expect(promise.constructor).toBe(Promise);

    try {
      await promise;
    } catch (e) {
      expect(invocations).toBe(10);
      expect(e.message).toBe('oops...');
      return;
    }

    throw new Error('Expected test to throw...');
  });

  it('Should properly reject (with concurrency)', async () => {
    let invocations = 0;

    const iteratee = async (x, i) => {
      ++invocations;
      await new Promise(resolve => setTimeout(resolve, 10));
      if (i === 3) throw new Error('oops...');
      return x * 2;
    };

    const promise = mapAsync(Array(10).fill(100), iteratee, 10);

    expect(promise.constructor).toBe(Promise);

    try {
      await promise;
    } catch (e) {
      expect(invocations).toBe(10);
      expect(e.message).toBe('oops...');
      return;
    }

    throw new Error('Expected test to throw...');
  });

  it('Should properly reject (with concurrency < items)', async () => {
    let invocations = 0;

    const iteratee = async (x, i) => {
      ++invocations;
      await new Promise(resolve => setTimeout(resolve, 10));
      if (i === 3) throw new Error('oops...');
      return x * 2;
    };

    const promise = mapAsync(Array(10).fill(100), iteratee, 2);

    expect(promise.constructor).toBe(Promise);

    try {
      await promise;
    } catch (e) {
      expect(invocations).toBe(5);
      expect(e.message).toBe('oops...');
      return;
    }

    throw new Error('Expected test to throw...');
  });

  it('Should work with objects', async () => {
    const promise = mapAsync({ foo: 1, bar: 2, baz: 3 }, x => Promise.resolve(x * 2));
    expect(promise.constructor).toBe(Promise);
    expect(await promise).toEqual([2, 4, 6]);
  });

  it('Should work with Maps', async () => {
    const promise = mapAsync(new Map([['a', 1], ['b', 2], ['c', 3]]), x => Promise.resolve(x * 2));
    expect(promise.constructor).toBe(Promise);
    expect(await promise).toEqual([2, 4, 6]);
  });

  it('Should work with Sets', async () => {
    const promise = mapAsync(new Set([1, 2, 3]), x => Promise.resolve(x * 2));
    expect(promise.constructor).toBe(Promise);
    expect(await promise).toEqual([2, 4, 6]);
  });
});
