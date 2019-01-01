import nth from '.';

describe('nth', () => {
  it('Should return the value at the nth index of an array', () => {
    expect(nth([5, 6, 7], 0)).toEqual(5);
    expect(nth([5, 6, 7], 1)).toEqual(6);
    expect(nth([5, 6, 7], 2)).toEqual(7);

    expect(nth(['a', 'b', 'c'], 2)).toEqual('c');
    expect(nth('hello', 2)).toEqual('l');
  });

  it('Should return the value at the nth index of an array (negative index)', () => {
    expect(nth([5, 6, 7], -0)).toEqual(5);
    expect(nth([5, 6, 7], -1)).toEqual(7);
    expect(nth([5, 6, 7], -2)).toEqual(6);
    expect(nth([5, 6, 7], -3)).toEqual(5);
    expect(nth([5, 6, 7], -4)).toEqual(undefined);

    expect(nth(['a', 'b', 'c'], -2)).toEqual('b');

    expect(nth('hello', -1)).toEqual('o');
    expect(nth('hello', -2)).toEqual('l');
    expect(nth('hello', -4)).toEqual('e');
    expect(nth('hello', -5)).toEqual('h');
  });

  it('Should return undefined if param is not an array', () => {
    expect(nth(true)).toEqual(undefined);
    expect(nth(false)).toEqual(undefined);
    expect(nth(Symbol('foo'))).toEqual(undefined);
    expect(nth(NaN)).toEqual(undefined);
    expect(nth()).toEqual(undefined);
    expect(nth(0)).toEqual(undefined);
    expect(nth(null, 2)).toEqual(undefined);
    expect(nth({}, 2)).toEqual(undefined);
  });
});
