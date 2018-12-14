# @foldr/index-of

**The `indexOf` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/index-of) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/index-of/src/index.js) for details.

This method is like [Array#indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
except that it uses [SameValueZero](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness) comparsion so it works for `NaN` values.

Finds the index of `value` in `array`.

```js
import { indexOf } from '@foldr/index-of';

indexOf([1, 2, 3], 2);        // => 1
indexOf([1, 2, 3], 10);       // => -1
indexOf([1, NaN, 2, 3], NaN); // => 1
```
