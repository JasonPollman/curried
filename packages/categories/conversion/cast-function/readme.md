# @foldr/cast-function

**The `castFunction` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/cast-function) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/cast-function/src/index.js) for details.

Converts the given value to a constant function.

If `x` is a function, it will be returned, otherwise it
will be "cast" as a function.

```js
import castFunction from '@foldr/cast-function';

castFunction(0);  // => [object Function]
castFunction({}); // => [object Function]

function foo() {}
castFunction(foo); // => foo
```
