import shuffle, { implementShuffle, cloneArray } from '.';

describe('shuffle', () => {
  it('Should shuffle an array', () => {
    const og = [1, 2, 3, 4, 5];
    const shuffled = shuffle(og);
    expect(shuffled.length).toBe(og.length);

    for (let i = 0; i < og.length; i++) {
      const index = og.indexOf(shuffled[i]);
      expect(index).toBeGreaterThan(-1);
      og.splice(index, 1);
    }
  });

  it('Should shuffle an array (length 1)', () => {
    const ogArray = [1];
    const shuffled = shuffle(ogArray);

    expect(shuffled.length).toBe(ogArray.length);
    expect(shuffled).toEqual([1]);
  });

  it('Should return an empty array if param is not an array', () => {
    const str = 'hello';

    expect(shuffle(null)).toEqual([]);
    expect(shuffle()).toEqual([]);
    expect(shuffle(str) !== str).toBe(true);
    expect(shuffle({})).toEqual([]);
  });

  it('cloneArray should shallow clone and return a new array', () => {
    const og = [1, 2, 3];
    const cloned = cloneArray(og);

    expect(cloned.length).toBe(og.length);
    expect(cloned).toEqual([1, 2, 3]);
  });

  it('implementShuffle should shuffle an array', () => {
    const og = [1, 2, 3];
    const shuffled = implementShuffle(og);
    expect(shuffled.length).toBe(og.length);

    for (let i = 0; i < og.length; i++) {
      const index = og.indexOf(shuffled[i]);
      expect(index).toBeGreaterThan(-1);
      og.splice(index, 1);
    }
  });
});
