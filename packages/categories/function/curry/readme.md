# @foldr/curry

**The `curry` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/curry) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/curry/src/index.js) for details.

[Curries](https://en.wikipedia.org/wiki/Currying) a function.

```js
import { curry, _ } from '@foldr/all';

const curried = curry((x, y, z) => x + y + z);
curried()        // => curried
curried(1)       // => [object Function]
curried(1)(2)    // => [object Function]
curried(1)(2)(3) // => 6
curried(1, 2)(3) // => 6
curried(1)(2, 3) // => 6
curried(1, 2, 3) // => 6

// You can also use partial application (placeholders)...

const triples = curry((a, b, c) => [a, b, c]);
triples(_, 2, 3)(1)    // => [1, 2, 3]
triples(_, _, 3)(1)(2) // => [1, 2, 3]
triples(1)(_)(2)(_)(3) // => [1, 2, 3]
triples(1)(_, 3)(2)    // => [1, 2, 3]
triples(_, 2)(1)(3)    // => [1, 2, 3]
```
