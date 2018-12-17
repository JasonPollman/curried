# @foldr/trim

**The `trim` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/trim) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/trim/src/index.js) for details.

Trims `chars` from the beginning and end of a string.

If `chars` is `null` or `undefined`, all whitespace (` `, `\n`, `\r`, `\t`)
will be trimmed from the string.

```js
import trim from '@foldr/trim';

trim('     foobar     ');       // => 'foobar'
trim('/foo/bar/', '/');         // => 'foo/bar'
trim('<><><foobar><><>', '<>'); // => 'foobar'
```
