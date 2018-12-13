# @foldr/pad-start-fx

**The `padStartFx` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/pad-start-fx) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/pad-start-fx/src/index.js) for details.

**Functional, autocurried version of [padStart](#pad-start).**

Pads the beginning of a string to the given `length` with whitespace.

If `length` is less than or equal to zero or the the original string is returned.

```js
import padStartFx from '@foldr/pad-start-fx';

padStartFx(5)('foo'); // => '  foo';
padStartFx(8, 'foo'); // => '     foo';
```
