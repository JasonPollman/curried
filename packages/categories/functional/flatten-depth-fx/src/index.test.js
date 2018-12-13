import flattenDepthFx from '.';

describe('flattenDepthFx', () => {
  it('Should flatten an array', () => {
    const array = [1, 2, 3, null, undefined, {}];
    const flattend = flattenDepthFx(Infinity)(array);
    expect(flattend).toEqual(array);
  });

  it('Should flatten an array with nested arrays', () => {
    const array = [1, 2, 3, [4, 5, 6], 7, [8, [9, 10]]];
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const flattend = flattenDepthFx(Infinity)(array);
    expect(flattend).toEqual(expected);
  });

  it('Should flatten an array with nested arrays (specified depth)', () => {
    const array = [1, 2, 3, [4, 5, 6], 7, [8, [9, 10]]];
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, [9, 10]];
    const flattend = flattenDepthFx(1, array);
    expect(flattend).toEqual(expected);
  });

  it('Should flatten an array with nested arrays (specified depth, 2)', () => {
    const array = [1, 2, 3, [4, 5, 6], 7, [8, [9, 10]]];
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const flattend = flattenDepthFx(2)(array);
    expect(flattend).toEqual(expected);
  });

  it('Should flatten an array with nested arrays (specified depth, 3)', () => {
    const array = [1, 2, 3, [4, 5, 6], 7, [8, [9, [10]]]];
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, [10]];
    const flattend = flattenDepthFx(2)(array);
    expect(flattend).toEqual(expected);
  });

  it('Should flatten an array with nested arrays and undefined values', () => {
    const ogArray = [1, [2, [3, [undefined]]], null, [8, [9, 10]], '', undefined];
    const expected = [1, 2, 3, undefined, null, 8, 9, 10, '', undefined];

    const flattend = flattenDepthFx(Infinity)(ogArray);
    expect(flattend).toEqual(expected);
  });

  it('Should properly handle non-array values', () => {
    expect(flattenDepthFx(1, null)).toEqual([]);
    expect(flattenDepthFx(1, undefined)).toEqual([]);
    expect(flattenDepthFx(1, false)).toEqual([]);
    expect(flattenDepthFx(1, true)).toEqual([]);
    expect(flattenDepthFx(1, {})).toEqual([]);
  });
});
