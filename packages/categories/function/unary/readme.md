# @foldr/unary

**The `unary` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/unary) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/unary/src/index.js) for details.

Creates a function that wraps `fn` and invokes it with up to 1 argument.

Extraneous arguments passed to the wrapped function will be ignored.

```js
import unary from '@foldr/unary';

const fixed = unary(function () {
  return arguments;
});

fixed('a', 'b', 'c', 'd'); // => { 0: 'a' }
```
