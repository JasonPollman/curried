# @foldr/clone

**The `clone` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/clone) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/clone/src/index.js) for details.

Shallow clones an object.

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
import clone from '@foldr/clone';

clone('foo');         // => 'foo'
clone({ foo: 'bar' }) // => Shallow copy of { foo: 'bar' }

const regexp = /foo/;
const clonedRegExp = clone(regexp);

console.log(regexp === clonedRegExp)               // => false
console.log(regexp.source === clonedRegExp.source) // => true
```
