# @foldr/is-less-than-or-equal

**The `isLessThanOrEqual` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/is-less-than-or-equal) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/is-less-than-or-equal/src/index.js) for details.

Determines if `x` is less than or equal to `y`.

```js
import isLessThanOrEqual from '@foldr/is-less-than-or-equal';

isLessThanOrEqual(1, 2);     // true
isLessThanOrEqual(2, 1);     // false
isLessThanOrEqual(2, 2);     // true
isLessThanOrEqual('a', 'b'); // true
```
