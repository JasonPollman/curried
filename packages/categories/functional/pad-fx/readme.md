# @foldr/pad-fx

**The `padFx` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/pad-fx) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/pad-fx/src/index.js) for details.

**Functional, autocurried version of [pad](#pad).**

Pads both ends of a string to the given `length` with whitespace.

If the length is odd, the remaining whitespace will be
applied to the *right* side of the returned string.

If `length` is less than or equal to zero or the the original string is returned.

```js
import padFx from '@foldr/pad-fx';

padFx(5)('foo'); // => ' foo ';
padFx(8, 'foo'); // => '  foo   ';
```
