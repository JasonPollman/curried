# @foldr/unique

**The `unique` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/unique) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/unique/src/index.js) for details.

Given an array, `unique` returns a new array with only unique values.

Note, this uses the [SameValueZero](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)
comparison so `NaN` will only occur once if it exists is `array` multiple times.

```js
import unique from '@foldr/unique';

unique([1, 2, 1, 2, 1, 2]);    // => [1, 2]
unique(['foo', 'bar', 'foo']); // => ['foo', 'bar']

const x = {};
const y = {};
unique([x, x, y]); [x, y];
```
