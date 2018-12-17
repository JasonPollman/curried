# @foldr/trim-chars-fx

**The `trimCharsFx` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/trim-chars-fx) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/trim-chars-fx/src/index.js) for details.

Trims `chars` from the beginning and end of a string.

```js
import trimCharsFx from '@foldr/trim-chars-fx';

trimFx(' ')('     foobar     ');  // => 'foobar'
trimFx('/')('/foo/bar/');         // => 'foo/bar'
trimFx('<>', '<><><foobar><><>'); // => 'foobar'
```
