import debounce from '.';

describe('debounce', () => {
  it('Subsequent calls should result in a returned timeout reference', () => {
    const debounced = debounce(f => f, 1000);
    const first = debounced();
    const second = debounced();

    expect(typeof first).toBe('object');
    expect(typeof second).toBe('object');
  });

  it('Should return a no-operation if a callback is not passed', () => {
    const debounced = debounce();
    const result = debounced();
    expect(result).toBe(undefined); // Due to noop
  });

  it('Should invoke fn after desired ms', async () => {
    const fn = jest.fn();
    const debounced = debounce(fn, 1000);
    const result = debounced();

    const returnsPromise = () => new Promise((resolve) => {
      setTimeout(() => {
        resolve('whatever');
      }, 1500);
    });

    await returnsPromise(); // Idling

    expect(typeof result).toBe('object');
    expect(fn.mock.calls.length).toBe(1);
  });

  it('Should default timeout to 0ms', async () => {
    const fn = jest.fn();
    const debounced = debounce(fn);
    const result = debounced();

    const returnsPromise = () => new Promise((resolve) => {
      setTimeout(() => {
        resolve('whatever');
      }, 500);
    });

    await returnsPromise(); // Idling
    expect(typeof result).toBe('object');
    expect(fn.mock.calls.length).toBe(1);
  });
});
