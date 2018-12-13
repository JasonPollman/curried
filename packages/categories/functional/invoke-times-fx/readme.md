# @foldr/invoke-times-fx

**The `invokeTimesFx` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/invoke-times-fx) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/invoke-times-fx/src/index.js) for details.

**Functional, autocurried version of [invokeTimes](#invoke-times).**

Invokes the given `iteratee` function `n` times and returns an array containing the
results from each iteration.

The iteratee function is called with the current iteration index.

```js
import invokeTimesFx from '@foldr/invoke-times-fx';

const results = invokeTimesFx(i => i * 2)(3);
// => [0, 2, 4]
```
