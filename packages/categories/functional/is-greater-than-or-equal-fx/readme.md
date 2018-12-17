# @foldr/is-greater-than-or-equal-fx

**The `isGreaterThanOrEqualFx` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/is-greater-than-or-equal-fx) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/is-greater-than-or-equal-fx/src/index.js) for details.

**Functional, autocurried version of [isGreaterThanOrEqual](#is-greater-than-or-equal).**

Determines if `x` is greater than or equal to `y`.

```js
import { isGreaterThanOrEqual } from '@foldr/all';

isGreaterThanOrEqual(2)(1);     // false
isGreaterThanOrEqual(1, 2);     // true
isGreaterThanOrEqual(2)(2);     // true
isGreaterThanOrEqual('a', 'b'); // true
```
