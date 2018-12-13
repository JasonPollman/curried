# @foldr/pad-chars-start-fx

**The `padCharsStartFx` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/pad-chars-start-fx) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/pad-chars-start-fx/src/index.js) for details.

**Functional, autocurried version of [padStart](#pad-start) with custom charset.**

Pads the beginning of a string to the given `length` using `chars`.

If `length` is less than or equal to zero or the the original string is returned.

```js
import padCharsStartFx from '@foldr/pad-chars-start-fx';

padCharsStartFx('?')(5)('foo'); // => '??foo';
padCharsStartFx('?', 8, 'foo'); // => '?????foo';
```
