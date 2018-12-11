import mapValuesAsyncFx from '.';

describe('mapValuesAsyncFx', () => {
  it('Should be a function', () => {
    expect(typeof mapValuesAsyncFx).toBe('function');
  });

  it('Should perform an asynchronous mapValues', async () => {
    const object = {
      foo: 1,
      bar: 2,
    };

    const iteratee = (value, key) => Promise.resolve({ value, key });
    const promise = mapValuesAsyncFx(iteratee)(object);

    expect(promise.constructor).toBe(Promise);
    expect(await promise).toEqual({
      foo: { value: 1, key: undefined },
      bar: { value: 2, key: undefined },
    });
  });

  it('Should perform an asynchronous mapValues (2)', async () => {
    const object = {
      foo: 1,
      bar: 2,
    };

    const iteratee = async (value, key) => {
      await new Promise(resolve => setTimeout(resolve, 200));
      return Promise.resolve({ value, key });
    };

    const promise = mapValuesAsyncFx(iteratee)(object);

    expect(promise.constructor).toBe(Promise);
    expect(await promise).toEqual({
      foo: { value: 1, key: undefined },
      bar: { value: 2, key: undefined },
    });
  });

  it('Should use `identity` if iteratee isn\'t a function', async () => {
    const object = {
      foo: 1,
      bar: 2,
    };

    const promise = mapValuesAsyncFx('foobar')(object);

    expect(promise.constructor).toBe(Promise);
    expect(await promise).toEqual({
      foo: 1,
      bar: 2,
    });
  });

  it('Should work for arrays', async () => {
    const object = [1, 2, 3];

    const iteratee = async (value, key) => {
      await new Promise(resolve => setTimeout(resolve, 200));
      return Promise.resolve({ value, key });
    };

    const promise = mapValuesAsyncFx(iteratee)(object);

    expect(promise.constructor).toBe(Promise);
    expect(await promise).toEqual({
      0: { value: 1, key: undefined },
      1: { value: 2, key: undefined },
      2: { value: 3, key: undefined },
    });
  });

  it('Should work for Maps', async () => {
    const object = new Map([[0, 1], [1, 2], [2, 3]]);

    const iteratee = async (value, key) => {
      await new Promise(resolve => setTimeout(resolve, 200));
      return Promise.resolve({ value, key });
    };

    const promise = mapValuesAsyncFx(iteratee, object);

    expect(promise.constructor).toBe(Promise);
    expect(await promise).toEqual({
      0: { value: 1, key: undefined },
      1: { value: 2, key: undefined },
      2: { value: 3, key: undefined },
    });
  });

  it('Should work for Sets', async () => {
    const object = new Set([1, 2, 3]);

    const iteratee = async (value, key) => {
      await new Promise(resolve => setTimeout(resolve, 200));
      return Promise.resolve({ value, key });
    };

    const promise = mapValuesAsyncFx(iteratee)(object);

    expect(promise.constructor).toBe(Promise);
    expect(await promise).toEqual({
      0: { value: 1, key: undefined },
      1: { value: 2, key: undefined },
      2: { value: 3, key: undefined },
    });
  });
});
