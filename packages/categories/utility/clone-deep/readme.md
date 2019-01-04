# @foldr/clone-deep

**The `cloneDeep` foldr method as a standalone module.**    
See the [documentation](http://foldr.com/0.0.0/clone-deep) or [package source](https:/github.com/CloudVessel/foldr/blob/master/packages/categories/clone-deep/src/index.js) for details.

Deeply clones an object.

This method is a convenience method for [cloneDepth](#clone-depth),
with the `depth` set to `Infinity`.

```js
import cloneDeep from '@foldr/clone-deep';

cloneDeep('foo');
// => 'foo'

cloneDeep({ foo: 'bar' });
// => A clone of { foo: 'bar' }

const object = {
  x: {
    y: {
      z: {},
    },
  },
};

const cloned = cloneDeep(object);
// => cloned !== object
// => cloned.x !== object.x
// => cloned.x.y !== object.x.y
// => cloned.x.y.z !== object.x.y.z
```
