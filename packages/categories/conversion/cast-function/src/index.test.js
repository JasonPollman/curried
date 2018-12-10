import castFunction from '.';

describe('castFunction', () => {
  it('Should be a function', () => {
    expect(typeof castFunction).toBe('function');
  });

  it('Should convert things to functions', () => {
    const obj = {};
    expect(typeof castFunction(obj)).toBe('function');
    expect(castFunction(obj)()).toBe(obj);
  });

  it('Should return functions', () => {
    function foo() {}
    expect(castFunction(foo)).toBe(foo);
  });
});
