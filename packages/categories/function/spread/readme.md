# @foldr/spread

**The `spread` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/spread) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/spread/src/index.js) for details.

Converts a function that expects a list of arguments into a function that
expects a single array, which will be "spread" into `fn`.

This is the opposite of [rest](#rest).

```js
import spread from '@foldr/spread';

const sum = (x, y) => x + y;

function getValues() {
  return Promise.all([100, 5]);
}

getValues().then(spread(sum)); // => Resolves with `105`.
```
