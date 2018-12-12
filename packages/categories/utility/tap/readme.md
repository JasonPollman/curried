# @foldr/tap

**The `tap` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/tap) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/tap/src/index.js) for details.

Creates a function that returns the first input value to it, but also invokes `fn`
in a "fire and forget" manner.

`fn` is invoked will the context of the wrapping `tap` function and all arguments
passed to it.

This is useful for chaining promises without interrupting return values and for
performing composion with inert functions.

```js
import { tap, compose } from '@foldr/all';

const sum = (x, y) => x + y;
const double = x => x * 2;

const sumAndDouble = compose(
  double,
  tap(console.log),
  sum,
);

sumAndDouble(3, 5);
// Prints "8"
// => 16
```
