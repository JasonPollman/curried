/**
 * This file exports various constants that reveal
 * information about the current runtime environment.
 * Note, ignoring coverage on this file intentionally
 * since it's pretty useless to put ignore directives
 * everywhere.
 * @since 10/23/18
 * @file
 */

/* istanbul ignore file */
/* eslint-disable no-nested-ternary */

/**
 * The "global" context.
 * That is, `global` in node and `window` in the browser.
 * @type {Object}
 */
export const GLOBAL = typeof global === 'object' ? global : typeof window === 'object' ? window : this;

/**
 * True if running in Node.js, false otherwise.
 * @type {boolean}
 */
export const IS_NODE = typeof process === 'object'
  && typeof process.versions === 'object'
  && typeof process.versions.node === 'string';

/**
 * True if running in a browser, false otherwise.
 * @type {boolean}
 */
export const IS_BROWSER = typeof window === 'object';

/**
 * True if running in IE, false otherwise.
 * @type {boolean}
 */
export const IS_IE = IS_BROWSER && /Trident\/|MSIE/.test((window.navigator || {}).userAgent);
