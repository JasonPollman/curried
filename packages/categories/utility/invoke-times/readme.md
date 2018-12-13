# @foldr/invoke-times

**The `invokeTimes` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/invoke-times) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/invoke-times/src/index.js) for details.

Invokes the given `iteratee` function `n` times and returns an array containing the
results from each iteration.

The iteratee function is called with the current iteration index.

```js
import invokeTimes from '@foldr/invoke-times';

const results = invokeTimes(3, i => i * 2);
// => [0, 2, 4]
```
