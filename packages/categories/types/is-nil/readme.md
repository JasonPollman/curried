# @foldr/is-nil

**The `isNil` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/is-nil) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/is-nil/src/index.js) for details.

Determines if the given value is either `undefined` or `null`.

```js
import isNil from '@foldr/is-nil';

isNil(null);       // => true
isNil(undefined);  // => true
isNil('foo');      // => false
```
