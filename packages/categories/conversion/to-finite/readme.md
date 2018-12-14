# @foldr/to-finite

**The `toFinite` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/to-finite) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/to-finite/src/index.js) for details.

Converts `x` to a finite number.

Note, this will also call `toNumber` on `x`.

```js
import toFinite from '@foldr/to-finite';

toFinite(0);         // => 0;
toFinite(Infinity);  // => Number.MAX_VALUE;
toFinite(-Infinity); // => Number.MIN_VALUE;

toFinite({ valueOf() { return 5; } }) // => 5
```
