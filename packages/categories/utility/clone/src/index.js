const { keys } = Object;
const { toString } = Object.prototype;

/**
 * Used to get the flags from a regular expression's toString value.
 * @type {RegExp}
 */
const RE_FLAGS = /\w+$/;

/**
 * Gets a regular expression's flags. If the RegExp#flags getter is available (non-IE)
 * then it will be used, otherwise we'll parse it from the regular expressions `toString` value.
 * @param {RegExp} x The regular expression to get the flags of.
 * @returns {string} The regular expression's flags (or an empty string).
 */
const getRegExpFlags = /x/g.flags
  ? x => x.flags : /* istanbul ignore next */ x => (RE_FLAGS.exec(x) || [])[0] || '';

/**
 * Gets the constructor of `x`, but safely falls back to `fallback`
 * should the user have overridden an object's `constructor` property.
 * @param {Object} x The object to get the constructor of.
 * @param {function} fallback The fallback constructor function.
 * @returns {function} `x`'s constructor function.
 */
function constructorOf(x, fallback) {
  return typeof x.constructor === 'function' ? x.constructor : (fallback || Object);
}

/**
 * Copies all enumerable properties from `x` onto `y`.
 * @param {Object} x The source object.
 * @param {Object} y The target object.
 * @returns {Object} The passed in target object.
 */
function cloneOwnPropsFromTo(x, y) {
  const props = keys(x);

  let k;
  let i = props.length;

  while (--i >= 0) {
    k = props[i];
    y[k] = x[k]; // eslint-disable-line no-param-reassign
  }

  return y;
}

/**
 * Shallow clones an object by creating a new instance of its constructor
 * and iterating over it's own properties and copying them to the new instance.
 * @param {Object} x The object to copy.
 * @param {function=} Constructor An "override" constructor to use instead of `x`'s.
 * @returns {Object} The cloned object.
 */
function cloneObject(x, Constructor) {
  return cloneOwnPropsFromTo(x, new (Constructor || constructorOf(x))());
}

/**
 * Shallow clones an Array object.
 * @param {Array} x The Array object to copy.
 * @returns {Array} The cloned Array object.
 */
function cloneArray(x) {
  return cloneOwnPropsFromTo(x, new (constructorOf(x, Array))(x.length));
}

/**
 * Shallow clones a Map object.
 * @param {Map} x The Map object to copy.
 * @returns {Map} The cloned Map object.
 */
function cloneMap(x) {
  const cloned = cloneObject(x, constructorOf(x, Map));
  if (typeof x.forEach === 'function') x.forEach((value, key) => cloned.set(key, value));
  return cloned;
}

/**
 * Shallow clones a Set object.
 * @param {Map} x The Set object to copy.
 * @returns {Map} The cloned Set object.
 */
function cloneSet(x) {
  const cloned = cloneObject(x, constructorOf(x, Set));
  if (typeof x.forEach === 'function') x.forEach(value => cloned.add(value));
  return cloned;
}

/**
 * Shallow clones an object (without copying own properties).
 * This is used by Date, Boolean, String, etc. "primitive object" types.
 * @param {Object|Date|Boolean|String|Number} x The object to copy.
 * @returns {Object|Date|Boolean|String|Number} The cloned object.
 */
function cloneSelf(x) {
  return cloneOwnPropsFromTo(x, new (constructorOf(x))(+x));
}

/**
 * Shallow clones an object (without copying own properties).
 * This is used by Date, Boolean, String, etc. "primitive object" types.
 * @param {Object|Date|Boolean|String|Number} x The object to copy.
 * @returns {Object|Date|Boolean|String|Number} The cloned object.
 */
function cloneSimple(x) {
  return new (constructorOf(x))(x);
}

/**
 * Shallow clones a RegExp object.
 * @param {RegExp} x The RegExp object to copy.
 * @returns {RegExp} The cloned RegExp object.
 */
function cloneRegExp(x) {
  const cloned = new RegExp(x.source, getRegExpFlags(x));
  cloned.lastIndex = x.lastIndex;
  return cloned;
}

/**
 * Shallow clones a Symbol object.
 * @param {Symbol} x The Symbol object to copy.
 * @returns {Symbol} The cloned Symbol object.
 */
function cloneSymbol(x) {
  return Symbol(x.toString().slice(7, -1));
}

/**
 * Shallow clones a function (creates an object will all its enumerable properties copied).
 * @param {function} x The function to copy.
 * @returns {Object} An object containing the function's own enumerable properties.
 */
function cloneFunction(x) {
  return cloneObject(x, Object);
}

/**
 * Shallow clones an Arguments object.
 * @param {Arguments} x The object to copy.
 * @returns {Object} The cloned Arguments object.
 */
function cloneArguments(x) {
  const cloned = cloneObject(x, Object);

  // Set the length property on the object as non-enumerable,
  // like it would be if it were constructed with Arguments.
  Object.defineProperty(cloned, 'length', {
    writable: true,
    enumerable: false,
    configurable: true,
    value: x.length,
  });

  return cloned;
}

/**
 * A mapping of Object string tags to functions to clone the respective object.
 * @type {Object<function>}
 */
const CLONE_CTOR_MAP = {
  '[object Map]': cloneMap,
  '[object Set]': cloneSet,

  '[object Array]': cloneArray,
  '[object Object]': cloneObject,

  '[object Date]': cloneSelf,
  '[object Number]': cloneSelf,
  '[object String]': cloneSimple,
  '[object Boolean]': cloneSelf,

  '[object RegExp]': cloneRegExp,
  '[object Symbol]': cloneSymbol,
  '[object Function]': cloneFunction,
  '[object Arguments]': cloneArguments,

  // Fallback for all other types.
  // For example, if the user set the [Symbol.toStringTag]
  // getter on a custom class definition.
  default: cloneObject,
};

/**
 * Shallow clones an object.
 *
 * Supports cloning Array, Object, Date, RegExp, Buffer, Boolean, String, Number, Map, and Set
 * objects.
 *
 * This is loosely based on the [Structured Clone Algorithm](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).
 *
 * **With the caveats...**
 *
 * - The `lastIndex` field of RegExp objects are preserved.
 * - Functions will be cloned as plain objects who's own properties are retained.
 * - Arguments objects will be cloned as a plain objects, but will have a non-enumerable
 *   `length` property assigned to them.
 * - Cloning `Symbol` object is supported, but it creates a new Symbol with the same label value.
 *
 * @name clone
 * @param {any} x The item to clone.
 * @returns {any} The cloned version of `x`.
 *
 * @arity 1
 * @category utility
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { clone } from '@foldr/all';
 *
 * clone('foo');         // => 'foo'
 * clone({ foo: 'bar' }) // => Shallow copy of { foo: 'bar' }
 *
 * const regexp = /foo/;
 * const clonedRegExp = clone(regexp);
 *
 * console.log(regexp === clonedRegExp)               // => false
 * console.log(regexp.source === clonedRegExp.source) // => true
 */
export default function clone(x) {
  const type = typeof x;
  if (!x || (type !== 'object' && type !== 'function' && type !== 'symbol')) return x;
  return (CLONE_CTOR_MAP[toString.call(x)] || CLONE_CTOR_MAP.default)(x);
}
