/**
 * The @foldr library.
 * This is an automatically generated file that aggregates all of the individual
 * packages in the @foldr mono-repo and exports them as a single requirable module.
 * Only "non-internal" packages and some other useful things (such as the curry/partial
 * placeholder symbol) are exposed via this module.
 * @since 2018-11-20
 * @file
 */

import attempt from '@foldr/attempt';
import binary from '@foldr/binary';
import clamp from '@foldr/clamp';
import compact from '@foldr/compact';
import compose from '@foldr/compose';
import concat from '@foldr/concat';
import constant from '@foldr/constant';
import curry from '@foldr/curry';
import debounce from '@foldr/debounce';
import escapeRegExp from '@foldr/escape-regexp';
import every from '@foldr/every';
import f from '@foldr/f';
import filter from '@foldr/filter';
import find from '@foldr/find';
import findKey from '@foldr/find-key';
import findLast from '@foldr/find-last';
import flatten from '@foldr/flatten';
import flattenDeep from '@foldr/flatten-deep';
import fold from '@foldr/fold';
import foldRight from '@foldr/fold-right';
import forEach from '@foldr/for-each';
import forEachRight from '@foldr/for-each-right';
import get from '@foldr/get';
import has from '@foldr/has';
import head from '@foldr/head';
import identity from '@foldr/identity';
import interpolate from '@foldr/interpolate';
import interpolateBraces from '@foldr/interpolate-braces';
import interpolateBrackets from '@foldr/interpolate-brackets';
import invoke from '@foldr/invoke';
import is from '@foldr/is';
import isArguments from '@foldr/is-arguments';
import isArray from '@foldr/is-array';
import isArrayLike from '@foldr/is-array-like';
import isBoolean from '@foldr/is-boolean';
import isBuffer from '@foldr/is-buffer';
import isDate from '@foldr/is-date';
import isEqual from '@foldr/is-equal';
import isError from '@foldr/is-error';
import isFinite from '@foldr/is-finite';
import isFunction from '@foldr/is-function';
import isInteger from '@foldr/is-integer';
import isMap from '@foldr/is-map';
import isNaN from '@foldr/is-nan';
import isNil from '@foldr/is-nil';
import isNull from '@foldr/is-null';
import isNumber from '@foldr/is-number';
import isObject from '@foldr/is-object';
import isObjectLike from '@foldr/is-object-like';
import isPlainObject from '@foldr/is-plain-object';
import isPromise from '@foldr/is-promise';
import isRegExp from '@foldr/is-regexp';
import isSafeInteger from '@foldr/is-safe-integer';
import isSet from '@foldr/is-set';
import isString from '@foldr/is-string';
import isSymbol from '@foldr/is-symbol';
import isUndefined from '@foldr/is-undefined';
import isWeakMap from '@foldr/is-weak-map';
import keys from '@foldr/keys';
import map from '@foldr/map';
import mapKeys from '@foldr/map-keys';
import mapRight from '@foldr/map-right';
import mapValues from '@foldr/map-values';
import memoize from '@foldr/memoize';
import nary from '@foldr/nary';
import negate from '@foldr/negate';
import noop from '@foldr/noop';
import nth from '@foldr/nth';
import nullary from '@foldr/nullary';
import omit from '@foldr/omit';
import once from '@foldr/once';
import partial from '@foldr/partial';
import pick from '@foldr/pick';
import pipe from '@foldr/pipe';
import random from '@foldr/random';
import rearg from '@foldr/rearg';
import reverse from '@foldr/reverse';
import shuffle from '@foldr/shuffle';
import size from '@foldr/size';
import some from '@foldr/some';
import stubArray from '@foldr/stub-array';
import stubObject from '@foldr/stub-object';
import stubString from '@foldr/stub-string';
import t from '@foldr/t';
import tail from '@foldr/tail';
import toCamelCase from '@foldr/to-camel-case';
import toFinite from '@foldr/to-finite';
import toKebabCase from '@foldr/to-kebab-case';
import toLowerCase from '@foldr/to-lower-case';
import toNumber from '@foldr/to-number';
import toPath from '@foldr/to-path';
import toSnakeCase from '@foldr/to-snake-case';
import toString from '@foldr/to-string';
import toStringTag from '@foldr/to-string-tag';
import toTitleCase from '@foldr/to-title-case';
import toUpperCase from '@foldr/to-upper-case';
import toUpperFirst from '@foldr/to-upper-first';
import toWords from '@foldr/to-words';
import unary from '@foldr/unary';
import unique from '@foldr/unique';
import values from '@foldr/values';
import zip from '@foldr/zip';

const { _ } = curry;
const VERSION = '0.0.0';

export {
  _,
  VERSION,
  attempt,
  binary,
  clamp,
  compact,
  compose,
  concat,
  constant,
  curry,
  debounce,
  escapeRegExp,
  every,
  f,
  filter,
  find,
  findKey,
  findLast,
  flatten,
  flattenDeep,
  fold,
  foldRight,
  forEach,
  forEachRight,
  get,
  has,
  head,
  identity,
  interpolate,
  interpolateBraces,
  interpolateBrackets,
  invoke,
  is,
  isArguments,
  isArray,
  isArrayLike,
  isBoolean,
  isBuffer,
  isDate,
  isEqual,
  isError,
  isFinite,
  isFunction,
  isInteger,
  isMap,
  isNaN,
  isNil,
  isNull,
  isNumber,
  isObject,
  isObjectLike,
  isPlainObject,
  isPromise,
  isRegExp,
  isSafeInteger,
  isSet,
  isString,
  isSymbol,
  isUndefined,
  isWeakMap,
  keys,
  map,
  mapKeys,
  mapRight,
  mapValues,
  memoize,
  nary,
  negate,
  noop,
  nth,
  nullary,
  omit,
  once,
  partial,
  pick,
  pipe,
  random,
  rearg,
  reverse,
  shuffle,
  size,
  some,
  stubArray,
  stubObject,
  stubString,
  t,
  tail,
  toCamelCase,
  toFinite,
  toKebabCase,
  toLowerCase,
  toNumber,
  toPath,
  toSnakeCase,
  toString,
  toStringTag,
  toTitleCase,
  toUpperCase,
  toUpperFirst,
  toWords,
  unary,
  unique,
  values,
  zip,
};
