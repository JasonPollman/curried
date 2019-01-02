import cond from '.';

describe('cond', () => {
  it('Should be a function', () => {
    expect(typeof cond).toBe('function');
  });

  it('Should create a composite function', () => {
    const composite = cond();
    expect(composite()).toBe(undefined);
  });

  it('Should throw if a predicate isn\'t a function', () => {
    expect(() => cond([['foo']])).toThrow('Expected a function for conditional predicate at index 0.');
  });

  it('Should throw if a callback isn\'t a function', () => {
    expect(() => cond([[() => true, 'bar']])).toThrow('Expected a function for conditional callback at index 0.');
  });

  it('Should create a composite function that invokes the callback for a truthy predicate (1)', () => {
    const composite = cond([
      [() => true, () => 'foobar'],
    ]);

    expect(composite()).toBe('foobar');
  });

  it('Should create a composite function that invokes the callback for a truthy predicate (2)', () => {
    const composite = cond([
      [() => false, () => 'nope'],
      [() => true, () => 'foobar'],
    ]);

    expect(composite()).toBe('foobar');
  });

  it('Should create a composite function that invokes the callback for a truthy predicate (3)', () => {
    const composite = cond([
      [() => false, () => 'nope'],
      [() => true, () => 'foobar'],
      [() => true, () => 'bazbar'],
    ]);

    expect(composite()).toBe('foobar');
  });

  it('Should pass all arguments to the predicate and callback functions', () => {
    const checks = (a, b) => {
      expect(a).toBe('a');
      expect(b).toBe('b');
      return [a, b];
    };

    const throws = () => {
      throw new Error('Expected this function not to be called...');
    };

    const composite = cond([
      [(a, b) => checks(a, b) && false, throws],
      [(a, b) => checks(a, b) && true, checks],
      [(a, b) => checks(a, b) && true, throws],
    ]);

    expect(composite('a', 'b')).toEqual(['a', 'b']);
  });

  it('Should retain the this value of the composite function', () => {
    const context = { foo: 'bar' };

    function checks(a, b) {
      expect(this).toBe(context);
      expect(this.foo).toBe('bar');
      expect(a).toBe('a');
      expect(b).toBe('b');
      return [a, b];
    }

    const throws = () => {
      throw new Error('Expected this function not to be called...');
    };

    const composite = cond([
      [function predicate(a, b) { return checks.call(this, a, b) && false; }, throws],
      [function predicate(a, b) { return checks.call(this, a, b) && true; }, checks],
      [function predicate(a, b) { return checks.call(this, a, b) && true; }, throws],
    ]);

    expect(composite.call(context, 'a', 'b')).toEqual(['a', 'b']);
  });

  it('Should return undefined if no conditions are met', () => {
    const composite = cond([
      [() => false, () => 'nope'],
      [() => false, () => 'foobar'],
    ]);

    expect(composite()).toBe(undefined);
  });
});
