# @foldr/nary-fx

**The `naryFx` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/nary-fx) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/nary-fx/src/index.js) for details.

**Functional, autocurried version of [nary](#nary).**

```js
import naryFx from '@foldr/nary-fx';

function foo() {
   return arguments;
}

const fixed = naryFx(2)(foo);
fixed('a', 'b', 'c', 'd'); // => { 0: 'a', 1: 'b' }
```
