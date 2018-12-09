import is from '@foldr/is';

const isSymbolCrossFrame = typeof Symbol === 'function' ? is(Symbol) : /* istanbul ignore next */ () => false;

/**
 * Determines if the given value is an instance of Symbol.
 *
 * @name isSymbol
 * @param {any} x The value to check.
 * @returns {boolean} True if `x` is a Symbol object, false otherwise.
 *
 * @arity 1
 * @category types
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { isSymbol } from '@foldr/all';
 *
 * isSymbol(Symbol('foo'));     // => true
 * isSymbol(Symbol.for('foo')); // => true
 * isSymbol('');                // => false
 * isSymbol(100);               // => false
 */
export default function isSymbol(x) {
  return typeof x === 'symbol' || isSymbolCrossFrame(x);
}
