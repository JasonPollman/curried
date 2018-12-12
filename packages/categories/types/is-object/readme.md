# @foldr/is-object

**The `isObject` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/is-object) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/is-object/src/index.js) for details.

Determines if the given value is an object (and not null).

This is based on the ECMA spec [Object](http://www.ecma-international.org/ecma-262/7.0/#sec-object-type) datatype specification.
That is: arrays, functions, objects, regular expressions, `new Number(0)`, and `new String('')`.

```js
import isObject from '@foldr/is-object';

isObject({});        // => true
isObject(() => {});  // => true
isObject('foo');     // => false
```
