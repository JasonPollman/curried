# @foldr/repeat-fx

**The `repeatFx` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/repeat-fx) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/repeat-fx/src/index.js) for details.

**Functional, autocurried version of [repeat](#repeat).**

Repeats a string `n` times.

```js
import { repeat } from '@foldr/all';

repeat(10)(' ');   // => '          '
repeat(3, 'foo-'); // => 'foo-foo-foo'
```
