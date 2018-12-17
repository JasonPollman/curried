# @foldr/is-greater-than-or-equal

**The `isGreaterThanOrEqual` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/is-greater-than-or-equal) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/is-greater-than-or-equal/src/index.js) for details.

Determines if `x` is greater than or equal to `y`.

```js
import isGreaterThanOrEqual from '@foldr/is-greater-than-or-equal';

isGreaterThanOrEqual(1, 2);     // false
isGreaterThanOrEqual(2, 1);     // true
isGreaterThanOrEqual(2, 2);     // true
isGreaterThanOrEqual('b', 'a'); // true
```
