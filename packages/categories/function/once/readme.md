# @foldr/once

**The `once` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/once) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/once/src/index.js) for details.

Creates a function that wraps and limits the invocation of `fn` to one call.
If fn is invoked more than once, it returns the result from the first invocation.

```js
import once from '@foldr/once';

const onced = once(num => num * 4);

onced(4); // => 16
onced(6); // => 16
```
