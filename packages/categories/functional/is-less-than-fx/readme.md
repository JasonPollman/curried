# @foldr/is-less-than-fx

**The `isLessThanFx` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/is-less-than-fx) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/is-less-than-fx/src/index.js) for details.

**Functional, autocurried version of [isLessThan](#is-less-than).**

Determines if `x` is less than `y`.

```js
import { isLessThan } from '@foldr/all';

isLessThan(2)(1);     // true
isLessThan(1, 2);     // false
isLessThan(2)(2);     // false
isLessThan('b', 'a'); // true
```
