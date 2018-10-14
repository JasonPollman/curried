const flatten = require('./').default;

describe('flatten', () => {
  it('should flatten an array', () => {
    const ogArray = [1, 2, 3, null, undefined, {}];

    const flattend = flatten(ogArray);

    expect(flattend).toEqual(ogArray);
  });

  it('should flatten an array with nested arrays', () => {
    const ogArray = [1, 2, 3, [4, 5, 6], 7, [8, [9, 10]]];
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, [9, 10]];

    const flattend = flatten(ogArray);

    expect(flattend).toEqual(expected);
  });

  it('should flatten an array with nested arrays and undefined values', () => {
    const ogArray = [1, [2, [3, [undefined]]], null, [8, [9, 10]], '', undefined];
    const expected = [1, 2, [3, [undefined]], null, 8, [9, 10], '', undefined];

    const flattend = flatten(ogArray);

    expect(flattend).toEqual(expected);
  });
});
