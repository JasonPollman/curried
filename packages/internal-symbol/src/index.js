/**
 * The prefix to apply to *all internal* symbols.
 * @type {string}
 */
const prefix = '@@foldr/';

/* eslint-disable require-jsdoc */

/**
 * Makes a "Symbol-like" polyfill used for internal use only.
 * Exporting this for testing purposes only. Note, this will only be used in
 * the event that native Symbols aren't avaiable (env is IE11, for example).
 * @returns {function} A "SafeSymbol" factory function.
 */
export function MakeSafeSymbol() {
  const registry = {};

  function Symbol(label) {
    const value = `@@${label}`;

    return {
      valueOf() {
        return value;
      },
      toString() {
        return this.valueOf();
      },
    };
  }

  Symbol.for = function SymbolFor(label) {
    registry[label] = registry[label] || Symbol(label);
    return registry[label];
  };

  return Symbol;
}

export const SafeSymbol = typeof Symbol === 'function' ? Symbol : /* istanbul ignore next */ MakeSafeSymbol();

/**
 * Calls SafeSymbol.for to get/register a symbol with the given `label`.
 * If runtime is IE11, this will create a new "fake" symbol with '@@' prefixed.
 * @param {string} label The symbol's label.
 * @returns {Symbol|string} The symbol or pseudo symbol.
 * @export
 */
export function getSymbol(label) {
  return SafeSymbol[label] || SafeSymbol.for(label);
}

/**
 * Calls SafeSymbol.for to get/register a Symbol that
 * will always contain the label prefix "@@foldr/".
 * @param {string} label The symbol's label.
 * @returns {Symbol|SafeSymbol} The Symbol or SafeSymbol instance.
 * @export
 */
export default function getInternalSymbol(label) {
  return SafeSymbol.for(prefix.concat(label));
}
