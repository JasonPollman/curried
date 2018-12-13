/**
 * The @foldr library.
 * This is an automatically generated file that aggregates all of the individual
 * packages in the @foldr mono-repo and exports them as a single requirable module.
 * Only "non-internal" packages and some other useful things (such as the curry/partial
 * placeholder symbol) are exposed via this module.
 * @since 12/12/2018
 * @file
 */

import always from '@foldr/always';
import attempt from '@foldr/attempt';
import attemptFx from '@foldr/attempt-fx';
import binary from '@foldr/binary';
import castArray from '@foldr/cast-array';
import castFunction from '@foldr/cast-function';
import chunk from '@foldr/chunk';
import chunkFx from '@foldr/chunk-fx';
import clamp from '@foldr/clamp';
import clampFx from '@foldr/clamp-fx';
import compact from '@foldr/compact';
import compose from '@foldr/compose';
import composeAsync from '@foldr/compose-async';
import composeFx from '@foldr/compose-fx';
import curry from '@foldr/curry';
import delay from '@foldr/delay';
import difference from '@foldr/difference';
import differenceFx from '@foldr/difference-fx';
import escapeRegExp from '@foldr/escape-regexp';
import every from '@foldr/every';
import everyFx from '@foldr/every-fx';
import False from '@foldr/false';
import filter from '@foldr/filter';
import filterFx from '@foldr/filter-fx';
import find from '@foldr/find';
import findKey from '@foldr/find-key';
import findLast from '@foldr/find-last';
import flatten from '@foldr/flatten';
import flattenDeep from '@foldr/flatten-deep';
import flattenDeepFx from '@foldr/flatten-deep-fx';
import flattenDepth from '@foldr/flatten-depth';
import forEach from '@foldr/for-each';
import forEachRight from '@foldr/for-each-right';
import get from '@foldr/get';
import getFx from '@foldr/get-fx';
import has from '@foldr/has';
import hasFx from '@foldr/has-fx';
import head from '@foldr/head';
import identity from '@foldr/identity';
import includes from '@foldr/includes';
import indexOf from '@foldr/index-of';
import indexOfFx from '@foldr/index-of-fx';
import initial from '@foldr/initial';
import interpolate from '@foldr/interpolate';
import intersection from '@foldr/intersection';
import intersectionFx from '@foldr/intersection-fx';
import invoke from '@foldr/invoke';
import invokeFx from '@foldr/invoke-fx';
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
import last from '@foldr/last';
import map from '@foldr/map';
import mapAsync from '@foldr/map-async';
import mapAsyncFx from '@foldr/map-async-fx';
import mapAsyncLimitFx from '@foldr/map-async-limit-fx';
import mapFx from '@foldr/map-fx';
import mapKeys from '@foldr/map-keys';
import mapKeysFx from '@foldr/map-keys-fx';
import mapRight from '@foldr/map-right';
import mapRightFx from '@foldr/map-right-fx';
import mapSeriesAsync from '@foldr/map-series-async';
import mapSeriesAsyncFx from '@foldr/map-series-async-fx';
import mapValues from '@foldr/map-values';
import mapValuesAsync from '@foldr/map-values-async';
import mapValuesAsyncFx from '@foldr/map-values-async-fx';
import mapValuesFx from '@foldr/map-values-fx';
import memoize from '@foldr/memoize';
import nary from '@foldr/nary';
import naryFx from '@foldr/nary-fx';
import negate from '@foldr/negate';
import noop from '@foldr/noop';
import nth from '@foldr/nth';
import nthFx from '@foldr/nth-fx';
import nullary from '@foldr/nullary';
import omit from '@foldr/omit';
import omitFx from '@foldr/omit-fx';
import once from '@foldr/once';
import pad from '@foldr/pad';
import padCharsFx from '@foldr/pad-chars-fx';
import padFx from '@foldr/pad-fx';
import partial from '@foldr/partial';
import pick from '@foldr/pick';
import pickFx from '@foldr/pick-fx';
import pipe from '@foldr/pipe';
import random from '@foldr/random';
import rearg from '@foldr/rearg';
import reduce from '@foldr/reduce';
import reduceFx from '@foldr/reduce-fx';
import reduceRight from '@foldr/reduce-right';
import reduceRightFx from '@foldr/reduce-right-fx';
import repeat from '@foldr/repeat';
import repeatFx from '@foldr/repeat-fx';
import reverse from '@foldr/reverse';
import sample from '@foldr/sample';
import shuffle from '@foldr/shuffle';
import size from '@foldr/size';
import some from '@foldr/some';
import someFx from '@foldr/some-fx';
import stubArray from '@foldr/stub-array';
import stubObject from '@foldr/stub-object';
import stubString from '@foldr/stub-string';
import tail from '@foldr/tail';
import tap from '@foldr/tap';
import toArray from '@foldr/to-array';
import toCamelCase from '@foldr/to-camel-case';
import toFinite from '@foldr/to-finite';
import toInteger from '@foldr/to-integer';
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
import trinary from '@foldr/trinary';
import True from '@foldr/true';
import unary from '@foldr/unary';
import values from '@foldr/values';
import zip from '@foldr/zip';
import zipFx from '@foldr/zip-fx';

const { _ } = curry;
const VERSION = '0.0.0';

export {
  _,
  VERSION,
  always,
  attempt,
  attemptFx,
  binary,
  castArray,
  castFunction,
  chunk,
  chunkFx,
  clamp,
  clampFx,
  compact,
  compose,
  composeAsync,
  composeFx,
  curry,
  delay,
  difference,
  differenceFx,
  escapeRegExp,
  every,
  everyFx,
  False,
  filter,
  filterFx,
  find,
  findKey,
  findLast,
  flatten,
  flattenDeep,
  flattenDeepFx,
  flattenDepth,
  forEach,
  forEachRight,
  get,
  getFx,
  has,
  hasFx,
  head,
  identity,
  includes,
  indexOf,
  indexOfFx,
  initial,
  interpolate,
  intersection,
  intersectionFx,
  invoke,
  invokeFx,
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
  last,
  map,
  mapAsync,
  mapAsyncFx,
  mapAsyncLimitFx,
  mapFx,
  mapKeys,
  mapKeysFx,
  mapRight,
  mapRightFx,
  mapSeriesAsync,
  mapSeriesAsyncFx,
  mapValues,
  mapValuesAsync,
  mapValuesAsyncFx,
  mapValuesFx,
  memoize,
  nary,
  naryFx,
  negate,
  noop,
  nth,
  nthFx,
  nullary,
  omit,
  omitFx,
  once,
  pad,
  padCharsFx,
  padFx,
  partial,
  pick,
  pickFx,
  pipe,
  random,
  rearg,
  reduce,
  reduceFx,
  reduceRight,
  reduceRightFx,
  repeat,
  repeatFx,
  reverse,
  sample,
  shuffle,
  size,
  some,
  someFx,
  stubArray,
  stubObject,
  stubString,
  tail,
  tap,
  toArray,
  toCamelCase,
  toFinite,
  toInteger,
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
  trinary,
  True,
  unary,
  values,
  zip,
  zipFx,
};
