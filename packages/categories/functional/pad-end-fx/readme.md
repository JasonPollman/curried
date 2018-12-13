# @foldr/pad-end-fx

**The `padEndFx` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/pad-end-fx) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/pad-end-fx/src/index.js) for details.

**Functional, autocurried version of [padEnd](#pad-end).**

Pads the end of a string to the given `length` with whitespace.

If `length` is less than or equal to zero or the the original string is returned.

```js
import padEndFx from '@foldr/pad-end-fx';

padEndFx(5)('foo'); // => 'foo  ';
padEndFx(8, 'foo'); // => 'foo     ';
```
