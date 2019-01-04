/* eslint-disable no-param-reassign */

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
function getConstructorOf(x, fallback) {
  return typeof x.constructor === 'function' ? x.constructor : fallback;
}

/**
 * Shallow clones an object by creating a new instance of its constructor
 * and iterating over it's own properties and copying them to the new instance.
 * @param {Object} x The object to copy.
 * @returns {Object} The cloned object.
 */
function cloneObject(x) {
  return new (getConstructorOf(x, Object))();
}

/**
 * Shallow clones an Array object.
 * @param {Array} x The Array object to copy.
 * @returns {Array} The cloned Array object.
 */
function cloneArray(x) {
  return new (getConstructorOf(x, Array))(x.length);
}

/**
 * Shallow clones a Map object.
 * @param {Map} x The Map object to copy.
 * @returns {Map} The cloned Map object.
 */
function cloneMap(x) {
  const cloned = new (getConstructorOf(x, Map))();
  if (typeof x.forEach === 'function') x.forEach((value, key) => cloned.set(key, value));
  return cloned;
}

/**
 * Shallow clones a Set object.
 * @param {Set} x The Set object to copy.
 * @returns {Set} The cloned Set object.
 */
function cloneSet(x) {
  const cloned = new (getConstructorOf(x, Set))();
  if (typeof x.forEach === 'function') x.forEach(value => cloned.add(value));
  return cloned;
}

/**
 * Shallow clones an object (without copying own properties).
 * This is used by Date, Boolean, String, etc. "primitive object" types.
 * @param {Object|Date|Boolean|String|Number} x The object to copy.
 * @returns {Object|Date|Boolean|String|Number} The cloned object.
 */
function cloneNumericSelf(x) {
  return new (getConstructorOf(x, Object))(+x);
}

/**
 * Shallow clones an object (without copying own properties).
 * This is used by Date, Boolean, String, etc. "primitive object" types.
 * @param {Object|Date|Boolean|String|Number} x The object to copy.
 * @returns {Object|Date|Boolean|String|Number} The cloned object.
 */
function cloneStringObject(x) {
  return new (getConstructorOf(x, String))(x);
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
function cloneFunction() {
  return {};
}

/**
 * Shallow clones an Arguments object.
 * @param {Arguments} x The object to copy.
 * @returns {Object} The cloned Arguments object.
 */
function cloneArguments(x) {
  const cloned = {};

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
const CLONE_CONFIG_MAPPING = {
  '[object Map]': {
    construct: cloneMap,
    cloneOwnProps: true,
  },
  '[object Set]': {
    construct: cloneSet,
    cloneOwnProps: true,
  },
  '[object Array]': {
    construct: cloneArray,
    cloneOwnProps: true,
  },
  '[object Object]': {
    construct: cloneObject,
    cloneOwnProps: true,
  },
  '[object Date]': {
    construct: cloneNumericSelf,
    cloneOwnProps: true,
  },
  '[object Number]': {
    construct: cloneNumericSelf,
    cloneOwnProps: true,
  },
  '[object Boolean]': {
    construct: cloneNumericSelf,
    cloneOwnProps: true,
  },
  '[object String]': {
    construct: cloneStringObject,
    cloneOwnProps: false,
  },
  '[object RegExp]': {
    construct: cloneRegExp,
    cloneOwnProps: true,
  },
  '[object Symbol]': {
    construct: cloneSymbol,
    cloneOwnProps: false,
  },
  '[object Function]': {
    construct: cloneFunction,
    cloneOwnProps: true,
  },
  '[object Arguments]': {
    construct: cloneArguments,
    cloneOwnProps: true,
  },
  default: {
    construct: cloneObject,
    cloneOwnProps: true,
  },
};

/**
 * Base recursive cloning algorithm.
 * This will clone `x` based on the toString tag type of `x` and `CLONE_CONFIG_MAPPING`.
 * @param {any} x The item to clone.
 * @param {number} depth The current recursion depth (for deep clones).
 * @param {number} maxDepth The maximum clone depth (for deep clones).
 * @param {Map|null} visited A map that contains previously visited
 * items to prevent infinite recursion.
 * @returns {any} The cloned object.
 */
function cloneBase(x, depth, maxDepth, visited) {
  if (!x) return x;

  const type = typeof x;
  if (!(type === 'object' || type === 'function' || type === 'symbol')) return x;

  // Check if the object has already been cloned to prevent stack overflow.
  // Otherwise, circular objects could cause infinite recursion.
  // Safe to assume everything after this line is an object...
  if (visited) {
    const handled = visited.get(x);
    if (handled) return handled;
  }

  const config = CLONE_CONFIG_MAPPING[toString.call(x)] || CLONE_CONFIG_MAPPING.default;
  const cloned = config.construct(x);

  if (visited) visited.set(x, cloned);

  // Copy all of the child properties from the original
  // object onto the newly constructed clone.
  if (config.cloneOwnProps) {
    const props = keys(x);

    let k;
    let i = props.length;

    while (--i >= 0) {
      k = props[i];
      cloned[k] = depth >= maxDepth ? x[k] : cloneBase(x[k], depth + 1, maxDepth, visited);
    }
  }

  return cloned;
}

/**
 * Clones an object to the specified level of depth.
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
 * @name cloneDepth
 * @param {any} x The item to clone.
 * @param {number} [depth=0] The maximum depth to clone to. A `maxDepth` of zero
 * will clone only the given item, a max depth of 1 will clone an object and all it's children, etc.
 * @returns {any} The cloned version of `x`.
 *
 * @arity 2
 * @category utility
 * @publishdoc
 * @since v0.0.0
 * @export
 * @example
 *
 * import { cloneDepth } from '@foldr/all';
 *
 * cloneDepth('foo');
 * // => 'foo'
 *
 * cloneDepth({ foo: 'bar' }, 0);
 * // => Shallow copy of { foo: 'bar' }
 *
 * const object = {
 *   x: {
 *     y: {
 *       z: {},
 *     },
 *   },
 * };
 *
 * const cloned = cloneDepth(object, 2);
 * // => cloned !== object
 * // => cloned.x !== object.x
 * // => cloned.x.y !== object.x.y
 * // => cloned.x.y.z === object.x.y.z
 *
 * const regexp = /foo/ig;
 * const clonedRegExp = cloneDepth(regexp);
 *
 * console.log(regexp === clonedRegExp)               // => false
 * console.log(regexp.flags === clonedRegExp.flags)   // => true
 * console.log(regexp.source === clonedRegExp.source) // => true
 */
export default function cloneDepth(x, depth) {
  depth = depth == null ? 0 : (+depth || 0);
  if (depth < 0) depth = 0;

  return cloneBase(x, 0, depth, depth && new Map());
}
