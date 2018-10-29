/**
 * This file exports various constants that reveal
 * information about the current runtime environment.
 * @since 10/23/18
 * @file
 */


/**
 * The "global" context.
 * That is, `global` in node and `window` in the browser.
 * @type {Object}
 */
export const GLOBAL = typeof window === 'undefined' ? global : /* istanbul ignore next */ window;

/**
 * True if running in Node.js, false otherwise.
 * @type {boolean}
 */
export const IS_NODE = typeof process !== 'undefined'
  && typeof process.versions === 'object'
  && typeof process.versions.node === 'string';
