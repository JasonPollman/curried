# @foldr/clamp

**The `clamp` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/clamp) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/clamp/src/index.js) for details.

Clamps a number in the range `lower` and `upper`.
If `lower` in greater than `upper`, `lower` takes precedence.

If called with only two arguments, the signature becomes: `clamp(x, upper)`.

This function will coerce `x`, `lower`, and `upper` to numbers,
so string values like `'1'` and `'0b101'` can be used.

If `x` is `NaN` it cannot be clamped, so `NaN` is returned.
If `lower` or `upper` is NaN, they are converted to `-Infinity`
and `Infinity`, respectively.

```js
import clamp from '@foldr/clamp';

clamp(5, 0, 10);   // => 5
clamp(-10, 0, 10); // => 0
clamp(20, 0, 10);  // => 10
```
