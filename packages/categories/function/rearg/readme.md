# @foldr/rearg

**The `rearg` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/rearg) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/rearg/src/index.js) for details.

Creates a function that "rearranges" the arguments signature of `fn`.

This will return a wrapper function that, when called, will call `fn`
with arguments rearranged by the index mapping of the `signature` array.

```js
import rearg from '@foldr/rearg';

function foo(x, y, z) {
  return x + y + z;
}

const rearged = rearg(foo, [1, 0, 2]);

foo('a', 'b', 'c'); // => 'abc';
rearged('a', 'b', 'c'); // => 'bac';

const rearged2 = rearg(foo, [0, 0, 0]);

foo('a', 'b', 'c'); // => 'abc';
rearged('a', 'b', 'c'); // => 'aaa';
```
