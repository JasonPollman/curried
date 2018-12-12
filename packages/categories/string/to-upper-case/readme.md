# @foldr/to-upper-case

**The `toUpperCase` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/to-upper-case) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/to-upper-case/src/index.js) for details.

Converts a string to uppercase like `String#toUpperCase`, but guards against nil input.

```js
import toUpperCase from '@foldr/to-upper-case';

toUpperCase('foobar');  // => 'FOOBAR'
toUpperCase('foo_bar'); // => 'FOO_BAR'
```
