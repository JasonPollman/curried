# @foldr/nary

**The `nary` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/nary) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/nary/src/index.js) for details.

Limits the [arity](https://en.wikipedia.org/wiki/Arity) of the given function to the given value.

```js
import nary from '@foldr/nary';

function foo() {
   return arguments;
}

const fixed = nary(foo, 2);
fixed('a', 'b', 'c', 'd'); // => { 0: 'a', 1: 'b' }
```
