# @foldr/is-finite

**The `isFinite` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/is-finite) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/is-finite/src/index.js) for details.

Determines if the given value is a finite primitive number (a number and not Infinity).

```js
import isFinite from '@foldr/is-finite';

isFinite(1);         // => true
isFinite(Infinity);  // => false
```
