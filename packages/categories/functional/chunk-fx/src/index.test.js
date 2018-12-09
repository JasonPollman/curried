import chunkFx from '.';

describe('chunk.f', () => {
  it('Should be a function', () => {
    expect(typeof chunkFx).toBe('function');
  });

  it('Should chunk an array (empty array)', () => {
    const array = [];
    const results = chunkFx(10, array);

    expect(results).toEqual([]);
    expect(results).not.toBe(array);
  });

  it('Should chunk an array (n specified, 1)', () => {
    const array = [1, 2, 3, 4];
    const results = chunkFx(2)(array);

    expect(results).toEqual([[1, 2], [3, 4]]);
    expect(results).not.toBe(array);
  });

  it('Should chunk an array (n specified, 2)', () => {
    const array = [1, 2, 3, 4];
    const results = chunkFx(3, array);

    expect(results).toEqual([[1, 2, 3], [4]]);
    expect(results).not.toBe(array);
  });

  it('Should chunk an array (n specified, 3)', () => {
    const array = [1, 2, 3, 4];
    const results = chunkFx(30, array);

    expect(results).toEqual([[1, 2, 3, 4]]);
    expect(results).not.toBe(array);
  });

  it('Should chunk an array (n specified, 4)', () => {
    const array = [1, 2, 3, 4];
    const results = chunkFx('2')(array);

    expect(results).toEqual([[1, 2], [3, 4]]);
    expect(results).not.toBe(array);
  });

  it('Should chunk an array (n specified, 5)', () => {
    const array = [1, 2, 3, 4];
    const results = chunkFx('0')()(array);

    expect(results).toEqual([]);
    expect(results).not.toBe(array);
  });

  it('Should chunk an array (n specified, 6)', () => {
    const array = [1, 2, 3, 4];
    const results = chunkFx(-10, array);

    expect(results).toEqual([]);
    expect(results).not.toBe(array);
  });

  it('Should chunk an array (n specified, 7)', () => {
    const array = [1, 2, 3, 4];
    const results = chunkFx('0x3')(array);

    expect(results).toEqual([[1, 2, 3], [4]]);
    expect(results).not.toBe(array);
  });
});
