# @foldr/negate

**The `negate` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/negate) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/negate/src/index.js) for details.

Creates a function that negates the result of calling `fn`.

```js
import negate from '@foldr/negate';

function truthy() {
   return true;
}

const falsy = negate(truthy);
falsy(); // => false
```
