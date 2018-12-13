# @foldr/pad-chars-end-fx

**The `padCharsEndFx` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/pad-chars-end-fx) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/pad-chars-end-fx/src/index.js) for details.

**Functional, autocurried version of [padEnd](#pad-end) with custom charset.**

Pads the end of a string to the given `length` with the given set of `chars`.

If `length` is less than or equal to zero or the the original string is returned.

```js
import padCharsEndFx from '@foldr/pad-chars-end-fx';

padCharsEndFx('?')(5)('foo'); // => 'foo??';
padCharsEndFx('?', 8, 'foo'); // => 'foo?????';
```
