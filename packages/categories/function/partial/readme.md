# @foldr/partial

**The `partial` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/partial) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/partial/src/index.js) for details.

Creates a function that "binds" arguments to the given function.

This function operates much like Function#bind, except that it does not alter the `this`
value and it provides the flexibility of using placeholder values to "skip" arguments
you don't want to apply.

```js
import partial from '@foldr/partial';

function pow(x, y) {
  return x ** y;
}

const powerOf2 = partial(pow, 2);
powerOf2(1); // => 2
powerOf2(2); // => 4
powerOf2(3); // => 8

// Using placeholders we can use the same function
// to achieve different functionality.
const square = partial(pow, _, 2);
square(1); // => 1
square(2); // => 2
square(3); // => 9
```
