/**
 * Tests for the `internal-env` file.
 * @since 10/23/18
 * @file
 */

import * as vars from '.';

describe('internal-env', () => {
  it('Should contain the correct properties', () => {
    expect(typeof vars.IS_NODE).toBe('boolean');
    expect(typeof vars.GLOBAL).toBe('object');
  });
});
