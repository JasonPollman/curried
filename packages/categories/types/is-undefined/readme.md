# @foldr/is-undefined

**The `isUndefined` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/is-undefined) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/is-undefined/src/index.js) for details.

Determines if the given value is `undefined`.

```js
import isUndefined from '@foldr/is-undefined';

isUndefined(undefined);  // => true
isUndefined(null);       // => false
isUndefined('foo');      // => false
```
