# @foldr/is-boolean

**The `isBoolean` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/is-boolean) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/is-boolean/src/index.js) for details.

Determines if the given value is a boolean.

```js
import isBoolean from '@foldr/is-boolean';

isBoolean(true);           // => true
isBoolean(false);          // => true
isBoolean(new Boolean(1)); // => true
isBoolean('foobar');       // => false
```
