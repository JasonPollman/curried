# @foldr/compose

**The `compose` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/compose) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/compose/src/index.js) for details.

*Function composition.*

Creates a new function that returns the result of invoking
the given functions in successive order from right to left,
passing the results of the previous invocation to the next.

Each function will be invoked with the `this` binding available
to the newly created function.

This function is very similar to `pipe`, except that the order
of function execution flows from right to left (bottom to top).

```js
import compose from '@foldr/compose';

function add(a, b) {
  return a + b;
}

function square(x) {
  return x * x;
}

const sumSquared = compose(square, add);
sumSquared(1, 2); // => 9
sumSquared(2, 3); // => 25
```
