# @foldr/compose-fx

**The `composeFx` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/compose-fx) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/compose-fx/src/index.js) for details.

**Functional, autocurried version of [compose](#compose).**

Creates a new function that returns the result of invoking
the two given functions in successive order from right to left
passing the results of the previous invocation to the next
function.

Each function will be invoked with the `this` binding available
to the newly created function.

This function is very similar to `pipe`, except that the order
of function execution flows from right to left (bottom to top).

Remember `f(g(x))` from high school? This is it.

```js
import composeFx from '@foldr/compose-fx';

function sum(a, b) {
  return a + b;
}

function square(x) {
  return x * x;
}

const sumSquared = composeFx(square)(sum);

sumSquared(1, 2); // => 9
sumSquared(2, 3); // => 25
```
