# @foldr/identity

**The `identity` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/identity) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/identity/src/index.js) for details.

The identity function.

Returns the value of the first argument provided to it.

```js
import identity from '@foldr/identity';

identity(5);         // => 5
identity([1, 2, 3]); // => [1, 2, 3]
```
