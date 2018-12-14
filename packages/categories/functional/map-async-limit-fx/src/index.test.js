import mapAsyncLimitFx from '.';

describe('mapAsyncFx', () => {
  it('Should be a function', () => {
    expect(typeof mapAsyncLimitFx).toBe('function');
  });

  it('Should perform an asynchronous map', async () => {
    const promise = mapAsyncLimitFx(2)(x => Promise.resolve(x * 2))([1, 2, 3]);
    expect(promise.constructor).toBe(Promise);
    expect(await promise).toEqual([2, 4, 6]);
  });

  it('Should default to using `identity` if an invalid iteratee is provided', async () => {
    const promise = mapAsyncLimitFx(100)('foobar')([1, 2, 3]);
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

    const promise = mapAsyncLimitFx(10)(iteratee)(Array(1000).fill(100));

    expect(promise.constructor).toBe(Promise);
    expect(await promise).toEqual(Array(1000).fill(200));
    expect(invocations).toBe(1000);
  });

  it('Should properly reject (no concurrency)', async () => {
    let invocations = 0;

    const iteratee = async () => {
      ++invocations;
      await new Promise(resolve => setTimeout(resolve, 10));
      throw new Error('oops...');
    };

    const promise = mapAsyncLimitFx(-100)(iteratee)(Array(10).fill(100));
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

  it('Should work with objects', async () => {
    const promise = mapAsyncLimitFx(null)(x => Promise.resolve(x * 2))({ foo: 1, bar: 2, baz: 3 });
    expect(promise.constructor).toBe(Promise);
    expect(await promise).toEqual([2, 4, 6]);
  });

  it('Should work with Maps', async () => {
    const promise = mapAsyncLimitFx(null)(x => Promise.resolve(x * 2), new Map([['a', 1], ['b', 2], ['c', 3]]));
    expect(promise.constructor).toBe(Promise);
    expect(await promise).toEqual([2, 4, 6]);
  });

  it('Should work with Sets', async () => {
    const promise = mapAsyncLimitFx(undefined)(x => Promise.resolve(x * 2), new Set([1, 2, 3]));
    expect(promise.constructor).toBe(Promise);
    expect(await promise).toEqual([2, 4, 6]);
  });
});
