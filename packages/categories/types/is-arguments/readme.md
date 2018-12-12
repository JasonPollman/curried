# @foldr/is-arguments

**The `isArguments` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/is-arguments) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/is-arguments/src/index.js) for details.

Determines is `x` is an Arguments object.

```js
import isArguments from '@foldr/is-arguments';

(function () {
  return isArguments(arguments);
}());
// => true

isArguments([]);     // => false
isArguments('foo');  // => false
```
