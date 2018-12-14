# @foldr/pipe

**The `pipe` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/pipe) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/pipe/src/index.js) for details.

Takes in functions as parameters, and returns a function
that takes in the initial arguments to pass to the first function in the pipe chain.

After the first function in the pipe chain completes, that value is then passed to the next
function in the pipe chain, and so on.

```js
import pipe from '@foldr/pipe';

const add = (a, b) => a + b;
const mult = a => a * a;

const piped = pipe(add, mult)
piped(2, 3) // => 25;
```
