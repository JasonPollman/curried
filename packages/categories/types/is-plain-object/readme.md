# @foldr/is-plain-object

**The `isPlainObject` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/is-plain-object) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/is-plain-object/src/index.js) for details.

Determines if the given value is a "plain object". That is, an object
that is a direct (non-inherited) instance of the Object class.

```js
import isPlainObject from '@foldr/is-plain-object';

isPlainObject({});                  // => true
isPlainObject([]);                  // => true
isPlainObject(() => {});            // => false
isPlainObject('foo');               // => false
isPlainObject(new class Foo{}());   // => false
isPlainObject(Object.create(null)); // => true
```
