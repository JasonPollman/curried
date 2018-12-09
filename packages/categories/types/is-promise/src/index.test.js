/**
 * Tests for the `isPromise` function.
 * @since 10/23/18
 * @file
 */

import isPromise from '.';

describe('isPromise', () => {
  it('Should be a function', () => {
    expect(typeof isPromise).toBe('function');
  });

  it('Should return `true` for Promises', () => {
    expect(isPromise(new Promise(resolve => resolve()))).toBe(true);

    const promise = new Promise((resolve, reject) => reject(new Error('oops...')));
    promise.catch(() => {});

    expect(isPromise(promise)).toBe(true);
  });

  it('Should return `true` for thenables', () => {
    const thenable = {
      then: () => {},
      catch: () => {},
    };

    expect(isPromise(thenable)).toBe(true);
  });

  it('Should return `false` otherwise', () => {
    // eslint-disable-next-line no-void
    expect(isPromise(void 0)).toBe(false);
    expect(isPromise(undefined)).toBe(false);
    expect(isPromise(0)).toBe(false);
    expect(isPromise(false)).toBe(false);
    expect(isPromise(true)).toBe(false);
    expect(isPromise(NaN)).toBe(false);
    expect(isPromise('foo')).toBe(false);
    expect(isPromise({})).toBe(false);
    expect(isPromise([])).toBe(false);
    expect(isPromise(() => {})).toBe(false);
  });
});
