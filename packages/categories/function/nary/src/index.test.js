import nary, { ARITY, SOURCE } from '.';

const TO_STRING_MATCH = /^\/\* Arity Capped to 2 \*\/\r\n/;

describe('nary', () => {
  it('Should be a function', () => {
    expect(typeof nary).toBe('function');
  });

  it('Should throw if not given a function', () => {
    expect(() => nary()).toThrow('Expected a function.');
  });

  it('Should alter the curried function\'s `toString` method', () => {
    const echo = (...args) => args;
    const fixed = nary(echo, 2);
    expect(fixed(1, 2, 3, 4)).toEqual([1, 2]);
    expect(fixed.toString()).toMatch(TO_STRING_MATCH);
  });

  it('Should limit the arity of a function', () => {
    const echo = (...args) => args;

    let fixed = nary(echo, 2);
    expect(fixed(1, 2, 3, 4)).toEqual([1, 2]);

    fixed = nary(echo, 0);
    expect(fixed(1, 2, 3, 4)).toEqual([]);

    fixed = nary(echo, -1);
    expect(fixed(1, 2, 3, 4)).toEqual([]);

    fixed = nary(echo, '3');
    expect(fixed(1, 2, 3, 4)).toEqual([1, 2, 3]);

    fixed = nary(echo, 100);
    expect(fixed(1, 2, 3, 4)).toEqual([1, 2, 3, 4]);
  });

  it('Should add the `ARITY` property to a capped function', () => {
    const echo = (a, b, c, d) => [a, b, c, d];
    const fixed = nary(echo, 2);
    expect(fixed(1, 2, 3, 4)).toEqual([1, 2, undefined, undefined]);
    expect(fixed[ARITY]).toBe(2);
  });

  it('Should add the `SOURCE` property to a capped function', () => {
    const echo = (a, b, c, d) => [a, b, c, d];
    const fixed = nary(echo, 2);
    expect(fixed[SOURCE]).toBe(echo);
  });
});
