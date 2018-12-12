# @foldr/is-weak-map

**The `isWeakMap` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/is-weak-map) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/is-weak-map/src/index.js) for details.

Determines if the given value is an instance of `WeakMap`.

```js
import isWeakMap from '@foldr/is-weak-map';

isWeakMap(new WeakMap());  // => true
isWeakMap('foo');          // => false
```
