import delay from '.';

describe('delay', () => {
  it('Should be a function', () => {
    expect(typeof delay).toBe('function');
  });

  it('Should return a Promise object', () => {
    expect(delay(10).constructor).toBe(Promise);
  });

  it('Should delay `delay` milliseconds', async () => {
    const start = Date.now();
    await delay(1000);

    expect(Date.now() - start).toBeGreaterThanOrEqual(1000);
    expect(Date.now() - start).toBeLessThanOrEqual(1100);
  });
});
