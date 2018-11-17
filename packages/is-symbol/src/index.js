/**
 * Exports the `isSymbol` function.
 * @since 10/28/18
 * @file
 */

import is from '@foldr/is';

const isSymbolCrossFrame = typeof Symbol === 'function' ? is(Symbol) : /* istanbul ignore next */ () => false;

/**
 * Determines if the given item is an instance of Symbol.
 * @param {any} x The value to check.
 * @returns {boolean} True if `x` is a Symbol object, false otherwise.
 * @category types
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * isSymbol(Symbol('foo'));     // => true
 * isSymbol(Symbol.for('foo')); // => true
 * isSymbol('');                // => false
 * isSymbol(100);               // => false
 */
export default function isSymbol(x) {
  return typeof x === 'symbol' || isSymbolCrossFrame(x);
}
