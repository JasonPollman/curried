# @foldr/to-lower-case

**The `toLowerCase` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/to-lower-case) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/to-lower-case/src/index.js) for details.

Converts a string to lowercase like `String#toLowerCase`, but guards against nil input.

```js
import toLowerCase from '@foldr/to-lower-case';

toLowerCase('FooBar');  // => 'foobar'
toLowerCase('FOO_BAR'); // => 'foo_bar'
```
