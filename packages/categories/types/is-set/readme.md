# @foldr/is-set

**The `isSet` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/is-set) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/is-set/src/index.js) for details.

Determines if the given value is an instance of `Set`.

```js
import isSet from '@foldr/is-set';

isSet(new Set());  // => true
isSet('foo');      // => false
```
