# @foldr/is-null

**The `isNull` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/is-null) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/is-null/src/index.js) for details.

Determines if the given value is `null`.

```js
import isNull from '@foldr/is-null';

isNull(null);       // => true
isNull(undefined);  // => false
isNull('foo');      // => false
```
