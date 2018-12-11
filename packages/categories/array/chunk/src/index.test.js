import chunk from '.';

describe('chunk', () => {
  it('Should be a function', () => {
    expect(typeof chunk).toBe('function');
  });

  it('Should chunk an array (default)', () => {
    const array = [1, 2, 3, 4];
    const results = chunk(array);

    expect(results).toEqual([[1], [2], [3], [4]]);
    expect(results).not.toBe(array);
  });

  it('Should chunk an array (empty array)', () => {
    const array = [];
    const results = chunk(array, 10);

    expect(results).toEqual([]);
    expect(results).not.toBe(array);
  });

  it('Should chunk an array (n specified, 2)', () => {
    const array = [1, 2, 3, 4];
    const results = chunk(array, 2);

    expect(results).toEqual([[1, 2], [3, 4]]);
    expect(results).not.toBe(array);
  });

  it('Should chunk an array (n specified, 3)', () => {
    const array = [1, 2, 3, 4];
    const results = chunk(array, 3);

    expect(results).toEqual([[1, 2, 3], [4]]);
    expect(results).not.toBe(array);
  });

  it('Should chunk an array (n specified, 30)', () => {
    const array = [1, 2, 3, 4];
    const results = chunk(array, 30);

    expect(results).toEqual([[1, 2, 3, 4]]);
    expect(results).not.toBe(array);
  });

  it('Should chunk an array (n specified, 4)', () => {
    const array = [1, 2, 3, 4];
    const results = chunk(array, '2');

    expect(results).toEqual([[1, 2], [3, 4]]);
    expect(results).not.toBe(array);
  });

  it('Should chunk an array (n specified, 5)', () => {
    const array = [1, 2, 3, 4];
    const results = chunk(array, '0');

    expect(results).toEqual([]);
    expect(results).not.toBe(array);
  });

  it('Should chunk an array (n specified, 6)', () => {
    const array = [1, 2, 3, 4];
    const results = chunk(array, -10);

    expect(results).toEqual([]);
    expect(results).not.toBe(array);
  });

  it('Should chunk an array (n specified, 7)', () => {
    const array = [1, 2, 3, 4];
    const results = chunk(array, '0x3');

    expect(results).toEqual([[1, 2, 3], [4]]);
    expect(results).not.toBe(array);
  });
});
