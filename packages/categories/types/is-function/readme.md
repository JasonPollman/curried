# @foldr/is-function

**The `isFunction` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/is-function) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/is-function/src/index.js) for details.

Determines if the given value is a function.

```js
import isFunction from '@foldr/is-function';

isFunction(() => {})); // => true
isFunction([]);        // => false
```
