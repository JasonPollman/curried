# @foldr/index-of-fx

**The `indexOfFx` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/index-of-fx) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/index-of-fx/src/index.js) for details.

**Functional, autocurried version of [indexOf](#index-of).**

This method is like [Array#indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
except that it uses [SameValueZero](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness) comparsion so it works for `NaN` values.

Finds the index of `value` in `array`.

```js
import { indexOfFx } from '@foldr/index-of';

indexOfFx(2)([1, 2, 3]);      // => 1
indexOfFx(10, [1, 2, 3]);     // => -1
indexOf(NaN)([1, NaN, 2, 3]); // => 1
```
