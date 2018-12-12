# @foldr/is-equal

**The `isEqual` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/is-equal) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/is-equal/src/index.js) for details.

Determines is `x` is equal to `y` according to the SameValueZero comparison.

This is basically the equivalent of `===`, except that it accounts for
`NaN === NaN`, which returns `false` when using `===` and true according to the
SameValueZero comparison.

```js
import isEqual from '@foldr/is-equal';

isEqual(1, 1);         // => true
isEqual(1, '1');       // => false

isEqual('foo', 'foo'); // => true
isEqual(NaN, NaN);     // => true
isEqual(0, NaN);       // => false

isEqual({}, {});       // => false

const obj = {};
isEqual(obj, obj);     // => true
```
