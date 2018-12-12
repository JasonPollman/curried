# @foldr/compact

**The `compact` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/compact) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/compact/src/index.js) for details.

Compacts an array by removing falsy values.

A *falsy* value is one for which `!value === true`.
So, `0`, `''`, `false`, `NaN`, `null`, or `undefined`.

```js
import compact from '@foldr/compact';

compact([1, null, 3, undefined]); // => [1, 3]
compact(['', 0, 4]);              // => [4]
```
