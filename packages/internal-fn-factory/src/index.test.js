/**
 * Tests for the `internal-fn-factory` file.
 * @since 10/23/18
 * @file
 */

import FunctionalFactory from '.';

describe('internal-env', () => {
  it('Should be a function', () => {
    expect(typeof FunctionalFactory).toBe('function');
  });
});
