# @foldr/is-less-than-or-equal-fx

**The `isLessThanOrEqualFx` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/is-less-than-or-equal-fx) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/is-less-than-or-equal-fx/src/index.js) for details.

**Functional, autocurried version of [isLessThanOrEqual](#is-less-than-or-equal).**

Determines if `x` is less than or equal to `y`.

```js
import { isLessThanOrEqual } from '@foldr/all';

isLessThanOrEqual(2)(1);     // true
isLessThanOrEqual(1, 2);     // false
isLessThanOrEqual(2)(2);     // true
isLessThanOrEqual('b', 'a'); // true
```
