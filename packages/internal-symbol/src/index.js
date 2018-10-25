/**
 * The prefix to apply to *all* symbols.
 * @type {string}
 */
const prefix = '@@foldr/';

/**
 * Makes a "Symbol-like" polyfill used for internal use only.
 * Exporting this for testing purposes only.
 * @returns {function} A "SafeSymbol" factory function.
 */
export function MakeSafeSymbol() {
  let counter = 0;
  const registry = {};

  /**
   * A partial polyfill of Symbol.
   * This will only be used in the event that native Symbols aren't
   * avaiable (like in IE11, for example).
   * @param {string} label The symbol's label.
   * @returns {string} A "string" symbol.
   */
  function Symbol(label) {
    const id = '000000000'.concat((Date.now() + counter++).toString(36)).slice(-9);

    /* eslint-disable require-jsdoc */
    return {
      valueOf() {
        return `${prefix}/${id}/${label}`;
      },
      toString() {
        return this.valueOf();
      },
    };
    /* eslint-enable require-jsdoc */
  }

  /**
   * Like Symbol.for, this will return a "globally registered" symbol.
   * @param {string} label The label to get/create the symbol for.
   * @returns {string} The fake symbol value.
   */
  Symbol.for = function SymbolFor(label) {
    registry[label] = registry[label] || Symbol(label);
    return registry[label];
  };

  return Symbol;
}

const SafeSymbol = typeof Symbol === 'function' ? Symbol : MakeSafeSymbol();

/**
 * Calls Safeymbol.for to create and register a Symbol that
 * will always contain the label prefix "@@foldr/".
 * @param {string} label The symbol's label.
 * @returns {Symbol|string} The symbol or pseudo symbol.
 * @export
 */
export default function getSymbol(label) {
  return SafeSymbol.for(prefix.concat(label));
}
