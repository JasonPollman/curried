# @foldr/shuffle

**The `shuffle` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/shuffle) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/shuffle/src/index.js) for details.

Shuffles an array using the [Fisher-Yates](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle)
shuffle algorithm.

```js
import shuffle from '@foldr/shuffle';

shuffle([1, 2, 3, 4]); // => [2, 4, 3, 1]
shuffle([1, 2, 3, 4]); // => [3, 4, 1, 2]
```
