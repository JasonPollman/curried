# @foldr/is-greater-than

**The `isGreaterThan` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/is-greater-than) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/is-greater-than/src/index.js) for details.

Determines if `x` is greater than `y`.

```js
import isGreaterThan from '@foldr/is-greater-than';

isGreaterThan(1, 2);     // false
isGreaterThan(2, 1);     // true
isGreaterThan(2, 2);     // false
isGreaterThan('b', 'a'); // true
```
