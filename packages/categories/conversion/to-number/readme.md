# @foldr/to-number

**The `toNumber` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/to-number) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/to-number/src/index.js) for details.

Converts `x` to a number.

If `x` is a number, it will be returned, if `x` is a string it will be coerced to
a number using `+x`. If `x` is an object, it's `valueOf` method will be called, if
available.

Binary, octal, and hexidecimal strings (i.e. '0b101') will be converted
to their number equivalent.

```js
import toNumber from '@foldr/to-number';

toNumber(0);     // => 0;
toNumber('0');   // => 0;
toNumber('1e6'); // => 1000000;

toNumber({
  value: 'string-value',
  valueOf() { return 5; },
}) // => 5
```
