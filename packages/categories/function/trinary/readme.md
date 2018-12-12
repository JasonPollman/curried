# @foldr/trinary

**The `trinary` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/trinary) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/trinary/src/index.js) for details.

Limits the [arity](https://en.wikipedia.org/wiki/Arity) of the given function to 3.

```js
import trinary from '@foldr/trinary';

const fixed = trinary(function () {
  return arguments;
});

fixed('a', 'b', 'c', 'd'); // => { 0: 'a', 1: 'b', 2: 'c' }
```
