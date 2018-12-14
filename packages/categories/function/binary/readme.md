# @foldr/binary

**The `binary` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/binary) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/binary/src/index.js) for details.

Limits the [arity](https://en.wikipedia.org/wiki/Arity) of the given function to 2.

```js
import binary from '@foldr/binary';

const fixed = binary(function () {
  return arguments;
});

fixed('a', 'b', 'c', 'd'); // => { 0: 'a', 1: 'b' }
```
