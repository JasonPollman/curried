# @foldr/is-greater-than-fx

**The `isGreaterThanFx` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/is-greater-than-fx) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/is-greater-than-fx/src/index.js) for details.

**Functional, autocurried version of [isGreaterThan](#is-greater-than).**

Determines if `x` is greater than `y`.

```js
import { isGreaterThan } from '@foldr/all';

isGreaterThan(2)(1);     // false
isGreaterThan(1, 2);     // true
isGreaterThan(2, 2);     // false
isGreaterThan('a')('b'); // true
```
