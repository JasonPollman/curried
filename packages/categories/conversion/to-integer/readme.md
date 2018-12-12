# @foldr/to-integer

**The `toInteger` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/to-integer) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/to-integer/src/index.js) for details.

Converts `x` to an integer.

Internally, this calls [toNumber](#to-number).

```js
import toInteger from '@foldr/to-integer';

toInteger(1.123);     // => 1;
toInteger('1.123');   // => 1;
toInteger('1e6');     // => 1000000;

toInteger({
  value: 'string-value',
  valueOf() { return 5.123; },
}) // => 5
```
