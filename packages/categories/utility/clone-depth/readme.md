# @foldr/clone-depth

**The `cloneDepth` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/clone-depth) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/clone-depth/src/index.js) for details.

Clones an object to the specified level of depth.

Supports cloning Array, Object, Date, RegExp, Buffer, Boolean, String, Number, Map, and Set
objects.

This is loosely based on the [Structured Clone Algorithm](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).

**With the caveats...**

- The `lastIndex` field of RegExp objects are preserved.
- Functions will be cloned as plain objects who's own properties are retained.
- Arguments objects will be cloned as a plain objects, but will have a non-enumerable
  `length` property assigned to them.
- Cloning `Symbol` object is supported, but it creates a new Symbol with the same label value.

```js
import cloneDepth from '@foldr/clone-depth';

cloneDepth('foo');
// => 'foo'

cloneDepth({ foo: 'bar' }, 0);
// => Shallow copy of { foo: 'bar' }

const object = {
  x: {
    y: {
      z: {},
    },
  },
};

const cloned = cloneDepth(object, 2);
// => cloned !== object
// => cloned.x !== object.x
// => cloned.x.y !== object.x.y
// => cloned.x.y.z === object.x.y.z

const regexp = /foo/ig;
const clonedRegExp = cloneDepth(regexp);

console.log(regexp === clonedRegExp)               // => false
console.log(regexp.flags === clonedRegExp.flags)   // => true
console.log(regexp.source === clonedRegExp.source) // => true
```
