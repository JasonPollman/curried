import reduceRight from '.';

const sum = (prev, curr) => prev + curr;

describe('reduceRight', () => {
  it('Should be a function', () => {
    expect(typeof reduceRight).toBe('function');
  });

  it('Should reduce an array (empty input)', () => {
    expect(reduceRight(null, sum, 0)).toEqual(0);
  });

  it('Should work for capped functions', () => {
    const context = {
      capped: true,
    };

    function iteratee(x) {
      expect(arguments.length).toBe(2);
      return x + 1;
    }

    expect(reduceRight.call(context, [1, 2, 3], iteratee, 0)).toEqual(3);
  });

  it('Should reduce an array (1)', () => {
    expect(reduceRight([1, 2, 3, 4], sum, 0)).toEqual(10);
  });

  it('Should reduce an array (2)', () => {
    const arr = [1, 2, 3, 4];
    const keys = [];

    const reducer = (acc, val, key, array) => {
      expect(array).toBe(arr);
      keys.push(key);
      acc.push(val * 2);
      return acc;
    };

    expect(reduceRight(arr, reducer, [])).toEqual([8, 6, 4, 2]);
    expect(keys).toEqual([3, 2, 1, 0]);
  });

  it('Should reduce an object (1)', () => {
    const obj = { foo: 1, bar: 2 };
    expect(reduceRight(obj, sum, 0)).toEqual(3);
  });

  it('Should reduce an object (2)', () => {
    const obj = { foo: 1, bar: 2, baz: 3 };
    const keys = [];

    const reducer = (acc, val, key, collection) => {
      expect(collection).toBe(obj);
      keys.push(key);
      acc.push(val * 2);
      return acc;
    };

    expect(reduceRight(obj, reducer, [])).toEqual([6, 4, 2]);
    expect(keys).toEqual(['baz', 'bar', 'foo']);
  });
});
