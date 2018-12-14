# @foldr/pad-chars-fx

**The `padCharsFx` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/pad-chars-fx) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/pad-chars-fx/src/index.js) for details.

**Functional, autocurried version of [pad](#pad) with custom char set.**

Pads both ends of a string to the given `length` with the given set of `chars`.

If the length is odd, the remaining whitespace will be
applied to the *right* side of the returned string.

If `length` is less than or equal to zero or the the original string is returned.

```js
import padCharsFx from '@foldr/pad-chars-fx';

padCharsFx('<>')(5)('foo'); // => '<foo<';
padCharsFx('<>', 8, 'foo'); // => '<>foo<><';

const padZeros = padCharsFx(0);
padZeros(10, 1); // => '0000100000'
```
