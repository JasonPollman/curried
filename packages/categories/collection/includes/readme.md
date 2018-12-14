# @foldr/includes

**The `includes` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/includes) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/includes/src/index.js) for details.

Determines if an object includes an item.

- For arrays, this is similar to `array.indexOf(item, index) > -1`.
- For objects, this returns `true` if object contains a key with `value`.
- For strings, this returns `true` if `value` is a substring of `x`.

```js
import includes from '@foldr/includes';

includes([1, 2, 3, 4], 1); // => true
includes([1, 2, 3], 4);    // => false
```
