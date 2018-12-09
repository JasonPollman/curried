/**
 * Tests for the `invoke` function.
 * @since 11/14/18
 * @file
 */

import invoke from '.';

describe('invoke', () => {
  it('Should be a function', () => {
    expect(typeof invoke).toBe('function');
  });

  it('Should return `undefined` if not given a path (falsy check)', () => {
    expect(invoke()).toBe(undefined);
    expect(invoke(1)).toBe(undefined);
    expect(invoke([])).toBe(undefined);
    expect(invoke(null)).toBe(undefined);
    expect(invoke(undefined)).toBe(undefined);
    expect(invoke({})).toBe(undefined);
  });

  it('Should return `undefined` if the function at `path` doesn\'t exist', () => {
    expect(invoke({}, '')).toBe(undefined);
    expect(invoke({}, 'foo')).toBe(undefined);
  });

  it('Should invoke the function at the given path (simple)', () => {
    const obj = {
      foo() {
        return 'called';
      },
    };

    expect(invoke(obj, 'foo')).toBe('called');
  });

  it('Should invoke the function at the given path (not an object)', () => {
    const obj = {
      foo: 'bar',
    };

    expect(invoke(obj, 'foo')).toBe(undefined);
  });

  it('Should invoke the function at the given path (nested)', () => {
    const obj = {
      foo: {
        bar: {
          baz() {
            expect(this).toBe(obj.foo.bar);
            return 'called';
          },
        },
      },
    };

    expect(invoke(obj, 'foo.bar.baz')).toBe('called');
  });

  it('Should retain the proper `this` context (slice array)', () => {
    const obj = {
      foo: {
        bar: {
          baz: [1, 2, 3],
        },
      },
    };

    expect(invoke(obj, 'foo.bar.baz.slice', [0, 1])).toEqual([1]);
  });

  it('Should invoke the function at the given path (complex)', () => {
    const obj = {
      foo: {
        bar: {
          baz: [
            {
              foo: {
                bar: {
                  baz() {
                    return 'called';
                  },
                },
              },
            },
          ],
        },
      },
    };

    expect(invoke(obj, 'foo.bar.baz[0].foo.bar.baz')).toBe('called');
  });
});
