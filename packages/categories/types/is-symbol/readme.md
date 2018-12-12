# @foldr/is-symbol

**The `isSymbol` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/is-symbol) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/is-symbol/src/index.js) for details.

Determines if the given value is an instance of `Symbol`.

```js
import isSymbol from '@foldr/is-symbol';

isSymbol(Symbol('foo'));     // => true
isSymbol(Symbol.for('foo')); // => true
isSymbol('');                // => false
isSymbol(100);               // => false
```
