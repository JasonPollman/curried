# @foldr/to-camel-case

**The `toCamelCase` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/to-camel-case) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/to-camel-case/src/index.js) for details.

Converts a string to camelCase.

```js
import toCamelCase from '@foldr/to-camel-case';

toCamelCase('foo bar');  // => 'fooBar'
toCamelCase('foo-bar');  // => 'fooBar'
toCamelCase('foo_bar');  // => 'fooBar'
```
