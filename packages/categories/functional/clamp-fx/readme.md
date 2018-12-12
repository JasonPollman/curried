# @foldr/clamp-fx

**The `clampFx` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/clamp-fx) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/clamp-fx/src/index.js) for details.

**Functional, autocurried version of [clamp](#clamp).**

Clamps a number in the range `lower` and `upper`.
If `lower` in greater than `upper`, `lower` takes precedence.

```js
import clampFx from '@foldr/clamp-fx';

clampFx(0, 10)(5);   // => 5
clampFx(0, 10)(-10); // => 0
clampFx(10)(20)(0);  // => 10
```
