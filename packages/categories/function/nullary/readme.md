# @foldr/nullary

**The `nullary` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/nullary) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/nullary/src/index.js) for details.

Creates a function that wraps `fn` and invokes it with up to 0 argument.

This will effectively prevent `fn` from receiving any arguments.

```js
import nullary from '@foldr/nullary';

function foo() {
   return arguments;
}

const fixed = nullary(foo);
fixed('a', 'b', 'c', 'd'); // => {}
```
