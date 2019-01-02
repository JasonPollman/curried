# @foldr/cond

**The `cond` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/cond) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/cond/src/index.js) for details.

Creates a switch like composite function from the given condition/function pairs.

Returns a composite function that will iterate over the given conditional predicate/callback
pairs and invoke `predicate`. If `predicate` returns truthy, `callback` is invoked and its
return value is returned.

Note: both `predicate` and `callback` functions are invoked with all arguments supplied
to the returned composite function and with the `this` binding available to it as well.

```js
import {
  cond,
  True,
  always,
  isEqualFx,
  isLessThanFx,
  isGreaterThanOrEqualFx,
} from '@foldr/all';

const timeOfDay = cond([
  [isLessThanFx(12), always('Morning')],
  [isEqualFx(12), always('Noon')],
  [isGreaterThanOrEqualFx(17), always('Evening')],
  [True, always('Afternoon')],
]);

timeOfDay(9);  // => Morning
timeOfDay(12); // => Noon
timeOfDay(13); // => Afternoon
timeOfDay(17); // => Evening
```
