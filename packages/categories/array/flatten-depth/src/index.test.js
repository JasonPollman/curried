import flattenDepth from '.';

describe('flattenDepth', () => {
  it('Should flatten an array', () => {
    const array = [1, 2, 3, null, undefined, {}];
    const flattend = flattenDepth(array);
    expect(flattend).toEqual(array);
  });

  it('Should flatten an array with nested arrays (default depth)', () => {
    const array = [1, 2, 3, [4, 5, 6], 7, [8, [9, 10]]];
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, [9, 10]];
    const flattend = flattenDepth(array);
    expect(flattend).toEqual(expected);
  });

  it('Should flatten an array with nested arrays (specified depth)', () => {
    const array = [1, 2, 3, [4, 5, 6], 7, [8, [9, 10]]];
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, [9, 10]];
    const flattend = flattenDepth(array, 1);
    expect(flattend).toEqual(expected);
  });

  it('Should flatten an array with nested arrays (specified depth, 2)', () => {
    const array = [1, 2, 3, [4, 5, 6], 7, [8, [9, 10]]];
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const flattend = flattenDepth(array, 2);
    expect(flattend).toEqual(expected);
  });

  it('Should flatten an array with nested arrays (specified depth, 3)', () => {
    const array = [1, 2, 3, [4, 5, 6], 7, [8, [9, [10]]]];
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, [10]];
    const flattend = flattenDepth(array, 2);
    expect(flattend).toEqual(expected);
  });

  it('Should flatten an array with nested arrays and undefined values', () => {
    const ogArray = [1, [2, [3, [undefined]]], null, [8, [9, 10]], '', undefined];
    const expected = [1, 2, 3, undefined, null, 8, 9, 10, '', undefined];

    const flattend = flattenDepth(ogArray, Infinity);
    expect(flattend).toEqual(expected);
  });

  it('Should properly handle non-array values', () => {
    expect(flattenDepth(null)).toEqual([]);
    expect(flattenDepth(undefined)).toEqual([]);
    expect(flattenDepth(false)).toEqual([]);
    expect(flattenDepth(true)).toEqual([]);
    expect(flattenDepth({})).toEqual([]);
  });
});
