# @foldr/is-error

**The `isError` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/is-error) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/is-error/src/index.js) for details.

Determines if the given value is an instance of `Error`.

```js
import isError from '@foldr/is-error';

isError(new Error());  // => true
isError('foo');        // => false
```
