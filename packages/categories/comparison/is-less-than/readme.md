# @foldr/is-less-than

**The `isLessThan` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/is-less-than) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/is-less-than/src/index.js) for details.

Determines if `x` is less than `y`.

```js
import isLessThan from '@foldr/is-less-than';

isLessThan(1, 2);     // true
isLessThan(2, 1);     // false
isLessThan(2, 2);     // false
isLessThan('a', 'b'); // true
```
