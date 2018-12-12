# @foldr/is-array

**The `isArray` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/is-array) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/is-array/src/index.js) for details.

Determines is `x` is an Array instance.

*Note, this is based on the native `Array.isArray` method.*

```js
import isArray from '@foldr/is-array';

isArray([]);     // => true
isArray('foo');  // => false
```
