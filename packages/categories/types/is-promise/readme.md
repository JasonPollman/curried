# @foldr/is-promise

**The `isPromise` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/is-promise) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/is-promise/src/index.js) for details.

Determines if the given value is a `Promise` object.
That is, if it's a native Promise or it's `thenable` (contains `.then` and `.catch` functions).

```js
import isPromise from '@foldr/is-promise';

isPromise(Promise.resolve()); // => true
isPromise(Promise.reject());  // => true
isPromise('foobar');          // => false
```
