import last from '.';

describe('last', () => {
  it('Should return the value at the first index of an array', () => {
    expect(last([5, 6, 7])).toEqual(7);
    expect(last(['a', 'b', 'c'])).toEqual('c');
    expect(last('hello')).toEqual('o');
  });

  it('Should return undefined if param is not an array', () => {
    expect(last(null)).toEqual(undefined);
    expect(last()).toEqual(undefined);
    expect(last({})).toEqual(undefined);
    expect(last(true)).toEqual(undefined);
    expect(last(false)).toEqual(undefined);
    expect(last(NaN)).toEqual(undefined);
    expect(last(Symbol('foo'))).toEqual(undefined);
    expect(last(undefined)).toEqual(undefined);
  });
});
