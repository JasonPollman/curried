# @foldr/interpolate

**The `interpolate` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/interpolate) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/interpolate/src/index.js) for details.

Interpolates `string` using `options`, replacing all values with properties from `tokens`.

```js
import interpolate from '@foldr/interpolate';

const string = 'The {verb} brown {thing} jumped over the lazy brown {animal}';

interpolate({ delims: ['{', '}'] }, string, {
  verb: 'quick',
  thing: 'fox',
  animal: 'dog',
});
// => 'The quick brown fox jumped over the lazy brown dog'
```
