# @foldr/trim-fx

**The `trimFx` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/trim-fx) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/trim-fx/src/index.js) for details.

Trims whitespace from the beginning and end of a string.

```js
import trimFx from '@foldr/trim-fx';

trimFx('     foobar     ');       // => 'foobar'
trimFx('/foo/bar/', '/');         // => 'foo/bar'
trimFx('<><><foobar><><>', '<>'); // => 'foobar'
```
