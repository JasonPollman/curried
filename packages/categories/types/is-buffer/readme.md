# @foldr/is-buffer

**The `isBuffer` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/is-buffer) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/is-buffer/src/index.js) for details.

Determines if the given value is an instance of `Buffer`.

```js
import isBuffer from '@foldr/is-buffer';

isBuffer(Buffer.from([])); // => true
isBuffer({});              // => false
```
