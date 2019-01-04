# @foldr/clone-depth-fx

**The `cloneDepthFx` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/clone-depth-fx) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/clone-depth-fx/src/index.js) for details.

**Functional, autocurried version of [cloneDepth](#clone-depth).**

Clones an object to the specified level of depth.

```js
import { cloneDepth } from '@foldr/all';

cloneDepth('foo');
// => 'foo'

cloneDepth(0)({ foo: 'bar' });
// => Shallow copy of { foo: 'bar' }

const object = {
  x: {
    y: {
      z: {},
    },
  },
};

const cloned = cloneDepth(2)(object);
// => cloned !== object
// => cloned.x !== object.x
// => cloned.x.y !== object.x.y
// => cloned.x.y.z === object.x.y.z
```
